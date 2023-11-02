!function(t) {
    var e = {};
    function r(n) {
        if (e[n])
            return e[n].exports;
        var i = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, r),
        i.l = !0,
        i.exports
    }
    r.m = t,
    r.c = e,
    r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(t, e) {
        if (1 & e && (t = r(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                r.d(n, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return n
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return r.d(e, "a", e),
        e
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    r.p = "",
    r(r.s = 292)
}([, , , , function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    e.VERSION = "4.8.9",
    e.PI_2 = 2 * Math.PI,
    e.RAD_TO_DEG = 180 / Math.PI,
    e.DEG_TO_RAD = Math.PI / 180,
    e.RENDERER_TYPE = {
        UNKNOWN: 0,
        WEBGL: 1,
        CANVAS: 2
    },
    e.BLEND_MODES = {
        NORMAL: 0,
        ADD: 1,
        MULTIPLY: 2,
        SCREEN: 3,
        OVERLAY: 4,
        DARKEN: 5,
        LIGHTEN: 6,
        COLOR_DODGE: 7,
        COLOR_BURN: 8,
        HARD_LIGHT: 9,
        SOFT_LIGHT: 10,
        DIFFERENCE: 11,
        EXCLUSION: 12,
        HUE: 13,
        SATURATION: 14,
        COLOR: 15,
        LUMINOSITY: 16,
        NORMAL_NPM: 17,
        ADD_NPM: 18,
        SCREEN_NPM: 19
    },
    e.DRAW_MODES = {
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6
    },
    e.SCALE_MODES = {
        LINEAR: 0,
        NEAREST: 1
    },
    e.WRAP_MODES = {
        CLAMP: 0,
        REPEAT: 1,
        MIRRORED_REPEAT: 2
    },
    e.GC_MODES = {
        AUTO: 0,
        MANUAL: 1
    },
    e.URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i,
    e.DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i,
    e.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,
    e.SHAPES = {
        POLY: 0,
        RECT: 1,
        CIRC: 2,
        ELIP: 3,
        RREC: 4
    },
    e.PRECISION = {
        LOW: "lowp",
        MEDIUM: "mediump",
        HIGH: "highp"
    },
    e.TRANSFORM_MODE = {
        STATIC: 0,
        DYNAMIC: 1
    },
    e.TEXT_GRADIENT = {
        LINEAR_VERTICAL: 0,
        LINEAR_HORIZONTAL: 1
    },
    e.UPDATE_PRIORITY = {
        INTERACTION: 50,
        HIGH: 25,
        NORMAL: 0,
        LOW: -25,
        UTILITY: -50
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.autoDetectRenderer = e.Application = e.Filter = e.SpriteMaskFilter = e.Quad = e.RenderTarget = e.ObjectRenderer = e.WebGLManager = e.Shader = e.CanvasRenderTarget = e.TextureUvs = e.VideoBaseTexture = e.BaseRenderTexture = e.RenderTexture = e.BaseTexture = e.TextureMatrix = e.Texture = e.Spritesheet = e.CanvasGraphicsRenderer = e.GraphicsRenderer = e.GraphicsData = e.Graphics = e.TextMetrics = e.TextStyle = e.Text = e.SpriteRenderer = e.CanvasTinter = e.CanvasSpriteRenderer = e.Sprite = e.TransformBase = e.TransformStatic = e.Transform = e.Container = e.DisplayObject = e.Bounds = e.glCore = e.WebGLRenderer = e.CanvasRenderer = e.ticker = e.utils = e.settings = void 0;
    var n = r(4);
    Object.keys(n).forEach((function(t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return n[t]
            }
        })
    }
    ));
    var i = r(15);
    Object.keys(i).forEach((function(t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return i[t]
            }
        })
    }
    ));
    var o = r(19);
    Object.defineProperty(e, "glCore", {
        enumerable: !0,
        get: function() {
            return z(o).default
        }
    });
    var s = r(101);
    Object.defineProperty(e, "Bounds", {
        enumerable: !0,
        get: function() {
            return z(s).default
        }
    });
    var a = r(162);
    Object.defineProperty(e, "DisplayObject", {
        enumerable: !0,
        get: function() {
            return z(a).default
        }
    });
    var u = r(53);
    Object.defineProperty(e, "Container", {
        enumerable: !0,
        get: function() {
            return z(u).default
        }
    });
    var h = r(164);
    Object.defineProperty(e, "Transform", {
        enumerable: !0,
        get: function() {
            return z(h).default
        }
    });
    var l = r(163);
    Object.defineProperty(e, "TransformStatic", {
        enumerable: !0,
        get: function() {
            return z(l).default
        }
    });
    var c = r(103);
    Object.defineProperty(e, "TransformBase", {
        enumerable: !0,
        get: function() {
            return z(c).default
        }
    });
    var f = r(105);
    Object.defineProperty(e, "Sprite", {
        enumerable: !0,
        get: function() {
            return z(f).default
        }
    });
    var d = r(322);
    Object.defineProperty(e, "CanvasSpriteRenderer", {
        enumerable: !0,
        get: function() {
            return z(d).default
        }
    });
    var p = r(70);
    Object.defineProperty(e, "CanvasTinter", {
        enumerable: !0,
        get: function() {
            return z(p).default
        }
    });
    var v = r(325);
    Object.defineProperty(e, "SpriteRenderer", {
        enumerable: !0,
        get: function() {
            return z(v).default
        }
    });
    var y = r(340);
    Object.defineProperty(e, "Text", {
        enumerable: !0,
        get: function() {
            return z(y).default
        }
    });
    var g = r(177);
    Object.defineProperty(e, "TextStyle", {
        enumerable: !0,
        get: function() {
            return z(g).default
        }
    });
    var _ = r(178);
    Object.defineProperty(e, "TextMetrics", {
        enumerable: !0,
        get: function() {
            return z(_).default
        }
    });
    var m = r(342);
    Object.defineProperty(e, "Graphics", {
        enumerable: !0,
        get: function() {
            return z(m).default
        }
    });
    var b = r(179);
    Object.defineProperty(e, "GraphicsData", {
        enumerable: !0,
        get: function() {
            return z(b).default
        }
    });
    var x = r(344);
    Object.defineProperty(e, "GraphicsRenderer", {
        enumerable: !0,
        get: function() {
            return z(x).default
        }
    });
    var T = r(351);
    Object.defineProperty(e, "CanvasGraphicsRenderer", {
        enumerable: !0,
        get: function() {
            return z(T).default
        }
    });
    var E = r(352);
    Object.defineProperty(e, "Spritesheet", {
        enumerable: !0,
        get: function() {
            return z(E).default
        }
    });
    var w = r(29);
    Object.defineProperty(e, "Texture", {
        enumerable: !0,
        get: function() {
            return z(w).default
        }
    });
    var S = r(175);
    Object.defineProperty(e, "TextureMatrix", {
        enumerable: !0,
        get: function() {
            return z(S).default
        }
    });
    var O = r(44);
    Object.defineProperty(e, "BaseTexture", {
        enumerable: !0,
        get: function() {
            return z(O).default
        }
    });
    var M = r(108);
    Object.defineProperty(e, "RenderTexture", {
        enumerable: !0,
        get: function() {
            return z(M).default
        }
    });
    var P = r(170);
    Object.defineProperty(e, "BaseRenderTexture", {
        enumerable: !0,
        get: function() {
            return z(P).default
        }
    });
    var C = r(167);
    Object.defineProperty(e, "VideoBaseTexture", {
        enumerable: !0,
        get: function() {
            return z(C).default
        }
    });
    var A = r(168);
    Object.defineProperty(e, "TextureUvs", {
        enumerable: !0,
        get: function() {
            return z(A).default
        }
    });
    var R = r(171);
    Object.defineProperty(e, "CanvasRenderTarget", {
        enumerable: !0,
        get: function() {
            return z(R).default
        }
    });
    var I = r(56);
    Object.defineProperty(e, "Shader", {
        enumerable: !0,
        get: function() {
            return z(I).default
        }
    });
    var D = r(55);
    Object.defineProperty(e, "WebGLManager", {
        enumerable: !0,
        get: function() {
            return z(D).default
        }
    });
    var L = r(71);
    Object.defineProperty(e, "ObjectRenderer", {
        enumerable: !0,
        get: function() {
            return z(L).default
        }
    });
    var N = r(73);
    Object.defineProperty(e, "RenderTarget", {
        enumerable: !0,
        get: function() {
            return z(N).default
        }
    });
    var k = r(176);
    Object.defineProperty(e, "Quad", {
        enumerable: !0,
        get: function() {
            return z(k).default
        }
    });
    var B = r(173);
    Object.defineProperty(e, "SpriteMaskFilter", {
        enumerable: !0,
        get: function() {
            return z(B).default
        }
    });
    var F = r(174);
    Object.defineProperty(e, "Filter", {
        enumerable: !0,
        get: function() {
            return z(F).default
        }
    });
    var j = r(180);
    Object.defineProperty(e, "Application", {
        enumerable: !0,
        get: function() {
            return z(j).default
        }
    });
    var U = r(181);
    Object.defineProperty(e, "autoDetectRenderer", {
        enumerable: !0,
        get: function() {
            return U.autoDetectRenderer
        }
    });
    var X = V(r(6))
      , H = V(r(107))
      , G = z(r(12))
      , W = z(r(54))
      , Y = z(r(72));
    function V(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }
    function z(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.settings = G.default,
    e.utils = X,
    e.ticker = H,
    e.CanvasRenderer = W.default,
    e.WebGLRenderer = Y.default
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.premultiplyBlendMode = e.BaseTextureCache = e.TextureCache = e.earcut = e.mixins = e.pluginTarget = e.EventEmitter = e.removeItems = e.isMobile = void 0,
    e.uid = function() {
        return ++p
    }
    ,
    e.hex2rgb = function(t, e) {
        return (e = e || [])[0] = (t >> 16 & 255) / 255,
        e[1] = (t >> 8 & 255) / 255,
        e[2] = (255 & t) / 255,
        e
    }
    ,
    e.hex2string = function(t) {
        return t = t.toString(16),
        "#" + (t = "000000".substr(0, 6 - t.length) + t)
    }
    ,
    e.rgb2hex = function(t) {
        return (255 * t[0] << 16) + (255 * t[1] << 8) + (255 * t[2] | 0)
    }
    ,
    e.getResolutionOfUrl = function(t, e) {
        var r = i.default.RETINA_PREFIX.exec(t);
        if (r)
            return parseFloat(r[1]);
        return void 0 !== e ? e : 1
    }
    ,
    e.decomposeDataUri = function(t) {
        var e = n.DATA_URI.exec(t);
        if (e)
            return {
                mediaType: e[1] ? e[1].toLowerCase() : void 0,
                subType: e[2] ? e[2].toLowerCase() : void 0,
                charset: e[3] ? e[3].toLowerCase() : void 0,
                encoding: e[4] ? e[4].toLowerCase() : void 0,
                data: e[5]
            };
        return
    }
    ,
    e.getUrlFileExtension = function(t) {
        var e = n.URL_FILE_EXTENSION.exec(t);
        if (e)
            return e[1].toLowerCase();
        return
    }
    ,
    e.getSvgSize = function(t) {
        var e = n.SVG_SIZE.exec(t)
          , r = {};
        e && (r[e[1]] = Math.round(parseFloat(e[3])),
        r[e[5]] = Math.round(parseFloat(e[7])));
        return r
    }
    ,
    e.skipHello = function() {
        v = !0
    }
    ,
    e.sayHello = function(t) {
        if (v)
            return;
        if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
            var e = ["\n %c %c %c PixiJS " + n.VERSION + " - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
            window.console.log.apply(console, e)
        } else
            window.console && window.console.log("PixiJS " + n.VERSION + " - " + t + " - http://www.pixijs.com/");
        v = !0
    }
    ,
    e.isWebGLSupported = function() {
        var t = {
            stencil: !0,
            failIfMajorPerformanceCaveat: !0
        };
        try {
            if (!window.WebGLRenderingContext)
                return !1;
            var e = document.createElement("canvas")
              , r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t)
              , n = !(!r || !r.getContextAttributes().stencil);
            if (r) {
                var i = r.getExtension("WEBGL_lose_context");
                i && i.loseContext()
            }
            return r = null,
            n
        } catch (t) {
            return !1
        }
    }
    ,
    e.sign = function(t) {
        return 0 === t ? 0 : t < 0 ? -1 : 1
    }
    ,
    e.destroyTextureCache = function() {
        var t = void 0;
        for (t in y)
            y[t].destroy();
        for (t in g)
            g[t].destroy()
    }
    ,
    e.clearTextureCache = function() {
        var t = void 0;
        for (t in y)
            delete y[t];
        for (t in g)
            delete g[t]
    }
    ,
    e.correctBlendMode = function(t, e) {
        return _[e ? 1 : 0][t]
    }
    ,
    e.premultiplyTint = function(t, e) {
        if (1 === e)
            return (255 * e << 24) + t;
        if (0 === e)
            return 0;
        var r = t >> 16 & 255
          , n = t >> 8 & 255
          , i = 255 & t;
        return (255 * e << 24) + ((r = r * e + .5 | 0) << 16) + ((n = n * e + .5 | 0) << 8) + (i = i * e + .5 | 0)
    }
    ,
    e.premultiplyRgba = function(t, e, r, n) {
        r = r || new Float32Array(4),
        n || void 0 === n ? (r[0] = t[0] * e,
        r[1] = t[1] * e,
        r[2] = t[2] * e) : (r[0] = t[0],
        r[1] = t[1],
        r[2] = t[2]);
        return r[3] = e,
        r
    }
    ,
    e.premultiplyTintToRgba = function(t, e, r, n) {
        (r = r || new Float32Array(4))[0] = (t >> 16 & 255) / 255,
        r[1] = (t >> 8 & 255) / 255,
        r[2] = (255 & t) / 255,
        (n || void 0 === n) && (r[0] *= e,
        r[1] *= e,
        r[2] *= e);
        return r[3] = e,
        r
    }
    ;
    var n = r(4)
      , i = d(r(12))
      , o = d(r(36))
      , s = d(r(311))
      , a = f(r(312))
      , u = f(r(102))
      , h = d(r(313))
      , l = d(r(314))
      , c = d(r(104));
    function f(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }
    function d(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var p = 0
      , v = !1;
    e.isMobile = u,
    e.removeItems = h.default,
    e.EventEmitter = o.default,
    e.pluginTarget = s.default,
    e.mixins = a,
    e.earcut = c.default;
    var y = e.TextureCache = Object.create(null)
      , g = e.BaseTextureCache = Object.create(null);
    var _ = e.premultiplyBlendMode = (0,
    l.default)()
}
, , , , , function(t, e) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (r = window)
    }
    t.exports = r
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = o(r(309))
      , i = o(r(310));
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        TARGET_FPMS: .06,
        MIPMAP_TEXTURES: !0,
        RESOLUTION: 1,
        FILTER_RESOLUTION: 1,
        SPRITE_MAX_TEXTURES: (0,
        n.default)(32),
        SPRITE_BATCH_SIZE: 4096,
        RETINA_PREFIX: /@([0-9\.]+)x/,
        RENDER_OPTIONS: {
            view: null,
            antialias: !1,
            forceFXAA: !1,
            autoResize: !1,
            transparent: !1,
            backgroundColor: 0,
            clearBeforeRender: !0,
            preserveDrawingBuffer: !1,
            roundPixels: !1,
            width: 800,
            height: 600,
            legacy: !1
        },
        TRANSFORM_MODE: 0,
        GC_MODE: 0,
        GC_MAX_IDLE: 3600,
        GC_MAX_CHECK_COUNT: 600,
        WRAP_MODE: 0,
        SCALE_MODE: 0,
        PRECISION_VERTEX: "highp",
        PRECISION_FRAGMENT: "mediump",
        CAN_UPLOAD_SAME_BUFFER: (0,
        i.default)(),
        MESH_CANVAS_PADDING: 0
    }
}
, function(t, e) {
    var r, n, i = t.exports = {};
    function o() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    function a(t) {
        if (r === setTimeout)
            return setTimeout(t, 0);
        if ((r === o || !r) && setTimeout)
            return r = setTimeout,
            setTimeout(t, 0);
        try {
            return r(t, 0)
        } catch (e) {
            try {
                return r.call(null, t, 0)
            } catch (e) {
                return r.call(this, t, 0)
            }
        }
    }
    !function() {
        try {
            r = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            r = o
        }
        try {
            n = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            n = s
        }
    }();
    var u, h = [], l = !1, c = -1;
    function f() {
        l && u && (l = !1,
        u.length ? h = u.concat(h) : c = -1,
        h.length && d())
    }
    function d() {
        if (!l) {
            var t = a(f);
            l = !0;
            for (var e = h.length; e; ) {
                for (u = h,
                h = []; ++c < e; )
                    u && u[c].run();
                c = -1,
                e = h.length
            }
            u = null,
            l = !1,
            function(t) {
                if (n === clearTimeout)
                    return clearTimeout(t);
                if ((n === s || !n) && clearTimeout)
                    return n = clearTimeout,
                    clearTimeout(t);
                try {
                    n(t)
                } catch (e) {
                    try {
                        return n.call(null, t)
                    } catch (e) {
                        return n.call(this, t)
                    }
                }
            }(t)
        }
    }
    function p(t, e) {
        this.fun = t,
        this.array = e
    }
    function v() {}
    i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r];
        h.push(new p(t,e)),
        1 !== h.length || l || a(d)
    }
    ,
    p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    i.title = "browser",
    i.browser = !0,
    i.env = {},
    i.argv = [],
    i.version = "",
    i.versions = {},
    i.on = v,
    i.addListener = v,
    i.once = v,
    i.off = v,
    i.removeListener = v,
    i.removeAllListeners = v,
    i.emit = v,
    i.prependListener = v,
    i.prependOnceListener = v,
    i.listeners = function(t) {
        return []
    }
    ,
    i.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    i.cwd = function() {
        return "/"
    }
    ,
    i.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    i.umask = function() {
        return 0
    }
}
, , function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = r(97);
    Object.defineProperty(e, "Point", {
        enumerable: !0,
        get: function() {
            return f(n).default
        }
    });
    var i = r(151);
    Object.defineProperty(e, "ObservablePoint", {
        enumerable: !0,
        get: function() {
            return f(i).default
        }
    });
    var o = r(98);
    Object.defineProperty(e, "Matrix", {
        enumerable: !0,
        get: function() {
            return f(o).default
        }
    });
    var s = r(152);
    Object.defineProperty(e, "GroupD8", {
        enumerable: !0,
        get: function() {
            return f(s).default
        }
    });
    var a = r(299);
    Object.defineProperty(e, "Circle", {
        enumerable: !0,
        get: function() {
            return f(a).default
        }
    });
    var u = r(300);
    Object.defineProperty(e, "Ellipse", {
        enumerable: !0,
        get: function() {
            return f(u).default
        }
    });
    var h = r(301);
    Object.defineProperty(e, "Polygon", {
        enumerable: !0,
        get: function() {
            return f(h).default
        }
    });
    var l = r(99);
    Object.defineProperty(e, "Rectangle", {
        enumerable: !0,
        get: function() {
            return f(l).default
        }
    });
    var c = r(302);
    function f(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "RoundedRectangle", {
        enumerable: !0,
        get: function() {
            return f(c).default
        }
    })
}
, , , , function(t, e, r) {
    var n = {
        createContext: r(303),
        setVertexAttribArrays: r(153),
        GLBuffer: r(304),
        GLFramebuffer: r(305),
        GLShader: r(306),
        GLTexture: r(154),
        VertexArrayObject: r(307),
        shader: r(308)
    };
    t.exports && (t.exports = n),
    "undefined" != typeof window && (window.PIXI = window.PIXI || {},
    window.PIXI.glCore = n)
}
, , , , , function(t, e, r) {
    (function(t) {
        function r(t, e) {
            for (var r = 0, n = t.length - 1; n >= 0; n--) {
                var i = t[n];
                "." === i ? t.splice(n, 1) : ".." === i ? (t.splice(n, 1),
                r++) : r && (t.splice(n, 1),
                r--)
            }
            if (e)
                for (; r--; r)
                    t.unshift("..");
            return t
        }
        function n(t, e) {
            if (t.filter)
                return t.filter(e);
            for (var r = [], n = 0; n < t.length; n++)
                e(t[n], n, t) && r.push(t[n]);
            return r
        }
        e.resolve = function() {
            for (var e = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
                var s = o >= 0 ? arguments[o] : t.cwd();
                if ("string" != typeof s)
                    throw new TypeError("Arguments to path.resolve must be strings");
                s && (e = s + "/" + e,
                i = "/" === s.charAt(0))
            }
            return (i ? "/" : "") + (e = r(n(e.split("/"), (function(t) {
                return !!t
            }
            )), !i).join("/")) || "."
        }
        ,
        e.normalize = function(t) {
            var o = e.isAbsolute(t)
              , s = "/" === i(t, -1);
            return (t = r(n(t.split("/"), (function(t) {
                return !!t
            }
            )), !o).join("/")) || o || (t = "."),
            t && s && (t += "/"),
            (o ? "/" : "") + t
        }
        ,
        e.isAbsolute = function(t) {
            return "/" === t.charAt(0)
        }
        ,
        e.join = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return e.normalize(n(t, (function(t, e) {
                if ("string" != typeof t)
                    throw new TypeError("Arguments to path.join must be strings");
                return t
            }
            )).join("/"))
        }
        ,
        e.relative = function(t, r) {
            function n(t) {
                for (var e = 0; e < t.length && "" === t[e]; e++)
                    ;
                for (var r = t.length - 1; r >= 0 && "" === t[r]; r--)
                    ;
                return e > r ? [] : t.slice(e, r - e + 1)
            }
            t = e.resolve(t).substr(1),
            r = e.resolve(r).substr(1);
            for (var i = n(t.split("/")), o = n(r.split("/")), s = Math.min(i.length, o.length), a = s, u = 0; u < s; u++)
                if (i[u] !== o[u]) {
                    a = u;
                    break
                }
            var h = [];
            for (u = a; u < i.length; u++)
                h.push("..");
            return (h = h.concat(o.slice(a))).join("/")
        }
        ,
        e.sep = "/",
        e.delimiter = ":",
        e.dirname = function(t) {
            if ("string" != typeof t && (t += ""),
            0 === t.length)
                return ".";
            for (var e = t.charCodeAt(0), r = 47 === e, n = -1, i = !0, o = t.length - 1; o >= 1; --o)
                if (47 === (e = t.charCodeAt(o))) {
                    if (!i) {
                        n = o;
                        break
                    }
                } else
                    i = !1;
            return -1 === n ? r ? "/" : "." : r && 1 === n ? "/" : t.slice(0, n)
        }
        ,
        e.basename = function(t, e) {
            var r = function(t) {
                "string" != typeof t && (t += "");
                var e, r = 0, n = -1, i = !0;
                for (e = t.length - 1; e >= 0; --e)
                    if (47 === t.charCodeAt(e)) {
                        if (!i) {
                            r = e + 1;
                            break
                        }
                    } else
                        -1 === n && (i = !1,
                        n = e + 1);
                return -1 === n ? "" : t.slice(r, n)
            }(t);
            return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)),
            r
        }
        ,
        e.extname = function(t) {
            "string" != typeof t && (t += "");
            for (var e = -1, r = 0, n = -1, i = !0, o = 0, s = t.length - 1; s >= 0; --s) {
                var a = t.charCodeAt(s);
                if (47 !== a)
                    -1 === n && (i = !1,
                    n = s + 1),
                    46 === a ? -1 === e ? e = s : 1 !== o && (o = 1) : -1 !== e && (o = -1);
                else if (!i) {
                    r = s + 1;
                    break
                }
            }
            return -1 === e || -1 === n || 0 === o || 1 === o && e === n - 1 && e === r + 1 ? "" : t.slice(e, n)
        }
        ;
        var i = "b" === "ab".substr(-1) ? function(t, e, r) {
            return t.substr(e, r)
        }
        : function(t, e, r) {
            return e < 0 && (e = t.length + e),
            t.substr(e, r)
        }
    }
    ).call(this, r(13))
}
, , , function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}
        ,
        t.paths = [],
        t.children || (t.children = []),
        Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }),
        Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }),
        t.webpackPolyfill = 1),
        t
    }
}
, , function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = c(r(44))
      , o = c(r(167))
      , s = c(r(168))
      , a = c(r(36))
      , u = r(15)
      , h = r(6)
      , l = c(r(12));
    function c(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var f = function(t) {
        function e(r, n, i, o, s, a) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var h = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            if (h.noFrame = !1,
            n || (h.noFrame = !0,
            n = new u.Rectangle(0,0,1,1)),
            r instanceof e && (r = r.baseTexture),
            h.baseTexture = r,
            h._frame = n,
            h.trim = o,
            h.valid = !1,
            h.requiresUpdate = !1,
            h._uvs = null,
            h.orig = i || n,
            h._rotate = Number(s || 0),
            !0 === s)
                h._rotate = 2;
            else if (h._rotate % 2 != 0)
                throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
            return r.hasLoaded ? (h.noFrame && (n = new u.Rectangle(0,0,r.width,r.height),
            r.on("update", h.onBaseTextureUpdated, h)),
            h.frame = n) : r.once("loaded", h.onBaseTextureLoaded, h),
            h.defaultAnchor = a ? new u.Point(a.x,a.y) : new u.Point(0,0),
            h._updateID = 0,
            h.transform = null,
            h.textureCacheIds = [],
            h
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.update = function() {
            this.baseTexture.update()
        }
        ,
        e.prototype.onBaseTextureLoaded = function(t) {
            this._updateID++,
            this.noFrame ? this.frame = new u.Rectangle(0,0,t.width,t.height) : this.frame = this._frame,
            this.baseTexture.on("update", this.onBaseTextureUpdated, this),
            this.emit("update", this)
        }
        ,
        e.prototype.onBaseTextureUpdated = function(t) {
            this._updateID++,
            this._frame.width = t.width,
            this._frame.height = t.height,
            this.emit("update", this)
        }
        ,
        e.prototype.destroy = function(t) {
            this.baseTexture && (t && (h.TextureCache[this.baseTexture.imageUrl] && e.removeFromCache(this.baseTexture.imageUrl),
            this.baseTexture.destroy()),
            this.baseTexture.off("update", this.onBaseTextureUpdated, this),
            this.baseTexture.off("loaded", this.onBaseTextureLoaded, this),
            this.baseTexture = null),
            this._frame = null,
            this._uvs = null,
            this.trim = null,
            this.orig = null,
            this.valid = !1,
            e.removeFromCache(this),
            this.textureCacheIds = null
        }
        ,
        e.prototype.clone = function() {
            return new e(this.baseTexture,this.frame,this.orig,this.trim,this.rotate,this.defaultAnchor)
        }
        ,
        e.prototype._updateUvs = function() {
            this._uvs || (this._uvs = new s.default),
            this._uvs.set(this._frame, this.baseTexture, this.rotate),
            this._updateID++
        }
        ,
        e.fromImage = function(t, r, n, o) {
            var s = h.TextureCache[t];
            return s || (s = new e(i.default.fromImage(t, r, n, o)),
            e.addToCache(s, t)),
            s
        }
        ,
        e.fromFrame = function(t) {
            var e = h.TextureCache[t];
            if (!e)
                throw new Error('The frameId "' + t + '" does not exist in the texture cache');
            return e
        }
        ,
        e.fromCanvas = function(t, r) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "canvas";
            return new e(i.default.fromCanvas(t, r, n))
        }
        ,
        e.fromVideo = function(t, r, n, i) {
            return "string" == typeof t ? e.fromVideoUrl(t, r, n, i) : new e(o.default.fromVideo(t, r, i))
        }
        ,
        e.fromVideoUrl = function(t, r, n, i) {
            return new e(o.default.fromUrl(t, r, n, i))
        }
        ,
        e.from = function(t) {
            if ("string" == typeof t) {
                var r = h.TextureCache[t];
                return r || (null !== t.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) ? e.fromVideoUrl(t) : e.fromImage(t))
            }
            return t instanceof HTMLImageElement ? new e(i.default.from(t)) : t instanceof HTMLCanvasElement ? e.fromCanvas(t, l.default.SCALE_MODE, "HTMLCanvasElement") : t instanceof HTMLVideoElement ? e.fromVideo(t) : t instanceof i.default ? new e(t) : t
        }
        ,
        e.fromLoader = function(t, r, n) {
            var o = new i.default(t,void 0,(0,
            h.getResolutionOfUrl)(r))
              , s = new e(o);
            return o.imageUrl = r,
            n || (n = r),
            i.default.addToCache(s.baseTexture, n),
            e.addToCache(s, n),
            n !== r && (i.default.addToCache(s.baseTexture, r),
            e.addToCache(s, r)),
            s
        }
        ,
        e.addToCache = function(t, e) {
            e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e),
            h.TextureCache[e] && console.warn("Texture added to the cache with an id [" + e + "] that already had an entry"),
            h.TextureCache[e] = t)
        }
        ,
        e.removeFromCache = function(t) {
            if ("string" == typeof t) {
                var e = h.TextureCache[t];
                if (e) {
                    var r = e.textureCacheIds.indexOf(t);
                    return r > -1 && e.textureCacheIds.splice(r, 1),
                    delete h.TextureCache[t],
                    e
                }
            } else if (t && t.textureCacheIds) {
                for (var n = 0; n < t.textureCacheIds.length; ++n)
                    h.TextureCache[t.textureCacheIds[n]] === t && delete h.TextureCache[t.textureCacheIds[n]];
                return t.textureCacheIds.length = 0,
                t
            }
            return null
        }
        ,
        n(e, [{
            key: "frame",
            get: function() {
                return this._frame
            },
            set: function(t) {
                this._frame = t,
                this.noFrame = !1;
                var e = t.x
                  , r = t.y
                  , n = t.width
                  , i = t.height
                  , o = e + n > this.baseTexture.width
                  , s = r + i > this.baseTexture.height;
                if (o || s) {
                    var a = o && s ? "and" : "or"
                      , u = "X: " + e + " + " + n + " = " + (e + n) + " > " + this.baseTexture.width
                      , h = "Y: " + r + " + " + i + " = " + (r + i) + " > " + this.baseTexture.height;
                    throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + u + " " + a + " " + h)
                }
                this.valid = n && i && this.baseTexture.hasLoaded,
                this.trim || this.rotate || (this.orig = t),
                this.valid && this._updateUvs()
            }
        }, {
            key: "rotate",
            get: function() {
                return this._rotate
            },
            set: function(t) {
                this._rotate = t,
                this.valid && this._updateUvs()
            }
        }, {
            key: "width",
            get: function() {
                return this.orig.width
            }
        }, {
            key: "height",
            get: function() {
                return this.orig.height
            }
        }]),
        e
    }(a.default);
    function d(t) {
        t.destroy = function() {}
        ,
        t.on = function() {}
        ,
        t.once = function() {}
        ,
        t.emit = function() {}
    }
    e.default = f,
    f.EMPTY = new f(new i.default),
    d(f.EMPTY),
    d(f.EMPTY.baseTexture),
    f.WHITE = function() {
        var t = document.createElement("canvas");
        t.width = 10,
        t.height = 10;
        var e = t.getContext("2d");
        return e.fillStyle = "white",
        e.fillRect(0, 0, 10, 10),
        new f(new i.default(t))
    }(),
    d(f.WHITE),
    d(f.WHITE.baseTexture)
}
, , , , , , , function(t, e, r) {
    "use strict";
    var n = Object.prototype.hasOwnProperty
      , i = "~";
    function o() {}
    function s(t, e, r) {
        this.fn = t,
        this.context = e,
        this.once = r || !1
    }
    function a() {
        this._events = new o,
        this._eventsCount = 0
    }
    Object.create && (o.prototype = Object.create(null),
    (new o).__proto__ || (i = !1)),
    a.prototype.eventNames = function() {
        var t, e, r = [];
        if (0 === this._eventsCount)
            return r;
        for (e in t = this._events)
            n.call(t, e) && r.push(i ? e.slice(1) : e);
        return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
    }
    ,
    a.prototype.listeners = function(t, e) {
        var r = i ? i + t : t
          , n = this._events[r];
        if (e)
            return !!n;
        if (!n)
            return [];
        if (n.fn)
            return [n.fn];
        for (var o = 0, s = n.length, a = new Array(s); o < s; o++)
            a[o] = n[o].fn;
        return a
    }
    ,
    a.prototype.emit = function(t, e, r, n, o, s) {
        var a = i ? i + t : t;
        if (!this._events[a])
            return !1;
        var u, h, l = this._events[a], c = arguments.length;
        if (l.fn) {
            switch (l.once && this.removeListener(t, l.fn, void 0, !0),
            c) {
            case 1:
                return l.fn.call(l.context),
                !0;
            case 2:
                return l.fn.call(l.context, e),
                !0;
            case 3:
                return l.fn.call(l.context, e, r),
                !0;
            case 4:
                return l.fn.call(l.context, e, r, n),
                !0;
            case 5:
                return l.fn.call(l.context, e, r, n, o),
                !0;
            case 6:
                return l.fn.call(l.context, e, r, n, o, s),
                !0
            }
            for (h = 1,
            u = new Array(c - 1); h < c; h++)
                u[h - 1] = arguments[h];
            l.fn.apply(l.context, u)
        } else {
            var f, d = l.length;
            for (h = 0; h < d; h++)
                switch (l[h].once && this.removeListener(t, l[h].fn, void 0, !0),
                c) {
                case 1:
                    l[h].fn.call(l[h].context);
                    break;
                case 2:
                    l[h].fn.call(l[h].context, e);
                    break;
                case 3:
                    l[h].fn.call(l[h].context, e, r);
                    break;
                case 4:
                    l[h].fn.call(l[h].context, e, r, n);
                    break;
                default:
                    if (!u)
                        for (f = 1,
                        u = new Array(c - 1); f < c; f++)
                            u[f - 1] = arguments[f];
                    l[h].fn.apply(l[h].context, u)
                }
        }
        return !0
    }
    ,
    a.prototype.on = function(t, e, r) {
        var n = new s(e,r || this)
          , o = i ? i + t : t;
        return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], n] : this._events[o].push(n) : (this._events[o] = n,
        this._eventsCount++),
        this
    }
    ,
    a.prototype.once = function(t, e, r) {
        var n = new s(e,r || this,!0)
          , o = i ? i + t : t;
        return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], n] : this._events[o].push(n) : (this._events[o] = n,
        this._eventsCount++),
        this
    }
    ,
    a.prototype.removeListener = function(t, e, r, n) {
        var s = i ? i + t : t;
        if (!this._events[s])
            return this;
        if (!e)
            return 0 == --this._eventsCount ? this._events = new o : delete this._events[s],
            this;
        var a = this._events[s];
        if (a.fn)
            a.fn !== e || n && !a.once || r && a.context !== r || (0 == --this._eventsCount ? this._events = new o : delete this._events[s]);
        else {
            for (var u = 0, h = [], l = a.length; u < l; u++)
                (a[u].fn !== e || n && !a[u].once || r && a[u].context !== r) && h.push(a[u]);
            h.length ? this._events[s] = 1 === h.length ? h[0] : h : 0 == --this._eventsCount ? this._events = new o : delete this._events[s]
        }
        return this
    }
    ,
    a.prototype.removeAllListeners = function(t) {
        var e;
        return t ? (e = i ? i + t : t,
        this._events[e] && (0 == --this._eventsCount ? this._events = new o : delete this._events[e])) : (this._events = new o,
        this._eventsCount = 0),
        this
    }
    ,
    a.prototype.off = a.prototype.removeListener,
    a.prototype.addListener = a.prototype.on,
    a.prototype.setMaxListeners = function() {
        return this
    }
    ,
    a.prefixed = i,
    a.EventEmitter = a,
    t.exports = a
}
, , , , , , , , function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = r(6)
      , i = u(r(12))
      , o = u(r(36))
      , s = u(r(165))
      , a = u(r(106));
    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var h = function(t) {
        function e(r, o, s) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var a = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return a.uid = (0,
            n.uid)(),
            a.touched = 0,
            a.resolution = s || i.default.RESOLUTION,
            a.width = 100,
            a.height = 100,
            a.realWidth = 100,
            a.realHeight = 100,
            a.scaleMode = void 0 !== o ? o : i.default.SCALE_MODE,
            a.hasLoaded = !1,
            a.isLoading = !1,
            a.source = null,
            a.origSource = null,
            a.imageType = null,
            a.sourceScale = 1,
            a.premultipliedAlpha = !0,
            a.imageUrl = null,
            a.isPowerOfTwo = !1,
            a.mipmap = i.default.MIPMAP_TEXTURES,
            a.wrapMode = i.default.WRAP_MODE,
            a._glTextures = {},
            a._enabled = 0,
            a._virtalBoundId = -1,
            a._destroyed = !1,
            a.textureCacheIds = [],
            r && a.loadSource(r),
            a
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.update = function() {
            "svg" !== this.imageType && (this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width,
            this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height,
            this._updateDimensions()),
            this.emit("update", this)
        }
        ,
        e.prototype._updateDimensions = function() {
            this.width = this.realWidth / this.resolution,
            this.height = this.realHeight / this.resolution,
            this.isPowerOfTwo = a.default.isPow2(this.realWidth) && a.default.isPow2(this.realHeight)
        }
        ,
        e.prototype.loadSource = function(t) {
            var e = this.isLoading;
            this.hasLoaded = !1,
            this.isLoading = !1,
            e && this.source && (this.source.onload = null,
            this.source.onerror = null);
            var r = !this.source;
            if (this.source = t,
            (t.src && t.complete || t.getContext) && t.width && t.height)
                this._updateImageType(),
                "svg" === this.imageType ? this._loadSvgSource() : this._sourceLoaded(),
                r && this.emit("loaded", this);
            else if (!t.getContext) {
                this.isLoading = !0;
                var n = this;
                if (t.onload = function() {
                    n._updateImageType(),
                    t.onload = null,
                    t.onerror = null,
                    n.isLoading && (n.isLoading = !1,
                    n._sourceLoaded(),
                    "svg" !== n.imageType ? n.emit("loaded", n) : n._loadSvgSource())
                }
                ,
                t.onerror = function() {
                    t.onload = null,
                    t.onerror = null,
                    n.isLoading && (n.isLoading = !1,
                    n.emit("error", n))
                }
                ,
                t.complete && t.src) {
                    if (t.onload = null,
                    t.onerror = null,
                    "svg" === n.imageType)
                        return void n._loadSvgSource();
                    this.isLoading = !1,
                    t.width && t.height ? (this._sourceLoaded(),
                    e && this.emit("loaded", this)) : e && this.emit("error", this)
                }
            }
        }
        ,
        e.prototype._updateImageType = function() {
            if (this.imageUrl) {
                var t = (0,
                n.decomposeDataUri)(this.imageUrl)
                  , e = void 0;
                if (t && "image" === t.mediaType) {
                    var r = t.subType.split("+")[0];
                    if (!(e = (0,
                    n.getUrlFileExtension)("." + r)))
                        throw new Error("Invalid image type in data URI.")
                } else
                    (e = (0,
                    n.getUrlFileExtension)(this.imageUrl)) || (e = "png");
                this.imageType = e
            }
        }
        ,
        e.prototype._loadSvgSource = function() {
            if ("svg" === this.imageType) {
                var t = (0,
                n.decomposeDataUri)(this.imageUrl);
                t ? this._loadSvgSourceUsingDataUri(t) : this._loadSvgSourceUsingXhr()
            }
        }
        ,
        e.prototype._loadSvgSourceUsingDataUri = function(t) {
            var e = void 0;
            if ("base64" === t.encoding) {
                if (!atob)
                    throw new Error("Your browser doesn't support base64 conversions.");
                e = atob(t.data)
            } else
                e = t.data;
            this._loadSvgSourceUsingString(e)
        }
        ,
        e.prototype._loadSvgSourceUsingXhr = function() {
            var t = this
              , e = new XMLHttpRequest;
            e.onload = function() {
                if (e.readyState !== e.DONE || 200 !== e.status)
                    throw new Error("Failed to load SVG using XHR.");
                t._loadSvgSourceUsingString(e.response)
            }
            ,
            e.onerror = function() {
                return t.emit("error", t)
            }
            ,
            e.open("GET", this.imageUrl, !0),
            e.send()
        }
        ,
        e.prototype._loadSvgSourceUsingString = function(t) {
            var r = (0,
            n.getSvgSize)(t)
              , i = r.width
              , o = r.height;
            if (!i || !o)
                throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
            this.realWidth = Math.round(i * this.sourceScale),
            this.realHeight = Math.round(o * this.sourceScale),
            this._updateDimensions();
            var s = document.createElement("canvas");
            s.width = this.realWidth,
            s.height = this.realHeight,
            s._pixiId = "canvas_" + (0,
            n.uid)(),
            s.getContext("2d").drawImage(this.source, 0, 0, i, o, 0, 0, this.realWidth, this.realHeight),
            this.origSource = this.source,
            this.source = s,
            e.addToCache(this, s._pixiId),
            this.isLoading = !1,
            this._sourceLoaded(),
            this.emit("loaded", this)
        }
        ,
        e.prototype._sourceLoaded = function() {
            this.hasLoaded = !0,
            this.update()
        }
        ,
        e.prototype.destroy = function() {
            this.imageUrl && (delete n.TextureCache[this.imageUrl],
            this.imageUrl = null,
            navigator.isCocoonJS || (this.source.src = "")),
            this.source = null,
            this.dispose(),
            e.removeFromCache(this),
            this.textureCacheIds = null,
            this._destroyed = !0
        }
        ,
        e.prototype.dispose = function() {
            this.emit("dispose", this)
        }
        ,
        e.prototype.updateSourceImage = function(t) {
            this.source.src = t,
            this.loadSource(this.source)
        }
        ,
        e.fromImage = function(t, r, i, o) {
            var a = n.BaseTextureCache[t];
            if (!a) {
                var u = new Image;
                void 0 === r && 0 !== t.indexOf("data:") ? u.crossOrigin = (0,
                s.default)(t) : r && (u.crossOrigin = "string" == typeof r ? r : "anonymous"),
                (a = new e(u,i)).imageUrl = t,
                o && (a.sourceScale = o),
                a.resolution = (0,
                n.getResolutionOfUrl)(t),
                u.src = t,
                e.addToCache(a, t)
            }
            return a
        }
        ,
        e.fromCanvas = function(t, r) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "canvas";
            t._pixiId || (t._pixiId = i + "_" + (0,
            n.uid)());
            var o = n.BaseTextureCache[t._pixiId];
            return o || (o = new e(t,r),
            e.addToCache(o, t._pixiId)),
            o
        }
        ,
        e.from = function(t, r, i) {
            if ("string" == typeof t)
                return e.fromImage(t, void 0, r, i);
            if (t instanceof HTMLImageElement) {
                var o = t.src
                  , s = n.BaseTextureCache[o];
                return s || ((s = new e(t,r)).imageUrl = o,
                i && (s.sourceScale = i),
                s.resolution = (0,
                n.getResolutionOfUrl)(o),
                e.addToCache(s, o)),
                s
            }
            return t instanceof HTMLCanvasElement ? e.fromCanvas(t, r) : t
        }
        ,
        e.addToCache = function(t, e) {
            e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e),
            n.BaseTextureCache[e] && console.warn("BaseTexture added to the cache with an id [" + e + "] that already had an entry"),
            n.BaseTextureCache[e] = t)
        }
        ,
        e.removeFromCache = function(t) {
            if ("string" == typeof t) {
                var e = n.BaseTextureCache[t];
                if (e) {
                    var r = e.textureCacheIds.indexOf(t);
                    return r > -1 && e.textureCacheIds.splice(r, 1),
                    delete n.BaseTextureCache[t],
                    e
                }
            } else if (t && t.textureCacheIds) {
                for (var i = 0; i < t.textureCacheIds.length; ++i)
                    delete n.BaseTextureCache[t.textureCacheIds[i]];
                return t.textureCacheIds.length = 0,
                t
            }
            return null
        }
        ,
        e
    }(o.default);
    e.default = h
}
, , , , , , , , , function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }(), o = r(6), s = r(162);
    var a = function(t) {
        function e() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return r.children = [],
            r
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.onChildrenChange = function() {}
        ,
        e.prototype.addChild = function(t) {
            var e = arguments.length;
            if (e > 1)
                for (var r = 0; r < e; r++)
                    this.addChild(arguments[r]);
            else
                t.parent && t.parent.removeChild(t),
                t.parent = this,
                t.transform._parentID = -1,
                this.children.push(t),
                this._boundsID++,
                this.onChildrenChange(this.children.length - 1),
                t.emit("added", this);
            return t
        }
        ,
        e.prototype.addChildAt = function(t, e) {
            if (e < 0 || e > this.children.length)
                throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
            return t.parent && t.parent.removeChild(t),
            t.parent = this,
            t.transform._parentID = -1,
            this.children.splice(e, 0, t),
            this._boundsID++,
            this.onChildrenChange(e),
            t.emit("added", this),
            t
        }
        ,
        e.prototype.swapChildren = function(t, e) {
            if (t !== e) {
                var r = this.getChildIndex(t)
                  , n = this.getChildIndex(e);
                this.children[r] = e,
                this.children[n] = t,
                this.onChildrenChange(r < n ? r : n)
            }
        }
        ,
        e.prototype.getChildIndex = function(t) {
            var e = this.children.indexOf(t);
            if (-1 === e)
                throw new Error("The supplied DisplayObject must be a child of the caller");
            return e
        }
        ,
        e.prototype.setChildIndex = function(t, e) {
            if (e < 0 || e >= this.children.length)
                throw new Error("The index " + e + " supplied is out of bounds " + this.children.length);
            var r = this.getChildIndex(t);
            (0,
            o.removeItems)(this.children, r, 1),
            this.children.splice(e, 0, t),
            this.onChildrenChange(e)
        }
        ,
        e.prototype.getChildAt = function(t) {
            if (t < 0 || t >= this.children.length)
                throw new Error("getChildAt: Index (" + t + ") does not exist.");
            return this.children[t]
        }
        ,
        e.prototype.removeChild = function(t) {
            var e = arguments.length;
            if (e > 1)
                for (var r = 0; r < e; r++)
                    this.removeChild(arguments[r]);
            else {
                var n = this.children.indexOf(t);
                if (-1 === n)
                    return null;
                t.parent = null,
                t.transform._parentID = -1,
                (0,
                o.removeItems)(this.children, n, 1),
                this._boundsID++,
                this.onChildrenChange(n),
                t.emit("removed", this)
            }
            return t
        }
        ,
        e.prototype.removeChildAt = function(t) {
            var e = this.getChildAt(t);
            return e.parent = null,
            e.transform._parentID = -1,
            (0,
            o.removeItems)(this.children, t, 1),
            this._boundsID++,
            this.onChildrenChange(t),
            e.emit("removed", this),
            e
        }
        ,
        e.prototype.removeChildren = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , e = arguments[1]
              , r = t
              , n = "number" == typeof e ? e : this.children.length
              , i = n - r
              , o = void 0;
            if (i > 0 && i <= n) {
                o = this.children.splice(r, i);
                for (var s = 0; s < o.length; ++s)
                    o[s].parent = null,
                    o[s].transform && (o[s].transform._parentID = -1);
                this._boundsID++,
                this.onChildrenChange(t);
                for (var a = 0; a < o.length; ++a)
                    o[a].emit("removed", this);
                return o
            }
            if (0 === i && 0 === this.children.length)
                return [];
            throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
        }
        ,
        e.prototype.updateTransform = function() {
            this._boundsID++,
            this.transform.updateTransform(this.parent.transform),
            this.worldAlpha = this.alpha * this.parent.worldAlpha;
            for (var t = 0, e = this.children.length; t < e; ++t) {
                var r = this.children[t];
                r.visible && r.updateTransform()
            }
        }
        ,
        e.prototype.calculateBounds = function() {
            this._bounds.clear(),
            this._calculateBounds();
            for (var t = 0; t < this.children.length; t++) {
                var e = this.children[t];
                e.visible && e.renderable && (e.calculateBounds(),
                e._mask ? (e._mask.calculateBounds(),
                this._bounds.addBoundsMask(e._bounds, e._mask._bounds)) : e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds))
            }
            this._lastBoundsID = this._boundsID
        }
        ,
        e.prototype._calculateBounds = function() {}
        ,
        e.prototype.renderWebGL = function(t) {
            if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
                if (this._mask || this.filters && this.filters.length)
                    this.renderAdvancedWebGL(t);
                else {
                    this._renderWebGL(t);
                    for (var e = 0, r = this.children.length; e < r; ++e)
                        this.children[e].renderWebGL(t)
                }
        }
        ,
        e.prototype.renderAdvancedWebGL = function(t) {
            t.flush();
            var e = this._filters
              , r = this._mask;
            if (e) {
                this._enabledFilters || (this._enabledFilters = []),
                this._enabledFilters.length = 0;
                for (var n = 0; n < e.length; n++)
                    e[n].enabled && this._enabledFilters.push(e[n]);
                this._enabledFilters.length && t.filterManager.pushFilter(this, this._enabledFilters)
            }
            r && t.maskManager.pushMask(this, this._mask),
            this._renderWebGL(t);
            for (var i = 0, o = this.children.length; i < o; i++)
                this.children[i].renderWebGL(t);
            t.flush(),
            r && t.maskManager.popMask(this, this._mask),
            e && this._enabledFilters && this._enabledFilters.length && t.filterManager.popFilter()
        }
        ,
        e.prototype._renderWebGL = function(t) {}
        ,
        e.prototype._renderCanvas = function(t) {}
        ,
        e.prototype.renderCanvas = function(t) {
            if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
                this._mask && t.maskManager.pushMask(this._mask),
                this._renderCanvas(t);
                for (var e = 0, r = this.children.length; e < r; ++e)
                    this.children[e].renderCanvas(t);
                this._mask && t.maskManager.popMask(t)
            }
        }
        ,
        e.prototype.destroy = function(e) {
            t.prototype.destroy.call(this);
            var r = "boolean" == typeof e ? e : e && e.children
              , n = this.removeChildren(0, this.children.length);
            if (r)
                for (var i = 0; i < n.length; ++i)
                    n[i].destroy(e)
        }
        ,
        i(e, [{
            key: "width",
            get: function() {
                return this.scale.x * this.getLocalBounds().width
            },
            set: function(t) {
                var e = this.getLocalBounds().width;
                this.scale.x = 0 !== e ? t / e : 1,
                this._width = t
            }
        }, {
            key: "height",
            get: function() {
                return this.scale.y * this.getLocalBounds().height
            },
            set: function(t) {
                var e = this.getLocalBounds().height;
                this.scale.y = 0 !== e ? t / e : 1,
                this._height = t
            }
        }]),
        e
    }(((n = s) && n.__esModule ? n : {
        default: n
    }).default);
    e.default = a,
    a.prototype.containerUpdateTransform = a.prototype.updateTransform
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = l(r(169))
      , i = l(r(323))
      , o = l(r(171))
      , s = l(r(324))
      , a = r(6)
      , u = r(4)
      , h = l(r(12));
    function l(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var c = function(t) {
        function e(r, n, o) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var a = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, "Canvas", r, n, o));
            return a.type = u.RENDERER_TYPE.CANVAS,
            a.rootContext = a.view.getContext("2d", {
                alpha: a.transparent
            }),
            a.context = a.rootContext,
            a.refresh = !0,
            a.maskManager = new i.default(a),
            a.smoothProperty = "imageSmoothingEnabled",
            a.rootContext.imageSmoothingEnabled || (a.rootContext.webkitImageSmoothingEnabled ? a.smoothProperty = "webkitImageSmoothingEnabled" : a.rootContext.mozImageSmoothingEnabled ? a.smoothProperty = "mozImageSmoothingEnabled" : a.rootContext.oImageSmoothingEnabled ? a.smoothProperty = "oImageSmoothingEnabled" : a.rootContext.msImageSmoothingEnabled && (a.smoothProperty = "msImageSmoothingEnabled")),
            a.initPlugins(),
            a.blendModes = (0,
            s.default)(),
            a._activeBlendMode = null,
            a.renderingToScreen = !1,
            a.resize(a.options.width, a.options.height),
            a
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.render = function(t, e, r, n, i) {
            if (this.view) {
                this.renderingToScreen = !e,
                this.emit("prerender");
                var s = this.resolution;
                e ? ((e = e.baseTexture || e)._canvasRenderTarget || (e._canvasRenderTarget = new o.default(e.width,e.height,e.resolution),
                e.source = e._canvasRenderTarget.canvas,
                e.valid = !0),
                this.context = e._canvasRenderTarget.context,
                this.resolution = e._canvasRenderTarget.resolution) : this.context = this.rootContext;
                var a = this.context;
                if (e || (this._lastObjectRendered = t),
                !i) {
                    var h = t.parent
                      , l = this._tempDisplayObjectParent.transform.worldTransform;
                    n ? (n.copy(l),
                    this._tempDisplayObjectParent.transform._worldID = -1) : l.identity(),
                    t.parent = this._tempDisplayObjectParent,
                    t.updateTransform(),
                    t.parent = h
                }
                a.save(),
                a.setTransform(1, 0, 0, 1, 0, 0),
                a.globalAlpha = 1,
                this._activeBlendMode = u.BLEND_MODES.NORMAL,
                a.globalCompositeOperation = this.blendModes[u.BLEND_MODES.NORMAL],
                navigator.isCocoonJS && this.view.screencanvas && (a.fillStyle = "black",
                a.clear()),
                (void 0 !== r ? r : this.clearBeforeRender) && this.renderingToScreen && (this.transparent ? a.clearRect(0, 0, this.width, this.height) : (a.fillStyle = this._backgroundColorString,
                a.fillRect(0, 0, this.width, this.height)));
                var c = this.context;
                this.context = a,
                t.renderCanvas(this),
                this.context = c,
                a.restore(),
                this.resolution = s,
                this.emit("postrender")
            }
        }
        ,
        e.prototype.clear = function(t) {
            var e = this.context;
            t = t || this._backgroundColorString,
            !this.transparent && t ? (e.fillStyle = t,
            e.fillRect(0, 0, this.width, this.height)) : e.clearRect(0, 0, this.width, this.height)
        }
        ,
        e.prototype.setBlendMode = function(t) {
            this._activeBlendMode !== t && (this._activeBlendMode = t,
            this.context.globalCompositeOperation = this.blendModes[t])
        }
        ,
        e.prototype.destroy = function(e) {
            this.destroyPlugins(),
            t.prototype.destroy.call(this, e),
            this.context = null,
            this.refresh = !0,
            this.maskManager.destroy(),
            this.maskManager = null,
            this.smoothProperty = null
        }
        ,
        e.prototype.resize = function(e, r) {
            t.prototype.resize.call(this, e, r),
            this.smoothProperty && (this.rootContext[this.smoothProperty] = h.default.SCALE_MODE === u.SCALE_MODES.LINEAR)
        }
        ,
        e.prototype.invalidateBlendMode = function() {
            this._activeBlendMode = this.blendModes.indexOf(this.context.globalCompositeOperation)
        }
        ,
        e
    }(n.default);
    e.default = c,
    a.pluginTarget.mixin(c)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.renderer = e,
            this.renderer.on("context", this.onContextChange, this)
        }
        return t.prototype.onContextChange = function() {}
        ,
        t.prototype.destroy = function() {
            this.renderer.off("context", this.onContextChange, this),
            this.renderer = null
        }
        ,
        t
    }();
    e.default = n
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(19), o = r(12), s = (n = o) && n.__esModule ? n : {
        default: n
    };
    function a(t, e) {
        if (t instanceof Array) {
            if ("precision" !== t[0].substring(0, 9)) {
                var r = t.slice(0);
                return r.unshift("precision " + e + " float;"),
                r
            }
        } else if ("precision" !== t.trim().substring(0, 9))
            return "precision " + e + " float;\n" + t;
        return t
    }
    var u = function(t) {
        function e(r, n, i, o, u) {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r, a(n, u || s.default.PRECISION_VERTEX), a(i, u || s.default.PRECISION_FRAGMENT), void 0, o))
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e
    }(i.GLShader);
    e.default = u
}
, function(t, e, r) {
    "use strict";
    var n = r(376).Loader
      , i = r(110).Resource
      , o = r(196)
      , s = r(197);
    n.Resource = i,
    n.async = o,
    n.encodeBinary = s,
    n.base64 = s,
    t.exports = n,
    t.exports.Loader = n,
    t.exports.default = n
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }(), o = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5)), s = r(29), a = (n = s) && n.__esModule ? n : {
        default: n
    };
    var u = new o.Point
      , h = new o.Polygon
      , l = function(t) {
        function e(r, n, i, s, u) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var h = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return h._texture = r || a.default.EMPTY,
            h.uvs = i || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
            h.vertices = n || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]),
            h.indices = s || new Uint16Array([0, 1, 3, 2]),
            h.dirty = 0,
            h.indexDirty = 0,
            h.vertexDirty = 0,
            h.autoUpdate = !0,
            h.blendMode = o.BLEND_MODES.NORMAL,
            h.canvasPadding = o.settings.MESH_CANVAS_PADDING,
            h.drawMode = u || e.DRAW_MODES.TRIANGLE_MESH,
            h.shader = null,
            h.tintRgb = new Float32Array([1, 1, 1]),
            h._glDatas = {},
            h._uvTransform = new o.TextureMatrix(h._texture),
            h.uploadUvTransform = !1,
            h.pluginName = "mesh",
            h
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype._renderWebGL = function(t) {
            this.refresh(),
            t.setObjectRenderer(t.plugins[this.pluginName]),
            t.plugins[this.pluginName].render(this)
        }
        ,
        e.prototype._renderCanvas = function(t) {
            this.refresh(),
            t.plugins[this.pluginName].render(this)
        }
        ,
        e.prototype._onTextureUpdate = function() {
            this._uvTransform.texture = this._texture,
            this.refresh()
        }
        ,
        e.prototype.multiplyUvs = function() {
            this.uploadUvTransform || this._uvTransform.multiplyUvs(this.uvs)
        }
        ,
        e.prototype.refresh = function(t) {
            this.autoUpdate && this.vertexDirty++,
            this._uvTransform.update(t) && this._refresh()
        }
        ,
        e.prototype._refresh = function() {}
        ,
        e.prototype._calculateBounds = function() {
            this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length)
        }
        ,
        e.prototype.containsPoint = function(t) {
            if (!this.getBounds().contains(t.x, t.y))
                return !1;
            this.worldTransform.applyInverse(t, u);
            for (var r = this.vertices, n = h.points, i = this.indices, o = this.indices.length, s = this.drawMode === e.DRAW_MODES.TRIANGLES ? 3 : 1, a = 0; a + 2 < o; a += s) {
                var l = 2 * i[a]
                  , c = 2 * i[a + 1]
                  , f = 2 * i[a + 2];
                if (n[0] = r[l],
                n[1] = r[l + 1],
                n[2] = r[c],
                n[3] = r[c + 1],
                n[4] = r[f],
                n[5] = r[f + 1],
                h.contains(u.x, u.y))
                    return !0
            }
            return !1
        }
        ,
        e.prototype.destroy = function(e) {
            for (var r in this._glDatas) {
                var n = this._glDatas[r];
                n.destroy ? n.destroy() : (n.vertexBuffer && (n.vertexBuffer.destroy(),
                n.vertexBuffer = null),
                n.indexBuffer && (n.indexBuffer.destroy(),
                n.indexBuffer = null),
                n.uvBuffer && (n.uvBuffer.destroy(),
                n.uvBuffer = null),
                n.vao && (n.vao.destroy(),
                n.vao = null))
            }
            this._glDatas = null,
            t.prototype.destroy.call(this, e)
        }
        ,
        i(e, [{
            key: "texture",
            get: function() {
                return this._texture
            },
            set: function(t) {
                this._texture !== t && (this._texture = t,
                t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
            }
        }, {
            key: "tint",
            get: function() {
                return o.utils.rgb2hex(this.tintRgb)
            },
            set: function(t) {
                this.tintRgb = o.utils.hex2rgb(t, this.tintRgb)
            }
        }]),
        e
    }(o.Container);
    e.default = l,
    l.DRAW_MODES = {
        TRIANGLE_MESH: 0,
        TRIANGLES: 1
    }
}
, , , , , , , , , , , , function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(6), o = r(172);
    var s = {
        getTintedTexture: function(t, e) {
            var r = t._texture
              , n = "#" + ("00000" + (0 | (e = s.roundColor(e))).toString(16)).substr(-6);
            r.tintCache = r.tintCache || {};
            var i = r.tintCache[n]
              , o = void 0;
            if (i) {
                if (i.tintId === r._updateID)
                    return r.tintCache[n];
                o = r.tintCache[n]
            } else
                o = s.canvas || document.createElement("canvas");
            if (s.tintMethod(r, e, o),
            o.tintId = r._updateID,
            s.convertTintToImage) {
                var a = new Image;
                a.src = o.toDataURL(),
                r.tintCache[n] = a
            } else
                r.tintCache[n] = o,
                s.canvas = null;
            return o
        },
        tintWithMultiply: function(t, e, r) {
            var n = r.getContext("2d")
              , i = t._frame.clone()
              , o = t.baseTexture.resolution;
            i.x *= o,
            i.y *= o,
            i.width *= o,
            i.height *= o,
            r.width = Math.ceil(i.width),
            r.height = Math.ceil(i.height),
            n.save(),
            n.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6),
            n.fillRect(0, 0, i.width, i.height),
            n.globalCompositeOperation = "multiply",
            n.drawImage(t.baseTexture.source, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height),
            n.globalCompositeOperation = "destination-atop",
            n.drawImage(t.baseTexture.source, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height),
            n.restore()
        },
        tintWithOverlay: function(t, e, r) {
            var n = r.getContext("2d")
              , i = t._frame.clone()
              , o = t.baseTexture.resolution;
            i.x *= o,
            i.y *= o,
            i.width *= o,
            i.height *= o,
            r.width = Math.ceil(i.width),
            r.height = Math.ceil(i.height),
            n.save(),
            n.globalCompositeOperation = "copy",
            n.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6),
            n.fillRect(0, 0, i.width, i.height),
            n.globalCompositeOperation = "destination-atop",
            n.drawImage(t.baseTexture.source, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height),
            n.restore()
        },
        tintWithPerPixel: function(t, e, r) {
            var n = r.getContext("2d")
              , o = t._frame.clone()
              , s = t.baseTexture.resolution;
            o.x *= s,
            o.y *= s,
            o.width *= s,
            o.height *= s,
            r.width = Math.ceil(o.width),
            r.height = Math.ceil(o.height),
            n.save(),
            n.globalCompositeOperation = "copy",
            n.drawImage(t.baseTexture.source, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height),
            n.restore();
            for (var a = (0,
            i.hex2rgb)(e), u = a[0], h = a[1], l = a[2], c = n.getImageData(0, 0, o.width, o.height), f = c.data, d = 0; d < f.length; d += 4)
                f[d + 0] *= u,
                f[d + 1] *= h,
                f[d + 2] *= l;
            n.putImageData(c, 0, 0)
        },
        roundColor: function(t) {
            var e = s.cacheStepsPerColorChannel
              , r = (0,
            i.hex2rgb)(t);
            return r[0] = Math.min(255, r[0] / e * e),
            r[1] = Math.min(255, r[1] / e * e),
            r[2] = Math.min(255, r[2] / e * e),
            (0,
            i.rgb2hex)(r)
        },
        cacheStepsPerColorChannel: 8,
        convertTintToImage: !1,
        canUseMultiply: (0,
        ((n = o) && n.__esModule ? n : {
            default: n
        }).default)(),
        tintMethod: 0
    };
    s.tintMethod = s.canUseMultiply ? s.tintWithMultiply : s.tintWithPerPixel,
    e.default = s
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(55);
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    var a = function(t) {
        function e() {
            return o(this, e),
            s(this, t.apply(this, arguments))
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.start = function() {}
        ,
        e.prototype.stop = function() {
            this.flush()
        }
        ,
        e.prototype.flush = function() {}
        ,
        e.prototype.render = function(t) {}
        ,
        e
    }(((n = i) && n.__esModule ? n : {
        default: n
    }).default);
    e.default = a
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = _(r(169))
      , i = _(r(326))
      , o = _(r(328))
      , s = _(r(329))
      , a = _(r(73))
      , u = _(r(71))
      , h = _(r(331))
      , l = _(r(44))
      , c = _(r(332))
      , f = _(r(333))
      , d = _(r(335))
      , p = _(r(336))
      , v = r(6)
      , y = _(r(19))
      , g = r(4);
    function _(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var m = 0
      , b = function(t) {
        function e(r, n, s) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var a = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, "WebGL", r, n, s));
            return a.legacy = a.options.legacy,
            a.legacy && (y.default.VertexArrayObject.FORCE_NATIVE = !0),
            a.type = g.RENDERER_TYPE.WEBGL,
            a.handleContextLost = a.handleContextLost.bind(a),
            a.handleContextRestored = a.handleContextRestored.bind(a),
            a.view.addEventListener("webglcontextlost", a.handleContextLost, !1),
            a.view.addEventListener("webglcontextrestored", a.handleContextRestored, !1),
            a._contextOptions = {
                alpha: a.transparent,
                antialias: a.options.antialias,
                premultipliedAlpha: a.transparent && "notMultiplied" !== a.transparent,
                stencil: !0,
                preserveDrawingBuffer: a.options.preserveDrawingBuffer,
                powerPreference: a.options.powerPreference
            },
            a._backgroundColorRgba[3] = a.transparent ? 0 : 1,
            a.maskManager = new i.default(a),
            a.stencilManager = new o.default(a),
            a.emptyRenderer = new u.default(a),
            a.currentRenderer = a.emptyRenderer,
            a.textureManager = null,
            a.filterManager = null,
            a.initPlugins(),
            a.options.context && (0,
            p.default)(a.options.context),
            a.gl = a.options.context || y.default.createContext(a.view, a._contextOptions),
            a.CONTEXT_UID = m++,
            a.state = new f.default(a.gl),
            a.renderingToScreen = !0,
            a.boundTextures = null,
            a._activeShader = null,
            a._activeVao = null,
            a._activeRenderTarget = null,
            a._initContext(),
            a.drawModes = (0,
            d.default)(a.gl),
            a._nextTextureLocation = 0,
            a.setBlendMode(0),
            a
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype._initContext = function() {
            var t = this.gl;
            t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext();
            var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
            this._activeShader = null,
            this._activeVao = null,
            this.boundTextures = new Array(e),
            this.emptyTextures = new Array(e),
            this._unknownBoundTextures = !1,
            this.textureManager = new h.default(this),
            this.filterManager = new s.default(this),
            this.textureGC = new c.default(this),
            this.state.resetToDefault(),
            this.rootRenderTarget = new a.default(t,this.width,this.height,null,this.resolution,!0),
            this.rootRenderTarget.clearColor = this._backgroundColorRgba,
            this.bindRenderTarget(this.rootRenderTarget);
            var r = new y.default.GLTexture.fromData(t,null,1,1)
              , n = {
                _glTextures: {}
            };
            n._glTextures[this.CONTEXT_UID] = {};
            for (var i = 0; i < e; i++) {
                var o = new l.default;
                o._glTextures[this.CONTEXT_UID] = r,
                this.boundTextures[i] = n,
                this.emptyTextures[i] = o,
                this.bindTexture(null, i)
            }
            this.emit("context", t),
            this.resize(this.screen.width, this.screen.height)
        }
        ,
        e.prototype.render = function(t, e, r, n, i) {
            if (this.renderingToScreen = !e,
            this.emit("prerender"),
            this.gl && !this.gl.isContextLost()) {
                if (this._nextTextureLocation = 0,
                e || (this._lastObjectRendered = t),
                !i) {
                    var o = t.parent;
                    t.parent = this._tempDisplayObjectParent,
                    t.updateTransform(),
                    t.parent = o
                }
                this.bindRenderTexture(e, n),
                this.currentRenderer.start(),
                (void 0 !== r ? r : this.clearBeforeRender) && this._activeRenderTarget.clear(),
                t.renderWebGL(this),
                this.currentRenderer.flush(),
                this.textureGC.update(),
                this.emit("postrender")
            }
        }
        ,
        e.prototype.setObjectRenderer = function(t) {
            this.currentRenderer !== t && (this.currentRenderer.stop(),
            this.currentRenderer = t,
            this.currentRenderer.start())
        }
        ,
        e.prototype.flush = function() {
            this.setObjectRenderer(this.emptyRenderer)
        }
        ,
        e.prototype.resize = function(t, e) {
            n.default.prototype.resize.call(this, t, e),
            this.rootRenderTarget.resize(t, e),
            this._activeRenderTarget === this.rootRenderTarget && (this.rootRenderTarget.activate(),
            this._activeShader && (this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(!0)))
        }
        ,
        e.prototype.setBlendMode = function(t) {
            this.state.setBlendMode(t)
        }
        ,
        e.prototype.clear = function(t) {
            this._activeRenderTarget.clear(t)
        }
        ,
        e.prototype.setTransform = function(t) {
            this._activeRenderTarget.transform = t
        }
        ,
        e.prototype.clearRenderTexture = function(t, e) {
            var r = t.baseTexture._glRenderTargets[this.CONTEXT_UID];
            return r && r.clear(e),
            this
        }
        ,
        e.prototype.bindRenderTexture = function(t, e) {
            var r = void 0;
            if (t) {
                var n = t.baseTexture;
                n._glRenderTargets[this.CONTEXT_UID] || this.textureManager.updateTexture(n, 0),
                this.unbindTexture(n),
                (r = n._glRenderTargets[this.CONTEXT_UID]).setFrame(t.frame)
            } else
                r = this.rootRenderTarget;
            return r.transform = e,
            this.bindRenderTarget(r),
            this
        }
        ,
        e.prototype.bindRenderTarget = function(t) {
            return t !== this._activeRenderTarget && (this._activeRenderTarget = t,
            t.activate(),
            this._activeShader && (this._activeShader.uniforms.projectionMatrix = t.projectionMatrix.toArray(!0)),
            this.stencilManager.setMaskStack(t.stencilMaskStack)),
            this
        }
        ,
        e.prototype.bindShader = function(t, e) {
            return this._activeShader !== t && (this._activeShader = t,
            t.bind(),
            !1 !== e && (t.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(!0))),
            this
        }
        ,
        e.prototype.bindTexture = function(t, e, r) {
            if ((t = (t = t || this.emptyTextures[e]).baseTexture || t).touched = this.textureGC.count,
            r)
                e = e || 0;
            else {
                for (var n = 0; n < this.boundTextures.length; n++)
                    if (this.boundTextures[n] === t)
                        return n;
                void 0 === e && (this._nextTextureLocation++,
                this._nextTextureLocation %= this.boundTextures.length,
                e = this.boundTextures.length - this._nextTextureLocation - 1)
            }
            var i = this.gl
              , o = t._glTextures[this.CONTEXT_UID];
            return o ? (this.boundTextures[e] = t,
            i.activeTexture(i.TEXTURE0 + e),
            i.bindTexture(i.TEXTURE_2D, o.texture)) : this.textureManager.updateTexture(t, e),
            e
        }
        ,
        e.prototype.unbindTexture = function(t) {
            var e = this.gl;
            if (t = t.baseTexture || t,
            this._unknownBoundTextures) {
                this._unknownBoundTextures = !1;
                for (var r = 0; r < this.boundTextures.length; r++)
                    this.boundTextures[r] === this.emptyTextures[r] && (e.activeTexture(e.TEXTURE0 + r),
                    e.bindTexture(e.TEXTURE_2D, this.emptyTextures[r]._glTextures[this.CONTEXT_UID].texture))
            }
            for (var n = 0; n < this.boundTextures.length; n++)
                this.boundTextures[n] === t && (this.boundTextures[n] = this.emptyTextures[n],
                e.activeTexture(e.TEXTURE0 + n),
                e.bindTexture(e.TEXTURE_2D, this.emptyTextures[n]._glTextures[this.CONTEXT_UID].texture));
            return this
        }
        ,
        e.prototype.createVao = function() {
            return new y.default.VertexArrayObject(this.gl,this.state.attribState)
        }
        ,
        e.prototype.bindVao = function(t) {
            return this._activeVao === t || (t ? t.bind() : this._activeVao && this._activeVao.unbind(),
            this._activeVao = t),
            this
        }
        ,
        e.prototype.reset = function() {
            this.setObjectRenderer(this.emptyRenderer),
            this.bindVao(null),
            this._activeShader = null,
            this._activeRenderTarget = this.rootRenderTarget,
            this._unknownBoundTextures = !0;
            for (var t = 0; t < this.boundTextures.length; t++)
                this.boundTextures[t] = this.emptyTextures[t];
            return this.rootRenderTarget.activate(),
            this.state.resetToDefault(),
            this
        }
        ,
        e.prototype.handleContextLost = function(t) {
            t.preventDefault()
        }
        ,
        e.prototype.handleContextRestored = function() {
            this.textureManager.removeAll(),
            this.filterManager.destroy(!0),
            this._initContext()
        }
        ,
        e.prototype.destroy = function(e) {
            this.destroyPlugins(),
            this.view.removeEventListener("webglcontextlost", this.handleContextLost),
            this.view.removeEventListener("webglcontextrestored", this.handleContextRestored),
            this.textureManager.destroy(),
            t.prototype.destroy.call(this, e),
            this.uid = 0,
            this.maskManager.destroy(),
            this.stencilManager.destroy(),
            this.filterManager.destroy(),
            this.maskManager = null,
            this.filterManager = null,
            this.textureManager = null,
            this.currentRenderer = null,
            this.handleContextLost = null,
            this.handleContextRestored = null,
            this._contextOptions = null,
            this.gl.useProgram(null),
            this.gl.getExtension("WEBGL_lose_context") && this.gl.getExtension("WEBGL_lose_context").loseContext(),
            this.gl = null
        }
        ,
        e
    }(n.default);
    e.default = b,
    v.pluginTarget.mixin(b)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(15), o = r(4), s = r(12), a = (n = s) && n.__esModule ? n : {
        default: n
    }, u = r(19);
    var h = function() {
        function t(e, r, n, s, h, l) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.gl = e,
            this.frameBuffer = null,
            this.texture = null,
            this.clearColor = [0, 0, 0, 0],
            this.size = new i.Rectangle(0,0,1,1),
            this.resolution = h || a.default.RESOLUTION,
            this.projectionMatrix = new i.Matrix,
            this.transform = null,
            this.frame = null,
            this.defaultFrame = new i.Rectangle,
            this.destinationFrame = null,
            this.sourceFrame = null,
            this.stencilBuffer = null,
            this.stencilMaskStack = [],
            this.filterData = null,
            this.filterPoolKey = "",
            this.scaleMode = void 0 !== s ? s : a.default.SCALE_MODE,
            this.root = l || !1,
            this.root ? (this.frameBuffer = new u.GLFramebuffer(e,100,100),
            this.frameBuffer.framebuffer = null) : (this.frameBuffer = u.GLFramebuffer.createRGBA(e, 100, 100),
            this.scaleMode === o.SCALE_MODES.NEAREST ? this.frameBuffer.texture.enableNearestScaling() : this.frameBuffer.texture.enableLinearScaling(),
            this.texture = this.frameBuffer.texture),
            this.setFrame(),
            this.resize(r, n)
        }
        return t.prototype.clear = function(t) {
            var e = t || this.clearColor;
            this.frameBuffer.clear(e[0], e[1], e[2], e[3])
        }
        ,
        t.prototype.attachStencilBuffer = function() {
            this.root || this.frameBuffer.enableStencil()
        }
        ,
        t.prototype.setFrame = function(t, e) {
            this.destinationFrame = t || this.destinationFrame || this.defaultFrame,
            this.sourceFrame = e || this.sourceFrame || this.destinationFrame
        }
        ,
        t.prototype.activate = function() {
            var t = this.gl;
            this.frameBuffer.bind(),
            this.calculateProjection(this.destinationFrame, this.sourceFrame),
            this.transform && this.projectionMatrix.append(this.transform),
            this.destinationFrame !== this.sourceFrame ? (t.enable(t.SCISSOR_TEST),
            t.scissor(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)) : t.disable(t.SCISSOR_TEST),
            t.viewport(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)
        }
        ,
        t.prototype.calculateProjection = function(t, e) {
            var r = this.projectionMatrix;
            e = e || t,
            r.identity(),
            this.root ? (r.a = 1 / t.width * 2,
            r.d = -1 / t.height * 2,
            r.tx = -1 - e.x * r.a,
            r.ty = 1 - e.y * r.d) : (r.a = 1 / t.width * 2,
            r.d = 1 / t.height * 2,
            r.tx = -1 - e.x * r.a,
            r.ty = -1 - e.y * r.d)
        }
        ,
        t.prototype.resize = function(t, e) {
            if (t |= 0,
            e |= 0,
            this.size.width !== t || this.size.height !== e) {
                this.size.width = t,
                this.size.height = e,
                this.defaultFrame.width = t,
                this.defaultFrame.height = e,
                this.frameBuffer.resize(t * this.resolution, e * this.resolution);
                var r = this.frame || this.size;
                this.calculateProjection(r)
            }
        }
        ,
        t.prototype.destroy = function() {
            this.frameBuffer.stencil && this.gl.deleteRenderbuffer(this.frameBuffer.stencil),
            this.frameBuffer.destroy(),
            this.frameBuffer = null,
            this.texture = null
        }
        ,
        t
    }();
    e.default = h
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t, e, r) {
        t.nativeLines ? function(t, e) {
            var r = 0
              , n = t.points;
            if (0 === n.length)
                return;
            var o = e.points
              , s = n.length / 2
              , a = (0,
            i.hex2rgb)(t.lineColor)
              , u = t.lineAlpha
              , h = a[0] * u
              , l = a[1] * u
              , c = a[2] * u;
            for (r = 1; r < s; r++) {
                var f = n[2 * (r - 1)]
                  , d = n[2 * (r - 1) + 1]
                  , p = n[2 * r]
                  , v = n[2 * r + 1];
                o.push(f, d),
                o.push(h, l, c, u),
                o.push(p, v),
                o.push(h, l, c, u)
            }
        }(t, r) : function(t, e) {
            var r = t.points;
            if (0 === r.length)
                return;
            var o = new n.Point(r[0],r[1])
              , s = new n.Point(r[r.length - 2],r[r.length - 1]);
            if (o.x === s.x && o.y === s.y) {
                (r = r.slice()).pop(),
                r.pop();
                var a = (s = new n.Point(r[r.length - 2],r[r.length - 1])).x + .5 * (o.x - s.x)
                  , u = s.y + .5 * (o.y - s.y);
                r.unshift(a, u),
                r.push(a, u)
            }
            var h = e.points
              , l = e.indices
              , c = r.length / 2
              , f = r.length
              , d = h.length / 6
              , p = t.lineWidth / 2
              , v = (0,
            i.hex2rgb)(t.lineColor)
              , y = t.lineAlpha
              , g = v[0] * y
              , _ = v[1] * y
              , m = v[2] * y
              , b = r[0]
              , x = r[1]
              , T = r[2]
              , E = r[3]
              , w = 0
              , S = 0
              , O = -(x - E)
              , M = b - T
              , P = 0
              , C = 0
              , A = 0
              , R = 0
              , I = Math.sqrt(O * O + M * M);
            O /= I,
            M /= I,
            O *= p,
            M *= p;
            var D = t.lineAlignment
              , L = 2 * (1 - D)
              , N = 2 * D;
            h.push(b - O * L, x - M * L, g, _, m, y),
            h.push(b + O * N, x + M * N, g, _, m, y);
            for (var k = 1; k < c - 1; ++k) {
                b = r[2 * (k - 1)],
                x = r[2 * (k - 1) + 1],
                T = r[2 * k],
                E = r[2 * k + 1],
                w = r[2 * (k + 1)],
                S = r[2 * (k + 1) + 1],
                O = -(x - E),
                M = b - T,
                I = Math.sqrt(O * O + M * M),
                O /= I,
                M /= I,
                O *= p,
                M *= p,
                P = -(E - S),
                C = T - w,
                I = Math.sqrt(P * P + C * C),
                P /= I,
                C /= I;
                var B = -M + x - (-M + E)
                  , F = -O + T - (-O + b)
                  , j = (-O + b) * (-M + E) - (-O + T) * (-M + x)
                  , U = -(C *= p) + S - (-C + E)
                  , X = -(P *= p) + T - (-P + w)
                  , H = (-P + w) * (-C + E) - (-P + T) * (-C + S)
                  , G = B * X - U * F;
                if (Math.abs(G) < .1)
                    G += 10.1,
                    h.push(T - O * L, E - M * L, g, _, m, y),
                    h.push(T + O * N, E + M * N, g, _, m, y);
                else {
                    var W = (F * H - X * j) / G
                      , Y = (U * j - B * H) / G;
                    (W - T) * (W - T) + (Y - E) * (Y - E) > 196 * p * p ? (A = O - P,
                    R = M - C,
                    I = Math.sqrt(A * A + R * R),
                    A /= I,
                    R /= I,
                    A *= p,
                    R *= p,
                    h.push(T - A * L, E - R * L),
                    h.push(g, _, m, y),
                    h.push(T + A * N, E + R * N),
                    h.push(g, _, m, y),
                    h.push(T - A * N * L, E - R * L),
                    h.push(g, _, m, y),
                    f++) : (h.push(T + (W - T) * L, E + (Y - E) * L),
                    h.push(g, _, m, y),
                    h.push(T - (W - T) * N, E - (Y - E) * N),
                    h.push(g, _, m, y))
                }
            }
            b = r[2 * (c - 2)],
            x = r[2 * (c - 2) + 1],
            T = r[2 * (c - 1)],
            E = r[2 * (c - 1) + 1],
            O = -(x - E),
            M = b - T,
            I = Math.sqrt(O * O + M * M),
            O /= I,
            M /= I,
            O *= p,
            M *= p,
            h.push(T - O * L, E - M * L),
            h.push(g, _, m, y),
            h.push(T + O * N, E + M * N),
            h.push(g, _, m, y),
            l.push(d);
            for (var V = 0; V < f; ++V)
                l.push(d++);
            l.push(d - 1)
        }(t, e)
    }
    ;
    var n = r(15)
      , i = r(6)
}
, , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var i = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            n(this, t),
            this.x = e,
            this.y = r
        }
        return t.prototype.clone = function() {
            return new t(this.x,this.y)
        }
        ,
        t.prototype.copy = function(t) {
            this.set(t.x, t.y)
        }
        ,
        t.prototype.equals = function(t) {
            return t.x === this.x && t.y === this.y
        }
        ,
        t.prototype.set = function(t, e) {
            this.x = t || 0,
            this.y = e || (0 !== e ? this.x : 0)
        }
        ,
        t
    }();
    e.default = i
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }(), o = r(97), s = (n = o) && n.__esModule ? n : {
        default: n
    }, a = r(4);
    function u(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var h = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
              , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
              , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
              , s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            u(this, t),
            this.a = e,
            this.b = r,
            this.c = n,
            this.d = i,
            this.tx = o,
            this.ty = s,
            this.array = null
        }
        return t.prototype.fromArray = function(t) {
            this.a = t[0],
            this.b = t[1],
            this.c = t[3],
            this.d = t[4],
            this.tx = t[2],
            this.ty = t[5]
        }
        ,
        t.prototype.set = function(t, e, r, n, i, o) {
            return this.a = t,
            this.b = e,
            this.c = r,
            this.d = n,
            this.tx = i,
            this.ty = o,
            this
        }
        ,
        t.prototype.toArray = function(t, e) {
            this.array || (this.array = new Float32Array(9));
            var r = e || this.array;
            return t ? (r[0] = this.a,
            r[1] = this.b,
            r[2] = 0,
            r[3] = this.c,
            r[4] = this.d,
            r[5] = 0,
            r[6] = this.tx,
            r[7] = this.ty,
            r[8] = 1) : (r[0] = this.a,
            r[1] = this.c,
            r[2] = this.tx,
            r[3] = this.b,
            r[4] = this.d,
            r[5] = this.ty,
            r[6] = 0,
            r[7] = 0,
            r[8] = 1),
            r
        }
        ,
        t.prototype.apply = function(t, e) {
            e = e || new s.default;
            var r = t.x
              , n = t.y;
            return e.x = this.a * r + this.c * n + this.tx,
            e.y = this.b * r + this.d * n + this.ty,
            e
        }
        ,
        t.prototype.applyInverse = function(t, e) {
            e = e || new s.default;
            var r = 1 / (this.a * this.d + this.c * -this.b)
              , n = t.x
              , i = t.y;
            return e.x = this.d * r * n + -this.c * r * i + (this.ty * this.c - this.tx * this.d) * r,
            e.y = this.a * r * i + -this.b * r * n + (-this.ty * this.a + this.tx * this.b) * r,
            e
        }
        ,
        t.prototype.translate = function(t, e) {
            return this.tx += t,
            this.ty += e,
            this
        }
        ,
        t.prototype.scale = function(t, e) {
            return this.a *= t,
            this.d *= e,
            this.c *= t,
            this.b *= e,
            this.tx *= t,
            this.ty *= e,
            this
        }
        ,
        t.prototype.rotate = function(t) {
            var e = Math.cos(t)
              , r = Math.sin(t)
              , n = this.a
              , i = this.c
              , o = this.tx;
            return this.a = n * e - this.b * r,
            this.b = n * r + this.b * e,
            this.c = i * e - this.d * r,
            this.d = i * r + this.d * e,
            this.tx = o * e - this.ty * r,
            this.ty = o * r + this.ty * e,
            this
        }
        ,
        t.prototype.append = function(t) {
            var e = this.a
              , r = this.b
              , n = this.c
              , i = this.d;
            return this.a = t.a * e + t.b * n,
            this.b = t.a * r + t.b * i,
            this.c = t.c * e + t.d * n,
            this.d = t.c * r + t.d * i,
            this.tx = t.tx * e + t.ty * n + this.tx,
            this.ty = t.tx * r + t.ty * i + this.ty,
            this
        }
        ,
        t.prototype.setTransform = function(t, e, r, n, i, o, s, a, u) {
            return this.a = Math.cos(s + u) * i,
            this.b = Math.sin(s + u) * i,
            this.c = -Math.sin(s - a) * o,
            this.d = Math.cos(s - a) * o,
            this.tx = t - (r * this.a + n * this.c),
            this.ty = e - (r * this.b + n * this.d),
            this
        }
        ,
        t.prototype.prepend = function(t) {
            var e = this.tx;
            if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                var r = this.a
                  , n = this.c;
                this.a = r * t.a + this.b * t.c,
                this.b = r * t.b + this.b * t.d,
                this.c = n * t.a + this.d * t.c,
                this.d = n * t.b + this.d * t.d
            }
            return this.tx = e * t.a + this.ty * t.c + t.tx,
            this.ty = e * t.b + this.ty * t.d + t.ty,
            this
        }
        ,
        t.prototype.decompose = function(t) {
            var e = this.a
              , r = this.b
              , n = this.c
              , i = this.d
              , o = -Math.atan2(-n, i)
              , s = Math.atan2(r, e)
              , u = Math.abs(o + s);
            return u < 1e-5 || Math.abs(a.PI_2 - u) < 1e-5 ? (t.rotation = s,
            t.skew.x = t.skew.y = 0) : (t.rotation = 0,
            t.skew.x = o,
            t.skew.y = s),
            t.scale.x = Math.sqrt(e * e + r * r),
            t.scale.y = Math.sqrt(n * n + i * i),
            t.position.x = this.tx,
            t.position.y = this.ty,
            t
        }
        ,
        t.prototype.invert = function() {
            var t = this.a
              , e = this.b
              , r = this.c
              , n = this.d
              , i = this.tx
              , o = t * n - e * r;
            return this.a = n / o,
            this.b = -e / o,
            this.c = -r / o,
            this.d = t / o,
            this.tx = (r * this.ty - n * i) / o,
            this.ty = -(t * this.ty - e * i) / o,
            this
        }
        ,
        t.prototype.identity = function() {
            return this.a = 1,
            this.b = 0,
            this.c = 0,
            this.d = 1,
            this.tx = 0,
            this.ty = 0,
            this
        }
        ,
        t.prototype.clone = function() {
            var e = new t;
            return e.a = this.a,
            e.b = this.b,
            e.c = this.c,
            e.d = this.d,
            e.tx = this.tx,
            e.ty = this.ty,
            e
        }
        ,
        t.prototype.copy = function(t) {
            return t.a = this.a,
            t.b = this.b,
            t.c = this.c,
            t.d = this.d,
            t.tx = this.tx,
            t.ty = this.ty,
            t
        }
        ,
        i(t, null, [{
            key: "IDENTITY",
            get: function() {
                return new t
            }
        }, {
            key: "TEMP_MATRIX",
            get: function() {
                return new t
            }
        }]),
        t
    }();
    e.default = h
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = r(4);
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var s = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            o(this, t),
            this.x = Number(e),
            this.y = Number(r),
            this.width = Number(n),
            this.height = Number(s),
            this.type = i.SHAPES.RECT
        }
        return t.prototype.clone = function() {
            return new t(this.x,this.y,this.width,this.height)
        }
        ,
        t.prototype.copy = function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.width = t.width,
            this.height = t.height,
            this
        }
        ,
        t.prototype.contains = function(t, e) {
            return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height)
        }
        ,
        t.prototype.pad = function(t, e) {
            t = t || 0,
            e = e || (0 !== e ? t : 0),
            this.x -= t,
            this.y -= e,
            this.width += 2 * t,
            this.height += 2 * e
        }
        ,
        t.prototype.fit = function(t) {
            var e = Math.max(this.x, t.x)
              , r = Math.min(this.x + this.width, t.x + t.width)
              , n = Math.max(this.y, t.y)
              , i = Math.min(this.y + this.height, t.y + t.height);
            this.x = e,
            this.width = Math.max(r - e, 0),
            this.y = n,
            this.height = Math.max(i - n, 0)
        }
        ,
        t.prototype.enlarge = function(t) {
            var e = Math.min(this.x, t.x)
              , r = Math.max(this.x + this.width, t.x + t.width)
              , n = Math.min(this.y, t.y)
              , i = Math.max(this.y + this.height, t.y + t.height);
            this.x = e,
            this.width = r - e,
            this.y = n,
            this.height = i - n
        }
        ,
        t.prototype.ceil = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .001
              , r = Math.ceil((this.x + this.width - e) * t) / t
              , n = Math.ceil((this.y + this.height - e) * t) / t;
            this.x = Math.floor((this.x + e) * t) / t,
            this.y = Math.floor((this.y + e) * t) / t,
            this.width = r - this.x,
            this.height = n - this.y
        }
        ,
        n(t, [{
            key: "left",
            get: function() {
                return this.x
            }
        }, {
            key: "right",
            get: function() {
                return this.x + this.width
            }
        }, {
            key: "top",
            get: function() {
                return this.y
            }
        }, {
            key: "bottom",
            get: function() {
                return this.y + this.height
            }
        }], [{
            key: "EMPTY",
            get: function() {
                return new t(0,0,0,0)
            }
        }]),
        t
    }();
    e.default = s
}
, function(t, e) {
    var r = null
      , n = {
        FLOAT: "float",
        FLOAT_VEC2: "vec2",
        FLOAT_VEC3: "vec3",
        FLOAT_VEC4: "vec4",
        INT: "int",
        INT_VEC2: "ivec2",
        INT_VEC3: "ivec3",
        INT_VEC4: "ivec4",
        BOOL: "bool",
        BOOL_VEC2: "bvec2",
        BOOL_VEC3: "bvec3",
        BOOL_VEC4: "bvec4",
        FLOAT_MAT2: "mat2",
        FLOAT_MAT3: "mat3",
        FLOAT_MAT4: "mat4",
        SAMPLER_2D: "sampler2D"
    };
    t.exports = function(t, e) {
        if (!r) {
            var i = Object.keys(n);
            r = {};
            for (var o = 0; o < i.length; ++o) {
                var s = i[o];
                r[t[s]] = n[s]
            }
        }
        return r[e]
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = r(15);
    var i = function() {
        function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.minX = 1 / 0,
            this.minY = 1 / 0,
            this.maxX = -1 / 0,
            this.maxY = -1 / 0,
            this.rect = null
        }
        return t.prototype.isEmpty = function() {
            return this.minX > this.maxX || this.minY > this.maxY
        }
        ,
        t.prototype.clear = function() {
            this.updateID++,
            this.minX = 1 / 0,
            this.minY = 1 / 0,
            this.maxX = -1 / 0,
            this.maxY = -1 / 0
        }
        ,
        t.prototype.getRectangle = function(t) {
            return this.minX > this.maxX || this.minY > this.maxY ? n.Rectangle.EMPTY : ((t = t || new n.Rectangle(0,0,1,1)).x = this.minX,
            t.y = this.minY,
            t.width = this.maxX - this.minX,
            t.height = this.maxY - this.minY,
            t)
        }
        ,
        t.prototype.addPoint = function(t) {
            this.minX = Math.min(this.minX, t.x),
            this.maxX = Math.max(this.maxX, t.x),
            this.minY = Math.min(this.minY, t.y),
            this.maxY = Math.max(this.maxY, t.y)
        }
        ,
        t.prototype.addQuad = function(t) {
            var e = this.minX
              , r = this.minY
              , n = this.maxX
              , i = this.maxY
              , o = t[0]
              , s = t[1];
            e = o < e ? o : e,
            r = s < r ? s : r,
            n = o > n ? o : n,
            i = s > i ? s : i,
            e = (o = t[2]) < e ? o : e,
            r = (s = t[3]) < r ? s : r,
            n = o > n ? o : n,
            i = s > i ? s : i,
            e = (o = t[4]) < e ? o : e,
            r = (s = t[5]) < r ? s : r,
            n = o > n ? o : n,
            i = s > i ? s : i,
            e = (o = t[6]) < e ? o : e,
            r = (s = t[7]) < r ? s : r,
            n = o > n ? o : n,
            i = s > i ? s : i,
            this.minX = e,
            this.minY = r,
            this.maxX = n,
            this.maxY = i
        }
        ,
        t.prototype.addFrame = function(t, e, r, n, i) {
            var o = t.worldTransform
              , s = o.a
              , a = o.b
              , u = o.c
              , h = o.d
              , l = o.tx
              , c = o.ty
              , f = this.minX
              , d = this.minY
              , p = this.maxX
              , v = this.maxY
              , y = s * e + u * r + l
              , g = a * e + h * r + c;
            f = y < f ? y : f,
            d = g < d ? g : d,
            p = y > p ? y : p,
            v = g > v ? g : v,
            f = (y = s * n + u * r + l) < f ? y : f,
            d = (g = a * n + h * r + c) < d ? g : d,
            p = y > p ? y : p,
            v = g > v ? g : v,
            f = (y = s * e + u * i + l) < f ? y : f,
            d = (g = a * e + h * i + c) < d ? g : d,
            p = y > p ? y : p,
            v = g > v ? g : v,
            f = (y = s * n + u * i + l) < f ? y : f,
            d = (g = a * n + h * i + c) < d ? g : d,
            p = y > p ? y : p,
            v = g > v ? g : v,
            this.minX = f,
            this.minY = d,
            this.maxX = p,
            this.maxY = v
        }
        ,
        t.prototype.addVertices = function(t, e, r, n) {
            for (var i = t.worldTransform, o = i.a, s = i.b, a = i.c, u = i.d, h = i.tx, l = i.ty, c = this.minX, f = this.minY, d = this.maxX, p = this.maxY, v = r; v < n; v += 2) {
                var y = e[v]
                  , g = e[v + 1]
                  , _ = o * y + a * g + h
                  , m = u * g + s * y + l;
                c = _ < c ? _ : c,
                f = m < f ? m : f,
                d = _ > d ? _ : d,
                p = m > p ? m : p
            }
            this.minX = c,
            this.minY = f,
            this.maxX = d,
            this.maxY = p
        }
        ,
        t.prototype.addBounds = function(t) {
            var e = this.minX
              , r = this.minY
              , n = this.maxX
              , i = this.maxY;
            this.minX = t.minX < e ? t.minX : e,
            this.minY = t.minY < r ? t.minY : r,
            this.maxX = t.maxX > n ? t.maxX : n,
            this.maxY = t.maxY > i ? t.maxY : i
        }
        ,
        t.prototype.addBoundsMask = function(t, e) {
            var r = t.minX > e.minX ? t.minX : e.minX
              , n = t.minY > e.minY ? t.minY : e.minY
              , i = t.maxX < e.maxX ? t.maxX : e.maxX
              , o = t.maxY < e.maxY ? t.maxY : e.maxY;
            if (r <= i && n <= o) {
                var s = this.minX
                  , a = this.minY
                  , u = this.maxX
                  , h = this.maxY;
                this.minX = r < s ? r : s,
                this.minY = n < a ? n : a,
                this.maxX = i > u ? i : u,
                this.maxY = o > h ? o : h
            }
        }
        ,
        t.prototype.addBoundsArea = function(t, e) {
            var r = t.minX > e.x ? t.minX : e.x
              , n = t.minY > e.y ? t.minY : e.y
              , i = t.maxX < e.x + e.width ? t.maxX : e.x + e.width
              , o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
            if (r <= i && n <= o) {
                var s = this.minX
                  , a = this.minY
                  , u = this.maxX
                  , h = this.maxY;
                this.minX = r < s ? r : s,
                this.minY = n < a ? n : a,
                this.maxX = i > u ? i : u,
                this.maxY = o > h ? o : h
            }
        }
        ,
        t
    }();
    e.default = i
}
, function(t, e, r) {
    var n, i, o;
    !function(r) {
        var s = /iPhone/i
          , a = /iPod/i
          , u = /iPad/i
          , h = /\bAndroid(?:.+)Mobile\b/i
          , l = /Android/i
          , c = /\bAndroid(?:.+)SD4930UR\b/i
          , f = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i
          , d = /Windows Phone/i
          , p = /\bWindows(?:.+)ARM\b/i
          , v = /BlackBerry/i
          , y = /BB10/i
          , g = /Opera Mini/i
          , _ = /\b(CriOS|Chrome)(?:.+)Mobile/i
          , m = /Mobile(?:.+)Firefox\b/i;
        function b(t, e) {
            return t.test(e)
        }
        function x(t) {
            var e = t || ("undefined" != typeof navigator ? navigator.userAgent : "")
              , r = e.split("[FBAN");
            void 0 !== r[1] && (e = r[0]),
            void 0 !== (r = e.split("Twitter"))[1] && (e = r[0]);
            var n = {
                apple: {
                    phone: b(s, e) && !b(d, e),
                    ipod: b(a, e),
                    tablet: !b(s, e) && b(u, e) && !b(d, e),
                    device: (b(s, e) || b(a, e) || b(u, e)) && !b(d, e)
                },
                amazon: {
                    phone: b(c, e),
                    tablet: !b(c, e) && b(f, e),
                    device: b(c, e) || b(f, e)
                },
                android: {
                    phone: !b(d, e) && b(c, e) || !b(d, e) && b(h, e),
                    tablet: !b(d, e) && !b(c, e) && !b(h, e) && (b(f, e) || b(l, e)),
                    device: !b(d, e) && (b(c, e) || b(f, e) || b(h, e) || b(l, e)) || b(/\bokhttp\b/i, e)
                },
                windows: {
                    phone: b(d, e),
                    tablet: b(p, e),
                    device: b(d, e) || b(p, e)
                },
                other: {
                    blackberry: b(v, e),
                    blackberry10: b(y, e),
                    opera: b(g, e),
                    firefox: b(m, e),
                    chrome: b(_, e),
                    device: b(v, e) || b(y, e) || b(g, e) || b(m, e) || b(_, e)
                }
            };
            return n.any = n.apple.device || n.android.device || n.windows.device || n.other.device,
            n.phone = n.apple.phone || n.android.phone || n.windows.phone,
            n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet,
            n
        }
        t.exports && "undefined" == typeof window ? t.exports = x : t.exports && "undefined" != typeof window ? (t.exports = x(),
        t.exports.isMobile = x) : (i = [],
        n = r.isMobile = x(),
        void 0 === (o = "function" == typeof n ? n.apply(e, i) : n) || (t.exports = o))
    }(this)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = r(15);
    var i = function() {
        function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.worldTransform = new n.Matrix,
            this.localTransform = new n.Matrix,
            this._worldID = 0,
            this._parentID = 0
        }
        return t.prototype.updateLocalTransform = function() {}
        ,
        t.prototype.updateTransform = function(t) {
            var e = t.worldTransform
              , r = this.worldTransform
              , n = this.localTransform;
            r.a = n.a * e.a + n.b * e.c,
            r.b = n.a * e.b + n.b * e.d,
            r.c = n.c * e.a + n.d * e.c,
            r.d = n.c * e.b + n.d * e.d,
            r.tx = n.tx * e.a + n.ty * e.c + e.tx,
            r.ty = n.tx * e.b + n.ty * e.d + e.ty,
            this._worldID++
        }
        ,
        t
    }();
    e.default = i,
    i.prototype.updateWorldTransform = i.prototype.updateTransform,
    i.IDENTITY = new i
}
, function(t, e, r) {
    "use strict";
    function n(t, e, r) {
        r = r || 2;
        var n, a, u, h, l, d, p, y = e && e.length, g = y ? e[0] * r : t.length, _ = i(t, 0, g, r, !0), m = [];
        if (!_ || _.next === _.prev)
            return m;
        if (y && (_ = function(t, e, r, n) {
            var s, a, u, h, l, d = [];
            for (s = 0,
            a = e.length; s < a; s++)
                u = e[s] * n,
                h = s < a - 1 ? e[s + 1] * n : t.length,
                (l = i(t, u, h, n, !1)) === l.next && (l.steiner = !0),
                d.push(v(l));
            for (d.sort(c),
            s = 0; s < d.length; s++)
                f(d[s], r),
                r = o(r, r.next);
            return r
        }(t, e, _, r)),
        t.length > 80 * r) {
            n = u = t[0],
            a = h = t[1];
            for (var b = r; b < g; b += r)
                (l = t[b]) < n && (n = l),
                (d = t[b + 1]) < a && (a = d),
                l > u && (u = l),
                d > h && (h = d);
            p = 0 !== (p = Math.max(u - n, h - a)) ? 1 / p : 0
        }
        return s(_, m, r, n, a, p),
        m
    }
    function i(t, e, r, n, i) {
        var o, s;
        if (i === P(t, e, r, n) > 0)
            for (o = e; o < r; o += n)
                s = S(o, t[o], t[o + 1], s);
        else
            for (o = r - n; o >= e; o -= n)
                s = S(o, t[o], t[o + 1], s);
        return s && m(s, s.next) && (O(s),
        s = s.next),
        s
    }
    function o(t, e) {
        if (!t)
            return t;
        e || (e = t);
        var r, n = t;
        do {
            if (r = !1,
            n.steiner || !m(n, n.next) && 0 !== _(n.prev, n, n.next))
                n = n.next;
            else {
                if (O(n),
                (n = e = n.prev) === n.next)
                    break;
                r = !0
            }
        } while (r || n !== e);
        return e
    }
    function s(t, e, r, n, i, c, f) {
        if (t) {
            !f && c && function(t, e, r, n) {
                var i = t;
                do {
                    null === i.z && (i.z = p(i.x, i.y, e, r, n)),
                    i.prevZ = i.prev,
                    i.nextZ = i.next,
                    i = i.next
                } while (i !== t);
                i.prevZ.nextZ = null,
                i.prevZ = null,
                function(t) {
                    var e, r, n, i, o, s, a, u, h = 1;
                    do {
                        for (r = t,
                        t = null,
                        o = null,
                        s = 0; r; ) {
                            for (s++,
                            n = r,
                            a = 0,
                            e = 0; e < h && (a++,
                            n = n.nextZ); e++)
                                ;
                            for (u = h; a > 0 || u > 0 && n; )
                                0 !== a && (0 === u || !n || r.z <= n.z) ? (i = r,
                                r = r.nextZ,
                                a--) : (i = n,
                                n = n.nextZ,
                                u--),
                                o ? o.nextZ = i : t = i,
                                i.prevZ = o,
                                o = i;
                            r = n
                        }
                        o.nextZ = null,
                        h *= 2
                    } while (s > 1)
                }(i)
            }(t, n, i, c);
            for (var d, v, y = t; t.prev !== t.next; )
                if (d = t.prev,
                v = t.next,
                c ? u(t, n, i, c) : a(t))
                    e.push(d.i / r),
                    e.push(t.i / r),
                    e.push(v.i / r),
                    O(t),
                    t = v.next,
                    y = v.next;
                else if ((t = v) === y) {
                    f ? 1 === f ? s(t = h(o(t), e, r), e, r, n, i, c, 2) : 2 === f && l(t, e, r, n, i, c) : s(o(t), e, r, n, i, c, 1);
                    break
                }
        }
    }
    function a(t) {
        var e = t.prev
          , r = t
          , n = t.next;
        if (_(e, r, n) >= 0)
            return !1;
        for (var i = t.next.next; i !== t.prev; ) {
            if (y(e.x, e.y, r.x, r.y, n.x, n.y, i.x, i.y) && _(i.prev, i, i.next) >= 0)
                return !1;
            i = i.next
        }
        return !0
    }
    function u(t, e, r, n) {
        var i = t.prev
          , o = t
          , s = t.next;
        if (_(i, o, s) >= 0)
            return !1;
        for (var a = i.x < o.x ? i.x < s.x ? i.x : s.x : o.x < s.x ? o.x : s.x, u = i.y < o.y ? i.y < s.y ? i.y : s.y : o.y < s.y ? o.y : s.y, h = i.x > o.x ? i.x > s.x ? i.x : s.x : o.x > s.x ? o.x : s.x, l = i.y > o.y ? i.y > s.y ? i.y : s.y : o.y > s.y ? o.y : s.y, c = p(a, u, e, r, n), f = p(h, l, e, r, n), d = t.prevZ, v = t.nextZ; d && d.z >= c && v && v.z <= f; ) {
            if (d !== t.prev && d !== t.next && y(i.x, i.y, o.x, o.y, s.x, s.y, d.x, d.y) && _(d.prev, d, d.next) >= 0)
                return !1;
            if (d = d.prevZ,
            v !== t.prev && v !== t.next && y(i.x, i.y, o.x, o.y, s.x, s.y, v.x, v.y) && _(v.prev, v, v.next) >= 0)
                return !1;
            v = v.nextZ
        }
        for (; d && d.z >= c; ) {
            if (d !== t.prev && d !== t.next && y(i.x, i.y, o.x, o.y, s.x, s.y, d.x, d.y) && _(d.prev, d, d.next) >= 0)
                return !1;
            d = d.prevZ
        }
        for (; v && v.z <= f; ) {
            if (v !== t.prev && v !== t.next && y(i.x, i.y, o.x, o.y, s.x, s.y, v.x, v.y) && _(v.prev, v, v.next) >= 0)
                return !1;
            v = v.nextZ
        }
        return !0
    }
    function h(t, e, r) {
        var n = t;
        do {
            var i = n.prev
              , s = n.next.next;
            !m(i, s) && b(i, n, n.next, s) && E(i, s) && E(s, i) && (e.push(i.i / r),
            e.push(n.i / r),
            e.push(s.i / r),
            O(n),
            O(n.next),
            n = t = s),
            n = n.next
        } while (n !== t);
        return o(n)
    }
    function l(t, e, r, n, i, a) {
        var u = t;
        do {
            for (var h = u.next.next; h !== u.prev; ) {
                if (u.i !== h.i && g(u, h)) {
                    var l = w(u, h);
                    return u = o(u, u.next),
                    l = o(l, l.next),
                    s(u, e, r, n, i, a),
                    void s(l, e, r, n, i, a)
                }
                h = h.next
            }
            u = u.next
        } while (u !== t)
    }
    function c(t, e) {
        return t.x - e.x
    }
    function f(t, e) {
        if (e = function(t, e) {
            var r, n = e, i = t.x, o = t.y, s = -1 / 0;
            do {
                if (o <= n.y && o >= n.next.y && n.next.y !== n.y) {
                    var a = n.x + (o - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                    if (a <= i && a > s) {
                        if (s = a,
                        a === i) {
                            if (o === n.y)
                                return n;
                            if (o === n.next.y)
                                return n.next
                        }
                        r = n.x < n.next.x ? n : n.next
                    }
                }
                n = n.next
            } while (n !== e);
            if (!r)
                return null;
            if (i === s)
                return r;
            var u, h = r, l = r.x, c = r.y, f = 1 / 0;
            n = r;
            do {
                i >= n.x && n.x >= l && i !== n.x && y(o < c ? i : s, o, l, c, o < c ? s : i, o, n.x, n.y) && (u = Math.abs(o - n.y) / (i - n.x),
                E(n, t) && (u < f || u === f && (n.x > r.x || n.x === r.x && d(r, n))) && (r = n,
                f = u)),
                n = n.next
            } while (n !== h);
            return r
        }(t, e)) {
            var r = w(e, t);
            o(e, e.next),
            o(r, r.next)
        }
    }
    function d(t, e) {
        return _(t.prev, t, e.prev) < 0 && _(e.next, t, t.next) < 0
    }
    function p(t, e, r, n, i) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) * i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
    }
    function v(t) {
        var e = t
          , r = t;
        do {
            (e.x < r.x || e.x === r.x && e.y < r.y) && (r = e),
            e = e.next
        } while (e !== t);
        return r
    }
    function y(t, e, r, n, i, o, s, a) {
        return (i - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (n - a) - (r - s) * (e - a) >= 0 && (r - s) * (o - a) - (i - s) * (n - a) >= 0
    }
    function g(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && !function(t, e) {
            var r = t;
            do {
                if (r.i !== t.i && r.next.i !== t.i && r.i !== e.i && r.next.i !== e.i && b(r, r.next, t, e))
                    return !0;
                r = r.next
            } while (r !== t);
            return !1
        }(t, e) && (E(t, e) && E(e, t) && function(t, e) {
            var r = t
              , n = !1
              , i = (t.x + e.x) / 2
              , o = (t.y + e.y) / 2;
            do {
                r.y > o != r.next.y > o && r.next.y !== r.y && i < (r.next.x - r.x) * (o - r.y) / (r.next.y - r.y) + r.x && (n = !n),
                r = r.next
            } while (r !== t);
            return n
        }(t, e) && (_(t.prev, t, e.prev) || _(t, e.prev, e)) || m(t, e) && _(t.prev, t, t.next) > 0 && _(e.prev, e, e.next) > 0)
    }
    function _(t, e, r) {
        return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y)
    }
    function m(t, e) {
        return t.x === e.x && t.y === e.y
    }
    function b(t, e, r, n) {
        var i = T(_(t, e, r))
          , o = T(_(t, e, n))
          , s = T(_(r, n, t))
          , a = T(_(r, n, e));
        return i !== o && s !== a || (!(0 !== i || !x(t, r, e)) || (!(0 !== o || !x(t, n, e)) || (!(0 !== s || !x(r, t, n)) || !(0 !== a || !x(r, e, n)))))
    }
    function x(t, e, r) {
        return e.x <= Math.max(t.x, r.x) && e.x >= Math.min(t.x, r.x) && e.y <= Math.max(t.y, r.y) && e.y >= Math.min(t.y, r.y)
    }
    function T(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0
    }
    function E(t, e) {
        return _(t.prev, t, t.next) < 0 ? _(t, e, t.next) >= 0 && _(t, t.prev, e) >= 0 : _(t, e, t.prev) < 0 || _(t, t.next, e) < 0
    }
    function w(t, e) {
        var r = new M(t.i,t.x,t.y)
          , n = new M(e.i,e.x,e.y)
          , i = t.next
          , o = e.prev;
        return t.next = e,
        e.prev = t,
        r.next = i,
        i.prev = r,
        n.next = r,
        r.prev = n,
        o.next = n,
        n.prev = o,
        n
    }
    function S(t, e, r, n) {
        var i = new M(t,e,r);
        return n ? (i.next = n.next,
        i.prev = n,
        n.next.prev = i,
        n.next = i) : (i.prev = i,
        i.next = i),
        i
    }
    function O(t) {
        t.next.prev = t.prev,
        t.prev.next = t.next,
        t.prevZ && (t.prevZ.nextZ = t.nextZ),
        t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }
    function M(t, e, r) {
        this.i = t,
        this.x = e,
        this.y = r,
        this.prev = null,
        this.next = null,
        this.z = null,
        this.prevZ = null,
        this.nextZ = null,
        this.steiner = !1
    }
    function P(t, e, r, n) {
        for (var i = 0, o = e, s = r - n; o < r; o += n)
            i += (t[s] - t[o]) * (t[o + 1] + t[s + 1]),
            s = o;
        return i
    }
    t.exports = n,
    t.exports.default = n,
    n.deviation = function(t, e, r, n) {
        var i = e && e.length
          , o = i ? e[0] * r : t.length
          , s = Math.abs(P(t, 0, o, r));
        if (i)
            for (var a = 0, u = e.length; a < u; a++) {
                var h = e[a] * r
                  , l = a < u - 1 ? e[a + 1] * r : t.length;
                s -= Math.abs(P(t, h, l, r))
            }
        var c = 0;
        for (a = 0; a < n.length; a += 3) {
            var f = n[a] * r
              , d = n[a + 1] * r
              , p = n[a + 2] * r;
            c += Math.abs((t[f] - t[p]) * (t[d + 1] - t[f + 1]) - (t[f] - t[d]) * (t[p + 1] - t[f + 1]))
        }
        return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s)
    }
    ,
    n.flatten = function(t) {
        for (var e = t[0][0].length, r = {
            vertices: [],
            holes: [],
            dimensions: e
        }, n = 0, i = 0; i < t.length; i++) {
            for (var o = 0; o < t[i].length; o++)
                for (var s = 0; s < e; s++)
                    r.vertices.push(t[i][o][s]);
            i > 0 && (n += t[i - 1].length,
            r.holes.push(n))
        }
        return r
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = r(15)
      , o = r(6)
      , s = r(4)
      , a = h(r(29))
      , u = h(r(53));
    function h(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var l = new i.Point
      , c = function(t) {
        function e(r) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return n._anchor = new i.ObservablePoint(n._onAnchorUpdate,n,r ? r.defaultAnchor.x : 0,r ? r.defaultAnchor.y : 0),
            n._texture = null,
            n._width = 0,
            n._height = 0,
            n._tint = null,
            n._tintRGB = null,
            n.tint = 16777215,
            n.blendMode = s.BLEND_MODES.NORMAL,
            n.shader = null,
            n.cachedTint = 16777215,
            n.texture = r || a.default.EMPTY,
            n.vertexData = new Float32Array(8),
            n.vertexTrimmedData = null,
            n._transformID = -1,
            n._textureID = -1,
            n._transformTrimmedID = -1,
            n._textureTrimmedID = -1,
            n.pluginName = "sprite",
            n
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype._onTextureUpdate = function() {
            this._textureID = -1,
            this._textureTrimmedID = -1,
            this.cachedTint = 16777215,
            this._width && (this.scale.x = (0,
            o.sign)(this.scale.x) * this._width / this._texture.orig.width),
            this._height && (this.scale.y = (0,
            o.sign)(this.scale.y) * this._height / this._texture.orig.height)
        }
        ,
        e.prototype._onAnchorUpdate = function() {
            this._transformID = -1,
            this._transformTrimmedID = -1
        }
        ,
        e.prototype.calculateVertices = function() {
            if (this._transformID !== this.transform._worldID || this._textureID !== this._texture._updateID) {
                this._transformID = this.transform._worldID,
                this._textureID = this._texture._updateID;
                var t = this._texture
                  , e = this.transform.worldTransform
                  , r = e.a
                  , n = e.b
                  , i = e.c
                  , o = e.d
                  , s = e.tx
                  , a = e.ty
                  , u = this.vertexData
                  , h = t.trim
                  , l = t.orig
                  , c = this._anchor
                  , f = 0
                  , d = 0
                  , p = 0
                  , v = 0;
                h ? (f = (d = h.x - c._x * l.width) + h.width,
                p = (v = h.y - c._y * l.height) + h.height) : (f = (d = -c._x * l.width) + l.width,
                p = (v = -c._y * l.height) + l.height),
                u[0] = r * d + i * v + s,
                u[1] = o * v + n * d + a,
                u[2] = r * f + i * v + s,
                u[3] = o * v + n * f + a,
                u[4] = r * f + i * p + s,
                u[5] = o * p + n * f + a,
                u[6] = r * d + i * p + s,
                u[7] = o * p + n * d + a
            }
        }
        ,
        e.prototype.calculateTrimmedVertices = function() {
            if (this.vertexTrimmedData) {
                if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID)
                    return
            } else
                this.vertexTrimmedData = new Float32Array(8);
            this._transformTrimmedID = this.transform._worldID,
            this._textureTrimmedID = this._texture._updateID;
            var t = this._texture
              , e = this.vertexTrimmedData
              , r = t.orig
              , n = this._anchor
              , i = this.transform.worldTransform
              , o = i.a
              , s = i.b
              , a = i.c
              , u = i.d
              , h = i.tx
              , l = i.ty
              , c = -n._x * r.width
              , f = c + r.width
              , d = -n._y * r.height
              , p = d + r.height;
            e[0] = o * c + a * d + h,
            e[1] = u * d + s * c + l,
            e[2] = o * f + a * d + h,
            e[3] = u * d + s * f + l,
            e[4] = o * f + a * p + h,
            e[5] = u * p + s * f + l,
            e[6] = o * c + a * p + h,
            e[7] = u * p + s * c + l
        }
        ,
        e.prototype._renderWebGL = function(t) {
            this.calculateVertices(),
            t.setObjectRenderer(t.plugins[this.pluginName]),
            t.plugins[this.pluginName].render(this)
        }
        ,
        e.prototype._renderCanvas = function(t) {
            t.plugins[this.pluginName].render(this)
        }
        ,
        e.prototype._calculateBounds = function() {
            var t = this._texture.trim
              , e = this._texture.orig;
            !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(),
            this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(),
            this._bounds.addQuad(this.vertexTrimmedData))
        }
        ,
        e.prototype.getLocalBounds = function(e) {
            return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x,
            this._bounds.minY = this._texture.orig.height * -this._anchor._y,
            this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x),
            this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y),
            e || (this._localBoundsRect || (this._localBoundsRect = new i.Rectangle),
            e = this._localBoundsRect),
            this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
        }
        ,
        e.prototype.containsPoint = function(t) {
            this.worldTransform.applyInverse(t, l);
            var e = this._texture.orig.width
              , r = this._texture.orig.height
              , n = -e * this.anchor.x
              , i = 0;
            return l.x >= n && l.x < n + e && (i = -r * this.anchor.y,
            l.y >= i && l.y < i + r)
        }
        ,
        e.prototype.destroy = function(e) {
            if (t.prototype.destroy.call(this, e),
            this._texture.off("update", this._onTextureUpdate, this),
            this._anchor = null,
            "boolean" == typeof e ? e : e && e.texture) {
                var r = "boolean" == typeof e ? e : e && e.baseTexture;
                this._texture.destroy(!!r)
            }
            this._texture = null,
            this.shader = null
        }
        ,
        e.from = function(t) {
            return new e(a.default.from(t))
        }
        ,
        e.fromFrame = function(t) {
            var r = o.TextureCache[t];
            if (!r)
                throw new Error('The frameId "' + t + '" does not exist in the texture cache');
            return new e(r)
        }
        ,
        e.fromImage = function(t, r, n) {
            return new e(a.default.fromImage(t, r, n))
        }
        ,
        n(e, [{
            key: "width",
            get: function() {
                return Math.abs(this.scale.x) * this._texture.orig.width
            },
            set: function(t) {
                var e = (0,
                o.sign)(this.scale.x) || 1;
                this.scale.x = e * t / this._texture.orig.width,
                this._width = t
            }
        }, {
            key: "height",
            get: function() {
                return Math.abs(this.scale.y) * this._texture.orig.height
            },
            set: function(t) {
                var e = (0,
                o.sign)(this.scale.y) || 1;
                this.scale.y = e * t / this._texture.orig.height,
                this._height = t
            }
        }, {
            key: "anchor",
            get: function() {
                return this._anchor
            },
            set: function(t) {
                this._anchor.copy(t)
            }
        }, {
            key: "tint",
            get: function() {
                return this._tint
            },
            set: function(t) {
                this._tint = t,
                this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)
            }
        }, {
            key: "texture",
            get: function() {
                return this._texture
            },
            set: function(t) {
                this._texture !== t && (this._texture = t || a.default.EMPTY,
                this.cachedTint = 16777215,
                this._textureID = -1,
                this._textureTrimmedID = -1,
                t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
            }
        }]),
        e
    }(u.default);
    e.default = c
}
, function(t, e, r) {
    "use strict";
    function n(t) {
        var e = 32;
        return (t &= -t) && e--,
        65535 & t && (e -= 16),
        16711935 & t && (e -= 8),
        252645135 & t && (e -= 4),
        858993459 & t && (e -= 2),
        1431655765 & t && (e -= 1),
        e
    }
    e.INT_BITS = 32,
    e.INT_MAX = 2147483647,
    e.INT_MIN = -1 << 31,
    e.sign = function(t) {
        return (t > 0) - (t < 0)
    }
    ,
    e.abs = function(t) {
        var e = t >> 31;
        return (t ^ e) - e
    }
    ,
    e.min = function(t, e) {
        return e ^ (t ^ e) & -(t < e)
    }
    ,
    e.max = function(t, e) {
        return t ^ (t ^ e) & -(t < e)
    }
    ,
    e.isPow2 = function(t) {
        return !(t & t - 1 || !t)
    }
    ,
    e.log2 = function(t) {
        var e, r;
        return e = (t > 65535) << 4,
        e |= r = ((t >>>= e) > 255) << 3,
        e |= r = ((t >>>= r) > 15) << 2,
        (e |= r = ((t >>>= r) > 3) << 1) | (t >>>= r) >> 1
    }
    ,
    e.log10 = function(t) {
        return t >= 1e9 ? 9 : t >= 1e8 ? 8 : t >= 1e7 ? 7 : t >= 1e6 ? 6 : t >= 1e5 ? 5 : t >= 1e4 ? 4 : t >= 1e3 ? 3 : t >= 100 ? 2 : t >= 10 ? 1 : 0
    }
    ,
    e.popCount = function(t) {
        return 16843009 * ((t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135) >>> 24
    }
    ,
    e.countTrailingZeros = n,
    e.nextPow2 = function(t) {
        return t += 0 === t,
        --t,
        t |= t >>> 1,
        t |= t >>> 2,
        t |= t >>> 4,
        t |= t >>> 8,
        (t |= t >>> 16) + 1
    }
    ,
    e.prevPow2 = function(t) {
        return t |= t >>> 1,
        t |= t >>> 2,
        t |= t >>> 4,
        t |= t >>> 8,
        (t |= t >>> 16) - (t >>> 1)
    }
    ,
    e.parity = function(t) {
        return t ^= t >>> 16,
        t ^= t >>> 8,
        t ^= t >>> 4,
        27030 >>> (t &= 15) & 1
    }
    ;
    var i = new Array(256);
    !function(t) {
        for (var e = 0; e < 256; ++e) {
            var r = e
              , n = e
              , i = 7;
            for (r >>>= 1; r; r >>>= 1)
                n <<= 1,
                n |= 1 & r,
                --i;
            t[e] = n << i & 255
        }
    }(i),
    e.reverse = function(t) {
        return i[255 & t] << 24 | i[t >>> 8 & 255] << 16 | i[t >>> 16 & 255] << 8 | i[t >>> 24 & 255]
    }
    ,
    e.interleave2 = function(t, e) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t &= 65535) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e &= 65535) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
    }
    ,
    e.deinterleave2 = function(t, e) {
        return (t = 65535 & ((t = 16711935 & ((t = 252645135 & ((t = 858993459 & ((t = t >>> e & 1431655765) | t >>> 1)) | t >>> 2)) | t >>> 4)) | t >>> 16)) << 16 >> 16
    }
    ,
    e.interleave3 = function(t, e, r) {
        return t = 1227133513 & ((t = 3272356035 & ((t = 251719695 & ((t = 4278190335 & ((t &= 1023) | t << 16)) | t << 8)) | t << 4)) | t << 2),
        (t |= (e = 1227133513 & ((e = 3272356035 & ((e = 251719695 & ((e = 4278190335 & ((e &= 1023) | e << 16)) | e << 8)) | e << 4)) | e << 2)) << 1) | (r = 1227133513 & ((r = 3272356035 & ((r = 251719695 & ((r = 4278190335 & ((r &= 1023) | r << 16)) | r << 8)) | r << 4)) | r << 2)) << 2
    }
    ,
    e.deinterleave3 = function(t, e) {
        return (t = 1023 & ((t = 4278190335 & ((t = 251719695 & ((t = 3272356035 & ((t = t >>> e & 1227133513) | t >>> 2)) | t >>> 4)) | t >>> 8)) | t >>> 16)) << 22 >> 22
    }
    ,
    e.nextCombination = function(t) {
        var e = t | t - 1;
        return e + 1 | (~e & -~e) - 1 >>> n(t) + 1
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.Ticker = e.shared = void 0;
    var n, i = r(320), o = (n = i) && n.__esModule ? n : {
        default: n
    };
    var s = new o.default;
    s.autoStart = !0,
    s.destroy = function() {}
    ,
    e.shared = s,
    e.Ticker = o.default
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = i(r(170));
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    var a = function(t) {
        function e(r, i) {
            o(this, e);
            var a = null;
            if (!(r instanceof n.default)) {
                var u = arguments[1]
                  , h = arguments[2]
                  , l = arguments[3]
                  , c = arguments[4];
                console.warn("Please use RenderTexture.create(" + u + ", " + h + ") instead of the ctor directly."),
                a = arguments[0],
                i = null,
                r = new n.default(u,h,l,c)
            }
            var f = s(this, t.call(this, r, i));
            return f.legacyRenderer = a,
            f.valid = !0,
            f._updateUvs(),
            f
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.resize = function(t, e, r) {
            t = Math.ceil(t),
            e = Math.ceil(e),
            this.valid = t > 0 && e > 0,
            this._frame.width = this.orig.width = t,
            this._frame.height = this.orig.height = e,
            r || this.baseTexture.resize(t, e),
            this._updateUvs()
        }
        ,
        e.create = function(t, r, i, o) {
            return new e(new n.default(t,r,i,o))
        }
        ,
        e
    }(i(r(29)).default);
    e.default = a
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t) {
        for (var e = 6 * t, r = new Uint16Array(e), n = 0, i = 0; n < e; n += 6,
        i += 4)
            r[n + 0] = i + 0,
            r[n + 1] = i + 1,
            r[n + 2] = i + 2,
            r[n + 3] = i + 0,
            r[n + 4] = i + 2,
            r[n + 5] = i + 3;
        return r
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.Resource = void 0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = s(r(195))
      , o = s(r(194));
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var a = !(!window.XDomainRequest || "withCredentials"in new XMLHttpRequest)
      , u = null;
    function h() {}
    var l = e.Resource = function() {
        function t(e, r, n) {
            if (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            "string" != typeof e || "string" != typeof r)
                throw new Error("Both name and url are required for constructing a resource.");
            n = n || {},
            this._flags = 0,
            this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === r.indexOf("data:")),
            this.name = e,
            this.url = r,
            this.extension = this._getExtension(),
            this.data = null,
            this.crossOrigin = !0 === n.crossOrigin ? "anonymous" : n.crossOrigin,
            this.timeout = n.timeout || 0,
            this.loadType = n.loadType || this._determineLoadType(),
            this.xhrType = n.xhrType,
            this.metadata = n.metadata || {},
            this.error = null,
            this.xhr = null,
            this.children = [],
            this.type = t.TYPE.UNKNOWN,
            this.progressChunk = 0,
            this._dequeue = h,
            this._onLoadBinding = null,
            this._elementTimer = 0,
            this._boundComplete = this.complete.bind(this),
            this._boundOnError = this._onError.bind(this),
            this._boundOnProgress = this._onProgress.bind(this),
            this._boundOnTimeout = this._onTimeout.bind(this),
            this._boundXhrOnError = this._xhrOnError.bind(this),
            this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this),
            this._boundXhrOnAbort = this._xhrOnAbort.bind(this),
            this._boundXhrOnLoad = this._xhrOnLoad.bind(this),
            this.onStart = new o.default,
            this.onProgress = new o.default,
            this.onComplete = new o.default,
            this.onAfterMiddleware = new o.default
        }
        return t.setExtensionLoadType = function(e, r) {
            c(t._loadTypeMap, e, r)
        }
        ,
        t.setExtensionXhrType = function(e, r) {
            c(t._xhrTypeMap, e, r)
        }
        ,
        t.prototype.complete = function() {
            this._clearEvents(),
            this._finish()
        }
        ,
        t.prototype.abort = function(e) {
            if (!this.error) {
                if (this.error = new Error(e),
                this._clearEvents(),
                this.xhr)
                    this.xhr.abort();
                else if (this.xdr)
                    this.xdr.abort();
                else if (this.data)
                    if (this.data.src)
                        this.data.src = t.EMPTY_GIF;
                    else
                        for (; this.data.firstChild; )
                            this.data.removeChild(this.data.firstChild);
                this._finish()
            }
        }
        ,
        t.prototype.load = function(e) {
            var r = this;
            if (!this.isLoading)
                if (this.isComplete)
                    e && setTimeout((function() {
                        return e(r)
                    }
                    ), 1);
                else
                    switch (e && this.onComplete.once(e),
                    this._setFlag(t.STATUS_FLAGS.LOADING, !0),
                    this.onStart.dispatch(this),
                    !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)),
                    this.loadType) {
                    case t.LOAD_TYPE.IMAGE:
                        this.type = t.TYPE.IMAGE,
                        this._loadElement("image");
                        break;
                    case t.LOAD_TYPE.AUDIO:
                        this.type = t.TYPE.AUDIO,
                        this._loadSourceElement("audio");
                        break;
                    case t.LOAD_TYPE.VIDEO:
                        this.type = t.TYPE.VIDEO,
                        this._loadSourceElement("video");
                        break;
                    case t.LOAD_TYPE.XHR:
                    default:
                        a && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                    }
        }
        ,
        t.prototype._hasFlag = function(t) {
            return 0 != (this._flags & t)
        }
        ,
        t.prototype._setFlag = function(t, e) {
            this._flags = e ? this._flags | t : this._flags & ~t
        }
        ,
        t.prototype._clearEvents = function() {
            clearTimeout(this._elementTimer),
            this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1),
            this.data.removeEventListener("load", this._boundComplete, !1),
            this.data.removeEventListener("progress", this._boundOnProgress, !1),
            this.data.removeEventListener("canplaythrough", this._boundComplete, !1)),
            this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1),
            this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1),
            this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1),
            this.xhr.removeEventListener("progress", this._boundOnProgress, !1),
            this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null,
            this.xhr.ontimeout = null,
            this.xhr.onprogress = null,
            this.xhr.onload = null))
        }
        ,
        t.prototype._finish = function() {
            if (this.isComplete)
                throw new Error("Complete called again for an already completed resource.");
            this._setFlag(t.STATUS_FLAGS.COMPLETE, !0),
            this._setFlag(t.STATUS_FLAGS.LOADING, !1),
            this.onComplete.dispatch(this)
        }
        ,
        t.prototype._loadElement = function(t) {
            this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== window.Image ? this.data = new Image : this.data = document.createElement(t),
            this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
            this.metadata.skipSource || (this.data.src = this.url),
            this.data.addEventListener("error", this._boundOnError, !1),
            this.data.addEventListener("load", this._boundComplete, !1),
            this.data.addEventListener("progress", this._boundOnProgress, !1),
            this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
        }
        ,
        t.prototype._loadSourceElement = function(t) {
            if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== window.Audio ? this.data = new Audio : this.data = document.createElement(t),
            null !== this.data) {
                if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
                !this.metadata.skipSource)
                    if (navigator.isCocoonJS)
                        this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                    else if (Array.isArray(this.url))
                        for (var e = this.metadata.mimeType, r = 0; r < this.url.length; ++r)
                            this.data.appendChild(this._createSource(t, this.url[r], Array.isArray(e) ? e[r] : e));
                    else {
                        var n = this.metadata.mimeType;
                        this.data.appendChild(this._createSource(t, this.url, Array.isArray(n) ? n[0] : n))
                    }
                this.data.addEventListener("error", this._boundOnError, !1),
                this.data.addEventListener("load", this._boundComplete, !1),
                this.data.addEventListener("progress", this._boundOnProgress, !1),
                this.data.addEventListener("canplaythrough", this._boundComplete, !1),
                this.data.load(),
                this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
            } else
                this.abort("Unsupported element: " + t)
        }
        ,
        t.prototype._loadXhr = function() {
            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
            var e = this.xhr = new XMLHttpRequest;
            e.open("GET", this.url, !0),
            e.timeout = this.timeout,
            this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType,
            e.addEventListener("error", this._boundXhrOnError, !1),
            e.addEventListener("timeout", this._boundXhrOnTimeout, !1),
            e.addEventListener("abort", this._boundXhrOnAbort, !1),
            e.addEventListener("progress", this._boundOnProgress, !1),
            e.addEventListener("load", this._boundXhrOnLoad, !1),
            e.send()
        }
        ,
        t.prototype._loadXdr = function() {
            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
            var t = this.xhr = new XDomainRequest;
            t.timeout = this.timeout || 5e3,
            t.onerror = this._boundXhrOnError,
            t.ontimeout = this._boundXhrOnTimeout,
            t.onprogress = this._boundOnProgress,
            t.onload = this._boundXhrOnLoad,
            t.open("GET", this.url, !0),
            setTimeout((function() {
                return t.send()
            }
            ), 1)
        }
        ,
        t.prototype._createSource = function(t, e, r) {
            r || (r = t + "/" + this._getExtension(e));
            var n = document.createElement("source");
            return n.src = e,
            n.type = r,
            n
        }
        ,
        t.prototype._onError = function(t) {
            this.abort("Failed to load element using: " + t.target.nodeName)
        }
        ,
        t.prototype._onProgress = function(t) {
            t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total)
        }
        ,
        t.prototype._onTimeout = function() {
            this.abort("Load timed out.")
        }
        ,
        t.prototype._xhrOnError = function() {
            var t = this.xhr;
            this.abort(f(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
        }
        ,
        t.prototype._xhrOnTimeout = function() {
            var t = this.xhr;
            this.abort(f(t) + " Request timed out.")
        }
        ,
        t.prototype._xhrOnAbort = function() {
            var t = this.xhr;
            this.abort(f(t) + " Request was aborted by the user.")
        }
        ,
        t.prototype._xhrOnLoad = function() {
            var e = this.xhr
              , r = ""
              , n = void 0 === e.status ? 200 : e.status;
            if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (r = e.responseText),
            0 === n && (r.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER) ? n = 200 : 1223 === n && (n = 204),
            2 === (n / 100 | 0)) {
                if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT)
                    this.data = r,
                    this.type = t.TYPE.TEXT;
                else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON)
                    try {
                        this.data = JSON.parse(r),
                        this.type = t.TYPE.JSON
                    } catch (t) {
                        return void this.abort("Error trying to parse loaded json: " + t)
                    }
                else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT)
                    try {
                        if (window.DOMParser) {
                            var i = new DOMParser;
                            this.data = i.parseFromString(r, "text/xml")
                        } else {
                            var o = document.createElement("div");
                            o.innerHTML = r,
                            this.data = o
                        }
                        this.type = t.TYPE.XML
                    } catch (t) {
                        return void this.abort("Error trying to parse loaded xml: " + t)
                    }
                else
                    this.data = e.response || r;
                this.complete()
            } else
                this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL)
        }
        ,
        t.prototype._determineCrossOrigin = function(t, e) {
            if (0 === t.indexOf("data:"))
                return "";
            if (window.origin !== window.location.origin)
                return "anonymous";
            e = e || window.location,
            u || (u = document.createElement("a")),
            u.href = t;
            var r = !(t = (0,
            i.default)(u.href, {
                strictMode: !0
            })).port && "" === e.port || t.port === e.port
              , n = t.protocol ? t.protocol + ":" : "";
            return t.host === e.hostname && r && n === e.protocol ? "" : "anonymous"
        }
        ,
        t.prototype._determineXhrType = function() {
            return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT
        }
        ,
        t.prototype._determineLoadType = function() {
            return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR
        }
        ,
        t.prototype._getExtension = function() {
            var t = this.url
              , e = "";
            if (this.isDataUrl) {
                var r = t.indexOf("/");
                e = t.substring(r + 1, t.indexOf(";", r))
            } else {
                var n = t.indexOf("?")
                  , i = t.indexOf("#")
                  , o = Math.min(n > -1 ? n : t.length, i > -1 ? i : t.length);
                e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1)
            }
            return e.toLowerCase()
        }
        ,
        t.prototype._getMimeFromXhrType = function(e) {
            switch (e) {
            case t.XHR_RESPONSE_TYPE.BUFFER:
                return "application/octet-binary";
            case t.XHR_RESPONSE_TYPE.BLOB:
                return "application/blob";
            case t.XHR_RESPONSE_TYPE.DOCUMENT:
                return "application/xml";
            case t.XHR_RESPONSE_TYPE.JSON:
                return "application/json";
            case t.XHR_RESPONSE_TYPE.DEFAULT:
            case t.XHR_RESPONSE_TYPE.TEXT:
            default:
                return "text/plain"
            }
        }
        ,
        n(t, [{
            key: "isDataUrl",
            get: function() {
                return this._hasFlag(t.STATUS_FLAGS.DATA_URL)
            }
        }, {
            key: "isComplete",
            get: function() {
                return this._hasFlag(t.STATUS_FLAGS.COMPLETE)
            }
        }, {
            key: "isLoading",
            get: function() {
                return this._hasFlag(t.STATUS_FLAGS.LOADING)
            }
        }]),
        t
    }();
    function c(t, e, r) {
        e && 0 === e.indexOf(".") && (e = e.substring(1)),
        e && (t[e] = r)
    }
    function f(t) {
        return t.toString().replace("object ", "")
    }
    l.STATUS_FLAGS = {
        NONE: 0,
        DATA_URL: 1,
        COMPLETE: 2,
        LOADING: 4
    },
    l.TYPE = {
        UNKNOWN: 0,
        JSON: 1,
        XML: 2,
        IMAGE: 3,
        AUDIO: 4,
        VIDEO: 5,
        TEXT: 6
    },
    l.LOAD_TYPE = {
        XHR: 1,
        IMAGE: 2,
        AUDIO: 3,
        VIDEO: 4
    },
    l.XHR_RESPONSE_TYPE = {
        DEFAULT: "text",
        BUFFER: "arraybuffer",
        BLOB: "blob",
        DOCUMENT: "document",
        JSON: "json",
        TEXT: "text"
    },
    l._loadTypeMap = {
        gif: l.LOAD_TYPE.IMAGE,
        png: l.LOAD_TYPE.IMAGE,
        bmp: l.LOAD_TYPE.IMAGE,
        jpg: l.LOAD_TYPE.IMAGE,
        jpeg: l.LOAD_TYPE.IMAGE,
        tif: l.LOAD_TYPE.IMAGE,
        tiff: l.LOAD_TYPE.IMAGE,
        webp: l.LOAD_TYPE.IMAGE,
        tga: l.LOAD_TYPE.IMAGE,
        svg: l.LOAD_TYPE.IMAGE,
        "svg+xml": l.LOAD_TYPE.IMAGE,
        mp3: l.LOAD_TYPE.AUDIO,
        ogg: l.LOAD_TYPE.AUDIO,
        wav: l.LOAD_TYPE.AUDIO,
        mp4: l.LOAD_TYPE.VIDEO,
        webm: l.LOAD_TYPE.VIDEO
    },
    l._xhrTypeMap = {
        xhtml: l.XHR_RESPONSE_TYPE.DOCUMENT,
        html: l.XHR_RESPONSE_TYPE.DOCUMENT,
        htm: l.XHR_RESPONSE_TYPE.DOCUMENT,
        xml: l.XHR_RESPONSE_TYPE.DOCUMENT,
        tmx: l.XHR_RESPONSE_TYPE.DOCUMENT,
        svg: l.XHR_RESPONSE_TYPE.DOCUMENT,
        tsx: l.XHR_RESPONSE_TYPE.DOCUMENT,
        gif: l.XHR_RESPONSE_TYPE.BLOB,
        png: l.XHR_RESPONSE_TYPE.BLOB,
        bmp: l.XHR_RESPONSE_TYPE.BLOB,
        jpg: l.XHR_RESPONSE_TYPE.BLOB,
        jpeg: l.XHR_RESPONSE_TYPE.BLOB,
        tif: l.XHR_RESPONSE_TYPE.BLOB,
        tiff: l.XHR_RESPONSE_TYPE.BLOB,
        webp: l.XHR_RESPONSE_TYPE.BLOB,
        tga: l.XHR_RESPONSE_TYPE.BLOB,
        json: l.XHR_RESPONSE_TYPE.JSON,
        text: l.XHR_RESPONSE_TYPE.TEXT,
        txt: l.XHR_RESPONSE_TYPE.TEXT,
        ttf: l.XHR_RESPONSE_TYPE.BUFFER,
        otf: l.XHR_RESPONSE_TYPE.BUFFER
    },
    l.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    t.exports.default = l
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5)), o = r(201), s = (n = o) && n.__esModule ? n : {
        default: n
    };
    var a = i.ticker.shared;
    i.settings.UPLOADS_PER_FRAME = 4;
    var u = function() {
        function t(e) {
            var r = this;
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.limiter = new s.default(i.settings.UPLOADS_PER_FRAME),
            this.renderer = e,
            this.uploadHookHelper = null,
            this.queue = [],
            this.addHooks = [],
            this.uploadHooks = [],
            this.completes = [],
            this.ticking = !1,
            this.delayedTick = function() {
                r.queue && r.prepareItems()
            }
            ,
            this.registerFindHook(p),
            this.registerFindHook(v),
            this.registerFindHook(h),
            this.registerFindHook(l),
            this.registerFindHook(c),
            this.registerUploadHook(f),
            this.registerUploadHook(d)
        }
        return t.prototype.upload = function(t, e) {
            "function" == typeof t && (e = t,
            t = null),
            t && this.add(t),
            this.queue.length ? (e && this.completes.push(e),
            this.ticking || (this.ticking = !0,
            a.addOnce(this.tick, this, i.UPDATE_PRIORITY.UTILITY))) : e && e()
        }
        ,
        t.prototype.tick = function() {
            setTimeout(this.delayedTick, 0)
        }
        ,
        t.prototype.prepareItems = function() {
            for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload(); ) {
                var t = this.queue[0]
                  , e = !1;
                if (t && !t._destroyed)
                    for (var r = 0, n = this.uploadHooks.length; r < n; r++)
                        if (this.uploadHooks[r](this.uploadHookHelper, t)) {
                            this.queue.shift(),
                            e = !0;
                            break
                        }
                e || this.queue.shift()
            }
            if (this.queue.length)
                a.addOnce(this.tick, this, i.UPDATE_PRIORITY.UTILITY);
            else {
                this.ticking = !1;
                var o = this.completes.slice(0);
                this.completes.length = 0;
                for (var s = 0, u = o.length; s < u; s++)
                    o[s]()
            }
        }
        ,
        t.prototype.registerFindHook = function(t) {
            return t && this.addHooks.push(t),
            this
        }
        ,
        t.prototype.registerUploadHook = function(t) {
            return t && this.uploadHooks.push(t),
            this
        }
        ,
        t.prototype.add = function(t) {
            for (var e = 0, r = this.addHooks.length; e < r && !this.addHooks[e](t, this.queue); e++)
                ;
            if (t instanceof i.Container)
                for (var n = t.children.length - 1; n >= 0; n--)
                    this.add(t.children[n]);
            return this
        }
        ,
        t.prototype.destroy = function() {
            this.ticking && a.remove(this.tick, this),
            this.ticking = !1,
            this.addHooks = null,
            this.uploadHooks = null,
            this.renderer = null,
            this.completes = null,
            this.queue = null,
            this.limiter = null,
            this.uploadHookHelper = null
        }
        ,
        t
    }();
    function h(t, e) {
        var r = !1;
        if (t && t._textures && t._textures.length)
            for (var n = 0; n < t._textures.length; n++)
                if (t._textures[n]instanceof i.Texture) {
                    var o = t._textures[n].baseTexture;
                    -1 === e.indexOf(o) && (e.push(o),
                    r = !0)
                }
        return r
    }
    function l(t, e) {
        return t instanceof i.BaseTexture && (-1 === e.indexOf(t) && e.push(t),
        !0)
    }
    function c(t, e) {
        if (t._texture && t._texture instanceof i.Texture) {
            var r = t._texture.baseTexture;
            return -1 === e.indexOf(r) && e.push(r),
            !0
        }
        return !1
    }
    function f(t, e) {
        return e instanceof i.Text && (e.updateText(!0),
        !0)
    }
    function d(t, e) {
        if (e instanceof i.TextStyle) {
            var r = e.toFontString();
            return i.TextMetrics.measureFont(r),
            !0
        }
        return !1
    }
    function p(t, e) {
        if (t instanceof i.Text) {
            -1 === e.indexOf(t.style) && e.push(t.style),
            -1 === e.indexOf(t) && e.push(t);
            var r = t._texture.baseTexture;
            return -1 === e.indexOf(r) && e.push(r),
            !0
        }
        return !1
    }
    function v(t, e) {
        return t instanceof i.TextStyle && (-1 === e.indexOf(t) && e.push(t),
        !0)
    }
    e.default = u
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }();
    function i(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function t(e, r) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            i(this, t),
            this._x = n,
            this._y = o,
            this.cb = e,
            this.scope = r
        }
        return t.prototype.clone = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
              , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , n = e || this.cb
              , i = r || this.scope;
            return new t(n,i,this._x,this._y)
        }
        ,
        t.prototype.set = function(t, e) {
            var r = t || 0
              , n = e || (0 !== e ? r : 0);
            this._x === r && this._y === n || (this._x = r,
            this._y = n,
            this.cb.call(this.scope))
        }
        ,
        t.prototype.copy = function(t) {
            this._x === t.x && this._y === t.y || (this._x = t.x,
            this._y = t.y,
            this.cb.call(this.scope))
        }
        ,
        t.prototype.equals = function(t) {
            return t.x === this._x && t.y === this._y
        }
        ,
        n(t, [{
            key: "x",
            get: function() {
                return this._x
            },
            set: function(t) {
                this._x !== t && (this._x = t,
                this.cb.call(this.scope))
            }
        }, {
            key: "y",
            get: function() {
                return this._y
            },
            set: function(t) {
                this._y !== t && (this._y = t,
                this.cb.call(this.scope))
            }
        }]),
        t
    }();
    e.default = o
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(98), o = (n = i) && n.__esModule ? n : {
        default: n
    };
    var s = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1]
      , a = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1]
      , u = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1]
      , h = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1]
      , l = []
      , c = [];
    function f(t) {
        return t < 0 ? -1 : t > 0 ? 1 : 0
    }
    !function() {
        for (var t = 0; t < 16; t++) {
            var e = [];
            c.push(e);
            for (var r = 0; r < 16; r++)
                for (var n = f(s[t] * s[r] + u[t] * a[r]), i = f(a[t] * s[r] + h[t] * a[r]), d = f(s[t] * u[r] + u[t] * h[r]), p = f(a[t] * u[r] + h[t] * h[r]), v = 0; v < 16; v++)
                    if (s[v] === n && a[v] === i && u[v] === d && h[v] === p) {
                        e.push(v);
                        break
                    }
        }
        for (var y = 0; y < 16; y++) {
            var g = new o.default;
            g.set(s[y], a[y], u[y], h[y], 0, 0),
            l.push(g)
        }
    }();
    var d = {
        E: 0,
        SE: 1,
        S: 2,
        SW: 3,
        W: 4,
        NW: 5,
        N: 6,
        NE: 7,
        MIRROR_VERTICAL: 8,
        MIRROR_HORIZONTAL: 12,
        uX: function(t) {
            return s[t]
        },
        uY: function(t) {
            return a[t]
        },
        vX: function(t) {
            return u[t]
        },
        vY: function(t) {
            return h[t]
        },
        inv: function(t) {
            return 8 & t ? 15 & t : 7 & -t
        },
        add: function(t, e) {
            return c[t][e]
        },
        sub: function(t, e) {
            return c[t][d.inv(e)]
        },
        rotate180: function(t) {
            return 4 ^ t
        },
        isVertical: function(t) {
            return 2 == (3 & t)
        },
        byDirection: function(t, e) {
            return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? d.S : d.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? d.E : d.W : e > 0 ? t > 0 ? d.SE : d.SW : t > 0 ? d.NE : d.NW
        },
        matrixAppendRotationInv: function(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
              , i = l[d.inv(e)];
            i.tx = r,
            i.ty = n,
            t.append(i)
        }
    };
    e.default = d
}
, function(t, e) {
    t.exports = function(t, e, r) {
        var n;
        if (r) {
            var i = r.tempAttribState
              , o = r.attribState;
            for (n = 0; n < i.length; n++)
                i[n] = !1;
            for (n = 0; n < e.length; n++)
                i[e[n].attribute.location] = !0;
            for (n = 0; n < o.length; n++)
                o[n] !== i[n] && (o[n] = i[n],
                r.attribState[n] ? t.enableVertexAttribArray(n) : t.disableVertexAttribArray(n))
        } else
            for (n = 0; n < e.length; n++) {
                var s = e[n];
                t.enableVertexAttribArray(s.attribute.location)
            }
    }
}
, function(t, e) {
    var r = function(t, e, r, n, i) {
        this.gl = t,
        this.texture = t.createTexture(),
        this.mipmap = !1,
        this.premultiplyAlpha = !1,
        this.width = e || -1,
        this.height = r || -1,
        this.format = n || t.RGBA,
        this.type = i || t.UNSIGNED_BYTE
    };
    r.prototype.upload = function(t) {
        this.bind();
        var e = this.gl;
        e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
        var r = t.videoWidth || t.width
          , n = t.videoHeight || t.height;
        n !== this.height || r !== this.width ? e.texImage2D(e.TEXTURE_2D, 0, this.format, this.format, this.type, t) : e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, this.format, this.type, t),
        this.width = r,
        this.height = n
    }
    ;
    var n = !1;
    r.prototype.uploadData = function(t, e, r) {
        this.bind();
        var i = this.gl;
        if (t instanceof Float32Array) {
            if (!n) {
                if (!i.getExtension("OES_texture_float"))
                    throw new Error("floating point textures not available");
                n = !0
            }
            this.type = i.FLOAT
        } else
            this.type = this.type || i.UNSIGNED_BYTE;
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha),
        e !== this.width || r !== this.height ? i.texImage2D(i.TEXTURE_2D, 0, this.format, e, r, 0, this.format, this.type, t || null) : i.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, e, r, this.format, this.type, t || null),
        this.width = e,
        this.height = r
    }
    ,
    r.prototype.bind = function(t) {
        var e = this.gl;
        void 0 !== t && e.activeTexture(e.TEXTURE0 + t),
        e.bindTexture(e.TEXTURE_2D, this.texture)
    }
    ,
    r.prototype.unbind = function() {
        var t = this.gl;
        t.bindTexture(t.TEXTURE_2D, null)
    }
    ,
    r.prototype.minFilter = function(t) {
        var e = this.gl;
        this.bind(),
        this.mipmap ? e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR : e.NEAREST)
    }
    ,
    r.prototype.magFilter = function(t) {
        var e = this.gl;
        this.bind(),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t ? e.LINEAR : e.NEAREST)
    }
    ,
    r.prototype.enableMipmap = function() {
        var t = this.gl;
        this.bind(),
        this.mipmap = !0,
        t.generateMipmap(t.TEXTURE_2D)
    }
    ,
    r.prototype.enableLinearScaling = function() {
        this.minFilter(!0),
        this.magFilter(!0)
    }
    ,
    r.prototype.enableNearestScaling = function() {
        this.minFilter(!1),
        this.magFilter(!1)
    }
    ,
    r.prototype.enableWrapClamp = function() {
        var t = this.gl;
        this.bind(),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
    }
    ,
    r.prototype.enableWrapRepeat = function() {
        var t = this.gl;
        this.bind(),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT)
    }
    ,
    r.prototype.enableWrapMirrorRepeat = function() {
        var t = this.gl;
        this.bind(),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.MIRRORED_REPEAT),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.MIRRORED_REPEAT)
    }
    ,
    r.prototype.destroy = function() {
        this.gl.deleteTexture(this.texture)
    }
    ,
    r.fromSource = function(t, e, n) {
        var i = new r(t);
        return i.premultiplyAlpha = n || !1,
        i.upload(e),
        i
    }
    ,
    r.fromData = function(t, e, n, i) {
        var o = new r(t);
        return o.uploadData(e, n, i),
        o
    }
    ,
    t.exports = r
}
, function(t, e) {
    var r = function(t, e, r) {
        var n = t.createShader(e);
        return t.shaderSource(n, r),
        t.compileShader(n),
        t.getShaderParameter(n, t.COMPILE_STATUS) ? n : (console.log(t.getShaderInfoLog(n)),
        null)
    };
    t.exports = function(t, e, n, i) {
        var o = r(t, t.VERTEX_SHADER, e)
          , s = r(t, t.FRAGMENT_SHADER, n)
          , a = t.createProgram();
        if (t.attachShader(a, o),
        t.attachShader(a, s),
        i)
            for (var u in i)
                t.bindAttribLocation(a, i[u], u);
        return t.linkProgram(a),
        t.getProgramParameter(a, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."),
        console.error("gl.VALIDATE_STATUS", t.getProgramParameter(a, t.VALIDATE_STATUS)),
        console.error("gl.getError()", t.getError()),
        "" !== t.getProgramInfoLog(a) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(a)),
        t.deleteProgram(a),
        a = null),
        t.deleteShader(o),
        t.deleteShader(s),
        a
    }
}
, function(t, e, r) {
    var n = r(100)
      , i = r(157)
      , o = function(t, e, r, n) {
        gl.vertexAttribPointer(this.location, this.size, t || gl.FLOAT, e || !1, r || 0, n || 0)
    };
    t.exports = function(t, e) {
        for (var r = {}, s = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), a = 0; a < s; a++) {
            var u = t.getActiveAttrib(e, a)
              , h = n(t, u.type);
            r[u.name] = {
                type: h,
                size: i(h),
                location: t.getAttribLocation(e, u.name),
                pointer: o
            }
        }
        return r
    }
}
, function(t, e) {
    var r = {
        float: 1,
        vec2: 2,
        vec3: 3,
        vec4: 4,
        int: 1,
        ivec2: 2,
        ivec3: 3,
        ivec4: 4,
        bool: 1,
        bvec2: 2,
        bvec3: 3,
        bvec4: 4,
        mat2: 4,
        mat3: 9,
        mat4: 16,
        sampler2D: 1
    };
    t.exports = function(t) {
        return r[t]
    }
}
, function(t, e, r) {
    var n = r(100)
      , i = r(159);
    t.exports = function(t, e) {
        for (var r = {}, o = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), s = 0; s < o; s++) {
            var a = t.getActiveUniform(e, s)
              , u = a.name.replace(/\[.*?\]/, "")
              , h = n(t, a.type);
            r[u] = {
                type: h,
                size: a.size,
                location: t.getUniformLocation(e, u),
                value: i(h, a.size)
            }
        }
        return r
    }
}
, function(t, e) {
    var r = function(t) {
        for (var e = new Array(t), r = 0; r < e.length; r++)
            e[r] = !1;
        return e
    };
    t.exports = function(t, e) {
        switch (t) {
        case "float":
            return 0;
        case "vec2":
            return new Float32Array(2 * e);
        case "vec3":
            return new Float32Array(3 * e);
        case "vec4":
            return new Float32Array(4 * e);
        case "int":
        case "sampler2D":
            return 0;
        case "ivec2":
            return new Int32Array(2 * e);
        case "ivec3":
            return new Int32Array(3 * e);
        case "ivec4":
            return new Int32Array(4 * e);
        case "bool":
            return !1;
        case "bvec2":
            return r(2 * e);
        case "bvec3":
            return r(3 * e);
        case "bvec4":
            return r(4 * e);
        case "mat2":
            return new Float32Array([1, 0, 0, 1]);
        case "mat3":
            return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
        case "mat4":
            return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        }
    }
}
, function(t, e) {
    t.exports = function(t, e) {
        return "precision" !== t.substring(0, 9) ? "precision " + e + " float;\n" + t : t
    }
}
, function(t, e) {
    var r = function(t) {
        return function() {
            return this.data[t].value
        }
    }
      , n = {
        float: function(t, e, r) {
            t.uniform1f(e, r)
        },
        vec2: function(t, e, r) {
            t.uniform2f(e, r[0], r[1])
        },
        vec3: function(t, e, r) {
            t.uniform3f(e, r[0], r[1], r[2])
        },
        vec4: function(t, e, r) {
            t.uniform4f(e, r[0], r[1], r[2], r[3])
        },
        int: function(t, e, r) {
            t.uniform1i(e, r)
        },
        ivec2: function(t, e, r) {
            t.uniform2i(e, r[0], r[1])
        },
        ivec3: function(t, e, r) {
            t.uniform3i(e, r[0], r[1], r[2])
        },
        ivec4: function(t, e, r) {
            t.uniform4i(e, r[0], r[1], r[2], r[3])
        },
        bool: function(t, e, r) {
            t.uniform1i(e, r)
        },
        bvec2: function(t, e, r) {
            t.uniform2i(e, r[0], r[1])
        },
        bvec3: function(t, e, r) {
            t.uniform3i(e, r[0], r[1], r[2])
        },
        bvec4: function(t, e, r) {
            t.uniform4i(e, r[0], r[1], r[2], r[3])
        },
        mat2: function(t, e, r) {
            t.uniformMatrix2fv(e, !1, r)
        },
        mat3: function(t, e, r) {
            t.uniformMatrix3fv(e, !1, r)
        },
        mat4: function(t, e, r) {
            t.uniformMatrix4fv(e, !1, r)
        },
        sampler2D: function(t, e, r) {
            t.uniform1i(e, r)
        }
    }
      , i = {
        float: function(t, e, r) {
            t.uniform1fv(e, r)
        },
        vec2: function(t, e, r) {
            t.uniform2fv(e, r)
        },
        vec3: function(t, e, r) {
            t.uniform3fv(e, r)
        },
        vec4: function(t, e, r) {
            t.uniform4fv(e, r)
        },
        int: function(t, e, r) {
            t.uniform1iv(e, r)
        },
        ivec2: function(t, e, r) {
            t.uniform2iv(e, r)
        },
        ivec3: function(t, e, r) {
            t.uniform3iv(e, r)
        },
        ivec4: function(t, e, r) {
            t.uniform4iv(e, r)
        },
        bool: function(t, e, r) {
            t.uniform1iv(e, r)
        },
        bvec2: function(t, e, r) {
            t.uniform2iv(e, r)
        },
        bvec3: function(t, e, r) {
            t.uniform3iv(e, r)
        },
        bvec4: function(t, e, r) {
            t.uniform4iv(e, r)
        },
        sampler2D: function(t, e, r) {
            t.uniform1iv(e, r)
        }
    };
    function o(t, e) {
        return function(r) {
            this.data[t].value = r;
            var o = this.data[t].location;
            1 === e.size ? n[e.type](this.gl, o, r) : i[e.type](this.gl, o, r)
        }
    }
    function s(t, e) {
        for (var r = e, n = 0; n < t.length - 1; n++) {
            var i = r[t[n]] || {
                data: {}
            };
            r[t[n]] = i,
            r = i
        }
        return r
    }
    t.exports = function(t, e) {
        var n = {
            data: {}
        };
        n.gl = t;
        for (var i = Object.keys(e), a = 0; a < i.length; a++) {
            var u = i[a]
              , h = u.split(".")
              , l = h[h.length - 1]
              , c = s(h, n)
              , f = e[u];
            c.data[l] = f,
            c.gl = t,
            Object.defineProperty(c, l, {
                get: r(l),
                set: o(l, f)
            })
        }
        return n
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = c(r(36))
      , o = r(4)
      , s = c(r(12))
      , a = c(r(163))
      , u = c(r(164))
      , h = c(r(101))
      , l = r(15);
    function c(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var f = function(t) {
        function e() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this))
              , n = s.default.TRANSFORM_MODE === o.TRANSFORM_MODE.STATIC ? a.default : u.default;
            return r.tempDisplayObjectParent = null,
            r.transform = new n,
            r.alpha = 1,
            r.visible = !0,
            r.renderable = !0,
            r.parent = null,
            r.worldAlpha = 1,
            r.filterArea = null,
            r._filters = null,
            r._enabledFilters = null,
            r._bounds = new h.default,
            r._boundsID = 0,
            r._lastBoundsID = -1,
            r._boundsRect = null,
            r._localBoundsRect = null,
            r._mask = null,
            r._destroyed = !1,
            r
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.updateTransform = function() {
            this.transform.updateTransform(this.parent.transform),
            this.worldAlpha = this.alpha * this.parent.worldAlpha,
            this._bounds.updateID++
        }
        ,
        e.prototype._recursivePostUpdateTransform = function() {
            this.parent ? (this.parent._recursivePostUpdateTransform(),
            this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
        }
        ,
        e.prototype.getBounds = function(t, e) {
            return t || (this.parent ? (this._recursivePostUpdateTransform(),
            this.updateTransform()) : (this.parent = this._tempDisplayObjectParent,
            this.updateTransform(),
            this.parent = null)),
            this._boundsID !== this._lastBoundsID && this.calculateBounds(),
            e || (this._boundsRect || (this._boundsRect = new l.Rectangle),
            e = this._boundsRect),
            this._bounds.getRectangle(e)
        }
        ,
        e.prototype.getLocalBounds = function(t) {
            var e = this.transform
              , r = this.parent;
            this.parent = null,
            this.transform = this._tempDisplayObjectParent.transform,
            t || (this._localBoundsRect || (this._localBoundsRect = new l.Rectangle),
            t = this._localBoundsRect);
            var n = this.getBounds(!1, t);
            return this.parent = r,
            this.transform = e,
            n
        }
        ,
        e.prototype.toGlobal = function(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return r || (this._recursivePostUpdateTransform(),
            this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent,
            this.displayObjectUpdateTransform(),
            this.parent = null)),
            this.worldTransform.apply(t, e)
        }
        ,
        e.prototype.toLocal = function(t, e, r, n) {
            return e && (t = e.toGlobal(t, r, n)),
            n || (this._recursivePostUpdateTransform(),
            this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent,
            this.displayObjectUpdateTransform(),
            this.parent = null)),
            this.worldTransform.applyInverse(t, r)
        }
        ,
        e.prototype.renderWebGL = function(t) {}
        ,
        e.prototype.renderCanvas = function(t) {}
        ,
        e.prototype.setParent = function(t) {
            if (!t || !t.addChild)
                throw new Error("setParent: Argument must be a Container");
            return t.addChild(this),
            t
        }
        ,
        e.prototype.setTransform = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
              , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
              , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
              , o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0
              , s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0
              , a = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0
              , u = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
            return this.position.x = t,
            this.position.y = e,
            this.scale.x = r || 1,
            this.scale.y = n || 1,
            this.rotation = i,
            this.skew.x = o,
            this.skew.y = s,
            this.pivot.x = a,
            this.pivot.y = u,
            this
        }
        ,
        e.prototype.destroy = function() {
            this.removeAllListeners(),
            this.parent && this.parent.removeChild(this),
            this.transform = null,
            this.parent = null,
            this._bounds = null,
            this._currentBounds = null,
            this._mask = null,
            this.filterArea = null,
            this.interactive = !1,
            this.interactiveChildren = !1,
            this._destroyed = !0
        }
        ,
        n(e, [{
            key: "_tempDisplayObjectParent",
            get: function() {
                return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new e),
                this.tempDisplayObjectParent
            }
        }, {
            key: "x",
            get: function() {
                return this.position.x
            },
            set: function(t) {
                this.transform.position.x = t
            }
        }, {
            key: "y",
            get: function() {
                return this.position.y
            },
            set: function(t) {
                this.transform.position.y = t
            }
        }, {
            key: "worldTransform",
            get: function() {
                return this.transform.worldTransform
            }
        }, {
            key: "localTransform",
            get: function() {
                return this.transform.localTransform
            }
        }, {
            key: "position",
            get: function() {
                return this.transform.position
            },
            set: function(t) {
                this.transform.position.copy(t)
            }
        }, {
            key: "scale",
            get: function() {
                return this.transform.scale
            },
            set: function(t) {
                this.transform.scale.copy(t)
            }
        }, {
            key: "pivot",
            get: function() {
                return this.transform.pivot
            },
            set: function(t) {
                this.transform.pivot.copy(t)
            }
        }, {
            key: "skew",
            get: function() {
                return this.transform.skew
            },
            set: function(t) {
                this.transform.skew.copy(t)
            }
        }, {
            key: "rotation",
            get: function() {
                return this.transform.rotation
            },
            set: function(t) {
                this.transform.rotation = t
            }
        }, {
            key: "worldVisible",
            get: function() {
                var t = this;
                do {
                    if (!t.visible)
                        return !1;
                    t = t.parent
                } while (t);
                return !0
            }
        }, {
            key: "mask",
            get: function() {
                return this._mask
            },
            set: function(t) {
                this._mask && (this._mask.renderable = !0,
                this._mask.isMask = !1),
                this._mask = t,
                this._mask && (this._mask.renderable = !1,
                this._mask.isMask = !0)
            }
        }, {
            key: "filters",
            get: function() {
                return this._filters && this._filters.slice()
            },
            set: function(t) {
                this._filters = t && t.slice()
            }
        }]),
        e
    }(i.default);
    e.default = f,
    f.prototype.displayObjectUpdateTransform = f.prototype.updateTransform
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }(), o = r(15), s = r(103);
    var a = function(t) {
        function e() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return r.position = new o.ObservablePoint(r.onChange,r,0,0),
            r.scale = new o.ObservablePoint(r.onChange,r,1,1),
            r.pivot = new o.ObservablePoint(r.onChange,r,0,0),
            r.skew = new o.ObservablePoint(r.updateSkew,r,0,0),
            r._rotation = 0,
            r._cx = 1,
            r._sx = 0,
            r._cy = 0,
            r._sy = 1,
            r._localID = 0,
            r._currentLocalID = 0,
            r
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.onChange = function() {
            this._localID++
        }
        ,
        e.prototype.updateSkew = function() {
            this._cx = Math.cos(this._rotation + this.skew._y),
            this._sx = Math.sin(this._rotation + this.skew._y),
            this._cy = -Math.sin(this._rotation - this.skew._x),
            this._sy = Math.cos(this._rotation - this.skew._x),
            this._localID++
        }
        ,
        e.prototype.updateLocalTransform = function() {
            var t = this.localTransform;
            this._localID !== this._currentLocalID && (t.a = this._cx * this.scale._x,
            t.b = this._sx * this.scale._x,
            t.c = this._cy * this.scale._y,
            t.d = this._sy * this.scale._y,
            t.tx = this.position._x - (this.pivot._x * t.a + this.pivot._y * t.c),
            t.ty = this.position._y - (this.pivot._x * t.b + this.pivot._y * t.d),
            this._currentLocalID = this._localID,
            this._parentID = -1)
        }
        ,
        e.prototype.updateTransform = function(t) {
            var e = this.localTransform;
            if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale._x,
            e.b = this._sx * this.scale._x,
            e.c = this._cy * this.scale._y,
            e.d = this._sy * this.scale._y,
            e.tx = this.position._x - (this.pivot._x * e.a + this.pivot._y * e.c),
            e.ty = this.position._y - (this.pivot._x * e.b + this.pivot._y * e.d),
            this._currentLocalID = this._localID,
            this._parentID = -1),
            this._parentID !== t._worldID) {
                var r = t.worldTransform
                  , n = this.worldTransform;
                n.a = e.a * r.a + e.b * r.c,
                n.b = e.a * r.b + e.b * r.d,
                n.c = e.c * r.a + e.d * r.c,
                n.d = e.c * r.b + e.d * r.d,
                n.tx = e.tx * r.a + e.ty * r.c + r.tx,
                n.ty = e.tx * r.b + e.ty * r.d + r.ty,
                this._parentID = t._worldID,
                this._worldID++
            }
        }
        ,
        e.prototype.setFromMatrix = function(t) {
            t.decompose(this),
            this._localID++
        }
        ,
        i(e, [{
            key: "rotation",
            get: function() {
                return this._rotation
            },
            set: function(t) {
                this._rotation !== t && (this._rotation = t,
                this.updateSkew())
            }
        }]),
        e
    }(((n = s) && n.__esModule ? n : {
        default: n
    }).default);
    e.default = a
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }(), o = r(15), s = r(103);
    var a = function(t) {
        function e() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return r.position = new o.Point(0,0),
            r.scale = new o.Point(1,1),
            r.skew = new o.ObservablePoint(r.updateSkew,r,0,0),
            r.pivot = new o.Point(0,0),
            r._rotation = 0,
            r._cx = 1,
            r._sx = 0,
            r._cy = 0,
            r._sy = 1,
            r
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.updateSkew = function() {
            this._cx = Math.cos(this._rotation + this.skew._y),
            this._sx = Math.sin(this._rotation + this.skew._y),
            this._cy = -Math.sin(this._rotation - this.skew._x),
            this._sy = Math.cos(this._rotation - this.skew._x)
        }
        ,
        e.prototype.updateLocalTransform = function() {
            var t = this.localTransform;
            t.a = this._cx * this.scale.x,
            t.b = this._sx * this.scale.x,
            t.c = this._cy * this.scale.y,
            t.d = this._sy * this.scale.y,
            t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c),
            t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)
        }
        ,
        e.prototype.updateTransform = function(t) {
            var e = this.localTransform;
            e.a = this._cx * this.scale.x,
            e.b = this._sx * this.scale.x,
            e.c = this._cy * this.scale.y,
            e.d = this._sy * this.scale.y,
            e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c),
            e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d);
            var r = t.worldTransform
              , n = this.worldTransform;
            n.a = e.a * r.a + e.b * r.c,
            n.b = e.a * r.b + e.b * r.d,
            n.c = e.c * r.a + e.d * r.c,
            n.d = e.c * r.b + e.d * r.d,
            n.tx = e.tx * r.a + e.ty * r.c + r.tx,
            n.ty = e.tx * r.b + e.ty * r.d + r.ty,
            this._worldID++
        }
        ,
        e.prototype.setFromMatrix = function(t) {
            t.decompose(this)
        }
        ,
        i(e, [{
            key: "rotation",
            get: function() {
                return this._rotation
            },
            set: function(t) {
                this._rotation = t,
                this.updateSkew()
            }
        }]),
        e
    }(((n = s) && n.__esModule ? n : {
        default: n
    }).default);
    e.default = a
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
        if (0 === t.indexOf("data:"))
            return "";
        e = e || window.location,
        s || (s = document.createElement("a"));
        s.href = t;
        var r = !(t = o.default.parse(s.href)).port && "" === e.port || t.port === e.port;
        if (t.hostname !== e.hostname || !r || t.protocol !== e.protocol)
            return "anonymous";
        return ""
    }
    ;
    var n, i = r(166), o = (n = i) && n.__esModule ? n : {
        default: n
    };
    var s = void 0
}
, function(t, e, r) {
    "use strict";
    var n = r(315)
      , i = r(316);
    function o() {
        this.protocol = null,
        this.slashes = null,
        this.auth = null,
        this.host = null,
        this.port = null,
        this.hostname = null,
        this.hash = null,
        this.search = null,
        this.query = null,
        this.pathname = null,
        this.path = null,
        this.href = null
    }
    e.parse = m,
    e.resolve = function(t, e) {
        return m(t, !1, !0).resolve(e)
    }
    ,
    e.resolveObject = function(t, e) {
        return t ? m(t, !1, !0).resolveObject(e) : e
    }
    ,
    e.format = function(t) {
        i.isString(t) && (t = m(t));
        return t instanceof o ? t.format() : o.prototype.format.call(t)
    }
    ,
    e.Url = o;
    var s = /^([a-z0-9.+-]+:)/i
      , a = /:[0-9]*$/
      , u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
      , h = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"])
      , l = ["'"].concat(h)
      , c = ["%", "/", "?", ";", "#"].concat(l)
      , f = ["/", "?", "#"]
      , d = /^[+a-z0-9A-Z_-]{0,63}$/
      , p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
      , v = {
        javascript: !0,
        "javascript:": !0
    }
      , y = {
        javascript: !0,
        "javascript:": !0
    }
      , g = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
    }
      , _ = r(317);
    function m(t, e, r) {
        if (t && i.isObject(t) && t instanceof o)
            return t;
        var n = new o;
        return n.parse(t, e, r),
        n
    }
    o.prototype.parse = function(t, e, r) {
        if (!i.isString(t))
            throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
        var o = t.indexOf("?")
          , a = -1 !== o && o < t.indexOf("#") ? "?" : "#"
          , h = t.split(a);
        h[0] = h[0].replace(/\\/g, "/");
        var m = t = h.join(a);
        if (m = m.trim(),
        !r && 1 === t.split("#").length) {
            var b = u.exec(m);
            if (b)
                return this.path = m,
                this.href = m,
                this.pathname = b[1],
                b[2] ? (this.search = b[2],
                this.query = e ? _.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "",
                this.query = {}),
                this
        }
        var x = s.exec(m);
        if (x) {
            var T = (x = x[0]).toLowerCase();
            this.protocol = T,
            m = m.substr(x.length)
        }
        if (r || x || m.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var E = "//" === m.substr(0, 2);
            !E || x && y[x] || (m = m.substr(2),
            this.slashes = !0)
        }
        if (!y[x] && (E || x && !g[x])) {
            for (var w, S, O = -1, M = 0; M < f.length; M++) {
                -1 !== (P = m.indexOf(f[M])) && (-1 === O || P < O) && (O = P)
            }
            -1 !== (S = -1 === O ? m.lastIndexOf("@") : m.lastIndexOf("@", O)) && (w = m.slice(0, S),
            m = m.slice(S + 1),
            this.auth = decodeURIComponent(w)),
            O = -1;
            for (M = 0; M < c.length; M++) {
                var P;
                -1 !== (P = m.indexOf(c[M])) && (-1 === O || P < O) && (O = P)
            }
            -1 === O && (O = m.length),
            this.host = m.slice(0, O),
            m = m.slice(O),
            this.parseHost(),
            this.hostname = this.hostname || "";
            var C = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!C)
                for (var A = this.hostname.split(/\./), R = (M = 0,
                A.length); M < R; M++) {
                    var I = A[M];
                    if (I && !I.match(d)) {
                        for (var D = "", L = 0, N = I.length; L < N; L++)
                            I.charCodeAt(L) > 127 ? D += "x" : D += I[L];
                        if (!D.match(d)) {
                            var k = A.slice(0, M)
                              , B = A.slice(M + 1)
                              , F = I.match(p);
                            F && (k.push(F[1]),
                            B.unshift(F[2])),
                            B.length && (m = "/" + B.join(".") + m),
                            this.hostname = k.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(),
            C || (this.hostname = n.toASCII(this.hostname));
            var j = this.port ? ":" + this.port : ""
              , U = this.hostname || "";
            this.host = U + j,
            this.href += this.host,
            C && (this.hostname = this.hostname.substr(1, this.hostname.length - 2),
            "/" !== m[0] && (m = "/" + m))
        }
        if (!v[T])
            for (M = 0,
            R = l.length; M < R; M++) {
                var X = l[M];
                if (-1 !== m.indexOf(X)) {
                    var H = encodeURIComponent(X);
                    H === X && (H = escape(X)),
                    m = m.split(X).join(H)
                }
            }
        var G = m.indexOf("#");
        -1 !== G && (this.hash = m.substr(G),
        m = m.slice(0, G));
        var W = m.indexOf("?");
        if (-1 !== W ? (this.search = m.substr(W),
        this.query = m.substr(W + 1),
        e && (this.query = _.parse(this.query)),
        m = m.slice(0, W)) : e && (this.search = "",
        this.query = {}),
        m && (this.pathname = m),
        g[T] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search) {
            j = this.pathname || "";
            var Y = this.search || "";
            this.path = j + Y
        }
        return this.href = this.format(),
        this
    }
    ,
    o.prototype.format = function() {
        var t = this.auth || "";
        t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"),
        t += "@");
        var e = this.protocol || ""
          , r = this.pathname || ""
          , n = this.hash || ""
          , o = !1
          , s = "";
        this.host ? o = t + this.host : this.hostname && (o = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"),
        this.port && (o += ":" + this.port)),
        this.query && i.isObject(this.query) && Object.keys(this.query).length && (s = _.stringify(this.query));
        var a = this.search || s && "?" + s || "";
        return e && ":" !== e.substr(-1) && (e += ":"),
        this.slashes || (!e || g[e]) && !1 !== o ? (o = "//" + (o || ""),
        r && "/" !== r.charAt(0) && (r = "/" + r)) : o || (o = ""),
        n && "#" !== n.charAt(0) && (n = "#" + n),
        a && "?" !== a.charAt(0) && (a = "?" + a),
        e + o + (r = r.replace(/[?#]/g, (function(t) {
            return encodeURIComponent(t)
        }
        ))) + (a = a.replace("#", "%23")) + n
    }
    ,
    o.prototype.resolve = function(t) {
        return this.resolveObject(m(t, !1, !0)).format()
    }
    ,
    o.prototype.resolveObject = function(t) {
        if (i.isString(t)) {
            var e = new o;
            e.parse(t, !1, !0),
            t = e
        }
        for (var r = new o, n = Object.keys(this), s = 0; s < n.length; s++) {
            var a = n[s];
            r[a] = this[a]
        }
        if (r.hash = t.hash,
        "" === t.href)
            return r.href = r.format(),
            r;
        if (t.slashes && !t.protocol) {
            for (var u = Object.keys(t), h = 0; h < u.length; h++) {
                var l = u[h];
                "protocol" !== l && (r[l] = t[l])
            }
            return g[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"),
            r.href = r.format(),
            r
        }
        if (t.protocol && t.protocol !== r.protocol) {
            if (!g[t.protocol]) {
                for (var c = Object.keys(t), f = 0; f < c.length; f++) {
                    var d = c[f];
                    r[d] = t[d]
                }
                return r.href = r.format(),
                r
            }
            if (r.protocol = t.protocol,
            t.host || y[t.protocol])
                r.pathname = t.pathname;
            else {
                for (var p = (t.pathname || "").split("/"); p.length && !(t.host = p.shift()); )
                    ;
                t.host || (t.host = ""),
                t.hostname || (t.hostname = ""),
                "" !== p[0] && p.unshift(""),
                p.length < 2 && p.unshift(""),
                r.pathname = p.join("/")
            }
            if (r.search = t.search,
            r.query = t.query,
            r.host = t.host || "",
            r.auth = t.auth,
            r.hostname = t.hostname || t.host,
            r.port = t.port,
            r.pathname || r.search) {
                var v = r.pathname || ""
                  , _ = r.search || "";
                r.path = v + _
            }
            return r.slashes = r.slashes || t.slashes,
            r.href = r.format(),
            r
        }
        var m = r.pathname && "/" === r.pathname.charAt(0)
          , b = t.host || t.pathname && "/" === t.pathname.charAt(0)
          , x = b || m || r.host && t.pathname
          , T = x
          , E = r.pathname && r.pathname.split("/") || []
          , w = (p = t.pathname && t.pathname.split("/") || [],
        r.protocol && !g[r.protocol]);
        if (w && (r.hostname = "",
        r.port = null,
        r.host && ("" === E[0] ? E[0] = r.host : E.unshift(r.host)),
        r.host = "",
        t.protocol && (t.hostname = null,
        t.port = null,
        t.host && ("" === p[0] ? p[0] = t.host : p.unshift(t.host)),
        t.host = null),
        x = x && ("" === p[0] || "" === E[0])),
        b)
            r.host = t.host || "" === t.host ? t.host : r.host,
            r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname,
            r.search = t.search,
            r.query = t.query,
            E = p;
        else if (p.length)
            E || (E = []),
            E.pop(),
            E = E.concat(p),
            r.search = t.search,
            r.query = t.query;
        else if (!i.isNullOrUndefined(t.search)) {
            if (w)
                r.hostname = r.host = E.shift(),
                (C = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = C.shift(),
                r.host = r.hostname = C.shift());
            return r.search = t.search,
            r.query = t.query,
            i.isNull(r.pathname) && i.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
            r.href = r.format(),
            r
        }
        if (!E.length)
            return r.pathname = null,
            r.search ? r.path = "/" + r.search : r.path = null,
            r.href = r.format(),
            r;
        for (var S = E.slice(-1)[0], O = (r.host || t.host || E.length > 1) && ("." === S || ".." === S) || "" === S, M = 0, P = E.length; P >= 0; P--)
            "." === (S = E[P]) ? E.splice(P, 1) : ".." === S ? (E.splice(P, 1),
            M++) : M && (E.splice(P, 1),
            M--);
        if (!x && !T)
            for (; M--; M)
                E.unshift("..");
        !x || "" === E[0] || E[0] && "/" === E[0].charAt(0) || E.unshift(""),
        O && "/" !== E.join("/").substr(-1) && E.push("");
        var C, A = "" === E[0] || E[0] && "/" === E[0].charAt(0);
        w && (r.hostname = r.host = A ? "" : E.length ? E.shift() : "",
        (C = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = C.shift(),
        r.host = r.hostname = C.shift()));
        return (x = x || r.host && E.length) && !A && E.unshift(""),
        E.length ? r.pathname = E.join("/") : (r.pathname = null,
        r.path = null),
        i.isNull(r.pathname) && i.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
        r.auth = t.auth || r.auth,
        r.slashes = r.slashes || t.slashes,
        r.href = r.format(),
        r
    }
    ,
    o.prototype.parseHost = function() {
        var t = this.host
          , e = a.exec(t);
        e && (":" !== (e = e[0]) && (this.port = e.substr(1)),
        t = t.substr(0, t.length - e.length)),
        t && (this.hostname = t)
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = h(r(44))
      , o = r(6)
      , s = r(107)
      , a = r(4)
      , u = h(r(165));
    function h(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function l(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function c(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    var f = function(t) {
        function e(r, n) {
            var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (l(this, e),
            !r)
                throw new Error("No video source element specified.");
            (r.readyState === r.HAVE_ENOUGH_DATA || r.readyState === r.HAVE_FUTURE_DATA) && r.width && r.height && (r.complete = !0);
            var o = c(this, t.call(this, r, n));
            return o.width = r.videoWidth,
            o.height = r.videoHeight,
            o._autoUpdate = !0,
            o._isAutoUpdating = !1,
            o.autoPlay = i,
            o.update = o.update.bind(o),
            o._onCanPlay = o._onCanPlay.bind(o),
            r.addEventListener("play", o._onPlayStart.bind(o)),
            r.addEventListener("pause", o._onPlayStop.bind(o)),
            o.hasLoaded = !1,
            o.__loaded = !1,
            o._isSourceReady() ? o._onCanPlay() : (r.addEventListener("canplay", o._onCanPlay),
            r.addEventListener("canplaythrough", o._onCanPlay)),
            o
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype._isSourcePlaying = function() {
            var t = this.source;
            return t.currentTime > 0 && !1 === t.paused && !1 === t.ended && t.readyState > 2
        }
        ,
        e.prototype._isSourceReady = function() {
            return 3 === this.source.readyState || 4 === this.source.readyState
        }
        ,
        e.prototype._onPlayStart = function() {
            this.hasLoaded || this._onCanPlay(),
            !this._isAutoUpdating && this.autoUpdate && (s.shared.add(this.update, this, a.UPDATE_PRIORITY.HIGH),
            this._isAutoUpdating = !0)
        }
        ,
        e.prototype._onPlayStop = function() {
            this._isAutoUpdating && (s.shared.remove(this.update, this),
            this._isAutoUpdating = !1)
        }
        ,
        e.prototype._onCanPlay = function() {
            this.hasLoaded = !0,
            this.source && (this.source.removeEventListener("canplay", this._onCanPlay),
            this.source.removeEventListener("canplaythrough", this._onCanPlay),
            this.width = this.source.videoWidth,
            this.height = this.source.videoHeight,
            this.__loaded || (this.__loaded = !0,
            this.emit("loaded", this)),
            this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.source.play())
        }
        ,
        e.prototype.destroy = function() {
            this._isAutoUpdating && s.shared.remove(this.update, this),
            this.source && this.source._pixiId && (i.default.removeFromCache(this.source._pixiId),
            delete this.source._pixiId,
            this.source.pause(),
            this.source.src = "",
            this.source.load()),
            t.prototype.destroy.call(this)
        }
        ,
        e.fromVideo = function(t, r, n) {
            t._pixiId || (t._pixiId = "video_" + (0,
            o.uid)());
            var s = o.BaseTextureCache[t._pixiId];
            return s || (s = new e(t,r,n),
            i.default.addToCache(s, t._pixiId)),
            s
        }
        ,
        e.fromUrl = function(t, r, n, i) {
            var o = document.createElement("video");
            o.setAttribute("webkit-playsinline", ""),
            o.setAttribute("playsinline", "");
            var s = Array.isArray(t) ? t[0].src || t[0] : t.src || t;
            if (void 0 === n && 0 !== s.indexOf("data:") ? o.crossOrigin = (0,
            u.default)(s) : n && (o.crossOrigin = "string" == typeof n ? n : "anonymous"),
            Array.isArray(t))
                for (var a = 0; a < t.length; ++a)
                    o.appendChild(d(t[a].src || t[a], t[a].mime));
            else
                o.appendChild(d(s, t.mime));
            return o.load(),
            e.fromVideo(o, r, i)
        }
        ,
        n(e, [{
            key: "autoUpdate",
            get: function() {
                return this._autoUpdate
            },
            set: function(t) {
                t !== this._autoUpdate && (this._autoUpdate = t,
                !this._autoUpdate && this._isAutoUpdating ? (s.shared.remove(this.update, this),
                this._isAutoUpdating = !1) : this._autoUpdate && !this._isAutoUpdating && (s.shared.add(this.update, this, a.UPDATE_PRIORITY.HIGH),
                this._isAutoUpdating = !0))
            }
        }]),
        e
    }(i.default);
    function d(t, e) {
        if (!e) {
            var r = t.split("?").shift().toLowerCase();
            e = "video/" + r.substr(r.lastIndexOf(".") + 1)
        }
        var n = document.createElement("source");
        return n.src = t,
        n.type = e,
        n
    }
    e.default = f,
    f.fromUrls = f.fromUrl
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(152), o = (n = i) && n.__esModule ? n : {
        default: n
    };
    var s = function() {
        function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.x0 = 0,
            this.y0 = 0,
            this.x1 = 1,
            this.y1 = 0,
            this.x2 = 1,
            this.y2 = 1,
            this.x3 = 0,
            this.y3 = 1,
            this.uvsUint32 = new Uint32Array(4)
        }
        return t.prototype.set = function(t, e, r) {
            var n = e.width
              , i = e.height;
            if (r) {
                var s = t.width / 2 / n
                  , a = t.height / 2 / i
                  , u = t.x / n + s
                  , h = t.y / i + a;
                r = o.default.add(r, o.default.NW),
                this.x0 = u + s * o.default.uX(r),
                this.y0 = h + a * o.default.uY(r),
                r = o.default.add(r, 2),
                this.x1 = u + s * o.default.uX(r),
                this.y1 = h + a * o.default.uY(r),
                r = o.default.add(r, 2),
                this.x2 = u + s * o.default.uX(r),
                this.y2 = h + a * o.default.uY(r),
                r = o.default.add(r, 2),
                this.x3 = u + s * o.default.uX(r),
                this.y3 = h + a * o.default.uY(r)
            } else
                this.x0 = t.x / n,
                this.y0 = t.y / i,
                this.x1 = (t.x + t.width) / n,
                this.y1 = t.y / i,
                this.x2 = (t.x + t.width) / n,
                this.y2 = (t.y + t.height) / i,
                this.x3 = t.x / n,
                this.y3 = (t.y + t.height) / i;
            this.uvsUint32[0] = (65535 & Math.round(65535 * this.y0)) << 16 | 65535 & Math.round(65535 * this.x0),
            this.uvsUint32[1] = (65535 & Math.round(65535 * this.y1)) << 16 | 65535 & Math.round(65535 * this.x1),
            this.uvsUint32[2] = (65535 & Math.round(65535 * this.y2)) << 16 | 65535 & Math.round(65535 * this.x2),
            this.uvsUint32[3] = (65535 & Math.round(65535 * this.y3)) << 16 | 65535 & Math.round(65535 * this.x3)
        }
        ,
        t
    }();
    e.default = s
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = r(6)
      , o = r(15)
      , s = r(4)
      , a = c(r(12))
      , u = c(r(53))
      , h = c(r(108))
      , l = c(r(36));
    function c(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var f = new o.Matrix
      , d = function(t) {
        function e(r, n, h, l) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var c = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return (0,
            i.sayHello)(r),
            "number" == typeof n && (n = Object.assign({
                width: n,
                height: h || a.default.RENDER_OPTIONS.height
            }, l)),
            n = Object.assign({}, a.default.RENDER_OPTIONS, n),
            c.options = n,
            c.type = s.RENDERER_TYPE.UNKNOWN,
            c.screen = new o.Rectangle(0,0,n.width,n.height),
            c.view = n.view || document.createElement("canvas"),
            c.resolution = n.resolution || a.default.RESOLUTION,
            c.transparent = n.transparent,
            c.autoResize = n.autoResize || !1,
            c.blendModes = null,
            c.preserveDrawingBuffer = n.preserveDrawingBuffer,
            c.clearBeforeRender = n.clearBeforeRender,
            c.roundPixels = n.roundPixels,
            c._backgroundColor = 0,
            c._backgroundColorRgba = [0, 0, 0, 0],
            c._backgroundColorString = "#000000",
            c.backgroundColor = n.backgroundColor || c._backgroundColor,
            c._tempDisplayObjectParent = new u.default,
            c._lastObjectRendered = c._tempDisplayObjectParent,
            c
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.resize = function(t, e) {
            this.screen.width = t,
            this.screen.height = e,
            this.view.width = t * this.resolution,
            this.view.height = e * this.resolution,
            this.autoResize && (this.view.style.width = t + "px",
            this.view.style.height = e + "px")
        }
        ,
        e.prototype.generateTexture = function(t, e, r, n) {
            n = n || t.getLocalBounds();
            var i = h.default.create(0 | n.width, 0 | n.height, e, r);
            return f.tx = -n.x,
            f.ty = -n.y,
            this.render(t, i, !1, f, !!t.parent),
            i
        }
        ,
        e.prototype.destroy = function(t) {
            t && this.view.parentNode && this.view.parentNode.removeChild(this.view),
            this.type = s.RENDERER_TYPE.UNKNOWN,
            this.view = null,
            this.screen = null,
            this.resolution = 0,
            this.transparent = !1,
            this.autoResize = !1,
            this.blendModes = null,
            this.options = null,
            this.preserveDrawingBuffer = !1,
            this.clearBeforeRender = !1,
            this.roundPixels = !1,
            this._backgroundColor = 0,
            this._backgroundColorRgba = null,
            this._backgroundColorString = null,
            this._tempDisplayObjectParent = null,
            this._lastObjectRendered = null
        }
        ,
        n(e, [{
            key: "width",
            get: function() {
                return this.view.width
            }
        }, {
            key: "height",
            get: function() {
                return this.view.height
            }
        }, {
            key: "backgroundColor",
            get: function() {
                return this._backgroundColor
            },
            set: function(t) {
                this._backgroundColor = t,
                this._backgroundColorString = (0,
                i.hex2string)(t),
                (0,
                i.hex2rgb)(t, this._backgroundColorRgba)
            }
        }]),
        e
    }(l.default);
    e.default = d
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = o(r(44))
      , i = o(r(12));
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function s(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    var u = function(t) {
        function e() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100
              , o = arguments[2]
              , u = arguments[3];
            s(this, e);
            var h = a(this, t.call(this, null, o));
            return h.resolution = u || i.default.RESOLUTION,
            h.width = Math.ceil(r),
            h.height = Math.ceil(n),
            h.realWidth = h.width * h.resolution,
            h.realHeight = h.height * h.resolution,
            h.scaleMode = void 0 !== o ? o : i.default.SCALE_MODE,
            h.hasLoaded = !0,
            h._glRenderTargets = {},
            h._canvasRenderTarget = null,
            h.valid = !1,
            h
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.resize = function(t, e) {
            t = Math.ceil(t),
            e = Math.ceil(e),
            t === this.width && e === this.height || (this.valid = t > 0 && e > 0,
            this.width = t,
            this.height = e,
            this.realWidth = this.width * this.resolution,
            this.realHeight = this.height * this.resolution,
            this.valid && this.emit("update", this))
        }
        ,
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this, !0),
            this.renderer = null
        }
        ,
        e
    }(n.default);
    e.default = u
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }(), o = r(12), s = (n = o) && n.__esModule ? n : {
        default: n
    };
    var a = function() {
        function t(e, r, n) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.canvas = document.createElement("canvas"),
            this.context = this.canvas.getContext("2d"),
            this.resolution = n || s.default.RESOLUTION,
            this.resize(e, r)
        }
        return t.prototype.clear = function() {
            this.context.setTransform(1, 0, 0, 1, 0, 0),
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }
        ,
        t.prototype.resize = function(t, e) {
            this.canvas.width = t * this.resolution,
            this.canvas.height = e * this.resolution
        }
        ,
        t.prototype.destroy = function() {
            this.context = null,
            this.canvas = null
        }
        ,
        i(t, [{
            key: "width",
            get: function() {
                return this.canvas.width
            },
            set: function(t) {
                this.canvas.width = t
            }
        }, {
            key: "height",
            get: function() {
                return this.canvas.height
            },
            set: function(t) {
                this.canvas.height = t
            }
        }]),
        t
    }();
    e.default = a
}
, function(t, e, r) {
    "use strict";
    function n(t) {
        var e = document.createElement("canvas");
        e.width = 6,
        e.height = 1;
        var r = e.getContext("2d");
        return r.fillStyle = t,
        r.fillRect(0, 0, 6, 1),
        e
    }
    e.__esModule = !0,
    e.default = function() {
        if ("undefined" == typeof document)
            return !1;
        var t = n("#ff00ff")
          , e = n("#ffff00")
          , r = document.createElement("canvas");
        r.width = 6,
        r.height = 1;
        var i = r.getContext("2d");
        i.globalCompositeOperation = "multiply",
        i.drawImage(t, 0, 0),
        i.drawImage(e, 2, 0);
        var o = i.getImageData(2, 0, 1, 1);
        if (!o)
            return !1;
        var s = o.data;
        return 255 === s[0] && 0 === s[1] && 0 === s[2]
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = s(r(174))
      , i = r(15)
      , o = (r(24),
    s(r(175)));
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var a = function(t) {
        function e(r) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = new i.Matrix
              , o = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n\n    original *= (masky.r * masky.a * alpha * clip);\n\n    gl_FragColor = original;\n}\n"));
            return r.renderable = !1,
            o.maskSprite = r,
            o.maskMatrix = n,
            o
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.apply = function(t, e, r, n) {
            var i = this.maskSprite
              , s = this.maskSprite.texture;
            s.valid && (s.transform || (s.transform = new o.default(s,0)),
            s.transform.update(),
            this.uniforms.mask = s,
            this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, i).prepend(s.transform.mapCoord),
            this.uniforms.alpha = i.worldAlpha,
            this.uniforms.maskClamp = s.transform.uClampFrame,
            t.applyFilter(this, e, r, n))
        }
        ,
        e
    }(n.default);
    e.default = a
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = u(r(327))
      , o = r(6)
      , s = r(4)
      , a = u(r(12));
    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var h = {}
      , l = function() {
        function t(e, r, n) {
            for (var u in function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.vertexSrc = e || t.defaultVertexSrc,
            this.fragmentSrc = r || t.defaultFragmentSrc,
            this._blendMode = s.BLEND_MODES.NORMAL,
            this.uniformData = n || (0,
            i.default)(this.vertexSrc, this.fragmentSrc, "projectionMatrix|uSampler"),
            this.uniforms = {},
            this.uniformData)
                this.uniforms[u] = this.uniformData[u].value,
                this.uniformData[u].type && (this.uniformData[u].type = this.uniformData[u].type.toLowerCase());
            this.glShaders = {},
            h[this.vertexSrc + this.fragmentSrc] || (h[this.vertexSrc + this.fragmentSrc] = (0,
            o.uid)()),
            this.glShaderKey = h[this.vertexSrc + this.fragmentSrc],
            this.padding = 4,
            this.resolution = a.default.FILTER_RESOLUTION,
            this.enabled = !0,
            this.autoFit = !0
        }
        return t.prototype.apply = function(t, e, r, n, i) {
            t.applyFilter(this, e, r, n)
        }
        ,
        n(t, [{
            key: "blendMode",
            get: function() {
                return this._blendMode
            },
            set: function(t) {
                this._blendMode = t
            }
        }], [{
            key: "defaultVertexSrc",
            get: function() {
                return ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 projectionMatrix;", "uniform mat3 filterMatrix;", "varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;", "   vTextureCoord = aTextureCoord ;", "}"].join("\n")
            }
        }, {
            key: "defaultFragmentSrc",
            get: function() {
                return ["varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "uniform sampler2D uSampler;", "uniform sampler2D filterSampler;", "void main(void){", "   vec4 masky = texture2D(filterSampler, vFilterCoord);", "   vec4 sample = texture2D(uSampler, vTextureCoord);", "   vec4 color;", "   if(mod(vFilterCoord.x, 1.0) > 0.5)", "   {", "     color = vec4(1.0, 0.0, 0.0, 1.0);", "   }", "   else", "   {", "     color = vec4(0.0, 1.0, 0.0, 1.0);", "   }", "   gl_FragColor = mix(sample, masky, 0.5);", "   gl_FragColor *= sample.a;", "}"].join("\n")
            }
        }]),
        t
    }();
    e.default = l
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }(), o = r(98), s = (n = o) && n.__esModule ? n : {
        default: n
    };
    var a = new s.default
      , u = function() {
        function t(e, r) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this._texture = e,
            this.mapCoord = new s.default,
            this.uClampFrame = new Float32Array(4),
            this.uClampOffset = new Float32Array(2),
            this._lastTextureID = -1,
            this.clampOffset = 0,
            this.clampMargin = void 0 === r ? .5 : r
        }
        return t.prototype.multiplyUvs = function(t, e) {
            void 0 === e && (e = t);
            for (var r = this.mapCoord, n = 0; n < t.length; n += 2) {
                var i = t[n]
                  , o = t[n + 1];
                e[n] = i * r.a + o * r.c + r.tx,
                e[n + 1] = i * r.b + o * r.d + r.ty
            }
            return e
        }
        ,
        t.prototype.update = function(t) {
            var e = this._texture;
            if (!e || !e.valid)
                return !1;
            if (!t && this._lastTextureID === e._updateID)
                return !1;
            this._lastTextureID = e._updateID;
            var r = e._uvs;
            this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
            var n = e.orig
              , i = e.trim;
            i && (a.set(n.width / i.width, 0, 0, n.height / i.height, -i.x / i.width, -i.y / i.height),
            this.mapCoord.append(a));
            var o = e.baseTexture
              , s = this.uClampFrame
              , u = this.clampMargin / o.resolution
              , h = this.clampOffset;
            return s[0] = (e._frame.x + u + h) / o.width,
            s[1] = (e._frame.y + u + h) / o.height,
            s[2] = (e._frame.x + e._frame.width - u + h) / o.width,
            s[3] = (e._frame.y + e._frame.height - u + h) / o.height,
            this.uClampOffset[0] = h / o.realWidth,
            this.uClampOffset[1] = h / o.realHeight,
            !0
        }
        ,
        i(t, [{
            key: "texture",
            get: function() {
                return this._texture
            },
            set: function(t) {
                this._texture = t,
                this._lastTextureID = -1
            }
        }]),
        t
    }();
    e.default = u
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = o(r(19))
      , i = o(r(109));
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var s = function() {
        function t(e, r) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.gl = e,
            this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]),
            this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
            this.interleaved = new Float32Array(16);
            for (var o = 0; o < 4; o++)
                this.interleaved[4 * o] = this.vertices[2 * o],
                this.interleaved[4 * o + 1] = this.vertices[2 * o + 1],
                this.interleaved[4 * o + 2] = this.uvs[2 * o],
                this.interleaved[4 * o + 3] = this.uvs[2 * o + 1];
            this.indices = (0,
            i.default)(1),
            this.vertexBuffer = n.default.GLBuffer.createVertexBuffer(e, this.interleaved, e.STATIC_DRAW),
            this.indexBuffer = n.default.GLBuffer.createIndexBuffer(e, this.indices, e.STATIC_DRAW),
            this.vao = new n.default.VertexArrayObject(e,r)
        }
        return t.prototype.initVao = function(t) {
            this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, t.attributes.aVertexPosition, this.gl.FLOAT, !1, 16, 0).addAttribute(this.vertexBuffer, t.attributes.aTextureCoord, this.gl.FLOAT, !1, 16, 8)
        }
        ,
        t.prototype.map = function(t, e) {
            var r = 0
              , n = 0;
            return this.uvs[0] = r,
            this.uvs[1] = n,
            this.uvs[2] = r + e.width / t.width,
            this.uvs[3] = n,
            this.uvs[4] = r + e.width / t.width,
            this.uvs[5] = n + e.height / t.height,
            this.uvs[6] = r,
            this.uvs[7] = n + e.height / t.height,
            r = e.x,
            n = e.y,
            this.vertices[0] = r,
            this.vertices[1] = n,
            this.vertices[2] = r + e.width,
            this.vertices[3] = n,
            this.vertices[4] = r + e.width,
            this.vertices[5] = n + e.height,
            this.vertices[6] = r,
            this.vertices[7] = n + e.height,
            this
        }
        ,
        t.prototype.upload = function() {
            for (var t = 0; t < 4; t++)
                this.interleaved[4 * t] = this.vertices[2 * t],
                this.interleaved[4 * t + 1] = this.vertices[2 * t + 1],
                this.interleaved[4 * t + 2] = this.uvs[2 * t],
                this.interleaved[4 * t + 3] = this.uvs[2 * t + 1];
            return this.vertexBuffer.upload(this.interleaved),
            this
        }
        ,
        t.prototype.destroy = function() {
            var t = this.gl;
            t.deleteBuffer(this.vertexBuffer),
            t.deleteBuffer(this.indexBuffer)
        }
        ,
        t
    }();
    e.default = s
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = r(4)
      , o = r(6);
    var s = {
        align: "left",
        breakWords: !1,
        dropShadow: !1,
        dropShadowAlpha: 1,
        dropShadowAngle: Math.PI / 6,
        dropShadowBlur: 0,
        dropShadowColor: "black",
        dropShadowDistance: 5,
        fill: "black",
        fillGradientType: i.TEXT_GRADIENT.LINEAR_VERTICAL,
        fillGradientStops: [],
        fontFamily: "Arial",
        fontSize: 26,
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 0,
        lineJoin: "miter",
        miterLimit: 10,
        padding: 0,
        stroke: "black",
        strokeThickness: 0,
        textBaseline: "alphabetic",
        trim: !1,
        whiteSpace: "pre",
        wordWrap: !1,
        wordWrapWidth: 100,
        leading: 0
    }
      , a = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"]
      , u = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.styleID = 0,
            this.reset(),
            c(this, e, e)
        }
        return t.prototype.clone = function() {
            var e = {};
            return c(e, this, s),
            new t(e)
        }
        ,
        t.prototype.reset = function() {
            c(this, s, s)
        }
        ,
        t.prototype.toFontString = function() {
            var t = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize
              , e = this.fontFamily;
            Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
            for (var r = e.length - 1; r >= 0; r--) {
                var n = e[r].trim();
                !/([\"\'])[^\'\"]+\1/.test(n) && a.indexOf(n) < 0 && (n = '"' + n + '"'),
                e[r] = n
            }
            return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t + " " + e.join(",")
        }
        ,
        n(t, [{
            key: "align",
            get: function() {
                return this._align
            },
            set: function(t) {
                this._align !== t && (this._align = t,
                this.styleID++)
            }
        }, {
            key: "breakWords",
            get: function() {
                return this._breakWords
            },
            set: function(t) {
                this._breakWords !== t && (this._breakWords = t,
                this.styleID++)
            }
        }, {
            key: "dropShadow",
            get: function() {
                return this._dropShadow
            },
            set: function(t) {
                this._dropShadow !== t && (this._dropShadow = t,
                this.styleID++)
            }
        }, {
            key: "dropShadowAlpha",
            get: function() {
                return this._dropShadowAlpha
            },
            set: function(t) {
                this._dropShadowAlpha !== t && (this._dropShadowAlpha = t,
                this.styleID++)
            }
        }, {
            key: "dropShadowAngle",
            get: function() {
                return this._dropShadowAngle
            },
            set: function(t) {
                this._dropShadowAngle !== t && (this._dropShadowAngle = t,
                this.styleID++)
            }
        }, {
            key: "dropShadowBlur",
            get: function() {
                return this._dropShadowBlur
            },
            set: function(t) {
                this._dropShadowBlur !== t && (this._dropShadowBlur = t,
                this.styleID++)
            }
        }, {
            key: "dropShadowColor",
            get: function() {
                return this._dropShadowColor
            },
            set: function(t) {
                var e = l(t);
                this._dropShadowColor !== e && (this._dropShadowColor = e,
                this.styleID++)
            }
        }, {
            key: "dropShadowDistance",
            get: function() {
                return this._dropShadowDistance
            },
            set: function(t) {
                this._dropShadowDistance !== t && (this._dropShadowDistance = t,
                this.styleID++)
            }
        }, {
            key: "fill",
            get: function() {
                return this._fill
            },
            set: function(t) {
                var e = l(t);
                this._fill !== e && (this._fill = e,
                this.styleID++)
            }
        }, {
            key: "fillGradientType",
            get: function() {
                return this._fillGradientType
            },
            set: function(t) {
                this._fillGradientType !== t && (this._fillGradientType = t,
                this.styleID++)
            }
        }, {
            key: "fillGradientStops",
            get: function() {
                return this._fillGradientStops
            },
            set: function(t) {
                (function(t, e) {
                    if (!Array.isArray(t) || !Array.isArray(e))
                        return !1;
                    if (t.length !== e.length)
                        return !1;
                    for (var r = 0; r < t.length; ++r)
                        if (t[r] !== e[r])
                            return !1;
                    return !0
                }
                )(this._fillGradientStops, t) || (this._fillGradientStops = t,
                this.styleID++)
            }
        }, {
            key: "fontFamily",
            get: function() {
                return this._fontFamily
            },
            set: function(t) {
                this.fontFamily !== t && (this._fontFamily = t,
                this.styleID++)
            }
        }, {
            key: "fontSize",
            get: function() {
                return this._fontSize
            },
            set: function(t) {
                this._fontSize !== t && (this._fontSize = t,
                this.styleID++)
            }
        }, {
            key: "fontStyle",
            get: function() {
                return this._fontStyle
            },
            set: function(t) {
                this._fontStyle !== t && (this._fontStyle = t,
                this.styleID++)
            }
        }, {
            key: "fontVariant",
            get: function() {
                return this._fontVariant
            },
            set: function(t) {
                this._fontVariant !== t && (this._fontVariant = t,
                this.styleID++)
            }
        }, {
            key: "fontWeight",
            get: function() {
                return this._fontWeight
            },
            set: function(t) {
                this._fontWeight !== t && (this._fontWeight = t,
                this.styleID++)
            }
        }, {
            key: "letterSpacing",
            get: function() {
                return this._letterSpacing
            },
            set: function(t) {
                this._letterSpacing !== t && (this._letterSpacing = t,
                this.styleID++)
            }
        }, {
            key: "lineHeight",
            get: function() {
                return this._lineHeight
            },
            set: function(t) {
                this._lineHeight !== t && (this._lineHeight = t,
                this.styleID++)
            }
        }, {
            key: "leading",
            get: function() {
                return this._leading
            },
            set: function(t) {
                this._leading !== t && (this._leading = t,
                this.styleID++)
            }
        }, {
            key: "lineJoin",
            get: function() {
                return this._lineJoin
            },
            set: function(t) {
                this._lineJoin !== t && (this._lineJoin = t,
                this.styleID++)
            }
        }, {
            key: "miterLimit",
            get: function() {
                return this._miterLimit
            },
            set: function(t) {
                this._miterLimit !== t && (this._miterLimit = t,
                this.styleID++)
            }
        }, {
            key: "padding",
            get: function() {
                return this._padding
            },
            set: function(t) {
                this._padding !== t && (this._padding = t,
                this.styleID++)
            }
        }, {
            key: "stroke",
            get: function() {
                return this._stroke
            },
            set: function(t) {
                var e = l(t);
                this._stroke !== e && (this._stroke = e,
                this.styleID++)
            }
        }, {
            key: "strokeThickness",
            get: function() {
                return this._strokeThickness
            },
            set: function(t) {
                this._strokeThickness !== t && (this._strokeThickness = t,
                this.styleID++)
            }
        }, {
            key: "textBaseline",
            get: function() {
                return this._textBaseline
            },
            set: function(t) {
                this._textBaseline !== t && (this._textBaseline = t,
                this.styleID++)
            }
        }, {
            key: "trim",
            get: function() {
                return this._trim
            },
            set: function(t) {
                this._trim !== t && (this._trim = t,
                this.styleID++)
            }
        }, {
            key: "whiteSpace",
            get: function() {
                return this._whiteSpace
            },
            set: function(t) {
                this._whiteSpace !== t && (this._whiteSpace = t,
                this.styleID++)
            }
        }, {
            key: "wordWrap",
            get: function() {
                return this._wordWrap
            },
            set: function(t) {
                this._wordWrap !== t && (this._wordWrap = t,
                this.styleID++)
            }
        }, {
            key: "wordWrapWidth",
            get: function() {
                return this._wordWrapWidth
            },
            set: function(t) {
                this._wordWrapWidth !== t && (this._wordWrapWidth = t,
                this.styleID++)
            }
        }]),
        t
    }();
    function h(t) {
        return "number" == typeof t ? (0,
        o.hex2string)(t) : ("string" == typeof t && 0 === t.indexOf("0x") && (t = t.replace("0x", "#")),
        t)
    }
    function l(t) {
        if (Array.isArray(t)) {
            for (var e = 0; e < t.length; ++e)
                t[e] = h(t[e]);
            return t
        }
        return h(t)
    }
    function c(t, e, r) {
        for (var n in r)
            Array.isArray(e[n]) ? t[n] = e[n].slice() : t[n] = e[n]
    }
    e.default = u
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(e, r, n, i, o, s, a, u, h) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.text = e,
            this.style = r,
            this.width = n,
            this.height = i,
            this.lines = o,
            this.lineWidths = s,
            this.lineHeight = a,
            this.maxLineWidth = u,
            this.fontProperties = h
        }
        return t.measureText = function(e, r, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t._canvas;
            n = null == n ? r.wordWrap : n;
            var o = r.toFontString()
              , s = t.measureFont(o)
              , a = i.getContext("2d");
            a.font = o;
            for (var u = n ? t.wordWrap(e, r, i) : e, h = u.split(/(?:\r\n|\r|\n)/), l = new Array(h.length), c = 0, f = 0; f < h.length; f++) {
                var d = a.measureText(h[f]).width + (h[f].length - 1) * r.letterSpacing;
                l[f] = d,
                c = Math.max(c, d)
            }
            var p = c + r.strokeThickness;
            r.dropShadow && (p += r.dropShadowDistance);
            var v = r.lineHeight || s.fontSize + r.strokeThickness
              , y = Math.max(v, s.fontSize + r.strokeThickness) + (h.length - 1) * (v + r.leading);
            return r.dropShadow && (y += r.dropShadowDistance),
            new t(e,r,p,y,h,l,v + r.leading,c,s)
        }
        ,
        t.wordWrap = function(e, r) {
            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t._canvas, i = n.getContext("2d"), o = 0, s = "", a = "", u = {}, h = r.letterSpacing, l = r.whiteSpace, c = t.collapseSpaces(l), f = t.collapseNewlines(l), d = !c, p = r.wordWrapWidth + h, v = t.tokenize(e), y = 0; y < v.length; y++) {
                var g = v[y];
                if (t.isNewline(g)) {
                    if (!f) {
                        a += t.addLine(s),
                        d = !c,
                        s = "",
                        o = 0;
                        continue
                    }
                    g = " "
                }
                if (c) {
                    var _ = t.isBreakingSpace(g)
                      , m = t.isBreakingSpace(s[s.length - 1]);
                    if (_ && m)
                        continue
                }
                var b = t.getFromCache(g, h, u, i);
                if (b > p)
                    if ("" !== s && (a += t.addLine(s),
                    s = "",
                    o = 0),
                    t.canBreakWords(g, r.breakWords))
                        for (var x = g.split(""), T = 0; T < x.length; T++) {
                            for (var E = x[T], w = 1; x[T + w]; ) {
                                var S = x[T + w]
                                  , O = E[E.length - 1];
                                if (t.canBreakChars(O, S, g, T, r.breakWords))
                                    break;
                                E += S,
                                w++
                            }
                            T += E.length - 1;
                            var M = t.getFromCache(E, h, u, i);
                            M + o > p && (a += t.addLine(s),
                            d = !1,
                            s = "",
                            o = 0),
                            s += E,
                            o += M
                        }
                    else {
                        s.length > 0 && (a += t.addLine(s),
                        s = "",
                        o = 0);
                        var P = y === v.length - 1;
                        a += t.addLine(g, !P),
                        d = !1,
                        s = "",
                        o = 0
                    }
                else
                    b + o > p && (d = !1,
                    a += t.addLine(s),
                    s = "",
                    o = 0),
                    (s.length > 0 || !t.isBreakingSpace(g) || d) && (s += g,
                    o += b)
            }
            return a += t.addLine(s, !1)
        }
        ,
        t.addLine = function(e) {
            var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return e = t.trimRight(e),
            e = r ? e + "\n" : e
        }
        ,
        t.getFromCache = function(t, e, r, n) {
            var i = r[t];
            if (void 0 === i) {
                var o = t.length * e;
                i = n.measureText(t).width + o,
                r[t] = i
            }
            return i
        }
        ,
        t.collapseSpaces = function(t) {
            return "normal" === t || "pre-line" === t
        }
        ,
        t.collapseNewlines = function(t) {
            return "normal" === t
        }
        ,
        t.trimRight = function(e) {
            if ("string" != typeof e)
                return "";
            for (var r = e.length - 1; r >= 0; r--) {
                var n = e[r];
                if (!t.isBreakingSpace(n))
                    break;
                e = e.slice(0, -1)
            }
            return e
        }
        ,
        t.isNewline = function(e) {
            return "string" == typeof e && t._newlines.indexOf(e.charCodeAt(0)) >= 0
        }
        ,
        t.isBreakingSpace = function(e) {
            return "string" == typeof e && t._breakingSpaces.indexOf(e.charCodeAt(0)) >= 0
        }
        ,
        t.tokenize = function(e) {
            var r = []
              , n = "";
            if ("string" != typeof e)
                return r;
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                t.isBreakingSpace(o) || t.isNewline(o) ? ("" !== n && (r.push(n),
                n = ""),
                r.push(o)) : n += o
            }
            return "" !== n && r.push(n),
            r
        }
        ,
        t.canBreakWords = function(t, e) {
            return e
        }
        ,
        t.canBreakChars = function(t, e, r, n, i) {
            return !0
        }
        ,
        t.measureFont = function(e) {
            if (t._fonts[e])
                return t._fonts[e];
            var r = {}
              , n = t._canvas
              , i = t._context;
            i.font = e;
            var o = t.METRICS_STRING + t.BASELINE_SYMBOL
              , s = Math.ceil(i.measureText(o).width)
              , a = Math.ceil(i.measureText(t.BASELINE_SYMBOL).width)
              , u = 2 * a;
            a = a * t.BASELINE_MULTIPLIER | 0,
            n.width = s,
            n.height = u,
            i.fillStyle = "#f00",
            i.fillRect(0, 0, s, u),
            i.font = e,
            i.textBaseline = "alphabetic",
            i.fillStyle = "#000",
            i.fillText(o, 0, a);
            var h = i.getImageData(0, 0, s, u).data
              , l = h.length
              , c = 4 * s
              , f = 0
              , d = 0
              , p = !1;
            for (f = 0; f < a; ++f) {
                for (var v = 0; v < c; v += 4)
                    if (255 !== h[d + v]) {
                        p = !0;
                        break
                    }
                if (p)
                    break;
                d += c
            }
            for (r.ascent = a - f,
            d = l - c,
            p = !1,
            f = u; f > a; --f) {
                for (var y = 0; y < c; y += 4)
                    if (255 !== h[d + y]) {
                        p = !0;
                        break
                    }
                if (p)
                    break;
                d -= c
            }
            return r.descent = f - a,
            r.fontSize = r.ascent + r.descent,
            t._fonts[e] = r,
            r
        }
        ,
        t.clearMetrics = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            e ? delete t._fonts[e] : t._fonts = {}
        }
        ,
        t
    }();
    e.default = n;
    var i = document.createElement("canvas");
    i.width = i.height = 10,
    n._canvas = i,
    n._context = i.getContext("2d"),
    n._fonts = {},
    n.METRICS_STRING = "|Éq",
    n.BASELINE_SYMBOL = "M",
    n.BASELINE_MULTIPLIER = 1.4,
    n._newlines = [10, 13],
    n._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288]
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(e, r, n, i, o, s, a, u, h) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.lineWidth = e,
            this.lineAlignment = h,
            this.nativeLines = a,
            this.lineColor = r,
            this.lineAlpha = n,
            this._lineTint = r,
            this.fillColor = i,
            this.fillAlpha = o,
            this._fillTint = i,
            this.fill = s,
            this.holes = [],
            this.shape = u,
            this.type = u.type
        }
        return t.prototype.clone = function() {
            return new t(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.nativeLines,this.shape,this.lineAlignment)
        }
        ,
        t.prototype.addHole = function(t) {
            this.holes.push(t)
        }
        ,
        t.prototype.destroy = function() {
            this.shape = null,
            this.holes = null
        }
        ,
        t
    }();
    e.default = n
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = r(181)
      , o = h(r(53))
      , s = r(107)
      , a = h(r(12))
      , u = r(4);
    function h(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var l = function() {
        function t(e, r, n, u, h) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            "number" == typeof e && (e = Object.assign({
                width: e,
                height: r || a.default.RENDER_OPTIONS.height,
                forceCanvas: !!u,
                sharedTicker: !!h
            }, n)),
            this._options = e = Object.assign({
                autoStart: !0,
                sharedTicker: !1,
                forceCanvas: !1,
                sharedLoader: !1
            }, e),
            this.renderer = (0,
            i.autoDetectRenderer)(e),
            this.stage = new o.default,
            this._ticker = null,
            this.ticker = e.sharedTicker ? s.shared : new s.Ticker,
            e.autoStart && this.start()
        }
        return t.prototype.render = function() {
            this.renderer.render(this.stage)
        }
        ,
        t.prototype.stop = function() {
            this._ticker.stop()
        }
        ,
        t.prototype.start = function() {
            this._ticker.start()
        }
        ,
        t.prototype.destroy = function(t, e) {
            if (this._ticker) {
                var r = this._ticker;
                this.ticker = null,
                r.destroy()
            }
            this.stage.destroy(e),
            this.stage = null,
            this.renderer.destroy(t),
            this.renderer = null,
            this._options = null
        }
        ,
        n(t, [{
            key: "ticker",
            set: function(t) {
                this._ticker && this._ticker.remove(this.render, this),
                this._ticker = t,
                t && t.add(this.render, this, u.UPDATE_PRIORITY.LOW)
            },
            get: function() {
                return this._ticker
            }
        }, {
            key: "view",
            get: function() {
                return this.renderer.view
            }
        }, {
            key: "screen",
            get: function() {
                return this.renderer.screen
            }
        }]),
        t
    }();
    e.default = l
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.autoDetectRenderer = function(t, e, r, s) {
        var a = t && t.forceCanvas;
        void 0 !== s && (a = s);
        if (!a && n.isWebGLSupported())
            return new o.default(t,e,r);
        return new i.default(t,e,r)
    }
    ;
    var n = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(6))
      , i = s(r(54))
      , o = s(r(72));
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = {
        accessible: !1,
        accessibleTitle: null,
        accessibleHint: null,
        tabIndex: 0,
        _accessibleActive: !1,
        _accessibleDiv: !1
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.BitmapText = e.TilingSpriteRenderer = e.TilingSprite = e.AnimatedSprite = void 0;
    var n = r(359);
    Object.defineProperty(e, "AnimatedSprite", {
        enumerable: !0,
        get: function() {
            return a(n).default
        }
    });
    var i = r(360);
    Object.defineProperty(e, "TilingSprite", {
        enumerable: !0,
        get: function() {
            return a(i).default
        }
    });
    var o = r(361);
    Object.defineProperty(e, "TilingSpriteRenderer", {
        enumerable: !0,
        get: function() {
            return a(o).default
        }
    });
    var s = r(362);
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "BitmapText", {
        enumerable: !0,
        get: function() {
            return a(s).default
        }
    }),
    r(363),
    r(364),
    r(365)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5))
      , o = u(r(185))
      , s = u(r(186))
      , a = u(r(187));
    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var h = function(t) {
        function e(r, n, a, u) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            u = u || 5;
            var h = (0,
            o.default)(u, !0)
              , l = (0,
            s.default)(u)
              , c = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, h, l));
            return c.resolution = a || i.settings.RESOLUTION,
            c._quality = 0,
            c.quality = n || 4,
            c.strength = r || 8,
            c.firstRun = !0,
            c
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.apply = function(t, e, r, n) {
            if (this.firstRun) {
                var i = t.renderer.gl
                  , u = (0,
                a.default)(i);
                this.vertexSrc = (0,
                o.default)(u, !0),
                this.fragmentSrc = (0,
                s.default)(u),
                this.firstRun = !1
            }
            if (this.uniforms.strength = 1 / r.size.width * (r.size.width / e.size.width),
            this.uniforms.strength *= this.strength,
            this.uniforms.strength /= this.passes,
            1 === this.passes)
                t.applyFilter(this, e, r, n);
            else {
                for (var h = t.getRenderTarget(!0), l = e, c = h, f = 0; f < this.passes - 1; f++) {
                    t.applyFilter(this, l, c, !0);
                    var d = c;
                    c = l,
                    l = d
                }
                t.applyFilter(this, l, r, n),
                t.returnRenderTarget(h)
            }
        }
        ,
        n(e, [{
            key: "blur",
            get: function() {
                return this.strength
            },
            set: function(t) {
                this.padding = 2 * Math.abs(t),
                this.strength = t
            }
        }, {
            key: "quality",
            get: function() {
                return this._quality
            },
            set: function(t) {
                this._quality = t,
                this.passes = t
            }
        }]),
        e
    }(i.Filter);
    e.default = h
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t, e) {
        var r = Math.ceil(t / 2)
          , i = n
          , o = ""
          , s = void 0;
        s = e ? "vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";
        for (var a = 0; a < t; a++) {
            var u = s.replace("%index%", a);
            u = u.replace("%sampleIndex%", a - (r - 1) + ".0"),
            o += u,
            o += "\n"
        }
        return i = (i = i.replace("%blur%", o)).replace("%size%", t)
    }
    ;
    var n = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float strength;", "uniform mat3 projectionMatrix;", "varying vec2 vBlurTexCoords[%size%];", "void main(void)", "{", "gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);", "%blur%", "}"].join("\n")
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t) {
        for (var e = n[t], r = e.length, o = i, s = "", a = void 0, u = 0; u < t; u++) {
            var h = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", u);
            a = u,
            u >= r && (a = t - u - 1),
            h = h.replace("%value%", e[a]),
            s += h,
            s += "\n"
        }
        return o = (o = o.replace("%blur%", s)).replace("%size%", t)
    }
    ;
    var n = {
        5: [.153388, .221461, .250301],
        7: [.071303, .131514, .189879, .214607],
        9: [.028532, .067234, .124009, .179044, .20236],
        11: [.0093, .028002, .065984, .121703, .175713, .198596],
        13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
        15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
    }
      , i = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n")
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t) {
        var e = t.getParameter(t.MAX_VARYING_VECTORS)
          , r = 15;
        for (; r > e; )
            r -= 2;
        return r
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5))
      , o = u(r(185))
      , s = u(r(186))
      , a = u(r(187));
    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var h = function(t) {
        function e(r, n, a, u) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            u = u || 5;
            var h = (0,
            o.default)(u, !1)
              , l = (0,
            s.default)(u)
              , c = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, h, l));
            return c.resolution = a || i.settings.RESOLUTION,
            c._quality = 0,
            c.quality = n || 4,
            c.strength = r || 8,
            c.firstRun = !0,
            c
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.apply = function(t, e, r, n) {
            if (this.firstRun) {
                var i = t.renderer.gl
                  , u = (0,
                a.default)(i);
                this.vertexSrc = (0,
                o.default)(u, !1),
                this.fragmentSrc = (0,
                s.default)(u),
                this.firstRun = !1
            }
            if (this.uniforms.strength = 1 / r.size.height * (r.size.height / e.size.height),
            this.uniforms.strength *= this.strength,
            this.uniforms.strength /= this.passes,
            1 === this.passes)
                t.applyFilter(this, e, r, n);
            else {
                for (var h = t.getRenderTarget(!0), l = e, c = h, f = 0; f < this.passes - 1; f++) {
                    t.applyFilter(this, l, c, !0);
                    var d = c;
                    c = l,
                    l = d
                }
                t.applyFilter(this, l, r, n),
                t.returnRenderTarget(h)
            }
        }
        ,
        n(e, [{
            key: "blur",
            get: function() {
                return this.strength
            },
            set: function(t) {
                this.padding = 2 * Math.abs(t),
                this.strength = t
            }
        }, {
            key: "quality",
            get: function() {
                return this._quality
            },
            set: function(t) {
                this._quality = t,
                this.passes = t
            }
        }]),
        e
    }(i.Filter);
    e.default = h
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5));
    var o = function() {
        function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.global = new i.Point,
            this.target = null,
            this.originalEvent = null,
            this.identifier = null,
            this.isPrimary = !1,
            this.button = 0,
            this.buttons = 0,
            this.width = 0,
            this.height = 0,
            this.tiltX = 0,
            this.tiltY = 0,
            this.pointerType = null,
            this.pressure = 0,
            this.rotationAngle = 0,
            this.twist = 0,
            this.tangentialPressure = 0
        }
        return t.prototype.getLocalPosition = function(t, e, r) {
            return t.worldTransform.applyInverse(r || this.global, e)
        }
        ,
        t.prototype.copyEvent = function(t) {
            t.isPrimary && (this.isPrimary = !0),
            this.button = t.button,
            this.buttons = Number.isInteger(t.buttons) ? t.buttons : t.which,
            this.width = t.width,
            this.height = t.height,
            this.tiltX = t.tiltX,
            this.tiltY = t.tiltY,
            this.pointerType = t.pointerType,
            this.pressure = t.pressure,
            this.rotationAngle = t.rotationAngle,
            this.twist = t.twist || 0,
            this.tangentialPressure = t.tangentialPressure || 0
        }
        ,
        t.prototype.reset = function() {
            this.isPrimary = !1
        }
        ,
        n(t, [{
            key: "pointerId",
            get: function() {
                return this.identifier
            }
        }]),
        t
    }();
    e.default = o
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.stopped = !1,
            this.target = null,
            this.currentTarget = null,
            this.type = null,
            this.data = null
        }
        return t.prototype.stopPropagation = function() {
            this.stopped = !0
        }
        ,
        t.prototype.reset = function() {
            this.stopped = !1,
            this.currentTarget = null,
            this.target = null
        }
        ,
        t
    }();
    e.default = n
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }();
    var i = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this._pointerId = e,
            this._flags = t.FLAGS.NONE
        }
        return t.prototype._doSet = function(t, e) {
            this._flags = e ? this._flags | t : this._flags & ~t
        }
        ,
        n(t, [{
            key: "pointerId",
            get: function() {
                return this._pointerId
            }
        }, {
            key: "flags",
            get: function() {
                return this._flags
            },
            set: function(t) {
                this._flags = t
            }
        }, {
            key: "none",
            get: function() {
                return this._flags === this.constructor.FLAGS.NONE
            }
        }, {
            key: "over",
            get: function() {
                return 0 != (this._flags & this.constructor.FLAGS.OVER)
            },
            set: function(t) {
                this._doSet(this.constructor.FLAGS.OVER, t)
            }
        }, {
            key: "rightDown",
            get: function() {
                return 0 != (this._flags & this.constructor.FLAGS.RIGHT_DOWN)
            },
            set: function(t) {
                this._doSet(this.constructor.FLAGS.RIGHT_DOWN, t)
            }
        }, {
            key: "leftDown",
            get: function() {
                return 0 != (this._flags & this.constructor.FLAGS.LEFT_DOWN)
            },
            set: function(t) {
                this._doSet(this.constructor.FLAGS.LEFT_DOWN, t)
            }
        }]),
        t
    }();
    e.default = i,
    i.FLAGS = Object.freeze({
        NONE: 0,
        OVER: 1,
        LEFT_DOWN: 2,
        RIGHT_DOWN: 4
    })
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = {
        interactive: !1,
        interactiveChildren: !0,
        hitArea: null,
        get buttonMode() {
            return "pointer" === this.cursor
        },
        set buttonMode(t) {
            t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null)
        },
        cursor: null,
        get trackedPointers() {
            return void 0 === this._trackedPointers && (this._trackedPointers = {}),
            this._trackedPointers
        },
        _trackedPointers: void 0
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.parse = s,
    e.default = function() {
        return function(t, e) {
            if (t.data && t.type === i.Resource.TYPE.XML)
                if (0 !== t.data.getElementsByTagName("page").length && 0 !== t.data.getElementsByTagName("info").length && null !== t.data.getElementsByTagName("info")[0].getAttribute("face")) {
                    var r = t.isDataUrl ? "" : n.dirname(t.url);
                    t.isDataUrl && ("." === r && (r = ""),
                    this.baseUrl && r && "/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (r += "/")),
                    (r = r.replace(this.baseUrl, "")) && "/" !== r.charAt(r.length - 1) && (r += "/");
                    for (var o = t.data.getElementsByTagName("page"), a = {}, u = function(r) {
                        a[r.metadata.pageFile] = r.texture,
                        Object.keys(a).length === o.length && (s(t, a),
                        e())
                    }, h = 0; h < o.length; ++h) {
                        var l = o[h].getAttribute("file")
                          , c = r + l
                          , f = !1;
                        for (var d in this.resources) {
                            var p = this.resources[d];
                            if (p.url === c) {
                                p.metadata.pageFile = l,
                                p.texture ? u(p) : p.onAfterMiddleware.add(u),
                                f = !0;
                                break
                            }
                        }
                        if (!f) {
                            var v = {
                                crossOrigin: t.crossOrigin,
                                loadType: i.Resource.LOAD_TYPE.IMAGE,
                                metadata: Object.assign({
                                    pageFile: l
                                }, t.metadata.imageMetadata),
                                parentResource: t
                            };
                            this.add(c, v, u)
                        }
                    }
                } else
                    e();
            else
                e()
        }
    }
    ;
    var n = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(24))
      , i = r(57)
      , o = r(183);
    function s(t, e) {
        t.bitmapFont = o.BitmapText.registerFont(t.data, e)
    }
}
, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }();
    function i(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function t(e, r, n) {
            void 0 === r && (r = !1),
            i(this, t),
            this._fn = e,
            this._once = r,
            this._thisArg = n,
            this._next = this._prev = this._owner = null
        }
        return n(t, [{
            key: "detach",
            value: function() {
                return null !== this._owner && (this._owner.detach(this),
                !0)
            }
        }]),
        t
    }();
    function s(t, e) {
        return t._head ? (t._tail._next = e,
        e._prev = t._tail,
        t._tail = e) : (t._head = e,
        t._tail = e),
        e._owner = t,
        e
    }
    var a = function() {
        function t() {
            i(this, t),
            this._head = this._tail = void 0
        }
        return n(t, [{
            key: "handlers",
            value: function() {
                var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0]
                  , e = this._head;
                if (t)
                    return !!e;
                for (var r = []; e; )
                    r.push(e),
                    e = e._next;
                return r
            }
        }, {
            key: "has",
            value: function(t) {
                if (!(t instanceof o))
                    throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
                return t._owner === this
            }
        }, {
            key: "dispatch",
            value: function() {
                var t = this._head;
                if (!t)
                    return !1;
                for (; t; )
                    t._once && this.detach(t),
                    t._fn.apply(t._thisArg, arguments),
                    t = t._next;
                return !0
            }
        }, {
            key: "add",
            value: function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                if ("function" != typeof t)
                    throw new Error("MiniSignal#add(): First arg must be a Function.");
                return s(this, new o(t,!1,e))
            }
        }, {
            key: "once",
            value: function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                if ("function" != typeof t)
                    throw new Error("MiniSignal#once(): First arg must be a Function.");
                return s(this, new o(t,!0,e))
            }
        }, {
            key: "detach",
            value: function(t) {
                if (!(t instanceof o))
                    throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
                return t._owner !== this || (t._prev && (t._prev._next = t._next),
                t._next && (t._next._prev = t._prev),
                t === this._head ? (this._head = t._next,
                null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev,
                this._tail._next = null),
                t._owner = null),
                this
            }
        }, {
            key: "detachAll",
            value: function() {
                var t = this._head;
                if (!t)
                    return this;
                for (this._head = this._tail = null; t; )
                    t._owner = null,
                    t = t._next;
                return this
            }
        }]),
        t
    }();
    a.MiniSignalBinding = o,
    e.default = a,
    t.exports = e.default
}
, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        if (t) {
            e = e || {};
            for (var r = {
                key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            }, n = r.parser[e.strictMode ? "strict" : "loose"].exec(t), i = {}, o = 14; o--; )
                i[r.key[o]] = n[o] || "";
            return i[r.q.name] = {},
            i[r.key[12]].replace(r.q.parser, (function(t, e, n) {
                e && (i[r.q.name][e] = n)
            }
            )),
            i
        }
    }
}
, function(t, e, r) {
    "use strict";
    function n() {}
    function i(t) {
        return function() {
            if (null === t)
                throw new Error("Callback was already called.");
            var e = t;
            t = null,
            e.apply(this, arguments)
        }
    }
    e.__esModule = !0,
    e.eachSeries = function(t, e, r, n) {
        var i = 0
          , o = t.length;
        !function s(a) {
            a || i === o ? r && r(a) : n ? setTimeout((function() {
                e(t[i++], s)
            }
            ), 1) : e(t[i++], s)
        }()
    }
    ,
    e.queue = function(t, e) {
        if (null == e)
            e = 1;
        else if (0 === e)
            throw new Error("Concurrency must not be zero");
        var r = 0
          , o = {
            _tasks: [],
            concurrency: e,
            saturated: n,
            unsaturated: n,
            buffer: e / 4,
            empty: n,
            drain: n,
            error: n,
            started: !1,
            paused: !1,
            push: function(t, e) {
                s(t, !1, e)
            },
            kill: function() {
                r = 0,
                o.drain = n,
                o.started = !1,
                o._tasks = []
            },
            unshift: function(t, e) {
                s(t, !0, e)
            },
            process: function() {
                for (; !o.paused && r < o.concurrency && o._tasks.length; ) {
                    var e = o._tasks.shift();
                    0 === o._tasks.length && o.empty(),
                    (r += 1) === o.concurrency && o.saturated(),
                    t(e.data, i(a(e)))
                }
            },
            length: function() {
                return o._tasks.length
            },
            running: function() {
                return r
            },
            idle: function() {
                return o._tasks.length + r === 0
            },
            pause: function() {
                !0 !== o.paused && (o.paused = !0)
            },
            resume: function() {
                if (!1 !== o.paused) {
                    o.paused = !1;
                    for (var t = 1; t <= o.concurrency; t++)
                        o.process()
                }
            }
        };
        function s(t, e, r) {
            if (null != r && "function" != typeof r)
                throw new Error("task callback must be a function");
            if (o.started = !0,
            null == t && o.idle())
                setTimeout((function() {
                    return o.drain()
                }
                ), 1);
            else {
                var i = {
                    data: t,
                    callback: "function" == typeof r ? r : n
                };
                e ? o._tasks.unshift(i) : o._tasks.push(i),
                setTimeout((function() {
                    return o.process()
                }
                ), 1)
            }
        }
        function a(t) {
            return function() {
                r -= 1,
                t.callback.apply(t, arguments),
                null != arguments[0] && o.error(arguments[0], t.data),
                r <= o.concurrency - o.buffer && o.unsaturated(),
                o.idle() && o.drain(),
                o.process()
            }
        }
        return o
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.encodeBinary = n;
    function n(t) {
        for (var e = "", r = 0; r < t.length; ) {
            for (var n = [0, 0, 0], i = [0, 0, 0, 0], o = 0; o < n.length; ++o)
                r < t.length ? n[o] = 255 & t.charCodeAt(r++) : n[o] = 0;
            switch (i[0] = n[0] >> 2,
            i[1] = (3 & n[0]) << 4 | n[1] >> 4,
            i[2] = (15 & n[1]) << 2 | n[2] >> 6,
            i[3] = 63 & n[2],
            r - (t.length - 1)) {
            case 2:
                i[3] = 64,
                i[2] = 64;
                break;
            case 1:
                i[3] = 64
            }
            for (var s = 0; s < i.length; ++s)
                e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(i[s])
        }
        return e
    }
    t.exports.default = n
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function() {
        return function(t, e) {
            var r = t.name + "_image";
            if (t.data && t.type === i.Resource.TYPE.JSON && t.data.frames && !this.resources[r]) {
                var n = {
                    crossOrigin: t.crossOrigin,
                    metadata: t.metadata.imageMetadata,
                    parentResource: t
                }
                  , o = u(t, this.baseUrl);
                this.add(r, o, n, (function(r) {
                    if (r.error)
                        e(r.error);
                    else {
                        var n = new a.Spritesheet(r.texture.baseTexture,t.data,t.url);
                        n.parse((function() {
                            t.spritesheet = n,
                            t.textures = n.textures,
                            e()
                        }
                        ))
                    }
                }
                ))
            } else
                e()
        }
    }
    ,
    e.getResourcePath = u;
    var n, i = r(57), o = r(166), s = (n = o) && n.__esModule ? n : {
        default: n
    }, a = r(5);
    function u(t, e) {
        return t.isDataUrl ? t.data.meta.image : s.default.resolve(t.url.replace(e, ""), t.data.meta.image)
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function() {
        return function(t, e) {
            t.data && t.type === i.Resource.TYPE.IMAGE && (t.texture = s.default.fromLoader(t.data, t.url, t.name)),
            e()
        }
    }
    ;
    var n, i = r(57), o = r(29), s = (n = o) && n.__esModule ? n : {
        default: n
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(58), o = (n = i) && n.__esModule ? n : {
        default: n
    };
    var s = function(t) {
        function e(r, n, i) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var s = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return s._ready = !0,
            s.verticesX = n || 10,
            s.verticesY = i || 10,
            s.drawMode = o.default.DRAW_MODES.TRIANGLES,
            s.refresh(),
            s
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype._refresh = function() {
            for (var t = this._texture, e = this.verticesX * this.verticesY, r = [], n = [], i = [], o = this.verticesX - 1, s = this.verticesY - 1, a = t.width / o, u = t.height / s, h = 0; h < e; h++) {
                var l = h % this.verticesX
                  , c = h / this.verticesX | 0;
                r.push(l * a, c * u),
                n.push(l / o, c / s)
            }
            for (var f = o * s, d = 0; d < f; d++) {
                var p = d % o
                  , v = d / o | 0
                  , y = v * this.verticesX + p
                  , g = v * this.verticesX + p + 1
                  , _ = (v + 1) * this.verticesX + p
                  , m = (v + 1) * this.verticesX + p + 1;
                i.push(y, g, _),
                i.push(g, m, _)
            }
            this.vertices = new Float32Array(r),
            this.uvs = new Float32Array(n),
            this.colors = new Float32Array([]),
            this.indices = new Uint16Array(i),
            this.dirty++,
            this.indexDirty++,
            this.multiplyUvs()
        }
        ,
        e.prototype._onTextureUpdate = function() {
            o.default.prototype._onTextureUpdate.call(this),
            this._ready && this.refresh()
        }
        ,
        e
    }(o.default);
    e.default = s
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.maxItemsPerFrame = e,
            this.itemsLeft = 0
        }
        return t.prototype.beginFrame = function() {
            this.itemsLeft = this.maxItemsPerFrame
        }
        ,
        t.prototype.allowedToUpload = function() {
            return this.itemsLeft-- > 0
        }
        ,
        t
    }();
    e.default = n
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
    "use strict";
    (function(t) {
        e.__esModule = !0,
        e.loader = e.prepare = e.particles = e.mesh = e.loaders = e.interaction = e.filters = e.extras = e.extract = e.accessibility = void 0;
        var n = r(293);
        Object.keys(n).forEach((function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                enumerable: !0,
                get: function() {
                    return n[t]
                }
            })
        }
        ));
        var i = r(5);
        Object.keys(i).forEach((function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                enumerable: !0,
                get: function() {
                    return i[t]
                }
            })
        }
        ));
        var o, s = r(353), a = (o = s) && o.__esModule ? o : {
            default: o
        }, u = g(r(354)), h = g(r(356)), l = g(r(183)), c = g(r(366)), f = g(r(373)), d = g(r(375)), p = g(r(379)), v = g(r(384)), y = g(r(389));
        function g(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.default = t,
            e
        }
        i.utils.mixins.performMixins();
        var _ = d.shared || null;
        e.accessibility = u,
        e.extract = h,
        e.extras = l,
        e.filters = c,
        e.interaction = f,
        e.loaders = d,
        e.mesh = p,
        e.particles = v,
        e.prepare = y,
        e.loader = _,
        "function" == typeof a.default && (0,
        a.default)(e),
        t.PIXI = e
    }
    ).call(this, r(11))
}
, function(t, e, r) {
    "use strict";
    r(294),
    r(296),
    r(297),
    r(298),
    window.ArrayBuffer || (window.ArrayBuffer = Array),
    window.Float32Array || (window.Float32Array = Array),
    window.Uint32Array || (window.Uint32Array = Array),
    window.Uint16Array || (window.Uint16Array = Array)
}
, function(t, e, r) {
    "use strict";
    var n, i = r(295), o = (n = i) && n.__esModule ? n : {
        default: n
    };
    Object.assign || (Object.assign = o.default)
}
, function(t, e, r) {
    "use strict";
    var n = Object.getOwnPropertySymbols
      , i = Object.prototype.hasOwnProperty
      , o = Object.prototype.propertyIsEnumerable;
    function s(t) {
        if (null == t)
            throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }
    t.exports = function() {
        try {
            if (!Object.assign)
                return !1;
            var t = new String("abc");
            if (t[5] = "de",
            "5" === Object.getOwnPropertyNames(t)[0])
                return !1;
            for (var e = {}, r = 0; r < 10; r++)
                e["_" + String.fromCharCode(r)] = r;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                return e[t]
            }
            )).join(""))
                return !1;
            var n = {};
            return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                n[t] = t
            }
            )),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function(t, e) {
        for (var r, a, u = s(t), h = 1; h < arguments.length; h++) {
            for (var l in r = Object(arguments[h]))
                i.call(r, l) && (u[l] = r[l]);
            if (n) {
                a = n(r);
                for (var c = 0; c < a.length; c++)
                    o.call(r, a[c]) && (u[a[c]] = r[a[c]])
            }
        }
        return u
    }
}
, function(t, e, r) {
    "use strict";
    (function(t) {
        if (Date.now && Date.prototype.getTime || (Date.now = function() {
            return (new Date).getTime()
        }
        ),
        !t.performance || !t.performance.now) {
            var e = Date.now();
            t.performance || (t.performance = {}),
            t.performance.now = function() {
                return Date.now() - e
            }
        }
        for (var r = Date.now(), n = ["ms", "moz", "webkit", "o"], i = 0; i < n.length && !t.requestAnimationFrame; ++i) {
            var o = n[i];
            t.requestAnimationFrame = t[o + "RequestAnimationFrame"],
            t.cancelAnimationFrame = t[o + "CancelAnimationFrame"] || t[o + "CancelRequestAnimationFrame"]
        }
        t.requestAnimationFrame || (t.requestAnimationFrame = function(t) {
            if ("function" != typeof t)
                throw new TypeError(t + "is not a function");
            var e = Date.now()
              , n = 16 + r - e;
            return n < 0 && (n = 0),
            r = e,
            setTimeout((function() {
                r = Date.now(),
                t(performance.now())
            }
            ), n)
        }
        ),
        t.cancelAnimationFrame || (t.cancelAnimationFrame = function(t) {
            return clearTimeout(t)
        }
        )
    }
    ).call(this, r(11))
}
, function(t, e, r) {
    "use strict";
    Math.sign || (Math.sign = function(t) {
        return 0 === (t = Number(t)) || isNaN(t) ? t : t > 0 ? 1 : -1
    }
    )
}
, function(t, e, r) {
    "use strict";
    Number.isInteger || (Number.isInteger = function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }
    )
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(99), o = (n = i) && n.__esModule ? n : {
        default: n
    }, s = r(4);
    function a(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var u = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            a(this, t),
            this.x = e,
            this.y = r,
            this.radius = n,
            this.type = s.SHAPES.CIRC
        }
        return t.prototype.clone = function() {
            return new t(this.x,this.y,this.radius)
        }
        ,
        t.prototype.contains = function(t, e) {
            if (this.radius <= 0)
                return !1;
            var r = this.radius * this.radius
              , n = this.x - t
              , i = this.y - e;
            return (n *= n) + (i *= i) <= r
        }
        ,
        t.prototype.getBounds = function() {
            return new o.default(this.x - this.radius,this.y - this.radius,2 * this.radius,2 * this.radius)
        }
        ,
        t
    }();
    e.default = u
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(99), o = (n = i) && n.__esModule ? n : {
        default: n
    }, s = r(4);
    function a(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var u = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            a(this, t),
            this.x = e,
            this.y = r,
            this.width = n,
            this.height = i,
            this.type = s.SHAPES.ELIP
        }
        return t.prototype.clone = function() {
            return new t(this.x,this.y,this.width,this.height)
        }
        ,
        t.prototype.contains = function(t, e) {
            if (this.width <= 0 || this.height <= 0)
                return !1;
            var r = (t - this.x) / this.width
              , n = (e - this.y) / this.height;
            return (r *= r) + (n *= n) <= 1
        }
        ,
        t.prototype.getBounds = function() {
            return new o.default(this.x - this.width,this.y - this.height,this.width,this.height)
        }
        ,
        t
    }();
    e.default = u
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(97), o = (n = i) && n.__esModule ? n : {
        default: n
    }, s = r(4);
    function a(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var u = function() {
        function t() {
            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
                r[n] = arguments[n];
            if (a(this, t),
            Array.isArray(r[0]) && (r = r[0]),
            r[0]instanceof o.default) {
                for (var i = [], u = 0, h = r.length; u < h; u++)
                    i.push(r[u].x, r[u].y);
                r = i
            }
            this.closed = !0,
            this.points = r,
            this.type = s.SHAPES.POLY
        }
        return t.prototype.clone = function() {
            return new t(this.points.slice())
        }
        ,
        t.prototype.close = function() {
            var t = this.points;
            t[0] === t[t.length - 2] && t[1] === t[t.length - 1] || t.push(t[0], t[1])
        }
        ,
        t.prototype.contains = function(t, e) {
            for (var r = !1, n = this.points.length / 2, i = 0, o = n - 1; i < n; o = i++) {
                var s = this.points[2 * i]
                  , a = this.points[2 * i + 1]
                  , u = this.points[2 * o]
                  , h = this.points[2 * o + 1];
                a > e != h > e && t < (e - a) / (h - a) * (u - s) + s && (r = !r)
            }
            return r
        }
        ,
        t
    }();
    e.default = u
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = r(4);
    function i(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
              , a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 20;
            i(this, t),
            this.x = e,
            this.y = r,
            this.width = o,
            this.height = s,
            this.radius = a,
            this.type = n.SHAPES.RREC
        }
        return t.prototype.clone = function() {
            return new t(this.x,this.y,this.width,this.height,this.radius)
        }
        ,
        t.prototype.contains = function(t, e) {
            if (this.width <= 0 || this.height <= 0)
                return !1;
            if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
                if (e >= this.y + this.radius && e <= this.y + this.height - this.radius || t >= this.x + this.radius && t <= this.x + this.width - this.radius)
                    return !0;
                var r = t - (this.x + this.radius)
                  , n = e - (this.y + this.radius)
                  , i = this.radius * this.radius;
                if (r * r + n * n <= i)
                    return !0;
                if ((r = t - (this.x + this.width - this.radius)) * r + n * n <= i)
                    return !0;
                if (r * r + (n = e - (this.y + this.height - this.radius)) * n <= i)
                    return !0;
                if ((r = t - (this.x + this.radius)) * r + n * n <= i)
                    return !0
            }
            return !1
        }
        ,
        t
    }();
    e.default = o
}
, function(t, e) {
    t.exports = function(t, e) {
        var r = t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
        if (!r)
            throw new Error("This browser does not support webGL. Try using the canvas renderer");
        return r
    }
}
, function(t, e) {
    var r = new ArrayBuffer(0)
      , n = function(t, e, n, i) {
        this.gl = t,
        this.buffer = t.createBuffer(),
        this.type = e || t.ARRAY_BUFFER,
        this.drawType = i || t.STATIC_DRAW,
        this.data = r,
        n && this.upload(n),
        this._updateID = 0
    };
    n.prototype.upload = function(t, e, r) {
        r || this.bind();
        var n = this.gl;
        t = t || this.data,
        e = e || 0,
        this.data.byteLength >= t.byteLength ? n.bufferSubData(this.type, e, t) : n.bufferData(this.type, t, this.drawType),
        this.data = t
    }
    ,
    n.prototype.bind = function() {
        this.gl.bindBuffer(this.type, this.buffer)
    }
    ,
    n.createVertexBuffer = function(t, e, r) {
        return new n(t,t.ARRAY_BUFFER,e,r)
    }
    ,
    n.createIndexBuffer = function(t, e, r) {
        return new n(t,t.ELEMENT_ARRAY_BUFFER,e,r)
    }
    ,
    n.create = function(t, e, r, i) {
        return new n(t,e,r,i)
    }
    ,
    n.prototype.destroy = function() {
        this.gl.deleteBuffer(this.buffer)
    }
    ,
    t.exports = n
}
, function(t, e, r) {
    var n = r(154)
      , i = function(t, e, r) {
        this.gl = t,
        this.framebuffer = t.createFramebuffer(),
        this.stencil = null,
        this.texture = null,
        this.width = e || 100,
        this.height = r || 100
    };
    i.prototype.enableTexture = function(t) {
        var e = this.gl;
        this.texture = t || new n(e),
        this.texture.bind(),
        this.bind(),
        e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture.texture, 0)
    }
    ,
    i.prototype.enableStencil = function() {
        if (!this.stencil) {
            var t = this.gl;
            this.stencil = t.createRenderbuffer(),
            t.bindRenderbuffer(t.RENDERBUFFER, this.stencil),
            t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.stencil),
            t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, this.width, this.height)
        }
    }
    ,
    i.prototype.clear = function(t, e, r, n) {
        this.bind();
        var i = this.gl;
        i.clearColor(t, e, r, n),
        i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT)
    }
    ,
    i.prototype.bind = function() {
        var t = this.gl;
        t.bindFramebuffer(t.FRAMEBUFFER, this.framebuffer)
    }
    ,
    i.prototype.unbind = function() {
        var t = this.gl;
        t.bindFramebuffer(t.FRAMEBUFFER, null)
    }
    ,
    i.prototype.resize = function(t, e) {
        var r = this.gl;
        this.width = t,
        this.height = e,
        this.texture && this.texture.uploadData(null, t, e),
        this.stencil && (r.bindRenderbuffer(r.RENDERBUFFER, this.stencil),
        r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, t, e))
    }
    ,
    i.prototype.destroy = function() {
        var t = this.gl;
        this.texture && this.texture.destroy(),
        t.deleteFramebuffer(this.framebuffer),
        this.gl = null,
        this.stencil = null,
        this.texture = null
    }
    ,
    i.createRGBA = function(t, e, r, o) {
        var s = n.fromData(t, null, e, r);
        s.enableNearestScaling(),
        s.enableWrapClamp();
        var a = new i(t,e,r);
        return a.enableTexture(s),
        a.unbind(),
        a
    }
    ,
    i.createFloat32 = function(t, e, r, o) {
        var s = new n.fromData(t,o,e,r);
        s.enableNearestScaling(),
        s.enableWrapClamp();
        var a = new i(t,e,r);
        return a.enableTexture(s),
        a.unbind(),
        a
    }
    ,
    t.exports = i
}
, function(t, e, r) {
    var n = r(155)
      , i = r(156)
      , o = r(158)
      , s = r(160)
      , a = r(161)
      , u = function(t, e, r, u, h) {
        this.gl = t,
        u && (e = s(e, u),
        r = s(r, u)),
        this.program = n(t, e, r, h),
        this.attributes = i(t, this.program),
        this.uniformData = o(t, this.program),
        this.uniforms = a(t, this.uniformData)
    };
    u.prototype.bind = function() {
        return this.gl.useProgram(this.program),
        this
    }
    ,
    u.prototype.destroy = function() {
        this.attributes = null,
        this.uniformData = null,
        this.uniforms = null,
        this.gl.deleteProgram(this.program)
    }
    ,
    t.exports = u
}
, function(t, e, r) {
    var n = r(153);
    function i(t, e) {
        if (this.nativeVaoExtension = null,
        i.FORCE_NATIVE || (this.nativeVaoExtension = t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object")),
        this.nativeState = e,
        this.nativeVaoExtension) {
            this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
            var r = t.getParameter(t.MAX_VERTEX_ATTRIBS);
            this.nativeState = {
                tempAttribState: new Array(r),
                attribState: new Array(r)
            }
        }
        this.gl = t,
        this.attributes = [],
        this.indexBuffer = null,
        this.dirty = !1
    }
    i.prototype.constructor = i,
    t.exports = i,
    i.FORCE_NATIVE = !1,
    i.prototype.bind = function() {
        if (this.nativeVao) {
            if (this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao),
            this.dirty)
                return this.dirty = !1,
                this.activate(),
                this;
            this.indexBuffer && this.indexBuffer.bind()
        } else
            this.activate();
        return this
    }
    ,
    i.prototype.unbind = function() {
        return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(null),
        this
    }
    ,
    i.prototype.activate = function() {
        for (var t = this.gl, e = null, r = 0; r < this.attributes.length; r++) {
            var i = this.attributes[r];
            e !== i.buffer && (i.buffer.bind(),
            e = i.buffer),
            t.vertexAttribPointer(i.attribute.location, i.attribute.size, i.type || t.FLOAT, i.normalized || !1, i.stride || 0, i.start || 0)
        }
        return n(t, this.attributes, this.nativeState),
        this.indexBuffer && this.indexBuffer.bind(),
        this
    }
    ,
    i.prototype.addAttribute = function(t, e, r, n, i, o) {
        return this.attributes.push({
            buffer: t,
            attribute: e,
            location: e.location,
            type: r || this.gl.FLOAT,
            normalized: n || !1,
            stride: i || 0,
            start: o || 0
        }),
        this.dirty = !0,
        this
    }
    ,
    i.prototype.addIndex = function(t) {
        return this.indexBuffer = t,
        this.dirty = !0,
        this
    }
    ,
    i.prototype.clear = function() {
        return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao),
        this.attributes.length = 0,
        this.indexBuffer = null,
        this
    }
    ,
    i.prototype.draw = function(t, e, r) {
        var n = this.gl;
        return this.indexBuffer ? n.drawElements(t, e || this.indexBuffer.data.length, n.UNSIGNED_SHORT, 2 * (r || 0)) : n.drawArrays(t, r, e || this.getSize()),
        this
    }
    ,
    i.prototype.destroy = function() {
        this.gl = null,
        this.indexBuffer = null,
        this.attributes = null,
        this.nativeState = null,
        this.nativeVao && this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao),
        this.nativeVaoExtension = null,
        this.nativeVao = null
    }
    ,
    i.prototype.getSize = function() {
        var t = this.attributes[0];
        return t.buffer.data.length / (t.stride / 4 || t.attribute.size)
    }
}
, function(t, e, r) {
    t.exports = {
        compileProgram: r(155),
        defaultValue: r(159),
        extractAttributes: r(156),
        extractUniforms: r(158),
        generateUniformAccessObject: r(161),
        setPrecision: r(160),
        mapSize: r(157),
        mapType: r(100)
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t) {
        if (o.default.tablet || o.default.phone)
            return 4;
        return t
    }
    ;
    var n, i = r(102), o = (n = i) && n.__esModule ? n : {
        default: n
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function() {
        return !(navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = {
        mixin: function(t) {
            !function(t) {
                t.__plugins = {},
                t.registerPlugin = function(e, r) {
                    t.__plugins[e] = r
                }
                ,
                t.prototype.initPlugins = function() {
                    for (var e in this.plugins = this.plugins || {},
                    t.__plugins)
                        this.plugins[e] = new t.__plugins[e](this)
                }
                ,
                t.prototype.destroyPlugins = function() {
                    for (var t in this.plugins)
                        this.plugins[t].destroy(),
                        this.plugins[t] = null;
                    this.plugins = null
                }
            }(t)
        }
    }
}
, function(t, e, r) {
    "use strict";
    function n(t, e) {
        if (t && e)
            for (var r = Object.keys(e), n = 0; n < r.length; ++n) {
                var i = r[n];
                Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i))
            }
    }
    e.__esModule = !0,
    e.mixin = n,
    e.delayMixin = function(t, e) {
        i.push(t, e)
    }
    ,
    e.performMixins = function() {
        for (var t = 0; t < i.length; t += 2)
            n(i[t], i[t + 1]);
        i.length = 0
    }
    ;
    var i = []
}
, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, r) {
        var n, i = t.length;
        if (!(e >= i || 0 === r)) {
            var o = i - (r = e + r > i ? i - e : r);
            for (n = e; n < o; ++n)
                t[n] = t[n + r];
            t.length = o
        }
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function() {
        for (var t = [], e = [], r = 0; r < 32; r++)
            t[r] = r,
            e[r] = r;
        t[n.BLEND_MODES.NORMAL_NPM] = n.BLEND_MODES.NORMAL,
        t[n.BLEND_MODES.ADD_NPM] = n.BLEND_MODES.ADD,
        t[n.BLEND_MODES.SCREEN_NPM] = n.BLEND_MODES.SCREEN,
        e[n.BLEND_MODES.NORMAL] = n.BLEND_MODES.NORMAL_NPM,
        e[n.BLEND_MODES.ADD] = n.BLEND_MODES.ADD_NPM,
        e[n.BLEND_MODES.SCREEN] = n.BLEND_MODES.SCREEN_NPM;
        var i = [];
        return i.push(e),
        i.push(t),
        i
    }
    ;
    var n = r(4)
}
, function(t, e, r) {
    (function(t, n) {
        var i;
        !function(o) {
            e && e.nodeType,
            t && t.nodeType;
            var s = "object" == typeof n && n;
            s.global !== s && s.window !== s && s.self;
            var a, u = 2147483647, h = /^xn--/, l = /[^\x20-\x7E]/, c = /[\x2E\u3002\uFF0E\uFF61]/g, f = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            }, d = Math.floor, p = String.fromCharCode;
            function v(t) {
                throw new RangeError(f[t])
            }
            function y(t, e) {
                for (var r = t.length, n = []; r--; )
                    n[r] = e(t[r]);
                return n
            }
            function g(t, e) {
                var r = t.split("@")
                  , n = "";
                return r.length > 1 && (n = r[0] + "@",
                t = r[1]),
                n + y((t = t.replace(c, ".")).split("."), e).join(".")
            }
            function _(t) {
                for (var e, r, n = [], i = 0, o = t.length; i < o; )
                    (e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o ? 56320 == (64512 & (r = t.charCodeAt(i++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e),
                    i--) : n.push(e);
                return n
            }
            function m(t) {
                return y(t, (function(t) {
                    var e = "";
                    return t > 65535 && (e += p((t -= 65536) >>> 10 & 1023 | 55296),
                    t = 56320 | 1023 & t),
                    e += p(t)
                }
                )).join("")
            }
            function b(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
            }
            function x(t, e, r) {
                var n = 0;
                for (t = r ? d(t / 700) : t >> 1,
                t += d(t / e); t > 455; n += 36)
                    t = d(t / 35);
                return d(n + 36 * t / (t + 38))
            }
            function T(t) {
                var e, r, n, i, o, s, a, h, l, c, f, p = [], y = t.length, g = 0, _ = 128, b = 72;
                for ((r = t.lastIndexOf("-")) < 0 && (r = 0),
                n = 0; n < r; ++n)
                    t.charCodeAt(n) >= 128 && v("not-basic"),
                    p.push(t.charCodeAt(n));
                for (i = r > 0 ? r + 1 : 0; i < y; ) {
                    for (o = g,
                    s = 1,
                    a = 36; i >= y && v("invalid-input"),
                    ((h = (f = t.charCodeAt(i++)) - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : 36) >= 36 || h > d((u - g) / s)) && v("overflow"),
                    g += h * s,
                    !(h < (l = a <= b ? 1 : a >= b + 26 ? 26 : a - b)); a += 36)
                        s > d(u / (c = 36 - l)) && v("overflow"),
                        s *= c;
                    b = x(g - o, e = p.length + 1, 0 == o),
                    d(g / e) > u - _ && v("overflow"),
                    _ += d(g / e),
                    g %= e,
                    p.splice(g++, 0, _)
                }
                return m(p)
            }
            function E(t) {
                var e, r, n, i, o, s, a, h, l, c, f, y, g, m, T, E = [];
                for (y = (t = _(t)).length,
                e = 128,
                r = 0,
                o = 72,
                s = 0; s < y; ++s)
                    (f = t[s]) < 128 && E.push(p(f));
                for (n = i = E.length,
                i && E.push("-"); n < y; ) {
                    for (a = u,
                    s = 0; s < y; ++s)
                        (f = t[s]) >= e && f < a && (a = f);
                    for (a - e > d((u - r) / (g = n + 1)) && v("overflow"),
                    r += (a - e) * g,
                    e = a,
                    s = 0; s < y; ++s)
                        if ((f = t[s]) < e && ++r > u && v("overflow"),
                        f == e) {
                            for (h = r,
                            l = 36; !(h < (c = l <= o ? 1 : l >= o + 26 ? 26 : l - o)); l += 36)
                                T = h - c,
                                m = 36 - c,
                                E.push(p(b(c + T % m, 0))),
                                h = d(T / m);
                            E.push(p(b(h, 0))),
                            o = x(r, g, n == i),
                            r = 0,
                            ++n
                        }
                    ++r,
                    ++e
                }
                return E.join("")
            }
            a = {
                version: "1.4.1",
                ucs2: {
                    decode: _,
                    encode: m
                },
                decode: T,
                encode: E,
                toASCII: function(t) {
                    return g(t, (function(t) {
                        return l.test(t) ? "xn--" + E(t) : t
                    }
                    ))
                },
                toUnicode: function(t) {
                    return g(t, (function(t) {
                        return h.test(t) ? T(t.slice(4).toLowerCase()) : t
                    }
                    ))
                }
            },
            void 0 === (i = function() {
                return a
            }
            .call(e, r, e, t)) || (t.exports = i)
        }()
    }
    ).call(this, r(27)(t), r(11))
}
, function(t, e, r) {
    "use strict";
    t.exports = {
        isString: function(t) {
            return "string" == typeof t
        },
        isObject: function(t) {
            return "object" == typeof t && null !== t
        },
        isNull: function(t) {
            return null === t
        },
        isNullOrUndefined: function(t) {
            return null == t
        }
    }
}
, function(t, e, r) {
    "use strict";
    e.decode = e.parse = r(318),
    e.encode = e.stringify = r(319)
}
, function(t, e, r) {
    "use strict";
    function n(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    t.exports = function(t, e, r, o) {
        e = e || "&",
        r = r || "=";
        var s = {};
        if ("string" != typeof t || 0 === t.length)
            return s;
        var a = /\+/g;
        t = t.split(e);
        var u = 1e3;
        o && "number" == typeof o.maxKeys && (u = o.maxKeys);
        var h = t.length;
        u > 0 && h > u && (h = u);
        for (var l = 0; l < h; ++l) {
            var c, f, d, p, v = t[l].replace(a, "%20"), y = v.indexOf(r);
            y >= 0 ? (c = v.substr(0, y),
            f = v.substr(y + 1)) : (c = v,
            f = ""),
            d = decodeURIComponent(c),
            p = decodeURIComponent(f),
            n(s, d) ? i(s[d]) ? s[d].push(p) : s[d] = [s[d], p] : s[d] = p
        }
        return s
    }
    ;
    var i = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
}
, function(t, e, r) {
    "use strict";
    var n = function(t) {
        switch (typeof t) {
        case "string":
            return t;
        case "boolean":
            return t ? "true" : "false";
        case "number":
            return isFinite(t) ? t : "";
        default:
            return ""
        }
    };
    t.exports = function(t, e, r, a) {
        return e = e || "&",
        r = r || "=",
        null === t && (t = void 0),
        "object" == typeof t ? o(s(t), (function(s) {
            var a = encodeURIComponent(n(s)) + r;
            return i(t[s]) ? o(t[s], (function(t) {
                return a + encodeURIComponent(n(t))
            }
            )).join(e) : a + encodeURIComponent(n(t[s]))
        }
        )).join(e) : a ? encodeURIComponent(n(a)) + r + encodeURIComponent(n(t)) : ""
    }
    ;
    var i = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    ;
    function o(t, e) {
        if (t.map)
            return t.map(e);
        for (var r = [], n = 0; n < t.length; n++)
            r.push(e(t[n], n));
        return r
    }
    var s = Object.keys || function(t) {
        var e = [];
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
        return e
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = a(r(12))
      , o = r(4)
      , s = a(r(321));
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var u = function() {
        function t() {
            var e = this;
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this._head = new s.default(null,null,1 / 0),
            this._requestId = null,
            this._maxElapsedMS = 100,
            this.autoStart = !1,
            this.deltaTime = 1,
            this.elapsedMS = 1 / i.default.TARGET_FPMS,
            this.lastTime = -1,
            this.speed = 1,
            this.started = !1,
            this._tick = function(t) {
                e._requestId = null,
                e.started && (e.update(t),
                e.started && null === e._requestId && e._head.next && (e._requestId = requestAnimationFrame(e._tick)))
            }
        }
        return t.prototype._requestIfNeeded = function() {
            null === this._requestId && this._head.next && (this.lastTime = performance.now(),
            this._requestId = requestAnimationFrame(this._tick))
        }
        ,
        t.prototype._cancelIfNeeded = function() {
            null !== this._requestId && (cancelAnimationFrame(this._requestId),
            this._requestId = null)
        }
        ,
        t.prototype._startIfPossible = function() {
            this.started ? this._requestIfNeeded() : this.autoStart && this.start()
        }
        ,
        t.prototype.add = function(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.UPDATE_PRIORITY.NORMAL;
            return this._addListener(new s.default(t,e,r))
        }
        ,
        t.prototype.addOnce = function(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.UPDATE_PRIORITY.NORMAL;
            return this._addListener(new s.default(t,e,r,!0))
        }
        ,
        t.prototype._addListener = function(t) {
            var e = this._head.next
              , r = this._head;
            if (e) {
                for (; e; ) {
                    if (t.priority > e.priority) {
                        t.connect(r);
                        break
                    }
                    r = e,
                    e = e.next
                }
                t.previous || t.connect(r)
            } else
                t.connect(r);
            return this._startIfPossible(),
            this
        }
        ,
        t.prototype.remove = function(t, e) {
            for (var r = this._head.next; r; )
                r = r.match(t, e) ? r.destroy() : r.next;
            return this._head.next || this._cancelIfNeeded(),
            this
        }
        ,
        t.prototype.start = function() {
            this.started || (this.started = !0,
            this._requestIfNeeded())
        }
        ,
        t.prototype.stop = function() {
            this.started && (this.started = !1,
            this._cancelIfNeeded())
        }
        ,
        t.prototype.destroy = function() {
            this.stop();
            for (var t = this._head.next; t; )
                t = t.destroy(!0);
            this._head.destroy(),
            this._head = null
        }
        ,
        t.prototype.update = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now()
              , e = void 0;
            if (t > this.lastTime) {
                (e = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (e = this._maxElapsedMS),
                this.deltaTime = e * i.default.TARGET_FPMS * this.speed;
                for (var r = this._head, n = r.next; n; )
                    n = n.emit(this.deltaTime);
                r.next || this._cancelIfNeeded()
            } else
                this.deltaTime = this.elapsedMS = 0;
            this.lastTime = t
        }
        ,
        n(t, [{
            key: "FPS",
            get: function() {
                return 1e3 / this.elapsedMS
            }
        }, {
            key: "minFPS",
            get: function() {
                return 1e3 / this._maxElapsedMS
            },
            set: function(t) {
                var e = Math.min(Math.max(0, t) / 1e3, i.default.TARGET_FPMS);
                this._maxElapsedMS = 1 / e
            }
        }]),
        t
    }();
    e.default = u
}
, function(t, e, r) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var i = function() {
        function t(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            n(this, t),
            this.fn = e,
            this.context = r,
            this.priority = i,
            this.once = o,
            this.next = null,
            this.previous = null,
            this._destroyed = !1
        }
        return t.prototype.match = function(t, e) {
            return e = e || null,
            this.fn === t && this.context === e
        }
        ,
        t.prototype.emit = function(t) {
            this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
            var e = this.next;
            return this.once && this.destroy(!0),
            this._destroyed && (this.next = null),
            e
        }
        ,
        t.prototype.connect = function(t) {
            this.previous = t,
            t.next && (t.next.previous = this),
            this.next = t.next,
            t.next = this
        }
        ,
        t.prototype.destroy = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._destroyed = !0,
            this.fn = null,
            this.context = null,
            this.previous && (this.previous.next = this.next),
            this.next && (this.next.previous = this.previous);
            var e = this.next;
            return this.next = t ? null : e,
            this.previous = null,
            e
        }
        ,
        t
    }();
    e.default = i
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = a(r(54))
      , i = r(4)
      , o = r(15)
      , s = a(r(70));
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var u = new o.Matrix
      , h = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.renderer = e
        }
        return t.prototype.render = function(t) {
            var e = t._texture
              , r = this.renderer
              , n = e._frame.width
              , a = e._frame.height
              , h = t.transform.worldTransform
              , l = 0
              , c = 0;
            if (!(e.orig.width <= 0 || e.orig.height <= 0) && e.baseTexture.source && (r.setBlendMode(t.blendMode),
            e.valid)) {
                r.context.globalAlpha = t.worldAlpha;
                var f = e.baseTexture.scaleMode === i.SCALE_MODES.LINEAR;
                r.smoothProperty && r.context[r.smoothProperty] !== f && (r.context[r.smoothProperty] = f),
                e.trim ? (l = e.trim.width / 2 + e.trim.x - t.anchor.x * e.orig.width,
                c = e.trim.height / 2 + e.trim.y - t.anchor.y * e.orig.height) : (l = (.5 - t.anchor.x) * e.orig.width,
                c = (.5 - t.anchor.y) * e.orig.height),
                e.rotate && (h.copy(u),
                h = u,
                o.GroupD8.matrixAppendRotationInv(h, e.rotate, l, c),
                l = 0,
                c = 0),
                l -= n / 2,
                c -= a / 2,
                r.roundPixels ? (r.context.setTransform(h.a, h.b, h.c, h.d, h.tx * r.resolution | 0, h.ty * r.resolution | 0),
                l |= 0,
                c |= 0) : r.context.setTransform(h.a, h.b, h.c, h.d, h.tx * r.resolution, h.ty * r.resolution);
                var d = e.baseTexture.resolution;
                16777215 !== t.tint ? (t.cachedTint === t.tint && t.tintedTexture.tintId === t._texture._updateID || (t.cachedTint = t.tint,
                t.tintedTexture = s.default.getTintedTexture(t, t.tint)),
                r.context.drawImage(t.tintedTexture, 0, 0, n * d, a * d, l * r.resolution, c * r.resolution, n * r.resolution, a * r.resolution)) : r.context.drawImage(e.baseTexture.source, e._frame.x * d, e._frame.y * d, n * d, a * d, l * r.resolution, c * r.resolution, n * r.resolution, a * r.resolution)
            }
        }
        ,
        t.prototype.destroy = function() {
            this.renderer = null
        }
        ,
        t
    }();
    e.default = h,
    n.default.registerPlugin("sprite", h)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = r(4);
    var i = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.renderer = e
        }
        return t.prototype.pushMask = function(t) {
            var e = this.renderer;
            e.context.save();
            var r = t.alpha
              , n = t.transform.worldTransform
              , i = e.resolution;
            e.context.setTransform(n.a * i, n.b * i, n.c * i, n.d * i, n.tx * i, n.ty * i),
            t._texture || (this.renderGraphicsShape(t),
            e.context.clip()),
            t.worldAlpha = r
        }
        ,
        t.prototype.renderGraphicsShape = function(t) {
            var e = this.renderer.context
              , r = t.graphicsData.length;
            if (0 !== r) {
                e.beginPath();
                for (var i = 0; i < r; i++) {
                    var o = t.graphicsData[i]
                      , s = o.shape;
                    if (o.type === n.SHAPES.POLY) {
                        var a = s.points
                          , u = o.holes
                          , h = void 0
                          , l = void 0;
                        e.moveTo(a[0], a[1]);
                        for (var c = 2; c < a.length; c += 2)
                            e.lineTo(a[c], a[c + 1]);
                        if (a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && e.closePath(),
                        u.length > 0) {
                            h = 0;
                            for (var f = 0; f < a.length; f += 2)
                                h += a[f] * a[f + 3] - a[f + 1] * a[f + 2];
                            for (var d = 0; d < u.length; d++) {
                                a = u[d].points,
                                l = 0;
                                for (var p = 0; p < a.length; p += 2)
                                    l += a[p] * a[p + 3] - a[p + 1] * a[p + 2];
                                if (e.moveTo(a[0], a[1]),
                                l * h < 0)
                                    for (var v = 2; v < a.length; v += 2)
                                        e.lineTo(a[v], a[v + 1]);
                                else
                                    for (var y = a.length - 2; y >= 2; y -= 2)
                                        e.lineTo(a[y], a[y + 1])
                            }
                        }
                    } else if (o.type === n.SHAPES.RECT)
                        e.rect(s.x, s.y, s.width, s.height),
                        e.closePath();
                    else if (o.type === n.SHAPES.CIRC)
                        e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI),
                        e.closePath();
                    else if (o.type === n.SHAPES.ELIP) {
                        var g = 2 * s.width
                          , _ = 2 * s.height
                          , m = s.x - g / 2
                          , b = s.y - _ / 2
                          , x = g / 2 * .5522848
                          , T = _ / 2 * .5522848
                          , E = m + g
                          , w = b + _
                          , S = m + g / 2
                          , O = b + _ / 2;
                        e.moveTo(m, O),
                        e.bezierCurveTo(m, O - T, S - x, b, S, b),
                        e.bezierCurveTo(S + x, b, E, O - T, E, O),
                        e.bezierCurveTo(E, O + T, S + x, w, S, w),
                        e.bezierCurveTo(S - x, w, m, O + T, m, O),
                        e.closePath()
                    } else if (o.type === n.SHAPES.RREC) {
                        var M = s.x
                          , P = s.y
                          , C = s.width
                          , A = s.height
                          , R = s.radius
                          , I = Math.min(C, A) / 2 | 0;
                        R = R > I ? I : R,
                        e.moveTo(M, P + R),
                        e.lineTo(M, P + A - R),
                        e.quadraticCurveTo(M, P + A, M + R, P + A),
                        e.lineTo(M + C - R, P + A),
                        e.quadraticCurveTo(M + C, P + A, M + C, P + A - R),
                        e.lineTo(M + C, P + R),
                        e.quadraticCurveTo(M + C, P, M + C - R, P),
                        e.lineTo(M + R, P),
                        e.quadraticCurveTo(M, P, M, P + R),
                        e.closePath()
                    }
                }
            }
        }
        ,
        t.prototype.popMask = function(t) {
            t.context.restore(),
            t.invalidateBlendMode()
        }
        ,
        t.prototype.destroy = function() {}
        ,
        t
    }();
    e.default = i
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        (0,
        s.default)() ? (t[i.BLEND_MODES.NORMAL] = "source-over",
        t[i.BLEND_MODES.ADD] = "lighter",
        t[i.BLEND_MODES.MULTIPLY] = "multiply",
        t[i.BLEND_MODES.SCREEN] = "screen",
        t[i.BLEND_MODES.OVERLAY] = "overlay",
        t[i.BLEND_MODES.DARKEN] = "darken",
        t[i.BLEND_MODES.LIGHTEN] = "lighten",
        t[i.BLEND_MODES.COLOR_DODGE] = "color-dodge",
        t[i.BLEND_MODES.COLOR_BURN] = "color-burn",
        t[i.BLEND_MODES.HARD_LIGHT] = "hard-light",
        t[i.BLEND_MODES.SOFT_LIGHT] = "soft-light",
        t[i.BLEND_MODES.DIFFERENCE] = "difference",
        t[i.BLEND_MODES.EXCLUSION] = "exclusion",
        t[i.BLEND_MODES.HUE] = "hue",
        t[i.BLEND_MODES.SATURATION] = "saturate",
        t[i.BLEND_MODES.COLOR] = "color",
        t[i.BLEND_MODES.LUMINOSITY] = "luminosity") : (t[i.BLEND_MODES.NORMAL] = "source-over",
        t[i.BLEND_MODES.ADD] = "lighter",
        t[i.BLEND_MODES.MULTIPLY] = "source-over",
        t[i.BLEND_MODES.SCREEN] = "source-over",
        t[i.BLEND_MODES.OVERLAY] = "source-over",
        t[i.BLEND_MODES.DARKEN] = "source-over",
        t[i.BLEND_MODES.LIGHTEN] = "source-over",
        t[i.BLEND_MODES.COLOR_DODGE] = "source-over",
        t[i.BLEND_MODES.COLOR_BURN] = "source-over",
        t[i.BLEND_MODES.HARD_LIGHT] = "source-over",
        t[i.BLEND_MODES.SOFT_LIGHT] = "source-over",
        t[i.BLEND_MODES.DIFFERENCE] = "source-over",
        t[i.BLEND_MODES.EXCLUSION] = "source-over",
        t[i.BLEND_MODES.HUE] = "source-over",
        t[i.BLEND_MODES.SATURATION] = "source-over",
        t[i.BLEND_MODES.COLOR] = "source-over",
        t[i.BLEND_MODES.LUMINOSITY] = "source-over");
        return t[i.BLEND_MODES.NORMAL_NPM] = t[i.BLEND_MODES.NORMAL],
        t[i.BLEND_MODES.ADD_NPM] = t[i.BLEND_MODES.ADD],
        t[i.BLEND_MODES.SCREEN_NPM] = t[i.BLEND_MODES.SCREEN],
        t
    }
    ;
    var n, i = r(4), o = r(172), s = (n = o) && n.__esModule ? n : {
        default: n
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = d(r(71))
      , i = d(r(72))
      , o = d(r(109))
      , s = d(r(337))
      , a = d(r(338))
      , u = d(r(339))
      , h = d(r(12))
      , l = r(6)
      , c = d(r(19))
      , f = d(r(106));
    function d(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var p = 0
      , v = 0
      , y = function(t) {
        function e(r) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            n.vertSize = 5,
            n.vertByteSize = 4 * n.vertSize,
            n.size = h.default.SPRITE_BATCH_SIZE,
            n.buffers = [];
            for (var i = 1; i <= f.default.nextPow2(n.size); i *= 2)
                n.buffers.push(new u.default(4 * i * n.vertByteSize));
            n.indices = (0,
            o.default)(n.size),
            n.shader = null,
            n.currentIndex = 0,
            n.groups = [];
            for (var s = 0; s < n.size; s++)
                n.groups[s] = {
                    textures: [],
                    textureCount: 0,
                    ids: [],
                    size: 0,
                    start: 0,
                    blend: 0
                };
            return n.sprites = [],
            n.vertexBuffers = [],
            n.vaos = [],
            n.vaoMax = 2,
            n.vertexCount = 0,
            n.renderer.on("prerender", n.onPrerender, n),
            n
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.onContextChange = function() {
            var t = this.renderer.gl;
            this.renderer.legacy ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), h.default.SPRITE_MAX_TEXTURES),
            this.MAX_TEXTURES = (0,
            a.default)(this.MAX_TEXTURES, t)),
            this.shader = (0,
            s.default)(t, this.MAX_TEXTURES),
            this.indexBuffer = c.default.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW),
            this.renderer.bindVao(null);
            for (var e = this.shader.attributes, r = 0; r < this.vaoMax; r++) {
                var n = this.vertexBuffers[r] = c.default.GLBuffer.createVertexBuffer(t, null, t.STREAM_DRAW)
                  , i = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(n, e.aVertexPosition, t.FLOAT, !1, this.vertByteSize, 0).addAttribute(n, e.aTextureCoord, t.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(n, e.aColor, t.UNSIGNED_BYTE, !0, this.vertByteSize, 12);
                e.aTextureId && i.addAttribute(n, e.aTextureId, t.FLOAT, !1, this.vertByteSize, 16),
                this.vaos[r] = i
            }
            this.vao = this.vaos[0],
            this.currentBlendMode = 99999,
            this.boundTextures = new Array(this.MAX_TEXTURES)
        }
        ,
        e.prototype.onPrerender = function() {
            this.vertexCount = 0
        }
        ,
        e.prototype.render = function(t) {
            this.currentIndex >= this.size && this.flush(),
            t._texture._uvs && (this.sprites[this.currentIndex++] = t)
        }
        ,
        e.prototype.flush = function() {
            if (0 !== this.currentIndex) {
                var t = this.renderer.gl
                  , e = this.MAX_TEXTURES
                  , r = f.default.nextPow2(this.currentIndex)
                  , n = f.default.log2(r)
                  , i = this.buffers[n]
                  , o = this.sprites
                  , s = this.groups
                  , a = i.float32View
                  , u = i.uint32View
                  , d = this.boundTextures
                  , y = this.renderer.boundTextures
                  , g = this.renderer.textureGC.count
                  , _ = 0
                  , m = void 0
                  , b = void 0
                  , x = 1
                  , T = 0
                  , E = s[0]
                  , w = void 0
                  , S = void 0
                  , O = l.premultiplyBlendMode[o[0]._texture.baseTexture.premultipliedAlpha ? 1 : 0][o[0].blendMode];
                E.textureCount = 0,
                E.start = 0,
                E.blend = O,
                p++;
                var M = void 0;
                for (M = 0; M < e; ++M) {
                    var P = y[M];
                    P._enabled !== p ? (d[M] = P,
                    P._virtalBoundId = M,
                    P._enabled = p) : d[M] = this.renderer.emptyTextures[M]
                }
                for (p++,
                M = 0; M < this.currentIndex; ++M) {
                    var C = o[M];
                    o[M] = null,
                    m = C._texture.baseTexture;
                    var A = l.premultiplyBlendMode[Number(m.premultipliedAlpha)][C.blendMode];
                    if (O !== A && (O = A,
                    b = null,
                    T = e,
                    p++),
                    b !== m && (b = m,
                    m._enabled !== p)) {
                        if (T === e && (p++,
                        E.size = M - E.start,
                        T = 0,
                        (E = s[x++]).blend = O,
                        E.textureCount = 0,
                        E.start = M),
                        m.touched = g,
                        -1 === m._virtalBoundId)
                            for (var R = 0; R < e; ++R) {
                                var I = (R + v) % e
                                  , D = d[I];
                                if (D._enabled !== p) {
                                    v++,
                                    D._virtalBoundId = -1,
                                    m._virtalBoundId = I,
                                    d[I] = m;
                                    break
                                }
                            }
                        m._enabled = p,
                        E.textureCount++,
                        E.ids[T] = m._virtalBoundId,
                        E.textures[T++] = m
                    }
                    if (w = C.vertexData,
                    S = C._texture._uvs.uvsUint32,
                    this.renderer.roundPixels) {
                        var L = this.renderer.resolution;
                        a[_] = (w[0] * L | 0) / L,
                        a[_ + 1] = (w[1] * L | 0) / L,
                        a[_ + 5] = (w[2] * L | 0) / L,
                        a[_ + 6] = (w[3] * L | 0) / L,
                        a[_ + 10] = (w[4] * L | 0) / L,
                        a[_ + 11] = (w[5] * L | 0) / L,
                        a[_ + 15] = (w[6] * L | 0) / L,
                        a[_ + 16] = (w[7] * L | 0) / L
                    } else
                        a[_] = w[0],
                        a[_ + 1] = w[1],
                        a[_ + 5] = w[2],
                        a[_ + 6] = w[3],
                        a[_ + 10] = w[4],
                        a[_ + 11] = w[5],
                        a[_ + 15] = w[6],
                        a[_ + 16] = w[7];
                    u[_ + 2] = S[0],
                    u[_ + 7] = S[1],
                    u[_ + 12] = S[2],
                    u[_ + 17] = S[3];
                    var N = Math.min(C.worldAlpha, 1)
                      , k = N < 1 && m.premultipliedAlpha ? (0,
                    l.premultiplyTint)(C._tintRGB, N) : C._tintRGB + (255 * N << 24);
                    u[_ + 3] = u[_ + 8] = u[_ + 13] = u[_ + 18] = k,
                    a[_ + 4] = a[_ + 9] = a[_ + 14] = a[_ + 19] = m._virtalBoundId,
                    _ += 20
                }
                if (E.size = M - E.start,
                h.default.CAN_UPLOAD_SAME_BUFFER)
                    this.vertexBuffers[this.vertexCount].upload(i.vertices, 0, !0);
                else {
                    if (this.vaoMax <= this.vertexCount) {
                        this.vaoMax++;
                        var B = this.shader.attributes
                          , F = this.vertexBuffers[this.vertexCount] = c.default.GLBuffer.createVertexBuffer(t, null, t.STREAM_DRAW)
                          , j = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(F, B.aVertexPosition, t.FLOAT, !1, this.vertByteSize, 0).addAttribute(F, B.aTextureCoord, t.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(F, B.aColor, t.UNSIGNED_BYTE, !0, this.vertByteSize, 12);
                        B.aTextureId && j.addAttribute(F, B.aTextureId, t.FLOAT, !1, this.vertByteSize, 16),
                        this.vaos[this.vertexCount] = j
                    }
                    this.renderer.bindVao(this.vaos[this.vertexCount]),
                    this.vertexBuffers[this.vertexCount].upload(i.vertices, 0, !1),
                    this.vertexCount++
                }
                for (M = 0; M < e; ++M)
                    y[M]._virtalBoundId = -1;
                for (M = 0; M < x; ++M) {
                    for (var U = s[M], X = U.textureCount, H = 0; H < X; H++)
                        b = U.textures[H],
                        y[U.ids[H]] !== b && this.renderer.bindTexture(b, U.ids[H], !0),
                        b._virtalBoundId = -1;
                    this.renderer.state.setBlendMode(U.blend),
                    t.drawElements(t.TRIANGLES, 6 * U.size, t.UNSIGNED_SHORT, 6 * U.start * 2)
                }
                this.currentIndex = 0
            }
        }
        ,
        e.prototype.start = function() {
            this.renderer.bindShader(this.shader),
            h.default.CAN_UPLOAD_SAME_BUFFER && (this.renderer.bindVao(this.vaos[this.vertexCount]),
            this.vertexBuffers[this.vertexCount].bind())
        }
        ,
        e.prototype.stop = function() {
            this.flush()
        }
        ,
        e.prototype.destroy = function() {
            for (var e = 0; e < this.vaoMax; e++)
                this.vertexBuffers[e] && this.vertexBuffers[e].destroy(),
                this.vaos[e] && this.vaos[e].destroy();
            this.indexBuffer && this.indexBuffer.destroy(),
            this.renderer.off("prerender", this.onPrerender, this),
            t.prototype.destroy.call(this),
            this.shader && (this.shader.destroy(),
            this.shader = null),
            this.vertexBuffers = null,
            this.vaos = null,
            this.indexBuffer = null,
            this.indices = null,
            this.sprites = null;
            for (var r = 0; r < this.buffers.length; ++r)
                this.buffers[r].destroy()
        }
        ,
        e
    }(n.default);
    e.default = y,
    i.default.registerPlugin("sprite", y)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = o(r(55))
      , i = o(r(173));
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var s = function(t) {
        function e(r) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return n.scissor = !1,
            n.scissorData = null,
            n.scissorRenderTarget = null,
            n.enableScissor = !0,
            n.alphaMaskPool = [],
            n.alphaMaskIndex = 0,
            n
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.pushMask = function(t, e) {
            if (e.texture)
                this.pushSpriteMask(t, e);
            else if (this.enableScissor && !this.scissor && this.renderer._activeRenderTarget.root && !this.renderer.stencilManager.stencilMaskStack.length && e.isFastRect()) {
                var r = e.worldTransform
                  , n = Math.atan2(r.b, r.a);
                (n = Math.round(n * (180 / Math.PI))) % 90 ? this.pushStencilMask(e) : this.pushScissorMask(t, e)
            } else
                this.pushStencilMask(e)
        }
        ,
        e.prototype.popMask = function(t, e) {
            e.texture ? this.popSpriteMask(t, e) : this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length ? this.popScissorMask(t, e) : this.popStencilMask(t, e)
        }
        ,
        e.prototype.pushSpriteMask = function(t, e) {
            var r = this.alphaMaskPool[this.alphaMaskIndex];
            r || (r = this.alphaMaskPool[this.alphaMaskIndex] = [new i.default(e)]),
            r[0].resolution = this.renderer.resolution,
            r[0].maskSprite = e;
            var n = t.filterArea;
            t.filterArea = e.getBounds(!0),
            this.renderer.filterManager.pushFilter(t, r),
            t.filterArea = n,
            this.alphaMaskIndex++
        }
        ,
        e.prototype.popSpriteMask = function() {
            this.renderer.filterManager.popFilter(),
            this.alphaMaskIndex--
        }
        ,
        e.prototype.pushStencilMask = function(t) {
            this.renderer.currentRenderer.stop(),
            this.renderer.stencilManager.pushStencil(t)
        }
        ,
        e.prototype.popStencilMask = function() {
            this.renderer.currentRenderer.stop(),
            this.renderer.stencilManager.popStencil()
        }
        ,
        e.prototype.pushScissorMask = function(t, e) {
            e.renderable = !0;
            var r = this.renderer._activeRenderTarget
              , n = e.getBounds();
            n.fit(r.size),
            e.renderable = !1,
            this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
            var i = this.renderer.resolution;
            this.renderer.gl.scissor(n.x * i, (r.root ? r.size.height - n.y - n.height : n.y) * i, n.width * i, n.height * i),
            this.scissorRenderTarget = r,
            this.scissorData = e,
            this.scissor = !0
        }
        ,
        e.prototype.popScissorMask = function() {
            this.scissorRenderTarget = null,
            this.scissorData = null,
            this.scissor = !1;
            var t = this.renderer.gl;
            t.disable(t.SCISSOR_TEST)
        }
        ,
        e
    }(n.default);
    e.default = s
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t, e, r) {
        var n = s(t)
          , i = s(e);
        return Object.assign(n, i)
    }
    ;
    var n, i = r(19);
    var o = ((n = i) && n.__esModule ? n : {
        default: n
    }).default.shader.defaultValue;
    function s(t) {
        for (var e = new RegExp("^(projectionMatrix|uSampler|filterArea|filterClamp)$"), r = {}, n = void 0, i = t.replace(/\s+/g, " ").split(/\s*;\s*/), s = 0; s < i.length; s++) {
            var a = i[s].trim();
            if (a.indexOf("uniform") > -1) {
                var u = a.split(" ")
                  , h = u[1]
                  , l = u[2]
                  , c = 1;
                l.indexOf("[") > -1 && (n = l.split(/\[|]/),
                l = n[0],
                c *= Number(n[1])),
                l.match(e) || (r[l] = {
                    value: o(h, c),
                    name: l,
                    type: h
                })
            }
        }
        return r
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(55), o = (n = i) && n.__esModule ? n : {
        default: n
    };
    var s = function(t) {
        function e(r) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return n.stencilMaskStack = null,
            n
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.setMaskStack = function(t) {
            this.stencilMaskStack = t;
            var e = this.renderer.gl;
            0 === t.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST)
        }
        ,
        e.prototype.pushStencil = function(t) {
            this.renderer.setObjectRenderer(this.renderer.plugins.graphics),
            this.renderer._activeRenderTarget.attachStencilBuffer();
            var e = this.renderer.gl
              , r = this.stencilMaskStack.length;
            0 === r && e.enable(e.STENCIL_TEST),
            this.stencilMaskStack.push(t),
            e.colorMask(!1, !1, !1, !1),
            e.stencilFunc(e.EQUAL, r, this._getBitwiseMask()),
            e.stencilOp(e.KEEP, e.KEEP, e.INCR),
            this.renderer.plugins.graphics.render(t),
            this._useCurrent()
        }
        ,
        e.prototype.popStencil = function() {
            this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
            var t = this.renderer.gl
              , e = this.stencilMaskStack.pop();
            0 === this.stencilMaskStack.length ? (t.disable(t.STENCIL_TEST),
            t.clear(t.STENCIL_BUFFER_BIT),
            t.clearStencil(0)) : (t.colorMask(!1, !1, !1, !1),
            t.stencilOp(t.KEEP, t.KEEP, t.DECR),
            this.renderer.plugins.graphics.render(e),
            this._useCurrent())
        }
        ,
        e.prototype._useCurrent = function() {
            var t = this.renderer.gl;
            t.colorMask(!0, !0, !0, !0),
            t.stencilFunc(t.EQUAL, this.stencilMaskStack.length, this._getBitwiseMask()),
            t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
        }
        ,
        e.prototype._getBitwiseMask = function() {
            return (1 << this.stencilMaskStack.length) - 1
        }
        ,
        e.prototype.destroy = function() {
            o.default.prototype.destroy.call(this),
            this.stencilMaskStack.stencilStack = null
        }
        ,
        e
    }(o.default);
    e.default = s
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = l(r(55))
      , i = l(r(73))
      , o = l(r(176))
      , s = r(15)
      , a = l(r(56))
      , u = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(330))
      , h = l(r(106));
    function l(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function c(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var f = function() {
        function t() {
            c(this, t),
            this.renderTarget = null,
            this.target = null,
            this.resolution = 1,
            this.sourceFrame = new s.Rectangle,
            this.destinationFrame = new s.Rectangle,
            this.filters = []
        }
        return t.prototype.clear = function() {
            this.filters = null,
            this.target = null,
            this.renderTarget = null
        }
        ,
        t
    }()
      , d = function(t) {
        function e(r) {
            c(this, e);
            var n = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return n.gl = n.renderer.gl,
            n.quad = new o.default(n.gl,r.state.attribState),
            n.shaderCache = {},
            n.pool = {},
            n.filterData = null,
            n.managedFilters = [],
            n.renderer.on("prerender", n.onPrerender, n),
            n._screenWidth = r.view.width,
            n._screenHeight = r.view.height,
            n
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.pushFilter = function(t, e) {
            var r = this.renderer
              , n = this.filterData;
            if (!n) {
                n = this.renderer._activeRenderTarget.filterStack;
                var i = new f;
                i.sourceFrame = i.destinationFrame = this.renderer._activeRenderTarget.size,
                i.renderTarget = r._activeRenderTarget,
                this.renderer._activeRenderTarget.filterData = n = {
                    index: 0,
                    stack: [i]
                },
                this.filterData = n
            }
            var o = n.stack[++n.index]
              , s = n.stack[0].destinationFrame;
            o || (o = n.stack[n.index] = new f);
            var a = t.filterArea && 0 === t.filterArea.x && 0 === t.filterArea.y && t.filterArea.width === r.screen.width && t.filterArea.height === r.screen.height
              , u = e[0].resolution
              , h = 0 | e[0].padding
              , l = a ? r.screen : t.filterArea || t.getBounds(!0)
              , c = o.sourceFrame
              , d = o.destinationFrame;
            c.x = (l.x * u | 0) / u,
            c.y = (l.y * u | 0) / u,
            c.width = (l.width * u | 0) / u,
            c.height = (l.height * u | 0) / u,
            a || (n.stack[0].renderTarget.transform || e[0].autoFit && c.fit(s),
            c.pad(h)),
            d.width = c.width,
            d.height = c.height;
            var p = this.getPotRenderTarget(r.gl, c.width, c.height, u);
            o.target = t,
            o.filters = e,
            o.resolution = u,
            o.renderTarget = p,
            p.setFrame(d, c),
            r.bindRenderTarget(p),
            p.clear()
        }
        ,
        e.prototype.popFilter = function() {
            var t = this.filterData
              , e = t.stack[t.index - 1]
              , r = t.stack[t.index];
            this.quad.map(r.renderTarget.size, r.sourceFrame).upload();
            var n = r.filters;
            if (1 === n.length)
                n[0].apply(this, r.renderTarget, e.renderTarget, !1, r),
                this.freePotRenderTarget(r.renderTarget);
            else {
                var i = r.renderTarget
                  , o = this.getPotRenderTarget(this.renderer.gl, r.sourceFrame.width, r.sourceFrame.height, r.resolution);
                o.setFrame(r.destinationFrame, r.sourceFrame),
                o.clear();
                var s = 0;
                for (s = 0; s < n.length - 1; ++s) {
                    n[s].apply(this, i, o, !0, r);
                    var a = i;
                    i = o,
                    o = a
                }
                n[s].apply(this, i, e.renderTarget, !1, r),
                this.freePotRenderTarget(i),
                this.freePotRenderTarget(o)
            }
            r.clear(),
            t.index--,
            0 === t.index && (this.filterData = null)
        }
        ,
        e.prototype.applyFilter = function(t, e, r, n) {
            var i = this.renderer
              , o = i.gl
              , s = t.glShaders[i.CONTEXT_UID];
            s || (t.glShaderKey ? (s = this.shaderCache[t.glShaderKey]) || (s = new a.default(this.gl,t.vertexSrc,t.fragmentSrc),
            t.glShaders[i.CONTEXT_UID] = this.shaderCache[t.glShaderKey] = s,
            this.managedFilters.push(t)) : (s = t.glShaders[i.CONTEXT_UID] = new a.default(this.gl,t.vertexSrc,t.fragmentSrc),
            this.managedFilters.push(t)),
            i.bindVao(null),
            this.quad.initVao(s)),
            i.bindVao(this.quad.vao),
            i.bindRenderTarget(r),
            n && (o.disable(o.SCISSOR_TEST),
            i.clear(),
            o.enable(o.SCISSOR_TEST)),
            r === i.maskManager.scissorRenderTarget && i.maskManager.pushScissorMask(null, i.maskManager.scissorData),
            i.bindShader(s);
            var u = this.renderer.emptyTextures[0];
            this.renderer.boundTextures[0] = u,
            this.syncUniforms(s, t),
            i.state.setBlendMode(t.blendMode),
            o.activeTexture(o.TEXTURE0),
            o.bindTexture(o.TEXTURE_2D, e.texture.texture),
            this.quad.vao.draw(this.renderer.gl.TRIANGLES, 6, 0),
            o.bindTexture(o.TEXTURE_2D, u._glTextures[this.renderer.CONTEXT_UID].texture)
        }
        ,
        e.prototype.syncUniforms = function(t, e) {
            var r = e.uniformData
              , n = e.uniforms
              , i = 1
              , o = void 0;
            if (t.uniforms.filterArea) {
                o = this.filterData.stack[this.filterData.index];
                var s = t.uniforms.filterArea;
                s[0] = o.renderTarget.size.width,
                s[1] = o.renderTarget.size.height,
                s[2] = o.sourceFrame.x,
                s[3] = o.sourceFrame.y,
                t.uniforms.filterArea = s
            }
            if (t.uniforms.filterClamp) {
                o = o || this.filterData.stack[this.filterData.index];
                var a = t.uniforms.filterClamp;
                a[0] = 0,
                a[1] = 0,
                a[2] = (o.sourceFrame.width - 1) / o.renderTarget.size.width,
                a[3] = (o.sourceFrame.height - 1) / o.renderTarget.size.height,
                t.uniforms.filterClamp = a
            }
            for (var u in r)
                if (t.uniforms.data[u]) {
                    var h = r[u].type;
                    if ("sampler2d" === h && 0 !== n[u]) {
                        if (n[u].baseTexture)
                            t.uniforms[u] = this.renderer.bindTexture(n[u].baseTexture, i);
                        else {
                            t.uniforms[u] = i;
                            var l = this.renderer.gl;
                            this.renderer.boundTextures[i] = this.renderer.emptyTextures[i],
                            l.activeTexture(l.TEXTURE0 + i),
                            n[u].texture.bind()
                        }
                        i++
                    } else if ("mat3" === h)
                        void 0 !== n[u].a ? t.uniforms[u] = n[u].toArray(!0) : t.uniforms[u] = n[u];
                    else if ("vec2" === h)
                        if (void 0 !== n[u].x) {
                            var c = t.uniforms[u] || new Float32Array(2);
                            c[0] = n[u].x,
                            c[1] = n[u].y,
                            t.uniforms[u] = c
                        } else
                            t.uniforms[u] = n[u];
                    else
                        "float" === h ? t.uniforms.data[u].value !== r[u] && (t.uniforms[u] = n[u]) : t.uniforms[u] = n[u]
                }
        }
        ,
        e.prototype.getRenderTarget = function(t, e) {
            var r = this.filterData.stack[this.filterData.index]
              , n = this.getPotRenderTarget(this.renderer.gl, r.sourceFrame.width, r.sourceFrame.height, e || r.resolution);
            return n.setFrame(r.destinationFrame, r.sourceFrame),
            n
        }
        ,
        e.prototype.returnRenderTarget = function(t) {
            this.freePotRenderTarget(t)
        }
        ,
        e.prototype.calculateScreenSpaceMatrix = function(t) {
            var e = this.filterData.stack[this.filterData.index];
            return u.calculateScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size)
        }
        ,
        e.prototype.calculateNormalizedScreenSpaceMatrix = function(t) {
            var e = this.filterData.stack[this.filterData.index];
            return u.calculateNormalizedScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size, e.destinationFrame)
        }
        ,
        e.prototype.calculateSpriteMatrix = function(t, e) {
            var r = this.filterData.stack[this.filterData.index];
            return u.calculateSpriteMatrix(t, r.sourceFrame, r.renderTarget.size, e)
        }
        ,
        e.prototype.destroy = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , e = this.renderer
              , r = this.managedFilters;
            e.off("prerender", this.onPrerender, this);
            for (var n = 0; n < r.length; n++)
                t || r[n].glShaders[e.CONTEXT_UID].destroy(),
                delete r[n].glShaders[e.CONTEXT_UID];
            this.shaderCache = {},
            t ? this.pool = {} : this.emptyPool()
        }
        ,
        e.prototype.getPotRenderTarget = function(t, e, r, n) {
            var o = "screen";
            r *= n,
            (e *= n) === this._screenWidth && r === this._screenHeight || (o = (65535 & (e = h.default.nextPow2(e))) << 16 | 65535 & (r = h.default.nextPow2(r))),
            this.pool[o] || (this.pool[o] = []);
            var s = this.pool[o].pop();
            if (!s) {
                var a = this.renderer.boundTextures[0];
                t.activeTexture(t.TEXTURE0),
                s = new i.default(t,e,r,null,1),
                t.bindTexture(t.TEXTURE_2D, a._glTextures[this.renderer.CONTEXT_UID].texture)
            }
            return s.resolution = n,
            s.defaultFrame.width = s.size.width = e / n,
            s.defaultFrame.height = s.size.height = r / n,
            s.filterPoolKey = o,
            s
        }
        ,
        e.prototype.emptyPool = function() {
            for (var t in this.pool) {
                var e = this.pool[t];
                if (e)
                    for (var r = 0; r < e.length; r++)
                        e[r].destroy(!0)
            }
            this.pool = {}
        }
        ,
        e.prototype.freePotRenderTarget = function(t) {
            this.pool[t.filterPoolKey].push(t)
        }
        ,
        e.prototype.onPrerender = function() {
            if (this._screenWidth !== this.renderer.view.width || this._screenHeight !== this.renderer.view.height) {
                this._screenWidth = this.renderer.view.width,
                this._screenHeight = this.renderer.view.height;
                var t = this.pool.screen;
                if (t)
                    for (var e = 0; e < t.length; e++)
                        t[e].destroy(!0);
                this.pool.screen = []
            }
        }
        ,
        e
    }(n.default);
    e.default = d
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.calculateScreenSpaceMatrix = function(t, e, r) {
        var n = t.identity();
        return n.translate(e.x / r.width, e.y / r.height),
        n.scale(r.width, r.height),
        n
    }
    ,
    e.calculateNormalizedScreenSpaceMatrix = function(t, e, r) {
        var n = t.identity();
        n.translate(e.x / r.width, e.y / r.height);
        var i = r.width / e.width
          , o = r.height / e.height;
        return n.scale(i, o),
        n
    }
    ,
    e.calculateSpriteMatrix = function(t, e, r, i) {
        var o = i._texture.orig
          , s = t.set(r.width, 0, 0, r.height, e.x, e.y)
          , a = i.worldTransform.copy(n.Matrix.TEMP_MATRIX);
        return a.invert(),
        s.prepend(a),
        s.scale(1 / o.width, 1 / o.height),
        s.translate(i.anchor.x, i.anchor.y),
        s
    }
    ;
    var n = r(15)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(19), o = r(4), s = r(73), a = (n = s) && n.__esModule ? n : {
        default: n
    }, u = r(6);
    var h = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.renderer = e,
            this.gl = e.gl,
            this._managedTextures = []
        }
        return t.prototype.bindTexture = function() {}
        ,
        t.prototype.getTexture = function() {}
        ,
        t.prototype.updateTexture = function(t, e) {
            var r = this.gl
              , n = !!t._glRenderTargets;
            if (!t.hasLoaded)
                return null;
            var s = this.renderer.boundTextures;
            if (void 0 === e) {
                e = 0;
                for (var u = 0; u < s.length; ++u)
                    if (s[u] === t) {
                        e = u;
                        break
                    }
            }
            s[e] = t,
            r.activeTexture(r.TEXTURE0 + e);
            var h = t._glTextures[this.renderer.CONTEXT_UID];
            if (h)
                n ? t._glRenderTargets[this.renderer.CONTEXT_UID].resize(t.width, t.height) : h.upload(t.source);
            else {
                if (n) {
                    var l = new a.default(this.gl,t.width,t.height,t.scaleMode,t.resolution);
                    l.resize(t.width, t.height),
                    t._glRenderTargets[this.renderer.CONTEXT_UID] = l,
                    h = l.texture,
                    this.renderer._activeRenderTarget.root || this.renderer._activeRenderTarget.frameBuffer.bind()
                } else
                    (h = new i.GLTexture(this.gl,null,null,null,null)).bind(e),
                    h.premultiplyAlpha = !0,
                    h.upload(t.source);
                t._glTextures[this.renderer.CONTEXT_UID] = h,
                t.on("update", this.updateTexture, this),
                t.on("dispose", this.destroyTexture, this),
                this._managedTextures.push(t),
                t.isPowerOfTwo ? (t.mipmap && h.enableMipmap(),
                t.wrapMode === o.WRAP_MODES.CLAMP ? h.enableWrapClamp() : t.wrapMode === o.WRAP_MODES.REPEAT ? h.enableWrapRepeat() : h.enableWrapMirrorRepeat()) : h.enableWrapClamp(),
                t.scaleMode === o.SCALE_MODES.NEAREST ? h.enableNearestScaling() : h.enableLinearScaling()
            }
            return h
        }
        ,
        t.prototype.destroyTexture = function(t, e) {
            if ((t = t.baseTexture || t).hasLoaded) {
                var r = this.renderer
                  , n = r.CONTEXT_UID
                  , i = t._glTextures
                  , o = t._glRenderTargets;
                if (i[n] && (r.unbindTexture(t),
                i[n].destroy(),
                t.off("update", this.updateTexture, this),
                t.off("dispose", this.destroyTexture, this),
                delete i[n],
                !e)) {
                    var s = this._managedTextures.indexOf(t);
                    -1 !== s && (0,
                    u.removeItems)(this._managedTextures, s, 1)
                }
                o && o[n] && (r._activeRenderTarget === o[n] && r.bindRenderTarget(r.rootRenderTarget),
                o[n].destroy(),
                delete o[n])
            }
        }
        ,
        t.prototype.removeAll = function() {
            for (var t = 0; t < this._managedTextures.length; ++t) {
                var e = this._managedTextures[t];
                e._glTextures[this.renderer.CONTEXT_UID] && delete e._glTextures[this.renderer.CONTEXT_UID]
            }
        }
        ,
        t.prototype.destroy = function() {
            for (var t = 0; t < this._managedTextures.length; ++t) {
                var e = this._managedTextures[t];
                this.destroyTexture(e, !0),
                e.off("update", this.updateTexture, this),
                e.off("dispose", this.destroyTexture, this)
            }
            this._managedTextures = null
        }
        ,
        t
    }();
    e.default = h
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(4), o = r(12), s = (n = o) && n.__esModule ? n : {
        default: n
    };
    var a = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.renderer = e,
            this.count = 0,
            this.checkCount = 0,
            this.maxIdle = s.default.GC_MAX_IDLE,
            this.checkCountMax = s.default.GC_MAX_CHECK_COUNT,
            this.mode = s.default.GC_MODE
        }
        return t.prototype.update = function() {
            this.count++,
            this.mode !== i.GC_MODES.MANUAL && (this.checkCount++,
            this.checkCount > this.checkCountMax && (this.checkCount = 0,
            this.run()))
        }
        ,
        t.prototype.run = function() {
            for (var t = this.renderer.textureManager, e = t._managedTextures, r = !1, n = 0; n < e.length; n++) {
                var i = e[n];
                !i._glRenderTargets && this.count - i.touched > this.maxIdle && (t.destroyTexture(i, !0),
                e[n] = null,
                r = !0)
            }
            if (r) {
                for (var o = 0, s = 0; s < e.length; s++)
                    null !== e[s] && (e[o++] = e[s]);
                e.length = o
            }
        }
        ,
        t.prototype.unload = function(t) {
            var e = this.renderer.textureManager;
            t._texture && t._texture._glRenderTargets && e.destroyTexture(t._texture, !0);
            for (var r = t.children.length - 1; r >= 0; r--)
                this.unload(t.children[r])
        }
        ,
        t
    }();
    e.default = a
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(334), o = (n = i) && n.__esModule ? n : {
        default: n
    };
    var s = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.activeState = new Uint8Array(16),
            this.defaultState = new Uint8Array(16),
            this.defaultState[0] = 1,
            this.stackIndex = 0,
            this.stack = [],
            this.gl = e,
            this.maxAttribs = e.getParameter(e.MAX_VERTEX_ATTRIBS),
            this.attribState = {
                tempAttribState: new Array(this.maxAttribs),
                attribState: new Array(this.maxAttribs)
            },
            this.blendModes = (0,
            o.default)(e),
            this.nativeVaoExtension = e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object")
        }
        return t.prototype.push = function() {
            var t = this.stack[this.stackIndex];
            t || (t = this.stack[this.stackIndex] = new Uint8Array(16)),
            ++this.stackIndex;
            for (var e = 0; e < this.activeState.length; e++)
                t[e] = this.activeState[e]
        }
        ,
        t.prototype.pop = function() {
            var t = this.stack[--this.stackIndex];
            this.setState(t)
        }
        ,
        t.prototype.setState = function(t) {
            this.setBlend(t[0]),
            this.setDepthTest(t[1]),
            this.setFrontFace(t[2]),
            this.setCullFace(t[3]),
            this.setBlendMode(t[4])
        }
        ,
        t.prototype.setBlend = function(t) {
            t = t ? 1 : 0,
            this.activeState[0] !== t && (this.activeState[0] = t,
            this.gl[t ? "enable" : "disable"](this.gl.BLEND))
        }
        ,
        t.prototype.setBlendMode = function(t) {
            if (t !== this.activeState[4]) {
                this.activeState[4] = t;
                var e = this.blendModes[t];
                2 === e.length ? this.gl.blendFunc(e[0], e[1]) : this.gl.blendFuncSeparate(e[0], e[1], e[2], e[3])
            }
        }
        ,
        t.prototype.setDepthTest = function(t) {
            t = t ? 1 : 0,
            this.activeState[1] !== t && (this.activeState[1] = t,
            this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST))
        }
        ,
        t.prototype.setCullFace = function(t) {
            t = t ? 1 : 0,
            this.activeState[3] !== t && (this.activeState[3] = t,
            this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE))
        }
        ,
        t.prototype.setFrontFace = function(t) {
            t = t ? 1 : 0,
            this.activeState[2] !== t && (this.activeState[2] = t,
            this.gl.frontFace(this.gl[t ? "CW" : "CCW"]))
        }
        ,
        t.prototype.resetAttributes = function() {
            for (var t = 0; t < this.attribState.tempAttribState.length; t++)
                this.attribState.tempAttribState[t] = 0;
            for (var e = 0; e < this.attribState.attribState.length; e++)
                this.attribState.attribState[e] = 0;
            for (var r = 1; r < this.maxAttribs; r++)
                this.gl.disableVertexAttribArray(r)
        }
        ,
        t.prototype.resetToDefault = function() {
            this.nativeVaoExtension && this.nativeVaoExtension.bindVertexArrayOES(null),
            this.resetAttributes();
            for (var t = 0; t < this.activeState.length; ++t)
                this.activeState[t] = 32;
            this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
            this.setState(this.defaultState)
        }
        ,
        t
    }();
    e.default = s
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return e[n.BLEND_MODES.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.ADD] = [t.ONE, t.ONE],
        e[n.BLEND_MODES.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.NORMAL_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e[n.BLEND_MODES.ADD_NPM] = [t.SRC_ALPHA, t.ONE, t.ONE, t.ONE],
        e[n.BLEND_MODES.SCREEN_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA],
        e
    }
    ;
    var n = r(4)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e[n.DRAW_MODES.POINTS] = t.POINTS,
        e[n.DRAW_MODES.LINES] = t.LINES,
        e[n.DRAW_MODES.LINE_LOOP] = t.LINE_LOOP,
        e[n.DRAW_MODES.LINE_STRIP] = t.LINE_STRIP,
        e[n.DRAW_MODES.TRIANGLES] = t.TRIANGLES,
        e[n.DRAW_MODES.TRIANGLE_STRIP] = t.TRIANGLE_STRIP,
        e[n.DRAW_MODES.TRIANGLE_FAN] = t.TRIANGLE_FAN,
        e
    }
    ;
    var n = r(4)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t) {
        t.getContextAttributes().stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t, e) {
        var r = s;
        r = (r = r.replace(/%count%/gi, e)).replace(/%forloop%/gi, function(t) {
            var e = "";
            e += "\n",
            e += "\n";
            for (var r = 0; r < t; r++)
                r > 0 && (e += "\nelse "),
                r < t - 1 && (e += "if(vTextureId < " + r + ".5)"),
                e += "\n{",
                e += "\n\tcolor = texture2D(uSamplers[" + r + "], vTextureCoord);",
                e += "\n}";
            return e += "\n",
            e += "\n"
        }(e));
        for (var n = new o.default(t,"precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor;\n}\n",r), i = [], a = 0; a < e; a++)
            i[a] = a;
        return n.bind(),
        n.uniforms.uSamplers = i,
        n
    }
    ;
    var n, i = r(56), o = (n = i) && n.__esModule ? n : {
        default: n
    };
    r(24);
    var s = ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "varying float vTextureId;", "uniform sampler2D uSamplers[%count%];", "void main(void){", "vec4 color;", "%forloop%", "gl_FragColor = color * vColor;", "}"].join("\n")
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t, e) {
        var r = !e;
        if (0 === t)
            throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
        if (r) {
            var n = document.createElement("canvas");
            n.width = 1,
            n.height = 1,
            e = o.default.createContext(n)
        }
        var i = e.createShader(e.FRAGMENT_SHADER);
        for (; ; ) {
            var u = s.replace(/%forloop%/gi, a(t));
            if (e.shaderSource(i, u),
            e.compileShader(i),
            e.getShaderParameter(i, e.COMPILE_STATUS))
                break;
            t = t / 2 | 0
        }
        r && e.getExtension("WEBGL_lose_context") && e.getExtension("WEBGL_lose_context").loseContext();
        return t
    }
    ;
    var n, i = r(19), o = (n = i) && n.__esModule ? n : {
        default: n
    };
    var s = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");
    function a(t) {
        for (var e = "", r = 0; r < t; ++r)
            r > 0 && (e += "\nelse "),
            r < t - 1 && (e += "if(test == " + r + ".0){}");
        return e
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.vertices = new ArrayBuffer(e),
            this.float32View = new Float32Array(this.vertices),
            this.uint32View = new Uint32Array(this.vertices)
        }
        return t.prototype.destroy = function() {
            this.vertices = null,
            this.positions = null,
            this.uvs = null,
            this.colors = null
        }
        ,
        t
    }();
    e.default = n
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = d(r(105))
      , o = d(r(29))
      , s = r(15)
      , a = r(6)
      , u = r(4)
      , h = d(r(12))
      , l = d(r(177))
      , c = d(r(178))
      , f = d(r(341));
    function d(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var p = {
        texture: !0,
        children: !1,
        baseTexture: !0
    }
      , v = function(t) {
        function e(r, n, i) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            (i = i || document.createElement("canvas")).width = 3,
            i.height = 3;
            var a = o.default.fromCanvas(i, h.default.SCALE_MODE, "text");
            a.orig = new s.Rectangle,
            a.trim = new s.Rectangle;
            var u = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, a));
            return o.default.addToCache(u._texture, u._texture.baseTexture.textureCacheIds[0]),
            u.canvas = i,
            u.context = u.canvas.getContext("2d"),
            u.resolution = h.default.RESOLUTION,
            u._text = null,
            u._style = null,
            u._styleListener = null,
            u._font = "",
            u.text = r,
            u.style = n,
            u.localStyleID = -1,
            u
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.updateText = function(t) {
            var e = this._style;
            if (this.localStyleID !== e.styleID && (this.dirty = !0,
            this.localStyleID = e.styleID),
            this.dirty || !t) {
                this._font = this._style.toFontString();
                var r = this.context
                  , n = c.default.measureText(this._text, this._style, this._style.wordWrap, this.canvas)
                  , i = n.width
                  , o = n.height
                  , s = n.lines
                  , a = n.lineHeight
                  , u = n.lineWidths
                  , h = n.maxLineWidth
                  , l = n.fontProperties;
                this.canvas.width = Math.ceil((Math.max(1, i) + 2 * e.padding) * this.resolution),
                this.canvas.height = Math.ceil((Math.max(1, o) + 2 * e.padding) * this.resolution),
                r.scale(this.resolution, this.resolution),
                r.clearRect(0, 0, this.canvas.width, this.canvas.height),
                r.font = this._font,
                r.strokeStyle = e.stroke,
                r.lineWidth = e.strokeThickness,
                r.textBaseline = e.textBaseline,
                r.lineJoin = e.lineJoin,
                r.miterLimit = e.miterLimit;
                var f = void 0
                  , d = void 0;
                if (e.dropShadow) {
                    r.fillStyle = e.dropShadowColor,
                    r.globalAlpha = e.dropShadowAlpha,
                    r.shadowBlur = e.dropShadowBlur,
                    e.dropShadowBlur > 0 && (r.shadowColor = e.dropShadowColor);
                    for (var p = Math.cos(e.dropShadowAngle) * e.dropShadowDistance, v = Math.sin(e.dropShadowAngle) * e.dropShadowDistance, y = 0; y < s.length; y++)
                        f = e.strokeThickness / 2,
                        d = e.strokeThickness / 2 + y * a + l.ascent,
                        "right" === e.align ? f += h - u[y] : "center" === e.align && (f += (h - u[y]) / 2),
                        e.fill && (this.drawLetterSpacing(s[y], f + p + e.padding, d + v + e.padding),
                        e.stroke && e.strokeThickness && (r.strokeStyle = e.dropShadowColor,
                        this.drawLetterSpacing(s[y], f + p + e.padding, d + v + e.padding, !0),
                        r.strokeStyle = e.stroke))
                }
                r.shadowBlur = 0,
                r.globalAlpha = 1,
                r.fillStyle = this._generateFillStyle(e, s);
                for (var g = 0; g < s.length; g++)
                    f = e.strokeThickness / 2,
                    d = e.strokeThickness / 2 + g * a + l.ascent,
                    "right" === e.align ? f += h - u[g] : "center" === e.align && (f += (h - u[g]) / 2),
                    e.stroke && e.strokeThickness && this.drawLetterSpacing(s[g], f + e.padding, d + e.padding, !0),
                    e.fill && this.drawLetterSpacing(s[g], f + e.padding, d + e.padding);
                this.updateTexture()
            }
        }
        ,
        e.prototype.drawLetterSpacing = function(t, e, r) {
            var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
              , i = this._style
              , o = i.letterSpacing;
            if (0 !== o)
                for (var s = String.prototype.split.call(t, ""), a = e, u = 0, h = "", l = this.context.measureText(t).width, c = 0; u < t.length; )
                    h = s[u++],
                    n ? this.context.strokeText(h, a, r) : this.context.fillText(h, a, r),
                    a += l - (c = this.context.measureText(t.substring(u)).width) + o,
                    l = c;
            else
                n ? this.context.strokeText(t, e, r) : this.context.fillText(t, e, r)
        }
        ,
        e.prototype.updateTexture = function() {
            var t = this.canvas;
            if (this._style.trim) {
                var e = (0,
                f.default)(t);
                e.data && (t.width = e.width,
                t.height = e.height,
                this.context.putImageData(e.data, 0, 0))
            }
            var r = this._texture
              , n = this._style
              , i = n.trim ? 0 : n.padding
              , o = r.baseTexture;
            o.hasLoaded = !0,
            o.resolution = this.resolution,
            o.realWidth = t.width,
            o.realHeight = t.height,
            o.width = t.width / this.resolution,
            o.height = t.height / this.resolution,
            r.trim.width = r._frame.width = t.width / this.resolution,
            r.trim.height = r._frame.height = t.height / this.resolution,
            r.trim.x = -i,
            r.trim.y = -i,
            r.orig.width = r._frame.width - 2 * i,
            r.orig.height = r._frame.height - 2 * i,
            this._onTextureUpdate(),
            o.emit("update", o),
            this.dirty = !1
        }
        ,
        e.prototype.renderWebGL = function(e) {
            this.resolution !== e.resolution && (this.resolution = e.resolution,
            this.dirty = !0),
            this.updateText(!0),
            t.prototype.renderWebGL.call(this, e)
        }
        ,
        e.prototype._renderCanvas = function(e) {
            this.resolution !== e.resolution && (this.resolution = e.resolution,
            this.dirty = !0),
            this.updateText(!0),
            t.prototype._renderCanvas.call(this, e)
        }
        ,
        e.prototype.getLocalBounds = function(e) {
            return this.updateText(!0),
            t.prototype.getLocalBounds.call(this, e)
        }
        ,
        e.prototype._calculateBounds = function() {
            this.updateText(!0),
            this.calculateVertices(),
            this._bounds.addQuad(this.vertexData)
        }
        ,
        e.prototype._onStyleChange = function() {
            this.dirty = !0
        }
        ,
        e.prototype._generateFillStyle = function(t, e) {
            if (!Array.isArray(t.fill))
                return t.fill;
            if (navigator.isCocoonJS)
                return t.fill[0];
            var r = void 0
              , n = void 0
              , i = void 0
              , o = void 0
              , s = this.canvas.width / this.resolution
              , a = this.canvas.height / this.resolution
              , h = t.fill.slice()
              , l = t.fillGradientStops.slice();
            if (!l.length)
                for (var c = h.length + 1, f = 1; f < c; ++f)
                    l.push(f / c);
            if (h.unshift(t.fill[0]),
            l.unshift(0),
            h.push(t.fill[t.fill.length - 1]),
            l.push(1),
            t.fillGradientType === u.TEXT_GRADIENT.LINEAR_VERTICAL) {
                r = this.context.createLinearGradient(s / 2, 0, s / 2, a),
                n = (h.length + 1) * e.length,
                i = 0;
                for (var d = 0; d < e.length; d++) {
                    i += 1;
                    for (var p = 0; p < h.length; p++)
                        o = "number" == typeof l[p] ? l[p] / e.length + d / e.length : i / n,
                        r.addColorStop(o, h[p]),
                        i++
                }
            } else {
                r = this.context.createLinearGradient(0, a / 2, s, a / 2),
                n = h.length + 1,
                i = 1;
                for (var v = 0; v < h.length; v++)
                    o = "number" == typeof l[v] ? l[v] : i / n,
                    r.addColorStop(o, h[v]),
                    i++
            }
            return r
        }
        ,
        e.prototype.destroy = function(e) {
            "boolean" == typeof e && (e = {
                children: e
            }),
            e = Object.assign({}, p, e),
            t.prototype.destroy.call(this, e),
            this.context = null,
            this.canvas = null,
            this._style = null
        }
        ,
        n(e, [{
            key: "width",
            get: function() {
                return this.updateText(!0),
                Math.abs(this.scale.x) * this._texture.orig.width
            },
            set: function(t) {
                this.updateText(!0);
                var e = (0,
                a.sign)(this.scale.x) || 1;
                this.scale.x = e * t / this._texture.orig.width,
                this._width = t
            }
        }, {
            key: "height",
            get: function() {
                return this.updateText(!0),
                Math.abs(this.scale.y) * this._texture.orig.height
            },
            set: function(t) {
                this.updateText(!0);
                var e = (0,
                a.sign)(this.scale.y) || 1;
                this.scale.y = e * t / this._texture.orig.height,
                this._height = t
            }
        }, {
            key: "style",
            get: function() {
                return this._style
            },
            set: function(t) {
                (t = t || {})instanceof l.default ? this._style = t : this._style = new l.default(t),
                this.localStyleID = -1,
                this.dirty = !0
            }
        }, {
            key: "text",
            get: function() {
                return this._text
            },
            set: function(t) {
                t = String("" === t || null == t ? " " : t),
                this._text !== t && (this._text = t,
                this.dirty = !0)
            }
        }]),
        e
    }(i.default);
    e.default = v
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t) {
        var e = t.width
          , r = t.height
          , n = t.getContext("2d")
          , i = n.getImageData(0, 0, e, r).data
          , o = i.length
          , s = {
            top: null,
            left: null,
            right: null,
            bottom: null
        }
          , a = null
          , u = void 0
          , h = void 0
          , l = void 0;
        for (u = 0; u < o; u += 4)
            0 !== i[u + 3] && (h = u / 4 % e,
            l = ~~(u / 4 / e),
            null === s.top && (s.top = l),
            (null === s.left || h < s.left) && (s.left = h),
            (null === s.right || s.right < h) && (s.right = h + 1),
            (null === s.bottom || s.bottom < l) && (s.bottom = l));
        null !== s.top && (e = s.right - s.left,
        r = s.bottom - s.top + 1,
        a = n.getImageData(s.left, s.top, e, r));
        return {
            height: r,
            width: e,
            data: a
        }
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = p(r(53))
      , i = p(r(108))
      , o = p(r(29))
      , s = p(r(179))
      , a = p(r(105))
      , u = r(15)
      , h = r(6)
      , l = r(4)
      , c = p(r(101))
      , f = p(r(343))
      , d = p(r(54));
    function p(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function v(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function y(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    var g = void 0
      , _ = new u.Matrix
      , m = new u.Point
      , b = new Float32Array(4)
      , x = new Float32Array(4)
      , T = function(t) {
        function e() {
            var r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            v(this, e);
            var n = y(this, t.call(this));
            return n.fillAlpha = 1,
            n.lineWidth = 0,
            n.nativeLines = r,
            n.lineColor = 0,
            n.lineAlignment = .5,
            n.graphicsData = [],
            n.tint = 16777215,
            n._prevTint = 16777215,
            n.blendMode = l.BLEND_MODES.NORMAL,
            n.currentPath = null,
            n._webGL = {},
            n.isMask = !1,
            n.boundsPadding = 0,
            n._localBounds = new c.default,
            n.dirty = 0,
            n.fastRectDirty = -1,
            n.clearDirty = 0,
            n.boundsDirty = -1,
            n.cachedSpriteDirty = !1,
            n._spriteRect = null,
            n._fastRect = !1,
            n._prevRectTint = null,
            n._prevRectFillColor = null,
            n
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.clone = function() {
            var t = new e;
            t.renderable = this.renderable,
            t.fillAlpha = this.fillAlpha,
            t.lineWidth = this.lineWidth,
            t.lineColor = this.lineColor,
            t.lineAlignment = this.lineAlignment,
            t.tint = this.tint,
            t.blendMode = this.blendMode,
            t.isMask = this.isMask,
            t.boundsPadding = this.boundsPadding,
            t.dirty = 0,
            t.cachedSpriteDirty = this.cachedSpriteDirty;
            for (var r = 0; r < this.graphicsData.length; ++r)
                t.graphicsData.push(this.graphicsData[r].clone());
            return t.currentPath = t.graphicsData[t.graphicsData.length - 1],
            t.updateLocalBounds(),
            t
        }
        ,
        e.prototype._quadraticCurveLength = function(t, e, r, n, i, o) {
            var s = t - 2 * r + i
              , a = e - 2 * n + o
              , u = 2 * r - 2 * t
              , h = 2 * n - 2 * e
              , l = 4 * (s * s + a * a)
              , c = 4 * (s * u + a * h)
              , f = u * u + h * h
              , d = 2 * Math.sqrt(l + c + f)
              , p = Math.sqrt(l)
              , v = 2 * l * p
              , y = 2 * Math.sqrt(f)
              , g = c / p;
            return (v * d + p * c * (d - y) + (4 * f * l - c * c) * Math.log((2 * p + g + d) / (g + y))) / (4 * v)
        }
        ,
        e.prototype._bezierCurveLength = function(t, e, r, n, i, o, s, a) {
            for (var u = 0, h = 0, l = 0, c = 0, f = 0, d = 0, p = 0, v = 0, y = 0, g = 0, _ = 0, m = t, b = e, x = 1; x <= 10; ++x)
                g = m - (v = (p = (d = (f = 1 - (h = x / 10)) * f) * f) * t + 3 * d * h * r + 3 * f * (l = h * h) * i + (c = l * h) * s),
                _ = b - (y = p * e + 3 * d * h * n + 3 * f * l * o + c * a),
                m = v,
                b = y,
                u += Math.sqrt(g * g + _ * _);
            return u
        }
        ,
        e.prototype._segmentsCount = function(t) {
            var r = Math.ceil(t / e.CURVES.maxLength);
            return r < e.CURVES.minSegments ? r = e.CURVES.minSegments : r > e.CURVES.maxSegments && (r = e.CURVES.maxSegments),
            r
        }
        ,
        e.prototype.lineStyle = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
              , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
            if (this.lineWidth = t,
            this.lineColor = e,
            this.lineAlpha = r,
            this.lineAlignment = n,
            this.currentPath)
                if (this.currentPath.shape.points.length) {
                    var i = new u.Polygon(this.currentPath.shape.points.slice(-2));
                    i.closed = !1,
                    this.drawShape(i)
                } else
                    this.currentPath.lineWidth = this.lineWidth,
                    this.currentPath.lineColor = this.lineColor,
                    this.currentPath.lineAlpha = this.lineAlpha,
                    this.currentPath.lineAlignment = this.lineAlignment;
            return this
        }
        ,
        e.prototype.moveTo = function(t, e) {
            var r = new u.Polygon([t, e]);
            return r.closed = !1,
            this.drawShape(r),
            this
        }
        ,
        e.prototype.lineTo = function(t, e) {
            var r = this.currentPath.shape.points
              , n = r[r.length - 2]
              , i = r[r.length - 1];
            return n === t && i === e || (r.push(t, e),
            this.dirty++),
            this
        }
        ,
        e.prototype.quadraticCurveTo = function(t, r, n, i) {
            this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
            var o = this.currentPath.shape.points
              , s = 0
              , a = 0;
            0 === o.length && this.moveTo(0, 0);
            for (var u = o[o.length - 2], h = o[o.length - 1], l = e.CURVES.adaptive ? this._segmentsCount(this._quadraticCurveLength(u, h, t, r, n, i)) : 20, c = 1; c <= l; ++c) {
                var f = c / l;
                s = u + (t - u) * f,
                a = h + (r - h) * f,
                o.push(s + (t + (n - t) * f - s) * f, a + (r + (i - r) * f - a) * f)
            }
            return this.dirty++,
            this
        }
        ,
        e.prototype.bezierCurveTo = function(t, r, n, i, o, s) {
            this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
            var a = this.currentPath.shape.points
              , u = a[a.length - 2]
              , h = a[a.length - 1];
            a.length -= 2;
            var l = e.CURVES.adaptive ? this._segmentsCount(this._bezierCurveLength(u, h, t, r, n, i, o, s)) : 20;
            return (0,
            f.default)(u, h, t, r, n, i, o, s, l, a),
            this.dirty++,
            this
        }
        ,
        e.prototype.arcTo = function(t, e, r, n, i) {
            this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
            var o = this.currentPath.shape.points
              , s = o[o.length - 2]
              , a = o[o.length - 1] - e
              , u = s - t
              , h = n - e
              , l = r - t
              , c = Math.abs(a * l - u * h);
            if (c < 1e-8 || 0 === i)
                o[o.length - 2] === t && o[o.length - 1] === e || o.push(t, e);
            else {
                var f = a * a + u * u
                  , d = h * h + l * l
                  , p = a * h + u * l
                  , v = i * Math.sqrt(f) / c
                  , y = i * Math.sqrt(d) / c
                  , g = v * p / f
                  , _ = y * p / d
                  , m = v * l + y * u
                  , b = v * h + y * a
                  , x = u * (y + g)
                  , T = a * (y + g)
                  , E = l * (v + _)
                  , w = h * (v + _)
                  , S = Math.atan2(T - b, x - m)
                  , O = Math.atan2(w - b, E - m);
                this.arc(m + t, b + e, i, S, O, u * h > l * a)
            }
            return this.dirty++,
            this
        }
        ,
        e.prototype.arc = function(t, r, n, i, o) {
            var s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            if (i === o)
                return this;
            !s && o <= i ? o += l.PI_2 : s && i <= o && (i += l.PI_2);
            var a = o - i
              , u = e.CURVES.adaptive ? this._segmentsCount(Math.abs(a) * n) : 40 * Math.ceil(Math.abs(a) / l.PI_2);
            if (0 === a)
                return this;
            var h = t + Math.cos(i) * n
              , c = r + Math.sin(i) * n
              , f = this.currentPath ? this.currentPath.shape.points : null;
            if (f) {
                var d = Math.abs(f[f.length - 2] - h)
                  , p = Math.abs(f[f.length - 1] - c);
                d < .001 && p < .001 || f.push(h, c)
            } else
                this.moveTo(h, c),
                f = this.currentPath.shape.points;
            for (var v = a / (2 * u), y = 2 * v, g = Math.cos(v), _ = Math.sin(v), m = u - 1, b = m % 1 / m, x = 0; x <= m; ++x) {
                var T = x + b * x
                  , E = v + i + y * T
                  , w = Math.cos(E)
                  , S = -Math.sin(E);
                f.push((g * w + _ * S) * n + t, (g * -S + _ * w) * n + r)
            }
            return this.dirty++,
            this
        }
        ,
        e.prototype.beginFill = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            return this.filling = !0,
            this.fillColor = t,
            this.fillAlpha = e,
            this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling,
            this.currentPath.fillColor = this.fillColor,
            this.currentPath.fillAlpha = this.fillAlpha),
            this
        }
        ,
        e.prototype.endFill = function() {
            return this.filling = !1,
            this.fillColor = null,
            this.fillAlpha = 1,
            this
        }
        ,
        e.prototype.drawRect = function(t, e, r, n) {
            return this.drawShape(new u.Rectangle(t,e,r,n)),
            this
        }
        ,
        e.prototype.drawRoundedRect = function(t, e, r, n, i) {
            return this.drawShape(new u.RoundedRectangle(t,e,r,n,i)),
            this
        }
        ,
        e.prototype.drawCircle = function(t, e, r) {
            return this.drawShape(new u.Circle(t,e,r)),
            this
        }
        ,
        e.prototype.drawEllipse = function(t, e, r, n) {
            return this.drawShape(new u.Ellipse(t,e,r,n)),
            this
        }
        ,
        e.prototype.drawPolygon = function(t) {
            var e = t
              , r = !0;
            if (e instanceof u.Polygon && (r = e.closed,
            e = e.points),
            !Array.isArray(e)) {
                e = new Array(arguments.length);
                for (var n = 0; n < e.length; ++n)
                    e[n] = arguments[n]
            }
            var i = new u.Polygon(e);
            return i.closed = r,
            this.drawShape(i),
            this
        }
        ,
        e.prototype.drawStar = function(t, e, r, n, i) {
            var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            i = i || n / 2;
            for (var s = -1 * Math.PI / 2 + o, a = 2 * r, u = l.PI_2 / a, h = [], c = 0; c < a; c++) {
                var f = c % 2 ? i : n
                  , d = c * u + s;
                h.push(t + f * Math.cos(d), e + f * Math.sin(d))
            }
            return this.drawPolygon(h)
        }
        ,
        e.prototype.clear = function() {
            return (this.lineWidth || this.filling || this.graphicsData.length > 0) && (this.lineWidth = 0,
            this.lineAlignment = .5,
            this.filling = !1,
            this.boundsDirty = -1,
            this.canvasTintDirty = -1,
            this.dirty++,
            this.clearDirty++,
            this.graphicsData.length = 0),
            this.currentPath = null,
            this._spriteRect = null,
            this
        }
        ,
        e.prototype.isFastRect = function() {
            return 1 === this.graphicsData.length && this.graphicsData[0].shape.type === l.SHAPES.RECT && !this.graphicsData[0].lineWidth
        }
        ,
        e.prototype._renderWebGL = function(t) {
            this.dirty !== this.fastRectDirty && (this.fastRectDirty = this.dirty,
            this._fastRect = this.isFastRect()),
            this._fastRect ? this._renderSpriteRect(t) : (t.setObjectRenderer(t.plugins.graphics),
            t.plugins.graphics.render(this))
        }
        ,
        e.prototype._renderSpriteRect = function(t) {
            var e = this.graphicsData[0].shape;
            this._spriteRect || (this._spriteRect = new a.default(new o.default(o.default.WHITE)));
            var r = this._spriteRect
              , n = this.graphicsData[0].fillColor;
            if (16777215 === this.tint)
                r.tint = n;
            else if (this.tint !== this._prevRectTint || n !== this._prevRectFillColor) {
                var i = b
                  , s = x;
                (0,
                h.hex2rgb)(n, i),
                (0,
                h.hex2rgb)(this.tint, s),
                i[0] *= s[0],
                i[1] *= s[1],
                i[2] *= s[2],
                r.tint = (0,
                h.rgb2hex)(i),
                this._prevRectTint = this.tint,
                this._prevRectFillColor = n
            }
            r.alpha = this.graphicsData[0].fillAlpha,
            r.worldAlpha = this.worldAlpha * r.alpha,
            r.blendMode = this.blendMode,
            r._texture._frame.width = e.width,
            r._texture._frame.height = e.height,
            r.transform.worldTransform = this.transform.worldTransform,
            r.anchor.set(-e.x / e.width, -e.y / e.height),
            r._onAnchorUpdate(),
            r._renderWebGL(t)
        }
        ,
        e.prototype._renderCanvas = function(t) {
            !0 !== this.isMask && t.plugins.graphics.render(this)
        }
        ,
        e.prototype._calculateBounds = function() {
            this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty,
            this.updateLocalBounds(),
            this.cachedSpriteDirty = !0);
            var t = this._localBounds;
            this._bounds.addFrame(this.transform, t.minX, t.minY, t.maxX, t.maxY)
        }
        ,
        e.prototype.containsPoint = function(t) {
            this.worldTransform.applyInverse(t, m);
            for (var e = this.graphicsData, r = 0; r < e.length; ++r) {
                var n = e[r];
                if (n.fill && (n.shape && n.shape.contains(m.x, m.y))) {
                    var i = !1;
                    if (n.holes)
                        for (var o = 0; o < n.holes.length; o++) {
                            if (n.holes[o].contains(m.x, m.y)) {
                                i = !0;
                                break
                            }
                        }
                    if (!i)
                        return !0
                }
            }
            return !1
        }
        ,
        e.prototype.updateLocalBounds = function() {
            var t = 1 / 0
              , e = -1 / 0
              , r = 1 / 0
              , n = -1 / 0;
            if (this.graphicsData.length)
                for (var i = 0, o = 0, s = 0, a = 0, u = 0, h = 0; h < this.graphicsData.length; h++) {
                    var c = this.graphicsData[h]
                      , f = c.type
                      , d = c.lineWidth * c.lineAlignment;
                    if (i = c.shape,
                    f === l.SHAPES.RECT || f === l.SHAPES.RREC)
                        o = i.x - d,
                        s = i.y - d,
                        t = o < t ? o : t,
                        e = o + (a = i.width + 2 * d) > e ? o + a : e,
                        r = s < r ? s : r,
                        n = s + (u = i.height + 2 * d) > n ? s + u : n;
                    else if (f === l.SHAPES.CIRC)
                        o = i.x,
                        s = i.y,
                        t = o - (a = i.radius + d) < t ? o - a : t,
                        e = o + a > e ? o + a : e,
                        r = s - (u = i.radius + d) < r ? s - u : r,
                        n = s + u > n ? s + u : n;
                    else if (f === l.SHAPES.ELIP)
                        o = i.x,
                        s = i.y,
                        t = o - (a = i.width + d) < t ? o - a : t,
                        e = o + a > e ? o + a : e,
                        r = s - (u = i.height + d) < r ? s - u : r,
                        n = s + u > n ? s + u : n;
                    else
                        for (var p = i.points, v = 0, y = 0, g = 0, _ = 0, m = 0, b = 0, x = 0, T = 0, E = 0; E + 2 < p.length; E += 2)
                            o = p[E],
                            s = p[E + 1],
                            v = p[E + 2],
                            y = p[E + 3],
                            g = Math.abs(v - o),
                            _ = Math.abs(y - s),
                            u = 2 * d,
                            (a = Math.sqrt(g * g + _ * _)) < 1e-9 || (t = (x = (v + o) / 2) - (m = (u / a * _ + g) / 2) < t ? x - m : t,
                            e = x + m > e ? x + m : e,
                            r = (T = (y + s) / 2) - (b = (u / a * g + _) / 2) < r ? T - b : r,
                            n = T + b > n ? T + b : n)
                }
            else
                t = 0,
                e = 0,
                r = 0,
                n = 0;
            var w = this.boundsPadding;
            this._localBounds.minX = t - w,
            this._localBounds.maxX = e + w,
            this._localBounds.minY = r - w,
            this._localBounds.maxY = n + w
        }
        ,
        e.prototype.drawShape = function(t) {
            this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(),
            this.currentPath = null;
            var e = new s.default(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.filling,this.nativeLines,t,this.lineAlignment);
            return this.graphicsData.push(e),
            e.type === l.SHAPES.POLY && (e.shape.closed = e.shape.closed,
            this.currentPath = e),
            this.dirty++,
            e
        }
        ,
        e.prototype.generateCanvasTexture = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
              , r = this.getLocalBounds()
              , n = i.default.create(r.width, r.height, t, e);
            g || (g = new d.default),
            this.transform.updateLocalTransform(),
            this.transform.localTransform.copy(_),
            _.invert(),
            _.tx -= r.x,
            _.ty -= r.y,
            g.render(this, n, !0, _);
            var s = o.default.fromCanvas(n.baseTexture._canvasRenderTarget.canvas, t, "graphics");
            return s.baseTexture.resolution = e,
            s.baseTexture.update(),
            s
        }
        ,
        e.prototype.closePath = function() {
            var t = this.currentPath;
            return t && t.shape && t.shape.close(),
            this
        }
        ,
        e.prototype.addHole = function() {
            var t = this.graphicsData.pop();
            return this.currentPath = this.graphicsData[this.graphicsData.length - 1],
            this.currentPath.addHole(t.shape),
            this.currentPath = null,
            this
        }
        ,
        e.prototype.destroy = function(e) {
            t.prototype.destroy.call(this, e);
            for (var r = 0; r < this.graphicsData.length; ++r)
                this.graphicsData[r].destroy();
            for (var n in this._webGL)
                for (var i = 0; i < this._webGL[n].data.length; ++i)
                    this._webGL[n].data[i].destroy();
            this._spriteRect && this._spriteRect.destroy(),
            this.graphicsData = null,
            this.currentPath = null,
            this._webGL = null,
            this._localBounds = null
        }
        ,
        e
    }(n.default);
    e.default = T,
    T._SPRITE_TEXTURE = null,
    T.CURVES = {
        adaptive: !1,
        maxLength: 10,
        minSegments: 8,
        maxSegments: 2048
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t, e, r, n, i, o, s, a, u) {
        var h = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : []
          , l = 0
          , c = 0
          , f = 0
          , d = 0
          , p = 0;
        h.push(t, e);
        for (var v = 1, y = 0; v <= u; ++v)
            f = (c = (l = 1 - (y = v / u)) * l) * l,
            p = (d = y * y) * y,
            h.push(f * t + 3 * c * y * r + 3 * l * d * i + p * s, f * e + 3 * c * y * n + 3 * l * d * o + p * a);
        return h
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = r(6)
      , i = r(4)
      , o = d(r(71))
      , s = d(r(72))
      , a = d(r(345))
      , u = d(r(346))
      , h = d(r(347))
      , l = d(r(348))
      , c = d(r(349))
      , f = d(r(350));
    function d(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var p = function(t) {
        function e(r) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return n.graphicsDataPool = [],
            n.primitiveShader = null,
            n.gl = r.gl,
            n.CONTEXT_UID = 0,
            n
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.onContextChange = function() {
            this.gl = this.renderer.gl,
            this.CONTEXT_UID = this.renderer.CONTEXT_UID,
            this.primitiveShader = new u.default(this.gl)
        }
        ,
        e.prototype.destroy = function() {
            o.default.prototype.destroy.call(this);
            for (var t = 0; t < this.graphicsDataPool.length; ++t)
                this.graphicsDataPool[t].destroy();
            this.graphicsDataPool = null
        }
        ,
        e.prototype.render = function(t) {
            var e = this.renderer
              , r = e.gl
              , i = void 0
              , o = t._webGL[this.CONTEXT_UID];
            o && t.dirty === o.dirty || (this.updateGraphics(t),
            o = t._webGL[this.CONTEXT_UID]);
            var s = this.primitiveShader;
            e.bindShader(s),
            e.state.setBlendMode(t.blendMode);
            for (var a = 0, u = o.data.length; a < u; a++) {
                var h = (i = o.data[a]).shader;
                e.bindShader(h),
                h.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0),
                h.uniforms.tint = (0,
                n.hex2rgb)(t.tint),
                h.uniforms.alpha = t.worldAlpha,
                e.bindVao(i.vao),
                i.nativeLines ? r.drawArrays(r.LINES, 0, i.points.length / 6) : i.vao.draw(r.TRIANGLE_STRIP, i.indices.length)
            }
        }
        ,
        e.prototype.updateGraphics = function(t) {
            var e = this.renderer.gl
              , r = t._webGL[this.CONTEXT_UID];
            if (r || (r = t._webGL[this.CONTEXT_UID] = {
                lastIndex: 0,
                data: [],
                gl: e,
                clearDirty: -1,
                dirty: -1
            }),
            r.dirty = t.dirty,
            t.clearDirty !== r.clearDirty) {
                r.clearDirty = t.clearDirty;
                for (var n = 0; n < r.data.length; n++)
                    this.graphicsDataPool.push(r.data[n]);
                r.data.length = 0,
                r.lastIndex = 0
            }
            for (var o = void 0, s = void 0, a = r.lastIndex; a < t.graphicsData.length; a++) {
                var u = t.graphicsData[a];
                o = this.getWebGLData(r, 0),
                u.nativeLines && u.lineWidth && (s = this.getWebGLData(r, 0, !0),
                r.lastIndex++),
                u.type === i.SHAPES.POLY && (0,
                h.default)(u, o, s),
                u.type === i.SHAPES.RECT ? (0,
                l.default)(u, o, s) : u.type === i.SHAPES.CIRC || u.type === i.SHAPES.ELIP ? (0,
                f.default)(u, o, s) : u.type === i.SHAPES.RREC && (0,
                c.default)(u, o, s),
                r.lastIndex++
            }
            this.renderer.bindVao(null);
            for (var d = 0; d < r.data.length; d++)
                (o = r.data[d]).dirty && o.upload()
        }
        ,
        e.prototype.getWebGLData = function(t, e, r) {
            var n = t.data[t.data.length - 1];
            return (!n || n.nativeLines !== r || n.points.length > 32e4) && ((n = this.graphicsDataPool.pop() || new a.default(this.renderer.gl,this.primitiveShader,this.renderer.state.attribsState)).nativeLines = r,
            n.reset(e),
            t.data.push(n)),
            n.dirty = !0,
            n
        }
        ,
        e
    }(o.default);
    e.default = p,
    s.default.registerPlugin("graphics", p)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(19), o = (n = i) && n.__esModule ? n : {
        default: n
    };
    var s = function() {
        function t(e, r, n) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.gl = e,
            this.color = [0, 0, 0],
            this.points = [],
            this.indices = [],
            this.buffer = o.default.GLBuffer.createVertexBuffer(e),
            this.indexBuffer = o.default.GLBuffer.createIndexBuffer(e),
            this.dirty = !0,
            this.nativeLines = !1,
            this.glPoints = null,
            this.glIndices = null,
            this.shader = r,
            this.vao = new o.default.VertexArrayObject(e,n).addIndex(this.indexBuffer).addAttribute(this.buffer, r.attributes.aVertexPosition, e.FLOAT, !1, 24, 0).addAttribute(this.buffer, r.attributes.aColor, e.FLOAT, !1, 24, 8)
        }
        return t.prototype.reset = function() {
            this.points.length = 0,
            this.indices.length = 0
        }
        ,
        t.prototype.upload = function() {
            this.glPoints = new Float32Array(this.points),
            this.buffer.upload(this.glPoints),
            this.glIndices = new Uint16Array(this.indices),
            this.indexBuffer.upload(this.glIndices),
            this.dirty = !1
        }
        ,
        t.prototype.destroy = function() {
            this.color = null,
            this.points = null,
            this.indices = null,
            this.vao.destroy(),
            this.buffer.destroy(),
            this.indexBuffer.destroy(),
            this.gl = null,
            this.buffer = null,
            this.indexBuffer = null,
            this.glPoints = null,
            this.glIndices = null
        }
        ,
        t
    }();
    e.default = s
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(56);
    var o = function(t) {
        function e(r) {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"), ["varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n")))
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e
    }(((n = i) && n.__esModule ? n : {
        default: n
    }).default);
    e.default = o
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t, e, r) {
        t.points = t.shape.points.slice();
        var s = t.points;
        if (t.fill && s.length >= 6) {
            for (var a = [], u = t.holes, h = 0; h < u.length; h++) {
                var l = u[h];
                a.push(s.length / 2),
                s = s.concat(l.points)
            }
            var c = e.points
              , f = e.indices
              , d = s.length / 2
              , p = (0,
            i.hex2rgb)(t.fillColor)
              , v = t.fillAlpha
              , y = p[0] * v
              , g = p[1] * v
              , _ = p[2] * v
              , m = (0,
            o.default)(s, a, 2);
            if (!m)
                return;
            for (var b = c.length / 6, x = 0; x < m.length; x += 3)
                f.push(m[x] + b),
                f.push(m[x] + b),
                f.push(m[x + 1] + b),
                f.push(m[x + 2] + b),
                f.push(m[x + 2] + b);
            for (var T = 0; T < d; T++)
                c.push(s[2 * T], s[2 * T + 1], y, g, _, v)
        }
        t.lineWidth > 0 && (0,
        n.default)(t, e, r)
    }
    ;
    var n = s(r(74))
      , i = r(6)
      , o = s(r(104));
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t, e, r) {
        var n = t.shape
          , i = n.x
          , a = n.y
          , u = n.width
          , h = n.height;
        if (t.fill) {
            var l = (0,
            s.hex2rgb)(t.fillColor)
              , c = t.fillAlpha
              , f = l[0] * c
              , d = l[1] * c
              , p = l[2] * c
              , v = e.points
              , y = e.indices
              , g = v.length / 6;
            v.push(i, a),
            v.push(f, d, p, c),
            v.push(i + u, a),
            v.push(f, d, p, c),
            v.push(i, a + h),
            v.push(f, d, p, c),
            v.push(i + u, a + h),
            v.push(f, d, p, c),
            y.push(g, g, g + 1, g + 2, g + 3, g + 3)
        }
        if (t.lineWidth) {
            var _ = t.points;
            t.points = [i, a, i + u, a, i + u, a + h, i, a + h, i, a],
            (0,
            o.default)(t, e, r),
            t.points = _
        }
    }
    ;
    var n, i = r(74), o = (n = i) && n.__esModule ? n : {
        default: n
    }, s = r(6)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t, e, r) {
        var s = t.shape
          , a = s.x
          , h = s.y
          , l = s.width
          , c = s.height
          , f = s.radius
          , d = [];
        if (d.push(a + f, h),
        u(a + l - f, h, a + l, h, a + l, h + f, d),
        u(a + l, h + c - f, a + l, h + c, a + l - f, h + c, d),
        u(a + f, h + c, a, h + c, a, h + c - f, d),
        u(a, h + f, a, h, a + f + 1e-10, h, d),
        t.fill) {
            for (var p = (0,
            o.hex2rgb)(t.fillColor), v = t.fillAlpha, y = p[0] * v, g = p[1] * v, _ = p[2] * v, m = e.points, b = e.indices, x = m.length / 6, T = (0,
            n.default)(d, null, 2), E = 0, w = T.length; E < w; E += 3)
                b.push(T[E] + x),
                b.push(T[E] + x),
                b.push(T[E + 1] + x),
                b.push(T[E + 2] + x),
                b.push(T[E + 2] + x);
            for (var S = 0, O = d.length; S < O; S++)
                m.push(d[S], d[++S], y, g, _, v)
        }
        if (t.lineWidth) {
            var M = t.points;
            t.points = d,
            (0,
            i.default)(t, e, r),
            t.points = M
        }
    }
    ;
    var n = s(r(104))
      , i = s(r(74))
      , o = r(6);
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function a(t, e, r) {
        return t + (e - t) * r
    }
    function u(t, e, r, n, i, o) {
        for (var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [], u = 20, h = s, l = 0, c = 0, f = 0, d = 0, p = 0, v = 0, y = 0, g = 0; y <= u; ++y)
            l = a(t, r, g = y / u),
            c = a(e, n, g),
            f = a(r, i, g),
            d = a(n, o, g),
            p = a(l, f, g),
            v = a(c, d, g),
            h.push(p, v);
        return h
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t, e, r) {
        var n = t.shape
          , i = n.x
          , u = n.y
          , h = void 0
          , l = void 0;
        t.type === s.SHAPES.CIRC ? (h = n.radius,
        l = n.radius) : (h = n.width,
        l = n.height);
        if (0 === h || 0 === l)
            return;
        var c = Math.floor(30 * Math.sqrt(n.radius)) || Math.floor(15 * Math.sqrt(n.width + n.height))
          , f = 2 * Math.PI / c;
        if (t.fill) {
            var d = (0,
            a.hex2rgb)(t.fillColor)
              , p = t.fillAlpha
              , v = d[0] * p
              , y = d[1] * p
              , g = d[2] * p
              , _ = e.points
              , m = e.indices
              , b = _.length / 6;
            m.push(b);
            for (var x = 0; x < c + 1; x++)
                _.push(i, u, v, y, g, p),
                _.push(i + Math.sin(f * x) * h, u + Math.cos(f * x) * l, v, y, g, p),
                m.push(b++, b++);
            m.push(b - 1)
        }
        if (t.lineWidth) {
            var T = t.points;
            t.points = [];
            for (var E = 0; E < c; E++)
                t.points.push(i + Math.sin(f * -E) * h, u + Math.cos(f * -E) * l);
            t.points.push(t.points[0], t.points[1]),
            (0,
            o.default)(t, e, r),
            t.points = T
        }
    }
    ;
    var n, i = r(74), o = (n = i) && n.__esModule ? n : {
        default: n
    }, s = r(4), a = r(6)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(54), o = (n = i) && n.__esModule ? n : {
        default: n
    }, s = r(4);
    var a = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.renderer = e
        }
        return t.prototype.render = function(t) {
            var e = this.renderer
              , r = e.context
              , n = t.worldAlpha
              , i = t.transform.worldTransform
              , o = e.resolution;
            r.setTransform(i.a * o, i.b * o, i.c * o, i.d * o, i.tx * o, i.ty * o),
            t.canvasTintDirty === t.dirty && t._prevTint === t.tint || this.updateGraphicsTint(t),
            e.setBlendMode(t.blendMode);
            for (var a = 0; a < t.graphicsData.length; a++) {
                var u = t.graphicsData[a]
                  , h = u.shape
                  , l = u._fillTint
                  , c = u._lineTint;
                if (r.lineWidth = u.lineWidth,
                u.type === s.SHAPES.POLY) {
                    r.beginPath();
                    var f = h.points
                      , d = u.holes
                      , p = void 0
                      , v = void 0
                      , y = void 0
                      , g = void 0;
                    r.moveTo(f[0], f[1]);
                    for (var _ = 2; _ < f.length; _ += 2)
                        r.lineTo(f[_], f[_ + 1]);
                    if (h.closed && r.closePath(),
                    d.length > 0) {
                        p = 0,
                        y = f[0],
                        g = f[1];
                        for (var m = 2; m + 2 < f.length; m += 2)
                            p += (f[m] - y) * (f[m + 3] - g) - (f[m + 2] - y) * (f[m + 1] - g);
                        for (var b = 0; b < d.length; b++)
                            if (f = d[b].points) {
                                v = 0,
                                y = f[0],
                                g = f[1];
                                for (var x = 2; x + 2 < f.length; x += 2)
                                    v += (f[x] - y) * (f[x + 3] - g) - (f[x + 2] - y) * (f[x + 1] - g);
                                if (v * p < 0) {
                                    r.moveTo(f[0], f[1]);
                                    for (var T = 2; T < f.length; T += 2)
                                        r.lineTo(f[T], f[T + 1])
                                } else {
                                    r.moveTo(f[f.length - 2], f[f.length - 1]);
                                    for (var E = f.length - 4; E >= 0; E -= 2)
                                        r.lineTo(f[E], f[E + 1])
                                }
                                d[b].close && r.closePath()
                            }
                    }
                    u.fill && (r.globalAlpha = u.fillAlpha * n,
                    r.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6),
                    r.fill()),
                    u.lineWidth && (r.globalAlpha = u.lineAlpha * n,
                    r.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6),
                    r.stroke())
                } else if (u.type === s.SHAPES.RECT)
                    (u.fillColor || 0 === u.fillColor) && (r.globalAlpha = u.fillAlpha * n,
                    r.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6),
                    r.fillRect(h.x, h.y, h.width, h.height)),
                    u.lineWidth && (r.globalAlpha = u.lineAlpha * n,
                    r.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6),
                    r.strokeRect(h.x, h.y, h.width, h.height));
                else if (u.type === s.SHAPES.CIRC)
                    r.beginPath(),
                    r.arc(h.x, h.y, h.radius, 0, 2 * Math.PI),
                    r.closePath(),
                    u.fill && (r.globalAlpha = u.fillAlpha * n,
                    r.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6),
                    r.fill()),
                    u.lineWidth && (r.globalAlpha = u.lineAlpha * n,
                    r.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6),
                    r.stroke());
                else if (u.type === s.SHAPES.ELIP) {
                    var w = 2 * h.width
                      , S = 2 * h.height
                      , O = h.x - w / 2
                      , M = h.y - S / 2;
                    r.beginPath();
                    var P = w / 2 * .5522848
                      , C = S / 2 * .5522848
                      , A = O + w
                      , R = M + S
                      , I = O + w / 2
                      , D = M + S / 2;
                    r.moveTo(O, D),
                    r.bezierCurveTo(O, D - C, I - P, M, I, M),
                    r.bezierCurveTo(I + P, M, A, D - C, A, D),
                    r.bezierCurveTo(A, D + C, I + P, R, I, R),
                    r.bezierCurveTo(I - P, R, O, D + C, O, D),
                    r.closePath(),
                    u.fill && (r.globalAlpha = u.fillAlpha * n,
                    r.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6),
                    r.fill()),
                    u.lineWidth && (r.globalAlpha = u.lineAlpha * n,
                    r.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6),
                    r.stroke())
                } else if (u.type === s.SHAPES.RREC) {
                    var L = h.x
                      , N = h.y
                      , k = h.width
                      , B = h.height
                      , F = h.radius
                      , j = Math.min(k, B) / 2 | 0;
                    F = F > j ? j : F,
                    r.beginPath(),
                    r.moveTo(L, N + F),
                    r.lineTo(L, N + B - F),
                    r.quadraticCurveTo(L, N + B, L + F, N + B),
                    r.lineTo(L + k - F, N + B),
                    r.quadraticCurveTo(L + k, N + B, L + k, N + B - F),
                    r.lineTo(L + k, N + F),
                    r.quadraticCurveTo(L + k, N, L + k - F, N),
                    r.lineTo(L + F, N),
                    r.quadraticCurveTo(L, N, L, N + F),
                    r.closePath(),
                    (u.fillColor || 0 === u.fillColor) && (r.globalAlpha = u.fillAlpha * n,
                    r.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6),
                    r.fill()),
                    u.lineWidth && (r.globalAlpha = u.lineAlpha * n,
                    r.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6),
                    r.stroke())
                }
            }
        }
        ,
        t.prototype.updateGraphicsTint = function(t) {
            t._prevTint = t.tint,
            t.canvasTintDirty = t.dirty;
            for (var e = (t.tint >> 16 & 255) / 255, r = (t.tint >> 8 & 255) / 255, n = (255 & t.tint) / 255, i = 0; i < t.graphicsData.length; ++i) {
                var o = t.graphicsData[i]
                  , s = 0 | o.fillColor
                  , a = 0 | o.lineColor;
                o._fillTint = ((s >> 16 & 255) / 255 * e * 255 << 16) + ((s >> 8 & 255) / 255 * r * 255 << 8) + (255 & s) / 255 * n * 255,
                o._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * r * 255 << 8) + (255 & a) / 255 * n * 255
            }
        }
        ,
        t.prototype.renderPolygon = function(t, e, r) {
            r.moveTo(t[0], t[1]);
            for (var n = 1; n < t.length / 2; ++n)
                r.lineTo(t[2 * n], t[2 * n + 1]);
            e && r.closePath()
        }
        ,
        t.prototype.destroy = function() {
            this.renderer = null
        }
        ,
        t
    }();
    e.default = a,
    o.default.registerPlugin("graphics", a)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = r(5)
      , o = r(6);
    function s(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var a = function() {
        function t(e, r) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            s(this, t),
            this.baseTexture = e,
            this.textures = {},
            this.animations = {},
            this.data = r,
            this.resolution = this._updateResolution(n || this.baseTexture.imageUrl),
            this._frames = this.data.frames,
            this._frameKeys = Object.keys(this._frames),
            this._batchIndex = 0,
            this._callback = null
        }
        return n(t, null, [{
            key: "BATCH_SIZE",
            get: function() {
                return 1e3
            }
        }]),
        t.prototype._updateResolution = function(t) {
            var e = this.data.meta.scale
              , r = (0,
            o.getResolutionOfUrl)(t, null);
            return null === r && (r = void 0 !== e ? parseFloat(e) : 1),
            1 !== r && (this.baseTexture.resolution = r,
            this.baseTexture.update()),
            r
        }
        ,
        t.prototype.parse = function(e) {
            this._batchIndex = 0,
            this._callback = e,
            this._frameKeys.length <= t.BATCH_SIZE ? (this._processFrames(0),
            this._processAnimations(),
            this._parseComplete()) : this._nextBatch()
        }
        ,
        t.prototype._processFrames = function(e) {
            for (var r = e, n = t.BATCH_SIZE, o = this.baseTexture.sourceScale; r - e < n && r < this._frameKeys.length; ) {
                var s = this._frameKeys[r]
                  , a = this._frames[s]
                  , u = a.frame;
                if (u) {
                    var h = null
                      , l = null
                      , c = !1 !== a.trimmed && a.sourceSize ? a.sourceSize : a.frame
                      , f = new i.Rectangle(0,0,Math.floor(c.w * o) / this.resolution,Math.floor(c.h * o) / this.resolution);
                    h = a.rotated ? new i.Rectangle(Math.floor(u.x * o) / this.resolution,Math.floor(u.y * o) / this.resolution,Math.floor(u.h * o) / this.resolution,Math.floor(u.w * o) / this.resolution) : new i.Rectangle(Math.floor(u.x * o) / this.resolution,Math.floor(u.y * o) / this.resolution,Math.floor(u.w * o) / this.resolution,Math.floor(u.h * o) / this.resolution),
                    !1 !== a.trimmed && a.spriteSourceSize && (l = new i.Rectangle(Math.floor(a.spriteSourceSize.x * o) / this.resolution,Math.floor(a.spriteSourceSize.y * o) / this.resolution,Math.floor(u.w * o) / this.resolution,Math.floor(u.h * o) / this.resolution)),
                    this.textures[s] = new i.Texture(this.baseTexture,h,f,l,a.rotated ? 2 : 0,a.anchor),
                    i.Texture.addToCache(this.textures[s], s)
                }
                r++
            }
        }
        ,
        t.prototype._processAnimations = function() {
            var t = this.data.animations || {};
            for (var e in t) {
                this.animations[e] = [];
                var r = t[e]
                  , n = Array.isArray(r)
                  , i = 0;
                for (r = n ? r : r[Symbol.iterator](); ; ) {
                    var o;
                    if (n) {
                        if (i >= r.length)
                            break;
                        o = r[i++]
                    } else {
                        if ((i = r.next()).done)
                            break;
                        o = i.value
                    }
                    var s = o;
                    this.animations[e].push(this.textures[s])
                }
            }
        }
        ,
        t.prototype._parseComplete = function() {
            var t = this._callback;
            this._callback = null,
            this._batchIndex = 0,
            t.call(this, this.textures)
        }
        ,
        t.prototype._nextBatch = function() {
            var e = this;
            this._processFrames(this._batchIndex * t.BATCH_SIZE),
            this._batchIndex++,
            setTimeout((function() {
                e._batchIndex * t.BATCH_SIZE < e._frameKeys.length ? e._nextBatch() : (e._processAnimations(),
                e._parseComplete())
            }
            ), 0)
        }
        ,
        t.prototype.destroy = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            for (var e in this.textures)
                this.textures[e].destroy();
            this._frames = null,
            this._frameKeys = null,
            this.data = null,
            this.textures = null,
            t && this.baseTexture.destroy(),
            this.baseTexture = null
        }
        ,
        t
    }();
    e.default = a
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t) {
        var e = t.mesh
          , r = t.particles
          , n = t.extras
          , o = t.filters
          , s = t.prepare
          , a = t.loaders
          , u = t.interaction;
        Object.defineProperties(t, {
            SpriteBatch: {
                get: function() {
                    throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")
                }
            },
            AssetLoader: {
                get: function() {
                    throw new ReferenceError("The loader system was overhauled in PixiJS v3, please see the new PIXI.loaders.Loader class.")
                }
            },
            Stage: {
                get: function() {
                    return i("You do not need to use a PIXI Stage any more, you can simply render any container."),
                    t.Container
                }
            },
            DisplayObjectContainer: {
                get: function() {
                    return i("DisplayObjectContainer has been shortened to Container, please use Container from now on."),
                    t.Container
                }
            },
            Strip: {
                get: function() {
                    return i("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."),
                    e.Mesh
                }
            },
            Rope: {
                get: function() {
                    return i("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."),
                    e.Rope
                }
            },
            ParticleContainer: {
                get: function() {
                    return i("The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on."),
                    r.ParticleContainer
                }
            },
            MovieClip: {
                get: function() {
                    return i("The MovieClip class has been moved to extras.AnimatedSprite, please use extras.AnimatedSprite."),
                    n.AnimatedSprite
                }
            },
            TilingSprite: {
                get: function() {
                    return i("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."),
                    n.TilingSprite
                }
            },
            BitmapText: {
                get: function() {
                    return i("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."),
                    n.BitmapText
                }
            },
            blendModes: {
                get: function() {
                    return i("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."),
                    t.BLEND_MODES
                }
            },
            scaleModes: {
                get: function() {
                    return i("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."),
                    t.SCALE_MODES
                }
            },
            BaseTextureCache: {
                get: function() {
                    return i("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."),
                    t.utils.BaseTextureCache
                }
            },
            TextureCache: {
                get: function() {
                    return i("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."),
                    t.utils.TextureCache
                }
            },
            math: {
                get: function() {
                    return i("The math namespace is deprecated, please access members already accessible on PIXI."),
                    t
                }
            },
            AbstractFilter: {
                get: function() {
                    return i("AstractFilter has been renamed to Filter, please use PIXI.Filter"),
                    t.Filter
                }
            },
            TransformManual: {
                get: function() {
                    return i("TransformManual has been renamed to TransformBase, please update your pixi-spine"),
                    t.TransformBase
                }
            },
            TARGET_FPMS: {
                get: function() {
                    return i("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"),
                    t.settings.TARGET_FPMS
                },
                set: function(e) {
                    i("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"),
                    t.settings.TARGET_FPMS = e
                }
            },
            FILTER_RESOLUTION: {
                get: function() {
                    return i("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"),
                    t.settings.FILTER_RESOLUTION
                },
                set: function(e) {
                    i("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"),
                    t.settings.FILTER_RESOLUTION = e
                }
            },
            RESOLUTION: {
                get: function() {
                    return i("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"),
                    t.settings.RESOLUTION
                },
                set: function(e) {
                    i("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"),
                    t.settings.RESOLUTION = e
                }
            },
            MIPMAP_TEXTURES: {
                get: function() {
                    return i("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"),
                    t.settings.MIPMAP_TEXTURES
                },
                set: function(e) {
                    i("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"),
                    t.settings.MIPMAP_TEXTURES = e
                }
            },
            SPRITE_BATCH_SIZE: {
                get: function() {
                    return i("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"),
                    t.settings.SPRITE_BATCH_SIZE
                },
                set: function(e) {
                    i("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"),
                    t.settings.SPRITE_BATCH_SIZE = e
                }
            },
            SPRITE_MAX_TEXTURES: {
                get: function() {
                    return i("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"),
                    t.settings.SPRITE_MAX_TEXTURES
                },
                set: function(e) {
                    i("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"),
                    t.settings.SPRITE_MAX_TEXTURES = e
                }
            },
            RETINA_PREFIX: {
                get: function() {
                    return i("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"),
                    t.settings.RETINA_PREFIX
                },
                set: function(e) {
                    i("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"),
                    t.settings.RETINA_PREFIX = e
                }
            },
            DEFAULT_RENDER_OPTIONS: {
                get: function() {
                    return i("PIXI.DEFAULT_RENDER_OPTIONS has been deprecated, please use PIXI.settings.DEFAULT_RENDER_OPTIONS"),
                    t.settings.RENDER_OPTIONS
                }
            }
        });
        for (var h = [{
            parent: "TRANSFORM_MODE",
            target: "TRANSFORM_MODE"
        }, {
            parent: "GC_MODES",
            target: "GC_MODE"
        }, {
            parent: "WRAP_MODES",
            target: "WRAP_MODE"
        }, {
            parent: "SCALE_MODES",
            target: "SCALE_MODE"
        }, {
            parent: "PRECISION",
            target: "PRECISION_FRAGMENT"
        }], l = function(e) {
            var r = h[e];
            Object.defineProperty(t[r.parent], "DEFAULT", {
                get: function() {
                    return i("PIXI." + r.parent + ".DEFAULT has been deprecated, please use PIXI.settings." + r.target),
                    t.settings[r.target]
                },
                set: function(e) {
                    i("PIXI." + r.parent + ".DEFAULT has been deprecated, please use PIXI.settings." + r.target),
                    t.settings[r.target] = e
                }
            })
        }, c = 0; c < h.length; c++)
            l(c);
        Object.defineProperties(t.settings, {
            PRECISION: {
                get: function() {
                    return i("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT"),
                    t.settings.PRECISION_FRAGMENT
                },
                set: function(e) {
                    i("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT"),
                    t.settings.PRECISION_FRAGMENT = e
                }
            }
        }),
        n.AnimatedSprite && Object.defineProperties(n, {
            MovieClip: {
                get: function() {
                    return i("The MovieClip class has been renamed to AnimatedSprite, please use AnimatedSprite from now on."),
                    n.AnimatedSprite
                }
            }
        });
        n && Object.defineProperties(n, {
            TextureTransform: {
                get: function() {
                    return i("The TextureTransform class has been renamed to TextureMatrix, please use PIXI.TextureMatrix from now on."),
                    t.TextureMatrix
                }
            }
        });
        t.DisplayObject.prototype.generateTexture = function(t, e, r) {
            return i("generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)"),
            t.generateTexture(this, e, r)
        }
        ,
        t.Graphics.prototype.generateTexture = function(t, e) {
            return i("graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture"),
            this.generateCanvasTexture(t, e)
        }
        ,
        t.GroupD8.isSwapWidthHeight = function(e) {
            return i("GroupD8.isSwapWidthHeight was renamed to GroupD8.isVertical"),
            t.GroupD8.isVertical(e)
        }
        ,
        t.RenderTexture.prototype.render = function(t, e, r, n) {
            this.legacyRenderer.render(t, this, r, e, !n),
            i("RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)")
        }
        ,
        t.RenderTexture.prototype.getImage = function(t) {
            return i("RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)"),
            this.legacyRenderer.extract.image(t)
        }
        ,
        t.RenderTexture.prototype.getBase64 = function(t) {
            return i("RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)"),
            this.legacyRenderer.extract.base64(t)
        }
        ,
        t.RenderTexture.prototype.getCanvas = function(t) {
            return i("RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)"),
            this.legacyRenderer.extract.canvas(t)
        }
        ,
        t.RenderTexture.prototype.getPixels = function(t) {
            return i("RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)"),
            this.legacyRenderer.pixels(t)
        }
        ,
        t.Sprite.prototype.setTexture = function(t) {
            this.texture = t,
            i("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")
        }
        ,
        n.BitmapText && (n.BitmapText.prototype.setText = function(t) {
            this.text = t,
            i("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")
        }
        );
        t.Text.prototype.setText = function(t) {
            this.text = t,
            i("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")
        }
        ,
        t.Text.calculateFontProperties = function(e) {
            return i("Text.calculateFontProperties is now deprecated, please use the TextMetrics.measureFont"),
            t.TextMetrics.measureFont(e)
        }
        ,
        Object.defineProperties(t.Text, {
            fontPropertiesCache: {
                get: function() {
                    return i("Text.fontPropertiesCache is deprecated"),
                    t.TextMetrics._fonts
                }
            },
            fontPropertiesCanvas: {
                get: function() {
                    return i("Text.fontPropertiesCanvas is deprecated"),
                    t.TextMetrics._canvas
                }
            },
            fontPropertiesContext: {
                get: function() {
                    return i("Text.fontPropertiesContext is deprecated"),
                    t.TextMetrics._context
                }
            }
        }),
        t.Text.prototype.setStyle = function(t) {
            this.style = t,
            i("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")
        }
        ,
        t.Text.prototype.determineFontProperties = function(e) {
            return i("determineFontProperties is now deprecated, please use TextMetrics.measureFont method"),
            t.TextMetrics.measureFont(e)
        }
        ,
        t.Text.getFontStyle = function(e) {
            return i("getFontStyle is now deprecated, please use TextStyle.toFontString() instead"),
            (e = e || {})instanceof t.TextStyle || (e = new t.TextStyle(e)),
            e.toFontString()
        }
        ,
        Object.defineProperties(t.TextStyle.prototype, {
            font: {
                get: function() {
                    i("text style property 'font' is now deprecated, please use the 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant' and 'fontWeight' properties from now on");
                    var t = "number" == typeof this._fontSize ? this._fontSize + "px" : this._fontSize;
                    return this._fontStyle + " " + this._fontVariant + " " + this._fontWeight + " " + t + " " + this._fontFamily
                },
                set: function(t) {
                    i("text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on"),
                    t.indexOf("italic") > 1 ? this._fontStyle = "italic" : t.indexOf("oblique") > -1 ? this._fontStyle = "oblique" : this._fontStyle = "normal",
                    t.indexOf("small-caps") > -1 ? this._fontVariant = "small-caps" : this._fontVariant = "normal";
                    var e = t.split(" ")
                      , r = -1;
                    this._fontSize = 26;
                    for (var n = 0; n < e.length; ++n)
                        if (e[n].match(/(px|pt|em|%)/)) {
                            r = n,
                            this._fontSize = e[n];
                            break
                        }
                    this._fontWeight = "normal";
                    for (var o = 0; o < r; ++o)
                        if (e[o].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)) {
                            this._fontWeight = e[o];
                            break
                        }
                    if (r > -1 && r < e.length - 1) {
                        this._fontFamily = "";
                        for (var s = r + 1; s < e.length; ++s)
                            this._fontFamily += e[s] + " ";
                        this._fontFamily = this._fontFamily.slice(0, -1)
                    } else
                        this._fontFamily = "Arial";
                    this.styleID++
                }
            }
        }),
        t.Texture.prototype.setFrame = function(t) {
            this.frame = t,
            i("setFrame is now deprecated, please use the frame property, e.g: myTexture.frame = frame;")
        }
        ,
        t.Texture.addTextureToCache = function(e, r) {
            t.Texture.addToCache(e, r),
            i("Texture.addTextureToCache is deprecated, please use Texture.addToCache from now on.")
        }
        ,
        t.Texture.removeTextureFromCache = function(e) {
            return i("Texture.removeTextureFromCache is deprecated, please use Texture.removeFromCache from now on. Be aware that Texture.removeFromCache does not automatically its BaseTexture from the BaseTextureCache. For that, use BaseTexture.removeFromCache"),
            t.BaseTexture.removeFromCache(e),
            t.Texture.removeFromCache(e)
        }
        ,
        Object.defineProperties(o, {
            AbstractFilter: {
                get: function() {
                    return i("AstractFilter has been renamed to Filter, please use PIXI.Filter"),
                    t.AbstractFilter
                }
            },
            SpriteMaskFilter: {
                get: function() {
                    return i("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on."),
                    t.SpriteMaskFilter
                }
            },
            VoidFilter: {
                get: function() {
                    return i("VoidFilter has been renamed to AlphaFilter, please use PIXI.filters.AlphaFilter"),
                    o.AlphaFilter
                }
            }
        }),
        t.utils.uuid = function() {
            return i("utils.uuid() is deprecated, please use utils.uid() from now on."),
            t.utils.uid()
        }
        ,
        t.utils.canUseNewCanvasBlendModes = function() {
            return i("utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on"),
            t.CanvasTinter.canUseMultiply
        }
        ;
        var f = !0;
        Object.defineProperty(t.utils, "_saidHello", {
            set: function(t) {
                t && (i("PIXI.utils._saidHello is deprecated, please use PIXI.utils.skipHello()"),
                this.skipHello()),
                f = t
            },
            get: function() {
                return f
            }
        }),
        s.BasePrepare && (s.BasePrepare.prototype.register = function(t, e) {
            return i("renderer.plugins.prepare.register is now deprecated, please use renderer.plugins.prepare.registerFindHook & renderer.plugins.prepare.registerUploadHook"),
            t && this.registerFindHook(t),
            e && this.registerUploadHook(e),
            this
        }
        );
        s.canvas && Object.defineProperty(s.canvas, "UPLOADS_PER_FRAME", {
            set: function() {
                i("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer")
            },
            get: function() {
                return i("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"),
                NaN
            }
        });
        s.webgl && Object.defineProperty(s.webgl, "UPLOADS_PER_FRAME", {
            set: function() {
                i("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer")
            },
            get: function() {
                return i("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"),
                NaN
            }
        });
        if (a.Loader) {
            var d = a.Resource
              , p = a.Loader;
            Object.defineProperties(d.prototype, {
                isJson: {
                    get: function() {
                        return i("The isJson property is deprecated, please use `resource.type === Resource.TYPE.JSON`."),
                        this.type === d.TYPE.JSON
                    }
                },
                isXml: {
                    get: function() {
                        return i("The isXml property is deprecated, please use `resource.type === Resource.TYPE.XML`."),
                        this.type === d.TYPE.XML
                    }
                },
                isImage: {
                    get: function() {
                        return i("The isImage property is deprecated, please use `resource.type === Resource.TYPE.IMAGE`."),
                        this.type === d.TYPE.IMAGE
                    }
                },
                isAudio: {
                    get: function() {
                        return i("The isAudio property is deprecated, please use `resource.type === Resource.TYPE.AUDIO`."),
                        this.type === d.TYPE.AUDIO
                    }
                },
                isVideo: {
                    get: function() {
                        return i("The isVideo property is deprecated, please use `resource.type === Resource.TYPE.VIDEO`."),
                        this.type === d.TYPE.VIDEO
                    }
                }
            }),
            Object.defineProperties(p.prototype, {
                before: {
                    get: function() {
                        return i("The before() method is deprecated, please use pre()."),
                        this.pre
                    }
                },
                after: {
                    get: function() {
                        return i("The after() method is deprecated, please use use()."),
                        this.use
                    }
                }
            })
        }
        u.interactiveTarget && Object.defineProperty(u.interactiveTarget, "defaultCursor", {
            set: function(t) {
                i("Property defaultCursor has been replaced with 'cursor'. "),
                this.cursor = t
            },
            get: function() {
                return i("Property defaultCursor has been replaced with 'cursor'. "),
                this.cursor
            }
        });
        u.InteractionManager && (Object.defineProperty(u.InteractionManager, "defaultCursorStyle", {
            set: function(t) {
                i("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. "),
                this.cursorStyles.default = t
            },
            get: function() {
                return i("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. "),
                this.cursorStyles.default
            }
        }),
        Object.defineProperty(u.InteractionManager, "currentCursorStyle", {
            set: function(t) {
                i("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently."),
                this.currentCursorMode = t
            },
            get: function() {
                return i("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently."),
                this.currentCursorMode
            }
        }))
    }
    ;
    var n = {};
    function i(t) {
        if (!n[t]) {
            var e = (new Error).stack;
            void 0 === e ? console.warn("Deprecation Warning: ", t) : (e = e.split("\n").splice(3).join("\n"),
            console.groupCollapsed ? (console.groupCollapsed("%cDeprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", t),
            console.warn(e),
            console.groupEnd()) : (console.warn("Deprecation Warning: ", t),
            console.warn(e))),
            n[t] = !0
        }
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = r(182);
    Object.defineProperty(e, "accessibleTarget", {
        enumerable: !0,
        get: function() {
            return o(n).default
        }
    });
    var i = r(355);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "AccessibilityManager", {
        enumerable: !0,
        get: function() {
            return o(i).default
        }
    })
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5))
      , i = s(r(102))
      , o = s(r(182));
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    n.utils.mixins.delayMixin(n.DisplayObject.prototype, o.default);
    var a = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            !i.default.tablet && !i.default.phone || navigator.isCocoonJS || this.createTouchHook();
            var r = document.createElement("div");
            r.style.width = "100px",
            r.style.height = "100px",
            r.style.position = "absolute",
            r.style.top = "0px",
            r.style.left = "0px",
            r.style.zIndex = 2,
            this.div = r,
            this.pool = [],
            this.renderId = 0,
            this.debug = !1,
            this.renderer = e,
            this.children = [],
            this._onKeyDown = this._onKeyDown.bind(this),
            this._onMouseMove = this._onMouseMove.bind(this),
            this.isActive = !1,
            this.isMobileAccessabillity = !1,
            window.addEventListener("keydown", this._onKeyDown, !1)
        }
        return t.prototype.createTouchHook = function() {
            var t = this
              , e = document.createElement("button");
            e.style.width = "1px",
            e.style.height = "1px",
            e.style.position = "absolute",
            e.style.top = "-1000px",
            e.style.left = "-1000px",
            e.style.zIndex = 2,
            e.style.backgroundColor = "#FF0000",
            e.title = "HOOK DIV",
            e.addEventListener("focus", (function() {
                t.isMobileAccessabillity = !0,
                t.activate(),
                document.body.removeChild(e)
            }
            )),
            document.body.appendChild(e)
        }
        ,
        t.prototype.activate = function() {
            this.isActive || (this.isActive = !0,
            window.document.addEventListener("mousemove", this._onMouseMove, !0),
            window.removeEventListener("keydown", this._onKeyDown, !1),
            this.renderer.on("postrender", this.update, this),
            this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div))
        }
        ,
        t.prototype.deactivate = function() {
            this.isActive && !this.isMobileAccessabillity && (this.isActive = !1,
            window.document.removeEventListener("mousemove", this._onMouseMove, !0),
            window.addEventListener("keydown", this._onKeyDown, !1),
            this.renderer.off("postrender", this.update),
            this.div.parentNode && this.div.parentNode.removeChild(this.div))
        }
        ,
        t.prototype.updateAccessibleObjects = function(t) {
            if (t.visible) {
                t.accessible && t.interactive && (t._accessibleActive || this.addChild(t),
                t.renderId = this.renderId);
                for (var e = t.children, r = 0; r < e.length; r++)
                    this.updateAccessibleObjects(e[r])
            }
        }
        ,
        t.prototype.update = function() {
            if (this.renderer.renderingToScreen) {
                this.updateAccessibleObjects(this.renderer._lastObjectRendered);
                var t = this.renderer.view.getBoundingClientRect()
                  , e = t.width / this.renderer.width
                  , r = t.height / this.renderer.height
                  , i = this.div;
                i.style.left = t.left + "px",
                i.style.top = t.top + "px",
                i.style.width = this.renderer.width + "px",
                i.style.height = this.renderer.height + "px";
                for (var o = 0; o < this.children.length; o++) {
                    var s = this.children[o];
                    if (s.renderId !== this.renderId)
                        s._accessibleActive = !1,
                        n.utils.removeItems(this.children, o, 1),
                        this.div.removeChild(s._accessibleDiv),
                        this.pool.push(s._accessibleDiv),
                        s._accessibleDiv = null,
                        o--,
                        0 === this.children.length && this.deactivate();
                    else {
                        i = s._accessibleDiv;
                        var a = s.hitArea
                          , u = s.worldTransform;
                        s.hitArea ? (i.style.left = (u.tx + a.x * u.a) * e + "px",
                        i.style.top = (u.ty + a.y * u.d) * r + "px",
                        i.style.width = a.width * u.a * e + "px",
                        i.style.height = a.height * u.d * r + "px") : (a = s.getBounds(),
                        this.capHitArea(a),
                        i.style.left = a.x * e + "px",
                        i.style.top = a.y * r + "px",
                        i.style.width = a.width * e + "px",
                        i.style.height = a.height * r + "px",
                        i.title !== s.accessibleTitle && null !== s.accessibleTitle && (i.title = s.accessibleTitle),
                        i.getAttribute("aria-label") !== s.accessibleHint && null !== s.accessibleHint && i.setAttribute("aria-label", s.accessibleHint))
                    }
                }
                this.renderId++
            }
        }
        ,
        t.prototype.capHitArea = function(t) {
            t.x < 0 && (t.width += t.x,
            t.x = 0),
            t.y < 0 && (t.height += t.y,
            t.y = 0),
            t.x + t.width > this.renderer.width && (t.width = this.renderer.width - t.x),
            t.y + t.height > this.renderer.height && (t.height = this.renderer.height - t.y)
        }
        ,
        t.prototype.addChild = function(t) {
            var e = this.pool.pop();
            e || ((e = document.createElement("button")).style.width = "100px",
            e.style.height = "100px",
            e.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent",
            e.style.position = "absolute",
            e.style.zIndex = 2,
            e.style.borderStyle = "none",
            navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"),
            navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"),
            e.addEventListener("click", this._onClick.bind(this)),
            e.addEventListener("focus", this._onFocus.bind(this)),
            e.addEventListener("focusout", this._onFocusOut.bind(this))),
            t.accessibleTitle && null !== t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleHint && null !== t.accessibleHint || (e.title = "displayObject " + t.tabIndex),
            t.accessibleHint && null !== t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint),
            t._accessibleActive = !0,
            t._accessibleDiv = e,
            e.displayObject = t,
            this.children.push(t),
            this.div.appendChild(t._accessibleDiv),
            t._accessibleDiv.tabIndex = t.tabIndex
        }
        ,
        t.prototype._onClick = function(t) {
            var e = this.renderer.plugins.interaction;
            e.dispatchEvent(t.target.displayObject, "click", e.eventData)
        }
        ,
        t.prototype._onFocus = function(t) {
            t.target.getAttribute("aria-live", "off") || t.target.setAttribute("aria-live", "assertive");
            var e = this.renderer.plugins.interaction;
            e.dispatchEvent(t.target.displayObject, "mouseover", e.eventData)
        }
        ,
        t.prototype._onFocusOut = function(t) {
            t.target.getAttribute("aria-live", "off") || t.target.setAttribute("aria-live", "polite");
            var e = this.renderer.plugins.interaction;
            e.dispatchEvent(t.target.displayObject, "mouseout", e.eventData)
        }
        ,
        t.prototype._onKeyDown = function(t) {
            9 === t.keyCode && this.activate()
        }
        ,
        t.prototype._onMouseMove = function(t) {
            0 === t.movementX && 0 === t.movementY || this.deactivate()
        }
        ,
        t.prototype.destroy = function() {
            this.div = null;
            for (var t = 0; t < this.children.length; t++)
                this.children[t].div = null;
            window.document.removeEventListener("mousemove", this._onMouseMove, !0),
            window.removeEventListener("keydown", this._onKeyDown),
            this.pool = null,
            this.children = null,
            this.renderer = null
        }
        ,
        t
    }();
    e.default = a,
    n.WebGLRenderer.registerPlugin("accessibility", a),
    n.CanvasRenderer.registerPlugin("accessibility", a)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = r(357);
    Object.defineProperty(e, "webgl", {
        enumerable: !0,
        get: function() {
            return o(n).default
        }
    });
    var i = r(358);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "canvas", {
        enumerable: !0,
        get: function() {
            return o(i).default
        }
    })
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5));
    var i = new n.Rectangle
      , o = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.renderer = e,
            e.extract = this
        }
        return t.prototype.image = function(t) {
            var e = new Image;
            return e.src = this.base64(t),
            e
        }
        ,
        t.prototype.base64 = function(t) {
            return this.canvas(t).toDataURL()
        }
        ,
        t.prototype.canvas = function(t) {
            var e = this.renderer
              , r = void 0
              , o = void 0
              , s = void 0
              , a = !1
              , u = void 0
              , h = !1;
            t && (t instanceof n.RenderTexture ? u = t : (u = this.renderer.generateTexture(t),
            h = !0)),
            u ? (o = (r = u.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID]).resolution,
            s = u.frame,
            a = !1) : (o = (r = this.renderer.rootRenderTarget).resolution,
            a = !0,
            (s = i).width = r.size.width,
            s.height = r.size.height);
            var l = Math.floor(s.width * o + 1e-4)
              , c = Math.floor(s.height * o + 1e-4)
              , f = new n.CanvasRenderTarget(l,c,1);
            if (r) {
                e.bindRenderTarget(r);
                var d = new Uint8Array(4 * l * c)
                  , p = e.gl;
                p.readPixels(s.x * o, s.y * o, l, c, p.RGBA, p.UNSIGNED_BYTE, d);
                var v = f.context.getImageData(0, 0, l, c);
                v.data.set(d),
                f.context.putImageData(v, 0, 0),
                a && (f.context.scale(1, -1),
                f.context.drawImage(f.canvas, 0, -c))
            }
            return h && u.destroy(!0),
            f.canvas
        }
        ,
        t.prototype.pixels = function(t) {
            var e = this.renderer
              , r = void 0
              , o = void 0
              , s = void 0
              , a = void 0
              , u = !1;
            t && (t instanceof n.RenderTexture ? a = t : (a = this.renderer.generateTexture(t),
            u = !0)),
            a ? (o = (r = a.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID]).resolution,
            s = a.frame) : (o = (r = this.renderer.rootRenderTarget).resolution,
            (s = i).width = r.size.width,
            s.height = r.size.height);
            var h = s.width * o
              , l = s.height * o
              , c = new Uint8Array(4 * h * l);
            if (r) {
                e.bindRenderTarget(r);
                var f = e.gl;
                f.readPixels(s.x * o, s.y * o, h, l, f.RGBA, f.UNSIGNED_BYTE, c)
            }
            return u && a.destroy(!0),
            c
        }
        ,
        t.prototype.destroy = function() {
            this.renderer.extract = null,
            this.renderer = null
        }
        ,
        t
    }();
    e.default = o,
    n.WebGLRenderer.registerPlugin("extract", o)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5));
    var i = new n.Rectangle
      , o = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.renderer = e,
            e.extract = this
        }
        return t.prototype.image = function(t) {
            var e = new Image;
            return e.src = this.base64(t),
            e
        }
        ,
        t.prototype.base64 = function(t) {
            return this.canvas(t).toDataURL()
        }
        ,
        t.prototype.canvas = function(t) {
            var e = this.renderer
              , r = void 0
              , o = void 0
              , s = void 0
              , a = void 0;
            t && (a = t instanceof n.RenderTexture ? t : e.generateTexture(t)),
            a ? (r = a.baseTexture._canvasRenderTarget.context,
            o = a.baseTexture._canvasRenderTarget.resolution,
            s = a.frame) : (r = e.rootContext,
            o = e.resolution,
            (s = i).width = this.renderer.width,
            s.height = this.renderer.height);
            var u = Math.floor(s.width * o + 1e-4)
              , h = Math.floor(s.height * o + 1e-4)
              , l = new n.CanvasRenderTarget(u,h,1)
              , c = r.getImageData(s.x * o, s.y * o, u, h);
            return l.context.putImageData(c, 0, 0),
            l.canvas
        }
        ,
        t.prototype.pixels = function(t) {
            var e = this.renderer
              , r = void 0
              , o = void 0
              , s = void 0
              , a = void 0;
            return t && (a = t instanceof n.RenderTexture ? t : e.generateTexture(t)),
            a ? (r = a.baseTexture._canvasRenderTarget.context,
            o = a.baseTexture._canvasRenderTarget.resolution,
            s = a.frame) : (r = e.rootContext,
            (s = i).width = e.width,
            s.height = e.height),
            r.getImageData(0, 0, s.width * o, s.height * o).data
        }
        ,
        t.prototype.destroy = function() {
            this.renderer.extract = null,
            this.renderer = null
        }
        ,
        t
    }();
    e.default = o,
    n.CanvasRenderer.registerPlugin("extract", o)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5));
    var o = function(t) {
        function e(r, n) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var o = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r[0]instanceof i.Texture ? r[0] : r[0].texture));
            return o._textures = null,
            o._durations = null,
            o.textures = r,
            o._autoUpdate = !1 !== n,
            o.animationSpeed = 1,
            o.loop = !0,
            o.updateAnchor = !1,
            o.onComplete = null,
            o.onFrameChange = null,
            o.onLoop = null,
            o._currentTime = 0,
            o.playing = !1,
            o
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.stop = function() {
            this.playing && (this.playing = !1,
            this._autoUpdate && i.ticker.shared.remove(this.update, this))
        }
        ,
        e.prototype.play = function() {
            this.playing || (this.playing = !0,
            this._autoUpdate && i.ticker.shared.add(this.update, this, i.UPDATE_PRIORITY.HIGH))
        }
        ,
        e.prototype.gotoAndStop = function(t) {
            this.stop();
            var e = this.currentFrame;
            this._currentTime = t,
            e !== this.currentFrame && this.updateTexture()
        }
        ,
        e.prototype.gotoAndPlay = function(t) {
            var e = this.currentFrame;
            this._currentTime = t,
            e !== this.currentFrame && this.updateTexture(),
            this.play()
        }
        ,
        e.prototype.update = function(t) {
            var e = this.animationSpeed * t
              , r = this.currentFrame;
            if (null !== this._durations) {
                var n = this._currentTime % 1 * this._durations[this.currentFrame];
                for (n += e / 60 * 1e3; n < 0; )
                    this._currentTime--,
                    n += this._durations[this.currentFrame];
                var i = Math.sign(this.animationSpeed * t);
                for (this._currentTime = Math.floor(this._currentTime); n >= this._durations[this.currentFrame]; )
                    n -= this._durations[this.currentFrame] * i,
                    this._currentTime += i;
                this._currentTime += n / this._durations[this.currentFrame]
            } else
                this._currentTime += e;
            this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0),
            this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1),
            this.onComplete && this.onComplete()) : r !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < r || this.animationSpeed < 0 && this.currentFrame > r) && this.onLoop(),
            this.updateTexture())
        }
        ,
        e.prototype.updateTexture = function() {
            this._texture = this._textures[this.currentFrame],
            this._textureID = -1,
            this.cachedTint = 16777215,
            this.updateAnchor && this._anchor.copy(this._texture.defaultAnchor),
            this.onFrameChange && this.onFrameChange(this.currentFrame)
        }
        ,
        e.prototype.destroy = function(e) {
            this.stop(),
            t.prototype.destroy.call(this, e)
        }
        ,
        e.fromFrames = function(t) {
            for (var r = [], n = 0; n < t.length; ++n)
                r.push(i.Texture.fromFrame(t[n]));
            return new e(r)
        }
        ,
        e.fromImages = function(t) {
            for (var r = [], n = 0; n < t.length; ++n)
                r.push(i.Texture.fromImage(t[n]));
            return new e(r)
        }
        ,
        n(e, [{
            key: "totalFrames",
            get: function() {
                return this._textures.length
            }
        }, {
            key: "textures",
            get: function() {
                return this._textures
            },
            set: function(t) {
                if (t[0]instanceof i.Texture)
                    this._textures = t,
                    this._durations = null;
                else {
                    this._textures = [],
                    this._durations = [];
                    for (var e = 0; e < t.length; e++)
                        this._textures.push(t[e].texture),
                        this._durations.push(t[e].time)
                }
                this.gotoAndStop(0),
                this.updateTexture()
            }
        }, {
            key: "currentFrame",
            get: function() {
                var t = Math.floor(this._currentTime) % this._textures.length;
                return t < 0 && (t += this._textures.length),
                t
            }
        }]),
        e
    }(i.Sprite);
    e.default = o
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }(), o = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5)), s = r(70), a = (n = s) && n.__esModule ? n : {
        default: n
    };
    function u(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function h(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    var l = new o.Point
      , c = function(t) {
        function e(r) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
            u(this, e);
            var s = h(this, t.call(this, r));
            return s.tileTransform = new o.TransformStatic,
            s._width = n,
            s._height = i,
            s._canvasPattern = null,
            s.uvTransform = r.transform || new o.TextureMatrix(r),
            s.pluginName = "tilingSprite",
            s.uvRespectAnchor = !1,
            s
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype._onTextureUpdate = function() {
            this.uvTransform && (this.uvTransform.texture = this._texture),
            this.cachedTint = 16777215
        }
        ,
        e.prototype._renderWebGL = function(t) {
            var e = this._texture;
            e && e.valid && (this.tileTransform.updateLocalTransform(),
            this.uvTransform.update(),
            t.setObjectRenderer(t.plugins[this.pluginName]),
            t.plugins[this.pluginName].render(this))
        }
        ,
        e.prototype._renderCanvas = function(t) {
            var e = this._texture;
            if (e.baseTexture.hasLoaded) {
                var r = t.context
                  , n = this.worldTransform
                  , i = t.resolution
                  , s = 2 === e.rotate
                  , u = e.baseTexture
                  , h = u.resolution
                  , l = this.tilePosition.x / this.tileScale.x % e.orig.width * h
                  , c = this.tilePosition.y / this.tileScale.y % e.orig.height * h;
                if (this._textureID !== this._texture._updateID || this.cachedTint !== this.tint) {
                    this._textureID = this._texture._updateID;
                    var f = new o.CanvasRenderTarget(e.orig.width,e.orig.height,h);
                    if (16777215 !== this.tint)
                        this.tintedTexture = a.default.getTintedTexture(this, this.tint),
                        f.context.drawImage(this.tintedTexture, 0, 0);
                    else {
                        var d = e._frame.x * h
                          , p = e._frame.y * h
                          , v = e._frame.width * h
                          , y = e._frame.height * h
                          , g = (e.trim ? e.trim.width : e.orig.width) * h
                          , _ = (e.trim ? e.trim.height : e.orig.height) * h
                          , m = (e.trim ? e.trim.x : 0) * h
                          , b = (e.trim ? e.trim.y : 0) * h;
                        s ? (f.context.rotate(-Math.PI / 2),
                        f.context.translate(-_, 0),
                        f.context.drawImage(u.source, d, p, v, y, -b, m, _, g)) : f.context.drawImage(u.source, d, p, v, y, m, b, g, _)
                    }
                    this.cachedTint = this.tint,
                    this._canvasPattern = f.context.createPattern(f.canvas, "repeat")
                }
                r.globalAlpha = this.worldAlpha,
                r.setTransform(n.a * i, n.b * i, n.c * i, n.d * i, n.tx * i, n.ty * i),
                t.setBlendMode(this.blendMode),
                r.fillStyle = this._canvasPattern,
                r.scale(this.tileScale.x / h, this.tileScale.y / h);
                var x = this.anchor.x * -this._width * h
                  , T = this.anchor.y * -this._height * h;
                this.uvRespectAnchor ? (r.translate(l, c),
                r.fillRect(-l + x, -c + T, this._width / this.tileScale.x * h, this._height / this.tileScale.y * h)) : (r.translate(l + x, c + T),
                r.fillRect(-l, -c, this._width / this.tileScale.x * h, this._height / this.tileScale.y * h))
            }
        }
        ,
        e.prototype._calculateBounds = function() {
            var t = this._width * -this._anchor._x
              , e = this._height * -this._anchor._y
              , r = this._width * (1 - this._anchor._x)
              , n = this._height * (1 - this._anchor._y);
            this._bounds.addFrame(this.transform, t, e, r, n)
        }
        ,
        e.prototype.getLocalBounds = function(e) {
            return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x,
            this._bounds.minY = this._height * -this._anchor._y,
            this._bounds.maxX = this._width * (1 - this._anchor._x),
            this._bounds.maxY = this._height * (1 - this._anchor._y),
            e || (this._localBoundsRect || (this._localBoundsRect = new o.Rectangle),
            e = this._localBoundsRect),
            this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
        }
        ,
        e.prototype.containsPoint = function(t) {
            this.worldTransform.applyInverse(t, l);
            var e = this._width
              , r = this._height
              , n = -e * this.anchor._x;
            if (l.x >= n && l.x < n + e) {
                var i = -r * this.anchor._y;
                if (l.y >= i && l.y < i + r)
                    return !0
            }
            return !1
        }
        ,
        e.prototype.destroy = function(e) {
            t.prototype.destroy.call(this, e),
            this.tileTransform = null,
            this.uvTransform = null
        }
        ,
        e.from = function(t, r, n) {
            return new e(o.Texture.from(t),r,n)
        }
        ,
        e.fromFrame = function(t, r, n) {
            var i = o.utils.TextureCache[t];
            if (!i)
                throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
            return new e(i,r,n)
        }
        ,
        e.fromImage = function(t, r, n, i, s) {
            return new e(o.Texture.fromImage(t, i, s),r,n)
        }
        ,
        i(e, [{
            key: "clampMargin",
            get: function() {
                return this.uvTransform.clampMargin
            },
            set: function(t) {
                this.uvTransform.clampMargin = t,
                this.uvTransform.update(!0)
            }
        }, {
            key: "tileScale",
            get: function() {
                return this.tileTransform.scale
            },
            set: function(t) {
                this.tileTransform.scale.copy(t)
            }
        }, {
            key: "tilePosition",
            get: function() {
                return this.tileTransform.position
            },
            set: function(t) {
                this.tileTransform.position.copy(t)
            }
        }, {
            key: "width",
            get: function() {
                return this._width
            },
            set: function(t) {
                this._width = t
            }
        }, {
            key: "height",
            get: function() {
                return this._height
            },
            set: function(t) {
                this._height = t
            }
        }]),
        e
    }(o.Sprite);
    e.default = c
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5))
      , i = r(4);
    r(24);
    var o = new n.Matrix
      , s = function(t) {
        function e(r) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return n.shader = null,
            n.simpleShader = null,
            n.quad = null,
            n
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.onContextChange = function() {
            var t = this.renderer.gl;
            this.shader = new n.Shader(t,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n","varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 sample = texture2D(uSampler, coord);\n    gl_FragColor = sample * uColor;\n}\n"),
            this.simpleShader = new n.Shader(t,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n","varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n"),
            this.renderer.bindVao(null),
            this.quad = new n.Quad(t,this.renderer.state.attribState),
            this.quad.initVao(this.shader)
        }
        ,
        e.prototype.render = function(t) {
            var e = this.renderer
              , r = this.quad;
            e.bindVao(r.vao);
            var s = r.vertices;
            s[0] = s[6] = t._width * -t.anchor.x,
            s[1] = s[3] = t._height * -t.anchor.y,
            s[2] = s[4] = t._width * (1 - t.anchor.x),
            s[5] = s[7] = t._height * (1 - t.anchor.y),
            t.uvRespectAnchor && ((s = r.uvs)[0] = s[6] = -t.anchor.x,
            s[1] = s[3] = -t.anchor.y,
            s[2] = s[4] = 1 - t.anchor.x,
            s[5] = s[7] = 1 - t.anchor.y),
            r.upload();
            var a = t._texture
              , u = a.baseTexture
              , h = t.tileTransform.localTransform
              , l = t.uvTransform
              , c = u.isPowerOfTwo && a.frame.width === u.width && a.frame.height === u.height;
            c && (u._glTextures[e.CONTEXT_UID] ? c = u.wrapMode !== i.WRAP_MODES.CLAMP : u.wrapMode === i.WRAP_MODES.CLAMP && (u.wrapMode = i.WRAP_MODES.REPEAT));
            var f = c ? this.simpleShader : this.shader;
            e.bindShader(f);
            var d = a.width
              , p = a.height
              , v = t._width
              , y = t._height;
            o.set(h.a * d / v, h.b * d / y, h.c * p / v, h.d * p / y, h.tx / v, h.ty / y),
            o.invert(),
            c ? o.prepend(l.mapCoord) : (f.uniforms.uMapCoord = l.mapCoord.toArray(!0),
            f.uniforms.uClampFrame = l.uClampFrame,
            f.uniforms.uClampOffset = l.uClampOffset),
            f.uniforms.uTransform = o.toArray(!0),
            f.uniforms.uColor = n.utils.premultiplyTintToRgba(t.tint, t.worldAlpha, f.uniforms.uColor, u.premultipliedAlpha),
            f.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0),
            f.uniforms.uSampler = e.bindTexture(a),
            e.setBlendMode(n.utils.correctBlendMode(t.blendMode, u.premultipliedAlpha)),
            r.vao.draw(this.renderer.gl.TRIANGLES, 6, 0)
        }
        ,
        e
    }(n.ObjectRenderer);
    e.default = s,
    n.WebGLRenderer.registerPlugin("tilingSprite", s)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5))
      , o = u(r(151))
      , s = r(6)
      , a = u(r(12));
    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function h(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function l(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    var c = function(t) {
        function e(r) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            h(this, e);
            var i = l(this, t.call(this));
            return i._textWidth = 0,
            i._textHeight = 0,
            i._glyphs = [],
            i._font = {
                tint: void 0 !== n.tint ? n.tint : 16777215,
                align: n.align || "left",
                name: null,
                size: 0
            },
            i.font = n.font,
            i._text = r,
            i._maxWidth = 0,
            i._maxLineHeight = 0,
            i._letterSpacing = 0,
            i._anchor = new o.default((function() {
                i.dirty = !0
            }
            ),i,0,0),
            i.dirty = !1,
            i.updateText(),
            i
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.updateText = function() {
            for (var t = e.fonts[this._font.name], r = this._font.size / t.size, n = new i.Point, o = [], s = [], a = this.text.replace(/(?:\r\n|\r)/g, "\n"), u = a.length, h = this._maxWidth * t.size / this._font.size, l = null, c = 0, f = 0, d = 0, p = -1, v = 0, y = 0, g = 0, _ = 0; _ < u; _++) {
                var m = a.charCodeAt(_)
                  , b = a.charAt(_);
                if (/(?:\s)/.test(b) && (p = _,
                v = c),
                "\r" !== b && "\n" !== b) {
                    var x = t.chars[m];
                    x && (l && x.kerning[l] && (n.x += x.kerning[l]),
                    o.push({
                        texture: x.texture,
                        line: d,
                        charCode: m,
                        position: new i.Point(n.x + x.xOffset + this._letterSpacing / 2,n.y + x.yOffset)
                    }),
                    n.x += x.xAdvance + this._letterSpacing,
                    c = n.x,
                    g = Math.max(g, x.yOffset + x.texture.height),
                    l = m,
                    -1 !== p && h > 0 && n.x > h && (++y,
                    i.utils.removeItems(o, 1 + p - y, 1 + _ - p),
                    _ = p,
                    p = -1,
                    s.push(v),
                    f = Math.max(f, v),
                    d++,
                    n.x = 0,
                    n.y += t.lineHeight,
                    l = null))
                } else
                    s.push(c),
                    f = Math.max(f, c),
                    ++d,
                    ++y,
                    n.x = 0,
                    n.y += t.lineHeight,
                    l = null
            }
            var T = a.charAt(a.length - 1);
            "\r" !== T && "\n" !== T && (/(?:\s)/.test(T) && (c = v),
            s.push(c),
            f = Math.max(f, c));
            for (var E = [], w = 0; w <= d; w++) {
                var S = 0;
                "right" === this._font.align ? S = f - s[w] : "center" === this._font.align && (S = (f - s[w]) / 2),
                E.push(S)
            }
            for (var O = o.length, M = this.tint, P = 0; P < O; P++) {
                var C = this._glyphs[P];
                C ? C.texture = o[P].texture : (C = new i.Sprite(o[P].texture),
                this._glyphs.push(C)),
                C.position.x = (o[P].position.x + E[o[P].line]) * r,
                C.position.y = o[P].position.y * r,
                C.scale.x = C.scale.y = r,
                C.tint = M,
                C.parent || this.addChild(C)
            }
            for (var A = O; A < this._glyphs.length; ++A)
                this.removeChild(this._glyphs[A]);
            if (this._textWidth = f * r,
            this._textHeight = (n.y + t.lineHeight) * r,
            0 !== this.anchor.x || 0 !== this.anchor.y)
                for (var R = 0; R < O; R++)
                    this._glyphs[R].x -= this._textWidth * this.anchor.x,
                    this._glyphs[R].y -= this._textHeight * this.anchor.y;
            this._maxLineHeight = g * r
        }
        ,
        e.prototype.updateTransform = function() {
            this.validate(),
            this.containerUpdateTransform()
        }
        ,
        e.prototype.getLocalBounds = function() {
            return this.validate(),
            t.prototype.getLocalBounds.call(this)
        }
        ,
        e.prototype.validate = function() {
            this.dirty && (this.updateText(),
            this.dirty = !1)
        }
        ,
        e.registerFont = function(t, r) {
            var n = {}
              , o = t.getElementsByTagName("info")[0]
              , u = t.getElementsByTagName("common")[0]
              , h = t.getElementsByTagName("page")
              , l = (0,
            s.getResolutionOfUrl)(h[0].getAttribute("file"), a.default.RESOLUTION)
              , c = {};
            n.font = o.getAttribute("face"),
            n.size = parseInt(o.getAttribute("size"), 10),
            n.lineHeight = parseInt(u.getAttribute("lineHeight"), 10) / l,
            n.chars = {},
            r instanceof i.Texture && (r = [r]);
            for (var f = 0; f < h.length; f++) {
                var d = h[f].getAttribute("id")
                  , p = h[f].getAttribute("file");
                c[d] = r instanceof Array ? r[f] : r[p]
            }
            for (var v = t.getElementsByTagName("char"), y = 0; y < v.length; y++) {
                var g = v[y]
                  , _ = parseInt(g.getAttribute("id"), 10)
                  , m = g.getAttribute("page") || 0
                  , b = new i.Rectangle(parseInt(g.getAttribute("x"), 10) / l + c[m].frame.x / l,parseInt(g.getAttribute("y"), 10) / l + c[m].frame.y / l,parseInt(g.getAttribute("width"), 10) / l,parseInt(g.getAttribute("height"), 10) / l);
                n.chars[_] = {
                    xOffset: parseInt(g.getAttribute("xoffset"), 10) / l,
                    yOffset: parseInt(g.getAttribute("yoffset"), 10) / l,
                    xAdvance: parseInt(g.getAttribute("xadvance"), 10) / l,
                    kerning: {},
                    texture: new i.Texture(c[m].baseTexture,b),
                    page: m
                }
            }
            for (var x = t.getElementsByTagName("kerning"), T = 0; T < x.length; T++) {
                var E = x[T]
                  , w = parseInt(E.getAttribute("first"), 10) / l
                  , S = parseInt(E.getAttribute("second"), 10) / l
                  , O = parseInt(E.getAttribute("amount"), 10) / l;
                n.chars[S] && (n.chars[S].kerning[w] = O)
            }
            return e.fonts[n.font] = n,
            n
        }
        ,
        n(e, [{
            key: "tint",
            get: function() {
                return this._font.tint
            },
            set: function(t) {
                this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215,
                this.dirty = !0
            }
        }, {
            key: "align",
            get: function() {
                return this._font.align
            },
            set: function(t) {
                this._font.align = t || "left",
                this.dirty = !0
            }
        }, {
            key: "anchor",
            get: function() {
                return this._anchor
            },
            set: function(t) {
                "number" == typeof t ? this._anchor.set(t) : this._anchor.copy(t)
            }
        }, {
            key: "font",
            get: function() {
                return this._font
            },
            set: function(t) {
                t && ("string" == typeof t ? (t = t.split(" "),
                this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "),
                this._font.size = t.length >= 2 ? parseInt(t[0], 10) : e.fonts[this._font.name].size) : (this._font.name = t.name,
                this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)),
                this.dirty = !0)
            }
        }, {
            key: "text",
            get: function() {
                return this._text
            },
            set: function(t) {
                t = t.toString() || " ",
                this._text !== t && (this._text = t,
                this.dirty = !0)
            }
        }, {
            key: "maxWidth",
            get: function() {
                return this._maxWidth
            },
            set: function(t) {
                this._maxWidth !== t && (this._maxWidth = t,
                this.dirty = !0)
            }
        }, {
            key: "maxLineHeight",
            get: function() {
                return this.validate(),
                this._maxLineHeight
            }
        }, {
            key: "textWidth",
            get: function() {
                return this.validate(),
                this._textWidth
            }
        }, {
            key: "letterSpacing",
            get: function() {
                return this._letterSpacing
            },
            set: function(t) {
                this._letterSpacing !== t && (this._letterSpacing = t,
                this.dirty = !0)
            }
        }, {
            key: "textHeight",
            get: function() {
                return this.validate(),
                this._textHeight
            }
        }]),
        e
    }(i.Container);
    e.default = c,
    c.fonts = {}
}
, function(t, e, r) {
    "use strict";
    var n = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5))
      , i = a(r(29))
      , o = a(r(44))
      , s = r(6);
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var u = n.DisplayObject
      , h = new n.Matrix;
    u.prototype._cacheAsBitmap = !1,
    u.prototype._cacheData = !1;
    var l = function t() {
        !function(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }(this, t),
        this.textureCacheId = null,
        this.originalRenderWebGL = null,
        this.originalRenderCanvas = null,
        this.originalCalculateBounds = null,
        this.originalGetLocalBounds = null,
        this.originalUpdateTransform = null,
        this.originalHitTest = null,
        this.originalDestroy = null,
        this.originalMask = null,
        this.originalFilterArea = null,
        this.sprite = null
    };
    Object.defineProperties(u.prototype, {
        cacheAsBitmap: {
            get: function() {
                return this._cacheAsBitmap
            },
            set: function(t) {
                if (this._cacheAsBitmap !== t) {
                    this._cacheAsBitmap = t;
                    var e = void 0;
                    t ? (this._cacheData || (this._cacheData = new l),
                    (e = this._cacheData).originalRenderWebGL = this.renderWebGL,
                    e.originalRenderCanvas = this.renderCanvas,
                    e.originalUpdateTransform = this.updateTransform,
                    e.originalCalculateBounds = this.calculateBounds,
                    e.originalGetLocalBounds = this.getLocalBounds,
                    e.originalDestroy = this.destroy,
                    e.originalContainsPoint = this.containsPoint,
                    e.originalMask = this._mask,
                    e.originalFilterArea = this.filterArea,
                    this.renderWebGL = this._renderCachedWebGL,
                    this.renderCanvas = this._renderCachedCanvas,
                    this.destroy = this._cacheAsBitmapDestroy) : ((e = this._cacheData).sprite && this._destroyCachedDisplayObject(),
                    this.renderWebGL = e.originalRenderWebGL,
                    this.renderCanvas = e.originalRenderCanvas,
                    this.calculateBounds = e.originalCalculateBounds,
                    this.getLocalBounds = e.originalGetLocalBounds,
                    this.destroy = e.originalDestroy,
                    this.updateTransform = e.originalUpdateTransform,
                    this.containsPoint = e.originalContainsPoint,
                    this._mask = e.originalMask,
                    this.filterArea = e.originalFilterArea)
                }
            }
        }
    }),
    u.prototype._renderCachedWebGL = function(t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t),
        this._cacheData.sprite.transform._worldID = this.transform._worldID,
        this._cacheData.sprite.worldAlpha = this.worldAlpha,
        this._cacheData.sprite._renderWebGL(t))
    }
    ,
    u.prototype._initCachedDisplayObject = function(t) {
        if (!this._cacheData || !this._cacheData.sprite) {
            var e = this.alpha;
            this.alpha = 1,
            t.currentRenderer.flush();
            var r = this.getLocalBounds().clone();
            if (this._filters && this._filters.length) {
                var a = this._filters[0].padding;
                r.pad(a)
            }
            r.ceil(n.settings.RESOLUTION);
            var u = t._activeRenderTarget
              , l = t.filterManager.filterStack
              , c = n.RenderTexture.create(r.width, r.height)
              , f = "cacheAsBitmap_" + (0,
            s.uid)();
            this._cacheData.textureCacheId = f,
            o.default.addToCache(c.baseTexture, f),
            i.default.addToCache(c, f);
            var d = h;
            d.tx = -r.x,
            d.ty = -r.y,
            this.transform.worldTransform.identity(),
            this.renderWebGL = this._cacheData.originalRenderWebGL,
            t.render(this, c, !0, d, !0),
            t.bindRenderTarget(u),
            t.filterManager.filterStack = l,
            this.renderWebGL = this._renderCachedWebGL,
            this.updateTransform = this.displayObjectUpdateTransform,
            this.calculateBounds = this._calculateCachedBounds,
            this.getLocalBounds = this._getCachedLocalBounds,
            this._mask = null,
            this.filterArea = null;
            var p = new n.Sprite(c);
            p.transform.worldTransform = this.transform.worldTransform,
            p.anchor.x = -r.x / r.width,
            p.anchor.y = -r.y / r.height,
            p.alpha = e,
            p._bounds = this._bounds,
            this._cacheData.sprite = p,
            this.transform._parentID = -1,
            this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent,
            this.updateTransform(),
            this.parent = null),
            this.containsPoint = p.containsPoint.bind(p)
        }
    }
    ,
    u.prototype._renderCachedCanvas = function(t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t),
        this._cacheData.sprite.worldAlpha = this.worldAlpha,
        this._cacheData.sprite._renderCanvas(t))
    }
    ,
    u.prototype._initCachedDisplayObjectCanvas = function(t) {
        if (!this._cacheData || !this._cacheData.sprite) {
            var e = this.getLocalBounds()
              , r = this.alpha;
            this.alpha = 1;
            var a = t.context;
            e.ceil(n.settings.RESOLUTION);
            var u = n.RenderTexture.create(e.width, e.height)
              , l = "cacheAsBitmap_" + (0,
            s.uid)();
            this._cacheData.textureCacheId = l,
            o.default.addToCache(u.baseTexture, l),
            i.default.addToCache(u, l);
            var c = h;
            this.transform.localTransform.copy(c),
            c.invert(),
            c.tx -= e.x,
            c.ty -= e.y,
            this.renderCanvas = this._cacheData.originalRenderCanvas,
            t.render(this, u, !0, c, !1),
            t.context = a,
            this.renderCanvas = this._renderCachedCanvas,
            this.updateTransform = this.displayObjectUpdateTransform,
            this.calculateBounds = this._calculateCachedBounds,
            this.getLocalBounds = this._getCachedLocalBounds,
            this._mask = null,
            this.filterArea = null;
            var f = new n.Sprite(u);
            f.transform.worldTransform = this.transform.worldTransform,
            f.anchor.x = -e.x / e.width,
            f.anchor.y = -e.y / e.height,
            f.alpha = r,
            f._bounds = this._bounds,
            this._cacheData.sprite = f,
            this.transform._parentID = -1,
            this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent,
            this.updateTransform(),
            this.parent = null),
            this.containsPoint = f.containsPoint.bind(f)
        }
    }
    ,
    u.prototype._calculateCachedBounds = function() {
        this._bounds.clear(),
        this._cacheData.sprite.transform._worldID = this.transform._worldID,
        this._cacheData.sprite._calculateBounds(),
        this._lastBoundsID = this._boundsID
    }
    ,
    u.prototype._getCachedLocalBounds = function() {
        return this._cacheData.sprite.getLocalBounds()
    }
    ,
    u.prototype._destroyCachedDisplayObject = function() {
        this._cacheData.sprite._texture.destroy(!0),
        this._cacheData.sprite = null,
        o.default.removeFromCache(this._cacheData.textureCacheId),
        i.default.removeFromCache(this._cacheData.textureCacheId),
        this._cacheData.textureCacheId = null
    }
    ,
    u.prototype._cacheAsBitmapDestroy = function(t) {
        this.cacheAsBitmap = !1,
        this.destroy(t)
    }
}
, function(t, e, r) {
    "use strict";
    var n = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5));
    n.DisplayObject.prototype.name = null,
    n.Container.prototype.getChildByName = function(t) {
        for (var e = 0; e < this.children.length; e++)
            if (this.children[e].name === t)
                return this.children[e];
        return null
    }
}
, function(t, e, r) {
    "use strict";
    var n = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5));
    n.DisplayObject.prototype.getGlobalPosition = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new n.Point
          , e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.parent ? this.parent.toGlobal(this.position, t, e) : (t.x = this.position.x,
        t.y = this.position.y),
        t
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = r(367);
    Object.defineProperty(e, "FXAAFilter", {
        enumerable: !0,
        get: function() {
            return c(n).default
        }
    });
    var i = r(368);
    Object.defineProperty(e, "NoiseFilter", {
        enumerable: !0,
        get: function() {
            return c(i).default
        }
    });
    var o = r(369);
    Object.defineProperty(e, "DisplacementFilter", {
        enumerable: !0,
        get: function() {
            return c(o).default
        }
    });
    var s = r(370);
    Object.defineProperty(e, "BlurFilter", {
        enumerable: !0,
        get: function() {
            return c(s).default
        }
    });
    var a = r(184);
    Object.defineProperty(e, "BlurXFilter", {
        enumerable: !0,
        get: function() {
            return c(a).default
        }
    });
    var u = r(188);
    Object.defineProperty(e, "BlurYFilter", {
        enumerable: !0,
        get: function() {
            return c(u).default
        }
    });
    var h = r(371);
    Object.defineProperty(e, "ColorMatrixFilter", {
        enumerable: !0,
        get: function() {
            return c(h).default
        }
    });
    var l = r(372);
    function c(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "AlphaFilter", {
        enumerable: !0,
        get: function() {
            return c(l).default
        }
    })
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5));
    r(24);
    var i = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, "\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}", 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n      vec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n'))
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e
    }(n.Filter);
    e.default = i
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5));
    r(24);
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    var a = function(t) {
        function e() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random();
            o(this, e);
            var i = s(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n"));
            return i.noise = r,
            i.seed = n,
            i
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        n(e, [{
            key: "noise",
            get: function() {
                return this.uniforms.uNoise
            },
            set: function(t) {
                this.uniforms.uNoise = t
            }
        }, {
            key: "seed",
            get: function() {
                return this.uniforms.uSeed
            },
            set: function(t) {
                this.uniforms.uSeed = t
            }
        }]),
        e
    }(i.Filter);
    e.default = a
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5));
    r(24);
    var o = function(t) {
        function e(r, n) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var o = new i.Matrix;
            r.renderable = !1;
            var s = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}", "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy *= scale / filterArea.xy;\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n"));
            return s.maskSprite = r,
            s.maskMatrix = o,
            s.uniforms.mapSampler = r._texture,
            s.uniforms.filterMatrix = o,
            s.uniforms.scale = {
                x: 1,
                y: 1
            },
            null == n && (n = 20),
            s.scale = new i.Point(n,n),
            s
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.apply = function(t, e, r) {
            this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite),
            this.uniforms.scale.x = this.scale.x,
            this.uniforms.scale.y = this.scale.y,
            t.applyFilter(this, e, r)
        }
        ,
        n(e, [{
            key: "map",
            get: function() {
                return this.uniforms.mapSampler
            },
            set: function(t) {
                this.uniforms.mapSampler = t
            }
        }]),
        e
    }(i.Filter);
    e.default = o
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5))
      , o = a(r(184))
      , s = a(r(188));
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var u = function(t) {
        function e(r, n, a, u) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var h = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return h.blurXFilter = new o.default(r,n,a,u),
            h.blurYFilter = new s.default(r,n,a,u),
            h.padding = 0,
            h.resolution = a || i.settings.RESOLUTION,
            h.quality = n || 4,
            h.blur = r || 8,
            h
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.apply = function(t, e, r) {
            var n = t.getRenderTarget(!0);
            this.blurXFilter.apply(t, e, n, !0),
            this.blurYFilter.apply(t, n, r, !1),
            t.returnRenderTarget(n)
        }
        ,
        n(e, [{
            key: "blur",
            get: function() {
                return this.blurXFilter.blur
            },
            set: function(t) {
                this.blurXFilter.blur = this.blurYFilter.blur = t,
                this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
            }
        }, {
            key: "quality",
            get: function() {
                return this.blurXFilter.quality
            },
            set: function(t) {
                this.blurXFilter.quality = this.blurYFilter.quality = t
            }
        }, {
            key: "blurX",
            get: function() {
                return this.blurXFilter.blur
            },
            set: function(t) {
                this.blurXFilter.blur = t,
                this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
            }
        }, {
            key: "blurY",
            get: function() {
                return this.blurYFilter.blur
            },
            set: function(t) {
                this.blurYFilter.blur = t,
                this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
            }
        }, {
            key: "blendMode",
            get: function() {
                return this.blurYFilter._blendMode
            },
            set: function(t) {
                this.blurYFilter._blendMode = t
            }
        }]),
        e
    }(i.Filter);
    e.default = u
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5));
    r(24);
    var o = function(t) {
        function e() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n"));
            return r.uniforms.m = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
            r.alpha = 1,
            r
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype._loadMatrix = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , r = t;
            e && (this._multiply(r, this.uniforms.m, t),
            r = this._colorMatrix(r)),
            this.uniforms.m = r
        }
        ,
        e.prototype._multiply = function(t, e, r) {
            return t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15],
            t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16],
            t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17],
            t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18],
            t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4],
            t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15],
            t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16],
            t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17],
            t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18],
            t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9],
            t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15],
            t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16],
            t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17],
            t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18],
            t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19] + e[14],
            t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15],
            t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16],
            t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17],
            t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18],
            t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19] + e[19],
            t
        }
        ,
        e.prototype._colorMatrix = function(t) {
            var e = new Float32Array(t);
            return e[4] /= 255,
            e[9] /= 255,
            e[14] /= 255,
            e[19] /= 255,
            e
        }
        ,
        e.prototype.brightness = function(t, e) {
            var r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
            this._loadMatrix(r, e)
        }
        ,
        e.prototype.greyscale = function(t, e) {
            var r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
            this._loadMatrix(r, e)
        }
        ,
        e.prototype.blackAndWhite = function(t) {
            this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], t)
        }
        ,
        e.prototype.hue = function(t, e) {
            t = (t || 0) / 180 * Math.PI;
            var r = Math.cos(t)
              , n = Math.sin(t)
              , i = 1 / 3
              , o = (0,
            Math.sqrt)(i)
              , s = [r + (1 - r) * i, i * (1 - r) - o * n, i * (1 - r) + o * n, 0, 0, i * (1 - r) + o * n, r + i * (1 - r), i * (1 - r) - o * n, 0, 0, i * (1 - r) - o * n, i * (1 - r) + o * n, r + i * (1 - r), 0, 0, 0, 0, 0, 1, 0];
            this._loadMatrix(s, e)
        }
        ,
        e.prototype.contrast = function(t, e) {
            var r = (t || 0) + 1
              , n = -.5 * (r - 1)
              , i = [r, 0, 0, 0, n, 0, r, 0, 0, n, 0, 0, r, 0, n, 0, 0, 0, 1, 0];
            this._loadMatrix(i, e)
        }
        ,
        e.prototype.saturate = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , e = arguments[1]
              , r = 2 * t / 3 + 1
              , n = -.5 * (r - 1)
              , i = [r, n, n, 0, 0, n, r, n, 0, 0, n, n, r, 0, 0, 0, 0, 0, 1, 0];
            this._loadMatrix(i, e)
        }
        ,
        e.prototype.desaturate = function() {
            this.saturate(-1)
        }
        ,
        e.prototype.negative = function(t) {
            this._loadMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0], t)
        }
        ,
        e.prototype.sepia = function(t) {
            this._loadMatrix([.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0], t)
        }
        ,
        e.prototype.technicolor = function(t) {
            this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0], t)
        }
        ,
        e.prototype.polaroid = function(t) {
            this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0], t)
        }
        ,
        e.prototype.toBGR = function(t) {
            this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], t)
        }
        ,
        e.prototype.kodachrome = function(t) {
            this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0], t)
        }
        ,
        e.prototype.browni = function(t) {
            this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0], t)
        }
        ,
        e.prototype.vintage = function(t) {
            this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0], t)
        }
        ,
        e.prototype.colorTone = function(t, e, r, n, i) {
            var o = ((r = r || 16770432) >> 16 & 255) / 255
              , s = (r >> 8 & 255) / 255
              , a = (255 & r) / 255
              , u = ((n = n || 3375104) >> 16 & 255) / 255
              , h = (n >> 8 & 255) / 255
              , l = (255 & n) / 255
              , c = [.3, .59, .11, 0, 0, o, s, a, t = t || .2, 0, u, h, l, e = e || .15, 0, o - u, s - h, a - l, 0, 0];
            this._loadMatrix(c, i)
        }
        ,
        e.prototype.night = function(t, e) {
            var r = [-2 * (t = t || .1), -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
            this._loadMatrix(r, e)
        }
        ,
        e.prototype.predator = function(t, e) {
            var r = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
            this._loadMatrix(r, e)
        }
        ,
        e.prototype.lsd = function(t) {
            this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], t)
        }
        ,
        e.prototype.reset = function() {
            this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], !1)
        }
        ,
        n(e, [{
            key: "matrix",
            get: function() {
                return this.uniforms.m
            },
            set: function(t) {
                this.uniforms.m = t
            }
        }, {
            key: "alpha",
            get: function() {
                return this.uniforms.uAlpha
            },
            set: function(t) {
                this.uniforms.uAlpha = t
            }
        }]),
        e
    }(i.Filter);
    e.default = o,
    o.prototype.grayscale = o.prototype.greyscale
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5));
    r(24);
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    var a = function(t) {
        function e() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            o(this, e);
            var n = s(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n"));
            return n.alpha = r,
            n.glShaderKey = "alpha",
            n
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        n(e, [{
            key: "alpha",
            get: function() {
                return this.uniforms.uAlpha
            },
            set: function(t) {
                this.uniforms.uAlpha = t
            }
        }]),
        e
    }(i.Filter);
    e.default = a
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = r(189);
    Object.defineProperty(e, "InteractionData", {
        enumerable: !0,
        get: function() {
            return u(n).default
        }
    });
    var i = r(374);
    Object.defineProperty(e, "InteractionManager", {
        enumerable: !0,
        get: function() {
            return u(i).default
        }
    });
    var o = r(192);
    Object.defineProperty(e, "interactiveTarget", {
        enumerable: !0,
        get: function() {
            return u(o).default
        }
    });
    var s = r(191);
    Object.defineProperty(e, "InteractionTrackingData", {
        enumerable: !0,
        get: function() {
            return u(s).default
        }
    });
    var a = r(190);
    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "InteractionEvent", {
        enumerable: !0,
        get: function() {
            return u(a).default
        }
    })
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5))
      , o = l(r(189))
      , s = l(r(190))
      , a = l(r(191))
      , u = l(r(36))
      , h = l(r(192));
    function l(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    i.utils.mixins.delayMixin(i.DisplayObject.prototype, h.default);
    var c = {
        target: null,
        data: {
            global: null
        }
    }
      , f = function(t) {
        function e(r, n) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var a = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return n = n || {},
            a.renderer = r,
            a.autoPreventDefault = void 0 === n.autoPreventDefault || n.autoPreventDefault,
            a.interactionFrequency = n.interactionFrequency || 10,
            a.mouse = new o.default,
            a.mouse.identifier = 1,
            a.mouse.global.set(-999999),
            a.activeInteractionData = {},
            a.activeInteractionData[1] = a.mouse,
            a.interactionDataPool = [],
            a.eventData = new s.default,
            a.interactionDOMElement = null,
            a.moveWhenInside = !1,
            a.eventsAdded = !1,
            a.mouseOverRenderer = !1,
            a.supportsTouchEvents = "ontouchstart"in window,
            a.supportsPointerEvents = !!window.PointerEvent,
            a.onPointerUp = a.onPointerUp.bind(a),
            a.processPointerUp = a.processPointerUp.bind(a),
            a.onPointerCancel = a.onPointerCancel.bind(a),
            a.processPointerCancel = a.processPointerCancel.bind(a),
            a.onPointerDown = a.onPointerDown.bind(a),
            a.processPointerDown = a.processPointerDown.bind(a),
            a.onPointerMove = a.onPointerMove.bind(a),
            a.processPointerMove = a.processPointerMove.bind(a),
            a.onPointerOut = a.onPointerOut.bind(a),
            a.processPointerOverOut = a.processPointerOverOut.bind(a),
            a.onPointerOver = a.onPointerOver.bind(a),
            a.cursorStyles = {
                default: "inherit",
                pointer: "pointer"
            },
            a.currentCursorMode = null,
            a.cursor = null,
            a._tempPoint = new i.Point,
            a.resolution = 1,
            a.setTargetElement(a.renderer.view, a.renderer.resolution),
            a
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.hitTest = function(t, e) {
            return c.target = null,
            c.data.global = t,
            e || (e = this.renderer._lastObjectRendered),
            this.processInteractive(c, e, null, !0),
            c.target
        }
        ,
        e.prototype.setTargetElement = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            this.removeEvents(),
            this.interactionDOMElement = t,
            this.resolution = e,
            this.addEvents()
        }
        ,
        e.prototype.addEvents = function() {
            this.interactionDOMElement && (i.ticker.shared.add(this.update, this, i.UPDATE_PRIORITY.INTERACTION),
            window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "none",
            this.interactionDOMElement.style["-ms-touch-action"] = "none") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = "none"),
            this.supportsPointerEvents ? (window.document.addEventListener("pointermove", this.onPointerMove, !0),
            this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, !0),
            this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, !0),
            this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, !0),
            window.addEventListener("pointercancel", this.onPointerCancel, !0),
            window.addEventListener("pointerup", this.onPointerUp, !0)) : (window.document.addEventListener("mousemove", this.onPointerMove, !0),
            this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, !0),
            this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, !0),
            this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, !0),
            window.addEventListener("mouseup", this.onPointerUp, !0)),
            this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, !0),
            this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, !0),
            this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, !0),
            this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, !0)),
            this.eventsAdded = !0)
        }
        ,
        e.prototype.removeEvents = function() {
            this.interactionDOMElement && (i.ticker.shared.remove(this.update, this),
            window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "",
            this.interactionDOMElement.style["-ms-touch-action"] = "") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = ""),
            this.supportsPointerEvents ? (window.document.removeEventListener("pointermove", this.onPointerMove, !0),
            this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, !0),
            this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, !0),
            this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, !0),
            window.removeEventListener("pointercancel", this.onPointerCancel, !0),
            window.removeEventListener("pointerup", this.onPointerUp, !0)) : (window.document.removeEventListener("mousemove", this.onPointerMove, !0),
            this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, !0),
            this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, !0),
            this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, !0),
            window.removeEventListener("mouseup", this.onPointerUp, !0)),
            this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, !0),
            this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, !0),
            this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, !0),
            this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, !0)),
            this.interactionDOMElement = null,
            this.eventsAdded = !1)
        }
        ,
        e.prototype.update = function(t) {
            if (this._deltaTime += t,
            !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0,
            this.interactionDOMElement))
                if (this.didMove)
                    this.didMove = !1;
                else {
                    for (var e in this.cursor = null,
                    this.activeInteractionData)
                        if (this.activeInteractionData.hasOwnProperty(e)) {
                            var r = this.activeInteractionData[e];
                            if (r.originalEvent && "touch" !== r.pointerType) {
                                var n = this.configureInteractionEventForDOMEvent(this.eventData, r.originalEvent, r);
                                this.processInteractive(n, this.renderer._lastObjectRendered, this.processPointerOverOut, !0)
                            }
                        }
                    this.setCursorMode(this.cursor)
                }
        }
        ,
        e.prototype.setCursorMode = function(t) {
            if (t = t || "default",
            this.currentCursorMode !== t) {
                this.currentCursorMode = t;
                var e = this.cursorStyles[t];
                if (e)
                    switch (void 0 === e ? "undefined" : n(e)) {
                    case "string":
                        this.interactionDOMElement.style.cursor = e;
                        break;
                    case "function":
                        e(t);
                        break;
                    case "object":
                        Object.assign(this.interactionDOMElement.style, e)
                    }
                else
                    "string" != typeof t || Object.prototype.hasOwnProperty.call(this.cursorStyles, t) || (this.interactionDOMElement.style.cursor = t)
            }
        }
        ,
        e.prototype.dispatchEvent = function(t, e, r) {
            r.stopped || (r.currentTarget = t,
            r.type = e,
            t.emit(e, r),
            t[e] && t[e](r))
        }
        ,
        e.prototype.mapPositionToPoint = function(t, e, r) {
            var n = void 0;
            n = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
            var i = navigator.isCocoonJS ? this.resolution : 1 / this.resolution;
            t.x = (e - n.left) * (this.interactionDOMElement.width / n.width) * i,
            t.y = (r - n.top) * (this.interactionDOMElement.height / n.height) * i
        }
        ,
        e.prototype.processInteractive = function(t, e, r, n, i) {
            if (!e || !e.visible)
                return !1;
            var o = t.data.global
              , s = !1
              , a = i = e.interactive || i
              , u = !0;
            if (e.hitArea ? (n && (e.worldTransform.applyInverse(o, this._tempPoint),
            e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? s = !0 : (n = !1,
            u = !1)),
            a = !1) : e._mask && n && (e._mask.containsPoint(o) || (n = !1,
            u = !1)),
            u && e.interactiveChildren && e.children)
                for (var h = e.children, l = h.length - 1; l >= 0; l--) {
                    var c = h[l]
                      , f = this.processInteractive(t, c, r, n, a);
                    if (f) {
                        if (!c.parent)
                            continue;
                        a = !1,
                        f && (t.target && (n = !1),
                        s = !0)
                    }
                }
            return i && (n && !t.target && !e.hitArea && e.containsPoint && e.containsPoint(o) && (s = !0),
            e.interactive && (s && !t.target && (t.target = e),
            r && r(t, e, !!s))),
            s
        }
        ,
        e.prototype.onPointerDown = function(t) {
            if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t);
                this.autoPreventDefault && e[0].isNormalized && t.preventDefault();
                for (var r = e.length, n = 0; n < r; n++) {
                    var i = e[n]
                      , o = this.getInteractionDataForPointerId(i)
                      , s = this.configureInteractionEventForDOMEvent(this.eventData, i, o);
                    if (s.data.originalEvent = t,
                    this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerDown, !0),
                    this.emit("pointerdown", s),
                    "touch" === i.pointerType)
                        this.emit("touchstart", s);
                    else if ("mouse" === i.pointerType || "pen" === i.pointerType) {
                        var a = 2 === i.button;
                        this.emit(a ? "rightdown" : "mousedown", this.eventData)
                    }
                }
            }
        }
        ,
        e.prototype.processPointerDown = function(t, e, r) {
            var n = t.data
              , i = t.data.identifier;
            if (r)
                if (e.trackedPointers[i] || (e.trackedPointers[i] = new a.default(i)),
                this.dispatchEvent(e, "pointerdown", t),
                "touch" === n.pointerType)
                    this.dispatchEvent(e, "touchstart", t);
                else if ("mouse" === n.pointerType || "pen" === n.pointerType) {
                    var o = 2 === n.button;
                    o ? e.trackedPointers[i].rightDown = !0 : e.trackedPointers[i].leftDown = !0,
                    this.dispatchEvent(e, o ? "rightdown" : "mousedown", t)
                }
        }
        ,
        e.prototype.onPointerComplete = function(t, e, r) {
            for (var n = this.normalizeToPointerData(t), i = n.length, o = t.target !== this.interactionDOMElement ? "outside" : "", s = 0; s < i; s++) {
                var a = n[s]
                  , u = this.getInteractionDataForPointerId(a)
                  , h = this.configureInteractionEventForDOMEvent(this.eventData, a, u);
                if (h.data.originalEvent = t,
                this.processInteractive(h, this.renderer._lastObjectRendered, r, e || !o),
                this.emit(e ? "pointercancel" : "pointerup" + o, h),
                "mouse" === a.pointerType || "pen" === a.pointerType) {
                    var l = 2 === a.button;
                    this.emit(l ? "rightup" + o : "mouseup" + o, h)
                } else
                    "touch" === a.pointerType && (this.emit(e ? "touchcancel" : "touchend" + o, h),
                    this.releaseInteractionDataForPointerId(a.pointerId, u))
            }
        }
        ,
        e.prototype.onPointerCancel = function(t) {
            this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !0, this.processPointerCancel)
        }
        ,
        e.prototype.processPointerCancel = function(t, e) {
            var r = t.data
              , n = t.data.identifier;
            void 0 !== e.trackedPointers[n] && (delete e.trackedPointers[n],
            this.dispatchEvent(e, "pointercancel", t),
            "touch" === r.pointerType && this.dispatchEvent(e, "touchcancel", t))
        }
        ,
        e.prototype.onPointerUp = function(t) {
            this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !1, this.processPointerUp)
        }
        ,
        e.prototype.processPointerUp = function(t, e, r) {
            var n = t.data
              , i = t.data.identifier
              , o = e.trackedPointers[i]
              , s = "touch" === n.pointerType
              , u = "mouse" === n.pointerType || "pen" === n.pointerType
              , h = !1;
            if (u) {
                var l = 2 === n.button
                  , c = a.default.FLAGS
                  , f = l ? c.RIGHT_DOWN : c.LEFT_DOWN
                  , d = void 0 !== o && o.flags & f;
                r ? (this.dispatchEvent(e, l ? "rightup" : "mouseup", t),
                d && (this.dispatchEvent(e, l ? "rightclick" : "click", t),
                h = !0)) : d && this.dispatchEvent(e, l ? "rightupoutside" : "mouseupoutside", t),
                o && (l ? o.rightDown = !1 : o.leftDown = !1)
            }
            r ? (this.dispatchEvent(e, "pointerup", t),
            s && this.dispatchEvent(e, "touchend", t),
            o && (u && !h || this.dispatchEvent(e, "pointertap", t),
            s && (this.dispatchEvent(e, "tap", t),
            o.over = !1))) : o && (this.dispatchEvent(e, "pointerupoutside", t),
            s && this.dispatchEvent(e, "touchendoutside", t)),
            o && o.none && delete e.trackedPointers[i]
        }
        ,
        e.prototype.onPointerMove = function(t) {
            if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t);
                "mouse" !== e[0].pointerType && "pen" !== e[0].pointerType || (this.didMove = !0,
                this.cursor = null);
                for (var r = e.length, n = 0; n < r; n++) {
                    var i = e[n]
                      , o = this.getInteractionDataForPointerId(i)
                      , s = this.configureInteractionEventForDOMEvent(this.eventData, i, o);
                    s.data.originalEvent = t;
                    var a = "touch" !== i.pointerType || this.moveWhenInside;
                    this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerMove, a),
                    this.emit("pointermove", s),
                    "touch" === i.pointerType && this.emit("touchmove", s),
                    "mouse" !== i.pointerType && "pen" !== i.pointerType || this.emit("mousemove", s)
                }
                "mouse" === e[0].pointerType && this.setCursorMode(this.cursor)
            }
        }
        ,
        e.prototype.processPointerMove = function(t, e, r) {
            var n = t.data
              , i = "touch" === n.pointerType
              , o = "mouse" === n.pointerType || "pen" === n.pointerType;
            o && this.processPointerOverOut(t, e, r),
            this.moveWhenInside && !r || (this.dispatchEvent(e, "pointermove", t),
            i && this.dispatchEvent(e, "touchmove", t),
            o && this.dispatchEvent(e, "mousemove", t))
        }
        ,
        e.prototype.onPointerOut = function(t) {
            if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t)[0];
                "mouse" === e.pointerType && (this.mouseOverRenderer = !1,
                this.setCursorMode(null));
                var r = this.getInteractionDataForPointerId(e)
                  , n = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
                n.data.originalEvent = e,
                this.processInteractive(n, this.renderer._lastObjectRendered, this.processPointerOverOut, !1),
                this.emit("pointerout", n),
                "mouse" === e.pointerType || "pen" === e.pointerType ? this.emit("mouseout", n) : this.releaseInteractionDataForPointerId(r.identifier)
            }
        }
        ,
        e.prototype.processPointerOverOut = function(t, e, r) {
            var n = t.data
              , i = t.data.identifier
              , o = "mouse" === n.pointerType || "pen" === n.pointerType
              , s = e.trackedPointers[i];
            r && !s && (s = e.trackedPointers[i] = new a.default(i)),
            void 0 !== s && (r && this.mouseOverRenderer ? (s.over || (s.over = !0,
            this.dispatchEvent(e, "pointerover", t),
            o && this.dispatchEvent(e, "mouseover", t)),
            o && null === this.cursor && (this.cursor = e.cursor)) : s.over && (s.over = !1,
            this.dispatchEvent(e, "pointerout", this.eventData),
            o && this.dispatchEvent(e, "mouseout", t),
            s.none && delete e.trackedPointers[i]))
        }
        ,
        e.prototype.onPointerOver = function(t) {
            var e = this.normalizeToPointerData(t)[0]
              , r = this.getInteractionDataForPointerId(e)
              , n = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
            n.data.originalEvent = e,
            "mouse" === e.pointerType && (this.mouseOverRenderer = !0),
            this.emit("pointerover", n),
            "mouse" !== e.pointerType && "pen" !== e.pointerType || this.emit("mouseover", n)
        }
        ,
        e.prototype.getInteractionDataForPointerId = function(t) {
            var e = t.pointerId
              , r = void 0;
            return 1 === e || "mouse" === t.pointerType ? r = this.mouse : this.activeInteractionData[e] ? r = this.activeInteractionData[e] : ((r = this.interactionDataPool.pop() || new o.default).identifier = e,
            this.activeInteractionData[e] = r),
            r.copyEvent(t),
            r
        }
        ,
        e.prototype.releaseInteractionDataForPointerId = function(t) {
            var e = this.activeInteractionData[t];
            e && (delete this.activeInteractionData[t],
            e.reset(),
            this.interactionDataPool.push(e))
        }
        ,
        e.prototype.configureInteractionEventForDOMEvent = function(t, e, r) {
            return t.data = r,
            this.mapPositionToPoint(r.global, e.clientX, e.clientY),
            navigator.isCocoonJS && "touch" === e.pointerType && (r.global.x = r.global.x / this.resolution,
            r.global.y = r.global.y / this.resolution),
            "touch" === e.pointerType && (e.globalX = r.global.x,
            e.globalY = r.global.y),
            r.originalEvent = e,
            t.reset(),
            t
        }
        ,
        e.prototype.normalizeToPointerData = function(t) {
            var e = [];
            if (this.supportsTouchEvents && t instanceof TouchEvent)
                for (var r = 0, n = t.changedTouches.length; r < n; r++) {
                    var i = t.changedTouches[r];
                    void 0 === i.button && (i.button = t.touches.length ? 1 : 0),
                    void 0 === i.buttons && (i.buttons = t.touches.length ? 1 : 0),
                    void 0 === i.isPrimary && (i.isPrimary = 1 === t.touches.length && "touchstart" === t.type),
                    void 0 === i.width && (i.width = i.radiusX || 1),
                    void 0 === i.height && (i.height = i.radiusY || 1),
                    void 0 === i.tiltX && (i.tiltX = 0),
                    void 0 === i.tiltY && (i.tiltY = 0),
                    void 0 === i.pointerType && (i.pointerType = "touch"),
                    void 0 === i.pointerId && (i.pointerId = i.identifier || 0),
                    void 0 === i.pressure && (i.pressure = i.force || .5),
                    void 0 === i.twist && (i.twist = 0),
                    void 0 === i.tangentialPressure && (i.tangentialPressure = 0),
                    void 0 === i.layerX && (i.layerX = i.offsetX = i.clientX),
                    void 0 === i.layerY && (i.layerY = i.offsetY = i.clientY),
                    i.isNormalized = !0,
                    e.push(i)
                }
            else
                !(t instanceof MouseEvent) || this.supportsPointerEvents && t instanceof window.PointerEvent || (void 0 === t.isPrimary && (t.isPrimary = !0),
                void 0 === t.width && (t.width = 1),
                void 0 === t.height && (t.height = 1),
                void 0 === t.tiltX && (t.tiltX = 0),
                void 0 === t.tiltY && (t.tiltY = 0),
                void 0 === t.pointerType && (t.pointerType = "mouse"),
                void 0 === t.pointerId && (t.pointerId = 1),
                void 0 === t.pressure && (t.pressure = .5),
                void 0 === t.twist && (t.twist = 0),
                void 0 === t.tangentialPressure && (t.tangentialPressure = 0),
                t.isNormalized = !0),
                e.push(t);
            return e
        }
        ,
        e.prototype.destroy = function() {
            this.removeEvents(),
            this.removeAllListeners(),
            this.renderer = null,
            this.mouse = null,
            this.eventData = null,
            this.interactionDOMElement = null,
            this.onPointerDown = null,
            this.processPointerDown = null,
            this.onPointerUp = null,
            this.processPointerUp = null,
            this.onPointerCancel = null,
            this.processPointerCancel = null,
            this.onPointerMove = null,
            this.processPointerMove = null,
            this.onPointerOut = null,
            this.processPointerOverOut = null,
            this.onPointerOver = null,
            this._tempPoint = null
        }
        ,
        e
    }(u.default);
    e.default = f,
    i.WebGLRenderer.registerPlugin("interaction", f),
    i.CanvasRenderer.registerPlugin("interaction", f)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.shared = e.Resource = e.textureParser = e.getResourcePath = e.spritesheetParser = e.parseBitmapFontData = e.bitmapFontParser = e.Loader = void 0;
    var n = r(193);
    Object.defineProperty(e, "bitmapFontParser", {
        enumerable: !0,
        get: function() {
            return h(n).default
        }
    }),
    Object.defineProperty(e, "parseBitmapFontData", {
        enumerable: !0,
        get: function() {
            return n.parse
        }
    });
    var i = r(198);
    Object.defineProperty(e, "spritesheetParser", {
        enumerable: !0,
        get: function() {
            return h(i).default
        }
    }),
    Object.defineProperty(e, "getResourcePath", {
        enumerable: !0,
        get: function() {
            return i.getResourcePath
        }
    });
    var o = r(199);
    Object.defineProperty(e, "textureParser", {
        enumerable: !0,
        get: function() {
            return h(o).default
        }
    });
    var s = r(57);
    Object.defineProperty(e, "Resource", {
        enumerable: !0,
        get: function() {
            return s.Resource
        }
    });
    var a = h(r(180))
      , u = h(r(377));
    function h(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.Loader = u.default;
    var l = new u.default;
    l.destroy = function() {}
    ,
    e.shared = l;
    var c = a.default.prototype;
    c._loader = null,
    Object.defineProperty(c, "loader", {
        get: function() {
            if (!this._loader) {
                var t = this._options.sharedLoader;
                this._loader = t ? l : new u.default
            }
            return this._loader
        }
    }),
    c._parentDestroy = c.destroy,
    c.destroy = function(t, e) {
        this._loader && (this._loader.destroy(),
        this._loader = null),
        this._parentDestroy(t, e)
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.Loader = void 0;
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
      , i = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , o = h(r(194))
      , s = h(r(195))
      , a = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(196))
      , u = r(110);
    function h(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function l(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var c = /(#[\w-]+)?$/
      , f = e.Loader = function() {
        function t() {
            var e = this
              , r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            l(this, t),
            this.baseUrl = r,
            this.progress = 0,
            this.loading = !1,
            this.defaultQueryString = "",
            this._beforeMiddleware = [],
            this._afterMiddleware = [],
            this._resourcesParsing = [],
            this._boundLoadResource = function(t, r) {
                return e._loadResource(t, r)
            }
            ,
            this._queue = a.queue(this._boundLoadResource, n),
            this._queue.pause(),
            this.resources = {},
            this.onProgress = new o.default,
            this.onError = new o.default,
            this.onLoad = new o.default,
            this.onStart = new o.default,
            this.onComplete = new o.default;
            for (var i = 0; i < t._defaultBeforeMiddleware.length; ++i)
                this.pre(t._defaultBeforeMiddleware[i]);
            for (var s = 0; s < t._defaultAfterMiddleware.length; ++s)
                this.use(t._defaultAfterMiddleware[s])
        }
        return t.prototype.add = function(t, e, r, i) {
            if (Array.isArray(t)) {
                for (var o = 0; o < t.length; ++o)
                    this.add(t[o]);
                return this
            }
            if ("object" === (void 0 === t ? "undefined" : n(t)) && (i = e || t.callback || t.onComplete,
            r = t,
            e = t.url,
            t = t.name || t.key || t.url),
            "string" != typeof e && (i = r,
            r = e,
            e = t),
            "string" != typeof e)
                throw new Error("No url passed to add resource to loader.");
            if ("function" == typeof r && (i = r,
            r = null),
            this.loading && (!r || !r.parentResource))
                throw new Error("Cannot add resources while the loader is running.");
            if (this.resources[t])
                throw new Error('Resource named "' + t + '" already exists.');
            if (e = this._prepareUrl(e),
            this.resources[t] = new u.Resource(t,e,r),
            "function" == typeof i && this.resources[t].onAfterMiddleware.once(i),
            this.loading) {
                for (var s = r.parentResource, a = [], h = 0; h < s.children.length; ++h)
                    s.children[h].isComplete || a.push(s.children[h]);
                var l = s.progressChunk * (a.length + 1) / (a.length + 2);
                s.children.push(this.resources[t]),
                s.progressChunk = l;
                for (var c = 0; c < a.length; ++c)
                    a[c].progressChunk = l;
                this.resources[t].progressChunk = l
            }
            return this._queue.push(this.resources[t]),
            this
        }
        ,
        t.prototype.pre = function(t) {
            return this._beforeMiddleware.push(t),
            this
        }
        ,
        t.prototype.use = function(t) {
            return this._afterMiddleware.push(t),
            this
        }
        ,
        t.prototype.reset = function() {
            for (var t in this.progress = 0,
            this.loading = !1,
            this._queue.kill(),
            this._queue.pause(),
            this.resources) {
                var e = this.resources[t];
                e._onLoadBinding && e._onLoadBinding.detach(),
                e.isLoading && e.abort()
            }
            return this.resources = {},
            this
        }
        ,
        t.prototype.load = function(t) {
            if ("function" == typeof t && this.onComplete.once(t),
            this.loading)
                return this;
            if (this._queue.idle())
                this._onStart(),
                this._onComplete();
            else {
                for (var e = 100 / this._queue._tasks.length, r = 0; r < this._queue._tasks.length; ++r)
                    this._queue._tasks[r].data.progressChunk = e;
                this._onStart(),
                this._queue.resume()
            }
            return this
        }
        ,
        t.prototype._prepareUrl = function(t) {
            var e = (0,
            s.default)(t, {
                strictMode: !0
            })
              , r = void 0;
            if (r = e.protocol || !e.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t,
            this.defaultQueryString) {
                var n = c.exec(r)[0];
                -1 !== (r = r.substr(0, r.length - n.length)).indexOf("?") ? r += "&" + this.defaultQueryString : r += "?" + this.defaultQueryString,
                r += n
            }
            return r
        }
        ,
        t.prototype._loadResource = function(t, e) {
            var r = this;
            t._dequeue = e,
            a.eachSeries(this._beforeMiddleware, (function(e, n) {
                e.call(r, t, (function() {
                    n(t.isComplete ? {} : null)
                }
                ))
            }
            ), (function() {
                t.isComplete ? r._onLoad(t) : (t._onLoadBinding = t.onComplete.once(r._onLoad, r),
                t.load())
            }
            ), !0)
        }
        ,
        t.prototype._onStart = function() {
            this.progress = 0,
            this.loading = !0,
            this.onStart.dispatch(this)
        }
        ,
        t.prototype._onComplete = function() {
            this.progress = 100,
            this.loading = !1,
            this.onComplete.dispatch(this, this.resources)
        }
        ,
        t.prototype._onLoad = function(t) {
            var e = this;
            t._onLoadBinding = null,
            this._resourcesParsing.push(t),
            t._dequeue(),
            a.eachSeries(this._afterMiddleware, (function(r, n) {
                r.call(e, t, n)
            }
            ), (function() {
                t.onAfterMiddleware.dispatch(t),
                e.progress = Math.min(100, e.progress + t.progressChunk),
                e.onProgress.dispatch(e, t),
                t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t),
                e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1),
                e._queue.idle() && 0 === e._resourcesParsing.length && e._onComplete()
            }
            ), !0)
        }
        ,
        i(t, [{
            key: "concurrency",
            get: function() {
                return this._queue.concurrency
            },
            set: function(t) {
                this._queue.concurrency = t
            }
        }]),
        t
    }();
    f._defaultBeforeMiddleware = [],
    f._defaultAfterMiddleware = [],
    f.pre = function(t) {
        return f._defaultBeforeMiddleware.push(t),
        f
    }
    ,
    f.use = function(t) {
        return f._defaultAfterMiddleware.push(t),
        f
    }
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = h(r(57))
      , i = r(378)
      , o = h(r(36))
      , s = h(r(199))
      , a = h(r(198))
      , u = h(r(193));
    function h(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var l = function(t) {
        function e(r, n) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r, n));
            o.default.call(i);
            for (var s = 0; s < e._pixiMiddleware.length; ++s)
                i.use(e._pixiMiddleware[s]());
            return i.onStart.add((function(t) {
                return i.emit("start", t)
            }
            )),
            i.onProgress.add((function(t, e) {
                return i.emit("progress", t, e)
            }
            )),
            i.onError.add((function(t, e, r) {
                return i.emit("error", t, e, r)
            }
            )),
            i.onLoad.add((function(t, e) {
                return i.emit("load", t, e)
            }
            )),
            i.onComplete.add((function(t, e) {
                return i.emit("complete", t, e)
            }
            )),
            i
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.addPixiMiddleware = function(t) {
            e._pixiMiddleware.push(t)
        }
        ,
        e.prototype.destroy = function() {
            this.removeAllListeners(),
            this.reset()
        }
        ,
        e
    }(n.default);
    for (var c in e.default = l,
    o.default.prototype)
        l.prototype[c] = o.default.prototype[c];
    l._pixiMiddleware = [i.blobMiddlewareFactory, s.default, a.default, u.default];
    var f = n.default.Resource;
    f.setExtensionXhrType("fnt", f.XHR_RESPONSE_TYPE.DOCUMENT)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0,
    e.blobMiddlewareFactory = function() {
        return function(t, e) {
            if (t.data) {
                if (t.xhr && t.xhrType === n.Resource.XHR_RESPONSE_TYPE.BLOB)
                    if (window.Blob && "string" != typeof t.data) {
                        if (0 === t.data.type.indexOf("image")) {
                            var r = o.createObjectURL(t.data);
                            return t.blob = t.data,
                            t.data = new Image,
                            t.data.src = r,
                            t.type = n.Resource.TYPE.IMAGE,
                            void (t.data.onload = function() {
                                o.revokeObjectURL(r),
                                t.data.onload = null,
                                e()
                            }
                            )
                        }
                    } else {
                        var s = t.xhr.getResponseHeader("content-type");
                        if (s && 0 === s.indexOf("image"))
                            return t.data = new Image,
                            t.data.src = "data:" + s + ";base64," + (0,
                            i.encodeBinary)(t.xhr.responseText),
                            t.type = n.Resource.TYPE.IMAGE,
                            void (t.data.onload = function() {
                                t.data.onload = null,
                                e()
                            }
                            )
                    }
                e()
            } else
                e()
        }
    }
    ;
    var n = r(110)
      , i = r(197)
      , o = window.URL || window.webkitURL
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = r(58);
    Object.defineProperty(e, "Mesh", {
        enumerable: !0,
        get: function() {
            return h(n).default
        }
    });
    var i = r(380);
    Object.defineProperty(e, "MeshRenderer", {
        enumerable: !0,
        get: function() {
            return h(i).default
        }
    });
    var o = r(381);
    Object.defineProperty(e, "CanvasMeshRenderer", {
        enumerable: !0,
        get: function() {
            return h(o).default
        }
    });
    var s = r(200);
    Object.defineProperty(e, "Plane", {
        enumerable: !0,
        get: function() {
            return h(s).default
        }
    });
    var a = r(382);
    Object.defineProperty(e, "NineSlicePlane", {
        enumerable: !0,
        get: function() {
            return h(a).default
        }
    });
    var u = r(383);
    function h(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "Rope", {
        enumerable: !0,
        get: function() {
            return h(u).default
        }
    })
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5))
      , i = s(r(19))
      , o = s(r(58));
    r(24);
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var a = n.Matrix.IDENTITY
      , u = function(t) {
        function e(r) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return n.shader = null,
            n
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.onContextChange = function() {
            var t = this.renderer.gl;
            this.shader = new n.Shader(t,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n","varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n")
        }
        ,
        e.prototype.render = function(t) {
            var e = this.renderer
              , r = e.gl
              , s = t._texture;
            if (s.valid) {
                var u = t._glDatas[e.CONTEXT_UID];
                u || (e.bindVao(null),
                (u = {
                    shader: this.shader,
                    vertexBuffer: i.default.GLBuffer.createVertexBuffer(r, t.vertices, r.STREAM_DRAW),
                    uvBuffer: i.default.GLBuffer.createVertexBuffer(r, t.uvs, r.STREAM_DRAW),
                    indexBuffer: i.default.GLBuffer.createIndexBuffer(r, t.indices, r.STATIC_DRAW),
                    vao: null,
                    dirty: t.dirty,
                    indexDirty: t.indexDirty,
                    vertexDirty: t.vertexDirty
                }).vao = new i.default.VertexArrayObject(r).addIndex(u.indexBuffer).addAttribute(u.vertexBuffer, u.shader.attributes.aVertexPosition, r.FLOAT, !1, 8, 0).addAttribute(u.uvBuffer, u.shader.attributes.aTextureCoord, r.FLOAT, !1, 8, 0),
                t._glDatas[e.CONTEXT_UID] = u),
                e.bindVao(u.vao),
                t.dirty !== u.dirty && (u.dirty = t.dirty,
                u.uvBuffer.upload(t.uvs)),
                t.indexDirty !== u.indexDirty && (u.indexDirty = t.indexDirty,
                u.indexBuffer.upload(t.indices)),
                t.vertexDirty !== u.vertexDirty && (u.vertexDirty = t.vertexDirty,
                u.vertexBuffer.upload(t.vertices)),
                e.bindShader(u.shader),
                u.shader.uniforms.uSampler = e.bindTexture(s),
                e.state.setBlendMode(n.utils.correctBlendMode(t.blendMode, s.baseTexture.premultipliedAlpha)),
                u.shader.uniforms.uTransform && (t.uploadUvTransform ? u.shader.uniforms.uTransform = t._uvTransform.mapCoord.toArray(!0) : u.shader.uniforms.uTransform = a.toArray(!0)),
                u.shader.uniforms.translationMatrix = t.worldTransform.toArray(!0),
                u.shader.uniforms.uColor = n.utils.premultiplyRgba(t.tintRgb, t.worldAlpha, u.shader.uniforms.uColor, s.baseTexture.premultipliedAlpha);
                var h = t.drawMode === o.default.DRAW_MODES.TRIANGLE_MESH ? r.TRIANGLE_STRIP : r.TRIANGLES;
                u.vao.draw(h, t.indices.length, 0)
            }
        }
        ,
        e
    }(n.ObjectRenderer);
    e.default = u,
    n.WebGLRenderer.registerPlugin("mesh", u)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5)), o = r(58), s = (n = o) && n.__esModule ? n : {
        default: n
    };
    var a = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.renderer = e
        }
        return t.prototype.render = function(t) {
            var e = this.renderer
              , r = e.context
              , n = t.worldTransform
              , i = e.resolution;
            e.roundPixels ? r.setTransform(n.a * i, n.b * i, n.c * i, n.d * i, n.tx * i | 0, n.ty * i | 0) : r.setTransform(n.a * i, n.b * i, n.c * i, n.d * i, n.tx * i, n.ty * i),
            e.context.globalAlpha = t.worldAlpha,
            e.setBlendMode(t.blendMode),
            t.drawMode === s.default.DRAW_MODES.TRIANGLE_MESH ? this._renderTriangleMesh(t) : this._renderTriangles(t)
        }
        ,
        t.prototype._renderTriangleMesh = function(t) {
            for (var e = t.vertices.length / 2, r = 0; r < e - 2; r++) {
                var n = 2 * r;
                this._renderDrawTriangle(t, n, n + 2, n + 4)
            }
        }
        ,
        t.prototype._renderTriangles = function(t) {
            for (var e = t.indices, r = e.length, n = 0; n < r; n += 3) {
                var i = 2 * e[n]
                  , o = 2 * e[n + 1]
                  , s = 2 * e[n + 2];
                this._renderDrawTriangle(t, i, o, s)
            }
        }
        ,
        t.prototype._renderDrawTriangle = function(t, e, r, n) {
            var i = this.renderer.context
              , o = t.uvs
              , s = t.vertices
              , a = t._texture;
            if (a.valid) {
                var u = a.baseTexture
                  , h = u.source
                  , l = u.width
                  , c = u.height
                  , f = void 0
                  , d = void 0
                  , p = void 0
                  , v = void 0
                  , y = void 0
                  , g = void 0;
                if (t.uploadUvTransform) {
                    var _ = t._uvTransform.mapCoord;
                    f = (o[e] * _.a + o[e + 1] * _.c + _.tx) * u.width,
                    d = (o[r] * _.a + o[r + 1] * _.c + _.tx) * u.width,
                    p = (o[n] * _.a + o[n + 1] * _.c + _.tx) * u.width,
                    v = (o[e] * _.b + o[e + 1] * _.d + _.ty) * u.height,
                    y = (o[r] * _.b + o[r + 1] * _.d + _.ty) * u.height,
                    g = (o[n] * _.b + o[n + 1] * _.d + _.ty) * u.height
                } else
                    f = o[e] * u.width,
                    d = o[r] * u.width,
                    p = o[n] * u.width,
                    v = o[e + 1] * u.height,
                    y = o[r + 1] * u.height,
                    g = o[n + 1] * u.height;
                var m = s[e]
                  , b = s[r]
                  , x = s[n]
                  , T = s[e + 1]
                  , E = s[r + 1]
                  , w = s[n + 1]
                  , S = t.canvasPadding / this.renderer.resolution;
                if (S > 0) {
                    var O = S / Math.abs(t.worldTransform.a)
                      , M = S / Math.abs(t.worldTransform.d)
                      , P = (m + b + x) / 3
                      , C = (T + E + w) / 3
                      , A = m - P
                      , R = T - C
                      , I = Math.sqrt(A * A + R * R);
                    m = P + A / I * (I + O),
                    T = C + R / I * (I + M),
                    R = E - C,
                    b = P + (A = b - P) / (I = Math.sqrt(A * A + R * R)) * (I + O),
                    E = C + R / I * (I + M),
                    R = w - C,
                    x = P + (A = x - P) / (I = Math.sqrt(A * A + R * R)) * (I + O),
                    w = C + R / I * (I + M)
                }
                i.save(),
                i.beginPath(),
                i.moveTo(m, T),
                i.lineTo(b, E),
                i.lineTo(x, w),
                i.closePath(),
                i.clip();
                var D = f * y + v * p + d * g - y * p - v * d - f * g
                  , L = m * y + v * x + b * g - y * x - v * b - m * g
                  , N = f * b + m * p + d * x - b * p - m * d - f * x
                  , k = f * y * x + v * b * p + m * d * g - m * y * p - v * d * x - f * b * g
                  , B = T * y + v * w + E * g - y * w - v * E - T * g
                  , F = f * E + T * p + d * w - E * p - T * d - f * w
                  , j = f * y * w + v * E * p + T * d * g - T * y * p - v * d * w - f * E * g;
                i.transform(L / D, B / D, N / D, F / D, k / D, j / D),
                i.drawImage(h, 0, 0, l * u.resolution, c * u.resolution, 0, 0, l, c),
                i.restore(),
                this.renderer.invalidateBlendMode()
            }
        }
        ,
        t.prototype.renderMeshFlat = function(t) {
            var e = this.renderer.context
              , r = t.vertices
              , n = r.length / 2;
            e.beginPath();
            for (var i = 1; i < n - 2; ++i) {
                var o = 2 * i
                  , s = r[o]
                  , a = r[o + 1]
                  , u = r[o + 2]
                  , h = r[o + 3]
                  , l = r[o + 4]
                  , c = r[o + 5];
                e.moveTo(s, a),
                e.lineTo(u, h),
                e.lineTo(l, c)
            }
            e.fillStyle = "#FF0000",
            e.fill(),
            e.closePath()
        }
        ,
        t.prototype.destroy = function() {
            this.renderer = null
        }
        ,
        t
    }();
    e.default = a,
    i.CanvasRenderer.registerPlugin("mesh", a)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = s(r(200))
      , o = s(r(70));
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var a = function(t) {
        function e(r, n, i, o, s) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var a = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r, 4, 4));
            return a._origWidth = r.orig.width,
            a._origHeight = r.orig.height,
            a._width = a._origWidth,
            a._height = a._origHeight,
            a._leftWidth = void 0 !== n ? n : 10,
            a._rightWidth = void 0 !== o ? o : 10,
            a._topHeight = void 0 !== i ? i : 10,
            a._bottomHeight = void 0 !== s ? s : 10,
            a._cachedTint = 16777215,
            a._tintedTexture = null,
            a._canvasUvs = null,
            a.refresh(!0),
            a
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.updateHorizontalVertices = function() {
            var t = this.vertices
              , e = this._topHeight + this._bottomHeight
              , r = this._height > e ? 1 : this._height / e;
            t[9] = t[11] = t[13] = t[15] = this._topHeight * r,
            t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * r,
            t[25] = t[27] = t[29] = t[31] = this._height
        }
        ,
        e.prototype.updateVerticalVertices = function() {
            var t = this.vertices
              , e = this._leftWidth + this._rightWidth
              , r = this._width > e ? 1 : this._width / e;
            t[2] = t[10] = t[18] = t[26] = this._leftWidth * r,
            t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * r,
            t[6] = t[14] = t[22] = t[30] = this._width
        }
        ,
        e.prototype._renderCanvas = function(t) {
            var e = t.context
              , r = this.worldTransform
              , n = t.resolution
              , i = 16777215 !== this.tint
              , s = this._texture;
            i && this._cachedTint !== this.tint && (this._cachedTint = this.tint,
            this._tintedTexture = o.default.getTintedTexture(this, this.tint));
            var a = i ? this._tintedTexture : s.baseTexture.source;
            this._canvasUvs || (this._canvasUvs = [0, 0, 0, 0, 0, 0, 0, 0]);
            var u = this.vertices
              , h = this._canvasUvs
              , l = i ? 0 : s.frame.x
              , c = i ? 0 : s.frame.y
              , f = l + s.frame.width
              , d = c + s.frame.height;
            h[0] = l,
            h[1] = l + this._leftWidth,
            h[2] = f - this._rightWidth,
            h[3] = f,
            h[4] = c,
            h[5] = c + this._topHeight,
            h[6] = d - this._bottomHeight,
            h[7] = d;
            for (var p = 0; p < 8; p++)
                h[p] *= s.baseTexture.resolution;
            e.globalAlpha = this.worldAlpha,
            t.setBlendMode(this.blendMode),
            t.roundPixels ? e.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * n | 0, r.ty * n | 0) : e.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * n, r.ty * n);
            for (var v = 0; v < 3; v++)
                for (var y = 0; y < 3; y++) {
                    var g = 2 * y + 8 * v
                      , _ = Math.max(1, h[y + 1] - h[y])
                      , m = Math.max(1, h[v + 5] - h[v + 4])
                      , b = Math.max(1, u[g + 10] - u[g])
                      , x = Math.max(1, u[g + 11] - u[g + 1]);
                    e.drawImage(a, h[y], h[v + 4], _, m, u[g], u[g + 1], b, x)
                }
        }
        ,
        e.prototype._refresh = function() {
            t.prototype._refresh.call(this);
            var e = this.uvs
              , r = this._texture;
            this._origWidth = r.orig.width,
            this._origHeight = r.orig.height;
            var n = 1 / this._origWidth
              , i = 1 / this._origHeight;
            e[0] = e[8] = e[16] = e[24] = 0,
            e[1] = e[3] = e[5] = e[7] = 0,
            e[6] = e[14] = e[22] = e[30] = 1,
            e[25] = e[27] = e[29] = e[31] = 1,
            e[2] = e[10] = e[18] = e[26] = n * this._leftWidth,
            e[4] = e[12] = e[20] = e[28] = 1 - n * this._rightWidth,
            e[9] = e[11] = e[13] = e[15] = i * this._topHeight,
            e[17] = e[19] = e[21] = e[23] = 1 - i * this._bottomHeight,
            this.updateHorizontalVertices(),
            this.updateVerticalVertices(),
            this.dirty++,
            this.multiplyUvs()
        }
        ,
        n(e, [{
            key: "width",
            get: function() {
                return this._width
            },
            set: function(t) {
                this._width = t,
                this._refresh()
            }
        }, {
            key: "height",
            get: function() {
                return this._height
            },
            set: function(t) {
                this._height = t,
                this._refresh()
            }
        }, {
            key: "leftWidth",
            get: function() {
                return this._leftWidth
            },
            set: function(t) {
                this._leftWidth = t,
                this._refresh()
            }
        }, {
            key: "rightWidth",
            get: function() {
                return this._rightWidth
            },
            set: function(t) {
                this._rightWidth = t,
                this._refresh()
            }
        }, {
            key: "topHeight",
            get: function() {
                return this._topHeight
            },
            set: function(t) {
                this._topHeight = t,
                this._refresh()
            }
        }, {
            key: "bottomHeight",
            get: function() {
                return this._bottomHeight
            },
            set: function(t) {
                this._bottomHeight = t,
                this._refresh()
            }
        }]),
        e
    }(i.default);
    e.default = a
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(58);
    var o = function(t) {
        function e(r, n) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return i.points = n,
            i.vertices = new Float32Array(4 * n.length),
            i.uvs = new Float32Array(4 * n.length),
            i.colors = new Float32Array(2 * n.length),
            i.indices = new Uint16Array(2 * n.length),
            i.autoUpdate = !0,
            i.refresh(),
            i
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype._refresh = function() {
            var t = this.points;
            if (!(t.length < 1) && this._texture._uvs) {
                this.vertices.length / 4 !== t.length && (this.vertices = new Float32Array(4 * t.length),
                this.uvs = new Float32Array(4 * t.length),
                this.colors = new Float32Array(2 * t.length),
                this.indices = new Uint16Array(2 * t.length));
                var e = this.uvs
                  , r = this.indices
                  , n = this.colors;
                e[0] = 0,
                e[1] = 0,
                e[2] = 0,
                e[3] = 1,
                n[0] = 1,
                n[1] = 1,
                r[0] = 0,
                r[1] = 1;
                for (var i = t.length, o = 1; o < i; o++) {
                    var s = 4 * o
                      , a = o / (i - 1);
                    e[s] = a,
                    e[s + 1] = 0,
                    e[s + 2] = a,
                    e[s + 3] = 1,
                    n[s = 2 * o] = 1,
                    n[s + 1] = 1,
                    r[s = 2 * o] = s,
                    r[s + 1] = s + 1
                }
                this.dirty++,
                this.indexDirty++,
                this.multiplyUvs(),
                this.refreshVertices()
            }
        }
        ,
        e.prototype.refreshVertices = function() {
            var t = this.points;
            if (!(t.length < 1))
                for (var e = t[0], r = void 0, n = 0, i = 0, o = this.vertices, s = t.length, a = 0; a < s; a++) {
                    var u = t[a]
                      , h = 4 * a;
                    i = -((r = a < t.length - 1 ? t[a + 1] : u).x - e.x),
                    n = r.y - e.y;
                    var l = 10 * (1 - a / (s - 1));
                    l > 1 && (l = 1);
                    var c = Math.sqrt(n * n + i * i)
                      , f = this._texture.height / 2;
                    n /= c,
                    i /= c,
                    n *= f,
                    i *= f,
                    o[h] = u.x + n,
                    o[h + 1] = u.y + i,
                    o[h + 2] = u.x - n,
                    o[h + 3] = u.y - i,
                    e = u
                }
        }
        ,
        e.prototype.updateTransform = function() {
            this.autoUpdate && this.refreshVertices(),
            this.containerUpdateTransform()
        }
        ,
        e
    }(((n = i) && n.__esModule ? n : {
        default: n
    }).default);
    e.default = o
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = r(385);
    Object.defineProperty(e, "ParticleContainer", {
        enumerable: !0,
        get: function() {
            return o(n).default
        }
    });
    var i = r(386);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "ParticleRenderer", {
        enumerable: !0,
        get: function() {
            return o(i).default
        }
    })
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r),
            n && t(e, n),
            e
        }
    }()
      , i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5))
      , o = r(6);
    function s(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    var u = function(t) {
        function e() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500
              , n = arguments[1]
              , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384
              , u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            s(this, e);
            var h = a(this, t.call(this))
              , l = 16384;
            return o > l && (o = l),
            o > r && (o = r),
            h._properties = [!1, !0, !1, !1, !1],
            h._maxSize = r,
            h._batchSize = o,
            h._glBuffers = {},
            h._bufferUpdateIDs = [],
            h._updateID = 0,
            h.interactiveChildren = !1,
            h.blendMode = i.BLEND_MODES.NORMAL,
            h.autoResize = u,
            h.roundPixels = !0,
            h.baseTexture = null,
            h.setProperties(n),
            h._tint = 0,
            h.tintRgb = new Float32Array(4),
            h.tint = 16777215,
            h
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.setProperties = function(t) {
            t && (this._properties[0] = "vertices"in t || "scale"in t ? !!t.vertices || !!t.scale : this._properties[0],
            this._properties[1] = "position"in t ? !!t.position : this._properties[1],
            this._properties[2] = "rotation"in t ? !!t.rotation : this._properties[2],
            this._properties[3] = "uvs"in t ? !!t.uvs : this._properties[3],
            this._properties[4] = "tint"in t || "alpha"in t ? !!t.tint || !!t.alpha : this._properties[4])
        }
        ,
        e.prototype.updateTransform = function() {
            this.displayObjectUpdateTransform()
        }
        ,
        e.prototype.renderWebGL = function(t) {
            var e = this;
            this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture,
            this.baseTexture.hasLoaded || this.baseTexture.once("update", (function() {
                return e.onChildrenChange(0)
            }
            ))),
            t.setObjectRenderer(t.plugins.particle),
            t.plugins.particle.render(this))
        }
        ,
        e.prototype.onChildrenChange = function(t) {
            for (var e = Math.floor(t / this._batchSize); this._bufferUpdateIDs.length < e; )
                this._bufferUpdateIDs.push(0);
            this._bufferUpdateIDs[e] = ++this._updateID
        }
        ,
        e.prototype.renderCanvas = function(t) {
            if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
                var e = t.context
                  , r = this.worldTransform
                  , n = !0
                  , i = 0
                  , o = 0
                  , s = 0
                  , a = 0;
                t.setBlendMode(this.blendMode),
                e.globalAlpha = this.worldAlpha,
                this.displayObjectUpdateTransform();
                for (var u = 0; u < this.children.length; ++u) {
                    var h = this.children[u];
                    if (h.visible) {
                        var l = h._texture.frame;
                        if (e.globalAlpha = this.worldAlpha * h.alpha,
                        h.rotation % (2 * Math.PI) == 0)
                            n && (e.setTransform(r.a, r.b, r.c, r.d, r.tx * t.resolution, r.ty * t.resolution),
                            n = !1),
                            i = h.anchor.x * (-l.width * h.scale.x) + h.position.x + .5,
                            o = h.anchor.y * (-l.height * h.scale.y) + h.position.y + .5,
                            s = l.width * h.scale.x,
                            a = l.height * h.scale.y;
                        else {
                            n || (n = !0),
                            h.displayObjectUpdateTransform();
                            var c = h.worldTransform;
                            t.roundPixels ? e.setTransform(c.a, c.b, c.c, c.d, c.tx * t.resolution | 0, c.ty * t.resolution | 0) : e.setTransform(c.a, c.b, c.c, c.d, c.tx * t.resolution, c.ty * t.resolution),
                            i = h.anchor.x * -l.width + .5,
                            o = h.anchor.y * -l.height + .5,
                            s = l.width,
                            a = l.height
                        }
                        var f = h._texture.baseTexture.resolution;
                        e.drawImage(h._texture.baseTexture.source, l.x * f, l.y * f, l.width * f, l.height * f, i * t.resolution, o * t.resolution, s * t.resolution, a * t.resolution)
                    }
                }
            }
        }
        ,
        e.prototype.destroy = function(e) {
            if (t.prototype.destroy.call(this, e),
            this._buffers)
                for (var r = 0; r < this._buffers.length; ++r)
                    this._buffers[r].destroy();
            this._properties = null,
            this._buffers = null,
            this._bufferUpdateIDs = null
        }
        ,
        n(e, [{
            key: "tint",
            get: function() {
                return this._tint
            },
            set: function(t) {
                this._tint = t,
                (0,
                o.hex2rgb)(t, this.tintRgb)
            }
        }]),
        e
    }(i.Container);
    e.default = u
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5))
      , i = a(r(387))
      , o = a(r(388))
      , s = r(6);
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var u = function(t) {
        function e(r) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return i.shader = null,
            i.indexBuffer = null,
            i.properties = null,
            i.tempMatrix = new n.Matrix,
            i.CONTEXT_UID = 0,
            i
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.onContextChange = function() {
            var t = this.renderer.gl;
            this.CONTEXT_UID = this.renderer.CONTEXT_UID,
            this.shader = new i.default(t),
            this.properties = [{
                attribute: this.shader.attributes.aVertexPosition,
                size: 2,
                uploadFunction: this.uploadVertices,
                offset: 0
            }, {
                attribute: this.shader.attributes.aPositionCoord,
                size: 2,
                uploadFunction: this.uploadPosition,
                offset: 0
            }, {
                attribute: this.shader.attributes.aRotation,
                size: 1,
                uploadFunction: this.uploadRotation,
                offset: 0
            }, {
                attribute: this.shader.attributes.aTextureCoord,
                size: 2,
                uploadFunction: this.uploadUvs,
                offset: 0
            }, {
                attribute: this.shader.attributes.aColor,
                size: 1,
                unsignedByte: !0,
                uploadFunction: this.uploadTint,
                offset: 0
            }]
        }
        ,
        e.prototype.start = function() {
            this.renderer.bindShader(this.shader)
        }
        ,
        e.prototype.render = function(t) {
            var e = t.children
              , r = t._maxSize
              , i = t._batchSize
              , o = this.renderer
              , s = e.length;
            if (0 !== s) {
                s > r && (s = r);
                var a = t._glBuffers[o.CONTEXT_UID];
                a || (a = t._glBuffers[o.CONTEXT_UID] = this.generateBuffers(t));
                var u = e[0]._texture.baseTexture;
                this.renderer.setBlendMode(n.utils.correctBlendMode(t.blendMode, u.premultipliedAlpha));
                var h = o.gl
                  , l = t.worldTransform.copy(this.tempMatrix);
                l.prepend(o._activeRenderTarget.projectionMatrix),
                this.shader.uniforms.projectionMatrix = l.toArray(!0),
                this.shader.uniforms.uColor = n.utils.premultiplyRgba(t.tintRgb, t.worldAlpha, this.shader.uniforms.uColor, u.premultipliedAlpha),
                this.shader.uniforms.uSampler = o.bindTexture(u);
                for (var c = !1, f = 0, d = 0; f < s; f += i,
                d += 1) {
                    var p = s - f;
                    if (p > i && (p = i),
                    d >= a.length) {
                        if (!t.autoResize)
                            break;
                        a.push(this._generateOneMoreBuffer(t))
                    }
                    var v = a[d];
                    v.uploadDynamic(e, f, p);
                    var y = t._bufferUpdateIDs[d] || 0;
                    (c = c || v._updateID < y) && (v._updateID = t._updateID,
                    v.uploadStatic(e, f, p)),
                    o.bindVao(v.vao),
                    v.vao.draw(h.TRIANGLES, 6 * p)
                }
            }
        }
        ,
        e.prototype.generateBuffers = function(t) {
            for (var e = this.renderer.gl, r = [], n = t._maxSize, i = t._batchSize, s = t._properties, a = 0; a < n; a += i)
                r.push(new o.default(e,this.properties,s,i));
            return r
        }
        ,
        e.prototype._generateOneMoreBuffer = function(t) {
            var e = this.renderer.gl
              , r = t._batchSize
              , n = t._properties;
            return new o.default(e,this.properties,n,r)
        }
        ,
        e.prototype.uploadVertices = function(t, e, r, n, i, o) {
            for (var s = 0, a = 0, u = 0, h = 0, l = 0; l < r; ++l) {
                var c = t[e + l]
                  , f = c._texture
                  , d = c.scale.x
                  , p = c.scale.y
                  , v = f.trim
                  , y = f.orig;
                v ? (s = (a = v.x - c.anchor.x * y.width) + v.width,
                u = (h = v.y - c.anchor.y * y.height) + v.height) : (s = y.width * (1 - c.anchor.x),
                a = y.width * -c.anchor.x,
                u = y.height * (1 - c.anchor.y),
                h = y.height * -c.anchor.y),
                n[o] = a * d,
                n[o + 1] = h * p,
                n[o + i] = s * d,
                n[o + i + 1] = h * p,
                n[o + 2 * i] = s * d,
                n[o + 2 * i + 1] = u * p,
                n[o + 3 * i] = a * d,
                n[o + 3 * i + 1] = u * p,
                o += 4 * i
            }
        }
        ,
        e.prototype.uploadPosition = function(t, e, r, n, i, o) {
            for (var s = 0; s < r; s++) {
                var a = t[e + s].position;
                n[o] = a.x,
                n[o + 1] = a.y,
                n[o + i] = a.x,
                n[o + i + 1] = a.y,
                n[o + 2 * i] = a.x,
                n[o + 2 * i + 1] = a.y,
                n[o + 3 * i] = a.x,
                n[o + 3 * i + 1] = a.y,
                o += 4 * i
            }
        }
        ,
        e.prototype.uploadRotation = function(t, e, r, n, i, o) {
            for (var s = 0; s < r; s++) {
                var a = t[e + s].rotation;
                n[o] = a,
                n[o + i] = a,
                n[o + 2 * i] = a,
                n[o + 3 * i] = a,
                o += 4 * i
            }
        }
        ,
        e.prototype.uploadUvs = function(t, e, r, n, i, o) {
            for (var s = 0; s < r; ++s) {
                var a = t[e + s]._texture._uvs;
                a ? (n[o] = a.x0,
                n[o + 1] = a.y0,
                n[o + i] = a.x1,
                n[o + i + 1] = a.y1,
                n[o + 2 * i] = a.x2,
                n[o + 2 * i + 1] = a.y2,
                n[o + 3 * i] = a.x3,
                n[o + 3 * i + 1] = a.y3,
                o += 4 * i) : (n[o] = 0,
                n[o + 1] = 0,
                n[o + i] = 0,
                n[o + i + 1] = 0,
                n[o + 2 * i] = 0,
                n[o + 2 * i + 1] = 0,
                n[o + 3 * i] = 0,
                n[o + 3 * i + 1] = 0,
                o += 4 * i)
            }
        }
        ,
        e.prototype.uploadTint = function(t, e, r, n, i, o) {
            for (var a = 0; a < r; ++a) {
                var u = t[e + a]
                  , h = u._texture.baseTexture.premultipliedAlpha
                  , l = u.alpha
                  , c = l < 1 && h ? (0,
                s.premultiplyTint)(u._tintRGB, l) : u._tintRGB + (255 * l << 24);
                n[o] = c,
                n[o + i] = c,
                n[o + 2 * i] = c,
                n[o + 3 * i] = c,
                o += 4 * i
            }
        }
        ,
        e.prototype.destroy = function() {
            this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer),
            t.prototype.destroy.call(this),
            this.shader.destroy(),
            this.indices = null,
            this.tempMatrix = null
        }
        ,
        e
    }(n.ObjectRenderer);
    e.default = u,
    n.WebGLRenderer.registerPlugin("particle", u)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = r(56);
    var o = function(t) {
        function e(r) {
            return function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "attribute vec2 aPositionCoord;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "uniform vec4 uColor;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   vec2 v = vec2(x, y);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor * uColor;", "}"].join("\n"), ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor;", "  gl_FragColor = color;", "}"].join("\n")))
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e
    }(((n = i) && n.__esModule ? n : {
        default: n
    }).default);
    e.default = o
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = o(r(19))
      , i = o(r(109));
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var s = function() {
        function t(e, r, n, i) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.gl = e,
            this.size = i,
            this.dynamicProperties = [],
            this.staticProperties = [];
            for (var o = 0; o < r.length; ++o) {
                var s = r[o];
                s = {
                    attribute: s.attribute,
                    size: s.size,
                    uploadFunction: s.uploadFunction,
                    unsignedByte: s.unsignedByte,
                    offset: s.offset
                },
                n[o] ? this.dynamicProperties.push(s) : this.staticProperties.push(s)
            }
            this.staticStride = 0,
            this.staticBuffer = null,
            this.staticData = null,
            this.staticDataUint32 = null,
            this.dynamicStride = 0,
            this.dynamicBuffer = null,
            this.dynamicData = null,
            this.dynamicDataUint32 = null,
            this._updateID = 0,
            this.initBuffers()
        }
        return t.prototype.initBuffers = function() {
            var t = this.gl
              , e = 0;
            this.indices = (0,
            i.default)(this.size),
            this.indexBuffer = n.default.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW),
            this.dynamicStride = 0;
            for (var r = 0; r < this.dynamicProperties.length; ++r) {
                var o = this.dynamicProperties[r];
                o.offset = e,
                e += o.size,
                this.dynamicStride += o.size
            }
            var s = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
            this.dynamicData = new Float32Array(s),
            this.dynamicDataUint32 = new Uint32Array(s),
            this.dynamicBuffer = n.default.GLBuffer.createVertexBuffer(t, s, t.STREAM_DRAW);
            var a = 0;
            this.staticStride = 0;
            for (var u = 0; u < this.staticProperties.length; ++u) {
                var h = this.staticProperties[u];
                h.offset = a,
                a += h.size,
                this.staticStride += h.size
            }
            var l = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
            this.staticData = new Float32Array(l),
            this.staticDataUint32 = new Uint32Array(l),
            this.staticBuffer = n.default.GLBuffer.createVertexBuffer(t, l, t.STATIC_DRAW),
            this.vao = new n.default.VertexArrayObject(t).addIndex(this.indexBuffer);
            for (var c = 0; c < this.dynamicProperties.length; ++c) {
                var f = this.dynamicProperties[c];
                f.unsignedByte ? this.vao.addAttribute(this.dynamicBuffer, f.attribute, t.UNSIGNED_BYTE, !0, 4 * this.dynamicStride, 4 * f.offset) : this.vao.addAttribute(this.dynamicBuffer, f.attribute, t.FLOAT, !1, 4 * this.dynamicStride, 4 * f.offset)
            }
            for (var d = 0; d < this.staticProperties.length; ++d) {
                var p = this.staticProperties[d];
                p.unsignedByte ? this.vao.addAttribute(this.staticBuffer, p.attribute, t.UNSIGNED_BYTE, !0, 4 * this.staticStride, 4 * p.offset) : this.vao.addAttribute(this.staticBuffer, p.attribute, t.FLOAT, !1, 4 * this.staticStride, 4 * p.offset)
            }
        }
        ,
        t.prototype.uploadDynamic = function(t, e, r) {
            for (var n = 0; n < this.dynamicProperties.length; n++) {
                var i = this.dynamicProperties[n];
                i.uploadFunction(t, e, r, i.unsignedByte ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, i.offset)
            }
            this.dynamicBuffer.upload()
        }
        ,
        t.prototype.uploadStatic = function(t, e, r) {
            for (var n = 0; n < this.staticProperties.length; n++) {
                var i = this.staticProperties[n];
                i.uploadFunction(t, e, r, i.unsignedByte ? this.staticDataUint32 : this.staticData, this.staticStride, i.offset)
            }
            this.staticBuffer.upload()
        }
        ,
        t.prototype.destroy = function() {
            this.dynamicProperties = null,
            this.dynamicBuffer.destroy(),
            this.dynamicBuffer = null,
            this.dynamicData = null,
            this.dynamicDataUint32 = null,
            this.staticProperties = null,
            this.staticBuffer.destroy(),
            this.staticBuffer = null,
            this.staticData = null,
            this.staticDataUint32 = null
        }
        ,
        t
    }();
    e.default = s
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = r(390);
    Object.defineProperty(e, "webgl", {
        enumerable: !0,
        get: function() {
            return u(n).default
        }
    });
    var i = r(391);
    Object.defineProperty(e, "canvas", {
        enumerable: !0,
        get: function() {
            return u(i).default
        }
    });
    var o = r(111);
    Object.defineProperty(e, "BasePrepare", {
        enumerable: !0,
        get: function() {
            return u(o).default
        }
    });
    var s = r(201);
    Object.defineProperty(e, "CountLimiter", {
        enumerable: !0,
        get: function() {
            return u(s).default
        }
    });
    var a = r(392);
    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "TimeLimiter", {
        enumerable: !0,
        get: function() {
            return u(a).default
        }
    })
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5)), o = r(111);
    var s = function(t) {
        function e(r) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return n.uploadHookHelper = n.renderer,
            n.registerFindHook(h),
            n.registerUploadHook(a),
            n.registerUploadHook(u),
            n
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e
    }(((n = o) && n.__esModule ? n : {
        default: n
    }).default);
    function a(t, e) {
        return e instanceof i.BaseTexture && (e._glTextures[t.CONTEXT_UID] || t.textureManager.updateTexture(e),
        !0)
    }
    function u(t, e) {
        return e instanceof i.Graphics && ((e.dirty || e.clearDirty || !e._webGL[t.plugins.graphics.CONTEXT_UID]) && t.plugins.graphics.updateGraphics(e),
        !0)
    }
    function h(t, e) {
        return t instanceof i.Graphics && (e.push(t),
        !0)
    }
    e.default = s,
    i.WebGLRenderer.registerPlugin("prepare", s)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n, i = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }(r(5)), o = r(111), s = (n = o) && n.__esModule ? n : {
        default: n
    };
    var a = function(t) {
        function e(r) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this, r));
            return n.uploadHookHelper = n,
            n.canvas = document.createElement("canvas"),
            n.canvas.width = 16,
            n.canvas.height = 16,
            n.ctx = n.canvas.getContext("2d"),
            n.registerUploadHook(u),
            n
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.ctx = null,
            this.canvas = null
        }
        ,
        e
    }(s.default);
    function u(t, e) {
        if (e instanceof i.BaseTexture) {
            var r = e.source
              , n = 0 === r.width ? t.canvas.width : Math.min(t.canvas.width, r.width)
              , o = 0 === r.height ? t.canvas.height : Math.min(t.canvas.height, r.height);
            return t.ctx.drawImage(r, 0, 0, n, o, 0, 0, t.canvas.width, t.canvas.height),
            !0
        }
        return !1
    }
    e.default = a,
    i.CanvasRenderer.registerPlugin("prepare", a)
}
, function(t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.maxMilliseconds = e,
            this.frameStart = 0
        }
        return t.prototype.beginFrame = function() {
            this.frameStart = Date.now()
        }
        ,
        t.prototype.allowedToUpload = function() {
            return Date.now() - this.frameStart < this.maxMilliseconds
        }
        ,
        t
    }();
    e.default = n
}
]);
