'use strict';
var aa, ba, ca, da, ea, fa, ga, ha, ia, ka, ma, na, oa, pa, qa, ra, sa, va, wa, xa, ya, za, Ca, F, Da, Fa, Ga, Ha, G, Ia, Ja, Ka, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function (f) {
    return f.__proto__
} : function (f) {
    return f.constructor.prototype
});
(function () {
    function f(a, g, r, p) {
        this.set(a, g, r, p)
    }

    function l() {
        this.qb = this.pb = this.sb = this.rb = this.yb = this.xb = this.Va = this.Ua = 0
    }

    function b(a, g, r, p) {
        a < g ? r < p ? (q = a < r ? a : r, x = g > p ? g : p) : (q = a < p ? a : p, x = g > r ? g : r) : r < p ? (q = g < r ? g : r, x = a > p ? a : p) : (q = g < p ? g : p, x = a > r ? a : r)
    }

    function n() {
        this.items = this.sd = null;
        this.qh = 0;
        y && (this.sd = new Set);
        this.Eg = [];
        this.ne = !0
    }

    function t(a) {
        P[R++] = a
    }

    function d() {
        this.J = this.Rj = this.y = this.Ak = 0
    }

    function c(a) {
        this.rg = [];
        this.Ln = this.Nn = this.On = this.Mn = 0;
        this.Uh(a)
    }

    function u(a, g) {
        this.Fk = a;
        this.Ek = g;
        this.cells = {}
    }

    function v(a, g) {
        this.Fk = a;
        this.Ek = g;
        this.cells = {}
    }

    function h(a, g, r) {
        var p;
        return X.length ? (p = X.pop(), p.kl = a, p.x = g, p.y = r, p) : new ba(a, g, r)
    }

    function a(a, g, r) {
        this.kl = a;
        this.x = g;
        this.y = r;
        this.kb = new ca
    }

    function k(a, g, r) {
        var p;
        return M.length ? (p = M.pop(), p.kl = a, p.x = g, p.y = r, p) : new da(a, g, r)
    }

    function m(a, g, r) {
        this.kl = a;
        this.x = g;
        this.y = r;
        this.kb = [];
        this.ag = !0;
        this.nd = new ca;
        this.Ig = !1
    }

    function e(a, g) {
        return a.$c - g.$c
    }
    ea = function (a) {
        window.console && window.console.log && window.console.log(a)
    };
    fa = function (a) {
        window.console && window.console.error && window.console.error(a)
    };
    aa = function (a) {
        return a
    };
    ga = function (a) {
        return "undefined" === typeof a
    };
    ha = function (a) {
        return "number" === typeof a
    };
    ia = function (a) {
        return "string" === typeof a
    };
    ka = function (a) {
        return 0 < a && 0 === (a - 1 & a)
    };
    ma = function (a) {
        --a;
        for (var g = 1; 32 > g; g <<= 1) a = a | a >> g;
        return a + 1
    };
    na = function (a) {
        return 0 > a ? -a : a
    };
    oa = function (a, g) {
        return a > g ? a : g
    };
    pa = function (a, g) {
        return a < g ? a : g
    };
    qa = Math.PI;
    ra = function (a) {
        return 0 <= a ? a | 0 : (a | 0) - 1
    };
    sa = function (a) {
        var g = a | 0;
        return g === a ? g : g + 1
    };
    va = function (a, g, r, p, k, e, c, d) {
        var m, y, h, O;
        a < r ? (y = a, m = r) : (y = r, m = a);
        k < c ? (O = k, h = c) : (O = c, h = k);
        if (m < O || y > h) return !1;
        g < p ? (y = g, m = p) : (y = p, m = g);
        e < d ? (O = e, h = d) : (O = d, h = e);
        if (m < O || y > h) return !1;
        m = k - a + c - r;
        y = e - g + d - p;
        a = r - a;
        g = p - g;
        k = c - k;
        e = d - e;
        d = na(g * k - e * a);
        return na(k * y - e * m) > d ? !1 : na(a * y - g * m) <= d
    };
    f.prototype.set = function (a, g, r, p) {
        this.left = a;
        this.top = g;
        this.right = r;
        this.bottom = p
    };
    f.prototype.vi = function (a) {
        this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom
    };
    f.prototype.width = function () {
        return this.right - this.left
    };
    f.prototype.height = function () {
        return this.bottom - this.top
    };
    f.prototype.offset = function (a, g) {
        this.left += a;
        this.top += g;
        this.right += a;
        this.bottom += g;
        return this
    };
    f.prototype.normalize = function () {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
    };
    f.prototype.pc = function (a, g) {
        return a >= this.left && a <= this.right && g >= this.top && g <= this.bottom
    };
    f.prototype.Gi = function (a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    wa = f;
    l.prototype.Mj = function (a) {
        this.Ua = a.left;
        this.Va = a.top;
        this.xb = a.right;
        this.yb = a.top;
        this.rb = a.right;
        this.sb = a.bottom;
        this.pb = a.left;
        this.qb = a.bottom
    };
    l.prototype.dq = function (a, g) {
        if (0 === g) this.Mj(a);
        else {
            var r = Math.sin(g),
                p = Math.cos(g),
                k = a.left * r,
                e = a.top * r,
                c = a.right * r,
                r = a.bottom * r,
                d = a.left * p,
                m = a.top * p,
                y = a.right * p,
                p = a.bottom * p;
            this.Ua = d - e;
            this.Va = m + k;
            this.xb = y - e;
            this.yb = m + c;
            this.rb = y - r;
            this.sb = p + c;
            this.pb = d - r;
            this.qb = p +
                k
        }
    };
    l.prototype.offset = function (a, g) {
        this.Ua += a;
        this.Va += g;
        this.xb += a;
        this.yb += g;
        this.rb += a;
        this.sb += g;
        this.pb += a;
        this.qb += g;
        return this
    };
    var q = 0,
        x = 0;
    l.prototype.Qn = function (a) {
        b(this.Ua, this.xb, this.rb, this.pb);
        a.left = q;
        a.right = x;
        b(this.Va, this.yb, this.sb, this.qb);
        a.top = q;
        a.bottom = x
    };
    l.prototype.pc = function (a, g) {
        var r = this.Ua,
            p = this.Va,
            k = this.xb - r,
            e = this.yb - p,
            c = this.rb - r,
            d = this.sb - p,
            m = a - r,
            y = g - p,
            h = k * k + e * e,
            O = k * c + e * d,
            e = k * m + e * y,
            q = c * c + d * d,
            u = c * m + d * y,
            R = 1 / (h * q - O * O),
            k = (q * e - O * u) * R,
            h = (h * u - O * e) * R;
        if (0 <= k && 0 < h && 1 > k + h) return !0;
        k = this.pb - r;
        e = this.qb - p;
        h = k * k + e * e;
        O = k * c + e * d;
        e = k * m + e * y;
        R = 1 / (h * q - O * O);
        k = (q * e - O * u) * R;
        h = (h * u - O * e) * R;
        return 0 <= k && 0 < h && 1 > k + h
    };
    l.prototype.wk = function (a, g) {
        if (g) switch (a) {
            case 0:
                return this.Ua;
            case 1:
                return this.xb;
            case 2:
                return this.rb;
            case 3:
                return this.pb;
            case 4:
                return this.Ua;
            default:
                return this.Ua
        } else switch (a) {
            case 0:
                return this.Va;
            case 1:
                return this.yb;
            case 2:
                return this.sb;
            case 3:
                return this.qb;
            case 4:
                return this.Va;
            default:
                return this.Va
        }
    };
    xa = l;
    ya = function (a, g) {
        for (var r in g) g.hasOwnProperty(r) && (a[r] = g[r]);
        return a
    };
    za = function (a, g) {
        var r, p;
        g = ra(g);
        if (!(0 > g || g >= a.length)) {
            r = g;
            for (p = a.length - 1; r < p; r++) a[r] = a[r + 1];
            Ca(a, p)
        }
    };
    Ca = function (a, g) {
        a.length = g
    };
    F = function (a) {
        Ca(a, 0)
    };
    Da = function (a, g) {
        F(a);
        var r, p;
        r = 0;
        for (p = g.length; r < p; ++r) a[r] = g[r]
    };
    Fa = function (a, g) {
        a.push.apply(a, g)
    };
    Ga = function (a, g) {
        var r, p;
        r = 0;
        for (p = a.length; r < p; ++r)
            if (a[r] === g) return r;
        return -1
    };
    Ha = function (a, g) {
        var r = Ga(a, g); - 1 !== r && za(a, r)
    };
    G = function (a) {
        return a / (180 / qa)
    };
    Ia = function (a) {
        return 180 / qa * a
    };
    Ja = function (a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    Ka = function (a) {
        a %= 2 * qa;
        0 > a && (a += 2 * qa);
        return a
    };
    Ma = function (a) {
        return Ja(Ia(a))
    };
    Na = function (a) {
        return Ka(G(a))
    };
    Oa = function (a, g, r, p) {
        return Math.atan2(p - g, r - a)
    };
    Pa = function (a, g) {
        if (a === g) return 0;
        var r = Math.sin(a),
            p = Math.cos(a),
            k = Math.sin(g),
            e = Math.cos(g),
            r = r * k + p * e;
        return 1 <= r ? 0 : -1 >= r ? qa : Math.acos(r)
    };
    Qa = function (a, g, r) {
        var p = Math.sin(a),
            k = Math.cos(a),
            e = Math.sin(g),
            c = Math.cos(g);
        return Math.acos(p * e + k * c) > r ? 0 < k * e - p * c ? Ka(a + r) : Ka(a - r) : Ka(g)
    };
    Ra = function (a, g) {
        var r = Math.sin(a),
            p = Math.cos(a),
            k = Math.sin(g),
            e = Math.cos(g);
        return 0 >= p * k - r * e
    };
    Sa = function (a, g, r, p, k, e) {
        if (0 === r) return e ? a : g;
        var c = Math.sin(r);
        r = Math.cos(r);
        a -= p;
        g -= k;
        var d = a * c;
        a = a * r - g * c;
        g = g * r + d;
        return e ? a + p : g + k
    };
    Ta = function (a, g, r, p) {
        a = r - a;
        g = p - g;
        return Math.sqrt(a * a + g * g)
    };
    Ua = function (a, g) {
        return !a !== !g
    };
    Va = function (a, g, r) {
        return a + (g - a) * r
    };
    Wa = function (a) {
        for (var g in a)
            if (a.hasOwnProperty(g)) return !0;
        return !1
    };
    ab = function (a) {
        for (var g in a) a.hasOwnProperty(g) && delete a[g]
    };
    var r = +new Date;
    bb = function () {
        if ("undefined" !== typeof window.performance) {
            var a = window.performance;
            if ("undefined" !== typeof a.now) return a.now();
            if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
            if ("undefined" !== typeof a.mozNow) return a.mozNow();
            if ("undefined" !== typeof a.msNow) return a.msNow()
        }
        return Date.now() - r
    };
    var g = !1,
        p = g = !1,
        O = !1;
    "undefined" !== typeof window && (g = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), g = !g && /safari/i.test(navigator.userAgent), p = /(iphone|ipod|ipad)/i.test(navigator.userAgent), O = window.c2ejecta);
    var y = !g && !O && !p && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    n.prototype.contains = function (a) {
        return this.Kd() ? !1 : y ? this.sd.has(a) : this.items && this.items.hasOwnProperty(a)
    };
    n.prototype.add = function (a) {
        if (y) this.sd.has(a) || (this.sd.add(a), this.ne = !1);
        else {
            var g = a.toString(),
                r = this.items;
            r ? r.hasOwnProperty(g) || (r[g] = a, this.qh++, this.ne = !1) : (this.items = {}, this.items[g] = a, this.qh = 1, this.ne = !1)
        }
    };
    n.prototype.remove = function (a) {
        if (!this.Kd())
            if (y) this.sd.has(a) && (this.sd["delete"](a), this.ne = !1);
            else if (this.items) {
                a = a.toString();
                var g = this.items;
                g.hasOwnProperty(a) && (delete g[a], this.qh--, this.ne = !1)
            }
    };
    n.prototype.clear = function () {
        this.Kd() || (y ? this.sd.clear() : (this.items = null, this.qh = 0), F(this.Eg), this.ne = !0)
    };
    n.prototype.Kd = function () {
        return 0 === this.count()
    };
    n.prototype.count = function () {
        return y ? this.sd.size : this.qh
    };
    var P = null,
        R = 0;
    n.prototype.gw = function () {
        if (!this.ne) {
            if (y) F(this.Eg), P = this.Eg, R = 0, this.sd.forEach(t), P = null, R = 0;
            else {
                var a = this.Eg;
                F(a);
                var g, r = 0,
                    p = this.items;
                if (p)
                    for (g in p) p.hasOwnProperty(g) && (a[r++] = p[g])
            }
            this.ne = !0
        }
    };
    n.prototype.Ne = function () {
        this.gw();
        return this.Eg
    };
    ca = n;
    new ca;
    cb = function (a, g) {
        y ? db(a, g.sd) : eb(a, g.Ne())
    };
    db = function (a, g) {
        var r, p, k, e;
        p = r = 0;
        for (k = a.length; r < k; ++r) e = a[r], g.has(e) || (a[p++] = e);
        Ca(a, p)
    };
    eb = function (a, g) {
        var r, p, k, e;
        p = r = 0;
        for (k = a.length; r < k; ++r) e = a[r], -1 === Ga(g, e) && (a[p++] = e);
        Ca(a, p)
    };
    d.prototype.add = function (a) {
        this.y = a - this.Ak;
        this.Rj = this.J + this.y;
        this.Ak = this.Rj - this.J - this.y;
        this.J = this.Rj
    };
    d.prototype.reset = function () {
        this.J = this.Rj = this.y = this.Ak = 0
    };
    fb = d;
    gb = function (a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    c.prototype.Uh = function (a) {
        this.Pp = a;
        this.Ej = a.length / 2;
        this.rg.length = a.length;
        this.Bk = this.Ck = -1;
        this.Tn = 0
    };
    c.prototype.Yu = function () {
        return !this.Pp.length
    };
    c.prototype.Aa = function () {
        for (var a = this.rg, g = a[0], r = g, p = a[1], k = p, e, c, d = 1, m = this.Ej; d < m; ++d) c = 2 * d, e = a[c], c = a[c + 1], e < g && (g = e), e > r && (r = e), c < p && (p = c), c > k && (k = c);
        this.Mn = g;
        this.Nn = r;
        this.On = p;
        this.Ln = k
    };
    c.prototype.Mj = function (a, g, r) {
        this.rg.length = 8;
        this.Ej = 4;
        var p = this.rg;
        p[0] = a.left - g;
        p[1] = a.top - r;
        p[2] = a.right - g;
        p[3] = a.top - r;
        p[4] = a.right - g;
        p[5] = a.bottom - r;
        p[6] = a.left - g;
        p[7] = a.bottom - r;
        this.Ck = a.right - a.left;
        this.Bk = a.bottom - a.top;
        this.Aa()
    };
    c.prototype.Rs = function (a, g, r) {
        if (this.Ck !== a || this.Bk !== g || this.Tn !== r) {
            this.Ck = a;
            this.Bk = g;
            this.Tn = r;
            var p, k, e, c, d, m = 0,
                y = 1,
                h = this.Pp,
                O = this.rg;
            0 !== r && (m = Math.sin(r), y = Math.cos(r));
            r = 0;
            for (e = this.Ej; r < e; r++) p = 2 * r, k = p + 1, c = h[p] * a, d = h[k] * g, O[p] = c * y - d * m, O[k] = d * y + c * m;
            this.Aa()
        }
    };
    c.prototype.pc = function (a, g) {
        var r = this.rg;
        if (a === r[0] && g === r[1]) return !0;
        var p, k, e, c = this.Ej,
            d = this.Mn - 110,
            m = this.On - 101,
            y = this.Nn + 131,
            h = this.Ln + 120,
            O, q, u = 0,
            R = 0;
        for (p = 0; p < c; p++) k = 2 * p, e = (p + 1) % c * 2, O = r[k], k = r[k + 1], q = r[e], e = r[e + 1], va(d, m, a, g, O, k, q, e) && u++, va(y, h, a, g, O, k, q, e) && R++;
        return 1 === u % 2 || 1 === R % 2
    };
    hb = c;
    u.prototype.we = function (a, g, r) {
        var p;
        p = this.cells[a];
        return p ? (p = p[g]) ? p : r ? (p = h(this, a, g), this.cells[a][g] = p) : null : r ? (p = h(this, a, g), this.cells[a] = {}, this.cells[a][g] = p) : null
    };
    u.prototype.mc = function (a) {
        return ra(a / this.Fk)
    };
    u.prototype.nc = function (a) {
        return ra(a / this.Ek)
    };
    u.prototype.update = function (a, g, r) {
        var p, k, e, c, d;
        if (g)
            for (p = g.left, k = g.right; p <= k; ++p)
                for (e = g.top, c = g.bottom; e <= c; ++e)
                    if (!r || !r.pc(p, e))
                        if (d = this.we(p, e, !1)) d.remove(a), d.Kd() && (d.kb.clear(), 1E3 > X.length && X.push(d), this.cells[p][e] = null);
        if (r)
            for (p = r.left, k = r.right; p <= k; ++p)
                for (e = r.top, c = r.bottom; e <= c; ++e) g && g.pc(p, e) || this.we(p, e, !0).ql(a)
    };
    u.prototype.Rp = function (a, g) {
        var r, p, k, e, c, d;
        r = this.mc(a.left);
        k = this.nc(a.top);
        p = this.mc(a.right);
        for (c = this.nc(a.bottom); r <= p; ++r)
            for (e = k; e <= c; ++e)(d = this.we(r, e, !1)) && d.dump(g)
    };
    ib = u;
    v.prototype.we = function (a, g, r) {
        var p;
        p = this.cells[a];
        return p ? (p = p[g]) ? p : r ? (p = k(this, a, g), this.cells[a][g] = p) : null : r ? (p = k(this, a, g), this.cells[a] = {}, this.cells[a][g] = p) : null
    };
    v.prototype.mc = function (a) {
        return ra(a / this.Fk)
    };
    v.prototype.nc = function (a) {
        return ra(a / this.Ek)
    };
    v.prototype.update = function (a, g, r) {
        var p, k, e, c, d;
        if (g)
            for (p = g.left, k = g.right; p <= k; ++p)
                for (e = g.top, c = g.bottom; e <= c; ++e)
                    if (!r || !r.pc(p, e))
                        if (d = this.we(p, e, !1)) d.remove(a), d.Kd() && (d.reset(), 1E3 > M.length && M.push(d), this.cells[p][e] = null);
        if (r)
            for (p = r.left, k = r.right; p <= k; ++p)
                for (e = r.top, c = r.bottom; e <= c; ++e) g && g.pc(p, e) || this.we(p, e, !0).ql(a)
    };
    v.prototype.Rp = function (a, g, r, p, k) {
        var e, c;
        a = this.mc(a);
        g = this.nc(g);
        r = this.mc(r);
        for (e = this.nc(p); a <= r; ++a)
            for (p = g; p <= e; ++p)(c = this.we(a, p, !1)) && c.dump(k)
    };
    v.prototype.hv = function (a) {
        var g, r, p, k, e;
        g = a.left;
        p = a.top;
        r = a.right;
        for (k = a.bottom; g <= r; ++g)
            for (a = p; a <= k; ++a)
                if (e = this.we(g, a, !1)) e.ag = !1
    };
    jb = v;
    var X = [];
    a.prototype.Kd = function () {
        return this.kb.Kd()
    };
    a.prototype.ql = function (a) {
        this.kb.add(a)
    };
    a.prototype.remove = function (a) {
        this.kb.remove(a)
    };
    a.prototype.dump = function (a) {
        Fa(a, this.kb.Ne())
    };
    ba = a;
    var M = [];
    m.prototype.Kd = function () {
        if (!this.kb.length) return !0;
        if (this.kb.length > this.nd.count()) return !1;
        this.Xk();
        return !0
    };
    m.prototype.ql = function (a) {
        this.nd.contains(a) ? (this.nd.remove(a), this.nd.Kd() && (this.Ig = !1)) : this.kb.length ? (this.kb[this.kb.length - 1].jd() > a.jd() && (this.ag = !1), this.kb.push(a)) : (this.kb.push(a), this.ag = !0)
    };
    m.prototype.remove = function (a) {
        this.nd.add(a);
        this.Ig = !0;
        30 <= this.nd.count() && this.Xk()
    };
    m.prototype.Xk = function () {
        this.Ig && (this.nd.count() === this.kb.length ? this.reset() : (cb(this.kb, this.nd), this.nd.clear(), this.Ig = !1))
    };
    m.prototype.zt = function () {
        this.ag || (this.kb.sort(e), this.ag = !0)
    };
    m.prototype.reset = function () {
        F(this.kb);
        this.ag = !0;
        this.nd.clear();
        this.Ig = !1
    };
    m.prototype.dump = function (a) {
        this.Xk();
        this.zt();
        this.kb.length && a.push(this.kb)
    };
    da = m;
    var C = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    kb = function (a) {
        return 0 >= a || 11 <= a ? "source-over" : C[a - 1]
    };
    lb = function (a, g, r) {
        if (r) switch (a.Fb = r.ONE, a.Bb = r.ONE_MINUS_SRC_ALPHA, g) {
            case 1:
                a.Fb = r.ONE;
                a.Bb = r.ONE;
                break;
            case 3:
                a.Fb = r.ONE;
                a.Bb = r.ZERO;
                break;
            case 4:
                a.Fb = r.ONE_MINUS_DST_ALPHA;
                a.Bb = r.ONE;
                break;
            case 5:
                a.Fb = r.DST_ALPHA;
                a.Bb = r.ZERO;
                break;
            case 6:
                a.Fb = r.ZERO;
                a.Bb = r.SRC_ALPHA;
                break;
            case 7:
                a.Fb = r.ONE_MINUS_DST_ALPHA;
                a.Bb = r.ZERO;
                break;
            case 8:
                a.Fb = r.ZERO;
                a.Bb = r.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                a.Fb = r.DST_ALPHA;
                a.Bb = r.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                a.Fb = r.ONE_MINUS_DST_ALPHA, a.Bb = r.SRC_ALPHA
        }
    };
    mb = function (a) {
        return Math.round(1E6 * a) / 1E6
    };
    nb = function (a, g) {
        return "string" !== typeof a || "string" !== typeof g || a.length !== g.length ? !1 : a === g ? !0 : a.toLowerCase() === g.toLowerCase()
    };
    ob = function (a) {
        a = a.target;
        return !a || a === document || a === window || document && document.body && a === document.body || nb(a.tagName, "canvas") ? !0 : !1
    }
})();
var gc = "undefined" !== typeof Float32Array ? Float32Array : Array;

function hc(f) {
    var l = new gc(3);
    f && (l[0] = f[0], l[1] = f[1], l[2] = f[2]);
    return l
}

function ic(f) {
    var l = new gc(16);
    f && (l[0] = f[0], l[1] = f[1], l[2] = f[2], l[3] = f[3], l[4] = f[4], l[5] = f[5], l[6] = f[6], l[7] = f[7], l[8] = f[8], l[9] = f[9], l[10] = f[10], l[11] = f[11], l[12] = f[12], l[13] = f[13], l[14] = f[14], l[15] = f[15]);
    return l
}

function jc(f, l) {
    l[0] = f[0];
    l[1] = f[1];
    l[2] = f[2];
    l[3] = f[3];
    l[4] = f[4];
    l[5] = f[5];
    l[6] = f[6];
    l[7] = f[7];
    l[8] = f[8];
    l[9] = f[9];
    l[10] = f[10];
    l[11] = f[11];
    l[12] = f[12];
    l[13] = f[13];
    l[14] = f[14];
    l[15] = f[15]
}

function kc(f, l) {
    var b = l[0],
        n = l[1];
    l = l[2];
    f[0] *= b;
    f[1] *= b;
    f[2] *= b;
    f[3] *= b;
    f[4] *= n;
    f[5] *= n;
    f[6] *= n;
    f[7] *= n;
    f[8] *= l;
    f[9] *= l;
    f[10] *= l;
    f[11] *= l
}

function lc(f, l, b, n) {
    n || (n = ic());
    var t, d, c, u, v, h, a, k, m = f[0],
        e = f[1];
    f = f[2];
    d = b[0];
    c = b[1];
    t = b[2];
    b = l[1];
    h = l[2];
    m === l[0] && e === b && f === h ? (f = n, f[0] = 1, f[1] = 0, f[2] = 0, f[3] = 0, f[4] = 0, f[5] = 1, f[6] = 0, f[7] = 0, f[8] = 0, f[9] = 0, f[10] = 1, f[11] = 0, f[12] = 0, f[13] = 0, f[14] = 0, f[15] = 1) : (b = m - l[0], h = e - l[1], a = f - l[2], k = 1 / Math.sqrt(b * b + h * h + a * a), b *= k, h *= k, a *= k, l = c * a - t * h, t = t * b - d * a, d = d * h - c * b, (k = Math.sqrt(l * l + t * t + d * d)) ? (k = 1 / k, l *= k, t *= k, d *= k) : d = t = l = 0, c = h * d - a * t, u = a * l - b * d, v = b * t - h * l, (k = Math.sqrt(c * c + u * u + v * v)) ? (k = 1 / k, c *= k, u *= k, v *= k) : v = u = c = 0, n[0] = l, n[1] = c, n[2] = b, n[3] = 0, n[4] = t, n[5] = u, n[6] = h, n[7] = 0, n[8] = d, n[9] = v, n[10] = a, n[11] = 0, n[12] = -(l * m + t * e + d * f), n[13] = -(c * m + u * e + v * f), n[14] = -(b * m + h * e + a * f), n[15] = 1)
}
(function () {
    function f(d) {
        this.ef = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.Un = hc([0, 0, 100]);
        this.Wo = hc([0, 0, 0]);
        this.xq = hc([0, 1, 0]);
        this.Tm = hc([1, 1, 1]);
        this.fo = !0;
        this.Ql = ic();
        this.Gc = ic();
        this.Oo = ic();
        this.Kk = ic();
        this.A = d;
        this.Fo()
    }

    function l(d, c, u) {
        this.A = d;
        this.Vh = c;
        this.name = u;
        this.Fc = d.getAttribLocation(c, "aPos");
        this.Ae = d.getAttribLocation(c, "aTex");
        this.Uo = d.getUniformLocation(c, "matP");
        this.lj = d.getUniformLocation(c, "matMV");
        this.hg = d.getUniformLocation(c, "opacity");
        this.Vo = d.getUniformLocation(c, "samplerFront");
        this.Ah = d.getUniformLocation(c, "samplerBack");
        this.rf = d.getUniformLocation(c, "destStart");
        this.qf = d.getUniformLocation(c, "destEnd");
        this.Nl = d.getUniformLocation(c, "seconds");
        this.Ml = d.getUniformLocation(c, "pixelWidth");
        this.Ll = d.getUniformLocation(c, "pixelHeight");
        this.zh = d.getUniformLocation(c, "layerScale");
        this.yh = d.getUniformLocation(c, "layerAngle");
        this.Ch = d.getUniformLocation(c, "viewOrigin");
        this.Bh = d.getUniformLocation(c, "scrollPos");
        this.Ku = !!(this.Ml || this.Ll || this.Nl || this.Ah || this.rf || this.qf || this.zh || this.yh || this.Ch || this.Bh);
        this.ep = this.fp = -999;
        this.oj = 1;
        this.$o = this.Zo = 0;
        this.cp = this.Yo = this.Xo = 1;
        this.hp = this.gp = this.jp = this.ip = this.bp = 0;
        this.Fl = [];
        this.dp = ic();
        this.hg && d.uniform1f(this.hg, 1);
        this.Vo && d.uniform1i(this.Vo, 0);
        this.Ah && d.uniform1i(this.Ah, 1);
        this.rf && d.uniform2f(this.rf, 0, 0);
        this.qf && d.uniform2f(this.qf, 1, 1);
        this.zh && d.uniform1f(this.zh, 1);
        this.yh && d.uniform1f(this.yh, 0);
        this.Ch && d.uniform2f(this.Ch, 0, 0);
        this.Bh && d.uniform2f(this.Bh, 0, 0);
        this.$e = !1
    }

    function b(d, c) {
        this.type = d;
        this.D = c;
        this.A = c.A;
        this.kd = this.Jc = this.Bp = 0;
        this.ta = this.Lc = null;
        this.fq = []
    }
    f.prototype.Fo = function () {
        var d = this.A,
            c;
        this.Po = 1;
        this.kf = this.jf = null;
        this.Ai = 1;
        d.clearColor(0, 0, 0, 0);
        d.clear(d.COLOR_BUFFER_BIT);
        d.enable(d.BLEND);
        d.blendFunc(d.ONE, d.ONE_MINUS_SRC_ALPHA);
        d.disable(d.CULL_FACE);
        d.disable(d.DEPTH_TEST);
        this.Qo = d.ONE;
        this.No = d.ONE_MINUS_SRC_ALPHA;
        this.dk = new Float32Array(16E3);
        this.Tj = new Float32Array(16E3);
        this.Mp = new Float32Array(32E3);
        this.hm = d.createBuffer();
        d.bindBuffer(d.ARRAY_BUFFER, this.hm);
        d.bufferData(d.ARRAY_BUFFER, this.Mp.byteLength, d.DYNAMIC_DRAW);
        this.gi = Array(4);
        this.$h = Array(4);
        for (c = 0; 4 > c; c++) this.gi[c] = d.createBuffer(), d.bindBuffer(d.ARRAY_BUFFER, this.gi[c]), d.bufferData(d.ARRAY_BUFFER, this.dk.byteLength, d.DYNAMIC_DRAW), this.$h[c] = d.createBuffer(), d.bindBuffer(d.ARRAY_BUFFER, this.$h[c]), d.bufferData(d.ARRAY_BUFFER, this.Tj.byteLength, d.DYNAMIC_DRAW);
        this.Bd = 0;
        this.Nu = d.createBuffer();
        d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, this.Nu);
        for (var u = new Uint16Array(12E3), b = c = 0; 12E3 > c;) u[c++] = b, u[c++] = b + 1, u[c++] = b + 2, u[c++] = b, u[c++] = b + 2, u[c++] = b + 3, b += 4;
        d.bufferData(d.ELEMENT_ARRAY_BUFFER, u, d.STATIC_DRAW);
        this.im = this.yd = 0;
        this.fb = [];
        c = this.Jk({
            src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
        }, "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}", "<default>");
        this.fb.push(c);
        c = this.Jk({
            src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
        }, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
        this.fb.push(c);
        for (var h in mc) mc.hasOwnProperty(h) && this.fb.push(this.Jk(mc[h], "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}", h));
        d.activeTexture(d.TEXTURE0);
        d.bindTexture(d.TEXTURE_2D, null);
        this.me = [];
        this.Ad = 0;
        this.ac = !1;
        this.ao = this.sh = -1;
        this.Sg = null;
        this.cu = d.createFramebuffer();
        this.Wp = null;
        this.Ke = hc([0, 0, 0]);
        this.kp = d.getParameter(d.ALIASED_POINT_SIZE_RANGE)[1];
        2048 < this.kp && (this.kp = 2048);
        this.vd(0)
    };
    l.prototype.Lm = function (d) {
        var c = this.dp;
        if (c[0] !== d[0] || c[1] !== d[1] || c[2] !== d[2] || c[3] !== d[3] || c[4] !== d[4] || c[5] !== d[5] || c[6] !== d[6] || c[7] !== d[7] || c[8] !== d[8] || c[9] !== d[9] || c[10] !== d[10] || c[11] !== d[11] || c[12] !== d[12] || c[13] !== d[13] || c[14] !== d[14] || c[15] !== d[15]) jc(d, this.dp), this.A.uniformMatrix4fv(this.lj, !1, d)
    };
    f.prototype.Jk = function (d, c, u) {
        var b = this.A,
            h = b.createShader(b.FRAGMENT_SHADER);
        b.shaderSource(h, d.src);
        b.compileShader(h);
        if (!b.getShaderParameter(h, b.COMPILE_STATUS)) return b.deleteShader(h), null;
        var a = b.createShader(b.VERTEX_SHADER);
        b.shaderSource(a, c);
        b.compileShader(a);
        if (!b.getShaderParameter(a, b.COMPILE_STATUS)) return b.deleteShader(h), b.deleteShader(a), null;
        c = b.createProgram();
        b.attachShader(c, h);
        b.attachShader(c, a);
        b.linkProgram(c);
        if (!b.getProgramParameter(c, b.LINK_STATUS)) return b.deleteShader(h), b.deleteShader(a), b.deleteProgram(c), null;
        b.useProgram(c);
        b.deleteShader(h);
        b.deleteShader(a);
        u = new l(b, c, u);
        u.Tk = d.Tk || 0;
        u.Uk = d.Uk || 0;
        u.$n = !!d.$n;
        u.Hn = !!d.Hn;
        u.T = d.T || [];
        d = 0;
        for (h = u.T.length; d < h; d++) u.T[d][1] = b.getUniformLocation(c, u.T[d][0]), u.Fl.push(0), b.uniform1f(u.T[d][1], 0);
        return u
    };
    f.prototype.hl = function (d) {
        var c, u;
        c = 0;
        for (u = this.fb.length; c < u; c++)
            if (this.fb[c].name === d) return c;
        return -1
    };
    f.prototype.Op = function (d, c, u) {
        var b = this.Gc,
            h = this.Ql,
            a = [0, 0, 0, 0, 0, 0, 0, 0];
        a[0] = b[0] * d + b[4] * c + b[12];
        a[1] = b[1] * d + b[5] * c + b[13];
        a[2] = b[2] * d + b[6] * c + b[14];
        a[3] = b[3] * d + b[7] * c + b[15];
        a[4] = h[0] * a[0] + h[4] * a[1] + h[8] * a[2] + h[12] * a[3];
        a[5] = h[1] * a[0] + h[5] * a[1] + h[9] * a[2] + h[13] * a[3];
        a[6] = h[2] * a[0] + h[6] * a[1] + h[10] * a[2] + h[14] * a[3];
        a[7] = -a[2];
        0 !== a[7] && (a[7] = 1 / a[7], a[4] *= a[7], a[5] *= a[7], a[6] *= a[7], u[0] = (.5 * a[4] + .5) * this.width, u[1] = (.5 * a[5] + .5) * this.height)
    };
    f.prototype.Ge = function (d, c, u) {
        if (this.width !== d || this.height !== c || u) {
            this.Te();
            this.width = d;
            this.height = c;
            this.A.viewport(0, 0, d, c);
            c = d / c;
            var b = this.Ql,
                h;
            h = 1 * Math.tan(45 * Math.PI / 360);
            c *= h;
            d = -c;
            u = -h;
            b || (b = ic());
            var a = c - d,
                k = h - u;
            b[0] = 2 / a;
            b[1] = 0;
            b[2] = 0;
            b[3] = 0;
            b[4] = 0;
            b[5] = 2 / k;
            b[6] = 0;
            b[7] = 0;
            b[8] = (c + d) / a;
            b[9] =
                (h + u) / k;
            b[10] = -1001 / 999;
            b[11] = -1;
            b[12] = 0;
            b[13] = 0;
            b[14] = -2E3 / 999;
            b[15] = 0;
            lc(this.Un, this.Wo, this.xq, this.Gc);
            d = [0, 0];
            c = [0, 0];
            this.Op(0, 0, d);
            this.Op(1, 1, c);
            this.Tm[0] = 1 / (c[0] - d[0]);
            this.Tm[1] = -1 / (c[1] - d[1]);
            d = 0;
            for (c = this.fb.length; d < c; d++) u = this.fb[d], u.$e = !1, u.Uo && (this.A.useProgram(u.Vh), this.A.uniformMatrix4fv(u.Uo, !1, this.Ql));
            this.A.useProgram(this.fb[this.sh].Vh);
            this.A.bindTexture(this.A.TEXTURE_2D, null);
            this.A.activeTexture(this.A.TEXTURE1);
            this.A.bindTexture(this.A.TEXTURE_2D, null);
            this.A.activeTexture(this.A.TEXTURE0);
            this.kf = this.jf = null
        }
    };
    f.prototype.Ee = function () {
        lc(this.Un, this.Wo, this.xq, this.Gc);
        kc(this.Gc, this.Tm)
    };
    f.prototype.translate = function (d, c) {
        if (0 !== d || 0 !== c) {
            this.Ke[0] = d;
            this.Ke[1] = c;
            this.Ke[2] = 0;
            var b = this.Gc,
                f = this.Ke,
                h = f[0],
                a = f[1],
                f = f[2];
            b[12] = b[0] * h + b[4] * a + b[8] * f + b[12];
            b[13] = b[1] * h + b[5] * a + b[9] * f + b[13];
            b[14] = b[2] * h + b[6] * a + b[10] * f + b[14];
            b[15] = b[3] * h + b[7] * a + b[11] * f + b[15]
        }
    };
    f.prototype.scale = function (d, c) {
        if (1 !== d || 1 !== c) this.Ke[0] = d, this.Ke[1] = c, this.Ke[2] = 1, kc(this.Gc, this.Ke)
    };
    f.prototype.Xp = function (d) {
        if (0 !== d) {
            var c = this.Gc,
                b, f = Math.sin(d);
            d = Math.cos(d);
            var h = c[0],
                a = c[1],
                k = c[2],
                m = c[3],
                e = c[4],
                q = c[5],
                x = c[6],
                r = c[7];
            b ? c !== b && (b[8] = c[8], b[9] = c[9], b[10] = c[10], b[11] = c[11], b[12] = c[12], b[13] = c[13], b[14] = c[14], b[15] = c[15]) : b = c;
            b[0] = h * d + e * f;
            b[1] = a * d + q * f;
            b[2] = k * d + x * f;
            b[3] = m * d + r * f;
            b[4] = h * -f + e * d;
            b[5] = a * -f + q * d;
            b[6] = k * -f + x * d;
            b[7] = m * -f + r * d
        }
    };
    f.prototype.Me = function () {
        for (var d = !1, c = 0; 16 > c; c++)
            if (this.Oo[c] !== this.Gc[c]) {
                d = !0;
                break
            } d && (d = this.Yc(), d.type = 5, d.ta ? jc(this.Gc, d.ta) : d.ta = ic(this.Gc), jc(this.Gc, this.Oo), this.ac = !1)
    };
    b.prototype.kt = function () {
        this.A.bindTexture(this.A.TEXTURE_2D, this.Lc)
    };
    b.prototype.lt = function () {
        var d = this.A;
        d.activeTexture(d.TEXTURE1);
        d.bindTexture(d.TEXTURE_2D, this.Lc);
        d.activeTexture(d.TEXTURE0)
    };
    b.prototype.ht = function () {
        var d = this.Bp,
            c = this.D;
        c.Ai = d;
        c = c.Sg;
        c.hg && c.oj !== d && (c.oj = d, this.A.uniform1f(c.hg, d))
    };
    b.prototype.et = function () {
        this.A.drawElements(this.A.TRIANGLES, this.kd, this.A.UNSIGNED_SHORT, 2 * this.Jc)
    };
    b.prototype.gt = function () {
        this.A.blendFunc(this.Jc, this.kd)
    };
    b.prototype.nt = function () {
        var d, c, b, f = this.D.fb,
            h = this.D.ao;
        d = 0;
        for (c = f.length; d < c; d++) b = f[d], d === h && b.lj ? (b.Lm(this.ta), b.$e = !0) : b.$e = !1;
        jc(this.ta, this.D.Kk)
    };
    b.prototype.ft = function () {
        var d = this.A,
            c = this.D;
        this.Lc ? (c.kf === this.Lc && (d.activeTexture(d.TEXTURE1), d.bindTexture(d.TEXTURE_2D, null), c.kf = null, d.activeTexture(d.TEXTURE0)), d.bindFramebuffer(d.FRAMEBUFFER, c.cu), d.framebufferTexture2D(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0, d.TEXTURE_2D, this.Lc, 0)) : (d.framebufferTexture2D(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0, d.TEXTURE_2D, null, 0), d.bindFramebuffer(d.FRAMEBUFFER, null))
    };
    b.prototype.ct = function () {
        var d = this.A;
        0 === this.Jc ? (d.clearColor(this.ta[0], this.ta[1], this.ta[2], this.ta[3]), d.clear(d.COLOR_BUFFER_BIT)) : (d.enable(d.SCISSOR_TEST), d.scissor(this.ta[0], this.ta[1], this.ta[2], this.ta[3]), d.clearColor(0, 0, 0, 0), d.clear(this.A.COLOR_BUFFER_BIT), d.disable(d.SCISSOR_TEST))
    };
    b.prototype.dt = function () {
        var d = this.A,
            c = this.D,
            b = c.fb[1];
        d.useProgram(b.Vh);
        !b.$e && b.lj && (b.Lm(c.Kk), b.$e = !0);
        d.enableVertexAttribArray(b.Fc);
        d.bindBuffer(d.ARRAY_BUFFER, c.hm);
        d.vertexAttribPointer(b.Fc, 4, d.FLOAT, !1, 0, 0);
        d.drawArrays(d.POINTS, this.Jc / 4, this.kd);
        b = c.Sg;
        d.useProgram(b.Vh);
        0 <= b.Fc && (d.enableVertexAttribArray(b.Fc), d.bindBuffer(d.ARRAY_BUFFER, c.gi[c.Bd]), d.vertexAttribPointer(b.Fc, 2, d.FLOAT, !1, 0, 0));
        0 <= b.Ae && (d.enableVertexAttribArray(b.Ae), d.bindBuffer(d.ARRAY_BUFFER, c.$h[c.Bd]), d.vertexAttribPointer(b.Ae, 2, d.FLOAT, !1, 0, 0))
    };
    b.prototype.it = function () {
        var d = this.A,
            c = this.D,
            b = c.fb[this.Jc];
        c.ao = this.Jc;
        c.Sg = b;
        d.useProgram(b.Vh);
        !b.$e && b.lj && (b.Lm(c.Kk), b.$e = !0);
        b.hg && b.oj !== c.Ai && (b.oj = c.Ai, d.uniform1f(b.hg, c.Ai));
        0 <= b.Fc && (d.enableVertexAttribArray(b.Fc), d.bindBuffer(d.ARRAY_BUFFER, c.gi[c.Bd]), d.vertexAttribPointer(b.Fc, 2, d.FLOAT, !1, 0, 0));
        0 <= b.Ae && (d.enableVertexAttribArray(b.Ae), d.bindBuffer(d.ARRAY_BUFFER, c.$h[c.Bd]), d.vertexAttribPointer(b.Ae, 2, d.FLOAT, !1, 0, 0))
    };
    b.prototype.jt = function () {
        var d, c, b = this.D.Sg,
            f = this.A;
        d = this.ta;
        b.Ah && this.D.kf !== this.Lc && (f.activeTexture(f.TEXTURE1), f.bindTexture(f.TEXTURE_2D, this.Lc), this.D.kf = this.Lc, f.activeTexture(f.TEXTURE0));
        var h = d[0];
        b.Ml && h !== b.fp && (b.fp = h, f.uniform1f(b.Ml, h));
        h = d[1];
        b.Ll && h !== b.ep && (b.ep = h, f.uniform1f(b.Ll, h));
        h = d[2];
        c = d[3];
        !b.rf || h === b.Zo && c === b.$o || (b.Zo = h, b.$o = c, f.uniform2f(b.rf, h, c));
        h = d[4];
        c = d[5];
        !b.qf || h === b.Xo && c === b.Yo || (b.Xo = h, b.Yo = h, f.uniform2f(b.qf, h, c));
        h = d[6];
        b.zh && h !== b.cp && (b.cp = h, f.uniform1f(b.zh, h));
        h = d[7];
        b.yh && h !== b.bp && (b.bp = h, f.uniform1f(b.yh, h));
        h = d[8];
        c = d[9];
        !b.Ch || h === b.ip && c === b.jp || (b.ip = h, b.jp = c, f.uniform2f(b.Ch, h, c));
        h = d[10];
        c = d[11];
        !b.Bh || h === b.gp && c === b.hp || (b.gp = h, b.hp = c, f.uniform2f(b.Bh, h, c));
        b.Nl && f.uniform1f(b.Nl, bb() / 1E3);
        if (b.T.length)
            for (d = 0, c = b.T.length; d < c; d++) h = this.fq[d], h !== b.Fl[d] && (b.Fl[d] = h, f.uniform1f(b.T[d][1], h))
    };
    f.prototype.Yc = function () {
        this.Ad === this.me.length && this.me.push(new b(0, this));
        return this.me[this.Ad++]
    };
    f.prototype.Te = function () {
        if (0 !== this.Ad && !this.A.isContextLost()) {
            var b = this.A;
            0 < this.im && (b.bindBuffer(b.ARRAY_BUFFER, this.hm), b.bufferSubData(b.ARRAY_BUFFER, 0, this.Mp.subarray(0,
                this.im)), c && 0 <= c.Fc && "<point>" === c.name && b.vertexAttribPointer(c.Fc, 4, b.FLOAT, !1, 0, 0));
            if (0 < this.yd) {
                var c = this.Sg;
                b.bindBuffer(b.ARRAY_BUFFER, this.gi[this.Bd]);
                b.bufferSubData(b.ARRAY_BUFFER, 0, this.dk.subarray(0, this.yd));
                c && 0 <= c.Fc && "<point>" !== c.name && b.vertexAttribPointer(c.Fc, 2, b.FLOAT, !1, 0, 0);
                b.bindBuffer(b.ARRAY_BUFFER, this.$h[this.Bd]);
                b.bufferSubData(b.ARRAY_BUFFER, 0, this.Tj.subarray(0, this.yd));
                c && 0 <= c.Ae && "<point>" !== c.name && b.vertexAttribPointer(c.Ae, 2, b.FLOAT, !1, 0, 0)
            }
            for (var f, b = 0, c = this.Ad; b < c; b++) switch (f = this.me[b], f.type) {
                case 1:
                    f.et();
                    break;
                case 2:
                    f.kt();
                    break;
                case 3:
                    f.ht();
                    break;
                case 4:
                    f.gt();
                    break;
                case 5:
                    f.nt();
                    break;
                case 6:
                    f.ft();
                    break;
                case 7:
                    f.ct();
                    break;
                case 8:
                    f.dt();
                    break;
                case 9:
                    f.it();
                    break;
                case 10:
                    f.jt();
                    break;
                case 11:
                    f.lt()
            }
            this.im = this.yd = this.Ad = 0;
            this.ac = !1;
            this.Bd++;
            4 <= this.Bd && (this.Bd = 0)
        }
    };
    f.prototype.zf = function (b) {
        if (b !== this.Po) {
            var c = this.Yc();
            c.type = 3;
            this.Po = c.Bp = b;
            this.ac = !1
        }
    };
    f.prototype.lc = function (b) {
        if (b !== this.jf) {
            var c = this.Yc();
            c.type = 2;
            this.jf = c.Lc = b;
            this.ac = !1
        }
    };
    f.prototype.Fe = function (b, c) {
        if (b !== this.Qo || c !== this.No) {
            var f = this.Yc();
            f.type = 4;
            f.Jc = b;
            f.kd = c;
            this.Qo = b;
            this.No = c;
            this.ac = !1
        }
    };
    f.prototype.aq = function () {
        this.Fe(this.A.ONE, this.A.ONE_MINUS_SRC_ALPHA)
    };
    f.prototype.Gj = function (b, c, f, t, h, a, k, m) {
        15992 <= this.yd && this.Te();
        var e = this.yd,
            q = this.dk,
            x = this.Tj;
        if (this.ac) this.me[this.Ad - 1].kd += 6;
        else {
            var r = this.Yc();
            r.type = 1;
            r.Jc = e / 4 * 3;
            r.kd = 6;
            this.ac = !0
        }
        q[e] = b;
        x[e++] = 0;
        q[e] = c;
        x[e++] = 0;
        q[e] = f;
        x[e++] = 1;
        q[e] = t;
        x[e++] = 0;
        q[e] = h;
        x[e++] = 1;
        q[e] = a;
        x[e++] = 1;
        q[e] = k;
        x[e++] = 0;
        q[e] = m;
        x[e++] = 1;
        this.yd = e
    };
    f.prototype.rd = function (b, c, f, t, h, a, k, m, e) {
        15992 <= this.yd && this.Te();
        var q = this.yd,
            x = this.dk,
            r = this.Tj;
        if (this.ac) this.me[this.Ad - 1].kd += 6;
        else {
            var g = this.Yc();
            g.type = 1;
            g.Jc = q / 4 * 3;
            g.kd = 6;
            this.ac = !0
        }
        var g = e.left,
            p = e.top,
            O = e.right;
        e = e.bottom;
        x[q] = b;
        r[q++] = g;
        x[q] = c;
        r[q++] = p;
        x[q] = f;
        r[q++] = O;
        x[q] = t;
        r[q++] = p;
        x[q] = h;
        r[q++] = O;
        x[q] = a;
        r[q++] = e;
        x[q] = k;
        r[q++] = g;
        x[q] = m;
        r[q++] = e;
        this.yd = q
    };
    f.prototype.vd = function (b) {
        if (this.sh !== b) {
            if (!this.fb[b]) {
                if (0 === this.sh) return;
                b = 0
            }
            var c = this.Yc();
            c.type = 9;
            this.sh = c.Jc = b;
            this.ac = !1
        }
    };
    f.prototype.Nh = function (b) {
        b = this.fb[b];
        return !(!b.rf && !b.qf)
    };
    f.prototype.km = function (b) {
        b = this.fb[b];
        return !!(b.rf || b.qf || b.$n)
    };
    f.prototype.Ev = function (b) {
        b = this.fb[b];
        return 0 !== b.Tk || 0 !== b.Uk
    };
    f.prototype.su = function (b) {
        return this.fb[b].Tk
    };
    f.prototype.tu = function (b) {
        return this.fb[b].Uk
    };
    f.prototype.uu = function (b, c) {
        return this.fb[b].T[c][2]
    };
    f.prototype.Dj = function (b) {
        return this.fb[b].Hn
    };
    f.prototype.ug = function (b, c, f, t, h, a, k, m, e, q, x, r, g, p) {
        var O = this.fb[this.sh],
            y, P;
        if (O.Ku || p.length) {
            y = this.Yc();
            y.type = 10;
            y.ta ? jc(this.Gc, y.ta) : y.ta = ic();
            P = y.ta;
            P[0] = c;
            P[1] = f;
            P[2] = t;
            P[3] = h;
            P[4] = a;
            P[5] = k;
            P[6] = m;
            P[7] = e;
            P[8] = q;
            P[9] = x;
            P[10] = r;
            P[11] = g;
            O.Ah ? y.Lc = b : y.Lc = null;
            if (p.length)
                for (f = y.fq, f.length = p.length, b = 0, c = p.length; b < c; b++) f[b] = p[b];
            this.ac = !1
        }
    };
    f.prototype.clear = function (b, c, f, t) {
        var h = this.Yc();
        h.type = 7;
        h.Jc = 0;
        h.ta || (h.ta = ic());
        h.ta[0] = b;
        h.ta[1] = c;
        h.ta[2] = f;
        h.ta[3] = t;
        this.ac = !1
    };
    f.prototype.clearRect = function (b, c, f, t) {
        if (!(0 > f || 0 > t)) {
            var h = this.Yc();
            h.type = 7;
            h.Jc = 1;
            h.ta || (h.ta = ic());
            h.ta[0] = b;
            h.ta[1] = c;
            h.ta[2] = f;
            h.ta[3] = t;
            this.ac = !1
        }
    };
    f.prototype.Dv = function () {
        this.Te();
        this.A.flush()
    };
    var n = [],
        t = {};
    f.prototype.Us = function () {
        n.length = 0;
        t = {}
    };
    f.prototype.gg = function (b, c, f, l) {
        c = !!c;
        f = !!f;
        var h = b.src + "," + c + "," + f + (c ? ",undefined" : ""),
            a = null;
        if ("undefined" !== typeof b.src && t.hasOwnProperty(h)) return a = t[h], a.ni++, a;
        this.Te();
        var k = this.A,
            m = ka(b.width) && ka(b.height),
            a = k.createTexture();
        k.bindTexture(k.TEXTURE_2D, a);
        k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var e = k.RGBA,
            q = k.RGBA,
            x = k.UNSIGNED_BYTE;
        if (l && !this.ef) switch (l) {
            case 1:
                q = e = k.RGB;
                break;
            case 2:
                x = k.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                x = k.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                q = e = k.RGB, x = k.UNSIGNED_SHORT_5_6_5
        }
        if (!m && c) {
            l = document.createElement("canvas");
            l.width = ma(b.width);
            l.height = ma(b.height);
            var r = l.getContext("2d");
            r.webkitImageSmoothingEnabled = f;
            r.mozImageSmoothingEnabled = f;
            r.msImageSmoothingEnabled = f;
            r.imageSmoothingEnabled = f;
            r.drawImage(b, 0, 0, b.width, b.height, 0, 0, l.width, l.height);
            k.texImage2D(k.TEXTURE_2D, 0, e, q, x, l)
        } else k.texImage2D(k.TEXTURE_2D, 0, e, q, x, b);
        c ? (k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.REPEAT), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.REPEAT)) : (k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE));
        f ? (k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, k.LINEAR), m && this.fo ? (k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.LINEAR_MIPMAP_LINEAR), k.generateMipmap(k.TEXTURE_2D)) : k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.LINEAR)) : (k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, k.NEAREST), k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.NEAREST));
        k.bindTexture(k.TEXTURE_2D, null);
        this.jf = null;
        a.Ng = b.width;
        a.Mg = b.height;
        a.ni = 1;
        a.Sn = h;
        n.push(a);
        return t[h] = a
    };
    f.prototype.re = function (b, c, f) {
        var t;
        this.Te();
        var h = this.A;
        this.ef && (t = !1);
        var a = h.createTexture();
        h.bindTexture(h.TEXTURE_2D, a);
        h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, b, c, 0, h.RGBA, t ? h.UNSIGNED_SHORT_4_4_4_4 : h.UNSIGNED_BYTE, null);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, f ? h.LINEAR : h.NEAREST);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, f ? h.LINEAR : h.NEAREST);
        h.bindTexture(h.TEXTURE_2D, null);
        this.jf = null;
        a.Ng = b;
        a.Mg = c;
        n.push(a);
        return a
    };
    f.prototype.deleteTexture = function (b) {
        b && ("undefined" !== typeof b.ni && 1 < b.ni ? b.ni-- : (this.Te(), b === this.jf && (this.A.bindTexture(this.A.TEXTURE_2D, null), this.jf = null), b === this.kf && (this.A.activeTexture(this.A.TEXTURE1), this.A.bindTexture(this.A.TEXTURE_2D, null), this.A.activeTexture(this.A.TEXTURE0), this.kf = null), Ha(n, b), "undefined" !== typeof b.Sn && delete t[b.Sn], this.A.deleteTexture(b)))
    };
    f.prototype.td = function (b) {
        if (b !== this.Wp) {
            var c = this.Yc();
            c.type = 6;
            this.Wp = c.Lc = b;
            this.ac = !1
        }
    };
    pb = f
})();
(function () {
    function f() {
        return "undefined" !== typeof jQuery ? jQuery(window).width() : window.innerWidth
    }

    function l() {
        return "undefined" !== typeof jQuery ? jQuery(window).height() : window.innerHeight
    }

    function b(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var g = this;
            this.Qb = (this.Wf = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
            this.ub = !!a.dc;
            this.Vf = "undefined" !== typeof window.AppMobi || this.ub;
            this.cc = !!window.c2cocoonjs;
            this.Dc = !!window.c2ejecta;
            this.cc && (CocoonJS.App.onSuspended.addEventListener(function () {
                g.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function () {
                g.setSuspended(!1)
            }));
            this.Dc && (document.addEventListener("pagehide", function () {
                g.setSuspended(!0)
            }), document.addEventListener("pageshow", function () {
                g.setSuspended(!1)
            }), document.addEventListener("resize", function () {
                g.setSize(window.innerWidth, window.innerHeight)
            }));
            this.za = this.ub || this.cc || this.Dc;
            this.ef = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent) || /edge\//i.test(navigator.userAgent);
            this.Al = /tizen/i.test(navigator.userAgent);
            this.jh = /android/i.test(navigator.userAgent) && !this.Al && !this.ef;
            this.Dl = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.ef;
            this.Mo = /ipad/i.test(navigator.userAgent);
            this.dg = this.Dl || this.Mo || this.Dc;
            this.Zu = this.Dl && /os\s6/i.test(navigator.userAgent);
            this.kh = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.ef;
            this.ih = /amazonwebappplatform/i.test(navigator.userAgent);
            this.Ru = /firefox/i.test(navigator.userAgent);
            this.Ko = /safari/i.test(navigator.userAgent) && !this.kh && !this.ef;
            this.Uu = /windows/i.test(navigator.userAgent);
            this.xl = this.Ld = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
            this.Pu = "undefined" !== typeof window.is_scirra_arcade;
            this.Bl = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.Wu = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.ye = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.Zi = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.Yi = this.Bl || this.Wu || this.Zi;
            this.tl = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.Xi = this.jh && !this.kh && !this.Wf && !this.Ru && !this.ih && !this.za;
            this.devicePixelRatio = 1;
            this.Xf = this.Qb || this.Wf || this.Vf || this.cc || this.jh || this.dg || this.ye || this.Zi || this.tl || this.Al || this.Dc;
            this.Xf || (this.Xf = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            "undefined" === typeof cr_is_preview || this.Ld || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.Ld = !0);
            this.Qu = "undefined" !== typeof cr_is_preview && -1 < window.location.search.indexOf("debug");
            this.canvas = a;
            this.Vn = document.getElementById("c2canvasdiv");
            this.ra = this.D = this.A = null;
            this.$k = "";
            this.Li = !1;
            this.up = this.vp = 0;
            this.canvas.oncontextmenu = function (a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function (a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.ub && (window.c2runtime = this);
            this.Ld && (window.ondragover = function (a) {
                a.preventDefault();
                return !1
            }, window.ondrop = function (a) {
                a.preventDefault();
                return !1
            }, require("nw.gui").App.clearCache());
            this.Xi && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
            this.width = a.width;
            this.height = a.height;
            this.Y = this.width;
            this.X = this.height;
            this.xi = this.width;
            this.wi = this.height;
            this.vh = window.innerWidth;
            this.uh = window.innerHeight;
            this.eu = !1;
            this.ca = !0;
            this.mh = !1;
            Date.now || (Date.now = function () {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.B = [];
            this.Ra = [];
            this.Jl = {};
            this.Wc = [];
            this.Sk = {};
            this.Gd = [];
            this.Gg = [];
            this.Zj = [];
            this.sk = [];
            this.Js = [];
            this.Re = {};
            this.ul = this.xe = !1;
            this.Uc = 0;
            this.zl = !1;
            this.ed = [];
            this.Nd = this.Db = this.hj = this.wm = "";
            this.Yh = this.iq = !1;
            this.Ik = this.Dh = this.ue = this.te = 0;
            this.Bg = 1;
            this.tc = new fb;
            this.be = new fb;
            this.rj = this.Mi = this.Ug = this.Ag = this.mf = this.Zk = this.ej = 0;
            this.Pg = null;
            this.Ei = [];
            this.Rk = [];
            this.Hi = -1;
            this.Ol = [
                []
            ];
            this.Im = this.mj = 0;
            this.Fj(null);
            this.ig = [];
            this.nj = -1;
            this.pp = this.Hh = 0;
            this.Il = !0;
            this.Wg = 0;
            this.Zh = [];
            this.Fm = this.mm = -1;
            this.ph = !0;
            this.pf = 0;
            this.ff = !1;
            this.Xv = 0;
            this.If = null;
            this.ec = this.Ao = !1;
            this.tp = new ca;
            this.Xl = new ca;
            this.Yl = new ca;
            this.Up = [];
            new hb([]);
            new hb([]);
            this.Hf = [];
            this.dh = {};
            this.Lf = {};
            this.Gf = {};
            this.Fg = {};
            this.Pn = {};
            this.To = this.gj = this.hc = this.uc = this.So = this.fj = this.ya = null;
            this.Dg = this.Cl = !1;
            this.al = [null, null];
            this.Xe = 0;
            this.Wk = "";
            this.Pd = {};
            this.Wh = this.of = null;
            this.kq = "";
            this.qj = [];
            this.Iv()
        }
    }

    function n(a) {
        a.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }

    function t(a, g, p, k) {
        var e = indexedDB.open("_C2SaveStates");
        e.onupgradeneeded = n;
        e.onerror = k;
        e.onsuccess = function (e) {
            e = e.target.result;
            e.onerror = k;
            e.transaction(["saves"], "readwrite").objectStore("saves").put({
                slot: a,
                data: g
            }).onsuccess = p
        }
    }

    function d(a, g, p) {
        var e = indexedDB.open("_C2SaveStates");
        e.onupgradeneeded = n;
        e.onerror = p;
        e.onsuccess = function (e) {
            e = e.target.result;
            e.onerror = p;
            var k = e.transaction(["saves"]).objectStore("saves").get(a);
            k.onsuccess = function () {
                k.result ? g(k.result.data) : g(null)
            }
        }
    }

    function c() {
        ea("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }

    function u(a) {
        var g, p = {};
        for (g in a) !a.hasOwnProperty(g) || a[g] instanceof ca || a[g] && "undefined" !== typeof a[g].Zw || (p[g] = a[g]);
        return p
    }
    b.prototype.Iv = function () {
        var a = this,
            g;
        this.ye ? g = new ActiveXObject("Microsoft.XMLHTTP") : g = new XMLHttpRequest;
        var p = "data.js";
        if (this.Bl || this.ye || this.Zi) p = "data.json";
        g.open("GET", p, !0);
        var e = !1;
        if (!this.za && "response" in g && "responseType" in g) try {
            g.responseType = "json", e = "json" === g.responseType
        } catch (k) {
            e = !1
        }
        if (!e && "responseType" in g) try {
            g.responseType = "text"
        } catch (b) { }
        if ("overrideMimeType" in g) try {
            g.overrideMimeType("application/json; charset=utf-8")
        } catch (c) { }
        this.ye ? g.onreadystatechange = function () {
            4 === g.readyState && a.jj(JSON.parse(g.responseText))
        } : (g.onload = function () {
            if (e) a.jj(g.response);
            else if (a.Dc) {
                var p = g.responseText,
                    p = p.substr(p.indexOf("{"));
                a.jj(JSON.parse(p))
            } else a.jj(JSON.parse(g.responseText))
        }, g.onerror = function (a) {
            fa("Error requesting " + p + ":");
            fa(a)
        });
        g.send()
    };
    b.prototype.Ou = function () {
        var a = this,
            g, p, e, k, b, c, m, h, d;
        this.hf = (!this.za || this.Dc) && this.iw && !this.Xi;
        0 === this.Ob && this.dg && (this.hf = !1);
        this.devicePixelRatio = this.hf ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
        this.zb();
        p = !(!this.eu && (!this.tk || this.Ld || this.Yi || this.ye || this.Wf || this.Qb || this.ih));
        0 < this.Ob && this.setSize(f(), l(), !0);
        try {
            this.xt && (this.cc || this.Dc || !this.za) && (g = {
                alpha: p,
                depth: !1,
                antialias: !1,
                failIfMajorPerformanceCaveat: !0
            }, this.A = this.canvas.getContext("webgl", g) || this.canvas.getContext("experimental-webgl", g))
        } catch (q) { }
        if (this.A) {
            this.A.getExtension("WEBGL_debug_renderer_info");
            this.za || (this.mb = document.createElement("canvas"), jQuery(this.mb).appendTo(this.canvas.parentNode), this.mb.oncontextmenu = function () {
                return !1
            }, this.mb.onselectstart = function () {
                return !1
            }, this.mb.width = this.xi, this.mb.height = this.wi, jQuery(this.mb).css({
                width: this.xi + "px",
                height: this.wi + "px"
            }), this.Np(), this.gm = this.mb.getContext("2d"));
            this.D = new pb(this.A, this.Xf);
            this.D.Ge(this.canvas.width, this.canvas.height);
            this.D.fo = 0 !== this.ot;
            this.ra = null;
            this.canvas.addEventListener("webglcontextlost", function (g) {
                g.preventDefault();
                a.ov();
                ea("[Construct 2] WebGL context lost");
                window.cr_setSuspended(!0)
            }, !1);
            this.canvas.addEventListener("webglcontextrestored", function () {
                a.D.Fo();
                a.D.Ge(a.D.width, a.D.height, !0);
                a.uc = null;
                a.hc = null;
                a.al[0] = null;
                a.al[1] = null;
                a.pv();
                a.ca = !0;
                ea("[Construct 2] WebGL context restored");
                window.cr_setSuspended(!1)
            }, !1);
            g = 0;
            for (p = this.B.length; g < p; g++)
                for (b = this.B[g], e = 0, k = b.O.length; e < k; e++) m = b.O[e], m.wb = this.D.hl(m.id), this.Dg = this.Dg || this.D.Nh(m.wb);
            g = 0;
            for (p = this.Wc.length; g < p; g++) {
                h = this.Wc[g];
                e = 0;
                for (k = h.O.length; e < k; e++) m = h.O[e], m.wb = this.D.hl(m.id);
                e = 0;
                for (k = h.W.length; e < k; e++)
                    for (d = h.W[e], b = 0, c = d.O.length; b < c; b++) m = d.O[b], m.wb = this.D.hl(m.id), this.Dg = this.Dg || this.D.Nh(m.wb)
            }
        } else {
            if (0 < this.Ob && this.ub) {
                this.canvas = null;
                document.oncontextmenu = function () {
                    return !1
                };
                document.onselectstart = function () {
                    return !1
                };
                this.ra = AppMobi.canvas.getContext("2d");
                try {
                    this.ra.samplingMode = this.ja ? "smooth" : "sharp", this.ra.globalScale = 1, this.ra.HTML5CompatibilityMode = !0, this.ra.imageSmoothingEnabled = this.ja
                } catch (x) { }
                0 !== this.width && 0 !== this.height && (this.ra.width = this.width, this.ra.height = this.height)
            }
            this.ra || (this.cc ? (g = {
                antialias: !!this.ja,
                alpha: p
            }, this.ra = this.canvas.getContext("2d", g)) : (g = {
                alpha: p
            }, this.ra = this.canvas.getContext("2d", g)), this.ra.webkitImageSmoothingEnabled = this.ja, this.ra.mozImageSmoothingEnabled = this.ja, this.ra.msImageSmoothingEnabled = this.ja, this.ra.imageSmoothingEnabled = this.ja);
            this.gm = this.mb = null
        }
        this.pq = function (g) {
            a.gb(!1, g)
        };
        window == window.top || this.za || this.Yi || this.ye || (document.addEventListener("mousedown", function () {
            window.focus()
        }, !0), document.addEventListener("touchstart", function () {
            window.focus()
        }, !0));
        "undefined" !== typeof cr_is_preview && (this.cc && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (ea("Reloading for continuous preview"), this.hj = "__c2_continuouspreview", this.Yh = !0), this.wv && !this.Xf && (jQuery(window).focus(function () {
            a.setSuspended(!1)
        }), jQuery(window).blur(function () {
            a.setSuspended(!0)
        })));
        this.za || (g = function (a) {
            if (ob(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                document.activeElement.blur()
            } catch (g) { }
        }, window.navigator.pointerEnabled ? document.addEventListener("pointerdown", g) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", g) : document.addEventListener("touchstart", g), document.addEventListener("mousedown", g));
        0 === this.Ob && this.hf && 1 < this.devicePixelRatio && this.setSize(this.Ma, this.La, !0);
        this.tq();
        this.Hu();
        this.go();
        this.ba = {}
    };
    b.prototype.setSize = function (a, g, p) {
        var e = 0,
            k = 0,
            b = 0,
            c = 0,
            c = 0,
            m = this.Zu && this.Ko && !navigator.standalone && !this.za && !this.Qb;
        m && (g += 60);
        if (this.vh !== a || this.uh !== g || p) {
            this.vh = a;
            this.uh = g;
            var h = this.Ob,
                d = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.ff) && !this.Qb;
            if (d || 0 !== this.Ob || p) d && 0 < this.Xe && (h = this.Xe), p = this.devicePixelRatio, 4 <= h ? (b = this.Ma / this.La, a / g > b ? (b *= g, 5 === h ? (c = b * p / this.Ma, 1 < c ? c = Math.floor(c) : 1 > c && (c = 1 / Math.ceil(1 / c)), b = this.Ma * c / p, c = this.La * c / p, e = (a - b) / 2, k = (g - c) / 2, a = b, g = c) : (e = (a - b) / 2, a = b)) : (c = a / b, 5 === h ? (c = c * p / this.La, 1 < c ? c = Math.floor(c) : 1 > c && (c = 1 / Math.ceil(1 / c)), b = this.Ma * c / p, c = this.La * c / p, e = (a - b) / 2, k = (g - c) / 2, a = b) : k = (g - c) / 2, g = c), d && !this.Ld &&
                (k = e = 0)) : this.Ld && this.ff && 0 === this.no && (e = Math.floor((a - this.Ma) / 2), k = Math.floor((g - this.La) / 2), a = this.Ma, g = this.La), 2 > h && (this.Kg = p), this.hf && this.Mo && 1 < p && (1024 <= a && (a = 1023), 1024 <= g && (g = 1023)), this.xi = Math.round(a), this.wi = Math.round(g), this.width = Math.round(a * p), this.height = Math.round(g * p), this.ca = !0, this.Eq ? (this.Y = this.width, this.X = this.height, this.Cc = !0) : this.width < this.Ma && this.height < this.La || 1 === h ? (this.Y = this.width, this.X = this.height, this.Cc = !0) : (this.Y = this.Ma, this.X = this.La, this.Cc = !1,
                    2 === h ? (b = this.Ma / this.La, h = this.vh / this.uh, h < b ? this.Y = this.X * h : h > b && (this.X = this.Y / h)) : 3 === h && (b = this.Ma / this.La, h = this.vh / this.uh, h > b ? this.Y = this.X * h : h < b && (this.X = this.Y / h))), this.Vn && !this.za && (jQuery(this.Vn).css({
                        width: Math.round(a) + "px",
                        height: Math.round(g) + "px",
                        "margin-left": Math.floor(e) + "px",
                        "margin-top": Math.floor(k) + "px"
                    }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                        width: Math.round(a) + "px",
                        height: Math.round(g) + "px"
                    })), this.canvas && (this.canvas.width = Math.round(a * p), this.canvas.height = Math.round(g * p), this.Dc ? (this.canvas.style.left = Math.floor(e) + "px", this.canvas.style.top = Math.floor(k) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(g) + "px") : this.hf && !this.za && (this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(g) + "px")), this.mb && (this.mb.width = Math.round(a), this.mb.height = Math.round(g), this.mb.style.width = Math.round(a) + "px", this.mb.style.height = Math.round(g) + "px"), this.D && this.D.Ge(Math.round(a * p), Math.round(g * p)), this.ub && this.ra && (this.ra.width = Math.round(a), this.ra.height = Math.round(g)), this.ra && (this.ra.webkitImageSmoothingEnabled = this.ja, this.ra.mozImageSmoothingEnabled = this.ja, this.ra.msImageSmoothingEnabled = this.ja, this.ra.imageSmoothingEnabled = this.ja), this.tq(), this.za || !m && !this.Dl || window.setTimeout(function () {
                        window.scrollTo(0, 1)
                    }, 100)
        }
    };
    b.prototype.tq = function () {
        if (this.Ns && 0 !== this.em) {
            var a = "portrait";
            2 === this.em && (a = "landscape");
            screen.orientation && screen.orientation.lock ? screen.orientation.lock(a) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
        }
    };
    b.prototype.ov = function () {
        this.D.Us();
        this.Cl = !0;
        var a, g, p;
        a = 0;
        for (g = this.B.length; a < g; a++) p = this.B[a], p.sj && p.sj()
    };
    b.prototype.pv = function () {
        this.Cl = !1;
        var a, g, p;
        a = 0;
        for (g = this.B.length; a < g; a++) p = this.B[a], p.uj && p.uj()
    };
    b.prototype.Np = function () {
        if (!this.za) {
            var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.ff) && !this.Qb ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.mb).css(a)
        }
    };
    var v = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    b.prototype.setSuspended = function (a) {
        var g;
        if (a && !this.mh)
            for (ea("[Construct 2] Suspending"), this.mh = !0, -1 !== this.mm && v && v(this.mm), -1 !== this.Fm && clearTimeout(this.Fm), a = 0, g = this.Zh.length; a < g; a++) this.Zh[a](!0);
        else if (!a && this.mh) {
            ea("[Construct 2] Resuming");
            this.mh = !1;
            this.ej = bb();
            this.mf = bb();
            a = this.Dh = this.Mi = 0;
            for (g = this.Zh.length; a < g; a++) this.Zh[a](!1);
            this.gb(!1)
        }
    };
    b.prototype.Dn = function (a) {
        this.Zh.push(a)
    };
    b.prototype.he = function (a) {
        return this.qj[a]
    };
    b.prototype.jj = function (a) {
        a && a.project || fa("Project model unavailable");
        a = a.project;
        this.name = a[0];
        this.lo = a[1];
        this.Ob = a[12];
        this.no = a[12];
        this.Ma = a[10];
        this.La = a[11];
        this.Ip = this.Ma / 2;
        this.Jp = this.La / 2;
        this.za && !this.Dc && (4 <= a[12] || 0 === a[12]) && (ea("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.no = this.Ob = 3);
        this.Om = a[18];
        this.xh = a[19];
        0 === this.xh && (this.of = new Image, this.of.crossOrigin = "anonymous", this.of.src = "loading-logo.png");
        this.Hh = a[21];
        this.qj = nc();
        this.wd = new N(this);
        var g, p, e, k, b, c, m, h, d;
        g = 0;
        for (p = a[2].length; g < p; g++) m = a[2][g], e = this.he(m[0]), qb(m, e.prototype), d = new e(this), d.Nj = m[1], d.ze = m[2], d.mp = m[9], d.S && d.S(), this.plugins.push(d);
        this.qj = nc();
        g = 0;
        for (p = a[3].length; g < p; g++) {
            m = a[3][g];
            b = this.he(m[1]);
            d = null;
            e = 0;
            for (k = this.plugins.length; e < k; e++)
                if (this.plugins[e] instanceof b) {
                    d = this.plugins[e];
                    break
                } var q = new d.wa(d);
            q.name = m[0];
            q.I = m[2];
            q.rl = m[3].slice(0);
            q.kw = m[3].length;
            q.Os = m[4];
            q.gu = m[5];
            q.da = m[11];
            q.I ? (q.pj = [], q.Hd = this.Wg++, q.Ea = null) : (q.pj = null, q.Hd = -1, q.Ea = []);
            q.Ji = null;
            q.Of = null;
            q.ho = null;
            q.Jb = !1;
            q.Xb = null;
            m[6] ? (q.Uj = m[6][0], q.Em = m[6][1], q.ai = m[6][2]) : (q.Uj = null, q.Em = 0, q.ai = 0);
            m[7] ? q.Mb = m[7] : q.Mb = null;
            q.index = g;
            q.e = [];
            q.Ci = [];
            q.Ie = [new rb(q)];
            q.Ed = 0;
            q.zc = null;
            q.Zs = 0;
            q.wg = !0;
            q.ak = sb;
            q.to = tb;
            q.qu = ub;
            q.R = vb;
            q.Oh = wb;
            q.wf = xb;
            q.qd = zb;
            q.Oi = Ab;
            q.bl = Bb;
            q.el = Cb;
            q.bd = Db;
            q.uo = Eb;
            q.Hk = new ib(this.Ma, this.La);
            q.In = !0;
            q.Jn = !1;
            q.ba = {};
            q.toString = Fb;
            q.Ra = [];
            e = 0;
            for (k = m[8].length; e < k; e++) {
                h = m[8][e];
                var f = this.he(h[1]),
                    x = null;
                b = 0;
                for (c = this.Ra.length; b < c; b++)
                    if (this.Ra[b] instanceof f) {
                        x = this.Ra[b];
                        break
                    } x || (x = new f(this), x.op = [], x.Vl = new ca, x.S && x.S(), this.Ra.push(x)); - 1 === x.op.indexOf(q) && x.op.push(q);
                b = new x.wa(x, q);
                b.name = h[0];
                b.da = h[2];
                b.S();
                q.Ra.push(b)
            }
            q.global = m[9];
            q.yl = m[10];
            q.O = [];
            e = 0;
            for (k = m[12].length; e < k; e++) q.O.push({
                id: m[12][e][0],
                name: m[12][e][1],
                wb: -1,
                ob: !0,
                index: e
            });
            q.ix = m[13];
            this.Om && !q.I && !q.yl && d.ze || q.S();
            q.name && (this.types[q.name] = q);
            this.B.push(q);
            d.Nj && (e = new d.la(q), e.uid = this.Hh++, e.Qp = this.pp++, e.bf = 0, e.ah = Gb, e.toString = Hb, e.F = m[14], e.S(), q.e.push(e), this.Pd[e.uid.toString()] = e)
        }
        g = 0;
        for (p = a[4].length; g < p; g++)
            for (b = a[4][g], c = this.B[b[0]], e = 1, k = b.length; e < k; e++) m = this.B[b[e]], m.Ea.push(c), c.pj.push(m);
        g = 0;
        for (p = a[27].length; g < p; g++) {
            b = a[27][g];
            c = [];
            e = 0;
            for (k = b.length; e < k; e++) c.push(this.B[b[e]]);
            e = 0;
            for (k = c.length; e < k; e++) c[e].Jb = !0, c[e].Xb = c
        }
        if (0 < this.Wg)
            for (g = 0, p = this.B.length; g < p; g++)
                if (m = this.B[g], !m.I && m.Ea.length) {
                    m.Ji = Array(this.Wg);
                    m.Of = Array(this.Wg);
                    m.ho = Array(this.Wg);
                    q = [];
                    e = x = f = h = 0;
                    for (k = m.Ea.length; e < k; e++)
                        for (d = m.Ea[e], m.Ji[d.Hd] = h, h += d.kw, m.Of[d.Hd] = f, f += d.Os, m.ho[d.Hd] = x, x += d.gu, b = 0, c = d.O.length; b < c; b++) q.push(ya({}, d.O[b]));
                    m.O = q.concat(m.O);
                    e = 0;
                    for (k = m.O.length; e < k; e++) m.O[e].index = e
                } g = 0;
        for (p = a[5].length; g < p; g++) m = a[5][g], e = new Ib(this, m), this.Jl[e.name] = e, this.Wc.push(e);
        g = 0;
        for (p = a[6].length; g < p; g++) m = a[6][g], e = new Jb(this, m), this.Sk[e.name] = e, this.Gd.push(e);
        g = 0;
        for (p = this.Gd.length; g < p; g++) this.Gd[g].Pa();
        g = 0;
        for (p = this.Gd.length; g < p; g++) this.Gd[g].Km();
        g = 0;
        for (p = this.Zj.length; g < p; g++) this.Zj[g].Pa();
        this.Zj.length = 0;
        this.Ms = a[7];
        this.Wk = a[8];
        this.od = a[9];
        this.Kg = 1;
        this.xt = a[13];
        this.ja = a[14];
        this.tk = a[15];
        this.iw = a[17];
        this.em = a[20];
        this.Ns = 0 < this.em;
        this.wv = a[22];
        this.Cc = this.Eq = a[23];
        this.ot = a[24];
        this.Bv = a[25];
        this.Oj = Date.now();
        this.qj.length = 0;
        this.Ou()
    };
    var h = !1;
    b.prototype.Qm = function (a, g) {
        a.cocoonLazyLoad = !0;
        a.onerror = function (g) {
            h = a.Rn = !0;
            console && console.error && console.error("Error loading image '" + a.src + "': ", g)
        };
        this.Dc ? a.src = g : a.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(g, function (g) {
            a.src = g
        }, function (e) {
            h = a.Rn = !0;
            console && console.error && console.error("Error extracting image '" +
                g + "' from expansion file: ", e)
        }) : (a.crossOrigin = "anonymous", a.src = g));
        this.Gg.push(a)
    };
    b.prototype.du = function (a) {
        var g, e;
        g = 0;
        for (e = this.Gg.length; g < e; g++)
            if (this.Gg[g].Vs === a) return this.Gg[g];
        return null
    };
    var a = 0,
        k = !1;
    b.prototype.Hu = function () {
        this.If && (a = this.If.Vv(this.Ms))
    };
    b.prototype.Kn = function () {
        var e = a,
            g = 0,
            p = 0,
            b = !0,
            c, m, p = 0;
        for (c = this.Gg.length; p < c; p++) {
            m = this.Gg[p];
            var h = m.Yn;
            if (!h || 0 >= h) h = 5E4;
            e += h;
            m.src && (m.complete || m.loaded) && !m.Rn ? g += h : b = !1
        }
        b && this.Bv && this.If && (k || (this.If.Yv(), k = !0), p = this.If.ru(), g += p, p < a && (b = !1));
        this.vf = 0 == e ? 0 : g / e;
        return b
    };
    b.prototype.go = function () {
        if (this.ra || this.D) {
            var a = this.ra || this.gm;
            this.mb && this.Np();
            this.vf = 0;
            this.Ro = -1;
            if (this.Kn()) this.Iu();
            else {
                var g = Date.now() - this.Oj;
                if (a) {
                    var e = this.width,
                        k = this.height,
                        b = this.devicePixelRatio;
                    this.mb && (e = this.xi, k = this.wi, b = 1);
                    if (3 !== this.xh && (this.cc || 500 <= g && this.Ro != this.vf)) {
                        a.clearRect(0, 0, e, k);
                        var g = e / 2,
                            k = k / 2,
                            e = 0 === this.xh && this.of.complete,
                            c = 40 * b,
                            m = 0,
                            q = 80 * b,
                            d;
                        e && (q = this.of.width * b, d = this.of.height * b, c = q / 2, m = d / 2, a.drawImage(this.of, ra(g - c), ra(k - m), q, d));
                        1 >= this.xh ? (g = ra(g - c) + .5, k = ra(k + (m + (e ? 12 * b : 0))) + .5, a.fillStyle = h ? "red" : "DodgerBlue", a.fillRect(g, k, Math.floor(q * this.vf), 6 * b), a.strokeStyle = "black", a.strokeRect(g, k, q, 6 * b), a.strokeStyle = "white", a.strokeRect(g - 1 * b, k - 1 * b, q + 2 * b, 8 * b)) : 2 === this.xh && (a.font = this.Dc ? "12pt ArialMT" : "12pt Arial", a.fillStyle = h ? "#f00" : "#999", a.hx = "middle", b = Math.round(100 * this.vf) + "%", e = a.measureText ? a.measureText(b) : null, a.fillText(b, g - (e ? e.width : 0) / 2, k))
                    }
                    this.Ro = this.vf
                }
                setTimeout(function (a) {
                    return function () {
                        a.go()
                    }
                }(this),
                    this.cc ? 10 : 100)
            }
        }
    };
    b.prototype.Iu = function () {
        this.mb && (this.canvas.parentNode.removeChild(this.mb), this.mb = this.gm = null);
        this.Oj = Date.now();
        this.mf = bb();
        var a, g, e;
        if (this.Om)
            for (a = 0, g = this.B.length; a < g; a++) e = this.B[a], e.I || e.yl || !e.xa.ze || e.S();
        else this.ph = !1;
        a = 0;
        for (g = this.Wc.length; a < g; a++) this.Wc[a].Ws();
        2 <= this.Ob && (a = this.Ma / this.La, g = this.width / this.height, this.Kg = 2 !== this.Ob && g > a || 2 === this.Ob && g < a ? this.height / this.La : this.width / this.Ma);
        this.lo ? this.Jl[this.lo].Cm() : this.Wc[0].Cm();
        this.Om || (this.pf = 1, this.trigger(N.prototype.g.kn, null));
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (g = this.B.length; a < g; a++) e = this.B[a], e.nv && e.nv();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.gb(!1);
        this.ub && AppMobi.webview.execute("onGameReady();")
    };
    var m = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    b.prototype.gb = function (a, g, e) {
        if (this.ya) {
            var k = bb();
            if (e || !this.mh || a) {
                a || (m ? this.mm = m(this.pq) : this.Fm = setTimeout(this.pq, this.Xf ? 1 : 16));
                g = g || k;
                var b = this.Ob;
                ((e = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.Qb) || this.ff) && 0 < this.Xe && (b = this.Xe);
                0 < b && (!this.dg || window.self !== window.top) && (b = window.innerHeight, this.vh === window.innerWidth && this.uh === b || this.setSize(f(), l()));
                this.za || (e ? (this.Li || (this.$k = jQuery(this.canvas).css("margin") || "0", this.Li = !0), this.kh || this.Ld || jQuery(this.canvas).css({
                    "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                    "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                })) : this.Li ? (this.kh || this.Ld || jQuery(this.canvas).css("margin", this.$k), this.$k = "", this.Li = !1, 0 === this.Ob && this.setSize(Math.round(this.vp / this.devicePixelRatio), Math.round(this.up / this.devicePixelRatio), !0)) : (this.vp = this.width, this.up = this.height));
                this.ph && (e = this.Kn(),
                    this.pf = this.vf, e && (this.ph = !1, this.vf = 1, this.trigger(N.prototype.g.kn, null)));
                this.dv(g);
                !this.ca && !this.cc || this.Cl || this.Yh || a || (this.ca = !1, this.D ? this.Zb() : this.Fd(), this.Wh && (this.canvas && this.canvas.toDataURL && (this.kq = this.canvas.toDataURL(this.Wh[0], this.Wh[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.kq), this.trigger(N.prototype.g.wr, null)), this.Wh = null));
                this.bx || (this.Ag++, this.Ug++, this.Mi++);
                this.Dh += bb() - k
            }
        }
    };
    b.prototype.dv = function (a) {
        var g, e, k, b, c, m, h, q;
        1E3 <= a - this.mf && (this.mf += 1E3, 1E3 <= a - this.mf && (this.mf = a), this.Zk = this.Mi, this.Mi = 0, this.Ik = this.Dh, this.Dh = 0);
        0 !== this.ej && (g = a - this.ej, 0 > g && (g = 0), this.ue = g / 1E3, .5 < this.ue ? this.ue = 0 : .1 < this.ue && (this.ue = .1));
        this.ej = a;
        this.te = this.ue * this.Bg;
        this.tc.add(this.te);
        this.be.add(this.ue);
        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.ff) && !this.Qb;
        2 <= this.Ob || a && 0 < this.Xe ? (g = this.Ma / this.La, e = this.width / this.height, k = this.Ob, a && 0 < this.Xe && (k = this.Xe), this.Kg = 2 !== k && e > g || 2 === k && e < g ? this.height / this.La : this.width / this.Ma, this.ya && (this.ya.Zp(this.ya.scrollX), this.ya.$p(this.ya.scrollY))) : this.Kg = this.hf ? this.devicePixelRatio : 1;
        this.zb();
        this.Uc++;
        this.wd.Lv();
        this.Uc--;
        this.zb();
        this.Uc++;
        e = this.tp.Ne();
        a = 0;
        for (g = e.length; a < g; a++) e[a].dx();
        a = 0;
        for (g = this.B.length; a < g; a++)
            if (m = this.B[a], !m.I && (m.Ra.length || m.Ea.length))
                for (e = 0, k = m.e.length; e < k; e++)
                    for (h = m.e[e], b = 0, c = h.V.length; b < c; b++) h.V[b].gb();
        a = 0;
        for (g = this.B.length; a < g; a++)
            if (m = this.B[a], !m.I && (m.Ra.length || m.Ea.length))
                for (e = 0, k = m.e.length; e < k; e++)
                    for (h = m.e[e], b = 0, c = h.V.length; b < c; b++) q = h.V[b], q.Av && q.Av();
        e = this.Xl.Ne();
        a = 0;
        for (g = e.length; a < g; a++) e[a].gb();
        this.Uc--;
        this.Ju();
        for (a = 0; this.Pg && 10 > a++;) this.co(this.Pg);
        a = 0;
        for (g = this.Gd.length; a < g; a++) this.Gd[a].ml = !1;
        this.ya.Ue && this.ya.Ue.Ta();
        this.Up.length = 0;
        this.Il = !1;
        this.Uc++;
        a = 0;
        for (g = this.B.length; a < g; a++)
            if (m = this.B[a], !m.I && (m.Ra.length || m.Ea.length))
                for (e = 0, k = m.e.length; e < k; e++)
                    for (h = m.e[e], b = 0, c = h.V.length; b < c; b++) q = h.V[b], q.bi && q.bi();
        e = this.Yl.Ne();
        a = 0;
        for (g = e.length; a < g; a++) e[a].bi();
        this.Uc--
    };
    b.prototype.co = function (a) {
        var g = this.ya;
        this.ya.Zv();
        var e, k, b, c, m, h, q;
        if (this.D)
            for (e = 0, k = this.B.length; e < k; e++) m = this.B[e], m.I || !m.$j || m.global && 0 !== m.e.length || -1 !== a.hh.indexOf(m) || m.$j();
        g == a && (this.wd.Vb.length = 0);
        this.Up.length = 0;
        a.Cm();
        e = 0;
        for (k = this.B.length; e < k; e++)
            if (m = this.B[e], m.global || m.xa.Nj)
                for (a = 0, g = m.e.length; a < g; a++)
                    if (h = m.e[a], h.am && h.am(), h.V)
                        for (b = 0, c = h.V.length; b < c; b++) q = h.V[b], q.am && q.am();
        this.Il = this.ca = !0;
        this.zb()
    };
    b.prototype.zg = function (a) {
        this.Xl.add(a)
    };
    b.prototype.$v = function (a) {
        this.Yl.add(a)
    };
    b.prototype.Yg = function (a) {
        return a && -1 !== a.Gh ? this.ue * a.Gh : this.te
    };
    b.prototype.Fd = function () {
        this.ya.Fd(this.ra);
        this.ub && this.ra.present()
    };
    b.prototype.Zb = function () {
        this.ya.Zb(this.D);
        this.D.Dv()
    };
    b.prototype.Bn = function (a) {
        a && this.Ei.push(a)
    };
    b.prototype.Hv = function (a) {
        Ha(this.Ei, a)
    };
    b.prototype.Zg = function (a) {
        a = a.toString();
        return this.Pd.hasOwnProperty(a) ? this.Pd[a] : null
    };
    var e = [];
    b.prototype.ge = function (a) {
        var g, k;
        g = a.type.name;
        var b = null;
        if (this.Re.hasOwnProperty(g)) {
            if (b = this.Re[g], b.contains(a)) return
        } else b = e.length ? e.pop() : new ca, this.Re[g] = b;
        b.add(a);
        this.xe = !0;
        if (a.Jb)
            for (g = 0, k = a.siblings.length; g < k; g++) this.ge(a.siblings[g]);
        this.ul && b.Eg.push(a);
        this.Uc++;
        this.trigger(Object.getPrototypeOf(a.type.xa).g.xr, a);
        this.Uc--
    };
    b.prototype.zb = function () {
        if (this.xe) {
            var a, g, e, k, b, c;
            this.ul = !0;
            e = 0;
            for (b = this.ed.length; e < b; ++e)
                for (a = this.ed[e], g = a.type, g.e.push(a), k = 0, c = g.Ea.length; k < c; ++k) g.Ea[k].e.push(a), g.Ea[k].wg = !0;
            this.ed.length = 0;
            this.rr();
            ab(this.Re);
            this.xe = this.ul = !1
        }
    };
    b.prototype.rr = function () {
        for (var a in this.Re) this.Re.hasOwnProperty(a) && this.Qq(this.Re[a])
    };
    b.prototype.Qq = function (a) {
        var g = a.Ne(),
            k = g[0].type,
            b, c, m, h, q, d;
        cb(k.e, a);
        k.wg = !0;
        0 === k.e.length && (k.Jn = !1);
        b = 0;
        for (c = k.Ea.length; b < c; ++b) d = k.Ea[b], cb(d.e, a), d.wg = !0;
        b = 0;
        for (c = this.wd.Vb.length; b < c; ++b)
            if (q = this.wd.Vb[b], q.Lb.hasOwnProperty(k.index) && cb(q.Lb[k.index].Jd, a), !k.I)
                for (m = 0, h = k.Ea.length; m < h; ++m) d = k.Ea[m], q.Lb.hasOwnProperty(d.index) && cb(q.Lb[d.index].Jd, a);
        if (q = g[0].q) {
            if (q.Zc)
                for (m = q.e, b = 0, c = m.length; b < c; ++b) h = m[b], a.contains(h) && (h.Aa(), q.kc.update(h, h.Sb, null), h.Sb.set(0, 0, -1, -1));
            cb(q.e, a);
            q.Th(0)
        }
        for (b = 0; b < g.length; ++b) this.Pq(g[b], k);
        a.clear();
        e.push(a);
        this.ca = !0
    };
    b.prototype.Pq = function (a, g) {
        var e, k, b;
        e = 0;
        for (k = this.Ei.length; e < k; ++e) this.Ei[e](a);
        a.wc && g.Hk.update(a, a.wc, null);
        (e = a.q) && e.sg(a, !0);
        if (a.V)
            for (e = 0, k = a.V.length; e < k; ++e) b = a.V[e], b.Be && b.Be(), b.behavior.Vl.remove(a);
        this.tp.remove(a);
        this.Xl.remove(a);
        this.Yl.remove(a);
        a.Be && a.Be();
        this.Pd.hasOwnProperty(a.uid.toString()) && delete this.Pd[a.uid.toString()];
        this.rj--;
        100 > g.Ci.length && g.Ci.push(a)
    };
    b.prototype.Zn = function (a, g, e, k) {
        if (a.I) {
            var b = ra(Math.random() * a.pj.length);
            return this.Zn(a.pj[b], g, e, k)
        }
        return a.zc ? this.se(a.zc, g, !1, e, k, !1) : null
    };
    var q = [];
    b.prototype.se = function (a, g, e, k, b, c) {
        var m, h, d, f;
        if (!a) return null;
        var x = this.B[a[1]],
            t = x.xa.ze;
        if (this.ph && t && !x.yl || t && !this.D && 11 === a[0][11]) return null;
        var u = g;
        t || (g = null);
        var l;
        x.Ci.length ? (l = x.Ci.pop(), l.jc = !0, x.xa.la.call(l, x)) : (l = new x.xa.la(x), l.jc = !1);
        !e || c || this.Pd.hasOwnProperty(a[2].toString()) ? l.uid = this.Hh++ : l.uid = a[2];
        this.Pd[l.uid.toString()] = l;
        l.Qp = this.pp++;
        l.bf = x.e.length;
        m = 0;
        for (h = this.ed.length; m < h; ++m) this.ed[m].type === x && l.bf++;
        l.ah = Gb;
        l.toString = Hb;
        d = a[3];
        if (l.jc) ab(l.ba);
        else {
            l.ba = {};
            if ("undefined" !== typeof cr_is_preview)
                for (l.Io = [], l.Io.length = d.length, m = 0, h = d.length; m < h; m++) l.Io[m] = d[m][1];
            l.cb = [];
            l.cb.length = d.length
        }
        m = 0;
        for (h = d.length; m < h; m++) l.cb[m] = d[m][0];
        if (t) {
            var n = a[0];
            l.x = ga(k) ? n[0] : k;
            l.y = ga(b) ? n[1] : b;
            l.z = n[2];
            l.width = n[3];
            l.height = n[4];
            l.depth = n[5];
            l.n = n[6];
            l.opacity = n[7];
            l.Hb = n[8];
            l.Ib = n[9];
            l.Nb = n[10];
            m = n[11];
            !this.D && x.O.length && (l.Nb = m);
            l.Qg = kb(l.Nb);
            this.A && lb(l, l.Nb, this.A);
            if (l.jc) {
                m = 0;
                for (h = n[12].length; m < h; m++)
                    for (d = 0, f = n[12][m].length; d < f; d++) l.Ia[m][d] = n[12][m][d];
                l.Ha.set(0, 0, 0, 0);
                l.wc.set(0, 0, -1, -1);
                l.Sb.set(0, 0, -1, -1);
                l.Jf.Mj(l.Ha);
                l.yk.length = 0
            } else {
                l.Ia = n[12].slice(0);
                m = 0;
                for (h = l.Ia.length; m < h; m++) l.Ia[m] = n[12][m].slice(0);
                l.ma = [];
                l.ie = [];
                l.ie.length = x.O.length;
                l.Ha = new wa(0, 0, 0, 0);
                l.wc = new wa(0, 0, -1, -1);
                l.Sb = new wa(0, 0, -1, -1);
                l.Jf = new xa;
                l.yk = [];
                l.ua = Kb;
                l.Yw = Lb;
                l.pc = Mb;
                l.Aa = Nb;
                l.hw = Ob;
                l.jx = Pb;
                l.jd = Qb
            }
            l.bw = !1;
            l.ew = 0;
            l.dw = 0;
            l.aw = null;
            14 === n.length && (l.bw = !0, l.ew = n[13][0], l.dw = n[13][1], l.aw = n[13][2]);
            m = 0;
            for (h = x.O.length; m < h; m++) l.ie[m] = !0;
            l.ae = Rb;
            l.ae();
            l.Bq = !!l.ma.length;
            l.xk = !0;
            l.Dk = !0;
            x.In = !0;
            l.visible = !0;
            l.Gh = -1;
            l.q = g;
            l.$c = g.e.length;
            "undefined" === typeof l.dd && (l.dd = null);
            this.ca = l.qe = !0
        }
        var v;
        m = q.length = 0;
        for (h = x.Ea.length; m < h; m++) q.push.apply(q, x.Ea[m].Ra);
        q.push.apply(q, x.Ra);
        if (l.jc)
            for (m = 0, h = q.length; m < h; m++) {
                var U = q[m];
                v = l.V[m];
                v.jc = !0;
                U.behavior.la.call(v, U, l);
                n = a[4][m];
                d = 0;
                for (f = n.length; d < f; d++) v.F[d] = n[d];
                v.S();
                U.behavior.Vl.add(l)
            } else
            for (l.V = [], m = 0, h = q.length; m < h; m++) U = q[m], v = new U.behavior.la(U, l), v.jc = !1, v.F = a[4][m].slice(0), v.S(), l.V.push(v), U.behavior.Vl.add(l);
        n = a[5];
        if (l.jc)
            for (m = 0, h = n.length; m < h; m++) l.F[m] = n[m];
        else l.F = n.slice(0);
        this.ed.push(l);
        this.xe = !0;
        g && (g.Jg(l, !0), 1 !== g.Qd || 1 !== g.Rd) && (x.Jn = !0);
        this.rj++;
        if (x.Jb) {
            if (l.Jb = !0, l.jc ? l.siblings.length = 0 : l.siblings = [], !e && !c) {
                m = 0;
                for (h = x.Xb.length; m < h; m++)
                    if (x.Xb[m] !== x) {
                        if (!x.Xb[m].zc) return null;
                        l.siblings.push(this.se(x.Xb[m].zc, u, !1, t ? l.x : k, t ? l.y : b, !0))
                    } m = 0;
                for (h = l.siblings.length; m < h; m++)
                    for (l.siblings[m].siblings.push(l), d = 0; d < h; d++) m !== d && l.siblings[m].siblings.push(l.siblings[d])
            }
        } else l.Jb = !1, l.siblings = null;
        l.S();
        m = 0;
        for (h = l.V.length; m < h; m++) l.V[m].zv && l.V[m].zv();
        return l
    };
    b.prototype.Ri = function (a) {
        var g, e;
        g = 0;
        for (e = this.ya.W.length; g < e; g++) {
            var k = this.ya.W[g];
            if (nb(k.name, a)) return k
        }
        return null
    };
    b.prototype.Qf = function (a) {
        a = ra(a);
        0 > a && (a = 0);
        a >= this.ya.W.length && (a = this.ya.W.length - 1);
        return this.ya.W[a]
    };
    b.prototype.Qi = function (a) {
        return ha(a) ? this.Qf(a) : this.Ri(a.toString())
    };
    b.prototype.Gk = function (a) {
        var g, e;
        g = 0;
        for (e = a.length; g < e; g++) a[g].R().aa = !0
    };
    b.prototype.Oh = function (a) {
        var g, e;
        g = 0;
        for (e = a.length; g < e; g++) a[g].Oh()
    };
    b.prototype.wf = function (a) {
        var g, e;
        g = 0;
        for (e = a.length; g < e; g++) a[g].wf()
    };
    b.prototype.qd = function (a) {
        var g, e;
        g = 0;
        for (e = a.length; g < e; g++) a[g].qd()
    };
    b.prototype.Sj = function (a, g, e) {
        var k = a.R(),
            b, m, c, h, q, d;
        if (k.aa)
            for (k.aa = !1, b = k.e.length = 0, h = a.e.length; b < h; b++) c = a.e[b], c.Aa(), q = c.q.Gb(g, e, !0), d = c.q.Gb(g, e, !1), c.pc(q, d) && k.e.push(c);
        else {
            b = m = 0;
            for (h = k.e.length; b < h; b++) c = k.e[b], c.Aa(), q = c.q.Gb(g, e, !0), d = c.q.Gb(g, e, !1), c.pc(q, d) && (k.e[m] = k.e[b], m++);
            k.e.length = m
        }
        a.bd();
        return k.ll()
    };
    new xa;
    new wa(0, 0, 0, 0);
    b.prototype.uq = function (a, g) {
        if (!g) return !1;
        var e, k, b, m, c;
        e = 0;
        for (k = a.Ra.length; e < k; e++)
            if (a.Ra[e].behavior instanceof g) return !0;
        if (!a.I)
            for (e = 0, k = a.Ea.length; e < k; e++)
                for (c = a.Ea[e], b = 0, m = c.Ra.length; b < m; b++)
                    if (c.Ra[b].behavior instanceof g) return !0;
        return !1
    };
    b.prototype.vq = function (a) {
        return this.uq(a, fc.Kw)
    };
    b.prototype.Jm = function (a) {
        return this.uq(a, fc.Lw)
    };
    var x = -1;
    b.prototype.trigger = function (a, g, e) {
        if (!this.ya) return !1;
        var k = this.ya.Ue;
        if (!k) return !1;
        var b = !1,
            m, c, h;
        x++;
        var q = k.Mk;
        c = 0;
        for (h = q.length; c < h; ++c) m = this.rq(a, g, q[c], e), b = b || m;
        m = this.rq(a, g, k, e);
        x--;
        return b || m
    };
    b.prototype.rq = function (a, g, e, k) {
        var b = !1,
            m, c, h, q;
        if (g)
            for (h = this.Hm(a, g, g.type.name, e, k), b = b || h, q = g.type.Ea, m = 0, c = q.length; m < c; ++m) h = this.Hm(a, g, q[m].name, e, k), b = b || h;
        else h = this.Hm(a, g, "system", e, k), b = b || h;
        return b
    };
    b.prototype.Hm = function (a, g, e, k, b) {
        var m, c = !1,
            h = !1,
            h = "undefined" !== typeof b,
            q = (h ? k.jo : k.sq)[e];
        if (!q) return c;
        var d = null;
        k = 0;
        for (m = q.length; k < m; ++k)
            if (q[k].method == a) {
                d = q[k].Tg;
                break
            } if (!d) return c;
        var f;
        h ? f = d[b] : f = d;
        if (!f) return null;
        k = 0;
        for (m = f.length; k < m; k++) a = f[k][0], b = f[k][1], h = this.bu(g, e, a, b), c = c || h;
        return c
    };
    b.prototype.bu = function (a, g, e, k) {
        var b, m, c = !1;
        this.Im++;
        var h = this.ab().Ya;
        h && this.Oh(h.He);
        var q = 1 < this.Im;
        this.Oh(e.He);
        q && this.Fv();
        var d = this.Fj(e);
        d.Ya = e;
        a && (b = this.types[g].R(), b.aa = !1, b.e.length = 1, b.e[0] = a, this.types[g].bd());
        a = !0;
        if (e.parent) {
            g = d.nq;
            for (b = e.parent; b;) g.push(b), b = b.parent;
            g.reverse();
            b = 0;
            for (m = g.length; b < m; b++)
                if (!g[b].Nv()) {
                    a = !1;
                    break
                }
        }
        a && (this.Ug++, e.Xc ? e.Mv(k) : e.Ta(), c = c || d.lf);
        this.zj();
        q && this.yv();
        this.qd(e.He);
        h && this.qd(h.He);
        this.xe && 0 === this.Uc && 0 === x && !this.zl && this.zb();
        this.Im--;
        return c
    };
    b.prototype.Pi = function () {
        var a = this.ab();
        return a.Ya.Xa[a.Wa]
    };
    b.prototype.Fv = function () {
        this.mj++;
        this.mj >= this.Ol.length && this.Ol.push([])
    };
    b.prototype.yv = function () {
        this.mj--
    };
    b.prototype.qo = function () {
        return this.Ol[this.mj]
    };
    b.prototype.Fj = function (a) {
        this.Hi++;
        this.Hi >= this.Rk.length && this.Rk.push(new Sb);
        var g = this.ab();
        g.reset(a);
        return g
    };
    b.prototype.zj = function () {
        this.Hi--
    };
    b.prototype.ab = function () {
        return this.Rk[this.Hi]
    };
    b.prototype.lm = function () {
        this.nj++;
        this.nj >= this.ig.length && this.ig.push(aa({
            name: void 0,
            index: 0,
            Qa: !1
        }));
        var a = this.ro();
        a.name = void 0;
        a.index = 0;
        a.Qa = !1;
        return a
    };
    b.prototype.jm = function () {
        this.nj--
    };
    b.prototype.ro = function () {
        return this.ig[this.nj]
    };
    b.prototype.so = function (a, g) {
        for (var e, k, b, m, c, h; g;) {
            e = 0;
            for (k = g.Kc.length; e < k; e++)
                if (h = g.Kc[e], h instanceof Tb && nb(a, h.name)) return h;
            g = g.parent
        }
        e = 0;
        for (k = this.Gd.length; e < k; e++)
            for (c = this.Gd[e], b = 0, m = c.ve.length; b < m; b++)
                if (h = c.ve[b], h instanceof Tb && nb(a, h.name)) return h;
        return null
    };
    b.prototype.vo = function (a) {
        var g, e;
        g = 0;
        for (e = this.Wc.length; g < e; g++)
            if (this.Wc[g].da === a) return this.Wc[g];
        return null
    };
    b.prototype.Ti = function (a) {
        var g, e;
        g = 0;
        for (e = this.B.length; g < e; g++)
            if (this.B[g].da === a) return this.B[g];
        return null
    };
    b.prototype.mu = function (a) {
        var g, e;
        g = 0;
        for (e = this.Hf.length; g < e; g++)
            if (this.Hf[g].da === a) return this.Hf[g];
        return null
    };
    b.prototype.bt = function (a, g) {
        this.Wh = [a, g];
        this.ca = !0
    };
    b.prototype.Ju = function () {
        var a = this,
            g = this.wm,
            e = this.Nd,
            k = this.hj,
            b = !1;
        this.iq && (b = !0, g = "__c2_continuouspreview", this.iq = !1);
        if (g.length) {
            this.zb();
            e = this.Rv();
            if (window.indexedDB && !this.cc) t(g, e, function () {
                ea("Saved state to IndexedDB storage (" + e.length + " bytes)");
                a.Nd = e;
                a.trigger(N.prototype.g.kk, null);
                a.Nd = "";
                b && c()
            }, function (k) {
                try {
                    localStorage.setItem("__c2save_" + g, e), ea("Saved state to WebStorage (" + e.length + " bytes)"), a.Nd = e, a.trigger(N.prototype.g.kk, null), a.Nd = "", b && c()
                } catch (m) {
                    ea("Failed to save game state: " + k + "; " + m)
                }
            });
            else try {
                localStorage.setItem("__c2save_" + g, e), ea("Saved state to WebStorage (" + e.length + " bytes)"), a.Nd = e, this.trigger(N.prototype.g.kk, null), a.Nd = "", b && c()
            } catch (m) {
                ea("Error saving to WebStorage: " + m)
            }
            this.Db = this.hj = this.wm = ""
        }
        if (k.length) {
            if (window.indexedDB && !this.cc) d(k, function (g) {
                g ? (a.Db = g, ea("Loaded state from IndexedDB storage (" + a.Db.length + " bytes)")) : (a.Db = localStorage.getItem("__c2save_" + k) || "", ea("Loaded state from WebStorage (" + a.Db.length + " bytes)"));
                a.Yh = !1;
                a.Db.length || a.trigger(N.prototype.g.jk, null)
            }, function () {
                a.Db = localStorage.getItem("__c2save_" + k) || "";
                ea("Loaded state from WebStorage (" +
                    a.Db.length + " bytes)");
                a.Yh = !1;
                a.Db.length || a.trigger(N.prototype.g.jk, null)
            });
            else {
                try {
                    this.Db = localStorage.getItem("__c2save_" + k) || "", ea("Loaded state from WebStorage (" + this.Db.length + " bytes)")
                } catch (h) {
                    this.Db = ""
                }
                this.Yh = !1;
                a.Db.length || a.trigger(N.prototype.g.jk, null)
            }
            this.wm = this.hj = ""
        }
        this.Db.length && (this.zb(), this.cv(this.Db), this.Nd = this.Db, this.trigger(N.prototype.g.Jr, null), this.Db = this.Nd = "")
    };
    b.prototype.Rv = function () {
        var a, g, e, k, b, m, c, h = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.tc.J,
                walltime: this.be.J,
                timescale: this.Bg,
                tickcount: this.Ag,
                execcount: this.Ug,
                next_uid: this.Hh,
                running_layout: this.ya.da,
                start_time_offset: Date.now() - this.Oj
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        };
        a = 0;
        for (g = this.B.length; a < g; a++)
            if (b = this.B[a], !b.I && !this.vq(b)) {
                m = {
                    instances: []
                };
                Wa(b.ba) && (m.ex = u(b.ba));
                e = 0;
                for (k = b.e.length; e < k; e++) m.instances.push(this.vm(b.e[e]));
                h.types[b.da.toString()] = m
            } a = 0;
        for (g = this.Wc.length; a < g; a++) e = this.Wc[a], h.layouts[e.da.toString()] = e.nb();
        k = h.events.groups;
        a = 0;
        for (g = this.Hf.length; a < g; a++) e = this.Hf[a], k[e.da.toString()] = this.dh[e.bh].Sf;
        g = h.events.cnds;
        for (c in this.Lf) this.Lf.hasOwnProperty(c) && (a = this.Lf[c], Wa(a.ba) && (g[c] = {
            ex: u(a.ba)
        }));
        g = h.events.acts;
        for (c in this.Gf) this.Gf.hasOwnProperty(c) && (a = this.Gf[c], Wa(a.ba) && (g[c] = {
            ex: a.ba
        }));
        g = h.events.vars;
        for (c in this.Fg) this.Fg.hasOwnProperty(c) && (a = this.Fg[c], a.$i || a.parent && !a.oh || (g[c] = a.data));
        h.system = this.wd.nb();
        return JSON.stringify(h)
    };
    b.prototype.Tp = function () {
        var a, g, e, k, b, m;
        this.Pd = {};
        a = 0;
        for (g = this.B.length; a < g; a++)
            if (e = this.B[a], !e.I)
                for (k = 0, b = e.e.length; k < b; k++) m = e.e[k], this.Pd[m.uid.toString()] = m
    };
    b.prototype.cv = function (a) {
        a = JSON.parse(a);
        if (a.c2save && !(1 < a.version)) {
            var g = a.rt;
            this.tc.reset();
            this.tc.J = g.time;
            this.be.reset();
            this.be.J = g.walltime || 0;
            this.Bg = g.timescale;
            this.Ag = g.tickcount;
            this.Ug = g.execcount;
            this.Oj = Date.now() - g.start_time_offset;
            var e = g.running_layout;
            if (e !== this.ya.da)
                if (e = this.vo(e)) this.co(e);
                else return;
            var k, b, m, c, h, q, d;
            q = a.types;
            for (b in q)
                if (q.hasOwnProperty(b) && (c = this.Ti(parseInt(b, 10))) && !c.I && !this.vq(c)) {
                    q[b].ex ? c.ba = q[b].ex : ab(c.ba);
                    h = c.e;
                    m = q[b].instances;
                    e = 0;
                    for (k = pa(h.length, m.length); e < k; e++) this.ij(h[e], m[e]);
                    e = m.length;
                    for (k = h.length; e < k; e++) this.ge(h[e]);
                    e = h.length;
                    for (k = m.length; e < k; e++) {
                        h = null;
                        if (c.xa.ze && (h = this.ya.Si(m[e].w.l), !h)) continue;
                        h = this.se(c.zc, h, !1, 0, 0, !0);
                        this.ij(h, m[e])
                    }
                    c.wg = !0
                } this.zb();
            this.Tp();
            k = a.layouts;
            for (b in k) k.hasOwnProperty(b) && (e = this.vo(parseInt(b, 10))) && e.Cb(k[b]);
            k = a.events.groups;
            for (b in k) k.hasOwnProperty(b) && (e = this.mu(parseInt(b, 10))) && this.dh[e.bh] && this.dh[e.bh].Tv(k[b]);
            e = a.events.cnds;
            for (b in e) e.hasOwnProperty(b) && this.Lf.hasOwnProperty(b) && (this.Lf[b].ba = e[b].ex);
            e = a.events.acts;
            for (b in e) e.hasOwnProperty(b) && this.Gf.hasOwnProperty(b) && (this.Gf[b].ba = e[b].ex);
            e = a.events.vars;
            for (b in e) e.hasOwnProperty(b) && this.Fg.hasOwnProperty(b) && (this.Fg[b].data = e[b]);
            this.Hh = g.next_uid;
            this.wd.Cb(a.system);
            e = 0;
            for (k = this.B.length; e < k; e++)
                if (c = this.B[e], !c.I)
                    for (b = 0, a = c.e.length; b < a; b++) {
                        h = c.e[b];
                        if (c.Jb)
                            for (q = h.ah(), g = h.siblings.length = 0, m = c.Xb.length; g < m; g++) d = c.Xb[g], c !== d && h.siblings.push(d.e[q]);
                        h.ad && h.ad();
                        if (h.V)
                            for (g = 0, m = h.V.length; g < m; g++) q = h.V[g], q.ad && q.ad()
                    }
            this.ca = !0
        }
    };
    b.prototype.vm = function (a, e) {
        var k, b, m, c, h;
        c = a.type;
        m = c.xa;
        var q = {};
        e ? q.c2 = !0 : q.uid = a.uid;
        Wa(a.ba) && (q.ex = u(a.ba));
        if (a.cb && a.cb.length)
            for (q.ivs = {}, k = 0, b = a.cb.length; k < b; k++) q.ivs[a.type.rl[k].toString()] = a.cb[k];
        if (m.ze) {
            m = {
                x: a.x,
                y: a.y,
                w: a.width,
                h: a.height,
                l: a.q.da,
                zi: a.jd()
            };
            0 !== a.n && (m.a = a.n);
            1 !== a.opacity && (m.o = a.opacity);
            .5 !== a.Hb && (m.hX = a.Hb);
            .5 !== a.Ib && (m.hY = a.Ib);
            0 !== a.Nb && (m.bm = a.Nb);
            a.visible || (m.v = a.visible);
            a.qe || (m.ce = a.qe); - 1 !== a.Gh && (m.mts = a.Gh);
            if (c.O.length)
                for (m.fx = [], k = 0, b = c.O.length; k < b; k++) h = c.O[k], m.fx.push({
                    name: h.name,
                    active: a.ie[h.index],
                    params: a.Ia[h.index]
                });
            q.w = m
        }
        if (a.V && a.V.length)
            for (q.behs = {}, k = 0, b = a.V.length; k < b; k++) c = a.V[k], c.nb && (q.behs[c.type.da.toString()] = c.nb());
        a.nb && (q.data = a.nb());
        return q
    };
    b.prototype.ou = function (a, e) {
        var k, b;
        k = 0;
        for (b = a.rl.length; k < b; k++)
            if (a.rl[k] === e) return k;
        return -1
    };
    b.prototype.ku = function (a, e) {
        var k, b;
        k = 0;
        for (b = a.V.length; k < b; k++)
            if (a.V[k].type.da === e) return k;
        return -1
    };
    b.prototype.ij = function (a, e, k) {
        var b, m, c, h, q;
        q = a.type;
        h = q.xa;
        if (k) {
            if (!e.c2) return
        } else a.uid = e.uid;
        e.ex ? a.ba = e.ex : ab(a.ba);
        if (m = e.ivs)
            for (b in m) m.hasOwnProperty(b) && (c = this.ou(q, parseInt(b, 10)), 0 > c || c >= a.cb.length || (a.cb[c] = m[b]));
        if (h.ze) {
            c = e.w;
            a.q.da !== c.l && (m = a.q, a.q = this.ya.Si(c.l), a.q ? (m.sg(a, !0), a.q.Jg(a, !0), a.ua(), a.q.Th(0)) : (a.q = m, k || this.ge(a)));
            a.x = c.x;
            a.y = c.y;
            a.width = c.w;
            a.height = c.h;
            a.$c = c.zi;
            a.n = c.hasOwnProperty("a") ? c.a : 0;
            a.opacity = c.hasOwnProperty("o") ? c.o : 1;
            a.Hb = c.hasOwnProperty("hX") ? c.hX : .5;
            a.Ib = c.hasOwnProperty("hY") ? c.hY : .5;
            a.visible = c.hasOwnProperty("v") ? c.v : !0;
            a.qe = c.hasOwnProperty("ce") ? c.ce : !0;
            a.Gh = c.hasOwnProperty("mts") ? c.mts : -1;
            a.Nb = c.hasOwnProperty("bm") ? c.bm : 0;
            a.Qg = kb(a.Nb);
            this.A && lb(a, a.Nb, this.A);
            a.ua();
            if (c.hasOwnProperty("fx"))
                for (k = 0, m = c.fx.length; k < m; k++) h = q.el(c.fx[k].name), 0 > h || (a.ie[h] = c.fx[k].active, a.Ia[h] = c.fx[k].params);
            a.ae()
        }
        if (q = e.behs)
            for (b in q) q.hasOwnProperty(b) && (k = this.ku(a, parseInt(b, 10)), 0 > k || a.V[k].Cb(q[b]));
        e.data && a.Cb(e.data)
    };
    Ub = function (a) {
        return new b(document.getElementById(a))
    };
    Vb = function (a, e) {
        return new b({
            dc: !0,
            width: a,
            height: e
        })
    };
    window.cr_createRuntime = Ub;
    window.cr_createDCRuntime = Vb;
    window.createCocoonJSRuntime = function () {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.Lg = !0;
        document.body.appendChild(a);
        a = new b(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange", function () {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    };
    window.createEjectaRuntime = function () {
        var a = new b(document.getElementById("canvas"));
        window.c2runtime = a;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    }
})();
window.cr_getC2Runtime = function () {
    var f = document.getElementById("c2canvas");
    return f ? f.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_getSnapshot = function (f, l) {
    var b = window.cr_getC2Runtime();
    b && b.bt(f, l)
};
window.cr_sizeCanvas = function (f, l) {
    if (0 !== f && 0 !== l) {
        var b = window.cr_getC2Runtime();
        b && b.setSize(f, l)
    }
};
window.cr_setSuspended = function (f) {
    var l = window.cr_getC2Runtime();
    l && l.setSuspended(f)
};
(function () {
    function f(a, k) {
        this.b = a;
        this.Ue = null;
        this.scrollX = this.b.Ma / 2;
        this.scrollY = this.b.La / 2;
        this.scale = 1;
        this.n = 0;
        this.Pf = !0;
        this.name = k[0];
        this.width = k[1];
        this.height = k[2];
        this.wq = k[3];
        this.gq = k[4];
        this.da = k[5];
        var b = k[6],
            e, c;
        this.W = [];
        this.hh = [];
        e = 0;
        for (c = b.length; e < c; e++) {
            var h = new Wb(this, b[e]);
            h.rp = e;
            this.W.push(h)
        }
        b = k[7];
        this.df = [];
        e = 0;
        for (c = b.length; e < c; e++) {
            var h = b[e],
                d = this.b.B[h[1]];
            d.zc || (d.zc = h);
            this.df.push(h); - 1 === this.hh.indexOf(d) && this.hh.push(d)
        }
        this.O = [];
        this.ma = [];
        this.Ia = [];
        e = 0;
        for (c = k[8].length; e < c; e++) this.O.push({
            id: k[8][e][0],
            name: k[8][e][1],
            wb: -1,
            ob: !0,
            index: e
        }), this.Ia.push(k[8][e][2].slice(0));
        this.ae();
        this.Qh = new wa(0, 0, 1, 1);
        this.nm = new wa(0, 0, 1, 1);
        this.Ce = {}
    }

    function l(a, k) {
        return a.$c - k.$c
    }

    function b(a, k) {
        this.jb = a;
        this.b = a.b;
        this.e = [];
        this.scale = 1;
        this.n = 0;
        this.Se = !1;
        this.Zd = new wa(0, 0, 0, 0);
        this.qq = new xa;
        this.Fa = this.Ca = this.Ga = this.Ba = 0;
        this.Cf = !1;
        this.ee = -1;
        this.name = k[0];
        this.index = k[1];
        this.da = k[2];
        this.visible = k[3];
        this.le = k[4];
        this.$d = k[5];
        this.Qd = k[6];
        this.Rd = k[7];
        this.opacity = k[8];
        this.Yk = k[9];
        this.Zc = k[10];
        this.fe = k[11];
        this.Nb = k[12];
        this.ut = k[13];
        this.Qg = "source-over";
        this.Bb = this.Fb = 0;
        this.kc = null;
        this.fg = n();
        this.Ud = !0;
        this.dj = new wa(0, 0, -1, -1);
        this.yc = new wa(0, 0, -1, -1);
        this.Zc && (this.kc = new jb(this.b.Ma, this.b.La));
        this.De = !1;
        var b = k[14],
            e, c;
        this.lq = [];
        this.sc = [];
        this.Rg = [];
        e = 0;
        for (c = b.length; e < c; e++) {
            var h = b[e],
                d = this.b.B[h[1]];
            d.zc || (d.zc = h, d.Zs = this.index);
            this.sc.push(h); - 1 === this.jb.hh.indexOf(d) && this.jb.hh.push(d)
        }
        Da(this.lq, this.sc);
        this.O = [];
        this.ma = [];
        this.Ia = [];
        e = 0;
        for (c = k[15].length; e < c; e++) this.O.push({
            id: k[15][e][0],
            name: k[15][e][1],
            wb: -1,
            ob: !0,
            index: e
        }), this.Ia.push(k[15][e][2].slice(0));
        this.ae();
        this.Qh = new wa(0, 0, 1, 1);
        this.nm = new wa(0, 0, 1, 1)
    }

    function n() {
        return u.length ? u.pop() : []
    }

    function t(a) {
        a.length = 0;
        u.push(a)
    }
    f.prototype.Qv = function (a) {
        var k = a.type.da.toString();
        this.Ce.hasOwnProperty(k) || (this.Ce[k] = []);
        this.Ce[k].push(this.b.vm(a))
    };
    f.prototype.Bo = function () {
        var a = this.W[0];
        return !a.$d && 1 === a.opacity && !a.Yk && a.visible
    };
    f.prototype.ae = function () {
        this.ma.length = 0;
        var a, k, b;
        a = 0;
        for (k = this.O.length; a < k; a++) b = this.O[a], b.ob && this.ma.push(b)
    };
    f.prototype.dl = function (a) {
        var k, b, e;
        k = 0;
        for (b = this.O.length; k < b; k++)
            if (e = this.O[k], e.name === a) return e;
        return null
    };
    var d = [],
        c = !0;
    f.prototype.Cm = function () {
        this.gq && (this.Ue = this.b.Sk[this.gq], this.Ue.Km());
        this.b.ya = this;
        this.scrollX = this.b.Ma / 2;
        this.scrollY = this.b.La / 2;
        var a, k, b, e, h, f, r;
        a = 0;
        for (b = this.b.B.length; a < b; a++)
            if (k = this.b.B[a], !k.I)
                for (h = k.e, k = 0, e = h.length; k < e; k++)
                    if (f = h[k], f.q) {
                        var g = f.q.rp;
                        g >= this.W.length && (g = this.W.length - 1);
                        f.q = this.W[g]; - 1 === f.q.e.indexOf(f) && f.q.e.push(f);
                        f.q.Cf = !0
                    } if (!c)
            for (a = 0, b = this.W.length; a < b; ++a) this.W[a].e.sort(l);
        d.length = 0;
        this.Ps();
        a = 0;
        for (b = this.W.length; a < b; a++) f = this.W[a], f.Xs(), f.Mm();
        h = !1;
        if (!this.Pf) {
            for (r in this.Ce)
                if (this.Ce.hasOwnProperty(r) && (k = this.b.Ti(parseInt(r, 10))) && !k.I && this.b.Jm(k)) {
                    e = this.Ce[r];
                    a = 0;
                    for (b = e.length; a < b; a++) {
                        f = null;
                        if (k.xa.ze && (f = this.Si(e[a].w.l), !f)) continue;
                        f = this.b.se(k.zc, f, !1, 0, 0, !0);
                        this.b.ij(f, e[a]);
                        h = !0;
                        d.push(f)
                    }
                    e.length = 0
                } a = 0;
            for (b = this.W.length; a < b; a++) this.W[a].e.sort(l), this.W[a].Cf = !0
        }
        h && (this.b.zb(), this.b.Tp());
        for (a = 0; a < d.length; a++)
            if (f = d[a], f.type.Jb)
                for (b = f.ah(), k = 0, e = f.type.Xb.length; k < e; k++) r = f.type.Xb[k], f.type !== r && (r.e.length > b ? f.siblings.push(r.e[b]) : r.zc && (h = this.b.se(r.zc, f.q, !0, f.x, f.y, !0), this.b.zb(), r.ak(), f.siblings.push(h), d.push(h)));
        a = 0;
        for (b = this.df.length; a < b; a++) this.b.se(this.df[a], null, !0);
        this.b.Pg = null;
        this.b.zb();
        if (this.b.ra && !this.b.za)
            for (a = 0, b = this.b.B.length; a < b; a++) r = this.b.B[a], !r.I && r.e.length && r.Cj && r.Cj(this.b.ra);
        a = 0;
        for (b = d.length; a < b; a++) f = d[a], this.b.trigger(Object.getPrototypeOf(f.type.xa).g.ik, f);
        d.length = 0;
        this.b.trigger(N.prototype.g.jn, null);
        this.Pf = !1
    };
    f.prototype.Ws = function () {
        var a, k, b, e, c;
        k = a = 0;
        for (b = this.df.length; a < b; a++) e = this.df[a], c = this.b.B[e[1]], c.global ? c.Jb || this.b.se(e, null, !0) : (this.df[k] = e, k++);
        this.df.length = k
    };
    f.prototype.Zv = function () {
        this.b.trigger(N.prototype.g.Ir, null);
        this.b.wd.Vb.length = 0;
        var a, k, b, e, h, d;
        if (!this.Pf)
            for (a = 0, k = this.W.length; a < k; a++)
                for (this.W[a].Nm(), h = this.W[a].e, b = 0, e = h.length; b < e; b++) d = h[b], d.type.global || this.b.Jm(d.type) && this.Qv(d);
        a = 0;
        for (k = this.W.length; a < k; a++) {
            h = this.W[a].e;
            b = 0;
            for (e = h.length; b < e; b++) d = h[b], d.type.global || this.b.ge(d);
            this.b.zb();
            h.length = 0;
            this.W[a].Cf = !0
        }
        a = 0;
        for (k = this.b.B.length; a < k; a++)
            if (h = this.b.B[a], !(h.global || h.xa.ze || h.xa.Nj || h.I)) {
                b = 0;
                for (e = h.e.length; b < e; b++) this.b.ge(h.e[b]);
                this.b.zb()
            } c = !1
    };
    new wa(0, 0, 0, 0);
    f.prototype.Fd = function (a) {
        var b, c = a,
            e = !1,
            h = !this.b.Cc;
        h && (this.b.gj || (this.b.gj = document.createElement("canvas"), b = this.b.gj, b.width = this.b.Y, b.height = this.b.X, this.b.To = b.getContext("2d"), e = !0), b = this.b.gj, c = this.b.To, b.width !== this.b.Y && (b.width = this.b.Y, e = !0), b.height !== this.b.X && (b.height = this.b.X, e = !0), e && (c.webkitImageSmoothingEnabled = this.b.ja, c.mozImageSmoothingEnabled = this.b.ja, c.msImageSmoothingEnabled = this.b.ja, c.imageSmoothingEnabled = this.b.ja));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.b.tk && !this.Bo() && c.clearRect(0, 0, this.b.Y, this.b.X);
        var d, f, e = 0;
        for (d = this.W.length; e < d; e++) f = this.W[e], f.visible && 0 < f.opacity && 11 !== f.Nb && (f.e.length || !f.$d) ? f.Fd(c) : f.Mm();
        h && a.drawImage(b, 0, 0, this.b.width, this.b.height)
    };
    f.prototype.Zb = function (a) {
        var b = 0 < this.ma.length || this.b.Dg || !this.b.Cc;
        if (b) {
            this.b.hc || (this.b.hc = a.re(this.b.Y, this.b.X, this.b.ja));
            if (this.b.hc.Ng !== this.b.Y || this.b.hc.Mg !== this.b.X) a.deleteTexture(this.b.hc), this.b.hc = a.re(this.b.Y, this.b.X, this.b.ja);
            a.td(this.b.hc);
            this.b.Cc || a.Ge(this.b.Y, this.b.X)
        } else this.b.hc && (a.td(null), a.deleteTexture(this.b.hc), this.b.hc = null);
        this.b.tk && !this.Bo() && a.clear(0, 0, 0, 0);
        var c, e, h;
        c = 0;
        for (e = this.W.length; c < e; c++) h = this.W[c], h.visible && 0 < h.opacity && (h.e.length || !h.$d) ? h.Zb(a) : h.Mm();
        b && (0 === this.ma.length || 1 === this.ma.length && this.b.Cc ? (1 === this.ma.length ? (b = this.ma[0].index, a.vd(this.ma[0].wb), a.ug(null, 1 / this.b.Y, 1 / this.b.X, 0, 0, 1, 1, this.scale, this.n, 0, 0, this.b.Y / 2, this.b.X / 2, this.Ia[b]), a.Dj(this.ma[0].wb) && (this.b.ca = !0)) : a.vd(0), this.b.Cc || a.Ge(this.b.width, this.b.height), a.td(null), a.zf(1), a.lc(this.b.hc), a.aq(), a.Ee(), a.Me(), b = this.b.width / 2, c = this.b.height / 2, a.Gj(-b, c, b, c, b, -c, -b, -c), a.lc(null)) : this.pm(a, null, null, null))
    };
    f.prototype.$g = function () {
        return 0 < this.ma.length || this.b.Dg || !this.b.Cc ? this.b.hc : null
    };
    f.prototype.wo = function () {
        var a = this.W[0].Sc(),
            b, c, e;
        b = 1;
        for (c = this.W.length; b < c; b++) e = this.W[b], (0 !== e.Qd || 0 !== e.Rd) && e.Sc() < a && (a = e.Sc());
        return a
    };
    f.prototype.Zp = function (a) {
        if (!this.wq) {
            var b = 1 /
                this.wo() * this.b.Y / 2;
            a > this.width - b && (a = this.width - b);
            a < b && (a = b)
        }
        this.scrollX !== a && (this.scrollX = a, this.b.ca = !0)
    };
    f.prototype.$p = function (a) {
        if (!this.wq) {
            var b = 1 / this.wo() * this.b.X / 2;
            a > this.height - b && (a = this.height - b);
            a < b && (a = b)
        }
        this.scrollY !== a && (this.scrollY = a, this.b.ca = !0)
    };
    f.prototype.Ps = function () {
        this.Zp(this.scrollX);
        this.$p(this.scrollY)
    };
    f.prototype.pm = function (a, b, c, e) {
        var h = c ? c.ma : b ? b.ma : this.ma,
            d = 1,
            f = 0,
            g = 0,
            p = 0,
            l = this.b.Y,
            t = this.b.X;
        c ? (d = c.q.Sc(), f = c.q.hb(), g = c.q.Ba, p = c.q.Ca, l = c.q.Ga, t = c.q.Fa) : b && (d = b.Sc(), f = b.hb(), g = b.Ba, p = b.Ca, l = b.Ga, t = b.Fa);
        var u = this.b.al,
            n, v, M, C, w = 0,
            H = 1,
            Q, L = this.b.Y,
            D = this.b.X,
            B = L / 2,
            U = D / 2,
            E = b ? b.Qh : this.Qh,
            z = b ? b.nm : this.nm,
            A = 0,
            T = 0,
            I = 0,
            K = 0,
            J = L,
            ja = L,
            S = D,
            ta = D,
            la = M = 0,
            Aa = c ? c.q.hb() : 0;
        if (c) {
            n = 0;
            for (v = h.length; n < v; n++) M += a.su(h[n].wb), la += a.tu(h[n].wb);
            C = c.Ha;
            A = b.Ec(C.left, C.top, !0);
            I = b.Ec(C.left, C.top, !1);
            J = b.Ec(C.right, C.bottom, !0);
            S = b.Ec(C.right, C.bottom, !1);
            0 !== Aa && (n = b.Ec(C.right, C.top, !0), v = b.Ec(C.right, C.top, !1), T = b.Ec(C.left, C.bottom, !0), K = b.Ec(C.left, C.bottom, !1), C = Math.min(A, J, n, T), J = Math.max(A, J, n, T), A = C, C = Math.min(I, S, v, K), S = Math.max(I, S, v, K), I = C);
            A -= M;
            I -= la;
            J += M;
            S += la;
            z.left = A / L;
            z.top = 1 - I / D;
            z.right = J / L;
            z.bottom = 1 - S / D;
            T = A = ra(A);
            K = I = ra(I);
            ja = J = sa(J);
            ta = S = sa(S);
            T -= M;
            K -= la;
            ja += M;
            ta += la;
            0 > A && (A = 0);
            0 > I && (I = 0);
            J > L && (J = L);
            S > D && (S = D);
            0 > T && (T = 0);
            0 > K && (K = 0);
            ja > L && (ja = L);
            ta > D && (ta = D);
            E.left = A / L;
            E.top = 1 - I / D;
            E.right = J / L;
            E.bottom = 1 - S / D
        } else E.left = z.left = 0, E.top = z.top = 0, E.right = z.right = 1, E.bottom = z.bottom = 1;
        la = c && ((c.n || Aa) && a.Nh(h[0].wb) || 0 !== M || 0 !== la || 1 !== c.opacity || c.type.xa.mp) || b && !c && 1 !== b.opacity;
        a.aq();
        if (la) {
            u[w] || (u[w] = a.re(L, D, this.b.ja));
            if (u[w].Ng !== L || u[w].Mg !== D) a.deleteTexture(u[w]), u[w] = a.re(L, D, this.b.ja);
            a.vd(0);
            a.td(u[w]);
            Q = ta - K;
            a.clearRect(T, D - K - Q, ja - T, Q);
            c ? c.Zb(a) : (a.lc(this.b.uc), a.zf(b.opacity), a.Ee(), a.translate(-B, -U), a.Me(), a.rd(A, S, J, S, J, I, A, I, E));
            z.left = z.top = 0;
            z.right = z.bottom = 1;
            c && (C = E.top, E.top = E.bottom, E.bottom = C);
            w = 1;
            H = 0
        }
        a.zf(1);
        M = h.length - 1;
        var Aa = a.km(h[M].wb) || !b && !c && !this.b.Cc,
            Ba = 0;
        n = 0;
        for (v = h.length; n < v; n++) {
            u[w] || (u[w] = a.re(L, D, this.b.ja));
            if (u[w].Ng !== L || u[w].Mg !== D) a.deleteTexture(u[w]), u[w] = a.re(L, D, this.b.ja);
            a.vd(h[n].wb);
            Ba = h[n].index;
            a.Dj(h[n].wb) && (this.b.ca = !0);
            0 != n || la ? (a.ug(e, 1 / L, 1 / D, z.left, z.top, z.right, z.bottom, d, f, g, p, (g + l) / 2, (p + t) / 2, c ? c.Ia[Ba] : b ? b.Ia[Ba] : this.Ia[Ba]), a.lc(null), n !== M || Aa ? (a.td(u[w]), Q = ta - K, C = D - K - Q, a.clearRect(T, C, ja - T, Q)) : (c ? a.Fe(c.Fb, c.Bb) : b && a.Fe(b.Fb, b.Bb), a.td(e)), a.lc(u[H]), a.Ee(), a.translate(-B, -U), a.Me(), a.rd(A, S, J, S, J, I, A, I, E), n !== M || Aa || a.lc(null)) : (a.td(u[w]), Q = ta - K, C = D -
                K - Q, a.clearRect(T, C, ja - T, Q), c ? (a.ug(e, 1 / c.width, 1 / c.height, z.left, z.top, z.right, z.bottom, d, f, g, p, (g + l) / 2, (p + t) / 2, c.Ia[Ba]), c.Zb(a)) : (a.ug(e, 1 / L, 1 / D, 0, 0, 1, 1, d, f, g, p, (g + l) / 2, (p + t) / 2, b ? b.Ia[Ba] : this.Ia[Ba]), a.lc(b ? this.b.uc : this.b.hc), a.Ee(), a.translate(-B, -U), a.Me(), a.rd(A, S, J, S, J, I, A, I, E)), z.left = z.top = 0, z.right = z.bottom = 1, c && !Aa && (C = S, S = I, I = C));
            w = 0 === w ? 1 : 0;
            H = 0 === w ? 1 : 0
        }
        Aa && (a.vd(0), c ? a.Fe(c.Fb, c.Bb) : b ? a.Fe(b.Fb, b.Bb) : this.b.Cc || (a.Ge(this.b.width, this.b.height), B = this.b.width / 2, U = this.b.height / 2, I =
            A = 0, J = this.b.width, S = this.b.height), a.td(e), a.lc(u[H]), a.Ee(), a.translate(-B, -U), a.Me(), c && 1 === h.length && !la ? a.rd(A, I, J, I, J, S, A, S, E) : a.rd(A, S, J, S, J, I, A, I, E), a.lc(null))
    };
    f.prototype.Si = function (a) {
        var b, c;
        b = 0;
        for (c = this.W.length; b < c; b++)
            if (this.W[b].da === a) return this.W[b];
        return null
    };
    f.prototype.nb = function () {
        var a, b, c, e = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.n,
            w: this.width,
            h: this.height,
            fv: this.Pf,
            persist: this.Ce,
            fx: [],
            layers: {}
        };
        a = 0;
        for (b = this.O.length; a < b; a++) c = this.O[a], e.fx.push({
            name: c.name,
            active: c.ob,
            params: this.Ia[c.index]
        });
        a = 0;
        for (b = this.W.length; a < b; a++) c = this.W[a], e.layers[c.da.toString()] = c.nb();
        return e
    };
    f.prototype.Cb = function (a) {
        var b, c, e, h;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.n = a.a;
        this.width = a.w;
        this.height = a.h;
        this.Ce = a.persist;
        "undefined" !== typeof a.fv && (this.Pf = a.fv);
        var d = a.fx;
        b = 0;
        for (c = d.length; b < c; b++)
            if (e = this.dl(d[b].name)) e.ob = d[b].active, this.Ia[e.index] = d[b].params;
        this.ae();
        b = a.layers;
        for (h in b) b.hasOwnProperty(h) && (a = this.Si(parseInt(h, 10))) && a.Cb(b[h])
    };
    Ib = f;
    b.prototype.ae = function () {
        this.ma.length = 0;
        var a, b, c;
        a = 0;
        for (b = this.O.length; a < b; a++) c = this.O[a], c.ob && this.ma.push(c)
    };
    b.prototype.dl = function (a) {
        var b, c, e;
        b = 0;
        for (c = this.O.length; b < c; b++)
            if (e = this.O[b], e.name === a) return e;
        return null
    };
    b.prototype.Xs = function () {
        var a, b, c, e, h, f;
        b = a = 0;
        for (c = this.sc.length; a < c; a++) {
            e = this.sc[a];
            h = this.b.B[e[1]];
            f = this.b.Jm(h);
            h = !0;
            if (!f || this.jb.Pf) e = this.b.se(e, this, !0), d.push(e), e.type.global && (h = !1, this.Rg.push(e.uid));
            h && (this.sc[b] = this.sc[a], b++)
        }
        this.sc.length = b;
        this.b.zb();
        !this.b.D && this.O.length && (this.Nb = this.ut);
        this.Qg = kb(this.Nb);
        this.b.A && lb(this, this.Nb, this.b.A);
        this.Ud = !0
    };
    b.prototype.sg = function (a, b) {
        var c = Ga(this.e, a);
        0 > c || (b && this.Zc && a.Sb && a.Sb.right >= a.Sb.left && (a.Aa(), this.kc.update(a, a.Sb, null), a.Sb.set(0, 0, -1, -1)), c === this.e.length - 1 ? this.e.pop() : (za(this.e, c), this.Th(c)), this.Ud = !0)
    };
    b.prototype.Jg = function (a, b) {
        a.$c = this.e.length;
        this.e.push(a);
        b && this.Zc && a.Sb && a.ua();
        this.Ud = !0
    };
    b.prototype.Cv = function (a) {
        this.e.unshift(a);
        this.Th(0)
    };
    b.prototype.lv = function (a, b, c) {
        var e = a.jd();
        b = b.jd();
        za(this.e, e);
        e < b && b--;
        c && b++;
        b === this.e.length ? this.e.push(a) : this.e.splice(b, 0, a);
        this.Th(e < b ? e : b)
    };
    b.prototype.Th = function (a) {
        -1 === this.ee ? this.ee = a : a < this.ee && (this.ee = a);
        this.Ud = this.Cf = !0
    };
    b.prototype.Nm = function () {
        if (this.Cf) {
            -1 === this.ee && (this.ee = 0);
            var a, b, c;
            if (this.Zc)
                for (a = this.ee, b = this.e.length; a < b; ++a) c = this.e[a], c.$c = a, this.kc.hv(c.Sb);
            else
                for (a = this.ee, b = this.e.length; a < b; ++a) this.e[a].$c = a;
            this.Cf = !1;
            this.ee = -1
        }
    };
    b.prototype.Sc = function (a) {
        return this.pu() * (this.b.Cc || a ? this.b.Kg : 1)
    };
    b.prototype.pu = function () {
        return (this.scale * this.jb.scale - 1) * this.fe + 1
    };
    b.prototype.hb = function () {
        return this.Se ? 0 : Ka(this.jb.n + this.n)
    };
    var u = [],
        v = [],
        h = [];
    b.prototype.xo = function () {
        this.Nm();
        this.kc.Rp(this.Ba, this.Ca, this.Ga, this.Fa, h);
        if (!h.length) return n();
        if (1 === h.length) {
            var a = n();
            Da(a, h[0]);
            h.length = 0;
            return a
        }
        for (var b = !0; 1 < h.length;) {
            for (var a = h, c = void 0, e = void 0, d = void 0, f = void 0, l = void 0, c = 0, e = a.length; c < e - 1; c += 2) {
                var d = a[c],
                    f = a[c +
                        1],
                    l = n(),
                    g = d,
                    p = f,
                    u = l,
                    y = 0,
                    P = 0,
                    R = 0,
                    X = g.length,
                    M = p.length,
                    C = void 0,
                    w = void 0;
                for (u.length = X + M; y < X && P < M; ++R) C = g[y], w = p[P], C.$c < w.$c ? (u[R] = C, ++y) : (u[R] = w, ++P);
                for (; y < X; ++y, ++R) u[R] = g[y];
                for (; P < M; ++P, ++R) u[R] = p[P];
                b || (t(d), t(f));
                v.push(l)
            }
            1 === e % 2 && (b ? (d = n(), Da(d, a[e - 1]), v.push(d)) : v.push(a[e - 1]));
            Da(a, v);
            v.length = 0;
            b = !1
        }
        a = h[0];
        h.length = 0;
        return a
    };
    b.prototype.Fd = function (a) {
        this.De = this.Yk || 1 !== this.opacity || 0 !== this.Nb;
        var b = this.b.canvas,
            c = a,
            e = !1;
        this.De && (this.b.fj || (this.b.fj = document.createElement("canvas"), b = this.b.fj, b.width = this.b.Y, b.height = this.b.X, this.b.So = b.getContext("2d"), e = !0), b = this.b.fj, c = this.b.So, b.width !== this.b.Y && (b.width = this.b.Y, e = !0), b.height !== this.b.X && (b.height = this.b.X, e = !0), e && (c.webkitImageSmoothingEnabled = this.b.ja, c.mozImageSmoothingEnabled = this.b.ja, c.msImageSmoothingEnabled = this.b.ja, c.imageSmoothingEnabled = this.b.ja), this.$d && c.clearRect(0, 0, this.b.Y, this.b.X));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.$d || (c.fillStyle = "rgb(" + this.le[0] + "," + this.le[1] + "," + this.le[2] + ")", c.fillRect(0, 0, this.b.Y, this.b.X));
        c.save();
        this.Se = !0;
        var e = this.Gb(0, 0, !0, !0),
            h = this.Gb(0, 0, !1, !0);
        this.Se = !1;
        this.b.od && (e = Math.round(e), h = Math.round(h));
        this.rm(e, h, c);
        var d = this.Sc();
        c.scale(d, d);
        c.translate(-e, -h);
        this.Zc ? (this.yc.left = this.kc.mc(this.Ba), this.yc.top = this.kc.nc(this.Ca), this.yc.right = this.kc.mc(this.Ga), this.yc.bottom = this.kc.nc(this.Fa), this.Ud || !this.yc.Gi(this.dj) ? (t(this.fg), e = this.xo(), this.Ud = !1, this.dj.vi(this.yc)) : e = this.fg) : e = this.e;
        for (var f, g = null, h = 0, d = e.length; h < d; ++h) f = e[h], f !== g && (this.pt(f, c), g = f);
        this.Zc && (this.fg = e);
        c.restore();
        this.De && (a.globalCompositeOperation = this.Qg, a.globalAlpha = this.opacity, a.drawImage(b, 0, 0))
    };
    b.prototype.pt = function (a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Aa();
            var c = a.Ha;
            c.right < this.Ba || c.bottom < this.Ca || c.left > this.Ga || c.top > this.Fa || (b.globalCompositeOperation = a.Qg, a.Fd(b))
        }
    };
    b.prototype.Mm = function () {
        this.Se = !0;
        var a = this.Gb(0, 0, !0, !0),
            b = this.Gb(0, 0, !1, !0);
        this.Se = !1;
        this.b.od && (a = Math.round(a), b = Math.round(b));
        this.rm(a, b, null)
    };
    b.prototype.rm = function (a, b, c) {
        var e = this.Sc();
        this.Ba = a;
        this.Ca = b;
        this.Ga = a + 1 / e * this.b.Y;
        this.Fa = b + 1 / e * this.b.X;
        a = this.hb();
        0 !== a && (c && (c.translate(this.b.Y / 2, this.b.X / 2), c.rotate(-a), c.translate(this.b.Y / -2, this.b.X / -2)), this.Zd.set(this.Ba, this.Ca, this.Ga, this.Fa), this.Zd.offset((this.Ba + this.Ga) / -2, (this.Ca + this.Fa) / -2), this.qq.dq(this.Zd, a), this.qq.Qn(this.Zd), this.Zd.offset((this.Ba + this.Ga) / 2, (this.Ca + this.Fa) / 2), this.Ba = this.Zd.left, this.Ca = this.Zd.top,
            this.Ga = this.Zd.right, this.Fa = this.Zd.bottom)
    };
    b.prototype.Zb = function (a) {
        var b = 0,
            c = 0;
        if (this.De = this.Yk || 1 !== this.opacity || 0 < this.ma.length || 0 !== this.Nb) {
            this.b.uc || (this.b.uc = a.re(this.b.Y, this.b.X, this.b.ja));
            if (this.b.uc.Ng !== this.b.Y || this.b.uc.Mg !== this.b.X) a.deleteTexture(this.b.uc), this.b.uc = a.re(this.b.Y, this.b.X, this.b.ja);
            a.td(this.b.uc);
            this.$d && a.clear(0, 0, 0, 0)
        }
        this.$d || a.clear(this.le[0] / 255, this.le[1] / 255, this.le[2] / 255, 1);
        this.Se = !0;
        var e = this.Gb(0, 0, !0, !0),
            b = this.Gb(0, 0, !1, !0);
        this.Se = !1;
        this.b.od && (e = Math.round(e), b = Math.round(b));
        this.rm(e, b, null);
        e = this.Sc();
        a.Ee();
        a.scale(e, e);
        a.Xp(-this.hb());
        a.translate((this.Ba + this.Ga) / -2, (this.Ca + this.Fa) / -2);
        a.Me();
        this.Zc ? (this.yc.left = this.kc.mc(this.Ba), this.yc.top = this.kc.nc(this.Ca), this.yc.right = this.kc.mc(this.Ga), this.yc.bottom = this.kc.nc(this.Fa), this.Ud || !this.yc.Gi(this.dj) ? (t(this.fg), b = this.xo(), this.Ud = !1, this.dj.vi(this.yc)) : b = this.fg) : b = this.e;
        var h, d, f = null,
            c = 0;
        for (h = b.length; c < h; ++c) d = b[c], d !== f && (this.qt(b[c], a), f =
            d);
        this.Zc && (this.fg = b);
        this.De && (b = this.ma.length ? this.ma[0].wb : 0, c = this.ma.length ? this.ma[0].index : 0, 0 === this.ma.length || 1 === this.ma.length && !a.km(b) && 1 === this.opacity ? (1 === this.ma.length ? (a.vd(b), a.ug(this.jb.$g(), 1 / this.b.Y, 1 / this.b.X, 0, 0, 1, 1, e, this.hb(), this.Ba, this.Ca, (this.Ba + this.Ga) / 2, (this.Ca + this.Fa) / 2, this.Ia[c]), a.Dj(b) && (this.b.ca = !0)) : a.vd(0), a.td(this.jb.$g()), a.zf(this.opacity), a.lc(this.b.uc), a.Fe(this.Fb, this.Bb), a.Ee(), a.Me(), e = this.b.Y / 2, b = this.b.X / 2, a.Gj(-e, b, e, b, e, -b, -e, -b),
            a.lc(null)) : this.jb.pm(a, this, null, this.jb.$g()))
    };
    b.prototype.qt = function (a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Aa();
            var c = a.Ha;
            c.right < this.Ba || c.bottom < this.Ca || c.left > this.Ga || c.top > this.Fa || (a.Bq ? this.tt(a, b) : (b.vd(0), b.Fe(a.Fb, a.Bb), a.Zb(b)))
        }
    };
    b.prototype.tt = function (a, b) {
        var c = a.ma[0].wb,
            e = a.ma[0].index,
            h = this.Sc();
        if (1 !== a.ma.length || b.km(c) || b.Ev(c) || (a.n || a.q.hb()) && b.Nh(c) || 1 !== a.opacity || a.type.xa.mp) this.jb.pm(b, this, a, this.De ? this.b.uc : this.jb.$g()), b.Ee(), b.scale(h, h), b.Xp(-this.hb()), b.translate((this.Ba + this.Ga) / -2, (this.Ca + this.Fa) / -2), b.Me();
        else {
            b.vd(c);
            b.Fe(a.Fb, a.Bb);
            b.Dj(c) && (this.b.ca = !0);
            var d = 0,
                f = 0,
                g = 0,
                p = 0;
            b.Nh(c) && (c = a.Ha, d = this.Ec(c.left, c.top, !0), f = this.Ec(c.left, c.top, !1), g = this.Ec(c.right, c.bottom, !0), c = this.Ec(c.right, c.bottom, !1), d = d / windowWidth, f = 1 - f / windowHeight, g = g / windowWidth, p = 1 - c / windowHeight);
            b.ug(this.De ? this.b.uc : this.jb.$g(), 1 / a.width, 1 / a.height, d, f, g, p, h, this.hb(), this.Ba, this.Ca, (this.Ba + this.Ga) / 2, (this.Ca + this.Fa) / 2, a.Ia[e]);
            a.Zb(b)
        }
    };
    b.prototype.Gb =
        function (a, b, c, e) {
            var h = this.b.devicePixelRatio;
            this.b.hf && (a *= h, b *= h);
            var h = this.b.Ip,
                d = this.b.Jp,
                h = (this.jb.scrollX - h) * this.Qd + h,
                d = (this.jb.scrollY - d) * this.Rd + d,
                f = h,
                g = d,
                p = 1 / this.Sc(!e);
            e ? (f -= this.b.Y * p / 2, g -= this.b.X * p / 2) : (f -= this.b.width * p / 2, g -= this.b.height * p / 2);
            f += a * p;
            g += b * p;
            b = this.hb();
            0 !== b && (f -= h, g -= d, a = Math.cos(b), b = Math.sin(b), e = f * a - g * b, g = g * a + f * b, f = e + h, g += d);
            return c ? f : g
        };
    b.prototype.Ec = function (a, b, c) {
        var e = this.b.Ip,
            h = this.b.Jp,
            e = (this.jb.scrollX - e) * this.Qd + e,
            d = (this.jb.scrollY - h) * this.Rd +
                h,
            h = e,
            f = d,
            g = this.hb();
        if (0 !== g) {
            a -= e;
            b -= d;
            var p = Math.cos(-g),
                g = Math.sin(-g),
                l = a * p - b * g;
            b = b * p + a * g;
            a = l + e;
            b += d
        }
        e = 1 / this.Sc(!1);
        h -= this.b.Y * e / 2;
        f -= this.b.X * e / 2;
        h = (a - h) / e;
        return c ? h : (b - f) / e
    };
    b.prototype.nb = function () {
        var a, b, c, e = {
            s: this.scale,
            a: this.n,
            vl: this.Ba,
            vt: this.Ca,
            vr: this.Ga,
            vb: this.Fa,
            v: this.visible,
            bc: this.le,
            t: this.$d,
            px: this.Qd,
            py: this.Rd,
            o: this.opacity,
            zr: this.fe,
            fx: [],
            cg: this.Rg,
            instances: []
        };
        a = 0;
        for (b = this.O.length; a < b; a++) c = this.O[a], e.fx.push({
            name: c.name,
            active: c.ob,
            params: this.Ia[c.index]
        });
        return e
    };
    b.prototype.Cb = function (a) {
        var b, c, e;
        this.scale = a.s;
        this.n = a.a;
        this.Ba = a.vl;
        this.Ca = a.vt;
        this.Ga = a.vr;
        this.Fa = a.vb;
        this.visible = a.v;
        this.le = a.bc;
        this.$d = a.t;
        this.Qd = a.px;
        this.Rd = a.py;
        this.opacity = a.o;
        this.fe = a.zr;
        this.Rg = a.cg || [];
        Da(this.sc, this.lq);
        var h = new ca;
        b = 0;
        for (e = this.Rg.length; b < e; ++b) h.add(this.Rg[b]);
        c = b = 0;
        for (e = this.sc.length; b < e; ++b) h.contains(this.sc[b][2]) || (this.sc[c] = this.sc[b], ++c);
        this.sc.length = c;
        c = a.fx;
        b = 0;
        for (e = c.length; b < e; b++)
            if (a = this.dl(c[b].name)) a.ob = c[b].active, this.Ia[a.index] = c[b].params;
        this.ae();
        this.e.sort(l);
        this.Cf = !0
    };
    Wb = b
})();
(function () {
    function f(a, b) {
        var e, c = a.length;
        switch (c) {
            case 0:
                return !0;
            case 1:
                return a[0] === b[0];
            case 2:
                return a[0] === b[0] && a[1] === b[1];
            default:
                for (e = 0; e < c; e++)
                    if (a[e] !== b[e]) return !1;
                return !0
        }
    }

    function l(a, b) {
        return a.index - b.index
    }

    function b(a) {
        var b, e, c, h;
        2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(l);
        a.length >= q.length && (q.length = a.length + 1);
        q[a.length] || (q[a.length] = []);
        h = q[a.length];
        b = 0;
        for (e = h.length; b < e; b++)
            if (c = h[b], f(a, c)) return c;
        h.push(a);
        return a
    }

    function n(a, b) {
        this.b = a;
        this.sq = {};
        this.jo = {};
        this.ml = !1;
        this.Eo = new ca;
        this.Mk = [];
        this.uk = [];
        this.name = b[0];
        var e = b[1];
        this.ve = [];
        var c, h;
        c = 0;
        for (h = e.length; c < h; c++) this.Go(e[c], null, this.ve)
    }

    function t(a) {
        this.type = a;
        this.e = [];
        this.na = [];
        this.aa = !0
    }

    function d(a, b, e) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.ga = [];
        this.He = [];
        this.Co = this.Xj = this.Gm = this.pl = this.group = this.Bm = !1;
        this.Xa = [];
        this.Nc = [];
        this.Kc = [];
        this.bh = "";
        this.Sf = this.pl = this.group = !1;
        this.si = null;
        e[1] && (this.bh = e[1][1].toLowerCase(), this.group = !0, this.pl = !!e[1][0], this.si = [], this.Sf = this.pl, this.b.Hf.push(this), this.b.dh[this.bh] = this);
        this.Xc = e[2];
        this.da = e[4];
        this.group || (this.b.Pn[this.da.toString()] = this);
        var c = e[5];
        a = 0;
        for (b = c.length; a < b; a++) {
            var h = new Xb(this, c[a]);
            h.index = a;
            this.Xa.push(h);
            this.Cn(h.type)
        }
        c = e[6];
        a = 0;
        for (b = c.length; a < b; a++) h = new Yb(this, c[a]), h.index = a, this.Nc.push(h);
        if (8 === e.length)
            for (e = e[7], a = 0, b = e.length; a < b; a++) this.sheet.Go(e[a], this, this.Kc);
        this.aj = !1;
        this.Xa.length && (this.aj = null == this.Xa[0].type && this.Xa[0].tb == N.prototype.g.an)
    }

    function c(a, b) {
        var e, c, h;
        if (a && (-1 === b.indexOf(a) && b.push(a), a.Jb))
            for (e = 0, c = a.Xb.length; e < c; e++) h = a.Xb[e], a !== h && -1 === b.indexOf(h) && b.push(h)
    }

    function u(a, b) {
        this.oc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.T = [];
        this.Ja = [];
        this.ba = {};
        this.index = -1;
        this.Hg = !1;
        this.tb = this.b.he(b[1]);
        this.trigger = 0 < b[3];
        this.io = 2 === b[3];
        this.ld = b[4];
        this.sl = b[5];
        this.$u = b[6];
        this.da = b[7];
        this.b.Lf[this.da.toString()] = this; - 1 === b[0] ? (this.type = null, this.Ta = this.um, this.Pe = null, this.Rc = -1) : (this.type = this.b.B[b[0]], this.Ta = this.$u ? this.Ov : this.tm, b[2] ? (this.Pe = this.type.Oi(b[2]), this.Rc = this.type.bl(b[2])) : (this.Pe = null, this.Rc = -1), this.oc.parent && this.oc.parent.Lj());
        this.io && (this.Ta = this.Pv);
        if (10 === b.length) {
            var e, c, h = b[9];
            e = 0;
            for (c = h.length; e < c; e++) {
                var k = new Zb(this, h[e]);
                this.T.push(k)
            }
            this.Ja.length = h.length
        }
    }

    function v(a, b) {
        this.oc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.T = [];
        this.Ja = [];
        this.ba = {};
        this.index = -1;
        this.Hg = !1;
        this.tb = this.b.he(b[1]); - 1 === b[0] ? (this.type = null, this.Ta = this.um, this.Pe = null, this.Rc = -1) : (this.type = this.b.B[b[0]], this.Ta = this.tm, b[2] ? (this.Pe = this.type.Oi(b[2]), this.Rc = this.type.bl(b[2])) : (this.Pe = null, this.Rc = -1));
        this.da = b[3];
        this.b.Gf[this.da.toString()] = this;
        if (6 === b.length) {
            var e, c, h = b[5];
            e = 0;
            for (c = h.length; e < c; e++) {
                var k = new Zb(this, h[e]);
                this.T.push(k)
            }
            this.Ja.length = h.length
        }
    }

    function h() {
        r++;
        x.length === r && x.push(new $b);
        return x[r]
    }

    function a(a, b) {
        this.Hc = a;
        this.oc = a.oc;
        this.sheet = a.sheet;
        this.b = a.b;
        this.type = b[0];
        this.fd = null;
        this.Yd = 0;
        this.get = null;
        this.Xn = 0;
        this.jb = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.di = this.Af = this.di = this.Af = this.ko = this.Ve = this.ei = null;
        this.Mc = !1;
        var e, c, h;
        switch (b[0]) {
            case 0:
            case 7:
                this.fd = new ac(this, b[1]);
                this.Yd = 0;
                this.get = this.yu;
                break;
            case 1:
                this.fd = new ac(this, b[1]);
                this.Yd = 0;
                this.get = this.zu;
                break;
            case 5:
                this.fd = new ac(this, b[1]);
                this.Yd = 0;
                this.get = this.Du;
                break;
            case 3:
            case 8:
                this.Xn = b[1];
                this.get = this.wu;
                break;
            case 6:
                this.jb = this.b.Jl[b[1]];
                this.get = this.Eu;
                break;
            case 9:
                this.key = b[1];
                this.get = this.Cu;
                break;
            case 4:
                this.object = this.b.B[b[1]];
                this.get = this.Fu;
                this.oc.Cn(this.object);
                this.Hc instanceof Yb ? this.oc.Lj() : this.oc.parent && this.oc.parent.Lj();
                break;
            case 10:
                this.index = b[1];
                a.type.I ? (this.get = this.Au, this.Mc = !0) : this.get = this.Bu;
                break;
            case 11:
                this.ei = b[1];
                this.Ve = null;
                this.get = this.xu;
                break;
            case 2:
            case 12:
                this.ko = b[1];
                this.get = this.vu;
                break;
            case 13:
                for (this.get = this.Gu, this.Af = [], this.di = [], e = 1, c = b.length; e < c; e++) h = new Zb(this.Hc, b[e]), this.Af.push(h), this.di.push(0)
        }
    }

    function k(a, b, e) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.ga = [];
        this.name = e[1];
        this.fi = e[2];
        this.Wi = e[3];
        this.oh = !!e[4];
        this.$i = !!e[5];
        this.da = e[6];
        this.b.Fg[this.da.toString()] = this;
        this.data = this.Wi;
        this.parent ? (this.sf = this.oh || this.$i ? -1 : this.b.Xv++, this.b.Js.push(this)) : (this.sf = -1, this.b.sk.push(this))
    }

    function m(a, b, e) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.ga = [];
        this.gh = null;
        this.Mu = e[1];
        this.ob = !0
    }

    function e() {
        this.nq = [];
        this.reset(null)
    }
    var q = [];
    n.prototype.toString = function () {
        return this.name
    };
    n.prototype.Go = function (a, b, e) {
        switch (a[0]) {
            case 0:
                a = new bc(this, b, a);
                if (a.Xc)
                    for (e.push(a), e = 0, b = a.Xa.length; e < b; e++) a.Xa[e].trigger && this.Ho(a, e);
                else a.Lo() ? this.Ho(a, 0) : e.push(a);
                break;
            case 1:
                a = new Tb(this, b, a);
                e.push(a);
                break;
            case 2:
                a = new cc(this, b, a), e.push(a)
        }
    };
    n.prototype.Pa = function () {
        var a, b;
        a = 0;
        for (b = this.ve.length; a < b; a++) this.ve[a].Pa(a < b - 1 && this.ve[a + 1].aj)
    };
    n.prototype.Km = function () {
        F(this.Mk);
        F(this.uk);
        this.An(this);
        F(this.uk)
    };
    n.prototype.An = function (a) {
        var b, e, c, h, k = a.Mk,
            d = a.uk,
            m = this.Eo.Ne();
        b = 0;
        for (e = m.length; b < e; ++b) c = m[b], h = c.gh, !c.ob || a === h || -1 < d.indexOf(h) || (d.push(h), h.An(a), k.push(h))
    };
    n.prototype.Ta = function (a) {
        this.b.gx || (this.ml = !0, a || (this.b.zl = !0));
        var b, e;
        b = 0;
        for (e = this.ve.length; b < e; b++) {
            var c = this.ve[b];
            c.Ta();
            this.b.Gk(c.ga);
            this.b.xe && this.b.zb()
        }
        a || (this.b.zl = !1)
    };
    n.prototype.Ho = function (a, b) {
        a.Xc || this.b.Zj.push(a);
        var e, c, h = a.Xa[b],
            k;
        h.type ? k = h.type.name : k = "system";
        var d = (e = h.io) ? this.jo : this.sq;
        d[k] || (d[k] = []);
        k = d[k];
        d = h.tb;
        if (e) {
            if (h.T.length && (h = h.T[0], 1 === h.type && 2 === h.fd.type)) {
                h = h.fd.value.toLowerCase();
                e = 0;
                for (c = k.length; e < c; e++)
                    if (k[e].method == d) {
                        e = k[e].Tg;
                        e[h] ? e[h].push([a, b]) : e[h] = [
                            [a, b]
                        ];
                        return
                    } e = {};
                e[h] = [
                    [a, b]
                ];
                k.push({
                    method: d,
                    Tg: e
                })
            }
        } else {
            e = 0;
            for (c = k.length; e < c; e++)
                if (k[e].method == d) {
                    k[e].Tg.push([a, b]);
                    return
                } V && d === V.prototype.g.Ff ? k.unshift({
                    method: d,
                    Tg: [
                        [a, b]
                    ]
                }) : k.push({
                    method: d,
                    Tg: [
                        [a, b]
                    ]
                })
        }
    };
    Jb = n;
    t.prototype.ll = function () {
        return this.aa ? this.type.e.length : this.e.length
    };
    t.prototype.Pb = function () {
        return this.aa ? this.type.e : this.e
    };
    t.prototype.qg = function (a) {
        a && (a.b.ab().Ya.Xc ? (this.aa && (F(this.e), Da(this.na, a.type.e), this.aa = !1), a = this.na.indexOf(a), -1 !== a && (this.e.push(this.na[a]), this.na.splice(a, 1))) : (this.aa = !1, F(this.e), this.e[0] = a))
    };
    rb = t;
    window._c2hh_ = "A30E47460D71C81DE06E539024B4650A61F54587";
    d.prototype.Pa = function (a) {
        var e, c = this.parent;
        if (this.group)
            for (this.Xj = !0; c;) {
                if (!c.group) {
                    this.Xj = !1;
                    break
                }
                c = c.parent
            }
        this.Gm = !this.Lo() && (!this.parent || this.parent.group && this.parent.Xj);
        this.Co = !!a;
        this.He = this.ga.slice(0);
        for (c = this.parent; c;) {
            a = 0;
            for (e = c.ga.length; a < e; a++) this.Is(c.ga[a]);
            c = c.parent
        }
        this.ga = b(this.ga);
        this.He = b(this.He);
        a = 0;
        for (e = this.Xa.length; a < e; a++) this.Xa[a].Pa();
        a = 0;
        for (e = this.Nc.length; a < e; a++) this.Nc[a].Pa();
        a = 0;
        for (e = this.Kc.length; a < e; a++) this.Kc[a].Pa(a < e - 1 && this.Kc[a + 1].aj)
    };
    d.prototype.Tv = function (a) {
        if (this.Sf !== !!a) {
            this.Sf = !!a;
            var b;
            a = 0;
            for (b = this.si.length; a < b; ++a) this.si[a].yq();
            0 < b && this.b.ya.Ue && this.b.ya.Ue.Km()
        }
    };
    d.prototype.Cn = function (a) {
        c(a, this.ga)
    };
    d.prototype.Is = function (a) {
        c(a, this.He)
    };
    d.prototype.Lj = function () {
        this.Bm = !0;
        this.parent && this.parent.Lj()
    };
    d.prototype.Lo = function () {
        return this.Xa.length ? this.Xa[0].trigger : !1
    };
    d.prototype.Ta = function () {
        var a, b, e = !1,
            c = this.b,
            h = this.b.ab();
        h.Ya = this;
        var k = this.Xa;
        this.aj || (h.Qk = !1);
        if (this.Xc) {
            0 === k.length && (e = !0);
            h.Wa = 0;
            for (a = k.length; h.Wa < a; h.Wa++) b = k[h.Wa], b.trigger || (b = b.Ta()) && (e = !0);
            (h.lf = e) && this.Ij()
        } else {
            h.Wa = 0;
            for (a = k.length; h.Wa < a; h.Wa++)
                if (b = k[h.Wa].Ta(), !b) {
                    h.lf = !1;
                    this.Gm && c.xe && c.zb();
                    return
                } h.lf = !0;
            this.Ij()
        }
        this.yt(h)
    };
    d.prototype.yt = function (a) {
        a.lf && this.Co && (a.Qk = !0);
        this.Gm && this.b.xe && this.b.zb()
    };
    d.prototype.Mv = function (a) {
        this.b.ab().Ya = this;
        this.Xa[a].Ta() && (this.Ij(), this.b.ab().lf = !0)
    };
    d.prototype.Ij = function () {
        var a = this.b.ab(),
            b;
        a.Wb = 0;
        for (b = this.Nc.length; a.Wb < b; a.Wb++)
            if (this.Nc[a.Wb].Ta()) return;
        this.Yp()
    };
    d.prototype.Kv = function () {
        var a = this.b.ab(),
            b;
        for (b = this.Nc.length; a.Wb < b; a.Wb++)
            if (this.Nc[a.Wb].Ta()) return;
        this.Yp()
    };
    d.prototype.Yp = function () {
        if (this.Kc.length) {
            var a, b, e, c, h = this.Kc.length -
                1;
            this.b.Fj(this);
            if (this.Bm)
                for (a = 0, b = this.Kc.length; a < b; a++) e = this.Kc[a], (c = !this.Xj || !this.group && a < h) && this.b.wf(e.ga), e.Ta(), c ? this.b.qd(e.ga) : this.b.Gk(e.ga);
            else
                for (a = 0, b = this.Kc.length; a < b; a++) this.Kc[a].Ta();
            this.b.zj()
        }
    };
    d.prototype.Nv = function () {
        var a = this.b.ab();
        a.Ya = this;
        var b = !1,
            e;
        a.Wa = 0;
        for (e = this.Xa.length; a.Wa < e; a.Wa++)
            if (this.Xa[a.Wa].Ta()) b = !0;
            else if (!this.Xc) return !1;
        return this.Xc ? b : !0
    };
    d.prototype.yf = function () {
        this.b.Ug++;
        var a = this.b.ab().Wa,
            b = this.b.Fj(this);
        if (!this.Xc)
            for (b.Wa = a + 1, a = this.Xa.length; b.Wa < a; b.Wa++)
                if (!this.Xa[b.Wa].Ta()) {
                    this.b.zj();
                    return
                } this.Ij();
        this.b.zj()
    };
    d.prototype.Su = function (a) {
        var b = a.index;
        if (0 === b) return !0;
        for (--b; 0 <= b; --b)
            if (this.Xa[b].type === a.type) return !1;
        return !0
    };
    bc = d;
    u.prototype.Pa = function () {
        var a, b, e;
        a = 0;
        for (b = this.T.length; a < b; a++) e = this.T[a], e.Pa(), e.Mc && (this.Hg = !0)
    };
    u.prototype.Pv = function () {
        return !0
    };
    u.prototype.um = function () {
        var a, b;
        a = 0;
        for (b = this.T.length; a < b; a++) this.Ja[a] = this.T[a].get();
        return Ua(this.tb.apply(this.b.wd, this.Ja), this.sl)
    };
    u.prototype.Ov = function () {
        var a, b;
        a = 0;
        for (b = this.T.length; a < b; a++) this.Ja[a] = this.T[a].get();
        a = this.tb.apply(this.Pe ? this.Pe : this.type, this.Ja);
        this.type.bd();
        return a
    };
    u.prototype.tm = function () {
        var a, b, e, c, h, k, d, m, f = this.type,
            q = f.R(),
            l = this.oc.Xc && !this.trigger;
        b = 0;
        var r = f.Jb,
            u = f.I,
            t = f.Hd,
            n = this.Rc,
            x = -1 < n,
            v = this.Hg,
            z = this.T,
            A = this.Ja,
            T = this.sl,
            I = this.tb,
            K;
        if (v)
            for (b = 0, h = z.length; b < h; ++b) k = z[b], k.Mc || (A[b] = k.get(0));
        else
            for (b = 0, h = z.length; b < h; ++b) A[b] = z[b].get(0);
        if (q.aa) {
            F(q.e);
            F(q.na);
            K = f.e;
            a = 0;
            for (c = K.length; a < c; ++a) {
                m = K[a];
                if (v)
                    for (b = 0, h = z.length; b < h; ++b) k = z[b], k.Mc && (A[b] = k.get(a));
                x ? (b = 0, u && (b = m.type.Of[t]), b = I.apply(m.V[n + b], A)) : b = I.apply(m, A);
                (d = Ua(b, T)) ? q.e.push(m) : l && q.na.push(m)
            }
            f.finish && f.finish(!0);
            q.aa = !1;
            f.bd();
            return q.ll()
        }
        e = 0;
        K = (d = l && !this.oc.Su(this)) ? q.na : q.e;
        var J = !1;
        a = 0;
        for (c = K.length; a < c; ++a) {
            m = K[a];
            if (v)
                for (b = 0, h = z.length; b < h; ++b) k = z[b], k.Mc && (A[b] = k.get(a));
            x ? (b = 0, u && (b = m.type.Of[t]), b = I.apply(m.V[n + b], A)) : b = I.apply(m, A);
            if (Ua(b, T))
                if (J = !0, d) {
                    if (q.e.push(m), r)
                        for (b = 0, h = m.siblings.length; b < h; b++) k = m.siblings[b], k.type.R().e.push(k)
                } else {
                    K[e] = m;
                    if (r)
                        for (b = 0, h = m.siblings.length; b < h; b++) k = m.siblings[b], k.type.R().e[e] = k;
                    e++
                }
            else if (d) {
                K[e] = m;
                if (r)
                    for (b = 0, h = m.siblings.length; b < h; b++) k = m.siblings[b], k.type.R().na[e] = k;
                e++
            } else if (l && (q.na.push(m), r))
                for (b = 0, h = m.siblings.length; b < h; b++) k = m.siblings[b], k.type.R().na.push(k)
        }
        Ca(K, e);
        if (r)
            for (u = f.Xb, a = 0, c = u.length; a < c; a++) m = u[a].R(), d ? Ca(m.na, e) : Ca(m.e, e);
        e = J;
        if (d && !J)
            for (a = 0, c = q.e.length; a < c; a++) {
                m = q.e[a];
                if (v)
                    for (b = 0, h = z.length; b < h; b++) k = z[b], k.Mc && (A[b] = k.get(a));
                b = x ? I.apply(m.V[n], A) : I.apply(m, A);
                if (Ua(b, T)) {
                    J = !0;
                    break
                }
            }
        f.finish && f.finish(e || l);
        return l ? J : q.ll()
    };
    Xb = u;
    v.prototype.Pa = function () {
        var a, b, e;
        a = 0;
        for (b = this.T.length; a < b; a++) e = this.T[a], e.Pa(), e.Mc && (this.Hg = !0)
    };
    v.prototype.um = function () {
        var a = this.b,
            b, e, c = this.T,
            h = this.Ja;
        b = 0;
        for (e = c.length; b < e; ++b) h[b] = c[b].get();
        return this.tb.apply(a.wd, h)
    };
    v.prototype.tm = function () {
        var a = this.type,
            b = this.Rc,
            e = a.Hd,
            c = this.Hg,
            h = this.T,
            k = this.Ja,
            d = this.tb,
            m = a.R().Pb(),
            a = a.I,
            q = -1 < b,
            f, l, r, u, t, n;
        if (c)
            for (l = 0, u = h.length; l < u; ++l) t = h[l], t.Mc || (k[l] = t.get(0));
        else
            for (l = 0, u = h.length; l < u; ++l) k[l] = h[l].get(0);
        f = 0;
        for (r = m.length; f < r; ++f) {
            n = m[f];
            if (c)
                for (l = 0, u = h.length; l < u; ++l) t = h[l], t.Mc && (k[l] = t.get(f));
            q ? (l = 0, a && (l = n.type.Of[e]), d.apply(n.V[b + l], k)) : d.apply(n, k)
        }
        return !1
    };
    Yb = v;
    var x = [],
        r = -1;
    a.prototype.Pa = function () {
        var a, b;
        if (11 === this.type) this.Ve = this.b.so(this.ei, this.oc.parent);
        else if (13 === this.type)
            for (a = 0, b = this.Af.length; a < b; a++) this.Af[a].Pa();
        this.fd && this.fd.Pa()
    };
    a.prototype.kv = function (a) {
        this.Mc || !a || a.xa.Nj || (this.Mc = !0)
    };
    a.prototype.cq = function () {
        this.Mc = !0
    };
    a.prototype.yu = function (a) {
        this.Yd = a || 0;
        a = h();
        this.fd.get(a);
        r--;
        return a.data
    };
    a.prototype.zu = function (a) {
        this.Yd = a || 0;
        a = h();
        this.fd.get(a);
        r--;
        return ia(a.data) ? a.data : ""
    };
    a.prototype.Fu = function () {
        return this.object
    };
    a.prototype.wu = function () {
        return this.Xn
    };
    a.prototype.Du = function (a) {
        this.Yd = a || 0;
        a = h();
        this.fd.get(a);
        r--;
        return a.ib() ? this.b.Qf(a.data) : this.b.Ri(a.data)
    };
    a.prototype.Eu = function () {
        return this.jb
    };
    a.prototype.Cu = function () {
        return this.key
    };
    a.prototype.Bu = function () {
        return this.index
    };
    a.prototype.Au = function (a) {
        a = a || 0;
        var b = this.Hc.type,
            e = null,
            e = b.R(),
            c = e.Pb();
        if (c.length) e = c[a % c.length].type;
        else if (e.na.length) e = e.na[a % e.na.length].type;
        else if (b.e.length) e = b.e[a % b.e.length].type;
        else return 0;
        return this.index + e.Ji[b.Hd]
    };
    a.prototype.xu = function () {
        return this.Ve
    };
    a.prototype.vu = function () {
        return this.ko
    };
    a.prototype.Gu = function () {
        var a, b;
        a = 0;
        for (b = this.Af.length; a < b; a++) this.di[a] = this.Af[a].get();
        return this.di
    };
    Zb = a;
    k.prototype.Pa = function () {
        this.ga = b(this.ga)
    };
    k.prototype.Xd = function (a) {
        var b = this.b.qo();
        this.parent && !this.oh && b ? (this.sf >= b.length && (b.length = this.sf + 1), b[this.sf] = a) : this.data = a
    };
    k.prototype.Ze = function () {
        var a = this.b.qo();
        return !this.parent || this.oh || !a || this.$i ? this.data : this.sf >= a.length || "undefined" === typeof a[this.sf] ? this.Wi : a[this.sf]
    };
    k.prototype.Ta = function () {
        !this.parent || this.oh || this.$i || this.Xd(this.Wi)
    };
    Tb = k;
    m.prototype.toString = function () {
        return "include:" +
            this.gh.toString()
    };
    m.prototype.Pa = function () {
        this.gh = this.b.Sk[this.Mu];
        this.sheet.Eo.add(this);
        this.ga = b(this.ga);
        for (var a = this.parent; a;) a.group && a.si.push(this), a = a.parent;
        this.yq()
    };
    m.prototype.Ta = function () {
        this.parent && this.b.Oh(this.b.B);
        this.gh.ml || this.gh.Ta(!0);
        this.parent && this.b.qd(this.b.B)
    };
    m.prototype.yq = function () {
        for (var a = this.parent; a;) {
            if (a.group && !a.Sf) {
                this.ob = !1;
                return
            }
            a = a.parent
        }
        this.ob = !0
    };
    cc = m;
    e.prototype.reset = function (a) {
        this.Ya = a;
        this.Wb = this.Wa = 0;
        F(this.nq);
        this.Qk = this.lf = !1
    };
    e.prototype.wl = function () {
        return this.Ya.Bm ? !0 : this.Wa < this.Ya.Xa.length - 1 ? !!this.Ya.ga.length : !1
    };
    Sb = e
})();
(function () {
    function f(b, d) {
        this.Hc = b;
        this.b = b.b;
        this.type = d[0];
        this.get = [this.Pt, this.Lt, this.Yt, this.au, this.At, this.Zt, this.Tt, this.It, this.St, this.Xt, this.Bt, this.Wt, this.Jt, this.Ut, this.Qt, this.Rt, this.Mt, this.Nt, this.Ht, this.$t, this.Vt, this.Ot, this.Gt, this.Kt][this.type];
        var f = null;
        this.Od = this.T = this.Ja = this.tb = this.Wj = this.second = this.first = this.value = null;
        this.Rc = -1;
        this.Tc = null;
        this.Cq = -1;
        this.Ve = this.ei = null;
        this.tg = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = d[1];
                break;
            case 3:
                this.first = new ac(b, d[1]);
                break;
            case 18:
                this.first = new ac(b, d[1]);
                this.second = new ac(b, d[2]);
                this.Wj = new ac(b, d[3]);
                break;
            case 19:
                this.tb = this.b.he(d[1]);
                this.tb !== N.prototype.C.random && this.tb !== N.prototype.C.Ts || this.Hc.cq();
                this.Ja = [];
                this.T = [];
                3 === d.length ? (f = d[2], this.Ja.length = f.length + 1) : this.Ja.length = 1;
                break;
            case 20:
                this.Od = this.b.B[d[1]];
                this.Rc = -1;
                this.tb = this.b.he(d[2]);
                this.tg = d[3];
                oc && this.tb === oc.prototype.C.Zm && this.Hc.cq();
                d[4] ? this.Tc = new ac(b, d[4]) : this.Tc = null;
                this.Ja = [];
                this.T = [];
                6 === d.length ? (f = d[5], this.Ja.length = f.length + 1) : this.Ja.length = 1;
                break;
            case 21:
                this.Od = this.b.B[d[1]];
                this.tg = d[2];
                d[3] ? this.Tc = new ac(b, d[3]) : this.Tc = null;
                this.Cq = d[4];
                break;
            case 22:
                this.Od = this.b.B[d[1]];
                this.Od.Oi(d[2]);
                this.Rc = this.Od.bl(d[2]);
                this.tb = this.b.he(d[3]);
                this.tg = d[4];
                d[5] ? this.Tc = new ac(b, d[5]) : this.Tc = null;
                this.Ja = [];
                this.T = [];
                7 === d.length ? (f = d[6], this.Ja.length = f.length + 1) : this.Ja.length = 1;
                break;
            case 23:
                this.ei = d[1], this.Ve = null
        }
        this.Hc.kv(this.Od);
        4 <= this.type && 17 >= this.type && (this.first = new ac(b, d[1]), this.second = new ac(b, d[2]));
        if (f) {
            var h, a;
            h = 0;
            for (a = f.length; h < a; h++) this.T.push(new ac(b, f[h]))
        }
    }

    function l() {
        ++d;
        t.length === d && t.push(new $b);
        return t[d]
    }

    function b(b, d, f) {
        var h, a;
        h = 0;
        for (a = b.length; h < a; ++h) b[h].get(f), d[h + 1] = f.data
    }

    function n(b, d) {
        this.type = b || dc.Ef;
        this.data = d || 0;
        this.uf = null;
        this.type == dc.Ef && (this.data = Math.floor(this.data))
    }
    f.prototype.Pa = function () {
        23 === this.type && (this.Ve = this.Hc.b.so(this.ei, this.Hc.oc.parent));
        this.first && this.first.Pa();
        this.second && this.second.Pa();
        this.Wj && this.Wj.Pa();
        this.Tc && this.Tc.Pa();
        if (this.T) {
            var b, d;
            b = 0;
            for (d = this.T.length; b < d; b++) this.T[b].Pa()
        }
    };
    var t = [],
        d = -1;
    f.prototype.$t = function (c) {
        var f = this.T,
            t = this.Ja;
        t[0] = c;
        c = l();
        b(f, t, c);
        --d;
        this.tb.apply(this.b.wd, t)
    };
    f.prototype.Vt = function (c) {
        var f = this.Od,
            t = this.Ja,
            h = this.T,
            a = this.Tc,
            k = this.tb,
            m = this.Hc.Yd,
            e = f.R(),
            q = e.Pb();
        if (!q.length)
            if (e.na.length) q = e.na;
            else {
                this.tg ? c.Eb("") : c.U(0);
                return
            } t[0] = c;
        c.uf = f;
        c = l();
        b(h, t, c);
        a && (a.get(c), c.ib() && (m = c.data, q = f.e));
        --d;
        f = q.length;
        if (m >= f || m <= -f) m %= f;
        0 > m && (m += f);
        k.apply(q[m], t)
    };
    f.prototype.Gt = function (c) {
        var f = this.Od,
            t = this.Ja,
            h = this.T,
            a = this.Tc,
            k = this.Rc,
            m = this.tb,
            e = this.Hc.Yd,
            q = f.R(),
            n = q.Pb();
        if (!n.length)
            if (q.na.length) n = q.na;
            else {
                this.tg ? c.Eb("") : c.U(0);
                return
            } t[0] = c;
        c.uf = f;
        c = l();
        b(h, t, c);
        a && (a.get(c), c.ib() && (e = c.data, n = f.e));
        --d;
        h = n.length;
        if (e >= h || e <= -h) e %= h;
        0 > e && (e += h);
        e = n[e];
        n = 0;
        f.I && (n = e.type.Of[f.Hd]);
        m.apply(e.V[k + n], t)
    };
    f.prototype.Ot = function (b) {
        var f = this.Tc,
            t = this.Od,
            h = this.Cq,
            a = this.Hc.Yd,
            k = t.R(),
            m = k.Pb();
        if (!m.length)
            if (k.na.length) m = k.na;
            else {
                this.tg ? b.Eb("") : b.U(0);
                return
            } if (f) {
                k = l();
                f.get(k);
                if (k.ib()) {
                    a = k.data;
                    t = t.e;
                    a %= t.length;
                    0 > a && (a += t.length);
                    h = t[a].cb[h];
                    ia(h) ? b.Eb(h) : b.H(h);
                    --d;
                    return
                } --d
            }
        f = m.length;
        if (a >= f || a <= -f) a %= f;
        0 > a && (a += f);
        a = m[a];
        m = 0;
        t.I && (m = a.type.Ji[t.Hd]);
        h = a.cb[h + m];
        ia(h) ? b.Eb(h) : b.H(h)
    };
    f.prototype.Pt = function (b) {
        b.type = dc.Ef;
        b.data = this.value
    };
    f.prototype.Lt = function (b) {
        b.type = dc.Df;
        b.data = this.value
    };
    f.prototype.Yt = function (b) {
        b.type = dc.String;
        b.data = this.value
    };
    f.prototype.au = function (b) {
        this.first.get(b);
        b.ib() && (b.data = -b.data)
    };
    f.prototype.At = function (b) {
        this.first.get(b);
        var f = l();
        this.second.get(f);
        b.ib() && f.ib() && (b.data += f.data, f.Zf() && b.jg());
        --d
    };
    f.prototype.Zt = function (b) {
        this.first.get(b);
        var f = l();
        this.second.get(f);
        b.ib() && f.ib() && (b.data -= f.data, f.Zf() && b.jg());
        --d
    };
    f.prototype.Tt = function (b) {
        this.first.get(b);
        var f = l();
        this.second.get(f);
        b.ib() && f.ib() && (b.data *= f.data, f.Zf() && b.jg());
        --d
    };
    f.prototype.It = function (b) {
        this.first.get(b);
        var f = l();
        this.second.get(f);
        b.ib() && f.ib() && (b.data /= f.data, b.jg());
        --d
    };
    f.prototype.St = function (b) {
        this.first.get(b);
        var f = l();
        this.second.get(f);
        b.ib() && f.ib() && (b.data %= f.data, f.Zf() && b.jg());
        --d
    };
    f.prototype.Xt = function (b) {
        this.first.get(b);
        var f = l();
        this.second.get(f);
        b.ib() && f.ib() && (b.data = Math.pow(b.data, f.data), f.Zf() && b.jg());
        --d
    };
    f.prototype.Bt = function (b) {
        this.first.get(b);
        var f = l();
        this.second.get(f);
        f.bg() || b.bg() ? this.Dt(b, f) : this.Ct(b, f);
        --d
    };
    f.prototype.Dt = function (b, d) {
        b.bg() && d.bg() ? this.Ft(b, d) : this.Et(b, d)
    };
    f.prototype.Ft = function (b, d) {
        b.data += d.data
    };
    f.prototype.Et = function (b, d) {
        b.bg() ? b.data += (Math.round(1E10 * d.data) / 1E10).toString() : b.Eb(b.data.toString() + d.data)
    };
    f.prototype.Ct = function (b, d) {
        b.U(b.data && d.data ? 1 : 0)
    };
    f.prototype.Wt = function (b) {
        this.first.get(b);
        var f = l();
        this.second.get(f);
        b.ib() && f.ib() && (b.data || f.data ? b.U(1) : b.U(0));
        --d
    };
    f.prototype.Ht = function (b) {
        this.first.get(b);
        b.data ? this.second.get(b) : this.Wj.get(b)
    };
    f.prototype.Jt = function (b) {
        this.first.get(b);
        var f = l();
        this.second.get(f);
        b.U(b.data === f.data ? 1 : 0);
        --d
    };
    f.prototype.Ut = function (b) {
        this.first.get(b);
        var f = l();
        this.second.get(f);
        b.U(b.data !== f.data ? 1 : 0);
        --d
    };
    f.prototype.Qt = function (b) {
        this.first.get(b);
        var f = l();
        this.second.get(f);
        b.U(b.data < f.data ? 1 : 0);
        --d
    };
    f.prototype.Rt = function (b) {
        this.first.get(b);
        var f = l();
        this.second.get(f);
        b.U(b.data <= f.data ? 1 : 0);
        --d
    };
    f.prototype.Mt = function (b) {
        this.first.get(b);
        var f = l();
        this.second.get(f);
        b.U(b.data > f.data ? 1 : 0);
        --d
    };
    f.prototype.Nt = function (b) {
        this.first.get(b);
        var f = l();
        this.second.get(f);
        b.U(b.data >= f.data ? 1 : 0);
        --d
    };
    f.prototype.Kt = function (b) {
        var d = this.Ve.Ze();
        ha(d) ? b.H(d) : b.Eb(d)
    };
    ac = f;
    n.prototype.Zf = function () {
        return this.type === dc.Df
    };
    n.prototype.ib = function () {
        return this.type === dc.Ef || this.type === dc.Df
    };
    n.prototype.bg = function () {
        return this.type === dc.String
    };
    n.prototype.jg = function () {
        this.Zf() || (this.bg() && (this.data = parseFloat(this.data)), this.type = dc.Df)
    };
    n.prototype.U = function (b) {
        this.type = dc.Ef;
        this.data = Math.floor(b)
    };
    n.prototype.H = function (b) {
        this.type = dc.Df;
        this.data = b
    };
    n.prototype.Eb = function (b) {
        this.type = dc.String;
        this.data = b
    };
    n.prototype.ud = function (b) {
        ha(b) ? (this.type = dc.Df, this.data = b) : ia(b) ? (this.type = dc.String, this.data = b.toString()) : (this.type = dc.Ef, this.data = 0)
    };
    $b = n;
    dc = {
        Ef: 0,
        Df: 1,
        String: 2
    }
})();

function N(f) {
    this.b = f;
    this.Vb = []
}
N.prototype.nb = function () {
    var f = {},
        l, b, n, t, d, c, u, v;
    f.waits = [];
    var h = f.waits,
        a;
    l = 0;
    for (b = this.Vb.length; l < b; l++) {
        c = this.Vb[l];
        a = {
            t: c.time,
            st: c.jq,
            s: c.Am,
            ev: c.Nf.da,
            sm: [],
            sols: {}
        };
        c.Nf.Nc[c.Wb] && (a.act = c.Nf.Nc[c.Wb].da);
        n = 0;
        for (t = c.ga.length; n < t; n++) a.sm.push(c.ga[n].da);
        for (d in c.Lb)
            if (c.Lb.hasOwnProperty(d)) {
                u = this.b.B[parseInt(d, 10)];
                v = {
                    sa: c.Lb[d].Jj,
                    insts: []
                };
                n = 0;
                for (t = c.Lb[d].Jd.length; n < t; n++) v.insts.push(c.Lb[d].Jd[n].uid);
                a.sols[u.da.toString()] = v
            } h.push(a)
    }
    return f
};
N.prototype.Cb = function (f) {
    f = f.waits;
    var l, b, n, t, d, c, u, v, h, a, k;
    F(this.Vb);
    l = 0;
    for (b = f.length; l < b; l++)
        if (c = f[l], v = this.b.Pn[c.ev.toString()]) {
            h = -1;
            n = 0;
            for (t = v.Nc.length; n < t; n++)
                if (v.Nc[n].da === c.act) {
                    h = n;
                    break
                } if (-1 !== h) {
                    u = {
                        Lb: {},
                        ga: [],
                        Nk: !1
                    };
                    u.time = c.t;
                    u.jq = c.st || "";
                    u.Am = !!c.s;
                    u.Nf = v;
                    u.Wb = h;
                    n = 0;
                    for (t = c.sm.length; n < t; n++)(v = this.b.Ti(c.sm[n])) && u.ga.push(v);
                    for (d in c.sols)
                        if (c.sols.hasOwnProperty(d) && (v = this.b.Ti(parseInt(d, 10)))) {
                            h = c.sols[d];
                            a = {
                                Jj: h.sa,
                                Jd: []
                            };
                            n = 0;
                            for (t = h.insts.length; n < t; n++)(k = this.b.Zg(h.insts[n])) && a.Jd.push(k);
                            u.Lb[v.index.toString()] = a
                        } this.Vb.push(u)
                }
        }
};
(function () {
    function f() { }

    function l(b, a) {
        var c = b.ba.c2_feo_val,
            d = a.ba.c2_feo_val;
        if (ha(c) && ha(d)) return c - d;
        c = "" + c;
        d = "" + d;
        return c < d ? -1 : c > d ? 1 : 0
    }

    function b() { }

    function n() { }
    var t = N.prototype;
    f.prototype.cr = function () {
        return !0
    };
    f.prototype.jn = function () {
        return !0
    };
    f.prototype.Ir = function () {
        return !0
    };
    f.prototype.Rq = function (b, a, c) {
        return ec(b, a, c)
    };
    f.prototype.Yr = function (b) {
        var a = this.b.ab(),
            c = a.Ya,
            d = a.wl(),
            a = this.b.lm();
        if (d)
            for (d = 0; d < b && !a.Qa; d++) this.b.wf(c.ga), a.index = d, c.yf(), this.b.qd(c.ga);
        else
            for (d = 0; d < b && !a.Qa; d++) a.index = d, c.yf();
        this.b.jm();
        return !1
    };
    var d = [],
        c = -1;
    f.prototype.er = function (b) {
        var a = b.R();
        c++;
        d.length === c && d.push([]);
        var k = d[c];
        Da(k, a.Pb());
        var f = this.b.ab(),
            e = f.Ya,
            q = f.wl(),
            f = this.b.lm(),
            l, r, g, p, t, n, v = b.Jb;
        if (q)
            for (q = 0, l = k.length; q < l && !f.Qa; q++) {
                this.b.wf(e.ga);
                p = k[q];
                a = b.R();
                a.aa = !1;
                F(a.e);
                a.e[0] = p;
                if (v)
                    for (r = 0, g = p.siblings.length; r < g; r++) t = p.siblings[r], n = t.type.R(), n.aa = !1, F(n.e), n.e[0] = t;
                f.index = q;
                e.yf();
                this.b.qd(e.ga)
            } else
            for (a.aa = !1, F(a.e), q = 0, l = k.length; q < l && !f.Qa; q++) {
                p = k[q];
                a.e[0] = p;
                if (v)
                    for (r = 0, g = p.siblings.length; r < g; r++) t = p.siblings[r], n = t.type.R(), n.aa = !1, F(n.e), n.e[0] = t;
                f.index = q;
                e.yf()
            }
        F(k);
        this.b.jm();
        c--;
        return !1
    };
    f.prototype.fr = function (b, a, k) {
        a = b.R();
        c++;
        d.length === c && d.push([]);
        var f = d[c];
        Da(f, a.Pb());
        var e = this.b.ab(),
            q = e.Ya,
            t = this.b.Pi(),
            r = e.wl(),
            e = this.b.lm(),
            g, p, n, y, v;
        g = 0;
        for (p = f.length; g < p; g++) f[g].ba.c2_feo_val = t.T[1].get(g);
        f.sort(l);
        1 === k && f.reverse();
        k = b.Jb;
        if (r)
            for (g = 0, p = f.length; g < p && !e.Qa; g++) {
                this.b.wf(q.ga);
                n = f[g];
                a = b.R();
                a.aa = !1;
                F(a.e);
                a.e[0] = n;
                if (k)
                    for (t = 0, r = n.siblings.length; t < r; t++) y = n.siblings[t], v = y.type.R(), v.aa = !1, F(v.e), v.e[0] = y;
                e.index = g;
                q.yf();
                this.b.qd(q.ga)
            } else
            for (a.aa = !1, F(a.e), g = 0, p = f.length; g < p && !e.Qa; g++) {
                n = f[g];
                a.e[0] = n;
                if (k)
                    for (t = 0, r = n.siblings.length; t < r; t++) y = n.siblings[t], v = y.type.R(), v.aa = !1, F(v.e), v.e[0] = y;
                e.index = g;
                q.yf()
            }
        F(f);
        this.b.jm();
        c--;
        return !1
    };
    f.prototype.ys = function () {
        var b = this.b.Pi().ba;
        "undefined" === typeof b.TriggerOnce_lastTick && (b.TriggerOnce_lastTick = -1);
        var a = b.TriggerOnce_lastTick,
            c = this.b.Ag;
        b.TriggerOnce_lastTick = c;
        return this.b.Il || a !== c - 1
    };
    f.prototype.br = function (b) {
        var a = this.b.Pi(),
            c = a.ba.Every_lastTime || 0,
            d = this.b.tc.J;
        "undefined" === typeof a.ba.Every_seconds && (a.ba.Every_seconds = b);
        var e = a.ba.Every_seconds;
        if (d >= c + e) return a.ba.Every_lastTime = c + e, d >= a.ba.Every_lastTime + .04 && (a.ba.Every_lastTime = d), a.ba.Every_seconds = b, !0;
        d < c - .1 && (a.ba.Every_lastTime = d);
        return !1
    };
    f.prototype.Ur = function (b) {
        if (!b) return !1;
        var a = b.R(),
            c = a.Pb(),
            d = ra(Math.random() * c.length);
        if (d >= c.length) return !1;
        a.qg(c[d]);
        b.bd();
        return !0
    };
    f.prototype.Uq = function (b, a, c) {
        return ec(b.Ze(), a, c)
    };
    f.prototype.kr = function (b) {
        return (b = this.b.dh[b.toLowerCase()]) && b.Sf
    };
    f.prototype.Sq = function (b, a, c) {
        return b >= a && b <= c
    };
    f.prototype.an = function () {
        var b = this.b.ab();
        return b.Qk ? !1 : !b.lf
    };
    f.prototype.kn = function () {
        return !0
    };
    f.prototype.wr = function () {
        return !0
    };
    f.prototype.kk = function () {
        return !0
    };
    f.prototype.Jr = function () {
        return !0
    };
    f.prototype.jk = function () {
        return !0
    };
    f.prototype.mr = function (b) {
        var a = this.b;
        switch (b) {
            case 0:
                return !a.za && !a.xl && !a.Qb && !a.Yi && !a.ye && !a.tl && !a.ih;
            case 1:
                return a.dg;
            case 2:
                return a.jh;
            case 3:
                return a.Bl;
            case 4:
                return a.ye;
            case 5:
                return a.tl;
            case 6:
                return a.Al;
            case 7:
                return a.cc;
            case 8:
                return a.Qb;
            case 9:
                return a.Pu;
            case 10:
                return a.xl;
            case 11:
                return a.Wf;
            case 12:
                return a.ih;
            default:
                return !1
        }
    };
    f.prototype.Iq = function (b, a, c) {
        return Pa(G(b), G(c)) <= G(a)
    };
    f.prototype.jr = function (b, a) {
        return Ra(G(b), G(a))
    };
    f.prototype.ir = function (b, a, c) {
        b = Na(b);
        a = Na(a);
        c = Na(c);
        return Ra(c, a) ? Ra(b, a) && !Ra(b, c) : !(!Ra(b, a) && Ra(b, c))
    };
    t.g = new f;
    b.prototype.gr = function (b) {
        this.b.ph || this.b.Pg || (this.b.Pg = b)
    };
    b.prototype.Xq = function (b, a, c, d) {
        if (a && b && (a = this.b.Zn(b, a, c, d))) {
            this.b.Uc++;
            var e;
            this.b.trigger(Object.getPrototypeOf(b.xa).g.ik, a);
            if (a.Jb)
                for (c = 0, d = a.siblings.length; c < d; c++) e = a.siblings[c], this.b.trigger(Object.getPrototypeOf(e.type.xa).g.ik, e);
            this.b.Uc--;
            b = b.R();
            b.aa = !1;
            F(b.e);
            b.e[0] = a;
            if (a.Jb)
                for (c = 0, d = a.siblings.length; c < d; c++) e = a.siblings[c], b = e.type.R(), b.aa = !1, F(b.e), b.e[0] = e
        }
    };
    b.prototype.ks = function (b, a) {
        b && b.visible !== a && (b.visible = a, this.b.ca = !0)
    };
    b.prototype.os = function (b, a) {
        0 === b.fi ? ha(a) ? b.Xd(a) : b.Xd(parseFloat(a)) : 1 === b.fi && b.Xd(a.toString())
    };
    b.prototype.Gq = function (b, a) {
        0 === b.fi ? ha(a) ? b.Xd(b.Ze() + a) : b.Xd(b.Ze() + parseFloat(a)) : 1 === b.fi && b.Xd(b.Ze() + a.toString())
    };
    b.prototype.ws = function (b, a) {
        0 === b.fi && (ha(a) ? b.Xd(b.Ze() - a) : b.Xd(b.Ze() - parseFloat(a)))
    };
    var u = [],
        v = [];
    b.prototype.Bs = function (b) {
        if (!(0 > b)) {
            var a, c, d, e = this.b.ab(),
                f;
            u.length ? f = u.pop() : f = {
                Lb: {},
                ga: []
            };
            f.Nk = !1;
            f.time = this.b.tc.J +
                b;
            f.jq = "";
            f.Am = !1;
            f.Nf = e.Ya;
            f.Wb = e.Wb + 1;
            b = 0;
            for (a = this.b.B.length; b < a; b++) d = this.b.B[b], c = d.R(), c.aa && -1 === e.Ya.ga.indexOf(d) || (f.ga.push(d), d = void 0, v.length ? d = v.pop() : d = {
                Jd: []
            }, d.Jj = !1, d.Jj = c.aa, Da(d.Jd, c.e), f.Lb[b.toString()] = d);
            this.Vb.push(f);
            return !0
        }
    };
    b.prototype.Zr = function () {
        var b, a, c;
        b = 0;
        for (a = this.b.sk.length; b < a; b++) c = this.b.sk[b], c.data = c.Wi
    };
    t.u = new b;
    n.prototype["int"] = function (b, a) {
        ia(a) ? (b.U(parseInt(a, 10)), isNaN(b.data) && (b.data = 0)) : b.U(a)
    };
    n.prototype["float"] = function (b, a) {
        ia(a) ? (b.H(parseFloat(a)), isNaN(b.data) && (b.data = 0)) : b.H(a)
    };
    n.prototype.random = function (b, a, c) {
        void 0 === c ? b.H(Math.random() * a) : b.H(Math.random() * (c - a) + a)
    };
    n.prototype.sqrt = function (b, a) {
        b.H(Math.sqrt(a))
    };
    n.prototype.abs = function (b, a) {
        b.H(Math.abs(a))
    };
    n.prototype.round = function (b, a) {
        b.U(Math.round(a))
    };
    n.prototype.floor = function (b, a) {
        b.U(Math.floor(a))
    };
    n.prototype.ceil = function (b, a) {
        b.U(Math.ceil(a))
    };
    n.prototype.sin = function (b, a) {
        b.H(Math.sin(G(a)))
    };
    n.prototype.cos = function (b, a) {
        b.H(Math.cos(G(a)))
    };
    n.prototype.tan = function (b, a) {
        b.H(Math.tan(G(a)))
    };
    n.prototype.asin = function (b, a) {
        b.H(Ia(Math.asin(a)))
    };
    n.prototype.acos = function (b, a) {
        b.H(Ia(Math.acos(a)))
    };
    n.prototype.atan = function (b, a) {
        b.H(Ia(Math.atan(a)))
    };
    n.prototype.exp = function (b, a) {
        b.H(Math.exp(a))
    };
    n.prototype.log10 = function (b, a) {
        b.H(Math.log(a) / Math.LN10)
    };
    n.prototype.max = function (b) {
        var a = arguments[1];
        "number" !== typeof a && (a = 0);
        var c, d, e;
        c = 2;
        for (d = arguments.length; c < d; c++) e = arguments[c], "number" === typeof e && a < e && (a = e);
        b.H(a)
    };
    n.prototype.min =
        function (b) {
            var a = arguments[1];
            "number" !== typeof a && (a = 0);
            var c, d, e;
            c = 2;
            for (d = arguments.length; c < d; c++) e = arguments[c], "number" === typeof e && a > e && (a = e);
            b.H(a)
        };
    n.prototype.te = function (b) {
        b.H(this.b.te)
    };
    n.prototype.Bg = function (b) {
        b.H(this.b.Bg)
    };
    n.prototype.time = function (b) {
        b.H(this.b.tc.J)
    };
    n.prototype.Ag = function (b) {
        b.U(this.b.Ag)
    };
    n.prototype.rj = function (b) {
        b.U(this.b.rj)
    };
    n.prototype.Zk = function (b) {
        b.U(this.b.Zk)
    };
    n.prototype.gv = function (b, a) {
        var c, d, e;
        if (this.b.ig.length)
            if (a) {
                d = 0;
                for (e = this.b.ig.length; d < e; d++)
                    if (c = this.b.ig[d], c.name === a) {
                        b.U(c.index);
                        return
                    } b.U(0)
            } else c = this.b.ro(), b.U(c ? c.index : -1);
        else b.U(0)
    };
    n.prototype.n = function (b, a, c, d, e) {
        b.H(Ia(Oa(a, c, d, e)))
    };
    n.prototype.bv = function (b, a, c, d) {
        b.H(Va(a, c, d))
    };
    n.prototype.left = function (b, a, c) {
        b.Eb(ia(a) ? a.substr(0, c) : "")
    };
    n.prototype.right = function (b, a, c) {
        b.Eb(ia(a) ? a.substr(a.length - c) : "")
    };
    n.prototype.replace = function (b, a, c, d) {
        ia(a) && ia(c) && ia(d) ? b.Eb(a.replace(new RegExp(gb(c), "gi"), d)) : b.Eb(ia(a) ? a : "")
    };
    n.prototype.trim = function (b, a) {
        b.Eb(ia(a) ? a.trim() : "")
    };
    n.prototype.Ts = function (b) {
        var a = ra(Math.random() * (arguments.length - 1));
        b.ud(arguments[a + 1])
    };
    n.prototype.qw = function (b, a, c) {
        var d = 0 > a ? "-" : "";
        0 > a && (a = -a);
        c = c - a.toString().length;
        for (var e = 0; e < c; e++) d += "0";
        b.Eb(d + a.toString())
    };
    n.prototype.Ik = function (b) {
        b.H(this.b.Ik / 1E3)
    };
    n.prototype.mw = function (b, a) {
        var c = this.b.Qi(a);
        b.H(c ? c.Ba : 0)
    };
    n.prototype.ow = function (b, a) {
        var c = this.b.Qi(a);
        b.H(c ? c.Ca : 0)
    };
    n.prototype.nw = function (b, a) {
        var c = this.b.Qi(a);
        b.H(c ? c.Ga : 0)
    };
    n.prototype.lw = function (b, a) {
        var c = this.b.Qi(a);
        b.H(c ? c.Fa : 0)
    };
    n.prototype.pf = function (b) {
        b.H(this.b.pf)
    };
    t.C = new n;
    t.Lv = function () {
        var b, a, c, d, e, f, l = this.b.ab();
        b = 0;
        for (c = this.Vb.length; b < c; b++) {
            d = this.Vb[b];
            if (-1 === d.time) {
                if (!d.Am) continue
            } else if (d.time > this.b.tc.J) continue;
            l.Ya = d.Nf;
            l.Wb = d.Wb;
            l.Wa = 0;
            for (a in d.Lb) d.Lb.hasOwnProperty(a) && (e = this.b.B[parseInt(a, 10)].R(), f = d.Lb[a], e.aa = f.Jj, Da(e.e, f.Jd), e = f, F(e.Jd), v.push(e));
            d.Nf.Kv();
            this.b.Gk(d.ga);
            d.Nk = !0
        }
        a = b = 0;
        for (c = this.Vb.length; b < c; b++) d = this.Vb[b], this.Vb[a] = d, d.Nk ? (ab(d.Lb), F(d.ga), u.push(d)) : a++;
        Ca(this.Vb, a)
    }
})();
(function () {
    qb = function (f, b) {
        var n = f[1],
            t = f[3],
            d = f[4],
            c = f[5],
            u = f[6],
            v = f[7],
            h = f[8];
        b.g || (b.g = {});
        b.u || (b.u = {});
        b.C || (b.C = {});
        var a = b.g,
            k = b.u,
            m = b.C;
        t && (a.Vq = function (a, b) {
            return ec(this.x, a, b)
        }, a.yw = function (a, b) {
            return ec(this.y, a, b)
        }, a.cn = function () {
            var a = this.q;
            this.Aa();
            var b = this.Ha;
            return !(b.right < a.Ba || b.bottom < a.Ca || b.left > a.Ga || b.top > a.Fa)
        }, a.Dw = function () {
            this.Aa();
            var a = this.Ha,
                b = this.b.ya;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        }, a.Mw = function (a, b, c) {
            var d = this.R(),
                g = d.Pb();
            if (!g.length) return !1;
            var k = g[0],
                h = k,
                f = Ta(k.x, k.y, b, c),
                m, l, t;
            m = 1;
            for (l = g.length; m < l; m++)
                if (k = g[m], t = Ta(k.x, k.y, b, c), 0 === a && t < f || 1 === a && t > f) f = t, h = k;
            d.qg(h);
            return !0
        }, k.pk = function (a) {
            this.x !== a && (this.x = a, this.ua())
        }, k.qs = function (a) {
            this.y !== a && (this.y = a, this.ua())
        }, k.un = function (a, b) {
            if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.ua()
        }, k.ls = function (a, b) {
            var c = a.qu(this);
            if (c) {
                var d;
                c.fl ? (d = c.fl(b, !0), c = c.fl(b, !1)) : (d = c.x, c = c.y);
                if (this.x !== d || this.y !== c) this.x = d, this.y = c, this.ua()
            }
        }, k.Hw = function (a) {
            0 !== a && (this.x += Math.cos(this.n) * a, this.y += Math.sin(this.n) * a, this.ua())
        }, k.Gw = function (a, b) {
            0 !== b && (this.x += Math.cos(G(a)) * b, this.y += Math.sin(G(a)) * b, this.ua())
        }, m.qk = function (a) {
            a.H(this.x)
        }, m.wn = function (a) {
            a.H(this.y)
        }, m.te = function (a) {
            a.H(this.b.Yg(this))
        });
        d && (a.xw = function (a, b) {
            return ec(this.width, a, b)
        }, a.ww = function (a, b) {
            return ec(this.height, a, b)
        }, k.ps = function (a) {
            this.width !== a && (this.width = a, this.ua())
        }, k.Uw = function (a) {
            this.height !== a && (this.height = a, this.ua())
        }, k.nk = function (a, b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.ua()
        }, m.ki = function (a) {
            a.H(this.width)
        }, m.bn = function (a) {
            a.H(this.height)
        }, m.sw = function (a) {
            this.Aa();
            a.H(this.Ha.left)
        }, m.vw = function (a) {
            this.Aa();
            a.H(this.Ha.top)
        }, m.uw = function (a) {
            this.Aa();
            a.H(this.Ha.right)
        }, m.rw = function (a) {
            this.Aa();
            a.H(this.Ha.bottom)
        });
        c && (a.Iq = function (a, b) {
            return Pa(this.n, G(b)) <= G(a)
        }, a.jr = function (a) {
            return Ra(this.n, G(a))
        }, a.ir = function (a, b) {
            var c = Na(a),
                d = Na(b),
                g = Ka(this.n);
            return Ra(d, c) ? Ra(g, c) && !Ra(g, d) : !(!Ra(g, c) && Ra(g, d))
        }, k.ds = function (a) {
            a = G(Ja(a));
            isNaN(a) || this.n === a || (this.n = a, this.ua())
        }, k.bs = function (a) {
            0 === a || isNaN(a) || (this.n += G(a), this.n = Ka(this.n), this.ua())
        }, k.Ow = function (a) {
            0 === a || isNaN(a) || (this.n -= G(a), this.n = Ka(this.n), this.ua())
        }, k.Pw = function (a, b) {
            var c = Qa(this.n, G(b), G(a));
            isNaN(c) || this.n === c || (this.n = c, this.ua())
        }, k.Qw = function (a, b, c) {
            a = Qa(this.n, Math.atan2(c - this.y, b - this.x), G(a));
            isNaN(a) || this.n === a || (this.n = a, this.ua())
        }, k.Vw = function (a, b) {
            var c = Math.atan2(b - this.y, a - this.x);
            isNaN(c) || this.n === c || (this.n = c, this.ua())
        }, m.Hq = function (a) {
            a.H(Ma(this.n))
        });
        n || (a.fk = function (a, b, c) {
            return ec(this.cb[a], b, c)
        }, a.Bw = function (a) {
            return this.cb[a]
        }, a.Nw = function (a, b) {
            var c = this.R(),
                d = c.Pb();
            if (!d.length) return !1;
            var g = d[0],
                k = g,
                h = g.cb[b],
                f, m, l;
            f = 1;
            for (m = d.length; f < m; f++)
                if (g = d[f], l = g.cb[b], 0 === a && l < h || 1 === a && l > h) h = l, k = g;
            c.qg(k);
            return !0
        }, a.Tr = function (a) {
            var b, c, d, g, k;
            if (this.b.Pi().sl) {
                k = this.R();
                if (k.aa)
                    for (k.aa = !1, F(k.e), F(k.na), d = this.e, b = 0, c = d.length; b < c; b++) g = d[b], g.uid === a ? k.na.push(g) : k.e.push(g);
                else {
                    d = b = 0;
                    for (c = k.e.length; b < c; b++) g = k.e[b], k.e[d] = g, g.uid === a ? k.na.push(g) : d++;
                    Ca(k.e, d)
                }
                this.bd();
                return !!k.e.length
            }
            g = this.b.Zg(a);
            if (!g) return !1;
            k = this.R();
            if (!k.aa && -1 === k.e.indexOf(g)) return !1;
            if (this.I)
                for (a = g.type.Ea, b = 0, c = a.length; b < c; b++) {
                    if (a[b] === this) return k.qg(g), this.bd(), !0
                } else if (g.type === this) return k.qg(g), this.bd(), !0;
            return !1
        }, a.ik = function () {
            return !0
        }, a.xr = function () {
            return !0
        }, k.sn = function (a, b) {
            var c = this.cb;
            ha(c[a]) ? c[a] = ha(b) ? b : parseFloat(b) : ia(c[a]) && (c[a] = ia(b) ? b : b.toString())
        }, k.Fq = function (a, b) {
            var c = this.cb;
            ha(c[a]) ? c[a] = ha(b) ? c[a] + b : c[a] + parseFloat(b) : ia(c[a]) && (c[a] = ia(b) ? c[a] + b : c[a] + b.toString())
        }, k.vs = function (a, b) {
            var c = this.cb;
            ha(c[a]) && (c[a] = ha(b) ? c[a] - b : c[a] - parseFloat(b))
        }, k.Rw = function (a, b) {
            this.cb[a] = b ? 1 : 0
        }, k.Ww = function (a) {
            this.cb[a] = 1 - this.cb[a]
        }, k.$q = function () {
            this.b.ge(this)
        }, k.sr || (k.sr = function (a) {
            var b, c;
            try {
                b = JSON.parse(a)
            } catch (d) {
                return
            }
            this.b.ij(this, b, !0);
            this.ad && this.ad();
            if (this.V)
                for (a = 0, b = this.V.length; a < b; ++a) c = this.V[a], c.ad && c.ad()
        }), m.zw = function (a) {
            var b = a.uf.e.length,
                c, d, g;
            c = 0;
            for (d = this.b.ed.length; c < d; c++) g = this.b.ed[c], a.uf.I ? 0 <= g.type.Ea.indexOf(a.uf) && b++ : g.type === a.uf && b++;
            a.U(b)
        }, m.Wr = function (a) {
            a.U(a.uf.R().Pb().length)
        }, m.zs = function (a) {
            a.U(this.uid)
        }, m.Aw = function (a) {
            a.U(this.ah())
        }, m.Ym || (m.Ym = function (a) {
            a.Eb(JSON.stringify(this.b.vm(this, !0)))
        }));
        u && (a.gk = function () {
            return this.visible
        }, k.ok = function (a) {
            !a !== !this.visible && (this.visible = a, this.b.ca = !0)
        }, a.$m = function (a, b) {
            return ec(mb(100 * this.opacity), a, b)
        }, k.tn = function (a) {
            a = a / 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.b.ca = !0)
        }, m.Opacity = function (a) {
            a.H(mb(100 * this.opacity))
        });
        v && (a.Cw = function (a) {
            return a ? this.q === a : !1
        }, a.Vr = function (a) {
            var b = this.R(),
                c = b.Pb();
            if (!c.length) return !1;
            var d = c[0],
                g = d,
                k, h;
            k = 1;
            for (h = c.length; k < h; k++)
                if (d = c[k], 0 === a) {
                    if (d.q.index > g.q.index || d.q.index === g.q.index && d.jd() > g.jd()) g = d
                } else if (d.q.index < g.q.index || d.q.index === g.q.index && d.jd() < g.jd()) g = d;
            b.qg(g);
            return !0
        }, k.dn = function () {
            var a = this.q,
                b = a.e;
            b.length && b[b.length - 1] === this || (a.sg(this, !1), a.Jg(this, !1), this.b.ca = !0)
        }, k.Iw = function () {
            var a = this.q,
                b = a.e;
            b.length && b[0] === this || (a.sg(this, !1), a.Cv(this), this.b.ca = !0)
        }, k.Jw = function (a) {
            a && a != this.q && (this.q.sg(this, !0), this.q = a, a.Jg(this, !0), this.b.ca = !0)
        }, k.rk = function (a, b) {
            var c = 0 === a;
            if (b) {
                var d = b.to(this);
                d && d.uid !== this.uid && (this.q.index !== d.q.index && (this.q.sg(this, !0), this.q = d.q, d.q.Jg(this, !0)), this.q.lv(this, d, c), this.b.ca = !0)
            }
        }, m.Fw = function (a) {
            a.U(this.q.rp)
        }, m.Ew = function (a) {
            a.Eb(this.q.name)
        }, m.Xw = function (a) {
            a.U(this.jd())
        });
        h && (k.Sw = function (a, b) {
            if (this.b.D) {
                var c = this.type.el(b);
                if (!(0 > c)) {
                    var d = 1 === a;
                    this.ie[c] !== d && (this.ie[c] = d, this.ae(), this.b.ca = !0)
                }
            }
        }, k.Tw = function (a, b, c) {
            if (this.b.D) {
                var d = this.type.el(a);
                0 > d || (a = this.type.O[d], d = this.Ia[d], b = Math.floor(b), 0 > b || b >= d.length || (1 === this.b.D.uu(a.wb, b) && (c /= 100), d[b] !== c && (d[b] = c, a.ob && (this.b.ca = !0))))
            }
        })
    };
    Kb = function () {
        this.Dk = this.xk = !0;
        this.type.In = !0;
        this.b.ca = !0;
        var f, b, n = this.yk;
        f = 0;
        for (b = n.length; f < b; ++f) n[f](this);
        this.q.Zc && this.Aa()
    };
    Lb = function (f) {
        f && this.yk.push(f)
    };
    Nb = function () {
        if (this.xk) {
            var f = this.Ha,
                b = this.Jf;
            f.set(this.x, this.y, this.x + this.width, this.y + this.height);
            f.offset(-this.Hb * this.width, -this.Ib * this.height);
            this.n ? (f.offset(-this.x, -this.y), b.dq(f, this.n), b.offset(this.x, this.y), b.Qn(f)) : b.Mj(f);
            f.normalize();
            this.xk = !1;
            this.hw()
        }
    };
    var f = new wa(0, 0, 0, 0);
    Ob = function () {
        if (this.q.Zc) {
            var l = this.q.kc,
                b = this.Ha;
            f.set(l.mc(b.left), l.nc(b.top), l.mc(b.right), l.nc(b.bottom));
            this.Sb.Gi(f) || (this.Sb.right < this.Sb.left ? l.update(this, null, f) : l.update(this, this.Sb, f), this.Sb.vi(f), this.q.Ud = !0)
        }
    };
    Pb = function () {
        if (this.Dk && this.qe) {
            this.Aa();
            var l = this.type.Hk,
                b = this.Ha;
            f.set(l.mc(b.left), l.nc(b.top), l.mc(b.right), l.nc(b.bottom));
            this.wc.Gi(f) || (this.wc.right < this.wc.left ? l.update(this, null, f) : l.update(this, this.wc, f), this.wc.vi(f), this.Dk = !1)
        }
    };
    Mb = function (f, b) {
        return this.Ha.pc(f, b) && this.Jf.pc(f, b) ? this.dd && !this.dd.Yu() ? (this.dd.Rs(this.width, this.height, this.n), this.dd.pc(f - this.x, b - this.y)) : !0 : !1
    };
    Gb = function () {
        this.type.ak();
        return this.bf
    };
    Qb = function () {
        this.q.Nm();
        return this.$c
    };
    Rb = function () {
        F(this.ma);
        var f, b;
        f = 0;
        for (b = this.ie.length; f < b; f++) this.ie[f] && this.ma.push(this.type.O[f]);
        this.Bq = !!this.ma.length
    };
    Hb = function () {
        return "Inst" + this.Qp
    };
    tb = function (f) {
        if (f && f.Jb && f.type != this) {
            var b, n, t;
            b = 0;
            for (n = f.siblings.length; b < n; b++)
                if (t = f.siblings[b], t.type == this) return t
        }
        f = this.R().Pb();
        return f.length ? f[0] : null
    };
    ub = function (f) {
        var b = this.R().Pb();
        return b.length ? b[f.ah() % b.length] : null
    };
    sb = function () {
        if (this.wg && !this.I) {
            var f, b;
            f = 0;
            for (b = this.e.length; f < b; f++) this.e[f].bf = f;
            var n = f,
                t = this.b.ed;
            f = 0;
            for (b = t.length; f < b; ++f) t[f].type === this && (t[f].bf = n++);
            this.wg = !1
        }
    };
    Eb = function (f) {
        if (f < this.e.length) return this.e[f];
        f -= this.e.length;
        var b = this.b.ed,
            n, t;
        n = 0;
        for (t = b.length; n < t; ++n)
            if (b[n].type === this) {
                if (0 === f) return b[n];
                --f
            } return null
    };
    vb = function () {
        return this.Ie[this.Ed]
    };
    wb = function () {
        this.Ed++;
        this.Ed === this.Ie.length ? this.Ie.push(new rb(this)) : this.Ie[this.Ed].aa = !0
    };
    xb = function () {
        this.Ed++;
        this.Ed === this.Ie.length && this.Ie.push(new rb(this));
        var f = this.Ie[this.Ed],
            b = this.Ie[this.Ed - 1];
        b.aa ? f.aa = !0 : (f.aa = !1, Da(f.e, b.e), Da(f.na, b.na))
    };
    zb = function () {
        this.Ed--
    };
    Ab = function (f) {
        var b, n, t, d, c, u = 0;
        if (!this.I)
            for (b = 0, n = this.Ea.length; b < n; b++)
                for (c = this.Ea[b], t = 0, d = c.Ra.length; t < d; t++) {
                    if (f === c.Ra[t].name) return this.ba.lastBehIndex = u, c.Ra[t];
                    u++
                }
        b = 0;
        for (n = this.Ra.length; b < n; b++) {
            if (f === this.Ra[b].name) return this.ba.lastBehIndex = u, this.Ra[b];
            u++
        }
        return null
    };
    Bb = function (f) {
        return this.Oi(f) ? this.ba.lastBehIndex : -1
    };
    Cb = function (f) {
        var b, n;
        b = 0;
        for (n = this.O.length; b < n; b++)
            if (this.O[b].name === f) return b;
        return -1
    };
    Db = function () {
        if (this.Jb && !this.I) {
            var f, b, n, t, d, c, u;
            this.ak();
            c = this.R();
            var v = c.aa,
                h = (f = this.b.ab()) && f.Ya && f.Ya.Xc;
            f = 0;
            for (b = this.Xb.length; f < b; f++)
                if (d = this.Xb[f], d !== this && (d.ak(), u = d.R(), u.aa = v, !v)) {
                    F(u.e);
                    n = 0;
                    for (t = c.e.length; n < t; ++n) u.e[n] = d.uo(c.e[n].bf);
                    if (h)
                        for (F(u.na), n = 0, t = c.na.length; n < t; ++n) u.na[n] = d.uo(c.na[n].bf)
                }
        }
    };
    Fb = function () {
        return "Type" +
            this.da
    };
    ec = function (f, b, n) {
        if ("undefined" === typeof f || "undefined" === typeof n) return !1;
        switch (b) {
            case 0:
                return f === n;
            case 1:
                return f !== n;
            case 2:
                return f < n;
            case 3:
                return f <= n;
            case 4:
                return f > n;
            case 5:
                return f >= n;
            default:
                return !1
        }
    }
})();
var mc = {};

function pc(f) {
    this.b = f
}
(function () {
    function f() {
        return u.length ? u.pop() : []
    }

    function l(b) {
        var c, a;
        c = 0;
        for (a = b.length; c < a; c++) Array.isArray(b[c]) && l(b[c]);
        F(b);
        u.push(b)
    }

    function b() { }

    function n() { }

    function t() { }
    var d = pc.prototype;
    d.wa = function (b) {
        this.xa = b;
        this.b = b.b
    };
    d.wa.prototype.S = function () { };
    d.la = function (b) {
        this.type = b;
        this.b = b.b
    };
    var c = d.la.prototype,
        u = [];
    Array.isArray || (Array.isArray = function (b) {
        return "[object Array]" === Object.prototype.toString.call(b)
    });
    c.S = function () {
        this.Za = this.F[0];
        this.Ab = this.F[1];
        this.Yb = this.F[2];
        this.jc || (this.Qc = f());
        var b = this.Qc;
        b.length = this.Za;
        var c, a, d;
        for (c = 0; c < this.Za; c++)
            for (b[c] || (b[c] = f()), b[c].length = this.Ab, a = 0; a < this.Ab; a++)
                for (b[c][a] || (b[c][a] = f()), b[c][a].length = this.Yb, d = 0; d < this.Yb; d++) b[c][a][d] = 0;
        this.$b = [];
        this.gd = [];
        this.We = [];
        this.Bc = -1
    };
    c.Be = function () {
        var b;
        for (b = 0; b < this.Za; b++) l(this.Qc[b]);
        F(this.Qc)
    };
    c.wk = function (b, c, a) {
        b = Math.floor(b);
        c = Math.floor(c);
        a = Math.floor(a);
        return isNaN(b) || 0 > b || b > this.Za - 1 || isNaN(c) || 0 > c || c > this.Ab - 1 || isNaN(a) || 0 > a || a > this.Yb -
            1 ? 0 : this.Qc[b][c][a]
    };
    c.set = function (b, c, a, d) {
        b = Math.floor(b);
        c = Math.floor(c);
        a = Math.floor(a);
        isNaN(b) || 0 > b || b > this.Za - 1 || isNaN(c) || 0 > c || c > this.Ab - 1 || isNaN(a) || 0 > a || a > this.Yb - 1 || (this.Qc[b][c][a] = d)
    };
    c.ju = function () {
        return JSON.stringify({
            c2array: !0,
            size: [this.Za, this.Ab, this.Yb],
            data: this.Qc
        })
    };
    c.nb = function () {
        return {
            size: [this.Za, this.Ab, this.Yb],
            data: this.Qc
        }
    };
    c.Cb = function (b) {
        var c = b.size;
        this.Za = c[0];
        this.Ab = c[1];
        this.Yb = c[2];
        this.Qc = b.data
    };
    c.Ge = function (b, c, a) {
        0 > b && (b = 0);
        0 > c && (c = 0);
        0 > a && (a = 0);
        if (this.Za !== b || this.Ab !== c || this.Yb !== a) {
            this.Za = b;
            this.Ab = c;
            this.Yb = a;
            var d, m, e = this.Qc;
            e.length = b;
            for (b = 0; b < this.Za; b++)
                for (ga(e[b]) && (e[b] = f()), e[b].length = c, d = 0; d < this.Ab; d++)
                    for (ga(e[b][d]) && (e[b][d] = f()), e[b][d].length = a, m = 0; m < this.Yb; m++) ga(e[b][d][m]) && (e[b][d][m] = 0)
        }
    };
    c.lu = function () {
        return 0 <= this.Bc && this.Bc < this.$b.length ? this.$b[this.Bc] : 0
    };
    c.Lg = function () {
        return 0 <= this.Bc && this.Bc < this.gd.length ? this.gd[this.Bc] : 0
    };
    c.eo = function () {
        return 0 <= this.Bc && this.Bc < this.We.length ? this.We[this.Bc] : 0
    };
    b.prototype.Vq = function (b, c, a) {
        return ec(this.wk(b, 0, 0), c, a)
    };
    c.Pk = function (b) {
        this.b.wf(b.ga);
        b.yf();
        this.b.qd(b.ga)
    };
    b.prototype.Lq = function (b) {
        var c = this.b.ab().Ya;
        this.Bc++;
        var a = this.Bc;
        a === this.$b.length ? (this.$b.push(0), this.gd.push(0), this.We.push(0)) : (this.$b[a] = 0, this.gd[a] = 0, this.We[a] = 0);
        switch (b) {
            case 0:
                for (this.$b[a] = 0; this.$b[a] < this.Za; this.$b[a]++)
                    for (this.gd[a] = 0; this.gd[a] < this.Ab; this.gd[a]++)
                        for (this.We[a] = 0; this.We[a] < this.Yb; this.We[a]++) this.Pk(c);
                break;
            case 1:
                for (this.$b[a] = 0; this.$b[a] < this.Za; this.$b[a]++)
                    for (this.gd[a] = 0; this.gd[a] < this.Ab; this.gd[a]++) this.Pk(c);
                break;
            case 2:
                for (this.$b[a] = 0; this.$b[a] < this.Za; this.$b[a]++) this.Pk(c)
        }
        this.Bc--;
        return !1
    };
    d.g = new b;
    n.prototype.Oq = function () {
        var b, c, a;
        for (b = 0; b < this.Za; b++)
            for (c = 0; c < this.Ab; c++)
                for (a = 0; a < this.Yb; a++) this.Qc[b][c][a] = 0
    };
    n.prototype.nk = function (b, c, a) {
        this.Ge(b, c, a)
    };
    n.prototype.pk = function (b, c) {
        this.set(b, 0, 0, c)
    };
    n.prototype.Zq = function (b, c) {
        var a = 0,
            d = 0;
        b = Math.floor(b);
        var f = this.Qc;
        if (!(0 > b)) switch (c) {
            case 0:
                if (b >= this.Za) break;
                l(f[b]);
                f.splice(b, 1);
                this.Za--;
                break;
            case 1:
                if (b >= this.Ab) break;
                for (; a < this.Za; a++) l(f[a][b]), f[a].splice(b, 1);
                this.Ab--;
                break;
            case 2:
                if (b >= this.Yb) break;
                for (; a < this.Za; a++)
                    for (d = 0; d < this.Ab; d++) f[a][d].splice(b, 1);
                this.Yb--
        }
    };
    d.u = new n;
    t.prototype.Mq = function (b, c, a, d) {
        b.ud(this.wk(c, a || 0, d || 0))
    };
    t.prototype.ki = function (b) {
        b.U(this.Za)
    };
    t.prototype.bn = function (b) {
        b.U(this.Ab)
    };
    t.prototype.Yq = function (b) {
        b.U(this.lu())
    };
    t.prototype.Ym = function (b) {
        b.Eb(this.ju())
    };
    d.C = new t
})();

function qc(f) {
    this.b = f
}
(function () {
    function f(a) {
        0 > a && (a = 0);
        1 < a && (a = 1);
        return Math.log(a) / Math.log(10) * 20
    }

    function l(a) {
        a = a.toLowerCase();
        return Y.hasOwnProperty(a) && Y[a].length ? Y[a][0].rc() : B.destination
    }

    function b() {
        return B.createGain ? B.createGain() : B.createGainNode()
    }

    function n(a) {
        return B.createDelay ? B.createDelay(a) : B.createDelayNode(a)
    }

    function t(a) {
        a.start ? a.start(0) : a.noteOn(0)
    }

    function d(a, b, c) {
        a.start ? a.start(0, b) : a.noteGrainOn(0, b, c - b)
    }

    function c(a) {
        try {
            a.stop ? a.stop(0) : a.noteOff(0)
        } catch (b) { }
    }

    function u(a,
        c, e, d, f, g) {
        this.type = "filter";
        this.eb = [a, c, e, d, f, g];
        this.fa = b();
        this.N = b();
        this.N.gain.value = g;
        this.L = b();
        this.L.gain.value = 1 - g;
        this.Sa = B.createBiquadFilter();
        this.Sa.type = "number" === typeof this.Sa.type ? a : Ac[a];
        this.Sa.frequency.value = c;
        this.Sa.detune && (this.Sa.detune.value = e);
        this.Sa.Q.value = d;
        this.Sa.gain.value = f;
        this.fa.connect(this.Sa);
        this.fa.connect(this.L);
        this.Sa.connect(this.N)
    }

    function v(a, c, e) {
        this.type = "delay";
        this.eb = [a, c, e];
        this.fa = b();
        this.N = b();
        this.N.gain.value = e;
        this.L = b();
        this.L.gain.value = 1 - e;
        this.Eh = b();
        this.Ac = n(a);
        this.Ac.delayTime.value = a;
        this.Di = b();
        this.Di.gain.value = c;
        this.fa.connect(this.Eh);
        this.fa.connect(this.L);
        this.Eh.connect(this.N);
        this.Eh.connect(this.Ac);
        this.Ac.connect(this.Di);
        this.Di.connect(this.Eh)
    }

    function h(a, c, e, d) {
        this.type = "convolve";
        this.eb = [c, e, d];
        this.fa = b();
        this.N = b();
        this.N.gain.value = e;
        this.L = b();
        this.L.gain.value = 1 - e;
        this.Qe = B.createConvolver();
        a && (this.Qe.normalize = c, this.Qe.buffer = a);
        this.fa.connect(this.Qe);
        this.fa.connect(this.L);
        this.Qe.connect(this.N)
    }

    function a(a, c, e, d, f) {
        this.type = "flanger";
        this.eb = [a, c, e, d, f];
        this.fa = b();
        this.L = b();
        this.L.gain.value = 1 - f / 2;
        this.N = b();
        this.N.gain.value = f / 2;
        this.Ki = b();
        this.Ki.gain.value = d;
        this.Ac = n(a + c);
        this.Ac.delayTime.value = a;
        this.lb = B.createOscillator();
        this.lb.frequency.value = e;
        this.ic = b();
        this.ic.gain.value = c;
        this.fa.connect(this.Ac);
        this.fa.connect(this.L);
        this.Ac.connect(this.N);
        this.Ac.connect(this.Ki);
        this.Ki.connect(this.Ac);
        this.lb.connect(this.ic);
        this.ic.connect(this.Ac.delayTime);
        t(this.lb)
    }

    function k(a, c, e, d, f, g) {
        this.type = "phaser";
        this.eb = [a, c, e, d, f, g];
        this.fa = b();
        this.L = b();
        this.L.gain.value = 1 - g / 2;
        this.N = b();
        this.N.gain.value = g / 2;
        this.Sa = B.createBiquadFilter();
        this.Sa.type = "number" === typeof this.Sa.type ? 7 : "allpass";
        this.Sa.frequency.value = a;
        this.Sa.detune && (this.Sa.detune.value = c);
        this.Sa.Q.value = e;
        this.lb = B.createOscillator();
        this.lb.frequency.value = f;
        this.ic = b();
        this.ic.gain.value = d;
        this.fa.connect(this.Sa);
        this.fa.connect(this.L);
        this.Sa.connect(this.N);
        this.lb.connect(this.ic);
        this.ic.connect(this.Sa.frequency);
        t(this.lb)
    }

    function m(a) {
        this.type = "gain";
        this.eb = [a];
        this.ka = b();
        this.ka.gain.value = a
    }

    function e(a, c) {
        this.type = "tremolo";
        this.eb = [a, c];
        this.ka = b();
        this.ka.gain.value = 1 - c / 2;
        this.lb = B.createOscillator();
        this.lb.frequency.value = a;
        this.ic = b();
        this.ic.gain.value = c / 2;
        this.lb.connect(this.ic);
        this.ic.connect(this.ka.gain);
        t(this.lb)
    }

    function q(a, c) {
        this.type = "ringmod";
        this.eb = [a, c];
        this.fa = b();
        this.N = b();
        this.N.gain.value = c;
        this.L = b();
        this.L.gain.value = 1 - c;
        this.Rh = b();
        this.Rh.gain.value = 0;
        this.lb = B.createOscillator();
        this.lb.frequency.value = a;
        this.lb.connect(this.Rh.gain);
        t(this.lb);
        this.fa.connect(this.Rh);
        this.fa.connect(this.L);
        this.Rh.connect(this.N)
    }

    function x(a, c, e, d, f) {
        this.type = "distortion";
        this.eb = [a, c, e, d, f];
        this.fa = b();
        this.Bj = b();
        this.Aj = b();
        this.Sv(e, Math.pow(10, d / 20));
        this.N = b();
        this.N.gain.value = f;
        this.L = b();
        this.L.gain.value = 1 - f;
        this.ek = B.createWaveShaper();
        this.Bi = new Float32Array(65536);
        this.hu(a, c);
        this.ek.Bi = this.Bi;
        this.fa.connect(this.Bj);
        this.fa.connect(this.L);
        this.Bj.connect(this.ek);
        this.ek.connect(this.Aj);
        this.Aj.connect(this.N)
    }

    function r(a, b, c, e, d) {
        this.type = "compressor";
        this.eb = [a, b, c, e, d];
        this.ka = B.createDynamicsCompressor();
        try {
            this.ka.threshold.value = a, this.ka.knee.value = b, this.ka.ratio.value = c, this.ka.attack.value = e, this.ka.release.value = d
        } catch (f) { }
    }

    function g(a, b) {
        this.type = "analyser";
        this.eb = [a, b];
        this.ka = B.createAnalyser();
        this.ka.fftSize = a;
        this.ka.smoothingTimeConstant = b;
        this.fu = new Float32Array(this.ka.frequencyBinCount);
        this.hq = new Uint8Array(a);
        this.Lh = 0
    }

    function p() {
        this.M = null;
        this.kj = 0;
        this.Je = [];
        this.Ul = this.cj = this.bj = 0
    }

    function O(a, c) {
        this.src = a;
        this.Z = D;
        this.Vc = c;
        this.mi = !1;
        var e = this;
        this.Sl = this.fm = null;
        this.pg = [];
        this.Kj = 0;
        this.Rm = this.Vk = this.mq = this.vj = !1;
        1 === D && c && (this.Z = 0, this.fm = b());
        this.Oe = this.qa = null;
        var d;
        switch (this.Z) {
            case 0:
                this.qa = new Audio;
                this.qa.crossOrigin = "anonymous";
                this.qa.addEventListener("canplaythrough", function () {
                    e.Rm = !0
                });
                1 === D && B.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.mq = !0, this.qa.addEventListener("canplay", function () {
                    e.Sl || (e.Sl = B.createMediaElementSource(e.qa), e.Sl.connect(e.fm))
                }));
                this.qa.autoplay = !1;
                this.qa.cx = "auto";
                this.qa.src = a;
                break;
            case 1:
                d = new XMLHttpRequest;
                d.open("GET", a, !0);
                d.responseType = "arraybuffer";
                d.onload = function () {
                    e.Oe = d.response;
                    e.Ys()
                };
                d.onerror = function () {
                    e.Vk = !0
                };
                d.send();
                break;
            case 2:
                this.qa = !0;
                break;
            case 3:
                this.qa = !0
        }
    }

    function y(a, c) {
        var e = this;
        this.tag = c;
        this.Qa = this.Id = !0;
        this.src = a.src;
        this.buffer = a;
        this.Z = D;
        this.Vc = a.Vc;
        this.playbackRate = 1;
        this.Uf = !0;
        this.fc = this.Vd = !1;
        this.Tb = 0;
        this.nh = this.$f = this.ld = !1;
        this.volume = 1;
        this.dm = function () {
            e.fc || this !== e.li || (e.Uf = !0, e.Qa = !0, Q = e.tag, w.trigger(qc.prototype.g.ii, H))
        };
        this.li = null;
        this.Yf = 1 === T && !this.Vc || 2 === T;
        this.kg = 1;
        this.startTime = this.Yf ? w.tc.J : w.be.J;
        this.Na = this.$a = null;
        this.md = !1;
        this.Ka = null;
        this.Fp = this.Ep = this.Dp = this.Cp = this.Hp = this.Gp = 0;
        this.k = null;
        var d = !1;
        1 !== this.Z || 0 !== this.buffer.Z || this.buffer.mq || (this.Z = 0);
        switch (this.Z) {
            case 0:
                this.Vc ? (this.k = a.qa, d = !a.mi, a.mi = !0) : (this.k = new Audio, this.k.crossOrigin = "anonymous", this.k.autoplay = !1, this.k.src = a.qa.src, d = !0);
                d && this.k.addEventListener("ended", function () {
                    Q = e.tag;
                    e.Qa = !0;
                    w.trigger(qc.prototype.g.ii, H)
                });
                break;
            case 1:
                this.$a = b();
                this.$a.connect(l(c));
                1 === this.buffer.Z ? a.qa && (this.k = B.createBufferSource(), this.k.buffer = a.qa, this.k.connect(this.$a)) : (this.k = this.buffer.qa, this.buffer.fm.connect(this.$a), this.buffer.mi || (this.buffer.mi = !0, this.buffer.qa.addEventListener("ended", function () {
                    Q = e.tag;
                    e.Qa = !0;
                    w.trigger(qc.prototype.g.ii, H)
                })));
                break;
            case 2:
                this.k = new window.Media(L + this.src, null, null, function (a) {
                    a === window.Media.MEDIA_STOPPED && (e.Uf = !0, e.Qa = !0, Q = e.tag, w.trigger(qc.prototype.g.ii, H))
                });
                break;
            case 3:
                this.k = !0
        }
    }

    function P(a) {
        F(Ea);
        if (a.length) {
            var b, c, e;
            b = 0;
            for (c = E.length; b < c; b++) e = E[b], nb(a, e.tag) && Ea.push(e)
        } else z && !z.Tf() && (F(Ea), Ea[0] = z)
    }

    function R(a, b) {
        Y.hasOwnProperty(a) ? Y[a].push(b) : Y[a] = [b];
        var c, e, d, f, g = B.destination;
        if (Y.hasOwnProperty(a) && (d = Y[a], d.length))
            for (g = d[0].rc(), c = 0, e = d.length; c < e; c++) f = d[c], c + 1 === e ? f.xc(B.destination) : f.xc(d[c + 1].rc());
        P(a);
        c = 0;
        for (e = Ea.length; c < e; c++) Ea[c].Gv(g);
        La && yb === a && (La.disconnect(), La.connect(g))
    }

    function X() { }

    function M() { }
    var C = qc.prototype;
    C.wa = function (a) {
        this.xa = a;
        this.b = a.b
    };
    C.wa.prototype.S = function () { };
    var w = null,
        H = null,
        Q = "",
        L = "",
        D = 0,
        B = null,
        U = [],
        E = [],
        z = null,
        A = !1,
        T = 0,
        I = !1,
        K = 1,
        J = 0,
        ja = 0,
        S = 1,
        ta = 1,
        la = 10,
        Aa = 1E4,
        Ba = 1,
        La = null,
        yb = "",
        Xa = !1,
        Ya = [],
        Y = {},
        Ac = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
    u.prototype.xc = function (a) {
        this.N.disconnect();
        this.N.connect(a);
        this.L.disconnect();
        this.L.connect(a)
    };
    u.prototype.remove = function () {
        this.fa.disconnect();
        this.Sa.disconnect();
        this.N.disconnect();
        this.L.disconnect()
    };
    u.prototype.rc = function () {
        return this.fa
    };
    v.prototype.xc = function (a) {
        this.N.disconnect();
        this.N.connect(a);
        this.L.disconnect();
        this.L.connect(a)
    };
    v.prototype.remove = function () {
        this.fa.disconnect();
        this.Eh.disconnect();
        this.Ac.disconnect();
        this.Di.disconnect();
        this.N.disconnect();
        this.L.disconnect()
    };
    v.prototype.rc = function () {
        return this.fa
    };
    h.prototype.xc = function (a) {
        this.N.disconnect();
        this.N.connect(a);
        this.L.disconnect();
        this.L.connect(a)
    };
    h.prototype.remove = function () {
        this.fa.disconnect();
        this.Qe.disconnect();
        this.N.disconnect();
        this.L.disconnect()
    };
    h.prototype.rc = function () {
        return this.fa
    };
    a.prototype.xc = function (a) {
        this.L.disconnect();
        this.L.connect(a);
        this.N.disconnect();
        this.N.connect(a)
    };
    a.prototype.remove = function () {
        this.fa.disconnect();
        this.Ac.disconnect();
        this.lb.disconnect();
        this.ic.disconnect();
        this.L.disconnect();
        this.N.disconnect();
        this.Ki.disconnect()
    };
    a.prototype.rc = function () {
        return this.fa
    };
    k.prototype.xc = function (a) {
        this.L.disconnect();
        this.L.connect(a);
        this.N.disconnect();
        this.N.connect(a)
    };
    k.prototype.remove = function () {
        this.fa.disconnect();
        this.Sa.disconnect();
        this.lb.disconnect();
        this.ic.disconnect();
        this.L.disconnect();
        this.N.disconnect()
    };
    k.prototype.rc = function () {
        return this.fa
    };
    m.prototype.xc = function (a) {
        this.ka.disconnect();
        this.ka.connect(a)
    };
    m.prototype.remove = function () {
        this.ka.disconnect()
    };
    m.prototype.rc = function () {
        return this.ka
    };
    e.prototype.xc = function (a) {
        this.ka.disconnect();
        this.ka.connect(a)
    };
    e.prototype.remove = function () {
        this.lb.disconnect();
        this.ic.disconnect();
        this.ka.disconnect()
    };
    e.prototype.rc = function () {
        return this.ka
    };
    q.prototype.xc = function (a) {
        this.N.disconnect();
        this.N.connect(a);
        this.L.disconnect();
        this.L.connect(a)
    };
    q.prototype.remove = function () {
        this.lb.disconnect();
        this.Rh.disconnect();
        this.fa.disconnect();
        this.N.disconnect();
        this.L.disconnect()
    };
    q.prototype.rc = function () {
        return this.fa
    };
    x.prototype.Sv = function (a, b) {
        .01 > a && (a = .01);
        this.Bj.gain.value = a;
        this.Aj.gain.value = Math.pow(1 / a, .6) * b
    };
    x.prototype.shape = function (a, b, c) {
        var e = 1.05 * c * b - b;
        c = 0 > a ? -1 : 1;
        a = 0 > a ? -a : a;
        b = a < b ? a : b + e * (1 - Math.exp(-(1 / e) * (a - b)));
        return b * c
    };
    x.prototype.hu = function (a, b) {
        for (var c = Math.pow(10, a / 20), e = Math.pow(10, b / 20), d = 0, f = 0; 32768 > f; ++f) d = f / 32768, d = this.shape(d, c, e), this.Bi[32768 + f] = d, this.Bi[32768 - f - 1] = -d
    };
    x.prototype.xc = function (a) {
        this.N.disconnect();
        this.N.connect(a);
        this.L.disconnect();
        this.L.connect(a)
    };
    x.prototype.remove = function () {
        this.fa.disconnect();
        this.Bj.disconnect();
        this.ek.disconnect();
        this.Aj.disconnect();
        this.N.disconnect();
        this.L.disconnect()
    };
    x.prototype.rc = function () {
        return this.fa
    };
    r.prototype.xc = function (a) {
        this.ka.disconnect();
        this.ka.connect(a)
    };
    r.prototype.remove = function () {
        this.ka.disconnect()
    };
    r.prototype.rc = function () {
        return this.ka
    };
    g.prototype.gb = function () {
        this.ka.getFloatFrequencyData(this.fu);
        this.ka.getByteTimeDomainData(this.hq);
        for (var a = this.ka.fftSize, b = 0, c = this.Lh = 0, e = 0; b < a; b++) e = (this.hq[b] - 128) / 128, 0 > e && (e = -e),
            this.Lh < e && (this.Lh = e), c += e * e;
        this.Lh = f(this.Lh);
        f(Math.sqrt(c / a))
    };
    g.prototype.xc = function (a) {
        this.ka.disconnect();
        this.ka.connect(a)
    };
    g.prototype.remove = function () {
        this.ka.disconnect()
    };
    g.prototype.rc = function () {
        return this.ka
    };
    p.prototype.Sh = function (a) {
        if (this.M = a) this.bj = this.M.x, this.cj = this.M.y;
        F(this.Je)
    };
    p.prototype.Vi = function () {
        return !!this.M
    };
    p.prototype.gb = function (a) {
        this.M && 0 !== a && (this.Ul = Oa(this.bj, this.cj, this.M.x, this.M.y), a = Ta(this.bj, this.cj, this.M.x, this.M.y) / a, 4 > this.Je.length ||
            this.Je.shift(), this.Je.push(a), this.bj = this.M.x, this.cj = this.M.y)
    };
    p.prototype.yo = function () {
        if (!this.Je.length) return 0;
        var a, b, c = 0;
        a = 0;
        for (b = this.Je.length; a < b; a++) c += this.Je[a];
        return c / this.Je.length
    };
    p.prototype.il = function () {
        return Math.cos(this.Ul) * this.yo()
    };
    p.prototype.jl = function () {
        return Math.sin(this.Ul) * this.yo()
    };
    var xc = !1;
    O.prototype.Ys = function () {
        if (!this.qa && this.Oe) {
            var a = this;
            if (B.decodeAudioData) B.decodeAudioData(this.Oe, function (b) {
                a.qa = b;
                a.Oe = null;
                var c, e, d;
                if (ga(a.xj) || I) ga(a.ti) || (c = a.ti.Qe, c.normalize = a.qp, c.buffer = b);
                else if (a.pg.length) {
                    c = 0;
                    for (e = a.pg.length; c < e; c++) {
                        b = a.pg[c];
                        d = new y(a, b.oq);
                        d.ym(!0);
                        if ("undefined" !== typeof b.sp && (b.M = w.Zg(b.sp), !b.M)) continue;
                        if (b.M) {
                            var f = Sa(b.M.x, b.M.y, -b.M.q.hb(), J, ja, !0),
                                g = Sa(b.M.x, b.M.y, -b.M.q.hb(), J, ja, !1);
                            d.xm(f, g, Ia(b.M.n - b.M.q.hb()), b.nl, b.Wl, b.Zl);
                            d.Sh(b.M)
                        } else d.xm(b.x, b.y, b.Es, b.nl, b.Wl, b.Zl);
                        d.play(a.Pl, a.Pm, a.Kj);
                        a.vj && d.pause();
                        E.push(d)
                    }
                    F(a.pg)
                } else d = new y(a, a.xj || ""), d.play(a.Pl, a.Pm, a.Kj), a.vj && d.pause(), E.push(d)
            }, function () {
                a.Vk = !0
            });
            else if (this.qa = B.createBuffer(this.Oe, !1), this.Oe = null, ga(this.xj) || I) ga(this.ti) || (b = this.ti.Qe, b.normalize = this.qp, b.buffer = this.qa);
            else {
                var b = new y(this, this.xj);
                b.play(this.Pl, this.Pm, this.Kj);
                this.vj && b.pause();
                E.push(b)
            }
        }
    };
    O.prototype.Jo = function () {
        switch (this.Z) {
            case 0:
                var a = 4 <= this.qa.readyState;
                a && (this.Rm = !0);
                return a || this.Rm;
            case 1:
                return !!this.Oe || !!this.qa;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    O.prototype.Tu = function () {
        switch (this.Z) {
            case 0:
                return this.Jo();
            case 1:
                return !!this.qa;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    O.prototype.Lu = function () {
        switch (this.Z) {
            case 0:
                return !!this.qa.error;
            case 1:
                return this.Vk
        }
        return !1
    };
    y.prototype.Tf = function () {
        switch (this.Z) {
            case 0:
                return this.k.ended;
            case 1:
                return 1 === this.buffer.Z ? !this.Id && !this.Qa && this.k.loop || this.fc ? !1 : this.Uf : this.k.ended;
            case 2:
                return this.Uf;
            case 3:
                !0
        }
        return !0
    };
    y.prototype.Ss = function () {
        return this.Id || this.Qa ? !0 : this.Tf()
    };
    y.prototype.ym = function (a) {
        1 === D && (!this.md && a ? this.$a && (this.Na || (this.Na = B.createPanner(), this.Na.panningModel = "number" === typeof this.Na.panningModel ? S : ["equalpower", "HRTF", "soundfield"][S], this.Na.distanceModel = "number" === typeof this.Na.distanceModel ? ta : ["linear", "inverse", "exponential"][ta], this.Na.refDistance = la, this.Na.maxDistance = Aa, this.Na.rolloffFactor = Ba), this.$a.disconnect(), this.$a.connect(this.Na), this.Na.connect(l(this.tag)), this.md = !0) : this.md && !a && this.$a && (this.Na.disconnect(), this.$a.disconnect(), this.$a.connect(l(this.tag)), this.md = !1))
    };
    y.prototype.xm = function (a, b, c, e, d, f) {
        this.md && 1 === D && (this.Na.setPosition(a, b, 0), this.Na.setOrientation(Math.cos(G(c)), Math.sin(G(c)), 0), this.Na.coneInnerAngle = e, this.Na.coneOuterAngle = d, this.Na.coneOuterGain = f, this.Gp = a, this.Hp = b, this.Cp = c, this.Dp = e, this.Ep = d, this.Fp = f)
    };
    y.prototype.Sh = function (a) {
        this.md && 1 === D && (this.Ka || (this.Ka = new p), this.Ka.Sh(a))
    };
    y.prototype.gb = function (a) {
        if (this.md && 1 === D && this.Ka && this.Ka.Vi() && this.gf()) {
            this.Ka.gb(a);
            a = this.Ka.M;
            var b = Sa(a.x, a.y, -a.q.hb(), J, ja, !0),
                c = Sa(a.x, a.y, -a.q.hb(), J, ja, !1);
            this.Na.setPosition(b, c, 0);
            b = 0;
            "undefined" !== typeof this.Ka.M.n && (b = a.n - a.q.hb(), this.Na.setOrientation(Math.cos(b), Math.sin(b), 0));
            b = Sa(this.Ka.il(), this.Ka.jl(), -a.q.hb(), 0, 0, !0);
            c = Sa(this.Ka.il(), this.Ka.jl(), -a.q.hb(), 0, 0, !1);
            this.Na.setVelocity(b, c, 0)
        }
    };
    y.prototype.play = function (a, b, c) {
        var e = this.k;
        this.ld = a;
        this.volume = b;
        c = c || 0;
        switch (this.Z) {
            case 0:
                1 !== e.playbackRate && (e.playbackRate = 1);
                e.volume !== b * K && (e.volume = b * K);
                e.loop !== a && (e.loop = a);
                e.muted && (e.muted = !1);
                if (e.currentTime !== c) try {
                    e.currentTime = c
                } catch (f) { }
                if (this.Vc && Xa && !w.ec) Ya.push(this);
                else try {
                    this.k.play()
                } catch (g) {
                    console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", g)
                }
                break;
            case 1:
                this.muted = !1;
                this.kg = 1;
                if (1 === this.buffer.Z) this.$a.gain.value = b * K, this.Id || (this.k = B.createBufferSource(), this.k.buffer = this.buffer.qa, this.k.connect(this.$a)), this.k.onended = this.dm, this.li = this.k, this.k.loop = a, this.Uf = !1, 0 === c ? t(this.k) : d(this.k, c, this.Ye());
                else {
                    1 !== e.playbackRate && (e.playbackRate = 1);
                    e.loop !== a && (e.loop = a);
                    e.volume = b * K;
                    if (e.currentTime !== c) try {
                        e.currentTime = c
                    } catch (k) { }
                    this.Vc && Xa && !w.ec ? Ya.push(this) : e.play()
                }
                break;
            case 2:
                (!this.Id && this.Qa || 0 !== c) && e.seekTo(c);
                e.play();
                this.Uf = !1;
                break;
            case 3:
                w.ub ? AppMobi.context.playSound(this.src, a) : AppMobi.player.playSound(this.src, a)
        }
        this.playbackRate = 1;
        this.startTime = (this.Yf ? w.tc.J : w.be.J) - c;
        this.fc = this.Qa = this.Id = !1
    };
    y.prototype.stop = function () {
        switch (this.Z) {
            case 0:
                this.k.paused || this.k.pause();
                break;
            case 1:
                1 === this.buffer.Z ? c(this.k) : this.k.paused || this.k.pause();
                break;
            case 2:
                this.k.stop();
                break;
            case 3:
                w.ub && AppMobi.context.stopSound(this.src)
        }
        this.Qa = !0;
        this.fc = !1
    };
    y.prototype.pause = function () {
        if (!(this.Id || this.Qa || this.Tf() || this.fc)) {
            switch (this.Z) {
                case 0:
                    this.k.paused || this.k.pause();
                    break;
                case 1:
                    1 === this.buffer.Z ? (this.Tb = this.gl(), this.ld && (this.Tb = this.Tb % this.Ye()), this.fc = !0, c(this.k)) : this.k.paused || this.k.pause();
                    break;
                case 2:
                    this.k.pause();
                    break;
                case 3:
                    w.ub && AppMobi.context.stopSound(this.src)
            }
            this.fc = !0
        }
    };
    y.prototype.Jv = function () {
        if (!(this.Id || this.Qa || this.Tf()) && this.fc) {
            switch (this.Z) {
                case 0:
                    this.k.play();
                    break;
                case 1:
                    1 === this.buffer.Z ? (this.k = B.createBufferSource(), this.k.buffer = this.buffer.qa, this.k.connect(this.$a), this.k.onended = this.dm, this.li = this.k, this.k.loop = this.ld, this.$a.gain.value = K * this.volume * this.kg, this.startTime = (this.Yf ? w.tc.J : w.be.J) - this.Tb, d(this.k, this.Tb, this.Ye())) : this.k.play();
                    break;
                case 2:
                    this.k.play();
                    break;
                case 3:
                    w.ub && AppMobi.context.resumeSound(this.src)
            }
            this.fc = !1
        }
    };
    y.prototype.seek = function (a) {
        if (!(this.Id || this.Qa || this.Tf())) switch (this.Z) {
            case 0:
                try {
                    this.k.currentTime = a
                } catch (b) { }
                break;
            case 1:
                if (1 === this.buffer.Z) this.fc ? this.Tb = a : (this.pause(), this.Tb = a, this.Jv());
                else try {
                    this.k.currentTime = a
                } catch (c) { }
                break;
            case 3:
                w.ub && AppMobi.context.seekSound(this.src, a)
        }
    };
    y.prototype.Gv = function (a) {
        1 === this.Z && (this.md ? (this.Na.disconnect(), this.Na.connect(a)) : (this.$a.disconnect(), this.$a.connect(a)))
    };
    y.prototype.Ye = function () {
        switch (this.Z) {
            case 0:
                if ("undefined" !== typeof this.k.duration) return this.k.duration;
                break;
            case 1:
                return this.buffer.qa.duration;
            case 2:
                return this.k.getDuration();
            case 3:
                if (w.ub) return AppMobi.context.getDurationSound(this.src)
        }
        return 0
    };
    y.prototype.gl = function () {
        var a = this.Ye(),
            b = 0;
        switch (this.Z) {
            case 0:
                "undefined" !== typeof this.k.currentTime && (b = this.k.currentTime);
                break;
            case 1:
                if (1 === this.buffer.Z) {
                    if (this.fc) return this.Tb;
                    b = (this.Yf ? w.tc.J : w.be.J) - this.startTime
                } else "undefined" !== typeof this.k.currentTime && (b = this.k.currentTime);
                break;
            case 3:
                w.ub && (b = AppMobi.context.getPlaybackTimeSound(this.src))
        }!this.ld && b > a && (b = a);
        return b
    };
    y.prototype.gf = function () {
        return !this.fc && !this.Id && !this.Qa && !this.Tf()
    };
    y.prototype.fw = function () {
        var a = this.volume * K;
        isFinite(a) || (a = 0);
        switch (this.Z) {
            case 0:
                "undefined" !== typeof this.k.volume && this.k.volume !== a && (this.k.volume = a);
                break;
            case 1:
                1 === this.buffer.Z ? this.$a.gain.value = a * this.kg : "undefined" !== typeof this.k.volume && this.k.volume !== a && (this.k.volume = a)
        }
    };
    y.prototype.Fi = function (a) {
        switch (this.Z) {
            case 0:
                this.k.muted !== !!a && (this.k.muted = !!a);
                break;
            case 1:
                1 === this.buffer.Z ? (this.kg = a ? 0 : 1, this.$a.gain.value = K * this.volume * this.kg) : this.k.muted !== !!a && (this.k.muted = !!a)
        }
    };
    y.prototype.Uv = function () {
        this.$f = !0;
        this.Fi(this.$f || this.nh)
    };
    y.prototype.bq = function (a) {
        this.nh = !!a;
        this.Fi(this.$f || this.nh)
    };
    y.prototype.Aq = function () {
        var a = this.playbackRate;
        this.Yf && (a *= w.Bg);
        switch (this.Z) {
            case 0:
                this.k.playbackRate !== a && (this.k.playbackRate = a);
                break;
            case 1:
                1 === this.buffer.Z ? this.k.playbackRate.value !== a && (this.k.playbackRate.value = a) : this.k.playbackRate !== a && (this.k.playbackRate = a)
        }
    };
    y.prototype.Wv = function (a) {
        switch (this.Z) {
            case 0:
                a ? this.gf() ? (this.k.pause(), this.Vd = !0) : this.Vd = !1 : this.Vd && this.k.play();
                break;
            case 1:
                a ? this.gf() ? (1 === this.buffer.Z ? (this.Tb = this.gl(), this.ld && (this.Tb = this.Tb % this.Ye()), c(this.k)) : this.k.pause(), this.Vd = !0) : this.Vd = !1 : this.Vd && (1 === this.buffer.Z ? (this.k = B.createBufferSource(), this.k.buffer = this.buffer.qa, this.k.connect(this.$a), this.k.onended = this.dm, this.li = this.k, this.k.loop = this.ld, this.$a.gain.value = K * this.volume * this.kg, this.startTime = (this.Yf ? w.tc.J : w.be.J) - this.Tb, d(this.k, this.Tb, this.Ye())) : this.k.play());
                break;
            case 2:
                a ? this.gf() ? (this.k.pause(), this.Vd = !0) : this.Vd = !1 : this.Vd && this.k.play()
        }
    };
    C.la = function (a) {
        this.type = a;
        w = this.b = a.b;
        H = this;
        this.Kb = null;
        this.wh = -600;
        !(this.b.dg || this.b.jh && (this.b.kh || this.b.Xi)) || this.b.Wf || this.b.za || this.b.ih || (Xa = !0);
        B = null;
        "undefined" !== typeof AudioContext ? (D = 1, B = new AudioContext) : "undefined" !== typeof webkitAudioContext && (D = 1, B = new webkitAudioContext);
        (this.b.dg && 1 === D || Xa) && document.addEventListener("touchstart", function () {
            var a, b, c;
            !xc && B && (a = B.createBuffer(1, 1, 22050), b = B.createBufferSource(), b.buffer = a, b.connect(B.destination), t(b), xc = !0);
            if (Xa) {
                if (!I)
                    for (a = 0, b = Ya.length; a < b; ++a) c = Ya[a], c.Qa || c.fc || c.k.play();
                F(Ya)
            }
        }, !0);
        1 !== D && (this.b.Qb && "undefined" !== typeof window.Media ? D = 2 : this.b.Vf && (D = 3));
        2 === D && (L = location.href, a = L.lastIndexOf("/"), -1 < a && (L = L.substr(0, a + 1)), L = L.replace("file://", ""));
        if (this.b.Ko && this.b.Uu && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.b.ge(this);
        else {
            if (this.b.ub) A = this.b.jh;
            else try {
                A = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
            } catch (b) {
                A = !1
            }
            this.b.zg(this)
        }
    };
    var ua = C.la.prototype;
    ua.S = function () {
        this.b.If = this;
        T = this.F[0];
        this.Wd = this.F[1];
        this.xv = 0 !== this.F[2];
        S = this.F[3];
        ta = this.F[4];
        this.wh = -this.F[5];
        la = this.F[6];
        Aa = this.F[7];
        Ba = this.F[8];
        this.Kb = new p;
        var a = this.b.Y || this.b.width,
            b = this.b.X || this.b.height;
        1 === D && ("undefined" !== typeof B.listener.dopplerFactor && (B.listener.dopplerFactor = 0), B.listener.setPosition(a /
            2, b / 2, this.wh), B.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function (a, b) {
                La && La.disconnect();
                yb = b.toLowerCase();
                La = B.createMediaStreamSource(a);
                La.connect(l(yb))
            });
        this.b.Dn(function (a) {
            H.vv(a)
        });
        var c = this;
        this.b.Bn(function (a) {
            c.$l(a)
        })
    };
    ua.$l = function (a) {
        var b, c, e;
        b = 0;
        for (c = E.length; b < c; b++) e = E[b], e.Ka && e.Ka.M === a && (e.Ka.M = null, e.md && e.gf() && e.ld && e.stop());
        this.Kb.M === a && (this.Kb.M = null)
    };
    ua.nb = function () {
        var a = {
            silent: I,
            masterVolume: K,
            listenerZ: this.wh,
            listenerUid: this.Kb.Vi() ? this.Kb.M.uid : -1,
            playing: [],
            effects: {}
        },
            b = a.playing,
            c, e, d, f, g, k;
        c = 0;
        for (e = E.length; c < e; c++) d = E[c], !d.gf() || 3 === this.Wd || d.Vc && 1 === this.Wd || !d.Vc && 2 === this.Wd || (f = d.gl(), d.ld && (f = f % d.Ye()), f = {
            tag: d.tag,
            buffersrc: d.buffer.src,
            is_music: d.Vc,
            playbackTime: f,
            volume: d.volume,
            looping: d.ld,
            muted: d.$f,
            playbackRate: d.playbackRate,
            paused: d.fc,
            resume_position: d.Tb
        }, d.md && (f.pan = {}, k = f.pan, d.Ka && d.Ka.Vi() ? k.objUid = d.Ka.M.uid : (k.x = d.Gp, k.y = d.Hp, k.a = d.Cp), k.ia = d.Dp, k.oa = d.Ep, k.og = d.Fp), b.push(f));
        b = a.effects;
        for (g in Y)
            if (Y.hasOwnProperty(g)) {
                d = [];
                c = 0;
                for (e = Y[g].length; c < e; c++) d.push({
                    type: Y[g][c].type,
                    params: Y[g][c].eb
                });
                b[g] = d
            } return a
    };
    var Za = [];
    ua.Cb = function (b) {
        var c = b.silent;
        K = b.masterVolume;
        this.wh = b.listenerZ;
        this.Kb.Sh(null);
        var d = b.listenerUid; - 1 !== d && (this.Kb.kj = d, Za.push(this.Kb));
        var d = b.playing,
            f, l, t, n, y, P, X, M, H, w, C;
        if (3 !== this.Wd)
            for (f = 0, l = E.length; f < l; f++) H = E[f], H.Vc && 1 === this.Wd || (H.Vc || 2 !== this.Wd) && H.stop();
        for (y in Y)
            if (Y.hasOwnProperty(y))
                for (f = 0, l = Y[y].length; f < l; f++) Y[y][f].remove();
        ab(Y);
        for (y in b.effects)
            if (b.effects.hasOwnProperty(y))
                for (P = b.effects[y], f = 0, l = P.length; f < l; f++) switch (t = P[f].type, w = P[f].params, t) {
                    case "filter":
                        R(y, new u(w[0], w[1], w[2], w[3], w[4], w[5]));
                        break;
                    case "delay":
                        R(y, new v(w[0], w[1], w[2]));
                        break;
                    case "convolve":
                        t = w[2];
                        H = this.Ni(t, !1);
                        H.qa ? t = new h(H.qa, w[0], w[1], t) : (t = new h(null, w[0], w[1], t), H.qp = w[0], H.ti = t);
                        R(y, t);
                        break;
                    case "flanger":
                        R(y, new a(w[0], w[1], w[2], w[3], w[4]));
                        break;
                    case "phaser":
                        R(y, new k(w[0], w[1], w[2], w[3], w[4], w[5]));
                        break;
                    case "gain":
                        R(y, new m(w[0]));
                        break;
                    case "tremolo":
                        R(y, new e(w[0], w[1]));
                        break;
                    case "ringmod":
                        R(y, new q(w[0], w[1]));
                        break;
                    case "distortion":
                        R(y, new x(w[0], w[1], w[2], w[3], w[4]));
                        break;
                    case "compressor":
                        R(y, new r(w[0], w[1], w[2], w[3], w[4]));
                        break;
                    case "analyser":
                        R(y, new g(w[0], w[1]))
                }
        f = 0;
        for (l = d.length; f < l; f++) 3 === this.Wd || (b = d[f], t = b.buffersrc, n = b.is_music, y = b.tag, P = b.playbackTime, X = b.looping, M = b.volume, C = (w = b.pan) && w.hasOwnProperty("objUid") ? w.objUid : -1, n && 1 === this.Wd) || !n && 2 === this.Wd || ((H = this.po(t, y, n, X, M)) ? (H.Tb = b.resume_position, H.ym(!!w), H.play(X, M, P), H.Aq(), H.fw(), H.Fi(H.$f || H.nh), b.paused && H.pause(), b.muted && H.Uv(), H.Fi(H.$f || H.nh), w && (-1 !== C ? (H.Ka = H.Ka || new p, H.Ka.kj = C, Za.push(H.Ka)) : H.xm(w.x, w.y, w.a, w.ia, w.oa, w.og))) : (H = this.Ni(t, n), H.Kj = P, H.vj = b.paused, w && (-1 !== C ? H.pg.push({
            sp: C,
            nl: w.ia,
            Wl: w.oa,
            Zl: w.og,
            oq: y
        }) : H.pg.push({
            x: w.x,
            y: w.y,
            Es: w.a,
            nl: w.ia,
            Wl: w.oa,
            Zl: w.og,
            oq: y
        }))));
        if (c && !I) {
            f = 0;
            for (l = E.length; f < l; f++) E[f].bq(!0);
            I = !0
        } else if (!c && I) {
            f = 0;
            for (l = E.length; f < l; f++) E[f].bq(!1);
            I = !1
        }
    };
    ua.ad = function () {
        var a, b, c, e;
        a = 0;
        for (b = Za.length; a < b; a++) c = Za[a], e = this.b.Zg(c.kj), c.Sh(e), c.kj = -1, e && (J = e.x, ja = e.y);
        F(Za)
    };
    ua.vv = function (a) {
        if (!this.xv) {
            !a && B && B.resume && B.resume();
            var b, c;
            b = 0;
            for (c = E.length; b < c; b++) E[b].Wv(a);
            a && B && B.suspend && B.suspend()
        }
    };
    ua.gb = function () {
        var a = this.b.te,
            b, c, e;
        b = 0;
        for (c = E.length; b < c; b++) e = E[b], e.gb(a), 0 !== T && e.Aq();
        var d, f;
        for (d in Y)
            if (Y.hasOwnProperty(d))
                for (e = Y[d], b = 0, c = e.length; b < c; b++) f = e[b], f.gb && f.gb();
        1 === D && this.Kb.Vi() && (this.Kb.gb(a), J = this.Kb.M.x, ja = this.Kb.M.y, B.listener.setPosition(this.Kb.M.x, this.Kb.M.y, this.wh), B.listener.setVelocity(this.Kb.il(), this.Kb.jl(), 0))
    };
    var $a = [];
    ua.Vv = function (a) {
        var b, c, e, d, f, g = 0;
        b = 0;
        for (c = a.length; b < c; ++b)
            if (e = a[b], d = e[0], e = 2 * e[1], (f = 4 < d.length && ".ogg" === d.substr(d.length - 4)) && A || !f && !A) $a.push({
                filename: d,
                size: e,
                M: null
            }), g += e;
        return g
    };
    ua.Yv = function () {
        var a, b, c, e;
        a = 0;
        for (b = $a.length; a < b; ++a) c = $a[a], e = this.b.Wk + c.filename, c.M = this.Ni(e, !1)
    };
    ua.ru = function () {
        var a = 0,
            b, c, e;
        b = 0;
        for (c = $a.length; b < c; ++b) e = $a[b], e.M.Tu() || e.M.Lu() || this.b.za || this.b.Xi ? a += e.size : e.M.Jo() && (a += Math.floor(e.size / 2));
        return a
    };
    ua.Ni = function (a, b) {
        var c, e, d, f = null;
        c = 0;
        for (e = U.length; c < e; c++)
            if (d = U[c], d.src === a) {
                f = d;
                break
            } f || (f = new O(a, b), U.push(f));
        return f
    };
    ua.po = function (a, b, c, e, d) {
        var f, g, k;
        f = 0;
        for (g = E.length; f < g; f++)
            if (k = E[f], k.src === a && (k.Ss() || c)) return k.tag = b, k;
        a = this.Ni(a, c);
        if (!a.qa) return "<preload>" !== b && (a.xj = b, a.Pl = e, a.Pm = d), null;
        k = new y(a, b);
        E.push(k);
        return k
    };
    var Ea = [];
    X.prototype.ii = function (a) {
        return nb(Q, a)
    };
    X.prototype.pr = function (a) {
        P(a);
        var b;
        a = 0;
        for (b = Ea.length; a < b; a++)
            if (Ea[a].gf()) return !0;
        return !1
    };
    C.g = new X;
    M.prototype.Play = function (a, b, c, e) {
        !I && (c = Math.pow(10, c / 20), 0 > c && (c = 0), 1 < c && (c = 1), z = this.po(this.b.Wk + a[0] + (A ? ".ogg" : ".m4a"), e, a[1], 0 !== b, c)) && (z.ym(!1), z.play(0 !== b, c))
    };
    M.prototype.ts = function (a) {
        P(a);
        var b;
        a = 0;
        for (b = Ea.length; a < b; a++) Ea[a].stop()
    };
    M.prototype.us = function () {
        var a, b;
        a = 0;
        for (b = E.length; a < b; a++) E[a].stop()
    };
    C.u = new M;
    C.C = new function () { }
})();

function W(f) {
    this.b = f
}
(function () {
    function f() { }

    function l() { }

    function b() { }
    var n = W.prototype;
    n.wa = function (b) {
        this.xa = b;
        this.b = b.b
    };
    n.wa.prototype.S = function () { };
    n.la = function (b) {
        this.type = b;
        this.b = b.b
    };
    n.la.prototype.S = function () {
        var b = this;
        window.addEventListener("resize", function () {
            b.b.trigger(W.prototype.g.pn, b)
        });
        "undefined" !== typeof navigator.onLine && (window.addEventListener("online", function () {
            b.b.trigger(W.prototype.g.Lr, b)
        }), window.addEventListener("offline", function () {
            b.b.trigger(W.prototype.g.Kr, b)
        }));
        "undefined" !== typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function () {
            b.b.pf = 1;
            b.b.trigger(W.prototype.g.rn, b)
        }), window.applicationCache.addEventListener("progress", function (d) {
            b.b.pf = d.loaded / d.total
        }));
        this.b.ub || (document.addEventListener("appMobi.device.update.available", function () {
            b.b.trigger(W.prototype.g.rn, b)
        }), document.addEventListener("backbutton", function () {
            b.b.trigger(W.prototype.g.hk, b)
        }), document.addEventListener("menubutton", function () {
            b.b.trigger(W.prototype.g.ln, b)
        }), document.addEventListener("searchbutton", function () {
            b.b.trigger(W.prototype.g.Or, b)
        }), document.addEventListener("tizenhwkey", function (d) {
            var c;
            switch (d.keyName) {
                case "back":
                    c = b.b.trigger(W.prototype.g.hk, b);
                    !c && window.tizen && window.tizen.application.getCurrentApplication().exit();
                    break;
                case "menu":
                    (c = b.b.trigger(W.prototype.g.ln, b)) || d.preventDefault()
            }
        }));
        this.b.Zi && (WinJS.Application.onbackclick = function () {
            return !!b.b.trigger(W.prototype.g.hk, b)
        });
        this.b.Dn(function (d) {
            d ? b.b.trigger(W.prototype.g.Mr, b) : b.b.trigger(W.prototype.g.Nr, b)
        });
        this.Xu = "undefined" !== typeof window.is_scirra_arcade
    };
    f.prototype.Lr = function () {
        return !0
    };
    f.prototype.Kr = function () {
        return !0
    };
    f.prototype.rn = function () {
        return !0
    };
    f.prototype.Nr = function () {
        return !0
    };
    f.prototype.Mr = function () {
        return !0
    };
    f.prototype.pn = function () {
        return !0
    };
    f.prototype.hk = function () {
        return !0
    };
    f.prototype.ln = function () {
        return !0
    };
    f.prototype.Or = function () {
        return !0
    };
    f.prototype.or = function (b) {
        return (window.innerWidth <= window.innerHeight ? 0 : 1) === b
    };
    n.g = new f;
    l.prototype.hr = function (b, d) { };
    l.prototype.Nq = function () {
        this.b.za ? ea("[Construct 2] Exiting fullscreen is not supported on this platform - the request has been ignored") : this.b.xl ? this.b.Qu ? debuggerFullscreen(!1) : this.b.ff && window.nwgui && (window.nwgui.Window.get().leaveFullscreen(), this.b.ff = !1) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
    };
    l.prototype.Wq = function (b, d) {
        "undefined" !== typeof console && (0 === b && console.log && console.log(d.toString()), 1 === b && console.warn && console.warn(d.toString()), 2 === b && console.error && console.error(d.toString()))
    };
    n.u = new l;
    b.prototype.dr = function (b, d) {
        if (eval) {
            var c = 0;
            try {
                c = eval(d)
            } catch (f) {
                console && console.error && console.error("Error executing Javascript: ", f)
            }
            "number" === typeof c ? b.ud(c) : "string" === typeof c ? b.ud(c) : "boolean" === typeof c ? b.ud(c ? 1 : 0) : b.ud(0)
        } else b.ud(0)
    };
    n.C = new b
})();

function oc(f) {
    this.b = f
}
(function () {
    function f() {
        this.name = "";
        this.xf = 0;
        this.eb = []
    }

    function l() {
        u++;
        u === c.length && c.push(new f);
        return c[u]
    }

    function b() { }

    function n() { }

    function t() { }
    var d = oc.prototype;
    d.wa = function (b) {
        this.xa = b;
        this.b = b.b
    };
    d.wa.prototype.S = function () { };
    d.la = function (b) {
        this.type = b;
        this.b = b.b
    };
    var c = [],
        u = -1;
    d.la.prototype.S = function () {
        var b = this;
        window.c2_callFunction = function (c, a) {
            var d, f, e, q = l();
            q.name = c.toLowerCase();
            q.xf = 0;
            if (a)
                for (q.eb.length = a.length, d = 0, f = a.length; d < f; ++d) e = a[d], q.eb[d] = "number" === typeof e || "string" === typeof e ? e : "boolean" === typeof e ? e ? 1 : 0 : 0;
            else F(q.eb);
            b.b.trigger(oc.prototype.g.ji, b, q.name);
            u--;
            return q.xf
        }
    };
    b.prototype.ji = function (b) {
        var d = 0 > u ? null : c[u];
        return d ? nb(b, d.name) : !1
    };
    d.g = new b;
    n.prototype.CallFunction = function (b, c) {
        var a = l();
        a.name = b.toLowerCase();
        a.xf = 0;
        Da(a.eb, c);
        this.b.trigger(oc.prototype.g.ji, this, a.name);
        u--
    };
    n.prototype.ms = function (b) {
        var d = 0 > u ? null : c[u];
        d && (d.xf = b)
    };
    d.u = new n;
    t.prototype.as = function (b) {
        var d;
        c.length ? (d = u + 1, d >= c.length && (d = c.length - 1), d = c[d]) : d = null;
        d ? b.ud(d.xf) : b.U(0)
    };
    t.prototype.Sr = function (b, d) {
        d = ra(d);
        var a = 0 > u ? null : c[u];
        a ? 0 <= d && d < a.eb.length ? b.ud(a.eb[d]) : b.U(0) : b.U(0)
    };
    t.prototype.Zm = function (b, c) {
        var a = l();
        a.name = c.toLowerCase();
        a.xf = 0;
        F(a.eb);
        var d, f;
        d = 2;
        for (f = arguments.length; d < f; d++) a.eb.push(arguments[d]);
        this.b.trigger(oc.prototype.g.ji, this, a.name);
        u--;
        b.ud(a.xf)
    };
    d.C = new t
})();

function rc(f) {
    this.b = f
}
(function () {
    function f() { }
    var l = rc.prototype;
    l.wa = function (b) {
        this.xa = b;
        this.b = b.b
    };
    l.wa.prototype.S = function () { };
    l.la = function (b) {
        this.type = b;
        this.b = b.b;
        this.El = Array(256);
        this.bk = Array(256);
        this.Le = 0
    };
    var b = l.la.prototype;
    b.S = function () {
        var b = this;
        this.b.za || (jQuery(document).keydown(function (d) {
            b.qv(d)
        }), jQuery(document).keyup(function (d) {
            b.rv(d)
        }))
    };
    var n = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];
    b.qv = function (b) {
        var d = !1;
        window != window.top && -1 < n.indexOf(b.which) && (b.preventDefault(), d = !0, b.stopPropagation());
        if (this.El[b.which]) this.bk[b.which] && !d && b.preventDefault();
        else {
            this.El[b.which] = !0;
            this.Le = b.which;
            this.b.ec = !0;
            this.b.trigger(rc.prototype.g.tr, this);
            var c = this.b.trigger(rc.prototype.g.hn, this),
                f = this.b.trigger(rc.prototype.g.Fr, this);
            this.b.ec = !1;
            if (c || f) this.bk[b.which] = !0, d || b.preventDefault()
        }
    };
    b.rv = function (b) {
        this.El[b.which] = !1;
        this.Le = b.which;
        this.b.ec = !0;
        this.b.trigger(rc.prototype.g.ur, this);
        var d = this.b.trigger(rc.prototype.g.Hr, this),
            c = this.b.trigger(rc.prototype.g.Gr, this);
        this.b.ec = !1;
        if (d || c || this.bk[b.which]) this.bk[b.which] = !0, b.preventDefault()
    };
    b.nb = function () {
        return {
            triggerKey: this.Le
        }
    };
    b.Cb = function (b) {
        this.Le = b.triggerKey
    };
    f.prototype.hn = function (b) {
        return b === this.Le
    };
    f.prototype.tr = function () {
        return !0
    };
    f.prototype.ur = function () {
        return !0
    };
    f.prototype.Hr = function (b) {
        return b === this.Le
    };
    f.prototype.Fr = function (b) {
        return b === this.Le
    };
    f.prototype.Gr = function (b) {
        return b === this.Le
    };
    l.g = new f;
    l.u = new function () { };
    l.C = new function () { }
})();

function V(f) {
    this.b = f
}
(function () {
    function f() {
        if (0 === this.Lk.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.vg ? b.drawImage(this.K, this.mg, this.ng, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.K, 0, 0, this.width, this.height);
            this.Lk = a.toDataURL("image/png")
        }
        return this.Lk
    }

    function l() { }

    function b() { }

    function n() { }
    var t = V.prototype;
    t.wa = function (a) {
        this.xa = a;
        this.b = a.b
    };
    var d = t.wa.prototype;
    d.S = function () {
        if (!this.I) {
            var a, b, c, e, d, h, l, g, n;
            this.Oc = [];
            this.eh = !1;
            a = 0;
            for (b = this.Mb.length; a < b; a++) {
                d = this.Mb[a];
                l = {};
                l.name = d[0];
                l.speed = d[1];
                l.loop = d[2];
                l.qm = d[3];
                l.Hj = d[4];
                l.Kp = d[5];
                l.da = d[6];
                l.frames = [];
                c = 0;
                for (e = d[7].length; c < e; c++) h = d[7][c], g = {}, g.Uj = h[0], g.Em = h[1], g.mg = h[2], g.ng = h[3], g.width = h[4], g.height = h[5], g.duration = h[6], g.Hb = h[7], g.Ib = h[8], g.ol = h[9], g.yj = h[10], g.Lp = h[11], g.vg = 0 !== g.width, g.Lk = "", g.ax = f, n = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                }, g.zm = n, g.P = null, (n = this.b.du(h[0])) ? g.K = n : (g.K = new Image, g.K.Vs = h[0], g.K.Yn = h[1], g.K.Qs = null, this.b.Qm(g.K, h[0])), l.frames.push(g), this.Oc.push(g);
                this.Mb[a] = l
            }
        }
    };
    d.zq = function () {
        var a, b, c;
        a = 0;
        for (b = this.e.length; a < b; a++) c = this.e[a], c.yi = c.qc.P
    };
    d.sj = function () {
        if (!this.I) {
            var a, b, c;
            a = 0;
            for (b = this.Oc.length; a < b; ++a) c = this.Oc[a], c.K.Qs = null, c.P = null;
            this.eh = !1;
            this.zq()
        }
    };
    d.uj = function () {
        if (!this.I && this.e.length) {
            var a, b, c;
            a = 0;
            for (b = this.Oc.length; a < b; ++a) c = this.Oc[a], c.P = this.b.D.gg(c.K, !1, this.b.ja, c.Lp);
            this.zq()
        }
    };
    d.Kl = function () {
        if (!this.I && !this.eh && this.b.D) {
            var a, b, c;
            a = 0;
            for (b = this.Oc.length; a < b; ++a) c = this.Oc[a], c.P = this.b.D.gg(c.K, !1, this.b.ja, c.Lp);
            this.eh = !0
        }
    };
    d.$j = function () {
        if (!this.I && !this.e.length && this.eh) {
            var a, b, c;
            a = 0;
            for (b = this.Oc.length; a < b; ++a) c = this.Oc[a], this.b.D.deleteTexture(c.P), c.P = null;
            this.eh = !1
        }
    };
    var c = [];
    d.Cj = function (a) {
        var b, d, e;
        F(c);
        b = 0;
        for (d = this.Oc.length; b < d; ++b) e = this.Oc[b].K, -1 === c.indexOf(e) && (a.drawImage(e, 0, 0), c.push(e))
    };
    t.la = function (a) {
        this.type = a;
        this.b = a.b;
        a = this.type.Mb[0].frames[0].yj;
        this.jc ? this.dd.Uh(a) : this.dd = new hb(a)
    };
    var u = t.la.prototype;
    u.S = function () {
        this.visible = 0 === this.F[0];
        this.fh = this.Md = !1;
        this.qe = 0 !== this.F[3];
        1 === this.type.Mb.length && 1 === this.type.Mb[0].frames.length || 0 === this.type.Mb[0].speed || (this.b.zg(this), this.Md = !0);
        this.Da = this.oo(this.F[1]) || this.type.Mb[0];
        this.G = this.F[2];
        0 > this.G && (this.G = 0);
        this.G >= this.Da.frames.length && (this.G = this.Da.frames.length - 1);
        var a = this.Da.frames[this.G];
        this.dd.Uh(a.yj);
        this.Hb = a.Hb;
        this.Ib = a.Ib;
        this.Mf = this.Da.speed;
        this.jc ? this.Pc.reset() : this.Pc = new fb;
        this.hd = this.Pc.J;
        this.ke = !0;
        this.zd = 0;
        this.je = !0;
        this.oi = this.Gn = "";
        this.Wn = 0;
        this.Og = -1;
        this.type.Kl();
        var b, c, e, d, f, h, g, a = 0;
        for (b = this.type.Mb.length; a < b; a++)
            for (d = this.type.Mb[a], c = 0, e = d.frames.length; c < e; c++) f = d.frames[c], 0 === f.width && (f.width = f.K.width, f.height = f.K.height), f.vg && (g = f.K, h = f.zm, h.left = f.mg / g.width, h.top = f.ng / g.height, h.right = (f.mg + f.width) / g.width, h.bottom = (f.ng + f.height) / g.height, 0 === f.mg && 0 === f.ng && f.width === g.width && f.height === g.height && (f.vg = !1));
        this.qc = this.Da.frames[this.G];
        this.yi =
            this.qc.P
    };
    u.nb = function () {
        var a = {
            a: this.Da.da,
            f: this.G,
            cas: this.Mf,
            fs: this.hd,
            ar: this.zd,
            at: this.Pc.J
        };
        this.ke || (a.ap = this.ke);
        this.je || (a.af = this.je);
        return a
    };
    u.Cb = function (a) {
        var b = this.iu(a.a);
        b && (this.Da = b);
        this.G = a.f;
        0 > this.G && (this.G = 0);
        this.G >= this.Da.frames.length && (this.G = this.Da.frames.length - 1);
        this.Mf = a.cas;
        this.hd = a.fs;
        this.zd = a.ar;
        this.Pc.reset();
        this.Pc.J = a.at;
        this.ke = a.hasOwnProperty("ap") ? a.ap : !0;
        this.je = a.hasOwnProperty("af") ? a.af : !0;
        this.qc = this.Da.frames[this.G];
        this.yi = this.qc.P;
        this.dd.Uh(this.qc.yj);
        this.Hb = this.qc.Hb;
        this.Ib = this.qc.Ib
    };
    u.vk = function (a) {
        this.G = a ? 0 : this.Da.frames.length - 1;
        this.ke = !1;
        this.Gn = this.Da.name;
        this.fh = !0;
        this.b.trigger(V.prototype.g.gn, this);
        this.b.trigger(V.prototype.g.en, this);
        this.fh = !1;
        this.zd = 0
    };
    u.eo = function () {
        return this.Pc.J
    };
    u.gb = function () {
        this.Pc.add(this.b.Yg(this));
        this.oi.length && this.bo();
        0 <= this.Og && this.Ok();
        var a = this.Pc.J,
            b = this.Da,
            c = b.frames[this.G],
            e = c.duration / this.Mf;
        this.ke && a >= this.hd + e && (this.je ? this.G++ : this.G--, this.hd += e, this.G >= b.frames.length && (b.Kp ? (this.je = !1, this.G = b.frames.length - 2) : b.loop ? this.G = b.Hj : (this.zd++, this.zd >= b.qm ? this.vk(!1) : this.G = b.Hj)), 0 > this.G && (b.Kp ? (this.G = 1, this.je = !0, b.loop || (this.zd++, this.zd >= b.qm && this.vk(!0))) : b.loop ? this.G = b.Hj : (this.zd++, this.zd >= b.qm ? this.vk(!0) : this.G = b.Hj)), 0 > this.G ? this.G = 0 : this.G >= b.frames.length && (this.G = b.frames.length - 1), a > this.hd + b.frames[this.G].duration / this.Mf && (this.hd = a), a = b.frames[this.G], this.Ff(c, a), this.b.ca = !0)
    };
    u.oo = function (a) {
        var b, c, e;
        b = 0;
        for (c = this.type.Mb.length; b < c; b++)
            if (e = this.type.Mb[b], nb(e.name, a)) return e;
        return null
    };
    u.iu = function (a) {
        var b, c, e;
        b = 0;
        for (c = this.type.Mb.length; b < c; b++)
            if (e = this.type.Mb[b], e.da === a) return e;
        return null
    };
    u.bo = function () {
        var a = this.Da.frames[this.G],
            b = this.oo(this.oi);
        this.oi = "";
        !b || nb(b.name, this.Da.name) && this.ke || (this.Da = b, this.Mf = b.speed, 0 > this.G && (this.G = 0), this.G >= this.Da.frames.length && (this.G = this.Da.frames.length - 1), 1 === this.Wn && (this.G = 0), this.ke = !0, this.hd = this.Pc.J, this.je = !0, this.Ff(a, this.Da.frames[this.G]), this.b.ca = !0)
    };
    u.Ok = function () {
        var a = this.Da.frames[this.G],
            b = this.G;
        this.G = ra(this.Og);
        0 > this.G && (this.G = 0);
        this.G >= this.Da.frames.length && (this.G = this.Da.frames.length - 1);
        b !== this.G && (this.Ff(a, this.Da.frames[this.G]), this.hd = this.Pc.J, this.b.ca = !0);
        this.Og = -1
    };
    u.Ff = function (a, b) {
        var c = a.width,
            e = a.height,
            d = b.width,
            f = b.height;
        c != d && (this.width *= d / c);
        e != f && (this.height *= f / e);
        this.Hb = b.Hb;
        this.Ib = b.Ib;
        this.dd.Uh(b.yj);
        this.ua();
        this.qc = b;
        this.yi = b.P;
        c = 0;
        for (e = this.V.length; c < e; c++) d = this.V[c], d.yp && d.yp(a, b);
        this.b.trigger(V.prototype.g.Ff, this)
    };
    u.Fd = function (a) {
        a.globalAlpha = this.opacity;
        var b = this.qc,
            c = b.vg,
            e = b.K,
            d = this.x,
            f = this.y,
            h = this.width,
            g = this.height;
        if (0 === this.n && 0 <= h && 0 <= g) d -= this.Hb * h, f -= this.Ib * g, this.b.od && (d = Math.round(d), f = Math.round(f)), c ? a.drawImage(e, b.mg, b.ng, b.width, b.height, d, f, h, g) : a.drawImage(e, d, f, h, g);
        else {
            this.b.od && (d = Math.round(d), f = Math.round(f));
            a.save();
            var l = 0 < h ? 1 : -1,
                n = 0 < g ? 1 : -1;
            a.translate(d, f);
            1 === l && 1 === n || a.scale(l, n);
            a.rotate(this.n * l * n);
            d = 0 - this.Hb * na(h);
            f = 0 - this.Ib * na(g);
            c ? a.drawImage(e, b.mg, b.ng, b.width, b.height, d, f, na(h), na(g)) : a.drawImage(e, d, f, na(h), na(g));
            a.restore()
        }
    };
    u.Lg = function (a) {
        this.Zb(a)
    };
    u.Zb = function (a) {
        a.lc(this.yi);
        a.zf(this.opacity);
        var b = this.qc,
            c = this.Jf;
        if (this.b.od) {
            var e = Math.round(this.x) - this.x,
                d = Math.round(this.y) - this.y;
            b.vg ? a.rd(c.Ua + e, c.Va + d, c.xb + e, c.yb + d, c.rb + e, c.sb + d, c.pb + e, c.qb + d, b.zm) : a.Gj(c.Ua + e, c.Va + d, c.xb + e, c.yb + d, c.rb + e, c.sb + d, c.pb + e, c.qb + d)
        } else b.vg ? a.rd(c.Ua, c.Va, c.xb, c.yb, c.rb, c.sb, c.pb, c.qb, b.zm) : a.Gj(c.Ua, c.Va, c.xb, c.yb, c.rb, c.sb, c.pb, c.qb)
    };
    u.nu = function (a) {
        var b = this.qc,
            c, e;
        c = 0;
        for (e = b.ol.length; c < e; c++)
            if (nb(a, b.ol[c][0])) return c;
        return -1
    };
    u.fl = function (a, b) {
        var c = this.qc,
            e = c.ol,
            d;
        ia(a) ? d = this.nu(a) : d = a - 1;
        d = ra(d);
        if (0 > d || d >= e.length) return b ? this.x : this.y;
        var f = (e[d][1] - c.Hb) * this.width,
            e = e[d][2],
            e = (e - c.Ib) * this.height,
            c = Math.cos(this.n);
        d = Math.sin(this.n);
        var h = f * c - e * d,
            e = e * c + f * d,
            f = h + this.x,
            e = e + this.y;
        return b ? f : e
    };
    var v = new ca,
        h = !1;
    new wa(0, 0, 0, 0);
    d.finish = function (a) {
        if (h) {
            if (a) {
                var b = this.b.ab().Ya.Xc;
                a = null.R();
                var c = v.Ne(),
                    e, d;
                if (a.aa) {
                    a.aa = !1;
                    F(a.e);
                    e = 0;
                    for (d = c.length; e < d; ++e) a.e[e] = c[e];
                    if (b)
                        for (F(a.na), e = 0, d = null.e.length; e < d; ++e) c = null.e[e], v.contains(c) || a.na.push(c)
                } else if (b)
                    for (b = a.e.length, e = 0, d = c.length; e < d; ++e) a.e[b + e] = c[e], Ha(a.na, c[e]);
                else Da(a.e, c);
                null.bd()
            }
            v.clear();
            h = !1
        }
    };
    l.prototype.Tq = function (a, b) {
        return ec(this.G, a, b)
    };
    l.prototype.en = function (a) {
        return nb(this.Gn, a)
    };
    l.prototype.gn = function () {
        return !0
    };
    l.prototype.Ff = function () {
        return !0
    };
    t.g = new l;
    b.prototype.ss = function (a) {
        this.ke = !0;
        this.hd = this.Pc.J;
        1 === a && 0 !== this.G && (this.Og = 0, this.fh || this.Ok());
        this.Md || (this.b.zg(this), this.Md = !0)
    };
    b.prototype.es = function (a, b) {
        this.oi = a;
        this.Wn = b;
        this.Md || (this.b.zg(this), this.Md = !0);
        this.fh || this.bo()
    };
    b.prototype.gs = function (a) {
        this.Og = a;
        this.Md || (this.b.zg(this), this.Md = !0);
        this.fh || this.Ok()
    };
    b.prototype.hs = function (a) {
        this.Mf = na(a);
        this.je = 0 <= a;
        this.Md || (this.b.zg(this), this.Md = !0)
    };
    b.prototype.vn = function (a) {
        var b = this.qc,
            c = b.width * a * (0 > this.width ? -1 : 1);
        a = b.height * a * (0 > this.height ? -1 : 1);
        if (this.width !== c || this.height !== a) this.width = c, this.height = a, this.ua()
    };
    b.prototype.js = function (a) {
        this.qe !== (0 !== a) && ((this.qe = 0 !== a) ? this.ua() : (this.wc.right >= this.wc.left && this.type.Hk.update(this, this.wc, null), this.wc.set(0, 0, -1, -1)))
    };
    t.u = new b;
    n.prototype.Jq = function (a) {
        a.U(this.G)
    };
    n.prototype.Kq = function (a) {
        a.U(this.Da.frames.length)
    };
    t.C = new n
})();

function sc(f) {
    this.b = f
}
(function () {
    function f(a, b) {
        return a.length ? a.pop() : new b
    }

    function l(a, b, c) {
        if (c) {
            var d;
            c = 0;
            for (d = b.length; c < d; c++) a.length < u && a.push(b[c]);
            F(b)
        } else
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (a.length < u && a.push(b[d]), delete b[d])
    }

    function b(a, b, c) {
        var d = a.nf;
        c = c.replace(/\s\s*$/, "");
        b >= d.length && d.push(f(v, Object));
        b = d[b];
        b.text = c;
        b.width = a.Rl(c);
        a.xg = oa(a.xg, b.width)
    }

    function n() { }

    function t() { }
    var d = sc.prototype;
    d.S = function () { };
    d.wa = function (a) {
        this.xa = a;
        this.b = a.b
    };
    var c = d.wa.prototype;
    c.S = function () {
        this.I || (this.K = new Image, this.b.Qm(this.K, this.Uj), this.P = null)
    };
    c.sj = function () {
        this.I || (this.P = null)
    };
    c.uj = function () {
        if (!this.I && this.e.length) {
            this.P || (this.P = this.b.D.gg(this.K, !1, this.b.ja, this.ai));
            var a, b;
            a = 0;
            for (b = this.e.length; a < b; a++) this.e[a].P = this.P
        }
    };
    c.$j = function () {
        this.I || this.e.length || !this.P || (this.b.D.deleteTexture(this.P), this.P = null)
    };
    c.Cj = function (a) {
        a.drawImage(this.K, 0, 0)
    };
    d.la = function (a) {
        this.type = a;
        this.b = a.b
    };
    c = d.la.prototype;
    c.Be = function () {
        l(v, this.nf, !0);
        l(h, this.qi, !1);
        l(a, this.ri, !1);
        ab(this.pe)
    };
    c.S = function () {
        this.K = this.type.K;
        this.pi = this.F[0];
        this.oe = this.F[1];
        this.characterSet = this.F[2];
        this.text = this.F[3];
        this.cd = this.F[4];
        this.visible = 0 === this.F[5];
        this.Ui = this.F[6] / 2;
        this.ck = this.F[7] / 2;
        this.pw = 0 === this.F[9];
        this.Kf = this.F[10];
        this.lineHeight = this.F[11];
        this.Bf = this.xg = 0;
        this.jc ? (F(this.nf), ab(this.qi), ab(this.ri), ab(this.pe)) : (this.nf = [], this.qi = {}, this.ri = {}, this.pe = {});
        this.yg = !0;
        this.Hl = this.width;
        this.b.D && (this.type.P || (this.type.P = this.b.D.gg(this.type.K, !1, this.b.ja, this.type.ai)), this.P = this.type.P);
        this.rs()
    };
    c.nb = function () {
        var a = {
            t: this.text,
            csc: this.cd,
            csp: this.Kf,
            lh: this.lineHeight,
            tw: this.xg,
            th: this.Bf,
            lrt: this.av,
            ha: this.Ui,
            va: this.ck,
            cw: {}
        },
            b;
        for (b in this.pe) a.cw[b] = this.pe[b];
        return a
    };
    c.Cb = function (a) {
        this.text = a.t;
        this.cd = a.csc;
        this.Kf = a.csp;
        this.lineHeight = a.lh;
        this.xg = a.tw;
        this.Bf = a.th;
        this.av = a.lrt;
        a.hasOwnProperty("ha") && (this.Ui = a.ha);
        a.hasOwnProperty("va") && (this.ck = a.va);
        for (var b in a.cw) this.pe[b] = a.cw[b];
        this.yg = !0;
        this.Hl = this.width
    };
    var u = 1E3,
        v = [],
        h = [],
        a = [];
    c.rs = function () {
        for (var b = this.K, c = b.width, d = b.height, b = this.pi, k = this.oe, g = b / c, m = k / d, l = this.characterSet, c = Math.floor(c / b), d = Math.floor(d / k), n = 0; n < l.length && !(n >= c * d); n++) {
            var t = n % c,
                u = Math.floor(n / c),
                v = l.charAt(n);
            if (this.b.D) {
                var M = this.ri,
                    C = t * g,
                    w = u * m,
                    t = (t + 1) * g,
                    u = (u + 1) * m;
                void 0 === M[v] && (M[v] = f(a, wa));
                M[v].left = C;
                M[v].top = w;
                M[v].right = t;
                M[v].bottom = u
            } else M = this.qi, t = t * b, u = u * k, C = b, w = k, void 0 === M[v] && (M[v] = f(h, Object)), M[v].x = t, M[v].y = u, M[v].Dq = C, M[v].zo = w
        }
    };
    var k = [];
    d.xs = function (a) {
        F(k);
        for (var b = "", c, d = 0; d < a.length;)
            if (c = a.charAt(d), "\n" === c) b.length && (k.push(b), b = ""), k.push("\n"), ++d;
            else if (" " === c || "\t" === c || "-" === c) {
                do b += a.charAt(d), d++; while (d < a.length && (" " === a.charAt(d) || "\t" === a.charAt(d)));
                k.push(b);
                b = ""
            } else d < a.length && (b += c, d++);
        b.length && k.push(b)
    };
    d.Cs = function (a) {
        var b = a.text,
            c = a.nf;
        if (b && b.length) {
            var d = a.width;
            if (2 >= d) l(v, c, !0);
            else {
                var g = a.cd,
                    h = a.Kf;
                if (b.length * (a.pi * g + h) - h <= d && -1 === b.indexOf("\n") && (h = a.Rl(b), h <= d)) {
                    l(v, c, !0);
                    c.push(f(v, Object));
                    c[0].text = b;
                    c[0].width = h;
                    a.xg = h;
                    a.Bf = a.oe * g + a.lineHeight;
                    return
                }
                this.Ds(a);
                a.Bf = c.length * (a.oe * g + a.lineHeight)
            }
        } else l(v, c, !0)
    };
    d.Ds = function (a) {
        var c = a.pw,
            d = a.text,
            f = a.nf,
            g = a.width;
        c && (this.xs(d), d = k);
        var h = "",
            m, l, n, t = 0,
            X = !1;
        for (n = 0; n < d.length; n++) "\n" === d[n] ? (!0 === X ? X = !1 : (b(a, t, h), t++), h = "") : (X = !1, m = h, h += d[n], l = a.Rl(h.replace(/\s\s*$/, "")), l > g && ("" === m ? (b(a, t, h), h = "", X = !0) : (b(a, t, m), h = d[n]), t++, c || " " !== h || (h = "")));
        h.replace(/\s\s*$/, "").length && (b(a, t, h), t++);
        for (n = t; n < f.length; n++) v.length < u && v.push(f[n]);
        f.length = t
    };
    c.Rl = function (a) {
        for (var b = this.Kf, c = a.length, d = 0, f = 0; f < c; f++) d += this.cl(a.charAt(f)) * this.cd + b;
        return d - (0 < d ? b : 0)
    };
    c.cl = function (a) {
        var b = this.pe;
        return void 0 !== b[a] ? b[a] : this.pi
    };
    c.Sp = function () {
        if (this.yg || this.width !== this.Hl) this.Bf = this.xg = 0, this.type.xa.Cs(this), this.yg = !1, this.Hl = this.width
    };
    c.Fd = function (a) {
        var b = this.K;
        if ("" !== this.text && null != b && (this.Sp(), !(this.height < this.oe * this.cd + this.lineHeight))) {
            a.globalAlpha = this.opacity;
            var b = this.x,
                c = this.y;
            this.b.od && (b = Math.round(b), c = Math.round(c));
            var d = this.q.Ba,
                f = this.q.Ca,
                h = this.q.Ga,
                k = this.q.Fa;
            a.save();
            a.translate(b, c);
            a.rotate(this.n);
            for (var m = this.Ui, l = this.cd, n = this.oe * l, t = this.lineHeight, u = this.Kf, v = this.nf, w, H = -(this.Hb * this.width), Q = -(this.Ib * this.height), Q = Q + this.ck * oa(0, this.height - this.Bf), L, D, B, U = 0; U < v.length; U++) {
                var E = v[U].text;
                w = m * oa(0, this.width - v[U].width);
                L = H + w;
                Q += t;
                if (c + Q + n < f) Q += n;
                else {
                    for (var z = 0; z < E.length; z++) {
                        D = E.charAt(z);
                        w = this.cl(D);
                        var A = this.qi[D];
                        if (b + L + w * l + u < d) L += w * l + u;
                        else {
                            if (L + w * l > this.width + 1E-5) break;
                            void 0 !== A && (D = L, B = Q, 0 === this.n && (D = Math.round(D), B = Math.round(B)), a.drawImage(this.K, A.x, A.y, A.Dq, A.zo, D, B, A.Dq * l, A.zo * l));
                            L += w * l + u;
                            if (b + L > h) break
                        }
                    }
                    Q += n;
                    if (Q + n + t > this.height || c + Q > k) break
                }
            }
            a.restore()
        }
    };
    var m = new xa;
    c.Zb = function (a) {
        a.lc(this.P);
        a.zf(this.opacity);
        if (this.text && (this.Sp(), !(this.height < this.oe * this.cd + this.lineHeight))) {
            this.Aa();
            var b = this.Jf,
                c = 0,
                d = 0;
            this.b.od && (c = Math.round(this.x) - this.x, d = Math.round(this.y) - this.y);
            var f = this.q.Ba,
                h = this.q.Ca,
                k = this.q.Ga,
                l = this.q.Fa,
                n = this.n,
                t = this.Ui,
                u = this.ck,
                v = this.cd,
                C = this.oe * v,
                w = this.lineHeight,
                H = this.Kf,
                Q = this.nf,
                L = this.Bf,
                D, B, U;
            0 !== n && (B = Math.cos(n), U = Math.sin(n));
            for (var c = b.Ua + c, b = b.Va + d, E, u = u * oa(0, this.height - L), z, A, L = 0; L < Q.length; L++)
                if (d = Q[L].text, E = D = t * oa(0, this.width - Q[L].width), u += w, 0 === n && b + u + C < h) u += C;
                else {
                    for (var T = 0; T < d.length; T++) {
                        var I = d.charAt(T);
                        D = this.cl(I);
                        I = this.ri[I];
                        if (c + E + D * v + H < f) E += D * v + H;
                        else {
                            if (E + D * v > this.width + 1E-5) break;
                            if (void 0 !== I) {
                                var K = this.pi * v,
                                    J = this.oe * v;
                                z = E;
                                A = u;
                                0 === n && (z = Math.round(z), A = Math.round(A));
                                m.Ua = z;
                                m.Va = A;
                                m.xb = z + K;
                                m.yb = A;
                                m.pb = z;
                                m.qb = A + J;
                                m.rb = z + K;
                                m.sb = A + J;
                                0 !== n && (z = m, A = B, K = U, J = void 0, J = z.Ua * A - z.Va * K, z.Va = z.Va * A + z.Ua * K, z.Ua = J, J = z.xb * A - z.yb * K, z.yb = z.yb * A + z.xb * K, z.xb = J, J = z.pb * A - z.qb * K, z.qb = z.qb * A + z.pb * K, z.pb = J, J = z.rb * A - z.sb * K, z.sb = z.sb * A + z.rb * K, z.rb = J);
                                m.offset(c, b);
                                a.rd(m.Ua, m.Va, m.xb, m.yb, m.rb, m.sb, m.pb, m.qb, I)
                            }
                            E += D * v + H;
                            if (0 === n && c + E > k) break
                        }
                    }
                    u += C;
                    if (u + C + w > this.height || b + u > l) break
                }
        }
    };
    d.g = new function () { };
    n.prototype.ns = function (a) {
        ha(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.yg = !0, this.b.ca = !0)
    };
    n.prototype.vn = function (a) {
        a !== this.cd && (this.cd = a, this.yg = !0, this.b.ca = !0)
    };
    c.Lg = function (a, b) {
        var c = parseInt(b, 10);
        this.pe[a] !== c && (this.pe[a] = c, this.yg = !0, this.b.ca = !0)
    };
    d.u = new n;
    t.prototype.Text = function (a) {
        a.Eb(this.text)
    };
    d.C = new t
})();

function tc(f) {
    this.b = f
}
(function () {
    var f = tc.prototype;
    f.wa = function (b) {
        this.xa = b;
        this.b = b.b
    };
    var l = f.wa.prototype;
    l.S = function () {
        this.I || (this.K = new Image, this.K.Yn = this.Em, this.b.Qm(this.K, this.Uj), this.P = this.pattern = null)
    };
    l.sj = function () {
        this.I || (this.P = null)
    };
    l.uj = function () {
        if (!this.I && this.e.length) {
            this.P || (this.P = this.b.D.gg(this.K, !0, this.b.ja, this.ai));
            var b, f;
            b = 0;
            for (f = this.e.length; b < f; b++) this.e[b].P = this.P
        }
    };
    l.Kl = function () {
        this.I || this.P || !this.b.D || (this.P = this.b.D.gg(this.K, !0, this.b.ja, this.ai))
    };
    l.$j = function () {
        this.I || this.e.length || !this.P || (this.b.D.deleteTexture(this.P), this.P = null)
    };
    l.Cj = function (b) {
        b.drawImage(this.K, 0, 0)
    };
    f.la = function (b) {
        this.type = b;
        this.b = b.b
    };
    l = f.la.prototype;
    l.S = function () {
        this.visible = 0 === this.F[0];
        this.Qh = new wa(0, 0, 0, 0);
        this.Do = !1;
        this.K = this.type.K;
        this.b.D ? (this.type.Kl(), this.P = this.type.P) : (this.type.pattern || (this.type.pattern = this.b.ra.createPattern(this.type.K, "repeat")), this.pattern = this.type.pattern)
    };
    l.ad = function () {
        this.Do = !1;
        this.K = this.type.K
    };
    l.Be = function () {
        this.b.D && this.Do && this.P && (this.b.D.deleteTexture(this.P), this.P = null)
    };
    l.Fd = function (b) {
        b.globalAlpha = this.opacity;
        b.save();
        b.fillStyle = this.pattern;
        var f = this.x,
            l = this.y;
        this.b.od && (f = Math.round(f), l = Math.round(l));
        var d = -(this.Hb * this.width),
            c = -(this.Ib * this.height),
            u = d % this.K.width,
            v = c % this.K.height;
        0 > u && (u += this.K.width);
        0 > v && (v += this.K.height);
        b.translate(f, l);
        b.rotate(this.n);
        b.translate(u, v);
        b.fillRect(d - u, c - v, this.width, this.height);
        b.restore()
    };
    l.Lg = function (b) {
        this.Zb(b)
    };
    l.Zb = function (b) {
        b.lc(this.P);
        b.zf(this.opacity);
        var f = this.Qh;
        f.right = this.width / this.K.width;
        f.bottom = this.height / this.K.height;
        var l = this.Jf;
        if (this.b.od) {
            var d = Math.round(this.x) - this.x,
                c = Math.round(this.y) - this.y;
            b.rd(l.Ua + d, l.Va + c, l.xb + d, l.yb + c, l.rb + d, l.sb + c, l.pb + d, l.qb + c, f)
        } else b.rd(l.Ua, l.Va, l.xb, l.yb, l.rb, l.sb, l.pb, l.qb, f)
    };
    f.g = new function () { };
    f.u = new function () { };
    f.C = new function () { }
})();

function Z(f) {
    this.b = f
}
(function () {
    function f(b) {
        h = b.x;
        a = b.y;
        k = b.z
    }

    function l(a) {
        m = a.x;
        e = a.y;
        q = a.z
    }

    function b(a, b, c, d) {
        var e;
        e = x.length ? x.pop() : new n;
        e.init(a, b, c, d);
        return e
    }

    function n() {
        this.Xh = this.id = this.y = this.x = this.Qj = this.Pj = this.Gl = this.time = this.Dm = 0;
        this.ci = this.Yj = !1
    }

    function t() { }

    function d() { }
    var c = Z.prototype;
    c.wa = function (a) {
        this.xa = a;
        this.b = a.b
    };
    c.wa.prototype.S = function () { };
    c.la = function (a) {
        this.type = a;
        this.b = a.b;
        this.touches = [];
        this.Tl = !1
    };
    var u = c.la.prototype,
        v = {
            left: 0,
            top: 0
        };
    u.Xg = function (a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++)
            if (this.touches[b].id === a) return b;
        return -1
    };
    var h = 0,
        a = 0,
        k = 0,
        m = 0,
        e = 0,
        q = 0,
        x = [];
    n.prototype.init = function (a, b, c, d) {
        var e = bb();
        this.Dm = this.Gl = this.time = e;
        this.Pj = a;
        this.Qj = b;
        this.x = a;
        this.y = b;
        this.id = c;
        this.Xh = d;
        this.ci = this.Yj = !1
    };
    n.prototype.update = function (a, b, c) {
        this.Gl = this.time;
        this.time = a;
        this.x = b;
        this.y = c;
        !this.ci && 15 <= Ta(this.Pj, this.Qj, this.x, this.y) && (this.ci = !0)
    };
    n.prototype.jv = function (a, b) {
        !this.Yj && 500 <= bb() - this.Dm && !this.ci && 15 > Ta(this.Pj, this.Qj, this.x, this.y) && (this.Yj = !0, a.xd = this.Xh, a.Cg = this.id, a.Rf = b, a.b.trigger(Z.prototype.g.Dr, a), a.Cd = this.x, a.Dd = this.y, a.b.trigger(Z.prototype.g.Er, a), a.Rf = 0)
    };
    var r = -1E3,
        g = -1E3,
        p = -1E4;
    n.prototype.lp = function (a, b) {
        if (!this.Yj) {
            var c = bb();
            333 >= c - this.Dm && !this.ci && 15 > Ta(this.Pj, this.Qj, this.x, this.y) && (a.xd = this.Xh, a.Cg = this.id, a.Rf = b, 666 >= c - p && 25 > Ta(r, g, this.x, this.y) ? (a.b.trigger(Z.prototype.g.yr, a), a.Cd = this.x, a.Dd = this.y, a.b.trigger(Z.prototype.g.Ar, a), g = r = -1E3, p = -1E4) : (a.b.trigger(Z.prototype.g.Pr, a), a.Cd = this.x, a.Dd = this.y, a.b.trigger(Z.prototype.g.Qr, a), r = this.x, g = this.y, p = c), a.Rf = 0)
        }
    };
    u.S = function () {
        this.Vu = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.Rf = this.Cg = this.xd = this.Dd = this.Cd = this.zn = this.yn = this.xn = this.Hs = this.Gs = this.Fs = this.Kh = this.Jh = this.Ih = 0;
        this.jw = 0 !== this.F[0];
        var a = 0 < this.b.Ob ? document : this.b.canvas,
            b = document;
        this.b.ub ? b = a = window.Canvas : this.b.cc && (b = a = window);
        var c = this;
        window.navigator.pointerEnabled ? (a.addEventListener("pointerdown", function (a) {
            c.xp(a)
        }, !1), a.addEventListener("pointermove", function (a) {
            c.wp(a)
        }, !1), b.addEventListener("pointerup", function (a) {
            c.tj(a, !1)
        }, !1), b.addEventListener("pointercancel", function (a) {
            c.tj(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function (a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function (a) {
            a.preventDefault()
        }, !1), this.b.canvas.addEventListener("gesturehold", function (a) {
            a.preventDefault()
        }, !1), document.addEventListener("gesturehold", function (a) {
            a.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function (a) {
            c.xp(a)
        }, !1), a.addEventListener("MSPointerMove", function (a) {
            c.wp(a)
        }, !1), b.addEventListener("MSPointerUp", function (a) {
            c.tj(a, !1)
        }, !1), b.addEventListener("MSPointerCancel", function (a) {
            c.tj(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function (a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function (a) {
            a.preventDefault()
        }, !1))) : (a.addEventListener("touchstart", function (a) {
            c.Ap(a)
        }, !1), a.addEventListener("touchmove", function (a) {
            c.zp(a)
        }, !1), b.addEventListener("touchend", function (a) {
            c.cm(a, !1)
        }, !1), b.addEventListener("touchcancel", function (a) {
            c.cm(a, !0)
        }, !1));
        if (this.Vu) {
            var d = function (a) {
                a = a.reading;
                c.xn = a.accelerationX;
                c.yn = a.accelerationY;
                c.zn = a.accelerationZ
            },
                e = function (a) {
                    a = a.reading;
                    c.Ih = a.yawDegrees;
                    c.Jh = a.pitchDegrees;
                    c.Kh = a.rollDegrees
                },
                g = Windows.Devices.Sensors.Accelerometer.getDefault();
            g && (g.reportInterval = Math.max(g.minimumReportInterval, 16), g.addEventListener("readingchanged", d));
            var h = Windows.Devices.Sensors.Inclinometer.getDefault();
            h && (h.reportInterval = Math.max(h.minimumReportInterval, 16), h.addEventListener("readingchanged", e));
            document.addEventListener("visibilitychange", function () {
                document.hidden || document.msHidden ? (g && g.removeEventListener("readingchanged", d), h && h.removeEventListener("readingchanged", e)) : (g && g.addEventListener("readingchanged", d), h && h.addEventListener("readingchanged", e))
            }, !1)
        } else window.addEventListener("deviceorientation", function (a) {
            c.Ih = a.alpha || 0;
            c.Jh = a.beta || 0;
            c.Kh = a.gamma || 0
        }, !1), window.addEventListener("devicemotion", function (a) {
            a.accelerationIncludingGravity && (c.Fs = a.accelerationIncludingGravity.x || 0, c.Gs = a.accelerationIncludingGravity.y || 0, c.Hs = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (c.xn = a.acceleration.x || 0, c.yn = a.acceleration.y || 0, c.zn = a.acceleration.z || 0)
        }, !1);
        this.jw && !this.b.za && (jQuery(document).mousemove(function (a) {
            c.tv(a)
        }), jQuery(document).mousedown(function (a) {
            c.sv(a)
        }), jQuery(document).mouseup(function (a) {
            c.uv(a)
        }));
        this.b.Vf && !this.b.ub && AppMobi.accelerometer.watchAcceleration(f, {
            frequency: 40,
            adjustForRotation: !0
        });
        this.b.Qb && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(l, null, {
            frequency: 40
        });
        this.b.$v(this)
    };
    u.wp = function (a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var b = this.Xg(a.pointerId),
                c = bb();
            if (0 <= b) {
                var d = this.b.za ? v : jQuery(this.b.canvas).offset(),
                    b = this.touches[b];
                2 > c - b.time || b.update(c, a.pageX - d.left, a.pageY - d.top)
            }
        }
    };
    u.xp = function (a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && ob(a) && a.preventDefault();
            var c = this.b.za ? v : jQuery(this.b.canvas).offset(),
                d = a.pageX - c.left,
                c = a.pageY - c.top;
            bb();
            this.xd = this.touches.length;
            this.Cg = a.pointerId;
            this.touches.push(b(d, c, a.pointerId, this.xd));
            this.b.ec = !0;
            this.b.trigger(Z.prototype.g.nn, this);
            this.b.trigger(Z.prototype.g.mk, this);
            this.Cd = d;
            this.Dd = c;
            this.b.trigger(Z.prototype.g.qn, this);
            this.b.ec = !1
        }
    };
    u.tj = function (a, b) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && ob(a) && a.preventDefault();
            var c = this.Xg(a.pointerId);
            this.xd = 0 <= c ? this.touches[c].Xh : -1;
            this.Cg = 0 <= c ? this.touches[c].id : -1;
            this.b.ec = !0;
            this.b.trigger(Z.prototype.g.mn, this);
            this.b.trigger(Z.prototype.g.lk, this);
            0 <= c && (b || this.touches[c].lp(this, c), 100 > x.length && x.push(this.touches[c]), this.touches.splice(c, 1));
            this.b.ec = !1
        }
    };
    u.zp = function (a) {
        a.preventDefault && a.preventDefault();
        var b = bb(),
            c, d, e, f;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++)
            if (e = a.changedTouches[c], f = this.Xg(e.identifier), 0 <= f) {
                var g = this.b.za ? v : jQuery(this.b.canvas).offset();
                f = this.touches[f];
                2 > b - f.time || f.update(b, e.pageX - g.left, e.pageY - g.top)
            }
    };
    u.Ap = function (a) {
        a.preventDefault && ob(a) && a.preventDefault();
        var c = this.b.za ? v : jQuery(this.b.canvas).offset();
        bb();
        this.b.ec = !0;
        var d, e, f, g;
        d = 0;
        for (e = a.changedTouches.length; d < e; d++)
            if (f = a.changedTouches[d], g = this.Xg(f.identifier), -1 === g) {
                g = f.pageX - c.left;
                var h = f.pageY -
                    c.top;
                this.xd = this.touches.length;
                this.Cg = f.identifier;
                this.touches.push(b(g, h, f.identifier, this.xd));
                this.b.trigger(Z.prototype.g.nn, this);
                this.b.trigger(Z.prototype.g.mk, this);
                this.Cd = g;
                this.Dd = h;
                this.b.trigger(Z.prototype.g.qn, this)
            } this.b.ec = !1
    };
    u.cm = function (a, b) {
        a.preventDefault && ob(a) && a.preventDefault();
        this.b.ec = !0;
        var c, d, e;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++) e = a.changedTouches[c], e = this.Xg(e.identifier), 0 <= e && (this.xd = this.touches[e].Xh, this.Cg = this.touches[e].id, this.b.trigger(Z.prototype.g.mn, this), this.b.trigger(Z.prototype.g.lk, this), b || this.touches[e].lp(this, e), 100 > x.length && x.push(this.touches[e]), this.touches.splice(e, 1));
        this.b.ec = !1
    };
    u.Lg = function () {
        return this.b.Vf && 0 === this.Ih && 0 !== k ? 90 * k : this.b.Qb && 0 === this.Ih && 0 !== q ? 90 * q : this.Ih
    };
    u.eo = function () {
        return this.b.Vf && 0 === this.Jh && 0 !== a ? -90 * a : this.b.Qb && 0 === this.Jh && 0 !== e ? 90 * e : this.Jh
    };
    u.$w = function () {
        return this.b.Vf && 0 === this.Kh && 0 !== h ? 90 * h : this.b.Qb && 0 === this.Kh && 0 !== m ? 90 * m : this.Kh
    };
    u.sv = function (a) {
        this.Ap({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Tl = !0
    };
    u.tv = function (a) {
        this.Tl && this.zp({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    u.uv = function (a) {
        a.preventDefault && this.b.Ao && !this.b.Xf && a.preventDefault();
        this.b.Ao = !0;
        this.cm({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Tl = !1
    };
    u.bi = function () {
        var a, b, c, d = bb();
        a = 0;
        for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= d - 50 && (c.Gl = d), c.jv(this, a)
    };
    t.prototype.mk = function () {
        return !0
    };
    t.prototype.lk = function () {
        return !0
    };
    t.prototype.lr = function () {
        return this.touches.length
    };
    t.prototype.qn = function (a) {
        return a ? this.b.Sj(a, this.Cd, this.Dd) : !1
    };
    var O = [];
    t.prototype.qr = function (a) {
        if (!a) return !1;
        var b = a.R(),
            c = b.Pb(),
            d, e, f, g, h, k;
        f = 0;
        for (g = c.length; f < g; f++) {
            var l = c[f];
            l.Aa();
            h = 0;
            for (k = this.touches.length; h < k; h++)
                if (e = this.touches[h], d = l.q.Gb(e.x, e.y, !0), e = l.q.Gb(e.x, e.y, !1), l.pc(d, e)) {
                    O.push(l);
                    break
                }
        }
        return O.length ? (b.aa = !1, Da(b.e, O), a.bd(), F(O), !0) : !1
    };
    t.prototype.nn = function (a) {
        a = Math.floor(a);
        return a === this.xd
    };
    t.prototype.mn = function (a) {
        a = Math.floor(a);
        return a === this.xd
    };
    t.prototype.Dr = function () {
        return !0
    };
    t.prototype.Pr = function () {
        return !0
    };
    t.prototype.yr = function () {
        return !0
    };
    t.prototype.Er = function (a) {
        return a ? this.b.Sj(a, this.Cd, this.Dd) : !1
    };
    t.prototype.Qr = function (a) {
        return a ? this.b.Sj(a, this.Cd, this.Dd) : !1
    };
    t.prototype.Ar = function (a) {
        return a ? this.b.Sj(a, this.Cd, this.Dd) : !1
    };
    c.g = new t;
    d.prototype.qk = function (a, b) {
        var c = this.Rf;
        if (0 > c || c >= this.touches.length) a.H(0);
        else {
            var d, e, f, g, h;
            ga(b) ? (d = this.b.Qf(0), e = d.scale, f = d.fe, g = d.Qd, h = d.n, d.scale = 1, d.fe = 1, d.Qd = 1, d.n = 0, a.H(d.Gb(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.fe = f, d.Qd = g, d.n = h) : (d = ha(b) ? this.b.Qf(b) : this.b.Ri(b)) ? a.H(d.Gb(this.touches[c].x, this.touches[c].y, !0)) : a.H(0)
        }
    };
    d.prototype.wn = function (a, b) {
        var c = this.Rf;
        if (0 > c || c >= this.touches.length) a.H(0);
        else {
            var d, e, f, g, h;
            ga(b) ? (d = this.b.Qf(0), e = d.scale, f = d.fe, g = d.Rd, h = d.n, d.scale = 1, d.fe = 1, d.Rd = 1, d.n = 0, a.H(d.Gb(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.fe = f, d.Rd = g, d.n = h) : (d = ha(b) ? this.b.Qf(b) : this.b.Ri(b)) ? a.H(d.Gb(this.touches[c].x, this.touches[c].y, !1)) : a.H(0)
        }
    };
    c.C = new d
})();

function uc(f) {
    this.b = f
}
(function () {
    var f = uc.prototype;
    f.wa = function (b) {
        this.behavior = b;
        this.b = b.b
    };
    f.wa.prototype.S = function () { };
    f.la = function (b, f) {
        this.type = b;
        this.behavior = b.behavior;
        this.j = f;
        this.b = b.b
    };
    var l = f.la.prototype;
    l.S = function () {
        this.En = this.F[0];
        this.Fn = this.F[1];
        this.Ls = this.F[2];
        this.Ks = this.F[3];
        this.j.Aa();
        this.Um = this.j.Ha.left;
        this.Xm = this.j.Ha.top;
        this.Vm = this.b.Ma - this.j.Ha.left;
        this.Wm = this.b.La - this.j.Ha.top;
        this.om = this.b.Ma - this.j.Ha.right;
        this.zk = this.b.La - this.j.Ha.bottom;
        this.enabled = 0 !== this.F[4]
    };
    l.nb = function () {
        return {
            xleft: this.Um,
            ytop: this.Xm,
            xright: this.Vm,
            ybottom: this.Wm,
            rdiff: this.om,
            bdiff: this.zk,
            enabled: this.enabled
        }
    };
    l.Cb = function (b) {
        this.Um = b.xleft;
        this.Xm = b.ytop;
        this.Vm = b.xright;
        this.Wm = b.ybottom;
        this.om = b.rdiff;
        this.zk = b.bdiff;
        this.enabled = b.enabled
    };
    l.gb = function () {
        if (this.enabled) {
            var b, f = this.j.q,
                l = this.j,
                d = this.j.Ha;
            0 === this.En ? (l.Aa(), b = f.Ba + this.Um - d.left, 0 !== b && (l.x += b, l.ua())) : 1 === this.En && (l.Aa(), b = f.Ga - this.Vm - d.left, 0 !== b && (l.x += b, l.ua()));
            0 === this.Fn ? (l.Aa(), b = f.Ca +
                this.Xm - d.top, 0 !== b && (l.y += b, l.ua())) : 1 === this.Fn && (l.Aa(), b = f.Fa - this.Wm - d.top, 0 !== b && (l.y += b, l.ua()));
            1 === this.Ls && (l.Aa(), b = f.Ga - this.om - d.right, 0 !== b && (l.width += b, 0 > l.width && (l.width = 0), l.ua()));
            1 === this.Ks && (l.Aa(), b = f.Fa - this.zk - d.bottom, 0 !== b && (l.height += b, 0 > l.height && (l.height = 0), l.ua()))
        }
    };
    f.g = new function () { };
    f.u = new function () { };
    f.C = new function () { }
})();

function vc(f) {
    this.b = f
}
(function () {
    function f() { }

    function l() { }
    var b = vc.prototype;
    b.wa = function (b) {
        this.behavior = b;
        this.b = b.b
    };
    b.wa.prototype.S = function () { };
    b.la = function (b, d) {
        this.type = b;
        this.behavior = b.behavior;
        this.j = d;
        this.b = b.b
    };
    var n = b.la.prototype;
    n.S = function () {
        var b = 1 === this.F[0];
        this.Vg = this.F[1];
        this.hi = this.F[2];
        this.Ii = this.F[3];
        this.$s = this.F[4];
        this.vc = b ? 0 : 3;
        this.jc ? this.Ic.reset() : this.Ic = new fb;
        this.tf = this.j.opacity ? this.j.opacity : 1;
        b && (0 === this.Vg ? (this.vc = 1, 0 === this.hi && (this.vc = 2)) : (this.j.opacity = 0, this.b.ca = !0))
    };
    n.nb = function () {
        return {
            fit: this.Vg,
            wt: this.hi,
            fot: this.Ii,
            s: this.vc,
            st: this.Ic.J,
            mo: this.tf
        }
    };
    n.Cb = function (b) {
        this.Vg = b.fit;
        this.hi = b.wt;
        this.Ii = b.fot;
        this.vc = b.s;
        this.Ic.reset();
        this.Ic.J = b.st;
        this.tf = b.mo
    };
    n.gb = function () {
        this.Ic.add(this.b.Yg(this.j));
        0 === this.vc && (this.j.opacity = this.Ic.J / this.Vg * this.tf, this.b.ca = !0, this.j.opacity >= this.tf && (this.j.opacity = this.tf, this.vc = 1, this.Ic.reset(), this.b.trigger(vc.prototype.g.Br, this.j)));
        1 === this.vc && this.Ic.J >= this.hi && (this.vc = 2, this.Ic.reset(), this.b.trigger(vc.prototype.g.Rr, this.j));
        2 === this.vc && 0 !== this.Ii && (this.j.opacity = this.tf - this.Ic.J / this.Ii * this.tf, this.b.ca = !0, 0 > this.j.opacity && (this.j.opacity = 0, this.vc = 3, this.Ic.reset(), this.b.trigger(vc.prototype.g.Cr, this.j), 1 === this.$s && this.b.ge(this.j)))
    };
    n.mt = function () {
        this.vc = 0;
        this.Ic.reset();
        0 === this.Vg ? (this.vc = 1, 0 === this.hi && (this.vc = 2)) : (this.j.opacity = 0, this.b.ca = !0)
    };
    f.prototype.Cr = function () {
        return !0
    };
    f.prototype.Br = function () {
        return !0
    };
    f.prototype.Rr = function () {
        return !0
    };
    b.g = new f;
    l.prototype.$r = function () {
        this.mt()
    };
    b.u = new l;
    b.C = new function () { }
})();

function wc(f) {
    this.b = f
}
(function () {
    function f() { }

    function l() { }
    var b = wc.prototype;
    b.wa = function (b) {
        this.behavior = b;
        this.b = b.b
    };
    b.wa.prototype.S = function () { };
    b.la = function (b, d) {
        this.type = b;
        this.behavior = b.behavior;
        this.j = d;
        this.b = b.b
    };
    var n = b.la.prototype;
    n.S = function () {
        this.Oa = null;
        this.wj = -1;
        this.mode = this.eg = this.Vj = this.lg = this.Td = this.Mh = 0;
        var b = this;
        this.jc || (this.np = function (d) {
            b.$l(d)
        });
        this.b.Bn(this.np)
    };
    n.nb = function () {
        return {
            uid: this.Oa ? this.Oa.uid : -1,
            pa: this.Mh,
            pd: this.Td,
            msa: this.lg,
            tsa: this.Vj,
            lka: this.eg,
            m: this.mode
        }
    };
    n.Cb = function (b) {
        this.wj = b.uid;
        this.Mh = b.pa;
        this.Td = b.pd;
        this.lg = b.msa;
        this.Vj = b.tsa;
        this.eg = b.lka;
        this.mode = b.m
    };
    n.ad = function () {
        -1 === this.wj ? this.Oa = null : this.Oa = this.b.Zg(this.wj);
        this.wj = -1
    };
    n.$l = function (b) {
        this.Oa == b && (this.Oa = null)
    };
    n.Be = function () {
        this.Oa = null;
        this.b.Hv(this.np)
    };
    n.gb = function () { };
    n.bi = function () {
        if (this.Oa) {
            this.eg !== this.j.n && (this.lg = Ka(this.lg + (this.j.n - this.eg)));
            var b = this.j.x,
                d = this.j.y;
            if (3 === this.mode || 4 === this.mode) {
                var c = Ta(this.j.x, this.j.y, this.Oa.x, this.Oa.y);
                if (c > this.Td || 4 === this.mode && c < this.Td) d = Oa(this.Oa.x, this.Oa.y, this.j.x, this.j.y), b = this.Oa.x + Math.cos(d) * this.Td, d = this.Oa.y + Math.sin(d) * this.Td
            } else b = this.Oa.x + Math.cos(this.Oa.n + this.Mh) * this.Td, d = this.Oa.y + Math.sin(this.Oa.n + this.Mh) * this.Td;
            this.eg = c = Ka(this.lg + (this.Oa.n - this.Vj));
            0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.j.x === b && this.j.y === d || (this.j.x = b, this.j.y = d, this.j.ua());
            0 !== this.mode && 2 !== this.mode || this.j.n === c || (this.j.n = c, this.j.ua())
        }
    };
    f.prototype.nr = function () {
        return !!this.Oa
    };
    b.g = new f;
    l.prototype.Xr = function (b, d) {
        if (b) {
            var c = b.to(this.j);
            c && (this.Oa = c, this.Mh = Oa(c.x, c.y, this.j.x, this.j.y) - c.n, this.Td = Ta(c.x, c.y, this.j.x, this.j.y), this.eg = this.lg = this.j.n, this.Vj = c.n, this.mode = d)
        }
    };
    l.prototype.As = function () {
        this.Oa = null
    };
    b.u = new l;
    b.C = new function () { }
})();

function yc(f) {
    this.b = f
}
(function () {
    function f() { }
    var l = yc.prototype;
    l.wa = function (b) {
        this.behavior = b;
        this.b = b.b
    };
    l.wa.prototype.S = function () { };
    l.la = function (b, d) {
        this.type = b;
        this.behavior = b.behavior;
        this.j = d;
        this.b = b.b;
        this.bb = 0
    };
    var b = l.la.prototype,
        n = 2 * Math.PI,
        t = Math.PI / 2,
        d = 3 * Math.PI / 2;
    b.S = function () {
        this.ob = 1 === this.F[0];
        this.Fh = this.F[1];
        this.Sm = this.F[2];
        this.Sd = this.F[3];
        this.Sd += Math.random() * this.F[4];
        0 === this.Sd ? this.bb = 0 : (this.bb = this.F[5] / this.Sd * n, this.bb += Math.random() * this.F[6] / this.Sd * n);
        this.Rb = this.F[7];
        this.Rb += Math.random() * this.F[8];
        this.Ph = this.cf = this.ea = 0;
        this.init()
    };
    b.nb = function () {
        return {
            i: this.bb,
            a: this.ob,
            mv: this.Fh,
            w: this.Sm,
            p: this.Sd,
            mag: this.Rb,
            iv: this.ea,
            iv2: this.cf,
            r: this.Ph,
            lkv: this.gc,
            lkv2: this.rh
        }
    };
    b.Cb = function (b) {
        this.bb = b.i;
        this.ob = b.a;
        this.Fh = b.mv;
        this.Sm = b.w;
        this.Sd = b.p;
        this.Rb = b.mag;
        this.ea = b.iv;
        this.cf = b.iv2 || 0;
        this.Ph = b.r;
        this.gc = b.lkv;
        this.rh = b.lkv2 || 0
    };
    b.init = function () {
        switch (this.Fh) {
            case 0:
                this.ea = this.j.x;
                break;
            case 1:
                this.ea = this.j.y;
                break;
            case 2:
                this.ea = this.j.width;
                this.Ph = this.j.height / this.j.width;
                break;
            case 3:
                this.ea = this.j.width;
                break;
            case 4:
                this.ea = this.j.height;
                break;
            case 5:
                this.ea = this.j.n;
                this.Rb = G(this.Rb);
                break;
            case 6:
                this.ea = this.j.opacity;
                break;
            case 7:
                this.ea = 0;
                break;
            case 8:
                this.ea = this.j.x, this.cf = this.j.y
        }
        this.gc = this.ea;
        this.rh = this.cf
    };
    b.de = function (b) {
        b = b % n;
        switch (this.Sm) {
            case 0:
                return Math.sin(b);
            case 1:
                return b <= t ? b / t : b <= d ? 1 - 2 * (b - t) / Math.PI : (b - d) / t - 1;
            case 2:
                return 2 * b / n - 1;
            case 3:
                return -2 * b / n + 1;
            case 4:
                return b < Math.PI ? -1 : 1
        }
        return 0
    };
    b.gb =
        function () {
            var b = this.b.Yg(this.j);
            if (this.ob && 0 !== b) {
                0 === this.Sd ? this.bb = 0 : (this.bb += b / this.Sd * n, this.bb = this.bb % n);
                switch (this.Fh) {
                    case 0:
                        this.j.x !== this.gc && (this.ea += this.j.x - this.gc);
                        this.j.x = this.ea + this.de(this.bb) * this.Rb;
                        this.gc = this.j.x;
                        break;
                    case 1:
                        this.j.y !== this.gc && (this.ea += this.j.y - this.gc);
                        this.j.y = this.ea + this.de(this.bb) * this.Rb;
                        this.gc = this.j.y;
                        break;
                    case 2:
                        this.j.width = this.ea + this.de(this.bb) * this.Rb;
                        this.j.height = this.j.width * this.Ph;
                        break;
                    case 3:
                        this.j.width = this.ea + this.de(this.bb) * this.Rb;
                        break;
                    case 4:
                        this.j.height = this.ea + this.de(this.bb) * this.Rb;
                        break;
                    case 5:
                        this.j.n !== this.gc && (this.ea = Ka(this.ea + (this.j.n - this.gc)));
                        this.j.n = Ka(this.ea + this.de(this.bb) * this.Rb);
                        this.gc = this.j.n;
                        break;
                    case 6:
                        this.j.opacity = this.ea + this.de(this.bb) * this.Rb / 100;
                        0 > this.j.opacity ? this.j.opacity = 0 : 1 < this.j.opacity && (this.j.opacity = 1);
                        break;
                    case 8:
                        this.j.x !== this.gc && (this.ea += this.j.x - this.gc), this.j.y !== this.rh && (this.cf += this.j.y - this.rh), this.j.x = this.ea + Math.cos(this.j.n) * this.de(this.bb) * this.Rb, this.j.y = this.cf + Math.sin(this.j.n) * this.de(this.bb) * this.Rb, this.gc = this.j.x, this.rh = this.j.y
                }
                this.j.ua()
            }
        };
    b.yp = function (b, d) {
        switch (this.Fh) {
            case 2:
                this.ea *= d.width / b.width;
                this.Ph = d.height / d.width;
                break;
            case 3:
                this.ea *= d.width / b.width;
                break;
            case 4:
                this.ea *= d.height / b.height
        }
    };
    l.g = new function () { };
    f.prototype.cs = function (b) {
        this.ob = 1 === b
    };
    l.u = new f;
    l.C = new function () { }
})();

function zc(f) {
    this.b = f
}
(function () {
    var f = zc.prototype;
    f.wa = function (b) {
        this.behavior = b;
        this.b = b.b
    };
    f.wa.prototype.S = function () { };
    f.la = function (b, f) {
        this.type = b;
        this.behavior = b.behavior;
        this.j = f;
        this.b = b.b
    };
    var l = f.la.prototype;
    l.S = function () {
        this.Ub = {}
    };
    l.Be = function () {
        ab(this.Ub)
    };
    l.nb = function () {
        var b = {},
            f, l;
        for (f in this.Ub) this.Ub.hasOwnProperty(f) && (l = this.Ub[f], b[f] = {
            c: l.current.J,
            t: l.total.J,
            d: l.duration,
            r: l.Vp
        });
        return b
    };
    l.Cb = function (b) {
        this.Ub = {};
        for (var f in b) b.hasOwnProperty(f) && (this.Ub[f] = {
            current: new fb,
            total: new fb,
            duration: b[f].d,
            Vp: b[f].r
        }, this.Ub[f].current.J = b[f].c, this.Ub[f].total.J = b[f].t)
    };
    l.gb = function () {
        var b = this.b.Yg(this.j),
            f, l;
        for (f in this.Ub) this.Ub.hasOwnProperty(f) && (l = this.Ub[f], l.current.add(b), l.total.add(b))
    };
    l.bi = function () {
        var b, f;
        for (b in this.Ub) this.Ub.hasOwnProperty(b) && (f = this.Ub[b], f.current.J >= f.duration && (f.Vp ? f.current.J -= f.duration : delete this.Ub[b]))
    };
    f.g = new function () { };
    f.u = new function () { };
    f.C = new function () { }
})();

function nc() {
    return [pc, qc, oc, W, rc, tc, sc, Z, V, zc, wc, vc, yc, uc, N.prototype.g.jn, wc.prototype.u.Xr, oc.prototype.u.CallFunction, N.prototype.u.os, V.prototype.C.wn, V.prototype.g.Tq, sc.prototype.g.fk, V.prototype.C.bn, N.prototype.g.kr, N.prototype.g.Uq, Z.prototype.g.qr, V.prototype.g.gk, V.prototype.g.$m, V.prototype.g.Vr, N.prototype.g.Rq, V.prototype.g.fk, V.prototype.u.Fq, N.prototype.C.te, V.prototype.u.sn, V.prototype.u.vn, N.prototype.g.ys, N.prototype.g.an, Z.prototype.g.lk, tc.prototype.g.cn, V.prototype.u.gs, V.prototype.C.Jq, yc.prototype.u.cs, V.prototype.u.tn, Z.prototype.g.mk, V.prototype.g.Tr, oc.prototype.C.Zm, V.prototype.u.es, V.prototype.C.zs, N.prototype.u.Gq, N.prototype.C.round, N.prototype.u.Xq, V.prototype.C.qk, sc.prototype.u.ok, sc.prototype.u.ns, qc.prototype.u.Play, Z.prototype.C.qk, Z.prototype.g.lr, oc.prototype.g.ji, tc.prototype.u.tn, tc.prototype.u.nk, N.prototype.C.mw, N.prototype.C.nw, N.prototype.C.lw, N.prototype.C.ow, tc.prototype.u.un, tc.prototype.u.dn, tc.prototype.u.ok, tc.prototype.u.sn, V.prototype.u.ok, V.prototype.u.un, V.prototype.u.dn, V.prototype.g.cn, V.prototype.u.$q, V.prototype.u.js, N.prototype.u.Bs, N.prototype.C.qw, N.prototype.C.floor, V.prototype.u.qs, wc.prototype.u.As, tc.prototype.u.pk, oc.prototype.C.as, N.prototype.g.Sq, N.prototype.C.ceil, pc.prototype.u.nk, pc.prototype.u.Oq, pc.prototype.g.Lq, pc.prototype.u.pk, pc.prototype.C.Yq, N.prototype.C.random, pc.prototype.C.ki, pc.prototype.C.Mq, pc.prototype.u.Zq, oc.prototype.C.Sr, N.prototype.g.Yr, V.prototype.C.ki, N.prototype.C.gv, oc.prototype.u.ms, N.prototype.g.er, N.prototype.g.Ur, N.prototype.g.fr, N.prototype.g.cr, tc.prototype.g.fk, tc.prototype.C.Opacity, tc.prototype.g.$m, N.prototype.g.br, V.prototype.u.bs, V.prototype.u.vs, V.prototype.u.ls, N.prototype.C.bv, N.prototype.u.ws, sc.prototype.C.Text, qc.prototype.g.pr, sc.prototype.g.gk, qc.prototype.u.ts, N.prototype.C.abs, V.prototype.g.gn, V.prototype.u.rk, V.prototype.C.Wr, V.prototype.u.hs, wc.prototype.g.nr, V.prototype.C.Hq, tc.prototype.u.rk, sc.prototype.u.rk, V.prototype.u.ss, V.prototype.C.Kq, vc.prototype.u.$r, V.prototype.u.ds, V.prototype.g.en, qc.prototype.u.us, rc.prototype.g.hn, W.prototype.u.hr, W.prototype.C.dr, N.prototype.C.pf, N.prototype.u.gr, tc.prototype.u.ps, tc.prototype.g.gk, tc.prototype.C.ki, N.prototype.g.mr, W.prototype.u.Nq, W.prototype.g.or, N.prototype.u.ks, W.prototype.g.pn, W.prototype.u.Wq, N.prototype.u.Zr]
};