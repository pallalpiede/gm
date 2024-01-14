(function () {
    (function () {
        var window = this,
            doc = window.document,
            toString = Object.prototype.toString,
            func = "function",
            string = "string",
            array = "array",
            object = "object",
            isTouchDevice = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            changeKeypress = /webkit|msie/i.exec(window.navigator.userAgent),
            SELECTOR = /^([#]?)([a-z][\w\-]*)$/,
            mouseButtons = ["", "LEFT", "CENTER", "RIGHT"],
            eventQueue = [],
            currentCanvas = null,
            curDrag = null,
            inDrag = false,
            hash = "Cevent" + (new Date).getTime(),
            uuid = 0,
            Cache = {},
            requestAnimFrame = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, fps) {
                    window.setTimeout(callback, 1e3 / 60)
                }
            }(),
            is = function (obj, type) {
                return toString.call(obj).slice(8, -1).toLowerCase() == type
            },
            each = function (iterable, callback) {
                var value, i = 0;
                if (is(iterable, array)) {
                    for (;
                        (value = iterable[i++]) && callback(value, i) !== false;) { }
                }
            },
            addEventListener = function () {
                if (document.addEventListener) {
                    return function (elem, type, callback) {
                        elem.addEventListener(type, callback, false)
                    }
                } else {
                    return function (elem, type, callback) {
                        elem.attachEvent("on" + type, function (e) {
                            var e = e || event;
                            e.preventDefault = e.preventDefault || function () {
                                this.returnValue = false
                            };
                            e.stopPropagation = e.stopPropagation || function () {
                                this.cancelBubble = true
                            };
                            return callback(e)
                        })
                    }
                }
            }(),
            indexOf = function () {
                if ([].indexOf) {
                    return function (a, e) {
                        return a.indexOf(e)
                    }
                } else {
                    return function (a, e) {
                        for (var i = 0, l = a.length; i < l; i++) {
                            if (e === a[i]) {
                                return i
                            }
                        }
                        return -1
                    }
                }
            }(),
            findPosition = function (obj) {
                var curleft = 0,
                    curtop = 0;
                if (obj.offsetParent) {
                    do {
                        curleft += obj.offsetLeft;
                        curtop += obj.offsetTop
                    } while (obj = obj.offsetParent)
                }
                return {
                    x: curleft,
                    y: curtop
                }
            },
            data = function (obj, name, data) {
                var id = obj[hash],
                    cache;
                if (!id) {
                    id = obj[hash] = ++uuid
                }
                cache = Cache[id];
                if (!cache) {
                    cache = Cache[id] = {}
                }
                if (name && data !== undefined) {
                    cache[name] = data
                }
                return name ? cache[name] : cache
            },
            removeData = function (obj, name) {
                if (!obj) {
                    return
                }
                var id = obj[hash];
                if (id && Cache[id]) {
                    if (name) {
                        delete Cache[id][name]
                    } else {
                        delete Cache[id]
                    }
                }
            },
            addEvent = function (obj, eventType, fn) {
                var objData = data(obj),
                    handlers;
                each(eventType.split(" "), function (type) {
                    handlers = objData[type] = objData[type] || [];
                    handlers.push(fn)
                })
            },
            handleEvent = function (obj, handlers, context, event) {
                var handler, i = 0,
                    ret = true;
                context.ctx.save();
                context.ctx.scale(context.__zoom, context.__zoom);
                for (; handler = handlers[i++];) {
                    if (handler.call(obj, context, event) === false) {
                        ret = false
                    }
                }
                context.ctx.restore();
                if (!ret) {
                    event.preventDefault()
                }
                return ret
            },
            colectEvent = function (shape, eventType, e, self) {
                var shapeHandlers = data(shape, eventType),
                    globalHandlers = data(self.cv, eventType);
                if (shapeHandlers && shapeHandlers.length) {
                    eventQueue.push(shape, shapeHandlers)
                }
                if (globalHandlers && globalHandlers.length) {
                    eventQueue.push(shape, globalHandlers)
                }
            },
            fireEvents = function (context, event) {
                var i, l;
                context.clear();
                for (i = 0, l = eventQueue.length; i < l; i += 2) {
                    handleEvent(eventQueue[i], eventQueue[i + 1], context, event)
                }
                eventQueue = [];
                context.draw()
            },
            TOUCH_MOVE, findObj = function (e, self) {
                e.preventDefault();
                e = e.touches ? e.touches[0] : e;
                self.x = ((e && e.pageX - self._pos.x + 1 || window.event.offsetX + 1) - 1) / self.__zoom;
                self.y = ((e && e.pageY - self._pos.y + 1 || window.event.offsetY + 1) - 1) / self.__zoom;
                var shape, shapes = self._shapes,
                    i = shapes.length;
                while (shape = shapes[--i]) {
                    if (shape.hitTest(self)) {
                        return shape
                    }
                }
            },
            mousemove = function (self, curHover) {
                return function (e) {
                    var _e = e.touches ? e.touches[0] : e;
                    e.preventDefault();
                    self.lastX = self.x;
                    self.lastY = self.y;
                    self.x = ((e && _e.pageX - self._pos.x + 1 || window.event.offsetX + 1) - 1) / self.__zoom;
                    self.y = ((e && _e.pageY - self._pos.y + 1 || window.event.offsetY + 1) - 1) / self.__zoom;
                    if (!self._clicked) {
                        curHover = self._curHover = findObj(e, self)
                    }
                    if (self._curHover) {
                        colectEvent(self._curHover, "mousemove", e, self)
                    }
                    TOUCH_MOVE = true;
                    if (eventQueue.length) {
                        fireEvents(self, e)
                    }
                }
            },
            mousedown = function (self) {
                return function (e) {
                    var curHover = self._curHover = findObj(e, self),
                        which = mouseButtons[e.which];
                    self._clicked = true;
                    currentCanvas = self.cv;
                    self[which] = true;
                    if (curHover) {
                        colectEvent(curHover, "mousedown", e, self);
                        if (curHover !== self.focused) {
                            colectEvent(curHover, "focus", e, self);
                            if (self.focused) {
                                colectEvent(self.focused, "blur", e, self)
                            }
                        }
                        self.focused = curHover
                    } else if (self.focused) {
                        colectEvent(self.focused, "blur", e, self);
                        self.focused = null
                    }
                    if (eventQueue.length) {
                        fireEvents(self, e)
                    }
                    self.LEFT = self.CENTER = self.RIGHT = undefined
                }
            },
            mouseup = function (self) {
                return function (e) {
                    self._clicked = false;
                    if (self._curHover) {
                        colectEvent(self._curHover, "mouseup", e, self);
                        if (!TOUCH_MOVE && isTouchDevice) {
                            colectEvent(self._curHover, "click", e, self)
                        }
                    }
                    TOUCH_MOVE = false;
                    if (eventQueue.length) {
                        fireEvents(self, e)
                    }
                    self._curHover = null
                }
            },
            click = function (self) {
                return function (e) {
                    if (self._curHover) {
                        colectEvent(self._curHover, "click", e, self)
                    }
                    if (eventQueue.length) {
                        fireEvents(self, e)
                    }
                }
            },
            dblclick = function (self) {
                return function (e) {
                    if (self._curHover) {
                        colectEvent(self._curHover, "dblclick", e, self)
                    }
                    if (eventQueue.length) {
                        fireEvents(self, e)
                    }
                }
            },
            keyevent = function () {
                var hotkeys = {
                    specialKeys: {
                        27: "esc",
                        9: "tab",
                        32: "space",
                        13: "return",
                        8: "backspace",
                        145: "scroll",
                        20: "capslock",
                        144: "numlock",
                        19: "pause",
                        45: "insert",
                        36: "home",
                        46: "del",
                        35: "end",
                        33: "pageup",
                        34: "pagedown",
                        37: "left",
                        38: "up",
                        39: "right",
                        40: "down",
                        109: "-",
                        112: "f1",
                        113: "f2",
                        114: "f3",
                        115: "f4",
                        116: "f5",
                        117: "f6",
                        118: "f7",
                        119: "f8",
                        120: "f9",
                        121: "f10",
                        122: "f11",
                        123: "f12",
                        191: "/",
                        96: "0",
                        97: "1",
                        98: "2",
                        99: "3",
                        100: "4",
                        101: "5",
                        102: "6",
                        103: "7",
                        104: "8",
                        105: "9",
                        106: "*",
                        107: "+",
                        110: ".",
                        111: "/",
                        187: "+",
                        189: "-"
                    },
                    shiftNums: {
                        "`": "~",
                        1: "!",
                        2: "@",
                        3: "#",
                        4: "$",
                        5: "%",
                        6: "^",
                        7: "&",
                        8: "*",
                        9: "(",
                        0: ")",
                        "-": "_",
                        "=": "+",
                        ";": ":",
                        "'": '"',
                        ",": "<",
                        ".": ">",
                        "/": "?",
                        "\\": "|"
                    }
                },
                    code;
                return function (type, self) {
                    var eventObj = data(self.cv, type, {}),
                        Handlers = data(eventObj);
                    return function (e) {
                        if (currentCanvas !== self.cv && !self.__globalkeyevents) {
                            return
                        }
                        code = type == "keydown" ? e.keyCode : code;
                        var special = hotkeys.specialKeys[code],
                            character = special || String.fromCharCode(code || e.charCode).toLowerCase(),
                            modif = "",
                            handlers;
                        if (e.altKey) {
                            modif += "alt+"
                        }
                        if (e.ctrlKey || e.metaKey) {
                            modif += "ctrl+"
                        }
                        if (e.shiftKey) {
                            modif += "shift+"
                        }
                        handlers = Handlers[modif + character] || Handlers[modif + hotkeys.shiftNums[character]] || modif === "shift+" && Handlers[hotkeys.shiftNums[character]] || Handlers.any;
                        if (handlers) {
                            var ret = handleEvent(self, handlers, self, e);
                            if (!self.play) {
                                self.redraw()
                            }
                            return ret
                        }
                    }
                }
            }(),
            Cevent = function (canvas, shapes) {
                canvas = is(canvas, string) ? doc.getElementById(canvas) : canvas;
                if (canvas.getContext || window.G_vmlCanvasManager) {
                    return new Cevent.fn.init(canvas, shapes)
                } else {
                    throw Error("Your browser sucks")
                }
            };
        Cevent.all_instances = [];
        Cevent.forse_redraw = function () {
            for (var i = 0; i < Cevent.all_instances.length; i++) {
                Cevent.all_instances[i].redraw()
            }
        };
        Cevent.fn = Cevent.prototype = {
            init: function (cv, shapes) {
                this.cv = cv;
                if (!cv.getContext) {
                    G_vmlCanvasManager.initElement(cv)
                }
                this.ctx = cv.getContext("2d");
                this.width = cv.width;
                this.height = cv.height;
                this.__zoom = 1;
                this.x = 0;
                this.y = 0;
                if (!this.cv[hash]) {
                    Cevent.all_instances.push(this);
                    this._shapes = data(cv, "shapes", []);
                    this._last = null;
                    this.calcCanvasPosition();
                    if (!/mobile/i.exec(navigator.userAgent)) {
                        addEventListener(cv, "mousemove", mousemove(this), false);
                        addEventListener(cv, "dblclick", dblclick(this), false);
                        addEventListener(cv, "click", click(this), false);
                        addEventListener(cv, "mouseup", mouseup(this), false);
                        addEventListener(cv, "mousedown", mousedown(this), false);
                        addEventListener(doc, "keydown", keyevent("keydown", this), false);
                        addEventListener(doc, "keyup", keyevent("keyup", this), false);
                        if (!changeKeypress) {
                            addEventListener(doc, "keypress", keyevent("keypress", this), false)
                        }
                        if ("onselectstart" in cv) {
                            cv.onselectstart = function () {
                                return false
                            };
                            cv.onmousedown = function () {
                                return false
                            }
                        }
                    }
                    if (isTouchDevice) {
                        addEventListener(cv, "touchmove", mousemove(this), false);
                        addEventListener(cv, "touchend", mouseup(this), false);
                        addEventListener(cv, "touchstart", mousedown(this), false)
                    }
                } else {
                    this._shapes = data(cv, "shapes");
                    this._last = shapes
                }
            },
            calcCanvasPosition: function () {
                this._pos = findPosition(this.cv);
                return this
            },
            get: function (i) {
                i = i < 0 ? this._shapes.length + i : i;
                return this._shapes[i] || this._shapes
            },
            getAll: function (selector) {
                var ret = [],
                    match = SELECTOR.exec(selector),
                    type, name;
                if (selector === "*") {
                    ret = this._shapes.slice(0)
                } else if (match) {
                    type = match[1];
                    name = match[2];
                    each(this._shapes, function (shape) {
                        if (shape[type] === name) {
                            ret.push(shape)
                        }
                    })
                }
                return ret
            },
            remove: function (shape) {
                var i = indexOf(this._shapes, shape);
                localDatas["levelData"][shape.layer][shape.row][shape.col] = 0;
                if (i >= 0) {
                    this._shapes.splice(i, 1)
                }
                return i
            },
            add: function (shape) {
                localDatas["levelData"][shape.layer][shape.row][shape.col] = shape.type;
                this._shapes.push(shape);
                this._last = shape;
                return this
            },
            addId: function (id) {
                var match = SELECTOR.exec(id),
                    shapes = this._last;
                if (match && !match[1] && shapes) {
                    if (!shapes.length) {
                        shapes["#"] = id
                    } else {
                        each(shapes, function (shape) {
                            shape["#"] = id
                        })
                    }
                }
                return this
            },
            removeId: function () {
                var shapes = this._last;
                if (shapes && !shapes.length) {
                    shapes["#"] = ""
                } else {
                    each(shapes, function (shape) {
                        shape["#"] = ""
                    })
                }
                return this
            },
            find: function (selector) {
                var ret = this.getAll(selector);
                return Cevent(this.cv, ret.length == 1 ? ret[0] : ret)
            },
            attr: function (attrs, value) {
                var shapes = this._last;
                if (shapes && shapes.attr) {
                    shapes.attr(attrs, value)
                } else {
                    each(shapes, function (shape) {
                        shape.attr(attrs, value)
                    })
                }
                return this
            },
            rotate: function (angle) {
                return this.attr({
                    rotation: angle
                })
            },
            translate: function (x, y) {
                return this.attr({
                    tx: x,
                    ty: y
                })
            },
            scale: function (x, y) {
                return this.attr({
                    scaleX: x,
                    scaleY: y
                })
            },
            skewX: function (val) {
                return this.attr({
                    skewX: val
                })
            },
            skewY: function (val) {
                return this.attr({
                    skewY: val
                })
            },
            zoomTo: function (value) {
                if (is(value, "number")) {
                    this.__zoom = value
                }
                return this
            },
            zoomIn: function () {
                this.zoomTo(this.__zoom + .1);
                return false
            },
            zoomOut: function () {
                this.zoomTo(this.__zoom - .1);
                return false
            },
            setGlobalKeyEvents: function (v) {
                this.__globalkeyevents = v;
                return this
            },
            bind: function (name, fn, obj) {
                var shapes = obj || this._last,
                    type;
                if (is(name, string) && is(fn, object)) {
                    for (type in fn) {
                        this[type](name, fn[type])
                    }
                } else if (is(name, object)) {
                    for (type in name) {
                        this[type](name[type])
                    }
                } else if (shapes && !shapes.length) {
                    addEvent(shapes, name, fn)
                } else {
                    each(shapes, function (shape) {
                        addEvent(shape, name, fn)
                    })
                }
                return this
            },
            beforeDraw: function (fn) {
                if (is(fn, func)) {
                    this.__beforeDraw = fn
                }
                return this
            },
            afterDraw: function (fn) {
                if (is(fn, func)) {
                    this.__afterDraw = fn
                }
                return this
            },
            clear: function (x, y, width, height) {
                x = x || 0;
                y = y || 0;
                width = width || this.cv.width;
                height = height || this.cv.height;
                this.ctx.clearRect(x, y, width / this.__zoom, height / this.__zoom);
                return this
            },
            draw: function () {
                var shape, i = 0,
                    shapes = this._shapes,
                    tmpCanvas = this.tmpCanvas = this.tmpCanvas || document.createElement("canvas"),
                    ctx = tmpCanvas.getContext("2d"),
                    layer = 0;
                this.ctx.canvas.width = this.ctx.canvas.width;
                tmpCanvas.width = this.ctx.canvas.width || 10;
                tmpCanvas.height = this.ctx.canvas.height || 10;
                if (!tmpCanvas.width && !tmpCanvas.height) return;
                ctx.save();
                Cevent.__zoom = this.__zoom;
                this.__beforeDraw && this.__beforeDraw();
                for (; shape = shapes[i++];) {
                    if (layer !== shape.layer) {
                        layer = shape.layer;
                        this.ctx.drawImage(tmpCanvas, 0, 0);
                        tmpCanvas.width = tmpCanvas.width
                    }
                    ctx.globalAlpha = shape.alpha;
                    shape.draw(ctx)
                }
                this.ctx.drawImage(tmpCanvas, 0, 0);
                Cevent.__zoom = 1;
                ctx.restore();
                return this
            },
            redraw: function () {
                return this.clear().draw()
            },
            loop: function (fn) {
                var self = this,
                    tdata = data(this.cv),
                    play_flag;
                if (is(fn, func)) {
                    tdata.loop = fn
                }
                fn = tdata.loop;
                play_flag = this.play = ++uuid;
                (function () {
                    if (play_flag !== self.play) {
                        return
                    }
                    requestAnimFrame(arguments.callee);
                    self.redraw();
                    if (fn) {
                        self.ctx.save();
                        fn.call(self, self);
                        self.ctx.restore()
                    }
                    self.frameCount += 1
                })();
                return this
            },
            frameCount: 0,
            stop: function () {
                delete this.play;
                return this
            }
        };
        Cevent.fn.init.prototype = Cevent.prototype;
        Cevent.addEventListener = addEventListener;

        function makeLive(selector, fn) {
            var match = SELECTOR.exec(selector);
            return function (self, e) {
                if (match && this[match[1]] === match[2] || selector === "*") {
                    fn.call(this, self, e)
                }
            }
        }
        each("mousemove mouseover mouseout mousedown mouseup click dblclick focus blur".split(" "), function (name) {
            Cevent.fn[name] = function (fn, match) {
                var obj;
                if (is(match, func)) {
                    fn = makeLive(fn, match);
                    obj = this.cv
                }
                return this.bind(name, fn, obj)
            }
        });
        each("keydown keypress keyup".split(" "), function (name) {
            Cevent.fn[name] = function (combi, fn) {
                if (!fn && is(combi, func)) {
                    fn = combi;
                    combi = "any"
                }
                combi = (combi + "").toLowerCase();
                return this.bind(combi, fn, data(this.cv, name))
            }
        });
        if (changeKeypress) {
            Cevent.fn.keypress = Cevent.fn.keydown
        }
        Cevent.fn.drag = function (handlers) {
            var start, move, end, self, objs = [],
                dragid = "Cevent-drag" + hash,
                shapes = this._last;
            if (shapes && !shapes.length) {
                shapes = [shapes]
            }
            each(shapes, function (shape) {
                if (!data(shape, dragid)) {
                    data(shape, dragid, true);
                    objs.push(shape)
                }
            });
            self = Cevent(this.cv, objs);
            if (handlers) {
                start = handlers.start;
                move = handlers.move;
                end = handlers.end
            }
            self.bind({
                mousedown: function (c, e) {
                    if (c.LEFT) {
                        curDrag = this
                    }
                },
                mousemove: function (c, e) {
                    if (this === curDrag) {
                        this.rmove(c.x - c.lastX, c.y - c.lastY);
                        if (!inDrag) {
                            inDrag = true;
                            if (start) {
                                start.call(this, c, e)
                            }
                        }
                        if (move) {
                            move.call(this, c, e)
                        }
                    }
                },
                mouseup: function (c, e) {
                    if (this === curDrag) {
                        curDrag = inDrag = null;
                        if (end) {
                            end.call(this, c, e)
                        }
                    }
                }
            });
            return this
        };
        Cevent.registre = Cevent.register = function (name, Class) {
            name = name.toLowerCase();
            var constName = name.charAt(0).toUpperCase() + name.substring(1);
            this[constName] = Class;
            this.prototype[name] = function () {
                var shape = Class.apply(this, arguments);
                shape[""] = name;
                this._shapes.push(shape);
                this._last = shape;
                return this
            }
        };
        addEventListener(doc, "mousedown", function (e) {
            var target = e.target || e.srcElement;
            target = target.nodeName == "OBJECT" ? target.parentNode : target;
            if (!target[hash]) {
                currentCanvas = target
            }
        }, false);
        window.Cevent = Cevent
    })();
    (function () {
        var initializing = false;
        this.Class = function () { };
        Class.extend = function (prop) {
            var _super = this.prototype,
                prototype, name, tmp, ret;
            initializing = true;
            prototype = new this;
            initializing = false;
            for (name in prop) {
                prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" ? function (name, fn) {
                    return function () {
                        tmp = this._super;
                        this._super = _super[name];
                        ret = fn.apply(this, arguments);
                        this._super = tmp;
                        return ret
                    }
                }(name, prop[name]) : prop[name]
            }

            function Class(args) {
                if (this instanceof arguments.callee) {
                    if (!initializing && this.init) this.init.apply(this, args.callee ? args : arguments)
                } else return new arguments.callee(arguments)
            }
            Class.prototype = prototype;
            Class.constructor = Class;
            Class.extend = arguments.callee;
            return Class
        }
    })();
    (function (Cevent, window) {
        var math = Math,
            PI = math.PI,
            TWOPI = 2 * PI,
            DEGREE = PI / 180,
            sqrt = math.sqrt,
            pow = math.pow,
            cos = math.cos,
            sin = math.sin,
            round = math.round,
            abs = math.abs,
            acos = math.acos,
            atan2 = math.atan2,
            undefined, hasOwnProperty = Object.prototype.hasOwnProperty,
            slice = Array.prototype.slice,
            defaultStyle = {
                tx: 0,
                ty: 0,
                scaleX: 1,
                scaleY: 1,
                skewX: 0,
                skewY: 0,
                fill: "#000",
                stroke: "",
                lineWidth: 1,
                lineJoin: "miter",
                lineCap: "butt",
                alpha: 1,
                rotation: 0,
                composite: "source-over",
                shadowColor: "rgba(0, 0, 0, 0.0)",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 0,
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 10,
                fontFamily: "Arial"
            },
            cv = document.createElement("canvas"),
            testCtx = cv.getContext && cv.getContext("2d"),
            distance = function (p1, p2) {
                return sqrt(pow(p1.x - p2.x, 2) + pow(p1.y - p2.y, 2))
            },
            distanceToLine = function (x1, y1, x2, y2, point) {
                var deltaX = x2 - x1,
                    deltaY = y2 - y1,
                    closestPoint = {},
                    u;
                if (deltaX === 0 && deltaY === 0) {
                    return
                }
                u = ((point.x - x1) * deltaX + (point.y - y1) * deltaY) / (deltaX * deltaX + deltaY * deltaY);
                if (u < 0) {
                    closestPoint = {
                        x: x1,
                        y: y1
                    }
                } else if (u > 1) {
                    closestPoint = {
                        x: x2,
                        y: x2
                    }
                } else {
                    closestPoint = {
                        x: x1 + u * deltaX,
                        y: y1 + u * deltaY
                    }
                }
                return distance(closestPoint, point)
            },
            rotate = function (x, y, angle) {
                angle = DEGREE * angle;
                return {
                    x: x * cos(angle) - y * sin(angle),
                    y: x * sin(angle) + y * cos(angle)
                }
            },
            extend = function (orig, obj) {
                var attr;
                for (attr in obj) {
                    if (hasOwnProperty.call(obj, attr)) {
                        orig[attr] = obj[attr]
                    }
                }
            },
            Shape = Class.extend({
                init: function (x, y) {
                    this.x = x || 0;
                    this.y = y || 0;
                    extend(this, defaultStyle)
                },
                position: function () {
                    var p = rotate(this.x * this.scaleX, this.y * this.scaleY, this.rotation);
                    return {
                        x: p.x + this.tx,
                        y: p.y + this.ty
                    }
                },
                rmove: function (x, y) {
                    this.tx += x;
                    this.ty += y
                },
                attr: function (attrs, value) {
                    var attr;
                    if (hasOwnProperty.call(defaultStyle, attrs)) {
                        this[attrs] = value
                    } else {
                        for (attr in attrs) {
                            this[attr] = attrs[attr]
                        }
                    }
                    return this
                },
                applyStyle: function (ctx) {
                    var shadowBlur = this.shadowBlur,
                        shadowOffsetX = this.shadowOffsetX,
                        shadowOffsetY = this.shadowOffsetY;
                    ctx.fillStyle = this.fill;
                    ctx.globalAlpha = this.alpha;
                    ctx.globalCompositeOperation = this.composite;
                    if (this.stroke) {
                        ctx.strokeStyle = this.stroke;
                        ctx.lineWidth = this.lineWidth
                    }
                    if (shadowOffsetX || shadowOffsetY || shadowBlur) {
                        ctx.shadowColor = this.shadowColor;
                        ctx.shadowOffsetX = shadowOffsetX;
                        ctx.shadowOffsetY = shadowOffsetY;
                        ctx.shadowBlur = shadowBlur
                    }
                },
                setTransform: function (ctx) {
                    var zoom = Cevent.__zoom,
                        scaleX = this.scaleX * zoom,
                        scaleY = this.scaleY * zoom,
                        skewX = this.skewX * zoom,
                        skewY = this.skewY * zoom,
                        angle = this.rotation * DEGREE,
                        s = sin(angle),
                        c = cos(angle),
                        dx = this.tx * zoom,
                        dy = this.ty * zoom,
                        m11 = c * scaleX - s * skewY,
                        m21 = c * skewX - s * scaleY,
                        m12 = s * scaleX + c * skewY,
                        m22 = s * skewX + c * scaleY;
                    ctx.setTransform(m11, m12, m21, m22, dx, dy)
                },
                draw: function (ctx) {
                    throw new Error("El método draw no se ha implementado")
                },
                fill_or_stroke: function (ctx) {
                    if (this.fill) {
                        ctx.fill()
                    }
                    if (this.stroke) {
                        ctx.stroke()
                    }
                },
                hitTest: function (point) {
                    if (testCtx && testCtx.isPointInPath) {
                        this.draw(testCtx);
                        testCtx.setTransform(1, 0, 0, 1, 0, 0);
                        return testCtx.isPointInPath(point.x, point.y)
                    } else {
                        throw Error("Método isPointInPath no soportado: Necesita FlashCanvasPro")
                    }
                }
            }),
            Rect = Shape.extend({
                init: function (x, y, width, height, radius) {
                    this.r = radius || 0;
                    this.w = width || 5;
                    this.h = height || width;
                    this._super(x, y)
                },
                draw: function (ctx) {
                    var x = this.x,
                        y = this.y,
                        w = this.w,
                        h = this.h;
                    this.applyStyle(ctx);
                    this.setTransform(ctx);
                    ctx.beginPath();
                    if (this.r) {
                        Cevent.setContext(ctx).polygon(x, y, x + w, y, x + w, y + h, x, y + h, this.r)
                    } else {
                        ctx.rect(x, y, round(w), round(h))
                    }
                    ctx.closePath();
                    if (this.fill) {
                        ctx.fill()
                    }
                    if (this.stroke) {
                        ctx.stroke()
                    }
                },
                hitTest: function (point) {
                    if (this.skewX || this.skewY || this.r) {
                        return this._super(point)
                    }
                    var thisPos = this.position(),
                        mousePos = rotate(point.x - thisPos.x, point.y - thisPos.y, -this.rotation);
                    return mousePos.x >= 0 && mousePos.x <= this.w * this.scaleX && mousePos.y >= 0 && mousePos.y <= this.h * this.scaleY
                }
            }),
            Text = Rect.extend({
                init: function (x, y, text) {
                    this.setText(text);
                    this._super(x, y, this.w, this.h)
                },
                applyStyle: function (ctx) {
                    ctx.font = this.fontStyle + " " + this.fontWeight + " " + this.fontSize + "px " + this.fontFamily;
                    this.h = this.fontSize;
                    this.w = ctx.measureText(this.text).width;
                    this._super(ctx)
                },
                setText: function (text) {
                    this.text = text + ""
                },
                draw: function (ctx) {
                    this.applyStyle(ctx);
                    this.setTransform(ctx);
                    if (this.fill) {
                        ctx.fillText(this.text, this.x, this.y + this.h)
                    }
                    if (this.stroke) {
                        ctx.strokeText(this.text, this.x, this.y + this.h)
                    }
                },
                hitTest: function (point) {
                    if (this.skewX || this.skewY && testCtx && testCtx.isPointInPath) {
                        this.setTransform(testCtx);
                        testCtx.beginPath();
                        testCtx.rect(this.x, this.y, this.w, this.h);
                        testCtx.closePath();
                        return testCtx.isPointInPath(point.x, point.y)
                    }
                    return this._super(point)
                }
            }),
            Img = Rect.extend({
                init: function (x, y, src) {
                    this.setImg(src);
                    this._super(x, y, this.img.width, this.img.height);
                    if (!this.img.complete) {
                        var self = this;
                        this.img.onload = function () {
                            self.w = this.width;
                            self.h = this.height;
                            Cevent.forse_redraw()
                        }
                    } else {
                        this.w = this.img.width;
                        this.h = this.img.height
                    }
                },
                setImg: function (img) {
                    if (img.nodeName == "IMG") {
                        this.img = img
                    } else {
                        this.img = new Image;
                        this.img.src = img + ""
                    }
                    this.src = this.img.src
                },
                draw: function (ctx) {
                    var x = this.x,
                        y = this.y;
                    this.applyStyle(ctx);
                    this.setTransform(ctx);
                    if (ctx === testCtx) {
                        ctx.beginPath();
                        ctx.rect(x, y, round(this.w), round(this.h));
                        ctx.closePath()
                    } else {
                        ctx.drawImage(this.img, x, y)
                    }
                }
            }),
            Ellipse = Rect.extend({
                draw: function (ctx) {
                    var x = this.x,
                        y = this.y,
                        w = this.w,
                        h = this.h,
                        C = .5522847498307933,
                        c_x = C * w,
                        c_y = C * h;
                    this.applyStyle(ctx);
                    this.setTransform(ctx);
                    ctx.beginPath();
                    ctx.moveTo(x + w, y);
                    ctx.bezierCurveTo(x + w, y - c_y, x + c_x, y - h, x, y - h);
                    ctx.bezierCurveTo(x - c_x, y - h, x - w, y - c_y, x - w, y);
                    ctx.bezierCurveTo(x - w, y + c_y, x - c_x, y + h, x, y + h);
                    ctx.bezierCurveTo(x + c_x, y + h, x + w, y + c_y, x + w, y);
                    ctx.closePath();
                    if (this.fill) {
                        ctx.fill()
                    }
                    if (this.stroke) {
                        ctx.stroke()
                    }
                },
                hitTest: Shape.prototype.hitTest
            }),
            Arc = Shape.extend({
                init: function (x, y, radius, startAngle, endAngle, antiClockWise) {
                    this.clockwise = antiClockWise;
                    this.endAngle = endAngle;
                    this.startAngle = startAngle;
                    this.r = radius;
                    this._super(x, y)
                },
                draw: function (ctx) {
                    var x = this.x,
                        y = this.y;
                    this.applyStyle(ctx);
                    this.setTransform(ctx);
                    ctx.beginPath();
                    ctx.arc(x, y, round(this.r), this.startAngle || PI * 2, this.endAngle || 0, !!this.clockwise);
                    ctx.lineTo(x, y);
                    ctx.closePath();
                    if (this.fill) {
                        ctx.fill()
                    }
                    if (this.stroke) {
                        ctx.stroke()
                    }
                }
            }),
            Circle = Shape.extend({
                init: function (x, y, radius) {
                    this.r = radius || 5;
                    this._super(x, y)
                },
                draw: function (ctx) {
                    var x = this.x,
                        y = this.y;
                    this.applyStyle(ctx);
                    this.setTransform(ctx);
                    ctx.beginPath();
                    ctx.arc(x, y, round(this.r), 0, PI * 2, true);
                    ctx.closePath();
                    if (this.fill) {
                        ctx.fill()
                    }
                    if (this.stroke) {
                        ctx.stroke()
                    }
                },
                hitTest: function (point) {
                    if (this.skewX || this.skewY || this.scaleX !== this.scaleY) {
                        return this._super(point)
                    }
                    var lineWidth = !!this.stroke && this.lineWidth,
                        thisPos = this.position();
                    return distance(point, thisPos) <= (this.r + lineWidth) * this.scaleX
                }
            }),
            Line = Shape.extend({
                init: function (x1, y1, x2, y2) {
                    this.x2 = x2;
                    this.y2 = y2;
                    this._super(x1, y1);
                    this.stroke = "#000"
                },
                rmove: function (x, y) {
                    this.x += x;
                    this.y += y;
                    this.x2 += x;
                    this.y2 += y
                },
                applyStyle: function (ctx) {
                    ctx.lineJoin = this.lineJoin;
                    ctx.lineCap = this.lineCap;
                    this._super(ctx)
                },
                draw: function (ctx) {
                    var x = this.x,
                        y = this.y;
                    this.applyStyle(ctx);
                    this.setTransform(ctx);
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(this.x2, this.y2);
                    ctx.stroke()
                },
                hitTest: function (point) {
                    return distanceToLine(this.x, this.y, this.x2, this.y2, point) <= this.lineWidth + 2
                }
            }),
            currentX, currentY, startSubpathX, startSubpathY, _lastCCP = null,
            _lastQCP = null,
            _pathIsEmpty = false,
            SVGPATTERN = /[MmLlZzHhVvCcQqSsTtAa]\s*([\-+]?(?:\d+[.]?\d*|[.]\d+)(?:[Ee][\-+]?\d+)?[,\s]*)*/g,
            NUMBER = /[\-+]?(?:\d+[.]?\d*|[.]\d+)(?:[Ee][\-+]?\d+)?/g,
            angleBetweenVectors = function (x1, y1, x2, y2) {
                var dotproduct = x1 * x2 + y1 * y2,
                    d1 = sqrt(x1 * x1 + y1 * y1),
                    d2 = sqrt(x2 * x2 + y2 * y2),
                    x = dotproduct / (d1 * d2),
                    angle, sign;
                if (x > 1) {
                    x = 1
                } else if (x < -1) {
                    x = -1
                }
                angle = abs(acos(x));
                sign = x1 * y2 - y1 * x2;
                return sign === abs(sign) ? angle : -angle
            },
            rotatePoint = function (x, y, angle) {
                return [x * cos(angle) - y * sin(angle), y * cos(angle) + x * sin(angle)]
            },
            ensure = function (self, x, y) {
                if (_pathIsEmpty) {
                    self.ctx.moveTo(x, y)
                }
            },
            setCurrent = function (x, y) {
                currentX = x;
                currentY = y;
                _lastCCP = null;
                _lastQCP = null;
                _pathIsEmpty = false
            },
            checkcurrent = function () {
                if (currentX === undefined) {
                    throw new Error("No current point; can't use relative coordinates")
                }
            },
            check = function (args, n, m, min) {
                if (n !== (m ? args.length % m : args.length) || args.length < min) {
                    throw new Error("wrong number of arguments")
                }
            },
            M = function (x, y) {
                this.ctx.moveTo(x, y);
                setCurrent(x, y);
                startSubpathX = x;
                startSubpathY = y;
                if (arguments.length > 2) {
                    L.apply(this, slice.call(arguments, 2))
                }
                return this
            },
            m = function (x, y) {
                if (_pathIsEmpty) {
                    currentX = currentY = 0
                }
                checkcurrent();
                x += currentX;
                y += currentY;
                this.ctx.moveTo(x, y);
                setCurrent(x, y);
                startSubpathX = x;
                startSubpathY = y;
                if (arguments.length > 2) {
                    l.apply(this, slice.call(arguments, 2))
                }
                return this
            },
            L = function (x, y) {
                var i, l = arguments.length;
                check(arguments, 0, 2, 2);
                ensure(this, x, y);
                this.ctx.lineTo(x, y);
                for (i = 2; i < l; i += 2) {
                    this.ctx.lineTo(x = arguments[i], y = arguments[i + 1])
                }
                setCurrent(x, y);
                return this
            },
            l = function (x, y) {
                var i, cx = currentX,
                    cy = currentY,
                    l = arguments.length;
                check(arguments, 0, 2, 2);
                checkcurrent();
                for (i = 0; i < l; i += 2) {
                    this.ctx.lineTo(cx += arguments[i], cy += arguments[i + 1])
                }
                setCurrent(cx, cy);
                return this
            },
            z = function () {
                this.ctx.closePath();
                setCurrent(this, startSubpathX, startSubpathY);
                return this
            },
            H = function (x) {
                var i, l = arguments.length;
                checkcurrent();
                for (i = 0; i < l; i++) {
                    L.call(this, arguments[i], currentY)
                }
                return this
            },
            h = function (x) {
                var i, n = arguments.length;
                for (i = 0; i < n; i++) {
                    l.call(this, arguments[i], 0)
                }
                return this
            },
            V = function (y) {
                var i, l = arguments.length;
                checkcurrent();
                for (i = 0; i < l; i++) {
                    L.call(this, currentX, arguments[i])
                }
                return this
            },
            v = function (y) {
                var i, n = arguments.length;
                for (i = 0; i < n; i++) {
                    l.call(this, 0, arguments[i])
                }
                return this
            },
            C = function (cx1, cy1, cx2, cy2, x, y) {
                var i, a = arguments,
                    l = arguments.length;
                check(a, 0, 6, 6);
                ensure(this, cx1, cx2);
                this.ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
                for (i = 6; i < l; i += 6) {
                    this.ctx.bezierCurveTo(a[i], a[i + 1], cx2 = a[i + 2], cy2 = a[i + 3], x = a[i + 4], y = a[i + 5])
                }
                setCurrent(x, y);
                _lastCCP = [cx2, cy2];
                return this
            },
            c = function (cx1, cy1, cx2, cy2, x, y) {
                var i, a = arguments,
                    l = a.length,
                    x0 = currentX,
                    y0 = currentY;
                check(a, 0, 6, 6);
                checkcurrent();
                for (i = 0; i < l; i += 6) {
                    this.ctx.bezierCurveTo(x0 + a[i], y0 + a[i + 1], cx2 = x0 + a[i + 2], cy2 = y0 + a[i + 3], x0 += a[i + 4], y0 += a[i + 5])
                }
                setCurrent(x0, y0);
                _lastCCP = [cx2, cy2];
                return this
            },
            Q = function (cx, cy, x, y) {
                var i, a = arguments,
                    l = a.length;
                check(arguments, 0, 4, 4);
                ensure(this, cx, cy);
                this.ctx.quadraticCurveTo(cx, cy, x, y);
                for (i = 4; i < l; i += 4) {
                    this.ctx.quadraticCurveTo(cx = a[i], cy = a[i + 1], x = a[i + 2], y = a[i + 3])
                }
                setCurrent(x, y);
                _lastQCP = [cx, cy];
                return this
            },
            q = function (cx, cy, x, y) {
                var i, a = arguments,
                    l = a.length,
                    x0 = currentX,
                    y0 = currentY;
                check(arguments, 0, 4, 4);
                checkcurrent();
                for (i = 0; i < l; i += 4) {
                    this.ctx.quadraticCurveTo(cx = x0 + a[i], cy = y0 + a[i + 1], x0 += a[i + 2], y0 += a[i + 3])
                }
                setCurrent(x0, y0);
                _lastQCP = [cx, cy];
                return this
            },
            S = function () {
                if (!_lastCCP) {
                    throw new Error("Last command was not a cubic bezier")
                }
                var i, a = arguments,
                    l = a.length,
                    x0 = currentX,
                    y0 = currentY,
                    cx0 = _lastCCP[0],
                    cy0 = _lastCCP[1],
                    cx1, cx2, cy1, cy2, x, y;
                check(arguments, 0, 4, 4);
                checkcurrent();
                for (i = 0; i < l; i += 4) {
                    cx1 = x0 + (x0 - cx0);
                    cy1 = y0 + (y0 - cy0);
                    cx2 = a[i];
                    cy2 = a[i + 1];
                    x = a[i + 2];
                    y = a[i + 3];
                    this.ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
                    x0 = x;
                    y0 = y;
                    cx0 = cx2;
                    cy0 = cy2
                }
                setCurrent(x0, y0);
                _lastCCP = [cx0, cy0];
                return this
            },
            s = function () {
                if (!_lastCCP) {
                    throw new Error("Last command was not a cubic bezier")
                }
                var i, a = arguments,
                    l = a.length,
                    x0 = currentX,
                    y0 = currentY,
                    cx0 = _lastCCP[0],
                    cy0 = _lastCCP[1],
                    cx1, cx2, cy1, cy2, x, y;
                check(arguments, 0, 4, 4);
                checkcurrent();
                for (i = 0; i < l; i += 4) {
                    cx1 = x0 + (x0 - cx0);
                    cy1 = y0 + (y0 - cy0);
                    cx2 = x0 + a[i];
                    cy2 = y0 + a[i + 1];
                    x = x0 + a[i + 2];
                    y = y0 + a[i + 3];
                    this.ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
                    x0 = x;
                    y0 = y;
                    cx0 = cx2;
                    cy0 = cy2
                }
                setCurrent(x0, y0);
                _lastCCP = [cx0, cy0];
                return this
            },
            T = function () {
                if (!_lastQCP) {
                    throw new Error("Last command was not a cubic bezier")
                }
                var i, a = arguments,
                    l = arguments.length,
                    x0 = currentX,
                    y0 = currentY,
                    cx0 = _lastQCP[0],
                    cy0 = _lastQCP[1],
                    cx, cy, x, y;
                check(arguments, 0, 2, 2);
                checkcurrent();
                for (i = 0; i < l; i += 2) {
                    cx = x0 + (x0 - cx0);
                    cy = y0 + (y0 - cy0);
                    x = arguments[i];
                    y = arguments[i + 1];
                    this.ctx.quadraticCurveTo(cx, cy, x, y);
                    x0 = x;
                    y0 = y;
                    cx0 = cx;
                    cy0 = cy
                }
                setCurrent(x0, y0);
                _lastQCP = [cx0, cy0];
                return this
            },
            t = function () {
                if (!_lastQCP) {
                    throw new Error("Last command was not a cubic bezier")
                }
                var i, a = arguments,
                    l = a.length,
                    x0 = currentX,
                    y0 = currentY,
                    cx0 = _lastQCP[0],
                    cy0 = _lastQCP[1],
                    cx, cy, x, y;
                check(arguments, 0, 2, 2);
                checkcurrent();
                for (i = 0; i < l; i += 2) {
                    cx = x0 + (x0 - cx0);
                    cy = y0 + (y0 - cy0);
                    x = x0 + arguments[i];
                    y = y0 + arguments[i + 1];
                    this.ctx.quadraticCurveTo(cx, cy, x, y);
                    x0 = x;
                    y0 = y;
                    cx0 = cx;
                    cy0 = cy
                }
                setCurrent(x0, y0);
                _lastQCP = [cx0, cy0];
                return this
            },
            A = function (rx, ry, rotation, big, clockwise, x, y) {
                if (!rx || !ry) {
                    return L.call(this, x, y)
                }
                big = !!big;
                clockwise = !!clockwise;
                checkcurrent();
                var x1 = currentX,
                    y1 = currentY,
                    x2 = x,
                    y2 = y,
                    phi = rotation * DEGREE,
                    sinphi = sin(phi),
                    cosphi = cos(phi),
                    tx = (x1 - x2) / 2,
                    ty = (y1 - y2) / 2,
                    x1$ = cosphi * tx + sinphi * ty,
                    y1$ = -sinphi * tx + cosphi * ty,
                    lambda, cx$, cy$, cx, cy, theta1, theta2, dtheta;
                rx = abs(rx);
                ry = abs(ry);
                lambda = x1$ * x1$ / (rx * rx) + y1$ * y1$ / (ry * ry);
                if (lambda > 1) {
                    rx *= sqrt(lambda);
                    ry *= sqrt(lambda);
                    cx$ = cy$ = 0
                } else {
                    var rxrx = rx * rx,
                        ryry = ry * ry,
                        x1x1$ = x1$ * x1$,
                        y1y1$ = y1$ * y1$,
                        t = rxrx * y1y1$ + ryry * x1x1$;
                    t = sqrt(rxrx * ryry / t - 1);
                    if (big === clockwise) {
                        t = -t
                    }
                    cx$ = t * rx * y1$ / ry;
                    cy$ = -t * ry * x1$ / rx
                }
                cx = cosphi * (cx$ - sinphi) * (cy$ + (x1 + x2) / 2);
                cy = sinphi * (cx$ + cosphi) * (cy$ + (y1 + y2) / 2);
                tx = (x1$ - cx$) / rx;
                ty = (y1$ - cy$) / ry;
                theta1 = angleBetweenVectors(1, 0, tx, ty);
                dtheta = angleBetweenVectors(tx, ty, (-x1$ - cx$) / rx, (-y1$ - cy$) / ry);
                if (clockwise && dtheta < 0) {
                    dtheta += TWOPI
                } else if (!clockwise && dtheta > 0) {
                    dtheta -= TWOPI
                }
                theta2 = theta1 + dtheta;
                this.ellipse(cx, cy, rx, ry, phi, theta1, theta2, !clockwise);
                return this
            },
            a = function (rx, ry, rotation, big, clockwise, x, y) {
                checkcurrent();
                A.call(this, rx, ry, rotation, big, clockwise, x + currentX, y + currentY);
                return this
            },
            ellipse = function (cx, cy, rx, ry, rotation, sa, ea, anticlockwise) {
                rotation = rotation || 0;
                sa = sa || 0;
                ea = ea === undefined ? TWOPI : ea;
                var sp = rotatePoint(rx * cos(sa), ry * sin(sa), rotation),
                    sx = cx + sp[0],
                    sy = cy + sp[1],
                    ep = rotatePoint(rx * cos(ea), ry * sin(ea), rotation),
                    ex = cx + ep[0],
                    ey = cy + ep[1];
                ensure(this, sx, sy);
                this.ctx.translate(cx, cy);
                this.ctx.rotate(rotation);
                this.ctx.scale(rx / ry, 1);
                this.ctx.arc(0, 0, ry, sa, ea, !!anticlockwise);
                this.ctx.scale(ry / rx, 1);
                this.ctx.rotate(-rotation);
                this.ctx.translate(-cx, -cy);
                setCurrent(ex, ey);
                return this
            },
            polygon = function () {
                var i, a = arguments,
                    l = a.length;
                if (l < 6) {
                    throw new Error("not enough arguments")
                }
                if (l % 2 === 0) {
                    this.ctx.moveTo(a[0], a[1]);
                    for (i = 2; i < l; i += 2) {
                        this.ctx.lineTo(a[i], a[i + 1])
                    }
                } else {
                    var radius = a[l - 1],
                        n = (l - 1) / 2,
                        x0 = (a[n * 2 - 2] + a[0]) / 2,
                        y0 = (a[n * 2 - 1] + a[1]) / 2,
                        temp_x, temp_y;
                    this.ctx.moveTo(x0, y0);
                    for (i = 0; i < n - 1; i++) {
                        this.ctx.arcTo(temp_x = a[i * 2], temp_y = a[i * 2 + 1], a[i * 2 + 2], a[i * 2 + 3], radius, x0, y0);
                        x0 = temp_x;
                        y0 = temp_y
                    }
                    this.ctx.arcTo(a[n * 2 - 2], a[n * 2 - 1], a[0], a[1], radius, x0, y0)
                }
                return this
            },
            parseSVG = function (svg) {
                var matches = svg.match(SVGPATTERN),
                    match, parts, args, i, j, path = [];
                if (!matches) {
                    throw new Error("Bad path: " + svg)
                }
                for (i = 0; match = matches[i]; i++) {
                    args = [];
                    args.cmd = match.charAt(0);
                    parts = match.match(NUMBER) || [];
                    for (j = 0; j < parts.length; j++) {
                        args[j] = +parts[j]
                    }
                    path.push(args)
                }
                return path
            },
            Path = Shape.extend({
                init: function (svgpath) {
                    this.svgpath = parseSVG(svgpath);
                    this._super(0, 0);
                    if (this.svgpath[0].cmd.toLowerCase() == "m") {
                        this.x = this.svgpath[0][0];
                        this.y = this.svgpath[0][1]
                    }
                },
                draw: function (ctx) {
                    var svgpath = this.svgpath,
                        i, l;
                    this.applyStyle(ctx);
                    this.setTransform(ctx);
                    ctx.beginPath();
                    Cevent.setContext(ctx);
                    for (i = 0, l = svgpath.length; i < l; i++) {
                        Cevent[svgpath[i].cmd].apply(Cevent, svgpath[i])
                    }
                    if (this.fill) {
                        ctx.fill()
                    }
                    if (this.stroke) {
                        ctx.stroke()
                    }
                }
            });
        extend(Cevent, {
            distance: distance,
            __zoom: 1,
            Shape: Shape,
            setContext: function (ctx) {
                this.ctx = ctx;
                setCurrent(0, 0);
                ctx.beginPath();
                return this
            },
            polygon: polygon,
            ellipse: ellipse,
            M: M,
            m: m,
            L: L,
            l: l,
            H: H,
            h: h,
            V: V,
            v: v,
            C: C,
            c: c,
            S: S,
            s: s,
            Q: Q,
            q: q,
            T: T,
            t: t,
            A: A,
            a: a,
            Z: z,
            z: z
        });
        (function () {
            if (!testCtx) {
                return
            }
            testCtx.moveTo(30, 30);
            testCtx.arcTo(60, 30, 60, 60, 30);
            testCtx.lineTo(60, 60);
            testCtx.fill();
            if (testCtx.getImageData(58, 31, 1, 1).data[3]) {
                var originalArcTo = CanvasRenderingContext2D.prototype.arcTo;

                function dist2(x0, y0, x1, y1) {
                    return (x0 - x1) * (x0 - x1) + (y0 - y1) * (y0 - y1)
                }
                CanvasRenderingContext2D.prototype.arcTo = function (x1, y1, x2, y2, radius, x0, y0) {
                    if (isNaN(x0 + y0)) {
                        return originalArcTo.apply(this, arguments)
                    }
                    var dir, a2, b2, c2, cosx, sinx, d, anx, any, bnx, bny, x3, y3, x4, y4, ccw, cx, cy, a0, a1;
                    if (x1 == x0 && y1 == y0 || x1 == x2 && y1 == y2 || radius == 0) {
                        this.lineTo(x1, y1);
                        return
                    }
                    dir = (x2 - x1) * (y0 - y1) + (y2 - y1) * (x1 - x0);
                    if (dir == 0) {
                        this.lineTo(x1, y1);
                        return
                    }
                    a2 = dist2(x0, y0, x1, y1);
                    b2 = dist2(x1, y1, x2, y2);
                    c2 = dist2(x0, y0, x2, y2);
                    cosx = (a2 + b2 - c2) / (2 * sqrt(a2 * b2));
                    a2 = sqrt(a2);
                    b2 = sqrt(b2);
                    sinx = sqrt(1 - cosx * cosx);
                    d = radius * sinx / (1 - cosx);
                    anx = (x1 - x0) / a2;
                    any = (y1 - y0) / a2;
                    bnx = (x1 - x2) / b2;
                    bny = (y1 - y2) / b2;
                    x3 = x1 - anx * d;
                    y3 = y1 - any * d;
                    x4 = x1 - bnx * d;
                    y4 = y1 - bny * d;
                    ccw = dir < 0;
                    cx = x3 + any * radius * (ccw ? 1 : -1);
                    cy = y3 - anx * radius * (ccw ? 1 : -1);
                    a0 = atan2(y3 - cy, x3 - cx);
                    a1 = atan2(y4 - cy, x4 - cx);
                    this.lineTo(x3, y3);
                    this.arc(cx, cy, radius, a0, a1, ccw)
                }
            }
        })();
        if (window.FlashCanvas) {
            document.body.appendChild(cv);
            FlashCanvas.initElement(cv);
            testCtx = cv.getContext("2d");
            cv.style.display = "none"
        }
        if (testCtx) {
            testCtx.fill = testCtx.stroke = function () { }
        }
        Cevent.register("image", Img);
        Cevent.register("circle", Circle);
        Cevent.register("arc", Arc);
        Cevent.register("ellipse", Ellipse);
        Cevent.register("rect", Rect);
        Cevent.register("text", Text);
        Cevent.register("line", Line);
        Cevent.register("path", Path)
    })(Cevent, this);
    (function () {
        var defaultLanguage = "en";
        var currentLang = {};
        var defaultOptions = {
            localeDir: "mahjong/locales"
        };
        if (!$.isFunction("".localeCompare)) {
            String.prototype.localeCompare = function (str1) {
                var str2 = this + "";
                if (str1 === str2) {
                    return 0
                } else if (str1 < str2) {
                    return 1
                } else {
                    return -1
                }
            }
        }
        var languages = {
            es: true,
            en: true,
            it: true,
            de: true,
            fr: true,
            ja: true,
            nl: true,
            da: true,
            sv: true,
            zh_hans: true,
            hi: true,
            pl: true,
            pt: true
        };

        function getLanguages() {
            if (window.Windows) {
                return Windows.System.UserProfile.GlobalizationPreferences.languages
            }
            return []
        }

        function getWindowsSystemLang() {
            var winLangs = getLanguages(),
                length = winLangs.length,
                winLang, i;
            for (i = 0; i < length; i++) {
                winLang = winLangs[i].toLowerCase().substring(0, 2);
                if (winLang === "zh") {
                    return "zh_hans"
                } else if (languages[winLang]) {
                    return winLang
                }
            }
        }

        function getSystemLang() {
            var sysLang = window.navigator.languages ? window.navigator.languages[0] : null;
            sysLang = sysLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
            sysLang = sysLang.toLowerCase().substring(0, 2);
            if (sysLang === "zh") {
                return "zh_hans"
            } else if (languages[sysLang]) {
                return sysLang
            }
        }

        function getLangCode() {
            if (window.Windows && window.Windows.System) return getWindowsSystemLang();
            else return getSystemLang()
        }
        window.alert = function (message, title) {
            var messageDialog = new Windows.UI.Popups.MessageDialog(message, title || "Alert");
            messageDialog.showAsync()
        };

        function load(options) {
            options = options || defaultOptions;
            var deferred = jQuery.Deferred(),
                langCode = getLangCode() || defaultLanguage,
                langUrl = options.localeDir + "/" + langCode + ".json";
            jQuery.getJSON(langUrl).done(deferred.resolve).fail(deferred.reject);
            return deferred.then(function (lang) {
                currentLang = replaceTemplates(lang);
                $(window).trigger("language:change")
            }).promise()
        }

        function replaceTemplates(language) {
            var template = /{{([^}]+)}}/g;
            for (var key in language) {
                language[key] = language[key].replace(template, function (match, group) {
                    return language[group] || uniStore.get(group) || match
                })
            }
            return language
        }

        function gettext(key) {
            return currentLang[key] || key
        }
        window.Locale = {
            _e: gettext,
            lang: getLangCode() || "en",
            load: load
        }
    })();
    this.createjs = this.createjs || {}, createjs.extend = function (a, b) {
        "use strict";

        function c() {
            this.constructor = a
        }
        return c.prototype = b.prototype, a.prototype = new c
    }, this.createjs = this.createjs || {}, createjs.promote = function (a, b) {
        "use strict";
        var c = a.prototype,
            d = Object.getPrototypeOf && Object.getPrototypeOf(c) || c.__proto__;
        if (d) {
            c[(b += "_") + "constructor"] = d.constructor;
            for (var e in d) c.hasOwnProperty(e) && "function" == typeof d[e] && (c[b + e] = d[e])
        }
        return a
    }, this.createjs = this.createjs || {},
        function () {
            "use strict";

            function a(a, b, c) {
                this.type = a, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!b, this.cancelable = !!c, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
            }
            var b = a.prototype;
            b.preventDefault = function () {
                this.defaultPrevented = this.cancelable && !0
            }, b.stopPropagation = function () {
                this.propagationStopped = !0
            }, b.stopImmediatePropagation = function () {
                this.immediatePropagationStopped = this.propagationStopped = !0
            }, b.remove = function () {
                this.removed = !0
            }, b.clone = function () {
                return new a(this.type, this.bubbles, this.cancelable)
            }, b.set = function (a) {
                for (var b in a) this[b] = a[b];
                return this
            }, b.toString = function () {
                return "[Event (type=" + this.type + ")]"
            }, createjs.Event = a
        }(), this.createjs = this.createjs || {},
        function () {
            "use strict";

            function a() {
                this._listeners = null, this._captureListeners = null
            }
            var b = a.prototype;
            a.initialize = function (a) {
                a.addEventListener = b.addEventListener, a.on = b.on, a.removeEventListener = a.off = b.removeEventListener, a.removeAllEventListeners = b.removeAllEventListeners, a.hasEventListener = b.hasEventListener, a.dispatchEvent = b.dispatchEvent, a._dispatchEvent = b._dispatchEvent, a.willTrigger = b.willTrigger
            }, b.addEventListener = function (a, b, c) {
                var d;
                d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
                var e = d[a];
                return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b
            }, b.on = function (a, b, c, d, e, f) {
                return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function (a) {
                    b.call(c, a, e), d && a.remove()
                }, f)
            }, b.removeEventListener = function (a, b, c) {
                var d = c ? this._captureListeners : this._listeners;
                if (d) {
                    var e = d[a];
                    if (e)
                        for (var f = 0, g = e.length; g > f; f++)
                            if (e[f] == b) {
                                1 == g ? delete d[a] : e.splice(f, 1);
                                break
                            }
                }
            }, b.off = b.removeEventListener, b.removeAllEventListeners = function (a) {
                a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null
            }, b.dispatchEvent = function (a) {
                if ("string" == typeof a) {
                    var b = this._listeners;
                    if (!b || !b[a]) return !1;
                    a = new createjs.Event(a)
                } else a.target && a.clone && (a = a.clone());
                try {
                    a.target = this
                } catch (c) { }
                if (a.bubbles && this.parent) {
                    for (var d = this, e = [d]; d.parent;) e.push(d = d.parent);
                    var f, g = e.length;
                    for (f = g - 1; f >= 0 && !a.propagationStopped; f--) e[f]._dispatchEvent(a, 1 + (0 == f));
                    for (f = 1; g > f && !a.propagationStopped; f++) e[f]._dispatchEvent(a, 3)
                } else this._dispatchEvent(a, 2);
                return a.defaultPrevented
            }, b.hasEventListener = function (a) {
                var b = this._listeners,
                    c = this._captureListeners;
                return !!(b && b[a] || c && c[a])
            }, b.willTrigger = function (a) {
                for (var b = this; b;) {
                    if (b.hasEventListener(a)) return !0;
                    b = b.parent
                }
                return !1
            }, b.toString = function () {
                return "[EventDispatcher]"
            }, b._dispatchEvent = function (a, b) {
                var c, d = 1 == b ? this._captureListeners : this._listeners;
                if (a && d) {
                    var e = d[a.type];
                    if (!e || !(c = e.length)) return;
                    try {
                        a.currentTarget = this
                    } catch (f) { }
                    try {
                        a.eventPhase = b
                    } catch (f) { }
                    a.removed = !1, e = e.slice();
                    for (var g = 0; c > g && !a.immediatePropagationStopped; g++) {
                        var h = e[g];
                        h.handleEvent ? h.handleEvent(a) : h(a), a.removed && (this.off(a.type, h, 1 == b), a.removed = !1)
                    }
                }
            }, createjs.EventDispatcher = a
        }(), this.createjs = this.createjs || {},
        function () {
            "use strict";

            function a() {
                throw "Ticker cannot be instantiated."
            }
            a.RAF_SYNCHED = "synched", a.RAF = "raf", a.TIMEOUT = "timeout", a.useRAF = !1, a.timingMode = null, a.maxDelta = 0, a.paused = !1, a.removeEventListener = null, a.removeAllEventListeners = null, a.dispatchEvent = null, a.hasEventListener = null, a._listeners = null, createjs.EventDispatcher.initialize(a), a._addEventListener = a.addEventListener, a.addEventListener = function () {
                return !a._inited && a.init(), a._addEventListener.apply(a, arguments)
            }, a._inited = !1, a._startTime = 0, a._pausedTime = 0, a._ticks = 0, a._pausedTicks = 0, a._interval = 50, a._lastTime = 0, a._times = null, a._tickTimes = null, a._timerId = null, a._raf = !0, a.setInterval = function (b) {
                a._interval = b, a._inited && a._setupTick()
            }, a.getInterval = function () {
                return a._interval
            }, a.setFPS = function (b) {
                a.setInterval(1e3 / b)
            }, a.getFPS = function () {
                return 1e3 / a._interval
            };
            try {
                Object.defineProperties(a, {
                    interval: {
                        get: a.getInterval,
                        set: a.setInterval
                    },
                    framerate: {
                        get: a.getFPS,
                        set: a.setFPS
                    }
                })
            } catch (b) {
                console.log(b)
            }
            a.init = function () {
                a._inited || (a._inited = !0, a._times = [], a._tickTimes = [], a._startTime = a._getTime(), a._times.push(a._lastTime = 0), a.interval = a._interval)
            }, a.reset = function () {
                if (a._raf) {
                    var b = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
                    b && b(a._timerId)
                } else clearTimeout(a._timerId);
                a.removeAllEventListeners("tick"), a._timerId = a._times = a._tickTimes = null, a._startTime = a._lastTime = a._ticks = 0, a._inited = !1
            }, a.getMeasuredTickTime = function (b) {
                var c = 0,
                    d = a._tickTimes;
                if (!d || d.length < 1) return -1;
                b = Math.min(d.length, b || 0 | a.getFPS());
                for (var e = 0; b > e; e++) c += d[e];
                return c / b
            }, a.getMeasuredFPS = function (b) {
                var c = a._times;
                return !c || c.length < 2 ? -1 : (b = Math.min(c.length - 1, b || 0 | a.getFPS()), 1e3 / ((c[0] - c[b]) / b))
            }, a.setPaused = function (b) {
                a.paused = b
            }, a.getPaused = function () {
                return a.paused
            }, a.getTime = function (b) {
                return a._startTime ? a._getTime() - (b ? a._pausedTime : 0) : -1
            }, a.getEventTime = function (b) {
                return a._startTime ? (a._lastTime || a._startTime) - (b ? a._pausedTime : 0) : -1
            }, a.getTicks = function (b) {
                return a._ticks - (b ? a._pausedTicks : 0)
            }, a._handleSynch = function () {
                a._timerId = null, a._setupTick(), a._getTime() - a._lastTime >= .97 * (a._interval - 1) && a._tick()
            }, a._handleRAF = function () {
                a._timerId = null, a._setupTick(), a._tick()
            }, a._handleTimeout = function () {
                a._timerId = null, a._setupTick(), a._tick()
            }, a._setupTick = function () {
                if (null == a._timerId) {
                    var b = a.timingMode || a.useRAF && a.RAF_SYNCHED;
                    if (b == a.RAF_SYNCHED || b == a.RAF) {
                        var c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                        if (c) return a._timerId = c(b == a.RAF ? a._handleRAF : a._handleSynch), void (a._raf = !0)
                    }
                    a._raf = !1, a._timerId = setTimeout(a._handleTimeout, a._interval)
                }
            }, a._tick = function () {
                var b = a.paused,
                    c = a._getTime(),
                    d = c - a._lastTime;
                if (a._lastTime = c, a._ticks++, b && (a._pausedTicks++, a._pausedTime += d), a.hasEventListener("tick")) {
                    var e = new createjs.Event("tick"),
                        f = a.maxDelta;
                    e.delta = f && d > f ? f : d, e.paused = b, e.time = c, e.runTime = c - a._pausedTime, a.dispatchEvent(e)
                }
                for (a._tickTimes.unshift(a._getTime() - c) ; a._tickTimes.length > 100;) a._tickTimes.pop();
                for (a._times.unshift(c) ; a._times.length > 100;) a._times.pop()
            };
            var c = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
            a._getTime = function () {
                return (c && c.call(performance) || (new Date).getTime()) - a._startTime
            }, createjs.Ticker = a
        }(), this.createjs = this.createjs || {},
        function () {
            "use strict";

            function a(b, c, d) {
                this.ignoreGlobalPause = !1, this.loop = !1, this.duration = 0, this.pluginData = d || {}, this.target = b, this.position = null, this.passive = !1, this._paused = !1, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], this._prevPosition = 0, this._stepPosition = 0, this._prevPos = -1, this._target = b, this._useTicks = !1, this._inited = !1, c && (this._useTicks = c.useTicks, this.ignoreGlobalPause = c.ignoreGlobalPause, this.loop = c.loop, c.onChange && this.addEventListener("change", c.onChange), c.override && a.removeTweens(b)), c && c.paused ? this._paused = !0 : createjs.Tween._register(this, !0), c && null != c.position && this.setPosition(c.position, a.NONE)
            }
            var b = createjs.extend(a, createjs.EventDispatcher);
            a.NONE = 0, a.LOOP = 1, a.REVERSE = 2, a.IGNORE = {}, a._tweens = [], a._plugins = {}, a.get = function (b, c, d, e) {
                return e && a.removeTweens(b), new a(b, c, d)
            }, a.tick = function (b, c) {
                for (var d = a._tweens.slice(), e = d.length - 1; e >= 0; e--) {
                    var f = d[e];
                    c && !f.ignoreGlobalPause || f._paused || f.tick(f._useTicks ? 1 : b)
                }
            }, a.handleEvent = function (a) {
                "tick" == a.type && this.tick(a.delta, a.paused)
            }, a.removeTweens = function (b) {
                if (b.tweenjs_count) {
                    for (var c = a._tweens, d = c.length - 1; d >= 0; d--) {
                        var e = c[d];
                        e._target == b && (e._paused = !0, c.splice(d, 1))
                    }
                    b.tweenjs_count = 0
                }
            }, a.removeAllTweens = function () {
                for (var b = a._tweens, c = 0, d = b.length; d > c; c++) {
                    var e = b[c];
                    e._paused = !0, e.target.tweenjs_count = 0
                }
                b.length = 0
            }, a.hasActiveTweens = function (b) {
                return b ? b.tweenjs_count : a._tweens && !!a._tweens.length
            }, a.installPlugin = function (b, c) {
                var d = b.priority;
                null == d && (b.priority = d = 0);
                for (var e = 0, f = c.length, g = a._plugins; f > e; e++) {
                    var h = c[e];
                    if (g[h]) {
                        for (var i = g[h], j = 0, k = i.length; k > j && !(d < i[j].priority) ; j++);
                        g[h].splice(j, 0, b)
                    } else g[h] = [b]
                }
            }, a._register = function (b, c) {
                var d = b._target,
                    e = a._tweens;
                if (c) d && (d.tweenjs_count = d.tweenjs_count ? d.tweenjs_count + 1 : 1), e.push(b), !a._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", a), a._inited = !0);
                else {
                    d && d.tweenjs_count--;
                    for (var f = e.length; f--;)
                        if (e[f] == b) return void e.splice(f, 1)
                }
            }, b.wait = function (a, b) {
                if (null == a || 0 >= a) return this;
                var c = this._cloneProps(this._curQueueProps);
                return this._addStep({
                    d: a,
                    p0: c,
                    e: this._linearEase,
                    p1: c,
                    v: b
                })
            }, b.to = function (a, b, c) {
                return (isNaN(b) || 0 > b) && (b = 0), this._addStep({
                    d: b || 0,
                    p0: this._cloneProps(this._curQueueProps),
                    e: c,
                    p1: this._cloneProps(this._appendQueueProps(a))
                })
            }, b.call = function (a, b, c) {
                return this._addAction({
                    f: a,
                    p: b ? b : [this],
                    o: c ? c : this._target
                })
            }, b.set = function (a, b) {
                return this._addAction({
                    f: this._set,
                    o: this,
                    p: [a, b ? b : this._target]
                })
            }, b.play = function (a) {
                return a || (a = this), this.call(a.setPaused, [!1], a)
            }, b.pause = function (a) {
                return a || (a = this), this.call(a.setPaused, [!0], a)
            }, b.setPosition = function (a, b) {
                0 > a && (a = 0), null == b && (b = 1);
                var c = a,
                    d = !1;
                if (c >= this.duration && (this.loop ? c %= this.duration : (c = this.duration, d = !0)), c == this._prevPos) return d;
                var e = this._prevPos;
                if (this.position = this._prevPos = c, this._prevPosition = a, this._target)
                    if (d) this._updateTargetProps(null, 1);
                    else if (this._steps.length > 0) {
                        for (var f = 0, g = this._steps.length; g > f && !(this._steps[f].t > c) ; f++);
                        var h = this._steps[f - 1];
                        this._updateTargetProps(h, (this._stepPosition = c - h.t) / h.d)
                    }
                return 0 != b && this._actions.length > 0 && (this._useTicks ? this._runActions(c, c) : 1 == b && e > c ? (e != this.duration && this._runActions(e, this.duration), this._runActions(0, c, !0)) : this._runActions(e, c)), d && this.setPaused(!0), this.dispatchEvent("change"), d
            }, b.tick = function (a) {
                this._paused || this.setPosition(this._prevPosition + a)
            }, b.setPaused = function (b) {
                return this._paused === !!b ? this : (this._paused = !!b, a._register(this, !b), this)
            }, b.w = b.wait, b.t = b.to, b.c = b.call, b.s = b.set, b.toString = function () {
                return "[Tween]"
            }, b.clone = function () {
                throw "Tween can not be cloned."
            }, b._updateTargetProps = function (b, c) {
                var d, e, f, g, h, i;
                if (b || 1 != c) {
                    if (this.passive = !!b.v, this.passive) return;
                    b.e && (c = b.e(c, 0, 1, 1)), d = b.p0, e = b.p1
                } else this.passive = !1, d = e = this._curQueueProps;
                for (var j in this._initQueueProps) {
                    null == (g = d[j]) && (d[j] = g = this._initQueueProps[j]), null == (h = e[j]) && (e[j] = h = g), f = g == h || 0 == c || 1 == c || "number" != typeof g ? 1 == c ? h : g : g + (h - g) * c;
                    var k = !1;
                    if (i = a._plugins[j])
                        for (var l = 0, m = i.length; m > l; l++) {
                            var n = i[l].tween(this, j, f, d, e, c, !!b && d == e, !b);
                            n == a.IGNORE ? k = !0 : f = n
                        }
                    k || (this._target[j] = f)
                }
            }, b._runActions = function (a, b, c) {
                var d = a,
                    e = b,
                    f = -1,
                    g = this._actions.length,
                    h = 1;
                for (a > b && (d = b, e = a, f = g, g = h = -1) ;
                    (f += h) != g;) {
                    var i = this._actions[f],
                        j = i.t;
                    (j == e || j > d && e > j || c && j == a) && i.f.apply(i.o, i.p)
                }
            }, b._appendQueueProps = function (b) {
                var c, d, e, f, g;
                for (var h in b)
                    if (void 0 === this._initQueueProps[h]) {
                        if (d = this._target[h], c = a._plugins[h])
                            for (e = 0, f = c.length; f > e; e++) d = c[e].init(this, h, d);
                        this._initQueueProps[h] = this._curQueueProps[h] = void 0 === d ? null : d
                    } else d = this._curQueueProps[h];
                for (var h in b) {
                    if (d = this._curQueueProps[h], c = a._plugins[h])
                        for (g = g || {}, e = 0, f = c.length; f > e; e++) c[e].step && c[e].step(this, h, d, b[h], g);
                    this._curQueueProps[h] = b[h]
                }
                return g && this._appendQueueProps(g), this._curQueueProps
            }, b._cloneProps = function (a) {
                var b = {};
                for (var c in a) b[c] = a[c];
                return b
            }, b._addStep = function (a) {
                return a.d > 0 && (this._steps.push(a), a.t = this.duration, this.duration += a.d), this
            }, b._addAction = function (a) {
                return a.t = this.duration, this._actions.push(a), this
            }, b._set = function (a, b) {
                for (var c in a) b[c] = a[c]
            }, createjs.Tween = createjs.promote(a, "EventDispatcher")
        }(), this.createjs = this.createjs || {},
        function () {
            "use strict";

            function a(a, b, c) {
                this.EventDispatcher_constructor(), this.ignoreGlobalPause = !1, this.duration = 0, this.loop = !1, this.position = null, this._paused = !1, this._tweens = [], this._labels = null, this._labelList = null, this._prevPosition = 0, this._prevPos = -1, this._useTicks = !1, c && (this._useTicks = c.useTicks, this.loop = c.loop, this.ignoreGlobalPause = c.ignoreGlobalPause, c.onChange && this.addEventListener("change", c.onChange)), a && this.addTween.apply(this, a), this.setLabels(b), c && c.paused ? this._paused = !0 : createjs.Tween._register(this, !0), c && null != c.position && this.setPosition(c.position, createjs.Tween.NONE)
            }
            var b = createjs.extend(a, createjs.EventDispatcher);
            b.addTween = function (a) {
                var b = arguments.length;
                if (b > 1) {
                    for (var c = 0; b > c; c++) this.addTween(arguments[c]);
                    return arguments[0]
                }
                return 0 == b ? null : (this.removeTween(a), this._tweens.push(a), a.setPaused(!0), a._paused = !1, a._useTicks = this._useTicks, a.duration > this.duration && (this.duration = a.duration), this._prevPos >= 0 && a.setPosition(this._prevPos, createjs.Tween.NONE), a)
            }, b.removeTween = function (a) {
                var b = arguments.length;
                if (b > 1) {
                    for (var c = !0, d = 0; b > d; d++) c = c && this.removeTween(arguments[d]);
                    return c
                }
                if (0 == b) return !1;
                for (var e = this._tweens, d = e.length; d--;)
                    if (e[d] == a) return e.splice(d, 1), a.duration >= this.duration && this.updateDuration(), !0;
                return !1
            }, b.addLabel = function (a, b) {
                this._labels[a] = b;
                var c = this._labelList;
                if (c) {
                    for (var d = 0, e = c.length; e > d && !(b < c[d].position) ; d++);
                    c.splice(d, 0, {
                        label: a,
                        position: b
                    })
                }
            }, b.setLabels = function (a) {
                this._labels = a ? a : {}
            }, b.getLabels = function () {
                var a = this._labelList;
                if (!a) {
                    a = this._labelList = [];
                    var b = this._labels;
                    for (var c in b) a.push({
                        label: c,
                        position: b[c]
                    });
                    a.sort(function (a, b) {
                        return a.position - b.position
                    })
                }
                return a
            }, b.getCurrentLabel = function () {
                var a = this.getLabels(),
                    b = this.position,
                    c = a.length;
                if (c) {
                    for (var d = 0; c > d && !(b < a[d].position) ; d++);
                    return 0 == d ? null : a[d - 1].label
                }
                return null
            }, b.gotoAndPlay = function (a) {
                this.setPaused(!1), this._goto(a)
            }, b.gotoAndStop = function (a) {
                this.setPaused(!0), this._goto(a)
            }, b.setPosition = function (a, b) {
                0 > a && (a = 0);
                var c = this.loop ? a % this.duration : a,
                    d = !this.loop && a >= this.duration;
                if (c == this._prevPos) return d;
                this._prevPosition = a, this.position = this._prevPos = c;
                for (var e = 0, f = this._tweens.length; f > e; e++)
                    if (this._tweens[e].setPosition(c, b), c != this._prevPos) return !1;
                return d && this.setPaused(!0), this.dispatchEvent("change"), d
            }, b.setPaused = function (a) {
                this._paused = !!a, createjs.Tween._register(this, !a)
            }, b.updateDuration = function () {
                this.duration = 0;
                for (var a = 0, b = this._tweens.length; b > a; a++) {
                    var c = this._tweens[a];
                    c.duration > this.duration && (this.duration = c.duration)
                }
            }, b.tick = function (a) {
                this.setPosition(this._prevPosition + a)
            }, b.resolve = function (a) {
                var b = Number(a);
                return isNaN(b) && (b = this._labels[a]), b
            }, b.toString = function () {
                return "[Timeline]"
            }, b.clone = function () {
                throw "Timeline can not be cloned."
            }, b._goto = function (a) {
                var b = this.resolve(a);
                null != b && this.setPosition(b)
            }, createjs.Timeline = createjs.promote(a, "EventDispatcher")
        }(), this.createjs = this.createjs || {},
        function () {
            "use strict";

            function a() {
                throw "Ease cannot be instantiated."
            }
            a.linear = function (a) {
                return a
            }, a.none = a.linear, a.get = function (a) {
                return -1 > a && (a = -1), a > 1 && (a = 1),
                    function (b) {
                        return 0 == a ? b : 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
                    }
            }, a.getPowIn = function (a) {
                return function (b) {
                    return Math.pow(b, a)
                }
            }, a.getPowOut = function (a) {
                return function (b) {
                    return 1 - Math.pow(1 - b, a)
                }
            }, a.getPowInOut = function (a) {
                return function (b) {
                    return (b *= 2) < 1 ? .5 * Math.pow(b, a) : 1 - .5 * Math.abs(Math.pow(2 - b, a))
                }
            }, a.quadIn = a.getPowIn(2), a.quadOut = a.getPowOut(2), a.quadInOut = a.getPowInOut(2), a.cubicIn = a.getPowIn(3), a.cubicOut = a.getPowOut(3), a.cubicInOut = a.getPowInOut(3), a.quartIn = a.getPowIn(4), a.quartOut = a.getPowOut(4), a.quartInOut = a.getPowInOut(4), a.quintIn = a.getPowIn(5), a.quintOut = a.getPowOut(5), a.quintInOut = a.getPowInOut(5), a.sineIn = function (a) {
                return 1 - Math.cos(a * Math.PI / 2)
            }, a.sineOut = function (a) {
                return Math.sin(a * Math.PI / 2)
            }, a.sineInOut = function (a) {
                return -.5 * (Math.cos(Math.PI * a) - 1)
            }, a.getBackIn = function (a) {
                return function (b) {
                    return b * b * ((a + 1) * b - a)
                }
            }, a.backIn = a.getBackIn(1.7), a.getBackOut = function (a) {
                return function (b) {
                    return --b * b * ((a + 1) * b + a) + 1
                }
            }, a.backOut = a.getBackOut(1.7), a.getBackInOut = function (a) {
                return a *= 1.525,
                    function (b) {
                        return (b *= 2) < 1 ? .5 * b * b * ((a + 1) * b - a) : .5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
                    }
            }, a.backInOut = a.getBackInOut(1.7), a.circIn = function (a) {
                return -(Math.sqrt(1 - a * a) - 1)
            }, a.circOut = function (a) {
                return Math.sqrt(1 - --a * a)
            }, a.circInOut = function (a) {
                return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            }, a.bounceIn = function (b) {
                return 1 - a.bounceOut(1 - b)
            }, a.bounceOut = function (a) {
                return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            }, a.bounceInOut = function (b) {
                return .5 > b ? .5 * a.bounceIn(2 * b) : .5 * a.bounceOut(2 * b - 1) + .5
            }, a.getElasticIn = function (a, b) {
                var c = 2 * Math.PI;
                return function (d) {
                    if (0 == d || 1 == d) return d;
                    var e = b / c * Math.asin(1 / a);
                    return -(a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * c / b))
                }
            }, a.elasticIn = a.getElasticIn(1, .3), a.getElasticOut = function (a, b) {
                var c = 2 * Math.PI;
                return function (d) {
                    if (0 == d || 1 == d) return d;
                    var e = b / c * Math.asin(1 / a);
                    return a * Math.pow(2, -10 * d) * Math.sin((d - e) * c / b) + 1
                }
            }, a.elasticOut = a.getElasticOut(1, .3), a.getElasticInOut = function (a, b) {
                var c = 2 * Math.PI;
                return function (d) {
                    var e = b / c * Math.asin(1 / a);
                    return (d *= 2) < 1 ? -.5 * a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * c / b) : a * Math.pow(2, -10 * (d -= 1)) * Math.sin((d - e) * c / b) * .5 + 1
                }
            }, a.elasticInOut = a.getElasticInOut(1, .3 * 1.5), createjs.Ease = a
        }(), this.createjs = this.createjs || {},
        function () {
            "use strict";

            function a() {
                throw "MotionGuidePlugin cannot be instantiated."
            }
            a.priority = 0, a._rotOffS, a._rotOffE, a._rotNormS, a._rotNormE, a.install = function () {
                return createjs.Tween.installPlugin(a, ["guide", "x", "y", "rotation"]), createjs.Tween.IGNORE
            }, a.init = function (a, b, c) {
                var d = a.target;
                return d.hasOwnProperty("x") || (d.x = 0), d.hasOwnProperty("y") || (d.y = 0), d.hasOwnProperty("rotation") || (d.rotation = 0), "rotation" == b && (a.__needsRot = !0), "guide" == b ? null : c
            }, a.step = function (b, c, d, e, f) {
                if ("rotation" == c && (b.__rotGlobalS = d, b.__rotGlobalE = e, a.testRotData(b, f)), "guide" != c) return e;
                var g, h = e;
                h.hasOwnProperty("path") || (h.path = []);
                var i = h.path;
                if (h.hasOwnProperty("end") || (h.end = 1), h.hasOwnProperty("start") || (h.start = d && d.hasOwnProperty("end") && d.path === i ? d.end : 0), h.hasOwnProperty("_segments") && h._length) return e;
                var j = i.length,
                    k = 10;
                if (!(j >= 6 && (j - 2) % 4 == 0)) throw "invalid 'path' data, please see documentation for valid paths";
                h._segments = [], h._length = 0;
                for (var l = 2; j > l; l += 4) {
                    for (var m, n, o = i[l - 2], p = i[l - 1], q = i[l + 0], r = i[l + 1], s = i[l + 2], t = i[l + 3], u = o, v = p, w = 0, x = [], y = 1; k >= y; y++) {
                        var z = y / k,
                            A = 1 - z;
                        m = A * A * o + 2 * A * z * q + z * z * s, n = A * A * p + 2 * A * z * r + z * z * t, w += x[x.push(Math.sqrt((g = m - u) * g + (g = n - v) * g)) - 1], u = m, v = n
                    }
                    h._segments.push(w), h._segments.push(x), h._length += w
                }
                g = h.orient, h.orient = !0;
                var B = {};
                return a.calc(h, h.start, B), b.__rotPathS = Number(B.rotation.toFixed(5)), a.calc(h, h.end, B), b.__rotPathE = Number(B.rotation.toFixed(5)), h.orient = !1, a.calc(h, h.end, f), h.orient = g, h.orient ? (b.__guideData = h, a.testRotData(b, f), e) : e
            }, a.testRotData = function (a, b) {
                if (void 0 === a.__rotGlobalS || void 0 === a.__rotGlobalE) {
                    if (a.__needsRot) return;
                    a.__rotGlobalS = a.__rotGlobalE = void 0 !== a._curQueueProps.rotation ? a._curQueueProps.rotation : b.rotation = a.target.rotation || 0
                }
                if (void 0 !== a.__guideData) {
                    var c = a.__guideData,
                        d = a.__rotGlobalE - a.__rotGlobalS,
                        e = a.__rotPathE - a.__rotPathS,
                        f = d - e;
                    if ("auto" == c.orient) f > 180 ? f -= 360 : -180 > f && (f += 360);
                    else if ("cw" == c.orient) {
                        for (; 0 > f;) f += 360;
                        0 == f && d > 0 && 180 != d && (f += 360)
                    } else if ("ccw" == c.orient) {
                        for (f = d - (e > 180 ? 360 - e : e) ; f > 0;) f -= 360;
                        0 == f && 0 > d && -180 != d && (f -= 360)
                    }
                    c.rotDelta = f, c.rotOffS = a.__rotGlobalS - a.__rotPathS, a.__rotGlobalS = a.__rotGlobalE = a.__guideData = a.__needsRot = void 0
                }
            }, a.tween = function (b, c, d, e, f, g, h) {
                var i = f.guide;
                if (void 0 == i || i === e.guide) return d;
                if (i.lastRatio != g) {
                    var j = (i.end - i.start) * (h ? i.end : g) + i.start;
                    switch (a.calc(i, j, b.target), i.orient) {
                        case "cw":
                        case "ccw":
                        case "auto":
                            b.target.rotation += i.rotOffS + i.rotDelta * g;
                            break;
                        case "fixed":
                        default:
                            b.target.rotation += i.rotOffS
                    }
                    i.lastRatio = g
                }
                return "rotation" != c || i.orient && "false" != i.orient ? b.target[c] : d
            }, a.calc = function (b, c, d) {
                void 0 == b._segments && a.validate(b), void 0 == d && (d = {
                    x: 0,
                    y: 0,
                    rotation: 0
                });
                for (var e = b._segments, f = b.path, g = b._length * c, h = e.length - 2, i = 0; g > e[i] && h > i;) g -= e[i], i += 2;
                var j = e[i + 1],
                    k = 0;
                for (h = j.length - 1; g > j[k] && h > k;) g -= j[k], k++;
                var l = k / ++h + g / (h * j[k]);
                i = 2 * i + 2;
                var m = 1 - l;
                return d.x = m * m * f[i - 2] + 2 * m * l * f[i + 0] + l * l * f[i + 2], d.y = m * m * f[i - 1] + 2 * m * l * f[i + 1] + l * l * f[i + 3], b.orient && (d.rotation = 57.2957795 * Math.atan2((f[i + 1] - f[i - 1]) * m + (f[i + 3] - f[i + 1]) * l, (f[i + 0] - f[i - 2]) * m + (f[i + 2] - f[i + 0]) * l)), d
            }, createjs.MotionGuidePlugin = a
        }(), this.createjs = this.createjs || {},
        function () {
            "use strict";
            var a = createjs.TweenJS = createjs.TweenJS || {};
            a.version = "0.6.0", a.buildDate = "Thu, 11 Dec 2014 23:32:09 GMT"
        }();
    var game = {};
    var hintImage, selectedImage, shadowImage;
    $(function () {
        var getTextWidth = function () {
            var $rule = $(document.createElement("span"));
            return function (selector) {
                var $elements = $(selector);
                $rule.css({
                    display: "inline-block",
                    font: $elements.css("font")
                }).appendTo("body");
                return $elements.get().map(function (element) {
                    $rule.text(element.innerText);
                    return $rule.width()
                })
            }
        }();
        var mahjong;
        Locale.load().then(function () {
            $("[data-lang-ref]").each(function () {
                var key = this.getAttribute("data-lang-ref");
                var self = this;
                $.execFunction(function () {
                    self.innerHTML = Locale._e(key)
                })
            });
            var maxWidth = Math.max.apply(null, getTextWidth(".button span")) + 2;
            $(".button").css("width", maxWidth);
            $(".ui-slider").remove();
            $("[data-role='slider']").slider("destroy").slider();
            mahjong = new game.Mahjong({
                background: "mahjong/images/backgrounds/normal/Antique.jpg",
                sprite: "mahjong/images/tiles/normal/modern.png",
                map: "anchor",
                animation: {
                    attrs: ["tx", "x", "ty", "y", "scaleX", "scaleY"],
                    delay: 20,
                    ease: "quintOut",
                    timing: "row",
                    delayPerTile: true
                },
                rateReminderLinkChrome: ""
            })
        });

        function initSoundJS() {
            if (!createjs.Sound.initializeDefaultPlugins()) {
                return
            }
            var audioPath = "mahjong/sounds/";
            var manifest = [{
                id: "new_game",
                src: "new_game.mp3"
            }, {
                id: "pairing",
                src: "pairing.mp3",
                data: 3
            }, {
                id: "undo",
                src: "undo.mp3",
                data: 6
            }, {
                id: "game_won",
                src: "game_won.mp3"
            }];
            createjs.Sound.alternateExtensions = ["ogg", "m4a"];
            createjs.Sound.addEventListener("fileload", handleLoad);
            createjs.Sound.registerSounds(manifest, audioPath)
        }

        function handleLoad(event) { }
        initSoundJS()
    });
    (function () {
        "use strict";
        var PREVIEW_PATH = "mahjong/images/layouts_preview";
        var TILES_PATH = "mahjong/images/tiles/thumbnails";
        var BACKGROUNDS_PATH = "mahjong/images/backgrounds/thumbnails";
        var mapsTemplate = ["{{#each rows}}", "<li>", "{{#each cols}}", '<div class="div-mapimage">', "{{#if image}}", '<img src="{{image}}" data-map="{{map}}" class="mapimage" />', '<label class="label-mapimage">', "{{#trans}}{{name}}{{/trans}}", "</label>", "{{/if image}}", "</div>", "{{/each cols}}", "</li>", "{{/each rows}}"].join("\n");
        var thumb_layouts = {
            aladdin_s_lamp: "aladdin_s_lamp.jpg",
            amphitheater: "amphitheater.jpg",
            anchor: "anchor.jpg",
            asterix: "asterix.jpg",
            birthday_cake: "birthday_cake.jpg",
            blocks: "blocks.jpg",
            bridges: "bridges.jpg",
            british_pound_symbol: "british_pound_symbol.jpg",
            buckle: "buckle.jpg",
            candy: "candy.jpg",
            citadel: "citadel.jpg",
            coffee_cup: "coffee_cup.jpg",
            cross: "cross.jpg",
            cup_cake: "cup_cake.jpg",
            diamond_and_spade: "diamond_and_spade.jpg",
            dna: "dna.jpg",
            dollar_symbol: "dollar_symbol.jpg",
            duck: "duck.jpg",
            double_t: "double_t.jpg",
            dragonfly: "dragonfly.jpg",
            elephant: "elephant.jpg",
            football_helmet: "football_helmet.jpg",
            fortress: "fortress.jpg",
            gothic_window: "gothic_window.jpg",
            headphones: "headphones.jpg",
            hexagon: "hexagon.jpg",
            hourglass: "hourglass.jpg",
            keep: "keep.jpg",
            key: "key.jpg",
            lighthouse: "lighthouse.jpg",
            locomotive: "locomotive.jpg",
            musical_notes: "musical_notes.jpg",
            one_way: "one_way.jpg",
            pentomino_shape: "pentomino_shape.jpg",
            planet_earth_symbol: "planet_earth_symbol.jpg",
            rhombus: "rhombus.jpg",
            santa_claus: "santa_claus.jpg",
            shield: "shield.jpg",
            spring_fountain: "spring_fountain.jpg",
            standard: "standard.jpg",
            teapot: "teapot.jpg",
            tipi: "tipi.jpg",
            turtle: "turtle.jpg",
            twins: "twins.jpg",
            two_directions: "two_directions.jpg",
            umbrella: "umbrella.jpg",
            usb_key: "usb_key.jpg",
            wings: "wings.jpg",
            yen_symbol: "yen_symbol.jpg"
        };
        var thumb_tiles = {
            thumb_modern: "modern.png",
            thumb_shapes: "shapes.png",
            thumb_traditional_chinese: "traditional_chinese.png"
        };
        var thumb_backs = {
            thumb_Antique: "Antique.jpg",
            thumb_Bamboo: "Bamboo.jpg",
            thumb_Garden: "Garden.jpg",
            thumb_Floor: "Floor.jpg",
            thumb_Canyon: "Canyon.jpg"
        };

        function loadImages(imagesData, basePath) {
            var images = {};
            for (var attr in imagesData) {
                images[attr] = new Image;
                images[attr].src = basePath + "/" + imagesData[attr]
            }
            return images
        }
        window.initUI = function (mahjong) {
            var $popupSettings = $("#popup-setting");
            var $soundOptions = $("#sound-option");
            createjs.Sound.setMute(localDatas["soundon"] === "off");
            thumb_layouts = loadImages(thumb_layouts, PREVIEW_PATH);
            thumb_tiles = loadImages(thumb_tiles, TILES_PATH);
            thumb_backs = loadImages(thumb_backs, BACKGROUNDS_PATH);
            hintImage = new Image;
            hintImage.src = "mahjong/images/others/tile_hint.png";
            selectedImage = new Image;
            selectedImage.src = "mahjong/images/others/tile_select.png";
            shadowImage = new Image;
            shadowImage.src = "mahjong/images/others/tile_shadow.png";
            document.getElementById("game-score").innerHTML = Locale._e("score") + ": " + mahjong.score;
            $("#toolbar").bind("touchmove", function (e) {
                e.preventDefault()
            });
            $("#btn-shuffle").click(mahjong.shuffle.bind(mahjong));
            $("#btn-undo").click(mahjong.undo.bind(mahjong));
            $("#btn-hint").click(mahjong.drawHintBlock.bind(mahjong));
            $("#open-popup-help").on("click", function (e) {
                e.preventDefault();
                var afterClose = function () {
                    $("#popup-help").popup("open");
                    $popupSettings.off("popupafterclose")
                };
                $popupSettings.on("popupafterclose", function () {
                    setTimeout(afterClose, 10)
                });
                $popupSettings.popup("close")
            });
            $("#open-popup-about").on("click", function (e) {
                e.preventDefault();
                var afterClose = function () {
                    $("#popup-about").popup("open");
                    $popupSettings.off("popupafterclose")
                };
                $popupSettings.on("popupafterclose", function () {
                    setTimeout(afterClose, 10)
                });
                $popupSettings.popup("close")
            });
            $("#rateapp-dialog").on("popupafterclose", function () {
                setTimeout(mahjong.openUsernameForm.bind(mahjong), 10)
            });
            $("#open-popup-options").on("click", function (e) {
                e.preventDefault();
                var afterClose = function () {
                    $("#popup-options").popup("open");
                    $popupSettings.off("popupafterclose")
                };
                $popupSettings.on("popupafterclose", function () {
                    setTimeout(afterClose, 10)
                });
                $popupSettings.popup("close");
                $soundOptions.val(localDatas["soundon"]);
                $soundOptions.slider("refresh")
            });
            $("#btn-setting").click(function () {
                $popupSettings.popup("open")
            });
            $("#open-popup-hiscores").on("click", function (e) {
                e.preventDefault();
                var afterClose = function () {
                    mahjong.displayHighScore();
                    $("#popup-highscore").popup("open");
                    $popupSettings.off("popupafterclose")
                };
                $popupSettings.on("popupafterclose", function () {
                    setTimeout(afterClose, 10)
                });
                $popupSettings.popup("close")
            });
            var maps = Object.keys(thumb_layouts).map(function (map) {
                return {
                    name: map.replace(/_/g, "-"),
                    image: thumb_layouts[map].src,
                    map: map
                }
            });
            var locale = {
                locale: Locale.lang
            };
            var compareOpts = {
                sensitivity: "base"
            };

            function localeCompare(str1, str2) {
                return str1.localeCompare(str2, locale, compareOpts)
            }

            function updateGameList() {
                maps = maps.sort(function (a, b) {
                    return localeCompare(Locale._e(a.name), Locale._e(b.name))
                });
                var table = $.createTable({
                    data: maps,
                    cols: 4
                });
                $("#maps").html($.template(mapsTemplate, table));

                function getHeight(index, element) {
                    return element.offsetHeight
                }

                function getHeight(index, element) {
                    return element.offsetHeight
                }
                $("#popup-game").one("popupbeforeposition", function () {
                    $("#maps li").each(function () {
                        var $labels = $(this).find("label");
                        var maxHeight = Math.max.apply(null, $labels.map(getHeight));
                        $labels.css("height", maxHeight)
                    })
                })
            }
            $(window).on("language:change", updateGameList);
            updateGameList();
            $("#btn-games").click(function () {
                $("#tile-style").attr("value", mahjong.options.sprite);
                $("#maps").css("height", $(window).height() * .5 + "px");
                $("#popup-game").popup("open")
            });
            $("#open-popup-appearance").on("click", function (e) {
                e.preventDefault();
                $("#tile-style").attr("value", mahjong.options.sprite);
                var $thumbs = $("#tiles .tileimage");
                for (var i = 0; i < $thumbs.length; i++) {
                    $($thumbs[i]).attr("src", thumb_tiles["thumb_" + $($thumbs[i]).data("tile")].src)
                }
                $thumbs = $("#backgrounds .backimage");
                for (var i = 0; i < $thumbs.length; i++) {
                    $($thumbs[i]).attr("src", thumb_backs["thumb_" + $($thumbs[i]).data("tile")].src)
                }
                var afterClose = function () {
                    $("#popup-appearance").popup("open");
                    $popupSettings.off("popupafterclose")
                };
                $popupSettings.on("popupafterclose", function () {
                    setTimeout(afterClose, 10)
                });
                $popupSettings.popup("close")
            });
            $("#btn-restart").on("click", function () {
                mahjong.timer.restart();
                initialTime = 0;
                localDatas["levelData"] = [];
                mahjong.score = 0;
                localDatas["score"] = 0;
                createjs.Sound.play("new_game");
                mahjong.restart.call(mahjong)
            });
            $soundOptions.bind("change", function (event, ui) {
                localDatas["soundon"] = this.value;
                createjs.Sound.setMute(this.value === "off")
            });
            $("#btn-username-ok").click(function () {
                mahjong.manageHighScore(mahjong.timer.getTime(), mahjong.score, $("#player-name").val())
            });
            $("#maps").on("click", "img", function (e) {
                var $this = $(this);
                mahjong.$$loaded = false;
                mahjong.resources.ajax.map = "mahjong/layouts/" + $this.data("map") + ".txt";
                mahjong.resources.level.map = $this.data("map");
                mahjong.timer.restart();
                initialTime = 0;
                localDatas["levelData"] = [];
                mahjong.score = 0;
                localDatas["score"] = 0;
                createjs.Sound.play("new_game");
                game.loadResources(mahjong.resources).then(mahjong.onLoad.bind(mahjong));
                $("#popup-game").popup("close")
            });
            var allGames = $("#maps img").get();
            $(".random-game").on("click", function (e) {
                var game = $.shuffle(allGames)[0];
                $(game).click()
            });
            $(".cb-tiles").click(function (e) {
                var parent = $(this).parents(".switch");
                $(".cb-backs", parent).removeClass("selected");
                $(this).addClass("selected");
                $("#tiles").show();
                $("#backgrounds").hide()
            });
            $(".cb-backs").click(function (e) {
                var parent = $(this).parents(".switch");
                $(".cb-tiles", parent).removeClass("selected");
                $(this).addClass("selected");
                $("#tiles").hide();
                $("#backgrounds").show()
            });
            $(".ui-btn-close").click(function (e) {
                $(".ui-popup").popup("close")
            });
            $("#tiles img").click(function (e) {
                var spritePath = "mahjong/images/tiles/normal/" + $(this).data("tile") + ".png";
                mahjong.resources.images.image = spritePath;
                localDatas["sprite"] = spritePath;
                game.loadResources(mahjong.resources).then(function () {
                    mahjong.view.find("tile").attr({
                        image: mahjong.image
                    });
                    mahjong.updateView()
                });
                $("#popup-appearance").popup("close", {
                    transition: "fade"
                })
            });
            $("#backgrounds img").click(function (e) {
                localDatas["background"] = mahjong.resources.background.image = mahjong.options.background = "mahjong/images/backgrounds/normal/" + $(this).data("tile") + ".jpg";
                game.loadResources(mahjong.resources).then(function () {
                    $("#mainarea").css("background", "url(" + mahjong.resources.background.image + ")");
                    $("#mainarea").css("background-size", "100% 100%")
                });
                $("#popup-appearance").popup("close", {
                    transition: "fade"
                })
            })
        }
    })();
    (function ($) {
        var slice = [].slice;
        var browser = $.browser = {
            chrome: false,
            mozilla: false,
            opera: false,
            msie: false,
            safari: false
        };
        var sBrowser, sUsrAg = navigator.userAgent;
        if (sUsrAg.indexOf("OPR") > -1) {
            browser.opera = true
        } else if (sUsrAg.indexOf("Chrome") > -1) {
            browser.chrome = true
        } else if (sUsrAg.indexOf("Safari") > -1) {
            browser.safari = true
        } else if (sUsrAg.indexOf("Opera") > -1) {
            browser.opera = true
        } else if (sUsrAg.indexOf("Firefox") > -1) {
            browser.mozilla = true
        } else if (sUsrAg.indexOf("MSIE") > -1 || sUsrAg.match(/Trident.*rv\:11\./)) {
            browser.msie = true
        } else if (sUsrAg.indexOf("Trident") > -1) {
            browser.msie = true
        }

        function toArray(a, i) {
            return slice.call(a, i || 0)
        }
        if (!Function.prototype.bind) {
            Function.prototype.bind = function () {
                var self = this,
                    ctx = arguments[0],
                    args = toArray(arguments, 1);
                return function () {
                    return self.apply(ctx, args.concat(toArray(arguments)))
                }
            }
        }
        $.shuffle = function (array) {
            var tmp, current, top = array.length;
            if (top) {
                while (--top) {
                    current = ~~(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp
                }
            }
            return array
        };
        $.fullScreen = function () {
            if (document.documentElement.scrollHeight < window.outerHeight / window.devicePixelRatio) {
                document.body.style.height = window.outerHeight / window.devicePixelRatio + 1 + "px";
                setTimeout(function () {
                    window.scrollTo(1, 1)
                }, 0)
            } else {
                window.scrollTo(1, 1)
            }
        };
        $.getTileTypes = function (tiles) {
            var types = $.map(tiles, function (tile) {
                return tile.imgx
            });
            types.sort();
            types = jQuery.grep(types, function (pos, i) {
                return i % 2
            });
            return types
        };
        $.randInt = function (n) {
            return ~~(Math.random() * n)
        };
        $.tmpl = function (tmplId, values) {
            var tmpl = document.getElementById(tmplId).innerHTML;
            for (var tag in values) {
                if (values.hasOwnProperty(tag)) {
                    tmpl = tmpl.replace(new RegExp("{" + tag + "}", "g"), values[tag])
                }
            }
            return tmpl
        };
        $.formatTime = function (time) {
            var t = ~~(time / 1e3),
                s = t % 60,
                m = ~~(t / 60),
                h = ~~(m / 60);
            m %= 60;
            if (!h) {
                return (m > 9 ? m : "0" + m % 60) + ":" + (s > 9 ? s : "0" + s)
            }
            return (h > 9 ? h : "0" + h) + ":" + (m > 9 ? m : "0" + m % 60) + ":" + (s > 9 ? s : "0" + s)
        };
        $.sortByScore = function (a, b) {
            if (a.score > b.score) return -1;
            if (a.score < b.score) return 1;
            return 0
        };
        $.sortByTime = function (a, b) {
            if (a.time < b.time) return -1;
            if (a.time > b.time) return 1;
            return 0
        };
        $.execFunction = function () {
            if (typeof MSApp === "undefined" || !MSApp.execUnsafeLocalFunction) return function (fn) {
                fn()
            };
            else return MSApp.execUnsafeLocalFunction
        }();
        $.throttle = function (func, wait, options) {
            var context, args, result;
            var timeout = null;
            var previous = 0;
            if (!options) options = {};
            var later = function () {
                previous = options.leading === false ? 0 : (new Date).getTime();
                timeout = null;
                result = func.apply(context, args);
                if (!timeout) context = args = null
            };
            return function () {
                var now = (new Date).getTime();
                if (!previous && options.leading === false) previous = now;
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0 || remaining > wait) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null
                    }
                    previous = now;
                    result = func.apply(context, args);
                    if (!timeout) context = args = null
                } else if (!timeout && options.trailing !== false) {
                    timeout = setTimeout(later, remaining)
                }
                return result
            }
        };

        function makeProxy(name) {
            return function () {
                (this._JQ || (this._JQ = $(this)))[name].apply(this._JQ, arguments)
            }
        }
        $.eventEmitter = {
            emit: makeProxy("trigger"),
            once: makeProxy("one"),
            on: makeProxy("on"),
            off: makeProxy("off")
        };
        $.createTable = function (options) {
            var rows = [];
            var length = options.data.length;
            for (var i = 0; i < length;) {
                var cols = [];
                for (var j = 0; j < options.cols; j++) {
                    cols.push(options.data[i++] || {})
                }
                rows.push({
                    cols: cols
                })
            }
            return {
                rows: rows
            }
        };
        var templateFn = {
            each: function (template, param, data) {
                return param.map(function (item, index) {
                    item.$index = index;
                    return $.template(template, item)
                }).join("")
            },
            if: function (template, param, data) {
                return param ? $.template(template, data) : ""
            },
            unless: function (template, param, data) {
                return param ? "" : $.template(template, data)
            },
            trans: function (key, param, data) {
                return Locale._e($.template(key, data))
            }
        };
        $.template = function (tmpl, data) {
            var fnTemplate = /{{#([^}]+)}}([\s\S]*?){{\/\1}}/g;
            tmpl = tmpl.replace(fnTemplate, function (match, fnCall, innerTmpl) {
                fnCall = fnCall.split(" ");
                var fnName = fnCall[0];
                var param = fnCall[1];
                param = param === "this" ? data : data[param];
                return templateFn[fnName] ? templateFn[fnName](innerTmpl, param, data) : ""
            });
            return tmpl.replace(/{{([^}]+)}}/g, function (match, key) {
                if (key === "this") return data;
                return data[key] === undefined ? "" : data[key]
            })
        }
    })(jQuery);
    window.uniStore = function () {
        "use strict";
        var s = {},
            useWindowStore = false,
            prefix = "reborngame.mahjong.";
        if (window.Windows && Windows.Storage) {
            useWindowStore = true
        }
        if (useWindowStore) {
            var store = Windows.Storage.ApplicationData.current.localSettings.values;
            var chunkSpecifier = "--cut--";
            var chunkSize = 2e3;
            s.get = function (key) {
                if (store[key] == chunkSpecifier) {
                    return s.getChunk(key)
                } else {
                    return store[key] === null || store[key] === undefined ? null : "" + store[key]
                }
            };
            s.getChunk = function (key, value) {
                var i = 0;
                var r = [];
                while (store[i + key]) {
                    r.push(store[i + key]);
                    i++
                }
                return r.join("")
            };
            s.setChunk = function (key, value) {
                store[key] = chunkSpecifier;
                var i = 0;
                while (i * chunkSize < value.length) {
                    store[i + key] = value.slice(i * chunkSize, (i + 1) * chunkSize);
                    i++
                }
            };
            s.set = function (key, value) {
                if (value === null) {
                    s.remove(key)
                } else {
                    if (store[key] == chunkSpecifier) {
                        s.remove(key)
                    }
                    value = "" + value;
                    if (value.length < chunkSize) {
                        store[key] = value + ""
                    } else {
                        s.setChunk(key, value)
                    }
                }
            };
            s.removeChunk = function (key) {
                var i = 0;
                while (store[i + key]) {
                    store.remove(i + key);
                    i++
                }
            };
            s.remove = function (key) {
                if (store[key] == chunkSpecifier) {
                    s.removeChunk(key)
                } else {
                    store.remove(key)
                }
            }
        } else {
            s.set = function (key, value) {
                localStorage.setItem(prefix + key, value)
            };
            s.get = function (key) {
                return localStorage.getItem(prefix + key)
            };
            s.remove = function (key) {
                localStorage.removeItem(prefix + key)
            }
        }
        s.allKeys = {
            version: "version",
            lastname: "lastgame",
            background: "background",
            sprite: "sprite",
            time: "time",
            score: "score",
            levelData: "map",
            tilePositions: "tilestatus",
            mapname: "mapname",
            soundon: "soundon",
            cntTiles: "tileCount",
            highScore: "highScores",
            layoutName: "layoutname"
        };
        s.getVersion = function () {
            var v = s.get("version");
            if (!v) {
                if (s.get("lastgame")) return 0;
                else return -1
            } else {
                return parseInt(v, 10)
            }
        };
        s.getInt = function (key) {
            var val = this.get(key);
            if (isNaN(val)) {
                return 0
            } else {
                return parseInt(val, 10)
            }
        };
        s.setVersion = function (val) {
            return s.set("version", val)
        };
        s.useMemStore = function () {
            var mem = {};
            s.set = function (key, value) {
                mem[key] = value + ""
            };
            s.get = function (key) {
                return mem[key]
            };
            s.remove = function (key) {
                delete mem[key]
            }
        };
        if (!useWindowStore) {
            try {
                var a = localStorage["test"];
                localStorage["test"] = "test"
            } catch (e) {
                s.useMemStore()
            }
        }
        return s
    }();
    
    var firstLoad = true;
    var drawShadow = true;
    var shadowBorder = 20;
    var initialShuffle = false;
    var initialTime = 0;
    var ua = navigator.userAgent,
        isWindowPhoneApp = /windows/i.test(ua) && /phone/i.test(ua),
        isWindowApp = window.MSApp,
        isApp = window.MSApp || window.cordova,
        isChrome = /chrome/i.test(ua);
    var localDatas = {
        background: null,
        sprite: null,
        time: 0,
        score: 0,
        levelData: [],
        mapname: null,
        soundon: "on",
        totalCntTiles: 0,
        highScore: null
    };
    Object.defineProperty(window, "createEvent", {
        value: function (name, data) {
            try {
                return new CustomEvent(name, {
                    bubbles: true,
                    cancelable: true,
                    detail: data
                })
            } catch (e) {
                var event = document.createEvent("CustomEvent");
                event.initCustomEvent(name, true, true, data);
                return event
            }
        }
    });

    function saveData() {
        uniStore.set(uniStore.allKeys["score"], localDatas["score"]);
        uniStore.set(uniStore.allKeys["time"], localDatas["time"]);
        uniStore.set(uniStore.allKeys["background"], localDatas["background"]);
        uniStore.set(uniStore.allKeys["sprite"], localDatas["sprite"]);
        uniStore.set(uniStore.allKeys["mapname"], localDatas["mapname"]);
        uniStore.set(uniStore.allKeys["levelData"], JSON.stringify(localDatas["levelData"]));
        uniStore.set(uniStore.allKeys["soundon"], localDatas["soundon"]);
        uniStore.set(uniStore.allKeys["cntTiles"], localDatas["totalCntTiles"]);
        uniStore.set(uniStore.allKeys["highScore"], JSON.stringify(localDatas["highScore"]))
    }
    window.onbeforeunload = saveData;

    var loadDataFromStore = function () {
        if (checkExistOnStore(uniStore.allKeys["score"])) {
            localDatas["score"] = uniStore.getInt(uniStore.allKeys["score"])
        } else {
            localDatas["score"] = 0
        }
        if (checkExistOnStore(uniStore.allKeys["time"])) {
            initialTime = uniStore.getInt(uniStore.allKeys["time"])
        }
        if (checkExistOnStore(uniStore.allKeys["background"])) {
            localDatas["background"] = uniStore.get(uniStore.allKeys["background"])
        } else {
            localDatas["background"] = "mahjong/images/backgrounds/normal/Antique.jpg"
        }
        if (checkExistOnStore(uniStore.allKeys["sprite"])) {
            localDatas["sprite"] = uniStore.get(uniStore.allKeys["sprite"])
        } else {
            localDatas["sprite"] = "mahjong/images/tiles/normal/modern.png"
        }
        if (checkExistOnStore(uniStore.allKeys["mapname"])) {
            localDatas["mapname"] = uniStore.get(uniStore.allKeys["mapname"])
        } else {
            localDatas["mapname"] = "standard"
        }
        if (checkExistOnStore(uniStore.allKeys["levelData"])) {
            try {
                localDatas["levelData"] = JSON.parse(uniStore.get(uniStore.allKeys["levelData"]))
            } catch (e) {
                console.error("Error loading level data", e.toString(), uniStore.get(uniStore.allKeys["levelData"]));
                localDatas["levelData"] = []
            }
        }
        if (checkExistOnStore(uniStore.allKeys["soundon"])) {
            localDatas["soundon"] = uniStore.get(uniStore.allKeys["soundon"])
        }
        if (checkExistOnStore(uniStore.allKeys["cntTiles"])) {
            localDatas["totalCntTiles"] = uniStore.get(uniStore.allKeys["cntTiles"])
        }
        if (checkExistOnStore(uniStore.allKeys["highScore"])) {
            try {
                localDatas["highScore"] = JSON.parse(uniStore.get(uniStore.allKeys["highScore"]))
            } catch (e) {
                console.error("Error loading high score", e.toString(), uniStore.get(uniStore.allKeys["highScore"]));
                localDatas["highScore"] = {}
            }
        } else {
            localDatas["highScore"] = {}
        }
        setTimeout(function () {
            createjs.Sound.setMute(localDatas["soundon"] === "off")
        })
    };
    var checkExistOnStore = function (object) {
        if (uniStore.get(object) == null || uniStore.get(object) == undefined) return false;
        return true
    };
    (function (document, window, $, undefined) {
        var tileHeight = 142;
        var tileWidth = 110;
        var tileBorder = 22;
        var tiles;
        var tmpTiles = [];
        var pairs = document.getElementById("pairs");
        var score = localDatas["score"];
        var isMobile = "ontouchstart" in window && /mobile/i.exec(navigator.userAgent);
        var BOARD_HEIGHT = 1130;
        var BOARD_WIDTH = 1600;
        var MARGIN_BOTTOM = 10;
        var MAX_WIDTH = 0;
        var MAX_HEIGHT = 0;
        var CACHE = {};
        var FOUNDS = 0;
        var SHUFFLE_PATH = [];
        var UNDO_PENALTY = 150;
        var HINT_PENALTY = 50;
        var POINTS_PER_PAIR = 50;
        var H_SHIFTED_TILE = 2;
        var V_SHIFTED_TILE = 3;
        var CENTERED_TILE = 4;
        var DEFAULT_OPTIONS = {
            background: "mahjong/images/backgrounds/normal/Antique.jpg",
            sprite: "mahjong/images/tiles/normal/modern.png",
            map: "space",
            maxUndo: 30,
            timePenalty: 6e4
        };
        var min = Math.min.apply.bind(Math.min, null);
        var max = Math.max.apply.bind(Math.max, null);

        function flatten(array) {
            return [].concat.apply([], array)
        }

        function Mahjong(options) {
            window.autoplay = autoplay.bind(this);
            this.options = $.extend(DEFAULT_OPTIONS, options);
            this.animation = this.options.animation || {};
            this.view = new Cevent("canvas");
            this.cmdManager = new game.CommandManager(this.options.maxUndo);
            //this.rateReminder = new game.RateReminder(this.options);
            this.updateView = this.view.redraw.bind(this.view);
            this.resize = resizeGame.bind(this);
            this.countMatches = check.bind(this);
            this.timer = null;
            this.score = 0;
            this.$usernamePopup = $("#popup-username");
            this.$highscorePopup = $("#popup-highscore");
            var marginLeft = 0;
            if (isApp) {
                marginLeft = 0
            }
            $("#mainarea").css("margin-left", marginLeft);
            $("#popup-game").css("margin-left", marginLeft);
            $("#popup-username").css("margin-left", marginLeft);
            $("#popup-highscore").css("margin-left", marginLeft);
            $("#popup-setting").css("margin-left", marginLeft);
            $("#popup-appearance").css("margin-left", marginLeft);
            $("#popup-help").css("margin-left", marginLeft);
            $("#popup-about").css("margin-left", marginLeft);
            $("#popup-options").css("margin-left", marginLeft);
            $("#popup-congrat").css("margin-left", marginLeft);
            initUI(this);
            this.restoreOptions();
            this.loadResources();
            this.initEvents();


            //function addDocNode(c, b, f) {
            //    var e = document.createElement(c);
            //    for (var d in b) {
            //        e[d] = b[d]
            //    }
            //    f = (f || document.getElementsByTagName("head")[0]);
            //    f.insertBefore(e, f.childNodes[0]);
            //}


            //setTimeout(function () {
            //    if ($(window).width() >= 1024 && $(window).height() >= 768) {
            //        (adsbygoogle = window.adsbygoogle || []).push({});
            //        $("body").append('<ins class="adsbygoogle" style="display:inline-block;width:120px;height:600px;position:fixed; top:50px; right:0px; z-index:999992" data-ad-client="ca-pub-6289839502769272" data-ad-slot="9768592582"></ins>');
            //        addDocNode("script", {
            //            type: "text/javascript",
            //            src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            //        });
            //    }
            //}, 4000);
                

            //todo: Raymond - Get Score

            //try {
            //    var scoreKey = "reborngame.mahjong.xpscores";
            //    var localScore = window.localStorage.getItem(scoreKey);

            //    localScore = (localScore == null ? 0 : localScore);

            //    getGameScore("Mahjong 2", localScore, function (newScore) {
            //        window.localStorage.setItem(scoreKey, newScore);
            //    });
            //}
            //catch (err) {}
        }
        Mahjong.prototype.setAnimation = function (animation) {
            this.animation = animation
        };
        jQuery.extend(Mahjong.prototype, jQuery.eventEmitter);
        Mahjong.prototype.restoreOptions = function () {
            this.options.background = localDatas["background"];
            this.options.sprite = localDatas["sprite"];
            this.options.map = localDatas["mapname"]
        };
        Mahjong.prototype.saveOptions = function () {
            localDatas["background"] = this.resources.background.image;
            localDatas["mapname"] = this.resources.level.map;
            localDatas["sprite"] = this.resources.images.image
        };
        Mahjong.prototype.loadResources = function () {
            this.resources = {
                background: {
                    image: this.options.background
                },
                images: {
                    image: this.options.sprite
                },
                level: {
                    map: this.options.map
                },
                ajax: {
                    map: "mahjong/layouts/" + this.options.map + ".txt"
                },
                json: {
                    en_lang: "mahjong/locales/en.json"
                },
                context: this
            };
            game.loadResources(this.resources).then(this.onLoad.bind(this))
        };
        Mahjong.prototype.onLoad = function () {
            this.$$loaded = true;
            this.hideSplash();
            this.saveOptions();
            this.changeGameBackground();
            if (firstLoad == true) this.showTopbarText();
            this.processMap(localDatas["levelData"]);
            this.resize();
            this.start();
            $("body").removeClass("loading")
        };
        Mahjong.prototype.showTopbarText = function () {
            setTimeout(function () {
                $(".text-shadow").show()
            }, 200)
        };
        Mahjong.prototype.hideSplash = function () {
            $("#splash-screen").hide()
        };
        Mahjong.prototype.changeGameBackground = function () {
            //todo: Raymond
            //$("#mainarea").css({
            //    background: "url(" + this.resources.background.image + ")",
            //    "background-size": "100% 100%"
            //})
            $(".ui-page").css({
                background: "url(" + this.resources.background.image + ")",
                "background-size": "100% 100%"
            })
        };
        Mahjong.prototype.start = function () {
            if (!this.$$loaded) return;
            window.dispatchEvent(createEvent("game:start"));
            this.cmdManager.reset();
            this.timer = new game.Timer("game-time");
            this.timer.restart();
            this.timer.addTime(initialTime);
            this.updateScore(this.score);
            FOUNDS = 0;
            this.view._shapes.length = 0;
            this.drawMap();
            if (!initialTime && this.score === 0) this.shuffle(this)
        };
        Mahjong.prototype.restart = function () {
            this.$$loaded = false;
            this.score = 0;
            initialTime = 0;
            localDatas["score"] = 0;
            localDatas["levelData"] = [];
            createjs.Sound.play("new_game");
            this.resources.ajax.map = "mahjong/layouts/" + this.resources.level.map + ".txt";
            game.loadResources(this.resources).then(this.onLoad.bind(this))
        };
        Mahjong.prototype.undo = function () {
            if (!this.cmdManager.undo()) return;
            FOUNDS -= 2;
            this.score -= UNDO_PENALTY;
            localDatas["score"] = this.score;
            this.updateScore(this.score);
            createjs.Sound.play("undo");
            setTimeout(this.countMatches, 100)
        };
        var offscrenValues = {
            y: 0,
            ty: -tileHeight * 1.5,
            x: 0,
            tx: -tileWidth * 1.5,
            scaleX: 0,
            scaleY: 0
        };
        Mahjong.prototype.newGameAnimation = function () {
            createjs.Ticker.timingMode = createjs.Ticker.RAF;
            var animation = this.animation;
            var fps = $.browser.msie || $.browser.opera ? 1e3 / 13 : 1e3 / 20;
            var ease = createjs.Ease[animation.ease];
            var redraw = $.throttle(this.view.draw.bind(this.view), fps);
            var tiles = this.view.getAll("tile");
            var maxCol = Math.max.apply(Math, tiles.map(function (tile) {
                return tile.col
            }));
            var maxRow = Math.max.apply(Math, tiles.map(function (tile) {
                return tile.row
            }));
            tiles.forEach(function (tile, i) {
                var originalValues = {};
                var newValues = {};
                animation.attrs.forEach(function (attr) {
                    originalValues[attr] = tile[attr];
                    newValues[attr] = offscrenValues[attr]
                });
                if (animation.timing == "row") {
                    time = (maxRow - tile.row) * maxCol + tile.row
                } else {
                    time = (maxCol - tile.col) * maxRow + tile.col
                }
                time *= animation.delay;
                if (animation.delayPerTile) {
                    var attr = animation.timing == "col" ? "row" : "col";
                    time += tile[attr] * animation.delay
                }
                tile.attr(newValues);
                createjs.Tween.get(tile).to(originalValues, time, ease).on("change", redraw)
            })
        };
        Mahjong.prototype.openUsernameForm = function () {
            var highScore = localDatas["highScore"];
            if (highScore.length < 20) this.$usernamePopup.popup("open");
            else {
                for (var i = 0; i < highScore.length; i++) {
                    var highscore = highScore[i];
                    if (highscore.score < this.score) break
                }
                if (i < 20) this.$usernamePopup.popup("open");
                else {
                    this.displayHighScore();
                    this.$highscorePopup.popup("open")
                }
            }
        };
        Mahjong.prototype.onMatch = function (tile1, tile2) {
            FOUNDS += 2;
            this.score += POINTS_PER_PAIR;
            localDatas["score"] = this.score;
            this.updateScore(this.score);
            createjs.Sound.play("pairing");
            var action = new game.RemoveCommand(this.view, tile1, tile2, this.countMatches);
            this.cmdManager.exec(action)
        };
        Mahjong.prototype.onFinish = function () {
            var rScore = this.score;
            var finalTime = this.timer.getTime();
            var time_sec = ~~(finalTime / 1e3);
            this.timer.stop();
            this.cmdManager.reset();
            createjs.Sound.play("game_won");
            $("#game-complete-time").text($.formatTime(finalTime));
            this.animateScore(this.score, Math.floor(this.score * 1.25));
            this.score = Math.floor(this.score * 1.25);
            //if (!this.rateReminder.open()) {
            setTimeout(this.openUsernameForm.bind(this), 1300);
            //}
            setTimeout(this.calculateBonus.bind(this, rScore, time_sec), 850);

            ////todo: Raymond - Sync Score
            //try {
            //    var scoreKey = "reborngame.mahjong.xpscores";
            //    var localScore = window.localStorage.getItem(scoreKey);

            //    localScore = (localScore == null ? 1 : (parseInt(localScore) + 1));

            //    syncGameScore("Mahjong 2", localScore, function (newScore) {
            //        window.localStorage.setItem(scoreKey, newScore)
            //    });
            //}
            //catch (err) { }

            //show ads
            //try { showXpAds(); } catch (err) { }
            //show ads
            try { window.parent.postMessage("Show Ads", "*"); } catch (err) { }

        };
        Mahjong.prototype.calculateBonus = function (rScore, time_sec) {
            var maxTime = 0;
            var removeScoreSec = 0;
            var bonusScore = 0;
            var totalTiles = localDatas["totalCntTiles"];
            if (totalTiles <= 144) {
                maxTime = 15 * 60
            } else if (totalTiles <= 288) {
                maxTime = 30 * 60
            } else {
                maxTime = 45 * 60
            }
            removeScoreSec = rScore * 1 / maxTime;
            bonusScore = Math.floor(rScore * 1 - time_sec * removeScoreSec);
            if (bonusScore > 0) {
                this.animateScore(this.score, Math.floor(this.score + bonusScore));
                this.score = Math.floor(this.score + bonusScore)
            }
        };

        function getAllFreeTiles(tiles) {
            return tiles.filter(function (tile) {
                return tileCanMove(tile) && tile.visible
            })
        }
        window.stop = function stop() {
            clearTimeout(timeout)
        };
        var timeout;

        function autoplay() {
            var self = this;
            var fase = 1;
            var t1, t2;
            setTimeout(function F() {
                if (fase === 1) {
                    t1 = SHUFFLE_PATH.pop();
                    t2 = SHUFFLE_PATH.pop();
                    t1.highlighted = true;
                    t2.highlighted = true;
                    self.view.redraw();
                    fase = 2
                } else {
                    fase = 1;
                    self.cmdManager.exec(new game.RemoveCommand(self.view, t1, t2, self.countMatches))
                }
                if (SHUFFLE_PATH.length) timeout = setTimeout(F, 1e3)
            }, 500)
        }

        function winnable_shuffle(tileTypes, depth) {
            depth = depth || 0;
            var tiles = this.view.getAll("tile").filter(function (tile) {
                return tile.visible
            });
            var freeTiles = $.shuffle(getAllFreeTiles(tiles));
            if (tiles.length <= 0) return true;
            if (freeTiles.length < 2) return false;
            for (i = 0; i < freeTiles.length - 1; i++) {
                var tile1 = freeTiles[i];
                var tile2 = freeTiles[i + 1];
                tile1.imgx = tile1.meta.position = tileTypes[depth];
                tile2.imgx = tile2.meta.position = tileTypes[depth];
                tile1.visible = false;
                tile2.visible = false;
                if (winnable_shuffle.call(this, tileTypes, depth + 1)) {
                    SHUFFLE_PATH.push(tile1, tile2);
                    return true
                }
                tile1.visible = true;
                tile2.visible = true
            }
            return false
        }
        Mahjong.prototype.shuffle = function () {
            SHUFFLE_PATH = [];
            var tiles = $.shuffle($.getTileTypes(this.view.getAll("tile")));
            winnable_shuffle.call(this, tiles);
            this.view.find("tile").attr({
                visible: true
            });
            setTimeout(this.countMatches, 100);
            this.score = Math.floor(this.score / 2);
            this.updateScore(this.score);
            if (initialShuffle) {
                initialShuffle = false;
                this.newGameAnimation()
            } else {
                this.updateView()
            }
        };

        function getSurroundingTiles(tile) {
            var layer = tile.layer;
            var col = tile.col;
            var row = tile.row;
            return {
                left: getTileType(layer, col - 1, row),
                right: getTileType(layer, col + 1, row),
                topLeft: getTileType(layer, col - 1, row - 1),
                topRight: getTileType(layer, col + 1, row - 1),
                bottomLeft: getTileType(layer, col - 1, row + 1),
                bottomRight: getTileType(layer, col + 1, row + 1),
                upper: getTileType(layer + 1, col, row),
                upperLeft: getTileType(layer + 1, col - 1, row),
                upperRight: getTileType(layer + 1, col + 1, row),
                upperTop: getTileType(layer + 1, col, row - 1),
                upperTopLeft: getTileType(layer + 1, col - 1, row - 1),
                upperTopRight: getTileType(layer + 1, col + 1, row - 1),
                upperBottom: getTileType(layer + 1, col, row + 1),
                upperBottomLeft: getTileType(layer + 1, col - 1, row + 1),
                upperBottomRight: getTileType(layer + 1, col + 1, row + 1)
            }
        }

        function tileCanMove(tile) {
            var neighbors = getSurroundingTiles(tile);
            return game.moveIsCorrect(tile, neighbors) ? tile : null
        }

        function getTileType(layer, col, row) {
            var index = layer + "," + col + "," + row;
            var tile = CACHE[index];
            if (!tile || !tile.visible) {
                return 0
            }
            return tile.type
        }

        function bySpritePosition(a, b) {
            return a.imgx - b.imgx
        }

        function findMatches() {
            var freeTiles = getAllFreeTiles(this.view.get());
            var length = freeTiles.length;
            var matches = [];
            var i;
            freeTiles.sort(bySpritePosition);
            for (i = 0; i < length - 1; i++) {
                if (freeTiles[i].imgx === freeTiles[i + 1].imgx) {
                    matches.push(freeTiles[i], freeTiles[i + 1]);
                    i += 1
                }
            }
            return matches
        }

        function check() {
            var left = ~~(findMatches.call(this).length / 2);
            pairs.innerHTML = (left < 2 ? Locale._e("match") : Locale._e("matches")) + ": " + left;
            if (!left && FOUNDS != tmpTiles.length) {
                this.emit("gameover")
            }
            return left
        }
        Mahjong.prototype.getHighScoreKey = function () {
            var mapname = this.resources.level.map;
            return this.en_lang[mapname] || Locale._e(mapname)
        };
        Mahjong.prototype.drawHintBlock = function () {
            var matches = findMatches.call(this);
            if (matches.length < 2) return;
            this.score -= HINT_PENALTY;
            localDatas["score"] = this.score;
            this.updateScore(this.score);
            matches[0].highlighted = true;
            matches[1].highlighted = true;
            this.view.redraw()
        };
        Mahjong.prototype.processMap = function (map) {
            var length = 0;
            var tiles = this.image.width / tileWidth;
            var tile;
            Cevent.Tile.prototype.getNextTile = function () {
                return getTileType(this.layer, this.col + 1, this.row - 1)
            };
            for (var i = 0; i < map.length; i++) {
                for (var j = 0; j < map[i].length; j++)
                    for (var k = 0; k < map[i][j].length; k++)
                        if (map[i][j][k] != 0) length++
            }
            if (length % 2) {
                throw new Error("The number of tiles should be even")
            }
            tmpTiles = [];
            if (length < 2) {
                return this.restart.call(this)
            }
            this.score = localDatas["score"];
            do {
                tile = ~~(Math.random() * tiles);
                tmpTiles.push(tile, tile)
            } while (length -= 2)
        };
        Mahjong.prototype.drawMap = function () {
            CACHE = this.view.CACHE = {};
            tiles = tmpTiles.slice(0);
            $.each(localDatas["levelData"], drawLayer.bind(this));
            this.calculateBoardSize();
            this.resize();
            setTimeout(this.countMatches, 100)
        };
        Mahjong.prototype.calculateBoardSize = function () {
            var positions = flatten(localDatas.originalMap.map(getLayerPositions));

            function getX(tile) {
                return tile.x
            }

            function getY(tile) {
                return tile.y
            }
            var minX = min(positions.map(getX));
            var maxX = max(positions.map(getX)) + tileWidth;
            var minY = min(positions.map(getY));
            var maxY = max(positions.map(getY)) + tileHeight;
            MAX_WIDTH = maxX - minX;
            MAX_HEIGHT = maxY - minY;
            this.width = MAX_WIDTH;
            this.height = MAX_HEIGHT;
            this.x = minX;
            this.y = minY
        };

        function getTilePosition(type, col, row, layer) {
            var offset = layer * (tileBorder - 1);
            var x = (tileWidth - tileBorder) * col - offset;
            var y = (tileHeight - tileBorder) * row - offset + 70;
            if (type === H_SHIFTED_TILE || type === CENTERED_TILE) x += (tileWidth - tileBorder) / 2;
            if (type === V_SHIFTED_TILE || type === CENTERED_TILE) y += (tileHeight - tileBorder) / 2;
            return {
                x: x,
                y: y
            }
        }

        function getLayerPositions(layer, layerIndex) {
            var positions = [];
            for (var row = 0; row < layer.length; row++) {
                for (var col = 0; col < layer[row].length; col++) {
                    var cell = layer[row][col];
                    if (cell) {
                        positions.push(getTilePosition(cell.type, col, row, layerIndex))
                    }
                }
            }
            return positions
        }

        function drawLayer(layerNumber, layer) {
            var cell;
            var spritePosition;
            var x, y, row, col;
            for (row = 0; row < layer.length; row++) {
                for (col = 0; col < layer[row].length; col++) {
                    cell = layer[row][col];
                    if (cell === 0) continue;
                    cell.id = layerNumber + "," + col + "," + row;
                    if (jQuery.isNumeric(cell.position)) {
                        spritePosition = cell.position
                    } else {
                        spritePosition = cell.position = tileWidth * tiles.pop()
                    }
                    var pos = getTilePosition(cell.type, col, row, layerNumber);
                    this.view.tile(pos.x, pos.y, tileWidth, tileHeight, this.image, spritePosition).attr({
                        type: cell.type,
                        meta: cell,
                        layer: layerNumber,
                        col: col,
                        row: row,
                        id: cell.id
                    });
                    CACHE[cell.id] = this.view.get(-1)
                }
            }
        }
        Mahjong.prototype.initEvents = function () {
            var lastSelection = null;
            var mahjong = this;
            this.view.mousedown("tile", function (c, e) {
                mahjong.view.find("tile").attr({
                    highlighted: false
                });
                if (lastSelection === this) {
                    lastSelection.selected = false;
                    lastSelection = null;
                    drawShadow = false;
                    mahjong.view.redraw();
                    drawShadow = true;
                    return
                }
                if (!tileCanMove(this)) return;
                if (lastSelection) {
                    if (lastSelection.imgx == this.imgx) {
                        mahjong.onMatch(this, lastSelection);
                        lastSelection = null;
                        if (FOUNDS == tmpTiles.length) {
                            mahjong.onFinish()
                        }
                        drawShadow = false;
                        mahjong.view.redraw();
                        drawShadow = true;
                        return
                    }
                    lastSelection.selected = false
                }
                this.selected = !this.selected;
                lastSelection = this;
                drawShadow = false;
                mahjong.view.redraw();
                drawShadow = true
            });
            this.view.keydown("ctrl+z", this.undo.bind(this)).setGlobalKeyEvents(true);
            var hintShortcut = Locale._e("hint").toLowerCase().charAt(0);
            mahjong.view.keydown(hintShortcut, function () {
                mahjong.drawHintBlock();
                return false
            });
            $(window).resize(this.resize);
            if ("onorientationchange" in window) {
                window.onorientationchange = this.resize
            }
        };
        Mahjong.prototype.animateScore = function (oldScore, newScore) {
            var cntAnimate = 0;
            var stepIncrease = (newScore - oldScore) / 20;
            var animateTimer = setInterval($.proxy(function () {
                var score = Math.floor(oldScore + stepIncrease * cntAnimate);
                cntAnimate++;
                if (cntAnimate == 20) {
                    score = newScore;
                    clearInterval(animateTimer)
                }
                this.updateScore(score)
            }, this), 40)
        };
        Mahjong.prototype.updateScore = function (score) {
            document.getElementById("game-score").innerHTML = Locale._e("score") + ": " + score
        };
        Mahjong.prototype.manageHighScore = function (time, newScore, name) {
            var highScoreKey = this.getHighScoreKey();
            var highScoreArray = localDatas["highScore"][highScoreKey] || [];
            var newScoreIndex = 0;
            for (var i = 0; i < highScoreArray.length; i++) {
                var highScoreObject = highScoreArray[i];
                if (highScoreObject.score == newScore) { } else if (highScoreObject.score < newScore) {
                    newScoreIndex = i;
                    break
                }
            }
            if (newScoreIndex < 20) {
                var newHighScore = {
                    name: name,
                    score: newScore,
                    time: time
                };
                highScoreArray.splice(newScoreIndex, 0, newHighScore)
            }
            localDatas["highScore"][highScoreKey] = highScoreArray;
            this.displayHighScore();
            var self = this;

            function afterClose() {
                self.$usernamePopup.off("popupafterclose");
                self.$highscorePopup.popup("open")
            }
            this.$usernamePopup.on("popupafterclose", function () {
                setTimeout(afterClose, 100)
            });
            this.$usernamePopup.popup("close")
        };
        Mahjong.prototype.displayHighScore = function (layout) {
            var highScoreKey = this.getHighScoreKey();
            var highScoreArray = localDatas["highScore"][highScoreKey] || [];
            var bodyContent = "";
            var $tbody = $("#tbody-highscore");
            highScoreArray.sort($.sortByTime);
            highScoreArray.sort($.sortByScore);
            document.getElementById("layout-name").innerHTML = Locale._e(localDatas["mapname"].replace(/_/g, "-"));
            for (var i = 0; i < highScoreArray.length; i++) {
                highscore = highScoreArray[i];
                bodyContent += "<tr>" + "<td class='highscore-td'>" + highscore.name + "</td>" + "<td class='highscore-td'>" + highscore.score + "</td>" + "<td class='highscore-td'>" + $.formatTime(highscore.time) + "</td>" + "</tr>"
            }
            $tbody.html(bodyContent)
        };

        function resizeGame(e) {

            //todo: Raymond
            //if ($(window).width() >= 1024 && $(window).height() >= 768) {
            //    $("#mainarea").css("width", innerWidth - 125);
            //    $(".adsbygoogle").css("display", "block");
            //}
            //else {
            //    $("#mainarea").css("width", innerWidth);
            //    $(".adsbygoogle").css("display", "none");
            //}

            var offsetX = $("html").hasClass("mobile") ? 0 : 175;
            var isHorizontal = innerWidth > innerHeight;
            var w = (innerWidth - offsetX) * .95;
            var offsetBottom = $("#btn-games").outerHeight();
            var h = innerHeight - offsetBottom * 2;
            var ratio = 1;
            if (h < MAX_HEIGHT || w < MAX_WIDTH) {
                ratio = Math.min(h / MAX_HEIGHT, w / MAX_WIDTH);
                this.view.zoomTo(ratio)
            } else {
                this.view.zoomTo(1)
            }
            this.view.cv.width = document.getElementById("mainarea").offsetWidth;
            this.view.cv.height = window.innerHeight;
            var adSize = $("#winAdContainer").width() + 30;
            var adIsVisible = innerWidth > 750 && innerHeight > 600;
            var overlaps = (innerWidth - this.width * ratio) / 2 > adSize;
            var marginLeft = adIsVisible && !overlaps ? adSize : 0;
            var ty = (innerHeight - (this.height + shadowBorder) * ratio) / 2;
            var tx = (this.view.cv.width - marginLeft - (this.width + shadowBorder) * ratio) / 2;
            tx += marginLeft;
            this.view.find("tile").translate(~~(-this.x + tx / ratio), ~~(-this.y + ty / ratio - MARGIN_BOTTOM));
            document.getElementById("toggle-fullscreen").style.fontSize = 26 * ratio + "px";
            document.getElementById("toggle-fullscreen").style.backgroundSize = 26 * ratio + "px";
            this.view.calcCanvasPosition();
            this.view.redraw();
            if (isMobile) {
                $.fullScreen()
            }

        }
        game.Mahjong = Mahjong;
        loadDataFromStore()
    })(document, window, jQuery);
    (function (document, window, namespace, undefined) {
        function CommandManager(maxUndo) {
            this.undoStack = [];
            this.redoStack = [];
            this.maxUndo = maxUndo || 20
        }
        CommandManager.prototype.reset = function () {
            this.undoStack.length = 0;
            this.redoStack.length = 0
        };
        CommandManager.prototype.exec = function (cmd) {
            cmd.execute();
            if (this.undoStack.length > this.maxUndo) {
                this.undoStack.shift()
            }
            this.undoStack.push(cmd);
            this.redoStack.splice(0, this.redoStack.length)
        };
        CommandManager.prototype.undo = function () {
            if (!this.undoStack.length) {
                return
            }
            var cmd = this.undoStack.pop();
            cmd.undo();
            return this.redoStack.unshift(cmd)
        };
        CommandManager.prototype.redo = function () {
            if (!this.redoStack.length) {
                return
            }
            var cmd = this.redoStack.shift();
            cmd.redo();
            this.undoStack.push(cmd)
        };

        function RemoveCommand(ctx, item1, item2, callback) {
            this.callback = callback;
            this.ctx = ctx;
            this.item1 = item1;
            this.item2 = item2;
            item1.selected = item2.selected = false;
            delete ctx.CACHE[item1.id];
            delete ctx.CACHE[item2.id]
        }
        RemoveCommand.prototype.execute = function () {
            this.item1.selected = true;
            this.item2.selected = true;
            var self = this;
            var animationTimer = setInterval(function () {
                self.item1.alpha -= .1;
                self.item2.alpha -= .1;
                if (self.item1.alpha <= 0) {
                    self.item1.highlighted = false;
                    self.item2.highlighted = false;
                    self.item1.alpha = 0;
                    self.item2.alpha = 0;
                    self.index1 = self.ctx.remove(self.item1);
                    self.index2 = self.ctx.remove(self.item2);
                    self.callback();
                    clearInterval(animationTimer)
                }
                self.ctx.redraw()
            }, 40)
        };
        RemoveCommand.prototype.undo = function () {
            insert.call(this.ctx._shapes, this.index2, this.item2);
            insert.call(this.ctx._shapes, this.index1, this.item1);
            this.item1.alpha = 1;
            this.item2.alpha = 1;
            this.item1.selected = false;
            this.item2.selected = false;
            this.ctx.CACHE[this.item2.id] = this.item2;
            this.ctx.CACHE[this.item1.id] = this.item1;
            localDatas["levelData"][this.item1.layer][this.item1.row][this.item1.col] = this.item1.meta;
            localDatas["levelData"][this.item2.layer][this.item2.row][this.item2.col] = this.item2.meta;
            this.ctx.redraw()
        };

        function insert(i, item) {
            var tmp, l = this.length;
            for (; i <= l; i++) {
                tmp = this[i];
                this[i] = item;
                item = tmp
            }
        }
        namespace.CommandManager = CommandManager;
        namespace.RemoveCommand = RemoveCommand
    })(document, window, game);
    (function (document, window, undefined) {
        var tileBorder = 22;
        var shadowFix = /edge|firefox/i.test(navigator.userAgent) ? .2 : 0;
        var Tile = Cevent.Rect.extend({
            init: function (x, y, w, h, image, imgx) {
                this._super(x, y, w, h);
                this.imgx = imgx;
                this.image = image;
                this.selected = false;
                this.highlighted = false;
                this.alpha = 1;
                this.visible = true;
                this.imgWidth = this.image.width;
                this.imgHeight = this.image.height
            },
            draw: function (ctx) {
                var shadowWidth = shadowImage.width;
                var shadowHeight = shadowImage.height;
                var shadowBorder = tileBorder + 14;
                var shadowX = this.x - 14;
                var shadowY = this.y - 14;
                this.setTransform(ctx);
                if (drawShadow) {
                    ctx.drawImage(shadowImage, 0, 0, shadowWidth - shadowBorder, shadowHeight, shadowX, shadowY, shadowWidth - shadowBorder, shadowHeight)
                }
                var nextTile = this.getNextTile();
                ctx.globalCompositeOperation = "source-over";
                ctx.drawImage(this.image, this.imgx / 3960 * this.imgWidth, 0, this.w - tileBorder, this.imgHeight, this.x, this.y, this.w - tileBorder, this.h);
                if (this.type === 1 && nextTile === 3 || this.type === 2 && nextTile === 4) {
                    ctx.globalCompositeOperation = "destination-over";
                    this.drawBorderRight(ctx);
                    if (drawShadow) {
                        this.drawShadowRight(ctx, shadowX, shadowY, shadowWidth, shadowHeight, shadowBorder)
                    }
                } else {
                    if (drawShadow) {
                        this.drawShadowRight(ctx, shadowX, shadowY, shadowWidth, shadowHeight, shadowBorder)
                    }
                    this.drawBorderRight(ctx)
                }
                ctx.globalCompositeOperation = "source-over";
                if (this.selected) {
                    ctx.drawImage(selectedImage, this.x, this.y)
                } else if (this.highlighted) {
                    ctx.drawImage(hintImage, this.x, this.y)
                }
            },
            drawShadowRight: function (ctx, shadowX, shadowY, shadowWidth, shadowHeight, shadowBorder) {
                ctx.drawImage(shadowImage, shadowWidth - tileBorder - 14, 0, shadowBorder, shadowHeight, shadowX + shadowWidth - tileBorder - (14 + shadowFix), shadowY, shadowBorder, shadowHeight)
            },
            drawBorderRight: function (ctx) {
                ctx.drawImage(this.image, this.imgx / 3960 * this.imgWidth + (this.w - tileBorder), 0, tileBorder, this.imgHeight, this.x + (this.w - tileBorder) - 1, this.y, tileBorder, this.h)
            }
        });
        Cevent.register("tile", Tile)
    })(document, window);
    (function (namespace) {
        function $(id) {
            return document.getElementById(id)
        }
        var uuid = 0,
            start, stopTime;

        function Timer(timer) {
            this.e_timer = $(timer);
            this.restart()
        }
        Timer.prototype.now = function () {
            return (new Date).getTime()
        };
        Timer.prototype.restart = function () {
            start = stopTime = this.now();
            this.startTime();
            localDatas["time"] = this.getTime()
        };
        Timer.prototype.addTime = function (time) {
            if (typeof time == "number") {
                start -= Math.abs(time)
            }
            localDatas["time"] = this.getTime();
            this.e_timer.innerHTML = Locale._e("time") + ": " + this.time()
        };
        Timer.prototype.startTime = function () {
            var self = this;
            this.uuid = uuid;
            (function () {
                if (self.uuid == uuid) {
                    var now = stopTime = self.now();
                    self.e_timer.innerHTML = Locale._e("time") + ": " + self.time();
                    localDatas["time"] = self.getTime();
                    setTimeout(arguments.callee, 1e3)
                }
            })()
        };
        Timer.prototype.stop = function () {
            ++uuid
        };
        Timer.prototype.getTime = function () {
            return stopTime - start
        };
        Timer.prototype.time = function () {
            return jQuery.formatTime(stopTime - start)
        };
        namespace.Timer = Timer
    })(game);
    (function (document, window, namespace, undefined) {
        var TILES = {
            ":": 1,
            ";": 2,
            ",": 3,
            ".": 4
        };
        var firstLoad = true;

        function cloneMap(map) {
            return JSON.parse(JSON.stringify(map))
        }

        function processMap(data) {
            var layers = data.split(/#.*\r\n/);
            var i, j, k, cell;
            var levelData = [];
            for (i = 0; i < layers.length; i++) {
                levelData[i] = [];
                for (j = 0; j < 10; j++) {
                    levelData[i][j] = [];
                    for (k = 0; k < 18; k++) {
                        levelData[i][j][k] = 0
                    }
                }
            }
            var totalCntTiles = 0;
            $.each(layers, function (i, col) {
                var layer = col.split("\r\n");
                $.each(layer, function (j, row) {
                    for (k = 0; cell = row.charAt(k) ; k++) {
                        if (TILES[cell]) {
                            levelData[i][j][k] = {
                                type: TILES[cell]
                            };
                            totalCntTiles++
                        }
                    }
                })
            });
            localDatas["originalMap"] = levelData;
            if (localDatas["levelData"].length === 0) {
                localDatas["levelData"] = cloneMap(levelData);
                localDatas["totalCntTiles"] = totalCntTiles
            }
            initialShuffle = true
        }

        function loadAjax(url, name, context) {
            $.ajax({
                url: url,
                success: function (data) {
                    context[name] = data;
                    if (name === "map") {
                        processMap(data)
                    }
                }
            })
        }

        function loadJSON(url, name, context) {
            $.getJSON(url).then(function (json) {
                context[name] = json
            })
        }

        function loadImage(src) {
            var image = window.Image ? new Image : document.createElement("img");
            image.src = src;
            return image
        }

        function checkLoad(resources) {
            var ajax, image;
            var def = $.Deferred();
            setTimeout(function check() {
                var context = resources.context;
                var complete = true;
                for (image in resources.images) {
                    if (!context[image].complete) {
                        complete = false;
                        break
                    }
                }
                for (ajax in resources.ajax) {
                    if (!context[ajax]) {
                        complete = false;
                        break
                    }
                }
                if (complete) {
                    $("#loading-box").hide();
                    setTimeout(function () {
                        def.resolve()
                    }, 200)
                } else {
                    setTimeout(check, 500)
                }
            }, 500);
            return def.promise()
        }

        function loadResources(resources) {
            if (!isApp && !firstLoad) {
                $("#loading-box").show()
            }
            firstLoad = false;
            var image, ajax, url;
            for (image in resources.images) {
                resources.context[image] = loadImage(resources.images[image])
            }
            for (image in resources.background) {
                loadImage(resources.background[image])
            }
            for (ajax in resources.ajax) {
                loadAjax(resources.ajax[ajax], ajax, resources.context)
            }
            for (name in resources.json) {
                loadJSON(resources.json[name], name, resources.context)
            }
            return checkLoad(resources)
        }
        namespace.loadResources = loadResources
    })(document, window, game);
    (function (document, window, namespace, undefined) {
        var $modal = $("#modal"),
            $msg = $("#modal-msg"),
            $close = $("#close-modal"),
            $overlay = $("#overlay");
        $overlay.click(closeModal);

        function showModal(id, tmpl) {
            $msg.html($.tmpl(id, tmpl));
            var w = (document.documentElement.clientWidth - 175) * .8,
                h = document.documentElement.clientHeight * .7,
                BOARD_HEIGHT = 1130,
                BOARD_WIDTH = 1760,
                ratio = 1;
            if (h < BOARD_HEIGHT || w < BOARD_WIDTH) {
                ratio = Math.min(h / BOARD_HEIGHT, w / BOARD_WIDTH)
            }
            var width = 1e3 * ratio + (parseInt($modal.css("padding-left"), 10) || 0) * 2 + (parseInt($modal.css("border-width"), 10) || 0) * 2;
            $modal.css("width", width);
            $modal.css("max-height", h);
            $modal.css("overflow", "hidden");
            $modal.css("margin-left", -width / 2 + 175 / 2);
            $modal.removeClass("hide");
            $overlay.show()
        }

        function closeModal() {
            $modal.addClass("hide");
            $overlay.hide()
        }
        $close.click(function () {
            closeModal();
            return false
        });
        namespace.Modal = {
            open: showModal,
            close: closeModal
        }
    })(document, window, game);
    (function () {
        "use strict";
        var NORMAL = 1,
            H_SHIFTED_TILE = 2,
            V_SHIFTED_TILE = 3,
            CENTERED_TILE = 4,
            COMPLEMENTS = {};
        COMPLEMENTS[NORMAL] = V_SHIFTED_TILE;
        COMPLEMENTS[V_SHIFTED_TILE] = NORMAL;
        COMPLEMENTS[H_SHIFTED_TILE] = CENTERED_TILE;
        COMPLEMENTS[CENTERED_TILE] = H_SHIFTED_TILE;

        function check(tileType, horizontalSide) {
            var complement = COMPLEMENTS[tileType],
                verticalSide = jQuery.camelCase("bottom-" + horizontalSide);
            if (tileType === NORMAL || tileType === H_SHIFTED_TILE) verticalSide = jQuery.camelCase("top-" + horizontalSide);
            return function (neighbors) {
                return neighbors[horizontalSide] === tileType || neighbors[horizontalSide] === complement || neighbors[verticalSide] === complement
            }
        }
        var validators = [{
            left: check(NORMAL, "left"),
            right: check(NORMAL, "right"),
            upper: function (neighbors) {
                return neighbors.upper || neighbors.upperTop === V_SHIFTED_TILE || neighbors.upperTop === CENTERED_TILE || neighbors.upperTopLeft === CENTERED_TILE || neighbors.upperLeft === H_SHIFTED_TILE || neighbors.upperLeft === CENTERED_TILE
            }
        }, {
            left: check(H_SHIFTED_TILE, "left"),
            right: check(H_SHIFTED_TILE, "right"),
            upper: function (neighbors) {
                return neighbors.upper || neighbors.upperTop === V_SHIFTED_TILE || neighbors.upperTop === CENTERED_TILE || neighbors.upperTopRight === V_SHIFTED_TILE || neighbors.upperRight === V_SHIFTED_TILE || neighbors.upperRight === NORMAL
            }
        }, {
            left: check(V_SHIFTED_TILE, "left"),
            right: check(V_SHIFTED_TILE, "right"),
            upper: function (neighbors) {
                return neighbors.upper || neighbors.upperLeft === H_SHIFTED_TILE || neighbors.upperLeft === CENTERED_TILE || neighbors.upperBottom === NORMAL || neighbors.upperBottom === H_SHIFTED_TILE || neighbors.upperBottomLeft === H_SHIFTED_TILE
            }
        }, {
            left: check(CENTERED_TILE, "left"),
            right: check(CENTERED_TILE, "right"),
            upper: function (neighbors) {
                return neighbors.upper || neighbors.upperRight === NORMAL || neighbors.upperRight === V_SHIFTED_TILE || neighbors.upperBottom === NORMAL || neighbors.upperBottom === H_SHIFTED_TILE || neighbors.upperBottomRight === NORMAL
            }
        }];
        game.moveIsCorrect = function (tile, neighbors) {
            var validator = validators[tile.type - 1];
            return !(validator.left(neighbors) && validator.right(neighbors) || validator.upper(neighbors))
        }
    })()
})();