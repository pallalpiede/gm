var YaGames;
(() => {
    "use strict";
    var e = {
            471: (e, t, r) => {
                r.d(t, {
                    a: () => a
                });
                const a = ["com"]
            },
            15: (e, t, r) => {
                r.d(t, {
                    Ts: () => g,
                    X4: () => u,
                    Zi: () => p,
                    fF: () => _
                });
                var a = r(597),
                    n = r(584),
                    o = Object.defineProperty,
                    i = Object.getOwnPropertySymbols,
                    s = Object.prototype.hasOwnProperty,
                    l = Object.prototype.propertyIsEnumerable,
                    d = (e, t, r) => t in e ? o(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: r
                    }) : e[t] = r,
                    c = (e, t) => {
                        for (var r in t || (t = {})) s.call(t, r) && d(e, r, t[r]);
                        if (i)
                            for (var r of i(t)) l.call(t, r) && d(e, r, t[r]);
                        return e
                    };
                const u = "YandexSDKLogError";

                function p(e) {
                    var t;
                    let r;
                    try {
                        throw new Error
                    } catch (a) {
                        const n = /(\w+)@|at (.+) \(/g,
                            o = e || a.stack || "";
                        if (o.matchAll) {
                            const e = Array.from(o.matchAll(n)) || [];
                            r = null == (t = e[e.length - 1]) ? void 0 : t[2]
                        }
                    }
                    return r
                }

                function m(e, t, r) {
                    var o, i, s;
                    const l = function(e, t) {
                        var r, n, o, i;
                        const {
                            message: s,
                            additional: l = {}
                        } = (0, a.S)(e.message || String(e)), d = {
                            columnNumber: null != (r = e.columnNumber) ? r : -1,
                            fileName: e.fileName || "",
                            lineNumber: null != (n = e.lineNumber) ? n : -1,
                            name: e.name || "Error",
                            message: s,
                            stack: e.stack || ""
                        }, u = {
                            appId: void 0,
                            version: parseInt((null == (o = window.YandexGamesSDKEnvironment) ? void 0 : o.APP_VERSION) || (null == (i = window.clientMetadata) ? void 0 : i.appVersion), 10) || 0
                        };
                        return d.additional = c(c(c(c({}, e.additional), t.additional), u), l), d
                    }(t, r);
                    r.message && (l.message = r.message), r.prefix && (l.message = `${r.prefix} ${l.message}`), n.Z["YaGames" in window ? "postToParent" : "post"]({
                        data: {
                            block: `ErrorCounter/common: ${e}`,
                            error: l,
                            level: null != (o = r.level) ? o : "error",
                            source: e,
                            sourceMethod: null != (i = r.sourceMethod) ? i : p(l.stack),
                            type: null != (s = r.type) ? s : "error"
                        },
                        type: "error"
                    }).catch(console.warn)
                }

                function _(e, t = {}) {
                    m("sdk", e, t), console.warn(e)
                }

                function g(e, t = {}) {
                    m("sdk-game", e, t), console.error(e, u)
                }
            },
            597: (e, t, r) => {
                r.d(t, {
                    S: () => n,
                    Z: () => o
                });
                const a = [{
                        regexp: new RegExp("User .+ already exists in users list!"),
                        title: "User already exists in users list!"
                    }, {
                        regexp: new RegExp("\\(Filename:.+Line: -?[0-9]+\\)"),
                        title: "Unity"
                    }, {
                        substr: "UnityEngine",
                        title: "Unity"
                    }, {
                        substr: "Dimensions must match",
                        title: "Unity"
                    }, {
                        substr: "Loading FSB failed for audio clip",
                        title: "Unity"
                    }, {
                        substr: "UnityLoader",
                        title: "Unity"
                    }, {
                        substr: "FS.syncfs operations in flight at once, probably just doing extra work",
                        title: "Unity"
                    }, {
                        substr: "GLSL",
                        title: "GLSL"
                    }, {
                        substr: "ValerypopoffJS plugin",
                        title: "ValerypopoffJS plugin"
                    }, {
                        substr: "https://github.com/cocos-creator/engine",
                        title: "cocos-creator"
                    }, {
                        substr: "Wicket.Ajax",
                        title: "Wicket.Ajax"
                    }, {
                        substr: 'Error loading sound "%s"',
                        title: '"loading sound"'
                    }, {
                        substr: "Error loading image",
                        title: '"loading image"'
                    }, {
                        substr: "Error loading Texture",
                        title: '"loading Texture"'
                    }, {
                        substr: "Error loading asset",
                        title: '"loading asset"'
                    }, {
                        substr: "Error loading audio url",
                        title: '"loading audio url"'
                    }, {
                        substr: "Error loading animation resource",
                        title: '"loading animation resource"'
                    }, {
                        substr: "Failed to load resource:",
                        title: '"loading resource"'
                    }, {
                        substr: "Could not load",
                        title: '"loading"'
                    }, {
                        substr: "Failed to load",
                        title: '"loading"'
                    }, {
                        regexp: new RegExp("[Cc]ould not allocate memory"),
                        title: "working with memory"
                    }, {
                        substr: "Out of executable memory in function at index",
                        title: "working with memory"
                    }, {
                        substr: "memory access out of bounds",
                        title: "working with memory"
                    }, {
                        substr: "pre-main prep time: ",
                        title: '"pre-main prep time"'
                    }, {
                        substr: "FAILED DIGGING: ",
                        title: '"DIGGING"'
                    }, {
                        substr: "sth wrong with connection!",
                        title: '"sth wrong with connection!"'
                    }, {
                        substr: "Object2D is not available",
                        title: '"Object2D is not available"'
                    }, {
                        regexp: new RegExp("^Client : Error finish action.*?respawn$"),
                        title: '"finish action respawn"'
                    }, {
                        substr: "[TokenStorageYandex]",
                        title: "TokenStorageYandex"
                    }, {
                        substr: "TOO_SMALL_CONTAINER",
                        title: "TOO_SMALL_CONTAINER"
                    }, {
                        substr: "window.cb",
                        title: "Error related to window.cb"
                    }, {
                        substr: "Not allowed to call RecalculateBounds",
                        title: "Not allowed to call RecalculateBounds"
                    }, {
                        regexp: new RegExp(/Loading chunk.*?partner-code-bundles/),
                        title: "Loading chunk partner-code-bundles errors"
                    }],
                    n = e => {
                        for (const t of a)
                            if (t.regexp && -1 !== e.search(t.regexp) || t.substr && e.includes(t.substr)) return {
                                message: `[grouped] Error related to ${t.title}`,
                                additional: {
                                    message: e
                                }
                            };
                        return {
                            message: e
                        }
                    },
                    o = e => {
                        const t = (e => e.map((e => {
                                if ("object" == typeof e) try {
                                    return JSON.stringify(e)
                                } catch (t) {
                                    return `${e}: ${t.message}`
                                }
                                return String(e)
                            })).join(" "))(e),
                            r = n(t),
                            a = new Error(r.message);
                        return r.additional && (a.additional = r.additional), a
                    }
            },
            615: (e, t, r) => {
                r.d(t, {
                    Z: () => n
                });
                class a extends Error {
                    constructor({
                        code: e,
                        httpStatus: t,
                        message: r
                    }, n, o) {
                        super(r, n, o), this.name = "FetchError", this.code = e, this.httpStatus = t, Object.setPrototypeOf(this, a.prototype), Error.captureStackTrace && Error.captureStackTrace(this, a)
                    }
                    toJSON() {
                        return {
                            code: this.code,
                            httpStatus: this.httpStatus,
                            message: this.message,
                            name: this.name,
                            stack: this.stack
                        }
                    }
                }
                const n = a
            },
            815: (e, t, r) => {
                r.d(t, {
                    Z: () => n
                });
                class a extends Error {
                    constructor({
                        code: e,
                        httpStatus: t,
                        message: r
                    }, n, o) {
                        super(r, n, o), this.name = "PaymentsError", this.code = e, this.httpStatus = t, Object.setPrototypeOf(this, a.prototype), Error.captureStackTrace && Error.captureStackTrace(this, a)
                    }
                    toJSON() {
                        return {
                            code: this.code,
                            httpStatus: this.httpStatus,
                            message: this.message,
                            name: this.name,
                            stack: this.stack
                        }
                    }
                }
                const n = a
            },
            584: (e, t, r) => {
                r.d(t, {
                    Z: () => f
                });
                var a = r(15);
                class n extends Error {
                    constructor({
                        code: e,
                        message: t
                    }, r, a) {
                        super(t, r, a), this.name = "AuthError", this.code = e, Object.setPrototypeOf(this, n.prototype), Error.captureStackTrace && Error.captureStackTrace(this, n)
                    }
                    toJSON() {
                        return {
                            code: this.code,
                            message: this.message,
                            name: this.name,
                            stack: this.stack
                        }
                    }
                }
                const o = n;
                var i = r(615),
                    s = r(815);
                const l = {
                    AuthError: o,
                    FetchError: i.Z,
                    PaymentsError: s.Z
                };
                var d = Object.defineProperty,
                    c = Object.getOwnPropertySymbols,
                    u = Object.prototype.hasOwnProperty,
                    p = Object.prototype.propertyIsEnumerable,
                    m = (e, t, r) => t in e ? d(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: r
                    }) : e[t] = r,
                    _ = (e, t) => {
                        for (var r in t || (t = {})) u.call(t, r) && m(e, r, t[r]);
                        if (c)
                            for (var r of c(t)) p.call(t, r) && m(e, r, t[r]);
                        return e
                    };
                class g {
                    constructor() {
                        this.suppressNoGameFrameWarning = !1, this._promises = Object.create(null), this._externalListeners = Object.create(null), this._internalListeners = Object.create(null), this._addEventListener()
                    }
                    get _parentTarget() {
                        return window.parent !== window ? window.parent : void 0
                    }
                    get _gameFrame() {
                        const e = function() {
                            const e = window.YandexGamesSDK && window.YandexGamesSDK.FRAME_ID;
                            if (e && "string" == typeof e) {
                                const t = document.getElementById(e);
                                if (t) return t
                            }
                        }();
                        return e || this.suppressNoGameFrameWarning || console.warn("No game frame to post"), e
                    }
                    get _gameFrameAllowedOrigins() {
                        var e;
                        try {
                            const t = null == (e = this._gameFrame) ? void 0 : e.dataset.allowedOrigins;
                            if (!t) return;
                            return JSON.parse(t)
                        } catch (e) {
                            return
                        }
                    }
                    get _childTarget() {
                        var e;
                        return null == (e = this._gameFrame) ? void 0 : e.contentWindow
                    }
                    _addEventListener() {
                        window.addEventListener("message", (e => {
                            const {
                                source: t
                            } = e.data || {};
                            "YandexGamesSDK" === t && this._handleEvent(e)
                        }))
                    }
                    _handleEvent(e) {
                        const {
                            type: t,
                            action: r,
                            messageId: n,
                            originMessageId: o,
                            payload: i,
                            originPayload: s,
                            data: d,
                            error: c,
                            errorJSON: u
                        } = e.data || {}, p = this._promises[o];
                        p && (this.deletePromise(o), void 0 === c ? p.resolve({
                            type: t,
                            action: r,
                            originPayload: s,
                            data: d
                        }) : p.reject(function({
                            error: e,
                            errorJSON: t
                        }) {
                            if (t) try {
                                const e = JSON.parse(t);
                                if (e && e.name in l) return new l[e.name](e)
                            } catch (e) {
                                (0, a.fF)(e)
                            }
                            return new Error(e || "")
                        }({
                            error: c,
                            errorJSON: u
                        })));
                        const m = (e = {}) => {
                            const a = {
                                type: e.type || t,
                                action: e.action || r,
                                originMessageId: n,
                                originPayload: i,
                                data: e.data || {}
                            };
                            ! function(e, t) {
                                t.error && (e.error = String(t.error.message) || null, e.errorJSON = JSON.stringify(t.error) || null)
                            }(a, e), this.postCallbackToChild(a)
                        };
                        const _ = this._externalListeners[t] || [];
                        for (const t of _) try {
                            t(e, m)
                        } catch (e) {
                            (0, a.fF)(e)
                        }
                    }
                    onAllMessages(e, t) {
                        this.onExternalMessage(e, t), this.onInternalMessage(e, t)
                    }
                    offAllMessages(e, t) {
                        this.offExternalMessage(e, t), this.offInternalMessage(e, t)
                    }
                    onExternalMessage(e, t) {
                        this._onMessage(this._externalListeners, e, t)
                    }
                    offExternalMessage(e, t) {
                        this._offMessage(this._externalListeners, e, t)
                    }
                    onInternalMessage(e, t) {
                        this._onMessage(this._internalListeners, e, t)
                    }
                    offInternalMessage(e, t) {
                        this._offMessage(this._internalListeners, e, t)
                    }
                    _onMessage(e, t, r) {
                        if ("string" == typeof t && (t = [t]), !Array.isArray(t)) throw new Error('Wrong argument "types"');
                        for (const a of t) a in e || (e[a] = []), e[a].push(r)
                    }
                    _offMessage(e, t, r) {
                        if ("string" == typeof t && (t = [t]), !Array.isArray(t)) throw new Error('Wrong argument "types"');
                        for (const a of t) a in e && (e[a] = e[a].filter((e => e !== r)))
                    }
                    externalPost(e) {
                        this._handleEvent(e)
                    }
                    post(e) {
                        return this.postEventDataToListeners(e, this._internalListeners[e.type])
                    }
                    postEventDataToListeners(e, t = []) {
                        const {
                            action: r,
                            type: n
                        } = e;
                        return new Promise((o => {
                            const i = `${Date.now()}-${Math.random()}`,
                                s = (e = {}) => {
                                    const t = {
                                        action: e.action || r,
                                        data: e.data || {},
                                        errorInstance: e.error,
                                        originMessageId: i,
                                        type: e.type || n
                                    };
                                    o(t)
                                };
                            for (const r of t) try {
                                r({
                                    data: _({}, e)
                                }, s)
                            } catch (e) {
                                (0, a.fF)(e)
                            }
                        }))
                    }
                    hasParent() {
                        return Boolean(this._parentTarget)
                    }
                    postToParent(e) {
                        const t = this._parentTarget;
                        return t ? this._post(t, e) : Promise.reject(new Error("No parent to post message"))
                    }
                    hasChild() {
                        this.suppressNoGameFrameWarning = !0;
                        const e = Boolean(this._childTarget);
                        return this.suppressNoGameFrameWarning = !1, e
                    }
                    postToChild(e) {
                        const t = this._childTarget;
                        return t ? this._post(t, e) : Promise.reject(new Error(`No child to post message: type = ${e.type}, action = ${e.action}`))
                    }
                    postCallbackToChild(e) {
                        const t = this._childTarget;
                        return t ? this._post(t, e) : Promise.reject(new Error(`No child to post message: type = ${e.type}, action = ${e.action}`))
                    }
                    clearPromiseWaitTimeout(e) {
                        const t = this._promises[e];
                        (null == t ? void 0 : t.timeoutId) && (window.clearTimeout(t.timeoutId), delete t.timeoutId)
                    }
                    deletePromise(e) {
                        this.clearPromiseWaitTimeout(e), delete this._promises[e]
                    }
                    _post(e, t) {
                        const r = Date.now(),
                            n = `${r}-${Math.random()}`;
                        t = Object.assign({}, t, {
                            source: "YandexGamesSDK",
                            messageId: n
                        });
                        let o = e => {},
                            i = e => {};
                        const s = new Promise(((e, t) => {
                            o = e, i = t
                        }));
                        this._promises[n] = {
                            promise: s,
                            resolve: o,
                            reject: i,
                            time: r
                        };
                        try {
                            e.postMessage(t, "*")
                        } catch (e) {
                            return this.deletePromise(n), Promise.reject(e)
                        }
                        if ("timeout" in t) {
                            const {
                                timeout: e
                            } = t;
                            "number" == typeof e && e > 0 ? this._promises[n].timeoutId = window.setTimeout((() => {
                                this.deletePromise(n), i(new Error("Message rejected by timeout"))
                            }), e) : (0, a.fF)(new Error("Wrong timeout value"))
                        }
                        return s
                    }
                }
                let h;
                if ("object" == typeof window) window.YandexGamesSDKGlobals = window.YandexGamesSDKGlobals || {}, window.YandexGamesSDKGlobals.messaging || (window.YandexGamesSDKGlobals.messaging = new g), h = window.YandexGamesSDKGlobals.messaging;
                else {
                    const e = () => {
                            throw new Error("Not impl")
                        },
                        t = e => Promise.reject(new Error("Not impl"));
                    h = {
                        externalPost: t => e,
                        hasChild: () => !1,
                        hasParent: () => !1,
                        offAllMessages: e,
                        offExternalMessage: e,
                        offInternalMessage: e,
                        onAllMessages: e,
                        onExternalMessage: e,
                        onInternalMessage: e,
                        post: t,
                        postToChild: t,
                        postToParent: t
                    }
                }
                const f = h
            },
            576: (e, t, r) => {
                r.d(t, {
                    r: () => o
                });
                var a = r(531),
                    n = r(377);

                function o() {
                    var e, t, r;
                    return "undefined" == typeof window ? "" : (null == (e = window.YandexGamesSDK) ? void 0 : e.environment) ? window.YandexGamesSDK.environment.app.id : window.YandexGamesSDKEnvironment ? window.YandexGamesSDKEnvironment.app.id : ((0, a.H)({
                        block: n.W.UTILS_LOCATION,
                        level: null == (r = null == (t = window.Ya) ? void 0 : t.Rum) ? void 0 : r.ERROR_LEVEL.ERROR
                    }, new Error("Can not get appId from environment")), "")
                }
            },
            954: (e, t, r) => {
                r.d(t, {
                    Z: () => l
                });
                var a = r(15),
                    n = r(584),
                    o = r(576),
                    i = r(343);
                const s = Object.create(null),
                    l = {
                        init() {},
                        sendOnceDeprecatedUsage(e) {
                            e in s || (s[e] = 1, this.params({
                                borrowParams: {
                                    sdkDeprecatedUsage: {
                                        key: e,
                                        appId: (0, o.r)()
                                    }
                                },
                                service: i.m_
                            }))
                        },
                        params(e) {
                            n.Z.postToParent({
                                type: "metrika",
                                action: "params",
                                data: e
                            }).catch((e => {
                                (0, a.fF)(e)
                            }))
                        },
                        reachGoal(e, t, r) {
                            n.Z.postToParent({
                                type: "metrika",
                                action: "reachGoal",
                                data: {
                                    data: t,
                                    goal: e,
                                    params: r
                                }
                            }).catch((e => {
                                (0, a.fF)(e)
                            }))
                        }
                    }
            },
            343: (e, t, r) => {
                r.d(t, {
                    Tc: () => d,
                    m_: () => l
                });
                var a, n, o, i, s = r(723);
                "undefined" != typeof navigator && navigator;
                const l = "undefined" != typeof window && ((null == (n = null == (a = window.YandexGamesSDK) ? void 0 : a.environment) ? void 0 : n.serviceName) || (null == (o = window.YandexGamesSDKEnvironment) ? void 0 : o.serviceName) || (null == (i = window.clientMetadata) ? void 0 : i.serviceName)) || s.Go0.YANDEX,
                    d = 5e3
            },
            762: (e, t, r) => {
                function a(e, t) {
                    let r, a;
                    return function(...n) {
                        const o = n,
                            i = this;
                        return r || (r = !0, setTimeout((() => r = !1), t), a = e.apply(i, o)), a
                    }
                }
                r.d(t, {
                    P: () => a
                })
            },
            275: (e, t, r) => {
                r.d(t, {
                    HE: () => o,
                    uh: () => n
                });
                const a = () => {
                        var e;
                        return Boolean("undefined" != typeof window && (null == (e = null == window ? void 0 : window.Ya) ? void 0 : e.Rum))
                    },
                    n = () => {
                        var e, t;
                        return Boolean(a() && (null == (t = null == (e = window.Ya) ? void 0 : e.Rum) ? void 0 : t.logError))
                    },
                    o = () => a() && Boolean(window.Ya.Rum.logEventFloat) && Boolean(window.Ya.Rum.logEventInteger) && Boolean(window.Ya.Rum.logEventString)
            },
            531: (e, t, r) => {
                r.d(t, {
                    H: () => k
                });
                var a = r(762),
                    n = r(377),
                    o = r(380);
                let i;
                const s = () => {
                    var e;
                    return !("undefined" == typeof window || !window.appData) && (!!(!window.appData.abt.flags[o.Z.sendAdvLogsAfterGDPR] || i || window.appData && !window.appData.withWorldWideAdv || (null == (e = window.clientMetadata) ? void 0 : e.isOnlyRsyaAd)) || (void 0 === i && (i = !1, window.googlefc = window.googlefc || {
                        callbackQueue: []
                    }, window.googlefc.callbackQueue.push((() => {
                        i = !0
                    }))), Boolean(i)))
                };
                const l = [{
                        regexp: new RegExp(/Monetization error \[yandex]: yandex error - Container with id .* is hidden/),
                        title: "Monetization error [yandex]: yandex error - Container is hidden"
                    }, {
                        regexp: new RegExp(/Monetization error \[google]: yandex error - Container with id .* is hidden/),
                        title: "Monetization error [google]: yandex error - Container is hidden"
                    }, {
                        regexp: new RegExp(/Monetization error \[yandex]: yandex error - Container with id .* is not found \(init\)/),
                        title: "Monetization error [yandex]: yandex error - Container is not found (init)"
                    }, {
                        regexp: new RegExp(/Monetization error \[google]: yandex error - Container with id .* is not found \(init\)/),
                        title: "Monetization error [google]: yandex error - Container is not found (init)"
                    }, {
                        substr: "[SW] Trouble with registration; Failed to register a ServiceWorker",
                        title: "[SW] Trouble with registration; Failed to register a ServiceWorker"
                    }, {
                        substr: "window.cb",
                        title: "Error related to window.cb"
                    }, {
                        regexp: new RegExp(/Loading chunk.*?partner-code-bundles/),
                        title: "Loading chunk partner-code-bundles errors"
                    }],
                    d = (e, t) => {
                        var r;
                        if (!e.startsWith("[SW]")) return t;
                        const a = null == (r = e.split(": ").pop()) ? void 0 : r.trim();
                        return a === e ? t : `${t}: ${a}`
                    };
                var c = r(275),
                    u = Object.defineProperty,
                    p = (Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols),
                    m = Object.prototype.hasOwnProperty,
                    _ = Object.prototype.propertyIsEnumerable,
                    g = (e, t, r) => t in e ? u(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: r
                    }) : e[t] = r,
                    h = (e, t) => {
                        for (var r in t || (t = {})) m.call(t, r) && g(e, r, t[r]);
                        if (p)
                            for (var r of p(t)) _.call(t, r) && g(e, r, t[r]);
                        return e
                    };
                let f = [],
                    v = [];
                const y = 250;

                function w() {
                    f.length > y && (f = f.slice(-250)), v.length > y && (v = v.slice(-250))
                }

                function b() {
                    var e, t, r;
                    try {
                        throw new Error
                    } catch (a) {
                        const n = /(\w+)@|at (.+) \(/g,
                            o = a.stack || "";
                        if (o.matchAll) {
                            const a = Array.from(o.matchAll(n)) || [];
                            return (null == (e = a[2]) ? void 0 : e[2]) || (null == (t = a[1]) ? void 0 : t[2]) || (null == (r = a[0]) ? void 0 : r[2])
                        }
                        return
                    }
                }
                const E = (0, a.P)((function() {
                        if (!v.length || !(0, c.HE)() || !s()) return;
                        v.splice(0, 10).forEach((({
                            event: e,
                            value: t,
                            options: r
                        }) => {
                            var a, n, o, i, s, l;
                            return "number" == typeof t ? Number.isInteger(t) ? null == (n = null == (a = window.Ya) ? void 0 : a.Rum) ? void 0 : n.logEventInteger(e, t, r) : null == (i = null == (o = window.Ya) ? void 0 : o.Rum) ? void 0 : i.logEventFloat(e, t, r) : null == (l = null == (s = window.Ya) ? void 0 : s.Rum) ? void 0 : l.logEventString(e, t, r)
                        })), v.length && E()
                    }), 1e3),
                    P = (0, a.P)((function() {
                        if (!f.length || !(0, c.uh)() || !s()) return;
                        f.splice(0, 10).forEach((({
                            error: e,
                            data: t
                        }) => {
                            var r, a;
                            null == (a = null == (r = window.Ya) ? void 0 : r.Rum) || a.logError(t, e)
                        })), f.length && P()
                    }), 1e3);
                const k = function(e, t) {
                    var r, a, o;
                    let i = e,
                        {
                            additional: s,
                            level: c,
                            message: u,
                            prefix: g,
                            source: v = "catalog",
                            sourceMethod: y
                        } = i,
                        E = ((e, t) => {
                            var r = {};
                            for (var a in e) m.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
                            if (null != e && p)
                                for (var a of p(e)) t.indexOf(a) < 0 && _.call(e, a) && (r[a] = e[a]);
                            return r
                        })(i, ["additional", "level", "message", "prefix", "source", "sourceMethod"]);
                    const {
                        message: k,
                        additional: S
                    } = (e => {
                        for (const t of l)
                            if (t.regexp && -1 !== e.search(t.regexp) || t.substr && e.includes(t.substr)) return {
                                message: `[grouped] ${d(e,t.title)}`,
                                additional: {
                                    message: e
                                }
                            };
                        return {
                            message: e
                        }
                    })(u || (null == t ? void 0 : t.message) || String(e));
                    u = k, c = c || "undefined" != typeof window && (null == (a = null == (r = window.Ya) ? void 0 : r.Rum) ? void 0 : a.ERROR_LEVEL.ERROR) || "error", t = t || e, S && (s = h({
                        additional: s
                    }, S)), g && (u = `${g} ${u}`);
                    const A = h({
                        additional: s,
                        block: null != (o = E.block) ? o : n.W.RUM_UNSPECIFIED,
                        ignoreErrorMessage: !0,
                        level: c,
                        message: u,
                        source: v,
                        sourceMethod: y || b()
                    }, E);
                    f.push({
                        data: A,
                        error: t
                    }), w(), P()
                }
            },
            723: (e, t, r) => {
                r.d(t, {
                    xYt: () => E,
                    NAu: () => b,
                    Go0: () => S
                });
                var a = r(658);
                var n = r(254);
                const o = ["az", "by", "co.il", "com", "com.am", "com.ge", "com.tr", "ee", "fr", "kz", "lt", "lv", "md", "ru", "tj", "tm", "uz"].map((e => e.replace(".", "\\."))).join("|"),
                    i = `(${n.U.YANDEX}\\.(${o})|${n.U.YA}\\.ru)`,
                    s = (new RegExp(i), new RegExp(`^https://(www\\.)?${i}$`), new RegExp(`^https://([^.]+\\.){0,7}${i}\\/`), ["af", "am", "bn", "da", "el", "et", "eu", "fi", "gl", "hr", "is", "km", "kn", "ky", "lo", "lt", "lv", "mk", "ml", "mn", "mr", "ms", "my", "ne", "no", "pl", "si", "sl", "sv", "sw", "ta", "te", "tg", "tl", "ur", "zu"]),
                    l = ["af", "am", "ar", "az", "be", "bg", "bn", "ca", "cs", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fr", "gl", "he", "hi", "hr", "hu", "hy", "id", "is", "it", "ja", "ka", "kk", "km", "kn", "ky", "lo", "lt", "lv", "mk", "ml", "mn", "mr", "ms", "my", "ne", "nl", "no", "pl", "pt", "ro", "ru", "si", "sk", "sl", "sr", "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "uk", "ur", "uz", "vi", "zh", "zu"].filter((e => !s.includes(e))),
                    d = ["bg", "cs", "da", "de", "el", "es", "et", "fi", "fr", "hr", "hu", "it", "lt", "lv", "nl", "pl", "pt", "ro", "sk", "sl", "sv"],
                    c = l.filter((e => ![...d].includes(e))),
                    u = {
                        az: ["az"],
                        by: ["be", "ru"],
                        "co.il": ["he"],
                        com: ["en", ...l],
                        "com.am": ["hy"],
                        "com.ge": ["ka"],
                        "com.tr": ["tr"],
                        ee: ["et"],
                        fr: ["fr", "en"],
                        kz: ["kk", "ru"],
                        lt: ["lt"],
                        lv: ["lv"],
                        md: ["ro"],
                        ru: ["ru", "en", "be", "uk", "kk", "uz"],
                        tj: ["tg"],
                        tm: ["tk"],
                        uz: ["uz"]
                    };
                Object.keys(u).reduce(((e, t) => (e[t] = u[t][0], e)), {});
                var p = r(471),
                    m = Object.defineProperty,
                    _ = Object.defineProperties,
                    g = Object.getOwnPropertyDescriptors,
                    h = Object.getOwnPropertySymbols,
                    f = Object.prototype.hasOwnProperty,
                    v = Object.prototype.propertyIsEnumerable,
                    y = (e, t, r) => t in e ? m(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: r
                    }) : e[t] = r;
                n.U.YANDEX, n.U.PLAYHOP;
                var w = (e => (e.ANDROID_OTHER = "android_other", e.ANDROID_STANDALONE = "android_standalone", e.ANDROID_TV = "tv_android", e.ANDROID_YABRO = "android_yabro", e.ANDROID_YASEARCH = "android_yasearch", e.DESKTOP_OTHER = "desktop_other", e.IGROTOK_APP_ANDROID = "igrotok_app_android", e.IGROTOK_LITE = "igrotok_app_lite", e.IOS_CHROME = "ios_chrome", e.IOS_OTHER = "ios_other", e.IOS_SAFARI = "ios_safari", e.IOS_SUPERAPP = "ios_superapp", e.MOBILE_OTHER = "mobile_other", e))(w || {});
                var b = (e => (e.HOP = "HOP", e.YAN = "YAN", e))(b || {});
                Object.freeze(Object.values(w).reduce(((e, t) => {
                    return r = ((e, t) => {
                        for (var r in t || (t = {})) f.call(t, r) && y(e, r, t[r]);
                        if (h)
                            for (var r of h(t)) v.call(t, r) && y(e, r, t[r]);
                        return e
                    })({}, e), _(r, g({
                        [t]: t
                    }));
                    var r
                }), {}));
                var E = (e => (e.ADAPTIVE_RECOMMENDED_NEW = "adaptive_recommended_new", e.ALL_GAMES_DESKTOP = "all_games_desktop", e.ALL_GAMES_MOBILE = "all_games_mobile", e.ALL_GAMES_TABLET = "all_games_tablet", e.CATEGORIZED_NEW_L = "categorized_new_l", e.L = "l", e.M = "m", e.PAGE_ICON_DESKTOP = "page_icon_desktop", e.PAGE_ICON_DESKTOP_WITH_PLAY = "page_icon_desktop_with_play", e.PAGE_ICON_MOBILE = "page_icon_mobile", e.PAGE_ICON_MOBILE_WITH_PLAY = "page_icon_mobile_with_play", e.PAGE_SCROLLED_ICON_MOBILE = "page_scrolled_icon_mobile", e.PLAY_SIMILAR_GAMES = "play_similar_games", e.PREMIUM = "premium", e.PREMIUM_BIG = "premium_big", e.PROFILE_RECENT_GAMES = "profile_recent_games", e.PROMO_BAR = "promo_bar", e.RECOMMENDED_NEW = "recommended_new", e.S = "s", e.SIZE_22 = "size22", e.SIZE_36 = "size36", e.SIZE_48 = "size48", e.SIZE_84_LOW = "size84_low", e.TV = "tv", e.YOUR_GAMES = "your_games", e.YOUR_GAMES_FORCE = "your_games_force", e))(E || {});
                n.U.PLAYHOP, n.U.YANDEX;
                Object.values({
                    en: "com",
                    kk: "kz",
                    be: "by",
                    ru: "ru",
                    uz: "uz"
                });

                function P(e, t) {
                    return t.reduce(((t, r) => {
                        var a;
                        return t.push(...(a = `https://${e}.${r}`, [a, a.replace("https://", "https://*.")])), t
                    }), [])
                }
                P(n.U.YANDEX, ["by", "com", "kz", "ru", "uz"]).concat(P(n.U.PLAYHOP, p.a)).concat(P(n.U.YA, ["ru"])).concat(["https://zenadservices.net"]);
                const k = `(igrotok|igrotok-test|igrotok\\.msup|igrotok\\.games-test|igrotok\\.games-prestable|igrotok\\.crowdtest\\.games)\\.(${n.U.YANDEX}|${n.U.YA})\\.(${a.zp})`;
                new RegExp(`^https://${k}$`), new RegExp(`^(?:https://)?(?:([^.]+)\\.)?crowdtest\\.games\\.(${i})`), new RegExp(`^https://([^.]+\\.){0,7}${i}/games/igrotok`), new RegExp(`^https?://(?:[^.]+\\.){0,7}${i}/games/manifest/app/\\d+/?`), new RegExp(`^https?://(?:[^.]+\\.){0,7}${i}/games/manifest/catalogue/.*`), new RegExp(`^https?://(?:[^.]+\\.){0,7}${i}/games/manifest/sdk/.*`);
                var S = (e => (e.IGROTOK = "igrotok", e.IGROYAL = "igroyal", e.PLAYHOP = "playhop", e.YANDEX = "yandex", e))(S || {});
                a.x2, a.p4
            },
            658: (e, t, r) => {
                r.d(t, {
                    p4: () => i,
                    zp: () => n,
                    x2: () => s
                });
                var a = r(254);
                const n = ["com", "ru"].map((e => e.replace(".", "\\."))).join("|"),
                    o = `(igrotok|igrotok-test|igrotok\\.msup|igrotok\\.games-test|igrotok\\.games-prestable|igrotok\\.crowdtest\\.games)\\.(${a.U.YANDEX}|${a.U.YA})\\.(${n})`,
                    i = (new RegExp(o), "from-gametok"),
                    s = "is-gametok"
            },
            254: (e, t, r) => {
                r.d(t, {
                    U: () => a
                });
                var a = (e => (e.PLAYHOP = "playhop", e.YA = "ya", e.YANDEX = "yandex", e))(a || {})
            },
            377: (e, t, r) => {
                r.d(t, {
                    W: () => a
                });
                var a = (e => (e.ADV_STICKY = "AdvSticky", e.APP_COMPONENT = "App: component", e.APP_PAGE = "App: page", e.AUTH = "Auth", e.BUNDLES_PLAY = "Bundles play", e.CATALOG = "Catalog", e.ERROR_BOUNDARY = "Error boundary", e.ERROR_COUNTER = "Error counter", e.GAME_IMAGE = "GameImage", e.GAMETOK = "Gametok", e.GOOGLE_ADS = "Google ads", e.I18N = "i18n", e.METRIKA = "Metrika", e.MONETIZATION = "Monetization", e.OFFLINE_MOD_HELPER = "Offline mod helper", e.PARTNER = "Embedding in partner", e.PLAY_TO_EARN = "Play2Earn", e.POLYFILL = "Polyfill", e.REDUX = "Redux", e.REDUX_GAMETOK = "Redux in Gametok", e.RUM_NATIVE_ERROR = "Rum: native error in catalog", e.RUM_UNSPECIFIED = "Rum: unspecified error without block", e.SERVER_MIDDLEWARE = "Server middleware", e.SERVICE_WORKER_REGISTRATION = "ServiceWorker Registration", e.SERVICE_WORKER_UNREGISTRATION = "ServiceWorker Unregistration", e.SHORTCUTS_POPUP_MANAGER = "ShortcutsPopupManager", e.SIMILAR_GAMES = "Similar games", e.SSE = "Notify API", e.SSR_GAME = "SSR: Game", e.SSR_GAMETOK = "SSR: Gametok", e.SSR_INDEX = "SSR: Index", e.TIME_GOAL_SENDER = "Time Goal Sender", e.TRUST = "Trust", e.TURBO_APP = "Turbo app", e.TV = "tv", e.UTILS_LOCATION = "Utils: location", e.UTILS_UNIVERSAL = "Utils: universal", e.VIDEO_LOADER = "Video loader", e.WAIT_TTI = "Wait TTI", e.XSOLLA = "Xsolla", e))(a || {})
            },
            380: (e, t, r) => {
                r.d(t, {
                    Z: () => a
                });
                const a = {
                    achievementNotifier: "achievement_notifier",
                    advWaitSplashScreenReady: "adv_wait_splashscreen_ready",
                    advPromoRewardedCounter: "adv_promo_rewarded_counter",
                    advPrerollPerClid: "adv_preroll_per_clid",
                    advPrerollGoogleCustomBlock: "adv_preroll_google_custom_block",
                    advGoogleInterstitialPreload: "adv_google_interstitial_preload",
                    advGoogleInterstitialRetries: "adv_google_interstitial_retries",
                    advGoogleRewardedRetries: "adv_google_rewarded_retries",
                    advTypesEnabled: "adv_types_enabled",
                    advAlternateLogs: "adv_alternate_logs",
                    advCatalogAlternateLogs: "adv_catalog_alternate_logs",
                    advTypesDisabled: "adv_types_disabled",
                    advShowTimeoutFullscreen: "adv_show_fullscreen_timeout",
                    advShowTimeoutRewarded: "adv_show_rewarded_timeout",
                    advDisableText: "adv_disable_text",
                    advDsailOwnPrebidScript: "adv_dsail_own_prebid_script",
                    advRewardedFullscreenWaterfall: "adv_rewarded_fullscreen_waterfall",
                    advStickyMinDesktopWidth: "adv_sticky_min_desktop_width",
                    advStickyEnabledOnStart: "adv_sticky_enabled_on_start",
                    advStickyBannerManagerNew: "adv_sticky_banner_manager_new_3",
                    advStickyBannerManagerNewWithoutWaterfall: "adv_sticky_banner_manager_new_without_waterfall",
                    advStickyBannerDisabled: "adv_sticky_banner_disabled",
                    advStickyBannerGtp: "adv_sticky_banner_gtp",
                    advStickyBannerPrebid: "adv_sticky_banner_prebid2",
                    advStickyBannerPrebidMulti: "adv_sticky_banner_prebid_multi",
                    advStickyGooglePerAppBlocks: "adv_sticky_google_per_app_blocks",
                    advStickyBannerNative: "adv_sticky_banner_native",
                    advStickyBannerNativeBannerIds: "adv_sticky_banner_native_banner_ids",
                    advStickyBannerNativeLibrary: "adv_sticky_banner_native_library",
                    advHighGptStickyBlockIds: "adv_high_gpt_sticky_block_ids",
                    advStickyBannerLandscapeAdditionalBlock: "adv_sticky_banner_landscape_additional_block",
                    advStickyBannerMinPortraitViewportHeight: "adv_sticky_banner_min_portrait_viewport_height",
                    advStickyBannerMinLandscapeViewportHeight: "adv_sticky_banner_min_landscape_viewport_height",
                    advStickyBannerForcedHideAd: "adv_sticky_banner_forced_hide_ad",
                    advStickyBannerGameLocations: "adv_sticky_banner_game_locations",
                    advStickyBannerUpToRight: "adv_sticky_banner_up_to_right",
                    advStickyBannerBottomToRight: "adv_sticky_banner_bottom_to_right",
                    advStickyBannerMinHeightForHigherAd: "adv_sticky_banner_min_height_for_higher_ad",
                    advStickyBannerLoadTimeout: "adv_sticky_banner_load_timeout",
                    advStickyBannerRefreshInterval: "adv_sticky_banner_refresh_interval",
                    advStickyBannerDesktopWidth: "adv_sticky_banner_desktop_width",
                    advStickyBannerPortraitHeight: "adv_sticky_banner_portrait_height",
                    advStickyBannerLandscapeHeight: "adv_sticky_banner_landscape_height",
                    advStickyBannerRetries: "adv_sticky_banner_retries",
                    advStickyBannerLandscapeWidth: "adv_sticky_banner_landscape_width",
                    advGptStickyBannerIds: "adv_gpt_sticky_banner_ids",
                    advYandexStickyBannerIds: "adv_yandex_sticky_banner_ids",
                    advStickyBannerWhiteBackgroundOnDesktop: "adv_sticky_banner_white_background_on_desktop",
                    advStopRewardedCounterOnLeave: "adv_stop_rewarded_counter_on_leave",
                    advShowOnOffline: "adv_show_on_offline",
                    adScriptInitTimeout: "ad_script_init_timeout",
                    advDelay: "adv_delay",
                    azureMirror: "azure_mirror",
                    asyncReact: "async_react",
                    bannerCarousel: "bk",
                    bannerCarouselDirect: "bk_direct",
                    balancePopupWaitLoadTimeout: "balance_popup_wait_load_timeout",
                    nativePaymentsEnabled: "native_payments_enabled",
                    blurBackground: "blur_background",
                    catalogGptAdTopPath: "catalog_gpt_ad_top_path",
                    catalogYandexAdTopBlockId: "catalog_yandex_ad_top_block_id",
                    catalogGptAdPaths: "catalog_gpt_ad_paths",
                    catalogGptAdPaths2: "catalog_gpt_ad_paths2",
                    catalogGptBannerType: "catalog_gpt_banner_type",
                    catalogRsyaMobileHeight: "catalog_rsya_mobile_height",
                    catalogRsyaCustomBlock: "catalog_rsya_custom_block",
                    catalogLogWithHoc: "catalog_log_with_hoc",
                    catalogShortcutOverhand: "catalog_shortcut_overhand",
                    catalogSmallerPremiumBigPic: "catalog_smaller_premium_big_pic",
                    catalogShrunkSizes: "catalog_shrunk_sizes",
                    catalogBodyNarrowRedesign: "catalog_body_mobile_narrow_redesign",
                    categoriesToExclude: "categories_to_exclude",
                    canOpenAdBlockPopup: "can_open_add_block_popup",
                    disableNewCategorizedGames: "disable_new_categorized_games",
                    categorizedGamesNewLayout: "categorized_games_new_layout",
                    catalogShortcutPromptInstallWaitingPeriod: "catalog_shortcut_prompt_install_waiting_period",
                    catalogTopAdvBlock: "catalog_top_adv_block",
                    catalogShortcutPromptMaxCallCount: "catalog_shortcut_prompt_max_call_count",
                    catalogShortcutPromptWaitingPeriod: "catalog_shortcut_prompt_waiting_period",
                    cfMirror: "cf_mirror",
                    cfMirrorGameUrl: "cf_mirror_game_url",
                    cfMirrorGameUrlAppId: "cf_mirror_game_url_appid",
                    cfMirrorStatic: "cf_mirror_static",
                    cfMirrorStaticBuild: "cf_mirror_static_build",
                    clidsForAdditionalCatalogAdv: "clids_for_additional_catalog_adv",
                    clidsForCatalogSticky: "clids_for_catalog_sticky",
                    dailyWelcomeBonus: "daily_welcome_bonus",
                    dailyWelcomeBonusNoPopupModality: "daily_welcome_bonus_no_popup_modality",
                    dailyWelcomeBonusPopupQuietDays: "daily_welcome_bonus_popup_quiet_days",
                    delayAdsOnDesktop: "delay_ads_on_desktop",
                    delayAdsOnTTI: "delay_ads_on_tti",
                    delayAdsLoad: "delay_ads_load",
                    disableAdButtonInStickyWithAnimation: "disable_ad_button_in_sticky_with_animation",
                    disableAdButtonInStickAnimationDelay: "disable_ad_button_in_sticky_animation_delay",
                    disableDynamicPartnerCSP: "disable_dynamic_partner_csp",
                    disableNativeAdv: "disable_native_adv",
                    disableNativeRewardedPreload: "disable_native_rewarded_preload",
                    disableYandexWaterfall: "disable_yandex_waterfall",
                    disableYandexWaterfallInCatalog: "disable_yandex_waterfall_in_catalog",
                    disableAdButton: "disable_ad_button",
                    disableRotationBanner: "disable_rotation_banner",
                    disableWeeklyActivityBonus: "disable_weekly_activity_bonus",
                    enablePreloadNativeFullscreen: "enable_preload_native_fullscreen",
                    enablePreloadNativeFullscreenOnStart: "enable_preload_native_fullscreen_on_start",
                    enablePreloadNativeRewarded: "enable_preload_native_rewarded",
                    enablePreloadNativeRewardedOnStart: "enable_preload_native_rewarded_on_start",
                    gameLoader: "game_loader",
                    gamePageMinHeight: "game_page_min_height",
                    approveLeaveBeforeGameLoad: "approve_leave_before_game_load",
                    fakeFullscreenLoadTimeout: "fake_fullscreen_load_timeout",
                    feedbackAlwaysShow: "feedback_always_show",
                    ssrGuard: "guard_in_ssr",
                    searchUpperAdv: "search_upper_adv",
                    searchCategoriesCount: "search_categories_count",
                    gameIframeInSSR: "game_iframe_in_ssr",
                    gamePageDrawerEnabled: "game_page_drawer_enabled",
                    gamePageInvisible: "game_page_invisible",
                    gametokPwaEnabled: "gametok_pwa_enabled",
                    gametokPerformanceLevel: "gametok_performance_level",
                    igtotokDelayBeforeNextGameLoading: "igrotok_delay_before_next_game_loading",
                    inViewContainerShowThreshold: "in_view_container_show_threshold",
                    inViewContainerDebugHighlightOnShow: "in_view_container_debug_highlight_on_show",
                    gametokTimeToHidePlaceholder: "gametok_time_to_hide_placeholder",
                    yandexGDPR: "yandex_gdpr",
                    guardDisabledForStandalone: "guard_disabled_for_standalone",
                    hideAdvStickyBannerForNewUsers: "hide_adv_sticky_banner_for_new_users",
                    hideStickyWhenAdShown: "hide_sticky_when_ad_shown",
                    iosHide: "ios_hide",
                    isGoogleFakeFullscreenEnabled: "is_google_fake_fullscreen_enabled",
                    lockAdvScreenOrientation: "lock_adv_screen_orientation",
                    lowQualityVideoPreview: "low_quality_video_preview",
                    mediation: "mediation",
                    multiplePrebidTgoAuction: "multi_prebid_tgo_auction",
                    multiInstallPwa: "multi_install_pwa",
                    pwaSpecificStartUrl: "pwa_specific_start_url",
                    nativeFullscreenBlock: "native_fullscreen_block",
                    nativeRewardedBlock: "native_rewarded_block",
                    nativeYandexFullscreenBlock: "native_yandex_fullscreen_block",
                    nativeYandexRewardedBlock: "native_yandex_fullscreen_block",
                    nativeAppodealFullscreenBlock: "native_appodeal_fullscreen_block",
                    nativeAppodealRewardedBlock: "native_appodeal_rewarded_block",
                    nativeApplovinFullscreenBlock: "native_applovin_fullscreen_block",
                    nativeApplovinRewardedBlock: "native_applovin_rewarded_block",
                    newAdvInterval: "new_adv_interval",
                    newCSP: "new_csp",
                    newLoggingGameCardFC: "new_logging_gamecard_fc",
                    newTimeLogExp: "new_time_log_exp",
                    noAdsCatalogPopup: "no_ads_catalog_popup",
                    noAdsDuration: "no_ads_duration",
                    noAdsPrice: "no_ads_price",
                    noAdsPricePlus: "no_ads_price_plus",
                    noAdsPopupForce: "no_ads_popup_force",
                    noAdsPopupForcePopupGapTimeout: "no_ads_popup_force_popup_gap_timeout",
                    noMobileGames: "no_mobile_games",
                    noRecent: "no_recent",
                    newYearLogo: "new_year_logo",
                    oauth: "oauth",
                    onlyRsyaAd: "only_rsya_ad",
                    originAgentCluster: "origin_agent_cluster",
                    paymentsHidden: "hide_payments",
                    playersBadge: "players_badge",
                    prebidAdv: "prebid_adv",
                    prebidCatalogAdv: "prebid_catalog_adv_3",
                    prebidCustomBlock: "prebid_custom_block",
                    prebidLoadAfterGpt: "prebid_load_after_gpt",
                    prebidUsePrebid: "prebid_use_prebid_2",
                    prebidRewardedBlock: "prebid_rewarded_block",
                    prebidDisabledBids: "prebid_disabled_bids",
                    prebidExtraBids: "prebid_extra_bids",
                    prebidTimeout: "prebid_timeout",
                    prebidAuctionTimeout: "prebid_auction_timeout",
                    prebidClearSlot: "prebid_clear_slot",
                    prebidBlockPlaceholder2: "prebid_block_placeholder2",
                    prebidBlockLoader2: "prebid_block_loader2",
                    prebidBlockControlsDelay2: "prebid_block_controls_delay2",
                    prebidPerAppBlocks: "prebid_per_app_blocks",
                    preloadFullscreenAdv: "preload_fullscreen_adv4",
                    preloadRewardedVideo: "preload_rewarded_video",
                    preloadGame: "preload_game",
                    premiumDuration: "premium_duration",
                    premiumEnabled: "premium_enabled",
                    premiumForced: "premium_forced",
                    prettyAppUrl: "pretty_app_url",
                    promoBlockWatcher: "promo_block_watcher",
                    promoBar: "promo_bar",
                    promoBarSpeed: "promo_bar_speed",
                    promoBarAnimationDelay: "promo_bar_animation_delay",
                    promoBarOptimizedAnimation: "promo_bar_optimized_animation",
                    promoBarPortraitOnly: "promo_bar_portrait_only",
                    promoBarDisableMobileAnimation: "promo_bar_disable_mobile_animation",
                    promoBarGoToMainByBadgeClick: "promo_bar_go_to_main_by_badge_click",
                    promoBannersEnabled: "promo_banners_enabled",
                    promoBarBadgeOnly: "promo_bar_badge_only",
                    promptPopupMobileText: "prompt_popup_mobile",
                    portalCurrencyHidden: "hide_portal_currency",
                    pixelTags: "pixel_tags",
                    reactGuard: "react_guard",
                    realRewarded: "real_rewarded",
                    rpsLimiterDisabled: "rps_limiter_disabled",
                    redirectFromComToRu: "redirect_from_com_to_ru",
                    disableTVGuardAndScope: "disable_tv_guard_and_scope",
                    rewardedVideoTimeout: "rewarded_video_timeout",
                    rewardedPCodeAdv: "rewarded_pcode_adv",
                    rewardedPCodeAdvPreloadFs: "rewarded_pcode_adv_preload_fs",
                    refillOnTheSite: "refill_on_the_site",
                    rsyaDefaultLoadTimeout: "rsya_default_load_timeout",
                    cleanAppQuery: "clean_app_query",
                    rounded3dIcon: "rounded_3d_icon",
                    shortcutWaitOnGameLoadTimeout: "shortcut_wait_on_game_load_timeout",
                    videoReviews: "video_reviews",
                    noGameInfoVideoReviews: "no_game_info_video_reviews",
                    onlyGameUrlVideoReview: "only_game_url_video_review",
                    noReviewsInVideoReview: "no_reviews_in_video_review",
                    otherVideoReviewsCount: "other_video_reviews_count",
                    catalogHeartbeats: "heartbeat_catalog",
                    cspReportOnlyDisabled: "csp_report_only_disabled",
                    cspDisabled: "csp_disabled",
                    cspReportUrlDisabled: "csp_report_url_disabled",
                    similarGames: "similar_games",
                    similarGamesThroughCatalog: "similar_games_through_catalog",
                    slowRegionEnabled: "slow_region_enabled",
                    stickyHeader: "sticky_header",
                    stickyFooterDesktop: "sticky_footer_desktop",
                    skipGuard: "skip_guard",
                    tcfapiGetterOverrideEnabled: "tcfapi_getter_override",
                    tcfapiLocatorOverrideEnabled: "tcfapi_locator_override",
                    transsionAdChannel: "transsion_ad_channel",
                    transsionFullscreenPlacementType: "transsion_fullscreen_placement_type",
                    transparent3dIcon: "transparent_3d_icon",
                    turnOffAdv: "turn_off_adv",
                    tvDraftInput: "tv_draft_input",
                    tvAdEnabled: "tv_ad_enabled",
                    tvSDKTypeAndFormat: "tv_sdk_type_and_format",
                    tvDynamicCatalog: "tv_dynamic_catalog",
                    tvAdVariableBlocksEnabled: "tv_ad_variable_blocks_enabled",
                    tvVideoCardsEnabled: "tv_video_cards_enabled",
                    ttiMetricaWaitingTimeout: "tti_metrica_waiting_timeout",
                    unmutedPrerollAdv: "unmuted_preroll_adv",
                    useAdsGetLibraries: "use_ads_get_libraries",
                    userActivityPopup: "user_activity_popup",
                    userActivityPopupForTesting: "user_activity_popup_for_testing",
                    userActivityPopupShowTime: "user_activity_popup_show_time",
                    userInactiveTimer: "user_inactive_timer",
                    uxFeedbackBoxSolutionPlayhopEnabled: "ux_feedback_box_solution_playhop_enabled",
                    uxFeedbackBoxSolutionEnabled: "ux_feedback_box_solution_enabled",
                    webvisorApps: "webvisor_apps",
                    webvisorChance: "webvisor_chance",
                    webvisorEnabled: "webvisor_enabled",
                    welcomeBonus: "welcome_bonus",
                    welcomeBonusAmount: "welcome_bonus_amount",
                    withNativeClose: "with_native_close",
                    withNewTVCatalog: "with_new_tv_catalog",
                    yandexEmptyData: "yandex_empty_data",
                    xsollaDisabled: "xsolla_disabled",
                    igrotokOnboardingControlSetting: "igrotok_onboarding_control_setting",
                    rotateScreenButton: "rotate_screen_button",
                    rotateScreenButtonAltText: "rotate_screen_button_alt_text",
                    igrotokLiteDisableNonNativeFeatures: "igrotok_lite_disable_non_native_features",
                    GDPRLoadAfterGame: "gdpr_load_after_game",
                    delayGoogleFCmessage: "delay_google_fc_message",
                    igrotokJoystickInstructionPopupDelay: "igrotok_joystick_instruction_popup_delay",
                    searchV3: "search_v3",
                    igrotokOnboardingMode: "igrotok_onboarding_mode",
                    igrotokOnboardingFrequencySetting: "igrotok_onboarding_frequency_setting",
                    igrotokShowSelectModePopup: "igrotok_show_select_mode_popup",
                    oneTabPWA: "one_tab_pwa",
                    earlyShowShortcutPopup: "early_show_shortcut_popup",
                    enableIgrotokDesktopPromo: "enable_igrotok_desktop_promo",
                    igrotokGamesCountToReloadIOS: "igrotok_games_count_to_reload_ios",
                    feedDomain: "feed2000_domain",
                    feedUseRedirect: "feed2000_use_redirect",
                    igrotokMode: "igrotok_mode",
                    fullscreenGoogleInstreamAds: "fullscreen_google_instream_ads",
                    googleInstreamAdsDisablePreload: "google_instream_ads_disable_preload",
                    noIslandsPlayhopDesktop: "no_islands_playhop_desktop",
                    fullscreenGoogleInstreamAdsCustomBlock: "fullscreen_google_instream_ads_custom_block",
                    playToEarn: "play_to_earn",
                    avatarConstructor: "avatar_constructor",
                    sendPlayTimePeriodically: "send_play_time_periodically",
                    newRecentGamesEndpoints: "new_recent_games_endpoints",
                    clientTechLog: "client_tech_log",
                    gameHookAlert: "game_hook_alert",
                    splashScreenTransparent: "splash_screen_transparent",
                    disableSpecificAdvBlocks: "disable_specific_adv_blocks",
                    igrotokUseGameReadyAPI: "igrotok_use_game_ready_api",
                    notableGuardPlayButton: "notable_guard_play_button",
                    disableQueryCleanup: "disable_query_cleanup",
                    advGptCatalogMaxBannerSizes: "adv_gpt_catalog_max_banner_sizes",
                    useMaskableIconOnGame: "use_maskable_icon_on_game",
                    useLocalStaticDomain: "use_local_static_domain",
                    distAppNoRedirect: "dist_app_no_redirect",
                    distAppDisableFullscreen: "dist_app_disable_fullscreen",
                    useGetGameEndpoint: "use_get_game_endpoint",
                    lowImages: "low_images",
                    fastDiscovery: "fast_discovery",
                    tidyConnection: "tidy_connection",
                    enableCsrfToSdk: "enable_csrf_to_sdk",
                    tinyApp: "tiny_app",
                    newGameQualityScore: "new_game_quality_score",
                    newGameQualityScoreAdditionalTweaks: "new_game_quality_score_additional_tweaks",
                    usePageTypeForSimilarGames: "use_page_type_for_similar_games",
                    simpleMobileGuard: "simple_mobile_guard",
                    newLeftPanel: "new_left_panel",
                    isAdvGameLoaderEnabled: "is_adv_game_loader_enabled",
                    advGameLoaderByClids: "adv_game_loader_by_clids",
                    advGameLoaderBlockId: "adv_game_loader_block_id",
                    advGameLoaderStayOnLoad: "adv_game_loader_stay_on_load",
                    advGameLoaderButtonAtBottom: "adv_game_loader_button_at_bottom",
                    useLangSelector: "use_lang_selector",
                    waitUserActionForWakeLockScreen: "wait_user_action_for_wakelock_screen",
                    clearIframeQueryParams: "clear_iframe_query_params",
                    clearIframeUtm: "clear_iframe_utm",
                    usePartnerClidForGPT: "use_partner_clid_for_gpt",
                    skipFirstAdvBlock: "skip_first_adv_block",
                    useSimilarInGamePage: "use_similar_in_game_page",
                    feedLinkEnable: "feed_link_enable",
                    enablePixelCounter: "enable_pixel_counter",
                    pixelCounterReduction: "pixel_counter_reduction",
                    enableBkHitOnRender: "enable_bk_hit_on_render",
                    promoIntersactionObserverThreshold: "promo_intersection_observer_threshold",
                    customYaMetrikSDK: "custom_yametrik_sdk",
                    sendAdvLogsAfterGDPR: "send_adv_logs_after_gdpr",
                    gameMainScriptsDelay: "game_main_scripts_delay",
                    disableDataForRenderCache: "disable_data_for_render_cache"
                }
            },
            419: e => {
                function t(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                e.exports = function(e, r, a, n) {
                    r = r || "&", a = a || "=";
                    var o = {};
                    if ("string" != typeof e || 0 === e.length) return o;
                    var i = /\+/g;
                    e = e.split(r);
                    var s = 1e3;
                    n && "number" == typeof n.maxKeys && (s = n.maxKeys);
                    var l = e.length;
                    s > 0 && l > s && (l = s);
                    for (var d = 0; d < l; ++d) {
                        var c, u, p, m, _ = e[d].replace(i, "%20"),
                            g = _.indexOf(a);
                        g >= 0 ? (c = _.substr(0, g), u = _.substr(g + 1)) : (c = _, u = "");
                        try {
                            p = decodeURIComponent(c), m = decodeURIComponent(u)
                        } catch (e) {
                            console.warn(e);
                            continue
                        }
                        t(o, p) ? Array.isArray(o[p]) ? o[p].push(m) : o[p] = [o[p], m] : o[p] = m
                    }
                    return o
                }
            },
            509: e => {
                var t = function(e) {
                    switch (typeof e) {
                        case "string":
                            return e;
                        case "boolean":
                            return e ? "true" : "false";
                        case "number":
                            return isFinite(e) ? e : "";
                        default:
                            return ""
                    }
                };
                e.exports = function(e, r, a, n) {
                    return r = r || "&", a = a || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map((function(n) {
                        var o = encodeURIComponent(t(n)) + a;
                        return Array.isArray(e[n]) ? e[n].map((function(e) {
                            return o + encodeURIComponent(t(e))
                        })).join(r) : o + encodeURIComponent(t(e[n]))
                    })).filter(Boolean).join(r) : n ? encodeURIComponent(t(n)) + a + encodeURIComponent(t(e)) : ""
                }
            },
            751: (e, t, r) => {
                t.decode = t.parse = r(419), t.encode = t.stringify = r(509)
            }
        },
        t = {};

    function r(a) {
        var n = t[a];
        if (void 0 !== n) return n.exports;
        var o = t[a] = {
            exports: {}
        };
        return e[a](o, o.exports, r), o.exports
    }
    r.d = (e, t) => {
        for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
        })
    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        if (void 0 !== r) {
            var e = r.u,
                t = r.e,
                a = {},
                n = {};
            r.u = function(t) {
                return e(t) + (a.hasOwnProperty(t) ? "?" + a[t] : "")
            }, r.e = function(a) {
                return t(a).catch((function(t) {
                    var o = n.hasOwnProperty(a) ? n[a] : 3;
                    if (o < 1) {
                        var i = e(a);
                        throw t.message = "Loading chunk " + a + " failed after 3 retries.\n(" + i + ")", t.request = i, t
                    }
                    return new Promise((function(e) {
                        setTimeout((function() {
                            n[a] = o - 1, e(r.e(a))
                        }), 0)
                    }))
                }))
            }
        }
    })();
    var a = {};
    (() => {
        r.d(a, {
            default: () => hn
        });
        var e = (e => (e.ABORT_CONTROLLER = "abort-controller", e.INTERSECTION_OBSERVER = "intersection-observer", e.LEGACY = "legacy", e.SMOOTH_SCROLL = "smooth-scroll", e))(e || {});
        const t = e => {
            const {
                async: t,
                content: r,
                crossorigin: a,
                id: n,
                nonce: o,
                onErrCb: i,
                onLoadCb: s,
                parentElement: l,
                src: d
            } = e, c = document.createElement("script");
            if (s && (c.onload = s), i && (c.onerror = i), c.type = "text/javascript", t && (c.async = t), d && (c.src = d), o && c.setAttribute("nonce", o), a && c.setAttribute("crossorigin", a), n && (c.setAttribute("id", `${n}-script`), c.dataset.rCid = `load-script-${n}`), r) {
                const e = document.createTextNode(r);
                c.appendChild(e)
            }
            l ? l.appendChild(c) : document.body.appendChild(c)
        };
        var n = r(531),
            o = r(377);

        function i(e, t) {
            return e.endsWith("/") || (e = `${e}/`), `${e}polyfill/${t}`
        }

        function s(e, t) {
            return i(e, function(e) {
                var t, r;
                return (null == (r = null == (t = window.loadPolyfillHash) ? void 0 : t[e]) ? void 0 : r.contenthash) ? `${e}.${window.loadPolyfillHash[e].contenthash}.js` : `${e}.js`
            }(t))
        }
        var l = r(15),
            d = r(584);
        const c = () => {
            ["click", "dblclick", "mouseup", "pointerup", "touchend"].forEach((e => {
                var t;
                document.addEventListener(e, (t = `${e}-on-body`, () => {
                    window.top && window.top.postMessage({
                        type: "document-events",
                        action: t
                    }, "*")
                }), !0)
            }))
        };

        function u(e, t = !0) {
            const r = Object.create(null);
            return [e.hash.replace(/^#/, ""), e.search.replace(/^\?/, "")].join("&").split("&").filter(Boolean).forEach((e => {
                const [a, n] = e.split("=");
                try {
                    r[a] = t ? decodeURIComponent(n) : n
                } catch (e) {
                    console.warn(e)
                }
            })), r
        }

        function p(e, t) {
            var r, a;
            return t ? "string" == typeof t.entryQuery[e] ? t.entryQuery[e] : void 0 : "object" == typeof window ? (null == (a = null == (r = window.appData) ? void 0 : r.location) ? void 0 : a.entryQuery[e]) || u(window.location)[e] : void 0
        }

        function m(e = window) {
            var t;
            return (null == (t = e.YandexGamesSDK) ? void 0 : t.game) ? e.YandexGamesSDK.game.info.isDraft : "true" === p("draft")
        }
        var _ = r(254);

        function g(e = "") {
            return e.endsWith(`${_.U.YA}.ru`)
        }
        var h = r(576);
        const f = 1e3,
            v = 60 * f;
        class y {
            static SetFlag(e, t) {
                return e | t
            }
            static UnsetFlag(e, t) {
                return e & ~t
            }
            static HasFlag(e, t) {
                return (e & t) === t
            }
            static ToggleFlag(e, t) {
                return e ^ t
            }
        }

        function w(e) {
            const t = this.constructor.prototype[e],
                r = function() {
                    return t.apply(r, arguments)
                };
            return Object.setPrototypeOf(r, this.constructor.prototype), Object.getOwnPropertyNames(t).forEach((function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
            })), r
        }
        w.prototype = Object.create(Function.prototype);
        const b = w;
        var E = (e => (e.Adv = "Adv", e.Auth = "Auth", e.Dev = "Dev", e.Popup = "Popup", e.Test = "Test", e.Unknown = "Unknown", e))(E || {});
        const P = [],
            k = (Date.now(), (() => {
                var e;
                if ("object" != typeof window) return 0;
                const t = String(window.location).match("debug-mode(=(\\d+))?");
                return t ? t[1] ? parseInt(null != (e = t[2]) ? e : "0", 10) : 1 : 0
            })()),
            S = Boolean(k),
            A = class e extends b {
                constructor(t, r, a) {
                    var n, o;
                    super("log"), this.spoilerData = [], this.spoiler = (...e) => (this.spoilerData.push(e), this), this.spoilerFunc = e => (this.spoilerData.push([e()]), this), this.tag = t => new e(this.prefix, this.initialTag.concat(t), this.color), this.prefix = t, this.color = a, this.initialTag = [].concat(r), this.label = this.initialTag.join("|"), this.prefixStyle = `\n            background: ${null!=(n=null==a?void 0:a.background)?n:"peru"};\n            color: ${null!=(o=null==a?void 0:a.text)?o:"black"};\n            font-size: 8px;\n            font-weight: normal;\n            border-radius: 0 4px 4px 0;\n            padding: 2px;\n        `
                }
                static GetLogSize() {
                    return S ? 1e3 : 300
                }
                static GetLogFunc() {
                    return 0 === k ? "dummyLog" : y.HasFlag(k, 2) ? "extendedLog" : "simpleLog"
                }
                dummyLog(...e) {}
                simpleLog(...t) {
                    console.log(`%c${this.label}%c${this.prefix}%c`, e.labelStyle, this.prefixStyle, e.dataStyle, ...t)
                }
                extendedLog(...t) {
                    if (console.groupCollapsed(`%c${this.label}%c${this.prefix}%c`, e.labelStyle, this.prefixStyle, e.dataStyle, ...t), this.spoilerData.length) {
                        for (const e of this.spoilerData) console.log(...e);
                        this.spoilerData = []
                    }
                    console.trace(), console.groupEnd()
                }
                clientLog(...t) {
                    const r = Math.max(0, P.length - e.LOG_SIZE + 1);
                    r > 0 && P.splice(0, Math.max(r, .1 * e.LOG_SIZE));
                    let a = I(t);
                    a.reduce(((e, t) => e + t.length), 0) > 1e3 && (a = ["Error: Stringified data is too big."]);
                    const n = {
                        data: a,
                        prefix: this.prefix,
                        tag: this.initialTag,
                        time: Date.now()
                    };
                    this.color && (n.color = this.color), this.spoilerData.length && (n.spoilerData = I(this.spoilerData)), P.push(n)
                }
                log(...t) {
                    "object" == typeof window && this.clientLog(...t), this[e.LOG_FUNC](...t)
                }
            };
        A.labelStyle = "\n        background: dimgrey;\n        color: darkgrey;\n        font-size: 8px;\n        font-weight: normal;\n        border-radius:4px 0 0 4px;\n        padding: 2px\n    ", A.dataStyle = "font-weight: normal;", A.LOG_SIZE = A.GetLogSize(), A.LOG_FUNC = A.GetLogFunc();
        let O = A;
        const T = (e, t = "Unknown", r) => new O(e, t, r);

        function I(e) {
            try {
                return e.map((e => "object" == typeof e ? function(e, t = 1) {
                    const r = new WeakMap;
                    return JSON.stringify(function e(t, a) {
                        if (!t || "object" != typeof t) return t;
                        let n, o = Array.isArray(t),
                            i = r.has(t);
                        return r.set(t, !0), i ? n : (JSON.stringify(t, (function(r, i) {
                            if (o || a > 0) {
                                if (!r) return o = Array.isArray(i), t = i, i;
                                !n && (n = o ? [] : {}), n[r] = e(i, o ? a : a - 1)
                            }
                        })), void 0 === n ? o ? [] : {} : n)
                    }(e, t))
                }(e, 2) : String(e)))
            } catch (e) {
                return ["Error: Can not stringifyArrayObjects"]
            }
        }
        var x, D = (e, t, r) => {
                if (!t.has(e)) throw TypeError("Cannot " + r)
            },
            R = (e, t, r, a) => (D(e, t, "write to private field"), a ? a.call(e, r) : t.set(e, r), r);
        x = new WeakMap;
        const C = class {
                constructor() {
                    ((e, t, r) => {
                        if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                        t instanceof WeakSet ? t.add(e) : t.set(e, r)
                    })(this, x, 0), this.promise = new Promise(((e, t) => {
                        this.resolve = t => {
                            R(this, x, 1), e(t)
                        }, this.reject = e => {
                            R(this, x, 2), t(e)
                        }
                    }))
                }
                get state() {
                    return D(e = this, t = x, "read from private field"), r ? r.call(e) : t.get(e);
                    var e, t, r
                }
            },
            L = T("sdkTimeout", [E.Dev]);

        function N(e, t = function() {
            var e;
            switch (null == (e = navigator.connection) ? void 0 : e.effectiveType) {
                case "slow-2g":
                    return 40 * f;
                case "2g":
                    return 20 * f;
                case "3g":
                    return 10 * f;
                default:
                    return 5 * f
            }
        }()) {
            const r = new C;
            L("init", e), r.promise.catch((() => {
                var r;
                const a = new Error(`[SDK] to long resolve for method '${e}'`);
                a.additional = {
                    speed: (null == (r = navigator.connection) ? void 0 : r.effectiveType) || "unknown",
                    timeout: t
                }, L("timeout", e), (0, l.fF)(a)
            }));
            const a = setTimeout((() => {
                r.reject()
            }), t);
            return () => {
                L("resolve", e), r.resolve(), clearTimeout(a)
            }
        }
        class M {
            constructor(e) {
                this.log = e, this.observers = {}, this.subscribe = (e, t) => {
                    var r, a;
                    return (null != (a = (r = this.observers)[e]) ? a : r[e] = []).push(t), this.unsubscribe.bind(this, e, t)
                }, this.unsubscribe = (e, t) => {
                    if (!t) return void delete this.observers[e];
                    const r = this.observers[e],
                        a = r.indexOf(t); - 1 !== a && r.splice(a, 1)
                }, this.notifyObservers = (e, t) => e.forEach((e => {
                    const r = this.observers[e];
                    r && r.forEach((r => {
                        var a;
                        try {
                            r(t)
                        } catch (t) {
                            null == (a = this.log) || a.call(this, `${e} event observer error`, t)
                        }
                    }))
                }))
            }
        }
        var G = (e, t, r) => new Promise(((a, n) => {
            var o = e => {
                    try {
                        s(r.next(e))
                    } catch (e) {
                        n(e)
                    }
                },
                i = e => {
                    try {
                        s(r.throw(e))
                    } catch (e) {
                        n(e)
                    }
                },
                s = e => e.done ? a(e.value) : Promise.resolve(e.value).then(o, i);
            s((r = r.apply(e, t)).next())
        }));
        const F = {
                background: "#6c5b7b",
                text: "#ffffff"
            },
            B = class {
                constructor() {
                    this.log = T("Achievements | Child frame", E.Dev, F), this.observable = new M(this.log), this.setProgress = (e, t) => G(this, null, (function*() {
                        return this.post("setProgress", {
                            id: e,
                            progress: t
                        })
                    })), this.getProgress = e => G(this, null, (function*() {
                        return this.post("getProgress", {
                            id: e
                        })
                    })), this.getList = (...e) => G(this, [...e], (function*(e = ["allLocal"]) {
                        return this.post("getList", {
                            status: e
                        })
                    })), this.on = ({
                        action: e,
                        id: t = ""
                    }, r) => this.observable.subscribe(this.buildId(e, t), r), this.off = ({
                        action: e,
                        id: t
                    }, r) => this.observable.unsubscribe(this.buildId(e, t), r), this.post = (e, t) => G(this, null, (function*() {
                        this.log("post to parent", e, t);
                        const r = N(`AchvManager.${e}`);
                        return d.Z.postToParent({
                            action: e,
                            type: "achv-manager",
                            data: t
                        }).then((r => {
                            this.log("receive from parent", e, r);
                            const {
                                result: a,
                                success: n,
                                error: o
                            } = r.data;
                            return n && a ? (this.notify(e, t, a), a) : (this.log("reject", e, "due to error"), Promise.reject(o))
                        })).finally((() => {
                            r()
                        }))
                    })), this.notify = (e, t, r) => {
                        const a = [this.buildId(e)];
                        t.id && a.push(this.buildId(e, t.id)), this.observable.notifyObservers(a, {
                            data: r,
                            payload: t
                        })
                    }, this.buildId = (e, t = "") => `${e}${t}`
                }
            };
        B.init = () => {
            const {
                getList: e,
                getProgress: t,
                off: r,
                on: a,
                setProgress: n
            } = new B;
            return {
                getList: e,
                getProgress: t,
                off: r,
                on: a,
                setProgress: n
            }
        };
        let $ = B;
        const j = T("NoAds", [E.Adv]),
            U = "yandex-games-no-ads-style";

        function Y() {
            Array.isArray(window.yaContextCb) && 0 !== window.yaContextCb.length && (window.yaContextCb = []), Array.isArray(window.yandexContextAsyncCallbacks) && 0 !== window.yandexContextAsyncCallbacks.length && (window.yandexContextAsyncCallbacks = [])
        }
        let W = !1;

        function Z() {
            W || (W = !0, j("_disableAds"), K(), function() {
                var e, t, r;
                const a = {
                    destroy() {
                        j("Ya.Context.AdvManager.destroy disabled")
                    },
                    render(e, t) {
                        "function" == typeof t ? t() : "function" == typeof e.altCallback ? e.altCallback() : "function" == typeof e.onError && e.onError({
                            code: "YA_GAMES_ADS_DISABLED",
                            text: "",
                            type: "error"
                        })
                    }
                };
                "function" == typeof(null == (r = null == (t = null == (e = window.Ya) ? void 0 : e.Context) ? void 0 : t.AdvManager) ? void 0 : r.render) && (window.Ya.Context.AdvManager.render = a.render), Y();
                let n = window.Ya;
                Object.defineProperty(window, "Ya", {
                    get() {
                        var e;
                        return (null == (e = null == n ? void 0 : n.Context) ? void 0 : e.AdvManager) && n.Context.AdvManager !== a && (n.Context.AdvManager = a), Y(), n
                    },
                    set(e) {
                        var t;
                        (null == (t = e.Context) ? void 0 : t.AdvManager) && e.Context.AdvManager !== a && (e.Context.AdvManager = a), n = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), window.Ya = window.Ya || {}, window.Ya.Context = window.Ya.Context || {
                    AdvManager: a
                }, window.Ya.Context.AdvManager = a, j("disable Ya.Context.AdvManager.render")
            }())
        }

        function K() {
            ! function() {
                var e;
                if (document.getElementById(U)) return;
                const t = document.createElement("style");
                t.id = U, t.textContent = '\nbody div[id*="yandex_rtb"],\nbody div[id*="adfox"],\nbody iframe#bwiframe,\nbody iframe[src*="yabnrwall.html"],\nbody iframe[src*="yartbbnr.html"],\nbody yatag,\nbody yatag[class]\n{ display: none !important; }', null == (e = document.body) || e.appendChild(t)
            }()
        }

        function V(e) {
            return function(e, t) {
                if ("function" != typeof t) throw new Error("Argument is not a function");
                let r;
                return function(...a) {
                    return --e > 0 && t && (r = t.apply(this, a)), e <= 1 && (t = void 0), r
                }
            }(2, e)
        }

        function H() {
            return "undefined" != typeof window && -1 !== window.location.href.toLowerCase().indexOf("is_igroyal=1")
        }
        const z = "2795",
            q = (e, t, r) => {
                const a = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent) ? 7500 : 15e3,
                    i = null != r ? r : a,
                    s = window.setTimeout((() => {
                        (e => {
                            (0, n.H)({
                                block: o.W.WAIT_TTI,
                                level: "warn",
                                message: `[startWaitingTTI] Time to interactive took more than ${e/1e3}s`
                            })
                        })(i), l()
                    }), i),
                    l = V((() => {
                        window.clearTimeout(s), e()
                    }));
                t(l)
            },
            X = (e, t) => {
                q(e, (e => {
                    var t, r, a, n;
                    (null == (t = window.Ya) ? void 0 : t.Rum) && !(null == (r = window.Ya) ? void 0 : r.Rum.getTimeMarks()[z]) ? null == (n = null == (a = window.Ya) ? void 0 : a.Rum) || n.on(z, e): e()
                }), t)
            };
        var J = r(380);

        function Q(e) {
            var t;
            return (null == (t = e.abt) ? void 0 : t.flags) || e
        }

        function ee(e, t) {
            return Q(e)[t]
        }

        function te(e, t, r) {
            return ee(e, t) === r
        }

        function re(e, t, r) {
            const a = ee(e, t);
            return "array" === r ? Array.isArray(a) ? a : void 0 : "object" !== r || a ? "number" === r ? "number" != typeof a || isNaN(a) ? void 0 : a : typeof a === r ? a : void 0 : void 0
        }

        function ae(e, t) {
            return re(e, t, "number")
        }
        const ne = T("PixelManager");
        const oe = new class {
                constructor() {
                    this.pixelStorage = {}
                }
                get pixelsToInit() {
                    var e, t, r;
                    if ("undefined" == typeof window) return [];
                    let a = `${window.appData.cdnUrl}/games-static/static-data/pixels/google-tag-manager.html`;
                    return te(null != (r = null == (t = null == (e = window.appData) ? void 0 : e.abt) ? void 0 : t.flags) ? r : {}, J.Z.cfMirrorStatic, !0) && (a = "https://statics.games-storage-aws.yandex.net/statics/pixels/google-tag-manager.html"), this.pixelsOrigin = new URL(a).origin, [{
                        frameURL: a,
                        pixelName: "google_tag_manger",
                        sendPixelEventFunc: this.sendGoogleTagMangerEvent.bind(this)
                    }]
                }
                init() {
                    window.appData.isWorldWide && this.pixelsToInit.forEach((e => {
                        const {
                            frameURL: t,
                            pixelName: r,
                            sendPixelEventFunc: a
                        } = e;
                        this.createPixelIframe(t, r, a)
                    }))
                }
                sendEvent(e, t) {
                    "string" == typeof e ? Object.entries(this.pixelStorage).forEach((([r, a]) => {
                        a.isError || (a.isLoaded ? (a.sendEventFunc(e, t), ne(`Send ${r} goal ${e}`)) : a.eventsQueued.push({
                            goal: e,
                            params: t
                        }))
                    })) : ne("Wrong goal", e)
                }
                sendGoogleTagMangerEvent(e, t) {
                    var r;
                    "string" == typeof e && (null == (r = this.pixelStorage.google_tag_manger.pixelFrame.contentWindow) || r.postMessage({
                        goal: e,
                        params: t
                    }, this.pixelsOrigin))
                }
                sendAllEventFromQueue(e) {
                    const t = this.pixelStorage[e];
                    t && !t.isError && t.isLoaded && (t.eventsQueued.forEach((e => t.sendEventFunc(e.goal, e.params))), t.eventsQueued = [])
                }
                initPixelIframe(e, t, r) {
                    e.src = t, e.style.display = "none", e.onload = () => {
                        this.pixelStorage[r].isLoaded = !0, this.pixelStorage[r].isError = !1, this.sendAllEventFromQueue(r)
                    }, e.onerror = () => {
                        this.pixelStorage[r].isError = !0, this.pixelStorage[r].isLoaded = !1, this.pixelStorage[r].eventsQueued = []
                    }, document.body.appendChild(e)
                }
                createPixelIframe(e, t, r) {
                    var a;
                    const n = document.createElement("iframe"),
                        o = ae((null == (a = window.appData.abt) ? void 0 : a.flags) || {}, J.Z.ttiMetricaWaitingTimeout) || 6e4;
                    this.pixelStorage[t] = {
                        eventsQueued: [],
                        isError: !1,
                        isLoaded: !1,
                        pixelFrame: n,
                        sendEventFunc: r
                    }, X((() => {
                        this.initPixelIframe(n, e, t)
                    }), o)
                }
            },
            ie = oe;
        var se = r(275);
        const le = {
                playhop: 92757394,
                yandex: 49035923
            },
            de = "undefined" != typeof window;

        function ce(e, t, r) {
            "reachGoal" === e && function(...e) {
                window.dataLayer || (window.dataLayer = []), window.dataLayer.push(arguments)
            }("event", t, r)
        }

        function ue(e, t, r = {}, a) {
            var n;
            "string" == typeof t && (ce(e, t, r), ie.sendEvent(t, r), a && (null == (n = window.clickdaemonLog) || n.call(window, t, r)))
        }

        function pe(e, t, r, ...a) {
            const {
                withClickDaemon: n
            } = r;
            let o = {},
                i = {};
            if (a[0] && "object" == typeof a[0] ? [o] = a : a[1] && "object" == typeof a[1] && ([, o] = a, [, i] = a), !o.appVersion) {
                const e = `build${window.clientMetadata.appVersion}`;
                o.appVersion = e, i.appVersion = e
            }!o.service && window.clientMetadata.serviceName && (o.service = window.clientMetadata.serviceName), !o.platform_id && window.clientMetadata.platform && (o.platform_id = window.clientMetadata.platform), window.ym ? (window.ym(e, t, ...a), ue(t, a[0], i, n)) : window[`yaCounter${e}`] ? (window[`yaCounter${e}`][t](...a), ue(t, a[0], i, n)) : me("Cannot send metrika")
        }

        function me(e) {
            var t, r;
            const a = new Error(e);
            (0, se.uh)() ? (0, n.H)({
                block: o.W.METRIKA,
                level: null == (r = null == (t = window.Ya) ? void 0 : t.Rum) ? void 0 : r.ERROR_LEVEL.WARN
            }, a) : console.error(a)
        }

        function _e(e) {
            return e === _.U.PLAYHOP ? le.playhop : le.yandex
        }
        const ge = V((function() {
            me("Metrika's callbacks array is overflowed")
        }));

        function he(e, t, ...r) {
            const {
                shouldMetrikaWork: a = !0
            } = t;
            if (de && a) {
                const {
                    metrika: {
                        counterId: a
                    }
                } = window.appData || window.gameTokAppData;
                if (window.ym || window[`yaCounter${a}`]) pe(a, e, t, ...r);
                else {
                    Array.isArray(window.yandex_metrika_callbacks2) || (window.yandex_metrika_callbacks2 = []);
                    const n = window.yandex_metrika_callbacks2;
                    n.length < 500 ? n.push((() => {
                        pe(a, e, t, ...r)
                    })) : ge()
                }
            }
            return Promise.resolve()
        }
        he.bind(null, "hit"), he.bind(null, "params"), he.bind(null, "reachGoal");
        const fe = function(e, t, r = {}) {
            var a, n, o, i;
            try {
                const s = {
                        borrowParams: {
                            adv: {
                                sdk: {
                                    [t]: {
                                        [e]: !0,
                                        isFirstTryOpen: "tryOpen" === e && r.isFirstTryOpen,
                                        appVersion: window.APP_VERSION
                                    }
                                }
                            }
                        }
                    },
                    l = new Image,
                    d = (null == (n = null == (a = window.YandexGamesSDKEnvironment) ? void 0 : a.i18n) ? void 0 : n.tld) || "ru",
                    c = _e(null == (i = null == (o = window.YandexGamesSDKEnvironment) ? void 0 : o.data) ? void 0 : i.secondDomain);
                l.src = `https://mc.yandex.${d}/watch/${c}?page-url=${encodeURIComponent(window.location.href)}&page-ref=${encodeURIComponent(document.referrer)}&charset=utf-8&site-info=${encodeURIComponent(JSON.stringify(s))}`
            } catch (e) {}
        };
        var ve = r(723);
        Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
        T("AdvStickyBanner", E.Adv), ve.Go0.PLAYHOP, ve.Go0.YANDEX;
        var ye = (e => (e.ADV_IS_NOT_CONNECTED = "ADV_IS_NOT_CONNECTED", e.UNKNOWN = "UNKNOWN", e))(ye || {});
        const we = "1" === p(r(658).x2),
            be = T("AdvManager", E.Adv);

        function Ee(e, t) {
            return "function" == typeof e[t] ? function(e, t = "", r) {
                return (...a) => {
                    try {
                        return e(...a)
                    } catch (e) {
                        (0, l.fF)(e, {
                            prefix: t
                        }), r && r(e)
                    }
                }
            }(e[t], `Error in callback ${t}: `) : () => {}
        }
        class Pe {
            constructor(e) {
                var t;
                this.isFirstTryOpenFullscreenAdv = !0, this.isFirstTryOpenRewardedAdv = !0, this.onAdvDebugManagerExternalMessage = e => {
                    const {
                        action: t
                    } = e.data;
                    switch (t) {
                        case "debug-action-showFullscreenAdv":
                            this.showFullscreenAdvDebug(t);
                            break;
                        case "debug-action-showRewardedVideo":
                            this.showRewardedVideoDebug(t);
                            break;
                        case "debug-action-switchStickyBanners":
                            this.switchStickyBannersDebug(t)
                    }
                }, this.onAdvManagerExternalMessage = e => {
                    var t, r, a, n, o, i, s, d, c, u, p, m, _, g, h;
                    const {
                        action: f,
                        data: v
                    } = e.data;
                    switch (f) {
                        case "adv-callback-open":
                            null == (r = (t = this.callbacks).onOpen) || r.call(t);
                            break;
                        case "adv-callback-close":
                            this.callOnAdvClose(v.wasShown);
                            break;
                        case "adv-callback-error":
                            this.callOnAdvClose(!1);
                            try {
                                if ("string" != typeof(null == (a = null == v ? void 0 : v.error) ? void 0 : a.message)) {
                                    const e = new Error("Undefined error message");
                                    try {
                                        e.additional = JSON.stringify(v)
                                    } catch (t) {
                                        e.additional = "undefined"
                                    }(0, l.fF)(e)
                                }
                            } catch (e) {}
                            null == (o = (n = this.callbacks).onError) || o.call(n, new Error(v.error.message, {
                                cause: v.error
                            }));
                            break;
                        case "adv-callback-offline":
                            this.callOnAdvClose(!1), null == (s = (i = this.callbacks).onOffline) || s.call(i);
                            break;
                        case "rewarded-video-callback-open":
                            null == (c = (d = this.callbacks).onOpen) || c.call(d);
                            break;
                        case "rewarded-video-callback-rewarded":
                            null == (p = (u = this.callbacks).onRewarded) || p.call(u);
                            break;
                        case "rewarded-video-callback-close":
                            null == (_ = (m = this.callbacks).onClose) || _.call(m);
                            break;
                        case "rewarded-video-callback-error":
                            null == (h = (g = this.callbacks).onError) || h.call(g, new Error(v.error.message, {
                                cause: v.error
                            }));
                            break;
                        case "set-disabled-state":
                            be('On "set-disabled-state" event', e.data, v.value), this.setDisabledState(v.value)
                    }
                }, this.adv = e.adv || {}, this.checkDeprecatedOnAdvCloseUsage(), (null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.isWorldWide) ? this.setDisabledState(!0) : we && K(), Object.defineProperty(this, "callbacks", {
                    enumerable: !1,
                    writable: !0
                }), Object.defineProperty(this.adv, "onAdvClose", {
                    enumerable: !1,
                    writable: !0
                }), d.Z.onExternalMessage("adv-manager", this.onAdvManagerExternalMessage), d.Z.onExternalMessage("adv-debug-manager", this.onAdvDebugManagerExternalMessage), this.updateDisabledState()
            }
            checkDeprecatedOnAdvCloseUsage() {
                "onAdvClose" in this.adv && (0, l.Ts)(new Error('Deprecated usage "onAdvClose". Please, use `ysdk.adv.method({callbacks})` https://yandex.ru/dev/games/doc/sdk/sdk-adv'))
            }
            showFullscreenAdvDebug(e) {
                this.showFullscreenAdv({
                    callbacks: {
                        onClose: t => be(`${e} onClose, wasShown = ${t}`),
                        onError: t => be(`${e} onError, error =`, t),
                        onOffline: () => be(`${e} onOffline`),
                        onOpen: () => be(`${e} onOpen`)
                    }
                })
            }
            showRewardedVideoDebug(e) {
                this.showRewardedVideo({
                    callbacks: {
                        onClose: () => be(`${e} onClose`),
                        onError: t => be(`${e} onError, error =`, t),
                        onOpen: () => be(`${e} onOpen`),
                        onRewarded: () => be(`${e} onRewarded`)
                    }
                })
            }
            switchStickyBannersDebug(e) {
                this.getBannerAdvStatus().then((({
                    stickyAdvIsShowing: t
                }) => {
                    t ? this.hideBannerAdv().then((({
                        stickyAdvIsShowing: t
                    }) => {
                        be(`${e} hideBannerAdv, stickyAdvIsShowing = ${t}`)
                    })) : this.showBannerAdv().then((({
                        reason: t,
                        stickyAdvIsShowing: r
                    }) => {
                        be(`${e} hideBannerAdv, stickyAdvIsShowing = ${r}, reason = ${t}`)
                    }))
                }))
            }
            updateDisabledState() {
                d.Z.postToParent({
                    type: "adv-manager",
                    action: "get-disabled-state"
                }).then((({
                    data: e
                }) => {
                    this.setDisabledState(e.value)
                })).catch(console.warn)
            }
            setDisabledState(e) {
                be("setDisabledState", e), e ? Z() : W && (W = !1)
            }
            ensureCallbacksIsValid(e, t) {
                let r = ["onClose", "onError"];
                "showRewardedVideo" === e && r.push("onRewarded");
                try {
                    r = r.filter((e => !(e in t && "function" == typeof t[e])))
                } catch (e) {
                    (0, l.Ts)(new Error('Error in "ensureCallbacksIsValid"'), {
                        additional: {
                            error: String(e).substring(0, 100)
                        }
                    })
                }
                if (r.length) {
                    const t = new Error(`Callbacks for "${e}" has unpresented methods. See https://yandex.ru/dev/games/doc/ru/sdk/sdk-adv`);
                    (0, l.Ts)(t, {
                        additional: {
                            unpresentedMethods: r
                        }
                    })
                }
            }
            showFullscreenAdv({
                callbacks: e = {}
            } = {}) {
                fe("tryOpen", "fullscreen", {
                    isFirstTryOpen: this.isFirstTryOpenFullscreenAdv
                }), this.ensureCallbacksIsValid("showFullscreenAdv", e), this.isFirstTryOpenFullscreenAdv = !1;
                const t = N("AdvManager.showFullscreenAdv");
                d.Z.postToParent({
                    type: "adv-manager",
                    action: "adv-show-fullscreen",
                    timeout: 10 * f
                }).then((({
                    data: {
                        error: t
                    }
                }) => {
                    if (t) {
                        if (m() && t.message.includes("often than once per")) throw t;
                        (0, l.fF)(t), Ee(e, "onClose")(!1), this.callDeprecatedOnClose(!1)
                    } else this.setCallbacks(e, ["onClose", "onOpen", "onError", "onOffline"])
                })).catch((t => {
                    (0, l.fF)(t), Ee(e, "onError")(t), Ee(e, "onClose")(!1), this.callDeprecatedOnClose(!1)
                })).finally((() => {
                    t()
                }))
            }
            showRewardedVideo({
                callbacks: e = {}
            } = {}) {
                fe("tryOpen", "rewarded", {
                    isFirstTryOpen: this.isFirstTryOpenRewardedAdv
                }), this.ensureCallbacksIsValid("showRewardedVideo", e), this.isFirstTryOpenRewardedAdv = !1;
                const t = N("AdvManager.showRewardedVideo");
                d.Z.postToParent({
                    type: "adv-manager",
                    action: "adv-show-rewarded-video",
                    timeout: 10 * f
                }).then((({
                    data: {
                        error: t
                    }
                }) => {
                    if (t) throw t;
                    this.setCallbacks(e, ["onOpen", "onRewarded", "onClose", "onError"])
                })).catch((t => {
                    (0, l.fF)(t), Ee(e, "onError")(t), Ee(e, "onClose")(!1)
                })).finally((() => {
                    t()
                }))
            }
            showBannerAdv() {
                return new Promise((e => {
                    const t = N("AdvManager.showBannerAdv");
                    d.Z.postToParent({
                        type: "adv-manager",
                        action: "adv-show-sticky-banner",
                        timeout: 3 * f
                    }).then((({
                        data: t
                    }) => {
                        e(t)
                    })).catch((t => {
                        (0, l.fF)(t), e({
                            reason: ye.UNKNOWN,
                            stickyAdvIsShowing: !1
                        })
                    })).finally((() => {
                        t()
                    }))
                }))
            }
            hideBannerAdv() {
                return new Promise((e => {
                    const t = N("AdvManager.hideBannerAdv");
                    d.Z.postToParent({
                        type: "adv-manager",
                        action: "adv-hide-sticky-banner",
                        timeout: 3 * f
                    }).then((({
                        data: t
                    }) => {
                        e(t)
                    })).catch((t => {
                        (0, l.fF)(t), e({
                            stickyAdvIsShowing: !1
                        })
                    })).finally((() => {
                        t()
                    }))
                }))
            }
            getBannerAdvStatus() {
                return new Promise((e => {
                    const t = N("AdvManager.getBannerAdvStatus");
                    d.Z.postToParent({
                        type: "adv-manager",
                        action: "adv-status-sticky-banner",
                        timeout: 3 * f
                    }).then((({
                        data: t
                    }) => {
                        e(t)
                    })).catch((t => {
                        (0, l.fF)(t), e({
                            reason: ye.UNKNOWN,
                            stickyAdvIsShowing: !1
                        })
                    })).finally((() => {
                        t()
                    }))
                }))
            }
            setCallbacks(e, t) {
                this.callbacks = {}, t.forEach((t => {
                    this.callbacks[t] = Ee(e, t)
                }))
            }
            callOnAdvClose(e = !1) {
                var t, r;
                this.callDeprecatedOnClose(e), null == (r = (t = this.callbacks).onClose) || r.call(t, e)
            }
            callDeprecatedOnClose(e = !1) {
                if ("function" == typeof this.adv.onAdvClose) try {
                    this.adv.onAdvClose(e)
                } catch (e) {
                    (0, l.Ts)(e)
                }
            }
        }
        const ke = new class {
            openAuthDialog() {
                const e = N("AuthManagerPublic.openAuthDialog", 2 * v),
                    t = d.Z.postToParent({
                        type: "auth",
                        action: "auth-dialog-open",
                        data: {
                            initializer: "auth-manager-public"
                        }
                    });
                return t.finally((() => {
                    e()
                })), t
            }
        };
        var Se = r(615);

        function Ae(e) {
            const {
                url: t,
                params: r = {},
                hash: a = {},
                removed: n = [],
                encoded: o = !0
            } = e;
            if (!t) throw new Error("addGetParams: function has no url");
            const i = t.split("#"),
                s = i[0].split("?");
            let l = Oe(s, r, o, n),
                d = Oe(i, a, o, n);
            return l && (l = `?${l}`), d && (d = `#${d}`), `${s[0]}${l}${d}`
        }

        function Oe(e, t, r, a) {
            return e.length > 1 && e[1].length && e[1].split("&").forEach((e => {
                const [r, a] = e.split("=");
                if (!t[r]) try {
                    t[r] = decodeURIComponent(a)
                } catch (e) {
                    t[r] = a
                }
            })), Object.keys(t).filter((e => !a.includes(e))).filter((e => void 0 !== e)).map((e => `${e}=${r?encodeURIComponent(t[e]):t[e]}`)).join("&")
        }

        function Te(e) {
            return "1" === p("revert_unique_id") ? Ae({
                url: e,
                params: {
                    revert_unique_id: "1"
                }
            }) : e
        }
        const Ie = e => {
                const t = new URL(e);
                class r {
                    constructor() {
                        this.items = []
                    }
                    contains(e) {
                        return this.items.includes(e)
                    }
                    item(e) {
                        var t;
                        return null != (t = this.items[e]) ? t : null
                    }
                    get length() {
                        return this.items.length
                    }*[Symbol.iterator]() {}
                }
                return {
                    location: {
                        ancestorOrigins: new r,
                        hash: t.hash,
                        host: t.host,
                        hostname: t.hostname,
                        href: t.href,
                        origin: t.origin,
                        pathname: t.pathname,
                        port: t.port,
                        protocol: t.protocol,
                        search: t.search,
                        assign: () => {},
                        reload: () => {},
                        replace: () => {}
                    }
                }
            },
            xe = "undefined" != typeof window ? window : Ie("https://yandex.ru/games/app/1");
        const De = r(471).a.map((e => e.replace(".", "\\."))).join("|"),
            Re = `(${_.U.PLAYHOP}\\.(${De}))`,
            Ce = (new RegExp(Re), new RegExp(`^https://([^.]+\\.){0,7}${Re}$`));

        function Le(e, t = "ru", r) {
            return e = e.replace("%TLD%", t), "ru" === t && g(r) && (e = e.replace(`${_.U.YANDEX}.ru`, `${_.U.YA}.ru`)), e
        }
        var Ne, Me;
        const Ge = T("src/sdk/utils/env", E.Dev),
            Fe = "undefined" != typeof window && ((null == (Ne = window.appData) ? void 0 : Ne.env) || (null == (Me = window.gameTokAppData) ? void 0 : Me.env)) || void 0,
            Be = Fe ? Fe.NODE_ENV : "production",
            $e = "production" === Be || "stress" === Be;
        Ge("IS_PROD", $e), Ge("NODE_ENV", Be);
        const je = u(xe.location),
            Ue = ($e || parseInt(je.test_uid, 10), $e || je.test_email, $e || je.test_oauth, je.origin || void 0),
            Ye = Ue || xe.location.origin,
            We = Ue ? Ue.match(Ce) : Boolean(xe.location.origin.match(Ce)),
            Ze = xe.location.hostname.endsWith("ya.ru");
        const Ke = We ? _.U.PLAYHOP : Ze ? _.U.YA : _.U.YANDEX,
            Ve = (Ye.match(new RegExp(`[./]${Ke}\\.([a-z.]+)$`)) || ["", "ru"])[1],
            He = (Fe ? Fe.SDK_BACKEND_URL : "https://games-sdk.yandex.%TLD%/games/api/sdk/v1") || "",
            ze = (Fe ? Fe.PLAYHOP_SDK_BACKEND_URL : "https://games-sdk.playhop.%TLD%/games/api/sdk/v1") || "",
            qe = We ? Le(ze, Ve) : Le(He, Ve, xe.location.host);
        Ge("BACKEND_SDK_URL", qe);
        Fe && Fe.OAUTH_CLIENT_ID, Fe && Fe.SDK_PASSPORT_PREFIX;
        let Xe;
        Xe = r(954).Z;
        const Je = Xe;
        Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
        ve.xYt.L, ve.xYt.CATEGORIZED_NEW_L, ve.xYt.RECOMMENDED_NEW, ve.xYt.ADAPTIVE_RECOMMENDED_NEW, ve.xYt.PROFILE_RECENT_GAMES, ve.xYt.PREMIUM_BIG, ve.xYt.TV, ve.xYt.PLAY_SIMILAR_GAMES;
        var Qe = (e => (e.BIG = "big", e.ISLANDS_75 = "islands-75", e.ISLANDS_200 = "islands-200", e.ISLANDS_MIDDLE = "islands-middle", e.ISLANDS_RETINA_MEDIUM = "islands-retina-medium", e.ISLANDS_RETINA_SMALL = "islands-retina-small", e.NORMAL = "normal", e))(Qe || {});
        const et = "0/0-0";
        var tt = r(751);

        function rt(e, t, r) {
            var a, n;
            if (!e) return;
            let o = function(e, t, r) {
                let a;
                try {
                    let t = new URL(e);
                    a = tt.parse((r ? t.hash : t.search).slice(1))
                } catch (e) {
                    return
                }
                if (void 0 === a) return;
                let n = null == a ? void 0 : a[t];
                return n ? Array.isArray(n) ? n[0] : n : void 0
            }(e, "sdk_url", t);
            if (void 0 === o) return;
            const i = void 0 !== r ? r.SDK_CUSTOM_DOMAINS : process.env.SDK_CUSTOM_DOMAINS;
            if (!i) return;
            let s;
            try {
                s = JSON.parse(i)
            } catch (e) {
                return
            }
            if (void 0 === s) return;
            return null != (n = null == (a = null == s ? void 0 : s[o]) ? void 0 : a.apiDomain) ? n : void 0
        }

        function at(e) {
            var t;
            let r = new URL(e);
            if (null == (t = null == window ? void 0 : window.appData) ? void 0 : t.env) {
                let e = rt(window.location.href, !0, window.appData.env);
                if (e) return r.hostname = e, r.href
            }
            return e
        }
        const nt = {
                small: Qe.ISLANDS_RETINA_SMALL,
                medium: Qe.ISLANDS_RETINA_MEDIUM,
                large: Qe.ISLANDS_200
            },
            ot = {
                small: Qe.ISLANDS_200,
                medium: Qe.ISLANDS_200,
                large: Qe.BIG
            },
            it = `${qe}/player`;
        class st {
            constructor(e) {
                this._personalInfo = e
            }
            getID() {
                return (0, l.Ts)(new Error("Player.getID() is deprecated. Please, use Player.getUniqueID().\nhttps://yandex.ru/dev/games/doc/dg/sdk/sdk-player.html#sdk-player__profile-data")), Je.sendOnceDeprecatedUsage("Player.getID"), this._personalInfo.id
            }
            getUniqueID() {
                return this._personalInfo.uniqueID
            }
            getName() {
                return this._personalInfo.publicName
            }
            getMode() {
                var e;
                return H() ? "" : null != (e = this._personalInfo.mode) ? e : ""
            }
            getPhoto(e = "medium") {
                const t = nt[e];
                if (!t) throw new Error(`Unknown size value ('${e}')`);
                return this._personalInfo.avatarIdHash ? `${at(it)}/avatar/${this._personalInfo.avatarIdHash}/${t}` : `https://avatars.mds.yandex.net/get-yapic/${et}/${t}`
            }
            hasPremium() {
                var e;
                return null != (e = this._personalInfo.hasPremium) && e
            }
        }
        var lt = Object.defineProperty,
            dt = Object.getOwnPropertySymbols,
            ct = Object.prototype.hasOwnProperty,
            ut = Object.prototype.propertyIsEnumerable,
            pt = (e, t, r) => t in e ? lt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r,
            mt = (e, t) => {
                for (var r in t || (t = {})) ct.call(t, r) && pt(e, r, t[r]);
                if (dt)
                    for (var r of dt(t)) ut.call(t, r) && pt(e, r, t[r]);
                return e
            };
        const _t = (e, t) => d.Z.postToParent({
                type: "telegram",
                data: {
                    playdeck: mt({
                        method: e
                    }, t)
                }
            }),
            gt = "tgData",
            ht = f,
            ft = () => (_t("getData", {
                key: gt
            }), new Promise(((e, t) => {
                function r(a) {
                    var n;
                    if (!(e => {
                            var t, r, a;
                            return "getData" === (null == (a = null == (r = null == (t = e.data) ? void 0 : t.data) ? void 0 : r.playdeck) ? void 0 : a.method)
                        })(a)) return;
                    d.Z.offExternalMessage("telegram", r);
                    const o = (null == (n = a.data.data.playdeck.value) ? void 0 : n.data) || "{}";
                    if ("string" == typeof o) try {
                        e(JSON.parse(o))
                    } catch (e) {
                        const r = new Error("Error parsing game data from telegram");
                        r.additional = {
                            originalError: e
                        }, (0, l.fF)(r, {
                            prefix: "telegram"
                        }), t({})
                    } else e(o)
                }
                d.Z.onExternalMessage("telegram", r), setTimeout((() => {
                    d.Z.offExternalMessage("telegram", r), t()
                }), ht)
            })));
        var vt = r(762);

        function yt(e) {
            const t = {};
            m() && (t.draft = "true");
            const r = (0, h.r)();
            return r && (t["app-id"] = r), Ae({
                url: e,
                params: t
            })
        }
        const wt = T("sdk/v2/fetch");

        function bt(e, t = "", r = {}) {
            Object.keys(r).forEach((e => {
                void 0 === r[e] && delete r[e]
            }));
            return yt(Ae({
                url: `${e}${t}`,
                params: r
            }))
        }

        function Et(e, t = "", r = {}) {
            Object.keys(r).forEach((e => {
                void 0 === r[e] && delete r[e]
            }));
            return yt(Ae({
                url: `${e}${t}`,
                params: r
            }))
        }

        function Pt(e) {
            const {
                apiPath: t,
                authRequired: r,
                path: a,
                params: n,
                timeout: o
            } = e;
            return new Promise(((e, i) => {
                const s = bt(at(`${qe}${t}`), a, n),
                    l = Et(t, a, n);
                if (wt(`commonFetchData, deprecatedUrl: ${s}, requestPath: ${l}`), !l) return void i(new Error("Could not create path"));
                d.Z.postToParent({
                    type: "fetch",
                    data: {
                        apiPath: l,
                        authRequired: r,
                        options: {
                            credentials: "include",
                            referrerPolicy: "no-referrer-when-downgrade"
                        },
                        timeout: o,
                        url: s
                    }
                }).then((({
                    data: {
                        result: t
                    }
                }) => {
                    e(t)
                })).catch(i)
            }))
        }

        function kt(e) {
            const {
                apiPath: t,
                authRequired: r,
                data: a,
                params: n,
                path: o,
                timeout: i
            } = e;
            return new Promise(((e, s) => {
                const l = bt(at(`${qe}${t}`), o, n),
                    c = Et(t, o, n);
                if (wt(`commonPostData, deprecatedUrl: ${l}, requestPath: ${c}`), !c) return void s(new Error("Can not create path"));
                const u = {
                    body: JSON.stringify(a),
                    credentials: "include",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    referrerPolicy: "no-referrer-when-downgrade"
                };
                d.Z.postToParent({
                    type: "fetch",
                    data: {
                        apiPath: c,
                        authRequired: r,
                        options: u,
                        timeout: i,
                        url: l
                    }
                }).then((({
                    data: {
                        result: t
                    }
                }) => {
                    e(t)
                })).catch(s)
            }))
        }

        function St() {
            var e, t;
            if ("object" != typeof window) return 1;
            const r = (null == (e = null == window ? void 0 : window.appData) ? void 0 : e.networkThrottlingRatio) || 1;
            return (null == (t = null == window ? void 0 : window.appData) ? void 0 : t.isWorldWide) ? 1.5 * r : 1 * r
        }
        const At = "/leaderboard",
            Ot = 10 * f,
            Tt = () => Ot * St(),
            It = (e, t = {}, r) => Pt({
                apiPath: At,
                timeout: Tt(),
                path: e,
                params: t,
                authRequired: Boolean(null == r ? void 0 : r.authRequired)
            });
        var xt = Object.defineProperty,
            Dt = Object.defineProperties,
            Rt = Object.getOwnPropertyDescriptors,
            Ct = Object.getOwnPropertySymbols,
            Lt = Object.prototype.hasOwnProperty,
            Nt = Object.prototype.propertyIsEnumerable,
            Mt = (e, t, r) => t in e ? xt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r;
        const Gt = f,
            Ft = (0, vt.P)(((e, t, r = {}) => kt({
                apiPath: At,
                timeout: Tt(),
                authRequired: !0,
                path: e,
                data: t,
                params: r
            })), Gt);
        class Bt {
            constructor() {
                this._appId = (0, h.r)()
            }
            getLeaderboardDescription(e) {
                const t = N("Leaderboards.getLeaderboardDescription"),
                    r = It("/descr", {
                        "app-id": this._appId,
                        name: e
                    });
                return r.finally((() => {
                    t()
                })), r
            }
            getLeaderboardStat(e) {
                const t = N("Leaderboards.getLeaderboardStat"),
                    r = It("/stat", {
                        "app-id": this._appId,
                        name: e
                    });
                return r.finally((() => {
                    t()
                })), r
            }
            transformLeaderboardEntry(e) {
                const {
                    avatarIdHash: t,
                    lang: r,
                    publicName: a,
                    scopePermissions: n,
                    uniqueID: o
                } = e.player, i = `${it}/avatar/${t}`;
                return s = ((e, t) => {
                    for (var r in t || (t = {})) Lt.call(t, r) && Mt(e, r, t[r]);
                    if (Ct)
                        for (var r of Ct(t)) Nt.call(t, r) && Mt(e, r, t[r]);
                    return e
                })({}, e), Dt(s, Rt({
                    player: {
                        getAvatarSrc: (e = "medium") => (nt[e] || (e = "medium"), `${i}/${nt[e]}`),
                        getAvatarSrcSet: (e = "medium") => (nt[e] || (e = "medium"), `${i}/${nt[e]} 1x, ${i}/${ot[e]} 2x`),
                        lang: r,
                        publicName: a,
                        scopePermissions: n,
                        uniqueID: o
                    }
                }));
                var s
            }
            transformLeaderboardEntries(e) {
                return e.map(this.transformLeaderboardEntry)
            }
            getLeaderboardEntries(e, t) {
                const {
                    includeUser: r = !1,
                    quantityAround: a = 5,
                    quantityTop: n = 5
                } = t || {}, o = N("Leaderboards.getLeaderboardEntries"), i = It(Te("/entries"), {
                    "app-id": this._appId,
                    include_user: r,
                    name: e,
                    quantity_around: a,
                    quantity_top: n
                }, {
                    authRequired: r
                }).then((e => {
                    const {
                        entries: t,
                        leaderboard: r,
                        ranges: a,
                        userRank: n
                    } = e;
                    return {
                        entries: this.transformLeaderboardEntries(t),
                        leaderboard: r,
                        ranges: a,
                        userRank: n
                    }
                }));
                return i.finally((() => {
                    o()
                })), i
            }
            getLeaderboardPlayerEntry(e) {
                if (H()) throw new Se.Z({
                    code: "LEADERBOARD_PLAYER_NOT_PRESENT",
                    httpStatus: 204,
                    message: "Player is not present in leaderboard"
                });
                return It(Te("/player-entry"), {
                    "app-id": this._appId,
                    name: e
                }, {
                    authRequired: !0
                }).then((e => {
                    if (!e) throw new Se.Z({
                        code: "LEADERBOARD_PLAYER_NOT_PRESENT",
                        httpStatus: 204,
                        message: "Player is not present in leaderboard"
                    });
                    return this.transformLeaderboardEntry(e)
                }))
            }
            setLeaderboardScore(e, t, r) {
                if (H()) return d.Z.postToParent({
                    type: "gametok-manager",
                    action: "new-igroyal-score",
                    data: {
                        score: t
                    }
                }), new Promise((e => e(!0)));
                _t("setScore", {
                    value: t
                });
                const a = {
                    "app-id": this._appId,
                    name: e,
                    score: t
                };
                return "viber" === p("utm_source") && (a.fromViber = !0), this.lastTimeLeaderboardWasSend && !this.canSetLeaderboardScoreByTime() ? Promise.reject("The request to setLeaderboardScore can be sent no more than once per second") : (r && (a.extraData = r), this.lastTimeLeaderboardWasSend = Date.now(), Ft("/score", a))
            }
            canSetLeaderboardScoreByTime() {
                return Date.now() - this.lastTimeLeaderboardWasSend > Gt
            }
        }
        const $t = () => {
            const e = new Bt;
            return Promise.resolve(e)
        };
        var jt = r(815);
        const Ut = ["ru", "uk", "be", "kk", "uz"];
        const Yt = "companyName",
            Wt = "serviceName",
            Zt = {
                [_.U.PLAYHOP]: {
                    [Yt]: {
                        ru: "Playhop",
                        en: "Playhop"
                    },
                    [Wt]: {
                        ru: "Playhop",
                        en: "Playhop"
                    }
                },
                [_.U.YANDEX]: {
                    [Yt]: {
                        ru: "Яндекс",
                        en: "Yandex"
                    },
                    [Wt]: {
                        ru: "Игры",
                        en: "Games"
                    }
                }
            };
        Zt[_.U.YA] = Zt[_.U.YANDEX];
        const Kt = "ru";

        function Vt(e, t = Kt, r = "") {
            if (e) {
                if ("string" == typeof e) return e;
                if (t in e) return e[t] || r;
                if (!(e => !e || Ut.includes(e))(t) && "en" in e) return e.en || r;
                if (Kt in e) return e[Kt] || r
            }
            return r
        }
        const Ht = "//yastatic.net/s3/games-static/static-data/images/payments/sdk";
        let zt = function() {
            zt = () => {}, Je.params({
                borrowParams: {
                    payments: {
                        appId: (0, h.r)(),
                        productCurrencyCodeGet: !0
                    }
                }
            })
        };
        class qt {
            constructor(e) {
                this._productData = e
            }
            get id() {
                return this._productData.id
            }
            get title() {
                return Vt(this._productData.title)
            }
            get description() {
                return Vt(this._productData.description)
            }
            get imageURI() {
                const {
                    image: e
                } = this._productData;
                return e && "object" == typeof e && "url_prefix" in e ? /\.(png|jpg|svg)$/.test(String(e.url_prefix)) ? e.url_prefix : `${e.url_prefix}/default256x256` : "https://yastatic.net/s3/games-static/static-data/images/payments/default-product-image.png"
            }
            get price() {
                const {
                    price: e
                } = this._productData;
                return `${e} ${this.priceCurrencyCode}`
            }
            get priceValue() {
                return String(this._productData.price)
            }
            get priceCurrencyCode() {
                var e;
                return zt(), null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.moneyCodeSymbol
            }
            getPriceCurrencyImage(e = "small") {
                if ("svg" === e) return `${Ht}/currency-icon-m.svg`;
                let t = "s";
                switch (e) {
                    case "medium":
                    case "small":
                        t = e.charAt(0);
                        break;
                    default:
                        console.warn(`Unknown size value ('${e}')`)
                }
                const r = window.devicePixelRatio >= 2;
                return `${Ht}/currency-icon-${t}${r?"@2x":""}.png`
            }
            toJSON() {
                return {
                    id: this.id,
                    title: this.title,
                    description: this.description,
                    imageURI: this.imageURI,
                    price: this.price,
                    priceValue: this.priceValue,
                    priceCurrencyCode: this.priceCurrencyCode
                }
            }
        }
        class Xt {
            constructor(e) {
                "purchaseTime" in e || (e.purchaseTime = 0), this.purchaseData = e
            }
            get productID() {
                return this.purchaseData.productID
            }
            get purchaseTime() {
                return this.purchaseData.purchaseTime
            }
            get purchaseToken() {
                return this.purchaseData.purchaseToken
            }
            get developerPayload() {
                return this.purchaseData.developerPayload
            }
            toJSON() {
                return {
                    productID: this.productID,
                    purchaseTime: this.purchaseTime,
                    purchaseToken: this.purchaseToken,
                    developerPayload: this.developerPayload
                }
            }
        }

        function Jt(e) {
            return function(e) {
                for (var t, r = "", a = e.length, n = 0; n < a; n++) t = e[n], r += String.fromCharCode(t > 251 && t < 254 && n + 5 < a ? 1073741824 * (t - 252) + (e[++n] - 128 << 24) + (e[++n] - 128 << 18) + (e[++n] - 128 << 12) + (e[++n] - 128 << 6) + e[++n] - 128 : t > 247 && t < 252 && n + 4 < a ? (t - 248 << 24) + (e[++n] - 128 << 18) + (e[++n] - 128 << 12) + (e[++n] - 128 << 6) + e[++n] - 128 : t > 239 && t < 248 && n + 3 < a ? (t - 240 << 18) + (e[++n] - 128 << 12) + (e[++n] - 128 << 6) + e[++n] - 128 : t > 223 && t < 240 && n + 2 < a ? (t - 224 << 12) + (e[++n] - 128 << 6) + e[++n] - 128 : t > 191 && t < 224 && n + 1 < a ? (t - 192 << 6) + e[++n] - 128 : t);
                return r
            }(function(e, t) {
                for (var r, a, n, o = e.replace(/[^A-Za-z0-9\+\/]/g, ""), i = o.length, s = t ? Math.ceil((3 * i + 1 >>> 2) / t) * t : 3 * i + 1 >>> 2, l = new Uint8Array(s), d = 0, c = 0, u = 0; u < i; u++)
                    if (a = 3 & u, d |= ((n = o.charCodeAt(u)) > 64 && n < 91 ? n - 65 : n > 96 && n < 123 ? n - 71 : n > 47 && n < 58 ? n + 4 : 43 === n ? 62 : 47 === n ? 63 : 0) << 18 - 6 * a, 3 === a || i - u == 1) {
                        for (r = 0; r < 3 && c < s; r++, c++) l[c] = d >>> (16 >>> r & 24) & 255;
                        d = 0
                    }
                return l
            }(e))
        }

        function Qt(e, t) {
            t && Object.defineProperty(e, "signature", {
                enumerable: !1,
                configurable: !1,
                get: () => t
            })
        }
        const er = T("Payment", E.Dev);
        class tr {
            constructor(e = {}) {
                this._config = e, this.___test1212()
            }
            getCatalog() {
                return new Promise(((e, t) => {
                    const r = N("Payments.getCatalog");
                    d.Z.postToParent({
                        type: "payments",
                        action: "get-catalog",
                        data: {
                            lang: this._config.lang
                        }
                    }).then((({
                        data: t
                    }) => {
                        er("get-catalog result", t), e(t.products.map((e => new qt(e))))
                    })).catch((e => {
                        t(e)
                    })).finally((() => {
                        r()
                    }))
                }))
            }
            purchase(e) {
                "object" != typeof e && (e = {
                    id: e,
                    developerPayload: ""
                });
                const {
                    developerPayload: t
                } = e;
                if (t) {
                    if ("string" != typeof t) return Promise.reject(new Error("developerPayload must be a string"))
                } else e.developerPayload = "";
                return new Promise(((t, r) => {
                    d.Z.postToParent({
                        type: "payments",
                        action: "purchase-start",
                        data: {
                            paymentsConfig: this._config,
                            purchaseConfig: e
                        }
                    }).then((({
                        data: {
                            data: e,
                            signature: r
                        }
                    }) => {
                        er("purchase-start then");
                        const a = new Xt({
                            productID: e.product.id,
                            purchaseToken: e.token,
                            developerPayload: e.developerPayload
                        });
                        Qt(a, r), t(a)
                    })).catch((e => {
                        er("purchase-start catch"), r(e)
                    }))
                }))
            }
            getPurchases() {
                return new Promise(((e, t) => {
                    const r = N("Payments.getPurchases");
                    d.Z.postToParent({
                        type: "payments",
                        action: "get-purchases",
                        data: {
                            paymentsConfig: this._config
                        }
                    }).then((({
                        data: {
                            data: t,
                            signature: r
                        }
                    }) => {
                        er("getPurchases callback", t);
                        const a = t.map((e => new Xt({
                            productID: e.product.id,
                            purchaseToken: e.token,
                            developerPayload: e.developerPayload
                        })));
                        Qt(a, r), e(a)
                    })).catch((e => {
                        t(e)
                    })).finally((() => {
                        r()
                    }))
                }))
            }
            consumePurchase(e) {
                return new Promise(((t, r) => {
                    const a = N("Payments.consumePurchase");
                    d.Z.postToParent({
                        type: "payments",
                        action: "purchase-consume",
                        data: {
                            token: e
                        }
                    }).then((({
                        data: e
                    }) => {
                        if (console.info("consumePurchase data"), console.info(e), !e || !e.token) throw new jt.Z({
                            code: "CANNOT_CONSUME_PURCHASE",
                            message: "Can not consume purchase."
                        });
                        t(!0)
                    })).catch((e => {
                        r(e)
                    })).finally((() => {
                        a()
                    }))
                }))
            }
            ___test1212() {
                var e, t, r;
                if ("96458" !== (null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.app.id)) return;
                if (!0 !== (null == (r = null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.request.experiments) ? void 0 : r.test1212Payments)) return;
                const a = "position: fixed; left: 15px; padding: 0.3em; background: #fff; border: 1px solid #000; border-radius: 5px;";
                let n = document.createElement("div");
                n.setAttribute("id", "payElement1212-noads"), n.setAttribute("style", `${a} top: 5px;`), n.textContent = 'purchase("noads")', n.onclick = () => this.___test1212Purchase("noads"), document.body.appendChild(n), n = document.createElement("div"), n.setAttribute("id", "payElement1212-3x3antiblock"), n.setAttribute("style", `${a} top: 40px;`), n.textContent = 'purchase("3x3antiblock")', n.onclick = () => this.___test1212Purchase("3x3antiblock"), document.body.appendChild(n)
            }
            ___test1212Purchase(e) {
                function t(t) {
                    const r = document.getElementById(`payElement1212-${e}`);
                    r && (r.style.backgroundColor = t ? "#0f0" : "#f00")
                }
                this.purchase({
                    id: e,
                    developerPayload: ""
                }).then((() => t(!0))).catch((e => {
                    t(!1), (0, l.fF)(e)
                }))
            }
        }
        const rr = function(e = {}) {
                const t = new tr(e);
                return new Promise(((e, r) => {
                    t.getCatalog().then((() => e(t))).catch(r)
                }))
            },
            ar = {
                APP_VERSION: "",
                app: {
                    id: ""
                },
                browser: {
                    lang: "ru"
                },
                clid: void 0,
                i18n: {
                    lang: "ru",
                    tld: "ru"
                },
                isStickyBannerEnabled: !1,
                isWorldWide: !1,
                isYandexApp: !1,
                isTelegram: !1,
                moneyCodeSymbol: ve.NAu.HOP,
                params: {},
                request: {},
                serviceName: ve.Go0.YANDEX
            };
        let nr = () => (window.YandexGamesSDKEnvironment || (0, l.fF)(new Error("SDK environment: `window.YandexGamesSDKEnvironment` is undefined")), nr = () => window.YandexGamesSDKEnvironment || ar, nr());
        const or = {
                get app() {
                    return nr().app
                },
                get browser() {
                    return {
                        lang: nr().i18n.lang
                    }
                },
                get data() {
                    return nr().data || {}
                },
                get i18n() {
                    return nr().i18n
                },
                get payload() {
                    return nr().params.payload
                },
                get isTelegram() {
                    return nr().isTelegram
                }
            },
            ir = "/player",
            sr = 5 * f,
            lr = () => sr * St(),
            dr = (e, t, r = {}) => kt({
                apiPath: ir,
                timeout: lr(),
                path: e,
                data: t,
                params: r
            }),
            cr = 204800;

        function ur(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return (0, l.fF)(e), `${Date.now()}.${Math.random()}`
            }
        }
        class pr {
            constructor(e) {
                this._playerId = e, this._dataHash = null, this._timestamp = 0
            }
            isSamePlayer(e) {
                return e === this._playerId
            }
            set dataHash(e) {
                this._dataHash = e ? ur(e) : null
            }
            validate(e) {
                const t = ur(e);
                return function(e) {
                    try {
                        return (new TextEncoder).encode(e).length
                    } catch (t) {
                        return function(e) {
                            let t = e.length;
                            for (let r = e.length - 1; r >= 0; r--) {
                                let a = e.charCodeAt(r);
                                a > 127 && a <= 2047 ? t++ : a > 2047 && a <= 65535 && (t += 2), a >= 56320 && a <= 57343 && r--
                            }
                            return t
                        }(e)
                    }
                }(t) > cr ? {
                    error: new Error("The data is too large (bigger then 204800 bytes)."),
                    reject: !0
                } : this._dataHash === t ? {
                    error: new Error("The data does not differ from the previous ones."),
                    reject: !1
                } : {}
            }
            getWaitTime() {
                let e = 200;
                const t = Math.abs(Date.now() - this._timestamp);
                return t < 3e3 && (e = Math.max(200, 3e3 - t)), e
            }
            set timestamp(e) {
                this._timestamp = e
            }
        }
        const mr = T("Player", E.Dev);

        function _r(e) {
            const {
                data: t,
                signature: r
            } = function(e) {
                if ("signature" in e) {
                    const {
                        signature: t
                    } = e;
                    if ("string" == typeof t) {
                        const {
                            data: e
                        } = JSON.parse(Jt(t.split(".")[1]));
                        return {
                            data: e,
                            signature: t
                        }
                    }(0, l.fF)(new Error("response.signature is not a string"))
                }
                return {
                    data: e
                }
            }(e);
            return Qt(t, r), t
        }

        function gr(e, t) {
            if (void 0 === t) return e;
            if (!Array.isArray(t)) throw new Error("`keys` must be an Array");
            if (-1 !== t.indexOf("signature")) throw new Error('`keys` must not contains "signature" key');
            const r = {};
            return t.forEach((t => {
                t in e && (r[t] = e[t])
            })), r
        }

        function hr(e) {
            return !(!e || "object" != typeof e) && Object.values(e).every((e => "number" == typeof e && !isNaN(e)))
        }
        let fr, vr, yr, wr;
        d.Z.onExternalMessage("auth", (e => {
            if ("changed" === e.data.action && yr) {
                mr("Call onLogoutCallback()");
                try {
                    yr()
                } catch (e) {
                    console.error()
                }
                yr = void 0
            }
        }));
        class br extends st {
            constructor(e, t) {
                super(e), this.dataPromise = null, this.getApiPromise = () => new Promise(((e, t) => {
                    this._fetchData("/data").then((t => {
                        this.data = t, e(t)
                    })).catch((e => {
                        this.dataPromise = null, t(e)
                    }))
                })), this.getDataPromise = () => void 0 !== this.data ? Promise.resolve(this.data) : or.isTelegram ? ft().catch((() => this._fetchData("/data"))) : this.getApiPromise(), this.config = t, vr && vr.isSamePlayer(this.getUniqueID()) || (vr = new pr(this.getUniqueID()))
            }
            onLogout(e) {
                mr("Set onLogout callback"), yr = e
            }
            getIDsPerGame() {
                return this._fetchData("-ids-per-game")
            }
            getData(e) {
                return H() ? Promise.resolve({}) : (this.dataPromise = this.getDataPromise(), this.dataPromise.then((t => gr(t, e))))
            }
            setData(e, t = !1) {
                if (H()) return new Promise((e => e(!0)));
                var r;
                if (or.isTelegram && (r = e, _t("setData", {
                        key: gt,
                        value: JSON.stringify(r)
                    })), ! function(e) {
                        return "object" == typeof e && null !== e
                    }(e)) return Promise.reject(new Error("Data is not valid"));
                this.data = e;
                const a = function(e, t = !1) {
                    const r = vr.validate(e);
                    return r.error ? r.reject ? Promise.reject(r.error) : ((0, l.Ts)(r.error), Promise.resolve(!0)) : new Promise(((r, a) => {
                        fr && window.clearTimeout(fr);
                        let n = t ? 200 : Math.max(200, vr.getWaitTime());
                        vr.timestamp = Date.now(), fr = window.setTimeout((() => {
                            dr("/data", e).then((() => {
                                vr.dataHash = e, r(!0)
                            })).catch((e => {
                                vr.timestamp = 0, vr.dataHash = null, a(e)
                            }))
                        }), n)
                    }))
                }(e, t);
                return t ? a : Promise.resolve(!0)
            }
            getStats(e) {
                return H() ? new Promise((e => e({}))) : (void 0 === this.statsPromise && (this.statsPromise = new Promise(((e, t) => {
                    this._fetchData("/stats").then(e).catch(t).finally((() => this.statsPromise = void 0))
                }))), this.statsPromise.then((t => gr(t, e))))
            }
            setStats(e) {
                return H() ? new Promise((e => e(!0))) : hr(e) ? dr("/stats", e) : Promise.reject(new Error("Stats is not valid"))
            }
            incrementStats(e) {
                return H() ? new Promise((e => e(!0))) : hr(e) ? this._postData("/stats/increment", e) : Promise.reject(new Error("Increments is not valid"))
            }
            _fetchData(e) {
                return ((e, t = {}) => Pt({
                    apiPath: ir,
                    timeout: lr(),
                    path: e,
                    params: t
                }))(Te(`${e}${this.config.signed?"-signed":""}`)).then(_r)
            }
            _postData(e, t) {
                return dr(`${e}${this.config.signed?"-signed":""}`, t).then(_r)
            }
        }
        try {
            wr = window.localStorage
        } catch (e) {}
        const Er = wr || function() {
                let e = {};
                return {
                    clear() {
                        e = {}
                    },
                    getItem: t => e[t],
                    key: t => Object.keys(e)[t],
                    removeItem(t) {
                        delete e[t]
                    },
                    setItem(t, r) {
                        e[t] = String(r)
                    },
                    get length() {
                        return Object.keys(e).length
                    }
                }
            }(),
            Pr = /iPad|iPhone|iPod/.test(navigator.platform),
            kr = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            Sr = Pr || kr,
            Ar = /app-[^.]+\.games\.s3\.yandex\.net$/.test(window.location.hostname),
            Or = !Ar && Sr,
            Tr = V((() => {
                (0, l.fF)(new Error("localStorage is broken on iOS/MacOS - https://developer.apple.com/forums/thread/109909\nPlease use YaGames.init().then(ysdk => ysdk.getStorage()).then(storage => storage.setItem('key', 'value'))"))
            })),
            Ir = class e {
                static setup() {
                    Or && Object.defineProperty(window, "localStorage", {
                        get: function() {
                            return Tr(), Er
                        }
                    }), Sr && Ar && e.setProxy() && e.backup()
                }
                static load() {
                    if (e.onloadPromise_) return e.onloadPromise_;
                    const t = e.getCustomLocalStorage();
                    return t ? (e.onloadPromise_ = new Promise((e => {
                        window.addEventListener("message", (({
                            data: {
                                type: r,
                                action: a,
                                data: n
                            }
                        }) => {
                            if ("local-storage" === r && "get-all" === a) {
                                for (let e in n) t.setItem(e, String(n[e]));
                                e(t)
                            }
                        })), window.parent.postMessage({
                            type: "local-storage",
                            action: "get-all",
                            source: "YandexGamesSDK"
                        }, "*")
                    })), e.onloadPromise_) : Promise.resolve(Er)
                }
                static getCustomLocalStorage() {
                    if ("function" != typeof Proxy) return null;
                    return new Proxy({
                        clear() {
                            Er.clear.call(Er), d.Z.postToParent({
                                type: "local-storage",
                                action: "clear"
                            })
                        },
                        getItem: e => Er.getItem.call(Er, e),
                        key: e => Er.key.call(Er, e),
                        get length() {
                            return Er.length
                        },
                        removeItem(e) {
                            Er.removeItem.call(Er, e), d.Z.postToParent({
                                type: "local-storage",
                                action: "del",
                                data: {
                                    key: e
                                }
                            })
                        },
                        setItem(e, t) {
                            Er.setItem.call(Er, e, String(t)), d.Z.postToParent({
                                type: "local-storage",
                                action: "set",
                                data: {
                                    key: e,
                                    value: t
                                }
                            })
                        }
                    }, {
                        get: function(e, t) {
                            return t in e ? e[t] : e.getItem(String(t))
                        },
                        set: function(e, t, r) {
                            return e.setItem(String(t), r), !0
                        }
                    })
                }
                static setProxy() {
                    const t = e.getCustomLocalStorage();
                    return !!t && (Object.defineProperty(window, "localStorage", {
                        get: function() {
                            return t
                        }
                    }), !0)
                }
                static backup() {
                    const e = Object.create(null);
                    for (let t = 0; t < Er.length; t++) {
                        const r = Er.key(t);
                        r && (e[r] = Er.getItem(r))
                    }
                    d.Z.postToParent({
                        type: "local-storage",
                        action: "backup",
                        data: e
                    })
                }
            };
        Ir.onloadPromise_ = null;
        let xr = Ir;

        function Dr() {
            return !Sr && wr ? Promise.resolve(wr) : xr.load()
        }

        function Rr(e) {
            const t = typeof e;
            return null != e && ("object" === t || "function" === t)
        }
        var Cr = Object.defineProperty,
            Lr = Object.getOwnPropertySymbols,
            Nr = Object.prototype.hasOwnProperty,
            Mr = Object.prototype.propertyIsEnumerable,
            Gr = (e, t, r) => t in e ? Cr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r,
            Fr = (e, t) => {
                for (var r in t || (t = {})) Nr.call(t, r) && Gr(e, r, t[r]);
                if (Lr)
                    for (var r of Lr(t)) Mr.call(t, r) && Gr(e, r, t[r]);
                return e
            };
        const Br = T("captureAlert", E.Dev),
            $r = 250;

        function jr(e) {
            var t, r;
            if ("DIV" === e.tagName && e.getAttribute("style") && !e.querySelector("div") && !e.classList.length && !e.id) {
                const e = "OK" === (null == (t = document.querySelector("button")) ? void 0 : t.textContent) && (null == (r = document.querySelector("span")) ? void 0 : r.textContent);
                e && (Br(`popup message = ${e}`), d.Z.postToParent({
                    type: "game-call-alert",
                    data: {
                        message: e.substring(0, $r),
                        popup: !0
                    }
                }))
            }
        }

        function Ur() {
            const e = "createUnityInstance" in window || "UnityLoader" in window;
            if (Br("captureUnityAlert isUnity", e), !e) return;
            if (document.querySelectorAll("div[style]:not([id]):not([class])").forEach(jr), "undefined" != typeof MutationObserver) {
                const e = new MutationObserver((e => {
                    e.forEach((e => {
                        "childList" === e.type && setTimeout((() => {
                            Array.from(e.addedNodes).forEach(jr)
                        }), 0)
                    }))
                }));
                e.observe(document.body, {
                    childList: !0,
                    subtree: !0
                }), window.addEventListener("unload", (() => {
                    e.disconnect()
                }))
            }
        }
        const Yr = new class {
            writeText(e) {
                try {
                    e = String(e)
                } catch (e) {
                    return Promise.reject(new Error("Error while stringified provided value"))
                }
                return new Promise(((t, r) => {
                    const a = N("ClipboardPublic.writeText");
                    d.Z.postToParent({
                        type: "clipboard",
                        action: "write-text",
                        data: {
                            text: e
                        }
                    }).then((() => t(void 0))).catch(r).finally((() => {
                        a()
                    }))
                }))
            }
        };
        class Wr {
            constructor(e = "desktop") {
                this._type = e
            }
            get type() {
                return this._type
            }
            isMobile() {
                return "mobile" === this.type
            }
            isTablet() {
                return "tablet" === this.type
            }
            isDesktop() {
                return "desktop" === this.type
            }
            isTV() {
                return "tv" === this.type
            }
        }
        var Zr = Object.defineProperty,
            Kr = Object.getOwnPropertySymbols,
            Vr = Object.prototype.hasOwnProperty,
            Hr = Object.prototype.propertyIsEnumerable,
            zr = (e, t, r) => t in e ? Zr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r,
            qr = (e, t) => {
                for (var r in t || (t = {})) Vr.call(t, r) && zr(e, r, t[r]);
                if (Kr)
                    for (var r of Kr(t)) Hr.call(t, r) && zr(e, r, t[r]);
                return e
            };
        const Xr = (() => {
            var e;
            const t = null == (e = window.YandexGamesSDK) ? void 0 : e.game.info;
            if (!t) return;
            const r = parseInt(t.appId, 10);
            return r ? {
                appId: r,
                developerId: t.publisher.id
            } : void 0
        })();
        var Jr = r(597);

        function Qr(e, t) {
            t && (e.type = t), d.Z.postToParent({
                data: e,
                type: "error"
            }).catch((e => {
                console.warn(e)
            }))
        }

        function ea(e) {
            return {
                data: {
                    additional: {
                        sdkVersion: 2
                    }
                },
                error: e,
                source: "game",
                sourceMethod: (0, l.Zi)(e.stack)
            }
        }
        const ta = new class {
            constructor(e) {
                this.source = e, window.addEventListener("error", this), "Promise" in window && window.addEventListener("unhandledrejection", this)
            }
            addLogger(e) {
                this.logger = e
            }
            handleEvent(e) {
                this._handleEvent(e)
            }
            _handleEvent(e, t = "error") {
                try {
                    this._unsafeHandleEvent(e, t)
                } catch (e) {
                    console.warn("Couldn't handle event in ErrorCounter!", e)
                }
            }
            _unsafeHandleEvent(e, t) {
                return "unhandledrejection" === e.type ? this._unsafeHandlePromiseRejectionEvent(e) : this._unsafeHandleErrorEvent(e, t)
            }
            _unsafeHandlePromiseRejectionEvent(e) {
                var t;
                const {
                    reason: r
                } = e;
                if (!r) return;
                let a;
                const n = {};
                r.stack && r.message ? a = r.message : (a = String(r), "[object Event]" === a ? a = "event.type: " + r.type : "[object Object]" === a && (n.unhandledObject = r)), (null == (t = r.target) ? void 0 : t.src) && (n.src = r.target.src);
                const o = {
                    additional: n,
                    message: "Unhandled rejection: " + a,
                    name: "UnhandledPromiseError",
                    stack: r.stack || ""
                };
                console.error(o.message, l.X4, o), this._postError(o, "unhandled")
            }
            _unsafeHandleErrorEvent(e, t) {
                var r, a, n, o, i;
                const {
                    error: s
                } = e, d = {
                    columnNumber: null != (a = null != (r = e.colno) ? r : null == s ? void 0 : s.columnNumber) ? a : -1,
                    fileName: e.filename || (null == s ? void 0 : s.fileName) || "",
                    lineNumber: null != (o = null != (n = e.lineno) ? n : null == s ? void 0 : s.lineNumber) ? o : -1,
                    message: e.message || (null == s ? void 0 : s.message) || "",
                    name: (null == s ? void 0 : s.name) || "Error",
                    stack: null != (i = null == s ? void 0 : s.stack) ? i : ""
                };
                (Xr || (null == s ? void 0 : s.additional)) && (d.additional = qr(qr({}, null == s ? void 0 : s.additional), Xr)), console.error(d.message, l.X4, d), this._postError(d, t)
            }
            _postError(e, t) {
                var r;
                let a = (0, l.Zi)(e.stack);
                "ErrorListener.handleEvent" === a && (a = "unknown"), null == (r = this.logger) || r.call(this, {
                    data: {
                        additional: e.additional || {}
                    },
                    block: `${this.source}-${t}`,
                    error: e,
                    source: this.source,
                    sourceMethod: a
                }, t)
            }
        }("game");
        ta.addLogger(Qr),
            function() {
                try {
                    const e = console.error;
                    console.error = (...t) => {
                        let r = t.filter((e => e instanceof Error))[0];
                        r || (r = (0, Jr.Z)(t));
                        try {
                            "string" == typeof t[1] && t[1] === l.X4 ? t.splice(1, 1) : Qr(ea(r), "console.error")
                        } catch (e) {}
                        e.apply(console, t)
                    }
                } catch (e) {
                    try {
                        Qr(ea(e), "error")
                    } catch (e) {}
                }
            }();
        var ra = (e => (e.AudioAPI = "AudioAPI", e.LoadingAPI = "LoadingAPI", e.PluginEngineDataReporterAPI = "PluginEngineDataReporterAPI", e))(ra || {}),
            aa = (e => (e.GameInit = "loading_api_game_init", e.GameReady = "loading_api_game_ready", e.GameReadyForce = "loading_api_game_ready_force", e.IframeAdded = "loading_api_iframe_added", e.IframeError = "loading_api_iframe_resources_error", e.IframeLoaded = "loading_api_iframe_resources_loaded", e.ScriptInit = "loading_api_script_init", e.TTIReady = "loading_api_tti_ready", e))(aa || {});
        const na = ["LoadingAPI", "PluginEngineDataReporterAPI"],
            oa = class e {
                constructor() {
                    this.isReady = !1, this.startTimestamp = Date.now(), this.startReadyFallbackTimeout()
                }
                ready() {
                    if (this.isReady) return void console.warn("Don't call %cfeatures.LoadingAPI.ready() %cmore than one time.", "color: green", "color: unset");
                    this.isReady = !0;
                    const e = Date.now() - this.startTimestamp;
                    this.logGameInitTime(e, aa.GameReady), clearTimeout(this.readyFallbackTimerId)
                }
                logGameInitTime(e, t) {
                    d.Z.postToParent({
                        type: "game-measuring",
                        action: t,
                        data: {
                            timeFromInit: e
                        }
                    })
                }
                startReadyFallbackTimeout() {
                    this.readyFallbackTimerId = window.setTimeout((() => {
                        this.isReady = !0, this.logGameInitTime(e.MAX_TIMEOUT, aa.GameReadyForce)
                    }), e.MAX_TIMEOUT)
                }
            };
        oa.MAX_TIMEOUT = 3e4;
        let ia = oa;
        const sa = {
            [ra.LoadingAPI]: ia,
            [ra.PluginEngineDataReporterAPI]: class {
                constructor() {
                    this.isReported = !1
                }
                report(e) {
                    this.isReported ? console.warn("Don't call %cfeatures.PluginEngineDataReporterAPI.report() %cmore than one time.", "color: green", "color: unset") : (this.logData(e), this.isReported = !0)
                }
                logData(e) {
                    d.Z.postToParent({
                        type: "game-reporter",
                        action: "plugin_engine_data",
                        data: e
                    })
                }
            }
        };
        class la {
            constructor(e = {}) {
                for (let t in ra) ra[t] in e && e[ra[t]] && (this[t] = new sa[t]);
                for (let t of na) !this[t] && (t in e && e[t] || !(t in e)) && (this[t] = new sa[t]);
                d.Z.postToParent({
                    type: "game-measuring",
                    action: aa.GameInit
                })
            }
        }
        ra.LoadingAPI, ra.PluginEngineDataReporterAPI;
        const da = new class {
            canReview() {
                return new Promise((e => {
                    const t = N("Feedback.canReview");
                    d.Z.postToParent({
                        type: "feedback",
                        action: "can-review"
                    }).then((({
                        data: t
                    }) => {
                        e(t)
                    })).catch((t => {
                        (0, l.fF)(t), e({
                            reason: "UNKNOWN",
                            value: !1
                        })
                    })).finally((() => {
                        t()
                    }))
                }))
            }
            requestReview() {
                return new Promise((e => {
                    const t = N("Feedback.requestReview", 2 * v);
                    d.Z.postToParent({
                        type: "feedback",
                        action: "request-review"
                    }).then((({
                        data: t
                    }) => {
                        const {
                            feedbackSent: r,
                            reason: a
                        } = t;
                        a ? ((0, l.fF)(a), e({
                            feedbackSent: null != r && r
                        })) : e({
                            feedbackSent: null == r || r
                        })
                    })).catch((t => {
                        (0, l.fF)(t), e({
                            feedbackSent: !1
                        })
                    })).finally((() => {
                        t()
                    }))
                }))
            }
        };

        function ca() {
            ! function() {
                var e;
                null == (e = window.top) || e.postMessage({
                    type: "foolproof-sdk-init",
                    url: location.href,
                    draftDetectedInIframe: m()
                }, "*")
            }()
        }

        function ua(e) {
            try {
                return "WebGLRenderingContext" in window && Boolean(e.getContext("webgl") || e.getContext("experimental-webgl") instanceof WebGLRenderingContext)
            } catch (e) {
                (0, l.fF)(e, {
                    sourceMethod: "isWebGLSupported",
                    level: "warn"
                })
            }
            return !1
        }

        function pa(e) {
            try {
                return "WebGL2RenderingContext" in window && Boolean(e.getContext("webgl2") || e.getContext("experimental-webgl2") instanceof WebGL2RenderingContext)
            } catch (e) {
                (0, l.fF)(e, {
                    sourceMethod: "isWebGL2Supported",
                    level: "warn"
                })
            }
            return !1
        }

        function ma() {
            const e = [];
            return "createUnityInstance" in window && e.push("unity"), e
        }

        function _a() {
            const e = [],
                t = {
                    webassembly: "WebAssembly" in window,
                    webgl: ua(document.createElement("canvas")),
                    webgl2: pa(document.createElement("canvas"))
                };
            return Object.keys(t).filter((e => t[e])).forEach((t => {
                e.push(t)
            })), e
        }
        const ga = () => {
                return e = void 0, t = null, r = function*() {
                    return new Promise(((e, t) => {
                        const r = `${Date.now()}-${Math.random()}`,
                            a = setTimeout((() => {
                                t(new Error("Get external iframe timeout"))
                            }), 500);
                        window.addEventListener("message", (function t(n) {
                            const {
                                data: o
                            } = function(e) {
                                try {
                                    return {
                                        data: JSON.parse(e),
                                        error: null
                                    }
                                } catch (e) {
                                    return {
                                        data: null,
                                        error: e
                                    }
                                }
                            }(n.data);
                            o && o.messageId === r && (window.removeEventListener("message", t), clearTimeout(a), e(o.payload))
                        })), window.parent.postMessage(JSON.stringify({
                            source: "YandexGamesSDK",
                            actionName: "GET_IFRAME_ORIGIN_SRC",
                            channel: "EARLY_SDK_EVENT",
                            messageId: r
                        }), "*")
                    }))
                }, new Promise(((a, n) => {
                    var o = e => {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                n(e)
                            }
                        },
                        i = e => {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        },
                        s = e => e.done ? a(e.value) : Promise.resolve(e.value).then(o, i);
                    s((r = r.apply(e, t)).next())
                }));
                var e, t, r
            },
            ha = {
                allow() {
                    d.Z.postToParent({
                        type: "notifications",
                        action: "allow"
                    })
                }
            };

        function fa(...e) {
            const t = e => e && "object" == typeof e;
            return e.reduce(((e, r) => (Object.keys(r).forEach((a => {
                const n = e[a],
                    o = r[a];
                Array.isArray(n) && Array.isArray(o) ? e[a] = n.concat(...o) : t(n) && t(o) ? e[a] = fa(n, o) : e[a] = o
            })), e)), {})
        }
        const va = {
            FULLSCREEN: "R-I-320442-1",
            REWARDED_VIDEO: "R-I-328933-4",
            STICKY_MOBILE_LANDSCAPE_UPPER: "R-I-328933-35",
            STICKY_MOBILE_UPPER: "R-I-328933-34",
            STICKY_DESKTOP_RIGHT: "R-I-328933-33"
        };

        function ya(e) {
            if (!e || "object" != typeof e) return {};
            ! function(e) {
                "partnerId" in e && (delete e.partnerId, console.warn("`partnerId` is deprecated in the SDKv2"))
            }(e);
            return ["adv", "screen"].reduce(((t, r) => (r in e && (t = e[r]), t)), {})
        }

        function wa(e, t = {}) {
            return ya(t),
                function(e = {}) {
                    return function(e) {
                            $e || (e.advBlocks.fullscreen = va.FULLSCREEN, e.advBlocks.fullscreen_landscape = va.FULLSCREEN)
                        }(e),
                        function(e) {
                            "adv" in e && Je.sendOnceDeprecatedUsage("SDK init options with adv");
                            e.adv = e.adv || {},
                                function(e) {
                                    if ("onAdvClose" in e && "function" != typeof e.onAdvClose) throw new Error('"onAdvClose" must be a function')
                                }(e.adv)
                        }(e),
                        function(e) {
                            if ("screen" in e && "object" != typeof e.screen) throw new Error("Wrong screen options type");
                            let t = e.screen || {};
                            t = function(e, t) {
                                "fullscreen" in e ? function(e) {
                                    if ("boolean" != typeof e) throw new Error("Wrong fullscreen value")
                                }(e.fullscreen) : e.fullscreen = "desktop" !== t;
                                return e
                            }(t, e.deviceType), t = function(e) {
                                if ("orientation" in e) {
                                    const {
                                        orientation: t
                                    } = e;
                                    "string" == typeof t && (e.orientation = {
                                            value: t,
                                            lock: !0
                                        }),
                                        function(e) {
                                            if ("object" != typeof e) throw new Error("Wrong orientation value");
                                            if (![null, "portrait", "landscape"].includes(e.value)) throw new Error(`Wrong orientation value ("${e.value}")`);
                                            if ("lock" in e) {
                                                if ("boolean" != typeof e.lock) throw new Error(`Wrong orientation lock value ("${e.lock}")`)
                                            } else e.lock = !0
                                        }(e.orientation)
                                } else e.orientation = {
                                    value: null,
                                    lock: !0
                                };
                                return e
                            }(t), e.screen = t
                        }(e), e
                }(fa(e || {}, t))
        }
        const ba = (e = {}) => rr(e),
            Ea = {
                AVATAR: "avatar",
                NAME: "public_name"
            },
            Pa = "personal_info";
        Object.keys(Ea).map((e => Ea[e]));
        var ka = (e => (e.ALLOW = "allow", e.FORBID = "forbid", e.NOT_SET = "not_set", e))(ka || {});
        class Sa {
            constructor(e = {}, t) {
                this._scopePermissions = e, this._requestedScopes = this._validateRequestedScopes(t)
            }
            show() {
                return new Promise(((e, t) => {
                    d.Z.postToParent({
                        type: "scopes",
                        action: "open-scopes-dialog"
                    }).then((({
                        data: t
                    }) => {
                        e(t.result), d.Z.postToParent({
                            type: "scopes",
                            action: "focus"
                        })
                    })).catch(t)
                }))
            }
            isNeedToAskUser() {
                return [Ea.AVATAR, Ea.NAME].some((e => this._requestedScopes.includes(e) && this._scopePermissions[e] === ka.NOT_SET))
            }
            _validateRequestedScopes(e) {
                let t = [];
                t = Array.isArray(e) ? Array.from(e) : void 0 === e || !0 === e ? [Pa] : [];
                const r = t.indexOf(Pa);
                return -1 !== r && t.splice(r, 1, Ea.AVATAR, Ea.NAME), t
            }
        }
        const Aa = class {
            constructor() {
                this.promiseWrappers = Object.create(null)
            }
            getKey(e) {
                return JSON.stringify(e)
            }
            getFor(e) {
                return this.promiseWrappers[this.getKey(e)]
            }
            setFor(e, t) {
                t ? this.promiseWrappers[this.getKey(e)] = t : delete this.promiseWrappers[this.getKey(e)]
            }
            clear() {
                this.promiseWrappers = Object.create(null)
            }
        };
        var Oa = (e, t, r) => new Promise(((a, n) => {
            var o = e => {
                    try {
                        s(r.next(e))
                    } catch (e) {
                        n(e)
                    }
                },
                i = e => {
                    try {
                        s(r.throw(e))
                    } catch (e) {
                        n(e)
                    }
                },
                s = e => e.done ? a(e.value) : Promise.resolve(e.value).then(o, i);
            s((r = r.apply(e, t)).next())
        }));
        const Ta = T("PlayerProxy", E.Dev),
            Ia = 5 * v;
        const xa = new Aa,
            Da = new C;
        let Ra = !1;

        function Ca() {
            return Oa(this, arguments, (function*(e = {}, t = !0) {
                const r = xa.getFor(e);
                if (r && !1 !== t) return r.promise;
                const a = N("getPlayer"),
                    n = new C;
                if (n.promise.finally((() => {
                        a()
                    })), t) {
                    if (xa.setFor(e, n), window.setTimeout((() => {
                            xa.setFor(e, void 0)
                        }), Ia), !Ra) {
                        Ra = !0, a();
                        const e = N("get-permission-promise", 2 * v);
                        d.Z.postToParent({
                            type: "guard",
                            action: "get-permission-promise"
                        }).then((({
                            data: e
                        }) => {
                            const {
                                result: t
                            } = e;
                            Da.resolve(t)
                        })).catch((() => {
                            Da.resolve(void 0)
                        })).finally((() => {
                            e()
                        }))
                    }
                } else Da.resolve(void 0);
                const o = yield Da.promise, i = N("player/fetch");
                return d.Z.postToParent({
                    type: "player",
                    action: "fetch",
                    data: {
                        config: e
                    }
                }).then((({
                    data: r
                }) => {
                    i();
                    const {
                        data: a,
                        signature: s
                    } = r;
                    o && [ka.ALLOW, ka.FORBID].includes(o) && ("avatar" in a.scopePermissions && (a.scopePermissions.avatar = o), "public_name" in a.scopePermissions && (a.scopePermissions.public_name = o));
                    const l = function(e, t, r) {
                        const a = new br(t, e);
                        return Qt(a, r), a
                    }(e, a, s);
                    if ("lite" === l.getMode() || H()) n.resolve(l);
                    else {
                        const r = new Sa(a.scopePermissions, e.scopes);
                        if (t && r.isNeedToAskUser()) {
                            const t = N("scopesChecker", 2 * v);
                            r.show().then((() => Ca(e, !1))).catch((() => l)).then((e => n.resolve(e))).finally((() => {
                                t()
                            }))
                        } else n.resolve(l)
                    }
                })).catch((t => {
                    i(), n.reject(t), xa.setFor(e, void 0)
                })), n.promise
            }))
        }

        function La(e = {}) {
            return Ca(e, !0)
        }

        function Na(e) {
            var t;
            e && (e.focus(), null == (t = e.contentWindow) || t.focus(), e.onload = function() {
                var t;
                null == (t = e.contentWindow) || t.focus()
            })
        }
        d.Z.onExternalMessage("auth", (e => {
            ["auth-dialog-cancel", "auth-dialog-success", "changed"].includes(e.data.action) && (Ta("Clear getPlayer promises."), xa.clear())
        }));
        class Ma {
            constructor() {
                this.onMessage = e => {
                    const {
                        action: t
                    } = e.data;
                    "fullscreenchange" === t ? (document.dispatchEvent(new Event("fullscreenchange")), this._status = e.data.data.isFullscreen ? "on" : "off") : "iframe-focus" === t && this.iframeFocus()
                }, this._status = "off", this.overrideBrowserFullscreenElement(), this.initMessaging(), this.updateStatus()
            }
            get STATUS_ON() {
                return "on"
            }
            get STATUS_OFF() {
                return "off"
            }
            get status() {
                return this._status
            }
            request() {
                const e = N("FullscreenManager.request"),
                    t = d.Z.postToParent({
                        type: "screen-manager",
                        action: "request-fullscreen"
                    });
                return t.finally((() => {
                    e()
                })), t
            }
            exit() {
                const e = N("FullscreenManager.exit"),
                    t = d.Z.postToParent({
                        type: "screen-manager",
                        action: "exit-fullscreen"
                    });
                return t.finally((() => {
                    e()
                })), t
            }
            toggle() {
                const e = N("FullscreenManager.toggle"),
                    t = d.Z.postToParent({
                        type: "screen-manager",
                        action: "toggle-fullscreen"
                    });
                return t.finally((() => {
                    e()
                })), t
            }
            iframeFocus() {
                Na(document.querySelector("iframe"))
            }
            updateStatus() {
                d.Z.postToParent({
                    type: "screen-manager",
                    action: "get-state"
                }).then((e => {
                    const {
                        isFullscreen: t
                    } = e.data;
                    this._status = t ? "on" : "off"
                }))
            }
            overrideBrowserFullscreenElement() {
                try {
                    Object.getOwnPropertyDescriptor(document, "fullscreenElement") || Object.defineProperty(document, "fullscreenElement", {
                        enumerable: !1,
                        configurable: !0,
                        get: () => this.status === this.STATUS_ON ? document.documentElement : null
                    })
                } catch (e) {
                    (0, l.fF)(e)
                }
            }
            initMessaging() {
                d.Z.onExternalMessage("screen-manager", this.onMessage)
            }
        }
        class Ga {
            constructor() {
                this.fullscreen = new Ma
            }
        }
        var Fa = (e => (e.EXIT = "EXIT", e.HISTORY_BACK = "HISTORY_BACK", e))(Fa || {});
        const Ba = {
            [Fa.EXIT]: !0
        };

        function $a() {
            const e = {
                [Fa.HISTORY_BACK]: []
            };

            function t(t) {
                const r = e[t];
                return r || console.warn(`Yandex SDK Event ${t} is not in supported`), r || []
            }

            function r(e) {
                d.Z.postToParent({
                    type: "sdk-internal-event",
                    action: "listeners-change",
                    data: {
                        event: e,
                        count: t(e).length
                    }
                })
            }
            return d.Z.onExternalMessage("sdk-event", (r => {
                    const a = r.data.action;
                    a in e && t(a).forEach((e => {
                        try {
                            e()
                        } catch (e) {
                            (0, l.fF)(e)
                        }
                    }))
                })),
                function(a, n) {
                    return a in e ? (function(e, a) {
                        t(e).push(a), r(e)
                    }(a, n), () => {
                        ! function(e, a) {
                            const n = t(e),
                                o = n.indexOf(a); - 1 !== o && (n.splice(o, 1), r(e))
                        }(a, n)
                    }) : (console.warn("Yandex SDK Event", a, `is not in supported. Available events: ${Object.keys(e).join}`), () => {})
                }
        }
        const ja = ["passport.ya", "passport.yandex", "an.yandex.ru", "avatars.mds.yandex.net", "/api/"];

        function Ua(e) {
            const t = Cache.prototype[e];
            Cache.prototype[e] = function(e, r) {
                return "GET" !== e.method || 0 !== e.url.indexOf("https://") || (a = e.url, ja.some((e => -1 !== a.indexOf(e)))) ? Promise.resolve() : ("ignoreSearch" in (r = r || {}) || (r.ignoreSearch = !0), t.call(this, e, r));
                var a
            }
        }
        const Ya = class {
            static overrideCacheSearch() {
                ("function" != typeof Cache ? (console.warn("Can not find `Cache` function"), 0) : "function" != typeof Cache.prototype.match ? (console.warn("Can not find `Cache.match` function"), 0) : "function" == typeof Cache.prototype.matchAll || (console.warn("Can not find `Cache.matchAll` function"), 0)) && (Ua("match"), Ua("matchAll"))
            }
        };
        const Wa = new class {
            canShowPrompt() {
                return new Promise((e => {
                    const t = N("Shortcut.canShowPrompt");
                    d.Z.postToParent({
                        type: "shortcut-manager",
                        action: "can-show-prompt"
                    }).then((({
                        data: t
                    }) => {
                        e(t)
                    })).catch((e => {
                        (0, l.fF)(e)
                    })).finally((() => {
                        t()
                    }))
                }))
            }
            showPrompt() {
                return new Promise((e => {
                    const t = N("Shortcut.showPrompt", 2 * v);
                    d.Z.postToParent({
                        type: "shortcut-manager",
                        action: "show-prompt"
                    }).then((({
                        data: t
                    }) => {
                        e(t)
                    })).catch((e => {
                        (0, l.fF)(e)
                    })).finally((() => {
                        t()
                    }))
                }))
            }
        };

        function Za(e) {
            window.setTimeout((() => {
                var t, r, a, n;
                const o = {
                        borrowParams: {
                            [`tmpPlayTime${e}`]: {
                                appVersion: window.APP_VERSION
                            }
                        }
                    },
                    i = new Image,
                    s = (null == (r = null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.i18n) ? void 0 : r.tld) || "ru",
                    l = _e(null == (n = null == (a = window.YandexGamesSDKEnvironment) ? void 0 : a.data) ? void 0 : n.secondDomain);
                i.src = `https://mc.yandex.${s}/watch/${l}?page-url=${encodeURIComponent(window.location.href)}&page-ref=${encodeURIComponent(document.referrer)}&charset=utf-8&site-info=${encodeURIComponent(JSON.stringify(o))}`
            }), 1e3 * e)
        }
        const Ka = function() {
            Za(5), Za(60), Za(900)
        };
        const Va = new Aa;

        function Ha(e = {}) {
            const {
                clientFeatures: t = [],
                defaultFlags: r = {}
            } = e, a = Va.getFor(e);
            if (a) return a.promise;
            const n = N("get_flags/fetch"),
                o = new C;
            return o.promise.finally((() => {
                n()
            })), Va.setFor(e, o), d.Z.postToParent({
                type: "varioqub",
                action: "fetch",
                data: {
                    clientFeatures: t
                }
            }).then((({
                data: e
            }) => {
                const t = Object.assign(r, e);
                o.resolve(t)
            })).catch((() => {
                o.resolve(r), Va.setFor(e, void 0)
            })), o.promise
        }
        class za {
            reachGoal(e, t, r) {
                d.Z.postToParent({
                    type: "yaMetrikaCounter",
                    action: "reachGoal",
                    data: {
                        counterId: e,
                        target: t,
                        goalData: r
                    }
                })
            }
            hit(e, t = {}) {
                d.Z.postToParent({
                    type: "yaMetrikaCounter",
                    action: "hit",
                    data: {
                        counterId: e,
                        hitData: t
                    }
                })
            }
        }
        var qa = r(343);

        function Xa() {
            return new Promise((e => {
                if ("loading" === document.readyState) {
                    const t = r => {
                        const {
                            target: a
                        } = r;
                        a && "loading" !== a.readyState && (a.removeEventListener("readystatechange", t), e())
                    };
                    document.addEventListener("readystatechange", t)
                } else e()
            }))
        }
        var Ja = Object.defineProperty,
            Qa = Object.defineProperties,
            en = Object.getOwnPropertyDescriptors,
            tn = Object.getOwnPropertySymbols,
            rn = Object.prototype.hasOwnProperty,
            an = Object.prototype.propertyIsEnumerable,
            nn = (e, t, r) => t in e ? Ja(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r;
        const on = (e = null) => {
            var t;
            null === e && (e = window), ["testing", "prestable", "production"].includes("production") && !S && (/iPad|iPhone|iPod/.test(window.navigator.platform) || window.navigator.userAgent.includes("Mac") && "ontouchend" in document) && (e.console = (t = ((e, t) => {
                for (var r in t || (t = {})) rn.call(t, r) && nn(e, r, t[r]);
                if (tn)
                    for (var r of tn(t)) an.call(t, r) && nn(e, r, t[r]);
                return e
            })({}, console), Qa(t, en({
                log: () => {},
                error: () => {},
                info: () => {},
                debug: () => {},
                warn: () => {},
                trace: () => {},
                dir: () => {},
                dirxml: () => {},
                group: () => {},
                groupEnd: () => {},
                time: () => {},
                timeEnd: () => {},
                assert: () => {},
                profile: () => {}
            }))))
        };
        var sn, ln = (e, t, r) => new Promise(((a, n) => {
            var o = e => {
                    try {
                        s(r.next(e))
                    } catch (e) {
                        n(e)
                    }
                },
                i = e => {
                    try {
                        s(r.throw(e))
                    } catch (e) {
                        n(e)
                    }
                },
                s = e => e.done ? a(e.value) : Promise.resolve(e.value).then(o, i);
            s((r = r.apply(e, t)).next())
        }));
        const dn = T("sdkv2", E.Dev);
        ! function() {
            var e;
            if (m()) Br("alert hook disabled");
            else try {
                "function" == typeof window.alert && (e = window.alert, window.alert = function() {
                    const t = arguments[0];
                    return Br(`alert message = ${t}`), d.Z.postToParent({
                        type: "game-call-alert",
                        data: {
                            message: t.substring(0, $r)
                        }
                    }), e.apply(this, arguments)
                }), window.addEventListener("load", Ur, {
                    once: !0
                }), Br("alert hook enabled")
            } catch (e) {
                (0, l.fF)(e, {
                    prefix: "game_hook_alert exp error: ",
                    level: "warn"
                })
            }
        }(), H() && (localStorage.clear(), indexedDB.databases().then((e => {
            e.forEach((e => {
                e.name && indexedDB.deleteDatabase(e.name)
            }))
        })));
        const cn = ln(void 0, null, (function*() {
            return function(r) {
                if (window.loadPolyfillsPromise) return window.loadPolyfillsPromise;
                let a = [
                    [e.LEGACY, Boolean(Array.prototype.at)],
                    [e.INTERSECTION_OBSERVER, Boolean("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)],
                    [e.SMOOTH_SCROLL, Boolean("scrollBehavior" in document.documentElement.style)],
                    [e.ABORT_CONTROLLER, "undefined" != typeof AbortController]
                ].filter((([, e]) => !e));
                return window.loadPolyfillsPromise = new Promise(((e, n) => {
                    a.length ? t({
                        id: "loadPolyfillHash",
                        src: i(r, "hash-polyfill.js"),
                        parentElement: document.head,
                        onErrCb: n,
                        onLoadCb: e
                    }) : e()
                })).then((() => Promise.all(a.map((([e]) => new Promise(((a, n) => {
                    t({
                        id: e,
                        src: s(r, e),
                        parentElement: document.head,
                        onErrCb: n,
                        onLoadCb: a
                    })
                }))))))), window.loadPolyfillsPromise.catch((e => {
                    (0, n.H)({
                        block: o.W.POLYFILL,
                        message: "Error while loading polyfills",
                        additional: {
                            error: e
                        }
                    })
                })), window.loadPolyfillsPromise
            }("//yastatic.net/s3/games-static/_/build")
        })).then((() => {
            we && (on(), window.alert = e => console.warn("Overridden alert: " + e)), (() => {
                    if (window.top !== window) return;
                    const {
                        hostname: e
                    } = window.location;
                    if (!/(games\.s3\.yandex\.net|games-storage(-awst?)?\.yandex\.net)$/.test(e)) return;
                    const t = (0, h.r)();
                    if (!t) return;
                    const {
                        search: r,
                        hash: a
                    } = window.location;
                    let n;
                    n = /games\.s3\.yandex\.net$/.test(e) ? `https://${g(e)?"ya":"yandex"}.ru/games/app/${t}${r}${a}` : `https://yandex.com/games/app/${t}${r}${a}`, window.top.location.replace(n)
                })(), ca(), window.loadEnvironmentPromise = window.loadEnvironmentPromise || new Promise(((e, t) => {
                    const r = N("loadEnvironment");
                    d.Z.postToParent({
                        type: "environment",
                        action: "get",
                        params: {
                            withOptions: !0
                        }
                    }).then((({
                        data: t
                    }) => {
                        e(t)
                    })).catch((e => {
                        t(e)
                    })).finally((() => {
                        r()
                    }))
                })).then((e => {
                    const t = !("enviroment" in e && "options" in e),
                        r = t ? e : e.enviroment;
                    return window.YandexGamesSDKEnvironment = r, dn("APP_VERSION", r.APP_VERSION), !t && e.options
                })),
                function(e) {
                    const t = (0, vt.P)(e, 2e3),
                        r = ["click", "keydown", "keyup", "mousedown", "mouseenter", "mouseleave", "mouseup", "pointerup", "touchcancel", "touchend", "touchmove", "touchstart"];
                    r.forEach((e => document.addEventListener(e, t, {
                        passive: !0,
                        capture: !0
                    })))
                }((() => d.Z.postToParent({
                    type: "user-action"
                })))
        }));
        let un, pn;
        class mn {
            constructor(e) {
                var t, r;
                e = wa(e), this.EVENTS = {
                    EXIT: Fa.EXIT,
                    HISTORY_BACK: Fa.HISTORY_BACK
                }, this.dispatchEvent = function(e, t) {
                    const r = N("getSdkEventsDispatcher");
                    return new Promise(((a, n) => {
                        if (!(e in Ba)) {
                            const t = `Yandex SDK Event ${e} is not in supported.`;
                            return console.warn(t), void n(new Error(t))
                        }
                        const o = {
                            action: e,
                            type: "sdk-event"
                        };
                        if (void 0 !== t) try {
                            o.data = {
                                detail: JSON.stringify(t)
                            }
                        } catch (e) {
                            return console.warn(e), void n(new Error('Wrong "detail" argument'))
                        }
                        d.Z.postToParent(o).then((() => {
                            a(!0)
                        })).catch((e => {
                            n(e)
                        })).finally((() => {
                            r()
                        }))
                    }))
                }, this.onEvent = $a(), this.achievements = $.init(), this.adv = new Pe(e), this.auth = ke, this.clipboard = Yr, this.deviceInfo = new Wr(e.deviceType), gn.deviceInfo = this.deviceInfo, this.environment = or, this.feedback = da, this.isAvailableMethod = (r = this, e => {
                    if (H() && ["leaderboards.setLeaderboardScore"].includes(e)) return Promise.resolve(!0);
                    const t = N("isAvailableMethod"),
                        a = d.Z.postToParent({
                            type: "auth",
                            action: "has-auth"
                        }).then((({
                            data: t
                        }) => {
                            const {
                                hasAuth: a
                            } = t;
                            if (!a && function(e) {
                                    return ["feedback.requestReview", "leaderboards.getLeaderboardPlayerEntry", "leaderboards.setLeaderboardScore", "player.getIDsPerGame"].includes(e)
                                }(e)) return !1;
                            const n = {
                                leaderboards: Bt,
                                payments: tr,
                                player: br,
                                storage: xr.getCustomLocalStorage()
                            };
                            if (n[e]) return !1;
                            const o = e.split(".");
                            let i = Fr(Fr({}, n), r);
                            for (let e = 0; e < o.length; e++) {
                                const t = i[o[e]];
                                if (!t) return !1;
                                if (e === o.length - 1) return "function" == typeof t;
                                if (!Rr(t)) return !1;
                                i = Rr(t.prototype) ? t.prototype : t
                            }
                            return !1
                        }));
                    return a.finally((() => {
                        t()
                    })), a
                }), this.shortcut = Wa, this.getLeaderboards = $t, this.getPayments = ba, this.getPlayer = La, this.getStorage = Dr, this.notifications = ha, this.analytics = {
                    yaMetrikaCounter: new za
                }, this.screen = new Ga, this.features = new la(e.features), this.yandexApp = {
                    enabled: Boolean(null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.isYandexApp)
                }, this.getFlags = Ha
            }
        }

        function _n(e) {
            if ("complete" === document.readyState) e();
            else {
                const t = () => {
                    e(), window.removeEventListener("load", t)
                };
                window.addEventListener("load", t)
            }
        }
        try {
            pn = new URLSearchParams(window.location.hash.slice(1)).get("device-type")
        } catch (e) {}
        class gn {
            constructor() {
                throw new Error("Please, use `YaGames.init` instead.")
            }
            static longtaskObserver() {
                var e;
                const t = "longtask";
                if ("undefined" != typeof PerformanceObserver && (null == (e = PerformanceObserver.supportedEntryTypes) ? void 0 : e.includes(t))) {
                    let e;
                    const r = () => {
                            clearTimeout(e), e = setTimeout((() => {
                                "complete" === document.readyState ? a.disconnect() : r()
                            }), qa.Tc)
                        },
                        a = new PerformanceObserver((e => {
                            e.getEntries().forEach((() => {
                                d.Z.postToParent({
                                    type: "longtask"
                                }), r()
                            }))
                        }));
                    a.observe({
                        entryTypes: [t]
                    })
                }
                "complete" === document.readyState ? d.Z.postToParent({
                    type: "longtask_frame_ready"
                }) : window.addEventListener("load", (() => {
                    d.Z.postToParent({
                        type: "longtask_frame_ready"
                    })
                }))
            }
            static init(e) {
                return ln(this, null, (function*() {
                    let t = window.location.hash;
                    try {
                        const e = yield ln(void 0, null, (function*() {
                            let e = window.location.href;
                            try {
                                e = yield ga()
                            } catch (e) {
                                console.warn("Error get IFrameURL", e)
                            }
                            return new URL(e || window.location.href)
                        }));
                        t = new URL(e).hash
                    } catch (e) {}
                    return un ? (console.warn("YaGames was initialized"), un) : (this.longtaskObserver(), dn("Start initialization"), yield cn, un = new Promise(((r, a) => {
                        ! function() {
                            const e = () => {
                                d.Z.postToParent({
                                    type: "sdk_initialization",
                                    data: {
                                        initialized: !0
                                    }
                                }), window.removeEventListener("load", e)
                            };
                            "complete" === document.readyState ? e() : window.addEventListener("load", e)
                        }();
                        const n = n => {
                            try {
                                if (!(e = wa(n, e)).deviceType) try {
                                    e.deviceType = new URLSearchParams(t.slice(1)).get("device-type")
                                } catch (e) {
                                    (0, l.fF)(e, {
                                        message: "No deviceType in options"
                                    })
                                }
                                Xa().then((() => {
                                    const t = new mn(e);
                                    t.environment.isTelegram && _t("loading", {
                                        value: 100
                                    }), e.hasAuth && t.getPlayer({
                                        scopes: !1
                                    }), r(t)
                                }))
                            } catch (e) {
                                (0, l.fF)(e), a(e)
                            }
                        };
                        window.loadEnvironmentPromise.then((e => {
                            e ? n(e) : new Promise(((e, t) => {
                                const r = N("loadOptions");
                                d.Z.postToParent({
                                    type: "options",
                                    action: "get"
                                }).then((({
                                    data: t
                                }) => {
                                    e(t)
                                })).catch((e => {
                                    t(e)
                                })).finally((() => {
                                    r()
                                }))
                            })).then(n).catch((e => {
                                console.warn(`Options load failed with error ${e}`), n()
                            }))
                        })).catch((e => {
                            (0, l.fF)(e), n()
                        })), setTimeout((() => {
                            const e = {
                                clientTech: _a(),
                                gameTech: ma()
                            };
                            dn("checkAndSendGameInfo tech data:", e), _n((() => {
                                d.Z.postToParent({
                                    type: "game-stats",
                                    data: e
                                })
                            }))
                        }), 10 * f)
                    })), un.then((() => dn("Initialized"))), un)
                }))
            }
        }
        if (gn.deviceInfo = new Wr(pn), window.YaGames && window.YaGamesAdded) {
            const e = 'YaGames is already defined. Please, check double <script src="https://ya.ru/games/sdk/v2"> on the page.';
            m() && window.parent.postMessage({
                source: "YandexGamesSDK",
                type: "alert",
                message: e
            }, "*"), (0, l.Ts)(new Error(e))
        } else {
            window.parent !== window && window.parent.postMessage({
                source: "YandexGamesSDK",
                type: "sdk-bundle-start",
                messageId: `${Date.now()}-${Math.random()}`,
                data: {
                    time: Date.now(),
                    sdkVersion: "v2",
                    sdkBundle: null == (sn = window.YandexGamesSDKEnvironment) ? void 0 : sn.APP_VERSION,
                    isSdkLoader: Boolean(window.isSdkLoader)
                }
            }, "*");
            try {
                xr.setup()
            } catch (e) {
                (0, l.fF)(e)
            }
            window.top !== window && Xa().then(c), Na(document.querySelector("iframe")), Ya.overrideCacheSearch(), Ka(), "SecurityPolicyViolationEvent" in window ? window.addEventListener("securitypolicyviolation", (({
                blockedURI: e,
                columnNumber: t,
                disposition: r,
                documentURI: a,
                effectiveDirective: n,
                lineNumber: o,
                originalPolicy: i,
                referrer: s,
                sample: l,
                sourceFile: c,
                statusCode: u,
                violatedDirective: p
            }) => {
                d.Z.postToParent({
                    type: "csp",
                    action: "violation",
                    data: {
                        blockedURI: e,
                        columnNumber: t,
                        disposition: r,
                        documentURI: a,
                        effectiveDirective: n,
                        lineNumber: o,
                        originalPolicy: i,
                        referrer: s,
                        sample: l,
                        sourceFile: c,
                        statusCode: u,
                        violatedDirective: p
                    }
                })
            })) : console.warn("SecurityPolicyViolationEvent is not available for this browser")
        }
        _n((() => {
            d.Z.postToParent({
                type: "frame",
                action: aa.IframeLoaded
            })
        })), window.YaGamesAdded = !0, window.YaGames = gn;
        const hn = gn
    })(), YaGames = a.default
})();
