/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
    var k = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        l = "undefined" !== typeof module && module.exports,
        f = function() {
            for (var a, b = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], c = 0, e = b.length, g = {}; c < e; c++)
                if ((a = b[c]) && a[1] in k) {
                    for (c = 0; c < a.length; c++) g[b[0][c]] = a[c];
                    return g
                }
            return !1
        }(),
        m = {
            change: f.fullscreenchange,
            error: f.fullscreenerror
        },
        d = {
            request: function(a) {
                return new Promise(function(b, c) {
                    var e = function() {
                        this.off("change",
                            e);
                        b()
                    }.bind(this);
                    this.on("change", e);
                    a = a || k.documentElement;
                    Promise.resolve(a[f.requestFullscreen]())["catch"](c)
                }.bind(this))
            },
            exit: function() {
                return new Promise(function(a, b) {
                    if (this.isFullscreen) {
                        var c = function() {
                            this.off("change", c);
                            a()
                        }.bind(this);
                        this.on("change", c);
                        Promise.resolve(k[f.exitFullscreen]())["catch"](b)
                    } else a()
                }.bind(this))
            },
            toggle: function(a) {
                return this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function(a) {
                this.on("change", a)
            },
            onerror: function(a) {
                this.on("error", a)
            },
            on: function(a, b) {
                var c = m[a];
                c && k.addEventListener(c, b, !1)
            },
            off: function(a, b) {
                var c = m[a];
                c && k.removeEventListener(c, b, !1)
            },
            raw: f
        };
    f ? (Object.defineProperties(d, {
        isFullscreen: {
            get: function() {
                return !!k[f.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return k[f.fullscreenElement]
            }
        },
        isEnabled: {
            enumerable: !0,
            get: function() {
                return !!k[f.fullscreenEnabled]
            }
        }
    }), l ? module.exports = d : window.screenfull = d) : l ? module.exports = {
        isEnabled: !1
    } : window.screenfull = {
        isEnabled: !1
    }
})();
(function() {
    function k(u) {
        u = String(u);
        return u.charAt(0).toUpperCase() + u.slice(1)
    }

    function l(u, J) {
        var E = -1,
            D = u ? u.length : 0;
        if ("number" == typeof D && -1 < D && D <= t)
            for (; ++E < D;) J(u[E], E, u);
        else m(u, J)
    }

    function f(u) {
        u = String(u).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(u) ? u : k(u)
    }

    function m(u, J) {
        for (var E in u) v.call(u, E) && J(u[E], E, u)
    }

    function d(u) {
        return null == u ? k(u) : w.call(u).slice(8, -1)
    }

    function a(u, J) {
        var E = null != u ? typeof u[J] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(E) &&
            ("object" == E ? !!u[J] : !0)
    }

    function b(u) {
        return String(u).replace(/([ -])(?!$)/g, "$1?")
    }

    function c(u, J) {
        var E = null;
        l(u, function(D, x) {
            E = J(E, D, x, u)
        });
        return E
    }

    function e(u) {
        function J(L) {
            return c(L, function(K, I) {
                var M = I.pattern || b(I);
                !K && (K = RegExp("\\b" + M + " *\\d+[.\\w_]*", "i").exec(u) || RegExp("\\b" + M + " *\\w+-[\\w]*", "i").exec(u) || RegExp("\\b" + M + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(u)) && ((K = String(I.label && !RegExp(M, "i").test(I.label) ? I.label : K).split("/"))[1] && !/[\d.]+/.test(K[0]) && (K[0] +=
                    " " + K[1]), I = I.label || I, K = f(K[0].replace(RegExp(M, "i"), I).replace(RegExp("; *(?:" + I + "[_-])?", "i"), " ").replace(RegExp("(" + I + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return K
            })
        }

        function E(L) {
            return c(L, function(K, I) {
                return K || (RegExp(I + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(u) || 0)[1] || null
            })
        }
        var D = h,
            x = u && "object" == typeof u && "String" != d(u);
        x && (D = u, u = null);
        var B = D.navigator || {},
            y = B.userAgent || "";
        u || (u = y);
        var F = x ? !!B.likeChrome : /\bChrome\b/.test(u) && !/internal|\n/i.test(w.toString()),
            R = x ? "Object" : "ScriptBridgingProxyObject",
            W = x ? "Object" : "Environment",
            S = x && D.java ? "JavaPackage" : d(D.java),
            ba = x ? "Object" : "RuntimeObject";
        W = (S = /\bJava/.test(S) && D.java) && d(D.environment) == W;
        var ca = S ? "a" : "\u03b1",
            da = S ? "b" : "\u03b2",
            X = D.document || {},
            P = D.operamini || D.opera,
            T = q.test(T = x && P ? P["[[Class]]"] : d(P)) ? T : P = null,
            r, U = u;
        x = [];
        var V = null,
            Q = u == y;
        y = Q && P && "function" == typeof P.version && P.version();
        var G = function(L) {
                return c(L, function(K, I) {
                    return K || RegExp("\\b" + (I.pattern || b(I)) + "\\b", "i").exec(u) && (I.label ||
                        I)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            A = function(L) {
                return c(L, function(K, I) {
                    return K || RegExp("\\b" + (I.pattern || b(I)) + "\\b", "i").exec(u) && (I.label || I)
                })
            }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "Edge"
                }, "Midori", "Nook Browser",
                "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chrome", {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {
                    label: "Firefox",
                    pattern: "(?:Firefox|Minefield)"
                }, {
                    label: "Firefox for iOS",
                    pattern: "FxiOS"
                },
                {
                    label: "IE",
                    pattern: "IEMobile"
                }, {
                    label: "IE",
                    pattern: "MSIE"
                }, "Safari"
            ]),
            H = J([{
                    label: "BlackBerry",
                    pattern: "BB10"
                }, "BlackBerry", {
                    label: "Galaxy S",
                    pattern: "GT-I9000"
                }, {
                    label: "Galaxy S2",
                    pattern: "GT-I9100"
                }, {
                    label: "Galaxy S3",
                    pattern: "GT-I9300"
                }, {
                    label: "Galaxy S4",
                    pattern: "GT-I9500"
                }, {
                    label: "Galaxy S5",
                    pattern: "SM-G900"
                }, {
                    label: "Galaxy S6",
                    pattern: "SM-G920"
                }, {
                    label: "Galaxy S6 Edge",
                    pattern: "SM-G925"
                }, {
                    label: "Galaxy S7",
                    pattern: "SM-G930"
                }, {
                    label: "Galaxy S7 Edge",
                    pattern: "SM-G935"
                }, "Google TV", "Lumia", "iPad",
                "iPod", "iPhone", "Kindle", {
                    label: "Kindle Fire",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    label: "Wii U",
                    pattern: "WiiU"
                }, "Wii", "Xbox One", {
                    label: "Xbox 360",
                    pattern: "Xbox"
                }, "Xoom"
            ]),
            N = function(L) {
                return c(L, function(K, I, M) {
                    return K || (I[H] || I[/^[a-z]+(?: +[a-z]+\b)*/i.exec(H)] || RegExp("\\b" + b(M) + "(?:\\b|\\w*\\d)", "i").exec(u)) && M
                })
            }({
                Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                },
                Archos: {},
                Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                },
                Asus: {
                    Transformer: 1
                },
                "Barnes & Noble": {
                    Nook: 1
                },
                BlackBerry: {
                    PlayBook: 1
                },
                Google: {
                    "Google TV": 1,
                    Nexus: 1
                },
                HP: {
                    TouchPad: 1
                },
                HTC: {},
                LG: {},
                Microsoft: {
                    Xbox: 1,
                    "Xbox One": 1
                },
                Motorola: {
                    Xoom: 1
                },
                Nintendo: {
                    "Wii U": 1,
                    Wii: 1
                },
                Nokia: {
                    Lumia: 1
                },
                Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1
                },
                Sony: {
                    PlayStation: 1,
                    "PlayStation Vita": 1
                }
            }),
            C = function(L) {
                return c(L, function(K, I) {
                    var M = I.pattern || b(I);
                    if (!K && (K = RegExp("\\b" + M + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(u))) {
                        var O = K,
                            Y = I.label || I,
                            Z = {
                                "10.0": "10",
                                "6.4": "10 Technical Preview",
                                "6.3": "8.1",
                                "6.2": "8",
                                "6.1": "Server 2008 R2 / 7",
                                "6.0": "Server 2008 / Vista",
                                "5.2": "Server 2003 / XP 64-bit",
                                "5.1": "XP",
                                "5.01": "2000 SP1",
                                "5.0": "2000",
                                "4.0": "NT",
                                "4.90": "ME"
                            };
                        M && Y && /^Win/i.test(O) && !/^Windows Phone /i.test(O) && (Z = Z[/[\d.]+$/.exec(O)]) && (O = "Windows " + Z);
                        O = String(O);
                        M && Y && (O = O.replace(RegExp(M, "i"), Y));
                        K = O = f(O.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                            " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return K
                })
            }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "
            ]);
        G && (G = [G]);
        N && !H && (H = J([N]));
        if (r = /\bGoogle TV\b/.exec(H)) H = r[0];
        /\bSimulator\b/i.test(u) && (H = (H ? H + " " : "") + "Simulator");
        "Opera Mini" == A && /\bOPiOS\b/.test(u) && x.push("running in Turbo/Uncompressed mode");
        "IE" == A && /\blike iPhone OS\b/.test(u) ? (r = e(u.replace(/like iPhone OS/, "")), N = r.manufacturer, H = r.product) : /^iP/.test(H) ? (A || (A = "Safari"), C = "iOS" + ((r = / OS ([\d_]+)/i.exec(u)) ? " " + r[1].replace(/_/g, ".") : "")) : "Konqueror" != A || /buntu/i.test(C) ? N && "Google" != N && (/Chrome/.test(A) &&
            !/\bMobile Safari\b/i.test(u) || /\bVita\b/.test(H)) || /\bAndroid\b/.test(C) && /^Chrome/.test(A) && /\bVersion\//i.test(u) ? (A = "Android Browser", C = /\bAndroid\b/.test(C) ? C : "Android") : "Silk" == A ? (/\bMobi/i.test(u) || (C = "Android", x.unshift("desktop mode")), /Accelerated *= *true/i.test(u) && x.unshift("accelerated")) : "PaleMoon" == A && (r = /\bFirefox\/([\d.]+)\b/.exec(u)) ? x.push("identifying as Firefox " + r[1]) : "Firefox" == A && (r = /\b(Mobile|Tablet|TV)\b/i.exec(u)) ? (C || (C = "Firefox OS"), H || (H = r[1])) : !A || (r = !/\bMinefield\b/i.test(u) &&
            /\b(?:Firefox|Safari)\b/.exec(A)) ? (A && !H && /[\/,]|^[^(]+?\)/.test(u.slice(u.indexOf(r + "/") + 8)) && (A = null), (r = H || N || C) && (H || N || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(C)) && (A = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(C) ? C : r) + " Browser")) : "Electron" == A && (r = (/\bChrome\/([\d.]+)\b/.exec(u) || 0)[1]) && x.push("Chromium " + r) : C = "Kubuntu";
        y || (y = E(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", b(A), "(?:Firefox|Minefield|NetFront)"]));
        if (r = "iCab" == G && 3 < parseFloat(y) && "WebKit" || /\bOpera\b/.test(A) && (/\bOPR\b/.test(u) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(u) && !/^(?:Trident|EdgeHTML)$/.test(G) && "WebKit" || !G && /\bMSIE\b/i.test(u) && ("Mac OS" == C ? "Tasman" : "Trident") || "WebKit" == G && /\bPlayStation\b(?! Vita\b)/i.test(A) && "NetFront") G = [r];
        "IE" == A && (r = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(u) || 0)[1]) ? (A += " Mobile", C = "Windows Phone " + (/\+$/.test(r) ? r : r + ".x"), x.unshift("desktop mode")) : /\bWPDesktop\b/i.test(u) ? (A = "IE Mobile", C = "Windows Phone 8.x",
            x.unshift("desktop mode"), y || (y = (/\brv:([\d.]+)/.exec(u) || 0)[1])) : "IE" != A && "Trident" == G && (r = /\brv:([\d.]+)/.exec(u)) && (A && x.push("identifying as " + A + (y ? " " + y : "")), A = "IE", y = r[1]);
        if (Q) {
            if (a(D, "global"))
                if (S && (r = S.lang.System, U = r.getProperty("os.arch"), C = C || r.getProperty("os.name") + " " + r.getProperty("os.version")), W) {
                    try {
                        y = D.require("ringo/engine").version.join("."), A = "RingoJS"
                    } catch (L) {
                        (r = D.system) && r.global.system == D.system && (A = "Narwhal", C || (C = r[0].os || null))
                    }
                    A || (A = "Rhino")
                } else "object" == typeof D.process &&
                    !D.process.browser && (r = D.process) && ("object" == typeof r.versions && ("string" == typeof r.versions.electron ? (x.push("Node " + r.versions.node), A = "Electron", y = r.versions.electron) : "string" == typeof r.versions.nw && (x.push("Chromium " + y, "Node " + r.versions.node), A = "NW.js", y = r.versions.nw)), A || (A = "Node.js", U = r.arch, C = r.platform, y = (y = /[\d.]+/.exec(r.version)) ? y[0] : null));
            else d(r = D.runtime) == R ? (A = "Adobe AIR", C = r.flash.system.Capabilities.os) : d(r = D.phantom) == ba ? (A = "PhantomJS", y = (r = r.version || null) && r.major + "." +
                r.minor + "." + r.patch) : "number" == typeof X.documentMode && (r = /\bTrident\/(\d+)/i.exec(u)) ? (y = [y, X.documentMode], (r = +r[1] + 4) != y[1] && (x.push("IE " + y[1] + " mode"), G && (G[1] = ""), y[1] = r), y = "IE" == A ? String(y[1].toFixed(1)) : y[0]) : "number" == typeof X.documentMode && /^(?:Chrome|Firefox)\b/.test(A) && (x.push("masking as " + A + " " + y), A = "IE", y = "11.0", G = ["Trident"], C = "Windows");
            C = C && f(C)
        }
        y && (r = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(y) || /(?:alpha|beta)(?: ?\d)?/i.exec(u + ";" + (Q && B.appMinorVersion)) || /\bMinefield\b/i.test(u) &&
            "a") && (V = /b/i.test(r) ? "beta" : "alpha", y = y.replace(RegExp(r + "\\+?$"), "") + ("beta" == V ? da : ca) + (/\d+\+?/.exec(r) || ""));
        if ("Fennec" == A || "Firefox" == A && /\b(?:Android|Firefox OS)\b/.test(C)) A = "Firefox Mobile";
        else if ("Maxthon" == A && y) y = y.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(H)) "Xbox 360" == H && (C = null), "Xbox 360" == H && /\bIEMobile\b/.test(u) && x.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(A) && (!A || H || /Browser|Mobi/.test(A)) || "Windows CE" != C && !/Mobi/i.test(u))
            if ("IE" == A && Q) try {
                null ===
                    D.external && x.unshift("platform preview")
            } catch (L) {
                x.unshift("embedded")
            } else(/\bBlackBerry\b/.test(H) || /\bBB10\b/.test(u)) && (r = (RegExp(H.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(u) || 0)[1] || y) ? (r = [r, /BB10/.test(u)], C = (r[1] ? (H = null, N = "BlackBerry") : "Device Software") + " " + r[0], y = null) : this != m && "Wii" != H && (Q && P || /Opera/.test(A) && /\b(?:MSIE|Firefox)\b/i.test(u) || "Firefox" == A && /\bOS X (?:\d+\.){2,}/.test(C) || "IE" == A && (C && !/^Win/.test(C) && 5.5 < y || /\bWindows XP\b/.test(C) && 8 < y || 8 == y && !/\bTrident\b/.test(u))) &&
                !q.test(r = e.call(m, u.replace(q, "") + ";")) && r.name && (r = "ing as " + r.name + ((r = r.version) ? " " + r : ""), q.test(A) ? (/\bIE\b/.test(r) && "Mac OS" == C && (C = null), r = "identify" + r) : (r = "mask" + r, A = T ? f(T.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(r) && (C = null), Q || (y = null)), G = ["Presto"], x.push(r));
            else A += " Mobile";
        if (r = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(u) || 0)[1]) {
            r = [parseFloat(r.replace(/\.(\d)$/, ".0$1")), r];
            if ("Safari" == A && "+" == r[1].slice(-1)) A = "WebKit Nightly", V = "alpha", y = r[1].slice(0, -1);
            else if (y ==
                r[1] || y == (r[2] = (/\bSafari\/([\d.]+\+?)/i.exec(u) || 0)[1])) y = null;
            r[1] = (/\bChrome\/([\d.]+)/i.exec(u) || 0)[1];
            537.36 == r[0] && 537.36 == r[2] && 28 <= parseFloat(r[1]) && "WebKit" == G && (G = ["Blink"]);
            Q && (F || r[1]) ? (G && (G[1] = "like Chrome"), r = r[1] || (r = r[0], 530 > r ? 1 : 532 > r ? 2 : 532.05 > r ? 3 : 533 > r ? 4 : 534.03 > r ? 5 : 534.07 > r ? 6 : 534.1 > r ? 7 : 534.13 > r ? 8 : 534.16 > r ? 9 : 534.24 > r ? 10 : 534.3 > r ? 11 : 535.01 > r ? 12 : 535.02 > r ? "13+" : 535.07 > r ? 15 : 535.11 > r ? 16 : 535.19 > r ? 17 : 536.05 > r ? 18 : 536.1 > r ? 19 : 537.01 > r ? 20 : 537.11 > r ? "21+" : 537.13 > r ? 23 : 537.18 > r ? 24 : 537.24 > r ? 25 : 537.36 >
                r ? 26 : "Blink" != G ? "27" : "28")) : (G && (G[1] = "like Safari"), r = (r = r[0], 400 > r ? 1 : 500 > r ? 2 : 526 > r ? 3 : 533 > r ? 4 : 534 > r ? "4+" : 535 > r ? 5 : 537 > r ? 6 : 538 > r ? 7 : 601 > r ? 8 : "8"));
            G && (G[1] += " " + (r += "number" == typeof r ? ".x" : /[.+]/.test(r) ? "" : "+"));
            "Safari" == A && (!y || 45 < parseInt(y)) && (y = r)
        }
        "Opera" == A && (r = /\bzbov|zvav$/.exec(C)) ? (A += " ", x.unshift("desktop mode"), "zvav" == r ? (A += "Mini", y = null) : A += "Mobile", C = C.replace(RegExp(" *" + r + "$"), "")) : "Safari" == A && /\bChrome\b/.exec(G && G[1]) && (x.unshift("desktop mode"), A = "Chrome Mobile", y = null, /\bOS X\b/.test(C) ?
            (N = "Apple", C = "iOS 4.3+") : C = null);
        y && 0 == y.indexOf(r = /[\d.]+$/.exec(C)) && -1 < u.indexOf("/" + r + "-") && (C = String(C.replace(r, "")).replace(/^ +| +$/g, ""));
        G && !/\b(?:Avant|Nook)\b/.test(A) && (/Browser|Lunascape|Maxthon/.test(A) || "Safari" != A && /^iOS/.test(C) && /\bSafari\b/.test(G[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(A) && G[1]) && (r = G[G.length - 1]) && x.push(r);
        x.length && (x = ["(" + x.join("; ") + ")"]);
        N && H && 0 > H.indexOf(N) && x.push("on " + N);
        H && x.push((/^on /.test(x[x.length -
            1]) ? "" : "on ") + H);
        if (C) {
            var aa = (r = / ([\d.+]+)$/.exec(C)) && "/" == C.charAt(C.length - r[0].length - 1);
            C = {
                architecture: 32,
                family: r && !aa ? C.replace(r[0], "") : C,
                version: r ? r[1] : null,
                toString: function() {
                    var L = this.version;
                    return this.family + (L && !aa ? " " + L : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(r = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(U)) && !/\bi686\b/i.test(U) ? (C && (C.architecture = 64, C.family = C.family.replace(RegExp(" *" + r), "")), A && (/\bWOW64\b/i.test(u) || Q && /\w(?:86|32)$/.test(B.cpuClass || B.platform) && !/\bWin64; x64\b/i.test(u)) &&
            x.unshift("32-bit")) : C && /^OS X/.test(C.family) && "Chrome" == A && 39 <= parseFloat(y) && (C.architecture = 64);
        u || (u = null);
        D = {};
        D.description = u;
        D.layout = G && G[0];
        D.manufacturer = N;
        D.name = A;
        D.prerelease = V;
        D.product = H;
        D.ua = u;
        D.version = A && y;
        D.os = C || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        D.parse = e;
        D.toString = function() {
            return this.description || ""
        };
        D.version && x.unshift(y);
        D.name && x.unshift(A);
        C && A && (C != String(C).split(" ")[0] || C != A.split(" ")[0] && !H) && x.push(H ? "(" + C + ")" : "on " +
            C);
        x.length && (D.description = x.join(" "));
        return D
    }
    var g = {
            "function": !0,
            object: !0
        },
        h = g[typeof window] && window || this,
        n = g[typeof exports] && exports;
    g = g[typeof module] && module && !module.nodeType && module;
    var p = n && g && "object" == typeof global && global;
    !p || p.global !== p && p.window !== p && p.self !== p || (h = p);
    var t = Math.pow(2, 53) - 1,
        q = /\bOpera/;
    p = Object.prototype;
    var v = p.hasOwnProperty,
        w = p.toString,
        z = e();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (h.platform = z, define(function() {
            return z
        })) : n &&
        g ? m(z, function(u, J) {
            n[J] = u
        }) : h.platform = z
}).call(this);

function buildIOSMeta() {
    for (var k = [{
            name: "viewport",
            content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        }, {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black"
        }], l = 0; l < k.length; l++) {
        var f = document.createElement("meta");
        f.name = k[l].name;
        f.content = k[l].content;
        var m = window.document.head.querySelector('meta[name="' + f.name + '"]');
        m && m.parentNode.removeChild(m);
        window.document.head.appendChild(f)
    }
}

function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}

function buildIOSFullscreenPanel() {
    jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
}

function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}

function __iosResize() {
    window.scrollTo(0, 0);
    console.log(window.devicePixelRatio);
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
                case 568:
                    320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                    break;
                case 667:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 808:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
                case 736:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 724:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 808:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        default:
            hideIOSFullscreenPanel()
    }
}

function iosResize() {
    __iosResize();
    setTimeout(function() {
        __iosResize()
    }, 500)
}

function iosInIframe() {
    try {
        return window.self !== window.top
    } catch (k) {
        return !0
    }
}

function isIOSLessThen13() {
    var k = platform.os,
        l = k.family.toLowerCase();
    k = parseFloat(k.version);
    return "ios" === l && 13 > k ? !0 : !1
}
$(document).ready(function() {
    platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && iosResize()
});

function CAreYouSurePanel(k) {
    var l, f, m, d, a, b;
    this._init = function(e) {
        d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = 0;
        b = d.on("mousedown", function() {});
        s_oStage.addChild(d);
        (new createjs.Tween.get(d)).to({
            alpha: .7
        }, 500);
        a = new createjs.Container;
        s_oStage.addChild(a);
        e = s_oSpriteLibrary.getSprite("msg_box");
        var g = createBitmap(e);
        g.regX = e.width / 2;
        g.regY = e.height / 2;
        a.addChild(g);
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT + e.height / 2;
        l = a.y;
        (new createjs.Tween.get(a)).to({
            y: CANVAS_HEIGHT /
                2 - 40
        }, 500, createjs.Ease.cubicOut);
        e = e.width - 120;
        new CTLText(a, -(e / 2), -340, e, 200, 100, "center", "#ffffff", PRIMARY_FONT, 1, 2, 2, TEXT_ARE_SURE, !0, !0, !0, !1);
        f = new CGfxButton(170, 80, s_oSpriteLibrary.getSprite("but_yes"), a);
        f.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        m = new CGfxButton(-170, 80, s_oSpriteLibrary.getSprite("but_no"), a);
        m.addEventListener(ON_MOUSE_UP, this._onButNo, this);
        m.pulseAnimation()
    };
    this._onButYes = function() {
        m.setClickable(!1);
        f.setClickable(!1);
        (new createjs.Tween.get(d)).to({
                alpha: 0
            },
            500);
        (new createjs.Tween.get(a)).to({
            y: l
        }, 400, createjs.Ease.backIn).call(function() {
            c.unload();
            k()
        })
    };
    this._onButNo = function() {
        m.setClickable(!1);
        f.setClickable(!1);
        (new createjs.Tween.get(d)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(a)).to({
            y: l
        }, 400, createjs.Ease.backIn).call(function() {
            c.unload()
        })
    };
    this.unload = function() {
        m.unload();
        f.unload();
        s_oStage.removeChild(d);
        s_oStage.removeChild(a);
        d.off("mousedown", b)
    };
    var c = this;
    this._init(k)
}! function(k) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = k();
    else if ("function" == typeof define && define.amd) define([], k);
    else {
        var l;
        "undefined" != typeof window ? l = window : "undefined" != typeof global ? l = global : "undefined" != typeof self && (l = self);
        l.TreeModel = k()
    }
}(function() {
    return function d(l, f, m) {
        function a(e, g) {
            if (!f[e]) {
                if (!l[e]) {
                    var h = "function" == typeof require && require;
                    if (!g && h) return h(e, !0);
                    if (b) return b(e, !0);
                    h = Error("Cannot find module '" + e + "'");
                    throw h.code = "MODULE_NOT_FOUND",
                        h;
                }
                h = f[e] = {
                    exports: {}
                };
                l[e][0].call(h.exports, function(n) {
                    var p = l[e][1][n];
                    return a(p ? p : n)
                }, h, h.exports, d, l, f, m)
            }
            return f[e].exports
        }
        for (var b = "function" == typeof require && require, c = 0; c < m.length; c++) a(m[c]);
        return a
    }({
        1: [function(l, f, m) {
            var d = l("mergesort");
            var a = l("find-insert-index");
            f.exports = function() {
                function b(n) {
                    this.config = n = n || {};
                    this.config.childrenPropertyName = n.childrenPropertyName || "children";
                    this.config.modelComparatorFn = n.modelComparatorFn
                }

                function c(n, p) {
                    this.config = n;
                    this.model = p;
                    this.children = []
                }

                function e(n, p, t) {
                    if (!(p instanceof c)) throw new TypeError("Child must be of type Node.");
                    p.parent = n;
                    n.model[n.config.childrenPropertyName] instanceof Array || (n.model[n.config.childrenPropertyName] = []);
                    if ("function" === typeof n.config.modelComparatorFn) {
                        var q = a(n.config.modelComparatorFn, n.model[n.config.childrenPropertyName], p.model);
                        n.model[n.config.childrenPropertyName].splice(q, 0, p.model);
                        n.children.splice(q, 0, p)
                    } else if (void 0 === t) n.model[n.config.childrenPropertyName].push(p.model),
                        n.children.push(p);
                    else {
                        if (0 > t || t > n.children.length) throw Error("Invalid index.");
                        n.model[n.config.childrenPropertyName].splice(t, 0, p.model);
                        n.children.splice(q, 0, p)
                    }
                    return p
                }

                function g() {
                    var n = {};
                    1 === arguments.length ? n.fn = arguments[0] : 2 === arguments.length ? "function" === typeof arguments[0] ? (n.fn = arguments[0], n.ctx = arguments[1]) : (n.options = arguments[0], n.fn = arguments[1]) : (n.options = arguments[0], n.fn = arguments[1], n.ctx = arguments[2]);
                    n.options = n.options || {};
                    n.options.strategy || (n.options.strategy = "pre");
                    if (!h[n.options.strategy]) throw Error("Unknown tree walk strategy. Valid strategies are 'pre' [default], 'post' and 'breadth'.");
                    return n
                }
                var h = {};
                b.prototype.parse = function(n) {
                    var p;
                    if (!(n instanceof Object)) throw new TypeError("Model must be of type object.");
                    var t = new c(this.config, n);
                    if (n[this.config.childrenPropertyName] instanceof Array) {
                        this.config.modelComparatorFn && (n[this.config.childrenPropertyName] = d(this.config.modelComparatorFn, n[this.config.childrenPropertyName]));
                        var q = 0;
                        for (p = n[this.config.childrenPropertyName].length; q <
                            p; q++) {
                            var v = t,
                                w = this.parse(n[this.config.childrenPropertyName][q]);
                            w.parent = v;
                            v.children.push(w)
                        }
                    }
                    return t
                };
                c.prototype.isRoot = function() {
                    return void 0 === this.parent
                };
                c.prototype.hasChildren = function() {
                    return 0 < this.children.length
                };
                c.prototype.addChild = function(n) {
                    return e(this, n)
                };
                c.prototype.addChildAtIndex = function(n, p) {
                    if ("function" === typeof this.config.modelComparatorFn) throw Error("Cannot add child at index when using a comparator function.");
                    return e(this, n, p)
                };
                c.prototype.getPath = function() {
                    var n = [];
                    (function q(t) {
                        n.unshift(t);
                        t.isRoot() || q(t.parent)
                    })(this);
                    return n
                };
                c.prototype.walk = function() {
                    var n = g.apply(this, arguments);
                    h[n.options.strategy].call(this, n.fn, n.ctx)
                };
                h.pre = function q(p, t) {
                    var v;
                    var w = p.call(t, this);
                    var z = 0;
                    for (v = this.children.length; z < v; z++) {
                        if (!1 === w) return !1;
                        w = q.call(this.children[z], p, t)
                    }
                    return w
                };
                h.post = function v(t, q) {
                    var w;
                    var z = 0;
                    for (w = this.children.length; z < w; z++) {
                        var u = v.call(this.children[z], t, q);
                        if (!1 === u) return !1
                    }
                    return u = t.call(q, this)
                };
                h.breadth = function(t,
                    q) {
                    var v = [this];
                    (function z() {
                        var u;
                        if (0 !== v.length) {
                            var J = v.shift();
                            var E = 0;
                            for (u = J.children.length; E < u; E++) v.push(J.children[E]);
                            !1 !== t.call(q, J) && z()
                        }
                    })()
                };
                c.prototype.all = function() {
                    var t = [];
                    var q = g.apply(this, arguments);
                    h[q.options.strategy].call(this, function(v) {
                        q.fn.call(q.ctx, v) && t.push(v)
                    }, q.ctx);
                    return t
                };
                c.prototype.first = function() {
                    var t;
                    var q = g.apply(this, arguments);
                    h[q.options.strategy].call(this, function(v) {
                        if (q.fn.call(q.ctx, v)) return t = v, !1
                    }, q.ctx);
                    return t
                };
                c.prototype.drop = function() {
                    if (!this.isRoot()) {
                        var t =
                            this.parent.children.indexOf(this);
                        this.parent.children.splice(t, 1);
                        this.parent.model[this.config.childrenPropertyName].splice(t, 1);
                        this.parent = void 0;
                        delete this.parent
                    }
                    return this
                };
                return b
            }()
        }, {
            "find-insert-index": 2,
            mergesort: 3
        }],
        2: [function(l, f, m) {
            f.exports = function() {
                return function(d, a, b) {
                    var c;
                    var e = 0;
                    for (c = a.length; e < c && !(0 < d(a[e], b)); e++);
                    return e
                }
            }()
        }, {}],
        3: [function(l, f, m) {
            f.exports = function() {
                function d(a, b) {
                    var c = b.length;
                    if (2 <= c) {
                        var e = b.slice(0, c / 2);
                        c = b.slice(c / 2, c);
                        e = d(a, e);
                        c = d(a,
                            c);
                        for (var g = [], h = e.length, n = c.length; 0 < h && 0 < n;) 0 >= a(e[0], c[0]) ? (g.push(e.shift()), h--) : (g.push(c.shift()), n--);
                        0 < h ? g.push.apply(g, e) : g.push.apply(g, c);
                        return g
                    }
                    return b.slice()
                }
                return d
            }()
        }, {}]
    }, {}, [1])(1)
});

function CTreeDecision(k) {
    var l, f, m;
    this._init = function(d) {
        l = [];
        for (var a = 0; a < SEARCH_DEPTH + 1; a++) l[a] = [];
        f = new TreeModel;
        m = f.parse(d);
        l[0][0] = m
    };
    this.getRoot = function() {
        return m
    };
    this.initNewNode = function(d) {
        l[d].push(f.parse({
            rating: 0,
            moves: [],
            depth: d
        }));
        return l[d][l[d].length - 1]
    };
    this.addNode = function(d, a, b) {
        var c = d + 1,
            e = l[c].length - 1;
        l[c][e].model.moves = b;
        l[c][e].model.rating = a;
        l[d][l[d].length - 1].addChild(l[c][e])
    };
    this.rateNode = function(d, a) {
        d.model.rating = a
    };
    this.getNode = function(d, a) {
        return m.all(function(b) {
            return b.model.rating ===
                d && b.model.depth === a
        })
    };
    this.getPath = function(d) {
        return d.getPath()
    };
    this.getTerminalNodes = function() {
        return m.all(function(d) {
            return !d.hasChildren()
        })
    };
    this._init(k)
}
var s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY, s_bFocus = !0;
(function(k) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(k) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(k.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(k) {
    console.log(k)
}

function getSize(k) {
    var l = k.toLowerCase(),
        f = window.document,
        m = f.documentElement;
    if (void 0 === window["inner" + k]) k = m["client" + k];
    else if (window["inner" + k] != m["client" + k]) {
        var d = f.createElement("body");
        d.id = "vpw-test-b";
        d.style.cssText = "overflow:scroll";
        var a = f.createElement("div");
        a.id = "vpw-test-d";
        a.style.cssText = "position:absolute;top:-1000px";
        a.innerHTML = "<style>@media(" + l + ":" + m["client" + k] + "px){body#vpw-test-b div#vpw-test-d{" + l + ":7px!important}}</style>";
        d.appendChild(a);
        m.insertBefore(d, f.head);
        k = 7 == a["offset" + k] ? m["client" + k] : window["inner" + k];
        m.removeChild(d)
    } else k = window["inner" + k];
    return k
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isMobile() {
    return isIpad() ? !0 : jQuery.browser.mobile
}

function isIpad() {
    var k = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
    return !k && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && 2 < navigator.maxTouchPoints ? !0 : k
}

function isIOS() {
    var k = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    if (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone")) return s_bIsIphone = !0;
    for (; k.length;)
        if (navigator.platform === k.pop()) return s_bIsIphone = !0;
    return s_bIsIphone = !1
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var k = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < k ? k : 0
}

function playSound(k, l, f) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[k].play(), s_aSounds[k].volume(l), s_aSounds[k].loop(f), s_aSounds[k]) : null
}

function stopSound(k) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[k].stop()
}

function setVolume(k, l) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[k].volume(l)
}

function setMute(k, l) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[k].mute(l)
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var k = null !== platform.name && "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
        var l = getSize("Width");
        s_bFocus && _checkOrientation(l, k);
        var f = Math.min(k / CANVAS_HEIGHT, l / CANVAS_WIDTH),
            m = Math.round(CANVAS_WIDTH * f);
        f = Math.round(CANVAS_HEIGHT * f);
        if (f < k) {
            var d = k - f;
            f += d;
            m += CANVAS_WIDTH / CANVAS_HEIGHT * d
        } else m < l && (d = l - m, m += d, f += CANVAS_HEIGHT / CANVAS_WIDTH * d);
        d = k / 2 - f / 2;
        var a = l / 2 - m / 2,
            b = CANVAS_WIDTH / m;
        if (a * b < -EDGEBOARD_X ||
            d * b < -EDGEBOARD_Y) f = Math.min(k / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), l / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), m = Math.round(CANVAS_WIDTH * f), f = Math.round(CANVAS_HEIGHT * f), d = (k - f) / 2, a = (l - m) / 2, b = CANVAS_WIDTH / m;
        s_iOffsetX = -1 * a * b;
        s_iOffsetY = -1 * d * b;
        0 <= d && (s_iOffsetY = 0);
        0 <= a && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oModeMenu && s_oModeMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        $("#canvas").css("width",
            m + "px");
        $("#canvas").css("height", f + "px");
        0 > d || (d = (k - f) / 2);
        $("#canvas").css("top", d + "px");
        $("#canvas").css("left", a + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(k, l) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (k > l ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function smartResize(k, l, f) {
    if (null !== k.getBounds()) return l = inRectResize(k, CANVAS_WIDTH - 2 * s_iOffsetX - l, CANVAS_HEIGHT - 2 * s_iOffsetY - f), k.scaleX = k.scaleY = 1, 1 > l && (k.scaleX = k.scaleY = l), k.scaleX
}

function zoomInCamera(k, l, f, m, d) {
    if (null !== k.getBounds() && void 0 !== k.getBounds()) return l /= m, f /= d, f = l <= f ? l : f, k.scaleX = k.scaleY = f
}

function inRectResize(k, l, f) {
    if (null !== k.getBounds() && void 0 !== k.getBounds()) {
        var m = k.getBounds().width;
        l /= m;
        m = k.getBounds().height;
        f = Math.min(l, f / m);
        return k.scaleX = k.scaleY = f
    }
}

function createBitmap(k, l, f) {
    var m = new createjs.Bitmap(k),
        d = new createjs.Shape;
    l && f ? d.graphics.beginFill("#fff").drawRect(0, 0, l, f) : d.graphics.beginFill("#ff0").drawRect(0, 0, k.width, k.height);
    m.hitArea = d;
    return m
}

function createSprite(k, l, f, m, d, a) {
    k = null !== l ? new createjs.Sprite(k, l) : new createjs.Sprite(k);
    l = new createjs.Shape;
    l.graphics.beginFill("#000000").drawRect(-f, -m, d, a);
    k.hitArea = l;
    return k
}

function pad(k, l, f) {
    k += "";
    return k.length >= l ? k : Array(l - k.length + 1).join(f || "0") + k
}

function randomFloatBetween(k, l, f) {
    "undefined" === typeof f && (f = 2);
    return parseFloat(Math.min(k + Math.random() * (l - k), l).toFixed(f))
}

function rotateVector2D(k, l) {
    var f = l.getX() * Math.cos(k) + l.getY() * Math.sin(k),
        m = l.getX() * -Math.sin(k) + l.getY() * Math.cos(k);
    l.set(f, m)
}

function tweenVectorsOnX(k, l, f) {
    return k + f * (l - k)
}

function shuffle(k) {
    for (var l = k.length, f, m; 0 !== l;) m = Math.floor(Math.random() * l), --l, f = k[l], k[l] = k[m], k[m] = f;
    return k
}

function bubbleSort(k) {
    do {
        var l = !1;
        for (var f = 0; f < k.length - 1; f++) k[f] > k[f + 1] && (l = k[f], k[f] = k[f + 1], k[f + 1] = l, l = !0)
    } while (l)
}

function compare(k, l) {
    return k.index > l.index ? -1 : k.index < l.index ? 1 : 0
}

function easeLinear(k, l, f, m) {
    return f * k / m + l
}

function easeInQuad(k, l, f, m) {
    return f * (k /= m) * k + l
}

function easeInSine(k, l, f, m) {
    return -f * Math.cos(k / m * (Math.PI / 2)) + f + l
}

function easeInCubic(k, l, f, m) {
    return f * (k /= m) * k * k + l
}

function getTrajectoryPoint(k, l) {
    var f = new createjs.Point,
        m = (1 - k) * (1 - k),
        d = k * k;
    f.x = m * l.start.x + 2 * (1 - k) * k * l.traj.x + d * l.end.x;
    f.y = m * l.start.y + 2 * (1 - k) * k * l.traj.y + d * l.end.y;
    return f
}

function formatTime(k) {
    k /= 1E3;
    var l = Math.floor(k / 60);
    k = Math.floor(k - 60 * l);
    var f = "";
    f = 10 > l ? f + ("0" + l + ":") : f + (l + ":");
    return 10 > k ? f + ("0" + k) : f + k
}

function degreesToRadians(k) {
    return k * Math.PI / 180
}

function checkRectCollision(k, l) {
    var f = getBounds(k, .9);
    var m = getBounds(l, .98);
    return calculateIntersection(f, m)
}

function calculateIntersection(k, l) {
    var f, m, d, a;
    var b = k.x + (f = k.width / 2);
    var c = k.y + (m = k.height / 2);
    var e = l.x + (d = l.width / 2);
    var g = l.y + (a = l.height / 2);
    b = Math.abs(b - e) - (f + d);
    c = Math.abs(c - g) - (m + a);
    return 0 > b && 0 > c ? (b = Math.min(Math.min(k.width, l.width), -b), c = Math.min(Math.min(k.height, l.height), -c), {
        x: Math.max(k.x, l.x),
        y: Math.max(k.y, l.y),
        width: b,
        height: c,
        rect1: k,
        rect2: l
    }) : null
}

function getBounds(k, l) {
    var f = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (k instanceof createjs.Container) {
        f.x2 = -Infinity;
        f.y2 = -Infinity;
        var m = k.children,
            d = m.length,
            a;
        for (a = 0; a < d; a++) {
            var b = getBounds(m[a], 1);
            b.x < f.x && (f.x = b.x);
            b.y < f.y && (f.y = b.y);
            b.x + b.width > f.x2 && (f.x2 = b.x + b.width);
            b.y + b.height > f.y2 && (f.y2 = b.y + b.height)
        }
        Infinity == f.x && (f.x = 0);
        Infinity == f.y && (f.y = 0);
        Infinity == f.x2 && (f.x2 = 0);
        Infinity == f.y2 && (f.y2 = 0);
        f.width = f.x2 - f.x;
        f.height = f.y2 - f.y;
        delete f.x2;
        delete f.y2
    } else {
        if (k instanceof createjs.Bitmap) {
            d =
                k.sourceRect || k.image;
            a = d.width * l;
            var c = d.height * l
        } else if (k instanceof createjs.Sprite)
            if (k.spriteSheet._frames && k.spriteSheet._frames[k.currentFrame] && k.spriteSheet._frames[k.currentFrame].image) {
                d = k.spriteSheet.getFrame(k.currentFrame);
                a = d.rect.width;
                c = d.rect.height;
                m = d.regX;
                var e = d.regY
            } else f.x = k.x || 0, f.y = k.y || 0;
        else f.x = k.x || 0, f.y = k.y || 0;
        m = m || 0;
        a = a || 0;
        e = e || 0;
        c = c || 0;
        f.regX = m;
        f.regY = e;
        d = k.localToGlobal(0 - m, 0 - e);
        b = k.localToGlobal(a - m, c - e);
        a = k.localToGlobal(a - m, 0 - e);
        m = k.localToGlobal(0 - m, c - e);
        f.x =
            Math.min(Math.min(Math.min(d.x, b.x), a.x), m.x);
        f.y = Math.min(Math.min(Math.min(d.y, b.y), a.y), m.y);
        f.width = Math.max(Math.max(Math.max(d.x, b.x), a.x), m.x) - f.x;
        f.height = Math.max(Math.max(Math.max(d.y, b.y), a.y), m.y) - f.y
    }
    return f
}

function NoClickDelay(k) {
    this.element = k;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(k) {
    for (var l = k.length, f, m; 0 < l;) m = Math.floor(Math.random() * l), l--, f = k[l], k[l] = k[m], k[m] = f;
    return k
}
NoClickDelay.prototype = {
    handleEvent: function(k) {
        switch (k.type) {
            case "touchstart":
                this.onTouchStart(k);
                break;
            case "touchmove":
                this.onTouchMove(k);
                break;
            case "touchend":
                this.onTouchEnd(k)
        }
    },
    onTouchStart: function(k) {
        k.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(k) {
        this.moved = !0
    },
    onTouchEnd: function(k) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            k = document.elementFromPoint(k.changedTouches[0].clientX, k.changedTouches[0].clientY);
            3 == k.nodeType && (k = k.parentNode);
            var l = document.createEvent("MouseEvents");
            l.initEvent("click", !0, !0);
            k.dispatchEvent(l)
        }
    }
};
(function() {
    function k(f) {
        var m = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        f = f || window.event;
        f.type in m ? document.body.className = m[f.type] : (document.body.className = this[l] ? "hidden" : "visible", "hidden" === document.body.className ? (s_oMain.stopUpdate(), s_bFocus = !1) : (s_oMain.startUpdate(), s_bFocus = !0))
    }
    var l = "hidden";
    l in document ? document.addEventListener("visibilitychange", k) : (l = "mozHidden") in document ? document.addEventListener("mozvisibilitychange",
        k) : (l = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", k) : (l = "msHidden") in document ? document.addEventListener("msvisibilitychange", k) : "onfocusin" in document ? document.onfocusin = document.onfocusout = k : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = k
})();

function compareRow(k, l) {
    return k.row > l.row ? 1 : k.row < l.row ? -1 : 0
}

function compareCol(k, l) {
    return k.col > l.col ? 1 : k.col < l.col ? -1 : 0
}

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(k) {
    for (var l = window.location.search.substring(1).split("&"), f = 0; f < l.length; f++) {
        var m = l[f].split("=");
        if (m[0] == k) return m[1]
    }
}
String.prototype.format = function() {
    for (var k = this, l = arguments.length; l--;) k = k.replace(new RegExp("\\{" + l + "\\}", "gm"), arguments[l]);
    return k
};

function fullscreenHandler() {
    ENABLE_FULLSCREEN && !1 !== screenfull.isEnabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oModeMenu && s_oModeMenu.resetFullscreenBut())
}
if (screenfull.isEnabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oModeMenu && s_oModeMenu.resetFullscreenBut()
});
var s_szGameID = "b2a3398e327b4f6da665759d6730aab4";
window.GD_OPTIONS = {
    gameId: s_szGameID,
    onEvent: function(k) {
        switch (k.name) {
            case "SDK_GAME_START":
                s_bAdShown = !1;
                s_oMain && s_oMain.startUpdate();
                break;
            case "SDK_GAME_PAUSE":
                s_bAdShown = !0;
                s_oMain && s_oMain.stopUpdate();
                break;
            case "SDK_READY":
                $("#div_display_id").css("display", "block"), "undefined" !== typeof gdsdk && "undefined" !== gdsdk.showAd && gdsdk.showAd(gdsdk.AdType.Display, {
                    containerId: "div_display_id"
                }).then(function() {
                    return console.info("showAd(gdsdk.AdType.Display) resolved.")
                })["catch"](function(l) {
                    return console.info(l)
                })
        }
    }
};
(function(k, l, f) {
    var m = k.getElementsByTagName(l)[0];
    k.getElementById(f) || (k = k.createElement(l), k.id = f, k.src = "main.min.js", m.parentNode.insertBefore(k, m))
})(document, "script", "gamedistribution-jssdk");
var s_bAdShown = !1;

function CSpriteLibrary() {
    var k = {},
        l, f, m, d, a, b;
    this.init = function(c, e, g) {
        l = {};
        m = f = 0;
        d = c;
        a = e;
        b = g
    };
    this.addSprite = function(c, e) {
        if (!k.hasOwnProperty(c)) {
            var g = new Image;
            k[c] = l[c] = {
                szPath: e,
                oSprite: g,
                bLoaded: !1
            };
            f++
        }
    };
    this.getSprite = function(c) {
        return k.hasOwnProperty(c) ? k[c].oSprite : null
    };
    this._onSpritesLoaded = function() {
        f = 0;
        a.call(b)
    };
    this._onSpriteLoaded = function() {
        d.call(b);
        ++m === f && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var c in l) l[c].oSprite.oSpriteLibrary = this, l[c].oSprite.szKey =
            c, l[c].oSprite.onload = function() {
                this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey)
            }, l[c].oSprite.onerror = function(e) {
                var g = e.currentTarget;
                setTimeout(function() {
                    l[g.szKey].oSprite.src = l[g.szKey].szPath
                }, 500)
            }, l[c].oSprite.src = l[c].szPath
    };
    this.setLoaded = function(c) {
        k[c].bLoaded = !0
    };
    this.isLoaded = function(c) {
        return k[c].bLoaded
    };
    this.getNumSprites = function() {
        return f
    }
}
var CANVAS_WIDTH = 1280,
    CANVAS_HEIGHT = 1920,
    EDGEBOARD_X = 150,
    EDGEBOARD_Y = 280,
    FPS = 30,
    FPS_TIME = 1E3 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    PRIMARY_FONT = "arialrounded",
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    MODE_HUMAN = 0,
    MODE_COMPUTER = 1,
    EASY_MODE = 0,
    MEDIUM_MODE = 1,
    HARD_MODE = 2,
    WHITE = "white",
    BLACK = "black",
    PAWN = "pawn",
    ROOK = "rook",
    KNIGHT = "knight",
    BISHOP = "bishop",
    QUEEN = "queen",
    KING = "king",
    PLAYER_STATE_WAIT = 0,
    PLAYER_STATE_SELECTED =
    1,
    PLAYER_STATE_MOVING = 2,
    BOARD_STATE_STALEMATE = 0,
    BOARD_STATE_CHECK = 1,
    BOARD_STATE_PROMOTION = 2,
    BOARD_STATE_CHECKMATE = 3,
    BOARD_SPECIAL_CASTLING_RIGHT = 0,
    BOARD_SPECIAL_CASTLING_LEFT = 1,
    BOARD_SPECIAL_ENPASSANT = 2,
    NUM_CELL = 8,
    BOARD_LENGTH = 815,
    CELL_LENGTH = BOARD_LENGTH / NUM_CELL,
    DRAW = -1,
    TIME_MOVE = 1E3,
    TIME_LOOP_WAIT = 1E3,
    MIN_AI_THINKING = 1E3,
    MAX_AI_THINKING = 1500,
    INFINITE = 99999,
    SEARCH_DEPTH, DRAW_COUNTER = 50,
    START_SCORE, SCORE_DECREASE_PER_SECOND, SHOW_SCORE, ENABLE_CHECK_ORIENTATION, ENABLE_FULLSCREEN;

function CPreloader() {
    var k, l, f, m, d, a, b, c, e, g;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        g = new createjs.Container;
        s_oStage.addChild(g)
    };
    this.unload = function() {
        g.removeAllChildren();
        e.unload()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.addChild(h);
        h = s_oSpriteLibrary.getSprite("200x200");
        b = createBitmap(h);
        b.regX = .5 * h.width;
        b.regY = .5 * h.height;
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 - 180;
        g.addChild(b);
        c = new createjs.Shape;
        c.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(b.x - 100, b.y - 100, 200, 200, 10);
        g.addChild(c);
        b.mask = c;
        h = s_oSpriteLibrary.getSprite("progress_bar");
        m = createBitmap(h);
        m.x = CANVAS_WIDTH / 2 - h.width / 2;
        m.y = CANVAS_HEIGHT / 2 + 50;
        g.addChild(m);
        k = h.width;
        l = h.height;
        d = new createjs.Shape;
        d.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(m.x, m.y, 1, l);
        g.addChild(d);
        m.mask = d;
        f = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 + 100;
        f.textBaseline = "alphabetic";
        f.textAlign = "center";
        g.addChild(f);
        h = s_oSpriteLibrary.getSprite("but_start");
        e = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT /
            2, h, TEXT_PRELOADER_CONTINUE, "Arial", "#000", 40, g);
        e.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        e.setVisible(!1);
        a = new createjs.Shape;
        a.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.addChild(a);
        createjs.Tween.get(a).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(a);
            g.removeChild(a)
        })
    };
    this._onButStartRelease = function() {
        $(s_oMain).trigger("show_preroll_ad");
        s_oMain._onPreloaderComplete()
    };
    this.refreshLoader = function(h) {
        f.text = h + "%";
        100 === h && (f.visible = !1, m.visible = !1, $(s_oMain).trigger("show_preroll_ad"), s_oMain._onPreloaderComplete());
        d.graphics.clear();
        h = Math.floor(h * k / 100);
        d.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(m.x, m.y, h, l)
    };
    this._init()
}

function CCreditsPanel() {
    var k, l, f, m, d, a, b;
    this._init = function() {
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m.alpha = 0;
        s_oStage.addChild(m);
        (new createjs.Tween.get(m)).to({
            alpha: .7
        }, 500);
        var c = s_oSpriteLibrary.getSprite("msg_box");
        b = new createjs.Container;
        b.y = CANVAS_HEIGHT + c.height / 2;
        s_oStage.addChild(b);
        k = createBitmap(c);
        k.regX = c.width / 2;
        k.regY = c.height / 2;
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT / 2;
        b.addChild(k);
        a = new createjs.Shape;
        a.graphics.beginFill("#0f0f0f").drawRect(0,
            0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = .01;
        d = a.on("click", this._onLogoButRelease);
        b.addChild(a);
        var e = s_oSpriteLibrary.getSprite("but_exit");
        f = new CGfxButton(990, 610, e, b);
        f.addEventListener(ON_MOUSE_UP, this.unload, this);
        e = s_oSpriteLibrary.getSprite("logo_ctl");
        l = createBitmap(e);
        l.regX = e.width / 2;
        l.regY = e.height / 2;
        l.x = CANVAS_WIDTH / 2;
        l.y = CANVAS_HEIGHT / 2;
        b.addChild(l);
        c = c.width - 120;
        new CTLText(b, CANVAS_WIDTH / 2 - c / 2, CANVAS_HEIGHT / 2 + 340 - 40, c, 80, 68, "center", "#402604", PRIMARY_FONT, 1, 2, 2, "www.codethislab.com", !0, !0, !1, !1);
        (new createjs.Tween.get(b)).to({
            y: 0
        }, 1E3, createjs.Ease.backOut)
    };
    this.unload = function() {
        a.off("click", d);
        f.unload();
        f = null;
        s_oStage.removeChild(m);
        s_oStage.removeChild(b)
    };
    this._onLogoButRelease = function() {};
    this._init()
}

function CMain(k) {
    var l, f = 0,
        m = 0,
        d = STATE_LOADING,
        a, b;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        createjs.Touch.enable(s_oStage, !0);
        s_bMobile = isMobile();
        !1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(e) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        a = new CPreloader
    };
    this.preloaderReady = function() {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        l = !0
    };
    this.soundLoaded = function() {
        f++;
        a.refreshLoader(Math.floor(f / m * 100))
    };
    this._initSounds = function() {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "win",
            loop: !1,
            volume: 1,
            ingamename: "win"
        });
        m += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var e = 0; e < s_aSoundsInfo.length; e++) this.tryToLoadSound(s_aSoundsInfo[e], !1)
    };
    this.tryToLoadSound = function(e, g) {
        setTimeout(function() {
            s_aSounds[e.ingamename] = new Howl({
                src: [e.path + e.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: e.loop,
                volume: e.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function(h, n) {
                    for (var p = 0; p < s_aSoundsInfo.length; p++)
                        if (h === s_aSounds[s_aSoundsInfo[p].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[p], !0);
                            break
                        }
                },
                onplayerror: function(h) {
                    for (var n = 0; n < s_aSoundsInfo.length; n++)
                        if (h === s_aSounds[s_aSoundsInfo[n].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[n].ingamename].once("unlock", function() {
                                s_aSounds[s_aSoundsInfo[n].ingamename].play();
                                "soundtrack" === s_aSoundsInfo[n].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                            });
                            break
                        }
                }
            })
        }, g ? 200 : 0)
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play",
            "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_mod_menu", "./sprites/bg_mod_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("but_vs_man",
            "./sprites/vs_man_panel.png");
        s_oSpriteLibrary.addSprite("but_vs_pc", "./sprites/vs_pc_panel.png");
        s_oSpriteLibrary.addSprite("message", "./sprites/message.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_show", "./sprites/but_show.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_settings", "./sprites/but_settings.png");
        s_oSpriteLibrary.addSprite("board8",
            "./sprites/grid_8.png");
        s_oSpriteLibrary.addSprite("threat", "./sprites/threat.png");
        s_oSpriteLibrary.addSprite("highlight", "./sprites/highlight.png");
        s_oSpriteLibrary.addSprite("bg_turn", "./sprites/player_panel.png");
        s_oSpriteLibrary.addSprite("audio_icon_big", "./sprites/audio_icon_big.png");
        s_oSpriteLibrary.addSprite("black_bishop", "./sprites/pieces/black_bishop.png");
        s_oSpriteLibrary.addSprite("black_king", "./sprites/pieces/black_king.png");
        s_oSpriteLibrary.addSprite("black_knight", "./sprites/pieces/black_knight.png");
        s_oSpriteLibrary.addSprite("black_pawn", "./sprites/pieces/black_pawn.png");
        s_oSpriteLibrary.addSprite("black_queen", "./sprites/pieces/black_queen.png");
        s_oSpriteLibrary.addSprite("black_rook", "./sprites/pieces/black_rook.png");
        s_oSpriteLibrary.addSprite("white_bishop", "./sprites/pieces/white_bishop.png");
        s_oSpriteLibrary.addSprite("white_king", "./sprites/pieces/white_king.png");
        s_oSpriteLibrary.addSprite("white_knight", "./sprites/pieces/white_knight.png");
        s_oSpriteLibrary.addSprite("white_pawn", "./sprites/pieces/white_pawn.png");
        s_oSpriteLibrary.addSprite("white_queen", "./sprites/pieces/white_queen.png");
        s_oSpriteLibrary.addSprite("white_rook", "./sprites/pieces/white_rook.png");
        s_oSpriteLibrary.addSprite("white_king_marker", "./sprites/white_king_marker.png");
        s_oSpriteLibrary.addSprite("black_king_marker", "./sprites/black_king_marker.png");
        s_oSpriteLibrary.addSprite("score_panel", "./sprites/score_panel.png");
        s_oSpriteLibrary.addSprite("toggle_easy", "./sprites/toggle_easy.png");
        s_oSpriteLibrary.addSprite("toggle_medium", "./sprites/toggle_medium.png");
        s_oSpriteLibrary.addSprite("toggle_hard", "./sprites/toggle_hard.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        m += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        f++;
        a.refreshLoader(Math.floor(f / m * 100))
    };
    this._onPreloaderComplete = function() {
        try {
            checkMoreGames(s_szGameID, "middle-left", ["board", "multiplayer"], [], -1, "brown")
        } catch (e) {}
        a.unload();
        this.gotoMenu()
    };
    this._onAllImagesLoaded = function() {};
    this.gotoMenu = function() {
        try {
            showMoreGames()
        } catch (e) {}
        new CMenu;
        d = STATE_MENU
    };
    this.gotoModeMenu = function() {
        new CModeMenu;
        d = STATE_MENU
    };
    this.gotoGame = function(e) {
        s_iGameType = e;
        b = new CGame(c);
        d = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        d = STATE_HELP
    };
    this.stopUpdate = function() {
        l = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        l = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || !s_bAudioActive || s_bAdShown || Howler.mute(!1)
    };
    this._update = function(e) {
        if (!1 !== l) {
            var g = (new Date).getTime();
            s_iTimeElaps = g - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = g;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            d === STATE_GAME && b.update();
            s_oStage.update(e)
        }
    };
    s_oMain = this;
    var c = k;
    ENABLE_CHECK_ORIENTATION =
        k.check_orientation;
    ENABLE_FULLSCREEN = k.fullscreen;
    s_bAudioActive = k.audio_enable_on_startup;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !1,
    s_bFullscreen = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oStage, s_oMain, s_oSpriteLibrary, s_oCanvas, s_iGameType, s_aSounds, s_bWeightSquares = !1,
    s_bEdgeSensitive = !1;

function CTextButton(k, l, f, m, d, a, b, c) {
    var e, g, h, n, p, t, q;
    this._init = function(v, w, z, u, J, E, D, x) {
        e = [];
        g = [];
        var B = createBitmap(z),
            y = Math.ceil(D / 20);
        p = new createjs.Text(u, "bold " + D + "px " + J, "#000000");
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        var F = p.getBounds();
        p.x = z.width / 2 + y;
        p.y = Math.floor(z.height / 2) + F.height / 3 + y;
        n = new createjs.Text(u, "bold " + D + "px " + J, E);
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        F = n.getBounds();
        n.x = z.width / 2;
        n.y = Math.floor(z.height / 2) + F.height / 3;
        h = new createjs.Container;
        h.x = v;
        h.y = w;
        h.regX = z.width / 2;
        h.regY = z.height / 2;
        h.addChild(B, p, n);
        x.addChild(h);
        this._initListener()
    };
    this.unload = function() {
        h.off("mousedown", t);
        h.off("pressup", q);
        c.removeChild(h)
    };
    this.setVisible = function(v) {
        h.visible = v
    };
    this._initListener = function() {
        oParent = this;
        t = h.on("mousedown", this.buttonDown);
        q = h.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(v, w, z) {
        e[v] = w;
        g[v] = z
    };
    this.buttonRelease = function() {
        h.scaleX = 1;
        h.scaleY = 1;
        e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(g[ON_MOUSE_UP])
    };
    this.buttonDown =
        function() {
            h.scaleX = .9;
            h.scaleY = .9;
            e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])
        };
    this.setTextPosition = function(v) {
        n.y = v;
        p.y = v + 2
    };
    this.setPosition = function(v, w) {
        h.x = v;
        h.y = w
    };
    this.setX = function(v) {
        h.x = v
    };
    this.setY = function(v) {
        h.y = v
    };
    this.getButtonImage = function() {
        return h
    };
    this.getX = function() {
        return h.x
    };
    this.getY = function() {
        return h.y
    };
    this._init(k, l, f, m, d, a, b, c);
    return this
}

function CToggle(k, l, f, m, d) {
    var a, b, c, e, g = [],
        h, n, p, t;
    this._init = function(q, v, w, z) {
        b = !1;
        c = [];
        e = [];
        var u = new createjs.SpriteSheet({
            images: [w],
            frames: {
                width: w.width / 2,
                height: w.height,
                regX: w.width / 2 / 2,
                regY: w.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        a = z;
        h = createSprite(u, "state_" + a, w.width / 2 / 2, w.height / 2, w.width / 2, w.height);
        h.x = q;
        h.y = v;
        h.stop();
        d.addChild(h);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? h.off("mousedown", n) : (h.off("mousedown", n), h.off("mouseover", p));
        h.off("pressup",
            t);
        d.removeChild(h)
    };
    this._initListener = function() {
        s_bMobile ? n = h.on("mousedown", this.buttonDown) : (n = h.on("mousedown", this.buttonDown), p = h.on("mouseover", this.buttonOver));
        t = h.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(q, v, w) {
        c[q] = v;
        e[q] = w
    };
    this.addEventListenerWithParams = function(q, v, w, z) {
        c[q] = v;
        e[q] = w;
        g = z
    };
    this.setActive = function(q) {
        a = q;
        h.gotoAndStop("state_" + a)
    };
    this.buttonRelease = function() {
        h.scaleX = 1;
        h.scaleY = 1;
        playSound("click", 1, !1);
        a = !a;
        h.gotoAndStop("state_" + a);
        c[ON_MOUSE_UP] &&
            c[ON_MOUSE_UP].call(e[ON_MOUSE_UP], g)
    };
    this.buttonDown = function() {
        h.scaleX = .9;
        h.scaleY = .9;
        c[ON_MOUSE_DOWN] && c[ON_MOUSE_DOWN].call(e[ON_MOUSE_DOWN], g)
    };
    this.buttonOver = function(q) {
        s_bMobile || b || (q.target.cursor = "pointer")
    };
    this.stopAnimation = function() {
        h.rotation = 0;
        createjs.Tween.removeTweens(h)
    };
    this.setPosition = function(q, v) {
        h.x = q;
        h.y = v
    };
    this.setVisible = function(q) {
        h.visible = q
    };
    this.getButtonImage = function() {
        return h
    };
    this._init(k, l, f, m)
}

function CGfxButton(k, l, f, m) {
    var d, a, b, c, e, g, h, n;
    this._init = function(p, t, q, v) {
        d = !1;
        a = 1;
        b = [];
        c = [];
        e = createBitmap(q);
        e.x = p;
        e.y = t;
        e.scaleX = e.scaleY = a;
        e.regX = q.width / 2;
        e.regY = q.height / 2;
        v.addChild(e);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? e.off("mousedown", g) : (e.off("mousedown", g), e.off("mouseover", h));
        e.off("pressup", n);
        m.removeChild(e)
    };
    this.setVisible = function(p) {
        e.visible = p
    };
    this.setClickable = function(p) {
        d = !p
    };
    this._initListener = function() {
        s_bMobile ? g = e.on("mousedown", this.buttonDown) :
            (g = e.on("mousedown", this.buttonDown), h = e.on("mouseover", this.buttonOver));
        n = e.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(p, t, q) {
        b[p] = t;
        c[p] = q
    };
    this.buttonRelease = function() {
        d || (e.scaleX = a, e.scaleY = a, b[ON_MOUSE_UP] && b[ON_MOUSE_UP].call(c[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        d || (e.scaleX = .9 * a, e.scaleY = .9 * a, playSound("click", 1, !1), b[ON_MOUSE_DOWN] && b[ON_MOUSE_DOWN].call(c[ON_MOUSE_DOWN]))
    };
    this.buttonOver = function(p) {
        s_bMobile || d || (p.target.cursor = "pointer")
    };
    this.pulseAnimation =
        function() {
            createjs.Tween.get(e, {
                loop: !0
            }).to({
                scaleX: .9 * a,
                scaleY: .9 * a
            }, 850, createjs.Ease.quadOut).to({
                scaleX: a,
                scaleY: a
            }, 650, createjs.Ease.quadIn)
        };
    this.trembleAnimation = function() {
        createjs.Tween.get(e, {
            loop: !0
        }).to({
            rotation: 5
        }, 75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750)
    };
    this.stopAnimation = function() {
        e.rotation = 0;
        createjs.Tween.removeTweens(e)
    };
    this.setPosition = function(p, t) {
        e.x = p;
        e.y = t
    };
    this.setX = function(p) {
        e.x = p
    };
    this.setY =
        function(p) {
            e.y = p
        };
    this.getButtonImage = function() {
        return e
    };
    this.getX = function() {
        return e.x
    };
    this.getY = function() {
        return e.y
    };
    this._init(k, l, f, m);
    return this
}

function CMessage(k, l, f) {
    var m, d, a, b;
    this._init = function(e, g, h) {
        e === WHITE ? (m = -306, d = 1E3, a = 516) : (m = 306, d = -1E3, a = -506);
        b = new createjs.Container;
        b.x = m;
        b.y = d;
        s_bMobile && e === BLACK && s_iGameType === MODE_HUMAN && (b.rotation = 180);
        h.addChild(b);
        e = s_oSpriteLibrary.getSprite("message");
        h = createBitmap(e);
        h.regX = e.width / 2;
        h.regY = e.height / 2;
        b.addChild(h);
        e = e.width - 30;
        new CTLText(b, -(e / 2), -25, e, 50, 40, "center", "#ffffff", PRIMARY_FONT, 1, 2, 2, g, !0, !0, !1, !1);
        createjs.Tween.get(b).to({
            y: a
        }, 750, createjs.Ease.cubicOut)
    };
    this.unload =
        function() {
            f.removeChild(b)
        };
    this.removeAnimated = function() {
        b.x > CANVAS_WIDTH / 2 ? createjs.Tween.get(b).to({
            x: CANVAS_WIDTH + 200
        }, 500, createjs.Ease.cubicOut).call(function() {
            c.unload()
        }) : createjs.Tween.get(b).to({
            x: -200
        }, 500, createjs.Ease.cubicOut).call(function() {
            c.unload()
        })
    };
    var c = this;
    this._init(k, l, f)
}

function CMenu() {
    var k, l, f, m, d, a, b, c, e, g, h, n, p = null,
        t = null;
    this._init = function() {
        768 <= getSize("Width") && $("#div_display_id").css("display", "block");
        b = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(b);
        var q = s_oSpriteLibrary.getSprite("but_play");
        c = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 650, q, s_oStage);
        c.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        c.pulseAnimation();
        q = s_oSpriteLibrary.getSprite("but_credits");
        d = 10 + q.width / 2;
        a = q.height / 2 + 25;
        h = new CGfxButton(d,
            a, q, s_oStage);
        h.addEventListener(ON_MOUSE_UP, this._onCredits, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) q = s_oSpriteLibrary.getSprite("audio_icon"), k = CANVAS_WIDTH - q.height / 2 - 10, l = q.height / 2 + 25, g = new CToggle(k, l, q, s_bAudioActive, s_oStage), g.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        q = window.document;
        var v = q.documentElement;
        p = v.requestFullscreen || v.mozRequestFullScreen || v.webkitRequestFullScreen || v.msRequestFullscreen;
        t = q.exitFullscreen || q.mozCancelFullScreen || q.webkitExitFullscreen ||
            q.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (p = !1);
        p && screenfull.isEnabled && (q = s_oSpriteLibrary.getSprite("but_fullscreen"), f = d + q.width / 2 + 10, m = a, n = new CToggle(f, m, q, s_bFullscreen, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(e);
        createjs.Tween.get(e).to({
            alpha: 0
        }, 1E3).call(function() {
            e.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        c.unload();
        c = null;
        e.visible = !1;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) g.unload(), g = null;
        h.unload();
        p && screenfull.isEnabled && n.unload();
        s_oStage.removeChild(b);
        s_oMenu = b = null
    };
    this.refreshButtonPos = function(q, v) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || g.setPosition(k - q, v + l);
        h.setPosition(d + q, v + a);
        p && screenfull.isEnabled && n.setPosition(f + q, v + m)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButPlayRelease = function() {
        $("#div_display_id").css("display",
            "none");
        "undefined" !== typeof gdsdk && "undefined" !== gdsdk.showAd && gdsdk.showAd();
        try {
            hideMoreGames()
        } catch (q) {}
        this.unload();
        $(s_oMain).trigger("start_session");
        s_oMain.gotoModeMenu()
    };
    this._onCredits = function() {
        new CCreditsPanel
    };
    this.resetFullscreenBut = function() {
        p && screenfull.isEnabled && n.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? t.call(window.document) : p.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CModeMenu() {
    var k, l, f, m, d, a, b, c, e, g, h = null,
        n, p, t, q, v = null,
        w = null;
    this._init = function() {
        var z = createBitmap(s_oSpriteLibrary.getSprite("bg_mod_menu"));
        s_oStage.addChild(z);
        z = s_oSpriteLibrary.getSprite("but_exit");
        f = CANVAS_WIDTH - z.height / 2 - 10;
        m = z.height / 2 + 25;
        g = new CGfxButton(f, m, z, s_oStage);
        g.addEventListener(ON_MOUSE_UP, this._onExit, this);
        d = CANVAS_WIDTH - z.width / 2 - 125;
        a = z.height / 2 + 25;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) z = s_oSpriteLibrary.getSprite("audio_icon"), h = new CToggle(d, a, z,
            s_bAudioActive, s_oStage), h.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        z = window.document;
        var u = z.documentElement;
        v = u.requestFullscreen || u.mozRequestFullScreen || u.webkitRequestFullScreen || u.msRequestFullscreen;
        w = z.exitFullscreen || z.mozCancelFullScreen || z.webkitExitFullscreen || z.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (v = !1);
        v && screenfull.isEnabled && (z = s_oSpriteLibrary.getSprite("but_fullscreen"), k = z.width / 4 + 10, l = m, q = new CToggle(k, l, z, s_bFullscreen, s_oStage), q.addEventListener(ON_MOUSE_UP,
            this._onFullscreenRelease, this));
        new CTLText(s_oStage, CANVAS_WIDTH / 2 - 300, 300, 600, 200, 80, "center", "#ffffff", PRIMARY_FONT, 1, 2, 2, TEXT_MODE, !0, !0, !0, !1);
        z = s_oSpriteLibrary.getSprite("but_vs_man");
        c = new CGfxButton(CANVAS_WIDTH / 2, 800, z, s_oStage);
        c.addEventListener(ON_MOUSE_UP, this._onButHumanRelease, this);
        z = s_oSpriteLibrary.getSprite("message");
        u = createBitmap(z);
        u.regX = z.width / 2;
        u.regY = z.height / 2;
        u.x = CANVAS_WIDTH / 2;
        u.y = 1532;
        s_oStage.addChild(u);
        z = s_oSpriteLibrary.getSprite("toggle_easy");
        n = new CToggle(CANVAS_WIDTH /
            2 - 130 + 2, 1550, z, !1, s_oStage);
        n.addEventListenerWithParams(ON_MOUSE_UP, this._onDifficultyToggle, this, EASY_MODE);
        z = s_oSpriteLibrary.getSprite("toggle_medium");
        p = new CToggle(CANVAS_WIDTH / 2 + 2, 1550, z, !0, s_oStage);
        p.addEventListenerWithParams(ON_MOUSE_UP, this._onDifficultyToggle, this, MEDIUM_MODE);
        z = s_oSpriteLibrary.getSprite("toggle_hard");
        t = new CToggle(CANVAS_WIDTH / 2 + 132, 1550, z, !1, s_oStage);
        t.addEventListenerWithParams(ON_MOUSE_UP, this._onDifficultyToggle, this, HARD_MODE);
        z = s_oSpriteLibrary.getSprite("but_vs_pc");
        e = new CGfxButton(CANVAS_WIDTH / 2, 1300, z, s_oStage);
        e.addEventListener(ON_MOUSE_UP, this._onButComputerRelease, this);
        this._onDifficultyToggle(MEDIUM_MODE);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        c.unload();
        e.unload();
        g.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) h.unload(), h = null;
        v && screenfull.isEnabled && q.unload();
        s_oModeMenu = null;
        s_oStage.removeAllChildren()
    };
    this._onDifficultyToggle = function(z) {
        switch (z) {
            case EASY_MODE:
                n.setActive(!0);
                p.setActive(!1);
                t.setActive(!1);
                b = EASY_MODE;
                SEARCH_DEPTH = 1;
                break;
            case MEDIUM_MODE:
                n.setActive(!1);
                p.setActive(!0);
                t.setActive(!1);
                b = MEDIUM_MODE;
                SEARCH_DEPTH = 2;
                break;
            case HARD_MODE:
                n.setActive(!1), p.setActive(!1), t.setActive(!0), b = HARD_MODE, SEARCH_DEPTH = 3
        }
    };
    this.refreshButtonPos = function(z, u) {
        g.setPosition(f - z, u + m);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || h.setPosition(d - z, u + a);
        v && screenfull.isEnabled && q.setPosition(k + z, u + l)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut =
        function() {
            v && screenfull.isEnabled && q.setActive(s_bFullscreen)
        };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? w.call(window.document) : v.call(window.document.documentElement);
        sizeHandler()
    };
    this._onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    this._onButHumanRelease = function() {
        this.unload();
        s_oMain.gotoGame(MODE_HUMAN)
    };
    this._onButComputerRelease = function() {
        this.unload();
        s_oMain.gotoGame(MODE_COMPUTER, b)
    };
    s_oModeMenu = this;
    this._init()
}
var s_oModeMenu = null;

function CGame(k) {
    var l, f, m, d, a, b, c, e, g, h, n, p = null,
        t, q, v, w, z, u = null,
        J, E, D;
    this._init = function() {
        l = !0;
        f = !1;
        m = PLAYER_STATE_WAIT;
        d = WHITE;
        b = a = g = 0;
        e = c = START_SCORE;
        z = E = null;
        var x = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(x);
        t = new createjs.Container;
        t.x = CANVAS_WIDTH / 2;
        t.y = CANVAS_HEIGHT / 2;
        t.scaleX = t.scaleY = 1;
        s_oStage.addChild(t);
        q = new createjs.Container;
        q.x = CANVAS_WIDTH / 2;
        q.y = CANVAS_HEIGHT / 2;
        q.scaleX = q.scaleY = 1;
        s_oStage.addChild(q);
        v = new createjs.Container;
        v.x = CANVAS_WIDTH / 2;
        v.y =
            CANVAS_HEIGHT / 2;
        v.scaleX = v.scaleY = 1;
        s_oStage.addChild(v);
        w = new createjs.Container;
        w.x = CANVAS_WIDTH / 2;
        w.y = CANVAS_HEIGHT / 2;
        w.scaleX = w.scaleY = 1;
        s_oStage.addChild(w);
        n = new CInterface(q);
        x = s_oSpriteLibrary.getSprite("board8");
        J = new createBitmap(x);
        J.regX = x.width / 2;
        J.regY = x.height / 2;
        t.addChild(J);
        this._initBoard();
        this.setPieceDepth();
        new CMovesController(h);
        new CMovesControllerFaster(h);
        new CBoardStateController;
        n.activePlayer(d);
        D = new CAI;
        this.refreshSize()
    };
    this._initBoard = function() {
        var x = NUM_CELL,
            B = CELL_LENGTH,
            y = -BOARD_LENGTH / 2 + B / 2;
        h = [];
        for (var F = 0; F < x; F++) {
            h[F] = [];
            for (var R = 0; R < x; R++) h[F][R] = new CCell(y + R * B, y + F * B, null, F, R, t, v, w)
        }
        for (F = 0; F < x; F++) h[1][F].createPiece(g, BLACK, PAWN);
        for (F = 0; F < x; F++) h[6][F].createPiece(g, WHITE, PAWN);
        h[0][0].createPiece(g, BLACK, ROOK);
        h[0][7].createPiece(g, BLACK, ROOK);
        h[7][0].createPiece(g, WHITE, ROOK);
        h[7][7].createPiece(g, WHITE, ROOK);
        h[0][1].createPiece(g, BLACK, KNIGHT);
        h[0][6].createPiece(g, BLACK, KNIGHT);
        h[7][1].createPiece(g, WHITE, KNIGHT);
        h[7][6].createPiece(g,
            WHITE, KNIGHT);
        h[0][2].createPiece(g, BLACK, BISHOP);
        h[0][5].createPiece(g, BLACK, BISHOP);
        h[7][2].createPiece(g, WHITE, BISHOP);
        h[7][5].createPiece(g, WHITE, BISHOP);
        h[0][3].createPiece(g, BLACK, QUEEN);
        h[0][4].createPiece(g, BLACK, KING);
        h[7][3].createPiece(g, WHITE, QUEEN);
        h[7][4].createPiece(g, WHITE, KING)
    };
    this.refreshSize = function() {
        if (t && t.getBounds()) {
            t.getBounds();
            var x = CANVAS_WIDTH - 2 * s_iOffsetX - 60,
                B = CANVAS_HEIGHT - 2 * s_iOffsetY - 60 - EDGEBOARD_Y;
            var y = J.getBounds().width - 200;
            var F = J.getBounds().height - 200;
            y =
                zoomInCamera(t, x, B, y, F);
            q.scaleX = q.scaleY = y;
            v.scaleX = v.scaleY = y;
            w.scaleX = w.scaleY = y
        }
    };
    this.changeTurn = function() {
        null !== z && z.removeAnimated();
        f = !1;
        m = PLAYER_STATE_WAIT;
        if (d === WHITE) {
            d = BLACK;
            var x = this.checkGameState();
            s_iGameType === MODE_COMPUTER && this._playAI(x)
        } else d = WHITE, this.checkGameState();
        n.activePlayer(d)
    };
    this._playAI = function(x) {
        if (!x) {
            u = new CThinking;
            u.update();
            x = MIN_AI_THINKING + Math.random() * (MAX_AI_THINKING - MIN_AI_THINKING);
            var B = D.getMove();
            null !== B && setTimeout(function() {
                u.unload();
                u = null;
                s_oGame.cellClicked(B.sourcerow, B.sourcecol);
                s_oGame.cellClicked(B.destrow, B.destcol)
            }, x)
        }
    };
    this.cellClicked = function(x, B) {
        switch (m) {
            case PLAYER_STATE_WAIT:
                this._disableAllThreat();
                if (null !== h[x][B].getColor() && h[x][B].getColor() !== d) break;
                this._selectPiece(x, B);
                break;
            case PLAYER_STATE_SELECTED:
                E.getLogicPos().row === x && E.getLogicPos().col === B ? this._deselectPiece() : h[x][B].getColor() === d ? (this._deselectPiece(), this._selectPiece(x, B)) : h[x][B].isHighlight() ? this._checkLegalMove(x, B) : this._deselectPiece(),
                    playSound("click", 1, !1)
        }
    };
    this._checkLegalMove = function(x, B) {
        var y = s_oBoardStateController.copyBoard(h);
        s_oBoardStateController.moveCopiedPiece(y, E.getLogicPos().row, E.getLogicPos().col, x, B);
        y = s_oBoardStateController.findAllChecks(d, y);
        if (0 === y.length) {
            switch (s_oBoardStateController.getSpecialMoves(E.getLogicPos().row, E.getLogicPos().col, x, B, h)) {
                case BOARD_SPECIAL_CASTLING_RIGHT:
                    var F = h[E.getLogicPos().row][7];
                    y = h[E.getLogicPos().row][5];
                    F.shift(y);
                    break;
                case BOARD_SPECIAL_CASTLING_LEFT:
                    F = h[E.getLogicPos().row][0];
                    y = h[E.getLogicPos().row][3];
                    F.shift(y);
                    break;
                case BOARD_SPECIAL_ENPASSANT:
                    y = h[E.getLogicPos().row][B], y.eatUp(), y.setPiece(null)
            }
            E.setActive(!1);
            this._movePiece(x, B);
            this._deselectPiece();
            m = PLAYER_STATE_MOVING
        } else
            for (this._disableAllThreat(), F = 0; F < y.length; F++) h[y[F].getLogicPos().row][y[F].getLogicPos().col].threat(!0)
    };
    this._movePiece = function(x, B) {
        var y = h[x][B];
        E.move(y);
        null !== y.getColor() && y.eatUp()
    };
    this._selectPiece = function(x, B) {
        E = h[x][B];
        E.setActive(!0);
        for (var y = s_oMovesController.getMovesList(x,
                B, h), F = 0; F < y.length; F++) h[y[F].row][y[F].col].highlight(!0);
        m = PLAYER_STATE_SELECTED;
        playSound("click", 1, !1)
    };
    this._deselectPiece = function() {
        this._disableAllHighlight();
        E.setActive(!1);
        E = null;
        m = PLAYER_STATE_WAIT
    };
    this.onFinishMove = function() {
        this.setPieceDepth();
        var x = s_oBoardStateController.checkPromotion(h);
        null === x ? this.changeTurn() : s_iGameType === MODE_HUMAN ? new CPromoPanel(d, x) : d === BLACK ? (this.changePiece(QUEEN, x), this.changeTurn()) : new CPromoPanel(d, x)
    };
    this.checkGameState = function() {
        f = s_oBoardStateController.kingInCheck(d,
            h);
        var x = !1;
        switch (s_oBoardStateController.getState(d, h)) {
            case BOARD_STATE_STALEMATE:
                this.gameOver(DRAW);
                z = new CMessage(d, TEXT_STALEMATE, q);
                x = !0;
                break;
            case BOARD_STATE_CHECK:
                f = !0;
                for (var B = s_oBoardStateController.findAllChecks(d, h), y = 0; y < B.length; y++) h[B[y].getLogicPos().row][B[y].getLogicPos().col].threat(!0);
                z = new CMessage(d, TEXT_CHECK, q);
                break;
            case BOARD_STATE_CHECKMATE:
                x = s_oBoardStateController.getOtherOpponent(d), z = new CMessage(d, TEXT_CHECKMATE, q), this.gameOver(x), x = !0
        }
        return x
    };
    this.setPieceDepth =
        function() {
            for (var x = [], B = 0; B < v.children.length; B++) {
                var y = v.children[B];
                x.push({
                    height: y.y,
                    piece: y
                })
            }
            x.sort(this.compareHeight);
            for (B = y = 0; B < v.children.length; B++) v.setChildIndex(x[B].piece, y++)
        };
    this.compareHeight = function(x, B) {
        return x.height < B.height ? -1 : x.height > B.height ? 1 : 0
    };
    this.getCells = function() {
        return h
    };
    this.restartGame = function() {
        this.unload();
        this._init()
    };
    this.pauseGame = function(x) {
        l = !x
    };
    this.unload = function() {
        l = !1;
        n.unload();
        null !== p && p.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this._disableAllHighlight = function() {
        null !== E && E.setActive(!1);
        for (var x = 0; x < NUM_CELL; x++)
            for (var B = 0; B < NUM_CELL; B++) h[x][B].highlight(!1), h[x][B].threat(!1)
    };
    this._disableAllThreat = function() {
        for (var x = 0; x < NUM_CELL; x++)
            for (var B = 0; B < NUM_CELL; B++) h[x][B].threat(!1)
    };
    this.setAllVisible = function(x) {
        for (var B = 0; B < NUM_CELL; B++)
            for (var y = 0; y < NUM_CELL; y++) h[B][y].setVisible(x)
    };
    this.isCheck = function() {
        return f
    };
    this.onExitPromoPanel = function() {
        this.changeTurn()
    };
    this.changePiece = function(x, B) {
        h[B.row][B.col].changePiece(d,
            x)
    };
    this.getNewHistoryID = function() {
        return ++g
    };
    this.getLastHistoryID = function() {
        return g
    };
    this.onExit = function() {
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("show_interlevel_ad");
        s_oGame.unload();
        s_oMain.gotoMenu()
    };
    this._onExitHelp = function() {
        l = !0
    };
    this.gameOver = function(x) {
        l = !1;
        x === WHITE ? c = 0 : x === BLACK ? e = 0 : x === DRAW && (e = c = 0);
        p = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        setTimeout(function() {
            p.show(x, a, b, c, e);
            n.setInfoVisible(!1)
        }, 1E3)
    };
    this.update = function() {
        l && (null !== u && u.update(),
            this.setPieceDepth(), d === WHITE ? (b += s_iTimeElaps, n.refreshWhiteTime(b), e -= SCORE_DECREASE_PER_SECOND * s_iTimeElaps / 1E3, 0 > e && (e = 0), n.refreshWhiteScore(Math.floor(e))) : (a += s_iTimeElaps, n.refreshBlackTime(a), c -= SCORE_DECREASE_PER_SECOND * s_iTimeElaps / 1E3, 0 > c && (c = 0), n.refreshBlackScore(Math.floor(c))))
    };
    SHOW_SCORE = k.show_score;
    START_SCORE = k.start_score;
    SCORE_DECREASE_PER_SECOND = k.score_decrease_per_second;
    s_oGame = this;
    this._init()
}
var s_oGame;

function CInterface(k) {
    var l, f, m, d, a, b, c, e, g, h, n, p, t = null,
        q = null;
    this._init = function(v) {
        var w = s_oSpriteLibrary.getSprite("but_exit");
        m = CANVAS_WIDTH - w.height / 2 - 10;
        d = w.height / 2 + 25;
        c = new CGfxButton(m, d, w, s_oStage);
        c.addEventListener(ON_MOUSE_UP, this._onExit, this);
        var z = CANVAS_WIDTH - w.width / 2 - 125;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) w = s_oSpriteLibrary.getSprite("audio_icon"), l = z, f = 25 + w.height / 2, e = new CToggle(l, f, w, s_bAudioActive, s_oStage), e.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        z = window.document;
        w = z.documentElement;
        t = w.requestFullscreen || w.mozRequestFullScreen || w.webkitRequestFullScreen || w.msRequestFullscreen;
        q = z.exitFullscreen || z.mozCancelFullScreen || z.webkitExitFullscreen || z.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (t = !1);
        t && screenfull.isEnabled && (w = s_oSpriteLibrary.getSprite("but_fullscreen"), a = w.width / 4 + 10, b = w.height / 2 + 25, n = new CToggle(a, b, w, s_bFullscreen, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        w = s_oSpriteLibrary.getSprite("but_settings");
        p = new CGUIExpandible(m, d, w, s_oStage);
        p.addButton(c);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.addButton(e);
        t && screenfull.isEnabled && p.addButton(n);
        g = new CInfoTurn(220, 516, WHITE, v);
        h = new CInfoTurn(s_iGameType === MODE_HUMAN && s_bMobile ? -220 : -240, -516, BLACK, v);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        c.unload();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || e.unload();
        h.unload();
        g.unload();
        t && screenfull.isEnabled && n.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function(v,
        w) {
        p.refreshPos(v, w);
        s_oGame.refreshSize()
    };
    this.refreshWhiteTime = function(v) {
        50 < v && g.refreshTime(formatTime(v))
    };
    this.refreshBlackTime = function(v) {
        50 < v && h.refreshTime(formatTime(v))
    };
    this.refreshWhiteScore = function(v) {
        g.refreshScore(v)
    };
    this.refreshBlackScore = function(v) {
        h.refreshScore(v)
    };
    this.activePlayer = function(v) {
        v === WHITE ? (h.active(!1), g.active(!0)) : (g.active(!1), h.active(!0))
    };
    this.setInfoVisible = function(v) {
        g.setPanelVisible(v);
        h.setPanelVisible(v)
    };
    this._onButConfigRelease = function() {
        new CConfigPanel
    };
    this._onButRestartRelease = function() {
        s_oGame.restartGame()
    };
    this.onExitFromHelp = function() {
        null.unload()
    };
    this._onExit = function() {
        new CAreYouSurePanel(s_oGame.onExit)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        t && screenfull.isEnabled && n.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? q.call(window.document) : t.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(k);
    return this
}
var s_oInterface = null;

function CInfoTurn(k, l, f, m) {
    var d, a, b, c, e, g, h;
    this._init = function(n, p, t, q) {
        d = new createjs.Container;
        d.x = n;
        d.y = p;
        s_iGameType === MODE_HUMAN && t === BLACK && s_bMobile && (d.rotation = 180);
        q.addChild(d);
        g = new createjs.Container;
        n = -324;
        p = 30;
        t === WHITE ? (g.x = n, g.y = -p) : (g.x = -n + 20, s_iGameType === MODE_HUMAN && t === BLACK && s_bMobile ? (g.x = n, g.y = -p) : g.y = p);
        d.addChild(g);
        if (!SHOW_SCORE || s_iGameType === MODE_COMPUTER && t === BLACK) g.visible = !1;
        n = s_oSpriteLibrary.getSprite("score_panel");
        p = createBitmap(n);
        p.regX = n.width / 2;
        p.regY =
            n.height / 2;
        g.addChild(p);
        h = new createjs.Text(START_SCORE, " 30px " + PRIMARY_FONT, "#ffffff");
        h.x = 90;
        h.textAlign = "right";
        h.textBaseline = "middle";
        h.lineWidth = 200;
        g.addChild(h);
        n = s_oSpriteLibrary.getSprite("bg_turn");
        p = new createjs.SpriteSheet({
            images: [n],
            framerate: 58,
            frames: {
                width: n.width / 2,
                height: n.height,
                regX: n.width / 2 / 2,
                regY: n.height / 2
            },
            animations: {
                off: [0, 0, "on"],
                on: [1, 1, "off"]
            }
        });
        a = createSprite(p, 0, n.width / 2 / 2, n.height / 2, n.width / 2, n.height);
        a.stop();
        d.addChild(a);
        b = createSprite(p, 1, n.width / 2 / 2, n.height /
            2, n.width / 2, n.height);
        b.stop();
        b.x = 10;
        b.alpha = 0;
        d.addChild(b);
        n = s_oSpriteLibrary.getSprite(t + "_king_marker");
        e = createBitmap(n);
        e.x = 160;
        e.regX = n.width / 2;
        e.regY = n.height / 2;
        d.addChild(e);
        c = new createjs.Text("00:00", " 58px " + PRIMARY_FONT, "#ffffff");
        c.x = -65;
        c.y = 2;
        c.textBaseline = "middle";
        c.lineWidth = 200;
        d.addChild(c)
    };
    this.refreshTime = function(n) {
        c.text = n
    };
    this.refreshScore = function(n) {
        h.text = n
    };
    this.invert = function() {
        c.x = 0;
        e.x = -100
    };
    this.active = function(n) {
        n ? (createjs.Tween.get(a, {
            loop: !0
        }).to({
                alpha: 0
            },
            750, createjs.Ease.cubicOut).wait(2E3).to({
            alpha: 1
        }, 750, createjs.Ease.cubicIn), createjs.Tween.get(b, {
            loop: !0
        }).to({
            alpha: 1
        }, 750, createjs.Ease.cubicOut).wait(2E3).to({
            alpha: 0
        }, 750, createjs.Ease.cubicIn)) : (a.alpha = 1, b.alpha = 0, createjs.Tween.removeTweens(a), createjs.Tween.removeTweens(b))
    };
    this.unload = function() {
        m.removeChild(d)
    };
    this.setBgVisible = function(n) {
        a.visible = n;
        g.visible = n
    };
    this.setPanelVisible = function(n) {
        d.visible = n
    };
    this.setPawn = function(n) {
        e.gotoAndStop(n)
    };
    this._init(k, l, f, m)
}

function CThinking() {
    var k, l, f, m, d, a, b;
    this._init = function() {
        k = !0;
        l = 0;
        f = new createjs.Container;
        var c = (new createjs.Graphics).beginFill("rgba(0,0,0,0.3)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a = new createjs.Shape(c);
        b = a.on("click", function() {});
        m = new createjs.Text("", "bold 60px " + PRIMARY_FONT, "#ffffff");
        m.x = .5 * CANVAS_WIDTH;
        m.y = .5 * CANVAS_HEIGHT - 100;
        m.textAlign = "center";
        m.textBaseline = "alphabetic";
        m.lineWidth = 800;
        d = new createjs.Text("", "bold 180px " + PRIMARY_FONT, "#ffffff");
        d.x = .5 * CANVAS_WIDTH - 76;
        d.y = .5 * CANVAS_HEIGHT - 50;
        d.textAlign = "left";
        d.textBaseline = "alphabetic";
        d.lineWidth = 800;
        f.addChild(a, m, d);
        s_oStage.addChild(f)
    };
    this.unload = function() {
        k = !1;
        a.off("click", b);
        s_oStage.removeChild(f)
    };
    this.update = function() {
        k && (l += s_iTimeElaps, 0 <= l && l < TIME_LOOP_WAIT / 4 ? d.text = "" : l >= TIME_LOOP_WAIT / 4 && l < 2 * TIME_LOOP_WAIT / 4 ? d.text = "." : l >= 2 * TIME_LOOP_WAIT / 4 && l < 3 * TIME_LOOP_WAIT / 4 ? d.text = ".." : l >= 3 * TIME_LOOP_WAIT / 4 && l < TIME_LOOP_WAIT ? d.text = "..." : l = 0)
    };
    this._init()
}

function CEndPanel(k) {
    var l, f, m, d, a, b, c, e, g, h, n;
    this._init = function(p) {
        s_oGame.pauseGame(!0);
        f = new createjs.Container;
        f.alpha = 0;
        f.visible = !1;
        s_oStage.addChild(f);
        c = new createjs.Shape;
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c.alpha = .7;
        f.addChild(c);
        l = createBitmap(p);
        l.regX = p.width / 2;
        l.regY = p.height / 2;
        l.x = CANVAS_WIDTH / 2;
        l.y = CANVAS_HEIGHT / 2;
        f.addChild(l);
        var t = p.width - 120,
            q = 100,
            v = CANVAS_WIDTH / 2,
            w = CANVAS_HEIGHT / 2 - 300;
        a = new CTLText(f, v - t / 2, w - q / 2, t, q, 90, "center", "#ffffff",
            PRIMARY_FONT, 1, 2, 2, "", !0, !0, !1, !1);
        t = p.width - 320;
        q = 50;
        v = CANVAS_WIDTH / 2;
        w = CANVAS_HEIGHT / 2 - 230;
        b = new CTLText(f, v - t / 2, w - q / 2, t, q, 40, "center", "#ffffff", PRIMARY_FONT, 1, 2, 2, "", !0, !0, !1, !1);
        m = new CInfoTurn(CANVAS_WIDTH / 2, 1E3, BLACK, f);
        m.setBgVisible(!1);
        m.invert();
        d = new CInfoTurn(CANVAS_WIDTH / 2, 850, WHITE, f);
        d.setBgVisible(!1);
        d.invert();
        p = s_oSpriteLibrary.getSprite("but_restart");
        h = new CGfxButton(CANVAS_WIDTH / 2 - 180, CANVAS_HEIGHT / 2 + 250, p, f);
        h.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        p = s_oSpriteLibrary.getSprite("but_home");
        e = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 250, p, f);
        e.addEventListener(ON_MOUSE_UP, this._onExit, this);
        p = s_oSpriteLibrary.getSprite("but_show");
        g = new CGfxButton(CANVAS_WIDTH / 2 + 180, CANVAS_HEIGHT / 2 + 250, p, f);
        g.addEventListener(ON_MOUSE_UP, this._onShow, this)
    };
    this.unload = function() {
        f.off("mousedown", n)
    };
    this._initListener = function() {
        n = f.on("mousedown", this._onExit)
    };
    this.show = function(p, t, q, v, w) {
        $("#div_display_id").css("display", "block");
        m.refreshTime(formatTime(t));
        d.refreshTime(formatTime(q));
        p === WHITE ? (playSound("win", 1, !1), a.refreshText(TEXT_CHECKMATE), b.refreshText(sprintf(TEXT_WINS, TEXT_WHITE))) : p === BLACK ? (s_iGameType === MODE_HUMAN ? playSound("win", 1, !1) : playSound("game_over", 1, !1), a.refreshText(TEXT_CHECKMATE), b.refreshText(sprintf(TEXT_WINS, TEXT_BLACK))) : p === DRAW && (playSound("game_over", 1, !1), a.refreshText(TEXT_STALEMATE), b.refreshText(TEXT_DRAW));
        f.visible = !0;
        createjs.Tween.get(f).to({
            alpha: 1
        }, 500);
        $(s_oMain).trigger("save_score", [p, t, q, s_iGameType, w, v]);
        $(s_oMain).trigger("share_event", [w, s_iGameType, p])
    };
    this._onRestart = function() {
        $("#div_display_id").css("display", "none");
        s_oGame.restartGame()
    };
    this._onExit = function() {
        $("#div_display_id").css("display", "none");
        f.off("mousedown", n);
        m.unload();
        d.unload();
        s_oStage.removeChild(f);
        e.unload();
        g.unload();
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("show_interlevel_ad");
        s_oGame.onExit()
    };
    this._onShow = function() {
        f.visible = !1;
        $(s_oMain).trigger("end_session")
    };
    this._init(k);
    return this
}

function CCell(k, l, f, m, d, a, b, c) {
    var e, g, h, n, p, t, q, v;
    this._init = function(w, z, u, J, E, D, x, B) {
        e = J;
        g = E;
        h = new createjs.Container;
        h.x = w;
        h.y = z;
        D.addChild(h);
        n = null;
        w = s_oSpriteLibrary.getSprite("highlight");
        q = createBitmap(w);
        q.regX = w.width / 2;
        q.regY = w.height / 2;
        q.alpha = .8;
        q.visible = !1;
        h.addChild(q);
        w = s_oSpriteLibrary.getSprite("threat");
        t = createBitmap(w);
        t.regX = w.width / 2;
        t.regY = w.height / 2;
        t.visible = !1;
        h.addChild(t);
        p = new createjs.Shape;
        p.graphics.beginFill("rgba(158,0,0,0.01)").drawRect(-CELL_LENGTH / 2, -CELL_LENGTH /
            2, CELL_LENGTH, CELL_LENGTH);
        v = p.on("mousedown", this._onCellClick);
        h.addChild(p)
    };
    this.unload = function() {
        a.removeChild(h);
        p.off("mousedown", v)
    };
    this.setClickableArea = function(w) {
        p.visible = w
    };
    this.changePiece = function(w, z) {
        var u = n.getHistory();
        n.unload();
        n = new CPiece(k, l, w, z, b, c);
        n.setHistory(u);
        n.setNewMoveInHistory(s_oGame.getNewHistoryID(), m, d, z)
    };
    this.createPiece = function(w, z, u) {
        n = new CPiece(k, l, z, u, b, c);
        n.setNewMoveInHistory(w, m, d, u)
    };
    this.getPieceContainer = function() {
        return n.getContainer()
    };
    this.setPiece =
        function(w) {
            n = w
        };
    this.getType = function() {
        return null !== n ? n.getType() : null
    };
    this.getColor = function() {
        return null !== n ? n.getColor() : null
    };
    this.getPieceHistory = function() {
        return null !== n ? n.getHistory() : []
    };
    this.threat = function(w) {
        t.visible = w
    };
    this.highlight = function(w) {
        q.visible = w
    };
    this.isHighlight = function() {
        return q.visible
    };
    this._onCellClick = function() {
        s_oGame.cellClicked(e, g)
    };
    this.setActive = function(w) {
        null !== n && n.setActive(w)
    };
    this.setVisible = function(w) {
        h.visible = w
    };
    this.getPos = function() {
        return {
            x: k,
            y: l
        }
    };
    this.getLogicPos = function() {
        return {
            row: m,
            col: d
        }
    };
    this.move = function(w) {
        n.move(w);
        n = null
    };
    this.shift = function(w) {
        n.shift(w);
        n = null
    };
    this.eatUp = function() {
        n.disappear()
    };
    this._init(k, l, f, m, d, a, b, c)
}

function CPiece(k, l, f, m, d, a) {
    var b, c, e, g;
    this._init = function(n, p, t, q, v, w) {
        b = t;
        c = q;
        e = [];
        t = this._getSpriteName();
        t = s_oSpriteLibrary.getSprite(t);
        q = t.width / 2;
        w = t.height;
        t = new createjs.SpriteSheet({
            images: [t],
            frames: {
                width: q,
                height: w,
                regX: q / 2,
                regY: w - 40
            },
            animations: {
                idle: [0],
                lit: [1]
            }
        });
        g = createSprite(t, "idle", 0, 0, 0, 0);
        g.x = n;
        g.y = p;
        v.addChild(g)
    };
    this.unload = function() {
        d.removeChild(g)
    };
    this._getSpriteName = function() {
        var n = f === WHITE ? "white" : "black";
        switch (m) {
            case PAWN:
                var p = "pawn";
                break;
            case ROOK:
                p = "rook";
                break;
            case KNIGHT:
                p = "knight";
                break;
            case BISHOP:
                p = "bishop";
                break;
            case QUEEN:
                p = "queen";
                break;
            case KING:
                p = "king"
        }
        return n + "_" + p
    };
    this.getContainer = function() {
        return g
    };
    this.getType = function() {
        return c
    };
    this.getColor = function() {
        return b
    };
    this.setPos = function(n, p) {
        g.x = n;
        g.y = p
    };
    this.getPos = function() {
        return {
            x: g.x,
            y: g.y
        }
    };
    this.setNewMoveInHistory = function(n, p, t, q) {
        e.push({
            id: n,
            row: p,
            col: t,
            piece: q
        })
    };
    this.setHistory = function(n) {
        e = [];
        for (var p = 0; p < n.length; p++) e[p] = n[p]
    };
    this.getHistory = function() {
        return e
    };
    this.setActive = function(n) {
        n ? g.gotoAndStop("lit") : g.gotoAndStop("idle")
    };
    this.move = function(n) {
        var p = n.getPos();
        c === KNIGHT ? (a.addChild(g), (new createjs.Tween.get(g)).to({
            scaleX: 1.3,
            scaleY: 1.3
        }, .4 * TIME_MOVE, createjs.Ease.cubicOut).to({
            scaleX: 1,
            scaleY: 1
        }, 600)) : c === PAWN && s_oBoardStateController.resetStall();
        (new createjs.Tween.get(g)).to({
            x: p.x,
            y: p.y
        }, TIME_MOVE, createjs.Ease.cubicOut).call(function() {
            s_oBoardStateController.increaseStallCount();
            c === KNIGHT && d.addChild(g);
            n.setPiece(h);
            h.setNewMoveInHistory(s_oGame.getNewHistoryID(),
                n.getLogicPos().row, n.getLogicPos().col, c);
            s_oGame.onFinishMove()
        })
    };
    this.shift = function(n) {
        var p = n.getPos();
        (new createjs.Tween.get(g)).to({
            x: p.x,
            y: p.y
        }, 1E3, createjs.Ease.cubicOut).call(function() {
            n.setPiece(h);
            h.setNewMoveInHistory(s_oGame.getNewHistoryID(), n.getLogicPos().row, n.getLogicPos().col, c)
        })
    };
    this.disappear = function() {
        (new createjs.Tween.get(g)).to({
            alpha: 0
        }, 1E3).call(function() {
            s_oBoardStateController.resetStall();
            h.unload()
        })
    };
    var h = this;
    this._init(k, l, f, m, d, a)
}
var DIR_TOPRIGHT = "DIR_TOPRIGHT",
    DIR_RIGHT = "DIR_RIGHT",
    DIR_BOTRIGHT = "DIR_BOTRIGHT",
    DIR_TOPLEFT = "DIR_TOPLEFT",
    DIR_LEFT = "DIR_LEFT",
    DIR_BOTLEFT = "DIR_BOTLEFT",
    DIR_TOP = "DIR_TOP",
    DIR_BOT = "DIR_BOT";

function CMovesController(k) {
    var l, f, m, d;
    this._init = function(a) {
        l = a.length;
        f = a[0].length;
        d = [];
        m = [];
        for (a = 0; a < l; a++) {
            m[a] = [];
            for (var b = 0; b < f; b++) m[a][b] = []
        }
        this._buildMap()
    };
    this._buildMap = function() {
        for (var a = 0; a < l; a++)
            for (var b = 0; b < f; b++) m[a][b][DIR_TOPRIGHT] = this._setNeighbor(a, b, DIR_TOPRIGHT), m[a][b][DIR_RIGHT] = this._setNeighbor(a, b, DIR_RIGHT), m[a][b][DIR_BOTRIGHT] = this._setNeighbor(a, b, DIR_BOTRIGHT), m[a][b][DIR_TOPLEFT] = this._setNeighbor(a, b, DIR_TOPLEFT), m[a][b][DIR_LEFT] = this._setNeighbor(a,
                b, DIR_LEFT), m[a][b][DIR_BOTLEFT] = this._setNeighbor(a, b, DIR_BOTLEFT), m[a][b][DIR_TOP] = this._setNeighbor(a, b, DIR_TOP), m[a][b][DIR_BOT] = this._setNeighbor(a, b, DIR_BOT)
    };
    this._setNeighbor = function(a, b, c) {
        var e = null;
        switch (c) {
            case DIR_TOPRIGHT:
                0 < a && b < f - 1 && (e = {
                    row: a - 1,
                    col: b + 1
                });
                break;
            case DIR_RIGHT:
                b < f - 1 && (e = {
                    row: a,
                    col: b + 1
                });
                break;
            case DIR_BOTRIGHT:
                a < l - 1 && b < f - 1 && (e = {
                    row: a + 1,
                    col: b + 1
                });
                break;
            case DIR_TOPLEFT:
                0 < a && 0 < b && (e = {
                    row: a - 1,
                    col: b - 1
                });
                break;
            case DIR_LEFT:
                0 < b && (e = {
                    row: a,
                    col: b - 1
                });
                break;
            case DIR_BOTLEFT:
                a <
                    l - 1 && 0 < b && (e = {
                        row: a + 1,
                        col: b - 1
                    });
                break;
            case DIR_TOP:
                0 < a && (e = {
                    row: a - 1,
                    col: b
                });
                break;
            case DIR_BOT:
                a < l - 1 && (e = {
                    row: a + 1,
                    col: b
                })
        }
        return e
    };
    this._getNeighborByDir = function(a, b, c) {
        return m[a][b][c]
    };
    this._getAllNeighbor = function(a, b) {
        var c = [],
            e;
        for (e in m[a][b]) null !== m[a][b][e] && c.push(m[a][b][e]);
        return c
    };
    this._getMainDiagonal = function(a, b, c) {
        var e = [],
            g = c[a][b].getColor();
        this._findInDirection(a, b, DIR_BOTRIGHT, e, 99, g, c);
        this._findInDirection(a, b, DIR_TOPLEFT, e, 99, g, c);
        return e
    };
    this._getSecondDiagonal = function(a,
        b, c) {
        var e = [],
            g = c[a][b].getColor();
        this._findInDirection(a, b, DIR_BOTLEFT, e, 99, g, c);
        this._findInDirection(a, b, DIR_TOPRIGHT, e, 99, g, c);
        return e
    };
    this._getRow = function(a, b, c) {
        var e = [],
            g = c[a][b].getColor();
        this._findInDirection(a, b, DIR_LEFT, e, 99, g, c);
        this._findInDirection(a, b, DIR_RIGHT, e, 99, g, c);
        return e
    };
    this._getCol = function(a, b, c) {
        var e = [],
            g = c[a][b].getColor();
        this._findInDirection(a, b, DIR_TOP, e, 99, g, c);
        this._findInDirection(a, b, DIR_BOT, e, 99, g, c);
        return e
    };
    this._getStraightByDirAndRadius = function(a,
        b, c, e, g) {
        var h = [];
        d = [];
        d.push({
            radius: e,
            direction: null
        });
        var n = g[a][b].getColor();
        this._findInDirection(a, b, c, h, e, n, g);
        return h
    };
    this._getStraightRowByRadius = function(a, b, c) {
        var e = [];
        d = [];
        d.push({
            radius: c,
            direction: null
        });
        this._findInDirection(a, b, DIR_LEFT, e, c);
        this._findInDirection(a, b, DIR_RIGHT, e, c);
        return e
    };
    this._getStraightColByRadius = function(a, b, c) {
        var e = [];
        d = [];
        d.push({
            radius: c,
            direction: null
        });
        this._findInDirection(a, b, DIR_TOP, e, c);
        this._findInDirection(a, b, DIR_BOT, e, c);
        return e
    };
    this._findInDirection =
        function(a, b, c, e, g, h, n) {
            --g;
            if (null !== m[a][b][c] && 0 <= g) {
                var p = m[a][b][c].row;
                a = m[a][b][c].col;
                h ? (b = n[p][a].getColor(), b !== h && (null === b ? (e.push({
                    row: p,
                    col: a
                }), d.push({
                    radius: g,
                    direction: c
                }), this._findInDirection(p, a, c, e, g, h, n)) : (e.push({
                    row: p,
                    col: a
                }), d.push({
                    radius: g,
                    direction: c
                })))) : (e.push({
                    row: p,
                    col: a
                }), d.push({
                    radius: g,
                    direction: c
                }), this._findInDirection(p, a, c, e, g, h, n))
            }
        };
    this._findTPos = function(a, b, c) {
        var e = [];
        a = m[a][b][c];
        null !== a && (a = m[a.row][a.col][c], null !== a && (e = c === DIR_TOP || c === DIR_BOT ?
            this._getStraightRowByRadius(a.row, a.col, 1) : this._getStraightColByRadius(a.row, a.col, 1)));
        return e
    };
    this.getMovesList = function(a, b, c, e) {
        var g = [];
        switch (c[a][b].getType()) {
            case PAWN:
                g = this.getPawnMove(a, b, c);
                break;
            case ROOK:
                g = this.getRookMove(a, b, c);
                break;
            case KNIGHT:
                g = this.getKnightMove(a, b, c);
                break;
            case BISHOP:
                g = this.getBishopMove(a, b, c);
                break;
            case QUEEN:
                g = this.getQueenMove(a, b, c);
                break;
            case KING:
                g = e ? this.getSimpleKingMove(a, b, c) : this.getKingMove(a, b, c)
        }
        return g
    };
    this.getPawnMove = function(a, b, c) {
        var e =
            c[a][b].getColor(),
            g = [];
        if (e === WHITE) {
            var h = 6 === a ? this._getStraightByDirAndRadius(a, b, DIR_TOP, 2, c) : this._getStraightByDirAndRadius(a, b, DIR_TOP, 1, c);
            var n = this._getNeighborByDir(a, b, DIR_TOPRIGHT);
            null !== n && c[n.row][n.col].getColor() === BLACK && g.push(n);
            n = this._getNeighborByDir(a, b, DIR_TOPLEFT);
            null !== n && c[n.row][n.col].getColor() === BLACK && g.push(n);
            if (3 === a)
                for (a = this._getEnPassant(WHITE, a, b, c), b = 0; b < a.length; b++) g.push(a[b])
        } else if (h = 1 === a ? this._getStraightByDirAndRadius(a, b, DIR_BOT, 2, c) : this._getStraightByDirAndRadius(a,
                b, DIR_BOT, 1, c), n = this._getNeighborByDir(a, b, DIR_BOTRIGHT), null !== n && c[n.row][n.col].getColor() === WHITE && g.push(n), n = this._getNeighborByDir(a, b, DIR_BOTLEFT), null !== n && c[n.row][n.col].getColor() === WHITE && g.push(n), 4 === a)
            for (a = this._getEnPassant(BLACK, a, b, c), b = 0; b < a.length; b++) g.push(a[b]);
        for (b = h.length - 1; 0 <= b; b--) null !== c[h[b].row][h[b].col].getColor() && c[h[b].row][h[b].col].getColor() !== e && h.splice(b, 1);
        for (b = 0; b < g.length; b++) h.push(g[b]);
        return h
    };
    this.getRookMove = function(a, b, c) {
        var e = this._getRow(a,
            b, c);
        a = this._getCol(a, b, c);
        b = [];
        for (c = 0; c < e.length; c++) b.push(e[c]);
        for (c = 0; c < a.length; c++) b.push(a[c]);
        return b
    };
    this.getKnightMove = function(a, b, c) {
        var e = [];
        e.push(this._findTPos(a, b, DIR_TOP));
        e.push(this._findTPos(a, b, DIR_RIGHT));
        e.push(this._findTPos(a, b, DIR_BOT));
        e.push(this._findTPos(a, b, DIR_LEFT));
        for (var g = [], h = 0; h < e.length; h++)
            for (var n = 0; n < e[h].length; n++) g.push(e[h][n]);
        a = c[a][b].getColor();
        for (h = g.length - 1; 0 <= h; h--) c[g[h].row][g[h].col].getColor() === a && g.splice(h, 1);
        return g
    };
    this.getBishopMove =
        function(a, b, c) {
            var e = this._getMainDiagonal(a, b, c);
            a = this._getSecondDiagonal(a, b, c);
            b = [];
            for (c = 0; c < e.length; c++) b.push(e[c]);
            for (c = 0; c < a.length; c++) b.push(a[c]);
            return b
        };
    this.getQueenMove = function(a, b, c) {
        var e = this.getRookMove(a, b, c);
        a = this.getBishopMove(a, b, c);
        b = [];
        for (c = 0; c < e.length; c++) b.push(e[c]);
        for (c = 0; c < a.length; c++) b.push(a[c]);
        return b
    };
    this.getSimpleKingMove = function(a, b, c) {
        var e = this._getAllNeighbor(a, b);
        a = c[a][b].getColor();
        for (b = e.length - 1; 0 <= b; b--) c[e[b].row][e[b].col].getColor() ===
            a && e.splice(b, 1);
        return e
    };
    this.getKingMove = function(a, b, c) {
        var e = this._getAllNeighbor(a, b),
            g = c[a][b];
        if (1 === g.getPieceHistory().length && !s_oGame.isCheck()) {
            var h = !0;
            1 === c[a][7].getPieceHistory().length ? (null !== c[a][6].getColor() && (h = !1), null !== c[a][5].getColor() && (h = !1)) : h = !1;
            if (h) {
                h = {
                    row: a,
                    col: 6
                };
                var n = s_oBoardStateController.checkCastlingBlockFromOpponent(BOARD_SPECIAL_CASTLING_RIGHT, g.getColor(), c);
                0 === n.length && e.push(h)
            }
            h = !0;
            1 === c[a][0].getPieceHistory().length ? (null !== c[a][1].getColor() && (h = !1), null !== c[a][2].getColor() && (h = !1), null !== c[a][3].getColor() && (h = !1)) : h = !1;
            h && (h = {
                row: a,
                col: 2
            }, n = s_oBoardStateController.checkCastlingBlockFromOpponent(BOARD_SPECIAL_CASTLING_LEFT, g.getColor(), c), 0 === n.length && e.push(h))
        }
        a = c[a][b].getColor();
        for (b = e.length - 1; 0 <= b; b--) c[e[b].row][e[b].col].getColor() === a && e.splice(b, 1);
        return e
    };
    this._getEnPassant = function(a, b, c, e) {
        var g = [],
            h = s_oBoardStateController.getOtherOpponent(a),
            n = this._getNeighborByDir(b, c, DIR_RIGHT);
        null !== n && (n = e[n.row][n.col], n.getColor() ===
            h && n.getType() === PAWN && (n = n.getPieceHistory(), e[b][c].getPieceHistory(), 2 === n.length && n[1].id === s_oGame.getLastHistoryID() && (a === WHITE ? g.push(this._getNeighborByDir(b, c, DIR_TOPRIGHT)) : g.push(this._getNeighborByDir(b, c, DIR_BOTRIGHT)))));
        n = this._getNeighborByDir(b, c, DIR_LEFT);
        null !== n && (n = e[n.row][n.col], n.getColor() === h && n.getType() === PAWN && (n = n.getPieceHistory(), e[b][c].getPieceHistory(), 2 === n.length && n[1].id === s_oGame.getLastHistoryID() && (a === WHITE ? g.push(this._getNeighborByDir(b, c, DIR_TOPLEFT)) :
            g.push(this._getNeighborByDir(b, c, DIR_BOTLEFT)))));
        return g
    };
    this._init(k);
    s_oMovesController = this
}
var s_oMovesController;

function CBoardStateController() {
    var k;
    this._init = function() {
        k = 0
    };
    this.getOtherOpponent = function(l) {
        return l === WHITE ? BLACK : WHITE
    };
    this.moveCopiedPiece = function(l, f, m, d, a) {
        var b = l[f][m],
            c = l[d][a];
        switch (this.getSpecialMoves(f, m, d, a, l)) {
            case BOARD_SPECIAL_CASTLING_RIGHT:
                var e = l[f][7];
                l = l[f][5];
                l.setCell(b.getColor(), ROOK, d, a, b.getPieceHistory());
                e.setCell(null, null, f, m, []);
                break;
            case BOARD_SPECIAL_CASTLING_LEFT:
                e = l[f][0];
                l = l[f][3];
                l.setCell(b.getColor(), ROOK, d, a, b.getPieceHistory());
                e.setCell(null,
                    null, f, m, []);
                break;
            case BOARD_SPECIAL_ENPASSANT:
                l[f][a].setCell(null, null, f, a, [])
        }
        c.setCell(b.getColor(), b.getType(), d, a, b.getPieceHistory());
        b.setCell(null, null, f, m, [])
    };
    this.copyBoard = function(l) {
        for (var f = [], m = 0; m < l.length; m++) {
            f[m] = [];
            for (var d = 0; d < l[m].length; d++) f[m][d] = new CCopiedCell(l[m][d])
        }
        return f
    };
    this.getState = function(l, f) {
        if (0 !== this.findAllChecks(l, f).length) return this.findCheckMate(l, f) ? BOARD_STATE_CHECKMATE : BOARD_STATE_CHECK;
        if (this.findStaleMate(l, f)) return BOARD_STATE_STALEMATE
    };
    this.findCheckMate = function(l, f) {
        for (var m = [], d = 0; d < f.length; d++)
            for (var a = 0; a < f[d].length; a++) f[d][a].getColor() === l && m.push(f[d][a]);
        for (d = 0; d < m.length; d++) {
            var b = s_oMovesController.getMovesList(m[d].getLogicPos().row, m[d].getLogicPos().col, f);
            for (a = 0; a < b.length; a++) {
                var c = this.copyBoard(f);
                this.moveCopiedPiece(c, m[d].getLogicPos().row, m[d].getLogicPos().col, b[a].row, b[a].col);
                if (0 === this.findAllChecks(l, c).length) return !1
            }
        }
        return !0
    };
    this.findAllChecks = function(l, f) {
        var m = this.getOtherOpponent(l);
        m = this._getAllMovesList(m, f);
        for (var d = [], a = 0; a < m.length; a++)
            for (var b = 0; b < m[a].list.length; b++) {
                var c = m[a].list[b];
                f[c.row][c.col].getColor() === l && f[c.row][c.col].getType() === KING && d.push(m[a].piece)
            }
        return d
    };
    this.findStaleMate = function(l, f) {
        var m = this.findCheckMate(l, f);
        if (!m) {
            for (var d = [], a = [], b = 0; b < f.length; b++)
                for (var c = 0; c < f[b].length; c++) f[b][c].getColor() === WHITE && a.push(f[b][c].getType()), f[b][c].getColor() === BLACK && d.push(f[b][c].getType());
            if (1 === d.length && 1 === a.length) return !0;
            if (1 ===
                d.length && 2 === a.length || 2 === d.length && 1 === a.length)
                if (b = a.indexOf(BISHOP) && d.indexOf(BISHOP), c = a.indexOf(KNIGHT) && d.indexOf(KNIGHT), 0 <= b || 0 <= c) return !0;
            if (2 === d.length && 2 === a.length && (b = a.indexOf(BISHOP) || d.indexOf(BISHOP), 0 <= b)) {
                d = [];
                for (b = 0; b < f.length; b++)
                    for (c = 0; c < f[b].length; c++) f[b][c].getType() === BISHOP && d.push((b + c) % 2);
                if (d[0] === d[1]) return !0
            }
        }
        k === DRAW_COUNTER && (m = !0);
        return m
    };
    this.kingInCheck = function(l, f) {
        for (var m = this.getOtherOpponent(l), d = 0; d < f.length; d++)
            for (var a = 0; a < f[d].length; a++)
                if (f[d][a].getColor() ===
                    m) {
                    var b = f[d][a].getLogicPos();
                    b = s_oMovesController.getMovesList(b.row, b.col, f);
                    for (var c = 0; c < b.length; c++) {
                        var e = b[c];
                        if (f[e.row][e.col].getColor() === l && f[e.row][e.col].getType() === KING) return !0
                    }
                }
        return !1
    };
    this.increaseStallCount = function() {
        k++
    };
    this.resetStall = function() {
        k = 0
    };
    this.checkPromotion = function(l) {
        for (var f = null, m = 0; m < l.length; m++) l[0][m].getType() === PAWN ? f = {
            row: 0,
            col: m
        } : l[7][m].getType() === PAWN && (f = {
            row: 7,
            col: m
        });
        return f
    };
    this.getSpecialMoves = function(l, f, m, d, a) {
        l = a[l][f].getType();
        if (l === KING) {
            f -= d;
            if (-2 === f) return BOARD_SPECIAL_CASTLING_RIGHT;
            if (2 === f) return BOARD_SPECIAL_CASTLING_LEFT
        } else if (l === PAWN && f !== d && null === a[m][d].getType()) return BOARD_SPECIAL_ENPASSANT
    };
    this._getAllMovesList = function(l, f) {
        for (var m = [], d = 0; d < f.length; d++)
            for (var a = 0; a < f[d].length; a++) f[d][a].getColor() === l && m.push(f[d][a]);
        a = [];
        for (d = 0; d < m.length; d++) {
            var b = m[d].getLogicPos();
            a[d] = {
                list: s_oMovesController.getMovesList(b.row, b.col, f, !0),
                piece: m[d]
            }
        }
        return a
    };
    this._getPiecesThatMatchAList = function(l,
        f) {
        for (var m = [], d = 0; d < l.length; d++) {
            for (var a = !1, b = 0; b < l[d].list.length; b++)
                for (var c = l[d].list[b], e = 0; e < f.length; e++) c.row === f[e].row && c.col === f[e].col && (a = !0);
            a && m.push(l[d].piece)
        }
        return m
    };
    this.checkCastlingBlockFromOpponent = function(l, f, m) {
        var d = f === BLACK ? 0 : 7;
        f = this.getOtherOpponent(f);
        m = this._getAllMovesList(f, m);
        f = [];
        switch (l) {
            case BOARD_SPECIAL_CASTLING_RIGHT:
                l = [{
                    row: d,
                    col: 5
                }];
                f = this._getPiecesThatMatchAList(m, l);
                break;
            case BOARD_SPECIAL_CASTLING_LEFT:
                l = [{
                    row: d,
                    col: 3
                }], f = this._getPiecesThatMatchAList(m,
                    l)
        }
        return f
    };
    this._init();
    s_oBoardStateController = this
}
var s_oBoardStateController;

function CCopiedCell(k) {
    var l, f, m, d, a;
    this._init = function(b) {
        l = b.getColor();
        f = b.getType();
        d = b.getLogicPos().row;
        a = b.getLogicPos().col;
        b = b.getPieceHistory();
        m = [];
        for (var c = 0; c < b.length; c++) m[c] = b[c]
    };
    this.setCell = function(b, c, e, g, h) {
        l = b;
        f = c;
        d = e;
        a = g;
        for (b = 0; b < h.length; b++) m[b] = h[b]
    };
    this.setColor = function(b) {
        l = b
    };
    this.setType = function(b) {
        f = b
    };
    this.getColor = function() {
        return l
    };
    this.getType = function() {
        return f
    };
    this.getLogicPos = function() {
        return {
            row: d,
            col: a
        }
    };
    this.getPieceHistory = function() {
        return m
    };
    this._init(k)
}

function CPromoPanel(k, l) {
    var f, m, d, a, b, c;
    this._init = function(g, h) {
        d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = 0;
        s_oStage.addChild(d);
        (new createjs.Tween.get(d)).to({
            alpha: .7
        }, 500);
        var n = s_oSpriteLibrary.getSprite("msg_box");
        b = new createjs.Container;
        b.y = CANVAS_HEIGHT + n.height / 2;
        s_oStage.addChild(b);
        m = createBitmap(n);
        m.regX = n.width / 2;
        m.regY = n.height / 2;
        m.x = CANVAS_WIDTH / 2;
        m.y = CANVAS_HEIGHT / 2;
        b.addChild(m);
        a = new createjs.Shape;
        a.graphics.beginFill("#0f0f0f").drawRect(0, 0,
            CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = .01;
        c = a.on("click", function() {});
        b.addChild(a);
        n = 800;
        new CTLText(b, CANVAS_WIDTH / 2 - n / 2, CANVAS_HEIGHT / 2 - 250 - 100, n, 200, 40, "center", "#402604", PRIMARY_FONT, 1, 2, 2, TEXT_PROMOTION, !0, !0, !0, !1);
        var p = new createjs.Container;
        p.x = CANVAS_WIDTH / 2;
        p.y = CANVAS_HEIGHT / 2;
        b.addChild(p);
        var t = [];
        t[0] = BISHOP;
        t[1] = ROOK;
        t[2] = KNIGHT;
        t[3] = QUEEN;
        n = 400;
        f = [];
        for (var q = 0; q < t.length; q++) {
            var v = s_oSpriteLibrary.getSprite(g + "_" + t[q]);
            f[q] = new CToggle(-n / 2 + n / (t.length - 1) * q, 0, v, !0, p);
            f[q].addEventListenerWithParams(ON_MOUSE_UP,
                this._onPieceSelected, this, t[q])
        }(new createjs.Tween.get(b)).to({
            y: 0
        }, 750, createjs.Ease.cubicOut)
    };
    this.unload = function() {
        a.off("click", c);
        s_oStage.removeChild(d);
        s_oStage.removeChild(b)
    };
    this._onPieceSelected = function(g) {
        s_oGame.changePiece(g, l);
        g = s_oSpriteLibrary.getSprite("msg_box");
        g = CANVAS_HEIGHT + g.height / 2;
        (new createjs.Tween.get(d)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(b)).to({
            y: g
        }, 500, createjs.Ease.backIn).call(function() {
            e.unload();
            s_oGame.onExitPromoPanel()
        })
    };
    this._init(k, l);
    var e =
        this
}

function CAI() {
    var k, l, f, m, d;
    this._init = function() {};
    this.getMove = function() {
        var a = this._buildTree();
        a = d.getNode(a, 1);
        return this._getBestNode(a)
    };
    this._getBestNode = function(a) {
        if (0 < a.length) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b].model.moves;
                this._makeMove(c);
                var e = s_oMovesControllerFaster.getState(WHITE, f);
                e === BOARD_STATE_CHECKMATE ? a[b].model.rating += .5 : e === BOARD_STATE_STALEMATE && (a[b].model.rating -= .5);
                this._unMakeMove(c)
            }
            c = a[0].model.rating;
            for (b = 1; b < a.length; b++) a[b].model.rating > c && (c = a[b].model.rating);
            e = [];
            for (b = 0; b < a.length; b++) a[b].model.rating === c && e.push(a[b]);
            a = e[Math.floor(Math.random() * e.length)].model.moves
        } else a = null;
        return a
    };
    this._buildTree = function() {
        k = 0;
        d = new CTreeDecision({
            rating: 0,
            moves: [],
            depth: 0
        });
        f = this._copyBoard(s_oGame.getCells());
        (new Date).getTime();
        l = this._maxi(0);
        (new Date).getTime();
        return l
    };
    this._alphaBetaMax = function(a, b, c) {
        k++;
        if (c === SEARCH_DEPTH) return this._evaluateBoard();
        var e = this._findAllMoves(BLACK),
            g = e.moves;
        e = e.opponentlist;
        for (var h = g.length - 1; 0 <= h; h--)
            if (this._makeMove(g[h]),
                s_oMovesControllerFaster.isInCheck(BLACK, f, e)) this._unMakeMove(g[h]), g.splice(h, 1);
            else {
                var n = c + 1;
                d.initNewNode(n);
                n = this._alphaBetaMin(a, b, n);
                d.addNode(c, n, g[h]);
                this._unMakeMove(g[h]);
                if (n >= b) return b;
                n > a && (a = n)
            }
        return a
    };
    this._alphaBetaMin = function(a, b, c) {
        k++;
        if (c === SEARCH_DEPTH) return this._evaluateBoard();
        var e = this._findAllMoves(WHITE),
            g = e.moves;
        e = e.opponentlist;
        for (var h = g.length - 1; 0 <= h; h--)
            if (this._makeMove(g[h]), s_oMovesControllerFaster.isInCheck(WHITE, f, e)) this._unMakeMove(g[h]), g.splice(h,
                1);
            else {
                var n = c + 1;
                d.initNewNode(n);
                n = this._alphaBetaMax(a, b, n);
                d.addNode(c, n, g[h]);
                this._unMakeMove(g[h]);
                if (n <= a) return a;
                n < b && (b = n)
            }
        return b
    };
    this._evaluateBoard = function() {
        return 200 * (m[BLACK][KING] - m[WHITE][KING]) + 9 * (m[BLACK][QUEEN] - m[WHITE][QUEEN]) + 5 * (m[BLACK][ROOK] - m[WHITE][ROOK]) + 3 * (m[BLACK][BISHOP] - m[WHITE][BISHOP] + m[BLACK][KNIGHT] - m[WHITE][KNIGHT]) + (m[BLACK][PAWN] - m[WHITE][PAWN])
    };
    this._findAllMoves = function(a) {
        for (var b = [], c = [], e = 0; e < NUM_CELL; e++)
            for (var g = 0; g < NUM_CELL; g++)
                if (null !== f[e][g].type)
                    if (f[e][g].color ===
                        a)
                        for (var h = s_oMovesControllerFaster.getMovesList(e, g, f), n = 0; n < h.length; n++) {
                            var p = h[n].row,
                                t = h[n].col;
                            b.push({
                                sourcerow: e,
                                sourcecol: g,
                                destrow: p,
                                destcol: t,
                                sourcetype: f[e][g].type,
                                sourcecolor: f[e][g].color,
                                sourcehistory: f[e][g].history,
                                desttype: f[p][t].type,
                                destcolor: f[p][t].color,
                                desthistory: f[p][t].history,
                                special: h[n].special
                            })
                        } else c.push({
                            row: e,
                            col: g
                        });
        return {
            moves: b,
            opponentlist: c
        }
    };
    this._makeMove = function(a) {
        null !== a.destcolor && m[a.destcolor][a.desttype]--;
        switch (a.special) {
            case BOARD_SPECIAL_CASTLING_RIGHT:
                f[a.sourcerow][5] = {
                    color: a.sourcecolor,
                    type: ROOK,
                    history: f[a.sourcerow][7].history
                };
                f[a.sourcerow][7] = {
                    color: null,
                    type: null,
                    history: []
                };
                break;
            case BOARD_SPECIAL_CASTLING_LEFT:
                f[a.sourcerow][3] = {
                    color: a.sourcecolor,
                    type: ROOK,
                    history: f[a.sourcerow][0].history
                };
                f[a.sourcerow][0] = {
                    color: null,
                    type: null,
                    history: []
                };
                break;
            case BOARD_SPECIAL_ENPASSANT:
                var b = s_oBoardStateController.getOtherOpponent(a.sourcecolor);
                f[a.sourcerow][a.destcol] = {
                    color: null,
                    type: null,
                    history: []
                };
                m[b][PAWN]--
        }
        f[a.destrow][a.destcol] = {
            color: a.sourcecolor,
            type: a.sourcetype,
            history: a.sourcehistory
        };
        f[a.sourcerow][a.sourcecol] = {
            color: null,
            type: null,
            history: []
        };
        0 !== a.destrow && 7 !== a.destrow || a.sourcetype !== PAWN || (f[a.destrow][a.destcol] = {
            color: a.sourcecolor,
            type: QUEEN,
            history: a.sourcehistory
        }, m[a.sourcecolor][PAWN]--, m[a.sourcecolor][QUEEN]++)
    };
    this._unMakeMove = function(a) {
        null !== a.destcolor && m[a.destcolor][a.desttype]++;
        switch (a.special) {
            case BOARD_SPECIAL_CASTLING_RIGHT:
                f[a.sourcerow][7] = {
                    color: a.sourcecolor,
                    type: ROOK,
                    history: f[a.sourcerow][5].history
                };
                f[a.sourcerow][5] = {
                    color: null,
                    type: null,
                    history: []
                };
                break;
            case BOARD_SPECIAL_CASTLING_LEFT:
                f[a.sourcerow][0] = {
                    color: a.sourcecolor,
                    type: ROOK,
                    history: f[a.sourcerow][3].history
                };
                f[a.sourcerow][3] = {
                    color: null,
                    type: null,
                    history: []
                };
                break;
            case BOARD_SPECIAL_ENPASSANT:
                var b = s_oBoardStateController.getOtherOpponent(a.sourcecolor);
                f[a.sourcerow][a.destcol] = {
                    color: b,
                    type: PAWN,
                    history: []
                };
                m[b][PAWN]++
        }
        f[a.sourcerow][a.sourcecol] = {
            color: a.sourcecolor,
            type: a.sourcetype,
            history: a.sourcehistory
        };
        f[a.destrow][a.destcol] = {
            color: a.destcolor,
            type: a.desttype,
            history: a.desthistory
        };
        0 !== a.destrow && 7 !== a.destrow || a.sourcetype !== PAWN || (m[a.sourcecolor][PAWN]++, m[a.sourcecolor][QUEEN]--)
    };
    this.debugBoard = function(a) {
        for (var b = [], c = 0; c < NUM_CELL; c++) {
            b[c] = [];
            for (var e = 0; e < NUM_CELL; e++) b[c][e] = a[c][e].getType() + "_" + a[c][e].getColor()
        }
        return b
    };
    this._copyBoard = function(a) {
        m = [BLACK, WHITE];
        m[BLACK] = [];
        m[WHITE] = [];
        m[BLACK][KING] = 0;
        m[BLACK][QUEEN] = 0;
        m[BLACK][ROOK] = 0;
        m[BLACK][BISHOP] = 0;
        m[BLACK][KNIGHT] = 0;
        m[BLACK][PAWN] = 0;
        m[WHITE][KING] =
            0;
        m[WHITE][QUEEN] = 0;
        m[WHITE][ROOK] = 0;
        m[WHITE][BISHOP] = 0;
        m[WHITE][KNIGHT] = 0;
        m[WHITE][PAWN] = 0;
        for (var b = [], c = 0; c < NUM_CELL; c++) {
            b[c] = [];
            for (var e = 0; e < NUM_CELL; e++) b[c][e] = {
                color: a[c][e].getColor(),
                type: a[c][e].getType(),
                history: a[c][e].getPieceHistory()
            }, null !== a[c][e].getColor() && m[b[c][e].color][b[c][e].type]++
        }
        return b
    };
    this._maxi = function(a) {
        if (a === SEARCH_DEPTH) return this._evaluateBoard();
        var b = -INFINITE,
            c = this._findAllMoves(BLACK),
            e = c.moves;
        c = c.opponentlist;
        for (var g = a + 1, h = e.length - 1; 0 <= h; h--)
            if (this._makeMove(e[h]),
                s_oMovesControllerFaster.isInCheck(BLACK, f, c)) this._unMakeMove(e[h]), e.splice(h, 1);
            else {
                d.initNewNode(g);
                var n = this._mini(g);
                d.addNode(a, n, e[h]);
                this._unMakeMove(e[h]);
                n > b && (b = n)
            }
        return b
    };
    this._mini = function(a) {
        if (a === SEARCH_DEPTH) return this._evaluateBoard();
        var b = INFINITE,
            c = this._findAllMoves(WHITE),
            e = c.moves;
        c = c.opponentlist;
        for (var g = a + 1, h = e.length - 1; 0 <= h; h--)
            if (this._makeMove(e[h]), s_oMovesControllerFaster.isInCheck(WHITE, f, c)) this._unMakeMove(e[h]), e.splice(h, 1);
            else {
                d.initNewNode(g);
                var n =
                    this._maxi(g);
                d.addNode(a, n, e[h]);
                this._unMakeMove(e[h]);
                n < b && (b = n)
            }
        return b
    };
    this._init()
}
DIR_TOPRIGHT = "DIR_TOPRIGHT";
DIR_RIGHT = "DIR_RIGHT";
DIR_BOTRIGHT = "DIR_BOTRIGHT";
DIR_TOPLEFT = "DIR_TOPLEFT";
DIR_LEFT = "DIR_LEFT";
DIR_BOTLEFT = "DIR_BOTLEFT";
DIR_TOP = "DIR_TOP";
DIR_BOT = "DIR_BOT";

function CMovesControllerFaster(k) {
    var l, f, m;
    this._init = function(d) {
        l = d.length;
        f = d[0].length;
        m = [];
        for (d = 0; d < l; d++) {
            m[d] = [];
            for (var a = 0; a < f; a++) m[d][a] = []
        }
        this._buildMap()
    };
    this._buildMap = function() {
        for (var d = 0; d < l; d++)
            for (var a = 0; a < f; a++) m[d][a][DIR_TOPRIGHT] = this._setNeighbor(d, a, DIR_TOPRIGHT), m[d][a][DIR_RIGHT] = this._setNeighbor(d, a, DIR_RIGHT), m[d][a][DIR_BOTRIGHT] = this._setNeighbor(d, a, DIR_BOTRIGHT), m[d][a][DIR_TOPLEFT] = this._setNeighbor(d, a, DIR_TOPLEFT), m[d][a][DIR_LEFT] = this._setNeighbor(d, a,
                DIR_LEFT), m[d][a][DIR_BOTLEFT] = this._setNeighbor(d, a, DIR_BOTLEFT), m[d][a][DIR_TOP] = this._setNeighbor(d, a, DIR_TOP), m[d][a][DIR_BOT] = this._setNeighbor(d, a, DIR_BOT)
    };
    this._setNeighbor = function(d, a, b) {
        var c = null;
        switch (b) {
            case DIR_TOPRIGHT:
                0 < d && a < f - 1 && (c = {
                    row: d - 1,
                    col: a + 1
                });
                break;
            case DIR_RIGHT:
                a < f - 1 && (c = {
                    row: d,
                    col: a + 1
                });
                break;
            case DIR_BOTRIGHT:
                d < l - 1 && a < f - 1 && (c = {
                    row: d + 1,
                    col: a + 1
                });
                break;
            case DIR_TOPLEFT:
                0 < d && 0 < a && (c = {
                    row: d - 1,
                    col: a - 1
                });
                break;
            case DIR_LEFT:
                0 < a && (c = {
                    row: d,
                    col: a - 1
                });
                break;
            case DIR_BOTLEFT:
                d <
                    l - 1 && 0 < a && (c = {
                        row: d + 1,
                        col: a - 1
                    });
                break;
            case DIR_TOP:
                0 < d && (c = {
                    row: d - 1,
                    col: a
                });
                break;
            case DIR_BOT:
                d < l - 1 && (c = {
                    row: d + 1,
                    col: a
                })
        }
        return c
    };
    this._getNeighborByDir = function(d, a, b) {
        return m[d][a][b]
    };
    this._getAllNeighbor = function(d, a) {
        var b = [],
            c;
        for (c in m[d][a]) null !== m[d][a][c] && b.push(m[d][a][c]);
        return b
    };
    this._getMainDiagonal = function(d, a, b) {
        var c = [],
            e = b[d][a].color;
        this._findInDirection(d, a, DIR_BOTRIGHT, c, 99, e, b);
        this._findInDirection(d, a, DIR_TOPLEFT, c, 99, e, b);
        return c
    };
    this._getSecondDiagonal = function(d,
        a, b) {
        var c = [],
            e = b[d][a].color;
        this._findInDirection(d, a, DIR_BOTLEFT, c, 99, e, b);
        this._findInDirection(d, a, DIR_TOPRIGHT, c, 99, e, b);
        return c
    };
    this._getRow = function(d, a, b) {
        var c = [],
            e = b[d][a].color;
        this._findInDirection(d, a, DIR_LEFT, c, 99, e, b);
        this._findInDirection(d, a, DIR_RIGHT, c, 99, e, b);
        return c
    };
    this._getCol = function(d, a, b) {
        var c = [],
            e = b[d][a].color;
        this._findInDirection(d, a, DIR_TOP, c, 99, e, b);
        this._findInDirection(d, a, DIR_BOT, c, 99, e, b);
        return c
    };
    this._getStraightByDirAndRadius = function(d, a, b, c, e) {
        var g = [];
        this._findInDirection(d, a, b, g, c, e[d][a].color, e);
        return g
    };
    this._getStraightRowByRadius = function(d, a, b) {
        var c = [];
        this._findInDirection(d, a, DIR_LEFT, c, b);
        this._findInDirection(d, a, DIR_RIGHT, c, b);
        return c
    };
    this._getStraightColByRadius = function(d, a, b) {
        var c = [];
        this._findInDirection(d, a, DIR_TOP, c, b);
        this._findInDirection(d, a, DIR_BOT, c, b);
        return c
    };
    this._findInDirection = function(d, a, b, c, e, g, h) {
        --e;
        if (null !== m[d][a][b] && 0 <= e) {
            var n = m[d][a][b].row;
            d = m[d][a][b].col;
            g ? (a = h[n][d].color, a !== g && (null === a ?
                (c.push({
                    row: n,
                    col: d
                }), this._findInDirection(n, d, b, c, e, g, h)) : c.push({
                    row: n,
                    col: d
                }))) : (c.push({
                row: n,
                col: d
            }), this._findInDirection(n, d, b, c, e, g, h))
        }
    };
    this._findTPos = function(d, a, b) {
        var c = [];
        d = m[d][a][b];
        null !== d && (d = m[d.row][d.col][b], null !== d && (c = b === DIR_TOP || b === DIR_BOT ? this._getStraightRowByRadius(d.row, d.col, 1) : this._getStraightColByRadius(d.row, d.col, 1)));
        return c
    };
    this.getMovesList = function(d, a, b, c) {
        var e = [];
        switch (b[d][a].type) {
            case PAWN:
                e = this.getPawnMove(d, a, b);
                break;
            case ROOK:
                e = this.getRookMove(d,
                    a, b);
                break;
            case KNIGHT:
                e = this.getKnightMove(d, a, b);
                break;
            case BISHOP:
                e = this.getBishopMove(d, a, b);
                break;
            case QUEEN:
                e = this.getQueenMove(d, a, b);
                break;
            case KING:
                e = c ? this.getSimpleKingMove(d, a, b) : this.getKingMove(d, a, b)
        }
        return e
    };
    this.getPawnMove = function(d, a, b) {
        var c = b[d][a].color,
            e = [];
        if (c === WHITE) {
            var g = 6 === d ? this._getStraightByDirAndRadius(d, a, DIR_TOP, 2, b) : this._getStraightByDirAndRadius(d, a, DIR_TOP, 1, b);
            var h = this._getNeighborByDir(d, a, DIR_TOPRIGHT);
            null !== h && b[h.row][h.col].color === BLACK && e.push(h);
            h = this._getNeighborByDir(d, a, DIR_TOPLEFT);
            null !== h && b[h.row][h.col].color === BLACK && e.push(h);
            if (3 === d)
                for (d = this._getEnPassant(WHITE, d, a, b), a = 0; a < d.length; a++) e.push(d[a])
        } else if (g = 1 === d ? this._getStraightByDirAndRadius(d, a, DIR_BOT, 2, b) : this._getStraightByDirAndRadius(d, a, DIR_BOT, 1, b), h = this._getNeighborByDir(d, a, DIR_BOTRIGHT), null !== h && b[h.row][h.col].color === WHITE && e.push(h), h = this._getNeighborByDir(d, a, DIR_BOTLEFT), null !== h && b[h.row][h.col].color === WHITE && e.push(h), 4 === d)
            for (d = this._getEnPassant(BLACK,
                    d, a, b), a = 0; a < d.length; a++) e.push(d[a]);
        for (a = g.length - 1; 0 <= a; a--) null !== b[g[a].row][g[a].col].color && b[g[a].row][g[a].col].color !== c && g.splice(a, 1);
        for (a = 0; a < e.length; a++) g.push(e[a]);
        return g
    };
    this.getRookMove = function(d, a, b) {
        var c = this._getRow(d, a, b);
        d = this._getCol(d, a, b);
        a = [];
        for (b = 0; b < c.length; b++) a.push(c[b]);
        for (b = 0; b < d.length; b++) a.push(d[b]);
        return a
    };
    this.getKnightMove = function(d, a, b) {
        var c = [];
        c.push(this._findTPos(d, a, DIR_TOP));
        c.push(this._findTPos(d, a, DIR_RIGHT));
        c.push(this._findTPos(d,
            a, DIR_BOT));
        c.push(this._findTPos(d, a, DIR_LEFT));
        for (var e = [], g = 0; g < c.length; g++)
            for (var h = 0; h < c[g].length; h++) e.push(c[g][h]);
        d = b[d][a].color;
        for (g = e.length - 1; 0 <= g; g--) b[e[g].row][e[g].col].color === d && e.splice(g, 1);
        return e
    };
    this.getBishopMove = function(d, a, b) {
        var c = this._getMainDiagonal(d, a, b);
        d = this._getSecondDiagonal(d, a, b);
        a = [];
        for (b = 0; b < c.length; b++) a.push(c[b]);
        for (b = 0; b < d.length; b++) a.push(d[b]);
        return a
    };
    this.getQueenMove = function(d, a, b) {
        var c = this.getRookMove(d, a, b);
        d = this.getBishopMove(d,
            a, b);
        a = [];
        for (b = 0; b < c.length; b++) a.push(c[b]);
        for (b = 0; b < d.length; b++) a.push(d[b]);
        return a
    };
    this.getSimpleKingMove = function(d, a, b) {
        var c = this._getAllNeighbor(d, a);
        d = b[d][a].color;
        for (a = c.length - 1; 0 <= a; a--) b[c[a].row][c[a].col].color === d && c.splice(a, 1);
        return c
    };
    this.getKingMove = function(d, a, b) {
        var c = this._getAllNeighbor(d, a),
            e = b[d][a];
        if (1 === e.history.length && !s_oGame.isCheck()) {
            e = s_oBoardStateController.getOtherOpponent(e.color);
            e = this._getAllMovesList(e, b);
            var g = !0;
            1 === b[d][7].history.length ? (null !==
                b[d][6].color && (g = !1), null !== b[d][5].color && (g = !1)) : g = !1;
            g && (g = [{
                row: d,
                col: 5
            }], (g = this._isListMatching(e, g)) || c.push({
                row: d,
                col: 6,
                special: BOARD_SPECIAL_CASTLING_RIGHT
            }));
            g = !0;
            1 === b[d][0].history.length ? (null !== b[d][1].color && (g = !1), null !== b[d][2].color && (g = !1), null !== b[d][3].color && (g = !1)) : g = !1;
            g && (g = [{
                row: d,
                col: 3
            }], (g = this._isListMatching(e, g)) || c.push({
                row: d,
                col: 2,
                special: BOARD_SPECIAL_CASTLING_LEFT
            }))
        }
        d = b[d][a].color;
        for (a = c.length - 1; 0 <= a; a--) b[c[a].row][c[a].col].color === d && c.splice(a, 1);
        return c
    };
    this._getAllMovesList = function(d, a) {
        for (var b = [], c = 0; c < a.length; c++)
            for (var e = 0; e < a[c].length; e++) a[c][e].color === d && b.push({
                row: c,
                col: e
            });
        e = [];
        for (c = 0; c < b.length; c++) {
            var g = b[c];
            e[c] = {
                list: s_oMovesControllerFaster.getMovesList(g.row, g.col, a, !0),
                piece: b[c]
            }
        }
        return e
    };
    this._isListMatching = function(d, a) {
        for (var b = 0; b < d.length; b++)
            for (var c = 0; c < d[b].list.length; c++)
                for (var e = d[b].list[c], g = 0; g < a.length; g++)
                    if (e.row === a[g].row && e.col === a[g].col) return !0;
        return !1
    };
    this._getEnPassant = function(d, a, b, c) {
        var e = [],
            g = s_oBoardStateController.getOtherOpponent(d),
            h = this._getNeighborByDir(a, b, DIR_RIGHT);
        null !== h && (h = c[h.row][h.col], h.color === g && h.type === PAWN && (h = h.history, 2 === h.length && h[1].id === s_oGame.getLastHistoryID() && (d === WHITE ? e.push(this._getNeighborByDir(a, b, DIR_TOPRIGHT)) : e.push(this._getNeighborByDir(a, b, DIR_BOTRIGHT)))));
        h = this._getNeighborByDir(a, b, DIR_LEFT);
        null !== h && (h = c[h.row][h.col], h.color === g && h.type === PAWN && (h = h.history, 2 === h.length && h[1].id === s_oGame.getLastHistoryID() && (d === WHITE ? e.push(this._getNeighborByDir(a,
            b, DIR_TOPLEFT)) : e.push(this._getNeighborByDir(a, b, DIR_BOTLEFT)))));
        for (d = 0; d < e.length; d++) e[d].special = BOARD_SPECIAL_ENPASSANT;
        return e
    };
    this.getState = function(d, a) {
        if (0 !== this.findAllChecks(d, a).length) return this.findCheckMate(d, a) ? BOARD_STATE_CHECKMATE : BOARD_STATE_CHECK;
        if (this.findStaleMate(d, a)) return BOARD_STATE_STALEMATE
    };
    this.findCheckMate = function(d, a) {
        for (var b = [], c = 0; c < a.length; c++)
            for (var e = 0; e < a[c].length; e++) a[c][e].color === d && b.push({
                row: c,
                col: e
            });
        for (c = 0; c < b.length; c++) {
            var g = b[c].row,
                h = b[c].col,
                n = s_oMovesControllerFaster.getMovesList(g, h, a);
            for (e = 0; e < n.length; e++) {
                var p = n[e].row,
                    t = n[e].col;
                p = {
                    sourcerow: g,
                    sourcecol: h,
                    destrow: p,
                    destcol: t,
                    sourcetype: a[g][h].type,
                    sourcecolor: a[g][h].color,
                    sourcehistory: a[g][h].history,
                    desttype: a[p][t].type,
                    destcolor: a[p][t].color,
                    desthistory: a[p][t].history,
                    special: n[e].special
                };
                this._makeMove(a, p);
                if (0 === this.findAllChecks(d, a).length) return !1;
                this._unMakeMove(a, p)
            }
        }
        return !0
    };
    this._makeMove = function(d, a) {
        d[a.destrow][a.destcol] = {
            color: a.sourcecolor,
            type: a.sourcetype,
            history: a.sourcehistory
        };
        d[a.sourcerow][a.sourcecol] = {
            color: null,
            type: null,
            history: []
        };
        0 !== a.destrow && 7 !== a.destrow || a.sourcetype !== PAWN || (d[a.destrow][a.destcol] = {
            color: a.sourcecolor,
            type: QUEEN,
            history: a.sourcehistory
        })
    };
    this._unMakeMove = function(d, a) {
        d[a.sourcerow][a.sourcecol] = {
            color: a.sourcecolor,
            type: a.sourcetype,
            history: a.sourcehistory
        };
        d[a.destrow][a.destcol] = {
            color: a.destcolor,
            type: a.desttype,
            history: a.desthistory
        }
    };
    this.findStaleMate = function(d, a) {
        var b = this.findCheckMate(d,
            a);
        if (!b) {
            for (var c = [], e = [], g = 0; g < a.length; g++)
                for (var h = 0; h < a[g].length; h++) a[g][h].color === WHITE && e.push(a[g][h].type), a[g][h].color === BLACK && c.push(a[g][h].type);
            if (1 === c.length && 1 === e.length) return !0;
            if (1 === c.length && 2 === e.length || 2 === c.length && 1 === e.length)
                if (g = e.indexOf(BISHOP) && c.indexOf(BISHOP), h = e.indexOf(KNIGHT) && c.indexOf(KNIGHT), 0 <= g || 0 <= h) return !0;
            if (2 === c.length && 2 === e.length && (g = e.indexOf(BISHOP) || c.indexOf(BISHOP), 0 <= g)) {
                c = [];
                for (g = 0; g < a.length; g++)
                    for (h = 0; h < a[g].length; h++) a[g][h].type ===
                        BISHOP && c.push((g + h) % 2);
                if (c[0] === c[1]) return !0
            }
        }
        return b
    };
    this.isInCheck = function(d, a, b) {
        for (var c, e = 0; e < b.length; e++) {
            c = s_oMovesControllerFaster.getMovesList(b[e].row, b[e].col, a);
            for (var g = 0; g < c.length; g++) {
                var h = c[g];
                if (a[h.row][h.col].color === d && a[h.row][h.col].type === KING) return !0
            }
        }
        return !1
    };
    this.findAllChecks = function(d, a) {
        for (var b = s_oBoardStateController.getOtherOpponent(d), c = [], e = 0; e < a.length; e++)
            for (var g = 0; g < a[e].length; g++) a[e][g].color === b && c.push({
                row: e,
                col: g
            });
        b = [];
        for (e = 0; e < c.length; e++) {
            var h =
                c[e];
            b[e] = {
                list: s_oMovesControllerFaster.getMovesList(h.row, h.col, a),
                piece: c[e]
            }
        }
        c = [];
        for (e = 0; e < b.length; e++)
            for (g = 0; g < b[e].list.length; g++) h = b[e].list[g], a[h.row][h.col].color === d && a[h.row][h.col].type === KING && c.push(b[e].piece);
        return c
    };
    this._init(k);
    s_oMovesControllerFaster = this
}
var s_oMovesControllerFaster;

function CGUIExpandible(k, l, f, m) {
    var d, a, b, c, e, g, h, n, p;
    this._init = function(q, v, w, z) {
        c = [];
        e = [];
        h = new createjs.Container;
        h.x = q;
        h.y = v;
        z.addChild(h);
        n = new createjs.Container;
        h.addChild(n);
        p = new createjs.Container;
        h.addChild(p);
        b = !1;
        g = new CGfxButton(0, 0, w, p);
        g.addEventListener(ON_MOUSE_UP, this._onMenu, this);
        a = d = 120
    };
    this.unload = function() {
        g.unload();
        m.removeChild(h)
    };
    this.refreshPos = function(q, v) {
        h.x = k - q;
        h.y = l + v
    };
    this.addButton = function(q) {
        var v = q.getButtonImage();
        v.x = 0;
        v.y = 0;
        v.visible = 0;
        n.addChildAt(v,
            0);
        c.push(v);
        e.push(q)
    };
    this._onMenu = function() {
        t.stopTrembleAnimation();
        (b = !b) ? t._expand(): t._collapse()
    };
    this._expand = function() {
        for (var q = 0; q < c.length; q++) c[q].visible = !0, createjs.Tween.get(c[q], {
            override: !0
        }).wait(300 * q / 2).to({
            y: d + q * a
        }, 300, createjs.Ease.cubicOut)
    };
    this._collapse = function() {
        for (var q = 0; q < c.length; q++) {
            var v = c[c.length - 1 - q];
            createjs.Tween.get(v, {
                override: !0
            }).wait(300 * q / 2).to({
                y: 0
            }, 300, createjs.Ease.cubicOut).call(function(w) {
                w.visible = !1
            }, [v])
        }
    };
    this.trembleAnimation = function() {
        b ?
            e[e.length - 1].trembleAnimation() : g.trembleAnimation()
    };
    this.stopTrembleAnimation = function() {
        b ? e[e.length - 1].stopAnimation() : g.stopAnimation()
    };
    var t = this;
    this._init(k, l, f, m)
}
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function() {
        if (this._bFitText) {
            for (var k = this._iFontSize;
                (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(k--, this._oText.font = k + "px " + this._szFont, this._oText.lineHeight = Math.round(k * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > k););
            this._iFontSize = k
        }
    },
    __verticalAlign: function() {
        if (this._bVerticalAlign) {
            var k = this._oText.getBounds().height;
            this._oText.y -=
                (k - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function() {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
            case "middle":
                this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    },
    __createText: function(k) {
        this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(k,
            this._iFontSize + "px " + this._szFont, this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - 2 * this._iPaddingH : null;
        switch (this._szAlign) {
            case "center":
                this._oText.x = this._x + this._iWidth / 2;
                break;
            case "left":
                this._oText.x = this._x + this._iPaddingH;
                break;
            case "right":
                this._oText.x = this._x + this._iWidth - this._iPaddingH
        }
        this._oContainer.addChild(this._oText);
        this.refreshText(k)
    },
    setVerticalAlign: function(k) {
        this._bVerticalAlign = k
    },
    setOutline: function(k) {
        null !== this._oText && (this._oText.outline = k)
    },
    setShadow: function(k, l, f, m) {
        null !== this._oText && (this._oText.shadow = new createjs.Shadow(k, l, f, m))
    },
    setColor: function(k) {
        this._oText.color = k
    },
    setAlpha: function(k) {
        this._oText.alpha = k
    },
    setY: function(k) {
        this._y = this._oText.y = k
    },
    removeTweens: function() {
        createjs.Tween.removeTweens(this._oText)
    },
    getText: function() {
        return this._oText
    },
    getY: function() {
        return this._y
    },
    getFontSize: function() {
        return this._iFontSize
    },
    refreshText: function(k) {
        "" === k && (k = " ");
        null === this._oText && this.__createText(k);
        this._oText.text = k;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};

function CTLText(k, l, f, m, d, a, b, c, e, g, h, n, p, t, q, v, w) {
    this._oContainer = k;
    this._x = l;
    this._y = f;
    this._iWidth = m;
    this._iHeight = d;
    this._bMultiline = v;
    this._iFontSize = a;
    this._szAlign = b;
    this._szColor = c;
    this._szFont = e;
    this._iPaddingH = h;
    this._iPaddingV = n;
    this._bVerticalAlign = q;
    this._bFitText = t;
    this._bDebug = w;
    this._oDebugShape = null;
    this._fLineHeightFactor = g;
    this._oText = null;
    p && this.__createText(p)
}! function() {
    function k(d) {
        var a = d;
        if (m[a]) a = m[a];
        else {
            for (var b = a, c, e = [], g = 0; b;) {
                if (null !== (c = f.text.exec(b))) e.push(c[0]);
                else if (null !== (c = f.modulo.exec(b))) e.push("%");
                else if (null !== (c = f.placeholder.exec(b))) {
                    if (c[2]) {
                        g |= 1;
                        var h = [],
                            n = c[2],
                            p;
                        if (null !== (p = f.key.exec(n)))
                            for (h.push(p[1]);
                                "" !== (n = n.substring(p[0].length));)
                                if (null !== (p = f.key_access.exec(n))) h.push(p[1]);
                                else if (null !== (p = f.index_access.exec(n))) h.push(p[1]);
                        else throw new SyntaxError("[sprintf] failed to parse named argument key");
                        else throw new SyntaxError("[sprintf] failed to parse named argument key");
                        c[2] = h
                    } else g |= 2;
                    if (3 === g) throw Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                    e.push({
                        placeholder: c[0],
                        param_no: c[1],
                        keys: c[2],
                        sign: c[3],
                        pad_char: c[4],
                        align: c[5],
                        width: c[6],
                        precision: c[7],
                        type: c[8]
                    })
                } else throw new SyntaxError("[sprintf] unexpected placeholder");
                b = b.substring(c[0].length)
            }
            a = m[a] = e
        }
        b = arguments;
        c = 1;
        e = a.length;
        h = "";
        var t, q;
        for (n = 0; n < e; n++)
            if ("string" === typeof a[n]) h += a[n];
            else if ("object" === typeof a[n]) {
            p = a[n];
            if (p.keys)
                for (g = b[c], t = 0; t < p.keys.length; t++) {
                    if (void 0 == g) throw Error(k('[sprintf] Cannot access property "%s" of undefined value "%s"', p.keys[t], p.keys[t - 1]));
                    g = g[p.keys[t]]
                } else g = p.param_no ? b[p.param_no] : b[c++];
            f.not_type.test(p.type) && f.not_primitive.test(p.type) && g instanceof Function && (g = g());
            if (f.numeric_arg.test(p.type) && "number" !== typeof g && isNaN(g)) throw new TypeError(k("[sprintf] expecting number but found %T", g));
            f.number.test(p.type) && (q = 0 <= g);
            switch (p.type) {
                case "b":
                    g = parseInt(g, 10).toString(2);
                    break;
                case "c":
                    g = String.fromCharCode(parseInt(g, 10));
                    break;
                case "d":
                case "i":
                    g = parseInt(g, 10);
                    break;
                case "j":
                    g = JSON.stringify(g, null, p.width ? parseInt(p.width) : 0);
                    break;
                case "e":
                    g = p.precision ? parseFloat(g).toExponential(p.precision) : parseFloat(g).toExponential();
                    break;
                case "f":
                    g = p.precision ? parseFloat(g).toFixed(p.precision) : parseFloat(g);
                    break;
                case "g":
                    g = p.precision ? String(Number(g.toPrecision(p.precision))) : parseFloat(g);
                    break;
                case "o":
                    g = (parseInt(g,
                        10) >>> 0).toString(8);
                    break;
                case "s":
                    g = String(g);
                    g = p.precision ? g.substring(0, p.precision) : g;
                    break;
                case "t":
                    g = String(!!g);
                    g = p.precision ? g.substring(0, p.precision) : g;
                    break;
                case "T":
                    g = Object.prototype.toString.call(g).slice(8, -1).toLowerCase();
                    g = p.precision ? g.substring(0, p.precision) : g;
                    break;
                case "u":
                    g = parseInt(g, 10) >>> 0;
                    break;
                case "v":
                    g = g.valueOf();
                    g = p.precision ? g.substring(0, p.precision) : g;
                    break;
                case "x":
                    g = (parseInt(g, 10) >>> 0).toString(16);
                    break;
                case "X":
                    g = (parseInt(g, 10) >>> 0).toString(16).toUpperCase()
            }
            if (f.json.test(p.type)) h +=
                g;
            else {
                if (!f.number.test(p.type) || q && !p.sign) var v = "";
                else v = q ? "+" : "-", g = g.toString().replace(f.sign, "");
                t = p.pad_char ? "0" === p.pad_char ? "0" : p.pad_char.charAt(1) : " ";
                var w = p.width - (v + g).length;
                w = p.width ? 0 < w ? t.repeat(w) : "" : "";
                h += p.align ? v + g + w : "0" === t ? v + w + g : w + v + g
            }
        }
        return h
    }

    function l(d, a) {
        return k.apply(null, [d].concat(a || []))
    }
    var f = {
            not_string: /[^s]/,
            not_bool: /[^t]/,
            not_type: /[^T]/,
            not_primitive: /[^v]/,
            number: /[diefg]/,
            numeric_arg: /[bcdiefguxX]/,
            json: /[j]/,
            not_json: /[^j]/,
            text: /^[^\x25]+/,
            modulo: /^\x25{2}/,
            placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
            key: /^([a-z_][a-z_\d]*)/i,
            key_access: /^\.([a-z_][a-z_\d]*)/i,
            index_access: /^\[(\d+)\]/,
            sign: /^[+-]/
        },
        m = Object.create(null);
    "undefined" !== typeof exports && (exports.sprintf = k, exports.vsprintf = l);
    "undefined" !== typeof window && (window.sprintf = k, window.vsprintf = l, "function" === typeof define && define.amd && define(function() {
        return {
            sprintf: k,
            vsprintf: l
        }
    }))
}();