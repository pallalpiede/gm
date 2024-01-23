/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        f = "undefined" !== typeof module && module.exports,
        e = function() {
            for (var l, q = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], k = 0, h = q.length, g = {}; k < h; k++)
                if ((l = q[k]) && l[1] in a) {
                    for (k = 0; k < l.length; k++) g[q[0][k]] = l[k];
                    return g
                }
            return !1
        }(),
        m = {
            change: e.fullscreenchange,
            error: e.fullscreenerror
        },
        p = {
            request: function(l) {
                return new Promise(function(q, k) {
                    var h = function() {
                        this.off("change",
                            h);
                        q()
                    }.bind(this);
                    this.on("change", h);
                    l = l || a.documentElement;
                    Promise.resolve(l[e.requestFullscreen]())["catch"](k)
                }.bind(this))
            },
            exit: function() {
                return new Promise(function(l, q) {
                    if (this.isFullscreen) {
                        var k = function() {
                            this.off("change", k);
                            l()
                        }.bind(this);
                        this.on("change", k);
                        Promise.resolve(a[e.exitFullscreen]())["catch"](q)
                    } else l()
                }.bind(this))
            },
            toggle: function(l) {
                return this.isFullscreen ? this.exit() : this.request(l)
            },
            onchange: function(l) {
                this.on("change", l)
            },
            onerror: function(l) {
                this.on("error", l)
            },
            on: function(l, q) {
                var k = m[l];
                k && a.addEventListener(k, q, !1)
            },
            off: function(l, q) {
                var k = m[l];
                k && a.removeEventListener(k, q, !1)
            },
            raw: e
        };
    e ? (Object.defineProperties(p, {
        isFullscreen: {
            get: function() {
                return !!a[e.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[e.fullscreenElement]
            }
        },
        isEnabled: {
            enumerable: !0,
            get: function() {
                return !!a[e.fullscreenEnabled]
            }
        }
    }), f ? module.exports = p : window.screenfull = p) : f ? module.exports = {
        isEnabled: !1
    } : window.screenfull = {
        isEnabled: !1
    }
})();
(function() {
    function a(B) {
        B = String(B);
        return B.charAt(0).toUpperCase() + B.slice(1)
    }

    function f(B, F) {
        var I = -1,
            J = B ? B.length : 0;
        if ("number" == typeof J && -1 < J && J <= x)
            for (; ++I < J;) F(B[I], I, B);
        else m(B, F)
    }

    function e(B) {
        B = String(B).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(B) ? B : a(B)
    }

    function m(B, F) {
        for (var I in B) G.call(B, I) && F(B[I], I, B)
    }

    function p(B) {
        return null == B ? a(B) : u.call(B).slice(8, -1)
    }

    function l(B, F) {
        var I = null != B ? typeof B[F] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(I) &&
            ("object" == I ? !!B[F] : !0)
    }

    function q(B) {
        return String(B).replace(/([ -])(?!$)/g, "$1?")
    }

    function k(B, F) {
        var I = null;
        f(B, function(J, E) {
            I = F(I, J, E, B)
        });
        return I
    }

    function h(B) {
        function F(Q) {
            return k(Q, function(O, N) {
                var T = N.pattern || q(N);
                !O && (O = RegExp("\\b" + T + " *\\d+[.\\w_]*", "i").exec(B) || RegExp("\\b" + T + " *\\w+-[\\w]*", "i").exec(B) || RegExp("\\b" + T + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(B)) && ((O = String(N.label && !RegExp(T, "i").test(N.label) ? N.label : O).split("/"))[1] && !/[\d.]+/.test(O[0]) && (O[0] +=
                    " " + O[1]), N = N.label || N, O = e(O[0].replace(RegExp(T, "i"), N).replace(RegExp("; *(?:" + N + "[_-])?", "i"), " ").replace(RegExp("(" + N + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return O
            })
        }

        function I(Q) {
            return k(Q, function(O, N) {
                return O || (RegExp(N + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(B) || 0)[1] || null
            })
        }
        var J = v,
            E = B && "object" == typeof B && "String" != p(B);
        E && (J = B, B = null);
        var S = J.navigator || {},
            L = S.userAgent || "";
        B || (B = L);
        var U = E ? !!S.likeChrome : /\bChrome\b/.test(B) && !/internal|\n/i.test(u.toString()),
            Y = E ? "Object" : "ScriptBridgingProxyObject",
            W = E ? "Object" : "Environment",
            M = E && J.java ? "JavaPackage" : p(J.java),
            R = E ? "Object" : "RuntimeObject";
        W = (M = /\bJava/.test(M) && J.java) && p(J.environment) == W;
        var Z = M ? "a" : "\u03b1",
            X = M ? "b" : "\u03b2",
            aa = J.document || {},
            b = J.operamini || J.opera,
            d = y.test(d = E && b ? b["[[Class]]"] : p(b)) ? d : b = null,
            c, n = B;
        E = [];
        var A = null,
            D = B == L;
        L = D && b && "function" == typeof b.version && b.version();
        var w = function(Q) {
                return k(Q, function(O, N) {
                    return O || RegExp("\\b" + (N.pattern || q(N)) + "\\b", "i").exec(B) && (N.label ||
                        N)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            z = function(Q) {
                return k(Q, function(O, N) {
                    return O || RegExp("\\b" + (N.pattern || q(N)) + "\\b", "i").exec(B) && (N.label || N)
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
            H = F([{
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
            P = function(Q) {
                return k(Q, function(O, N, T) {
                    return O || (N[H] || N[/^[a-z]+(?: +[a-z]+\b)*/i.exec(H)] || RegExp("\\b" + q(T) + "(?:\\b|\\w*\\d)", "i").exec(B)) && T
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
            K = function(Q) {
                return k(Q, function(O, N) {
                    var T = N.pattern || q(N);
                    if (!O && (O = RegExp("\\b" + T + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(B))) {
                        var V = O,
                            ba = N.label || N,
                            ca = {
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
                        T && ba && /^Win/i.test(V) && !/^Windows Phone /i.test(V) && (ca = ca[/[\d.]+$/.exec(V)]) && (V = "Windows " + ca);
                        V = String(V);
                        T && ba && (V = V.replace(RegExp(T, "i"), ba));
                        O = V = e(V.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/,
                            "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return O
                })
            }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X",
                "Macintosh", "Mac", "Windows 98;", "Windows "
            ]);
        w && (w = [w]);
        P && !H && (H = F([P]));
        if (c = /\bGoogle TV\b/.exec(H)) H = c[0];
        /\bSimulator\b/i.test(B) && (H = (H ? H + " " : "") + "Simulator");
        "Opera Mini" == z && /\bOPiOS\b/.test(B) && E.push("running in Turbo/Uncompressed mode");
        "IE" == z && /\blike iPhone OS\b/.test(B) ? (c = h(B.replace(/like iPhone OS/, "")), P = c.manufacturer, H = c.product) : /^iP/.test(H) ? (z || (z = "Safari"), K = "iOS" + ((c = / OS ([\d_]+)/i.exec(B)) ? " " + c[1].replace(/_/g, ".") : "")) : "Konqueror" != z || /buntu/i.test(K) ? P && "Google" != P &&
            (/Chrome/.test(z) && !/\bMobile Safari\b/i.test(B) || /\bVita\b/.test(H)) || /\bAndroid\b/.test(K) && /^Chrome/.test(z) && /\bVersion\//i.test(B) ? (z = "Android Browser", K = /\bAndroid\b/.test(K) ? K : "Android") : "Silk" == z ? (/\bMobi/i.test(B) || (K = "Android", E.unshift("desktop mode")), /Accelerated *= *true/i.test(B) && E.unshift("accelerated")) : "PaleMoon" == z && (c = /\bFirefox\/([\d.]+)\b/.exec(B)) ? E.push("identifying as Firefox " + c[1]) : "Firefox" == z && (c = /\b(Mobile|Tablet|TV)\b/i.exec(B)) ? (K || (K = "Firefox OS"), H || (H = c[1])) : !z ||
            (c = !/\bMinefield\b/i.test(B) && /\b(?:Firefox|Safari)\b/.exec(z)) ? (z && !H && /[\/,]|^[^(]+?\)/.test(B.slice(B.indexOf(c + "/") + 8)) && (z = null), (c = H || P || K) && (H || P || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(K)) && (z = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(K) ? K : c) + " Browser")) : "Electron" == z && (c = (/\bChrome\/([\d.]+)\b/.exec(B) || 0)[1]) && E.push("Chromium " + c) : K = "Kubuntu";
        L || (L = I(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", q(z),
            "(?:Firefox|Minefield|NetFront)"
        ]));
        if (c = "iCab" == w && 3 < parseFloat(L) && "WebKit" || /\bOpera\b/.test(z) && (/\bOPR\b/.test(B) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(B) && !/^(?:Trident|EdgeHTML)$/.test(w) && "WebKit" || !w && /\bMSIE\b/i.test(B) && ("Mac OS" == K ? "Tasman" : "Trident") || "WebKit" == w && /\bPlayStation\b(?! Vita\b)/i.test(z) && "NetFront") w = [c];
        "IE" == z && (c = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(B) || 0)[1]) ? (z += " Mobile", K = "Windows Phone " + (/\+$/.test(c) ? c : c + ".x"), E.unshift("desktop mode")) : /\bWPDesktop\b/i.test(B) ?
            (z = "IE Mobile", K = "Windows Phone 8.x", E.unshift("desktop mode"), L || (L = (/\brv:([\d.]+)/.exec(B) || 0)[1])) : "IE" != z && "Trident" == w && (c = /\brv:([\d.]+)/.exec(B)) && (z && E.push("identifying as " + z + (L ? " " + L : "")), z = "IE", L = c[1]);
        if (D) {
            if (l(J, "global"))
                if (M && (c = M.lang.System, n = c.getProperty("os.arch"), K = K || c.getProperty("os.name") + " " + c.getProperty("os.version")), W) {
                    try {
                        L = J.require("ringo/engine").version.join("."), z = "RingoJS"
                    } catch (Q) {
                        (c = J.system) && c.global.system == J.system && (z = "Narwhal", K || (K = c[0].os || null))
                    }
                    z ||
                        (z = "Rhino")
                } else "object" == typeof J.process && !J.process.browser && (c = J.process) && ("object" == typeof c.versions && ("string" == typeof c.versions.electron ? (E.push("Node " + c.versions.node), z = "Electron", L = c.versions.electron) : "string" == typeof c.versions.nw && (E.push("Chromium " + L, "Node " + c.versions.node), z = "NW.js", L = c.versions.nw)), z || (z = "Node.js", n = c.arch, K = c.platform, L = (L = /[\d.]+/.exec(c.version)) ? L[0] : null));
            else p(c = J.runtime) == Y ? (z = "Adobe AIR", K = c.flash.system.Capabilities.os) : p(c = J.phantom) == R ? (z = "PhantomJS",
                L = (c = c.version || null) && c.major + "." + c.minor + "." + c.patch) : "number" == typeof aa.documentMode && (c = /\bTrident\/(\d+)/i.exec(B)) ? (L = [L, aa.documentMode], (c = +c[1] + 4) != L[1] && (E.push("IE " + L[1] + " mode"), w && (w[1] = ""), L[1] = c), L = "IE" == z ? String(L[1].toFixed(1)) : L[0]) : "number" == typeof aa.documentMode && /^(?:Chrome|Firefox)\b/.test(z) && (E.push("masking as " + z + " " + L), z = "IE", L = "11.0", w = ["Trident"], K = "Windows");
            K = K && e(K)
        }
        L && (c = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(L) || /(?:alpha|beta)(?: ?\d)?/i.exec(B + ";" + (D &&
            S.appMinorVersion)) || /\bMinefield\b/i.test(B) && "a") && (A = /b/i.test(c) ? "beta" : "alpha", L = L.replace(RegExp(c + "\\+?$"), "") + ("beta" == A ? X : Z) + (/\d+\+?/.exec(c) || ""));
        if ("Fennec" == z || "Firefox" == z && /\b(?:Android|Firefox OS)\b/.test(K)) z = "Firefox Mobile";
        else if ("Maxthon" == z && L) L = L.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(H)) "Xbox 360" == H && (K = null), "Xbox 360" == H && /\bIEMobile\b/.test(B) && E.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(z) && (!z || H || /Browser|Mobi/.test(z)) || "Windows CE" !=
            K && !/Mobi/i.test(B))
            if ("IE" == z && D) try {
                null === J.external && E.unshift("platform preview")
            } catch (Q) {
                E.unshift("embedded")
            } else(/\bBlackBerry\b/.test(H) || /\bBB10\b/.test(B)) && (c = (RegExp(H.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(B) || 0)[1] || L) ? (c = [c, /BB10/.test(B)], K = (c[1] ? (H = null, P = "BlackBerry") : "Device Software") + " " + c[0], L = null) : this != m && "Wii" != H && (D && b || /Opera/.test(z) && /\b(?:MSIE|Firefox)\b/i.test(B) || "Firefox" == z && /\bOS X (?:\d+\.){2,}/.test(K) || "IE" == z && (K && !/^Win/.test(K) && 5.5 < L || /\bWindows XP\b/.test(K) &&
                8 < L || 8 == L && !/\bTrident\b/.test(B))) && !y.test(c = h.call(m, B.replace(y, "") + ";")) && c.name && (c = "ing as " + c.name + ((c = c.version) ? " " + c : ""), y.test(z) ? (/\bIE\b/.test(c) && "Mac OS" == K && (K = null), c = "identify" + c) : (c = "mask" + c, z = d ? e(d.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(c) && (K = null), D || (L = null)), w = ["Presto"], E.push(c));
            else z += " Mobile";
        if (c = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(B) || 0)[1]) {
            c = [parseFloat(c.replace(/\.(\d)$/, ".0$1")), c];
            if ("Safari" == z && "+" == c[1].slice(-1)) z = "WebKit Nightly", A = "alpha",
                L = c[1].slice(0, -1);
            else if (L == c[1] || L == (c[2] = (/\bSafari\/([\d.]+\+?)/i.exec(B) || 0)[1])) L = null;
            c[1] = (/\bChrome\/([\d.]+)/i.exec(B) || 0)[1];
            537.36 == c[0] && 537.36 == c[2] && 28 <= parseFloat(c[1]) && "WebKit" == w && (w = ["Blink"]);
            D && (U || c[1]) ? (w && (w[1] = "like Chrome"), c = c[1] || (c = c[0], 530 > c ? 1 : 532 > c ? 2 : 532.05 > c ? 3 : 533 > c ? 4 : 534.03 > c ? 5 : 534.07 > c ? 6 : 534.1 > c ? 7 : 534.13 > c ? 8 : 534.16 > c ? 9 : 534.24 > c ? 10 : 534.3 > c ? 11 : 535.01 > c ? 12 : 535.02 > c ? "13+" : 535.07 > c ? 15 : 535.11 > c ? 16 : 535.19 > c ? 17 : 536.05 > c ? 18 : 536.1 > c ? 19 : 537.01 > c ? 20 : 537.11 > c ? "21+" : 537.13 > c ?
                23 : 537.18 > c ? 24 : 537.24 > c ? 25 : 537.36 > c ? 26 : "Blink" != w ? "27" : "28")) : (w && (w[1] = "like Safari"), c = (c = c[0], 400 > c ? 1 : 500 > c ? 2 : 526 > c ? 3 : 533 > c ? 4 : 534 > c ? "4+" : 535 > c ? 5 : 537 > c ? 6 : 538 > c ? 7 : 601 > c ? 8 : "8"));
            w && (w[1] += " " + (c += "number" == typeof c ? ".x" : /[.+]/.test(c) ? "" : "+"));
            "Safari" == z && (!L || 45 < parseInt(L)) && (L = c)
        }
        "Opera" == z && (c = /\bzbov|zvav$/.exec(K)) ? (z += " ", E.unshift("desktop mode"), "zvav" == c ? (z += "Mini", L = null) : z += "Mobile", K = K.replace(RegExp(" *" + c + "$"), "")) : "Safari" == z && /\bChrome\b/.exec(w && w[1]) && (E.unshift("desktop mode"),
            z = "Chrome Mobile", L = null, /\bOS X\b/.test(K) ? (P = "Apple", K = "iOS 4.3+") : K = null);
        L && 0 == L.indexOf(c = /[\d.]+$/.exec(K)) && -1 < B.indexOf("/" + c + "-") && (K = String(K.replace(c, "")).replace(/^ +| +$/g, ""));
        w && !/\b(?:Avant|Nook)\b/.test(z) && (/Browser|Lunascape|Maxthon/.test(z) || "Safari" != z && /^iOS/.test(K) && /\bSafari\b/.test(w[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(z) && w[1]) && (c = w[w.length - 1]) && E.push(c);
        E.length && (E = ["(" + E.join("; ") + ")"]);
        P && H && 0 > H.indexOf(P) &&
            E.push("on " + P);
        H && E.push((/^on /.test(E[E.length - 1]) ? "" : "on ") + H);
        if (K) {
            var da = (c = / ([\d.+]+)$/.exec(K)) && "/" == K.charAt(K.length - c[0].length - 1);
            K = {
                architecture: 32,
                family: c && !da ? K.replace(c[0], "") : K,
                version: c ? c[1] : null,
                toString: function() {
                    var Q = this.version;
                    return this.family + (Q && !da ? " " + Q : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(c = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(n)) && !/\bi686\b/i.test(n) ? (K && (K.architecture = 64, K.family = K.family.replace(RegExp(" *" + c), "")), z && (/\bWOW64\b/i.test(B) || D &&
            /\w(?:86|32)$/.test(S.cpuClass || S.platform) && !/\bWin64; x64\b/i.test(B)) && E.unshift("32-bit")) : K && /^OS X/.test(K.family) && "Chrome" == z && 39 <= parseFloat(L) && (K.architecture = 64);
        B || (B = null);
        J = {};
        J.description = B;
        J.layout = w && w[0];
        J.manufacturer = P;
        J.name = z;
        J.prerelease = A;
        J.product = H;
        J.ua = B;
        J.version = z && L;
        J.os = K || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        J.parse = h;
        J.toString = function() {
            return this.description || ""
        };
        J.version && E.unshift(L);
        J.name && E.unshift(z);
        K && z && (K !=
            String(K).split(" ")[0] || K != z.split(" ")[0] && !H) && E.push(H ? "(" + K + ")" : "on " + K);
        E.length && (J.description = E.join(" "));
        return J
    }
    var g = {
            "function": !0,
            object: !0
        },
        v = g[typeof window] && window || this,
        t = g[typeof exports] && exports;
    g = g[typeof module] && module && !module.nodeType && module;
    var r = t && g && "object" == typeof global && global;
    !r || r.global !== r && r.window !== r && r.self !== r || (v = r);
    var x = Math.pow(2, 53) - 1,
        y = /\bOpera/;
    r = Object.prototype;
    var G = r.hasOwnProperty,
        u = r.toString,
        C = h();
    "function" == typeof define && "object" == typeof define.amd &&
        define.amd ? (v.platform = C, define(function() {
            return C
        })) : t && g ? m(C, function(B, F) {
            t[F] = B
        }) : v.platform = C
}).call(this);

function buildIOSMeta() {
    for (var a = [{
            name: "viewport",
            content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        }, {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black"
        }], f = 0; f < a.length; f++) {
        var e = document.createElement("meta");
        e.name = a[f].name;
        e.content = a[f].content;
        var m = window.document.head.querySelector('meta[name="' + e.name + '"]');
        m && m.parentNode.removeChild(m);
        window.document.head.appendChild(e)
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
    } catch (a) {
        return !0
    }
}

function isIOSLessThen13() {
    var a = platform.os,
        f = a.family.toLowerCase();
    a = parseFloat(a.version);
    return "ios" === f && 13 > a ? !0 : !1
}
$(document).ready(function() {
    platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && iosResize()
});
! function(a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var f;
        "undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self);
        f.TreeModel = a()
    }
}(function() {
    return function p(f, e, m) {
        function l(h, g) {
            if (!e[h]) {
                if (!f[h]) {
                    var v = "function" == typeof require && require;
                    if (!g && v) return v(h, !0);
                    if (q) return q(h, !0);
                    v = Error("Cannot find module '" + h + "'");
                    throw v.code = "MODULE_NOT_FOUND",
                        v;
                }
                v = e[h] = {
                    exports: {}
                };
                f[h][0].call(v.exports, function(t) {
                    var r = f[h][1][t];
                    return l(r ? r : t)
                }, v, v.exports, p, f, e, m)
            }
            return e[h].exports
        }
        for (var q = "function" == typeof require && require, k = 0; k < m.length; k++) l(m[k]);
        return l
    }({
        1: [function(f, e, m) {
            var p = f("mergesort");
            var l = f("find-insert-index");
            e.exports = function() {
                function q(t) {
                    this.config = t = t || {};
                    this.config.childrenPropertyName = t.childrenPropertyName || "children";
                    this.config.modelComparatorFn = t.modelComparatorFn
                }

                function k(t, r) {
                    this.config = t;
                    this.model = r;
                    this.children = []
                }

                function h(t, r, x) {
                    if (!(r instanceof k)) throw new TypeError("Child must be of type Node.");
                    r.parent = t;
                    t.model[t.config.childrenPropertyName] instanceof Array || (t.model[t.config.childrenPropertyName] = []);
                    if ("function" === typeof t.config.modelComparatorFn) {
                        var y = l(t.config.modelComparatorFn, t.model[t.config.childrenPropertyName], r.model);
                        t.model[t.config.childrenPropertyName].splice(y, 0, r.model);
                        t.children.splice(y, 0, r)
                    } else if (void 0 === x) t.model[t.config.childrenPropertyName].push(r.model),
                        t.children.push(r);
                    else {
                        if (0 > x || x > t.children.length) throw Error("Invalid index.");
                        t.model[t.config.childrenPropertyName].splice(x, 0, r.model);
                        t.children.splice(y, 0, r)
                    }
                    return r
                }

                function g() {
                    var t = {};
                    1 === arguments.length ? t.fn = arguments[0] : 2 === arguments.length ? "function" === typeof arguments[0] ? (t.fn = arguments[0], t.ctx = arguments[1]) : (t.options = arguments[0], t.fn = arguments[1]) : (t.options = arguments[0], t.fn = arguments[1], t.ctx = arguments[2]);
                    t.options = t.options || {};
                    t.options.strategy || (t.options.strategy = "pre");
                    if (!v[t.options.strategy]) throw Error("Unknown tree walk strategy. Valid strategies are 'pre' [default], 'post' and 'breadth'.");
                    return t
                }
                var v = {};
                q.prototype.parse = function(t) {
                    var r;
                    if (!(t instanceof Object)) throw new TypeError("Model must be of type object.");
                    var x = new k(this.config, t);
                    if (t[this.config.childrenPropertyName] instanceof Array) {
                        this.config.modelComparatorFn && (t[this.config.childrenPropertyName] = p(this.config.modelComparatorFn, t[this.config.childrenPropertyName]));
                        var y = 0;
                        for (r = t[this.config.childrenPropertyName].length; y <
                            r; y++) {
                            var G = x,
                                u = this.parse(t[this.config.childrenPropertyName][y]);
                            u.parent = G;
                            G.children.push(u)
                        }
                    }
                    return x
                };
                k.prototype.isRoot = function() {
                    return void 0 === this.parent
                };
                k.prototype.hasChildren = function() {
                    return 0 < this.children.length
                };
                k.prototype.addChild = function(t) {
                    return h(this, t)
                };
                k.prototype.addChildAtIndex = function(t, r) {
                    if ("function" === typeof this.config.modelComparatorFn) throw Error("Cannot add child at index when using a comparator function.");
                    return h(this, t, r)
                };
                k.prototype.getPath = function() {
                    var t = [];
                    (function y(x) {
                        t.unshift(x);
                        x.isRoot() || y(x.parent)
                    })(this);
                    return t
                };
                k.prototype.walk = function() {
                    var t = g.apply(this, arguments);
                    v[t.options.strategy].call(this, t.fn, t.ctx)
                };
                v.pre = function y(r, x) {
                    var G;
                    var u = r.call(x, this);
                    var C = 0;
                    for (G = this.children.length; C < G; C++) {
                        if (!1 === u) return !1;
                        u = y.call(this.children[C], r, x)
                    }
                    return u
                };
                v.post = function G(x, y) {
                    var u;
                    var C = 0;
                    for (u = this.children.length; C < u; C++) {
                        var B = G.call(this.children[C], x, y);
                        if (!1 === B) return !1
                    }
                    return B = x.call(y, this)
                };
                v.breadth = function(x,
                    y) {
                    var G = [this];
                    (function C() {
                        var B;
                        if (0 !== G.length) {
                            var F = G.shift();
                            var I = 0;
                            for (B = F.children.length; I < B; I++) G.push(F.children[I]);
                            !1 !== x.call(y, F) && C()
                        }
                    })()
                };
                k.prototype.all = function() {
                    var x = [];
                    var y = g.apply(this, arguments);
                    v[y.options.strategy].call(this, function(G) {
                        y.fn.call(y.ctx, G) && x.push(G)
                    }, y.ctx);
                    return x
                };
                k.prototype.first = function() {
                    var x;
                    var y = g.apply(this, arguments);
                    v[y.options.strategy].call(this, function(G) {
                        if (y.fn.call(y.ctx, G)) return x = G, !1
                    }, y.ctx);
                    return x
                };
                k.prototype.drop = function() {
                    if (!this.isRoot()) {
                        var x =
                            this.parent.children.indexOf(this);
                        this.parent.children.splice(x, 1);
                        this.parent.model[this.config.childrenPropertyName].splice(x, 1);
                        this.parent = void 0;
                        delete this.parent
                    }
                    return this
                };
                return q
            }()
        }, {
            "find-insert-index": 2,
            mergesort: 3
        }],
        2: [function(f, e, m) {
            e.exports = function() {
                return function(p, l, q) {
                    var k;
                    var h = 0;
                    for (k = l.length; h < k && !(0 < p(l[h], q)); h++);
                    return h
                }
            }()
        }, {}],
        3: [function(f, e, m) {
            e.exports = function() {
                function p(l, q) {
                    var k = q.length;
                    if (2 <= k) {
                        var h = q.slice(0, k / 2);
                        k = q.slice(k / 2, k);
                        h = p(l, h);
                        k = p(l,
                            k);
                        for (var g = [], v = h.length, t = k.length; 0 < v && 0 < t;) 0 >= l(h[0], k[0]) ? (g.push(h.shift()), v--) : (g.push(k.shift()), t--);
                        0 < v ? g.push.apply(g, h) : g.push.apply(g, k);
                        return g
                    }
                    return q.slice()
                }
                return p
            }()
        }, {}]
    }, {}, [1])(1)
});

function CTree(a) {
    var f, e, m;
    this._init = function(p) {
        f = [];
        for (var l = 0; l < NUM_CELL; l++) {
            f[l] = [];
            for (var q = 0; q < NUM_CELL; q++) f[l][q] = []
        }
        e = new TreeModel;
        m = e.parse(p);
        f[p.row][p.col][0] = m
    };
    this.getRoot = function() {
        return m
    };
    this.addNode = function(p, l, q, k, h, g, v, t) {
        f[k][h][g] = e.parse({
            row: k,
            col: h,
            eatenrow: v,
            eatencol: t
        });
        f[p][l][q].addChild(f[k][h][g])
    };
    this.getNode = function(p, l) {
        f[p][l][0] = m.all(function(q) {
            return q.model.row === p && q.model.col === l
        });
        return f[p][l][0]
    };
    this.getPath = function(p) {
        return p.getPath()
    };
    this.getTerminalNodes = function() {
        return m.all(function(p) {
            return !p.hasChildren()
        })
    };
    this._init(a)
}

function CTreeDecision(a) {
    var f, e, m;
    this._init = function(p) {
        f = [];
        for (var l = 0; l < SEARCH_DEPTH + 1; l++) f[l] = [];
        e = new TreeModel;
        m = e.parse(p);
        f[0][0] = m
    };
    this.getRoot = function() {
        return m
    };
    this.addNode = function(p, l, q, k, h, g, v, t) {
        f[q][k] = e.parse({
            rating: h,
            moves: g,
            depth: q,
            blackmatrix: v,
            whitematrix: t
        });
        f[p][l].addChild(f[q][k])
    };
    this.getNode = function(p, l) {
        return m.all(function(q) {
            return q.model.rating === p && q.model.depth === l
        })
    };
    this.getPath = function(p) {
        return p.getPath()
    };
    this.getTerminalNodes = function() {
        return m.all(function(p) {
            return !p.hasChildren()
        })
    };
    this._init(a)
}
var s_iScaleFactor = 1,
    s_oCanvasLeft, s_oCanvasTop, s_bIsIphone, s_bFocus = !0;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent ||
    navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}

function getSize(a) {
    var f = a.toLowerCase(),
        e = window.document,
        m = e.documentElement;
    if (void 0 === window["inner" + a]) a = m["client" + a];
    else if (window["inner" + a] != m["client" + a]) {
        var p = e.createElement("body");
        p.id = "vpw-test-b";
        p.style.cssText = "overflow:scroll";
        var l = e.createElement("div");
        l.id = "vpw-test-d";
        l.style.cssText = "position:absolute;top:-1000px";
        l.innerHTML = "<style>@media(" + f + ":" + m["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + f + ":7px!important}}</style>";
        p.appendChild(l);
        m.insertBefore(p, e.head);
        a = 7 == l["offset" + a] ? m["client" + a] : window["inner" + a];
        m.removeChild(p)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIpad() {
    var a = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
    return !a && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && 2 < navigator.maxTouchPoints ? !0 : a
}

function isMobile() {
    return isIpad() ? !0 : jQuery.browser.mobile
}

function isIOS() {
    for (var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); a.length;)
        if (navigator.platform === a.pop()) return s_bIsIphone = !0;
    return s_bIsIphone = !1
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function playSound(a, f, e) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(f), s_aSounds[a].loop(e), s_aSounds[a]) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, f) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(f)
}

function setMute(a, f) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(f)
}

function fadeSound(a, f, e, m) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].fade(f, e, m)
}

function soundPlaying(a) {
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) return s_aSounds[a].playing()
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = null !== platform.name && "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
        var f = getSize("Width");
        s_bFocus && _checkOrientation(f, a);
        var e = Math.min(a / CANVAS_HEIGHT, f / CANVAS_WIDTH),
            m = Math.round(CANVAS_WIDTH * e);
        e = Math.round(CANVAS_HEIGHT * e);
        if (e < a) {
            var p = a - e;
            e += p;
            m += CANVAS_WIDTH / CANVAS_HEIGHT * p
        } else m < f && (p = f - m, m += p, e += CANVAS_HEIGHT / CANVAS_WIDTH * p);
        p = a / 2 - e / 2;
        var l = f / 2 - m / 2,
            q = CANVAS_WIDTH / m;
        if (l * q < -EDGEBOARD_X ||
            p * q < -EDGEBOARD_Y) e = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), f / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), m = Math.round(CANVAS_WIDTH * e), e = Math.round(CANVAS_HEIGHT * e), p = (a - e) / 2, l = (f - m) / 2, q = CANVAS_WIDTH / m;
        s_iOffsetX = -1 * l * q;
        s_iOffsetY = -1 * p * q;
        0 <= p && (s_iOffsetY = 0);
        0 <= l && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oModeMenu && s_oModeMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone && s_oStage ? (canvas =
            document.getElementById("canvas"), s_oStage.canvas.width = 2 * m, s_oStage.canvas.height = 2 * e, canvas.style.width = m + "px", canvas.style.height = e + "px", s_iScaleFactor = 2 * Math.min(m / CANVAS_WIDTH, e / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", m + "px"), $("#canvas").css("height", e + "px")) : s_oStage && (s_oStage.canvas.width = m, s_oStage.canvas.height = e, s_iScaleFactor = Math.min(m / CANVAS_WIDTH, e / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > p || (p = (a - e) / 2);
        $("#canvas").css("top", p + "px");
        $("#canvas").css("left", l + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(a, f) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > f ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function inIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}

function createBitmap(a, f, e) {
    var m = new createjs.Bitmap(a),
        p = new createjs.Shape;
    f && e ? p.graphics.beginFill("#fff").drawRect(0, 0, f, e) : p.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    m.hitArea = p;
    return m
}

function createSprite(a, f, e, m, p, l) {
    a = null !== f ? new createjs.Sprite(a, f) : new createjs.Sprite(a);
    f = new createjs.Shape;
    f.graphics.beginFill("#000000").drawRect(-e, -m, p, l);
    a.hitArea = f;
    return a
}

function pad(a, f, e) {
    a += "";
    return a.length >= f ? a : Array(f - a.length + 1).join(e || "0") + a
}

function randomFloatBetween(a, f, e) {
    "undefined" === typeof e && (e = 2);
    return parseFloat(Math.min(a + Math.random() * (f - a), f).toFixed(e))
}

function rotateVector2D(a, f) {
    var e = f.getX() * Math.cos(a) + f.getY() * Math.sin(a),
        m = f.getX() * -Math.sin(a) + f.getY() * Math.cos(a);
    f.set(e, m)
}

function tweenVectorsOnX(a, f, e) {
    return a + e * (f - a)
}

function shuffle(a) {
    for (var f = a.length, e, m; 0 !== f;) m = Math.floor(Math.random() * f), --f, e = a[f], a[f] = a[m], a[m] = e;
    return a
}

function bubbleSort(a) {
    do {
        var f = !1;
        for (var e = 0; e < a.length - 1; e++) a[e] > a[e + 1] && (f = a[e], a[e] = a[e + 1], a[e + 1] = f, f = !0)
    } while (f)
}

function compare(a, f) {
    return a.index > f.index ? -1 : a.index < f.index ? 1 : 0
}

function easeLinear(a, f, e, m) {
    return e * a / m + f
}

function easeInQuad(a, f, e, m) {
    return e * (a /= m) * a + f
}

function easeInSine(a, f, e, m) {
    return -e * Math.cos(a / m * (Math.PI / 2)) + e + f
}

function easeInCubic(a, f, e, m) {
    return e * (a /= m) * a * a + f
}

function getTrajectoryPoint(a, f) {
    var e = new createjs.Point,
        m = (1 - a) * (1 - a),
        p = a * a;
    e.x = m * f.start.x + 2 * (1 - a) * a * f.traj.x + p * f.end.x;
    e.y = m * f.start.y + 2 * (1 - a) * a * f.traj.y + p * f.end.y;
    return e
}

function formatTime(a) {
    a /= 1E3;
    var f = Math.floor(a / 60);
    a = Math.floor(a - 60 * f);
    var e = "";
    e = 10 > f ? e + ("0" + f + ":") : e + (f + ":");
    return 10 > a ? e + ("0" + a) : e + a
}

function degreesToRadians(a) {
    return a * Math.PI / 180
}

function checkRectCollision(a, f) {
    var e = getBounds(a, .9);
    var m = getBounds(f, .98);
    return calculateIntersection(e, m)
}

function calculateIntersection(a, f) {
    var e, m, p, l;
    var q = a.x + (e = a.width / 2);
    var k = a.y + (m = a.height / 2);
    var h = f.x + (p = f.width / 2);
    var g = f.y + (l = f.height / 2);
    q = Math.abs(q - h) - (e + p);
    k = Math.abs(k - g) - (m + l);
    return 0 > q && 0 > k ? (q = Math.min(Math.min(a.width, f.width), -q), k = Math.min(Math.min(a.height, f.height), -k), {
        x: Math.max(a.x, f.x),
        y: Math.max(a.y, f.y),
        width: q,
        height: k,
        rect1: a,
        rect2: f
    }) : null
}

function getBounds(a, f) {
    var e = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        e.x2 = -Infinity;
        e.y2 = -Infinity;
        var m = a.children,
            p = m.length,
            l;
        for (l = 0; l < p; l++) {
            var q = getBounds(m[l], 1);
            q.x < e.x && (e.x = q.x);
            q.y < e.y && (e.y = q.y);
            q.x + q.width > e.x2 && (e.x2 = q.x + q.width);
            q.y + q.height > e.y2 && (e.y2 = q.y + q.height)
        }
        Infinity == e.x && (e.x = 0);
        Infinity == e.y && (e.y = 0);
        Infinity == e.x2 && (e.x2 = 0);
        Infinity == e.y2 && (e.y2 = 0);
        e.width = e.x2 - e.x;
        e.height = e.y2 - e.y;
        delete e.x2;
        delete e.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            p =
                a.sourceRect || a.image;
            l = p.width * f;
            var k = p.height * f
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                p = a.spriteSheet.getFrame(a.currentFrame);
                l = p.rect.width;
                k = p.rect.height;
                m = p.regX;
                var h = p.regY
            } else e.x = a.x || 0, e.y = a.y || 0;
        else e.x = a.x || 0, e.y = a.y || 0;
        m = m || 0;
        l = l || 0;
        h = h || 0;
        k = k || 0;
        e.regX = m;
        e.regY = h;
        p = a.localToGlobal(0 - m, 0 - h);
        q = a.localToGlobal(l - m, k - h);
        l = a.localToGlobal(l - m, 0 - h);
        m = a.localToGlobal(0 - m, k - h);
        e.x =
            Math.min(Math.min(Math.min(p.x, q.x), l.x), m.x);
        e.y = Math.min(Math.min(Math.min(p.y, q.y), l.y), m.y);
        e.width = Math.max(Math.max(Math.max(p.x, q.x), l.x), m.x) - e.x;
        e.height = Math.max(Math.max(Math.max(p.y, q.y), l.y), m.y) - e.y
    }
    return e
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
    for (var f = a.length, e, m; 0 < f;) m = Math.floor(Math.random() * f), f--, e = a[f], a[f] = a[m], a[m] = e;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var f = document.createEvent("MouseEvents");
            f.initEvent("click", !0, !0);
            a.dispatchEvent(f)
        }
    }
};
(function() {
    function a(e) {
        var m = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        e = e || window.event;
        e.type in m ? document.body.className = m[e.type] : (document.body.className = this[f] ? "hidden" : "visible", "hidden" === document.body.className ? (s_oMain.stopUpdate(), s_bFocus = !1) : (s_oMain.startUpdate(), s_bFocus = !0))
    }
    var f = "hidden";
    f in document ? document.addEventListener("visibilitychange", a) : (f = "mozHidden") in document ? document.addEventListener("mozvisibilitychange",
        a) : (f = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", a) : (f = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var f = window.location.search.substring(1).split("&"), e = 0; e < f.length; e++) {
        var m = f[e].split("=");
        if (m[0] == a) return m[1]
    }
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.isEnabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oModeMenu && s_oModeMenu.resetFullscreenBut())
}
if (screenfull.isEnabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oModeMenu && s_oModeMenu.resetFullscreenBut()
});
var s_szGameID = "e0d570df45e146899b986770297c0210";
window.GD_OPTIONS = {
    gameId: s_szGameID,
    onEvent: function(a) {
        switch (a.name) {
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
                })["catch"](function(f) {
                    return console.info(f)
                })
        }
    }
};
(function(a, f, e) {
    var m = a.getElementsByTagName(f)[0];
    a.getElementById(e) || (a = a.createElement(f), a.id = e, a.src = "main.min.js", m.parentNode.insertBefore(a, m))
})(document, "script", "gamedistribution-jssdk");
var s_bAdShown = !1;

function CSpriteLibrary() {
    var a = {},
        f, e, m, p, l, q;
    this.init = function(k, h, g) {
        f = {};
        m = e = 0;
        p = k;
        l = h;
        q = g
    };
    this.addSprite = function(k, h) {
        if (!a.hasOwnProperty(k)) {
            var g = new Image;
            a[k] = f[k] = {
                szPath: h,
                oSprite: g,
                bLoaded: !1
            };
            e++
        }
    };
    this.getSprite = function(k) {
        return a.hasOwnProperty(k) ? a[k].oSprite : null
    };
    this._onSpritesLoaded = function() {
        e = 0;
        l.call(q)
    };
    this._onSpriteLoaded = function() {
        p.call(q);
        ++m === e && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var k in f) f[k].oSprite.oSpriteLibrary = this, f[k].oSprite.szKey =
            k, f[k].oSprite.onload = function() {
                this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey)
            }, f[k].oSprite.onerror = function(h) {
                var g = h.currentTarget;
                setTimeout(function() {
                    f[g.szKey].oSprite.src = f[g.szKey].szPath
                }, 500)
            }, f[k].oSprite.src = f[k].szPath
    };
    this.setLoaded = function(k) {
        a[k].bLoaded = !0
    };
    this.isLoaded = function(k) {
        return a[k].bLoaded
    };
    this.getNumSprites = function() {
        return e
    }
}
var CANVAS_WIDTH = 1280,
    CANVAS_HEIGHT = 1920,
    EDGEBOARD_X = 190,
    EDGEBOARD_Y = 220,
    FPS = 30,
    FPS_TIME = 1E3 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    GAME_NAME = "master_checkers",
    PRIMARY_FONT = "arialrounded",
    SOUNDTRACK_VOLUME_IN_GAME = 1,
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
    BOARD8 = 0,
    NUM_CELL = 8,
    TOT_CELL = 64,
    BOARD_LENGTH = 815,
    CELL_LENGTH = BOARD_LENGTH / NUM_CELL,
    BG_BLACK = 0,
    BG_WHITE = 1,
    DRAW = -1,
    WIN_WHITE = 0,
    WIN_BLACK = 1,
    WIN_WHITE_BLACK_NOMOVES = 2,
    WIN_BLACK_WHITE_NOMOVES = 3,
    PAWN_WHITE = 0,
    PAWN_BLACK = 1,
    KING_WHITE = 2,
    KING_BLACK = 3,
    PAWN_NULL = -1,
    PAWN_STOP = -1,
    PAWN_MOVE = 0,
    PAWN_EAT = 1,
    ALERT_TYPE_NOMOVES = 0,
    ALERT_TYPE_STALL = 1,
    PAWN_SIZE = 100,
    TIME_MOVE = 500,
    TIME_LOOP_WAIT = 1E3,
    MIN_AI_THINKING = 1E3,
    MAX_AI_THINKING = 1500,
    SEARCH_DEPTH = 4,
    DRAW_COUNTER = 40,
    ENABLE_CHECK_ORIENTATION, ENABLE_FULLSCREEN;

function CPreloader() {
    var a, f, e, m, p, l, q, k, h, g;
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
        h.unload()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var v = new createjs.Shape;
        v.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.addChild(v);
        v = s_oSpriteLibrary.getSprite("200x200");
        q = createBitmap(v);
        q.regX = .5 * v.width;
        q.regY = .5 * v.height;
        q.x = CANVAS_WIDTH / 2;
        q.y = CANVAS_HEIGHT / 2 - 180;
        g.addChild(q);
        k = new createjs.Shape;
        k.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(q.x - 100, q.y - 100, 200, 200, 10);
        g.addChild(k);
        q.mask = k;
        v = s_oSpriteLibrary.getSprite("progress_bar");
        m = createBitmap(v);
        m.x = CANVAS_WIDTH / 2 - v.width / 2;
        m.y = CANVAS_HEIGHT / 2 + 50;
        g.addChild(m);
        a = v.width;
        f = v.height;
        p = new createjs.Shape;
        p.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(m.x, m.y, 1, f);
        g.addChild(p);
        m.mask = p;
        e = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2 + 100;
        e.textBaseline = "alphabetic";
        e.textAlign = "center";
        g.addChild(e);
        v = s_oSpriteLibrary.getSprite("but_start");
        h = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT /
            2, v, TEXT_PRELOADER_CONTINUE, "Arial", "#000", 40, g);
        h.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        h.setVisible(!1);
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.addChild(l);
        createjs.Tween.get(l).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(l);
            g.removeChild(l)
        })
    };
    this._onButStartRelease = function() {
        $(s_oMain).trigger("show_preroll_ad");
        s_oMain._onRemovePreloader()
    };
    this.refreshLoader = function(v) {
        e.text = v + "%";
        100 === v && ($(s_oMain).trigger("show_preroll_ad"),
            s_oMain._onRemovePreloader(), e.visible = !1, m.visible = !1);
        p.graphics.clear();
        v = Math.floor(v * a / 100);
        p.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(m.x, m.y, v, f)
    };
    this._init()
}

function CCreditsPanel() {
    var a, f, e, m, p, l, q;
    this._init = function() {
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m.alpha = 0;
        s_oStage.addChild(m);
        createjs.Tween.get(m).to({
            alpha: .7
        }, 500);
        var k = s_oSpriteLibrary.getSprite("msg_box");
        q = new createjs.Container;
        q.y = CANVAS_HEIGHT + k.height / 2;
        s_oStage.addChild(q);
        a = createBitmap(k);
        a.regX = k.width / 2;
        a.regY = k.height / 2;
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2;
        q.addChild(a);
        p = new createjs.Shape;
        p.graphics.beginFill("#0f0f0f").drawRect(0,
            0, CANVAS_WIDTH, CANVAS_HEIGHT);
        p.alpha = .01;
        l = p.on("click", this._onLogoButRelease);
        q.addChild(p);
        var h = s_oSpriteLibrary.getSprite("but_exit");
        e = new CGfxButton(1E3, 610, h, q);
        e.addEventListener(ON_MOUSE_UP, this.unload, this);
        h = k.width - 100;
        var g = 80,
            v = CANVAS_WIDTH / 2,
            t = CANVAS_HEIGHT / 2 - 120;
        new CTLText(q, v - h / 2, t - g / 2, h, g, 80, "center", "#402604", PRIMARY_FONT, 1, 2, 2, TEXT_CREDITS_DEVELOPED, !0, !0, !1, !1);
        h = s_oSpriteLibrary.getSprite("logo_ctl");
        f = createBitmap(h);
        f.regX = h.width / 2;
        f.regY = h.height / 2;
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2;
        q.addChild(f);
        h = k.width - 100;
        g = 68;
        v = CANVAS_WIDTH / 2;
        t = CANVAS_HEIGHT / 2 + 120;
        new CTLText(q, v - h / 2, t - g / 2, h, g, 68, "center", "#402604", PRIMARY_FONT, 1, 2, 2, "www.codethislab.com", !0, !0, !1, !1);
        (new createjs.Tween.get(q)).to({
            y: 0
        }, 1E3, createjs.Ease.backOut)
    };
    this.unload = function() {
        p.off("click", l);
        e.unload();
        e = null;
        s_oStage.removeChild(m);
        s_oStage.removeChild(q)
    };
    this._onLogoButRelease = function() {};
    this._init()
}

function CMain(a) {
    var f, e = 0,
        m = 0,
        p = STATE_LOADING,
        l, q;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        createjs.Touch.enable(s_oStage, !0);
        s_bMobile = isMobile();
        !1 === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        l = new CPreloader
    };
    this.preloaderReady = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        this._loadImages();
        f = !0
    };
    this.soundLoaded = function() {
        e++;
        l.refreshLoader(Math.floor(e / m * 100))
    };
    this._initSounds = function() {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "press_button",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "ot_game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "ot_click_cell",
            loop: !1,
            volume: 1,
            ingamename: "click_cell"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "ot_win",
            loop: !1,
            volume: 1,
            ingamename: "win"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "drawer",
            loop: !1,
            volume: 1,
            ingamename: "drawer"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "king",
            loop: !1,
            volume: 1,
            ingamename: "king"
        });
        m += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var h = 0; h < s_aSoundsInfo.length; h++) this.tryToLoadSound(s_aSoundsInfo[h], !1)
    };
    this.tryToLoadSound = function(h, g) {
        setTimeout(function() {
            s_aSounds[h.ingamename] =
                new Howl({
                    src: [h.path + h.filename + ".mp3"],
                    autoplay: !1,
                    preload: !0,
                    loop: h.loop,
                    volume: h.volume,
                    onload: s_oMain.soundLoaded,
                    onloaderror: function(v, t) {
                        for (var r = 0; r < s_aSoundsInfo.length; r++)
                            if (v === s_aSounds[s_aSoundsInfo[r].ingamename]._sounds[0]._id) {
                                s_oMain.tryToLoadSound(s_aSoundsInfo[r], !0);
                                break
                            }
                    },
                    onplayerror: function(v) {
                        for (var t = 0; t < s_aSoundsInfo.length; t++)
                            if (v === s_aSounds[s_aSoundsInfo[t].ingamename]._sounds[0]._id) {
                                s_aSounds[s_aSoundsInfo[t].ingamename].once("unlock", function() {
                                    s_aSounds[s_aSoundsInfo[t].ingamename].play();
                                    "soundtrack" === s_aSoundsInfo[t].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                                });
                                break
                            }
                    }
                })
        }, g ? 200 : 0)
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_mod_menu", "./sprites/bg_mod_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game",
            "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("but_vs_man", "./sprites/vs_man_panel.png");
        s_oSpriteLibrary.addSprite("but_vs_pc", "./sprites/vs_pc_panel.png");
        s_oSpriteLibrary.addSprite("message", "./sprites/message.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon",
            "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_settings", "./sprites/but_settings.png");
        s_oSpriteLibrary.addSprite("white_chip", "./sprites/chip_vertical_white.png");
        s_oSpriteLibrary.addSprite("black_chip", "./sprites/chip_vertical_black.png");
        s_oSpriteLibrary.addSprite("board8", "./sprites/grid_8.png");
        s_oSpriteLibrary.addSprite("chip_box", "./sprites/chip_box.png");
        s_oSpriteLibrary.addSprite("chip_flip_white", "./sprites/chip_flip_white.png");
        s_oSpriteLibrary.addSprite("chip_flip_black",
            "./sprites/chip_flip_black.png");
        s_oSpriteLibrary.addSprite("highlight", "./sprites/highlight.png");
        s_oSpriteLibrary.addSprite("bg_turn", "./sprites/player_panel.png");
        s_oSpriteLibrary.addSprite("pawn", "./sprites/pawn.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        m += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        e++;
        l.refreshLoader(Math.floor(e / m * 100))
    };
    this._onRemovePreloader =
        function() {
            try {
                checkMoreGames(s_szGameID, "middle-left", ["board", "multiplayer"], [], -1, "brown")
            } catch (h) {}
            l.unload();
            this.gotoMenu()
        };
    this._onAllImagesLoaded = function() {};
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this.gotoMenu = function() {
        try {
            showMoreGames()
        } catch (h) {}
        new CMenu;
        p = STATE_MENU
    };
    this.gotoModeMenu = function() {
        new CModeMenu;
        p = STATE_MENU
    };
    this.gotoGame = function(h) {
        s_iGameType = h;
        q = new CGame(k);
        p = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        p = STATE_HELP
    };
    this.stopUpdate =
        function() {
            f = !1;
            createjs.Ticker.paused = !0;
            $("#block_game").css("display", "block");
            Howler.mute(!0)
        };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        f = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        s_bAudioActive && !s_bAdShown && Howler.mute(!1)
    };
    this._update = function(h) {
        if (!1 !== f) {
            var g = (new Date).getTime();
            s_iTimeElaps = g - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = g;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            p === STATE_GAME && q.update();
            s_oStage.update(h)
        }
    };
    s_oMain = this;
    var k = a;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    ENABLE_FULLSCREEN = a.fullscreen;
    s_bAudioActive = a.audio_enable_on_startup;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !1,
    s_bFullscreen = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oStage, s_oMain, s_oSpriteLibrary, s_oCanvas, s_iGameType, s_bWeightSquares = !1,
    s_bEdgeSensitive = !1,
    s_aSounds, s_aSoundsInfo;

function CTextButton(a, f, e, m, p, l, q, k) {
    var h, g, v, t, r, x, y;
    this._init = function(G, u, C, B, F, I, J, E) {
        h = [];
        g = [];
        var S = createBitmap(C),
            L = Math.ceil(J / 20);
        r = new createjs.Text(B, "bold " + J + "px " + F, "#000000");
        r.textAlign = "center";
        r.textBaseline = "alphabetic";
        var U = r.getBounds();
        r.x = C.width / 2 + L;
        r.y = Math.floor(C.height / 2) + U.height / 3 + L;
        t = new createjs.Text(B, "bold " + J + "px " + F, I);
        t.textAlign = "center";
        t.textBaseline = "alphabetic";
        U = t.getBounds();
        t.x = C.width / 2;
        t.y = Math.floor(C.height / 2) + U.height / 3;
        v = new createjs.Container;
        v.x = G;
        v.y = u;
        v.regX = C.width / 2;
        v.regY = C.height / 2;
        v.addChild(S, r, t);
        E.addChild(v);
        this._initListener()
    };
    this.unload = function() {
        v.off("mousedown", x);
        v.off("pressup", y);
        k.removeChild(v)
    };
    this.setVisible = function(G) {
        v.visible = G
    };
    this._initListener = function() {
        oParent = this;
        x = v.on("mousedown", this.buttonDown);
        y = v.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(G, u, C) {
        h[G] = u;
        g[G] = C
    };
    this.buttonRelease = function() {
        v.scaleX = 1;
        v.scaleY = 1;
        h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(g[ON_MOUSE_UP])
    };
    this.buttonDown =
        function() {
            v.scaleX = .9;
            v.scaleY = .9;
            h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])
        };
    this.setTextPosition = function(G) {
        t.y = G;
        r.y = G + 2
    };
    this.setPosition = function(G, u) {
        v.x = G;
        v.y = u
    };
    this.setX = function(G) {
        v.x = G
    };
    this.setY = function(G) {
        v.y = G
    };
    this.getButtonImage = function() {
        return v
    };
    this.getX = function() {
        return v.x
    };
    this.getY = function() {
        return v.y
    };
    this.removeStroke = function() {
        r.visible = !1
    };
    this._init(a, f, e, m, p, l, q, k);
    return this
}

function CToggle(a, f, e, m, p) {
    var l, q, k, h, g, v, t;
    this._init = function(r, x, y, G, u) {
        q = [];
        k = [];
        var C = new createjs.SpriteSheet({
            images: [y],
            frames: {
                width: y.width / 2,
                height: y.height,
                regX: y.width / 2 / 2,
                regY: y.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        l = G;
        h = createSprite(C, "state_" + l, y.width / 2 / 2, y.height / 2, y.width / 2, y.height);
        h.x = r;
        h.y = x;
        h.stop();
        u.addChild(h);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? h.off("mousedown", g) : (h.off("mousedown", g), h.off("mouseover", v));
        h.off("pressup", t);
        p.removeChild(h)
    };
    this._initListener = function() {
        s_bMobile ? g = h.on("mousedown", this.buttonDown) : (g = h.on("mousedown", this.buttonDown), v = h.on("mouseover", this.buttonOver));
        t = h.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(r, x, y) {
        q[r] = x;
        k[r] = y
    };
    this.setActive = function(r) {
        l = r;
        h.gotoAndStop("state_" + l)
    };
    this.buttonRelease = function() {
        h.scaleX = 1;
        h.scaleY = 1;
        playSound("click", 1, !1);
        l = !l;
        h.gotoAndStop("state_" + l);
        q[ON_MOUSE_UP] && q[ON_MOUSE_UP].call(k[ON_MOUSE_UP], l)
    };
    this.buttonDown = function() {
        h.scaleX = .9;
        h.scaleY =
            .9;
        q[ON_MOUSE_DOWN] && q[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
    };
    this.buttonOver = function(r) {
        s_bMobile || (r.target.cursor = "pointer")
    };
    this.setPosition = function(r, x) {
        h.x = r;
        h.y = x
    };
    this._init(a, f, e, m, p)
}

function CGfxButton(a, f, e, m) {
    var p, l, q, k, h, g, v, t;
    this._init = function(r, x, y, G) {
        p = !1;
        l = 1;
        q = [];
        k = [];
        h = createBitmap(y);
        h.x = r;
        h.y = x;
        h.scaleX = h.scaleY = l;
        h.regX = y.width / 2;
        h.regY = y.height / 2;
        G.addChild(h);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? h.off("mousedown", g) : (h.off("mousedown", g), h.off("mouseover", v));
        h.off("pressup", t);
        m.removeChild(h)
    };
    this.setVisible = function(r) {
        h.visible = r
    };
    this.setClickable = function(r) {
        p = !r
    };
    this._initListener = function() {
        s_bMobile ? g = h.on("mousedown", this.buttonDown) :
            (g = h.on("mousedown", this.buttonDown), v = h.on("mouseover", this.buttonOver));
        t = h.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(r, x, y) {
        q[r] = x;
        k[r] = y
    };
    this.buttonRelease = function() {
        p || (h.scaleX = l, h.scaleY = l, q[ON_MOUSE_UP] && q[ON_MOUSE_UP].call(k[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        p || (h.scaleX = .9 * l, h.scaleY = .9 * l, playSound("click", 1, !1), q[ON_MOUSE_DOWN] && q[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN]))
    };
    this.buttonOver = function(r) {
        s_bMobile || p || (r.target.cursor = "pointer")
    };
    this.pulseAnimation =
        function() {
            createjs.Tween.get(h, {
                loop: !0
            }).to({
                scaleX: .9 * l,
                scaleY: .9 * l
            }, 850, createjs.Ease.quadOut).to({
                scaleX: l,
                scaleY: l
            }, 650, createjs.Ease.quadIn)
        };
    this.trembleAnimation = function() {
        createjs.Tween.get(h, {
            loop: !0
        }).to({
            rotation: 5
        }, 75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750)
    };
    this.setPosition = function(r, x) {
        h.x = r;
        h.y = x
    };
    this.setX = function(r) {
        h.x = r
    };
    this.setY = function(r) {
        h.y = r
    };
    this.getButtonImage = function() {
        return h
    };
    this.getX =
        function() {
            return h.x
        };
    this.getY = function() {
        return h.y
    };
    this._init(a, f, e, m);
    return this
}

function CMessage(a, f) {
    var e, m, p, l;
    this._init = function(q, k) {
        q === PAWN_WHITE ? (e = 400, m = -200, p = 1490) : (e = 920, m = CANVAS_HEIGHT + 200, p = 430);
        l = new createjs.Container;
        l.x = e;
        l.y = m;
        s_bMobile && q === PAWN_BLACK && (l.rotation = 180);
        s_oStage.addChild(l);
        var h = s_oSpriteLibrary.getSprite("message"),
            g = createBitmap(h);
        g.regX = h.width / 2;
        g.regY = h.height / 2;
        l.addChild(g);
        g = h.width - 20;
        h = h.height - 20;
        new CTLText(l, -(g / 2), -(h / 2), g, h, 40, "center", "#ffffff", PRIMARY_FONT, 1, 2, 2, k, !0, !0, !0, !1);
        createjs.Tween.get(l).to({
            y: p
        }, 2E3, createjs.Ease.bounceOut)
    };
    this.unload = function() {
        s_oStage.removeChild(l)
    };
    this._init(a, f)
}

function CMenu() {
    var a, f, e, m, p, l, q, k, h, g, v, t, r = null,
        x = null;
    this._init = function() {
        768 <= getSize("Width") && $("#div_display_id").css("display", "block");
        q = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(q);
        var y = s_oSpriteLibrary.getSprite("but_play");
        k = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 540, y, s_oStage);
        k.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        k.pulseAnimation();
        y = s_oSpriteLibrary.getSprite("but_credits");
        p = 20 + y.width / 2;
        l = y.height / 2 + 25;
        v = new CGfxButton(p,
            l, y, s_oStage);
        v.addEventListener(ON_MOUSE_UP, this._onCredits, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) y = s_oSpriteLibrary.getSprite("audio_icon"), a = CANVAS_WIDTH - y.height / 2 - 10, f = y.height / 2 + 25, g = new CToggle(a, f, y, s_bAudioActive, s_oStage), g.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        y = window.document;
        var G = y.documentElement;
        r = G.requestFullscreen || G.mozRequestFullScreen || G.webkitRequestFullScreen || G.msRequestFullscreen;
        x = y.exitFullscreen || y.mozCancelFullScreen || y.webkitExitFullscreen ||
            y.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (r = !1);
        r && screenfull.isEnabled && (y = s_oSpriteLibrary.getSprite("but_fullscreen"), e = p + y.width / 2 + 10, m = l, t = new CToggle(e, m, y, s_bFullscreen, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(h);
        createjs.Tween.get(h).to({
            alpha: 0
        }, 1E3).call(function() {
            h.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        k.unload();
        k = null;
        h.visible = !1;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) g.unload(), g = null;
        v.unload();
        r && screenfull.isEnabled && t.unload();
        s_oStage.removeChild(q);
        s_oMenu = q = null
    };
    this.refreshButtonPos = function(y, G) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || g.setPosition(a - y, G + f);
        v.setPosition(p + y, G + l);
        r && screenfull.isEnabled && t.setPosition(e + y, G + m)
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
        } catch (y) {}
        this.unload();
        $(s_oMain).trigger("start_session");
        s_oMain.gotoModeMenu()
    };
    this._onCredits = function() {
        new CCreditsPanel
    };
    this.resetFullscreenBut = function() {
        r && screenfull.isEnabled && t.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? x.call(window.document) : r.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CModeMenu() {
    var a, f, e, m, p, l, q, k, h, g = null,
        v, t = null,
        r = null;
    this._init = function() {
        var x = createBitmap(s_oSpriteLibrary.getSprite("bg_mod_menu"));
        s_oStage.addChild(x);
        x = s_oSpriteLibrary.getSprite("but_exit");
        a = CANVAS_WIDTH - x.height / 2 - 10;
        f = x.height / 2 + 25;
        h = new CGfxButton(a, f, x, s_oStage);
        h.addEventListener(ON_MOUSE_UP, this._onExit, this);
        e = CANVAS_WIDTH - x.width / 2 - 125;
        m = x.height / 2 + 25;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) x = s_oSpriteLibrary.getSprite("audio_icon"), g = new CToggle(e, m, x, s_bAudioActive,
            s_oStage), g.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        x = window.document;
        var y = x.documentElement;
        t = y.requestFullscreen || y.mozRequestFullScreen || y.webkitRequestFullScreen || y.msRequestFullscreen;
        r = x.exitFullscreen || x.mozCancelFullScreen || x.webkitExitFullscreen || x.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (t = !1);
        t && screenfull.isEnabled && (x = s_oSpriteLibrary.getSprite("but_fullscreen"), p = x.width / 4 + 20, l = x.height / 2 + 25, v = new CToggle(p, l, x, s_bFullscreen, s_oStage), v.addEventListener(ON_MOUSE_UP,
            this._onFullscreenRelease, this));
        new CTLText(s_oStage, CANVAS_WIDTH / 2 - 350, 350, 700, 100, 100, "center", "#ffffff", PRIMARY_FONT, 1, 2, 2, TEXT_MODE, !0, !0, !1, !1);
        x = s_oSpriteLibrary.getSprite("but_vs_man");
        q = new CGfxButton(CANVAS_WIDTH / 2, 800, x, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onButHumanRelease, this);
        x = s_oSpriteLibrary.getSprite("but_vs_pc");
        k = new CGfxButton(CANVAS_WIDTH / 2, 1300, x, s_oStage);
        k.addEventListener(ON_MOUSE_UP, this._onButComputerRelease, this);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        q.unload();
        k.unload();
        h.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) g.unload(), g = null;
        t && screenfull.isEnabled && v.unload();
        s_oModeMenu = null;
        s_oStage.removeAllChildren()
    };
    this.refreshButtonPos = function(x, y) {
        h.setPosition(a - x, y + f);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || g.setPosition(e - x, y + m);
        t && screenfull.isEnabled && v.setPosition(p + x, y + l)
    };
    this.resetFullscreenBut = function() {
        t && screenfull.isEnabled && v.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ?
            r.call(window.document) : t.call(window.document.documentElement);
        sizeHandler()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
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
        s_oMain.gotoGame(MODE_COMPUTER)
    };
    s_oModeMenu = this;
    this._init()
}
var s_oModeMenu = null;

function CGame(a) {
    var f, e, m, p, l, q = !1,
        k, h, g, v, t, r, x, y = 0,
        G, u, C, B, F, I, J, E, S = null,
        L, U, Y = null,
        W, M = null,
        R, Z, X = null;
    this._init = function() {
        l = p = m = !1;
        k = PAWN_WHITE;
        t = v = h = g = 0;
        I = [];
        var b = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(b);
        U = new createjs.Container;
        U.x = CANVAS_WIDTH / 2;
        U.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(U);
        L = new createjs.Container;
        L.x = CANVAS_WIDTH / 2;
        L.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(L);
        b = new createjs.Container;
        s_oStage.addChild(b);
        E = new CInterface;
        var d = s_oSpriteLibrary.getSprite("board8");
        W = new createBitmap(d);
        W.regX = d.width / 2;
        W.regY = d.height / 2;
        L.addChild(W);
        this._initGrid();
        this._activeCellClick();
        new CStartAnimation(U, B, F, b)
    };
    this._initGrid = function() {
        var b = NUM_CELL,
            d = CELL_LENGTH,
            c = -BOARD_LENGTH / 2 + d / 2;
        G = [];
        for (var n = 0; n < b; n++) {
            G[n] = [];
            for (var A = 0; A < b; A++) G[n][A] = {
                x: c + A * d,
                y: c + n * d
            }
        }
        u = [];
        C = [];
        d = BG_BLACK;
        for (n = 0; n < b; n++) {
            u[n] = [];
            C[n] = [];
            for (A = 0; A < b; A++) u[n][A] = new CCell(G[n][A].x, G[n][A].y, -1, n, A, d, L), u[n][A].setVisible(!1), C[n][A] = -1, d = d === BG_BLACK ? BG_WHITE : BG_BLACK;
            d = 1 === n % 2 ? BG_BLACK :
                BG_WHITE
        }
        F = [];
        for (n = 0; 3 > n; n++)
            for (A = 0; A < b; A++) u[n][A].getBgColor() === BG_BLACK && (u[n][A].setColor(PAWN_BLACK), C[n][A] = PAWN_BLACK, F.push({
                x: u[n][A].getGlobalX(),
                y: u[n][A].getGlobalY()
            }));
        B = [];
        for (n = b - 3; n < b; n++)
            for (A = 0; A < b; A++) u[n][A].getBgColor() === BG_BLACK && (u[n][A].setColor(PAWN_WHITE), C[n][A] = PAWN_WHITE, B.push({
                x: u[n][A].getGlobalX(),
                y: u[n][A].getGlobalY()
            }));
        E.activePlayer(PAWN_WHITE)
    };
    this._AIMoves = function(b) {
        var d = 1 < b.length ? Math.floor(Math.random() * b.length) : 0;
        M = {
            row: b[d].model.moves.currow,
            col: b[d].model.moves.curcol
        };
        var c = b[d].model.moves.destrow,
            n = b[d].model.moves.destcol,
            A = [];
        if (null === b[d].model.moves.rawpath || 1 === b[d].model.moves.rawpath.length) A[0] = [{
            row: c,
            col: n
        }];
        else {
            A[0] = [];
            for (var D = 0; D < b[d].model.moves.rawpath.length; D++) c = b[d].model.moves.rawpath[D].model.row, n = b[d].model.moves.rawpath[D].model.col, A[0].push({
                row: c,
                col: n
            })
        }
        u[M.row][M.col].setMovesChain(A);
        k === PAWN_BLACK && s_iGameType === MODE_COMPUTER && (Y = new CThinking, setTimeout(function() {
            Y.unload();
            aa._movePawn(A[0][0].row,
                A[0][0].col);
            Y = null
        }, MIN_AI_THINKING + Math.random() * (MAX_AI_THINKING - MIN_AI_THINKING)))
    };
    this.changeTurn = function() {
        this.countPawn();
        if (0 === r) this.gameOver(WIN_WHITE);
        else if (0 === x) this.gameOver(WIN_BLACK);
        else if (y++, y === DRAW_COUNTER) this.gameOver(DRAW);
        else {
            if (k === PAWN_WHITE) {
                var b = this._checkCanMove(PAWN_BLACK);
                if (!b) {
                    this.gameOver(WIN_WHITE_BLACK_NOMOVES);
                    return
                }
            } else if (b = this._checkCanMove(PAWN_WHITE), !b) {
                this.gameOver(WIN_BLACK_WHITE_NOMOVES);
                return
            }
            null !== X && (X.unload(), X = null);
            k === PAWN_BLACK ?
                (k = PAWN_WHITE, s_iGameType === MODE_COMPUTER && (q = !1)) : (k = PAWN_BLACK, s_iGameType === MODE_COMPUTER && (q = !0, b = this._buildDecisionTree(), this._AIMoves(b)));
            E.activePlayer(k);
            (s_iGameType === MODE_HUMAN || s_iGameType === MODE_COMPUTER && k === PAWN_WHITE) && this._activeCellClick()
        }
    };
    this._disableAllClick = function() {
        for (var b = 0; b < NUM_CELL; b++)
            for (var d = 0; d < NUM_CELL; d++) u[b][d].setClickableArea(!1)
    };
    this.cellClicked = function(b, d) {
        q || (null === M ? this._activePawn(b, d) : M.row === b && M.col === d ? (this._resetMoves(), this._disableAllHighlight(),
            this._activeCellClick(), M = null) : M.row === b && M.col === d || u[b][d].isLegalMove() ? M.row === b && M.col === d || !u[b][d].isLegalMove() || (this._resetMoves(), this._disableAllHighlight(), this._disableAllClick(), this._movePawn(b, d)) : (this._resetMoves(), this._activeCellClick(), this._activePawn(b, d)))
    };
    this._movePawn = function(b, d) {
        var c = u[M.row][M.col].getX(),
            n = u[M.row][M.col].getY(),
            A = u[M.row][M.col].getType();
        A < KING_WHITE && (y = 0);
        var D = (M.row - b) / 2,
            w = (M.col - d) / 2;
        .5 < Math.abs(D) && (p = !0, f = M.row - D, e = M.col - w);
        u[M.row][M.col].setColor(PAWN_NULL);
        C[M.row][M.col] = PAWN_NULL;
        c = new CMovingCell(c, n, A, L);
        n = u[b][d].getX();
        A = u[b][d].getY();
        D = u[M.row][M.col].getMovesChain();
        1 < D[0].length ? c.move(n, A, TIME_MOVE, b, d, D) : c.move(n, A, TIME_MOVE, b, d, null);
        M = null
    };
    this.onFinishMove = function(b, d, c, n) {
        playSound("click_cell", 1, !1);
        c === PAWN_BLACK && b === NUM_CELL - 1 ? (playSound("king", 1, !1), u[b][d].setColor(KING_BLACK), C[b][d] = KING_BLACK, g--, E.refreshBlackPawnNumber(g)) : c === PAWN_WHITE && 0 === b ? (playSound("king", 1, !1), u[b][d].setColor(KING_WHITE), C[b][d] = KING_WHITE, h--,
            E.refreshWhitePawnNumber(h)) : (u[b][d].setColor(c), C[b][d] = c);
        p && (y = 0, u[f][e].getType() === PAWN_BLACK ? (g++, E.refreshBlackPawnNumber(g)) : u[f][e].getType() === PAWN_WHITE ? (h++, E.refreshWhitePawnNumber(h)) : u[f][e].getType() === KING_BLACK ? (g += 2, E.refreshBlackPawnNumber(g)) : (h += 2, E.refreshWhitePawnNumber(h)), u[f][e].setColor(PAWN_NULL), C[f][e] = PAWN_NULL);
        this._resetMoves();
        if (null !== n) {
            u[b][d].setMovesChain(n);
            M = {
                row: b,
                col: d
            };
            this._disableAllHighlight();
            k === PAWN_BLACK && s_iGameType === MODE_COMPUTER ? u[b][d].highlight(!1) :
                u[b][d].highlight(!0);
            for (b = 0; b < n.length; b++) u[n[b][0].row][n[b][0].col].showMoves(!0, c), u[n[b][0].row][n[b][0].col].setLegalMove(!0), u[n[b][0].row][n[b][0].col].setClickableArea(!0);
            k === PAWN_BLACK && s_iGameType === MODE_COMPUTER && setTimeout(function() {
                aa._movePawn(n[0][0].row, n[0][0].col)
            }, 500)
        } else this.changeTurn();
        p = !1
    };
    this._activePawn = function(b, d) {
        M = {
            row: b,
            col: d
        };
        this._disableAllHighlight();
        k === PAWN_BLACK && s_iGameType === MODE_COMPUTER ? u[b][d].highlight(!1, !1) : u[b][d].highlight(!0);
        var c = u[b][d].getType();
        this._checkLegalMoves(b, d, c, C, k);
        this._enableMoves(c)
    };
    this._checkLegalMoves = function(b, d, c, n, A) {
        var D = !1,
            w = [];
        J = [];
        c > PAWN_BLACK && (0 < d && b < NUM_CELL - 1 && n[b + 1][d - 1] === PAWN_NULL ? w.push({
                row: b + 1,
                col: d - 1,
                move: PAWN_MOVE,
                eatentype: n[b + 1][d - 1],
                eatenrow: b + 1,
                eatencol: d - 1
            }) : 1 < d && b < NUM_CELL - 2 && n[b + 1][d - 1] % 2 !== A && n[b + 2][d - 2] === PAWN_NULL && (w.push({
                row: b + 2,
                col: d - 2,
                move: PAWN_EAT,
                eatentype: n[b + 1][d - 1],
                eatenrow: b + 1,
                eatencol: d - 1
            }), D = !0), d < NUM_CELL - 1 && b < NUM_CELL - 1 && n[b + 1][d + 1] === PAWN_NULL ? w.push({
                row: b + 1,
                col: d + 1,
                move: PAWN_MOVE,
                eatentype: n[b + 1][d + 1],
                eatenrow: b + 1,
                eatencol: d + 1
            }) : d < NUM_CELL - 2 && b < NUM_CELL - 2 && n[b + 1][d + 1] % 2 !== A && n[b + 2][d + 2] === PAWN_NULL && (w.push({
                row: b + 2,
                col: d + 2,
                move: PAWN_EAT,
                eatentype: n[b + 1][d + 1],
                eatenrow: b + 1,
                eatencol: d + 1
            }), D = !0), 0 < d && 0 < b && n[b - 1][d - 1] === PAWN_NULL ? w.push({
                row: b - 1,
                col: d - 1,
                move: PAWN_MOVE,
                eatentype: n[b - 1][d - 1],
                eatenrow: b - 1,
                eatencol: d - 1
            }) : 1 < d && 1 < b && n[b - 1][d - 1] % 2 !== A && n[b - 2][d - 2] === PAWN_NULL && (w.push({
                row: b - 2,
                col: d - 2,
                move: PAWN_EAT,
                eatentype: n[b - 1][d - 1],
                eatenrow: b - 1,
                eatencol: d - 1
            }), D = !0), d < NUM_CELL - 1 &&
            0 < b && n[b - 1][d + 1] === PAWN_NULL ? w.push({
                row: b - 1,
                col: d + 1,
                move: PAWN_MOVE,
                eatentype: n[b - 1][d + 1],
                eatenrow: b - 1,
                eatencol: d + 1
            }) : d < NUM_CELL - 2 && 1 < b && n[b - 1][d + 1] % 2 !== A && n[b - 2][d + 2] === PAWN_NULL && (w.push({
                row: b - 2,
                col: d + 2,
                move: PAWN_EAT,
                eatentype: n[b - 1][d + 1],
                eatenrow: b - 1,
                eatencol: d + 1
            }), D = !0));
        c === PAWN_WHITE ? (0 < d && 0 < b && n[b - 1][d - 1] === PAWN_NULL ? w.push({
            row: b - 1,
            col: d - 1,
            move: PAWN_MOVE,
            eatentype: n[b - 1][d - 1],
            eatenrow: b - 1,
            eatencol: d - 1
        }) : 1 < d && 1 < b && n[b - 1][d - 1] % 2 !== A && n[b - 2][d - 2] === PAWN_NULL && (w.push({
            row: b - 2,
            col: d - 2,
            move: PAWN_EAT,
            eatentype: n[b - 1][d - 1],
            eatenrow: b - 1,
            eatencol: d - 1
        }), D = !0), d < NUM_CELL - 1 && 0 < b && n[b - 1][d + 1] === PAWN_NULL ? w.push({
            row: b - 1,
            col: d + 1,
            move: PAWN_MOVE,
            eatentype: n[b - 1][d + 1],
            eatenrow: b - 1,
            eatencol: d + 1
        }) : d < NUM_CELL - 2 && 1 < b && n[b - 1][d + 1] % 2 !== A && n[b - 2][d + 2] === PAWN_NULL && (w.push({
            row: b - 2,
            col: d + 2,
            move: PAWN_EAT,
            eatentype: n[b - 1][d + 1],
            eatenrow: b - 1,
            eatencol: d + 1
        }), D = !0)) : c === PAWN_BLACK && (0 < d && b < NUM_CELL - 1 && n[b + 1][d - 1] === PAWN_NULL ? w.push({
                row: b + 1,
                col: d - 1,
                move: PAWN_MOVE,
                eatentype: n[b + 1][d - 1],
                eatenrow: b + 1,
                eatencol: d - 1
            }) : 1 < d &&
            b < NUM_CELL - 2 && n[b + 1][d - 1] % 2 !== A && n[b + 2][d - 2] === PAWN_NULL && (w.push({
                row: b + 2,
                col: d - 2,
                move: PAWN_EAT,
                eatentype: n[b + 1][d - 1],
                eatenrow: b + 1,
                eatencol: d - 1
            }), D = !0), d < NUM_CELL - 1 && b < NUM_CELL - 1 && n[b + 1][d + 1] === PAWN_NULL ? w.push({
                row: b + 1,
                col: d + 1,
                move: PAWN_MOVE,
                eatentype: n[b + 1][d + 1],
                eatenrow: b + 1,
                eatencol: d + 1
            }) : d < NUM_CELL - 2 && b < NUM_CELL - 2 && n[b + 1][d + 1] % 2 !== A && n[b + 2][d + 2] === PAWN_NULL && (w.push({
                row: b + 2,
                col: d + 2,
                move: PAWN_EAT,
                eatentype: n[b + 1][d + 1],
                eatenrow: b + 1,
                eatencol: d + 1
            }), D = !0));
        if (D) {
            for (b = 0; b < w.length; b++) w[b].move ===
                PAWN_EAT && J.push(w[b]);
            return {
                move: PAWN_EAT,
                listmove: J
            }
        }
        for (b = 0; b < w.length; b++) w[b].move === PAWN_MOVE && J.push(w[b]);
        return {
            move: PAWN_MOVE,
            listmove: J
        }
    };
    this._enableMoves = function(b) {
        for (var d, c, n = 0; n < J.length; n++) d = J[n].row, c = J[n].col, u[d][c].showMoves(!0, b), u[d][c].setLegalMove(!0), u[d][c].setClickableArea(!0)
    };
    this.restartGame = function() {
        this.unload();
        this._init()
    };
    this.pauseGame = function(b) {
        m = !b
    };
    this.unload = function() {
        m = !1;
        E.unload();
        null !== S && S.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    this._onExitHelp = function() {
        m = !0
    };
    this.gameOver = function(b) {
        m = !1;
        S = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        S.show(b, v, t);
        E.setInfoVisible(!1)
    };
    this.update = function() {
        m && (null !== Y && Y.update(), k === PAWN_WHITE ? (t += s_iTimeElaps, E.refreshWhiteTime(t)) : (v += s_iTimeElaps, E.refreshBlackTime(v)))
    };
    this._disableAllHighlight = function() {
        for (var b = 0; b < NUM_CELL; b++)
            for (var d = 0; d < NUM_CELL; d++) u[b][d].highlight(!1), u[b][d].showMoves(!1, !1)
    };
    this.setAllVisible =
        function(b) {
            for (var d = 0; d < NUM_CELL; d++)
                for (var c = 0; c < NUM_CELL; c++) u[d][c].setVisible(b)
        };
    this._checkMatrix = function(b) {
        for (var d = "", c = 0; c < NUM_CELL; c++) {
            for (var n = 0; n < NUM_CELL; n++) d = 0 <= b[c][n] ? d + (" " + b[c][n] + " | ") : d + (b[c][n] + " | ");
            d += "|| " + c + "\n"
        }
        trace(d)
    };
    this._copyMatrix = function(b) {
        for (var d = [], c = 0; c < NUM_CELL; c++) {
            d[c] = [];
            for (var n = 0; n < NUM_CELL; n++) d[c][n] = b[c][n]
        }
        return d
    };
    this._resetMoves = function() {
        for (var b = 0; b < NUM_CELL; b++)
            for (var d = 0; d < NUM_CELL; d++) u[b][d].setLegalMove(!1)
    };
    this._checkRecursivePawn =
        function(b, d, c, n, A) {
            var D = this._checkLegalMoves(b, d, c, A, n);
            if (D.move === PAWN_EAT) {
                l = !0;
                for (var w = 0; w < D.listmove.length; w++) R.addNode(b, d, 0, D.listmove[w].row, D.listmove[w].col, 0, D.listmove[w].eatenrow, D.listmove[w].eatencol), this._checkRecursivePawn(D.listmove[w].row, D.listmove[w].col, c, n, A)
            }
        };
    this._checkRecursiveKing = function(b, d, c, n, A, D) {
        var w = this._checkLegalMoves(b, d, c, n, D);
        if (w.move === PAWN_EAT) {
            l = !0;
            for (var z = 0; z < w.listmove.length; z++)
                if (R.addNode(b, d, A, w.listmove[z].row, w.listmove[z].col, A + 1,
                        w.listmove[z].eatenrow, w.listmove[z].eatencol), z === w.listmove.length - 1)
                    for (var H = 0; H < w.listmove.length; H++) {
                        var P = this._copyMatrix(n);
                        P[w.listmove[H].eatenrow][w.listmove[H].eatencol] = PAWN_NULL;
                        this._checkRecursiveKing(w.listmove[H].row, w.listmove[H].col, c, P, A + 1, D)
                    }
        }
    };
    this._checkConstrainedMoves = function() {
        I = [];
        l = !1;
        for (var b = 0; b < NUM_CELL; b++)
            for (var d = 0; d < NUM_CELL; d++)
                if (u[b][d].getType() === k) {
                    R = new CTree({
                        row: b,
                        col: d
                    });
                    this._checkRecursivePawn(b, d, u[b][d].getType(), k, C);
                    for (var c = R.getTerminalNodes(),
                            n = [], A = 0; A < c.length; A++) n[A] = R.getPath(c[A]);
                    u[b][d].setMovesChain(n)
                } else if ((u[b][d].getType() === KING_BLACK || u[b][d].getType() === KING_WHITE) && u[b][d].getType() % 2 === k) {
            R = new CTree({
                row: b,
                col: d
            });
            c = this._copyMatrix(C);
            c[b][d] = PAWN_NULL;
            this._checkRecursiveKing(b, d, u[b][d].getType(), c, 0, k);
            _bTerminal = !1;
            c = R.getTerminalNodes();
            n = [];
            for (A = 0; A < c.length; A++) n[A] = R.getPath(c[A]);
            u[b][d].setMovesChain(n)
        }
    };
    this._activeCellClick = function() {
        this._checkConstrainedMoves();
        this._resetMoves();
        this._disableAllHighlight();
        this._disableAllClick();
        if (l) {
            this._evaluatePath();
            for (var b = 0; b < I.length; b++) {
                var d = I[b].row,
                    c = I[b].col;
                if (k !== PAWN_BLACK || s_iGameType !== MODE_COMPUTER) u[d][c].setClickableArea(!0), u[d][c].highlight(!0)
            }
            null === X && (X = new CMessage(k, TEXT_JUMP))
        } else
            for (b = 0; b < NUM_CELL; b++)
                for (d = 0; d < NUM_CELL; d++) u[b][d].setClickableArea(!1), u[b][d].getType() % 2 !== k || k === PAWN_BLACK && s_iGameType === MODE_COMPUTER || u[b][d].setClickableArea(!0)
    };
    this._evaluatePath = function() {
        for (var b = 0, d = 0; d < NUM_CELL; d++)
            for (var c = 0; c < NUM_CELL; c++)
                if (u[d][c].getType() %
                    2 === k)
                    for (var n = 0; n < u[d][c].getMovesChain().length; n++) b < u[d][c].getMovesChain()[n].length && (b = u[d][c].getMovesChain()[n].length);
        var A = !1;
        for (d = 0; d < NUM_CELL; d++)
            for (c = 0; c < NUM_CELL; c++)
                if (u[d][c].getType() % 2 === k)
                    for (n = 0; n < u[d][c].getMovesChain().length; n++) b === u[d][c].getMovesChain()[n].length && u[d][c].getType() > PAWN_BLACK && (A = !0);
        for (d = 0; d < NUM_CELL; d++)
            for (c = 0; c < NUM_CELL; c++)
                if (u[d][c].getType() % 2 === k) {
                    var D = [],
                        w = !1;
                    for (n = 0; n < u[d][c].getMovesChain().length; n++)
                        if (D[n] = [], A) {
                            if (b === u[d][c].getMovesChain()[n].length &&
                                u[d][c].getType() > PAWN_BLACK) {
                                for (w = 0; w < b; w++) D[n].push({
                                    row: u[d][c].getMovesChain()[n][w].model.row,
                                    col: u[d][c].getMovesChain()[n][w].model.col
                                });
                                w = !0
                            }
                        } else if (b === u[d][c].getMovesChain()[n].length) {
                        for (w = 0; w < b; w++) D[n].push({
                            row: u[d][c].getMovesChain()[n][w].model.row,
                            col: u[d][c].getMovesChain()[n][w].model.col
                        });
                        w = !0
                    }
                    for (n = D.length - 1; 0 <= n; n--) 0 === D[n].length ? D.splice(n, 1) : D[n].splice(0, 1);
                    u[d][c].setMovesChain(D);
                    w && I.push({
                        row: d,
                        col: c
                    })
                }
    };
    this._checkBoard = function() {
        for (var b = 0; b < NUM_CELL; b++)
            for (var d =
                    0; d < NUM_CELL; d++) trace(u[b][d].isLegalMove())
    };
    this._calculateMin = function(b, d) {
        return b < d ? b : d
    };
    this._calculateMax = function(b, d) {
        return b > d ? b : d
    };
    this._minimax = function(b, d) {
        if (!b.hasChildren() || 0 === d) return b.model.rating;
        if (0 === d % 2)
            if (0 === SEARCH_DEPTH % 2) {
                var c = -9999;
                for (var n = 0; n < b.children.length; n++) c = this._calculateMax(c, this._minimax(b.children[n], d - 1))
            } else
                for (c = 9999, n = 0; n < b.children.length; n++) c = this._calculateMin(c, this._minimax(b.children[n], d - 1));
        else if (1 === d % 2)
            if (0 === SEARCH_DEPTH % 2)
                for (c =
                    9999, n = 0; n < b.children.length; n++) c = this._calculateMin(c, this._minimax(b.children[n], d - 1));
            else
                for (c = -9999, n = 0; n < b.children.length; n++) c = this._calculateMax(c, this._minimax(b.children[n], d - 1));
        return b.model.rating = c
    };
    this._buildDecisionTree = function() {
        Z = new CTreeDecision({
            rating: 0,
            moves: [],
            depth: 0
        });
        var b = this._copyMatrix(C);
        this._buildDecisionRecursive(b, 0, 0);
        b = this._minimax(Z.getRoot(), SEARCH_DEPTH);
        return Z.getNode(b, 1)
    };
    this._buildDecisionRecursive = function(b, d, c) {
        if (d !== SEARCH_DEPTH)
            for (var n =
                    this._findAllMoves(b, (d + k) % 2), A = [], D = 0; D < n.length; D++) {
                A[D] = this._buildNewBoard(b, n[D]);
                var w = this._evalBoard(A[D]);
                Z.addNode(d, c, d + 1, D, w.rate, n[D], w.blackmatrix, w.whitematrix);
                if (D === n.length - 1)
                    for (w = 0; w < n.length; w++) this._buildDecisionRecursive(A[w], d + 1, w)
            }
    };
    this._findAllMoves = function(b, d) {
        for (var c, n = !1, A = [], D = 0; D < NUM_CELL; D++)
            for (var w = 0; w < NUM_CELL; w++)
                if (b[D][w] % 2 === d)
                    if (c = this._checkLegalMoves(D, w, b[D][w], b, d), c.move === PAWN_MOVE && 0 !== c.listmove.length)
                        for (var z = 0; z < c.listmove.length; z++) A.push({
                            currow: D,
                            curcol: w,
                            pawntype: b[D][w],
                            movetype: PAWN_MOVE,
                            destrow: c.listmove[z].row,
                            destcol: c.listmove[z].col,
                            rawpath: null
                        });
                    else if (c.move === PAWN_EAT)
            if (n = !0, R = new CTree({
                    row: D,
                    col: w
                }), b[D][w] === d) {
                this._checkRecursivePawn(D, w, b[D][w], d, b);
                c = R.getTerminalNodes();
                var H = [];
                for (z = 0; z < c.length; z++) H[z] = R.getPath(c[z]), H[z].splice(0, 1), A.push({
                    currow: D,
                    curcol: w,
                    pawntype: b[D][w],
                    movetype: PAWN_EAT,
                    destrow: H[z][H[z].length - 1].model.row,
                    destcol: H[z][H[z].length - 1].model.col,
                    rawpath: H[z]
                })
            } else if ((b[D][w] === KING_BLACK ||
                b[D][w] === KING_WHITE) && b[D][w] % 2 === d)
            for (z = this._copyMatrix(b), z[D][w] = PAWN_NULL, this._checkRecursiveKing(D, w, b[D][w], z, 0, d), _bTerminal = !1, c = R.getTerminalNodes(), H = [], z = 0; z < c.length; z++) H[z] = R.getPath(c[z]), H[z].splice(0, 1), A.push({
                currow: D,
                curcol: w,
                pawntype: b[D][w],
                movetype: PAWN_EAT,
                destrow: H[z][H[z].length - 1].model.row,
                destcol: H[z][H[z].length - 1].model.col,
                rawpath: H[z]
            });
        if (n) {
            for (D = A.length - 1; 0 <= D; D--) A[D].movetype === PAWN_MOVE && A.splice(D, 1);
            A = this._evaluatePathForAI(A)
        }
        return A
    };
    this._evaluatePathForAI =
        function(b) {
            for (var d = 0, c = 0; c < b.length; c++) d < b[c].rawpath.length && (d = b[c].rawpath.length);
            var n = !1;
            for (c = 0; c < b.length; c++) d === b[c].rawpath.length && b[c].pawntype > PAWN_BLACK && (n = !0);
            var A = [];
            for (c = 0; c < b.length; c++) n ? d === b[c].rawpath.length && b[c].pawntype > PAWN_BLACK && A.push(b[c]) : d === b[c].rawpath.length && A.push(b[c]);
            return A
        };
    this._buildNewBoard = function(b, d) {
        var c = this._copyMatrix(b);
        c[d.currow][d.curcol] = PAWN_NULL;
        c[d.destrow][d.destcol] = d.pawntype;
        if (null !== d.rawpath)
            for (var n = 0; n < d.rawpath.length; n++) c[d.rawpath[n].model.eatenrow][d.rawpath[n].model.eatencol] =
                PAWN_NULL;
        return c
    };
    this._evalBoard = function(b) {
        var d = this._buildDistanceMatrix(b, PAWN_BLACK);
        var c = this._buildDistanceMatrix(b, PAWN_WHITE);
        for (var n = 0, A = 0, D = 0, w = 0, z = 0; z < NUM_CELL; z++)
            for (var H = 0; H < NUM_CELL; H++) b[z][H] === PAWN_BLACK ? D++ : b[z][H] === PAWN_WHITE ? n++ : b[z][H] === KING_BLACK ? w += d[z][H] : b[z][H] === KING_WHITE && (A += d[z][H]);
        return {
            rate: D - n + 1.4 * (w - A),
            blackmatrix: d,
            whitematrix: c
        }
    };
    this._buildDistanceMatrix = function(b, d) {
        for (var c = [], n = !0, A = 0; A < NUM_CELL; A++)
            for (var D = 0; D < NUM_CELL; D++) b[A][D] < KING_WHITE &&
                -1 !== b[A][D] && (n = !1), b[A][D] % 2 !== d && -1 < b[A][D] && c.push({
                    row: A,
                    col: D
                });
        A = [];
        if (!n || 0 === c.length) A = [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ];
        else if (n) {
            n = [];
            for (A = 0; A < c.length; A++) {
                var w = c[A].row;
                var z = c[A].col;
                n[A] = [];
                for (D = 0; D < NUM_CELL; D++) {
                    n[A][D] = [];
                    for (var H = 0; H < NUM_CELL; H++) {
                        var P = NUM_CELL - Math.abs(w - D);
                        var K = NUM_CELL - Math.abs(z - H);
                        n[A][D][H] = this._calculateMin(P, K)
                    }
                }
            }
            w = n[0];
            for (A = 0; A < c.length; A++)
                for (D =
                    0; D < NUM_CELL; D++)
                    for (H = 0; H < NUM_CELL; H++) w[D][H] < n[A][D][H] && (w[D][H] = n[A][D][H]);
            A = w
        }
        return A
    };
    this.countPawn = function() {
        for (var b, d = x = r = 0; d < NUM_CELL; d++)
            for (var c = 0; c < NUM_CELL; c++) b = u[d][c].getType() % 2, b === PAWN_BLACK ? r++ : b === PAWN_WHITE && x++
    };
    this._checkCanMove = function(b) {
        for (var d, c = 0; c < NUM_CELL; c++)
            for (var n = 0; n < NUM_CELL; n++)
                if (C[c][n] % 2 === b && (d = this._checkLegalMoves(c, n, C[c][n], C, b), 0 < d.listmove.length)) return !0;
        return !1
    };
    this.nullMessage = function() {
        X = null
    };
    s_oGame = this;
    var aa = this;
    this._init()
}
var s_oGame;

function CInterface() {
    var a, f, e, m, p, l, q, k, h, g, v, t, r, x, y = null,
        G = null;
    this._init = function() {
        var u = s_oSpriteLibrary.getSprite("but_exit");
        e = CANVAS_WIDTH - u.height / 2 - 10;
        m = u.height / 2 + 25;
        g = new CGfxButton(e, m, u, s_oStage);
        g.addEventListener(ON_MOUSE_UP, this._onExit, this);
        var C = CANVAS_WIDTH - u.width / 2 - 125;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) u = s_oSpriteLibrary.getSprite("audio_icon"), a = C, f = 25 + u.height / 2, v = new CToggle(a, f, u, s_bAudioActive, s_oStage), v.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        C = window.document;
        u = C.documentElement;
        y = u.requestFullscreen || u.mozRequestFullScreen || u.webkitRequestFullScreen || u.msRequestFullscreen;
        G = C.exitFullscreen || C.mozCancelFullScreen || C.webkitExitFullscreen || C.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (y = !1);
        y && screenfull.isEnabled && (u = s_oSpriteLibrary.getSprite("but_fullscreen"), p = u.width / 4 + 20, l = u.height / 2 + 25, x = new CToggle(p, l, u, s_bFullscreen, s_oStage), x.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        t = new CInfoTurn(815, 1630, PAWN_WHITE, s_oStage);
        r = new CInfoTurn(485, 290, PAWN_BLACK, s_oStage);
        q = 12;
        h = [];
        for (C = 0; C < q; C++) h[C] = createBitmap(s_oSpriteLibrary.getSprite("black_chip")), h[C].x = 310 + 19 * C, h[C].y = 410, h[C].visible = !1, s_oStage.addChild(h[C]);
        k = [];
        for (C = 0; C < q; C++) k[C] = createBitmap(s_oSpriteLibrary.getSprite("white_chip")), k[C].x = 970 - 19 * C, k[C].y = 1424, k[C].visible = !1, s_oStage.addChild(k[C]);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        g.unload();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || v.unload();
        r.unload();
        t.unload();
        for (var u = 0; u < q; u++) s_oStage.removeChild(k[u]), s_oStage.removeChild(h[u]);
        y && screenfull.isEnabled && x.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function(u, C) {
        g.setPosition(e - u, C + m);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || v.setPosition(a - u, C + f);
        y && screenfull.isEnabled && x.setPosition(p + u, C + l)
    };
    this.refreshWhitePawnNumber = function(u) {
        0 > u && (u = 0);
        for (var C = 0; C < u; C++) k[C].visible = !0;
        for (C = u; C < q; C++) k[C].visible = !1
    };
    this.refreshWhiteTime = function(u) {
        50 < u && t.refreshTime(formatTime(u))
    };
    this.refreshBlackPawnNumber =
        function(u) {
            0 > u && (u = 0);
            for (var C = 0; C < u; C++) h[C].visible = !0;
            for (C = u; C < q; C++) h[C].visible = !1
        };
    this.refreshBlackTime = function(u) {
        50 < u && r.refreshTime(formatTime(u))
    };
    this.activePlayer = function(u) {
        u === PAWN_WHITE ? (r.active(!1), t.active(!0)) : (t.active(!1), r.active(!0))
    };
    this.setInfoVisible = function(u) {
        t.setPanelVisible(u);
        r.setPanelVisible(u)
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
    this._onExit =
        function() {
            new CAreYouSurePanel(s_oInterface._onConfirmExit)
        };
    this._onConfirmExit = function() {
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("show_interlevel_ad");
        s_oGame.onExit()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        y && screenfull.isEnabled && x.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? G.call(window.document) : y.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface =
        this;
    this._init();
    return this
}
var s_oInterface = null;

function CStartAnimation(a, f, e, m) {
    var p, l = 0,
        q = 0,
        k = 0,
        h = 0,
        g, v, t, r, x, y, G, u, C;
    this._init = function(F, I, J, E) {
        g = [];
        v = [];
        for (E = 0; E < I.length; E++) g[E] = {
            x: I[E].x / s_oStage.scaleX,
            y: I[E].y / s_oStage.scaleY
        }, v[E] = {
            x: J[E].x / s_oStage.scaleX,
            y: J[E].y / s_oStage.scaleY
        };
        p = 12;
        x = F;
        y = new createjs.Container;
        y.y = -360;
        x.addChild(y);
        F = s_oSpriteLibrary.getSprite("chip_flip_black");
        I = {
            images: [F],
            framerate: 6,
            frames: [
                [0, 0, 22, 91, 0, -38, -3],
                [22, 0, 30, 93, 0, -33, -2],
                [52, 0, 74, 92, 0, -11, -2],
                [0, 93, 98, 99, 0, -1, -1],
                [98, 93, 98, 99, 0, -1, -1]
            ],
            animations: {
                chip_0: [0,
                    0, "chip_1"
                ],
                chip_1: [1, 1, "chip_2"],
                chip_2: [2, 2, "chip_4"],
                chip_3: [3, 3, "chip_4"],
                chip_4: [4, 4, "stop"]
            }
        };
        F = s_oSpriteLibrary.getSprite("chip_box");
        u = createBitmap(F);
        u.regX = F.width / 2;
        u.regY = F.height / 2;
        y.addChild(u);
        F = new createjs.SpriteSheet(I);
        r = [];
        for (E = 0; E < p; E++) r[E] = createSprite(F, "chip_0", PAWN_SIZE / 2, PAWN_SIZE / 2, PAWN_SIZE, PAWN_SIZE), r[E].x = -160 - 19 * E, r[E].y = -34, r[E].gotoAndStop("chip_0"), y.addChild(r[E]);
        G = new createjs.Container;
        G.y = 335;
        x.addChild(G);
        F = s_oSpriteLibrary.getSprite("chip_flip_white");
        I = {
            images: [F],
            framerate: 6,
            frames: [
                [0, 0, 22, 91, 0, -38, -3],
                [22, 0, 30, 93, 0, -33, -2],
                [52, 0, 74, 92, 0, -11, -2],
                [0, 93, 98, 99, 0, -1, -1],
                [98, 93, 98, 99, 0, -1, -1]
            ],
            animations: {
                chip_0: [0, 0, "chip_1"],
                chip_1: [1, 1, "chip_2"],
                chip_2: [2, 2, "chip_4"],
                chip_3: [3, 3, "chip_4"],
                chip_4: [4, 4, "stop"]
            }
        };
        F = s_oSpriteLibrary.getSprite("chip_box");
        C = createBitmap(F);
        C.regX = F.width / 2;
        C.regY = F.height / 2;
        G.addChild(C);
        F = new createjs.SpriteSheet(I);
        t = [];
        for (E = 0; E < p; E++) t[E] = createSprite(F, "chip_0", PAWN_SIZE / 2, PAWN_SIZE / 2, PAWN_SIZE, PAWN_SIZE), t[E].x =
            80 + 19 * E, t[E].y = -36, t[E].gotoAndStop("chip_0"), G.addChild(t[E]);
        this._openBox()
    };
    this.unload = function() {
        x.removeChild(y);
        x.removeChild(G)
    };
    this._openBox = function() {
        playSound("drawer", 1, !1);
        createjs.Tween.get(y).to({
            y: y.y - 160
        }, 1E3).call(function() {
            B._onBoxOpen()
        });
        createjs.Tween.get(G).to({
            y: G.y + 160
        }, 1E3).call(function() {
            B._onBoxOpen()
        })
    };
    this._onBoxOpen = function() {
        l++;
        if (2 === l) {
            for (var F = 150, I = 0; I < p; I++) {
                var J = r[I].localToGlobal(0, 0).x / s_oStage.scaleX,
                    E = r[I].localToGlobal(0, 0).y / s_oStage.scaleY;
                y.removeChild(r[I]);
                r[I].x = J;
                r[I].y = E;
                m.addChild(r[I]);
                setTimeout(function() {
                    B.playBlack()
                }, F);
                createjs.Tween.get(r[I]).wait(F).to({
                    x: v[I].x - PAWN_SIZE / 2 + 2,
                    y: v[I].y - PAWN_SIZE / 2 + 1
                }, 500, createjs.Ease.cubicOut).call(function() {
                    playSound("click_cell", 1, !1);
                    B._onFinishPositioning()
                });
                J = t[I].localToGlobal(0, 0).x / s_oStage.scaleX;
                E = t[I].localToGlobal(0, 0).y / s_oStage.scaleY;
                G.removeChild(t[I]);
                t[I].x = J;
                t[I].y = E;
                m.addChild(t[I]);
                setTimeout(function() {
                    B.playWhite()
                }, F);
                createjs.Tween.get(t[I]).wait(F).to({
                    x: g[p - I - 1].x - PAWN_SIZE /
                        2 + 1,
                    y: g[p - I - 1].y - PAWN_SIZE / 2 + 1
                }, 500, createjs.Ease.cubicOut).call(function() {
                    playSound("click_cell", 1, !1);
                    B._onFinishPositioning()
                });
                F += 150
            }
            F = 150;
            for (I = 0; I < p; I++);
        }
    };
    this.playWhite = function() {
        t[q].gotoAndPlay("chip_1");
        q++
    };
    this.playBlack = function() {
        r[k].gotoAndPlay("chip_1");
        k++
    };
    this._onFinishPositioning = function() {
        h++;
        if (h === 2 * p)
            for (var F = 0; F < p; F++) m.removeChild(r[F]), m.removeChild(t[F]), s_oGame.setAllVisible(!0), s_oGame._onExitHelp()
    };
    var B = this;
    this._init(a, f, e, m)
}
var startanim = this;

function CInfoTurn(a, f, e, m) {
    var p, l, q, k, h;
    this._init = function(g, v, t, r) {
        p = new createjs.Container;
        p.x = g;
        p.y = v;
        s_iGameType === MODE_HUMAN && t === PAWN_BLACK && s_bMobile && (p.rotation = 180);
        r.addChild(p);
        g = s_oSpriteLibrary.getSprite("bg_turn");
        v = {
            images: [g],
            framerate: 58,
            frames: {
                width: g.width / 2,
                height: g.height,
                regX: g.width / 2 / 2,
                regY: g.height / 2
            },
            animations: {
                off: [0, 0, "on"],
                on: [1, 1, "off"]
            }
        };
        v = new createjs.SpriteSheet(v);
        l = createSprite(v, 0, g.width / 2 / 2, g.height / 2, g.width / 2, g.height);
        l.stop();
        p.addChild(l);
        q = createSprite(v,
            1, g.width / 2 / 2, g.height / 2, g.width / 2, g.height);
        q.stop();
        q.x = 10;
        q.alpha = 0;
        p.addChild(q);
        g = s_oSpriteLibrary.getSprite("pawn");
        v = {
            images: [g],
            frames: {
                width: PAWN_SIZE,
                height: PAWN_SIZE,
                regX: PAWN_SIZE / 2,
                regY: PAWN_SIZE / 2
            },
            animations: {
                white: [0],
                black: [1],
                white_checker: [2],
                black_checker: [3]
            }
        };
        v = new createjs.SpriteSheet(v);
        h = createSprite(v, t, PAWN_SIZE / 2, PAWN_SIZE / 2, PAWN_SIZE, PAWN_SIZE);
        h.x = 160;
        h.y = 2;
        h.stop();
        p.addChild(h);
        k = new CTLText(p, -100, -30, 200, 60, 58, "center", "#ffffff", PRIMARY_FONT, 1, 2, 2, "00:00", !0, !0, !1, !1)
    };
    this.refreshTime = function(g) {
        k.refreshText(g)
    };
    this.invert = function() {
        k.setX(40);
        h.x = -100
    };
    this.active = function(g) {
        g ? (createjs.Tween.get(l, {
            loop: !0
        }).to({
            alpha: 0
        }, 750, createjs.Ease.cubicOut).to({
            alpha: 1
        }, 750, createjs.Ease.cubicIn), createjs.Tween.get(q, {
            loop: !0
        }).to({
            alpha: 1
        }, 750, createjs.Ease.cubicOut).to({
            alpha: 0
        }, 750, createjs.Ease.cubicIn)) : (l.alpha = 1, q.alpha = 0, createjs.Tween.removeTweens(l), createjs.Tween.removeTweens(q))
    };
    this.unload = function() {
        m.removeChild(p)
    };
    this.setBgVisible = function(g) {
        l.visible =
            g
    };
    this.setPanelVisible = function(g) {
        p.visible = g
    };
    this.setPawn = function(g) {
        h.gotoAndStop(g)
    };
    this._init(a, f, e, m)
}

function CThinking() {
    var a, f, e, m, p, l, q;
    this._init = function() {
        a = !0;
        f = 0;
        e = new createjs.Container;
        var k = (new createjs.Graphics).beginFill("rgba(0,0,0,0.3)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        l = new createjs.Shape(k);
        q = l.on("click", function() {});
        m = new createjs.Text(TEXT_THINKING, "bold 60px " + PRIMARY_FONT, "#ffffff");
        m.x = .5 * CANVAS_WIDTH;
        m.y = .5 * CANVAS_HEIGHT - 100;
        m.textAlign = "center";
        m.textBaseline = "alphabetic";
        m.lineWidth = 800;
        p = new createjs.Text("", "bold 180px " + PRIMARY_FONT, "#ffffff");
        p.x = .5 * CANVAS_WIDTH -
            76;
        p.y = .5 * CANVAS_HEIGHT - 50;
        p.textAlign = "left";
        p.textBaseline = "alphabetic";
        p.lineWidth = 800;
        e.addChild(l, m, p);
        s_oStage.addChild(e)
    };
    this.unload = function() {
        a = !1;
        l.off("click", q);
        s_oStage.removeChild(e)
    };
    this.update = function() {
        a && (f += s_iTimeElaps, 0 <= f && f < TIME_LOOP_WAIT / 4 ? p.text = "" : f >= TIME_LOOP_WAIT / 4 && f < 2 * TIME_LOOP_WAIT / 4 ? p.text = "." : f >= 2 * TIME_LOOP_WAIT / 4 && f < 3 * TIME_LOOP_WAIT / 4 ? p.text = ".." : f >= 3 * TIME_LOOP_WAIT / 4 && f < TIME_LOOP_WAIT ? p.text = "..." : f = 0)
    };
    this._init()
}

function CEndPanel(a) {
    var f, e, m, p, l, q, k, h;
    this._init = function(g) {
        s_oGame.pauseGame(!0);
        e = new createjs.Container;
        e.alpha = 0;
        e.visible = !1;
        k = new createjs.Shape;
        k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.alpha = .7;
        e.addChild(k);
        f = createBitmap(g);
        f.regX = g.width / 2;
        f.regY = g.height / 2;
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2;
        e.addChild(f);
        g = 800;
        var v = 90,
            t = CANVAS_WIDTH / 2,
            r = CANVAS_HEIGHT / 2 - 200;
        l = new CTLText(e, t - g / 2, r - v / 2, g, v, 90, "center", "#ffffff", PRIMARY_FONT, 1, 2, 2, " ", !0, !0, !1, !1);
        g = 800;
        v = 40;
        t = CANVAS_WIDTH / 2;
        r = CANVAS_HEIGHT / 2 - 140;
        q = new CTLText(e, t - g / 2, r - v / 2, g, v, 40, "center", "#ffffff", PRIMARY_FONT, 1, 2, 2, " ", !0, !0, !1, !1);
        m = new CInfoTurn(CANVAS_WIDTH / 2, 1120, PAWN_BLACK, e);
        m.setBgVisible(!1);
        m.invert();
        p = new CInfoTurn(CANVAS_WIDTH / 2, 970, PAWN_WHITE, e);
        p.setBgVisible(!1);
        p.invert();
        s_oStage.addChild(e)
    };
    this.unload = function() {
        e.off("mousedown", h)
    };
    this._initListener = function() {
        h = e.on("mousedown", this._onExit)
    };
    this.show = function(g, v, t) {
        $("#div_display_id").css("display", "block");
        m.refreshTime(formatTime(v));
        p.refreshTime(formatTime(t));
        g === WIN_WHITE ? (playSound("win", 1, !1), l.refreshText(sprintf(TEXT_GAMEOVER, TEXT_WHITE))) : g === WIN_BLACK ? (MODE_HUMAN ? playSound("win", 1, !1) : playSound("game_over", 1, !1), l.refreshText(sprintf(TEXT_GAMEOVER, TEXT_BLACK))) : g === DRAW ? (playSound("game_over", 1, !1), l.refreshText(TEXT_DRAW)) : g === WIN_WHITE_BLACK_NOMOVES ? (playSound("win", 1, !1), l.refreshText(sprintf(TEXT_GAMEOVER, TEXT_WHITE)), q.refreshText(sprintf(TEXT_MOVES_AVAIL, TEXT_BLACK))) : g === WIN_BLACK_WHITE_NOMOVES && (MODE_HUMAN ? playSound("win",
            1, !1) : playSound("game_over", 1, !1), l.refreshText(sprintf(TEXT_GAMEOVER, TEXT_BLACK)), q.refreshText(sprintf(TEXT_MOVES_AVAIL, TEXT_WHITE)));
        e.visible = !0;
        var r = this;
        createjs.Tween.get(e).to({
            alpha: 1
        }, 500).call(function() {
            r._initListener()
        });
        var x = 18E5 - t;
        $(s_oMain).trigger("save_score", [g, v, t, s_iGameType, x]);
        $(s_oMain).trigger("share_event", [x, s_iGameType, g])
    };
    this._onExit = function() {
        $("#div_display_id").css("display", "none");
        e.off("mousedown", h);
        m.unload();
        p.unload();
        s_oStage.removeChild(e);
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("show_interlevel_ad");
        s_oGame.onExit()
    };
    this._init(a);
    return this
}

function CCell(a, f, e, m, p, l, q) {
    var k, h, g, v, t, r = [],
        x, y, G, u, C, B;
    this._init = function(F, I, J, E, S, L, U) {
        k = !1;
        h = J;
        g = E;
        v = S;
        t = L;
        x = new createjs.Container;
        x.x = F;
        x.y = I;
        U.addChild(x);
        F = s_oSpriteLibrary.getSprite("pawn");
        F = new createjs.SpriteSheet({
            images: [F],
            frames: {
                width: PAWN_SIZE,
                height: PAWN_SIZE,
                regX: PAWN_SIZE / 2,
                regY: PAWN_SIZE / 2
            },
            animations: {
                white: [0],
                black: [1],
                white_checker: [2],
                black_checker: [3]
            }
        });
        y = createSprite(F, J, PAWN_SIZE / 2, PAWN_SIZE / 2, PAWN_SIZE, PAWN_SIZE);
        y.stop();
        x.addChild(y);
        C = createSprite(F, J, PAWN_SIZE /
            2, PAWN_SIZE / 2, PAWN_SIZE, PAWN_SIZE);
        C.alpha = .4;
        C.visible = !1;
        x.addChild(C);
        F = s_oSpriteLibrary.getSprite("highlight");
        u = createBitmap(F);
        u.regX = F.width / 2;
        u.regY = F.height / 2;
        u.alpha = .8;
        u.visible = !1;
        x.addChild(u);
        G = new createjs.Shape;
        G.graphics.beginFill("rgba(158,0,0,0.01)").drawRect(-CELL_LENGTH / 2, -CELL_LENGTH / 2, CELL_LENGTH, CELL_LENGTH);
        B = G.on("mousedown", this._onCellClick);
        G.visible = !1;
        x.addChild(G)
    };
    this.unload = function() {
        q.removeChild(x);
        G.off("mousedown", B)
    };
    this.setClickableArea = function(F) {
        G.visible =
            F
    };
    this.showMoves = function(F, I) {
        s_iGameType === MODE_HUMAN && I === KING_BLACK && (x.rotation = 180);
        C.gotoAndStop(I);
        C.visible = F
    };
    this.highlight = function(F, I) {
        s_iGameType === MODE_HUMAN && e === KING_BLACK && (x.rotation = 180);
        u.visible = F
    };
    this.setColor = function(F) {
        s_iGameType === MODE_HUMAN && F === KING_BLACK && (x.rotation = 180);
        y.gotoAndStop(F);
        h = F
    };
    this._onCellClick = function() {
        s_oGame.cellClicked(g, v)
    };
    this.setType = function(F) {
        h = F
    };
    this.getType = function() {
        return h
    };
    this.getBgColor = function() {
        return t
    };
    this.setLegalMove =
        function(F) {
            k = F
        };
    this.isLegalMove = function() {
        return k
    };
    this.setVisible = function(F) {
        x.visible = F
    };
    this.getX = function() {
        return a
    };
    this.getY = function() {
        return f
    };
    this.getGlobalX = function() {
        return x.localToGlobal(0, 0).x
    };
    this.getGlobalY = function() {
        return x.localToGlobal(0, 0).y
    };
    this.setMovesChain = function(F) {
        r = [];
        for (var I = 0; I < F.length; I++) {
            r[I] = [];
            for (var J = 0; J < F[I].length; J++) r[I][J] = F[I][J]
        }
    };
    this.getMovesChain = function() {
        return r
    };
    this._init(a, f, e, m, p, l, q)
}

function CMovingCell(a, f, e, m) {
    var p, l, q, k, h, g;
    this._init = function(t, r, x, y) {
        p = t;
        l = r;
        q = x;
        k = 1;
        h = y;
        t = {
            images: [s_oSpriteLibrary.getSprite("pawn")],
            frames: {
                width: PAWN_SIZE,
                height: PAWN_SIZE,
                regX: PAWN_SIZE / 2,
                regY: PAWN_SIZE / 2
            },
            animations: {
                white: [0],
                black: [1],
                white_checker: [2],
                black_checker: [3]
            }
        };
        t = new createjs.SpriteSheet(t);
        g = createSprite(t, x, PAWN_SIZE / 2, PAWN_SIZE / 2, PAWN_SIZE, PAWN_SIZE);
        g.stop();
        g.x = p;
        g.y = l;
        s_iGameType === MODE_HUMAN && x === KING_BLACK && (g.rotation = 180);
        h.addChild(g)
    };
    this.unload = function() {
        h.removeChild(g)
    };
    this.move = function(t, r, x, y, G, u) {
        createjs.Tween.get(g).to({
            x: t,
            y: r
        }, x).call(function() {
            v.unload();
            if (null !== u) {
                for (var C = u.length - 1; 0 <= C; C--) u[C][0].row === y && u[C][0].col === G || u.splice(C, 1);
                for (C = 0; C < u.length; C++) u[C].splice(0, 1)
            }
            s_oGame.onFinishMove(y, G, q, u)
        });
        createjs.Tween.get(g).to({
            scaleX: k + .2,
            scaleY: k + .2
        }, x / 2, createjs.Ease.cubicOut).to({
            scaleX: k,
            scaleY: k
        }, x / 2, createjs.Ease.cubicIn)
    };
    var v = this;
    this._init(a, f, e, m)
}

function CAreYouSurePanel(a) {
    var f, e, m, p, l, q, k;
    this._init = function(g) {
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        l.alpha = 0;
        k = l.on("mousedown", function() {});
        s_oStage.addChild(l);
        (new createjs.Tween.get(l)).to({
            alpha: .7
        }, 500);
        q = new createjs.Container;
        s_oStage.addChild(q);
        g = s_oSpriteLibrary.getSprite("msg_box");
        var v = createBitmap(g);
        v.regX = g.width / 2;
        v.regY = g.height / 2;
        q.addChild(v);
        q.x = CANVAS_WIDTH / 2;
        q.y = CANVAS_HEIGHT + g.height / 2;
        f = q.y;
        (new createjs.Tween.get(q)).to({
            y: CANVAS_HEIGHT /
                2 - 40
        }, 500, createjs.Ease.cubicOut);
        v = g.width - 100;
        e = new CTLText(q, -(v / 2), -g.height / 2 + 200 - 125, v, 250, 100, "center", "#ffffff", PRIMARY_FONT, 1, 2, 2, TEXT_ARE_SURE, !0, !0, !0, !1);
        m = new CGfxButton(170, 80, s_oSpriteLibrary.getSprite("but_yes"), q);
        m.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        p = new CGfxButton(-170, 80, s_oSpriteLibrary.getSprite("but_no"), q);
        p.addEventListener(ON_MOUSE_UP, this._onButNo, this);
        p.pulseAnimation()
    };
    this._onButYes = function() {
        p.setClickable(!1);
        m.setClickable(!1);
        (new createjs.Tween.get(l)).to({
                alpha: 0
            },
            500);
        (new createjs.Tween.get(q)).to({
            y: f
        }, 400, createjs.Ease.backIn).call(function() {
            h.unload();
            a()
        })
    };
    this._onButNo = function() {
        p.setClickable(!1);
        m.setClickable(!1);
        (new createjs.Tween.get(l)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(q)).to({
            y: f
        }, 400, createjs.Ease.backIn).call(function() {
            h.unload()
        })
    };
    this.changeMessage = function(g) {
        e.refreshText(g)
    };
    this.unload = function() {
        p.unload();
        m.unload();
        s_oStage.removeChild(l);
        s_oStage.removeChild(q);
        l.off("mousedown", k)
    };
    var h = this;
    this._init(a)
}
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function() {
        if (this._bFitText) {
            for (var a = this._iFontSize;
                (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(a--, this._oText.font = a + "px " + this._szFont, this._oText.lineHeight = Math.round(a * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > a););
            this._iFontSize = a
        }
    },
    __verticalAlign: function() {
        if (this._bVerticalAlign) {
            var a = this._oText.getBounds().height;
            this._oText.y -=
                (a - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function() {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
            case "middle":
                this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    },
    __createText: function(a) {
        this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(a,
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
        this.refreshText(a)
    },
    setVerticalAlign: function(a) {
        this._bVerticalAlign = a
    },
    setOutline: function(a) {
        null !== this._oText && (this._oText.outline = a)
    },
    setShadow: function(a, f, e, m) {
        null !== this._oText && (this._oText.shadow = new createjs.Shadow(a, f, e, m))
    },
    setColor: function(a) {
        this._oText.color = a
    },
    setAlpha: function(a) {
        this._oText.alpha = a
    },
    setX: function(a) {
        this._x = this._oText.x = a
    },
    setY: function(a) {
        this._y = this._oText.y = a
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
    refreshText: function(a) {
        "" === a && (a = " ");
        null === this._oText && this.__createText(a);
        this._oText.text = a;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};

function CTLText(a, f, e, m, p, l, q, k, h, g, v, t, r, x, y, G, u) {
    this._oContainer = a;
    this._x = f;
    this._y = e;
    this._iWidth = m;
    this._iHeight = p;
    this._bMultiline = G;
    this._iFontSize = l;
    this._szAlign = q;
    this._szColor = k;
    this._szFont = h;
    this._iPaddingH = v;
    this._iPaddingV = t;
    this._bVerticalAlign = y;
    this._bFitText = x;
    this._bDebug = u;
    this._oDebugShape = null;
    this._fLineHeightFactor = g;
    this._oText = null;
    r && this.__createText(r)
}! function() {
    function a(p) {
        var l = p;
        if (m[l]) l = m[l];
        else {
            for (var q = l, k, h = [], g = 0; q;) {
                if (null !== (k = e.text.exec(q))) h.push(k[0]);
                else if (null !== (k = e.modulo.exec(q))) h.push("%");
                else if (null !== (k = e.placeholder.exec(q))) {
                    if (k[2]) {
                        g |= 1;
                        var v = [],
                            t = k[2],
                            r;
                        if (null !== (r = e.key.exec(t)))
                            for (v.push(r[1]);
                                "" !== (t = t.substring(r[0].length));)
                                if (null !== (r = e.key_access.exec(t))) v.push(r[1]);
                                else if (null !== (r = e.index_access.exec(t))) v.push(r[1]);
                        else throw new SyntaxError("[sprintf] failed to parse named argument key");
                        else throw new SyntaxError("[sprintf] failed to parse named argument key");
                        k[2] = v
                    } else g |= 2;
                    if (3 === g) throw Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                    h.push({
                        placeholder: k[0],
                        param_no: k[1],
                        keys: k[2],
                        sign: k[3],
                        pad_char: k[4],
                        align: k[5],
                        width: k[6],
                        precision: k[7],
                        type: k[8]
                    })
                } else throw new SyntaxError("[sprintf] unexpected placeholder");
                q = q.substring(k[0].length)
            }
            l = m[l] = h
        }
        q = arguments;
        k = 1;
        h = l.length;
        v = "";
        var x, y;
        for (t = 0; t < h; t++)
            if ("string" === typeof l[t]) v += l[t];
            else if ("object" === typeof l[t]) {
            r = l[t];
            if (r.keys)
                for (g = q[k], x = 0; x < r.keys.length; x++) {
                    if (void 0 == g) throw Error(a('[sprintf] Cannot access property "%s" of undefined value "%s"', r.keys[x], r.keys[x - 1]));
                    g = g[r.keys[x]]
                } else g = r.param_no ? q[r.param_no] : q[k++];
            e.not_type.test(r.type) && e.not_primitive.test(r.type) && g instanceof Function && (g = g());
            if (e.numeric_arg.test(r.type) && "number" !== typeof g && isNaN(g)) throw new TypeError(a("[sprintf] expecting number but found %T", g));
            e.number.test(r.type) && (y = 0 <= g);
            switch (r.type) {
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
                    g = JSON.stringify(g, null, r.width ? parseInt(r.width) : 0);
                    break;
                case "e":
                    g = r.precision ? parseFloat(g).toExponential(r.precision) : parseFloat(g).toExponential();
                    break;
                case "f":
                    g = r.precision ? parseFloat(g).toFixed(r.precision) : parseFloat(g);
                    break;
                case "g":
                    g = r.precision ? String(Number(g.toPrecision(r.precision))) : parseFloat(g);
                    break;
                case "o":
                    g = (parseInt(g,
                        10) >>> 0).toString(8);
                    break;
                case "s":
                    g = String(g);
                    g = r.precision ? g.substring(0, r.precision) : g;
                    break;
                case "t":
                    g = String(!!g);
                    g = r.precision ? g.substring(0, r.precision) : g;
                    break;
                case "T":
                    g = Object.prototype.toString.call(g).slice(8, -1).toLowerCase();
                    g = r.precision ? g.substring(0, r.precision) : g;
                    break;
                case "u":
                    g = parseInt(g, 10) >>> 0;
                    break;
                case "v":
                    g = g.valueOf();
                    g = r.precision ? g.substring(0, r.precision) : g;
                    break;
                case "x":
                    g = (parseInt(g, 10) >>> 0).toString(16);
                    break;
                case "X":
                    g = (parseInt(g, 10) >>> 0).toString(16).toUpperCase()
            }
            if (e.json.test(r.type)) v +=
                g;
            else {
                if (!e.number.test(r.type) || y && !r.sign) var G = "";
                else G = y ? "+" : "-", g = g.toString().replace(e.sign, "");
                x = r.pad_char ? "0" === r.pad_char ? "0" : r.pad_char.charAt(1) : " ";
                var u = r.width - (G + g).length;
                u = r.width ? 0 < u ? x.repeat(u) : "" : "";
                v += r.align ? G + g + u : "0" === x ? G + u + g : u + G + g
            }
        }
        return v
    }

    function f(p, l) {
        return a.apply(null, [p].concat(l || []))
    }
    var e = {
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
    "undefined" !== typeof exports && (exports.sprintf = a, exports.vsprintf = f);
    "undefined" !== typeof window && (window.sprintf = a, window.vsprintf = f, "function" === typeof define && define.amd && define(function() {
        return {
            sprintf: a,
            vsprintf: f
        }
    }))
}();