/*! function() {
    var e, r, n = (e = function(e, r) {
            (function(e, n) {
                var t = m.nextTick,
                    o = (Function.prototype.apply, Array.prototype.slice),
                    i = {},
                    a = 0;

                function f(e, r) {
                    this._id = e, this._clearFn = r
                }
                f.prototype.unref = f.prototype.ref = function() {}, f.prototype.close = function() {
                    this._clearFn.call(window, this._id)
                }, r.setImmediate = "function" == typeof e ? e : function(e) {
                    var n = a++,
                        f = !(arguments.length < 2) && o.call(arguments, 1);
                    return i[n] = !0, t((function() {
                        i[n] && (f ? e.apply(null, f) : e.call(null), r.clearImmediate(n))
                    })), n
                }, r.clearImmediate = "function" == typeof n ? n : function(e) {
                    delete i[e]
                }
            }).call(this, n({}).setImmediate, n({}).clearImmediate)
        }, function(n) {
            return r || e(r = {
                exports: {},
                parent: n
            }, r.exports), r.exports
        }),
        t = {};
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.convertDataURIToBinary = t.isBase64Url = void 0, t.isBase64Url = function(e) {
        return e.indexOf(";base64,") > -1
    }, t.convertDataURIToBinary = function(e) {
        for (var r = e.indexOf(";base64,") + ";base64,".length, n = e.substring(r), t = window.atob(n), o = t.length, i = new Uint8Array(new ArrayBuffer(o)), a = 0; a < o; a++) i[a] = t.charCodeAt(a);
        return i
    };
    var o = {},
        i = this && this.__awaiter || function(e, n, t, o) {
            return new(t || (t = Promise))((function(i, a) {
                function f(e) {
                    try {
                        s(o.next(e))
                    } catch (r) {
                        a(r)
                    }
                }

                function u(e) {
                    try {
                        s(o.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }

                function s(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
                        e(r)
                    }))).then(f, u)
                }
                s((o = o.apply(e, n || [])).next())
            }))
        },
        a = this && this.__generator || function(e, n) {
            var t, o, i, a, f = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }), a;

            function u(a) {
                return function(u) {
                    return function(a) {
                        if (t) throw new TypeError("Generator is already executing.");
                        for (; f;) try {
                            if (t = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, a[1])).done) return i;
                            switch (o = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                case 0:
                                case 1:
                                    i = a;
                                    break;
                                case 4:
                                    return f.label++, {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    f.label++, o = a[1], a = [0];
                                    continue;
                                case 7:
                                    a = f.ops.pop(), f.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = f.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        f = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                        f.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && f.label < i[1]) {
                                        f.label = i[1], i = a;
                                        break
                                    }
                                    if (i && f.label < i[2]) {
                                        f.label = i[2], f.ops.push(a);
                                        break
                                    }
                                    i[2] && f.ops.pop(), f.trys.pop();
                                    continue
                            }
                            a = n.call(e, f)
                        } catch (r) {
                            a = [6, r], o = 0
                        } finally {
                            t = i = 0
                        }
                        if (5 & a[0]) throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, u])
                }
            }
        };
    Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.detectWebpSupport = void 0, o.detectWebpSupport = function() {
        return i(this, void 0, void 0, (function() {
            var e, r;
            return a(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return e = ["data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==", "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="], r = function(e) {
                            return new Promise((function(r, n) {
                                var t = document.createElement("img");
                                t.onerror = function(e) {
                                    return r(!1)
                                }, t.onload = function() {
                                    return r(!0)
                                }, t.src = e
                            }))
                        }, [4, Promise.all(e.map(r))];
                    case 1:
                        return [2, n.sent().every((function(e) {
                            return !!e
                        }))]
                }
            }))
        }))
    };
    var f = {};
    Object.defineProperty(f, "__esModule", {
        value: !0
    });
    var u, s = {},
        c = this && this.__extends || (u = function(e, r) {
            return (u = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, r) {
                    e.__proto__ = r
                } || function(e, r) {
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                })(e, r)
        }, function(e, r) {
            function n() {
                this.constructor = e
            }
            u(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
        }),
        l = this && this.__awaiter || function(e, n, t, o) {
            return new(t || (t = Promise))((function(i, a) {
                function f(e) {
                    try {
                        s(o.next(e))
                    } catch (r) {
                        a(r)
                    }
                }

                function u(e) {
                    try {
                        s(o.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }

                function s(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
                        e(r)
                    }))).then(f, u)
                }
                s((o = o.apply(e, n || [])).next())
            }))
        },
        d = this && this.__generator || function(e, n) {
            var t, o, i, a, f = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }), a;

            function u(a) {
                return function(u) {
                    return function(a) {
                        if (t) throw new TypeError("Generator is already executing.");
                        for (; f;) try {
                            if (t = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, a[1])).done) return i;
                            switch (o = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                case 0:
                                case 1:
                                    i = a;
                                    break;
                                case 4:
                                    return f.label++, {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    f.label++, o = a[1], a = [0];
                                    continue;
                                case 7:
                                    a = f.ops.pop(), f.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = f.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        f = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                        f.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && f.label < i[1]) {
                                        f.label = i[1], i = a;
                                        break
                                    }
                                    if (i && f.label < i[2]) {
                                        f.label = i[2], f.ops.push(a);
                                        break
                                    }
                                    i[2] && f.ops.pop(), f.trys.pop();
                                    continue
                            }
                            a = n.call(e, f)
                        } catch (r) {
                            a = [6, r], o = 0
                        } finally {
                            t = i = 0
                        }
                        if (5 & a[0]) throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, u])
                }
            }
        };
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), s.loadBinaryData = s.LoadingError = void 0;
    var A = function(e) {
        function r() {
            return null !== e && e.apply(this, arguments) || this
        }
        return c(r, e), r
    }(Error);
    s.LoadingError = A, s.loadBinaryData = function(e) {
        return l(this, void 0, void 0, (function() {
            return d(this, (function(r) {
                return [2, new Promise((function(r, n) {
                    var t = new XMLHttpRequest;
                    t.open("GET", e), t.responseType = "arraybuffer";
                    var o = function() {
                        n(new A('failed to load binary data, code "' + t.status + '" from "' + e + '"'))
                    };
                    t.onerror = o, t.onreadystatechange = function() {
                        4 == t.readyState && (200 == t.status ? r(new Uint8Array(t.response)) : o())
                    }, t.send()
                }))]
            }))
        }))
    };
    var v, p, m = {},
        g = m = {};

    function h() {
        throw new Error("setTimeout has not been defined")
    }

    function b() {
        throw new Error("clearTimeout has not been defined")
    }

    function k(e) {
        if (v === setTimeout) return setTimeout(e, 0);
        if ((v === h || !v) && setTimeout) return v = setTimeout, setTimeout(e, 0);
        try {
            return v(e, 0)
        } catch (r) {
            try {
                return v.call(null, e, 0)
            } catch (r) {
                return v.call(this, e, 0)
            }
        }
    }! function() {
        try {
            v = "function" == typeof setTimeout ? setTimeout : h
        } catch (r) {
            v = h
        }
        try {
            p = "function" == typeof clearTimeout ? clearTimeout : b
        } catch (r) {
            p = b
        }
    }();
    var w, y = [],
        C = !1,
        E = -1;

    function I() {
        C && w && (C = !1, w.length ? y = w.concat(y) : E = -1, y.length && _())
    }

    function _() {
        if (!C) {
            var e = k(I);
            C = !0;
            for (var n = y.length; n;) {
                for (w = y, y = []; ++E < n;) w && w[E].run();
                E = -1, n = y.length
            }
            w = null, C = !1,
                function(e) {
                    if (p === clearTimeout) return clearTimeout(e);
                    if ((p === b || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e);
                    try {
                        p(e)
                    } catch (r) {
                        try {
                            return p.call(null, e)
                        } catch (r) {
                            return p.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function D(e, r) {
        this.fun = e, this.array = r
    }

    function x() {}
    g.nextTick = function(e) {
        var r = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
        y.push(new D(e, r)), 1 !== y.length || C || k(_)
    }, D.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, g.title = "browser", g.browser = !0, g.env = {}, g.argv = [], g.version = "", g.versions = {}, g.on = x, g.addListener = x, g.once = x, g.off = x, g.removeListener = x, g.removeAllListeners = x, g.emit = x, g.prependListener = x, g.prependOnceListener = x, g.listeners = function(e) {
        return []
    }, g.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, g.cwd = function() {
        return "/"
    }, g.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, g.umask = function() {
        return 0
    };
    var S = {};
    (function(e) {
        S = {
            Webp: function() {
                var n, t = void 0 !== t ? t : {},
                    o = function() {
                        function n() {}

                        function t(e) {
                            if (!(this instanceof t)) throw new TypeError("Promises must be constructed via new");
                            if ("function" != typeof e) throw new TypeError("not a function");
                            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], s(e, this)
                        }

                        function o(e, n) {
                            for (; 3 === e._state;) e = e._value;
                            0 !== e._state ? (e._handled = !0, t._immediateFn((function() {
                                var t = 1 === e._state ? n.onFulfilled : n.onRejected;
                                if (null !== t) {
                                    var o;
                                    try {
                                        o = t(e._value)
                                    } catch (r) {
                                        return void a(n.promise, r)
                                    }
                                    i(n.promise, o)
                                } else(1 === e._state ? i : a)(n.promise, e._value)
                            }))) : e._deferreds.push(n)
                        }

                        function i(e, n) {
                            try {
                                if (n === e) throw new TypeError("A promise cannot be resolved with itself.");
                                if (n && ("object" == typeof n || "function" == typeof n)) {
                                    var o = n.then;
                                    if (n instanceof t) return e._state = 3, e._value = n, void f(e);
                                    if ("function" == typeof o) return void s((i = o, u = n, function() {
                                        i.apply(u, arguments)
                                    }), e)
                                }
                                e._state = 1, e._value = n, f(e)
                            } catch (r) {
                                a(e, r)
                            }
                            var i, u
                        }

                        function a(e, r) {
                            e._state = 2, e._value = r, f(e)
                        }

                        function f(e) {
                            2 === e._state && 0 === e._deferreds.length && t._immediateFn((function() {
                                e._handled || t._unhandledRejectionFn(e._value)
                            }));
                            for (var r = 0, n = e._deferreds.length; r < n; r++) o(e, e._deferreds[r]);
                            e._deferreds = null
                        }

                        function u(e, r, n) {
                            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof r ? r : null, this.promise = n
                        }

                        function s(e, r) {
                            var n = !1;
                            try {
                                e((function(e) {
                                    n || (n = !0, i(r, e))
                                }), (function(e) {
                                    n || (n = !0, a(r, e))
                                }))
                            } catch (t) {
                                if (n) return;
                                n = !0, a(r, t)
                            }
                        }
                        return t.prototype.catch = function(e) {
                            return this.then(null, e)
                        }, t.prototype.then = function(e, r) {
                            var t = new this.constructor(n);
                            return o(this, new u(e, r, t)), t
                        }, t.all = function(e) {
                            return new t((function(r, n) {
                                if (!Array.isArray(e)) return n(new TypeError("Promise.all accepts an array"));
                                var t = Array.prototype.slice.call(e);
                                if (0 === t.length) return r([]);
                                var o = t.length;

                                function i(e, a) {
                                    try {
                                        if (a && ("object" == typeof a || "function" == typeof a)) {
                                            var f = a.then;
                                            if ("function" == typeof f) return void f.call(a, (function(r) {
                                                i(e, r)
                                            }), n)
                                        }
                                        t[e] = a, 0 == --o && r(t)
                                    } catch (u) {
                                        n(u)
                                    }
                                }
                                for (var a = 0; a < t.length; a++) i(a, t[a])
                            }))
                        }, t.resolve = function(e) {
                            return e && "object" == typeof e && e.constructor === t ? e : new t((function(r) {
                                r(e)
                            }))
                        }, t.reject = function(e) {
                            return new t((function(r, n) {
                                n(e)
                            }))
                        }, t.race = function(e) {
                            return new t((function(r, n) {
                                if (!Array.isArray(e)) return n(new TypeError("Promise.race accepts an array"));
                                for (var o = 0, i = e.length; o < i; o++) t.resolve(e[o]).then(r, n)
                            }))
                        }, t._immediateFn = "function" == typeof e && function(r) {
                            e(r)
                        } || function(e) {
                            setTimeout(e, 0)
                        }, t._unhandledRejectionFn = function(e) {
                            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                        }, t
                    }(),
                    i = {};
                for (n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
                var a, f, u, s = [],
                    c = "";
                document.currentScript && (c = document.currentScript.src), c = 0 !== c.indexOf("blob:") ? c.substr(0, c.lastIndexOf("/") + 1) : "", a = function(e) {
                    try {
                        var r = new XMLHttpRequest;
                        return r.open("GET", e, !1), r.send(null), r.responseText
                    } catch (d) {
                        var n = Ce(e);
                        if (n) return function(e) {
                            for (var r = [], n = 0; n < e.length; n++) {
                                var t = e[n];
                                t > 255 && (t &= 255), r.push(String.fromCharCode(t))
                            }
                            return r.join("")
                        }(n);
                        throw d
                    }
                }, f = function(e, r, n) {
                    var t = new XMLHttpRequest;
                    t.open("GET", e, !0), t.responseType = "arraybuffer", t.onload = function() {
                        if (200 == t.status || 0 == t.status && t.response) r(t.response);
                        else {
                            var o = Ce(e);
                            o ? r(o.buffer) : n()
                        }
                    }, t.onerror = n, t.send(null)
                };
                var l = t.print || console.log.bind(console),
                    d = t.printErr || console.warn.bind(console);
                for (n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
                i = null, t.arguments && (s = t.arguments), t.thisProgram && t.thisProgram, t.quit && t.quit;

                function A(e) {
                    A.shown || (A.shown = {}), A.shown[e] || (A.shown[e] = 1, d(e))
                }
                var v, p = 0;
                t.wasmBinary && (v = t.wasmBinary), t.noExitRuntime && t.noExitRuntime;
                var m, g = {
                    Memory: function(e) {
                        this.buffer = new ArrayBuffer(65536 * e.initial), this.grow = function(e) {
                            return Re(e)
                        }
                    },
                    Table: function(e) {
                        var r = new Array(e.initial);
                        return r.set = function(e, n) {
                            r[e] = n
                        }, r.get = function(e) {
                            return r[e]
                        }, r
                    },
                    Module: function(e) {},
                    Instance: function(e, r) {
                        this.exports = function(e, r, n) {
                            for (var t = new Uint8Array(r.buffer), o = new Uint8Array(123), i = 25; i >= 0; --i) o[48 + i] = 52 + i, o[65 + i] = i, o[97 + i] = 26 + i;

                            function a(e, r, n) {
                                for (var t, i, a = 0, f = r, u = n.length, s = r + (3 * u >> 2) - ("=" == n[u - 2]) - ("=" == n[u - 1]); a < u; a += 4) t = o[n.charCodeAt(a + 1)], i = o[n.charCodeAt(a + 2)], e[f++] = o[n.charCodeAt(a)] << 2 | t >> 4, f < s && (e[f++] = t << 4 | i >> 2), f < s && (e[f++] = i << 6 | o[n.charCodeAt(a + 3)])
                            }
                            return o[43] = 62, o[47] = 63, a(t, 1024, "TGlicmFyeSB2ZXJzaW9uIG1pc21hdGNoIQoAVW5hYmxlIHRvIHNldCB2aWRlbyBtb2RlICgzMmJwcCAlZHglZCkhCgBVbmFibGUgdG8gY3JlYXRlICVkeCVkIFJHQkEgc3VyZmFjZSEKAEVycm9yIGRlY29kaW5nIGltYWdlICglZCkKAAMEAwQEAgIEBAQCAQE="), a(t, 1184, "iguMC44LkguaC6oLygsKDIwMjA2MD4wTGAEAAQABAAEo"), a(t, 1232, "ERIAAQIDBAUQBgcICQoLDA0ODwIDBwMDCwAAAAAAAAAYBxcZKAYnKRYaJio4BTc5FRs2OiUrSARHSRQcNTtGSiQsWEVLNDwDV1kTHVZaIy1ETFVbMz1oAmdpEh5maiIuVFxDTWVrMj54AXd5U10RH2RsQk52eiEvdXsxP2NtUl4AdHxBTxAgYm4wc31RX0ByfmFvUHF/YHAAAAAAAAAAAP///////////////////////////////////////////7D2////////////3/H8///////////5/f3////////////0/P//////////6v7+///////////9///////////////2/v//////////7/3+///////////+//7////////////4/v//////////+//+///////////////////////////9/v//////////+/7+///////////+//7////////////+/f/+////////+v/+//7////////+/////////////////////////////////////////////////////////9n/////////////4fzx/f///v/////q+vH6/f/9/v/////+////////////3/7+///////////u/f7+///////////4/v//////////+f7////////////////////////////9////////////9/7////////////////////////////9/v///////////P/////////////////////////////+/v///////////f/////////////////////////////+/f//////////+v/////////////+/////////////////////////////////////////////////////////7r7+v//////////6vv0/v/////////7+/P9/v/+///////9/v//////////7P3+///////////7/f3+/v/////////+/v///////////v7+///////////////////////////+/////////////v7////////////+/////////////////////////////v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////j/////////////+v78/v/////////4/vn9///////////9/f//////////9v39///////////8/vv+/v/////////+/P//////////+P79///////////9//7+///////////7/v//////////9fv+///////////9/f7////////////7/f///////////P3+/////////////v/////////////8////////////+f/+//////////////7//////////////f//////////+v///////////////////////////////////////////v///////////////////////////4CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP2I/v/k24CAgICAvYHy/+PV/9uAgIBqfuP81tH//4CAgAFi+P/s4v//gICAtYXu/t3q/5qAgIBOhsr3xrT/24CAgAG5+f/z/4CAgICAuJb3/+zggICAgIBNbtj/7OaAgICAgAFl+//x/4CAgICAqovx/OzR//+AgIAldMTz5P///4CAgAHM/v/1/4CAgICAz6D6/+6AgICAgIBmZ+f/06uAgICAgAGY/P/w/4CAgICAsYfz/+rhgICAgIBQgdP/wuCAgICAgAEB/4CAgICAgICA9gH/gICAgICAgID/gICAgICAgICAgMYj7d/Bu6KgkZs+gy3G3ayw3J383QFEL5LQlafdov/fgAGV8f/d4P//gICAuI3q/d7c/8eAgIBRY7XysL75yv//gAGB6P3WxfLE//+AY3nS+snG/8qAgIAXW6Pyqrv30v//gAHI9v/q/4CAgICAbbLx/+f1//+AgIAsgsn9zcD//4CAgAGE7/vb0f+lgICAXojh+9q+//+AgIAWZK71uqH/x4CAgAG2+f/o64CAgICAfI/x/+PqgICAgIAjTbX7wdP/zYCAgAGd9//s5///gICAeY3r/+Hj//+AgIAtY7z7w9n/4ICAgAEB+//V/4CAgICAywH4//+AgICAgICJAbH/4P+AgICAgP0J+PvP0P/AgICArw3g88G5+cb//4BJEavdobPsp//qgAFf9/3Ut///gICA71r0+tPR//+AgICbTcP4vMP//4CAgAEY7/va2//NgICAyTPb/8S6gICAgIBFLr7vydr/5ICAgAG/+///gICAgICA36X5/9X/gICAgICNfPj//4CAgICAgAEQ+P//gICAgICAviTm/+z/gICAgICVAf+AgICAgICAgAHi/4CAgICAgICA98D/gICAgICAgIDwgP+AgICAgICAgAGG/P//gICAgICA1T76//+AgICAgIA3Xf+AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMoY1eu6v9yg8K//fia26Km45K7/u4A9Lorbl7Lwqv/YgAFw5vrHv/ef//+Apm3k/NPX/66AgIAnTaLorLT1sv//gAE03PbGx/nc//+AfEq/87fB+t3//4AYR4Lbmqrztv//gAG24fnb8P/ggICAlZbi/NjN/6uAgIAcbKryt8L+3///gAFR5vzMy//AgICAe2bR97zE/+mAgIAUX5nzpK3/y4CAgAHe+P/Y1YCAgICAqK/2/OvN//+AgIAvdNf/09T//4CAgAF57P3U1v//gICAjVTV/MnK/9uAgIAqUKDworn/zYCAgAEB/4CAgICAgICA9AH/gICAgICAgIDuAf+AgICAgICAgOd4MFlzcXiYcJizQH6qdi5GX69Fj1BVUkibZzg6CqvavRENmHIaEaMswxUKrXkYUMMaPixAVZBHCiar1ZAiGqouNxOIoCHORz8UCHJy0AwJ4lEoC2C2VB0QJIa3WYliZWqllEi7ZIKdbyBLUEJmp2NKPijqgCk1CbLxjRoIa0orGpJJpjEXnUEmaaAzNB9zgGhPDBvZ/1cRB1dERyxyMw+6Fy8pDm62txURwkItGWbFvRcSFlhYk5YqLi3EzStht3VVJiOzPSc1yFcaFSvoqzgiM2hyZh1dTSccVas6pVpiQCIWdM4XIiumSWs2IBozAVErH0QZahZAqyThciITFWaEvBBMfD4STl9VOTIwM8FlI5/Xb1kubzyUH6zb5BUSb3BxTVWz/yZ4cigqAcT10QoZbVgrHYym1SUrmj0/HptDLUQB0WRQCCuaATMaR45OThD/gCLFqykoBWbTtwQB3TMyEajRwBcZUoofJKsbpiYs5UNXOqlScxo7sz87WrQ7pl1JmigoFXSP0SInry8PELci3zEtty4RIbcGYg8gtzkuFhiAATYRJUEgSXMcgBeAzSgDCXMzwBIG31clCXM7TUAVL2g3LNoJNjWC4kBaRs0oKRcaOTY5cLgFKSam1R4iGoWYdAoghicTNd0aciBJ/x8JQeoCDwF2SUsgDDPA/6ArM1gfI0NmVTe6VTgVF287zS0lwDcmRnxJZgEiYn1iKlhoVXWvUl9UNVmAZHFlLUtPey8zgFGrATkRBUdmOTUpMSYhDXk5SRoBVSkKQ4pNblovcnMVAgpm/6YXBmUdEApVgGXEGjkSCmZm1SIUK3UUDySjgEQBGmY9RyUiNR/zwEU8RyZJdxzeJUQtgCIBLwv1qz4RE0aSVTc+RiUrJZpko1WgAT8JXIgcQCDJVUsPCQlA/7h3EFYGHAVA/xn4ATgIEYSJ/zd0gDoPFFKHORp5KKQyH4mahRkj2jNnLIODex8GnlYoQIeU4C23gBYaEYPwmg4B0S0QFVtA3gcBxTgVJ5s8ihdm1VMMDTbA/0QvHFUaVVWAgCCSqxILBz+QqwQE9iMbCpKuqwwagL5QI2O0UH42LVV+L1ewMykUIGVLgIt2knSAVTgpD7DsVSUJPkceEXd2/xESimUmPIo3RisajpIkEx6r/2EbFIotPT7bAVG8QCApFHWXjhQVo3ATDD3DgDAEGA=="), a(t, 4417, "Af8C/gMEBv0F/Pv6B/kI+Pc="), a(t, 4448, "BAUGBwgJCgoLDA0ODxARERITFBQVFRYWFxcYGRkaGxwdHh8gISIjJCUlJicoKSorLC0uLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTExNTk9QUVJTVFVWV1hZW11fYGJkZWZoamxucHJ0dnp8foCChIaIioyPkZSXmp0EAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAEgATABQAFQAWABcAGAAZABoAGwAcAB0AHgAfACAAIQAiACMAJAAlACYAJwAoACkAKgArACwALQAuAC8AMAAxADIAMwA0ADUANgA3ADgAOQA6ADwAPgBAAEIARABGAEgASgBMAE4AUABSAFQAVgBYAFoAXABeAGAAYgBkAGYAaABqAGwAbgBwAHIAdAB3AHoAfQCAAIMAhgCJAIwAjwCSAJUAmACbAJ4AoQCkAKcAqgCtALEAtQC5AL0AwQDFAMkAzQDRANUA2QDdAOEA5QDqAO8A9QD5AP4AAwEIAQ0BEgEXARwBCAcGBAQCAgIBAQEBRnJhbWUgc2V0dXAgZmFpbGVkAAACCA=="), a(t, 4882, "BAAIAAwAgACEAIgAjAAAAQQBCAEMAYABhAGIAYwBQ291bGQgbm90IGRlY29kZSBhbHBoYSBkYXRhLgB0aHJlYWQgaW5pdGlhbGl6YXRpb24gZmFpbGVkLgBubyBtZW1vcnkgZHVyaW5nIGZyYW1lIGluaXRpYWxpemF0aW9uLgBPSwBudWxsIFZQOElvIHBhc3NlZCB0byBWUDhHZXRIZWFkZXJzKCkAVHJ1bmNhdGVkIGhlYWRlci4ASW5jb3JyZWN0IGtleWZyYW1lIHBhcmFtZXRlcnMuAEZyYW1lIG5vdCBkaXNwbGF5YWJsZS4AY2Fubm90IHBhcnNlIHBpY3R1cmUgaGVhZGVyAEJhZCBjb2RlIHdvcmQAYmFkIHBhcnRpdGlvbiBsZW5ndGgAY2Fubm90IHBhcnNlIHNlZ21lbnQgaGVhZGVyAGNhbm5vdCBwYXJzZSBmaWx0ZXIgaGVhZGVyAGNhbm5vdCBwYXJzZSBwYXJ0aXRpb25zAE5vdCBhIGtleSBmcmFtZS4ATlVMTCBWUDhJbyBwYXJhbWV0ZXIgaW4gVlA4RGVjb2RlKCku"), a(t, 5329, "AQQIBQIDBgkMDQoHCw4PrZSMALCbjIcAtJ2NhoIA/v7z5sSxmYyFgoEAUHJlbWF0dXJlIGVuZC1vZi1wYXJ0aXRpb24wIGVuY291bnRlcmVkLgBQcmVtYXR1cmUgZW5kLW9mLWZpbGUgZW5jb3VudGVyZWQuAE91dHB1dCBhYm9ydGVkLgBSSUZGAFZQOFg="), a(t, 5488, "gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn9/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/AAAAAAAAAADw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8fLz9PX29/j5+vv8/f7/AAECAwQFBgcICQoLDA0ODw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw=="), a(t, 8032, "AQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAD//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAcGBgUFBQUEBAQEBAQEBAMDAwMDAwMDAwMDAwMDAwMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAf3+/f5+/33+Pn6+/z9/vf4ePl5+nr7e/x8/X3+fv93+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7f4GDhYeJi42PkZOVl5mbnZ+ho6Wnqautr7Gztbe5u72/wcPFx8nLzc/R09XX2dvd3+Hj5efp6+3v8fP19/n7/X8AAAAAAQAAAAMAAAAHAAAADwAAAB8AAAA/AAAAfwAAAP8AAAD/AQAA/wMAAP8HAAD/DwAA/x8AAP8/AAD/fwAA//8AAP//AQD//wMA//8HAP//DwD//x8A//8/AP//fwD///8="), a(t, 9424, "MFLhDYYYswPLrF93amKIHFVcOGgouLMU+P6FSku43UmX8/xkiQJVXAAAKUrawX4Nq7dAWX1XklRyyhlOaYzTOGXuAQxfdaEyUvY3VDIsu1qxV6oP5zP1c9ruX2jizGN1gw6Zbu2nMEfG2cBPPBVrSfoDFE8M+xpUMguZcxzL1yYGN8xv2He7LCovdnXdzCVkYVSzJBWHfQqoFAQiZ78eFIMVtFbjAuVzb7HKREJNJij7rrpz7etQCvu2ah0L1DoNaDvbNYMeCCuVa8538OWBUbw7hXiUlJ8APO3lJy0rICAgMFgweAAobnVsbCkAAAAAEQAKABEREQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAARAA8KERERAwoHAAEACQsLAAAJBgsAAAsABhEAAAARERE="), a(t, 9745, "CwAAAAAAAAAAEQAKChEREQAKAAACAAkLAAAACQALAAAL"), a(t, 9803, "DA=="), a(t, 9815, "DAAAAAAMAAAAAAkMAAAAAAAMAAAM"), a(t, 9861, "Dg=="), a(t, 9873, "DQAAAAQNAAAAAAkOAAAAAAAOAAAO"), a(t, 9919, "EA=="), a(t, 9931, "DwAAAAAPAAAAAAkQAAAAAAAQAAAQAAASAAAAEhIS"), a(t, 9986, "EgAAABISEgAAAAAAAAk="), a(t, 10035, "Cw=="), a(t, 10047, "CgAAAAAKAAAAAAkLAAAAAAALAAAL"), a(t, 10093, "DA=="), a(t, 10105, "DAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVG+Cg="), a(t, 10160, "4BQAAOQUAADpFAAA7xQAAMAnAADEJwAAbBkAAOAdAABfHwAAXyIAANgnAADcJwAA4CcAAOQnAADoJwAA7CcAAPAnAACXAAAAmAAAAJkAAACaAAAAmwAAAJw="), a(t, 10428, "8Cw="), a(t, 10488, "BQ=="), a(t, 10500, "nQ=="), a(t, 10524, "ngAAAJ8AAAAQLQ=="), a(t, 10548, "Ag=="), a(t, 10563, "//////8="),
                                function(e, r, t) {
                                    var o = r.memory,
                                        i = n,
                                        a = new e.Int8Array(t),
                                        f = new e.Int16Array(t),
                                        u = new e.Int32Array(t),
                                        s = new e.Uint8Array(t),
                                        c = new e.Uint16Array(t),
                                        l = new e.Uint32Array(t),
                                        d = (new e.Float32Array(t), new e.Float64Array(t)),
                                        A = e.Math.imul,
                                        v = (e.Math.fround, e.Math.abs, e.Math.clz32),
                                        p = (e.Math.min, e.Math.max, e.Math.floor, e.Math.ceil, e.Math.sqrt, r.abort),
                                        m = (e.NaN, e.Infinity, r.SDL_Init),
                                        g = r.SDL_SetVideoMode,
                                        h = r.SDL_CreateRGBSurface,
                                        b = r.SDL_LockSurface,
                                        k = r.SDL_UnlockSurface,
                                        w = r.SDL_UpperBlit,
                                        y = r.SDL_Flip,
                                        C = r.SDL_FreeSurface,
                                        E = r.fd_close,
                                        I = r.fd_write,
                                        _ = r.emscripten_resize_heap,
                                        D = r.emscripten_memcpy_big,
                                        x = r.setTempRet0,
                                        S = r.fd_seek,
                                        L = 5255072,
                                        P = 0;

                                    function M(e, r) {
                                        var n, t, o = 0,
                                            f = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0,
                                            L = 0,
                                            P = 0;
                                        if (o = u[r >> 2], t = u[r + 4 >> 2], n = u[e + 2264 >> 2], a[n + 823 | 0] = 129, a[n + 807 | 0] = 129, a[n + 791 | 0] = 129, a[n + 775 | 0] = 129, a[n + 759 | 0] = 129, a[n + 743 | 0] = 129, a[n + 727 | 0] = 129, a[n + 711 | 0] = 129, a[n + 695 | 0] = 129, a[n + 679 | 0] = 129, a[n + 663 | 0] = 129, a[n + 647 | 0] = 129, a[n + 631 | 0] = 129, a[n + 615 | 0] = 129, a[n + 599 | 0] = 129, a[n + 583 | 0] = 129, a[n + 519 | 0] = 129, a[n + 487 | 0] = 129, a[n + 455 | 0] = 129, a[n + 423 | 0] = 129, a[n + 391 | 0] = 129, a[n + 359 | 0] = 129, a[n + 327 | 0] = 129, a[n + 295 | 0] = 129, a[n + 263 | 0] = 129, a[n + 231 | 0] = 129, a[n + 199 | 0] = 129, a[n + 167 | 0] = 129, a[n + 135 | 0] = 129, a[n + 103 | 0] = 129, a[n + 71 | 0] = 129, a[n + 39 | 0] = 129, (0 | t) >= 1 ? (a[n + 551 | 0] = 129, a[n + 567 | 0] = 129, a[n + 7 | 0] = 129) : (a[n + 7 | 0] = 2139062143, a[n + 8 | 0] = 8355711, a[n + 9 | 0] = 32639, a[n + 10 | 0] = 127, a[n + 11 | 0] = 2139062143, a[n + 12 | 0] = 8355711, a[n + 13 | 0] = 32639, a[n + 14 | 0] = 127, a[n + 551 | 0] = 2139062143, a[n + 552 | 0] = 8355711, a[n + 553 | 0] = 32639, a[n + 554 | 0] = 127, a[n + 555 | 0] = 2139062143, a[n + 556 | 0] = 8355711, a[n + 557 | 0] = 32639, a[n + 558 | 0] = 127, a[n + 567 | 0] = 2139062143, a[n + 568 | 0] = 8355711, a[n + 569 | 0] = 32639, a[n + 570 | 0] = 127, a[n + 571 | 0] = 2139062143, a[n + 572 | 0] = 8355711, a[n + 573 | 0] = 32639, a[n + 574 | 0] = 127, a[n + 20 | 0] = 2139062143, a[n + 21 | 0] = 8355711, a[n + 22 | 0] = 32639, a[n + 23 | 0] = 127, a[n + 24 | 0] = 2139062143, a[n + 25 | 0] = 8355711, a[n + 26 | 0] = 32639, a[n + 27 | 0] = 127, a[n + 15 | 0] = 2139062143, a[n + 16 | 0] = 8355711, a[n + 17 | 0] = 32639, a[n + 18 | 0] = 127, a[n + 19 | 0] = 2139062143, a[n + 20 | 0] = 8355711, a[n + 21 | 0] = 32639, a[n + 22 | 0] = 127, a[n + 559 | 0] = 127, a[n + 575 | 0] = 127), u[e + 288 >> 2] >= 1)
                                            for (b = n + 600 | 0, k = n + 584 | 0, h = n + 40 | 0, y = t ? 5 : 6, E = o << 3, I = o << 4, _ = n + 520 | 0, D = n + 8 | 0, w = n + 24 | 0, C = !t << 2, x = (0 | t) < 1;;) {
                                                d = u[r + 16 >> 2], g && (o = s[n + 20 | 0] | s[n + 21 | 0] << 8 | s[n + 22 | 0] << 16 | s[n + 23 | 0] << 24, a[n + 4 | 0] = o, a[n + 5 | 0] = o >>> 8, a[n + 6 | 0] = o >>> 16, a[n + 7 | 0] = o >>> 24, o = s[n + 52 | 0] | s[n + 53 | 0] << 8 | s[n + 54 | 0] << 16 | s[n + 55 | 0] << 24, a[n + 36 | 0] = o, a[n + 37 | 0] = o >>> 8, a[n + 38 | 0] = o >>> 16, a[n + 39 | 0] = o >>> 24, o = s[n + 84 | 0] | s[n + 85 | 0] << 8 | s[n + 86 | 0] << 16 | s[n + 87 | 0] << 24, a[n + 68 | 0] = o, a[n + 69 | 0] = o >>> 8, a[n + 70 | 0] = o >>> 16, a[n + 71 | 0] = o >>> 24, o = s[n + 116 | 0] | s[n + 117 | 0] << 8 | s[n + 118 | 0] << 16 | s[n + 119 | 0] << 24, a[n + 100 | 0] = o, a[n + 101 | 0] = o >>> 8, a[n + 102 | 0] = o >>> 16, a[n + 103 | 0] = o >>> 24, o = s[n + 148 | 0] | s[n + 149 | 0] << 8 | s[n + 150 | 0] << 16 | s[n + 151 | 0] << 24, a[n + 132 | 0] = o, a[n + 133 | 0] = o >>> 8, a[n + 134 | 0] = o >>> 16, a[n + 135 | 0] = o >>> 24, o = s[n + 180 | 0] | s[n + 181 | 0] << 8 | s[n + 182 | 0] << 16 | s[n + 183 | 0] << 24, a[n + 164 | 0] = o, a[n + 165 | 0] = o >>> 8, a[n + 166 | 0] = o >>> 16, a[n + 167 | 0] = o >>> 24, o = s[n + 212 | 0] | s[n + 213 | 0] << 8 | s[n + 214 | 0] << 16 | s[n + 215 | 0] << 24, a[n + 196 | 0] = o, a[n + 197 | 0] = o >>> 8, a[n + 198 | 0] = o >>> 16, a[n + 199 | 0] = o >>> 24, o = s[n + 244 | 0] | s[n + 245 | 0] << 8 | s[n + 246 | 0] << 16 | s[n + 247 | 0] << 24, a[n + 228 | 0] = o, a[n + 229 | 0] = o >>> 8, a[n + 230 | 0] = o >>> 16, a[n + 231 | 0] = o >>> 24, o = s[n + 276 | 0] | s[n + 277 | 0] << 8 | s[n + 278 | 0] << 16 | s[n + 279 | 0] << 24, a[n + 260 | 0] = o, a[n + 261 | 0] = o >>> 8, a[n + 262 | 0] = o >>> 16, a[n + 263 | 0] = o >>> 24, o = s[n + 308 | 0] | s[n + 309 | 0] << 8 | s[n + 310 | 0] << 16 | s[n + 311 | 0] << 24, a[n + 292 | 0] = o, a[n + 293 | 0] = o >>> 8, a[n + 294 | 0] = o >>> 16, a[n + 295 | 0] = o >>> 24, o = s[n + 340 | 0] | s[n + 341 | 0] << 8 | s[n + 342 | 0] << 16 | s[n + 343 | 0] << 24, a[n + 324 | 0] = o, a[n + 325 | 0] = o >>> 8, a[n + 326 | 0] = o >>> 16, a[n + 327 | 0] = o >>> 24, o = s[n + 372 | 0] | s[n + 373 | 0] << 8 | s[n + 374 | 0] << 16 | s[n + 375 | 0] << 24, a[n + 356 | 0] = o, a[n + 357 | 0] = o >>> 8, a[n + 358 | 0] = o >>> 16, a[n + 359 | 0] = o >>> 24, o = s[n + 404 | 0] | s[n + 405 | 0] << 8 | s[n + 406 | 0] << 16 | s[n + 407 | 0] << 24, a[n + 388 | 0] = o, a[n + 389 | 0] = o >>> 8, a[n + 390 | 0] = o >>> 16, a[n + 391 | 0] = o >>> 24, o = s[n + 436 | 0] | s[n + 437 | 0] << 8 | s[n + 438 | 0] << 16 | s[n + 439 | 0] << 24, a[n + 420 | 0] = o, a[n + 421 | 0] = o >>> 8, a[n + 422 | 0] = o >>> 16, a[n + 423 | 0] = o >>> 24, o = s[n + 468 | 0] | s[n + 469 | 0] << 8 | s[n + 470 | 0] << 16 | s[n + 471 | 0] << 24, a[n + 452 | 0] = o, a[n + 453 | 0] = o >>> 8, a[n + 454 | 0] = o >>> 16, a[n + 455 | 0] = o >>> 24, o = s[n + 500 | 0] | s[n + 501 | 0] << 8 | s[n + 502 | 0] << 16 | s[n + 503 | 0] << 24, a[n + 484 | 0] = o, a[n + 485 | 0] = o >>> 8, a[n + 486 | 0] = o >>> 16, a[n + 487 | 0] = o >>> 24, o = s[n + 532 | 0] | s[n + 533 | 0] << 8 | s[n + 534 | 0] << 16 | s[n + 535 | 0] << 24, a[n + 516 | 0] = o, a[n + 517 | 0] = o >>> 8, a[n + 518 | 0] = o >>> 16, a[n + 519 | 0] = o >>> 24, o = s[n + 556 | 0] | s[n + 557 | 0] << 8 | s[n + 558 | 0] << 16 | s[n + 559 | 0] << 24, a[n + 548 | 0] = o, a[n + 549 | 0] = o >>> 8, a[n + 550 | 0] = o >>> 16, a[n + 551 | 0] = o >>> 24, o = s[n + 572 | 0] | s[n + 573 | 0] << 8 | s[n + 574 | 0] << 16 | s[n + 575 | 0] << 24, a[n + 564 | 0] = o, a[n + 565 | 0] = o >>> 8, a[n + 566 | 0] = o >>> 16, a[n + 567 | 0] = o >>> 24, o = s[n + 588 | 0] | s[n + 589 | 0] << 8 | s[n + 590 | 0] << 16 | s[n + 591 | 0] << 24, a[n + 580 | 0] = o, a[n + 581 | 0] = o >>> 8, a[n + 582 | 0] = o >>> 16, a[n + 583 | 0] = o >>> 24, o = s[n + 604 | 0] | s[n + 605 | 0] << 8 | s[n + 606 | 0] << 16 | s[n + 607 | 0] << 24, a[n + 596 | 0] = o, a[n + 597 | 0] = o >>> 8, a[n + 598 | 0] = o >>> 16, a[n + 599 | 0] = o >>> 24, o = s[n + 620 | 0] | s[n + 621 | 0] << 8 | s[n + 622 | 0] << 16 | s[n + 623 | 0] << 24, a[n + 612 | 0] = o, a[n + 613 | 0] = o >>> 8, a[n + 614 | 0] = o >>> 16, a[n + 615 | 0] = o >>> 24, o = s[n + 636 | 0] | s[n + 637 | 0] << 8 | s[n + 638 | 0] << 16 | s[n + 639 | 0] << 24, a[n + 628 | 0] = o, a[n + 629 | 0] = o >>> 8, a[n + 630 | 0] = o >>> 16, a[n + 631 | 0] = o >>> 24, o = s[n + 652 | 0] | s[n + 653 | 0] << 8 | s[n + 654 | 0] << 16 | s[n + 655 | 0] << 24, a[n + 644 | 0] = o, a[n + 645 | 0] = o >>> 8, a[n + 646 | 0] = o >>> 16, a[n + 647 | 0] = o >>> 24, o = s[n + 668 | 0] | s[n + 669 | 0] << 8 | s[n + 670 | 0] << 16 | s[n + 671 | 0] << 24, a[n + 660 | 0] = o, a[n + 661 | 0] = o >>> 8, a[n + 662 | 0] = o >>> 16, a[n + 663 | 0] = o >>> 24, o = s[n + 684 | 0] | s[n + 685 | 0] << 8 | s[n + 686 | 0] << 16 | s[n + 687 | 0] << 24, a[n + 676 | 0] = o, a[n + 677 | 0] = o >>> 8, a[n + 678 | 0] = o >>> 16, a[n + 679 | 0] = o >>> 24, o = s[n + 700 | 0] | s[n + 701 | 0] << 8 | s[n + 702 | 0] << 16 | s[n + 703 | 0] << 24, a[n + 692 | 0] = o, a[n + 693 | 0] = o >>> 8, a[n + 694 | 0] = o >>> 16, a[n + 695 | 0] = o >>> 24, o = s[n + 716 | 0] | s[n + 717 | 0] << 8 | s[n + 718 | 0] << 16 | s[n + 719 | 0] << 24, a[n + 708 | 0] = o, a[n + 709 | 0] = o >>> 8, a[n + 710 | 0] = o >>> 16, a[n + 711 | 0] = o >>> 24, o = s[n + 732 | 0] | s[n + 733 | 0] << 8 | s[n + 734 | 0] << 16 | s[n + 735 | 0] << 24, a[n + 724 | 0] = o, a[n + 725 | 0] = o >>> 8, a[n + 726 | 0] = o >>> 16, a[n + 727 | 0] = o >>> 24, o = s[n + 748 | 0] | s[n + 749 | 0] << 8 | s[n + 750 | 0] << 16 | s[n + 751 | 0] << 24, a[n + 740 | 0] = o, a[n + 741 | 0] = o >>> 8, a[n + 742 | 0] = o >>> 16, a[n + 743 | 0] = o >>> 24, o = s[n + 764 | 0] | s[n + 765 | 0] << 8 | s[n + 766 | 0] << 16 | s[n + 767 | 0] << 24, a[n + 756 | 0] = o, a[n + 757 | 0] = o >>> 8, a[n + 758 | 0] = o >>> 16, a[n + 759 | 0] = o >>> 24, o = s[n + 780 | 0] | s[n + 781 | 0] << 8 | s[n + 782 | 0] << 16 | s[n + 783 | 0] << 24, a[n + 772 | 0] = o, a[n + 773 | 0] = o >>> 8, a[n + 774 | 0] = o >>> 16, a[n + 775 | 0] = o >>> 24, o = s[n + 796 | 0] | s[n + 797 | 0] << 8 | s[n + 798 | 0] << 16 | s[n + 799 | 0] << 24, a[n + 788 | 0] = o, a[n + 789 | 0] = o >>> 8, a[n + 790 | 0] = o >>> 16, a[n + 791 | 0] = o >>> 24, o = s[n + 812 | 0] | s[n + 813 | 0] << 8 | s[n + 814 | 0] << 16 | s[n + 815 | 0] << 24, a[n + 804 | 0] = o, a[n + 805 | 0] = o >>> 8, a[n + 806 | 0] = o >>> 16, a[n + 807 | 0] = o >>> 24, o = s[n + 828 | 0] | s[n + 829 | 0] << 8 | s[n + 830 | 0] << 16 | s[n + 831 | 0] << 24, a[n + 820 | 0] = o, a[n + 821 | 0] = o >>> 8, a[n + 822 | 0] = o >>> 16, a[n + 823 | 0] = o >>> 24), o = u[e + 2252 >> 2] + (g << 5) | 0, l = d + A(g, 800) | 0, v = u[l + 788 >> 2];
                                                e: {
                                                    r: {
                                                        n: {
                                                            t: {
                                                                if (!x) {
                                                                    if (p = s[o + 4 | 0] | s[o + 5 | 0] << 8 | s[o + 6 | 0] << 16 | s[o + 7 | 0] << 24, f = D, m = s[0 | o] | s[o + 1 | 0] << 8 | s[o + 2 | 0] << 16 | s[o + 3 | 0] << 24, a[0 | f] = m, a[f + 1 | 0] = m >>> 8, a[f + 2 | 0] = m >>> 16, a[f + 3 | 0] = m >>> 24, a[f + 4 | 0] = p, a[f + 5 | 0] = p >>> 8, a[f + 6 | 0] = p >>> 16, a[f + 7 | 0] = p >>> 24, p = s[o + 12 | 0] | s[o + 13 | 0] << 8 | s[o + 14 | 0] << 16 | s[o + 15 | 0] << 24, m = s[o + 8 | 0] | s[o + 9 | 0] << 8 | s[o + 10 | 0] << 16 | s[o + 11 | 0] << 24, a[f + 8 | 0] = m, a[f + 9 | 0] = m >>> 8, a[f + 10 | 0] = m >>> 16, a[f + 11 | 0] = m >>> 24, a[f + 12 | 0] = p, a[f + 13 | 0] = p >>> 8, a[f + 14 | 0] = p >>> 16, a[f + 15 | 0] = p >>> 24, f = s[o + 20 | 0] | s[o + 21 | 0] << 8 | s[o + 22 | 0] << 16 | s[o + 23 | 0] << 24, p = s[o + 16 | 0] | s[o + 17 | 0] << 8 | s[o + 18 | 0] << 16 | s[o + 19 | 0] << 24, a[n + 552 | 0] = p, a[n + 553 | 0] = p >>> 8, a[n + 554 | 0] = p >>> 16, a[n + 555 | 0] = p >>> 24, a[n + 556 | 0] = f, a[n + 557 | 0] = f >>> 8, a[n + 558 | 0] = f >>> 16, a[n + 559 | 0] = f >>> 24, f = s[o + 28 | 0] | s[o + 29 | 0] << 8 | s[o + 30 | 0] << 16 | s[o + 31 | 0] << 24, d = s[o + 24 | 0] | s[o + 25 | 0] << 8 | s[o + 26 | 0] << 16 | s[o + 27 | 0] << 24, a[n + 568 | 0] = d, a[n + 569 | 0] = d >>> 8, a[n + 570 | 0] = d >>> 16, a[n + 571 | 0] = d >>> 24, a[n + 572 | 0] = f, a[n + 573 | 0] = f >>> 8, a[n + 574 | 0] = f >>> 16, a[n + 575 | 0] = f >>> 24, s[l + 768 | 0]) break t;
                                                                    break r
                                                                }
                                                                if (!s[l + 768 | 0]) break r;d = u[w >> 2];
                                                                break n
                                                            }(0 | g) >= (u[e + 288 >> 2] + -1 | 0) ? (d = s[o + 15 | 0], u[w >> 2] = A(d, 16843009), d |= d << 8, d |= d << 16) : (d = s[o + 32 | 0] | s[o + 33 | 0] << 8 | s[o + 34 | 0] << 16 | s[o + 35 | 0] << 24, u[w >> 2] = d)
                                                        }
                                                        for (u[n + 280 >> 2] = d, u[n + 408 >> 2] = d, u[n + 152 >> 2] = d, d = 0;;) {
                                                            f = c[4880 + (d << 1) >> 1] + h | 0, i[u[10736 + (s[769 + (l + d | 0) | 0] << 2) >> 2]](f), p = l + (d << 5) | 0;
                                                            n: {
                                                                t: switch ((v >>> 30 | 0) - 1 | 0) {
                                                                    case 2:
                                                                        i[u[2703]](p, f, 0);
                                                                        break n;
                                                                    case 1:
                                                                        i[u[2704]](p, f);
                                                                        break n;
                                                                    case 0:
                                                                        break t;
                                                                    default:
                                                                        break n
                                                                }
                                                                i[u[2706]](p, f)
                                                            }
                                                            if (v <<= 2, 16 == (0 | (d = d + 1 | 0))) break
                                                        }
                                                        m = g ? C : y;
                                                        break e
                                                    }
                                                    if (d = s[l + 769 | 0], m = g ? C : y, i[u[10704 + ((d || m) << 2) >> 2]](h), d = 0, v)
                                                        for (;;) {
                                                            f = l + (d << 5) | 0, p = c[4880 + (d << 1) >> 1] + h | 0;
                                                            r: {
                                                                n: switch ((v >>> 30 | 0) - 1 | 0) {
                                                                    case 2:
                                                                        i[u[2703]](f, p, 0);
                                                                        break r;
                                                                    case 1:
                                                                        i[u[2704]](f, p);
                                                                        break r;
                                                                    case 0:
                                                                        break n;
                                                                    default:
                                                                        break r
                                                                }
                                                                i[u[2706]](f, p)
                                                            }
                                                            if (v <<= 2, 16 == (0 | (d = d + 1 | 0))) break
                                                        }
                                                }
                                                for (d = u[l + 792 >> 2], f = s[l + 785 | 0], i[u[(f = 10784 + ((f || m) << 2) | 0) >> 2]](k), i[u[f >> 2]](b), 255 & d && (f = l + 512 | 0, 170 & d ? i[u[2705]](f, k) : i[u[2707]](f, k)), 65280 & d && (f = l + 640 | 0, 43520 & d ? i[u[2705]](f, b) : i[u[2707]](f, b)), (0 | t) < (u[e + 292 >> 2] + -1 | 0) && (f = s[(d = _) + 4 | 0] | s[d + 5 | 0] << 8 | s[d + 6 | 0] << 16 | s[d + 7 | 0] << 24, l = s[0 | d] | s[d + 1 | 0] << 8 | s[d + 2 | 0] << 16 | s[d + 3 | 0] << 24, a[0 | o] = l, a[o + 1 | 0] = l >>> 8, a[o + 2 | 0] = l >>> 16, a[o + 3 | 0] = l >>> 24, a[o + 4 | 0] = f, a[o + 5 | 0] = f >>> 8, a[o + 6 | 0] = f >>> 16, a[o + 7 | 0] = f >>> 24, f = s[d + 12 | 0] | s[d + 13 | 0] << 8 | s[d + 14 | 0] << 16 | s[d + 15 | 0] << 24, d = s[d + 8 | 0] | s[d + 9 | 0] << 8 | s[d + 10 | 0] << 16 | s[d + 11 | 0] << 24, a[o + 8 | 0] = d, a[o + 9 | 0] = d >>> 8, a[o + 10 | 0] = d >>> 16, a[o + 11 | 0] = d >>> 24, a[o + 12 | 0] = f, a[o + 13 | 0] = f >>> 8, a[o + 14 | 0] = f >>> 16, a[o + 15 | 0] = f >>> 24, d = s[n + 812 | 0] | s[n + 813 | 0] << 8 | s[n + 814 | 0] << 16 | s[n + 815 | 0] << 24, f = s[n + 808 | 0] | s[n + 809 | 0] << 8 | s[n + 810 | 0] << 16 | s[n + 811 | 0] << 24, a[o + 16 | 0] = f, a[o + 17 | 0] = f >>> 8, a[o + 18 | 0] = f >>> 16, a[o + 19 | 0] = f >>> 24, a[o + 20 | 0] = d, a[o + 21 | 0] = d >>> 8, a[o + 22 | 0] = d >>> 16, a[o + 23 | 0] = d >>> 24, d = s[n + 828 | 0] | s[n + 829 | 0] << 8 | s[n + 830 | 0] << 16 | s[n + 831 | 0] << 24, f = s[n + 824 | 0] | s[n + 825 | 0] << 8 | s[n + 826 | 0] << 16 | s[n + 827 | 0] << 24, a[o + 24 | 0] = f, a[o + 25 | 0] = f >>> 8, a[o + 26 | 0] = f >>> 16, a[o + 27 | 0] = f >>> 24, a[o + 28 | 0] = d, a[o + 29 | 0] = d >>> 8, a[o + 30 | 0] = d >>> 16, a[o + 31 | 0] = d >>> 24), S = u[e + 2284 >> 2], p = u[e + 2272 >> 2], m = u[e + 2276 >> 2], l = s[(o = h) + 4 | 0] | s[o + 5 | 0] << 8 | s[o + 6 | 0] << 16 | s[o + 7 | 0] << 24, f = (u[e + 2268 >> 2] + (g << 4) | 0) + A(u[e + 2280 >> 2], I) | 0, v = s[0 | o] | s[o + 1 | 0] << 8 | s[o + 2 | 0] << 16 | s[o + 3 | 0] << 24, a[0 | f] = v, a[f + 1 | 0] = v >>> 8, a[f + 2 | 0] = v >>> 16, a[f + 3 | 0] = v >>> 24, a[f + 4 | 0] = l, a[f + 5 | 0] = l >>> 8, a[f + 6 | 0] = l >>> 16, a[f + 7 | 0] = l >>> 24, l = s[o + 12 | 0] | s[o + 13 | 0] << 8 | s[o + 14 | 0] << 16 | s[o + 15 | 0] << 24, o = s[o + 8 | 0] | s[o + 9 | 0] << 8 | s[o + 10 | 0] << 16 | s[o + 11 | 0] << 24, a[f + 8 | 0] = o, a[f + 9 | 0] = o >>> 8, a[f + 10 | 0] = o >>> 16, a[f + 11 | 0] = o >>> 24, a[f + 12 | 0] = l, a[f + 13 | 0] = l >>> 8, a[f + 14 | 0] = l >>> 16, a[f + 15 | 0] = l >>> 24, L = (o = g << 3) + m | 0, P = o + p | 0, d = 1; p = s[4 + (l = (d << 5) + h | 0) | 0] | s[l + 5 | 0] << 8 | s[l + 6 | 0] << 16 | s[l + 7 | 0] << 24, o = f + A(u[e + 2280 >> 2], d) | 0, m = s[0 | l] | s[l + 1 | 0] << 8 | s[l + 2 | 0] << 16 | s[l + 3 | 0] << 24, a[0 | o] = m, a[o + 1 | 0] = m >>> 8, a[o + 2 | 0] = m >>> 16, a[o + 3 | 0] = m >>> 24, a[o + 4 | 0] = p, a[o + 5 | 0] = p >>> 8, a[o + 6 | 0] = p >>> 16, a[o + 7 | 0] = p >>> 24, v = s[l + 12 | 0] | s[l + 13 | 0] << 8 | s[l + 14 | 0] << 16 | s[l + 15 | 0] << 24, l = s[l + 8 | 0] | s[l + 9 | 0] << 8 | s[l + 10 | 0] << 16 | s[l + 11 | 0] << 24, a[o + 8 | 0] = l, a[o + 9 | 0] = l >>> 8, a[o + 10 | 0] = l >>> 16, a[o + 11 | 0] = l >>> 24, a[o + 12 | 0] = v, a[o + 13 | 0] = v >>> 8, a[o + 14 | 0] = v >>> 16, a[o + 15 | 0] = v >>> 24, 16 != (0 | (d = d + 1 | 0)););
                                                if (f = s[n + 588 | 0] | s[n + 589 | 0] << 8 | s[n + 590 | 0] << 16 | s[n + 591 | 0] << 24, o = (v = A(E, S)) + P | 0, l = s[n + 584 | 0] | s[n + 585 | 0] << 8 | s[n + 586 | 0] << 16 | s[n + 587 | 0] << 24, a[0 | o] = l, a[o + 1 | 0] = l >>> 8, a[o + 2 | 0] = l >>> 16, a[o + 3 | 0] = l >>> 24, a[o + 4 | 0] = f, a[o + 5 | 0] = f >>> 8, a[o + 6 | 0] = f >>> 16, a[o + 7 | 0] = f >>> 24, f = d = v + L | 0, l = s[n + 604 | 0] | s[n + 605 | 0] << 8 | s[n + 606 | 0] << 16 | s[n + 607 | 0] << 24, v = s[n + 600 | 0] | s[n + 601 | 0] << 8 | s[n + 602 | 0] << 16 | s[n + 603 | 0] << 24, a[0 | f] = v, a[f + 1 | 0] = v >>> 8, a[f + 2 | 0] = v >>> 16, a[f + 3 | 0] = v >>> 24, a[f + 4 | 0] = l, a[f + 5 | 0] = l >>> 8, a[f + 6 | 0] = l >>> 16, a[f + 7 | 0] = l >>> 24, l = s[n + 620 | 0] | s[n + 621 | 0] << 8 | s[n + 622 | 0] << 16 | s[n + 623 | 0] << 24, f = o + u[e + 2284 >> 2] | 0, v = s[n + 616 | 0] | s[n + 617 | 0] << 8 | s[n + 618 | 0] << 16 | s[n + 619 | 0] << 24, a[0 | f] = v, a[f + 1 | 0] = v >>> 8, a[f + 2 | 0] = v >>> 16, a[f + 3 | 0] = v >>> 24, a[f + 4 | 0] = l, a[f + 5 | 0] = l >>> 8, a[f + 6 | 0] = l >>> 16, a[f + 7 | 0] = l >>> 24, l = s[n + 636 | 0] | s[n + 637 | 0] << 8 | s[n + 638 | 0] << 16 | s[n + 639 | 0] << 24, f = d + u[e + 2284 >> 2] | 0, v = s[n + 632 | 0] | s[n + 633 | 0] << 8 | s[n + 634 | 0] << 16 | s[n + 635 | 0] << 24, a[0 | f] = v, a[f + 1 | 0] = v >>> 8, a[f + 2 | 0] = v >>> 16, a[f + 3 | 0] = v >>> 24, a[f + 4 | 0] = l, a[f + 5 | 0] = l >>> 8, a[f + 6 | 0] = l >>> 16, a[f + 7 | 0] = l >>> 24, l = s[n + 652 | 0] | s[n + 653 | 0] << 8 | s[n + 654 | 0] << 16 | s[n + 655 | 0] << 24, f = o + (u[e + 2284 >> 2] << 1) | 0, v = s[n + 648 | 0] | s[n + 649 | 0] << 8 | s[n + 650 | 0] << 16 | s[n + 651 | 0] << 24, a[0 | f] = v, a[f + 1 | 0] = v >>> 8, a[f + 2 | 0] = v >>> 16, a[f + 3 | 0] = v >>> 24, a[f + 4 | 0] = l, a[f + 5 | 0] = l >>> 8, a[f + 6 | 0] = l >>> 16, a[f + 7 | 0] = l >>> 24, l = s[n + 668 | 0] | s[n + 669 | 0] << 8 | s[n + 670 | 0] << 16 | s[n + 671 | 0] << 24, f = d + (u[e + 2284 >> 2] << 1) | 0, v = s[n + 664 | 0] | s[n + 665 | 0] << 8 | s[n + 666 | 0] << 16 | s[n + 667 | 0] << 24, a[0 | f] = v, a[f + 1 | 0] = v >>> 8, a[f + 2 | 0] = v >>> 16, a[f + 3 | 0] = v >>> 24, a[f + 4 | 0] = l, a[f + 5 | 0] = l >>> 8, a[f + 6 | 0] = l >>> 16, a[f + 7 | 0] = l >>> 24, l = s[n + 684 | 0] | s[n + 685 | 0] << 8 | s[n + 686 | 0] << 16 | s[n + 687 | 0] << 24, f = o + A(u[e + 2284 >> 2], 3) | 0, v = s[n + 680 | 0] | s[n + 681 | 0] << 8 | s[n + 682 | 0] << 16 | s[n + 683 | 0] << 24, a[0 | f] = v, a[f + 1 | 0] = v >>> 8, a[f + 2 | 0] = v >>> 16, a[f + 3 | 0] = v >>> 24, a[f + 4 | 0] = l, a[f + 5 | 0] = l >>> 8, a[f + 6 | 0] = l >>> 16, a[f + 7 | 0] = l >>> 24, l = s[n + 700 | 0] | s[n + 701 | 0] << 8 | s[n + 702 | 0] << 16 | s[n + 703 | 0] << 24, f = d + A(u[e + 2284 >> 2], 3) | 0, v = s[n + 696 | 0] | s[n + 697 | 0] << 8 | s[n + 698 | 0] << 16 | s[n + 699 | 0] << 24, a[0 | f] = v, a[f + 1 | 0] = v >>> 8, a[f + 2 | 0] = v >>> 16, a[f + 3 | 0] = v >>> 24, a[f + 4 | 0] = l, a[f + 5 | 0] = l >>> 8, a[f + 6 | 0] = l >>> 16, a[f + 7 | 0] = l >>> 24, l = s[n + 716 | 0] | s[n + 717 | 0] << 8 | s[n + 718 | 0] << 16 | s[n + 719 | 0] << 24, f = o + (u[e + 2284 >> 2] << 2) | 0, v = s[n + 712 | 0] | s[n + 713 | 0] << 8 | s[n + 714 | 0] << 16 | s[n + 715 | 0] << 24, a[0 | f] = v, a[f + 1 | 0] = v >>> 8, a[f + 2 | 0] = v >>> 16, a[f + 3 | 0] = v >>> 24, a[f + 4 | 0] = l, a[f + 5 | 0] = l >>> 8, a[f + 6 | 0] = l >>> 16, a[f + 7 | 0] = l >>> 24, l = s[n + 732 | 0] | s[n + 733 | 0] << 8 | s[n + 734 | 0] << 16 | s[n + 735 | 0] << 24, f = d + (u[e + 2284 >> 2] << 2) | 0, v = s[n + 728 | 0] | s[n + 729 | 0] << 8 | s[n + 730 | 0] << 16 | s[n + 731 | 0] << 24, a[0 | f] = v, a[f + 1 | 0] = v >>> 8, a[f + 2 | 0] = v >>> 16, a[f + 3 | 0] = v >>> 24, a[f + 4 | 0] = l, a[f + 5 | 0] = l >>> 8, a[f + 6 | 0] = l >>> 16, a[f + 7 | 0] = l >>> 24, l = s[n + 748 | 0] | s[n + 749 | 0] << 8 | s[n + 750 | 0] << 16 | s[n + 751 | 0] << 24, f = o + A(u[e + 2284 >> 2], 5) | 0, v = s[n + 744 | 0] | s[n + 745 | 0] << 8 | s[n + 746 | 0] << 16 | s[n + 747 | 0] << 24, a[0 | f] = v, a[f + 1 | 0] = v >>> 8, a[f + 2 | 0] = v >>> 16, a[f + 3 | 0] = v >>> 24, a[f + 4 | 0] = l, a[f + 5 | 0] = l >>> 8, a[f + 6 | 0] = l >>> 16, a[f + 7 | 0] = l >>> 24, l = s[n + 764 | 0] | s[n + 765 | 0] << 8 | s[n + 766 | 0] << 16 | s[n + 767 | 0] << 24, f = d + A(u[e + 2284 >> 2], 5) | 0, v = s[n + 760 | 0] | s[n + 761 | 0] << 8 | s[n + 762 | 0] << 16 | s[n + 763 | 0] << 24, a[0 | f] = v, a[f + 1 | 0] = v >>> 8, a[f + 2 | 0] = v >>> 16, a[f + 3 | 0] = v >>> 24, a[f + 4 | 0] = l, a[f + 5 | 0] = l >>> 8, a[f + 6 | 0] = l >>> 16, a[f + 7 | 0] = l >>> 24, l = s[n + 780 | 0] | s[n + 781 | 0] << 8 | s[n + 782 | 0] << 16 | s[n + 783 | 0] << 24, f = o + A(u[e + 2284 >> 2], 6) | 0, v = s[n + 776 | 0] | s[n + 777 | 0] << 8 | s[n + 778 | 0] << 16 | s[n + 779 | 0] << 24, a[0 | f] = v, a[f + 1 | 0] = v >>> 8, a[f + 2 | 0] = v >>> 16, a[f + 3 | 0] = v >>> 24, a[f + 4 | 0] = l, a[f + 5 | 0] = l >>> 8, a[f + 6 | 0] = l >>> 16, a[f + 7 | 0] = l >>> 24, l = s[n + 796 | 0] | s[n + 797 | 0] << 8 | s[n + 798 | 0] << 16 | s[n + 799 | 0] << 24, f = d + A(u[e + 2284 >> 2], 6) | 0, v = s[n + 792 | 0] | s[n + 793 | 0] << 8 | s[n + 794 | 0] << 16 | s[n + 795 | 0] << 24, a[0 | f] = v, a[f + 1 | 0] = v >>> 8, a[f + 2 | 0] = v >>> 16, a[f + 3 | 0] = v >>> 24, a[f + 4 | 0] = l, a[f + 5 | 0] = l >>> 8, a[f + 6 | 0] = l >>> 16, a[f + 7 | 0] = l >>> 24, f = s[n + 812 | 0] | s[n + 813 | 0] << 8 | s[n + 814 | 0] << 16 | s[n + 815 | 0] << 24, o = o + A(u[e + 2284 >> 2], 7) | 0, l = s[n + 808 | 0] | s[n + 809 | 0] << 8 | s[n + 810 | 0] << 16 | s[n + 811 | 0] << 24, a[0 | o] = l, a[o + 1 | 0] = l >>> 8, a[o + 2 | 0] = l >>> 16, a[o + 3 | 0] = l >>> 24, a[o + 4 | 0] = f, a[o + 5 | 0] = f >>> 8, a[o + 6 | 0] = f >>> 16, a[o + 7 | 0] = f >>> 24, o = d + A(u[e + 2284 >> 2], 7) | 0, d = s[n + 828 | 0] | s[n + 829 | 0] << 8 | s[n + 830 | 0] << 16 | s[n + 831 | 0] << 24, f = s[n + 824 | 0] | s[n + 825 | 0] << 8 | s[n + 826 | 0] << 16 | s[n + 827 | 0] << 24, a[0 | o] = f, a[o + 1 | 0] = f >>> 8, a[o + 2 | 0] = f >>> 16, a[o + 3 | 0] = f >>> 24, a[o + 4 | 0] = d, a[o + 5 | 0] = d >>> 8, a[o + 6 | 0] = d >>> 16, a[o + 7 | 0] = d >>> 24, !((0 | (g = g + 1 | 0)) < u[e + 288 >> 2])) break
                                            }
                                    }

                                    function B(e) {
                                        var r, n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            c = 0,
                                            d = 0,
                                            A = 0,
                                            v = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0;
                                        L = r = L - 16 | 0;
                                        e: {
                                            r: {
                                                n: {
                                                    t: {
                                                        o: {
                                                            i: {
                                                                a: {
                                                                    f: {
                                                                        u: {
                                                                            s: {
                                                                                c: {
                                                                                    l: {
                                                                                        if ((e |= 0) >>> 0 <= 244) {
                                                                                            if (3 & (e = (f = u[2884]) >>> (n = (c = e >>> 0 < 11 ? 16 : e + 11 & -8) >>> 3 | 0) | 0)) {
                                                                                                e = (i = u[11584 + (n = (o = n + (1 & (-1 ^ e)) | 0) << 3) >> 2]) + 8 | 0, (0 | (t = u[i + 8 >> 2])) != (0 | (n = n + 11576 | 0)) ? (u[t + 12 >> 2] = n, u[n + 8 >> 2] = t) : (g = 11536, h = rr(-2, o) & f, u[g >> 2] = h), n = o << 3, u[i + 4 >> 2] = 3 | n, u[4 + (n = n + i | 0) >> 2] = 1 | u[n + 4 >> 2];
                                                                                                break e
                                                                                            }
                                                                                            if (c >>> 0 <= (m = u[2886]) >>> 0) break l;
                                                                                            if (e) {
                                                                                                t = e = (n = (0 - (e = (t = e << n) & (0 - (e = 2 << n) | e)) & e) - 1 | 0) >>> 12 & 16, t |= e = (n = n >>> e | 0) >>> 5 & 8, t |= e = (n = n >>> e | 0) >>> 2 & 4, a = u[11584 + (e = (t = ((t |= e = (n = n >>> e | 0) >>> 1 & 2) | (e = (n = n >>> e | 0) >>> 1 & 1)) + (n >>> e | 0) | 0) << 3) >> 2], (0 | (n = u[a + 8 >> 2])) != (0 | (e = e + 11576 | 0)) ? (u[n + 12 >> 2] = e, u[e + 8 >> 2] = n) : (f = rr(-2, t) & f, u[2884] = f), e = a + 8 | 0, u[a + 4 >> 2] = 3 | c, i = (n = t << 3) - c | 0, u[4 + (o = a + c | 0) >> 2] = 1 | i, u[n + a >> 2] = i, m && (t = 11576 + ((n = m >>> 3 | 0) << 3) | 0, c = u[2889], (n = 1 << n) & f ? n = u[t + 8 >> 2] : (u[2884] = n | f, n = t), u[t + 8 >> 2] = c, u[n + 12 >> 2] = c, u[c + 12 >> 2] = t, u[c + 8 >> 2] = n), u[2889] = o, u[2886] = i;
                                                                                                break e
                                                                                            }
                                                                                            if (!(d = u[2885])) break l;
                                                                                            for (t = e = (n = (d & 0 - d) - 1 | 0) >>> 12 & 16, t |= e = (n = n >>> e | 0) >>> 5 & 8, t |= e = (n = n >>> e | 0) >>> 2 & 4, n = u[11840 + (((t |= e = (n = n >>> e | 0) >>> 1 & 2) | (e = (n = n >>> e | 0) >>> 1 & 1)) + (n >>> e | 0) << 2) >> 2], i = (-8 & u[n + 4 >> 2]) - c | 0, t = n;
                                                                                                (e = u[t + 16 >> 2]) || (e = u[t + 20 >> 2]);) i = (o = (t = (-8 & u[e + 4 >> 2]) - c | 0) >>> 0 < i >>> 0) ? t : i, n = o ? e : n, t = e;
                                                                                            if ((A = n + c | 0) >>> 0 <= n >>> 0) break c;
                                                                                            if (v = u[n + 24 >> 2], (0 | (o = u[n + 12 >> 2])) != (0 | n)) {
                                                                                                e = u[n + 8 >> 2], u[e + 12 >> 2] = o, u[o + 8 >> 2] = e;
                                                                                                break r
                                                                                            }
                                                                                            if (!(e = u[(t = n + 20 | 0) >> 2])) {
                                                                                                if (!(e = u[n + 16 >> 2])) break s;
                                                                                                t = n + 16 | 0
                                                                                            }
                                                                                            for (; a = t, o = e, (e = u[(t = e + 20 | 0) >> 2]) || (t = o + 16 | 0, e = u[o + 16 >> 2]););
                                                                                            u[a >> 2] = 0;
                                                                                            break r
                                                                                        }
                                                                                        if (c = -1, !(e >>> 0 > 4294967231) && (c = -8 & (e = e + 11 | 0), d = u[2885])) {
                                                                                            a = 0, (e = e >>> 8 | 0) && (a = 31, c >>> 0 > 16777215 || (e <<= n = e + 1048320 >>> 16 & 8, a = 28 + ((e = ((e <<= i = e + 520192 >>> 16 & 4) << (t = e + 245760 >>> 16 & 2) >>> 15 | 0) - (t | n | i) | 0) << 1 | c >>> e + 21 & 1) | 0)), i = 0 - c | 0;
                                                                                            d: {
                                                                                                A: {
                                                                                                    if (t = u[11840 + (a << 2) >> 2])
                                                                                                        for (e = 0, n = c << (31 == (0 | a) ? 0 : 25 - (a >>> 1 | 0) | 0);;) {
                                                                                                            if (!((f = (-8 & u[t + 4 >> 2]) - c | 0) >>> 0 >= i >>> 0 || (o = t, i = f))) {
                                                                                                                i = 0, e = t;
                                                                                                                break A
                                                                                                            }
                                                                                                            if (f = u[t + 20 >> 2], t = u[16 + ((n >>> 29 & 4) + t | 0) >> 2], e = f ? (0 | f) == (0 | t) ? e : f : e, n <<= 1, !t) break
                                                                                                        } else e = 0;
                                                                                                    if (!(e | o)) {
                                                                                                        if (!(e = (0 - (e = 2 << a) | e) & d)) break l;
                                                                                                        t = e = (n = (e & 0 - e) - 1 | 0) >>> 12 & 16, t |= e = (n = n >>> e | 0) >>> 5 & 8, t |= e = (n = n >>> e | 0) >>> 2 & 4, e = u[11840 + (((t |= e = (n = n >>> e | 0) >>> 1 & 2) | (e = (n = n >>> e | 0) >>> 1 & 1)) + (n >>> e | 0) << 2) >> 2]
                                                                                                    }
                                                                                                    if (!e) break d
                                                                                                }
                                                                                                for (; i = (t = (n = (-8 & u[e + 4 >> 2]) - c | 0) >>> 0 < i >>> 0) ? n : i, o = t ? e : o, e = (n = u[e + 16 >> 2]) || u[e + 20 >> 2];);
                                                                                            }
                                                                                            if (!(!o | i >>> 0 >= u[2886] - c >>> 0)) {
                                                                                                if ((a = o + c | 0) >>> 0 <= o >>> 0) break c;
                                                                                                if (A = u[o + 24 >> 2], (0 | o) != (0 | (n = u[o + 12 >> 2]))) {
                                                                                                    e = u[o + 8 >> 2], u[e + 12 >> 2] = n, u[n + 8 >> 2] = e;
                                                                                                    break n
                                                                                                }
                                                                                                if (!(e = u[(t = o + 20 | 0) >> 2])) {
                                                                                                    if (!(e = u[o + 16 >> 2])) break u;
                                                                                                    t = o + 16 | 0
                                                                                                }
                                                                                                for (; f = t, n = e, (e = u[(t = e + 20 | 0) >> 2]) || (t = n + 16 | 0, e = u[n + 16 >> 2]););
                                                                                                u[f >> 2] = 0;
                                                                                                break n
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    if ((t = u[2886]) >>> 0 >= c >>> 0) {
                                                                                        o = u[2889], (n = t - c | 0) >>> 0 >= 16 ? (u[2886] = n, e = o + c | 0, u[2889] = e, u[e + 4 >> 2] = 1 | n, u[t + o >> 2] = n, u[o + 4 >> 2] = 3 | c) : (u[2889] = 0, u[2886] = 0, u[o + 4 >> 2] = 3 | t, u[4 + (e = t + o | 0) >> 2] = 1 | u[e + 4 >> 2]), e = o + 8 | 0;
                                                                                        break e
                                                                                    }
                                                                                    if ((d = u[2887]) >>> 0 > c >>> 0) {
                                                                                        n = d - c | 0, u[2887] = n, e = (t = u[2890]) + c | 0, u[2890] = e, u[e + 4 >> 2] = 1 | n, u[t + 4 >> 2] = 3 | c, e = t + 8 | 0;
                                                                                        break e
                                                                                    }
                                                                                    if (e = 0, n = A = c + 47 | 0, u[3002] ? t = u[3004] : (u[3005] = -1, u[3006] = -1, u[3003] = 4096, u[3004] = 4096, u[3002] = r + 12 & -16 ^ 1431655768, u[3007] = 0, u[2995] = 0, t = 4096), (t = (a = n + t | 0) & (f = 0 - t | 0)) >>> 0 <= c >>> 0) break e;
                                                                                    if ((i = u[2994]) && (n = (o = u[2992]) + t | 0) >>> 0 <= o >>> 0 | n >>> 0 > i >>> 0) break e;
                                                                                    if (4 & s[11980]) break i;l: {
                                                                                        d: {
                                                                                            if (o = u[2890])
                                                                                                for (e = 11984;;) {
                                                                                                    if ((n = u[e >> 2]) + u[e + 4 >> 2] >>> 0 > o >>> 0 && n >>> 0 <= o >>> 0) break d;
                                                                                                    if (!(e = u[e + 8 >> 2])) break
                                                                                                }
                                                                                            if (-1 == (0 | (n = ze(0)))) break a;
                                                                                            if (f = t, (e = (o = u[3003]) + -1 | 0) & n && (f = (t - n | 0) + (e + n & 0 - o) | 0), f >>> 0 <= c >>> 0 | f >>> 0 > 2147483646) break a;
                                                                                            if ((i = u[2994]) && (e = (o = u[2992]) + f | 0) >>> 0 <= o >>> 0 | e >>> 0 > i >>> 0) break a;
                                                                                            if ((0 | n) != (0 | (e = ze(f)))) break l;
                                                                                            break o
                                                                                        }
                                                                                        if ((f &= a - d) >>> 0 > 2147483646) break a;
                                                                                        if ((0 | (n = ze(f))) == (u[e >> 2] + u[e + 4 >> 2] | 0)) break f;e = n
                                                                                    }
                                                                                    if (!(-1 == (0 | e) | c + 48 >>> 0 <= f >>> 0)) {
                                                                                        if ((n = (n = u[3004]) + (A - f | 0) & 0 - n) >>> 0 > 2147483646) {
                                                                                            n = e;
                                                                                            break o
                                                                                        }
                                                                                        if (-1 != (0 | ze(n))) {
                                                                                            f = n + f | 0, n = e;
                                                                                            break o
                                                                                        }
                                                                                        ze(0 - f | 0);
                                                                                        break a
                                                                                    }
                                                                                    if (n = e, -1 != (0 | e)) break o;
                                                                                    break a
                                                                                }
                                                                                p()
                                                                            }
                                                                            o = 0;
                                                                            break r
                                                                        }
                                                                        n = 0;
                                                                        break n
                                                                    }
                                                                    if (-1 != (0 | n)) break o
                                                                }
                                                                u[2995] = 4 | u[2995]
                                                            }
                                                            if (t >>> 0 > 2147483646) break t;
                                                            if ((n = ze(t)) >>> 0 >= (e = ze(0)) >>> 0 | -1 == (0 | n) | -1 == (0 | e)) break t;
                                                            if ((f = e - n | 0) >>> 0 <= c + 40 >>> 0) break t
                                                        }
                                                        e = u[2992] + f | 0,
                                                        u[2992] = e,
                                                        e >>> 0 > l[2993] && (u[2993] = e);o: {
                                                            i: {
                                                                a: {
                                                                    if (i = u[2890]) {
                                                                        for (e = 11984;;) {
                                                                            if (((o = u[e >> 2]) + (t = u[e + 4 >> 2]) | 0) == (0 | n)) break a;
                                                                            if (!(e = u[e + 8 >> 2])) break
                                                                        }
                                                                        break i
                                                                    }
                                                                    for (n >>> 0 >= (e = u[2888]) >>> 0 && e || (u[2888] = n), e = 0, u[2997] = f, u[2996] = n, u[2892] = -1, u[2893] = u[3002], u[2999] = 0; t = 11576 + (o = e << 3) | 0, u[o + 11584 >> 2] = t, u[o + 11588 >> 2] = t, 32 != (0 | (e = e + 1 | 0)););t = (o = f + -40 | 0) - (e = n + 8 & 7 ? -8 - n & 7 : 0) | 0,
                                                                    u[2887] = t,
                                                                    e = e + n | 0,
                                                                    u[2890] = e,
                                                                    u[e + 4 >> 2] = 1 | t,
                                                                    u[4 + (n + o | 0) >> 2] = 40,
                                                                    u[2891] = u[3006];
                                                                    break o
                                                                }
                                                                if (!(8 & s[e + 12 | 0] | n >>> 0 <= i >>> 0 | o >>> 0 > i >>> 0)) {
                                                                    u[e + 4 >> 2] = t + f, t = (e = i + 8 & 7 ? -8 - i & 7 : 0) + i | 0, u[2890] = t, e = (n = u[2887] + f | 0) - e | 0, u[2887] = e, u[t + 4 >> 2] = 1 | e, u[4 + (n + i | 0) >> 2] = 40, u[2891] = u[3006];
                                                                    break o
                                                                }
                                                            }
                                                            n >>> 0 < (o = u[2888]) >>> 0 && (u[2888] = n, o = 0),
                                                            t = n + f | 0,
                                                            e = 11984;i: {
                                                                a: {
                                                                    f: {
                                                                        u: {
                                                                            s: {
                                                                                c: {
                                                                                    for (;;) {
                                                                                        if ((0 | t) != u[e >> 2]) {
                                                                                            if (e = u[e + 8 >> 2]) continue;
                                                                                            break c
                                                                                        }
                                                                                        break
                                                                                    }
                                                                                    if (!(8 & s[e + 12 | 0])) break s
                                                                                }
                                                                                for (e = 11984;;) {
                                                                                    if ((t = u[e >> 2]) >>> 0 <= i >>> 0 && (a = t + u[e + 4 >> 2] | 0) >>> 0 > i >>> 0) break u;
                                                                                    e = u[e + 8 >> 2]
                                                                                }
                                                                            }
                                                                            if (u[e >> 2] = n, u[e + 4 >> 2] = u[e + 4 >> 2] + f, u[4 + (d = (n + 8 & 7 ? -8 - n & 7 : 0) + n | 0) >> 2] = 3 | c, e = ((n = t + (t + 8 & 7 ? -8 - t & 7 : 0) | 0) - d | 0) - c | 0, a = c + d | 0, (0 | n) == (0 | i)) {
                                                                                u[2890] = a, e = u[2887] + e | 0, u[2887] = e, u[a + 4 >> 2] = 1 | e;
                                                                                break a
                                                                            }
                                                                            if (u[2889] == (0 | n)) {
                                                                                u[2889] = a, e = u[2886] + e | 0, u[2886] = e, u[a + 4 >> 2] = 1 | e, u[e + a >> 2] = e;
                                                                                break a
                                                                            }
                                                                            if (1 == (3 & (t = u[n + 4 >> 2]))) {
                                                                                A = -8 & t;
                                                                                s: if (t >>> 0 <= 255) {
                                                                                    if (i = u[n + 8 >> 2], t = t >>> 3 | 0, (0 | (o = u[n + 12 >> 2])) == (0 | i)) {
                                                                                        g = 11536, h = u[2884] & rr(-2, t), u[g >> 2] = h;
                                                                                        break s
                                                                                    }
                                                                                    u[i + 12 >> 2] = o, u[o + 8 >> 2] = i
                                                                                } else {
                                                                                    if (v = u[n + 24 >> 2], (0 | (f = u[n + 12 >> 2])) == (0 | n))
                                                                                        if ((c = u[(i = n + 20 | 0) >> 2]) || (c = u[(i = n + 16 | 0) >> 2])) {
                                                                                            for (; t = i, (c = u[(i = (f = c) + 20 | 0) >> 2]) || (i = f + 16 | 0, c = u[f + 16 >> 2]););
                                                                                            u[t >> 2] = 0
                                                                                        } else f = 0;
                                                                                    else t = u[n + 8 >> 2], u[t + 12 >> 2] = f, u[f + 8 >> 2] = t;
                                                                                    if (v) {
                                                                                        o = u[n + 28 >> 2];
                                                                                        c: {
                                                                                            if (u[(t = 11840 + (o << 2) | 0) >> 2] == (0 | n)) {
                                                                                                if (u[t >> 2] = f, f) break c;
                                                                                                g = 11540, h = u[2885] & rr(-2, o), u[g >> 2] = h;
                                                                                                break s
                                                                                            }
                                                                                            if (u[v + (u[v + 16 >> 2] == (0 | n) ? 16 : 20) >> 2] = f, !f) break s
                                                                                        }
                                                                                        u[f + 24 >> 2] = v, (t = u[n + 16 >> 2]) && (u[f + 16 >> 2] = t, u[t + 24 >> 2] = f), (t = u[n + 20 >> 2]) && (u[f + 20 >> 2] = t, u[t + 24 >> 2] = f)
                                                                                    }
                                                                                }
                                                                                n = n + A | 0, e = e + A | 0
                                                                            }
                                                                            if (u[n + 4 >> 2] = -2 & u[n + 4 >> 2], u[a + 4 >> 2] = 1 | e, u[e + a >> 2] = e, e >>> 0 <= 255) {
                                                                                n = 11576 + ((e = e >>> 3 | 0) << 3) | 0, (t = u[2884]) & (e = 1 << e) ? e = u[n + 8 >> 2] : (u[2884] = e | t, e = n), u[n + 8 >> 2] = a, u[e + 12 >> 2] = a, u[a + 12 >> 2] = n, u[a + 8 >> 2] = e;
                                                                                break a
                                                                            }
                                                                            if (t = 0, (o = e >>> 8 | 0) && (t = 31, e >>> 0 > 16777215 || (t = o, t <<= o = o + 1048320 >>> 16 & 8, t = 28 + ((t = ((t <<= f = t + 520192 >>> 16 & 4) << (i = t + 245760 >>> 16 & 2) >>> 15 | 0) - (i | o | f) | 0) << 1 | e >>> t + 21 & 1) | 0)), u[(n = a) + 28 >> 2] = t, u[a + 16 >> 2] = 0, u[a + 20 >> 2] = 0, f = 11840 + (t << 2) | 0, (o = u[2885]) & (n = 1 << t)) {
                                                                                for (i = e << (31 == (0 | t) ? 0 : 25 - (t >>> 1 | 0) | 0), n = u[f >> 2];;) {
                                                                                    if (t = n, (-8 & u[n + 4 >> 2]) == (0 | e)) break f;
                                                                                    if (n = i >>> 29 | 0, i <<= 1, !(n = u[(o = 16 + (t + (4 & n) | 0) | 0) >> 2])) break
                                                                                }
                                                                                u[o >> 2] = a, u[a + 24 >> 2] = t
                                                                            } else u[2885] = n | o,
                                                                            u[f >> 2] = a,
                                                                            u[a + 24 >> 2] = f;u[a + 12 >> 2] = a,
                                                                            u[a + 8 >> 2] = a;
                                                                            break a
                                                                        }
                                                                        for (t = (o = f + -40 | 0) - (e = n + 8 & 7 ? -8 - n & 7 : 0) | 0, u[2887] = t, e = e + n | 0, u[2890] = e, u[e + 4 >> 2] = 1 | t, u[4 + (n + o | 0) >> 2] = 40, u[2891] = u[3006], u[(t = (e = (a + (a + -39 & 7 ? 39 - a & 7 : 0) | 0) - 47 | 0) >>> 0 < i + 16 >>> 0 ? i : e) + 4 >> 2] = 27, e = u[2999], u[t + 16 >> 2] = u[2998], u[t + 20 >> 2] = e, e = u[2997], u[t + 8 >> 2] = u[2996], u[t + 12 >> 2] = e, u[2998] = t + 8, u[2997] = f, u[2996] = n, u[2999] = 0, e = t + 24 | 0; u[e + 4 >> 2] = 7, n = e + 8 | 0, e = e + 4 | 0, a >>> 0 > n >>> 0;);
                                                                        if ((0 | t) == (0 | i)) break o;
                                                                        if (u[t + 4 >> 2] = -2 & u[t + 4 >> 2], a = t - i | 0, u[i + 4 >> 2] = 1 | a, u[t >> 2] = a, a >>> 0 <= 255) {
                                                                            n = 11576 + ((e = a >>> 3 | 0) << 3) | 0, (t = u[2884]) & (e = 1 << e) ? e = u[n + 8 >> 2] : (u[2884] = e | t, e = n), u[n + 8 >> 2] = i, u[e + 12 >> 2] = i, u[i + 12 >> 2] = n, u[i + 8 >> 2] = e;
                                                                            break o
                                                                        }
                                                                        if (u[i + 16 >> 2] = 0, u[i + 20 >> 2] = 0, n = 0, (t = a >>> 8 | 0) && (n = 31, a >>> 0 > 16777215 || (n = t, n <<= t = t + 1048320 >>> 16 & 8, n = 28 + ((n = ((n <<= f = n + 520192 >>> 16 & 4) << (o = n + 245760 >>> 16 & 2) >>> 15 | 0) - (o | t | f) | 0) << 1 | a >>> n + 21 & 1) | 0)), u[(e = i) + 28 >> 2] = n, o = 11840 + (n << 2) | 0, (t = u[2885]) & (e = 1 << n)) {
                                                                            for (e = a << (31 == (0 | n) ? 0 : 25 - (n >>> 1 | 0) | 0), n = u[o >> 2];;) {
                                                                                if (t = n, (0 | a) == (-8 & u[n + 4 >> 2])) break i;
                                                                                if (n = e >>> 29 | 0, e <<= 1, !(n = u[(o = 16 + (t + (4 & n) | 0) | 0) >> 2])) break
                                                                            }
                                                                            u[o >> 2] = i, u[i + 24 >> 2] = t
                                                                        } else u[2885] = e | t,
                                                                        u[o >> 2] = i,
                                                                        u[i + 24 >> 2] = o;u[i + 12 >> 2] = i,
                                                                        u[i + 8 >> 2] = i;
                                                                        break o
                                                                    }
                                                                    e = u[t + 8 >> 2],
                                                                    u[e + 12 >> 2] = a,
                                                                    u[t + 8 >> 2] = a,
                                                                    u[a + 24 >> 2] = 0,
                                                                    u[a + 12 >> 2] = t,
                                                                    u[a + 8 >> 2] = e
                                                                }
                                                                e = d + 8 | 0;
                                                                break e
                                                            }
                                                            e = u[t + 8 >> 2],
                                                            u[e + 12 >> 2] = i,
                                                            u[t + 8 >> 2] = i,
                                                            u[i + 24 >> 2] = 0,
                                                            u[i + 12 >> 2] = t,
                                                            u[i + 8 >> 2] = e
                                                        }
                                                        if (!((e = u[2887]) >>> 0 <= c >>> 0)) {
                                                            n = e - c | 0, u[2887] = n, e = (t = u[2890]) + c | 0, u[2890] = e, u[e + 4 >> 2] = 1 | n, u[t + 4 >> 2] = 3 | c, e = t + 8 | 0;
                                                            break e
                                                        }
                                                    }
                                                    u[2865] = 48,
                                                    e = 0;
                                                    break e
                                                }
                                                n: if (A) {
                                                    t = u[o + 28 >> 2];
                                                    t: {
                                                        if (u[(e = 11840 + (t << 2) | 0) >> 2] == (0 | o)) {
                                                            if (u[e >> 2] = n, n) break t;
                                                            d = rr(-2, t) & d, u[2885] = d;
                                                            break n
                                                        }
                                                        if (u[A + (u[A + 16 >> 2] == (0 | o) ? 16 : 20) >> 2] = n, !n) break n
                                                    }
                                                    u[n + 24 >> 2] = A, (e = u[o + 16 >> 2]) && (u[n + 16 >> 2] = e, u[e + 24 >> 2] = n), (e = u[o + 20 >> 2]) && (u[n + 20 >> 2] = e, u[e + 24 >> 2] = n)
                                                }n: if (i >>> 0 <= 15) e = i + c | 0, u[o + 4 >> 2] = 3 | e, u[4 + (e = e + o | 0) >> 2] = 1 | u[e + 4 >> 2];
                                                    elseif (u[o + 4 >> 2] = 3 | c, u[a + 4 >> 2] = 1 | i, u[i + a >> 2] = i, i >>> 0 <= 255) n = 11576 + ((e = i >>> 3 | 0) << 3) | 0,
                                                (t = u[2884]) & (e = 1 << e) ? e = u[n + 8 >> 2] : (u[2884] = e | t, e = n),
                                                u[n + 8 >> 2] = a,
                                                u[e + 12 >> 2] = a,
                                                u[a + 12 >> 2] = n,
                                                u[a + 8 >> 2] = e;
                                                else {
                                                    n = 0, (t = i >>> 8 | 0) && (n = 31, i >>> 0 > 16777215 || (n = t, n <<= t = t + 1048320 >>> 16 & 8, n = 28 + ((n = ((n <<= c = n + 520192 >>> 16 & 4) << (f = n + 245760 >>> 16 & 2) >>> 15 | 0) - (f | t | c) | 0) << 1 | i >>> n + 21 & 1) | 0)), u[(e = a) + 28 >> 2] = n, u[a + 16 >> 2] = 0, u[a + 20 >> 2] = 0, t = 11840 + (n << 2) | 0;
                                                    t: {
                                                        if ((e = 1 << n) & d) {
                                                            for (e = i << (31 == (0 | n) ? 0 : 25 - (n >>> 1 | 0) | 0), c = u[t >> 2];;) {
                                                                if ((-8 & u[(n = c) + 4 >> 2]) == (0 | i)) break t;
                                                                if (t = e >>> 29 | 0, e <<= 1, !(c = u[(t = 16 + (n + (4 & t) | 0) | 0) >> 2])) break
                                                            }
                                                            u[t >> 2] = a, u[a + 24 >> 2] = n
                                                        } else u[2885] = e | d,
                                                        u[t >> 2] = a,
                                                        u[a + 24 >> 2] = t;u[a + 12 >> 2] = a,
                                                        u[a + 8 >> 2] = a;
                                                        break n
                                                    }
                                                    e = u[n + 8 >> 2], u[e + 12 >> 2] = a, u[n + 8 >> 2] = a, u[a + 24 >> 2] = 0, u[a + 12 >> 2] = n, u[a + 8 >> 2] = e
                                                }
                                                e = o + 8 | 0;
                                                break e
                                            }
                                            r: if (v) {
                                                t = u[n + 28 >> 2];
                                                n: {
                                                    if (u[(e = 11840 + (t << 2) | 0) >> 2] == (0 | n)) {
                                                        if (u[e >> 2] = o, o) break n;
                                                        g = 11540, h = rr(-2, t) & d, u[g >> 2] = h;
                                                        break r
                                                    }
                                                    if (u[(u[v + 16 >> 2] == (0 | n) ? 16 : 20) + v >> 2] = o, !o) break r
                                                }
                                                u[o + 24 >> 2] = v, (e = u[n + 16 >> 2]) && (u[o + 16 >> 2] = e, u[e + 24 >> 2] = o), (e = u[n + 20 >> 2]) && (u[o + 20 >> 2] = e, u[e + 24 >> 2] = o)
                                            }i >>> 0 <= 15 ? (e = i + c | 0, u[n + 4 >> 2] = 3 | e, u[4 + (e = e + n | 0) >> 2] = 1 | u[e + 4 >> 2]) : (u[n + 4 >> 2] = 3 | c, u[A + 4 >> 2] = 1 | i, u[i + A >> 2] = i, m && (t = 11576 + ((e = m >>> 3 | 0) << 3) | 0, o = u[2889], (e = 1 << e) & f ? e = u[t + 8 >> 2] : (u[2884] = e | f, e = t), u[t + 8 >> 2] = o, u[e + 12 >> 2] = o, u[o + 12 >> 2] = t, u[o + 8 >> 2] = e), u[2889] = A, u[2886] = i),
                                            e = n + 8 | 0
                                        }
                                        return L = r + 16 | 0, 0 | e
                                    }

                                    function F(e, r) {
                                        var n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0,
                                            f = 0,
                                            c = 0,
                                            d = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0;
                                        if (u[r + 288 >> 2] >= 1)
                                            for (x = r + 2248 | 0;;) {
                                                if (p = u[r + 2244 >> 2], g = u[r + 2304 >> 2], i = 0, u[r + 108 >> 2] && (c = u[e + 4 >> 2], o = s[r + 904 | 0], (0 | (t = u[e + 8 >> 2])) > -1 || ((n = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (f = s[0 | n] | s[n + 1 | 0] << 8 | s[n + 2 | 0] << 16 | s[n + 3 | 0] << 24, u[e + 12 >> 2] = n + 3, t = t + 24 | 0, u[e + 8 >> 2] = t, u[e >> 2] = u[e >> 2] << 24 | (f >>> 8 & 65280 | f << 8 & 16711680 | f << 24) >>> 8) : (Me(e), t = u[e + 8 >> 2])), f = e, m = t, (d = (i = u[e >> 2]) >>> t | 0) >>> 0 > (o = A(o, c) >>> 8 | 0) >>> 0 ? (i = ((-1 ^ o) << t) + i | 0, u[e >> 2] = i, c = c - o | 0) : c = o + 1 | 0, t = m - (n = 24 ^ v(c)) | 0, u[f + 8 >> 2] = t, f = (c << n) - 1 | 0, u[e + 4 >> 2] = f, d >>> 0 <= o >>> 0 ? (c = s[r + 905 | 0], (0 | t) > -1 || ((n = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (o = s[0 | n] | s[n + 1 | 0] << 8 | s[n + 2 | 0] << 16 | s[n + 3 | 0] << 24, t = t + 24 | 0, u[e + 8 >> 2] = t, u[e + 12 >> 2] = n + 3, i = i << 24 | (o >>> 8 & 65280 | o << 8 & 16711680 | o << 24) >>> 8, u[e >> 2] = i) : (Me(e), i = u[e >> 2], t = u[e + 8 >> 2])), (o = i >>> t | 0) >>> 0 > (n = A(f, c) >>> 8 | 0) >>> 0 ? (u[e >> 2] = ((-1 ^ n) << t) + i, f = f - n | 0) : f = n + 1 | 0, i = o >>> 0 > n >>> 0, t = t - (n = 24 ^ v(f)) | 0, n = f << n) : (c = s[r + 906 | 0], (0 | t) > -1 || ((n = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (o = s[0 | n] | s[n + 1 | 0] << 8 | s[n + 2 | 0] << 16 | s[n + 3 | 0] << 24, t = t + 24 | 0, u[e + 8 >> 2] = t, u[e + 12 >> 2] = n + 3, i = i << 24 | (o >>> 8 & 65280 | o << 8 & 16711680 | o << 24) >>> 8, u[e >> 2] = i) : (Me(e), i = u[e >> 2], t = u[e + 8 >> 2])), d = n = t, i >>> n >>> 0 > (o = A(f, c) >>> 8 | 0) >>> 0 ? (u[e >> 2] = ((-1 ^ o) << t) + i, i = 3, f = f - o | 0) : (i = 2, f = o + 1 | 0), t = d - (n = 24 ^ v(f)) | 0, n = f << n), u[e + 8 >> 2] = t, u[e + 4 >> 2] = n + -1), g = g + A(h, 800) | 0, a[g + 798 | 0] = i, u[r + 2236 >> 2] ? (o = u[e + 4 >> 2], i = s[r + 2240 | 0], (0 | (t = u[e + 8 >> 2])) > -1 || ((n = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (f = s[0 | n] | s[n + 1 | 0] << 8 | s[n + 2 | 0] << 16 | s[n + 3 | 0] << 24, u[e + 12 >> 2] = n + 3, t = t + 24 | 0, u[e + 8 >> 2] = t, u[e >> 2] = u[e >> 2] << 24 | (f >>> 8 & 65280 | f << 8 & 16711680 | f << 24) >>> 8) : (Me(e), t = u[e + 8 >> 2])), f = e, m = t, (d = (c = u[e >> 2]) >>> t | 0) >>> 0 > (i = A(o, i) >>> 8 | 0) >>> 0 ? (u[e >> 2] = c + ((-1 ^ i) << t), o = o - i | 0) : o = i + 1 | 0, t = m - (n = 24 ^ v(o)) | 0, u[f + 8 >> 2] = t, c = (o << n) - 1 | 0, u[e + 4 >> 2] = c, a[g + 797 | 0] = d >>> 0 > i >>> 0) : (t = u[e + 8 >> 2], c = u[e + 4 >> 2]), (0 | t) > -1 || ((n = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (f = s[0 | n] | s[n + 1 | 0] << 8 | s[n + 2 | 0] << 16 | s[n + 3 | 0] << 24, u[e + 12 >> 2] = n + 3, t = t + 24 | 0, u[e + 8 >> 2] = t, u[e >> 2] = u[e >> 2] << 24 | (f >>> 8 & 65280 | f << 8 & 16711680 | f << 24) >>> 8) : (Me(e), t = u[e + 8 >> 2])), p = p + (h << 2) | 0, f = e, m = t, (d = (i = u[e >> 2]) >>> t >>> 0 <= (o = A(c, 145) >>> 8 | 0) >>> 0) ? o = o + 1 | 0 : (i = ((-1 ^ o) << t) + i | 0, u[e >> 2] = i, o = c - o | 0), t = m - (n = 24 ^ v(o)) | 0, u[f + 8 >> 2] = t, c = (o << n) - 1 | 0, u[e + 4 >> 2] = c, a[g + 768 | 0] = d, d)
                                                    for (f = g + 769 | 0, b = 0;;) {
                                                        for (t = s[0 | (C = 2248 + (r + b | 0) | 0)], k = 0;;) {
                                                            if (E = A(t, 9), _ = A(s[0 | (I = p + k | 0)], 90), o = s[E + (_ + 3504 | 0) | 0], d = u[e + 4 >> 2], (0 | (t = u[e + 8 >> 2])) > -1 || ((n = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (i = s[0 | n] | s[n + 1 | 0] << 8 | s[n + 2 | 0] << 16 | s[n + 3 | 0] << 24, u[e + 12 >> 2] = n + 3, t = t + 24 | 0, u[e + 8 >> 2] = t, u[e >> 2] = u[e >> 2] << 24 | (i >>> 8 & 65280 | i << 8 & 16711680 | i << 24) >>> 8) : (Me(e), t = u[e + 8 >> 2])), m = e, y = t, (w = (c = u[e >> 2]) >>> t | 0) >>> 0 > (o = A(o, d) >>> 8 | 0) >>> 0 ? (c = ((-1 ^ o) << t) + c | 0, u[e >> 2] = c, d = d - o | 0) : d = o + 1 | 0, t = y - (n = 24 ^ v(d)) | 0, u[m + 8 >> 2] = t, n = (d << n) - 1 | 0, u[e + 4 >> 2] = n, i = a[(o = w >>> 0 > o >>> 0) + 4416 | 0], 41706 >>> o & 1)
                                                                for (; w = s[((_ + 3504 | 0) + E | 0) + i | 0], (0 | t) > -1 || ((o = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (d = s[0 | o] | s[o + 1 | 0] << 8 | s[o + 2 | 0] << 16 | s[o + 3 | 0] << 24, t = t + 24 | 0, u[e + 8 >> 2] = t, u[e + 12 >> 2] = o + 3, c = c << 24 | (d >>> 8 & 65280 | d << 8 & 16711680 | d << 24) >>> 8, u[e >> 2] = c) : (Me(e), c = u[e >> 2], t = u[e + 8 >> 2])), o = i << 1, m = e, y = t, (D = c >>> t | 0) >>> 0 > (d = A(n, w) >>> 8 | 0) >>> 0 ? (c = ((-1 ^ d) << t) + c | 0, u[e >> 2] = c, n = n - d | 0) : n = d + 1 | 0, t = y - (i = 24 ^ v(n)) | 0, u[m + 8 >> 2] = t, n = (n << i) - 1 | 0, u[e + 4 >> 2] = n, i = a[4416 + (o |= D >>> 0 > d >>> 0) | 0], 41706 >>> o & 1;);
                                                            if (t = 0 - i | 0, a[0 | I] = t, 4 == (0 | (k = k + 1 | 0))) break
                                                        }
                                                        if (n = f, f = s[0 | p] | s[p + 1 | 0] << 8 | s[p + 2 | 0] << 16 | s[p + 3 | 0] << 24, a[0 | n] = f, a[n + 1 | 0] = f >>> 8, a[n + 2 | 0] = f >>> 16, a[n + 3 | 0] = f >>> 24, a[0 | C] = t, f = n + 4 | 0, 4 == (0 | (b = b + 1 | 0))) break
                                                    } else(0 | t) > -1 || ((n = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (f = s[0 | n] | s[n + 1 | 0] << 8 | s[n + 2 | 0] << 16 | s[n + 3 | 0] << 24, t = t + 24 | 0, u[e + 8 >> 2] = t, u[e + 12 >> 2] = n + 3, i = i << 24 | (f >>> 8 & 65280 | f << 8 & 16711680 | f << 24) >>> 8, u[e >> 2] = i) : (Me(e), i = u[e >> 2], t = u[e + 8 >> 2])), f = e, m = t, (d = i >>> t >>> 0 <= (o = A(c, 156) >>> 8 | 0) >>> 0) ? o = o + 1 | 0 : (i = ((-1 ^ o) << t) + i | 0, u[e >> 2] = i, o = c - o | 0), t = m - (n = 24 ^ v(o)) | 0, u[f + 8 >> 2] = t, f = (o << n) - 1 | 0, u[e + 4 >> 2] = f, d ? ((0 | t) > -1 || ((n = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (o = s[0 | n] | s[n + 1 | 0] << 8 | s[n + 2 | 0] << 16 | s[n + 3 | 0] << 24, t = t + 24 | 0, u[e + 8 >> 2] = t, u[e + 12 >> 2] = n + 3, i = i << 24 | (o >>> 8 & 65280 | o << 8 & 16711680 | o << 24) >>> 8, u[e >> 2] = i) : (Me(e), i = u[e >> 2], t = u[e + 8 >> 2])), c = n = t, i >>> n >>> 0 > (o = A(f, 163) >>> 8 | 0) >>> 0 ? (u[e >> 2] = ((-1 ^ o) << t) + i, i = 2, f = f - o | 0) : (i = 0, f = o + 1 | 0), t = c - (n = 24 ^ v(f)) | 0, n = f << n) : ((0 | t) > -1 || ((n = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (o = s[0 | n] | s[n + 1 | 0] << 8 | s[n + 2 | 0] << 16 | s[n + 3 | 0] << 24, t = t + 24 | 0, u[e + 8 >> 2] = t, u[e + 12 >> 2] = n + 3, i = i << 24 | (o >>> 8 & 65280 | o << 8 & 16711680 | o << 24) >>> 8, u[e >> 2] = i) : (Me(e), i = u[e >> 2], t = u[e + 8 >> 2])), c = n = t, i >>> n >>> 0 > (o = f >>> 1 & 16777215) >>> 0 ? (u[e >> 2] = ((-1 ^ o) << t) + i, i = 1, f = f - o | 0) : (i = 3, f = o + 1 | 0), t = c - (n = 24 ^ v(f)) | 0, n = f << n), u[e + 8 >> 2] = t, u[e + 4 >> 2] = n + -1, a[g + 769 | 0] = i, n = A(i, 16843009), a[0 | p] = n, a[p + 1 | 0] = n >>> 8, a[p + 2 | 0] = n >>> 16, a[p + 3 | 0] = n >>> 24, a[0 | (t = x)] = n, a[t + 1 | 0] = n >>> 8, a[t + 2 | 0] = n >>> 16, a[t + 3 | 0] = n >>> 24;
                                                if (c = u[e + 4 >> 2], (0 | (t = u[e + 8 >> 2])) > -1 || ((n = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (f = s[0 | n] | s[n + 1 | 0] << 8 | s[n + 2 | 0] << 16 | s[n + 3 | 0] << 24, u[e + 12 >> 2] = n + 3, t = t + 24 | 0, u[e + 8 >> 2] = t, u[e >> 2] = u[e >> 2] << 24 | (f >>> 8 & 65280 | f << 8 & 16711680 | f << 24) >>> 8) : (Me(e), t = u[e + 8 >> 2])), f = e, d = t, (p = (i = u[e >> 2]) >>> t >>> 0 <= (o = A(c, 142) >>> 8 | 0) >>> 0) ? o = o + 1 | 0 : (i = ((-1 ^ o) << t) + i | 0, u[e >> 2] = i, o = c - o | 0), t = d - (n = 24 ^ v(o)) | 0, u[f + 8 >> 2] = t, c = (o << n) - 1 | 0, u[e + 4 >> 2] = c, n = 0, p || ((0 | t) > -1 || ((n = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (f = s[0 | n] | s[n + 1 | 0] << 8 | s[n + 2 | 0] << 16 | s[n + 3 | 0] << 24, t = t + 24 | 0, u[e + 8 >> 2] = t, u[e + 12 >> 2] = n + 3, i = i << 24 | (f >>> 8 & 65280 | f << 8 & 16711680 | f << 24) >>> 8, u[e >> 2] = i) : (Me(e), i = u[e >> 2], t = u[e + 8 >> 2])), f = e, d = t, (p = i >>> t >>> 0 <= (o = A(c, 114) >>> 8 | 0) >>> 0) ? o = o + 1 | 0 : (i = ((-1 ^ o) << t) + i | 0, u[e >> 2] = i, o = c - o | 0), t = d - (n = 24 ^ v(o)) | 0, u[f + 8 >> 2] = t, o = (o << n) - 1 | 0, u[e + 4 >> 2] = o, n = 2, p || ((0 | t) > -1 || ((n = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (f = s[0 | n] | s[n + 1 | 0] << 8 | s[n + 2 | 0] << 16 | s[n + 3 | 0] << 24, t = t + 24 | 0, u[e + 8 >> 2] = t, u[e + 12 >> 2] = n + 3, i = i << 24 | (f >>> 8 & 65280 | f << 8 & 16711680 | f << 24) >>> 8, u[e >> 2] = i) : (Me(e), i = u[e >> 2], t = u[e + 8 >> 2])), i >>> t >>> 0 > (n = A(o, 183) >>> 8 | 0) >>> 0 ? (u[e >> 2] = ((-1 ^ n) << t) + i, i = o - n | 0, n = 1) : (i = n + 1 | 0, n = 3), o = t, t = 24 ^ v(i), u[e + 8 >> 2] = o - t, u[e + 4 >> 2] = (i << t) - 1)), a[g + 785 | 0] = n, !((0 | (h = h + 1 | 0)) < u[r + 288 >> 2])) break
                                            }
                                        return !u[r + 36 >> 2]
                                    }

                                    function R(e, r, n, t, o, a) {
                                        var f, l, d, v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0,
                                            L = 0,
                                            M = 0,
                                            B = 0,
                                            F = 0,
                                            R = 0,
                                            T = 0,
                                            O = 0;
                                        l = e + 124 | 0, w = (0 | (v = u[e + 112 >> 2])) / (0 | n) | 0, f = e + 24 | 0, d = (A(n, t) << 2) + r | 0, t = (v << 2) + r | 0;
                                        e: {
                                            r: {
                                                n: if (!((0 | v) >= (0 | (y = A(n, o)))))
                                                    for (k = y << 2, E = v - A(n, w) | 0, B = u[e + 148 >> 2], y = 0, L = (0 | (M = u[e + 120 >> 2])) > 0 ? l : 0, F = u[e + 56 >> 2] ? w : 16777216, R = M + 280 | 0, T = r + k | 0, b = u[e + 168 >> 2], (v = u[e + 152 >> 2]) && (y = u[u[e + 160 >> 2] + (A(u[e + 156 >> 2], w >> v) + (E >> v) << 2) >> 2]), I = b + A(y, 548) | 0, O = e + 136 | 0, x = e - -64 | 0, y = t;;) {
                                                        (0 | w) >= (0 | F) && (v = u[f + 4 >> 2], u[x >> 2] = u[f >> 2], u[x + 4 >> 2] = v, v = u[f + 28 >> 2], u[x + 24 >> 2] = u[f + 24 >> 2], u[x + 28 >> 2] = v, v = u[f + 20 >> 2], u[x + 16 >> 2] = u[f + 16 >> 2], u[x + 20 >> 2] = v, v = u[f + 12 >> 2], u[x + 8 >> 2] = u[f + 8 >> 2], u[x + 12 >> 2] = v, u[e + 96 >> 2] = t - r >> 2, u[e + 120 >> 2] >= 1 && ur(l, O), F = w + 8 | 0);
                                                        t: {
                                                            o: {
                                                                i: if (E & B || (v = u[e + 168 >> 2], b = 0, (m = u[e + 152 >> 2]) && (b = u[u[e + 160 >> 2] + (A(u[e + 156 >> 2], w >> m) + (E >> m) << 2) >> 2]), I = v + A(b, 548) | 0), u[I + 28 >> 2]) g = u[I + 24 >> 2];
                                                                    else {
                                                                        u[e + 44 >> 2] >= 32 && ye(f);
                                                                        a: {
                                                                            if (u[I + 32 >> 2]) {
                                                                                if (v = u[e + 28 >> 2], m = 31 & (p = 63 & (g = u[e + 44 >> 2])), C = u[e + 24 >> 2], b = g + (m = u[36 + (k = ((63 & (32 <= (63 & p) >>> 0 ? v >>> m | 0 : ((1 << m) - 1 & v) << 32 - m | C >>> m)) << 3) + I | 0) >> 2]) | 0, g = u[k + 40 >> 2], (0 | m) <= 255 ? (u[e + 44 >> 2] = b, u[t >> 2] = g, g = 0) : u[e + 44 >> 2] = b + -256, u[e + 48 >> 2] | (u[e + 44 >> 2] > 64 ? u[e + 40 >> 2] == u[e + 36 >> 2] : 0)) break n;
                                                                                if (g) break a;
                                                                                break o
                                                                            }
                                                                            if (k = e, v = u[e + 28 >> 2], m = 31 & (h = 63 & (g = u[e + 44 >> 2])), C = u[e + 24 >> 2], p = u[I >> 2] + ((255 & (32 <= (63 & h) >>> 0 ? v >>> m | 0 : ((1 << m) - 1 & v) << 32 - m | C >>> m)) << 2) | 0, (m = s[0 | p]) >>> 0 >= 9 && (g = g + 8 | 0, u[e + 44 >> 2] = g, b = (c[p + 2 >> 1] << 2) + p | 0, p = 31 & (_ = 63 & g), m = s[0 | (p = b + (((-1 << m + -8 ^ -1) & (32 <= (63 & _) >>> 0 ? v >>> p | 0 : ((1 << p) - 1 & v) << 32 - p | C >>> p)) << 2) | 0)]), u[k + 44 >> 2] = (255 & m) + g, u[e + 48 >> 2]) break n;g = c[p + 2 >> 1]
                                                                        }
                                                                        if (u[e + 44 >> 2] > 64 && u[e + 40 >> 2] == u[e + 36 >> 2]) break n;
                                                                        if (!((0 | g) <= 255)) {
                                                                            a: {
                                                                                f: {
                                                                                    if ((0 | g) <= 279) {
                                                                                        if (b = g + -256 | 0, (0 | g) >= 260 && (b = ve(f, v = g + -258 >> 1) + ((1 & b | 2) << v) | 0, C = u[f >> 2], v = u[f + 4 >> 2]), k = e, p = 31 & (_ = 63 & (g = u[e + 44 >> 2])), p = u[I + 16 >> 2] + ((255 & (32 <= (63 & _) >>> 0 ? v >>> p | 0 : ((1 << p) - 1 & v) << 32 - p | C >>> p)) << 2) | 0, (m = s[0 | p]) >>> 0 >= 9 && (g = g + 8 | 0, u[e + 44 >> 2] = g, D = (c[p + 2 >> 1] << 2) + p | 0, p = 31 & (h = 63 & g), m = s[0 | (p = D + (((-1 << m + -8 ^ -1) & (32 <= (63 & h) >>> 0 ? v >>> p | 0 : ((1 << p) - 1 & v) << 32 - p | C >>> p)) << 2) | 0)]), v = (255 & m) + g | 0, u[k + 44 >> 2] = v, g = c[p + 2 >> 1], (0 | v) >= 32 && ye(f), g >>> 0 >= 4 && (g = ve(f, v = g + -2 >> 1) + ((1 & g | 2) << v) | 0), (g + 1 | 0) >= 121 ? v = g + -119 | 0 : (v = s[g + 1264 | 0], v = (0 | (v = 8 + (A(v >>> 4 | 0, n) - (15 & v) | 0) | 0)) > 1 ? v : 1), u[e + 48 >> 2] | (u[e + 44 >> 2] > 64 ? u[e + 40 >> 2] == u[e + 36 >> 2] : 0)) break n;
                                                                                        if (t - r >> 2 < (0 | v)) break r;
                                                                                        if (d - t >> 2 < (0 | (k = b + 1 | 0))) break r;
                                                                                        if (p = t - (v << 2) | 0, !(3 & t | (0 | k) < 4 | (0 | v) > 2)) {
                                                                                            for (1 != (0 | v) ? (v = u[p + 4 >> 2], g = C = u[p >> 2]) : C = v = m = g = u[p >> 2], 4 & t ? (u[t >> 2] = g, C = wr(C, v), v = P, p = p + 4 | 0, m = t + 4 | 0) : (b = k, m = t), h = (g = b >>> 1 | 0) >>> 0 > 1 ? g : 1, g = 0; u[(_ = m + (g << 3) | 0) >> 2] = C, u[_ + 4 >> 2] = v, (0 | h) != (0 | (g = g + 1 | 0)););
                                                                                            if (!(1 & b)) break a;
                                                                                            u[(v = h << 3) + m >> 2] = u[v + p >> 2];
                                                                                            break a
                                                                                        }
                                                                                        if ((0 | v) >= (0 | k)) break f;
                                                                                        if (g = 0, (0 | k) <= 0) break a;
                                                                                        for (; u[(v = g << 2) + t >> 2] = u[v + p >> 2], v = (0 | g) != (0 | b), g = g + 1 | 0, v;);
                                                                                        break a
                                                                                    }
                                                                                    if ((0 | g) >= (0 | R)) break r;
                                                                                    if (m = g + -280 | 0, v = u[L >> 2], y >>> 0 < t >>> 0)
                                                                                        for (; b = u[y >> 2], u[v + (A(b, 506832829) >>> u[L + 4 >> 2] << 2) >> 2] = b, (y = y + 4 | 0) >>> 0 < t >>> 0;);g = u[v + (m << 2) >> 2];
                                                                                    break i
                                                                                }
                                                                                re(t, p, k << 2)
                                                                            }
                                                                            if ((0 | (E = k + E | 0)) >= (0 | n))
                                                                                for (; E = E - n | 0, 15 & (w = (v = w) + 1 | 0) | !a | (0 | v) >= (0 | o) || i[0 | a](e, w), (0 | E) >= (0 | n););
                                                                            if (b = k << 2, E & B && (v = u[e + 168 >> 2], k = 0, (m = u[e + 152 >> 2]) && (k = u[u[e + 160 >> 2] + (A(u[e + 156 >> 2], w >> m) + (E >> m) << 2) >> 2]), I = v + A(k, 548) | 0), (0 | M) < 1 | y >>> 0 >= (t = t + b | 0) >>> 0) break t;
                                                                            for (v = u[L >> 2]; m = u[y >> 2], u[v + (A(m, 506832829) >>> u[L + 4 >> 2] << 2) >> 2] = m, (y = y + 4 | 0) >>> 0 < t >>> 0;);
                                                                            break t
                                                                        }
                                                                        if (u[I + 20 >> 2]) {
                                                                            g = u[I + 24 >> 2] | g << 8;
                                                                            break i
                                                                        }
                                                                        if (k = e, b = 31 & (_ = 63 & (p = u[e + 44 >> 2])), h = u[I + 4 >> 2] + ((255 & (32 <= (63 & _) >>> 0 ? v >>> b | 0 : ((1 << b) - 1 & v) << 32 - b | C >>> b)) << 2) | 0, (m = s[0 | h]) >>> 0 >= 9 && (p = p + 8 | 0, u[e + 44 >> 2] = p, b = (c[h + 2 >> 1] << 2) + h | 0, h = 31 & (S = 63 & p), m = s[0 | (h = b + (((-1 << m + -8 ^ -1) & (32 <= (63 & S) >>> 0 ? v >>> h | 0 : ((1 << h) - 1 & v) << 32 - h | C >>> h)) << 2) | 0)]), p = (255 & m) + p | 0, u[k + 44 >> 2] = p, _ = c[h + 2 >> 1], (0 | p) >= 32 && (ye(f), C = u[e + 24 >> 2], p = u[e + 44 >> 2], v = u[e + 28 >> 2]), b = 31 & (S = 63 & p), h = u[I + 8 >> 2] + ((255 & (32 <= (63 & S) >>> 0 ? v >>> b | 0 : ((1 << b) - 1 & v) << 32 - b | C >>> b)) << 2) | 0, (m = s[0 | h]) >>> 0 >= 9 && (p = p + 8 | 0, u[e + 44 >> 2] = p, b = (c[h + 2 >> 1] << 2) + h | 0, h = 31 & (D = 63 & p), m = s[0 | (h = b + (((-1 << m + -8 ^ -1) & (32 <= D >>> 0 ? v >>> h | 0 : ((1 << h) - 1 & v) << 32 - h | C >>> h)) << 2) | 0)]), p = (255 & m) + p | 0, u[k + 44 >> 2] = p, S = c[h + 2 >> 1], b = e, k = 31 & (D = 63 & p), h = u[I + 12 >> 2] + ((255 & (32 <= D >>> 0 ? v >>> k | 0 : ((1 << k) - 1 & v) << 32 - k | C >>> k)) << 2) | 0, (m = s[0 | h]) >>> 0 >= 9 && (p = p + 8 | 0, u[e + 44 >> 2] = p, D = (c[h + 2 >> 1] << 2) + h | 0, k = 31 & (h = 63 & p), m = s[0 | (h = D + (((-1 << m + -8 ^ -1) & (32 <= (63 & h) >>> 0 ? v >>> k | 0 : ((1 << k) - 1 & v) << 32 - k | C >>> k)) << 2) | 0)]), v = (255 & m) + p | 0, u[b + 44 >> 2] = v, u[e + 48 >> 2]) break n;
                                                                        if (m = c[h + 2 >> 1], u[e + 40 >> 2] == u[e + 36 >> 2] && (0 | v) >= 65) break n;
                                                                        g = S | _ << 16 | g << 8 | m << 24
                                                                    }u[t >> 2] = g
                                                            }
                                                            if (v = t + 4 | 0, (0 | (E = E + 1 | 0)) < (0 | n)) t = v;
                                                            else {
                                                                if (15 & (m = w + 1 | 0) | !a | (0 | w) >= (0 | o) || i[0 | a](e, m), E = 0, !((0 | M) < 1 | y >>> 0 >= v >>> 0)) {
                                                                    for (b = u[L >> 2]; w = u[y >> 2], u[b + (A(w, 506832829) >>> u[L + 4 >> 2] << 2) >> 2] = w, k = y >>> 0 < t >>> 0, y = w = y + 4 | 0, k;);
                                                                    y = w
                                                                }
                                                                t = v, w = m
                                                            }
                                                        }
                                                        if (!(t >>> 0 < T >>> 0)) break
                                                    }
                                                if (v = e, n = 1, u[e + 48 >> 2] || (n = 0, u[e + 40 >> 2] == u[e + 36 >> 2] && (n = u[e + 44 >> 2] > 64)), u[v + 48 >> 2] = n, !(!u[e + 56 >> 2] | !n | t >>> 0 >= d >>> 0)) {
                                                    if (u[e >> 2] = 5, r = u[e + 68 >> 2], u[f >> 2] = u[e + 64 >> 2], u[f + 4 >> 2] = r, r = u[e + 92 >> 2], u[f + 24 >> 2] = u[e + 88 >> 2], u[f + 28 >> 2] = r, r = u[e + 84 >> 2], u[f + 16 >> 2] = u[e + 80 >> 2], u[f + 20 >> 2] = r, r = u[e + 76 >> 2], u[f + 8 >> 2] = u[e + 72 >> 2], u[f + 12 >> 2] = r, u[e + 112 >> 2] = u[e + 96 >> 2], r = 1, u[e + 120 >> 2] < 1) break e;
                                                    return ur(e + 136 | 0, l), 1
                                                }
                                                if (!n) return a && i[0 | a](e, (0 | w) > (0 | o) ? o : w), u[e >> 2] = 0, u[e + 112 >> 2] = t - r >> 2, 1
                                            }
                                            u[e >> 2] = 3,
                                            r = 0
                                        }
                                        return r
                                    }

                                    function T(e, r) {
                                        var n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            c = 0,
                                            d = 0,
                                            p = 0,
                                            m = 0;
                                        f = u[e + 4 >> 2], i = s[r + 3 | 0], (0 | (n = u[e + 8 >> 2])) > -1 || ((o = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (a = s[0 | o] | s[o + 1 | 0] << 8 | s[o + 2 | 0] << 16 | s[o + 3 | 0] << 24, u[e + 12 >> 2] = o + 3, n = n + 24 | 0, u[e + 8 >> 2] = n, u[e >> 2] = u[e >> 2] << 24 | (a >>> 8 & 65280 | a << 8 & 16711680 | a << 24) >>> 8) : (Me(e), n = u[e + 8 >> 2])), a = e, d = n, (c = (t = u[e >> 2]) >>> n | 0) >>> 0 > (i = A(i, f) >>> 8 | 0) >>> 0 ? (t = ((-1 ^ i) << n) + t | 0, u[e >> 2] = t, f = f - i | 0) : f = i + 1 | 0, n = d - (o = 24 ^ v(f)) | 0, u[a + 8 >> 2] = n, f = (f << o) - 1 | 0, u[e + 4 >> 2] = f;
                                        e: {
                                            if (c >>> 0 <= i >>> 0) {
                                                if (i = s[r + 4 | 0], (0 | n) > -1 || ((o = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (a = s[0 | o] | s[o + 1 | 0] << 8 | s[o + 2 | 0] << 16 | s[o + 3 | 0] << 24, n = n + 24 | 0, u[e + 8 >> 2] = n, u[e + 12 >> 2] = o + 3, t = t << 24 | (a >>> 8 & 65280 | a << 8 & 16711680 | a << 24) >>> 8, u[e >> 2] = t) : (Me(e), t = u[e >> 2], n = u[e + 8 >> 2])), a = e, d = n, (c = t >>> n >>> 0 <= (i = A(i, f) >>> 8 | 0) >>> 0) ? i = i + 1 | 0 : (t = ((-1 ^ i) << n) + t | 0, u[e >> 2] = t, i = f - i | 0), n = d - (o = 24 ^ v(i)) | 0, u[a + 8 >> 2] = n, f = (i << o) - 1 | 0, u[e + 4 >> 2] = f, i = 2, c) break e;
                                                return a = s[r + 5 | 0], (0 | n) > -1 || ((r = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (o = s[0 | r] | s[r + 1 | 0] << 8 | s[r + 2 | 0] << 16 | s[r + 3 | 0] << 24, n = n + 24 | 0, u[e + 8 >> 2] = n, u[e + 12 >> 2] = r + 3, t = t << 24 | (o >>> 8 & 65280 | o << 8 & 16711680 | o << 24) >>> 8, u[e >> 2] = t) : (Me(e), t = u[e >> 2], n = u[e + 8 >> 2])), d = e, o = n, t >>> n >>> 0 > (i = A(a, f) >>> 8 | 0) >>> 0 ? (u[e >> 2] = ((-1 ^ i) << n) + t, a = 4, n = f - i | 0) : (a = 3, n = i + 1 | 0), r = 24 ^ v(n), u[d + 8 >> 2] = o - r, u[e + 4 >> 2] = (n << r) - 1, a
                                            }
                                            if (i = s[r + 6 | 0], (0 | n) > -1 || ((o = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (a = s[0 | o] | s[o + 1 | 0] << 8 | s[o + 2 | 0] << 16 | s[o + 3 | 0] << 24, n = n + 24 | 0, u[e + 8 >> 2] = n, u[e + 12 >> 2] = o + 3, t = t << 24 | (a >>> 8 & 65280 | a << 8 & 16711680 | a << 24) >>> 8, u[e >> 2] = t) : (Me(e), t = u[e >> 2], n = u[e + 8 >> 2])), a = e, d = n, (c = t >>> n | 0) >>> 0 > (i = A(i, f) >>> 8 | 0) >>> 0 ? (t = ((-1 ^ i) << n) + t | 0, u[e >> 2] = t, f = f - i | 0) : f = i + 1 | 0, n = d - (o = 24 ^ v(f)) | 0, u[a + 8 >> 2] = n, f = (f << o) - 1 | 0, u[e + 4 >> 2] = f, c >>> 0 <= i >>> 0) return a = s[r + 7 | 0], (0 | n) > -1 || ((r = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (o = s[0 | r] | s[r + 1 | 0] << 8 | s[r + 2 | 0] << 16 | s[r + 3 | 0] << 24, n = n + 24 | 0, u[e + 8 >> 2] = n, u[e + 12 >> 2] = r + 3, t = t << 24 | (o >>> 8 & 65280 | o << 8 & 16711680 | o << 24) >>> 8, u[e >> 2] = t) : (Me(e), t = u[e >> 2], n = u[e + 8 >> 2])), d = e, o = n, (c = t >>> n | 0) >>> 0 > (a = A(a, f) >>> 8 | 0) >>> 0 ? (t = ((-1 ^ a) << n) + t | 0, u[e >> 2] = t, i = f - a | 0) : i = a + 1 | 0, n = o - (r = 24 ^ v(i)) | 0, u[d + 8 >> 2] = n, f = (i << r) - 1 | 0, u[e + 4 >> 2] = f, c >>> 0 <= a >>> 0 ? ((0 | n) > -1 || ((r = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (o = s[0 | r] | s[r + 1 | 0] << 8 | s[r + 2 | 0] << 16 | s[r + 3 | 0] << 24, n = n + 24 | 0, u[e + 8 >> 2] = n, u[e + 12 >> 2] = r + 3, t = t << 24 | (o >>> 8 & 65280 | o << 8 & 16711680 | o << 24) >>> 8, u[e >> 2] = t) : (Me(e), t = u[e >> 2], n = u[e + 8 >> 2])), t >>> n >>> 0 > (r = A(f, 159) >>> 8 | 0) >>> 0 ? (u[e >> 2] = ((-1 ^ r) << n) + t, t = f - r | 0, r = 6) : (t = r + 1 | 0, r = 5), i = n, n = 24 ^ v(t), u[e + 8 >> 2] = i - n, u[e + 4 >> 2] = (t << n) - 1, r) : ((0 | n) > -1 || ((r = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (o = s[0 | r] | s[r + 1 | 0] << 8 | s[r + 2 | 0] << 16 | s[r + 3 | 0] << 24, n = n + 24 | 0, u[e + 8 >> 2] = n, u[e + 12 >> 2] = r + 3, t = t << 24 | (o >>> 8 & 65280 | o << 8 & 16711680 | o << 24) >>> 8, u[e >> 2] = t) : (Me(e), t = u[e >> 2], n = u[e + 8 >> 2])), d = e, o = n, t >>> n >>> 0 > (a = A(f, 165) >>> 8 | 0) >>> 0 ? (t = ((-1 ^ a) << n) + t | 0, u[e >> 2] = t, i = 9, a = f - a | 0) : (i = 7, a = a + 1 | 0), n = o - (r = 24 ^ v(a)) | 0, u[d + 8 >> 2] = n, f = (a << r) - 1 | 0, u[e + 4 >> 2] = f, (0 | n) > -1 || ((r = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (o = s[0 | r] | s[r + 1 | 0] << 8 | s[r + 2 | 0] << 16 | s[r + 3 | 0] << 24, n = n + 24 | 0, u[e + 8 >> 2] = n, u[e + 12 >> 2] = r + 3, t = t << 24 | (o >>> 8 & 65280 | o << 8 & 16711680 | o << 24) >>> 8, u[e >> 2] = t) : (Me(e), t = u[e >> 2], n = u[e + 8 >> 2])), d = e, o = n, (c = t >>> n | 0) >>> 0 > (a = A(f, 145) >>> 8 | 0) >>> 0 ? (u[e >> 2] = ((-1 ^ a) << n) + t, n = f - a | 0) : n = a + 1 | 0, r = 24 ^ v(n), u[d + 8 >> 2] = o - r, u[e + 4 >> 2] = (n << r) - 1, (c >>> 0 > a >>> 0) + i | 0);
                                            if (i = s[r + 8 | 0], (0 | n) > -1 || ((o = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (a = s[0 | o] | s[o + 1 | 0] << 8 | s[o + 2 | 0] << 16 | s[o + 3 | 0] << 24, n = n + 24 | 0, u[e + 8 >> 2] = n, u[e + 12 >> 2] = o + 3, t = t << 24 | (a >>> 8 & 65280 | a << 8 & 16711680 | a << 24) >>> 8, u[e >> 2] = t) : (Me(e), t = u[e >> 2], n = u[e + 8 >> 2])), a = e, d = n, (p = t >>> n | 0) >>> 0 > (c = A(i, f) >>> 8 | 0) >>> 0 ? (t = ((-1 ^ c) << n) + t | 0, u[e >> 2] = t, m = 10, i = f - c | 0) : (m = 9, i = c + 1 | 0), n = d - (o = 24 ^ v(i)) | 0, u[a + 8 >> 2] = n, i = (i << o) - 1 | 0, u[e + 4 >> 2] = i, a = s[r + m | 0], (0 | n) > -1 || ((r = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (o = s[0 | r] | s[r + 1 | 0] << 8 | s[r + 2 | 0] << 16 | s[r + 3 | 0] << 24, n = n + 24 | 0, u[e + 8 >> 2] = n, u[e + 12 >> 2] = r + 3, t = t << 24 | (o >>> 8 & 65280 | o << 8 & 16711680 | o << 24) >>> 8, u[e >> 2] = t) : (Me(e), t = u[e >> 2], n = u[e + 8 >> 2])), d = e, o = n, (f = t >>> n | 0) >>> 0 > (a = A(a, i) >>> 8 | 0) >>> 0 ? (t = ((-1 ^ a) << n) + t | 0, u[e >> 2] = t, i = i - a | 0) : i = a + 1 | 0, n = o - (r = 24 ^ v(i)) | 0, u[d + 8 >> 2] = n, i = (i << r) - 1 | 0, u[e + 4 >> 2] = i, a = u[10160 + ((m = (p >>> 0 > c >>> 0) << 1 | f >>> 0 > a >>> 0) << 2) >> 2], r = s[0 | a])
                                                for (f = 0; c = 255 & r, (0 | n) > -1 || ((r = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (o = s[0 | r] | s[r + 1 | 0] << 8 | s[r + 2 | 0] << 16 | s[r + 3 | 0] << 24, n = n + 24 | 0, u[e + 8 >> 2] = n, u[e + 12 >> 2] = r + 3, t = t << 24 | (o >>> 8 & 65280 | o << 8 & 16711680 | o << 24) >>> 8, u[e >> 2] = t) : (Me(e), t = u[e >> 2], n = u[e + 8 >> 2])), d = e, o = n, (p = t >>> n | 0) >>> 0 > (c = A(i, c) >>> 8 | 0) >>> 0 ? (t = ((-1 ^ c) << n) + t | 0, u[e >> 2] = t, i = i - c | 0) : i = c + 1 | 0, n = o - (r = 24 ^ v(i)) | 0, u[d + 8 >> 2] = n, i = (i << r) - 1 | 0, u[e + 4 >> 2] = i, f = f << 1 | p >>> 0 > c >>> 0, r = s[a + 1 | 0], a = a + 1 | 0, r;);
                                            else f = 0;i = (8 << m | 3) + f | 0
                                        }
                                        return i
                                    }

                                    function O(e, r, n, t, o) {
                                        var c, l, v, p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0;
                                        L = c = L - 80 | 0, u[c + 76 >> 2] = r, v = c + 55 | 0, l = c + 56 | 0, r = 0;
                                        e: {
                                            r: for (;;) {
                                                (0 | y) < 0 || ((0 | r) > (2147483647 - y | 0) ? (u[2865] = 61, y = -1) : y = r + y | 0);
                                                n: {
                                                    t: {
                                                        o: {
                                                            if (g = u[c + 76 >> 2], p = s[0 | (r = g)])
                                                                for (;;) {
                                                                    i: {
                                                                        a: if (p &= 255) {
                                                                            if (37 != (0 | p)) break i;
                                                                            for (p = r;;) {
                                                                                if (37 != s[r + 1 | 0]) break a;
                                                                                if (m = r + 2 | 0, u[c + 76 >> 2] = m, p = p + 1 | 0, h = s[r + 2 | 0], r = m, 37 != (0 | h)) break
                                                                            }
                                                                        } else p = r;
                                                                        if (r = p - g | 0, e && dr(e, g, r), r) continue r;p = c,
                                                                        m = !mr(a[u[c + 76 >> 2] + 1 | 0]),
                                                                        r = u[c + 76 >> 2],
                                                                        m | 36 != s[r + 2 | 0] ? (E = -1, r = r + 1 | 0) : (E = a[r + 1 | 0] + -48 | 0, I = 1, r = r + 3 | 0),
                                                                        u[p + 76 >> 2] = r,
                                                                        b = 0;a: if ((m = (C = a[0 | r]) + -32 | 0) >>> 0 > 31) p = r;
                                                                            elseif (p = r, 75913 & (m = 1 << m))
                                                                            for (;;) {
                                                                                if (p = r + 1 | 0, u[c + 76 >> 2] = p, b |= m, (m = (C = a[r + 1 | 0]) + -32 | 0) >>> 0 >= 32) break a;
                                                                                if (r = p, !(75913 & (m = 1 << m))) break
                                                                            }
                                                                        a: if (42 != (0 | C)) {
                                                                            if ((0 | (k = je(c + 76 | 0))) < 0) break o;
                                                                            r = u[c + 76 >> 2]
                                                                        } else {
                                                                            if (m = c, mr(a[p + 1 | 0]) && (r = u[c + 76 >> 2], 36 == s[r + 2 | 0])) u[((a[r + 1 | 0] << 2) + o | 0) - 192 >> 2] = 10, k = u[((a[r + 1 | 0] << 3) + t | 0) - 384 >> 2], I = 1, r = r + 3 | 0;
                                                                            else {
                                                                                if (I) break o;
                                                                                I = 0, k = 0, e && (r = u[n >> 2], u[n >> 2] = r + 4, k = u[r >> 2]), r = u[c + 76 >> 2] + 1 | 0
                                                                            }
                                                                            if (u[m + 76 >> 2] = r, (0 | k) > -1) break a;
                                                                            k = 0 - k | 0, b |= 8192
                                                                        }h = -1;a: if (46 == s[0 | r])
                                                                            if (42 != s[r + 1 | 0]) u[c + 76 >> 2] = r + 1, h = je(c + 76 | 0), r = u[c + 76 >> 2];
                                                                            else {
                                                                                if (mr(a[r + 2 | 0]) && (r = u[c + 76 >> 2], 36 == s[r + 3 | 0])) {
                                                                                    u[((a[r + 2 | 0] << 2) + o | 0) - 192 >> 2] = 10, h = u[((a[r + 2 | 0] << 3) + t | 0) - 384 >> 2], r = r + 4 | 0, u[c + 76 >> 2] = r;
                                                                                    break a
                                                                                }
                                                                                if (I) break o;
                                                                                e ? (r = u[n >> 2], u[n >> 2] = r + 4, h = u[r >> 2]) : h = 0, r = u[c + 76 >> 2] + 2 | 0, u[c + 76 >> 2] = r
                                                                            }for (p = 0;;) {
                                                                            if (_ = p, w = -1, a[0 | r] + -65 >>> 0 > 57) break e;
                                                                            if (C = r + 1 | 0, u[c + 76 >> 2] = C, p = a[0 | r], r = C, !((p = s[9599 + (p + A(_, 58) | 0) | 0]) + -1 >>> 0 < 8)) break
                                                                        }
                                                                        a: {
                                                                            f: {
                                                                                if (19 != (0 | p)) {
                                                                                    if (!p) break e;
                                                                                    if ((0 | E) >= 0) {
                                                                                        u[(E << 2) + o >> 2] = p, p = u[4 + (r = (E << 3) + t | 0) >> 2], u[c + 64 >> 2] = u[r >> 2], u[c + 68 >> 2] = p;
                                                                                        break f
                                                                                    }
                                                                                    if (!e) break n;
                                                                                    Ae(c - -64 | 0, p, n), C = u[c + 76 >> 2];
                                                                                    break a
                                                                                }
                                                                                if ((0 | E) > -1) break e
                                                                            }
                                                                            if (r = 0, !e) continue r
                                                                        }
                                                                        m = -65537 & b,
                                                                        p = 8192 & b ? m : b,
                                                                        w = 0,
                                                                        E = 9644,
                                                                        b = l;a: {
                                                                            f: {
                                                                                u: {
                                                                                    s: {
                                                                                        c: {
                                                                                            l: {
                                                                                                d: {
                                                                                                    A: {
                                                                                                        v: {
                                                                                                            p: {
                                                                                                                m: {
                                                                                                                    g: {
                                                                                                                        h: {
                                                                                                                            b: {
                                                                                                                                k: {
                                                                                                                                    switch (r = a[C + -1 | 0], (r = _ && 3 == (15 & r) ? -33 & r : r) + -88 | 0) {
                                                                                                                                        case 11:
                                                                                                                                            break a;
                                                                                                                                        case 9:
                                                                                                                                        case 13:
                                                                                                                                        case 14:
                                                                                                                                        case 15:
                                                                                                                                            break f;
                                                                                                                                        case 27:
                                                                                                                                            break d;
                                                                                                                                        case 12:
                                                                                                                                        case 17:
                                                                                                                                            break p;
                                                                                                                                        case 23:
                                                                                                                                            break m;
                                                                                                                                        case 0:
                                                                                                                                        case 32:
                                                                                                                                            break g;
                                                                                                                                        case 24:
                                                                                                                                            break h;
                                                                                                                                        case 22:
                                                                                                                                            break b;
                                                                                                                                        case 29:
                                                                                                                                            break k;
                                                                                                                                        case 1:
                                                                                                                                        case 2:
                                                                                                                                        case 3:
                                                                                                                                        case 4:
                                                                                                                                        case 5:
                                                                                                                                        case 6:
                                                                                                                                        case 7:
                                                                                                                                        case 8:
                                                                                                                                        case 10:
                                                                                                                                        case 16:
                                                                                                                                        case 18:
                                                                                                                                        case 19:
                                                                                                                                        case 20:
                                                                                                                                        case 21:
                                                                                                                                        case 25:
                                                                                                                                        case 26:
                                                                                                                                        case 28:
                                                                                                                                        case 30:
                                                                                                                                        case 31:
                                                                                                                                            break t
                                                                                                                                    }
                                                                                                                                    switch (r + -65 | 0) {
                                                                                                                                        case 0:
                                                                                                                                        case 4:
                                                                                                                                        case 5:
                                                                                                                                        case 6:
                                                                                                                                            break f;
                                                                                                                                        case 2:
                                                                                                                                            break c;
                                                                                                                                        case 1:
                                                                                                                                        case 3:
                                                                                                                                            break t
                                                                                                                                    }
                                                                                                                                    if (83 == (0 | r)) break l;
                                                                                                                                    break t
                                                                                                                                }
                                                                                                                                r = u[c + 64 >> 2],
                                                                                                                                g = u[c + 68 >> 2],
                                                                                                                                E = 9644;
                                                                                                                                break v
                                                                                                                            }
                                                                                                                            r = 0;b: switch (255 & _) {
                                                                                                                                case 0:
                                                                                                                                case 1:
                                                                                                                                    u[u[c + 64 >> 2] >> 2] = y;
                                                                                                                                    continue r;
                                                                                                                                case 2:
                                                                                                                                    p = u[c + 64 >> 2], u[p >> 2] = y, u[p + 4 >> 2] = y >> 31;
                                                                                                                                    continue r;
                                                                                                                                case 3:
                                                                                                                                    f[u[c + 64 >> 2] >> 1] = y;
                                                                                                                                    continue r;
                                                                                                                                case 4:
                                                                                                                                    a[u[c + 64 >> 2]] = y;
                                                                                                                                    continue r;
                                                                                                                                case 6:
                                                                                                                                    u[u[c + 64 >> 2] >> 2] = y;
                                                                                                                                    continue r;
                                                                                                                                case 7:
                                                                                                                                    break b;
                                                                                                                                default:
                                                                                                                                    continue r
                                                                                                                            }
                                                                                                                            p = u[c + 64 >> 2],
                                                                                                                            u[p >> 2] = y,
                                                                                                                            u[p + 4 >> 2] = y >> 31;
                                                                                                                            continue r
                                                                                                                        }
                                                                                                                        h = h >>> 0 > 8 ? h : 8,
                                                                                                                        p |= 8,
                                                                                                                        r = 120
                                                                                                                    }
                                                                                                                    if (g = Ye(u[c + 64 >> 2], u[c + 68 >> 2], l, 32 & r), !(8 & p) | !(u[c + 64 >> 2] | u[c + 68 >> 2])) break A;E = 9644 + (r >>> 4 | 0) | 0,
                                                                                                                    w = 2;
                                                                                                                    break A
                                                                                                                }
                                                                                                                if (g = He(u[c + 64 >> 2], u[c + 68 >> 2], l), !(8 & p)) break A;h = (0 | h) > (0 | (r = l - g | 0)) ? h : r + 1 | 0;
                                                                                                                break A
                                                                                                            }
                                                                                                            g = m = u[c + 68 >> 2],
                                                                                                            r = u[c + 64 >> 2],
                                                                                                            (0 | m) < -1 || (0 | m) <= -1 ? (g = 0 - (g + (0 < r >>> 0) | 0) | 0, r = 0 - r | 0, u[c + 64 >> 2] = r, u[c + 68 >> 2] = g, w = 1, E = 9644) : 2048 & p ? (w = 1, E = 9645) : E = (w = 1 & p) ? 9646 : 9644
                                                                                                        }
                                                                                                        g = Le(r, g, l)
                                                                                                    }
                                                                                                    if (p = (0 | h) > -1 ? -65537 & p : p, !(!!((r = u[c + 64 >> 2]) | (m = u[c + 68 >> 2])) | h)) {
                                                                                                        h = 0, g = l;
                                                                                                        break t
                                                                                                    }
                                                                                                    h = (0 | h) > (0 | (r = !(r | m) + (l - g | 0) | 0)) ? h : r;
                                                                                                    break t
                                                                                                }
                                                                                                b = (r = Ce(g = (r = u[c + 64 >> 2]) || 9654, h)) || h + g | 0,
                                                                                                p = m,
                                                                                                h = r ? r - g | 0 : h;
                                                                                                break t
                                                                                            }
                                                                                            if (m = u[c + 64 >> 2], h) break s;r = 0,
                                                                                            Fe(e, 32, k, 0, p);
                                                                                            break u
                                                                                        }
                                                                                        u[c + 12 >> 2] = 0,
                                                                                        u[c + 8 >> 2] = u[c + 64 >> 2],
                                                                                        u[c + 64 >> 2] = c + 8,
                                                                                        h = -1,
                                                                                        m = c + 8 | 0
                                                                                    }
                                                                                    r = 0;s: {
                                                                                        for (;;) {
                                                                                            if (!(g = u[m >> 2])) break s;
                                                                                            if (!((b = (0 | (g = lr(c + 4 | 0, g))) < 0) | g >>> 0 > h - r >>> 0)) {
                                                                                                if (m = m + 4 | 0, h >>> 0 > (r = r + g | 0) >>> 0) continue;
                                                                                                break s
                                                                                            }
                                                                                            break
                                                                                        }
                                                                                        if (w = -1, b) break e
                                                                                    }
                                                                                    if (Fe(e, 32, k, r, p), r)
                                                                                        for (C = 0, m = u[c + 64 >> 2];;) {
                                                                                            if (!(g = u[m >> 2])) break u;
                                                                                            if ((0 | (C = (g = lr(c + 4 | 0, g)) + C | 0)) > (0 | r)) break u;
                                                                                            if (dr(e, c + 4 | 0, g), m = m + 4 | 0, !(C >>> 0 < r >>> 0)) break
                                                                                        } else r = 0
                                                                                }
                                                                                Fe(e, 32, k, r, 8192 ^ p),
                                                                                r = (0 | k) > (0 | r) ? k : r;
                                                                                continue r
                                                                            }
                                                                            r = 0 | i[0](e, d[c + 64 >> 3], k, h, p, r);
                                                                            continue r
                                                                        }
                                                                        a[c + 55 | 0] = u[c + 64 >> 2],
                                                                        h = 1,
                                                                        g = v,
                                                                        p = m;
                                                                        break t
                                                                    }
                                                                    m = r + 1 | 0,
                                                                    u[c + 76 >> 2] = m,
                                                                    p = s[r + 1 | 0],
                                                                    r = m
                                                                }
                                                            if (w = y, e) break e;
                                                            if (!I) break n;
                                                            for (r = 1;;) {
                                                                if (e = u[(r << 2) + o >> 2]) {
                                                                    if (Ae((r << 3) + t | 0, e, n), w = 1, 10 != (0 | (r = r + 1 | 0))) continue;
                                                                    break e
                                                                }
                                                                break
                                                            }
                                                            if (w = 1, r >>> 0 >= 10) break e;
                                                            for (;;) {
                                                                if (u[(r << 2) + o >> 2]) break o;
                                                                if (10 == (0 | (r = r + 1 | 0))) break
                                                            }
                                                            break e
                                                        }
                                                        w = -1;
                                                        break e
                                                    }
                                                    Fe(e, 32, r = (0 | k) < (0 | (m = (h = (0 | h) < (0 | (b = b - g | 0)) ? b : h) + w | 0)) ? m : k, m, p),
                                                    dr(e, E, w),
                                                    Fe(e, 48, r, m, 65536 ^ p),
                                                    Fe(e, 48, h, b, 0),
                                                    dr(e, g, b),
                                                    Fe(e, 32, r, m, 8192 ^ p);
                                                    continue
                                                }
                                                break
                                            }
                                            w = 0
                                        }
                                        return L = c + 80 | 0, w
                                    }

                                    function z(e, r, n, t, o) {
                                        var i, f, l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0,
                                            M = 0,
                                            B = 0,
                                            F = 0,
                                            T = 0,
                                            O = 0,
                                            U = 0,
                                            N = 0;
                                        L = f = L - 16 | 0, i = t + 120 | 0, h = t + 24 | 0;
                                        e: {
                                            r: {
                                                n: {
                                                    t: {
                                                        o: {
                                                            i: {
                                                                a: if (n) {
                                                                    for (;;) {
                                                                        if (!ve(h, 1)) break a;
                                                                        if (l = u[t + 176 >> 2], w = ve(h, 2), (m = u[t + 260 >> 2]) & (v = 1 << w)) break i;
                                                                        switch (u[t + 260 >> 2] = v | m, l = A(l, 20) + t | 0, u[(g = l + 196 | 0) >> 2] = 0, u[(m = l + 192 | 0) >> 2] = r, u[(v = l + 188 | 0) >> 2] = e, u[l + 180 >> 2] = w, b = 1, u[t + 176 >> 2] = u[t + 176 >> 2] + 1, 0 | w) {
                                                                            case 0:
                                                                            case 1:
                                                                                if (_ = l, l = ve(h, 3) + 2 | 0, u[_ + 184 >> 2] = l, z((_ = u[v >> 2]) + (v = -1 << l ^ -1) >>> l | 0, v + u[m >> 2] >>> l | 0, 0, t, g)) continue;
                                                                                break i;
                                                                            case 3:
                                                                                if (e = 0, (0 | (d = ve(h, 8) + 1 | 0)) > 16 || (e = 1, (0 | d) > 4 || (e = (0 | d) > 2 ? 2 : 3)), m = u[v >> 2], u[(v = l + 184 | 0) >> 2] = e, !z(d, 1, 0, t, g)) break i;
                                                                                if (w = (m + (1 << e) | 0) - 1 | 0, p = Xe(l = 1 << (8 >>> u[v >> 2]), 0, 4)) {
                                                                                    if (m = u[g >> 2], u[p >> 2] = u[m >> 2], b = 4, (0 | d) >= 2)
                                                                                        for (b = (0 | (v = d << 2)) > 5 ? v : 5, d = 4; a[0 | (v = d + p | 0)] = s[v + -4 | 0] + s[d + m | 0], (0 | b) != (0 | (d = d + 1 | 0)););
                                                                                    (0 | (v = l << 2)) > (0 | b) && de(p + b | 0, 0, v - b | 0), j(u[g >> 2]), u[g >> 2] = p
                                                                                }
                                                                                e = w >>> e | 0, b = 0 != (0 | p)
                                                                        }
                                                                        if (!b) break
                                                                    }
                                                                    break i
                                                                }if (ve(h, 1) && !((E = ve(h, 4)) + -1 >>> 0 < 11)) {
                                                                    u[t >> 2] = 3, d = 0;
                                                                    break t
                                                                }
                                                                u[f + 12 >> 2] = 0;a: {
                                                                    f: {
                                                                        if (n) {
                                                                            if (w = 1, v = 1, ve(h, 1)) {
                                                                                if (I = 1, !z(m = ((v = 1 << (l = ve(h, 3) + 2 | 0)) + e | 0) - 1 >>> l | 0, v = (r + v | 0) - 1 >>> l | 0, 0, t, f + 12 | 0)) break f;
                                                                                if (u[t + 152 >> 2] = l, (0 | (y = A(v, m))) >= 1)
                                                                                    for (d = 0, v = u[f + 12 >> 2]; l = s[1 + (m = v + (d << 2) | 0) | 0] | s[m + 2 | 0] << 8, u[m >> 2] = l, w = (0 | l) < (0 | w) ? w : l + 1 | 0, (0 | y) != (0 | (d = d + 1 | 0)););
                                                                                if ((0 | w) > 1e3 | (0 | w) > (0 | A(e, r))) {
                                                                                    if (!(S = Xe(w, 0, 4))) {
                                                                                        u[t >> 2] = 1, S = 0;
                                                                                        break f
                                                                                    }
                                                                                    if (h = de(S, 255, w << 2), (0 | y) < 1) v = 0;
                                                                                    else
                                                                                        for (d = 0, g = u[f + 12 >> 2], v = 0; m = h + (u[(p = g + (d << 2) | 0) >> 2] << 2) | 0, -1 == (0 | (l = u[m >> 2])) && (u[m >> 2] = v, v = (l = v) + 1 | 0), u[p >> 2] = l, (0 | y) != (0 | (d = d + 1 | 0)););
                                                                                } else v = w
                                                                            }
                                                                        } else w = 1,
                                                                        v = 1;
                                                                        if (!u[t + 48 >> 2]) {
                                                                            if (I = 1, N = 1 << E, b = Qe((0 | (U = (0 | E) > 0 ? N + 280 | 0 : 280)) > 256 ? U : 256, 0, 4), D = Xe(D = A(c[1184 + (E << 1) >> 1], v), D >> 31, 4), !(!(O = Xe(v, v >> 31, 548)) | !D | !b)) {
                                                                                for (m = D;;) {
                                                                                    d = M;
                                                                                    u: {
                                                                                        if (S && -1 == (0 | (d = u[(M << 2) + S >> 2]))) {
                                                                                            if (I = 1, !ee(U, t, b, 0)) break a;
                                                                                            if (!ee(256, t, b, 0)) break a;
                                                                                            if (!ee(256, t, b, 0)) break a;
                                                                                            if (!ee(256, t, b, 0)) break a;
                                                                                            if (ee(40, t, b, 0)) break u;
                                                                                            break a
                                                                                        }
                                                                                        for (k = A(d, 548) + O | 0, I = 1, C = 0, B = 0, x = 1, F = 0;;) {
                                                                                            if (u[(C << 2) + k >> 2] = m, !(l = ee(y = c[1208 + (C << 1) >> 1] + ((0 | E) > 0 ? C ? 0 : N : 0) | 0, t, b, m))) break a;
                                                                                            if (x ? 2147483643 & C && (x = !s[0 | m]) : x = 0, h = l << 2, g = s[0 | m], C >>> 0 <= 3) {
                                                                                                if (d = u[b >> 2], l = 1, (0 | y) >= 2)
                                                                                                    for (; d = (0 | (p = u[(l << 2) + b >> 2])) > (0 | d) ? p : d, (0 | y) != (0 | (l = l + 1 | 0)););
                                                                                                B = d + B | 0
                                                                                            }
                                                                                            if (m = m + h | 0, F = g + F | 0, 5 == (0 | (C = C + 1 | 0))) break
                                                                                        }
                                                                                        if (u[k + 28 >> 2] = 0, u[k + 20 >> 2] = x, !x || (d = c[u[k + 8 >> 2] + 2 >> 1] | c[u[k + 4 >> 2] + 2 >> 1] << 16 | c[u[k + 12 >> 2] + 2 >> 1] << 24, u[k + 24 >> 2] = d, F || (l = c[u[k >> 2] + 2 >> 1]) >>> 0 > 255)) {
                                                                                            if (u[k + 32 >> 2] = (0 | B) < 6, !((0 | B) > 5))
                                                                                                for (I = k + 12 | 0, x = k + 8 | 0, B = k + 4 | 0, F = u[k >> 2], d = 0; T = 36 + (g = (d << 3) + k | 0) | 0, (l = (p = c[(l = F + (d << 2) | 0) >> 1] | c[l + 2 >> 1] << 16) >>> 16 | 0) >>> 0 >= 256 ? (u[T >> 2] = 255 & p | 256, u[g + 40 >> 2] = l) : (p &= 255, u[T >> 2] = p, y = l << 8, u[(C = g + 40 | 0) >> 2] = y, h = d >>> p | 0, l = u[B >> 2] + (h << 2) | 0, g = s[l + 2 | 0] | s[l + 3 | 0] << 8, l = (_ = p) + (p = s[0 | l]) | 0, u[T >> 2] = l, y |= g << 16, u[C >> 2] = y, h = h >>> p | 0, g = u[x >> 2] + (h << 2) | 0, p = s[g + 2 | 0] | s[g + 3 | 0] << 8, g = (_ = l) + (l = s[0 | g]) | 0, u[T >> 2] = g, p |= y, u[C >> 2] = p, h = u[I >> 2] + (h >>> l << 2) | 0, l = s[h + 2 | 0] | s[h + 3 | 0] << 8, u[T >> 2] = g + s[0 | h], u[C >> 2] = p | l << 24), 64 != (0 | (d = d + 1 | 0)););
                                                                                        } else u[k + 28 >> 2] = 1,
                                                                                        u[k + 24 >> 2] = d | l << 8,
                                                                                        u[k + 32 >> 2] = 0
                                                                                    }
                                                                                    if ((0 | (M = M + 1 | 0)) == (0 | w)) break
                                                                                }
                                                                                M = u[f + 12 >> 2], u[t + 172 >> 2] = D, u[t + 168 >> 2] = O, u[t + 164 >> 2] = v, u[t + 160 >> 2] = M, I = 0;
                                                                                break a
                                                                            }
                                                                            u[t >> 2] = 1;
                                                                            break a
                                                                        }
                                                                        I = 1
                                                                    }
                                                                    b = 0
                                                                }
                                                                if (j(b), j(S), !I) break o;j(u[f + 12 >> 2]),
                                                                j(D),
                                                                kr(O)
                                                            }
                                                            u[t >> 2] = 3,
                                                            d = 0;
                                                            break t
                                                        }
                                                        o: {
                                                            if ((0 | E) >= 1) {
                                                                if (u[t + 120 >> 2] = 1 << E, Ze(t + 124 | 0, E)) break o;
                                                                u[t >> 2] = 1, d = 0;
                                                                break t
                                                            }
                                                            u[i >> 2] = 0
                                                        }
                                                        if (u[t + 104 >> 2] = r, u[t + 100 >> 2] = e, v = u[t + 152 >> 2], u[t + 148 >> 2] = v ? -1 << v ^ -1 : -1, u[t + 156 >> 2] = ((1 << v) + e | 0) - 1 >>> v, n) {
                                                            u[t + 4 >> 2] = 1, d = 0;
                                                            break n
                                                        }
                                                        if (d = Xe(vr(e, e >> 31, r, r >> 31), P, 4)) {
                                                            if (R(t, d, e, r, r, 0) && !u[t + 48 >> 2]) break n
                                                        } else u[t >> 2] = 1,
                                                        d = 0
                                                    }
                                                    j(d),
                                                    d = 0;
                                                    break r
                                                }
                                                if (o && (u[o >> 2] = d), u[t + 112 >> 2] = 0, d = 1, n) break e
                                            }
                                            j(u[t + 160 >> 2]),
                                            j(u[t + 172 >> 2]),
                                            kr(u[t + 168 >> 2]),
                                            pr(t + 124 | 0),
                                            pr(t + 136 | 0),
                                            u[i + 48 >> 2] = 0,
                                            u[i + 52 >> 2] = 0,
                                            u[i + 40 >> 2] = 0,
                                            u[i + 44 >> 2] = 0,
                                            u[i + 32 >> 2] = 0,
                                            u[i + 36 >> 2] = 0,
                                            u[i + 24 >> 2] = 0,
                                            u[i + 28 >> 2] = 0,
                                            u[i + 16 >> 2] = 0,
                                            u[i + 20 >> 2] = 0,
                                            u[i + 8 >> 2] = 0,
                                            u[i + 12 >> 2] = 0,
                                            u[i >> 2] = 0,
                                            u[i + 4 >> 2] = 0
                                        }
                                        return L = f + 16 | 0, d
                                    }

                                    function U(e, r) {
                                        var n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0;
                                        e: if (e)
                                            if (u[e >> 2] = 0, u[e + 8 >> 2] = 5010, r)
                                                if ((l = u[r + 60 >> 2]) >>> 0 <= 3) u[e >> 2] = 7, u[e + 4 >> 2] = 0, u[e + 8 >> 2] = 5050;
                                                else
                                        if (n = u[r + 64 >> 2], o = s[n + 1 | 0], i = s[n + 2 | 0], c = (t = s[0 | n]) >>> 4 & 1, a[e + 42 | 0] = c, d = t >>> 1 & 7, a[e + 41 | 0] = d, v = 1 & (-1 ^ t), a[e + 40 | 0] = v, t = (t | o << 8 | i << 16) >>> 5 | 0, u[e + 44 >> 2] = t, d >>> 0 >= 4) u[e >> 2] = 3, u[e + 4 >> 2] = 0, u[e + 8 >> 2] = 5068;
                                        else {
                                            if (c) {
                                                if (o = l + -3 | 0, i = n + 3 | 0, v) {
                                                    if (o >>> 0 <= 6) {
                                                        u[e >> 2] = 7, u[e + 4 >> 2] = 0, u[e + 8 >> 2] = 5122;
                                                        break e
                                                    }
                                                    if (42 != s[n + 5 | 0] || 157 != s[0 | i] | 1 != s[n + 4 | 0]) {
                                                        u[e >> 2] = 3, u[e + 4 >> 2] = 0, u[e + 8 >> 2] = 5150;
                                                        break e
                                                    }
                                                    t = s[n + 6 | 0] | s[n + 7 | 0] << 8 & 16128, f[e + 48 >> 1] = t, a[e + 52 | 0] = s[n + 7 | 0] >>> 6, o = s[n + 8 | 0] | s[n + 9 | 0] << 8 & 16128, f[e + 50 >> 1] = o, i = s[n + 9 | 0], u[e + 292 >> 2] = o + 15 >>> 4, u[e + 288 >> 2] = t + 15 >>> 4, a[e + 53 | 0] = i >>> 6, u[r + 84 >> 2] = 0, u[r + 4 >> 2] = o, u[r >> 2] = t, u[r + 100 >> 2] = o, u[r + 96 >> 2] = t, u[r + 92 >> 2] = 0, u[r + 88 >> 2] = o, u[r + 80 >> 2] = t, u[r + 72 >> 2] = 0, u[r + 76 >> 2] = 0, u[r + 16 >> 2] = o, u[r + 12 >> 2] = t, f[(r = e + 904 | 0) >> 1] = -1, a[r + 2 | 0] = -1, u[e + 120 >> 2] = 0, u[e + 112 >> 2] = 1, u[e + 116 >> 2] = 0, u[e + 104 >> 2] = 0, u[e + 108 >> 2] = 0, o = l + -10 | 0, i = n + 10 | 0, t = u[e + 44 >> 2]
                                                }
                                                r: {
                                                    if (t >>> 0 > o >>> 0) {
                                                        if (r = 0, u[e >> 2]) break r;
                                                        u[e >> 2] = 7, u[e + 4 >> 2] = 0, u[e + 8 >> 2] = 5164;
                                                        break e
                                                    }
                                                    _e(n = e + 12 | 0, i, t),
                                                    c = u[e + 44 >> 2],
                                                    s[e + 40 | 0] && (m = e, g = le(n, 1), a[m + 54 | 0] = g, m = e, g = le(n, 1), a[m + 55 | 0] = g),
                                                    r = le(n, 1),
                                                    u[e + 104 >> 2] = r;n: if (r) {
                                                        if (m = e, g = le(n, 1), u[m + 108 >> 2] = g, le(n, 1) && (m = e, g = le(n, 1), u[m + 112 >> 2] = g, r = e, t = le(n, 1) ? sr(n, 7) : 0, a[r + 116 | 0] = t, r = e, t = le(n, 1) ? sr(n, 7) : 0, a[r + 117 | 0] = t, r = e, t = le(n, 1) ? sr(n, 7) : 0, a[r + 118 | 0] = t, r = e, t = le(n, 1) ? sr(n, 7) : 0, a[r + 119 | 0] = t, r = e, t = le(n, 1) ? sr(n, 6) : 0, a[r + 120 | 0] = t, r = e, t = le(n, 1) ? sr(n, 6) : 0, a[r + 121 | 0] = t, r = e, t = le(n, 1) ? sr(n, 6) : 0, a[r + 122 | 0] = t, r = e, t = le(n, 1) ? sr(n, 6) : 0, a[r + 123 | 0] = t), !u[e + 108 >> 2]) break n;
                                                        r = e, t = le(n, 1) ? le(n, 8) : 255, a[r + 904 | 0] = t, r = e, t = le(n, 1) ? le(n, 8) : 255, a[r + 905 | 0] = t, r = e, t = 255, le(n, 1) && (t = le(n, 8)), a[r + 906 | 0] = t
                                                    } else u[e + 108 >> 2] = 0;
                                                    if (u[e + 36 >> 2]) {
                                                        if (r = 0, u[e >> 2]) break r;
                                                        u[e >> 2] = 3, u[e + 4 >> 2] = 0, u[e + 8 >> 2] = 5185;
                                                        break e
                                                    }
                                                    if (m = e, g = le(n, 1), u[m + 56 >> 2] = g, m = e, g = le(n, 6), u[m + 60 >> 2] = g, m = e - -64 | 0, g = le(n, 3), u[m >> 2] = g, r = le(n, 1), u[e + 68 >> 2] = r, r && le(n, 1) && (le(n, 1) && (m = e, g = sr(n, 6), u[m + 72 >> 2] = g), le(n, 1) && (m = e, g = sr(n, 6), u[m + 76 >> 2] = g), le(n, 1) && (m = e, g = sr(n, 6), u[m + 80 >> 2] = g), le(n, 1) && (m = e, g = sr(n, 6), u[m + 84 >> 2] = g), le(n, 1) && (m = e, g = sr(n, 6), u[m + 88 >> 2] = g), le(n, 1) && (m = e, g = sr(n, 6), u[m + 92 >> 2] = g), le(n, 1) && (m = e, g = sr(n, 6), u[m + 96 >> 2] = g), le(n, 1) && (m = e, g = sr(n, 6), u[m + 100 >> 2] = g)), r = e, t = u[e + 60 >> 2] ? u[e + 56 >> 2] ? 1 : 2 : 0, u[r + 2308 >> 2] = t, u[e + 36 >> 2]) {
                                                        if (r = 0, u[e >> 2]) break r;
                                                        u[e >> 2] = 3, u[e + 4 >> 2] = 0, u[e + 8 >> 2] = 5213;
                                                        break e
                                                    }
                                                    l = -1 << (v = le(n, 2)) ^ -1,
                                                    u[e + 312 >> 2] = l,
                                                    t = 7;n: {
                                                        if ((r = o - c | 0) >>> 0 >= (d = A(l, 3)) >>> 0) {
                                                            if (p = o + i | 0, t = r - d | 0, i = d + (r = i + c | 0) | 0, v)
                                                                for (d = l >>> 0 > 1 ? l : 1, o = 0; c = (c = s[0 | r] | s[r + 1 | 0] << 8 | s[r + 2 | 0] << 16) >>> 0 > t >>> 0 ? t : c, _e(316 + (A(o, 28) + e | 0) | 0, i, c), t = t - c | 0, i = i + c | 0, r = r + 3 | 0, (0 | d) != (0 | (o = o + 1 | 0)););
                                                            if (_e(316 + (A(l, 28) + e | 0) | 0, i, t), t = 5, i >>> 0 < p >>> 0) break n
                                                        }
                                                        if (r = 0, u[e >> 2]) break r;u[e >> 2] = t,
                                                        u[e + 4 >> 2] = 0,
                                                        u[e + 8 >> 2] = 5240;
                                                        break e
                                                    }
                                                    if (te(e), !s[e + 40 | 0]) {
                                                        if (r = 0, u[e >> 2]) break r;
                                                        u[e >> 2] = 4, u[e + 4 >> 2] = 0, u[e + 8 >> 2] = 5264;
                                                        break e
                                                    }
                                                    le(n, 1),
                                                    K(n, e),
                                                    u[e + 4 >> 2] = 1,
                                                    r = 1
                                                }
                                                return r
                                            }
                                            u[e >> 2] = 4, u[e + 4 >> 2] = 0, u[e + 8 >> 2] = 5099
                                        } else u[e >> 2] = 2, u[e + 4 >> 2] = 0, u[e + 8 >> 2] = 5013;
                                        return 0
                                    }

                                    function N(e, r) {
                                        var n, t = 0,
                                            o = 0,
                                            i = 0,
                                            f = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0;
                                        if (n = u[e + 20 >> 2], u[n + 108 >> 2] < (0 | r)) {
                                            if (u[e + 132 >> 2] || (Oe(), u[e + 132 >> 2])) {
                                                g = u[n + 100 >> 2], E = A(g, u[n + 104 >> 2]), e = (0 | (d = u[n + 112 >> 2])) / (0 | g) | 0;
                                                e: {
                                                    r: if ((0 | d) >= (0 | (C = A(r, g)))) b = n + 48 | 0;
                                                        elseif (v = d - A(e, g) | 0, i = 0, (f = u[n + 152 >> 2]) && (i = u[u[n + 160 >> 2] + (A(u[n + 156 >> 2], e >> f) + (v >> f) << 2) >> 2]), !u[(b = n + 48 | 0) >> 2])
                                                        for (I = u[n + 148 >> 2], _ = u[n + 16 >> 2], k = n + 24 | 0, y = u[n + 168 >> 2] + A(i, 548) | 0;;) {
                                                            v & I || (t = u[n + 168 >> 2], i = 0, (f = u[n + 152 >> 2]) && (i = u[u[n + 160 >> 2] + (A(u[n + 156 >> 2], e >> f) + (v >> f) << 2) >> 2]), y = t + A(i, 548) | 0), (0 | (o = u[n + 44 >> 2])) >= 32 && (ye(k), o = u[n + 44 >> 2]), p = n, t = i = u[k + 4 >> 2], f = 31 & (l = 63 & o), w = u[k >> 2], t = u[y >> 2] + ((255 & (32 <= (63 & l) >>> 0 ? t >>> f | 0 : ((1 << f) - 1 & t) << 32 - f | w >>> f)) << 2) | 0, (f = s[0 | t]) >>> 0 >= 9 && (o = o + 8 | 0, u[n + 44 >> 2] = o, l = (c[t + 2 >> 1] << 2) + t | 0, t = i, m = 31 & (h = 63 & o), f = s[0 | (t = l + (((-1 << f + -8 ^ -1) & (32 <= h >>> 0 ? t >>> m | 0 : ((1 << m) - 1 & t) << 32 - m | w >>> m)) << 2) | 0)]), l = (255 & f) + o | 0, u[p + 44 >> 2] = l;
                                                            n: if ((t = c[t + 2 >> 1]) >>> 0 <= 255) {
                                                                if (a[d + _ | 0] = t, d = d + 1 | 0, (0 | (v = v + 1 | 0)) < (0 | g)) break n;
                                                                if (i = e + 1 | 0, v = 0, (0 | e) >= (0 | r)) {
                                                                    e = i;
                                                                    break n
                                                                }
                                                                if (15 & i) {
                                                                    e = i;
                                                                    break n
                                                                }
                                                                we(n, i), e = i
                                                            } else {
                                                                if (p = 1, t >>> 0 > 279) break e;
                                                                if (f = t + -256 | 0, t >>> 0 >= 260 && (f = ve(k, i = t + -258 >> 1) + ((1 & f | 2) << i) | 0, w = u[n + 24 >> 2], l = u[n + 44 >> 2], i = u[n + 28 >> 2]), m = n, t = i, o = 31 & (h = 63 & l), o = u[y + 16 >> 2] + ((255 & (32 <= h >>> 0 ? t >>> o | 0 : ((1 << o) - 1 & t) << 32 - o | w >>> o)) << 2) | 0, (t = s[0 | o]) >>> 0 >= 9 && (l = l + 8 | 0, u[n + 44 >> 2] = l, D = (c[o + 2 >> 1] << 2) + o | 0, o = 31 & (h = 63 & l), t = s[0 | (o = D + (((-1 << t + -8 ^ -1) & (32 <= h >>> 0 ? i >>> o | 0 : ((1 << o) - 1 & i) << 32 - o | w >>> o)) << 2) | 0)]), i = (255 & t) + l | 0, u[m + 44 >> 2] = i, o = c[o + 2 >> 1], (0 | i) >= 32 && ye(k), i = f + 1 | 0, o >>> 0 >= 4 && (o = ve(k, t = o + -2 >> 1) + ((1 & o | 2) << t) | 0), (o + 1 | 0) >= 121 ? t = o + -119 | 0 : (t = s[o + 1264 | 0], t = (0 | (t = 8 + (A(t >>> 4 | 0, g) - (15 & t) | 0) | 0)) > 1 ? t : 1), (E - d | 0) < (0 | i) | (0 | d) < (0 | t)) break e;
                                                                l = (o = d + _ | 0) - t | 0;
                                                                t: {
                                                                    o: if (!((0 | i) < 8)) {
                                                                        i: {
                                                                            a: switch (t + -1 | 0) {
                                                                                case 0:
                                                                                    t = s[0 | l], p = A(t, 16843009);
                                                                                    break i;
                                                                                case 1:
                                                                                    t = s[0 | l] | s[l + 1 | 0] << 8, p = A(t, 65537);
                                                                                    break i;
                                                                                case 3:
                                                                                    break a;
                                                                                default:
                                                                                    break o
                                                                            }
                                                                            p = t = s[0 | l] | s[l + 1 | 0] << 8 | s[l + 2 | 0] << 16 | s[l + 3 | 0] << 24
                                                                        }
                                                                        i: {
                                                                            a: {
                                                                                f: {
                                                                                    if (3 & o) {
                                                                                        if (a[0 | o] = t, p = rr(p, 24), l = l + 1 | 0, 3 & (o = o + 1 | 0)) break f;
                                                                                        t = f >>> 2 | 0;
                                                                                        break a
                                                                                    }
                                                                                    t = (f = i) >>> 2 | 0;
                                                                                    break a
                                                                                }
                                                                                for (; a[0 | o] = s[0 | l], m = f, f = f + -1 | 0, p = rr(p, 24), l = l + 1 | 0, 3 & (o = o + 1 | 0););
                                                                                if (t = 0, (0 | m) < 5) break i;t = f >> 2
                                                                            }
                                                                            for (m = (0 | t) > 1 ? t : 1, t = 0; u[(t << 2) + o >> 2] = p, (0 | m) != (0 | (t = t + 1 | 0)););t = m << 2
                                                                        }
                                                                        if ((0 | t) >= (0 | f)) break t;
                                                                        for (; a[t + o | 0] = s[t + l | 0], (0 | f) != (0 | (t = t + 1 | 0)););
                                                                        break t
                                                                    }if ((0 | t) < (0 | i)) {
                                                                        if (t = 0, (0 | i) <= 0) break t;
                                                                        for (; a[t + o | 0] = s[t + l | 0], p = (0 | t) != (0 | f), t = t + 1 | 0, p;);
                                                                    } else re(o, l, i)
                                                                }
                                                                if (d = i + d | 0, (0 | (v = i + v | 0)) >= (0 | g))
                                                                    for (; v = v - g | 0, 15 & (e = (i = e) + 1 | 0) | (0 | i) >= (0 | r) || we(n, e), (0 | v) >= (0 | g););
                                                                !(v & I) | (0 | d) >= (0 | C) || (t = u[n + 168 >> 2], i = 0, (f = u[n + 152 >> 2]) && (i = u[u[n + 160 >> 2] + (A(u[n + 156 >> 2], e >> f) + (v >> f) << 2) >> 2]), y = t + A(i, 548) | 0)
                                                            }
                                                            if (u[b >> 2]) {
                                                                u[b >> 2] = 1;
                                                                break r
                                                            }
                                                            if (o = 0, o = u[n + 40 >> 2] == u[n + 36 >> 2] ? u[n + 44 >> 2] > 64 : o, u[b >> 2] = o, (0 | d) >= (0 | C)) break r;
                                                            if (o) break
                                                        }
                                                    we(n, (0 | e) > (0 | r) ? r : e),
                                                    p = 0
                                                }
                                                return i = r = b, e = 1, u[r >> 2] || (e = 0, u[n + 40 >> 2] == u[n + 36 >> 2] && (e = u[n + 44 >> 2] > 64)), u[i >> 2] = e, !e | (0 | E) <= (0 | d) && !p ? (u[n + 112 >> 2] = d, 1) : (u[n >> 2] = e ? 5 : 3, 0)
                                            }
                                            e = R(n, u[n + 16 >> 2], u[n + 100 >> 2], u[n + 104 >> 2], r, 1)
                                        } else e = 1;
                                        return e
                                    }

                                    function G(e, r) {
                                        r |= 0;
                                        var n, t, o, f, c, l, d, v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0,
                                            B = 0,
                                            F = 0;
                                        if (L = n = L + -64 | 0, m = u[2280 + (e |= 0) >> 2], c = u[e + 160 >> 2], x = u[e + 2268 >> 2], g = u[e + 2284 >> 2], v = (o = s[u[e + 2308 >> 2] + 4863 | 0]) >>> 1 | 0, I = u[e + 2276 >> 2], F = u[e + 2272 >> 2], d = u[e + 308 >> 2], f = u[e + 164 >> 2], 2 == u[e + 148 >> 2] && M(e, e + 160 | 0), h = A(m, c), l = A(m, o), p = A(g, c), t = A(v, g), u[e + 168 >> 2] && !((0 | (v = u[e + 296 >> 2])) >= u[e + 304 >> 2]))
                                            for (_ = u[e + 164 >> 2];;) {
                                                C = u[e + 172 >> 2] + (v << 2) | 0;
                                                e: if (b = s[0 | C])
                                                    if (g = u[e + 160 >> 2], w = u[e + 2280 >> 2], k = (u[e + 2268 >> 2] + (A(g, w) << 4) | 0) + (v << 4) | 0, 1 != u[e + 2308 >> 2]) y = s[C + 1 | 0], S = u[e + 2284 >> 2], m = A(S, g) << 3, g = v << 3, B = (m + u[e + 2276 >> 2] | 0) + g | 0, D = g + (m + u[e + 2272 >> 2] | 0) | 0, E = s[C + 3 | 0], (0 | v) >= 1 && (g = b + 4 | 0, i[u[2709]](k, w, g, y, E), i[u[2711]](D, B, S, g, y, E)), s[C + 2 | 0] && (i[u[2713]](k, w, b, y, E), i[u[2715]](D, B, S, b, y, E)), m = C + 2 | 0, (0 | _) >= 1 && (g = b + 4 | 0, i[u[2708]](k, w, g, y, E), i[u[2710]](D, B, S, g, y, E)), s[0 | m] && (i[u[2712]](k, w, b, y, E), i[u[2714]](D, B, S, b, y, E));
                                                    else {
                                                        if ((0 | v) >= 1 && i[u[2717]](k, w, b + 4 | 0), s[C + 2 | 0] && i[u[2719]](k, w, b), g = C + 2 | 0, (0 | _) >= 1 && i[u[2716]](k, w, b + 4 | 0), !s[0 | g]) break e;
                                                        i[u[2718]](k, w, b)
                                                    }
                                                if (!((0 | (v = v + 1 | 0)) < u[e + 304 >> 2])) break
                                            }
                                        if (E = h << 4, D = x - l | 0, w = p << 3, _ = I - t | 0, x = F - t | 0, u[e + 540 >> 2] && !((0 | (k = u[e + 296 >> 2])) >= (0 | (p = u[e + 304 >> 2]))))
                                            for (y = e + 552 | 0;;) {
                                                if (v = u[e + 176 >> 2] + A(k, 800) | 0, (m = s[v + 796 | 0]) >>> 0 >= 4) {
                                                    for (I = v + 796 | 0, C = u[e + 2284 >> 2], S = A(C, u[e + 160 >> 2]) << 3, F = u[e + 2276 >> 2], g = u[e + 2272 >> 2], b = u[e + 548 >> 2], h = u[e + 544 >> 2], p = 0; B = u[(v = y + (h << 2) | 0) >> 2] - u[y + (b << 2) >> 2] | 0, u[v >> 2] = 2147483647 & B, h = 55 == (0 | (v = u[e + 544 >> 2] + 1 | 0)) ? 0 : v, u[e + 544 >> 2] = h, b = 55 == (0 | (v = u[e + 548 >> 2] + 1 | 0)) ? 0 : v, u[e + 548 >> 2] = b, a[p + n | 0] = A(m, B << 1 >> 24) >>> 8 ^ 128, 64 != (0 | (p = p + 1 | 0)););
                                                    for (m = k << 3, i[u[2720]](n, m + (g + S | 0) | 0, C), g = s[0 | I], b = u[e + 548 >> 2], h = u[e + 544 >> 2], p = 0; I = u[(v = y + (h << 2) | 0) >> 2] - u[y + (b << 2) >> 2] | 0, u[v >> 2] = 2147483647 & I, h = 55 == (0 | (v = u[e + 544 >> 2] + 1 | 0)) ? 0 : v, u[e + 544 >> 2] = h, b = 55 == (0 | (v = u[e + 548 >> 2] + 1 | 0)) ? 0 : v, u[e + 548 >> 2] = b, a[p + n | 0] = A(g, I << 1 >> 24) >>> 8 ^ 128, 64 != (0 | (p = p + 1 | 0)););
                                                    i[u[2720]](n, m + (S + F | 0) | 0, C), p = u[e + 304 >> 2]
                                                }
                                                if (!((0 | (k = k + 1 | 0)) < (0 | p))) break
                                            }
                                        D = E + D | 0, g = w + _ | 0, I = w + x | 0, F = d + -1 | 0;
                                        e: {
                                            r: {
                                                if (p = 1, u[r + 44 >> 2]) {
                                                    if (m = 16 + (v = f << 4) | 0, f ? (u[r + 24 >> 2] = I, u[r + 20 >> 2] = D, h = g, v = v - o | 0) : (u[r + 20 >> 2] = E + u[e + 2268 >> 2], u[r + 24 >> 2] = w + u[e + 2272 >> 2], h = w + u[e + 2276 >> 2] | 0, v = 0), u[r + 28 >> 2] = h, h = 0, u[r + 104 >> 2] = 0, _ = (0 | (m = m - ((0 | f) >= (0 | F) ? 0 : o) | 0)) > (0 | (p = u[r + 88 >> 2])) ? p : m, !(!u[e + 2348 >> 2] | (0 | _) <= (0 | v) || (h = function(e, r, n, t) {
                                                            var o = 0,
                                                                a = 0,
                                                                f = 0,
                                                                c = 0,
                                                                l = 0,
                                                                d = 0,
                                                                v = 0,
                                                                p = 0;
                                                            n: if (!((0 | n) < 0 | (0 | t) < 1 || (l = u[r + 88 >> 2], (n + t | 0) > (0 | l)))) {
                                                                v = u[r >> 2];
                                                                t: {
                                                                    o: if (!u[e + 2356 >> 2]) {
                                                                        if (!(a = u[e + 2344 >> 2])) {
                                                                            if (o = Qe(1, 0, 144), u[e + 2344 >> 2] = o, !o) break n;
                                                                            if (a = Xe(vr(f = o = u[r + 88 >> 2], a = o >> 31, o = u[r >> 2], o >> 31), P, 1), u[e + 2360 >> 2] = a, !a) break t;
                                                                            if (u[e + 2368 >> 2] = 0, u[e + 2364 >> 2] = a, f = u[e + 2348 >> 2], c = u[e + 2352 >> 2], o = u[e + 2344 >> 2], function() {
                                                                                    var e;
                                                                                    (0 | (e = u[2673])) != u[2550] && (u[2731] = 75, u[2730] = 76, u[2729] = 77, u[2728] = 0, u[2727] = 78, u[2726] = 79, u[2725] = 80, u[2724] = 0, u[2550] = e)
                                                                                }(), u[o + 136 >> 2] = a, u[o >> 2] = u[r >> 2], u[o + 4 >> 2] = u[r + 4 >> 2], c >>> 0 < 2) break t;
                                                                            if (a = 3 & s[0 | f], u[o + 8 >> 2] = a, u[o + 12 >> 2] = s[0 | f] >>> 2 & 3, d = s[0 | f] >>> 4 & 3, u[o + 16 >> 2] = d, a >>> 0 > 1 | d >>> 0 > 1 | s[0 | f] > 63) break t;
                                                                            if (a = c + -1 | 0, hr(c = o + 24 | 0), or(0, c), u[o - -64 >> 2] = o, u[o + 24 >> 2] = u[r >> 2], u[o + 28 >> 2] = u[r + 4 >> 2], u[o + 96 >> 2] = u[r + 72 >> 2], u[o + 100 >> 2] = u[r + 76 >> 2], u[o + 104 >> 2] = u[r + 80 >> 2], u[o + 108 >> 2] = u[r + 84 >> 2], u[o + 112 >> 2] = u[r + 88 >> 2], !(o = u[o + 8 >> 2] ? function(e, r, n) {
                                                                                    var t, o = 0,
                                                                                        i = 0,
                                                                                        a = 0,
                                                                                        f = 0,
                                                                                        c = 0;
                                                                                    if (!(t = Qe(1, 0, 272))) return 0;
                                                                                    u[t >> 2] = 0, u[t + 4 >> 2] = 2, ue(), i = u[e >> 2], u[t + 100 >> 2] = i, o = u[e + 4 >> 2], u[t + 8 >> 2] = e + 24, u[t + 104 >> 2] = o, u[e + 28 >> 2] = o, u[e + 24 >> 2] = i, u[e - -64 >> 2] = e, u[t >> 2] = 0, xe(t + 24 | 0, r, n);
                                                                                    i: {
                                                                                        a: {
                                                                                            f: if (z(u[e >> 2], u[e + 4 >> 2], 1, t, 0)) {
                                                                                                u: {
                                                                                                    s: if (!(1 != u[t + 176 >> 2] | 3 != u[t + 180 >> 2] | u[t + 120 >> 2] > 0)) {
                                                                                                        if ((0 | (n = u[t + 164 >> 2])) < 1) break u;
                                                                                                        for (r = u[t + 168 >> 2], o = 0;;) {
                                                                                                            if (i = r + A(o, 548) | 0, s[u[i + 4 >> 2]] | s[u[i + 8 >> 2]] | s[u[i + 12 >> 2]]) break s;
                                                                                                            if ((0 | n) == (0 | (o = o + 1 | 0))) break
                                                                                                        }
                                                                                                        break u
                                                                                                    }if (u[e + 132 >> 2] = 0, a = vr(n = r = u[t + 104 >> 2], o = r >> 31, r = u[t + 100 >> 2], r >> 31), n = P, c = t, r = (r = (o = u[e >> 2]) >> 31) << 4 | o >>> 28, (i = (i = o << 4) + (o = f = 65535 & o) | 0) >>> 0 < o >>> 0 && (r = r + 1 | 0), r = r + n | 0, r = Xe(o = i + a | 0, o >>> 0 < i >>> 0 ? r + 1 | 0 : r, 4), u[c + 16 >> 2] = r, r) break a;u[t + 20 >> 2] = 0,
                                                                                                    u[t >> 2] = 1;
                                                                                                    break f
                                                                                                }
                                                                                                if (u[e + 132 >> 2] = 1, u[t + 20 >> 2] = 0, r = Xe(vr(n = r = u[t + 104 >> 2], o = r >> 31, r = u[t + 100 >> 2], r >> 31), P, 1), u[t + 16 >> 2] = r, r) break i;u[t >> 2] = 1
                                                                                            }return ke(t),
                                                                                            j(t),
                                                                                            0
                                                                                        }
                                                                                        u[t + 20 >> 2] = (r + (a << 2) | 0) + (f << 2)
                                                                                    }
                                                                                    return u[e + 20 >> 2] = t, 1
                                                                                }(o, f + 1 | 0, a) : a >>> 0 >= A(u[o + 4 >> 2], u[o >> 2]) >>> 0)) break t;
                                                                            a = u[e + 2344 >> 2], 1 == u[a + 16 >> 2] ? t = l - n | 0 : u[e + 2372 >> 2] = 0
                                                                        }
                                                                        if (p = u[a + 112 >> 2], u[a + 8 >> 2]) {
                                                                            if (!N(a, t = n + t | 0)) break t
                                                                        } else {
                                                                            c = u[a >> 2], o = (f = A(c, n)) + u[e + 2364 >> 2] | 0, l = 1 + (f + u[e + 2348 >> 2] | 0) | 0, f = u[e + 2368 >> 2];
                                                                            i: {
                                                                                a: {
                                                                                    if (d = u[a + 12 >> 2]) {
                                                                                        if ((0 | t) < 1) break i;
                                                                                        if (i[u[10912 + (d << 2) >> 2]](f, l, o, c), d = 1, 1 != (0 | t)) break a;
                                                                                        f = o;
                                                                                        break i
                                                                                    }
                                                                                    if (a = 0, (0 | t) <= 0) break i;
                                                                                    for (; f = o, o = re(o, l, c), l = c + l | 0, o = o + c | 0, (0 | (a = a + 1 | 0)) != (0 | t););
                                                                                    break i
                                                                                }
                                                                                for (; l = c + l | 0, f = o + c | 0, i[u[10912 + (u[a + 12 >> 2] << 2) >> 2]](o, l, f, c), o = f, (0 | (d = d + 1 | 0)) != (0 | t););
                                                                            }
                                                                            u[e + 2368 >> 2] = f, t = n + t | 0
                                                                        }
                                                                        if ((0 | t) >= (0 | p)) u[e + 2356 >> 2] = 1;
                                                                        else if (!u[e + 2356 >> 2]) break o;
                                                                        if ((t = u[e + 2344 >> 2]) && (gr(u[t + 20 >> 2]), u[t + 20 >> 2] = 0, j(t)), u[e + 2344 >> 2] = 0, !((0 | (t = u[e + 2372 >> 2])) < 1 || (f = u[r + 76 >> 2], o = u[r + 84 >> 2], q(f + (u[e + 2364 >> 2] + A(o, v) | 0) | 0, u[r + 80 >> 2] - f | 0, u[r + 88 >> 2] - o | 0, v, t)))) break t
                                                                    }return u[e + 2364 >> 2] + A(n, v) | 0
                                                                }
                                                                j(u[e + 2360 >> 2]), u[e + 2360 >> 2] = 0, u[e + 2364 >> 2] = 0, (r = u[e + 2344 >> 2]) && (gr(u[r + 20 >> 2]), u[r + 20 >> 2] = 0, j(r)), u[e + 2344 >> 2] = 0
                                                            }
                                                            return 0
                                                        }(e, r, v, _ - v | 0), u[r + 104 >> 2] = h, h))) break r;
                                                    (0 | (m = u[r + 84 >> 2])) > (0 | v) && (p = m - v | 0, u[r + 20 >> 2] = u[r + 20 >> 2] + A(p, u[e + 2280 >> 2]), v = A(u[e + 2284 >> 2], p >> 1), u[r + 24 >> 2] = v + u[r + 24 >> 2], u[r + 28 >> 2] = v + u[r + 28 >> 2], h ? (h = A(p, u[r >> 2]) + h | 0, u[r + 104 >> 2] = h) : h = 0, v = m), p = 1, (0 | _) <= (0 | v) || (x = u[r + 76 >> 2], u[r + 20 >> 2] = x + u[r + 20 >> 2], p = x >> 1, u[r + 24 >> 2] = p + u[r + 24 >> 2], u[r + 28 >> 2] = p + u[r + 28 >> 2], h && (u[r + 104 >> 2] = h + x), u[r + 8 >> 2] = v - m, u[r + 16 >> 2] = _ - v, u[r + 12 >> 2] = u[r + 80 >> 2] - x, p = 0 | i[u[r + 44 >> 2]](r))
                                                }
                                                if (u[e + 156 >> 2] != (c + 1 | 0) | (0 | f) >= (0 | F)) break e;re(u[e + 2268 >> 2] - l | 0, D + (u[e + 2280 >> 2] << 4) | 0, l),
                                                re((r = 0 - t | 0) + u[e + 2272 >> 2] | 0, I + (u[e + 2284 >> 2] << 3) | 0, t),
                                                re(r + u[e + 2276 >> 2] | 0, g + (u[e + 2284 >> 2] << 3) | 0, t);
                                                break e
                                            }
                                            p = nr(e, 3, 4912)
                                        }
                                        return L = n - -64 | 0, 0 | p
                                    }

                                    function j(e) {
                                        var r = 0,
                                            n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0;
                                        e: if (e |= 0) {
                                            i = (t = e + -8 | 0) + (e = -8 & (n = u[e + -4 >> 2])) | 0;
                                            r: if (!(1 & n)) {
                                                if (!(3 & n)) break e;
                                                if ((t = t - (n = u[t >> 2]) | 0) >>> 0 < l[2888]) break e;
                                                if (e = e + n | 0, u[2889] == (0 | t)) {
                                                    if (3 == (3 & (n = u[i + 4 >> 2]))) return u[2886] = e, u[i + 4 >> 2] = -2 & n, u[t + 4 >> 2] = 1 | e, void(u[e + t >> 2] = e)
                                                } else {
                                                    if (n >>> 0 <= 255) {
                                                        if (o = u[t + 8 >> 2], n = n >>> 3 | 0, (0 | (r = u[t + 12 >> 2])) == (0 | o)) {
                                                            s = 11536, c = u[2884] & rr(-2, n), u[s >> 2] = c;
                                                            break r
                                                        }
                                                        u[o + 12 >> 2] = r, u[r + 8 >> 2] = o;
                                                        break r
                                                    }
                                                    if (f = u[t + 24 >> 2], (0 | (n = u[t + 12 >> 2])) == (0 | t))
                                                        if ((r = u[(o = t + 20 | 0) >> 2]) || (r = u[(o = t + 16 | 0) >> 2])) {
                                                            for (; a = o, (r = u[(o = (n = r) + 20 | 0) >> 2]) || (o = n + 16 | 0, r = u[n + 16 >> 2]););
                                                            u[a >> 2] = 0
                                                        } else n = 0;
                                                    else r = u[t + 8 >> 2], u[r + 12 >> 2] = n, u[n + 8 >> 2] = r;
                                                    if (!f) break r;
                                                    o = u[t + 28 >> 2];
                                                    n: {
                                                        if (u[(r = 11840 + (o << 2) | 0) >> 2] == (0 | t)) {
                                                            if (u[r >> 2] = n, n) break n;
                                                            s = 11540, c = u[2885] & rr(-2, o), u[s >> 2] = c;
                                                            break r
                                                        }
                                                        if (u[f + (u[f + 16 >> 2] == (0 | t) ? 16 : 20) >> 2] = n, !n) break r
                                                    }
                                                    if (u[n + 24 >> 2] = f, (r = u[t + 16 >> 2]) && (u[n + 16 >> 2] = r, u[r + 24 >> 2] = n), !(r = u[t + 20 >> 2])) break r;
                                                    u[n + 20 >> 2] = r, u[r + 24 >> 2] = n
                                                }
                                            }
                                            if (!(i >>> 0 <= t >>> 0) && 1 & (n = u[i + 4 >> 2])) {
                                                r: {
                                                    if (!(2 & n)) {
                                                        if ((0 | i) == u[2890]) {
                                                            if (u[2890] = t, e = u[2887] + e | 0, u[2887] = e, u[t + 4 >> 2] = 1 | e, u[2889] != (0 | t)) break e;
                                                            return u[2886] = 0, void(u[2889] = 0)
                                                        }
                                                        if ((0 | i) == u[2889]) return u[2889] = t, e = u[2886] + e | 0, u[2886] = e, u[t + 4 >> 2] = 1 | e, void(u[e + t >> 2] = e);
                                                        e = (-8 & n) + e | 0;
                                                        n: if (n >>> 0 <= 255) {
                                                            if (n = n >>> 3 | 0, (0 | (r = u[i + 8 >> 2])) == (0 | (o = u[i + 12 >> 2]))) {
                                                                s = 11536, c = u[2884] & rr(-2, n), u[s >> 2] = c;
                                                                break n
                                                            }
                                                            u[r + 12 >> 2] = o, u[o + 8 >> 2] = r
                                                        } else {
                                                            if (f = u[i + 24 >> 2], (0 | i) == (0 | (n = u[i + 12 >> 2])))
                                                                if ((r = u[(o = i + 20 | 0) >> 2]) || (r = u[(o = i + 16 | 0) >> 2])) {
                                                                    for (; a = o, (r = u[(o = (n = r) + 20 | 0) >> 2]) || (o = n + 16 | 0, r = u[n + 16 >> 2]););
                                                                    u[a >> 2] = 0
                                                                } else n = 0;
                                                            else r = u[i + 8 >> 2], u[r + 12 >> 2] = n, u[n + 8 >> 2] = r;
                                                            if (f) {
                                                                o = u[i + 28 >> 2];
                                                                t: {
                                                                    if ((0 | i) == u[(r = 11840 + (o << 2) | 0) >> 2]) {
                                                                        if (u[r >> 2] = n, n) break t;
                                                                        s = 11540, c = u[2885] & rr(-2, o), u[s >> 2] = c;
                                                                        break n
                                                                    }
                                                                    if (u[f + ((0 | i) == u[f + 16 >> 2] ? 16 : 20) >> 2] = n, !n) break n
                                                                }
                                                                u[n + 24 >> 2] = f, (r = u[i + 16 >> 2]) && (u[n + 16 >> 2] = r, u[r + 24 >> 2] = n), (r = u[i + 20 >> 2]) && (u[n + 20 >> 2] = r, u[r + 24 >> 2] = n)
                                                            }
                                                        }
                                                        if (u[t + 4 >> 2] = 1 | e, u[e + t >> 2] = e, u[2889] != (0 | t)) break r;
                                                        return void(u[2886] = e)
                                                    }
                                                    u[i + 4 >> 2] = -2 & n,
                                                    u[t + 4 >> 2] = 1 | e,
                                                    u[e + t >> 2] = e
                                                }
                                                if (e >>> 0 <= 255) return n = 11576 + ((e = e >>> 3 | 0) << 3) | 0, (r = u[2884]) & (e = 1 << e) ? e = u[n + 8 >> 2] : (u[2884] = e | r, e = n), u[n + 8 >> 2] = t, u[e + 12 >> 2] = t, u[t + 12 >> 2] = n, void(u[t + 8 >> 2] = e);u[t + 16 >> 2] = 0,
                                                u[t + 20 >> 2] = 0,
                                                r = 0,
                                                (o = e >>> 8 | 0) && (r = 31, e >>> 0 > 16777215 || (r = (n = o) << (o = o + 1048320 >>> 16 & 8), r = 28 + ((r = ((r <<= f = r + 520192 >>> 16 & 4) << (a = r + 245760 >>> 16 & 2) >>> 15 | 0) - (a | o | f) | 0) << 1 | e >>> r + 21 & 1) | 0)),
                                                u[(i = t) + 28 >> 2] = r,
                                                a = 11840 + (r << 2) | 0;r: {
                                                    n: {
                                                        if ((o = u[2885]) & (n = 1 << r)) {
                                                            for (o = e << (31 == (0 | r) ? 0 : 25 - (r >>> 1 | 0) | 0), n = u[a >> 2];;) {
                                                                if (r = n, (-8 & u[n + 4 >> 2]) == (0 | e)) break n;
                                                                if (n = o >>> 29 | 0, o <<= 1, !(n = u[(a = 16 + (r + (4 & n) | 0) | 0) >> 2])) break
                                                            }
                                                            u[a >> 2] = t, u[t + 24 >> 2] = r
                                                        } else u[2885] = n | o,
                                                        u[a >> 2] = t,
                                                        u[t + 24 >> 2] = a;u[t + 12 >> 2] = t,
                                                        u[t + 8 >> 2] = t;
                                                        break r
                                                    }
                                                    e = u[r + 8 >> 2],
                                                    u[e + 12 >> 2] = t,
                                                    u[r + 8 >> 2] = t,
                                                    u[t + 24 >> 2] = 0,
                                                    u[t + 12 >> 2] = r,
                                                    u[t + 8 >> 2] = e
                                                }
                                                if (e = u[2892] + -1 | 0, u[2892] = e, !e) {
                                                    for (t = 11992; t = (e = u[t >> 2]) + 8 | 0, e;);
                                                    u[2892] = -1
                                                }
                                            }
                                        }
                                    }

                                    function X(e, r, n, t, o) {
                                        var i, s = 0,
                                            l = 0,
                                            d = 0,
                                            A = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0;
                                        u[120 + (i = L - 128 | 0) >> 2] = 0, u[i + 124 >> 2] = 0, u[i + 112 >> 2] = 0, u[i + 116 >> 2] = 0, u[i + 104 >> 2] = 0, u[i + 108 >> 2] = 0, u[i + 96 >> 2] = 0, u[i + 100 >> 2] = 0, u[i + 88 >> 2] = 0, u[i + 92 >> 2] = 0, u[i + 80 >> 2] = 0, u[i + 84 >> 2] = 0, u[i + 72 >> 2] = 0, u[i + 76 >> 2] = 0, u[i + 64 >> 2] = 0, u[i + 68 >> 2] = 0;
                                        e: {
                                            if ((0 | t) >= 1) {
                                                for (;;) {
                                                    if ((0 | (l = u[(s << 2) + n >> 2])) > 15) break e;
                                                    if (u[(l = (i - -64 | 0) + (l << 2) | 0) >> 2] = u[l >> 2] + 1, (0 | (s = s + 1 | 0)) == (0 | t)) break
                                                }
                                                s = u[i + 64 >> 2]
                                            } else s = 0;
                                            if ((0 | s) != (0 | t) && (u[i + 4 >> 2] = 0, !((0 | (s = u[i + 68 >> 2])) > 2 || (u[i + 8 >> 2] = s, (0 | (l = u[i + 72 >> 2])) > 4 || (s = s + l | 0, u[i + 12 >> 2] = s, (0 | (l = u[i + 76 >> 2])) > 8 || (s = s + l | 0, u[i + 16 >> 2] = s, (0 | (l = u[i + 80 >> 2])) > 16 || (s = s + l | 0, u[i + 20 >> 2] = s, (0 | (l = u[i + 84 >> 2])) > 32 || (s = s + l | 0, u[i + 24 >> 2] = s, (0 | (l = u[i + 88 >> 2])) > 64 || (s = s + l | 0, u[i + 28 >> 2] = s, (0 | (l = u[i + 92 >> 2])) > 128 || (s = s + l | 0, u[i + 32 >> 2] = s, (0 | (l = u[i + 96 >> 2])) > 256 || (s = s + l | 0, u[i + 36 >> 2] = s, (0 | (l = u[i + 100 >> 2])) > 512 || (s = s + l | 0, u[i + 40 >> 2] = s, (0 | (l = u[i + 104 >> 2])) > 1024 || (s = s + l | 0, u[i + 44 >> 2] = s, (0 | (l = u[i + 108 >> 2])) > 2048 || (s = s + l | 0, u[i + 48 >> 2] = s, (0 | (l = u[i + 112 >> 2])) > 4096 || (s = s + l | 0, u[i + 52 >> 2] = s, (0 | (l = u[i + 116 >> 2])) > 8192 || (s = s + l | 0, u[i + 56 >> 2] = s, (0 | (l = u[i + 120 >> 2])) > 16384)))))))))))))))) {
                                                if (u[i + 60 >> 2] = s + l, s = 0, (0 | t) > 0)
                                                    for (;
                                                        (0 | (l = u[(s << 2) + n >> 2])) < 1 || (o ? (l = u[(d = i + (l << 2) | 0) >> 2], u[d >> 2] = l + 1, f[(l << 1) + o >> 1] = s) : u[(l = i + (l << 2) | 0) >> 2] = u[l >> 2] + 1), (0 | (s = s + 1 | 0)) != (0 | t););
                                                if (l = 1 << r, b = 1, 1 == (0 | (p = u[i + 60 >> 2]))) {
                                                    if (!o) return l;
                                                    for (n = c[o >> 1] << 16, s = l; f[(t = ((r = s + -1 | 0) << 2) + e | 0) >> 1] = n, f[t + 2 >> 1] = n >>> 16, t = (0 | s) > 1, s = r, t;);
                                                    return l
                                                }
                                                y = 1;
                                                r: {
                                                    if (!((0 | r) < 1)) {
                                                        for (g = 2, s = 1;;) {
                                                            if ((0 | (b = (h = b << 1) - (t = u[(C = (i - -64 | 0) + (s << 2) | 0) >> 2]) | 0)) < 0) break e;
                                                            if (n = s, !(!e | (0 | t) < 1)) {
                                                                for (d = t + m | 0, E = 255 & n, v = 1 << n + -1;;) {
                                                                    for (I = (A << 2) + e | 0, t = E | c[(m << 1) + o >> 1] << 16, s = l; f[(k = I + ((s = s - g | 0) << 2) | 0) >> 1] = t, f[k + 2 >> 1] = t >>> 16, (0 | s) > 0;);
                                                                    for (t = v; t = (s = t) >>> 1 | 0, s & A;);
                                                                    if (A = s ? s + (s + -1 & A) | 0 : A, (0 | d) == (0 | (m = m + 1 | 0))) break
                                                                }
                                                                u[C >> 2] = 0, m = d
                                                            }
                                                            if (y = h + y | 0, g <<= 1, s = n + 1 | 0, (0 | r) == (0 | n)) break
                                                        }
                                                        if (!((0 | r) <= 14)) {
                                                            h = l;
                                                            break r
                                                        }
                                                    }
                                                    for (x = l + -1 | 0, d = r, v = -1, g = 2, p = e, h = l;;) {
                                                        if (w = 0, C = d, (0 | (b = (_ = b << 1) - (n = u[(k = (i - -64 | 0) + ((d = d + 1 | 0) << 2) | 0) >> 2]) | 0)) < 0) break e;
                                                        if (!(!e | (0 | n) < 1))
                                                            for (I = 1 << C, S = 255 & (w = d - r | 0), E = 1 << w, s = v;;) {
                                                                if ((0 | (v = A & x)) != (0 | s)) {
                                                                    if (p = (l << 2) + p | 0, l = E, s = w, (0 | C) <= 13) {
                                                                        t = s = d;
                                                                        n: if (!((0 | (n = E - n | 0)) < 1))
                                                                            for (;;) {
                                                                                if (t = 15, 15 == (0 | (s = s + 1 | 0))) break n;
                                                                                if (t = s, !((0 | (n = (n << 1) - u[(i - -64 | 0) + (s << 2) >> 2] | 0)) > 0)) break
                                                                            }
                                                                        l = 1 << (s = t - r | 0)
                                                                    }
                                                                    a[0 | (n = (v << 2) + e | 0)] = r + s, f[n + 2 >> 1] = (p - e >>> 2 | 0) - v, h = l + h | 0
                                                                } else v = s;
                                                                for (t = (A >>> r << 2) + p | 0, n = S | c[(m << 1) + o >> 1] << 16, s = l; f[(D = t + ((s = s - g | 0) << 2) | 0) >> 1] = n, f[D + 2 >> 1] = n >>> 16, (0 | s) > 0;);
                                                                for (t = I; t = (s = t) >>> 1 | 0, s & A;);
                                                                if (n = (t = u[k >> 2]) + -1 | 0, u[k >> 2] = n, A = s ? s + (s + -1 & A) | 0 : A, m = m + 1 | 0, s = v, !((0 | t) > 1)) break
                                                            }
                                                        if (y = y + _ | 0, g <<= 1, 15 == (0 | d)) break
                                                    }
                                                    p = u[i + 60 >> 2]
                                                }
                                                w = ((p << 1) - 1 | 0) == (0 | y) ? h : 0
                                            }
                                        }
                                        return w
                                    }

                                    function Q(e, r) {
                                        var n, t, o, l, d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0,
                                            P = 0,
                                            M = 0,
                                            B = 0;
                                        if (L = o = L - 32 | 0, l = (g = u[e + 2256 >> 2]) + ((n = u[e + 2296 >> 2]) << 1) | 0, t = u[e + 2304 >> 2], u[e + 2236 >> 2] && (d = A(n, 800) + t | 0, s[d + 797 | 0])) a[0 | l] = 0, a[g + -2 | 0] = 0, s[d + 768 | 0] || (a[1 + (g + (n << 1) | 0) | 0] = 0, a[g + -1 | 0] = 0), d = A(n, 800) + t | 0, u[d + 788 >> 2] = 0, u[d + 792 >> 2] = 0, a[d + 796 | 0] = 0;
                                        else {
                                            for (p = A(n, 800) + t | 0, _ = s[p + 798 | 0], b = 3, v = de(p, 0, 768), s[v + 768 | 0] || (u[(d = o) + 24 >> 2] = 0, u[d + 28 >> 2] = 0, u[d + 16 >> 2] = 0, u[d + 20 >> 2] = 0, u[d + 8 >> 2] = 0, u[d + 12 >> 2] = 0, u[d >> 2] = 0, u[d + 4 >> 2] = 0, m = g + -1 | 0, b = g + (n << 1) | 0, d = (0 | (k = 0 | i[u[2661]](r, e + 2032 | 0, s[0 | m] + s[b + 1 | 0] | 0, 784 + ((_ << 5) + e | 0) | 0, 0, d))) > 0, a[0 | m] = d, a[b + 1 | 0] = d, (0 | k) >= 2 ? i[u[2674]](o, v) : (d = A(n, 800) + t | 0, v = f[o >> 1] + 3 >>> 3 | 0, f[d + 480 >> 1] = v, f[d + 448 >> 1] = v, f[d + 416 >> 1] = v, f[d + 384 >> 1] = v, f[d + 352 >> 1] = v, f[d + 320 >> 1] = v, f[d + 288 >> 1] = v, f[d + 256 >> 1] = v, f[d + 224 >> 1] = v, f[d + 192 >> 1] = v, f[d + 160 >> 1] = v, f[d + 128 >> 1] = v, f[d + 96 >> 1] = v, f[d + 64 >> 1] = v, f[d + 32 >> 1] = v, f[d >> 1] = v), b = 0, m = 1), d = 15 & s[0 | l], v = 776 + ((_ << 5) + e | 0) | 0, g = 15 & s[0 | (x = g + -2 | 0)], b = 1964 + (A(b, 68) + e | 0) | 0; k = 0 | i[u[2661]](r, b, (1 & g) + (1 & d) | 0, v, m, p), y = c[p >> 1], h = (0 | k) > (0 | m), w = d >>> 1 | 0, d = 0 | i[u[2661]](r, b, h + (1 & w) | 0, v, m, p + 32 | 0), C = c[p + 32 >> 1], E = (0 | d) > (0 | m), h = (126 & w | h << 7) >>> 1 | 0, w = 0 | i[u[2661]](r, b, E + (1 & h) | 0, v, m, p - -64 | 0), S = c[p + 64 >> 1], D = (0 | w) > (0 | m), E = (h | E << 7) >>> 1 | 0, P = (((0 | d) > 3 ? 3 : (0 | d) < 2 ? 0 != (0 | C) : 2) | ((0 | k) > 3 ? 12 : (0 | k) < 2 ? (0 != (0 | y)) << 2 : 8)) << 4 | P << 8 | ((0 | w) > 3 ? 12 : (0 | w) < 2 ? (0 != (0 | S)) << 2 : 8) | ((0 | (h = 0 | i[u[2661]](r, b, D + (1 & E) | 0, v, m, p + 96 | 0))) > 3 ? 3 : (0 | h) < 2 ? 0 != c[p + 96 >> 1] : 2), d = (k = (0 | h) > (0 | m)) << 3 | (E | D << 7) >>> 5, g = k << 7 | (254 & g) >>> 1, p = p + 128 | 0, 4 != (0 | (I = I + 1 | 0)););
                                            for (b = e + 2100 | 0, I = g >>> 4 | 0, w = 255 & d, k = 792 + ((_ << 5) + e | 0) | 0, g = 0, d = 1, m = 0; v = 4 | m, y = s[0 | x] >>> v | 0, h = s[0 | l] >>> v | 0, v = 0 | i[u[2661]](r, b, (1 & y) + (1 & h) | 0, k, 0, p), E = c[p >> 1], C = (0 | v) > 0, h = 0 | i[u[2661]](r, b, C + (h >>> 1 & 1) | 0, k, 0, p + 32 | 0), S = c[p + 32 >> 1], y = 0 | i[u[2661]](r, b, C + (y >>> 1 & 1) | 0, k, 0, p - -64 | 0), D = c[p + 64 >> 1], M = (0 | y) > 0, B = (0 | h) > 0, g = ((((0 | h) > 3 ? 3 : (0 | h) < 2 ? 0 != (0 | S) : 2) | ((0 | v) > 3 ? 12 : (0 | v) < 2 ? (0 != (0 | E)) << 2 : 8)) << 4 | ((0 | y) > 3 ? 12 : (0 | y) < 2 ? (0 != (0 | D)) << 2 : 8) | ((0 | (C = 0 | i[u[2661]](r, b, M + B | 0, k, 0, p + 96 | 0))) > 3 ? 3 : (0 | C) < 2 ? 0 != c[p + 96 >> 1] : 2)) << (m << 2) | g, I |= ((v = (0 | C) > 0) << 5 | B << 4) << m, w |= (v << 1 | M) << 4 << m, p = p + 128 | 0, v = d, d = 0, m = 2, v;);
                                            a[0 | l] = w, a[0 | x] = I, d = A(n, 800) + t | 0, u[d + 792 >> 2] = g, u[d + 788 >> 2] = P, a[d + 796 | 0] = 43690 & g ? 0 : u[804 + ((_ << 5) + e | 0) >> 2], m = 0 != (g | P)
                                        }
                                        return u[e + 2308 >> 2] >= 1 && (d = u[e + 2260 >> 2] + (u[e + 2296 >> 2] << 2) | 0, v = e, e = A(n, 800) + t | 0, e = u[2312 + ((v + (s[e + 798 | 0] << 3) | 0) + (s[e + 768 | 0] << 2) | 0) >> 2], a[0 | d] = e, a[d + 1 | 0] = e >>> 8, a[d + 2 | 0] = e >>> 16, a[d + 3 | 0] = e >>> 24, a[d + 2 | 0] = s[d + 2 | 0] | m), L = o + 32 | 0, !u[r + 24 >> 2]
                                    }

                                    function W(e, r, n, t, o) {
                                        var c, l, d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0;
                                        L = l = L - 16 | 0, c = u[e + 8 >> 2];
                                        e: {
                                            r: switch (u[e >> 2]) {
                                                case 2:
                                                    i[u[2733]](t, A(c, n - r | 0), o);
                                                    break e;
                                                case 0:
                                                    if (r) h = c + -1 | 0, g = o, d = r;
                                                    else {
                                                        if (d = (d = u[t >> 2]) + -16777216 & -16711936 | 16711935 & d, u[o >> 2] = d, h = c + -1 | 0, (0 | c) >= 2)
                                                            for (g = o + 4 | 0, m = t + 4 | 0; d = (-16711936 & (v = u[(b = p << 2) + m >> 2])) + (-16711936 & d) & -16711936 | (16711935 & v) + (16711935 & d) & 16711935, u[g + b >> 2] = d, (0 | h) != (0 | (p = p + 1 | 0)););
                                                        g = (d = c << 2) + o | 0, t = t + d | 0, d = 1
                                                    }
                                                    if ((0 | (m = d)) < (0 | n))
                                                        for (_ = (C = 1 << (d = u[e + 4 >> 2])) - 1 | 0, k = 0 - C | 0, w = 0 - c | 0, y = h + C >>> d | 0, b = u[e + 16 >> 2] + (A(y, m >> d) << 2) | 0;;) {
                                                            if (v = u[t >> 2], d = u[(h = w << 2) + g >> 2], u[g >> 2] = (-16711936 & v) + (-16711936 & d) & -16711936 | (16711935 & v) + (16711935 & d) & 16711935, d = 1, p = b, (0 | c) >= 2)
                                                                for (; I = (v = d << 2) + g | 0, D = t + v | 0, v = (0 | (E = C + (d & k) | 0)) > (0 | c) ? c : E, i[u[10960 + (u[p >> 2] >>> 6 & 60) >> 2]](D, h + I | 0, v - d | 0, I), p = p + 4 | 0, d = v, (0 | c) > (0 | E););
                                                            if (b = _ & (m = m + 1 | 0) ? b : (y << 2) + b | 0, g = (d = c << 2) + g | 0, t = t + d | 0, (0 | n) == (0 | m)) break
                                                        }
                                                    if (u[e + 12 >> 2] == (0 | n)) break e;
                                                    re(o - (e = c << 2) | 0, (A(c, (-1 ^ r) + n | 0) << 2) + o | 0, e);
                                                    break e;
                                                case 1:
                                                    if ((0 | n) <= (0 | r)) break e;
                                                    for (y = c - (w = c & 0 - (k = 1 << (d = u[e + 4 >> 2]))) | 0, p = (h = k + -1 | 0) + c >>> d | 0, e = u[e + 16 >> 2] + (A(p, r >> d) << 2) | 0, g = (0 | w) < 1;;) {
                                                        if (a[l + 10 | 0] = 0, f[l + 8 >> 1] = 0, m = (c << 2) + t | 0, g) d = e;
                                                        else
                                                            for (b = (w << 2) + t | 0, d = e; v = u[d >> 2], a[l + 8 | 0] = v, a[l + 10 | 0] = v >>> 16, a[l + 9 | 0] = v >>> 8, i[u[2804]](l + 8 | 0, t, k, o), d = d + 4 | 0, o = (v = k << 2) + o | 0, (t = t + v | 0) >>> 0 < b >>> 0;);
                                                        if (t >>> 0 < m >>> 0 && (d = u[d >> 2], a[l + 8 | 0] = d, a[l + 10 | 0] = d >>> 16, a[l + 9 | 0] = d >>> 8, i[u[2804]](l + 8 | 0, t, y, o), o = (d = y << 2) + o | 0, t = t + d | 0), e = h & (r = r + 1 | 0) ? e : (p << 2) + e | 0, (0 | r) == (0 | n)) break
                                                    }
                                                    break e;
                                                case 3:
                                                    break r;
                                                default:
                                                    break e
                                            }
                                            if ((0 | t) != (0 | o) | (0 | (d = u[e + 4 >> 2])) < 1)
                                                if (g = u[e + 16 >> 2], (0 | (m = 8 >>> d | 0)) <= 7) {
                                                    if ((0 | n) <= (0 | r)) break e;
                                                    for (b = -1 << m ^ -1, v = -1 << d ^ -1, e = (0 | c) < 1;;) {
                                                        if (p = 0, d = 0, !e)
                                                            for (; p & v || (d = s[t + 1 | 0], t = t + 4 | 0), u[o >> 2] = u[g + ((d & b) << 2) >> 2], d = d >>> m | 0, o = o + 4 | 0, (0 | c) != (0 | (p = p + 1 | 0)););
                                                        if ((0 | n) == (0 | (r = r + 1 | 0))) break
                                                    }
                                                } else i[u[2805]](t, g, o, r, n, c);
                                            else {
                                                if (d = A(o = n - r | 0, (c + (1 << d) | 0) - 1 >>> d | 0) << 2, o = function(e, r, n) {
                                                        var t = 0;
                                                        r: if ((0 | e) != (0 | r)) {
                                                            if ((r - e | 0) - n >>> 0 <= 0 - (n << 1) >>> 0) return re(e, r, n);
                                                            if (t = 3 & (e ^ r), e >>> 0 < r >>> 0) {
                                                                if (t) t = e;
                                                                else {
                                                                    if (3 & e)
                                                                        for (t = e;;) {
                                                                            if (!n) break r;
                                                                            if (a[0 | t] = s[0 | r], r = r + 1 | 0, n = n + -1 | 0, !(3 & (t = t + 1 | 0))) break
                                                                        } else t = e;
                                                                    if (!(n >>> 0 <= 3))
                                                                        for (; u[t >> 2] = u[r >> 2], r = r + 4 | 0, t = t + 4 | 0, (n = n + -4 | 0) >>> 0 > 3;);
                                                                }
                                                                if (n)
                                                                    for (; a[0 | t] = s[0 | r], t = t + 1 | 0, r = r + 1 | 0, n = n + -1 | 0;);
                                                            } else {
                                                                if (!t) {
                                                                    if (e + n & 3)
                                                                        for (;;) {
                                                                            if (!n) break r;
                                                                            if (a[0 | (t = (n = n + -1 | 0) + e | 0)] = s[r + n | 0], !(3 & t)) break
                                                                        }
                                                                    if (!(n >>> 0 <= 3))
                                                                        for (; u[(n = n + -4 | 0) + e >> 2] = u[r + n >> 2], n >>> 0 > 3;);
                                                                }
                                                                if (!n) break r;
                                                                for (; a[(n = n + -1 | 0) + e | 0] = s[r + n | 0], n;);
                                                            }
                                                        }
                                                        return e
                                                    }(p = ((A(o, c) << 2) + t | 0) - d | 0, t, d), g = u[e + 16 >> 2], h = u[e + 8 >> 2], (0 | (m = 8 >>> (e = u[e + 4 >> 2]) | 0)) <= 7) {
                                                    if ((0 | n) <= (0 | r)) break e;
                                                    for (b = -1 << m ^ -1, v = -1 << e ^ -1, e = (0 | h) < 1;;) {
                                                        if (d = 0, o = 0, !e)
                                                            for (; d & v || (o = s[p + 1 | 0], p = p + 4 | 0), u[t >> 2] = u[g + ((o & b) << 2) >> 2], o = o >>> m | 0, t = t + 4 | 0, (0 | h) != (0 | (d = d + 1 | 0)););
                                                        if ((0 | n) == (0 | (r = r + 1 | 0))) break
                                                    }
                                                    break e
                                                }
                                                i[u[2805]](o, g, t, r, n, h)
                                            }
                                        }
                                        L = l + 16 | 0
                                    }

                                    function Y(e, r, n, t, o, i, a, f) {
                                        var c, l, d = 0,
                                            A = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0;
                                        L = c = L - 16 | 0, u[c + 12 >> 2] = 0, u[c + 8 >> 2] = 0, l = f ? u[f + 8 >> 2] : 0;
                                        e: if (e)
                                            if (r >>> 0 < 12) v = 7;
                                            else {
                                                if (A = r, !(b = Ge(d = e, 5463))) {
                                                    if (v = 3, 1346520407 != (s[e + 8 | 0] | s[e + 9 | 0] << 8 | s[e + 10 | 0] << 16 | s[e + 11 | 0] << 24)) break e;
                                                    if ((g = s[e + 4 | 0] | s[e + 5 | 0] << 8 | s[e + 6 | 0] << 16 | s[e + 7 | 0] << 24) - 12 >>> 0 > 4294967274) break e;
                                                    if (!(!l | g >>> 0 <= r + -8 >>> 0)) {
                                                        v = 7;
                                                        break e
                                                    }
                                                    if ((A = r + -12 | 0) >>> 0 < 8) {
                                                        v = 7;
                                                        break e
                                                    }
                                                    d = e + 12 | 0
                                                }
                                                if (h = Ge(d, 5468)) v = 0;
                                                else {
                                                    if (v = 3, 10 != (s[d + 4 | 0] | s[d + 5 | 0] << 8 | s[d + 6 | 0] << 16 | s[d + 7 | 0] << 24)) break e;
                                                    if (A >>> 0 < 18) {
                                                        v = 7;
                                                        break e
                                                    }
                                                    if (p = 1, vr(w = 1 + (s[d + 12 | 0] | s[d + 13 | 0] << 8 | s[d + 14 | 0] << 16) | 0, 0, y = 1 + (s[d + 15 | 0] | s[d + 16 | 0] << 8 | s[d + 17 | 0] << 16) | 0, 0), b | P) break e;
                                                    v = s[d + 8 | 0], A = A + -18 | 0, d = d + 18 | 0, C = (2 & v) >>> 1 | 0
                                                }
                                                o && (u[o >> 2] = v >>> 4 & 1), i && (u[i >> 2] = C), a && (u[a >> 2] = 0), u[c + 8 >> 2] = y, u[c + 12 >> 2] = w;
                                                r: if (f || (i = 0, !(!h & C))) {
                                                    i = 0;
                                                    n: if (!(A >>> 0 < 4)) {
                                                        t: if (!(p | g | 1213221953 != (s[0 | d] | s[d + 1 | 0] << 8 | s[d + 2 | 0] << 16 | s[d + 3 | 0] << 24) && h | b)) {
                                                            if (A >>> 0 < 8) break n;
                                                            for (E = 22;;) {
                                                                if (v = 3, (m = s[d + 4 | 0] | s[d + 5 | 0] << 8 | s[d + 6 | 0] << 16 | s[d + 7 | 0] << 24) >>> 0 > 4294967286) break e;
                                                                if ((E = (k = m + 9 & -2) + E | 0) >>> 0 > g >>> 0 && !b) break e;
                                                                if (540561494 == (s[0 | d] | s[d + 1 | 0] << 8 | s[d + 2 | 0] << 16 | s[d + 3 | 0] << 24) | 1278758998 == (s[0 | d] | s[d + 1 | 0] << 8 | s[d + 2 | 0] << 16 | s[d + 3 | 0] << 24)) break t;
                                                                if (A >>> 0 < k >>> 0) break n;
                                                                if (i = (p = 1213221953 == (s[0 | d] | s[d + 1 | 0] << 8 | s[d + 2 | 0] << 16 | s[d + 3 | 0] << 24)) ? d + 8 | 0 : i, I = p ? m : I, d = d + k | 0, !((A = A - k | 0) >>> 0 >= 8)) break
                                                            }
                                                            break n
                                                        }if (!(A >>> 0 < 8)) {
                                                            if (m = s[0 | d] | s[d + 1 | 0] << 8 | s[d + 2 | 0] << 16 | s[d + 3 | 0] << 24, 540561494 != (s[0 | d] | s[d + 1 | 0] << 8 | s[d + 2 | 0] << 16 | s[d + 3 | 0] << 24) && 1278758998 != (0 | m)) p = A, m = 47 != s[0 | d] | A >>> 0 < 5 ? 0 : s[d + 4 | 0] < 32;
                                                            else {
                                                                if (p = s[d + 4 | 0] | s[d + 5 | 0] << 8 | s[d + 6 | 0] << 16 | s[d + 7 | 0] << 24, g >>> 0 >= 12 && (v = 3, p >>> 0 > g + -12 >>> 0)) break e;
                                                                if (p >>> 0 > (A = A + -8 | 0) >>> 0 && l) break n;
                                                                d = d + 8 | 0, m = 1278758998 == (0 | m)
                                                            }
                                                            if (v = 3, p >>> 0 > 4294967286) break e;
                                                            C | !a || (u[a >> 2] = m ? 2 : 1);
                                                            t: {
                                                                if (!m) {
                                                                    if (A >>> 0 < 10) break n;
                                                                    if (function(e, r, n, t, o) {
                                                                            var i = 0;
                                                                            return !e | r >>> 0 < 10 | 157 != s[e + 3 | 0] | 1 != s[e + 4 | 0] || 42 == s[e + 5 | 0] && (16 != (25 & (r = s[0 | e])) | (r | s[e + 1 | 0] << 8 | s[e + 2 | 0] << 16) >>> 5 >>> 0 >= n >>> 0 || (r = s[e + 6 | 0] | s[e + 7 | 0] << 8 & 16128) && (e = s[e + 8 | 0] | s[e + 9 | 0] << 8 & 16128) && (t && (u[t >> 2] = r), i = 1, o && (u[o >> 2] = e))), i
                                                                        }(d, A, p, c + 12 | 0, c + 8 | 0)) break t;
                                                                    break e
                                                                }
                                                                if (A >>> 0 < 5) break n;
                                                                if (! function(e, r, n, t, o) {
                                                                        var i, a = 0,
                                                                            f = 0;
                                                                        return L = i = L - 32 | 0, !e | r >>> 0 < 5 | 47 != s[0 | e] | s[e + 4 | 0] > 31 || (xe(i, e, r), 47 == (0 | ve(i, 8)) && (e = ve(i, 14), r = ve(i, 14), a = ve(i, 1), ve(i, 3) | u[i + 24 >> 2] || (n && (u[n >> 2] = e + 1), t && (u[t >> 2] = r + 1), f = 1, o && (u[o >> 2] = a)))), L = i + 32 | 0, f
                                                                    }(d, A, c + 12 | 0, c + 8 | 0, o)) break e
                                                            }
                                                            if (u[c + 12 >> 2] != (0 | w) | u[c + 8 >> 2] != (0 | y) && !h) break e;
                                                            if (!f) break r;
                                                            u[f + 8 >> 2] = 0, u[f + 12 >> 2] = 0, u[f + 4 >> 2] = r, u[f >> 2] = e, u[f + 32 >> 2] = m, u[f + 28 >> 2] = g, u[f + 24 >> 2] = p, u[f + 20 >> 2] = I, u[f + 16 >> 2] = i, u[f + 12 >> 2] = d - e;
                                                            break r
                                                        }
                                                    }
                                                    if (f) {
                                                        v = 7;
                                                        break e
                                                    }
                                                    if (v = 7, h) break e
                                                }
                                                o && (u[o >> 2] = u[o >> 2] | 0 != (0 | i)), n && (u[n >> 2] = u[c + 12 >> 2]), v = 0, t && (u[t >> 2] = u[c + 8 >> 2])
                                            }
                                        else v = 7;
                                        return L = c + 16 | 0, v
                                    }

                                    function q(e, r, n, t, o) {
                                        var i, u = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0,
                                            P = 0,
                                            M = 0,
                                            B = 0,
                                            F = 0,
                                            R = 0;
                                        if (L = i = L - 256 | 0, u = (0 | o) / 25 | 0, !(!e | o >>> 0 > 100 | (0 | r) < 1 | (0 | n) < 1) && (l = 1, P = n + -1 | 0, k = r + -1 | 0, !((0 | (m = ((o = (u << 1 | 1) > (0 | r) ? k >> 1 : u) << 1 | 1) > (0 | n) ? P >> 1 : o)) < 1) && (l = 0, I = Xe(1, 0, 4094 + ((o = A(p = r << 1, 2 + (u = m << 1) | 0)) + p | 0) | 0)))) {
                                            for (C = 0 - m | 0, de(v = (h = (A(u |= 1, r) << 1) + I | 0) - p | 0, 0, p), w = de(i, 0, 256), D = o + I | 0, _ = A(u, u), x = 255, g = 255, u = e;;) {
                                                for (l = 0; o = s[l + u | 0], a[o + w | 0] = 1, d = (b = (0 | d) < (0 | o)) ? o : d, M = b ? o : M, g = (b = (0 | g) > (0 | o)) ? o : g, x = b ? o : x, (0 | (l = l + 1 | 0)) != (0 | r););
                                                if (u = t + u | 0, (0 | (y = y + 1 | 0)) == (0 | n)) break
                                            }
                                            for (d = d - g | 0, b = 262144 / (_ >>> 0) | 0, u = p + D | 0, l = -1, g = 0, o = 0; s[o + w | 0] && (g = g + 1 | 0, (0 | l) >= 0 && (d = (0 | (l = o - l | 0)) < (0 | d) ? l : d), l = o), 256 != (0 | (o = o + 1 | 0)););
                                            for (d = (l = d << 2) - (w = A(d, 12) >> 2) | 0, _ = u + 2046 | 0, o = 1; E = (y = o << 1) + _ | 0, u = o, (0 | o) <= (0 | w) || (u = 0, (0 | l) <= (0 | o) || (u = (0 | A(w, l - o | 0)) / (0 | d) | 0)), u = u >>> 2 | 0, f[E >> 1] = u, f[_ - y >> 1] = 0 - u, 1024 != (0 | (o = o + 1 | 0)););
                                            if (f[_ >> 1] = 0, !((0 | g) < 3 | (0 | C) >= (0 | n)))
                                                for (y = -1 ^ m, g = r - m | 0, w = m + 1 | 0, B = m + -1 | 0, F = (p - m | 0) - 2 | 0, R = (k << 1) + h | 0, l = I, u = e;;) {
                                                    if (d = 0, o = 0, !(E = (0 | r) < 1))
                                                        for (; k = (d = s[o + u | 0] + (65535 & d) | 0) + c[(p = o << 1) + v >> 1] | 0, S = p + h | 0, p = l + p | 0, f[S >> 1] = k - c[p >> 1], f[p >> 1] = k, (0 | (o = o + 1 | 0)) != (0 | r););
                                                    if (d = (0 | C) < (0 | P) ? t + u | 0 : u, p = (0 | C) > -1, S = (0 | (k = (r << 1) + l | 0)) == (0 | h), (0 | C) >= (0 | m)) {
                                                        if (o = 0, (0 | m) > -1) {
                                                            for (; f[(o << 1) + D >> 1] = A(b, c[(m - o << 1) + h >> 1] + c[(o + B << 1) + h >> 1] & 65535) >>> 16, v = (0 | o) == (0 | m), o = o + 1 | 0, !v;);
                                                            o = w
                                                        }
                                                        if ((0 | o) < (0 | g)) {
                                                            for (; f[(o << 1) + D >> 1] = A(b, c[(o + m << 1) + h >> 1] - c[(o + y << 1) + h >> 1] & 65535) >>> 16, (0 | g) != (0 | (o = o + 1 | 0)););
                                                            o = g
                                                        }
                                                        if ((0 | o) < (0 | r))
                                                            for (; f[(o << 1) + D >> 1] = A(b, ((c[R >> 1] << 1) - c[(F - o << 1) + h >> 1] | 0) - c[(o + y << 1) + h >> 1] & 65535) >>> 16, (0 | (o = o + 1 | 0)) != (0 | r););
                                                        if (o = 0, !E)
                                                            for (;
                                                                (0 | M) <= (0 | (v = s[0 | (E = e + o | 0)])) | (0 | x) >= (0 | v) || (v = (0 | (v = v + f[(c[(o << 1) + D >> 1] - (v << 2) << 1) + _ >> 1] | 0)) > 0 ? v : 0, a[0 | E] = (0 | v) < 255 ? v : 255), (0 | (o = o + 1 | 0)) != (0 | r););
                                                        e = e + t | 0
                                                    }
                                                    if (u = p ? d : u, v = l, l = S ? I : k, (0 | (C = C + 1 | 0)) == (0 | n)) break
                                                }
                                            j(I), l = 1
                                        }
                                        return L = i + 256 | 0, l
                                    }

                                    function V(e, r) {
                                        var n, t, o, f, d, v, p, m, g, h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0;
                                        u[e + 152 >> 2] = 0, C = 1;
                                        e: {
                                            r: {
                                                if (u[e + 148 >> 2] >= 1) {
                                                    if (!(0 | i[u[2558]](e + 124 | 0))) break r;
                                                    u[e + 140 >> 2] = e + 180, u[e + 136 >> 2] = e, u[e + 132 >> 2] = 18, C = u[e + 2308 >> 2] > 0 ? 3 : 2
                                                }
                                                u[e + 156 >> 2] = C;
                                                break e
                                            }
                                            if (!nr(e, 1, 4941)) return 0;C = u[e + 156 >> 2]
                                        }
                                        t = (n = u[e + 288 >> 2]) << 2, h = u[e + 148 >> 2], o = (0 | (E = u[e + 2308 >> 2])) > 0 ? A(t, (0 | h) < 1 ? 1 : 2) : 0, p = A(f = n << 5, (0 | A((v = C << 4) + s[E + 4863 | 0] | 0, 3)) / 2 | 0), d = 2 + (n << 1) | 0, m = A(A(n, 2 == (0 | h) ? 2 : 1), 800), w = 0, u[e + 2348 >> 2] && (_ = vr(c[e + 50 >> 1], 0, c[e + 48 >> 1], 0), w = P), g = w, h = 0, (k = (b = t) + f | 0) >>> 0 < b >>> 0 && (h = 1), (k = (b = k) + d | 0) >>> 0 < b >>> 0 && (h = h + 1 | 0), (k = (b = k) + o | 0) >>> 0 < b >>> 0 && (h = h + 1 | 0), (k = (b = k) + m | 0) >>> 0 < b >>> 0 && (h = h + 1 | 0), (k = (b = k) + p | 0) >>> 0 < b >>> 0 && (h = h + 1 | 0), h = h + w | 0, w = k = (b = k) + _ | 0, b = h = k >>> 0 < b >>> 0 ? h + 1 | 0 : h, (k = k + 832 | 0) >>> 0 < 832 && (h = h + 1 | 0);
                                        e: if (!(!h & k >>> 0 > 4294967264 | h >>> 0 > 0)) {
                                            y = u[e + 2288 >> 2];
                                            r: {
                                                n: {
                                                    if (h = b, (b = w + 863 | 0) >>> 0 < 863 && (h = h + 1 | 0), w = b, k = b, b = h, !h & k >>> 0 > l[e + 2292 >> 2] | h >>> 0 > 0) {
                                                        if (j(y), u[e + 2292 >> 2] = 0, y = Xe(w, b, 1), u[e + 2288 >> 2] = y, !y) break n;
                                                        u[e + 2292 >> 2] = w, E = u[e + 2308 >> 2]
                                                    }
                                                    u[e + 2244 >> 2] = y,
                                                    u[e + 160 >> 2] = 0,
                                                    h = y + t | 0,
                                                    u[e + 2252 >> 2] = h,
                                                    I = 2 + (h = h + f | 0) | 0,
                                                    u[e + 2256 >> 2] = I,
                                                    h = h + d | 0,
                                                    k = o ? h : 0,
                                                    u[e + 2260 >> 2] = k,
                                                    u[e + 172 >> 2] = k,
                                                    h = h + o | 0,
                                                    (0 | E) < 1 | (0 | (b = u[e + 148 >> 2])) < 1 || (u[e + 172 >> 2] = k + (n << 2)),
                                                    h = h + 31 & -32,
                                                    u[e + 2264 >> 2] = h,
                                                    h = h + 832 | 0,
                                                    u[e + 2304 >> 2] = h,
                                                    u[e + 176 >> 2] = h,
                                                    2 == (0 | b) && (u[e + 176 >> 2] = h + A(n, 800)),
                                                    u[e + 152 >> 2] = 0,
                                                    w = n << 3,
                                                    u[e + 2284 >> 2] = w,
                                                    k = n << 4,
                                                    u[e + 2280 >> 2] = k,
                                                    h = h + m | 0,
                                                    u[e + 2364 >> 2] = _ | g ? h + p | 0 : 0,
                                                    b = s[E + 4863 | 0],
                                                    h = h + A(b, k) | 0,
                                                    u[e + 2268 >> 2] = h,
                                                    h = (b = A(w, b >>> 1 | 0)) + (h + A(k, v) | 0) | 0,
                                                    u[e + 2272 >> 2] = h,
                                                    u[e + 2276 >> 2] = b + (h + (A(w, C) << 3) | 0),
                                                    de(I + -2 | 0, 0, d),
                                                    h = u[e + 2256 >> 2] + -2 | 0,
                                                    a[0 | h] = 0,
                                                    a[h + 1 | 0] = 0,
                                                    u[e + 2296 >> 2] = 0,
                                                    u[e + 2248 >> 2] = 0,
                                                    de(u[e + 2244 >> 2], 0, t);
                                                    break r
                                                }
                                                if (!nr(e, 1, 4971)) break e
                                            }
                                            u[r + 8 >> 2] = 0, u[r + 20 >> 2] = u[e + 2268 >> 2], u[r + 24 >> 2] = u[e + 2272 >> 2], u[r + 28 >> 2] = u[e + 2276 >> 2], u[r + 32 >> 2] = u[e + 2280 >> 2], e = u[e + 2284 >> 2], u[r + 104 >> 2] = 0, u[r + 36 >> 2] = e, u[2545] != u[2673] && (u[2703] = 32, u[2674] = 33, u[2706] = 34, u[2704] = 35, u[2705] = 36, u[2707] = 37, u[2708] = 38, u[2712] = 39, u[2709] = 40, u[2710] = 41, u[2714] = 42, u[2716] = 43, u[2717] = 44, u[2718] = 45, u[2719] = 46, u[2713] = 47, u[2711] = 48, u[2715] = 49, u[2690] = 50, u[2688] = 51, u[2686] = 52, u[2685] = 53, u[2684] = 54, u[2693] = 55, u[2692] = 56, u[2691] = 57, u[2689] = 58, u[2687] = 59, u[2682] = 60, u[2681] = 61, u[2680] = 62, u[2679] = 63, u[2678] = 64, u[2677] = 65, u[2676] = 66, u[2702] = 67, u[2701] = 68, u[2700] = 69, u[2699] = 70, u[2698] = 71, u[2697] = 72, u[2696] = 73, u[2720] = 74, u[2545] = u[2673]), I = 1
                                        }
                                        return I
                                    }

                                    function H(e, r, n, t) {
                                        var o, i = 0,
                                            a = 0,
                                            f = 0,
                                            c = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0;
                                        L = o = L - 16 | 0, d = 2;
                                        e: if (!(!t | (0 | r) < 1 | (0 | e) < 1)) {
                                            if (n) {
                                                if (u[n + 8 >> 2]) {
                                                    if ((0 | (i = u[n + 24 >> 2])) < 1) break e;
                                                    if ((0 | (a = u[n + 20 >> 2])) < 1) break e;
                                                    if (((f = u[n + 16 >> 2]) | (c = u[n + 12 >> 2])) < 0 | ((-2 & c) + a | 0) > (0 | e) | ((-2 & f) + i | 0) > (0 | r)) break e
                                                } else i = r, a = e;
                                                if (u[n + 28 >> 2]) {
                                                    if (u[o + 12 >> 2] = u[n + 32 >> 2], u[o + 8 >> 2] = u[n + 36 >> 2], !Se(a, i, o + 12 | 0, o + 8 | 0)) break e;
                                                    r = u[o + 8 >> 2], e = u[o + 12 >> 2]
                                                } else r = i, e = a
                                            }
                                            if (u[t + 8 >> 2] = r, u[t + 4 >> 2] = e, !((0 | r) < 1 | (0 | e) < 1 || (c = u[t >> 2]) >>> 0 > 12)) {
                                                if (!(u[t + 80 >> 2] | u[t + 12 >> 2] > 0)) {
                                                    if (a = e, vr(e, 0, i = s[c + 1157 | 0], 0), P) break e;
                                                    if (f = r, i = vr(r, 0, i = g = A(e, i), i >> 31), v = P, d = 1, c >>> 0 < 11 ? (r = 0, f = 0, e = 0) : (a = vr(a, 0, f, 0), b = (f = 12 == (0 | c)) ? a : 0, p = f ? P : 0, r = vr(a = h = (e + 1 | 0) / 2 | 0, a >> 31, r = (r + 1 | 0) / 2 | 0, r >> 31), f = f ? e : 0, e = P), m = r, p = p + v | 0, (v = i + b | 0) >>> 0 < i >>> 0 && (p = p + 1 | 0), e = (e = e << 1 | r >>> 31) + p | 0, !(e = Xe(a = (m <<= 1) + v | 0, a >>> 0 < v >>> 0 ? e + 1 | 0 : e, 1))) break e;
                                                    u[t + 16 >> 2] = e, u[t + 80 >> 2] = e, c >>> 0 >= 11 ? (u[t + 48 >> 2] = i, u[t + 32 >> 2] = g, u[t + 52 >> 2] = r, u[t + 36 >> 2] = h, u[t + 56 >> 2] = r, u[t + 40 >> 2] = h, e = e + i | 0, u[t + 20 >> 2] = e, u[t + 24 >> 2] = e + r, 12 == (0 | c) && (u[t + 28 >> 2] = e + m), u[t + 44 >> 2] = f, u[t + 60 >> 2] = b) : (u[t + 24 >> 2] = i, u[t + 20 >> 2] = g)
                                                }(d = $(t)) | !n || (u[n + 48 >> 2] ? (e = u[t + 8 >> 2] + -1 | 0, l[t >> 2] <= 10 ? (d = 0, r = u[(n = t + 20 | 0) >> 2], u[n >> 2] = 0 - r, u[t + 16 >> 2] = u[t + 16 >> 2] + A(e, r)) : (d = 0, r = u[(n = t + 32 | 0) >> 2], u[n >> 2] = 0 - r, n = u[(i = t + 36 | 0) >> 2], u[i >> 2] = 0 - n, i = u[(a = t + 40 | 0) >> 2], u[a >> 2] = 0 - i, u[t + 16 >> 2] = u[t + 16 >> 2] + A(e, r), a = r = t + 20 | 0, f = u[r >> 2], r = e >> 1, u[a >> 2] = f + A(r, n), u[(n = t + 24 | 0) >> 2] = u[n >> 2] + A(r, i), (n = u[t + 28 >> 2]) && (r = u[(i = t + 44 | 0) >> 2], u[i >> 2] = 0 - r, u[t + 28 >> 2] = n + A(e, r)))) : d = 0)
                                            }
                                        }
                                        return L = o + 16 | 0, d
                                    }

                                    function J(e, r) {
                                        var n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0;
                                        for (c = L + -64 | 0, l = (o = f[e + 16 >> 1]) + (i = f[e >> 1]) | 0, n = f[e + 8 >> 1], t = f[e + 24 >> 1], d = ((A(n, 20091) >> 16) + n | 0) + (A(t, 35468) >> 16) | 0, u[c + 12 >> 2] = l - d, o = i - o | 0, n = ((A(n, 35468) >> 16) - t | 0) - (A(t, 20091) >> 16) | 0, u[c + 8 >> 2] = o - n, u[c + 4 >> 2] = n + o, u[c >> 2] = l + d, l = (o = f[e + 18 >> 1]) + (i = f[e + 2 >> 1]) | 0, n = f[e + 10 >> 1], t = f[e + 26 >> 1], d = ((A(n, 20091) >> 16) + n | 0) + (A(t, 35468) >> 16) | 0, u[c + 28 >> 2] = l - d, o = i - o | 0, n = ((A(n, 35468) >> 16) - t | 0) - (A(t, 20091) >> 16) | 0, u[c + 24 >> 2] = o - n, u[c + 20 >> 2] = n + o, n = l + d | 0, u[c + 16 >> 2] = n, d = (i = f[e + 20 >> 1]) + (l = f[e + 4 >> 1]) | 0, t = f[e + 12 >> 1], o = f[e + 28 >> 1], v = ((A(t, 20091) >> 16) + t | 0) + (A(o, 35468) >> 16) | 0, u[c + 44 >> 2] = d - v, i = l - i | 0, t = ((A(t, 35468) >> 16) - o | 0) - (A(o, 20091) >> 16) | 0, u[c + 40 >> 2] = i - t, u[c + 36 >> 2] = t + i, u[c + 32 >> 2] = d + v, l = (o = f[e + 22 >> 1]) + (i = f[e + 6 >> 1]) | 0, t = f[e + 14 >> 1], e = f[e + 30 >> 1], d = ((A(t, 20091) >> 16) + t | 0) + (A(e, 35468) >> 16) | 0, u[c + 60 >> 2] = l - d, o = i - o | 0, e = ((A(t, 35468) >> 16) - e | 0) - (A(e, 20091) >> 16) | 0, u[c + 56 >> 2] = o - e, u[c + 52 >> 2] = e + o, u[c + 48 >> 2] = l + d, e = c, c = 0; t = u[e + 48 >> 2], o = ((A(n, 20091) >> 16) + n | 0) + (A(t, 35468) >> 16) | 0, d = (i = u[e >> 2] + 4 | 0) + (l = u[e + 32 >> 2]) | 0, v = (0 | (v = s[0 | r] + (o + d >> 3) | 0)) > 0 ? v : 0, a[0 | r] = (0 | v) < 255 ? v : 255, n = ((A(n, 35468) >> 16) - t | 0) - (A(t, 20091) >> 16) | 0, t = i - l | 0, i = (0 | (i = s[r + 1 | 0] + (n + t >> 3) | 0)) > 0 ? i : 0, a[r + 1 | 0] = (0 | i) < 255 ? i : 255, n = (0 | (n = s[r + 2 | 0] + (t - n >> 3) | 0)) > 0 ? n : 0, a[r + 2 | 0] = (0 | n) < 255 ? n : 255, n = (0 | (n = s[r + 3 | 0] + (d - o >> 3) | 0)) > 0 ? n : 0, a[r + 3 | 0] = (0 | n) < 255 ? n : 255, 4 != (0 | (c = c + 1 | 0));) r = r + 32 | 0, n = u[e + 20 >> 2], e = e + 4 | 0
                                    }

                                    function Z(e, r) {
                                        var n = 0,
                                            t = 0,
                                            o = 0,
                                            f = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            A = 0,
                                            v = 0;
                                        if ((n = u[r + 48 >> 2]) && !(0 | i[0 | n](r))) return nr(e, 6, 4844), u[e >> 2];
                                        e: {
                                            r: {
                                                n: {
                                                    if (u[r + 68 >> 2]) u[e + 2308 >> 2] = 0,
                                                    n = 0;
                                                    else {
                                                        if (n = 2, f = u[e + 2308 >> 2], t = s[f + 4863 | 0], 2 == (0 | f)) break n;
                                                        n = f
                                                    }
                                                    if (f = u[r + 76 >> 2] - t | 0, u[e + 296 >> 2] = f >> 4, o = u[r + 84 >> 2] - t | 0, u[e + 300 >> 2] = o >> 4, (0 | f) <= -1 && (u[e + 296 >> 2] = 0), (0 | o) > -1) break e;f = e + 300 | 0;
                                                    break r
                                                }
                                                u[e + 296 >> 2] = 0,
                                                f = e + 300 | 0
                                            }
                                            u[f >> 2] = 0
                                        }
                                        if (f = (t = t + 15 | 0) + u[r + 88 >> 2] >> 4, u[e + 308 >> 2] = f, o = u[e + 288 >> 2], r = t + u[r + 80 >> 2] >> 4, u[e + 304 >> 2] = (0 | r) > (0 | o) ? o : r, (0 | f) > (0 | (r = u[e + 292 >> 2])) && (u[e + 308 >> 2] = r), (0 | n) >= 1)
                                            for (A = u[e + 68 >> 2], v = u[e + 104 >> 2], f = 0;;) {
                                                r = (f << 3) + e | 0;
                                                e: if (v) {
                                                    if (t = n = a[120 + (e + f | 0) | 0], u[e + 112 >> 2]) break e;
                                                    t = n + u[e + 60 >> 2] | 0
                                                } else t = u[e + 60 >> 2];
                                                if (n = t, c = r + 2312 | 0, (0 | (n = A ? u[e + 72 >> 2] + n | 0 : n)) >= 1 ? (o = (0 | n) < 63 ? n : 63, n = (0 | n) > 0 ? o : 0, d = r + 2313 | 0, (0 | (l = u[e + 64 >> 2])) >= 1 && (o = 9 - l | 0, o = (0 | (l = n >>> ((0 | l) > 4 ? 2 : 1) | 0)) > (0 | o) ? o : l), o = (0 | o) > 1 ? o : 1, a[0 | d] = o, a[0 | c] = o + (n << 1), a[r + 2315 | 0] = (0 | n) > 39 ? 2 : (0 | n) > 14) : a[0 | c] = 0, a[r + 2314 | 0] = 0, o = r + 2316 | 0, (c = (0 | (t = A ? u[e + 88 >> 2] + (u[e + 72 >> 2] + t | 0) | 0 : t)) > 0) ? (n = (0 | t) < 63 ? t : 63, t = c ? n : 0, d = r + 2317 | 0, (0 | (c = u[e + 64 >> 2])) >= 1 && (n = 9 - c | 0, n = (0 | (c = t >>> ((0 | c) > 4 ? 2 : 1) | 0)) > (0 | n) ? n : c), n = (0 | n) > 1 ? n : 1, a[0 | d] = n, a[0 | o] = n + (t << 1), a[r + 2319 | 0] = (0 | t) > 39 ? 2 : (0 | t) > 14) : a[0 | o] = 0, a[r + 2318 | 0] = 1, 4 == (0 | (f = f + 1 | 0))) break
                                            }
                                        return 0
                                    }

                                    function K(e, r) {
                                        var n, t = 0,
                                            o = 0,
                                            i = 0,
                                            f = 0,
                                            c = 0,
                                            d = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0;
                                        for (n = r + 904 | 0;;) {
                                            for (d = 0;;) {
                                                for (p = 0;;) {
                                                    for (f = 0; h = A(p, 11), b = A(d, 33), g = A(m, 264), c = s[(h + (b + (g + 1392 | 0) | 0) | 0) + f | 0], w = u[e + 4 >> 2], (0 | (t = u[e + 8 >> 2])) > -1 || ((o = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (i = s[0 | o] | s[o + 1 | 0] << 8 | s[o + 2 | 0] << 16 | s[o + 3 | 0] << 24, u[e + 12 >> 2] = o + 3, t = t + 24 | 0, u[e + 8 >> 2] = t, u[e >> 2] = u[e >> 2] << 24 | (i >>> 8 & 65280 | i << 8 & 16711680 | i << 24) >>> 8) : (Me(e), t = u[e + 8 >> 2])), k = e, y = t, (i = (o = u[e >> 2]) >>> t >>> 0 <= (c = A(c, w) >>> 8 | 0) >>> 0) ? t = c + 1 | 0 : (u[e >> 2] = o + ((-1 ^ c) << t), t = w - c | 0), o = 24 ^ v(t), u[k + 8 >> 2] = y - o, u[e + 4 >> 2] = (t << o) - 1, k = (((r + g | 0) + b | 0) + h | 0) + f | 0, t = i ? s[(((g + 2448 | 0) + b | 0) + h | 0) + f | 0] : le(e, 8), a[k + 907 | 0] = t, 11 != (0 | (f = f + 1 | 0)););
                                                    if (3 == (0 | (p = p + 1 | 0))) break
                                                }
                                                if (8 == (0 | (d = d + 1 | 0))) break
                                            }
                                            if (t = A(m, 68) + n | 0, f = 3 + (i = g + n | 0) | 0, u[t + 1124 >> 2] = f, u[t + 1120 >> 2] = i + 234, o = i + 201 | 0, u[t + 1116 >> 2] = o, u[t + 1112 >> 2] = o, u[t + 1108 >> 2] = o, u[t + 1104 >> 2] = o, u[t + 1100 >> 2] = o, u[t + 1096 >> 2] = o, u[t + 1092 >> 2] = o, u[t + 1088 >> 2] = o, u[t + 1084 >> 2] = i + 168, u[t + 1080 >> 2] = i + 135, u[t + 1076 >> 2] = o, u[t + 1072 >> 2] = i + 102, u[t + 1068 >> 2] = i + 69, u[t + 1064 >> 2] = i + 36, u[t + 1060 >> 2] = f, 4 == (0 | (m = m + 1 | 0))) break
                                        }
                                        t = le(e, 1), u[r + 2236 >> 2] = t, t && (C = r, E = le(e, 8), a[C + 2240 | 0] = E)
                                    }

                                    function $(e) {
                                        var r = 0,
                                            n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            c = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0;
                                        m = 2;
                                        e: if (!((c = u[e >> 2]) >>> 0 > 12)) {
                                            a = u[e + 8 >> 2], o = u[e + 4 >> 2];
                                            r: {
                                                n: {
                                                    if (c >>> 0 >= 11) {
                                                        if (w = (0 | (g = (t = (n = u[e + 40 >> 2]) >> 31) ^ n + t)) >= (0 | (n = (o + 1 | 0) / 2 | 0)), y = (0 | (f = (r = (f = u[e + 36 >> 2]) >> 31) ^ r + f)) >= (0 | n), C = (0 | (r = (i = (v = u[e + 32 >> 2]) >> 31) ^ i + v)) >= (0 | o), t = o, v = i = a + -1 | 0, d = vr(i, h = i >> 31, r, 0), r = (b = t >> 31) + P | 0, p = !(r = (i = t + d | 0) >>> 0 < d >>> 0 ? r + 1 | 0 : r) & i >>> 0 <= l[e + 48 >> 2] | r >>> 0 < 0, r = n, f = vr(i = a = ((a + 1 | 0) / 2 | 0) - 1 | 0, d = i >> 31, f, 0), n = (k = r >> 31) + P | 0, p &= !(n = (a = r + f | 0) >>> 0 < f >>> 0 ? n + 1 | 0 : n) & a >>> 0 <= l[e + 52 >> 2] | n >>> 0 < 0, a = vr(g, 0, i, d) + r | 0, n = k + P | 0, r = w & y & C & p & (!(n = a >>> 0 < r >>> 0 ? n + 1 | 0 : n) & (r = a) >>> 0 <= l[e + 56 >> 2] | n >>> 0 < 0) & 0 != u[e + 16 >> 2] & 0 != u[e + 20 >> 2] & 0 != u[e + 24 >> 2], 12 != (0 | c)) break n;
                                                        if (!u[e + 28 >> 2]) break e;
                                                        if (n = (c = u[e + 44 >> 2]) >> 31, !(r & (0 | (n ^= n + c)) >= (0 | o))) break e;
                                                        if (o = vr(n, 0, v, h) + t | 0, r = b + P | 0, !(r = o >>> 0 < t >>> 0 ? r + 1 | 0 : r) & (t = o) >>> 0 <= l[e + 60 >> 2] | r >>> 0 < 0) break r;
                                                        break e
                                                    }
                                                    if (!u[e + 16 >> 2]) break e;
                                                    if ((0 | (r = (t = (r = u[e + 20 >> 2]) >> 31) ^ r + t)) < (0 | (t = A(s[c + 1157 | 0], o)))) break e;
                                                    if (r = (o = vr(o = a + -1 | 0, o >> 31, r, 0)) + t | 0, t = P + (t >> 31) | 0, !(t = r >>> 0 < o >>> 0 ? t + 1 | 0 : t) & r >>> 0 <= l[e + 24 >> 2] | t >>> 0 < 0) break r;
                                                    break e
                                                }
                                                if (!r) break e
                                            }
                                            m = 0
                                        }
                                        return m
                                    }

                                    function ee(e, r, n, t) {
                                        var o, i, a, f = 0,
                                            l = 0,
                                            d = 0,
                                            A = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0;
                                        L = a = L - 592 | 0, l = ve(o = r + 24 | 0, 1), i = de(n, 0, e << 2);
                                        e: {
                                            r: {
                                                n: {
                                                    t: if (l) {
                                                        if (n = ve(o, 1), g = (ve(o, ve(o, 1) ? 8 : 1) << 2) + i | 0, h = 1, u[g >> 2] = h, 1 != (0 | n)) break t;
                                                        g = (ve(o, 8) << 2) + i | 0, h = 1, u[g >> 2] = h
                                                    } else {
                                                        if (v = de(a, 0, 76), (0 | (l = ve(o, 4) + 4 | 0)) > 19) break r;
                                                        if (n = 0, (0 | l) > 0)
                                                            for (; g = (s[n + 1232 | 0] << 2) + v | 0, h = ve(o, 3), u[g >> 2] = h, (0 | l) != (0 | (n = n + 1 | 0)););
                                                        if (!Re(v + 80 | 0, 7, v, 19)) break n;
                                                        if (l = e, ve(o, 1) && (0 | (l = ve(o, 2 + (ve(o, 3) << 1) | 0) + 2 | 0)) > (0 | e)) break n;
                                                        if (!((0 | e) < 1))
                                                            for (p = 8, n = 0;;) {
                                                                if (!l) break t;
                                                                if ((0 | (f = u[r + 44 >> 2])) >= 32 && (ye(o), f = u[r + 44 >> 2]), m = f, d = u[r + 28 >> 2], f = 31 & (A = 63 & f), f = (v + 80 | 0) + ((127 & (32 <= (63 & A) >>> 0 ? d >>> f | 0 : ((1 << f) - 1 & d) << 32 - f | u[r + 24 >> 2] >>> f)) << 2) | 0, u[r + 44 >> 2] = m + s[0 | f], (d = c[f + 2 >> 1]) >>> 0 <= 15) u[(n << 2) + i >> 2] = d, p = d || p, n = n + 1 | 0;
                                                                else {
                                                                    if ((0 | (f = (A = ve(o, s[1251 + (f = d + -16 | 0) | 0]) + s[f + 1254 | 0] | 0) + n | 0)) > (0 | e)) break n;
                                                                    if (!((0 | A) < 1)) {
                                                                        for (d = 16 == (0 | d) ? p : 0; u[(n << 2) + i >> 2] = d, (0 | f) != (0 | (n = n + 1 | 0)););
                                                                        n = f
                                                                    }
                                                                }
                                                                if (l = l + -1 | 0, !((0 | n) < (0 | e))) break
                                                            }
                                                    }if (u[r + 48 >> 2]) break r;
                                                    if (n = Re(t, 8, i, e)) break e;
                                                    break r
                                                }
                                                u[r >> 2] = 3
                                            }
                                            u[r >> 2] = 3,
                                            n = 0
                                        }
                                        return L = a + 592 | 0, n
                                    }

                                    function re(e, r, n) {
                                        e |= 0, r |= 0;
                                        var t, o = 0,
                                            i = 0;
                                        if ((n |= 0) >>> 0 >= 512) return D(0 | e, 0 | r, 0 | n), 0 | e;
                                        t = e + n | 0;
                                        e: if (3 & (e ^ r))
                                            if (t >>> 0 < 4) n = e;
                                            else
                                        if ((o = t + -4 | 0) >>> 0 < e >>> 0) n = e;
                                        else
                                            for (n = e; a[0 | n] = s[0 | r], a[n + 1 | 0] = s[r + 1 | 0], a[n + 2 | 0] = s[r + 2 | 0], a[n + 3 | 0] = s[r + 3 | 0], r = r + 4 | 0, (n = n + 4 | 0) >>> 0 <= o >>> 0;);
                                        else {
                                            r: if ((0 | n) < 1) n = e;
                                                elseif (3 & e)
                                                for (n = e;;) {
                                                    if (a[0 | n] = s[0 | r], r = r + 1 | 0, (n = n + 1 | 0) >>> 0 >= t >>> 0) break r;
                                                    if (!(3 & n)) break
                                                } else n = e;
                                            if (!((o = -4 & t) >>> 0 < 64 || n >>> 0 > (i = o + -64 | 0) >>> 0))
                                                for (; u[n >> 2] = u[r >> 2], u[n + 4 >> 2] = u[r + 4 >> 2], u[n + 8 >> 2] = u[r + 8 >> 2], u[n + 12 >> 2] = u[r + 12 >> 2], u[n + 16 >> 2] = u[r + 16 >> 2], u[n + 20 >> 2] = u[r + 20 >> 2], u[n + 24 >> 2] = u[r + 24 >> 2], u[n + 28 >> 2] = u[r + 28 >> 2], u[n + 32 >> 2] = u[r + 32 >> 2], u[n + 36 >> 2] = u[r + 36 >> 2], u[n + 40 >> 2] = u[r + 40 >> 2], u[n + 44 >> 2] = u[r + 44 >> 2], u[n + 48 >> 2] = u[r + 48 >> 2], u[n + 52 >> 2] = u[r + 52 >> 2], u[n + 56 >> 2] = u[r + 56 >> 2], u[n + 60 >> 2] = u[r + 60 >> 2], r = r - -64 | 0, (n = n - -64 | 0) >>> 0 <= i >>> 0;);
                                            if (n >>> 0 >= o >>> 0) break e;
                                            for (; u[n >> 2] = u[r >> 2], r = r + 4 | 0, (n = n + 4 | 0) >>> 0 < o >>> 0;);
                                        }
                                        if (n >>> 0 < t >>> 0)
                                            for (; a[0 | n] = s[0 | r], r = r + 1 | 0, (0 | t) != (0 | (n = n + 1 | 0)););
                                        return 0 | e
                                    }

                                    function ne(e, r) {
                                        var n = 0,
                                            t = 0,
                                            o = 0;
                                        e: if (e) {
                                            if (!r) {
                                                if (u[e >> 2]) break e;
                                                return u[e >> 2] = 2, u[e + 4 >> 2] = 0, u[e + 8 >> 2] = 5281, 0
                                            }
                                            if (u[e + 4 >> 2] || U(e, r)) {
                                                r: {
                                                    if (!Z(e, r)) {
                                                        n: if (V(e, r)) {
                                                            u[e + 2300 >> 2] = 0;
                                                            t: {
                                                                if (u[e + 308 >> 2] >= 1)
                                                                    for (o = e + 12 | 0;;) {
                                                                        if (t = u[e + 312 >> 2], !F(o, e)) break t;
                                                                        if (u[e + 2296 >> 2] < u[e + 288 >> 2])
                                                                            for (n = 316 + (A(n & t, 28) + e | 0) | 0;;) {
                                                                                if (!Q(e, n)) {
                                                                                    if (n = 0, u[e >> 2]) break n;
                                                                                    u[e >> 2] = 7, u[e + 4 >> 2] = 0, u[e + 8 >> 2] = 5412;
                                                                                    break n
                                                                                }
                                                                                if (t = u[e + 2296 >> 2] + 1 | 0, u[e + 2296 >> 2] = t, !((0 | t) < u[e + 288 >> 2])) break
                                                                            }
                                                                        if (n = u[e + 2256 >> 2] + -2 | 0, a[0 | n] = 0, a[n + 1 | 0] = 0, u[e + 2296 >> 2] = 0, u[e + 2248 >> 2] = 0, !me(e, r)) {
                                                                            if (n = 0, u[e >> 2]) break n;
                                                                            u[e >> 2] = 6, u[e + 4 >> 2] = 0, u[e + 8 >> 2] = 5447;
                                                                            break n
                                                                        }
                                                                        if (n = u[e + 2300 >> 2] + 1 | 0, u[e + 2300 >> 2] = n, !((0 | n) < u[e + 308 >> 2])) break
                                                                    }
                                                                if (!(u[e + 148 >> 2] < 1 || 0 | i[u[2559]](e + 124 | 0))) {
                                                                    n = 0;
                                                                    break n
                                                                }
                                                                n = 1;
                                                                break n
                                                            }
                                                            n = 0, u[e >> 2] || (u[e >> 2] = 7, u[e + 4 >> 2] = 0, u[e + 8 >> 2] = 5371)
                                                        }if (function(e, r) {
                                                                var n = 0;
                                                                return n = 1, u[e + 148 >> 2] >= 1 && (n = 0 | i[u[2559]](e + 124 | 0)), (e = u[r + 52 >> 2]) && i[0 | e](r), n
                                                            }(e, r) & n) break r
                                                    }
                                                    return i[u[2562]](e + 124 | 0),
                                                    We(e),
                                                    j(u[e + 2288 >> 2]),
                                                    u[e + 2288 >> 2] = 0,
                                                    u[e + 2292 >> 2] = 0,
                                                    u[e + 12 >> 2] = 0,
                                                    u[e + 16 >> 2] = 0,
                                                    u[e + 20 >> 2] = 0,
                                                    u[e + 24 >> 2] = 0,
                                                    u[e + 28 >> 2] = 0,
                                                    u[e + 32 >> 2] = 0,
                                                    u[e + 36 >> 2] = 0,
                                                    u[e + 4 >> 2] = 0,
                                                    0
                                                }
                                                u[e + 4 >> 2] = 0,
                                                n = 1
                                            }
                                        }
                                        return n
                                    }

                                    function te(e) {
                                        var r, n, t, o, i, f, l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0;
                                        for (n = le(l = e + 12 | 0, 7), le(l, 1) && (g = sr(l, 4)), le(l, 1) && (h = sr(l, 4)), le(l, 1) && (b = sr(l, 4)), le(l, 1) && (k = sr(l, 4)), le(l, 1) && (w = sr(l, 4)), f = u[e + 104 >> 2], t = 24 + (r = e + 776 | 0) | 0, o = r + 16 | 0, i = r + 8 | 0;;) {
                                            e: {
                                                if (f) l = a[116 + (e + m | 0) | 0] + (u[e + 112 >> 2] ? 0 : n) | 0;
                                                else if (l = n, m) {
                                                    d = u[t + 4 >> 2], u[800 + (l = (m << 5) + e | 0) >> 2] = u[t >> 2], u[l + 804 >> 2] = d, d = u[o + 4 >> 2], u[l + 792 >> 2] = u[o >> 2], u[l + 796 >> 2] = d, d = u[i + 4 >> 2], u[l + 784 >> 2] = u[i >> 2], u[l + 788 >> 2] = d, d = u[r + 4 >> 2], u[l + 776 >> 2] = u[r >> 2], u[l + 780 >> 2] = d;
                                                    break e
                                                }
                                                p = l + w | 0,
                                                u[800 + (d = (m << 5) + e | 0) >> 2] = p,
                                                v = (0 | (v = l + k | 0)) < 117 ? v : 117,
                                                u[d + 792 >> 2] = s[((0 | v) > 0 ? v : 0) + 4448 | 0],
                                                v = (0 | l) < 127 ? l : 127,
                                                u[d + 780 >> 2] = c[4576 + (((0 | v) > 0 ? v : 0) << 1) >> 1],
                                                v = (0 | (v = l + g | 0)) < 127 ? v : 127,
                                                u[d + 776 >> 2] = s[((0 | v) > 0 ? v : 0) + 4448 | 0],
                                                p = (0 | p) < 127 ? p : 127,
                                                u[d + 796 >> 2] = c[4576 + (((0 | p) > 0 ? p : 0) << 1) >> 1],
                                                p = (0 | (p = l + h | 0)) < 127 ? p : 127,
                                                u[d + 784 >> 2] = s[((0 | p) > 0 ? p : 0) + 4448 | 0] << 1,
                                                l = A(c[4576 + (((0 | (l = (0 | (l = l + b | 0)) < 127 ? l : 127)) > 0 ? l : 0) << 1) >> 1], 101581),
                                                u[d + 788 >> 2] = l >>> 0 < 524288 ? 8 : l >>> 16 | 0
                                            }
                                            if (4 == (0 | (m = m + 1 | 0))) break
                                        }
                                    }

                                    function oe(e, r, n, t, o, i, f) {
                                        var c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0,
                                            L = 0,
                                            P = 0,
                                            M = 0,
                                            B = 0,
                                            F = 0;
                                        if ((0 | t) >= 1)
                                            for (S = o << 1 | 1, L = A(r, 3), P = 0 - r | 0, M = A(r, -3), B = 0 - (r << 2) | 0, F = 0 - (w = r << 1) | 0, y = u[2547], d = u[2548], C = u[2546], v = u[2549]; o = t, c = (l = s[0 | (E = e + F | 0)]) - (h = s[0 | (I = e + r | 0)]) | 0, t = s[0 | (b = e + P | 0)], g = s[0 | e], (s[c + v | 0] + (s[v + (t - g | 0) | 0] << 2) | 0) > (0 | S) || (m = s[0 | (_ = e + M | 0)], s[v + (s[e + B | 0] - m | 0) | 0] > (0 | i) | s[v + (m - l | 0) | 0] > (0 | i) || (0 | (p = s[v + (l - t | 0) | 0])) > (0 | i) || (k = s[0 | (D = e + w | 0)], s[v + (s[e + L | 0] - k | 0) | 0] > (0 | i) | s[v + (k - h | 0) | 0] > (0 | i) || (0 | (x = s[v + (h - g | 0) | 0])) > (0 | i) || (c = a[c + C | 0] + A(g - t | 0, 3) | 0, (0 | x) <= (0 | f) && (0 | p) <= (0 | f) ? (p = m, c = a[c + C | 0], m = A(c, 9) + 63 >> 7, a[0 | _] = s[(p + m | 0) + d | 0], p = l, l = A(c, 18) + 63 >> 7, a[0 | E] = s[(p + l | 0) + d | 0], p = t, t = A(c, 27) + 63 >> 7, a[0 | b] = s[(p + t | 0) + d | 0], a[0 | e] = s[(g - t | 0) + d | 0], a[0 | I] = s[(h - l | 0) + d | 0], a[0 | D] = s[(k - m | 0) + d | 0]) : (l = a[(c + 4 >> 3) + y | 0], a[0 | b] = s[(a[(c + 3 >> 3) + y | 0] + t | 0) + d | 0], a[0 | e] = s[(g - l | 0) + d | 0])))), t = o + -1 | 0, e = e + n | 0, (0 | o) > 1;);
                                    }

                                    function ie(e, r, n, t, o, i, f) {
                                        var c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0,
                                            L = 0,
                                            P = 0;
                                        if ((0 | t) >= 1)
                                            for (I = o << 1 | 1, _ = A(r, 3), D = 0 - r | 0, x = A(r, -3), S = 0 - (r << 2) | 0, L = 0 - (w = r << 1) | 0, P = u[2546], v = u[2548], g = u[2547], d = u[2549]; o = t, h = (l = s[0 | (y = e + L | 0)]) - (p = s[0 | (C = e + r | 0)]) | 0, t = s[0 | (k = e + D | 0)], m = s[0 | e], (s[h + d | 0] + (s[d + (t - m | 0) | 0] << 2) | 0) > (0 | I) || (c = s[e + x | 0], s[d + (s[e + S | 0] - c | 0) | 0] > (0 | i) | s[d + (c - l | 0) | 0] > (0 | i) || (0 | (b = s[d + (l - t | 0) | 0])) > (0 | i) || (c = s[e + w | 0], s[d + (s[e + _ | 0] - c | 0) | 0] > (0 | i) | s[d + (c - p | 0) | 0] > (0 | i) || (0 | (E = s[d + (p - m | 0) | 0])) > (0 | i) || (c = A(m - t | 0, 3), (0 | E) <= (0 | f) && (0 | b) <= (0 | f) ? (h = a[(c + 3 >> 3) + g | 0], b = l, c = (l = a[(c + 4 >> 3) + g | 0]) + 1 >> 1, a[0 | y] = s[(b + c | 0) + v | 0], a[0 | k] = s[(t + h | 0) + v | 0], a[0 | e] = s[(m - l | 0) + v | 0], a[0 | C] = s[(p - c | 0) + v | 0]) : (l = a[h + P | 0] + c | 0, p = a[(l + 4 >> 3) + g | 0], a[0 | k] = s[(a[(l + 3 >> 3) + g | 0] + t | 0) + v | 0], a[0 | e] = s[(m - p | 0) + v | 0])))), t = o + -1 | 0, e = e + n | 0, (0 | o) > 1;);
                                    }

                                    function ae(e, r, n, t) {
                                        var o = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            A = 0,
                                            v = 0;
                                        e: {
                                            r: switch (0 | n) {
                                                case 0:
                                                    return void i[u[2734]](e, r, t);
                                                case 1:
                                                    return void i[u[2735]](e, r, t);
                                                case 7:
                                                    return i[u[2735]](e, r, t), void i[u[2664]](t, 0, r, 1, 0);
                                                case 2:
                                                    return void i[u[2736]](e, r, t);
                                                case 3:
                                                    return void re(t, e, r << 2);
                                                case 8:
                                                    return c = re(t, e, r << 2), l = 0, d = r, A = 1, v = 0, s = u[2664], void i[s](0 | c, 0 | l, 0 | d, 0 | A, 0 | v);
                                                case 4:
                                                    if ((0 | r) < 1) break e;
                                                    for (n = (r << 2) + e | 0; r = (r = u[e >> 2]) << 24 | r << 8 & 16711680 | r >>> 8 & 65280 | r >>> 24, a[0 | t] = r, a[t + 1 | 0] = r >>> 8, a[t + 2 | 0] = r >>> 16, a[t + 3 | 0] = r >>> 24, t = t + 4 | 0, (e = e + 4 | 0) >>> 0 < n >>> 0;);
                                                    break e;
                                                case 9:
                                                    if ((0 | r) >= 1)
                                                        for (f = (r << 2) + e | 0, n = t; o = (o = u[e >> 2]) << 24 | o << 8 & 16711680 | o >>> 8 & 65280 | o >>> 24, a[0 | n] = o, a[n + 1 | 0] = o >>> 8, a[n + 2 | 0] = o >>> 16, a[n + 3 | 0] = o >>> 24, n = n + 4 | 0, (e = e + 4 | 0) >>> 0 < f >>> 0;);
                                                    return void i[u[2664]](t, 1, r, 1, 0);
                                                case 5:
                                                    return void i[u[2737]](e, r, t);
                                                case 10:
                                                    return i[u[2737]](e, r, t), void i[u[2665]](t, r, 1, 0);
                                                case 6:
                                                    break r;
                                                default:
                                                    break e
                                            }
                                            i[u[2738]](e, r, t)
                                        }
                                    }

                                    function fe(e, r, n) {
                                        var t, o, i;
                                        L = t = L - 160 | 0, u[t + 16 >> 2] = 1, u[t + 12 >> 2] = r, u[t + 8 >> 2] = e, u[t + 156 >> 2] = 0, o = t, i = Y(e, r, 0, 0, 0, t + 156 | 0, 0, t + 8 | 0), u[o + 48 >> 2] = i, !u[t + 156 >> 2] | (7 != u[t + 48 >> 2] ? u[t + 48 >> 2] : 0) || (u[t + 48 >> 2] = 4);
                                        e: if (!(e = u[t + 48 >> 2])) {
                                            if (hr(t + 48 | 0), e = u[t + 20 >> 2], u[t + 112 >> 2] = e + u[t + 8 >> 2], u[t + 108 >> 2] = u[t + 12 >> 2] - e, or(n, t + 48 | 0), u[t + 40 >> 2]) {
                                                if (e = 0, (r = Qe(1, 0, 272)) && (u[r >> 2] = 0, u[r + 4 >> 2] = 2, ue(), e = r), !(r = e)) {
                                                    e = 1;
                                                    break e
                                                }
                                                r: {
                                                    if (function(e, r) {
                                                            var n = 0,
                                                                t = 0,
                                                                o = 0;
                                                            n = 0;
                                                            n: if (e) {
                                                                if (!r) return u[e >> 2] = 2, 0;
                                                                if (u[e >> 2] = 0, u[e + 8 >> 2] = r, xe(n = e + 24 | 0, u[r + 64 >> 2], u[r + 60 >> 2]), 47 != (0 | ve(n, 8)) || (o = ve(n, 14), t = ve(n, 14), ve(n, 1), ve(n, 3) || u[e + 48 >> 2])) u[e >> 2] = 3;
                                                                else if (u[e + 4 >> 2] = 2, t = t + 1 | 0, u[r + 4 >> 2] = t, n = r, r = o + 1 | 0, u[n >> 2] = r, n = 1, z(r, t, 1, e, 0)) break n;
                                                                ke(e), n = 0
                                                            }
                                                            return n
                                                        }(r, t + 48 | 0)) {
                                                        if (e = H(u[t + 48 >> 2], u[t + 52 >> 2], u[n + 20 >> 2], u[n >> 2])) break r;
                                                        if (e = 0, function(e) {
                                                                var r = 0,
                                                                    n = 0,
                                                                    t = 0,
                                                                    o = 0,
                                                                    i = 0,
                                                                    a = 0,
                                                                    f = 0,
                                                                    s = 0,
                                                                    c = 0,
                                                                    l = 0,
                                                                    d = 0;
                                                                n: {
                                                                    t: {
                                                                        if (e) {
                                                                            if (i = u[e + 8 >> 2], l = u[i + 40 >> 2], u[e + 4 >> 2]) {
                                                                                if (u[e + 12 >> 2] = u[l >> 2], !se(u[l + 20 >> 2], i, 3)) return u[e >> 2] = 2, ke(e), 0;
                                                                                if (a = vr(n = r = u[e + 104 >> 2], o = r >> 31, r = u[e + 100 >> 2], r >> 31), n = P, c = e, f = r = (r = (o = s = u[i >> 2]) >> 31) << 4 | o >>> 28, (r = (r = o <<= 4) + (t = o = 65535 & s) | 0) >>> 0 < t >>> 0 && (f = f + 1 | 0), n = n + f | 0, r = Xe(t = r + a | 0, t >>> 0 < r >>> 0 ? n + 1 | 0 : n, 4), u[c + 16 >> 2] = r, !r) {
                                                                                    u[e + 20 >> 2] = 0;
                                                                                    break n
                                                                                }
                                                                                u[e + 20 >> 2] = (r + (a << 2) | 0) + (o << 2);
                                                                                o: {
                                                                                    i: {
                                                                                        if (u[i + 92 >> 2]) {
                                                                                            if (d = u[i + 100 >> 2], s = u[i + 16 >> 2], o = u[i + 12 >> 2], t = n = a = u[i + 96 >> 2], n = r = n >> 31, r = (r = r << 5 | t >>> 27) + (f = n << 2 | t >>> 30) | 0, r = (t = (c = t << 5) + (n = t << 2) | 0) >>> 0 < n >>> 0 ? r + 1 | 0 : r, (n = t + 84 | 0) >>> 0 < 84 && (r = r + 1 | 0), !(r = Xe(n, r, 1))) {
                                                                                                u[e >> 2] = 1;
                                                                                                break t
                                                                                            }
                                                                                            if (u[e + 268 >> 2] = r, u[e + 264 >> 2] = r, ge(n = r, o, s, (r = r + 84 | 0) + c | 0, a, d, 0, 4, r), u[i + 92 >> 2]) break i
                                                                                        }
                                                                                        if ((r = u[u[e + 12 >> 2] >> 2]) + -7 >>> 0 > 3) break o
                                                                                    }
                                                                                    Oe(),
                                                                                    r = u[u[e + 12 >> 2] >> 2]
                                                                                }
                                                                                if (r >>> 0 < 11 || (function() {
                                                                                        var e;
                                                                                        (0 | (e = u[2673])) != u[2556] && (u[2861] = 143, u[2860] = 144, u[2857] = 145, u[2858] = 146, u[2859] = 147, u[2862] = 148, u[2863] = 149, u[2864] = 150, u[2556] = e)
                                                                                    }(), u[u[e + 12 >> 2] + 28 >> 2] && Oe()), !(!u[e + 56 >> 2] | u[e + 120 >> 2] < 1 || u[(r = e + 136 | 0) >> 2] || Ze(r, u[e + 132 >> 2]))) break n;
                                                                                u[e + 4 >> 2] = 0
                                                                            }
                                                                            if (!R(e, u[e + 16 >> 2], u[e + 100 >> 2], u[e + 104 >> 2], u[i + 88 >> 2], 2)) break t;
                                                                            u[l + 16 >> 2] = u[e + 116 >> 2], e = 1
                                                                        } else e = 0;
                                                                        return e
                                                                    }
                                                                    return ke(e),
                                                                    0
                                                                }
                                                                return u[e >> 2] = 1, ke(e), 0
                                                            }(r)) break r
                                                    }
                                                    e = u[r >> 2]
                                                }
                                                gr(r)
                                            } else {
                                                if (!(r = Pe())) {
                                                    e = 1;
                                                    break e
                                                }
                                                u[r + 2348 >> 2] = u[t + 24 >> 2], u[r + 2352 >> 2] = u[t + 28 >> 2];
                                                r: {
                                                    if (U(r, t + 48 | 0)) {
                                                        if (e = H(u[t + 48 >> 2], u[t + 52 >> 2], u[n + 20 >> 2], u[n >> 2])) break r;
                                                        if (u[r + 148 >> 2] = 0, ce(u[n + 20 >> 2], r), e = 0, ne(r, t + 48 | 0)) break r
                                                    }
                                                    e = u[r >> 2]
                                                }
                                                Be(r)
                                            }
                                            e ? ar(u[n >> 2]) : (e = 0, !(r = u[n + 20 >> 2]) | !u[r + 48 >> 2] || (e = function(e) {
                                                var r = 0,
                                                    n = 0,
                                                    t = 0,
                                                    o = 0,
                                                    i = 0,
                                                    a = 0;
                                                return e ? (o = u[e + 8 >> 2] + -1 | 0, l[e >> 2] <= 10 ? (n = u[(r = e + 20 | 0) >> 2], u[r >> 2] = 0 - n, u[e + 16 >> 2] = u[e + 16 >> 2] + A(n, o), 0) : (n = u[(r = e + 32 | 0) >> 2], u[r >> 2] = 0 - n, r = u[(t = e + 36 | 0) >> 2], u[t >> 2] = 0 - r, t = u[(i = e + 40 | 0) >> 2], u[i >> 2] = 0 - t, u[e + 16 >> 2] = u[e + 16 >> 2] + A(n, o), i = n = e + 20 | 0, a = u[n >> 2], n = o >> 1, u[i >> 2] = a + A(n, r), u[(r = e + 24 | 0) >> 2] = u[r >> 2] + A(n, t), (r = u[e + 28 >> 2]) && (n = u[(t = e + 44 | 0) >> 2], u[t >> 2] = 0 - n, u[e + 28 >> 2] = r + A(n, o)), 0)) : 2
                                            }(u[n >> 2])))
                                        }
                                        return L = t + 160 | 0, e
                                    }

                                    function ue() {
                                        var e;
                                        (0 | (e = u[2673])) != u[2551] && (u[2771] = 81, u[2770] = 81, u[2769] = 82, u[2768] = 83, u[2767] = 84, u[2766] = 85, u[2765] = 86, u[2764] = 87, u[2763] = 88, u[2762] = 89, u[2761] = 90, u[2760] = 91, u[2759] = 92, u[2758] = 93, u[2757] = 94, u[2756] = 81, u[2803] = 81, u[2802] = 81, u[2801] = 82, u[2800] = 83, u[2799] = 84, u[2798] = 85, u[2797] = 86, u[2796] = 87, u[2795] = 88, u[2794] = 89, u[2793] = 90, u[2792] = 91, u[2791] = 92, u[2790] = 93, u[2789] = 94, u[2788] = 81, u[2755] = 95, u[2754] = 95, u[2753] = 96, u[2752] = 97, u[2751] = 98, u[2750] = 99, u[2749] = 100, u[2748] = 101, u[2747] = 102, u[2746] = 103, u[2745] = 104, u[2744] = 105, u[2743] = 106, u[2742] = 107, u[2741] = 108, u[2740] = 95, u[2787] = 95, u[2786] = 95, u[2785] = 96, u[2784] = 97, u[2783] = 98, u[2782] = 99, u[2781] = 100, u[2780] = 101, u[2779] = 102, u[2778] = 103, u[2777] = 104, u[2776] = 105, u[2775] = 106, u[2774] = 107, u[2773] = 108, u[2772] = 95, u[2733] = 109, u[2804] = 110, u[2735] = 111, u[2734] = 112, u[2736] = 113, u[2737] = 114, u[2738] = 115, u[2805] = 116, u[2732] = 117, u[2551] = e)
                                    }

                                    function se(e, r, n) {
                                        var t, o, i, a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0;
                                        L = t = L - 16 | 0, o = u[r + 4 >> 2], i = u[r >> 2];
                                        e: {
                                            if (e) {
                                                if (s = u[e + 8 >> 2], u[r + 72 >> 2] = (0 | s) > 0, a = i, f = o, !((0 | s) < 1)) {
                                                    if (s = 0, a = u[e + 16 >> 2], ((c = (n = n >>> 0 > 10) ? -2 & a : a) + (f = u[e + 24 >> 2]) | 0) > (0 | o)) break e;
                                                    if (a = u[e + 12 >> 2], (0 | f) < 1 | ((l = n ? -2 & a : a) + (a = u[e + 20 >> 2]) | 0) > (0 | i) | (0 | a) < 1 | (c | l) < 0) break e
                                                }
                                            } else u[r + 72 >> 2] = 0,
                                            a = i,
                                            f = o;
                                            if (u[r + 84 >> 2] = c, u[r + 76 >> 2] = l, u[r + 16 >> 2] = f, u[r + 12 >> 2] = a, u[r + 88 >> 2] = c + f, u[r + 80 >> 2] = a + l, e) {
                                                n = u[e + 28 >> 2], u[r + 92 >> 2] = (0 | n) > 0, s = 1, c = 1;
                                                r: {
                                                    if ((0 | n) >= 1) {
                                                        if (u[t + 12 >> 2] = u[e + 32 >> 2], u[t + 8 >> 2] = u[e + 36 >> 2], !Se(a, f, t + 12 | 0, t + 8 | 0)) break r;
                                                        u[r + 96 >> 2] = u[t + 12 >> 2], u[r + 100 >> 2] = u[t + 8 >> 2], c = !u[r + 92 >> 2]
                                                    }
                                                    if (u[r + 68 >> 2] = 0 != u[e >> 2], u[r + 56 >> 2] = !u[e + 4 >> 2], c) break e;e = 0,
                                                    e = u[r + 96 >> 2] < ((0 | A(i, 3)) / 4 | 0) ? u[r + 100 >> 2] < ((0 | A(o, 3)) / 4 | 0) : e,
                                                    u[r + 56 >> 2] = 0,
                                                    u[r + 68 >> 2] = e;
                                                    break e
                                                }
                                                s = 0
                                            } else u[r + 68 >> 2] = 0,
                                            u[r + 92 >> 2] = 0,
                                            s = 1,
                                            u[r + 56 >> 2] = 1
                                        }
                                        return L = t + 16 | 0, s
                                    }

                                    function ce(e, r) {
                                        var n = 0,
                                            t = 0,
                                            o = 0;
                                        if (e) {
                                            if ((0 | (n = u[e + 44 >> 2])) < 0 || (t = 255, (0 | n) <= 100 && (t = (0 | (n = A(n, 255))) / 100 | 0, (0 | n) < 100) || ((0 | (n = u[r + 800 >> 2])) >= 12 ? o = u[r + 804 >> 2] : (o = A(s[((0 | n) > 0 ? n : 0) + 4832 | 0], t) >> 3, u[r + 804 >> 2] = o), (0 | (n = u[r + 832 >> 2])) >= 12 ? n = u[r + 836 >> 2] : (n = A(s[((0 | n) > 0 ? n : 0) + 4832 | 0], t) >> 3, u[r + 836 >> 2] = n), o |= n, (0 | (n = u[r + 864 >> 2])) >= 12 ? n = u[r + 868 >> 2] : (n = A(s[((0 | n) > 0 ? n : 0) + 4832 | 0], t) >> 3, u[r + 868 >> 2] = n), o |= n, (0 | (n = u[r + 896 >> 2])) >= 12 ? t = u[r + 900 >> 2] : (t = A(s[((0 | n) > 0 ? n : 0) + 4832 | 0], t) >> 3, u[r + 900 >> 2] = t), t | o && (re(8 + (t = r + 544 | 0) | 0, 9424, 220), u[t >> 2] = 0, u[t + 4 >> 2] = 31, u[t + 228 >> 2] = 256, u[r + 540 >> 2] = 1))), e = u[e + 52 >> 2], u[r + 2372 >> 2] = e, (0 | e) >= 101) return void(u[r + 2372 >> 2] = 100);
                                            (0 | e) > -1 || (u[r + 2372 >> 2] = 0)
                                        }
                                    }

                                    function le(e, r) {
                                        var n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            c = 0,
                                            d = 0,
                                            A = 0,
                                            p = 0;
                                        if ((0 | r) < 1) return 0;
                                        for (n = u[e + 8 >> 2], f = u[e + 4 >> 2];
                                            (0 | n) > -1 || ((t = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (o = s[0 | t] | s[t + 1 | 0] << 8 | s[t + 2 | 0] << 16 | s[t + 3 | 0] << 24, u[e + 12 >> 2] = t + 3, n = n + 24 | 0, u[e + 8 >> 2] = n, u[e >> 2] = u[e >> 2] << 24 | (o >>> 8 & 65280 | o << 8 & 16711680 | o << 24) >>> 8) : t >>> 0 < l[e + 16 >> 2] ? (u[e + 12 >> 2] = t + 1, n = n + 8 | 0, u[e + 8 >> 2] = n, u[e >> 2] = s[0 | t] | u[e >> 2] << 8) : u[e + 24 >> 2] ? (n = 0, u[e + 8 >> 2] = 0) : (u[e + 24 >> 2] = 1, n = n + 8 | 0, u[e + 8 >> 2] = n, u[e >> 2] = u[e >> 2] << 8)), t = r + -1 | 0, A = e, p = n, (c = (i = u[e >> 2]) >>> n | 0) >>> 0 > (a = f >>> 1 & 16777215) >>> 0 ? (u[e >> 2] = i + ((-1 ^ a) << n), i = f - a | 0) : i = a + 1 | 0, n = p - (o = 24 ^ v(i)) | 0, u[A + 8 >> 2] = n, f = (i << o) - 1 | 0, u[e + 4 >> 2] = f, d |= (c >>> 0 > a >>> 0) << t, o = (0 | r) > 1, r = t, o;);
                                        return d
                                    }

                                    function de(e, r, n) {
                                        e |= 0, r |= 0;
                                        var t = 0,
                                            o = 0,
                                            i = 0,
                                            f = 0;
                                        if ((n |= 0) && (a[(t = e + n | 0) - 1 | 0] = r, a[0 | e] = r, !(n >>> 0 < 3 || (a[t + -2 | 0] = r, a[e + 1 | 0] = r, a[t + -3 | 0] = r, a[e + 2 | 0] = r, n >>> 0 < 7 || (a[t + -4 | 0] = r, a[e + 3 | 0] = r, n >>> 0 < 9 || (o = (t = 0 - e & 3) + e | 0, r = A(255 & r, 16843009), u[o >> 2] = r, u[(t = (n = n - t & -4) + o | 0) - 4 >> 2] = r, n >>> 0 < 9 || (u[o + 8 >> 2] = r, u[o + 4 >> 2] = r, u[t + -8 >> 2] = r, u[t + -12 >> 2] = r, n >>> 0 < 25 || (u[o + 24 >> 2] = r, u[o + 20 >> 2] = r, u[o + 16 >> 2] = r, u[o + 12 >> 2] = r, u[t + -16 >> 2] = r, u[t + -20 >> 2] = r, u[t + -24 >> 2] = r, u[t + -28 >> 2] = r, (n = n - (f = 4 & o | 24) | 0) >>> 0 < 32))))))))
                                            for (t = r, i = r, r = o + f | 0; u[r + 24 >> 2] = i, u[r + 28 >> 2] = t, u[r + 16 >> 2] = i, u[r + 20 >> 2] = t, u[r + 8 >> 2] = i, u[r + 12 >> 2] = t, u[r >> 2] = i, u[r + 4 >> 2] = t, r = r + 32 | 0, (n = n + -32 | 0) >>> 0 > 31;);
                                        return 0 | e
                                    }

                                    function Ae(e, r, n) {
                                        e: {
                                            r: if (!(r >>> 0 > 20)) {
                                                n: switch (r + -9 | 0) {
                                                    case 0:
                                                        return r = u[n >> 2], u[n >> 2] = r + 4, void(u[e >> 2] = u[r >> 2]);
                                                    case 1:
                                                        return r = u[n >> 2], u[n >> 2] = r + 4, r = u[r >> 2], u[e >> 2] = r, void(u[e + 4 >> 2] = r >> 31);
                                                    case 2:
                                                        return r = u[n >> 2], u[n >> 2] = r + 4, u[e >> 2] = u[r >> 2], void(u[e + 4 >> 2] = 0);
                                                    case 4:
                                                        return r = u[n >> 2], u[n >> 2] = r + 4, r = f[r >> 1], u[e >> 2] = r, void(u[e + 4 >> 2] = r >> 31);
                                                    case 5:
                                                        return r = u[n >> 2], u[n >> 2] = r + 4, u[e >> 2] = c[r >> 1], void(u[e + 4 >> 2] = 0);
                                                    case 6:
                                                        return r = u[n >> 2], u[n >> 2] = r + 4, r = a[0 | r], u[e >> 2] = r, void(u[e + 4 >> 2] = r >> 31);
                                                    case 7:
                                                        return r = u[n >> 2], u[n >> 2] = r + 4, u[e >> 2] = s[0 | r], void(u[e + 4 >> 2] = 0);
                                                    case 3:
                                                    case 8:
                                                        break e;
                                                    case 9:
                                                        break n;
                                                    default:
                                                        break r
                                                }
                                                i[0](e, n)
                                            }return
                                        }
                                        r = u[n >> 2] + 7 & -8,
                                        u[n >> 2] = r + 8,
                                        n = u[r + 4 >> 2],
                                        u[e >> 2] = u[r >> 2],
                                        u[e + 4 >> 2] = n
                                    }

                                    function ve(e, r) {
                                        var n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            c = 0,
                                            l = 0;
                                        e: {
                                            if (!(u[e + 24 >> 2] | (0 | r) > 24)) {
                                                if (o = (n = u[e + 20 >> 2]) + r | 0, u[e + 20 >> 2] = o, f = u[9312 + (r << 2) >> 2], t = a = u[e + 4 >> 2], n = 31 & (r = 63 & n), i = u[e >> 2], l = f & (32 <= (63 & r) >>> 0 ? t >>> n | 0 : ((1 << n) - 1 & t) << 32 - n | i >>> n), (0 | o) < 8) break e;
                                                for (f = (r = u[e + 16 >> 2]) >>> 0 > (c = u[e + 12 >> 2]) >>> 0 ? r : c;;) {
                                                    if ((0 | r) != (0 | f)) {
                                                        if (i = (255 & (t = a)) << 24 | i >>> 8, a = t = t >>> 8 | 0, u[e >> 2] = i, u[e + 4 >> 2] = t, n = s[u[e + 8 >> 2] + r | 0], t = o + -8 | 0, u[e + 20 >> 2] = t, r = r + 1 | 0, u[e + 16 >> 2] = r, a = n = a | n << 24, u[e >> 2] = i, u[e + 4 >> 2] = n, n = (0 | o) > 15, o = t, n) continue
                                                    } else r = f, t = o;
                                                    break
                                                }
                                                if ((0 | r) != (0 | c) | (0 | t) < 65) break e;
                                                return u[e + 20 >> 2] = 0, u[e + 24 >> 2] = 1, l
                                            }
                                            u[e + 20 >> 2] = 0,
                                            u[e + 24 >> 2] = 1
                                        }
                                        return l
                                    }

                                    function pe(e, r) {
                                        var n = 0,
                                            t = 0;
                                        u[r + 4 >> 2] = u[e + 4 >> 2], u[r + 8 >> 2] = u[e + 8 >> 2], n = 2;
                                        e: if (!$(r)) {
                                            if (n = u[e + 16 >> 2], (t = u[e >> 2]) >>> 0 <= 10) Ve(n, u[e + 20 >> 2], u[r + 16 >> 2], u[r + 20 >> 2], A(u[e + 4 >> 2], s[t + 1157 | 0]), u[e + 8 >> 2]);
                                            else {
                                                if (Ve(n, u[e + 32 >> 2], u[r + 16 >> 2], u[r + 32 >> 2], u[e + 4 >> 2], u[e + 8 >> 2]), Ve(u[e + 20 >> 2], u[e + 36 >> 2], u[r + 20 >> 2], u[r + 36 >> 2], (u[e + 4 >> 2] + 1 | 0) / 2 | 0, (u[e + 8 >> 2] + 1 | 0) / 2 | 0), Ve(u[e + 24 >> 2], u[e + 40 >> 2], u[r + 24 >> 2], u[r + 40 >> 2], (u[e + 4 >> 2] + 1 | 0) / 2 | 0, (u[e + 8 >> 2] + 1 | 0) / 2 | 0), !(1 << (t = u[e >> 2]) & 4154 && t >>> 0 <= 12) && (n = 0, t + -7 >>> 0 > 3)) break e;
                                                Ve(u[e + 28 >> 2], u[e + 44 >> 2], u[r + 28 >> 2], u[r + 44 >> 2], u[e + 4 >> 2], u[e + 8 >> 2])
                                            }
                                            n = 0
                                        }
                                        return n
                                    }

                                    function me(e, r) {
                                        var n = 0,
                                            t = 0,
                                            o = 0,
                                            a = 0;
                                        if (u[e + 2308 >> 2] < 1 || (0 | (n = u[e + 2300 >> 2])) < u[e + 300 >> 2] || (t = (0 | n) <= u[e + 308 >> 2]), n = e + 160 | 0, u[e + 148 >> 2]) {
                                            if (o = e + 124 | 0, 1 & i[u[2559]](o)) return re(e + 180 | 0, r, 108), u[e + 168 >> 2] = t, u[e + 160 >> 2] = u[e + 152 >> 2], u[e + 164 >> 2] = u[e + 2300 >> 2], 2 != u[e + 148 >> 2] ? M(e, n) : (r = u[e + 2304 >> 2], n = e + 176 | 0, u[e + 2304 >> 2] = u[n >> 2], u[n >> 2] = r), t && (r = u[e + 2260 >> 2], t = e + 172 | 0, u[e + 2260 >> 2] = u[t >> 2], u[t >> 2] = r), i[u[2560]](o), r = u[e + 152 >> 2] + 1 | 0, u[e + 152 >> 2] = (0 | r) == u[e + 156 >> 2] ? 0 : r, 1
                                        } else u[e + 168 >> 2] = t, u[e + 164 >> 2] = u[e + 2300 >> 2], M(e, n), a = G(e, r);
                                        return a
                                    }

                                    function ge(e, r, n, t, o, i, a, f, s) {
                                        var c, l, d = 0,
                                            v = 0;
                                        u[e + 72 >> 2] = a, u[e + 68 >> 2] = t, u[e + 60 >> 2] = 0, u[e + 64 >> 2] = 0, u[e + 56 >> 2] = i, u[e + 52 >> 2] = o, u[e + 48 >> 2] = n, u[e + 44 >> 2] = r, u[e + 8 >> 2] = f, a = (0 | n) < (0 | i), u[e + 4 >> 2] = a, c = (0 | r) < (0 | o), u[e >> 2] = c, l = c ? r + -1 | 0 : o, u[e + 40 >> 2] = l, t = c ? o + -1 | 0 : r, u[e + 36 >> 2] = t, c || (d = e, v = Ar(0, 1, l, l >> 31), u[d + 12 >> 2] = v), r = i - a | 0, u[e + 32 >> 2] = r, n = n - a | 0, u[e + 28 >> 2] = n, a ? (u[e + 24 >> 2] = r, r = t) : (u[e + 24 >> 2] = n, n = Ar(0, i, n = A(n, t), n >> 31), t = P, u[e + 20 >> 2] = 1 == (0 | t) & n >>> 0 < 0 | t >>> 0 < 1 ? n : 0), u[e + 76 >> 2] = s, d = e, v = Ar(0, 1, r, r >> 31), u[d + 16 >> 2] = v, r = e, e = A(o, f), u[r + 80 >> 2] = (e << 2) + s, de(s, 0, e << 3),
                                            function() {
                                                var e;
                                                (0 | (e = u[2673])) != u[2552] && (u[2809] = 118, u[2808] = 119, u[2807] = 120, u[2806] = 121, u[2552] = e)
                                            }()
                                    }

                                    function he(e, r, n) {
                                        var t, o = 0,
                                            f = 0;
                                        L = t = L - 208 | 0, u[t + 204 >> 2] = n, n = 0, de(t + 160 | 0, 0, 40), u[t + 200 >> 2] = u[t + 204 >> 2], (0 | O(0, r, t + 200 | 0, t + 80 | 0, t + 160 | 0)) < 0 || (n = u[e + 76 >> 2] >= 0 ? 1 : n, o = u[e >> 2], a[e + 74 | 0] <= 0 && (u[e >> 2] = -33 & o), f = 32 & o, u[e + 48 >> 2] ? O(e, r, t + 200 | 0, t + 80 | 0, t + 160 | 0) : (u[e + 48 >> 2] = 80, u[e + 16 >> 2] = t + 80, u[e + 28 >> 2] = t, u[e + 20 >> 2] = t, o = u[e + 44 >> 2], u[e + 44 >> 2] = t, O(e, r, t + 200 | 0, t + 80 | 0, t + 160 | 0), o && (i[u[e + 36 >> 2]](e, 0, 0), u[e + 48 >> 2] = 0, u[e + 44 >> 2] = o, u[e + 28 >> 2] = 0, u[e + 16 >> 2] = 0, u[e + 20 >> 2] = 0)), u[e >> 2] = f | u[e >> 2]), L = t + 208 | 0
                                    }

                                    function be(e, r, n, t) {
                                        var o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0;
                                        e: if (!((0 | r) < 1)) {
                                            for (;;) {
                                                if (u[e + 24 >> 2] < 1 && u[e + 64 >> 2] < u[e + 56 >> 2]) break e;
                                                if (u[e + 4 >> 2] && (l = e, d = wr(u[e + 76 >> 2], u[e + 80 >> 2]), u[l + 76 >> 2] = d, u[e + 80 >> 2] = P), ir(e, n), !(u[e + 4 >> 2] | (0 | A(u[e + 52 >> 2], u[e + 8 >> 2])) < 1))
                                                    for (s = u[e + 76 >> 2], c = u[e + 80 >> 2], o = 0; u[(f = (a = o << 2) + s | 0) >> 2] = u[f >> 2] + u[c + a >> 2], (0 | (o = o + 1 | 0)) < (0 | A(u[e + 52 >> 2], u[e + 8 >> 2])););
                                                if (u[e + 60 >> 2] = u[e + 60 >> 2] + 1, u[e + 24 >> 2] = u[e + 24 >> 2] - u[e + 32 >> 2], n = n + t | 0, (0 | (i = i + 1 | 0)) == (0 | r)) break
                                            }
                                            i = r
                                        }
                                        return i
                                    }

                                    function ke(e) {
                                        var r = 0,
                                            n = 0,
                                            t = 0;
                                        if (e) {
                                            if (j(u[(r = e + 160 | 0) >> 2]), j(u[e + 172 >> 2]), kr(u[(n = e + 168 | 0) >> 2]), pr(e + 124 | 0), pr(t = e + 136 | 0), u[n >> 2] = 0, u[n + 4 >> 2] = 0, u[r >> 2] = 0, u[r + 4 >> 2] = 0, u[e + 152 >> 2] = 0, u[e + 156 >> 2] = 0, u[e + 144 >> 2] = 0, u[e + 148 >> 2] = 0, u[t >> 2] = 0, u[t + 4 >> 2] = 0, u[e + 128 >> 2] = 0, u[e + 132 >> 2] = 0, u[e + 120 >> 2] = 0, u[e + 124 >> 2] = 0, j(u[e + 16 >> 2]), r = 0, u[e + 16 >> 2] = 0, u[e + 176 >> 2] >= 1)
                                                for (; n = 196 + (A(r, 20) + e | 0) | 0, j(u[n >> 2]), u[n >> 2] = 0, (0 | (r = r + 1 | 0)) < u[e + 176 >> 2];);
                                            u[e + 260 >> 2] = 0, u[e + 176 >> 2] = 0, j(u[e + 264 >> 2]), u[e + 12 >> 2] = 0, u[e + 264 >> 2] = 0
                                        }
                                    }

                                    function we(e, r) {
                                        var n, t = 0,
                                            o = 0,
                                            a = 0,
                                            f = 0;
                                        if (o = u[e + 8 >> 2], n = u[o + 40 >> 2], t = u[(l[n + 12 >> 2] < 2 ? o + 84 | 0 : e + 108 | 0) >> 2], !((0 | (t = (0 | (a = u[e + 108 >> 2])) < (0 | t) ? t : a)) >= (0 | r)) && (a = u[o >> 2], o = u[n + 136 >> 2] + A(a, t) | 0, Ie(e + 180 | 0, t, r, u[e + 16 >> 2] + A(t, u[e + 100 >> 2]) | 0, o), f = u[n + 12 >> 2])) {
                                            if (i[u[10912 + (f << 2) >> 2]](u[n + 140 >> 2], o, o, a), (0 | (f = t + 1 | 0)) != (0 | r))
                                                for (; t = o + a | 0, i[u[10912 + (u[n + 12 >> 2] << 2) >> 2]](o, t, t, a), o = t, (0 | (f = f + 1 | 0)) != (0 | r););
                                            else t = o;
                                            u[n + 140 >> 2] = t
                                        }
                                        u[e + 108 >> 2] = r, u[e + 116 >> 2] = r
                                    }

                                    function ye(e) {
                                        var r = 0,
                                            n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0;
                                        e: if ((0 | (t = u[e + 20 >> 2])) < 8) r = t;
                                            else
                                                for (f = (n = u[e + 16 >> 2]) >>> 0 > (r = u[e + 12 >> 2]) >>> 0 ? n : r;;) {
                                                    if ((0 | n) == (0 | f)) {
                                                        r = t;
                                                        break e
                                                    }
                                                    if (o = (i = u[e + 4 >> 2]) >>> 8 | 0, a = (255 & i) << 24 | u[e >> 2] >>> 8, i = o, u[e >> 2] = a, u[e + 4 >> 2] = o, o = s[u[e + 8 >> 2] + n | 0], r = t + -8 | 0, u[e + 20 >> 2] = r, n = n + 1 | 0, u[e + 16 >> 2] = n, u[e >> 2] = a, u[e + 4 >> 2] = i | o << 24, o = (0 | t) > 15, t = r, !o) break
                                                }
                                        u[e + 16 >> 2] != u[e + 12 >> 2] | (0 | r) < 65 && !u[e + 24 >> 2] || (u[e + 20 >> 2] = 0, u[e + 24 >> 2] = 1)
                                    }

                                    function Ce(e, r) {
                                        var n = 0;
                                        n = 0 != (0 | r);
                                        e: {
                                            r: {
                                                n: if (!(!r | !(3 & e)))
                                                    for (;;) {
                                                        if (!s[0 | e]) break r;
                                                        if (e = e + 1 | 0, n = 0 != (0 | (r = r + -1 | 0)), !r) break n;
                                                        if (!(3 & e)) break
                                                    }
                                                if (!n) break e
                                            }
                                            r: if (!(!s[0 | e] | r >>> 0 < 4))
                                                for (;;) {
                                                    if ((-1 ^ (n = u[e >> 2])) & n + -16843009 & -2139062144) break r;
                                                    if (e = e + 4 | 0, !((r = r + -4 | 0) >>> 0 > 3)) break
                                                }
                                            if (r)
                                                for (;;) {
                                                    if (!s[0 | e]) return e;
                                                    if (e = e + 1 | 0, !(r = r + -1 | 0)) break
                                                }
                                        }
                                        return 0
                                    }

                                    function Ee(e) {
                                        var r = 0,
                                            n = 0,
                                            t = 0;
                                        if (u[e + 24 >> 2] <= 0) {
                                            e: if (u[e + 4 >> 2]) i[u[2808]](e);
                                                elseif (u[e + 20 >> 2]) i[u[2809]](e);
                                            else {
                                                if ((0 | A(u[e + 52 >> 2], u[e + 8 >> 2])) < 1) break e;
                                                for (n = u[e + 76 >> 2]; t = r << 2, a[u[e + 68 >> 2] + r | 0] = u[t + n >> 2], n = u[e + 76 >> 2], u[t + n >> 2] = 0, (0 | (r = r + 1 | 0)) < (0 | A(u[e + 52 >> 2], u[e + 8 >> 2])););
                                            }
                                            u[e + 24 >> 2] = u[e + 24 >> 2] + u[e + 28 >> 2],
                                            u[e + 68 >> 2] = u[e + 68 >> 2] + u[e + 72 >> 2],
                                            u[e + 64 >> 2] = u[e + 64 >> 2] + 1
                                        }
                                    }

                                    function Ie(e, r, n, t, o) {
                                        var f, c, l, d = 0,
                                            A = 0,
                                            v = 0,
                                            p = 0;
                                        l = u[e + 16 >> 2], f = u[e + 8 >> 2];
                                        e: if ((0 | (c = 8 >>> (e = u[e + 4 >> 2]) | 0)) <= 7) {
                                            if ((0 | r) >= (0 | n)) break e;
                                            for (A = -1 << c ^ -1, v = -1 << e ^ -1, p = (0 | f) < 1;;) {
                                                if (d = 0, e = 0, !p)
                                                    for (; d & v || (e = s[0 | t], t = t + 1 | 0), a[0 | o] = u[((e & A) << 2) + l >> 2] >>> 8, e = e >>> c | 0, o = o + 1 | 0, (0 | (d = d + 1 | 0)) != (0 | f););
                                                if ((0 | n) == (0 | (r = r + 1 | 0))) break
                                            }
                                        } else i[u[2732]](t, l, o, r, n, f)
                                    }

                                    function _e(e, r, n) {
                                        var t = 0;
                                        return u[e + 24 >> 2] = 0, u[e + 8 >> 2] = -8, u[e >> 2] = 0, u[e + 4 >> 2] = 254, u[e + 12 >> 2] = r, t = r + n | 0, u[e + 16 >> 2] = t, t = n >>> 0 > 3 ? t + -3 | 0 : r, u[e + 20 >> 2] = t, t >>> 0 > r >>> 0 ? (n = s[0 | r] | s[r + 1 | 0] << 8 | s[r + 2 | 0] << 16 | s[r + 3 | 0] << 24, u[e + 8 >> 2] = 16, u[e + 12 >> 2] = r + 3, void(u[e >> 2] = (n >>> 8 & 65280 | n << 8 & 16711680 | n << 24) >>> 8)) : (0 | n) >= 1 ? (u[e + 8 >> 2] = 0, u[e + 12 >> 2] = r + 1, void(u[e >> 2] = s[0 | r])) : (u[e + 24 >> 2] = 1, u[e + 8 >> 2] = 0, void(u[e >> 2] = 0))
                                    }

                                    function De(e, r, n) {
                                        var t = 0,
                                            o = 0,
                                            f = 0,
                                            c = 0;
                                        e: {
                                            if (!(t = u[n + 16 >> 2])) {
                                                if (function(e) {
                                                        var r = 0;
                                                        return r = s[e + 74 | 0], a[e + 74 | 0] = r + -1 | r, 8 & (r = u[e >> 2]) ? (u[e >> 2] = 32 | r, -1) : (u[e + 4 >> 2] = 0, u[e + 8 >> 2] = 0, r = u[e + 44 >> 2], u[e + 28 >> 2] = r, u[e + 20 >> 2] = r, u[e + 16 >> 2] = r + u[e + 48 >> 2], 0)
                                                    }(n)) break e;
                                                t = u[n + 16 >> 2]
                                            }
                                            if (t - (f = u[n + 20 >> 2]) >>> 0 < r >>> 0) return 0 | i[u[n + 36 >> 2]](n, e, r);r: if (!(a[n + 75 | 0] < 0)) {
                                                for (o = r;;) {
                                                    if (!(t = o)) break r;
                                                    if (10 == s[(o = t + -1 | 0) + e | 0]) break
                                                }
                                                if ((o = 0 | i[u[n + 36 >> 2]](n, e, t)) >>> 0 < t >>> 0) break e;
                                                e = e + t | 0, r = r - t | 0, f = u[n + 20 >> 2], c = t
                                            }re(f, e, r),
                                            u[n + 20 >> 2] = u[n + 20 >> 2] + r,
                                            o = r + c | 0
                                        }
                                        return o
                                    }

                                    function xe(e, r, n) {
                                        var t, o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            A = 0;
                                        if (u[e + 20 >> 2] = 0, u[e + 24 >> 2] = 0, u[e >> 2] = 0, u[e + 4 >> 2] = 0, u[e + 12 >> 2] = n, t = n >>> 0 < 8 ? n : 8)
                                            for (A = t, n = 0; a = s[r + n | 0], o = 31 & (i = f << 3), 32 <= (63 & i) >>> 0 ? (i = a << o, o = 0) : (i = (1 << o) - 1 & a >>> 32 - o, o = a << o), c |= o, l |= i, n = n + 1 | 0, (o = f + 1 | 0) >>> 0 < 1 && (d = d + 1 | 0), f = o, (0 | A) != (0 | o) | d;);
                                        u[e + 16 >> 2] = t, u[e >> 2] = c, u[e + 4 >> 2] = l, u[e + 8 >> 2] = r
                                    }

                                    function Se(e, r, n, t) {
                                        var o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0;
                                        return o = u[t >> 2], (i = u[n >> 2]) | (0 | r) < 1 || (f = vr(o, o >> 31, e, e >> 31), a = P, a = (a = (i = r + f | 0) >>> 0 < f >>> 0 ? a + 1 | 0 : a) + -1 | 0, i = Ar(i = i + -1 | 0, -1 != (0 | i) ? a + 1 | 0 : a, r, 0)), o | (0 | e) < 1 || (a = vr(i, i >> 31, r, r >> 31), r = P, r = (r = (o = a + e | 0) >>> 0 < a >>> 0 ? r + 1 | 0 : r) + -1 | 0, o = Ar(o = o + -1 | 0, -1 != (0 | o) ? r + 1 | 0 : r, e, 0)), e = 0, (0 | i) < 1 | (0 | o) < 1 || (u[n >> 2] = i, u[t >> 2] = o, e = 1), e
                                    }

                                    function Le(e, r, n) {
                                        var t = 0,
                                            o = 0,
                                            i = 0;
                                        if (1 == (0 | r) & e >>> 0 < 0 | r >>> 0 < 1) t = e;
                                        else
                                            for (; t = Ar(e, r, 10, 0), i = o = P, o = vr(t, o, 10, 0), a[0 | (n = n + -1 | 0)] = e - o | 48, o = r >>> 0 > 9, e = t, r = i, o;);
                                        if (t)
                                            for (; e = (t >>> 0) / 10 | 0, a[0 | (n = n + -1 | 0)] = t - A(e, 10) | 48, r = t >>> 0 > 9, t = e, r;);
                                        return n
                                    }

                                    function Pe() {
                                        var e, r = 0;
                                        if ((e = Qe(1, 0, 2376)) && (u[e >> 2] = 0, u[e + 8 >> 2] = 5010, i[u[2557]](e + 124 | 0), u[e + 312 >> 2] = 0, u[e + 4 >> 2] = 0, !u[2661])) {
                                            if ((r = u[2673]) && 0 | i[0 | r](2)) return u[2661] = 19, e;
                                            u[2661] = 20
                                        }
                                        return e
                                    }

                                    function Me(e) {
                                        var r;
                                        return (r = u[e + 12 >> 2]) >>> 0 < l[e + 16 >> 2] ? (u[e + 12 >> 2] = r + 1, u[e + 8 >> 2] = u[e + 8 >> 2] + 8, void(u[e >> 2] = s[0 | r] | u[e >> 2] << 8)) : u[e + 24 >> 2] ? void(u[e + 8 >> 2] = 0) : (u[e + 24 >> 2] = 1, u[e >> 2] = u[e >> 2] << 8, void(u[e + 8 >> 2] = u[e + 8 >> 2] + 8))
                                    }

                                    function Be(e) {
                                        e && (i[u[2562]](e + 124 | 0), We(e), j(u[e + 2288 >> 2]), u[e + 2288 >> 2] = 0, u[e + 2292 >> 2] = 0, u[e + 12 >> 2] = 0, u[e + 16 >> 2] = 0, u[e + 20 >> 2] = 0, u[e + 24 >> 2] = 0, u[e + 28 >> 2] = 0, u[e + 32 >> 2] = 0, u[e + 36 >> 2] = 0, u[e + 4 >> 2] = 0, j(e))
                                    }

                                    function Fe(e, r, n, t, o) {
                                        var i;
                                        if (L = i = L - 256 | 0, !(73728 & o | (0 | n) <= (0 | t))) {
                                            if (de(i, 255 & r, (t = (n = n - t | 0) >>> 0 < 256) ? n : 256), !t)
                                                for (; dr(e, i, 256), (n = n + -256 | 0) >>> 0 > 255;);
                                            dr(e, i, n)
                                        }
                                        L = i + 256 | 0
                                    }

                                    function Re(e, r, n, t) {
                                        var o, i = 0;
                                        return L = o = L - 1024 | 0, e ? (0 | t) <= 512 ? t = X(e, r, n, t, o) : (i = Xe(t, 0, 2)) ? (t = X(e, r, n, t, i), j(i)) : t = 0 : t = X(0, r, n, t, 0), L = o + 1024 | 0, t
                                    }

                                    function Te() {
                                        var e;
                                        (0 | (e = u[2673])) != u[2554] && (u[2820] = 122, u[2819] = 123, u[2815] = 122, u[2813] = 123, u[2822] = 124, u[2821] = 125, u[2818] = 126, u[2817] = 124, u[2816] = 125, u[2814] = 127, u[2812] = 128, u[2554] = e)
                                    }

                                    function Oe() {
                                        var e;
                                        (0 | (e = u[2673])) != u[2544] && (u[2663] = 21, u[2662] = 22, u[2665] = 23, u[2670] = 24, u[2664] = 25, u[2666] = 26, u[2667] = 27, u[2668] = 28, u[2669] = 29, u[2671] = 30, u[2672] = 31, u[2544] = e)
                                    }

                                    function ze(e) {
                                        var r, n;
                                        return (e = (r = u[3008]) + (n = e + 3 & -4) | 0) >>> 0 <= r >>> 0 && (0 | n) >= 1 || e >>> 0 > yr() << 16 >>> 0 && !(0 | _(0 | e)) ? (u[2865] = 48, -1) : (u[3008] = e, r)
                                    }

                                    function Ue(e, r, n, t, o, a, f, u, s, c) {
                                        var l = 0,
                                            d = 0;
                                        if ((0 | s) >= 1)
                                            for (; i[0 | c](e, n, t, a, u), n = (d = 1 & l) ? n + o | 0 : n, t = d ? t + o | 0 : t, a = a + f | 0, e = e + r | 0, (0 | (l = l + 1 | 0)) != (0 | s););
                                    }

                                    function Ne(e) {
                                        var r = 0;
                                        e: if (!(u[e + 64 >> 2] >= u[e + 56 >> 2]))
                                            for (;;) {
                                                if (u[e + 24 >> 2] > 0) break e;
                                                if (r = r + 1 | 0, Ee(e), !(u[e + 64 >> 2] < u[e + 56 >> 2])) break
                                            }
                                        return r
                                    }

                                    function Ge(e, r) {
                                        var n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0;
                                        n = 4;
                                        e: {
                                            for (;;) {
                                                if ((0 | (t = s[0 | e])) == (0 | (o = s[0 | r]))) {
                                                    if (r = r + 1 | 0, e = e + 1 | 0, n = n + -1 | 0) continue;
                                                    break e
                                                }
                                                break
                                            }
                                            i = t - o | 0
                                        }
                                        return i
                                    }

                                    function je(e) {
                                        var r = 0,
                                            n = 0,
                                            t = 0;
                                        if (mr(a[u[e >> 2]]))
                                            for (; r = u[e >> 2], t = a[0 | r], u[e >> 2] = r + 1, n = (A(n, 10) + t | 0) - 48 | 0, mr(a[r + 1 | 0]););
                                        return n
                                    }

                                    function Xe(e, r, n) {
                                        var t = 0,
                                            o = 0,
                                            i = 0;
                                        return e | r && (o = Ar(2147418112, 0, e, r), t = P, vr(n, 0, e, r), !t & o >>> 0 < n >>> 0 | t >>> 0 < 0 | P >>> 0 > 0) || (i = B(A(e, n))), i
                                    }

                                    function Qe(e, r, n) {
                                        var t = 0,
                                            o = 0,
                                            i = 0;
                                        return e | r && (o = Ar(2147418112, 0, e, r), t = P, vr(n, 0, e, r), !t & o >>> 0 < n >>> 0 | t >>> 0 < 0 | P >>> 0 > 0) || (i = function(e, r) {
                                            var n = 0,
                                                t = 0;
                                            return n = 0, e && (n = t = vr(e, 0, r, 0), (e | r) >>> 0 < 65536 || (n = P ? -1 : t)), !(e = B(r = n)) | !(3 & s[e + -4 | 0]) || de(e, 0, r), e
                                        }(e, n)), i
                                    }

                                    function We(e) {
                                        var r;
                                        j(u[e + 2360 >> 2]), u[e + 2360 >> 2] = 0, u[e + 2364 >> 2] = 0, (r = u[e + 2344 >> 2]) && (gr(u[r + 20 >> 2]), u[r + 20 >> 2] = 0, j(r)), u[e + 2344 >> 2] = 0
                                    }

                                    function Ye(e, r, n, t) {
                                        if (e | r)
                                            for (; a[0 | (n = n + -1 | 0)] = s[10128 + (15 & e) | 0] | t, (e = (15 & r) << 28 | e >>> 4) | (r = r >>> 4 | 0););
                                        return n
                                    }

                                    function qe(e, r, n, t, o, a, f) {
                                        var s = 0;
                                        if ((0 | a) >= 1)
                                            for (; i[u[2663]](e, n, o, f), n = n + t | 0, e = e + r | 0, (0 | (s = s + 1 | 0)) != (0 | a););
                                    }

                                    function Ve(e, r, n, t, o, i) {
                                        var a = 0;
                                        if ((0 | i) >= 1)
                                            for (; n = re(n, e, o) + t | 0, e = e + r | 0, a = (0 | i) > 1, i = i + -1 | 0, a;);
                                    }

                                    function He(e, r, n) {
                                        if (e | r)
                                            for (; a[0 | (n = n + -1 | 0)] = 7 & e | 48, (e = (7 & r) << 29 | e >>> 3) | (r = r >>> 3 | 0););
                                        return n
                                    }

                                    function Je(e, r, n, t) {
                                        var o = 0;
                                        if ((0 | t) >= 1)
                                            for (; i[u[2662]](e, n, 0), e = e + r | 0, (0 | (o = o + 1 | 0)) != (0 | t););
                                    }

                                    function Ze(e, r) {
                                        var n = 0;
                                        return n = Qe(n = 1 << r, n >> 31, 4), u[e >> 2] = n, n ? (u[e + 8 >> 2] = r, u[e + 4 >> 2] = 32 - r, 1) : 0
                                    }

                                    function Ke(e) {
                                        var r = 0;
                                        (r = u[8 + (e |= 0) >> 2]) && (r = 0 | i[0 | r](u[e + 12 >> 2], u[e + 16 >> 2]), u[e + 20 >> 2] = u[e + 20 >> 2] | !r)
                                    }

                                    function $e(e, r) {
                                        return (0 | (e = ((u[e + 24 >> 2] + (e = u[e + 32 >> 2]) | 0) - 1 | 0) / (0 | e) | 0)) > (0 | r) ? r : e
                                    }

                                    function er(e, r, n, t, o) {
                                        return r |= 0, n |= 0, t |= 0, o |= 0, e = 0 | i[0 | (e |= 0)](r, n, t, o), x(0 | P), 0 | e
                                    }

                                    function rr(e, r) {
                                        var n = 0;
                                        return (-1 >>> (n = 31 & r) & e) << n | ((n = e) & -1 << (e = 0 - r & 31)) >>> e
                                    }

                                    function nr(e, r, n) {
                                        return u[e >> 2] || (u[e + 8 >> 2] = n, u[e >> 2] = r, u[e + 4 >> 2] = 0), 0
                                    }

                                    function tr(e, r, n) {
                                        var t;
                                        L = t = L - 16 | 0, u[t + 12 >> 2] = n, he(e, r, n), L = t + 16 | 0
                                    }

                                    function or(e, r) {
                                        u[r + 40 >> 2] = e, u[r + 52 >> 2] = 3, u[r + 48 >> 2] = 4, u[r + 44 >> 2] = 5
                                    }

                                    function ir(e, r) {
                                        u[e >> 2] ? i[u[2807]](e, r) : i[u[2806]](e, r)
                                    }

                                    function ar(e) {
                                        e && (u[e + 12 >> 2] <= 0 && j(u[e + 80 >> 2]), u[e + 80 >> 2] = 0)
                                    }

                                    function fr(e) {
                                        return e ? 31 - v(e + -1 ^ e) | 0 : 32
                                    }

                                    function ur(e, r) {
                                        re(u[r >> 2], u[e >> 2], 4 << u[r + 8 >> 2])
                                    }

                                    function sr(e, r) {
                                        return r = le(e, r), le(e, 1) ? 0 - r | 0 : r
                                    }

                                    function cr(e) {
                                        return e ? (u[2865] = e, -1) : 0
                                    }

                                    function lr(e, r) {
                                        return e ? function(e, r) {
                                            e: {
                                                if (e) {
                                                    if (r >>> 0 <= 127) break e;
                                                    if (u[u[2607] >> 2]) {
                                                        if (r >>> 0 <= 2047) return a[e + 1 | 0] = 63 & r | 128, a[0 | e] = r >>> 6 | 192, 2;
                                                        if (!(57344 != (-8192 & r) && r >>> 0 >= 55296)) return a[e + 2 | 0] = 63 & r | 128, a[0 | e] = r >>> 12 | 224, a[e + 1 | 0] = r >>> 6 & 63 | 128, 3;
                                                        if (r + -65536 >>> 0 <= 1048575) return a[e + 3 | 0] = 63 & r | 128, a[0 | e] = r >>> 18 | 240, a[e + 2 | 0] = r >>> 6 & 63 | 128, a[e + 1 | 0] = r >>> 12 & 63 | 128, 4
                                                    } else if (57216 == (-128 & r)) break e;
                                                    u[2865] = 25, e = -1
                                                } else e = 1;
                                                return e
                                            }
                                            return a[0 | e] = r,
                                            1
                                        }(e, r) : 0
                                    }

                                    function dr(e, r, n) {
                                        32 & s[0 | e] || De(r, n, e)
                                    }

                                    function Ar(e, r, n, t) {
                                        return function(e, r, n, t) {
                                            var o = 0,
                                                i = 0,
                                                a = 0,
                                                f = 0,
                                                u = 0,
                                                s = 0,
                                                c = 0,
                                                l = 0,
                                                d = 0,
                                                A = 0;
                                            e: {
                                                r: {
                                                    n: {
                                                        t: {
                                                            o: {
                                                                i: {
                                                                    a: {
                                                                        f: {
                                                                            u: {
                                                                                s: {
                                                                                    if (a = r) {
                                                                                        if (!(o = n)) break s;
                                                                                        if (!(i = t)) break u;
                                                                                        if ((i = v(i) - v(a) | 0) >>> 0 <= 31) break f;
                                                                                        break r
                                                                                    }
                                                                                    if (1 == (0 | t) & n >>> 0 >= 0 | t >>> 0 > 1) break r;
                                                                                    return P = 0,
                                                                                    (e >>> 0) / (n >>> 0) | 0
                                                                                }
                                                                                if (o = t, !e) break a;
                                                                                if (!o) break i;
                                                                                if (o + -1 & o) break i;
                                                                                return e = a >>> (31 & fr(o)) | 0,
                                                                                P = 0,
                                                                                e
                                                                            }
                                                                            if (!(o + -1 & o)) break o;f = 0 - (s = (v(o) + 33 | 0) - v(a) | 0) | 0;
                                                                            break n
                                                                        }
                                                                        s = i + 1 | 0,
                                                                        f = 63 - i | 0;
                                                                        break n
                                                                    }
                                                                    return P = 0,
                                                                    (a >>> 0) / (o >>> 0) | 0
                                                                }
                                                                if ((i = v(o) - v(a) | 0) >>> 0 < 31) break t;
                                                                break r
                                                            }
                                                            if (1 == (0 | o)) break e;
                                                            return n = e,
                                                            t = 31 & (e = fr(o)),
                                                            32 <= (63 & e) >>> 0 ? (i = 0, e = r >>> t | 0) : (i = r >>> t | 0, e = ((1 << t) - 1 & r) << 32 - t | n >>> t),
                                                            P = i,
                                                            e
                                                        }
                                                        s = i + 1 | 0,
                                                        f = 63 - i | 0
                                                    }
                                                    if (o = r, a = e, u = 31 & (i = 63 & s), 32 <= (63 & i) >>> 0 ? (i = 0, l = o >>> u | 0) : (i = o >>> u | 0, l = ((1 << u) - 1 & o) << 32 - u | a >>> u), f = 31 & (e = 63 & f), 32 <= (63 & e) >>> 0 ? (o = a << f, e = 0) : (o = (1 << f) - 1 & a >>> 32 - f | r << f, e = a << f), r = o, s)
                                                        for (a = t + -1 | 0, -1 != (0 | (o = n + -1 | 0)) && (a = a + 1 | 0), f = o; d = c = i << 1 | (o = l) >>> 31, o = (u = a - ((f >>> 0 < (i = o << 1 | r >>> 31) >>> 0) + (o = c) | 0) | 0) >> 31, l = (c = i) - (i = n & (u >>= 31)) | 0, i = d - ((t & o) + (c >>> 0 < i >>> 0) | 0) | 0, o = r << 1 | e >>> 31, e = A | e << 1, r = 0 | o, d = 0, A = c = 1 & u, s = s + -1 | 0;);
                                                    return P = d | r << 1 | e >>> 31,
                                                    c | e << 1
                                                }
                                                e = 0,
                                                r = 0
                                            }
                                            return P = r, e
                                        }(e, r, n, t)
                                    }

                                    function vr(e, r, n, t) {
                                        return function(e, r, n, t) {
                                            var o, i, a, f, u = 0,
                                                s = 0;
                                            return f = A(u = n >>> 16 | 0, s = e >>> 16 | 0), u = (65535 & (s = ((a = A(o = 65535 & n, i = 65535 & e)) >>> 16 | 0) + A(s, o) | 0)) + A(u, i) | 0, e = (A(r, n) + f | 0) + A(e, t) + (s >>> 16) + (u >>> 16) | 0, P = e, 65535 & a | u << 16
                                        }(e, r, n, t)
                                    }

                                    function pr(e) {
                                        e && (j(u[e >> 2]), u[e >> 2] = 0)
                                    }

                                    function mr(e) {
                                        return e + -48 >>> 0 < 10
                                    }

                                    function gr(e) {
                                        e && (ke(e), j(e))
                                    }

                                    function hr(e) {
                                        e && de(e, 0, 108)
                                    }

                                    function br(e) {
                                        e && de(e, 0, 84)
                                    }

                                    function kr(e) {
                                        e && j(e)
                                    }

                                    function wr(e, r) {
                                        return P = e, r
                                    }

                                    function yr() {
                                        return t.byteLength / 65536 | 0
                                    }
                                    return i[1] = function(e, r) {
                                        var n = 0,
                                            t = 0,
                                            o = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0;
                                        if ((0 | (f = (r |= 0) - (t = u[108 + (e |= 0) >> 2]) | 0)) >= 1)
                                            for (n = u[e + 100 >> 2], l = u[e + 16 >> 2] + (A(n, t) << 2) | 0;;) {
                                                p = (s = (0 | f) < 16 ? f : 16) + t | 0, o = u[e + 8 >> 2], d = u[o >> 2], m = A(d, s), v = u[o + 40 >> 2], o = u[v + 136 >> 2] + A(t, d) | 0, c = u[e + 20 >> 2];
                                                e: if ((0 | (a = u[e + 176 >> 2])) >= 1) {
                                                    if (W(180 + (A(n = a + -1 | 0, 20) + e | 0) | 0, t, p, l, c), (0 | a) < 2) break e;
                                                    for (; W(180 + (A(a = n + -1 | 0, 20) + e | 0) | 0, t, p, c, c), g = (0 | n) > 1, n = a, g;);
                                                } else(0 | c) != (0 | l) && re(c, l, A(n, s) << 2);
                                                if (i[u[2669]](c, o, m), a = u[v + 12 >> 2]) {
                                                    if (n = u[v + 140 >> 2], !((0 | f) < 1))
                                                        if (i[u[10912 + (a << 2) >> 2]](n, o, o, d), 1 != (0 | s))
                                                            for (t = t + 1 | 0; n = o + d | 0, i[u[10912 + (u[v + 12 >> 2] << 2) >> 2]](o, n, n, d), o = n, (0 | p) != (0 | (t = t + 1 | 0)););
                                                        else n = o;
                                                    u[v + 140 >> 2] = n
                                                }
                                                if (n = u[e + 100 >> 2], l = (A(n, s) << 2) + l | 0, t = p, !((0 | (f = f - s | 0)) > 0)) break
                                            }
                                        u[e + 108 >> 2] = r, u[e + 116 >> 2] = r
                                    }, i[2] = function(e, r) {
                                        var n = 0,
                                            t = 0,
                                            o = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0;
                                        e: {
                                            if (!((0 | (n = (r |= 0) - (s = u[108 + (e |= 0) >> 2]) | 0)) < 1)) {
                                                f = u[e + 8 >> 2], m = u[f >> 2], t = u[e + 100 >> 2], l = u[e + 16 >> 2] + (A(t, s) << 2) | 0, c = u[e + 20 >> 2];
                                                r: if ((0 | (v = u[e + 176 >> 2])) >= 1) {
                                                    if (W(180 + (A(n = v + -1 | 0, 20) + e | 0) | 0, s, r, l, c), (0 | v) < 2) break r;
                                                    for (; W(180 + (A(t = n + -1 | 0, 20) + e | 0) | 0, s, r, c, c), v = (0 | n) > 1, n = t, v;);
                                                } else(0 | c) != (0 | l) && re(c, l, A(n, t) << 2);
                                                if (v = (0 | (s = u[f + 84 >> 2])) > (0 | (l = u[e + 108 >> 2])), !((0 | (t = (0 | (t = u[f + 88 >> 2])) < (0 | r) ? t : r)) <= (0 | (n = v ? s : l)))) {
                                                    if (t = t - n | 0, u[f + 16 >> 2] = t, u[f + 8 >> 2] = n - s, n = u[f + 76 >> 2], o = u[f + 80 >> 2] - n | 0, u[f + 12 >> 2] = o, g = m << 2, p = (n << 2) + (v ? c + A(g, s - l | 0) | 0 : c) | 0, n = u[e + 12 >> 2], (s = u[n >> 2]) >>> 0 > 10) break e;
                                                    c = u[n + 20 >> 2], h = u[n + 16 >> 2] + A(c, u[e + 116 >> 2]) | 0;
                                                    r: if (u[f + 92 >> 2]) {
                                                        if ((0 | t) < 1) break r;
                                                        for (;;) {
                                                            m = t - d | 0, v = $e(u[e + 268 >> 2], m), Je(n = A(d, g) + p | 0, g, u[u[e + 268 >> 2] + 44 >> 2], v), d = be(u[e + 268 >> 2], m, n, g) + d | 0, n = 0, o = u[e + 268 >> 2];
                                                            n: if (!(u[o + 64 >> 2] >= u[o + 56 >> 2]))
                                                                for (v = A(a, c) + h | 0, l = u[o + 52 >> 2], m = u[o + 68 >> 2];;) {
                                                                    if (u[o + 24 >> 2] > 0) break n;
                                                                    if (Ee(o), i[u[2662]](m, l, 1), ae(m, l, s, v + A(n, c) | 0), n = n + 1 | 0, !(u[o + 64 >> 2] < u[o + 56 >> 2])) break
                                                                }
                                                            if (a = n + a | 0, !((0 | d) < (0 | t))) break
                                                        }
                                                    } else {
                                                        if ((0 | t) >= 1)
                                                            for (n = t; ae(p, o, s, h), h = c + h | 0, p = p + g | 0, a = (0 | n) > 1, n = n + -1 | 0, a;);
                                                        a = t
                                                    }
                                                    u[e + 116 >> 2] = u[e + 116 >> 2] + a
                                                }
                                            }
                                            return void(u[e + 108 >> 2] = r)
                                        }
                                        d = u[e + 116 >> 2];
                                        e: if (u[f + 92 >> 2]) {
                                            if ((0 | t) < 1) break e;
                                            for (;;) {
                                                n = t - h | 0, a = $e(u[e + 268 >> 2], n), Je(p, g, u[u[e + 268 >> 2] + 44 >> 2], a), m = A(a, g), h = be(u[e + 268 >> 2], n, p, g) + h | 0, s = 0, f = u[e + 268 >> 2];
                                                r: if (!(u[f + 64 >> 2] >= u[f + 56 >> 2]))
                                                    for (c = u[f + 52 >> 2], v = (l = u[f + 68 >> 2]) + 3 | 0, n = d;;) {
                                                        if (u[f + 24 >> 2] > 0) break r;
                                                        if (Ee(f), i[u[2662]](l, c, 1), o = u[e + 12 >> 2], i[u[2860]](l, u[o + 16 >> 2] + A(u[o + 32 >> 2], n) | 0, c), a = n >> 1, i[u[2861]](l, u[o + 20 >> 2] + A(a, u[o + 36 >> 2]) | 0, u[o + 24 >> 2] + A(a, u[o + 40 >> 2]) | 0, c, 1 & (-1 ^ n)), (a = u[o + 28 >> 2]) && i[u[2668]](v, 0, c, 1, a + A(u[o + 44 >> 2], n) | 0, 0), s = s + 1 | 0, n = n + 1 | 0, !(u[f + 64 >> 2] < u[f + 56 >> 2])) break
                                                    }
                                                if (p = p + m | 0, d = d + s | 0, !((0 | h) < (0 | t))) break
                                            }
                                        } else
                                        if (!((0 | t) < 1))
                                            for (;;) {
                                                if (i[u[2860]](p, u[n + 16 >> 2] + A(u[n + 32 >> 2], d) | 0, o), a = d >> 1, i[u[2861]](p, u[n + 20 >> 2] + A(a, u[n + 36 >> 2]) | 0, u[n + 24 >> 2] + A(a, u[n + 40 >> 2]) | 0, o, 1 & (-1 ^ d)), (a = u[n + 28 >> 2]) && i[u[2668]](p + 3 | 0, 0, o, 1, a + A(u[n + 44 >> 2], d) | 0, 0), d = d + 1 | 0, (0 | t) < 2) break e;
                                                t = t + -1 | 0, p = p + g | 0, n = u[e + 12 >> 2]
                                            }
                                        u[e + 116 >> 2] = d, u[e + 108 >> 2] = r
                                    }, i[3] = function(e) {
                                        e = u[40 + (e |= 0) >> 2], j(u[e + 40 >> 2]), u[e + 40 >> 2] = 0
                                    }, i[4] = function(e) {
                                        var r, n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0;
                                        r = u[40 + (e |= 0) >> 2], (o = (t = u[u[r >> 2] >> 2]) + -1 | 0) >>> 0 < 12 && (n = 0, 2077 >>> (65535 & o) & 1) || (n = t + -7 >>> 0 > 3), u[r + 40 >> 2] = 0, u[r + 44 >> 2] = 0, u[r + 48 >> 2] = 0, u[r + 52 >> 2] = 0;
                                        e: if (se(u[r + 20 >> 2], e, n ? 12 : 11)) {
                                            n | t + -7 >>> 0 > 3 || Te(), i = r + 40 | 0;
                                            r: {
                                                n: {
                                                    t: {
                                                        o: {
                                                            i: {
                                                                if (u[e + 92 >> 2]) {
                                                                    if (n = u[r >> 2], a = (f = u[n >> 2]) + -1 | 0, t >>> 0 <= 10) {
                                                                        if (a >>> 0 >= 12) break t;
                                                                        if (o = 0, !(2077 >>> (65535 & a) & 1)) break t;
                                                                        break n
                                                                    }
                                                                    if (a >>> 0 >= 12) break i;
                                                                    if (t = 0, !(2077 >>> (65535 & a) & 1)) break i;
                                                                    break o
                                                                }
                                                                a: if (t >>> 0 <= 10) {
                                                                    if (function() {
                                                                            var e;
                                                                            (0 | (e = u[2673])) != u[2555] && (u[2854] = 136, u[2853] = 137, u[2852] = 138, u[2851] = 139, u[2850] = 140, u[2849] = 136, u[2848] = 137, u[2847] = 138, u[2846] = 141, u[2845] = 139, u[2844] = 142, u[2555] = e)
                                                                        }(), u[r + 44 >> 2] = 6, !u[e + 56 >> 2]) break a;
                                                                    if (o = Xe(1, 0, (-2 & (a = (o = u[e + 12 >> 2]) + 1 | 0)) + o | 0), u[i >> 2] = o, !o) break e;
                                                                    u[r + 4 >> 2] = o, e = u[e + 12 >> 2], u[r + 44 >> 2] = 7, e = e + o | 0, u[r + 8 >> 2] = e, u[r + 12 >> 2] = e + (a >> 1), Te()
                                                                } else u[r + 44 >> 2] = 8;
                                                                if (s = 1, n) break e;
                                                                switch (e = 9, t + -5 | 0) {
                                                                    default: e = t >>> 0 < 11 ? 10 : 11;
                                                                    break;
                                                                    case 0:
                                                                            case 5:
                                                                }
                                                                if (u[r + 48 >> 2] = e, t >>> 0 > 10) break e;
                                                                break r
                                                            }
                                                            t = f + -7 >>> 0 > 3
                                                        }
                                                        if (f = u[e + 100 >> 2], c = u[e + 12 >> 2], l = u[e + 16 >> 2], d = i, a = Xe(1, 0, (g = ((p = (v = -2 & (i = (o = u[e + 96 >> 2]) + 1 | 0)) << 1) + (m = o << 1) << 2) + (t ? 0 : o << 3) | 0) + (t ? 283 : 367) | 0), u[d >> 2] = a, !a) break e;
                                                        if (s = 31 + (a + g | 0) & -32, u[r + 24 >> 2] = s, u[r + 32 >> 2] = s + 168, u[r + 28 >> 2] = s + 84, u[r + 36 >> 2] = t ? 0 : s + 252 | 0, ge(s, u[e + 12 >> 2], u[e + 16 >> 2], u[n + 16 >> 2], o, f, u[n + 32 >> 2], 1, a), s = c + 1 >> 1, c = l + 1 >> 1, i >>= 1, l = f + 1 >> 1, a = a + (m << 2) | 0, ge(u[r + 28 >> 2], s, c, u[n + 20 >> 2], i, l, u[n + 36 >> 2], 1, a), ge(u[r + 32 >> 2], s, c, u[n + 24 >> 2], i, l, u[n + 40 >> 2], 1, a + (v << 2) | 0), u[r + 44 >> 2] = 12, s = 1, t) break e;ge(u[r + 36 >> 2], u[e + 12 >> 2], u[e + 16 >> 2], u[n + 28 >> 2], o, f, u[n + 44 >> 2], 1, a + (p << 2) | 0),
                                                        u[r + 48 >> 2] = 13;
                                                        break r
                                                    }
                                                    o = f + -7 >>> 0 > 3
                                                }
                                                if (a = u[e + 100 >> 2], c = u[e + 12 >> 2], l = u[e + 16 >> 2], n = u[e + 96 >> 2], v = A(n, 6), f = (o ? v : n << 3) << 2, d = i, p = A(n, 3), m = n << 2, t = Xe(1, 0, (i = f + (o ? p : m) | 0) + (o ? 283 : 367) | 0), u[d >> 2] = t, !t) break e;
                                                if (s = 1, i = 31 + (t + i | 0) & -32, u[r + 24 >> 2] = i, u[r + 32 >> 2] = i + 168, u[r + 28 >> 2] = i + 84, u[r + 36 >> 2] = o ? 0 : i + 252 | 0, d = i, i = t + f | 0, ge(d, u[e + 12 >> 2], u[e + 16 >> 2], i, n, a, 0, 1, t), f = c + 1 >> 1, c = l + 1 >> 1, l = n << 1, ge(u[r + 28 >> 2], f, c, n + i | 0, n, a, 0, 1, t + (l << 2) | 0), ge(u[r + 32 >> 2], f, c, i + l | 0, n, a, 0, 1, t + (m << 2) | 0), u[r + 44 >> 2] = 14, function() {
                                                        var e;
                                                        (0 | (e = u[2673])) != u[2553] && (u[2831] = 129, u[2829] = 130, u[2838] = 131, u[2837] = 132, u[2836] = 129, u[2835] = 130, u[2834] = 133, u[2833] = 131, u[2832] = 132, u[2830] = 134, u[2828] = 135, u[2553] = e)
                                                    }(), o) break e;
                                                switch (ge(u[r + 36 >> 2], u[e + 12 >> 2], u[e + 16 >> 2], i + p | 0, n, a, 0, 1, t + (v << 2) | 0), u[r + 48 >> 2] = 15, e = 16, u[u[r >> 2] >> 2] + -5 | 0) {
                                                    default: e = 17;
                                                    break;
                                                    case 0:
                                                            case 5:
                                                }
                                                u[r + 52 >> 2] = e
                                            }
                                            Oe()
                                        }
                                        return 0 | s
                                    }, i[5] = function(e) {
                                        var r = 0,
                                            n = 0,
                                            t = 0;
                                        return u[12 + (e |= 0) >> 2] < 1 | u[e + 16 >> 2] < 1 || (r = u[e + 40 >> 2], n = 0 | i[u[r + 44 >> 2]](e, r), (t = u[r + 48 >> 2]) && i[0 | t](e, r, n), u[r + 16 >> 2] = u[r + 16 >> 2] + n, r = 1), 0 | r
                                    }, i[6] = function(e, r) {
                                        var n;
                                        return e |= 0, r = u[(r |= 0) >> 2], n = u[r + 20 >> 2], Ue(u[e + 20 >> 2], u[e + 32 >> 2], u[e + 24 >> 2], u[e + 28 >> 2], u[e + 36 >> 2], A(n, u[e + 8 >> 2]) + u[r + 16 >> 2] | 0, n, u[e + 12 >> 2], u[e + 16 >> 2], u[11376 + (u[r >> 2] << 2) >> 2]), u[e + 16 >> 2]
                                    }, i[7] = function(e, r) {
                                        r |= 0;
                                        var n, t, o, a, f, s, c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0;
                                        if (d = u[16 + (e |= 0) >> 2], f = ((n = u[e + 12 >> 2]) + 1 | 0) / 2 | 0, t = u[r >> 2], c = u[t + 20 >> 2], p = u[e + 8 >> 2], m = u[t + 16 >> 2] + A(p, c) | 0, o = u[11248 + (u[t >> 2] << 2) >> 2], l = u[e + 28 >> 2], v = u[e + 24 >> 2], g = u[e + 20 >> 2], p ? (i[0 | o](u[r + 4 >> 2], g, u[r + 8 >> 2], u[r + 12 >> 2], v, l, m - c | 0, m, n), c = d + 1 | 0) : (i[0 | o](g, 0, v, l, v, l, m, 0, n), c = d), s = c, a = d + p | 0, (0 | d) < 3) c = v, d = l;
                                        else
                                            for (p = p + 2 | 0; b = (g = ((c = u[e + 32 >> 2]) << 1) + g | 0) - c | 0, k = l, c = (h = v) + (v = u[e + 36 >> 2]) | 0, d = l + v | 0, m = ((l = u[t + 20 >> 2]) << 1) + m | 0, i[0 | o](b, g, h, k, c, d, m - l | 0, m, n), l = d, v = c, (0 | (p = p + 2 | 0)) < (0 | a););
                                        return l = u[e + 32 >> 2] + g | 0, (u[e + 84 >> 2] + a | 0) < u[e + 88 >> 2] ? (re(u[r + 4 >> 2], l, n), re(u[r + 8 >> 2], c, f), re(u[r + 12 >> 2], d, f), s + -1 | 0) : (1 & a || i[0 | o](l, 0, c, d, c, d, u[t + 20 >> 2] + m | 0, 0, n), 0 | s)
                                    }, i[8] = function(e, r) {
                                        e |= 0;
                                        var n, t, o, i, a, f, s, c = 0,
                                            l = 0,
                                            d = 0;
                                        return r = u[(r |= 0) >> 2], a = u[r + 24 >> 2], f = u[(n = r + 40 | 0) >> 2], l = u[r + 20 >> 2], d = u[(t = r + 36 | 0) >> 2], c = u[r + 16 >> 2], o = u[e + 8 >> 2], r = u[r + 32 >> 2], s = c + A(o, r) | 0, c = r, r = u[e + 12 >> 2], i = u[e + 16 >> 2], Ve(u[e + 20 >> 2], u[e + 32 >> 2], s, c, r, i), c = l + A(c = d, d = o >> 1) | 0, r = (r + 1 | 0) / 2 | 0, l = (i + 1 | 0) / 2 | 0, Ve(u[e + 24 >> 2], u[e + 36 >> 2], c, u[t >> 2], r, l), Ve(u[e + 28 >> 2], u[e + 36 >> 2], A(d, f) + a | 0, u[n >> 2], r, l), u[e + 16 >> 2]
                                    }, i[9] = function(e, r, n) {
                                        r |= 0, n |= 0;
                                        var t = 0,
                                            o = 0,
                                            f = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0;
                                        if ((f = u[104 + (e |= 0) >> 2]) && (o = u[e + 16 >> 2], t = u[e + 8 >> 2], c = u[r >> 2], u[e + 56 >> 2] ? (t ? (f = f - u[e >> 2] | 0, n = o, r = t + -1 | 0) : (n = o + -1 | 0, r = 0), o = (0 | (t = (t = t + o | 0) + (o = u[e + 84 >> 2]) | 0)) == u[e + 88 >> 2] ? t - (r + o | 0) | 0 : n) : r = t, !((0 | o) < 1))) {
                                            for (l = u[e + 12 >> 2], m = u[c >> 2], n = u[c + 20 >> 2], d = 1 + (v = u[c + 16 >> 2] + A(n, r) | 0) | 0, r = 15;;) {
                                                if (t = 0, (0 | l) >= 1) {
                                                    for (; g = n = (t << 1) + d | 0, h = 240 & s[0 | n], n = s[t + f | 0] >>> 4 | 0, a[0 | g] = h | n, r &= n, (0 | l) != (0 | (t = t + 1 | 0)););
                                                    n = u[c + 20 >> 2]
                                                }
                                                if (d = n + d | 0, f = u[e >> 2] + f | 0, (0 | (p = p + 1 | 0)) == (0 | o)) break
                                            }
                                            15 == (0 | r) | m + -7 >>> 0 > 3 || i[u[2665]](v, l, o, n)
                                        }
                                        return 0
                                    }, i[10] = function(e, r, n) {
                                        r |= 0, n |= 0;
                                        var t = 0,
                                            o = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0;
                                        return (o = u[104 + (e |= 0) >> 2]) && (a = u[r >> 2], c = 4 == (0 | (f = u[a >> 2])) | 9 == (0 | f), r = u[e + 16 >> 2], t = u[e + 8 >> 2], l = u[e + 12 >> 2], u[e + 56 >> 2] ? (t ? (s = t + -1 | 0, o = o - u[e >> 2] | 0, n = r) : n = r + -1 | 0, r = (0 | (r = (r = r + t | 0) + (t = u[e + 84 >> 2]) | 0)) == u[e + 88 >> 2] ? r - (t + s | 0) | 0 : n) : s = t, t = u[e >> 2], e = u[a + 20 >> 2], n = u[a + 16 >> 2] + A(e, s) | 0, !(0 | i[u[2666]](o, t, l, r, n + (c ? 0 : 3) | 0, e)) | f + -7 >>> 0 > 3 || i[u[2664]](n, c, l, r, u[a + 20 >> 2])), 0
                                    }, i[11] = function(e, r, n) {
                                        e |= 0, n |= 0;
                                        var t, o, i, a, f = 0;
                                        o = u[(r |= 0) >> 2], n = u[o + 28 >> 2], i = u[o + 44 >> 2], f = n + A(i, u[e + 8 >> 2]) | 0, t = u[e + 16 >> 2], a = u[e + 12 >> 2];
                                        e: if (r = u[e + 104 >> 2]) {
                                            if ((0 | t) < 1) break e;
                                            for (n = 0; f = re(f, r, a) + u[o + 44 >> 2] | 0, r = u[e >> 2] + r | 0, (0 | t) != (0 | (n = n + 1 | 0)););
                                        } else
                                        if (!(!n | (0 | t) < 1))
                                            for (r = 0; f = de(f, 255, a) + i | 0, (0 | t) != (0 | (r = r + 1 | 0)););
                                        return 0
                                    }, i[12] = function(e, r) {
                                        r |= 0;
                                        var n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0;
                                        if (o = u[16 + (e |= 0) >> 2], i = u[r + 24 >> 2], (n = u[u[r >> 2] >> 2]) + -7 >>> 0 > 3 && !(1 << n & 4154 && n >>> 0 <= 12) || (n = u[e + 104 >> 2]) && qe(u[e + 20 >> 2], u[e + 32 >> 2], n, u[e >> 2], u[e + 12 >> 2], o, 0), (0 | o) < 1) return 0;
                                        for (a = o + 1 >> 1, f = u[e + 32 >> 2], t = u[e + 20 >> 2], n = o; s = be(i, n, t, f), t = A(s, f) + t | 0, c = Ne(i) + c | 0, (0 | (n = n - s | 0)) > 0;);
                                        if ((0 | o) >= 1) {
                                            for (o = u[r + 28 >> 2], i = u[e + 36 >> 2], t = u[e + 24 >> 2], n = a; f = be(o, n, t, i), Ne(o), t = A(i, f) + t | 0, (0 | (n = n - f | 0)) > 0;);
                                            for (t = u[e + 28 >> 2], r = u[r + 32 >> 2], e = u[e + 36 >> 2]; n = be(r, a, t, e), Ne(r), t = A(e, n) + t | 0, (0 | (a = a - n | 0)) > 0;);
                                        }
                                        return 0 | c
                                    }, i[13] = function(e, r, n) {
                                        e |= 0, n |= 0;
                                        var t, o, i = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0;
                                        t = u[(r |= 0) >> 2], a = u[t + 28 >> 2], o = u[r + 16 >> 2], f = u[t + 44 >> 2], s = a + A(o, f) | 0;
                                        e: {
                                            if (i = u[e + 104 >> 2]) {
                                                if ((0 | (n = u[e + 16 >> 2])) < 1) break e;
                                                for (l = u[t + 32 >> 2], a = u[r + 36 >> 2], f = u[e >> 2], d = u[t + 16 >> 2], e = 0; c = be(a, n, i, f), i = A(f, c) + i | 0, e = Ne(a) + e | 0, (0 | (n = n - c | 0)) > 0;);
                                                if ((0 | e) < 1) break e;
                                                return qe(A(o, l) + d | 0, u[t + 32 >> 2], s, u[t + 44 >> 2], u[u[r + 36 >> 2] + 52 >> 2], e, 1), 0
                                            }
                                            if (!(!a | (0 | n) < 1))
                                                for (e = u[e + 96 >> 2], i = 0; s = de(s, 255, e) + f | 0, (0 | (i = i + 1 | 0)) != (0 | n););
                                        }
                                        return 0
                                    }, i[14] = function(e, r) {
                                        r |= 0;
                                        var n, t, o = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0;
                                        if ((0 | (n = u[16 + (e |= 0) >> 2])) < 1) return 0;
                                        for (t = n + 1 >> 1, o = u[r + 24 >> 2];;) {
                                            a = o, o = u[e + 32 >> 2], s = be(a, n - c | 0, u[e + 20 >> 2] + A(o, c) | 0, o), o = t - l | 0, $e(u[r + 28 >> 2], o) && (f = u[e + 36 >> 2], f = be(u[r + 28 >> 2], o, u[e + 24 >> 2] + A(f, l) | 0, f), a = o, o = u[e + 36 >> 2], be(u[r + 32 >> 2], a, u[e + 28 >> 2] + A(o, l) | 0, o), l = f + l | 0), c = s + c | 0, s = u[r >> 2], a = u[s >> 2], f = 0, o = u[r + 24 >> 2];
                                            e: if (!(u[o + 64 >> 2] >= u[o + 56 >> 2]))
                                                for (p = u[11312 + (a << 2) >> 2], a = u[s + 16 >> 2] + A(u[s + 20 >> 2], u[r + 16 >> 2] + d | 0) | 0;;) {
                                                    if (u[o + 24 >> 2] > 0) break e;
                                                    if (v = u[r + 28 >> 2], u[v + 64 >> 2] >= u[v + 56 >> 2] | u[v + 24 >> 2] > 0) break e;
                                                    if (Ee(o), Ee(u[r + 28 >> 2]), Ee(u[r + 32 >> 2]), o = u[r + 24 >> 2], i[0 | p](u[o + 68 >> 2], u[u[r + 28 >> 2] + 68 >> 2], u[u[r + 32 >> 2] + 68 >> 2], a, u[o + 52 >> 2]), f = f + 1 | 0, a = u[s + 20 >> 2] + a | 0, o = u[r + 24 >> 2], !(u[o + 64 >> 2] < u[o + 56 >> 2])) break
                                                }
                                            if (d = f + d | 0, !((0 | n) > (0 | c))) break
                                        }
                                        return 0 | d
                                    }, i[15] = function(e, r, n) {
                                        r |= 0, n |= 0;
                                        var t = 0,
                                            o = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0;
                                        e: if (!(!(t = u[104 + (e |= 0) >> 2]) | (0 | n) < 1))
                                            for (s = u[r + 16 >> 2] + n | 0, o = u[r + 36 >> 2];;) {
                                                if (a = u[e + 8 >> 2], f = u[o + 60 >> 2], c = t, t = u[e >> 2], be(o, u[e + 16 >> 2] + (a - f | 0) | 0, c + A(t, f - a | 0) | 0, t), (0 | (n = n - (0 | i[u[r + 52 >> 2]](r, s - n | 0, n)) | 0)) < 1) break e;
                                                t = u[e + 104 >> 2]
                                            }
                                        return 0
                                    }, i[16] = function(e, r, n) {
                                        r |= 0, n |= 0;
                                        var t = 0,
                                            o = 0,
                                            f = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0;
                                        if (t = u[36 + (e |= 0) >> 2], !(u[t + 64 >> 2] >= u[t + 56 >> 2])) {
                                            f = u[e >> 2], p = u[f >> 2] + -7 | 0, o = u[f + 20 >> 2], v = u[f + 16 >> 2] + A(o, r) | 0, l = u[t + 52 >> 2], r = 15;
                                            e: if (!((0 | n) < 1 | u[t + 24 >> 2] > 0))
                                                for (d = v + 1 | 0;;) {
                                                    if (Ee(t), t = 0, (0 | l) >= 1)
                                                        for (; m = o = (t << 1) + d | 0, g = 240 & s[0 | o], o = s[u[u[e + 36 >> 2] + 68 >> 2] + t | 0] >>> 4 | 0, a[0 | m] = g | o, r &= o, (0 | l) != (0 | (t = t + 1 | 0)););
                                                    if (o = u[f + 20 >> 2], t = u[e + 36 >> 2], c = c + 1 | 0, u[t + 64 >> 2] >= u[t + 56 >> 2] | (0 | c) >= (0 | n)) break e;
                                                    if (d = o + d | 0, !(u[t + 24 >> 2] <= 0)) break
                                                }
                                            15 == (0 | r) | p >>> 0 > 3 || i[u[2665]](v, l, c, o)
                                        }
                                        return 0 | c
                                    }, i[17] = function(e, r, n) {
                                        r |= 0, n |= 0;
                                        var t = 0,
                                            o = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0;
                                        if (t = u[36 + (e |= 0) >> 2], !(u[t + 64 >> 2] >= u[t + 56 >> 2])) {
                                            if (a = u[e >> 2], s = 4 == (0 | (o = u[a >> 2])) | 9 == (0 | o), v = o + -7 | 0, f = u[a + 20 >> 2], c = u[a + 16 >> 2] + A(f, r) | 0, l = u[t + 52 >> 2], o = 0, r = 0, !((0 | n) < 1 || (r = 0, u[t + 24 >> 2] > 0))) {
                                                for (r = (s ? 0 : 3) + c | 0; Ee(t), d = i[u[2666]](u[u[e + 36 >> 2] + 68 >> 2], 0, l, 1, r, 0) | d, f = u[a + 20 >> 2], t = u[e + 36 >> 2], o = o + 1 | 0, !(u[t + 64 >> 2] >= u[t + 56 >> 2] | (0 | o) >= (0 | n)) && (r = r + f | 0, u[t + 24 >> 2] <= 0););
                                                r = 0 != (0 | d)
                                            }!r | v >>> 0 > 3 || i[u[2664]](c, s, l, o, f)
                                        }
                                        return 0 | o
                                    }, i[18] = G, i[19] = function(e, r, n, t, o, i) {
                                        e |= 0, r |= 0, n |= 0, t |= 0, i |= 0;
                                        var a = 0,
                                            c = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0;
                                        e: {
                                            if ((0 | (o |= 0)) <= 15)
                                                for (h = u[(o << 2) + r >> 2] + A(n, 11) | 0, c = u[e + 8 >> 2], a = u[e + 4 >> 2];;) {
                                                    if (v = s[0 | h], (0 | c) > -1 || ((n = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (m = s[0 | n] | s[n + 1 | 0] << 8 | s[n + 2 | 0] << 16 | s[n + 3 | 0] << 24, u[e + 12 >> 2] = n + 3, c = c + 24 | 0, u[e + 8 >> 2] = c, u[e >> 2] = u[e >> 2] << 24 | (m >>> 8 & 65280 | m << 8 & 16711680 | m << 24) >>> 8) : (Me(e), c = u[e + 8 >> 2])), (v = (d = u[e >> 2]) >>> c >>> 0 <= (n = A(a, v) >>> 8 | 0) >>> 0) || (d = d - ((n = n + 1 | 0) << c) | 0, u[e >> 2] = d, n = a - n | 0), n >>> 0 <= 126 && (c = c - s[n + 9056 | 0] | 0, u[e + 8 >> 2] = c, n = s[n + 9184 | 0]), u[e + 4 >> 2] = n, m = o, a = o, v) break e;
                                                    for (;;) {
                                                        if (v = s[h + 1 | 0], (0 | c) > -1 || ((o = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (a = s[0 | o] | s[o + 1 | 0] << 8 | s[o + 2 | 0] << 16 | s[o + 3 | 0] << 24, c = c + 24 | 0, u[e + 8 >> 2] = c, u[e + 12 >> 2] = o + 3, d = d << 24 | (a >>> 8 & 65280 | a << 8 & 16711680 | a << 24) >>> 8, u[e >> 2] = d) : (Me(e), d = u[e >> 2], c = u[e + 8 >> 2])), (p = d >>> c | 0) >>> 0 <= (a = A(n, v) >>> 8 | 0) >>> 0 ? n = a : (d = d - ((o = a + 1 | 0) << c) | 0, u[e >> 2] = d, n = n - o | 0), n >>> 0 <= 126 && (c = c - s[n + 9056 | 0] | 0, u[e + 8 >> 2] = c, n = s[n + 9184 | 0]), u[e + 4 >> 2] = n, v = u[((o = m + 1 | 0) << 2) + r >> 2], p >>> 0 <= a >>> 0) {
                                                            if (a = 16, m = o, h = v, 16 != (0 | o)) continue;
                                                            break e
                                                        }
                                                        break
                                                    }
                                                    if (g = s[h + 2 | 0], (0 | c) > -1 || ((a = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (p = s[0 | a] | s[a + 1 | 0] << 8 | s[a + 2 | 0] << 16 | s[a + 3 | 0] << 24, c = c + 24 | 0, u[e + 8 >> 2] = c, u[e + 12 >> 2] = a + 3, d = d << 24 | (p >>> 8 & 65280 | p << 8 & 16711680 | p << 24) >>> 8, u[e >> 2] = d) : (Me(e), d = u[e >> 2], c = u[e + 8 >> 2])), p = e, (b = d >>> c | 0) >>> 0 > (a = g = A(n, g) >>> 8 | 0) >>> 0 && (a = g + 1 | 0, u[e >> 2] = d - (a << c), a = n - a | 0), a >>> 0 <= 126 && (c = c - s[a + 9056 | 0] | 0, u[e + 8 >> 2] = c, a = s[a + 9184 | 0]), u[p + 4 >> 2] = a, b >>> 0 <= g >>> 0 ? (p = 1, h = v + 11 | 0) : (p = T(e, h), c = u[e + 8 >> 2], h = v + 22 | 0), (0 | c) > -1 ? n = c : (n = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (a = s[0 | n] | s[n + 1 | 0] << 8 | s[n + 2 | 0] << 16 | s[n + 3 | 0] << 24, u[e + 12 >> 2] = n + 3, n = c + 24 | 0, u[e + 8 >> 2] = n, u[e >> 2] = u[e >> 2] << 24 | (a >>> 8 & 65280 | a << 8 & 16711680 | a << 24) >>> 8) : (Me(e), n = u[e + 8 >> 2]), c = n + -1 | 0, u[e + 8 >> 2] = c, a = (a = u[e + 4 >> 2]) + (v = (d = a >>> 1 | 0) - ((g = u[e >> 2]) >>> n | 0) >> 31) | 1, u[e + 4 >> 2] = a, u[e >> 2] = g - ((v & d + 1) << n), f[(s[m + 5328 | 0] << 1) + i >> 1] = A(u[(((0 | m) > 0) << 2) + t >> 2], (v ^ p) - v | 0), !((0 | m) < 15)) break
                                                }
                                            a = 16
                                        }
                                        return 0 | a
                                    }, i[20] = function(e, r, n, t, o, i) {
                                        e |= 0, r |= 0, n |= 0, t |= 0, i |= 0;
                                        var a = 0,
                                            c = 0,
                                            d = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0;
                                        e: {
                                            if ((0 | (o |= 0)) <= 15)
                                                for (b = u[(o << 2) + r >> 2] + A(n, 11) | 0, n = u[e + 8 >> 2], d = u[e + 4 >> 2];;) {
                                                    if (a = s[0 | b], (0 | n) > -1 || ((g = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (c = s[0 | g] | s[g + 1 | 0] << 8 | s[g + 2 | 0] << 16 | s[g + 3 | 0] << 24, u[e + 12 >> 2] = g + 3, n = n + 24 | 0, u[e + 8 >> 2] = n, u[e >> 2] = u[e >> 2] << 24 | (c >>> 8 & 65280 | c << 8 & 16711680 | c << 24) >>> 8) : (Me(e), n = u[e + 8 >> 2])), h = e, c = n, (m = (p = u[e >> 2]) >>> n | 0) >>> 0 > (a = A(a, d) >>> 8 | 0) >>> 0 ? (p = ((-1 ^ a) << n) + p | 0, u[e >> 2] = p, d = d - a | 0) : d = a + 1 | 0, n = c - (g = 24 ^ v(d)) | 0, u[h + 8 >> 2] = n, d = (d << g) - 1 | 0, u[e + 4 >> 2] = d, g = o, h = o, m >>> 0 <= a >>> 0) break e;
                                                    for (; a = s[b + 1 | 0], (0 | n) > -1 || ((o = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (c = s[0 | o] | s[o + 1 | 0] << 8 | s[o + 2 | 0] << 16 | s[o + 3 | 0] << 24, n = n + 24 | 0, u[e + 8 >> 2] = n, u[e + 12 >> 2] = o + 3, p = p << 24 | (c >>> 8 & 65280 | c << 8 & 16711680 | c << 24) >>> 8, u[e >> 2] = p) : (Me(e), p = u[e >> 2], n = u[e + 8 >> 2])), h = e, c = n, (m = p >>> n | 0) >>> 0 > (a = A(a, d) >>> 8 | 0) >>> 0 ? (p = ((-1 ^ a) << n) + p | 0, u[e >> 2] = p, d = d - a | 0) : d = a + 1 | 0, n = c - (o = 24 ^ v(d)) | 0, u[h + 8 >> 2] = n, d = (d << o) - 1 | 0, u[e + 4 >> 2] = d, o = g + 1 | 0, m >>> 0 <= a >>> 0;) {
                                                        if (h = 16, 16 == (0 | o)) break e;
                                                        b = u[(o << 2) + r >> 2], g = o
                                                    }
                                                    if (k = u[(o << 2) + r >> 2], m = s[b + 2 | 0], (0 | n) > -1 || ((c = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (a = s[0 | c] | s[c + 1 | 0] << 8 | s[c + 2 | 0] << 16 | s[c + 3 | 0] << 24, n = n + 24 | 0, u[e + 8 >> 2] = n, u[e + 12 >> 2] = c + 3, p = p << 24 | (a >>> 8 & 65280 | a << 8 & 16711680 | a << 24) >>> 8, u[e >> 2] = p) : (Me(e), p = u[e >> 2], n = u[e + 8 >> 2])), h = e, c = n, (w = p >>> n | 0) >>> 0 > (m = A(d, m) >>> 8 | 0) >>> 0 ? (u[e >> 2] = ((-1 ^ m) << n) + p, n = d - m | 0) : n = m + 1 | 0, c = c - (a = 24 ^ v(n)) | 0, u[h + 8 >> 2] = c, u[e + 4 >> 2] = (n << a) - 1, w >>> 0 <= m >>> 0 ? (p = 1, b = k + 11 | 0) : (p = T(e, b), c = u[e + 8 >> 2], b = k + 22 | 0), (0 | c) > -1 || ((n = u[e + 12 >> 2]) >>> 0 < l[e + 20 >> 2] ? (a = s[0 | n] | s[n + 1 | 0] << 8 | s[n + 2 | 0] << 16 | s[n + 3 | 0] << 24, u[e + 12 >> 2] = n + 3, c = c + 24 | 0, u[e + 8 >> 2] = c, u[e >> 2] = u[e >> 2] << 24 | (a >>> 8 & 65280 | a << 8 & 16711680 | a << 24) >>> 8) : (Me(e), c = u[e + 8 >> 2])), n = c + -1 | 0, u[e + 8 >> 2] = n, d = (a = (m = (d = u[e + 4 >> 2]) >>> 1 | 0) - ((k = u[e >> 2]) >>> c | 0) >> 31) + d | 1, u[e + 4 >> 2] = d, u[e >> 2] = k - ((a & m + 1) << c), f[(s[g + 5328 | 0] << 1) + i >> 1] = A(u[(((0 | g) > 0) << 2) + t >> 2], (a ^ p) - a | 0), !((0 | g) < 15)) break
                                                }
                                            h = 16
                                        }
                                        return 0 | h
                                    }, i[21] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            f = 0,
                                            u = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (; 255 != (0 | (o = s[r + i | 0])) && (o ? (u = f = e + i | 0, o = t ? 4278190080 / (o >>> 0) | 0 : A(o, 65793), a[0 | u] = A(o, s[0 | f]) + 8388608 >>> 24) : a[e + i | 0] = 0), (0 | (i = i + 1 | 0)) != (0 | n););
                                    }, i[22] = function(e, r, n) {
                                        e |= 0, n |= 0;
                                        var t = 0,
                                            o = 0,
                                            i = 0,
                                            a = 0;
                                        if ((0 | (r |= 0)) >= 1)
                                            for (;
                                                (o = u[(t = (i << 2) + e | 0) >> 2]) >>> 0 <= 4278190079 && (a = t, o >>> 0 >= 16777216 ? (t = o >>> 24 | 0, t = n ? 4278190080 / (t >>> 0) | 0 : A(t, 65793), t = A(t, o >>> 16 & 255) + 8388608 >>> 8 & 16711680 | A(t, o >>> 8 & 255) + 8388608 >>> 16 & 65280 | -16777216 & o | A(t, 255 & o) + 8388608 >>> 24) : t = 0, u[a >> 2] = t), (0 | (i = i + 1 | 0)) != (0 | r););
                                    }, i[23] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (d = (0 | r) < 1;;) {
                                                if (f = 0, !d)
                                                    for (; v = i = (o = f << 1) + e | 0, u = s[0 | (l = (1 | o) + e | 0)], c = A(o = 15 & u, 4369), i = s[0 | i], a[0 | v] = A(c, 240 & i | i >>> 4) >>> 16 & 240 | A(255 & (15 & i | i << 4), c) >>> 20, a[0 | l] = A(240 & u | u >>> 4, c) >>> 16 & 240 | o, (0 | (f = f + 1 | 0)) != (0 | r););
                                                if (e = e + t | 0, o = (0 | n) > 1, n = n + -1 | 0, !o) break
                                            }
                                    }, i[24] = function(e, r, n, t, o, i) {
                                        e |= 0, r |= 0, n |= 0, o |= 0, i |= 0;
                                        var a = 0,
                                            f = 0;
                                        if ((0 | (t |= 0)) >= 1)
                                            for (; u[(f << 2) + i >> 2] = s[n + a | 0] | s[e + a | 0] << 16 | s[r + a | 0] << 8 | -16777216, a = o + a | 0, (0 | (f = f + 1 | 0)) != (0 | t););
                                    }, i[25] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, o |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0;
                                        if ((0 | (t |= 0)) >= 1)
                                            for (l = r ? 0 : 3, d = 0 != (0 | r), v = (0 | n) < 1;;) {
                                                if (!v)
                                                    for (p = e + l | 0, c = e + d | 0, r = 0; 255 != (0 | (f = s[(i = r << 2) + p | 0])) && (u = i + c | 0, f = A(f, 32897), a[0 | u] = A(f, s[0 | u]) >>> 23, a[0 | (u = (1 | i) + c | 0)] = A(f, s[0 | u]) >>> 23, a[0 | (i = (2 | i) + c | 0)] = A(f, s[0 | i]) >>> 23), (0 | n) != (0 | (r = r + 1 | 0)););
                                                if (e = e + o | 0, r = (0 | t) > 1, t = t + -1 | 0, !r) break
                                            }
                                    }, i[26] = function(e, r, n, t, o, i) {
                                        e |= 0, r |= 0, n |= 0, o |= 0, i |= 0;
                                        var f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0;
                                        if (u = 255, (0 | (t |= 0)) >= 1)
                                            for (d = (0 | n) < 1;;) {
                                                if (f = 0, !d)
                                                    for (; c = s[e + f | 0], a[(f << 2) + o | 0] = c, u &= c, (0 | (f = f + 1 | 0)) != (0 | n););
                                                if (o = o + i | 0, e = e + r | 0, (0 | (l = l + 1 | 0)) == (0 | t)) break
                                            }
                                        return 255 != (0 | u) | 0
                                    }, i[27] = function(e, r, n, t, o, i) {
                                        e |= 0, r |= 0, n |= 0, o |= 0, i |= 0;
                                        var a = 0,
                                            f = 0,
                                            c = 0;
                                        if ((0 | (t |= 0)) >= 1)
                                            for (f = (0 | n) < 1, c = i << 2;;) {
                                                if (i = 0, !f)
                                                    for (; u[(i << 2) + o >> 2] = s[e + i | 0] << 8, (0 | (i = i + 1 | 0)) != (0 | n););
                                                if (e = e + r | 0, o = o + c | 0, (0 | (a = a + 1 | 0)) == (0 | t)) break
                                            }
                                    }, i[28] = function(e, r, n, t, o, i) {
                                        e |= 0, r |= 0, n |= 0, o |= 0, i |= 0;
                                        var f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0;
                                        if (u = 255, (0 | (t |= 0)) >= 1)
                                            for (d = (0 | n) < 1;;) {
                                                if (f = 0, !d)
                                                    for (; c = s[(f << 2) + e | 0], a[o + f | 0] = c, u &= c, (0 | (f = f + 1 | 0)) != (0 | n););
                                                if (o = o + i | 0, e = e + r | 0, (0 | (l = l + 1 | 0)) == (0 | t)) break
                                            }
                                        return 255 == (255 & u) | 0
                                    }, i[29] = function(e, r, n) {
                                        e |= 0, r |= 0;
                                        var t = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (; a[r + t | 0] = u[(t << 2) + e >> 2] >>> 8, (0 | (t = t + 1 | 0)) != (0 | n););
                                    }, i[30] = function(e, r) {
                                        e |= 0, r |= 0;
                                        for (var n = 0;;) {
                                            if ((0 | r) < 1) return 0;
                                            if (r = r + -1 | 0, n = s[0 | e], e = e + 1 | 0, 255 != (0 | n)) break
                                        }
                                        return 1
                                    }, i[31] = function(e, r) {
                                        e |= 0;
                                        var n = 0,
                                            t = 0,
                                            o = 0;
                                        e: if (!((0 | (r |= 0)) <= 0)) {
                                            for (;;) {
                                                if (255 == s[e + n | 0]) {
                                                    if (n = n + 4 | 0, t = (0 | r) < 2, r = r + -1 | 0, !t) continue;
                                                    break e
                                                }
                                                break
                                            }
                                            o = 1
                                        }
                                        return 0 | o
                                    }, i[32] = function(e, r, n) {
                                        n |= 0, J(e |= 0, r |= 0), n && J(e + 32 | 0, r + 4 | 0)
                                    }, i[33] = function(e, r) {
                                        r |= 0;
                                        var n, t, o = 0,
                                            i = 0,
                                            a = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            A = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0;
                                        i = L + -64 | 0, s = (a = f[24 + (e |= 0) >> 1]) + (o = f[e >> 1]) | 0, c = (l = f[e + 16 >> 1]) + (d = f[e + 8 >> 1]) | 0, u[i + 32 >> 2] = s - c, a = o - a | 0, o = d - l | 0, u[i + 48 >> 2] = a - o, u[i + 16 >> 2] = o + a, m = s + c | 0, u[i >> 2] = m, s = (a = f[e + 26 >> 1]) + (o = f[e + 2 >> 1]) | 0, c = (l = f[e + 18 >> 1]) + (d = f[e + 10 >> 1]) | 0, u[i + 36 >> 2] = s - c, a = o - a | 0, o = d - l | 0, u[i + 52 >> 2] = a - o, a = o + a | 0, u[i + 20 >> 2] = a, o = s + c | 0, u[i + 4 >> 2] = o, d = (s = f[e + 4 >> 1]) - (l = f[e + 28 >> 1]) | 0, v = (c = f[e + 12 >> 1]) - (A = f[e + 20 >> 1]) | 0, u[i + 56 >> 2] = d - v, s = (c = c + A | 0) + (l = s + l | 0) | 0, u[i + 8 >> 2] = s, l = l - c | 0, u[i + 40 >> 2] = l, d = d + v | 0, u[i + 24 >> 2] = d, e = (v = (c = f[e + 30 >> 1]) + (A = f[e + 6 >> 1]) | 0) + (n = (p = f[e + 22 >> 1]) + (g = f[e + 14 >> 1]) | 0) | 0, u[i + 12 >> 2] = e, c = (t = A - c | 0) - (p = g - p | 0) | 0, u[i + 60 >> 2] = c, A = v - n | 0, u[i + 44 >> 2] = A, v = p + t | 0, u[i + 28 >> 2] = v, p = (m = m + 3 | 0) - e | 0, g = o - s | 0, f[r + 96 >> 1] = p - g >>> 3, e = e + m | 0, o = o + s | 0, f[r + 64 >> 1] = e - o >>> 3, f[r + 32 >> 1] = p + g >>> 3, f[r >> 1] = e + o >>> 3, o = (e = u[i + 16 >> 2] + 3 | 0) - v | 0, s = a - d | 0, f[r + 224 >> 1] = o - s >>> 3, e = e + v | 0, a = a + d | 0, f[r + 192 >> 1] = e - a >>> 3, f[r + 160 >> 1] = o + s >>> 3, f[r + 128 >> 1] = e + a >>> 3, a = (e = u[i + 32 >> 2] + 3 | 0) - A | 0, s = (o = u[i + 36 >> 2]) - l | 0, f[r + 352 >> 1] = a - s >>> 3, e = e + A | 0, o = o + l | 0, f[r + 320 >> 1] = e - o >>> 3, f[r + 288 >> 1] = a + s >>> 3, f[r + 256 >> 1] = e + o >>> 3, a = (e = u[i + 48 >> 2] + 3 | 0) - c | 0, s = (o = u[i + 52 >> 2]) - (i = u[i + 56 >> 2]) | 0, f[r + 480 >> 1] = a - s >>> 3, e = e + c | 0, i = i + o | 0, f[r + 448 >> 1] = e - i >>> 3, f[r + 416 >> 1] = a + s >>> 3, f[r + 384 >> 1] = e + i >>> 3
                                    }, i[34] = function(e, r) {
                                        r |= 0;
                                        var n = 0;
                                        n = (0 | (n = (e = f[(e |= 0) >> 1] + 4 >> 3) + s[0 | r] | 0)) > 0 ? n : 0, a[0 | r] = (0 | n) < 255 ? n : 255, n = (0 | (n = e + s[r + 1 | 0] | 0)) > 0 ? n : 0, a[r + 1 | 0] = (0 | n) < 255 ? n : 255, n = (0 | (n = e + s[r + 2 | 0] | 0)) > 0 ? n : 0, a[r + 2 | 0] = (0 | n) < 255 ? n : 255, n = (0 | (n = e + s[r + 3 | 0] | 0)) > 0 ? n : 0, a[r + 3 | 0] = (0 | n) < 255 ? n : 255, n = (0 | (n = e + s[r + 32 | 0] | 0)) > 0 ? n : 0, a[r + 32 | 0] = (0 | n) < 255 ? n : 255, n = (0 | (n = e + s[r + 33 | 0] | 0)) > 0 ? n : 0, a[r + 33 | 0] = (0 | n) < 255 ? n : 255, n = (0 | (n = e + s[r + 34 | 0] | 0)) > 0 ? n : 0, a[r + 34 | 0] = (0 | n) < 255 ? n : 255, n = (0 | (n = e + s[r + 35 | 0] | 0)) > 0 ? n : 0, a[r + 35 | 0] = (0 | n) < 255 ? n : 255, n = (0 | (n = e + s[r + 64 | 0] | 0)) > 0 ? n : 0, a[r + 64 | 0] = (0 | n) < 255 ? n : 255, n = (0 | (n = e + s[r + 65 | 0] | 0)) > 0 ? n : 0, a[r + 65 | 0] = (0 | n) < 255 ? n : 255, n = (0 | (n = e + s[r + 66 | 0] | 0)) > 0 ? n : 0, a[r + 66 | 0] = (0 | n) < 255 ? n : 255, n = (0 | (n = e + s[r + 67 | 0] | 0)) > 0 ? n : 0, a[r + 67 | 0] = (0 | n) < 255 ? n : 255, n = (0 | (n = e + s[r + 96 | 0] | 0)) > 0 ? n : 0, a[r + 96 | 0] = (0 | n) < 255 ? n : 255, n = (0 | (n = e + s[r + 97 | 0] | 0)) > 0 ? n : 0, a[r + 97 | 0] = (0 | n) < 255 ? n : 255, n = (0 | (n = e + s[r + 98 | 0] | 0)) > 0 ? n : 0, a[r + 98 | 0] = (0 | n) < 255 ? n : 255, e = (0 | (e = e + s[r + 99 | 0] | 0)) > 0 ? e : 0, a[r + 99 | 0] = (0 | e) < 255 ? e : 255
                                    }, i[35] = function(e, r) {
                                        r |= 0;
                                        var n, t, o = 0,
                                            i = 0,
                                            u = 0,
                                            c = 0;
                                        u = f[2 + (e |= 0) >> 1], n = (A(u, 20091) >> 16) + u | 0, i = f[e + 8 >> 1], o = (t = A(i, 35468) >> 16) + (c = f[e >> 1] + 4 | 0) | 0, e = (0 | (e = s[r + 32 | 0] + (n + o >> 3) | 0)) > 0 ? e : 0, a[r + 32 | 0] = (0 | e) < 255 ? e : 255, e = A(u, 35468) >> 16, u = (0 | (u = s[r + 33 | 0] + (e + o >> 3) | 0)) > 0 ? u : 0, a[r + 33 | 0] = (0 | u) < 255 ? u : 255, u = (0 | (u = s[r + 34 | 0] + (o - e >> 3) | 0)) > 0 ? u : 0, a[r + 34 | 0] = (0 | u) < 255 ? u : 255, o = (0 | (o = s[r + 35 | 0] + (o - n >> 3) | 0)) > 0 ? o : 0, a[r + 35 | 0] = (0 | o) < 255 ? o : 255, o = (u = i + (A(i, 20091) >> 16) | 0) + c | 0, i = (0 | (i = s[0 | r] + (o + n >> 3) | 0)) > 0 ? i : 0, a[0 | r] = (0 | i) < 255 ? i : 255, i = (0 | (i = s[r + 1 | 0] + (e + o >> 3) | 0)) > 0 ? i : 0, a[r + 1 | 0] = (0 | i) < 255 ? i : 255, i = (0 | (i = s[r + 2 | 0] + (o - e >> 3) | 0)) > 0 ? i : 0, a[r + 2 | 0] = (0 | i) < 255 ? i : 255, o = (0 | (o = s[r + 3 | 0] + (o - n >> 3) | 0)) > 0 ? o : 0, a[r + 3 | 0] = (0 | o) < 255 ? o : 255, o = c - t | 0, i = (0 | (i = s[r + 64 | 0] + (o + n >> 3) | 0)) > 0 ? i : 0, a[r + 64 | 0] = (0 | i) < 255 ? i : 255, i = (0 | (i = s[r + 65 | 0] + (e + o >> 3) | 0)) > 0 ? i : 0, a[r + 65 | 0] = (0 | i) < 255 ? i : 255, i = (0 | (i = s[r + 66 | 0] + (o - e >> 3) | 0)) > 0 ? i : 0, a[r + 66 | 0] = (0 | i) < 255 ? i : 255, o = (0 | (o = s[r + 67 | 0] + (o - n >> 3) | 0)) > 0 ? o : 0, a[r + 67 | 0] = (0 | o) < 255 ? o : 255, c = c - u | 0, o = (0 | (o = s[r + 96 | 0] + (c + n >> 3) | 0)) > 0 ? o : 0, a[r + 96 | 0] = (0 | o) < 255 ? o : 255, o = (0 | (o = s[r + 97 | 0] + (e + c >> 3) | 0)) > 0 ? o : 0, a[r + 97 | 0] = (0 | o) < 255 ? o : 255, e = (0 | (e = s[r + 98 | 0] + (c - e >> 3) | 0)) > 0 ? e : 0, a[r + 98 | 0] = (0 | e) < 255 ? e : 255, e = (0 | (e = s[r + 99 | 0] + (c - n >> 3) | 0)) > 0 ? e : 0, a[r + 99 | 0] = (0 | e) < 255 ? e : 255
                                    }, i[36] = function(e, r) {
                                        e |= 0, r |= 0, i[u[2703]](e, r, 1), i[u[2703]](e - -64 | 0, r + 128 | 0, 1)
                                    }, i[37] = function(e, r) {
                                        r |= 0, c[(e |= 0) >> 1] && i[u[2706]](e, r), c[e + 32 >> 1] && i[u[2706]](e + 32 | 0, r + 4 | 0), c[e + 64 >> 1] && i[u[2706]](e - -64 | 0, r + 128 | 0), c[e + 96 >> 1] && i[u[2706]](e + 96 | 0, r + 132 | 0)
                                    }, i[38] = function(e, r, n, t, o) {
                                        oe(e |= 0, r |= 0, 1, 16, n |= 0, t |= 0, o |= 0)
                                    }, i[39] = function(e, r, n, t, o) {
                                        var i = 0;
                                        ie(i = (i = e |= 0) + (e = (r |= 0) << 2) | 0, r, 1, 16, n |= 0, t |= 0, o |= 0), ie(i = e + i | 0, r, 1, 16, n, t, o), ie(e + i | 0, r, 1, 16, n, t, o)
                                    }, i[40] = function(e, r, n, t, o) {
                                        oe(e |= 0, 1, r |= 0, 16, n |= 0, t |= 0, o |= 0)
                                    }, i[41] = function(e, r, n, t, o, i) {
                                        r |= 0, oe(e |= 0, n |= 0, 1, 8, t |= 0, o |= 0, i |= 0), oe(r, n, 1, 8, t, o, i)
                                    }, i[42] = function(e, r, n, t, o, i) {
                                        r |= 0, ie((e |= 0) + (e = (n |= 0) << 2) | 0, n, 1, 8, t |= 0, o |= 0, i |= 0), ie(e + r | 0, n, 1, 8, t, o, i)
                                    }, i[43] = function(e, r, n) {
                                        e |= 0;
                                        var t, o, i, f, c, l, d, v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0;
                                        for (f = 0 - (r |= 0) | 0, c = 0 - (r << 1) | 0, l = (n |= 0) << 1 | 1, t = u[2548], o = u[2547], d = u[2546], i = u[2549]; m = s[0 | (h = (n = e + p | 0) + f | 0)], g = s[0 | n], v = s[n + c | 0] - s[r + n | 0] | 0, ((s[(m - g | 0) + i | 0] << 2) + s[v + i | 0] | 0) <= (0 | l) && (v = a[v + d | 0] + A(g - m | 0, 3) | 0, b = a[(v + 4 >> 3) + o | 0], a[0 | h] = s[(a[(v + 3 >> 3) + o | 0] + m | 0) + t | 0], a[0 | n] = s[(g - b | 0) + t | 0]), 16 != (0 | (p = p + 1 | 0)););
                                    }, i[44] = function(e, r, n) {
                                        e |= 0, r |= 0;
                                        var t, o, i, f, c, l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0;
                                        for (f = (n |= 0) << 1 | 1, t = u[2548], o = u[2547], c = u[2546], i = u[2549]; n = A(r, d) + e | 0, v = s[0 | (m = n + -1 | 0)], p = s[0 | n], l = s[n + -2 | 0] - s[n + 1 | 0] | 0, ((s[(v - p | 0) + i | 0] << 2) + s[l + i | 0] | 0) <= (0 | f) && (l = a[l + c | 0] + A(p - v | 0, 3) | 0, g = a[(l + 4 >> 3) + o | 0], a[0 | m] = s[(a[(l + 3 >> 3) + o | 0] + v | 0) + t | 0], a[0 | n] = s[(p - g | 0) + t | 0]), 16 != (0 | (d = d + 1 | 0)););
                                    }, i[45] = function(e, r, n) {
                                        var t, o, i, f, c, l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0;
                                        for (o = 0 - (r |= 0) | 0, g = (b = r << 2) + (e |= 0) | 0, i = 0 - (r << 1) | 0, f = (n |= 0) << 1 | 1, e = u[2548], n = u[2547], c = u[2546], t = u[2549]; h = s[0 | (p = (l = d + g | 0) + o | 0)], m = s[0 | l], v = s[l + i | 0] - s[r + l | 0] | 0, ((s[t + (h - m | 0) | 0] << 2) + s[v + t | 0] | 0) <= (0 | f) && (v = a[v + c | 0] + A(m - h | 0, 3) | 0, k = a[(v + 4 >> 3) + n | 0], a[0 | p] = s[(h + a[(v + 3 >> 3) + n | 0] | 0) + e | 0], a[0 | l] = s[(m - k | 0) + e | 0]), 16 != (0 | (d = d + 1 | 0)););
                                        for (g = g + b | 0, d = 0; h = s[0 | (p = (l = d + g | 0) + o | 0)], m = s[0 | l], v = s[l + i | 0] - s[r + l | 0] | 0, ((s[t + (h - m | 0) | 0] << 2) + s[v + t | 0] | 0) <= (0 | f) && (v = a[v + c | 0] + A(m - h | 0, 3) | 0, k = a[(v + 4 >> 3) + n | 0], a[0 | p] = s[(h + a[(v + 3 >> 3) + n | 0] | 0) + e | 0], a[0 | l] = s[(m - k | 0) + e | 0]), 16 != (0 | (d = d + 1 | 0)););
                                        for (h = g + b | 0, d = 0; b = s[0 | (m = (l = d + h | 0) + o | 0)], g = s[0 | l], p = s[l + i | 0] - s[r + l | 0] | 0, ((s[t + (b - g | 0) | 0] << 2) + s[p + t | 0] | 0) <= (0 | f) && (p = a[p + c | 0] + A(g - b | 0, 3) | 0, v = a[(p + 4 >> 3) + n | 0], a[0 | m] = s[(b + a[(p + 3 >> 3) + n | 0] | 0) + e | 0], a[0 | l] = s[(g - v | 0) + e | 0]), 16 != (0 | (d = d + 1 | 0)););
                                    }, i[46] = function(e, r, n) {
                                        r |= 0;
                                        var t, o, i, f, c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0;
                                        for (g = 4 + (e |= 0) | 0, i = (n |= 0) << 1 | 1, n = u[2548], t = u[2547], f = u[2546], o = u[2549]; c = g + A(r, l) | 0, p = s[0 | (v = c + -1 | 0)], m = s[0 | c], d = s[c + -2 | 0] - s[c + 1 | 0] | 0, ((s[o + (p - m | 0) | 0] << 2) + s[d + o | 0] | 0) <= (0 | i) && (d = a[d + f | 0] + A(m - p | 0, 3) | 0, h = a[(d + 4 >> 3) + t | 0], a[0 | v] = s[(p + a[(d + 3 >> 3) + t | 0] | 0) + n | 0], a[0 | c] = s[(m - h | 0) + n | 0]), 16 != (0 | (l = l + 1 | 0)););
                                        for (g = e + 8 | 0, l = 0; c = g + A(r, l) | 0, p = s[0 | (v = c + -1 | 0)], m = s[0 | c], d = s[c + -2 | 0] - s[c + 1 | 0] | 0, ((s[o + (p - m | 0) | 0] << 2) + s[d + o | 0] | 0) <= (0 | i) && (d = a[d + f | 0] + A(m - p | 0, 3) | 0, h = a[(d + 4 >> 3) + t | 0], a[0 | v] = s[(p + a[(d + 3 >> 3) + t | 0] | 0) + n | 0], a[0 | c] = s[(m - h | 0) + n | 0]), 16 != (0 | (l = l + 1 | 0)););
                                        for (m = e + 12 | 0, l = 0; e = m + A(r, l) | 0, c = s[0 | (g = e + -1 | 0)], p = s[0 | e], v = s[e + -2 | 0] - s[e + 1 | 0] | 0, ((s[o + (c - p | 0) | 0] << 2) + s[v + o | 0] | 0) <= (0 | i) && (v = a[v + f | 0] + A(p - c | 0, 3) | 0, d = a[(v + 4 >> 3) + t | 0], a[0 | g] = s[(c + a[(v + 3 >> 3) + t | 0] | 0) + n | 0], a[0 | e] = s[(p - d | 0) + n | 0]), 16 != (0 | (l = l + 1 | 0)););
                                    }, i[47] = function(e, r, n, t, o) {
                                        ie(4 + (e |= 0) | 0, 1, r |= 0, 16, n |= 0, t |= 0, o |= 0), ie(e + 8 | 0, 1, r, 16, n, t, o), ie(e + 12 | 0, 1, r, 16, n, t, o)
                                    }, i[48] = function(e, r, n, t, o, i) {
                                        r |= 0, oe(e |= 0, 1, n |= 0, 8, t |= 0, o |= 0, i |= 0), oe(r, 1, n, 8, t, o, i)
                                    }, i[49] = function(e, r, n, t, o, i) {
                                        r |= 0, ie(4 + (e |= 0) | 0, 1, n |= 0, 8, t |= 0, o |= 0, i |= 0), ie(r + 4 | 0, 1, n, 8, t, o, i)
                                    }, i[50] = function(e) {
                                        var r, n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0;
                                        r = ((i = (n = s[(e |= 0) - 29 | 0]) + 2 | 0) + (o = s[e + -31 | 0]) | 0) + ((t = s[e + -30 | 0]) << 1) >>> 2 | 0, a[e + 32 | 0] = r, t = t + 2 | 0, a[0 | e] = (t + s[e + -32 | 0] | 0) + (o << 1) >>> 2, t = (o = s[e + -28 | 0]) + (t + (n << 1) | 0) >>> 2 | 0, a[e + 64 | 0] = t, a[e + 1 | 0] = r, a[e + 33 | 0] = t, n = (n = i + (o << 1) | 0) + (i = s[e + -27 | 0]) >>> 2 | 0, a[e + 96 | 0] = n, a[e + 2 | 0] = t, a[e + 65 | 0] = n, a[e + 34 | 0] = n, a[e + 3 | 0] = n, o = 2 + ((n = s[e + -26 | 0]) + (o + (i << 1) | 0) | 0) >>> 2 | 0, a[e + 97 | 0] = o, i = 2 + ((t = s[e + -25 | 0]) + (i + (n << 1) | 0) | 0) >>> 2 | 0, a[e + 98 | 0] = i, a[e + 35 | 0] = o, a[e + 66 | 0] = o, a[e + 99 | 0] = 2 + ((t + n | 0) + (t << 1) | 0) >>> 2, a[e + 67 | 0] = i
                                    }, i[51] = function(e) {
                                        var r, n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0;
                                        o = (t = s[31 + (e |= 0) | 0]) + 2 | 0, n = s[e + 63 | 0], a[e + 96 | 0] = s[e + 95 | 0] + (o + (n << 1) | 0) >>> 2, n = n + ((t << 1) + (i = (t = s[e + -1 | 0]) + 2 | 0) | 0) >>> 2 | 0, a[e + 97 | 0] = n, a[e + 64 | 0] = n, n = (n = o + (t << 1) | 0) + (t = s[e + -33 | 0]) >>> 2 | 0, a[e + 98 | 0] = n, a[e + 65 | 0] = n, a[e + 32 | 0] = n, n = ((o = s[e + -32 | 0]) + i | 0) + (t << 1) >>> 2 | 0, a[e + 99 | 0] = n, a[e + 66 | 0] = n, a[e + 33 | 0] = n, a[0 | e] = n, r = s[e + -29 | 0], n = s[e + -30 | 0], i = 2 + (((i = t) + (t = s[e + -31 | 0]) | 0) + (o << 1) | 0) >>> 2 | 0, a[e + 67 | 0] = i, a[e + 34 | 0] = i, a[e + 1 | 0] = i, o = 2 + ((n + o | 0) + (t << 1) | 0) >>> 2 | 0, a[e + 35 | 0] = o, a[e + 2 | 0] = o, a[e + 3 | 0] = 2 + ((t + r | 0) + (n << 1) | 0) >>> 2
                                    }, i[52] = function(e) {
                                        var r, n, t, o = 0,
                                            i = 0,
                                            f = 0;
                                        o = (i = s[(e |= 0) - 30 | 0]) + 2 | 0, f = s[e + -29 | 0], r = s[e + -28 | 0] + (o + (f << 1) | 0) >>> 2 | 0, a[e + 99 | 0] = r, f = f + ((t = (n = s[e + -31 | 0]) + 2 | 0) + (i << 1) | 0) >>> 2 | 0, a[e + 98 | 0] = f, i = ((i = o) + (o = s[e + -32 | 0]) | 0) + (n << 1) >>> 2 | 0, a[e + 97 | 0] = i, o = (s[e + -33 | 0] + t | 0) + (o << 1) >>> 2 | 0, a[e + 96 | 0] = o, a[e + 67 | 0] = r, a[e + 66 | 0] = f, a[e + 65 | 0] = i, a[e + 64 | 0] = o, a[e + 35 | 0] = r, a[e + 34 | 0] = f, a[e + 33 | 0] = i, a[e + 32 | 0] = o, a[e + 3 | 0] = r, a[e + 2 | 0] = f, a[e + 1 | 0] = i, a[0 | e] = o
                                    }, i[53] = function(e) {
                                        var r, n, t, o, i = 0,
                                            f = 0;
                                        f = s[(e |= 0) - 32 | 0], i = (r = u[2548] - s[e + -33 | 0] | 0) + s[e + -1 | 0] | 0, a[0 | e] = s[f + i | 0], n = s[e + -31 | 0], a[e + 1 | 0] = s[i + n | 0], t = s[e + -30 | 0], a[e + 2 | 0] = s[i + t | 0], o = s[e + -29 | 0], a[e + 3 | 0] = s[i + o | 0], i = r + s[e + 31 | 0] | 0, a[e + 32 | 0] = s[i + f | 0], a[e + 33 | 0] = s[i + n | 0], a[e + 34 | 0] = s[i + t | 0], a[e + 35 | 0] = s[i + o | 0], i = r + s[e + 63 | 0] | 0, a[e + 64 | 0] = s[i + f | 0], a[e + 65 | 0] = s[i + n | 0], a[e + 66 | 0] = s[i + t | 0], a[e + 67 | 0] = s[i + o | 0], i = f, f = r + s[e + 95 | 0] | 0, a[e + 96 | 0] = s[i + f | 0], a[e + 97 | 0] = s[f + n | 0], a[e + 98 | 0] = s[f + t | 0], a[e + 99 | 0] = s[f + o | 0]
                                    }, i[54] = function(e) {
                                        var r;
                                        r = A(4 + (s[95 + (e |= 0) | 0] + (s[e + -29 | 0] + (s[e + 63 | 0] + (s[e + -30 | 0] + (s[e + 31 | 0] + (s[e + -31 | 0] + (s[e + -32 | 0] + s[e + -1 | 0] | 0) | 0) | 0) | 0) | 0) | 0) | 0) >>> 3 & 255, 16843009), a[e + 96 | 0] = r, a[e + 97 | 0] = r >>> 8, a[e + 98 | 0] = r >>> 16, a[e + 99 | 0] = r >>> 24, a[e + 64 | 0] = r, a[e + 65 | 0] = r >>> 8, a[e + 66 | 0] = r >>> 16, a[e + 67 | 0] = r >>> 24, a[e + 32 | 0] = r, a[e + 33 | 0] = r >>> 8, a[e + 34 | 0] = r >>> 16, a[e + 35 | 0] = r >>> 24, a[0 | e] = r, a[e + 1 | 0] = r >>> 8, a[e + 2 | 0] = r >>> 16, a[e + 3 | 0] = r >>> 24
                                    }, i[55] = function(e) {
                                        var r, n, t, o = 0,
                                            i = 0,
                                            f = 0;
                                        i = s[95 + (e |= 0) | 0], a[e + 67 | 0] = i, a[e + 66 | 0] = i, o = A(i, 16843009), a[e + 96 | 0] = o, a[e + 97 | 0] = o >>> 8, a[e + 98 | 0] = o >>> 16, a[e + 99 | 0] = o >>> 24, n = (f = (r = s[e + 31 | 0]) + 1 | 0) + (o = s[e + 63 | 0]) >>> 1 | 0, a[e + 32 | 0] = n, t = s[e + -1 | 0], a[0 | e] = f + t >>> 1, f = 1 + (o + i | 0) >>> 1 | 0, a[e + 64 | 0] = f, a[e + 2 | 0] = n, a[e + 34 | 0] = f, f = 2 + ((i + r | 0) + (o << 1) | 0) >>> 2 | 0, a[e + 33 | 0] = f, o = o + 2 | 0, a[e + 1 | 0] = (o + t | 0) + (r << 1) >>> 2, i = (o + i | 0) + (i << 1) >>> 2 | 0, a[e + 65 | 0] = i, a[e + 3 | 0] = f, a[e + 35 | 0] = i
                                    }, i[56] = function(e) {
                                        var r, n, t, o, i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0;
                                        f = 1 + ((r = s[63 + (e |= 0) | 0]) + (u = s[e + 31 | 0]) | 0) >>> 1 | 0, a[e + 98 | 0] = f, n = s[e + 95 | 0], a[e + 96 | 0] = 1 + (n + r | 0) >>> 1, a[e + 64 | 0] = f, l = (i = (c = s[e + -1 | 0]) + 1 | 0) + (f = s[e + -33 | 0]) >>> 1 | 0, a[e + 34 | 0] = l, i = i + u >>> 1 | 0, a[e + 66 | 0] = i, a[0 | e] = l, a[e + 32 | 0] = i, t = (i = s[e + -32 | 0]) + ((l = c + 2 | 0) + (f << 1) | 0) >>> 2 | 0, a[e + 35 | 0] = t, o = s[e + -31 | 0], a[e + 3 | 0] = 2 + (s[e + -30 | 0] + (i + (o << 1) | 0) | 0) >>> 2, a[e + 2 | 0] = 2 + ((f + (i << 1) | 0) + o | 0) >>> 2, f = f + ((i = c << 1) + (c = u + 2 | 0) | 0) >>> 2 | 0, a[e + 67 | 0] = f, a[e + 1 | 0] = t, u = (r + l | 0) + (u << 1) >>> 2 | 0, a[e + 99 | 0] = u, a[e + 33 | 0] = f, a[e + 97 | 0] = (c + n | 0) + (r << 1) >>> 2, a[e + 65 | 0] = u
                                    }, i[57] = function(e) {
                                        var r = 0,
                                            n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0,
                                            f = 0,
                                            u = 0;
                                        o = (r = (i = s[(e |= 0) - 31 | 0]) + 1 | 0) + (n = s[e + -30 | 0]) >>> 1 | 0, a[e + 64 | 0] = o, u = s[e + -32 | 0], a[0 | e] = u + r >>> 1, t = 1 + ((r = s[e + -29 | 0]) + n | 0) >>> 1 | 0, a[e + 65 | 0] = t, a[e + 1 | 0] = o, f = 1 + ((o = s[e + -28 | 0]) + r | 0) >>> 1 | 0, a[e + 66 | 0] = f, a[e + 2 | 0] = t, a[e + 3 | 0] = f, f = ((t = r + 2 | 0) + i | 0) + (n << 1) >>> 2 | 0, a[e + 96 | 0] = f, n = n + 2 | 0, a[e + 32 | 0] = (n + u | 0) + (i << 1) >>> 2, i = o + (n + (r << 1) | 0) >>> 2 | 0, a[e + 97 | 0] = i, a[e + 33 | 0] = f, u = s[e + -25 | 0], n = s[e + -26 | 0], t = (r = s[e + -27 | 0]) + (t + (o << 1) | 0) >>> 2 | 0, a[e + 98 | 0] = t, a[e + 34 | 0] = i, a[e + 99 | 0] = 2 + (u + (r + (n << 1) | 0) | 0) >>> 2, a[e + 67 | 0] = 2 + (n + (o + (r << 1) | 0) | 0) >>> 2, a[e + 35 | 0] = t
                                    }, i[58] = function(e) {
                                        var r, n, t = 0,
                                            o = 0,
                                            i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0;
                                        o = (f = (i = s[(e |= 0) - 32 | 0]) + 1 | 0) + (t = s[e + -33 | 0]) >>> 1 | 0, a[e + 65 | 0] = o, u = f + (r = s[e + -31 | 0]) >>> 1 | 0, a[e + 66 | 0] = u, a[0 | e] = o, o = 1 + ((f = s[e + -30 | 0]) + r | 0) >>> 1 | 0, a[e + 67 | 0] = o, a[e + 1 | 0] = u, u = s[e + -29 | 0], a[e + 3 | 0] = 1 + (u + f | 0) >>> 1, a[e + 2 | 0] = o, c = (o = s[e + -1 | 0]) + 2 | 0, n = s[e + 31 | 0], a[e + 96 | 0] = (c + s[e + 63 | 0] | 0) + (n << 1) >>> 2, c = i + (c + (t << 1) | 0) >>> 2 | 0, a[e + 97 | 0] = c, t = t + 2 | 0, a[e + 64 | 0] = (t + n | 0) + (o << 1) >>> 2, t = (t + (i << 1) | 0) + r >>> 2 | 0, a[e + 98 | 0] = t, a[e + 32 | 0] = c, i = 2 + (f + (i + (r << 1) | 0) | 0) >>> 2 | 0, a[e + 99 | 0] = i, a[e + 33 | 0] = t, a[e + 35 | 0] = 2 + (u + ((f << 1) + r | 0) | 0) >>> 2, a[e + 34 | 0] = i
                                    }, i[59] = function(e) {
                                        var r = 0,
                                            n = 0,
                                            t = 0,
                                            o = 0,
                                            i = 0;
                                        r = (n = s[63 + (e |= 0) | 0]) + 2 | 0, i = s[e + 95 | 0], t = A((r + i | 0) + (i << 1) >>> 2 | 0, 16843009), a[e + 96 | 0] = t, a[e + 97 | 0] = t >>> 8, a[e + 98 | 0] = t >>> 16, a[e + 99 | 0] = t >>> 24, o = s[e + 31 | 0], n = A(i + ((t = o + 2 | 0) + (n << 1) | 0) >>> 2 | 0, 16843009), a[e + 64 | 0] = n, a[e + 65 | 0] = n >>> 8, a[e + 66 | 0] = n >>> 16, a[e + 67 | 0] = n >>> 24, i = r, r = s[e + -1 | 0], o = A((i + r | 0) + (o << 1) >>> 2 | 0, 16843009), a[e + 32 | 0] = o, a[e + 33 | 0] = o >>> 8, a[e + 34 | 0] = o >>> 16, a[e + 35 | 0] = o >>> 24, r = A((s[e + -33 | 0] + t | 0) + (r << 1) >>> 2 | 0, 16843009), a[0 | e] = r, a[e + 1 | 0] = r >>> 8, a[e + 2 | 0] = r >>> 16, a[e + 3 | 0] = r >>> 24
                                    }, i[60] = function(e) {
                                        a[0 | (e |= 0)] = -2139062144, a[e + 1 | 0] = 8421504, a[e + 2 | 0] = 32896, a[e + 3 | 0] = 128, a[e + 4 | 0] = -2139062144, a[e + 5 | 0] = 8421504, a[e + 6 | 0] = 32896, a[e + 7 | 0] = 128, a[e + 32 | 0] = -2139062144, a[e + 33 | 0] = 8421504, a[e + 34 | 0] = 32896, a[e + 35 | 0] = 128, a[e + 36 | 0] = -2139062144, a[e + 37 | 0] = 8421504, a[e + 38 | 0] = 32896, a[e + 39 | 0] = 128, a[e + 64 | 0] = -2139062144, a[e + 65 | 0] = 8421504, a[e + 66 | 0] = 32896, a[e + 67 | 0] = 128, a[e + 68 | 0] = -2139062144, a[e + 69 | 0] = 8421504, a[e + 70 | 0] = 32896, a[e + 71 | 0] = 128, a[e + 96 | 0] = -2139062144, a[e + 97 | 0] = 8421504, a[e + 98 | 0] = 32896, a[e + 99 | 0] = 128, a[e + 100 | 0] = -2139062144, a[e + 101 | 0] = 8421504, a[e + 102 | 0] = 32896, a[e + 103 | 0] = 128, a[e + 128 | 0] = -2139062144, a[e + 129 | 0] = 8421504, a[e + 130 | 0] = 32896, a[e + 131 | 0] = 128, a[e + 132 | 0] = -2139062144, a[e + 133 | 0] = 8421504, a[e + 134 | 0] = 32896, a[e + 135 | 0] = 128, a[e + 160 | 0] = -2139062144, a[e + 161 | 0] = 8421504, a[e + 162 | 0] = 32896, a[e + 163 | 0] = 128, a[e + 164 | 0] = -2139062144, a[e + 165 | 0] = 8421504, a[e + 166 | 0] = 32896, a[e + 167 | 0] = 128, a[e + 192 | 0] = -2139062144, a[e + 193 | 0] = 8421504, a[e + 194 | 0] = 32896, a[e + 195 | 0] = 128, a[e + 196 | 0] = -2139062144, a[e + 197 | 0] = 8421504, a[e + 198 | 0] = 32896, a[e + 199 | 0] = 128, a[e + 224 | 0] = -2139062144, a[e + 225 | 0] = 8421504, a[e + 226 | 0] = 32896, a[e + 227 | 0] = 128, a[e + 228 | 0] = -2139062144, a[e + 229 | 0] = 8421504, a[e + 230 | 0] = 32896, a[e + 231 | 0] = 128, a[e + 256 | 0] = -2139062144, a[e + 257 | 0] = 8421504, a[e + 258 | 0] = 32896, a[e + 259 | 0] = 128, a[e + 260 | 0] = -2139062144, a[e + 261 | 0] = 8421504, a[e + 262 | 0] = 32896, a[e + 263 | 0] = 128, a[e + 8 | 0] = -2139062144, a[e + 9 | 0] = 8421504, a[e + 10 | 0] = 32896, a[e + 11 | 0] = 128, a[e + 12 | 0] = -2139062144, a[e + 13 | 0] = 8421504, a[e + 14 | 0] = 32896, a[e + 15 | 0] = 128, a[e + 40 | 0] = -2139062144, a[e + 41 | 0] = 8421504, a[e + 42 | 0] = 32896, a[e + 43 | 0] = 128, a[e + 44 | 0] = -2139062144, a[e + 45 | 0] = 8421504, a[e + 46 | 0] = 32896, a[e + 47 | 0] = 128, a[e + 72 | 0] = -2139062144, a[e + 73 | 0] = 8421504, a[e + 74 | 0] = 32896, a[e + 75 | 0] = 128, a[e + 76 | 0] = -2139062144, a[e + 77 | 0] = 8421504, a[e + 78 | 0] = 32896, a[e + 79 | 0] = 128, a[e + 104 | 0] = -2139062144, a[e + 105 | 0] = 8421504, a[e + 106 | 0] = 32896, a[e + 107 | 0] = 128, a[e + 108 | 0] = -2139062144, a[e + 109 | 0] = 8421504, a[e + 110 | 0] = 32896, a[e + 111 | 0] = 128, a[e + 136 | 0] = -2139062144, a[e + 137 | 0] = 8421504, a[e + 138 | 0] = 32896, a[e + 139 | 0] = 128, a[e + 140 | 0] = -2139062144, a[e + 141 | 0] = 8421504, a[e + 142 | 0] = 32896, a[e + 143 | 0] = 128, a[e + 168 | 0] = -2139062144, a[e + 169 | 0] = 8421504, a[e + 170 | 0] = 32896, a[e + 171 | 0] = 128, a[e + 172 | 0] = -2139062144, a[e + 173 | 0] = 8421504, a[e + 174 | 0] = 32896, a[e + 175 | 0] = 128, a[e + 200 | 0] = -2139062144, a[e + 201 | 0] = 8421504, a[e + 202 | 0] = 32896, a[e + 203 | 0] = 128, a[e + 204 | 0] = -2139062144, a[e + 205 | 0] = 8421504, a[e + 206 | 0] = 32896, a[e + 207 | 0] = 128, a[e + 232 | 0] = -2139062144, a[e + 233 | 0] = 8421504, a[e + 234 | 0] = 32896, a[e + 235 | 0] = 128, a[e + 236 | 0] = -2139062144, a[e + 237 | 0] = 8421504, a[e + 238 | 0] = 32896, a[e + 239 | 0] = 128, a[e + 264 | 0] = -2139062144, a[e + 265 | 0] = 8421504, a[e + 266 | 0] = 32896, a[e + 267 | 0] = 128, a[e + 268 | 0] = -2139062144, a[e + 269 | 0] = 8421504, a[e + 270 | 0] = 32896, a[e + 271 | 0] = 128, a[e + 296 | 0] = -2139062144, a[e + 297 | 0] = 8421504, a[e + 298 | 0] = 32896, a[e + 299 | 0] = 128, a[e + 300 | 0] = -2139062144, a[e + 301 | 0] = 8421504, a[e + 302 | 0] = 32896, a[e + 303 | 0] = 128, a[e + 288 | 0] = -2139062144, a[e + 289 | 0] = 8421504, a[e + 290 | 0] = 32896, a[e + 291 | 0] = 128, a[e + 292 | 0] = -2139062144, a[e + 293 | 0] = 8421504, a[e + 294 | 0] = 32896, a[e + 295 | 0] = 128, a[e + 328 | 0] = -2139062144, a[e + 329 | 0] = 8421504, a[e + 330 | 0] = 32896, a[e + 331 | 0] = 128, a[e + 332 | 0] = -2139062144, a[e + 333 | 0] = 8421504, a[e + 334 | 0] = 32896, a[e + 335 | 0] = 128, a[e + 320 | 0] = -2139062144, a[e + 321 | 0] = 8421504, a[e + 322 | 0] = 32896, a[e + 323 | 0] = 128, a[e + 324 | 0] = -2139062144, a[e + 325 | 0] = 8421504, a[e + 326 | 0] = 32896, a[e + 327 | 0] = 128, a[e + 360 | 0] = -2139062144, a[e + 361 | 0] = 8421504, a[e + 362 | 0] = 32896, a[e + 363 | 0] = 128, a[e + 364 | 0] = -2139062144, a[e + 365 | 0] = 8421504, a[e + 366 | 0] = 32896, a[e + 367 | 0] = 128, a[e + 352 | 0] = -2139062144, a[e + 353 | 0] = 8421504, a[e + 354 | 0] = 32896, a[e + 355 | 0] = 128, a[e + 356 | 0] = -2139062144, a[e + 357 | 0] = 8421504, a[e + 358 | 0] = 32896, a[e + 359 | 0] = 128, a[e + 392 | 0] = -2139062144, a[e + 393 | 0] = 8421504, a[e + 394 | 0] = 32896, a[e + 395 | 0] = 128, a[e + 396 | 0] = -2139062144, a[e + 397 | 0] = 8421504, a[e + 398 | 0] = 32896, a[e + 399 | 0] = 128, a[e + 384 | 0] = -2139062144, a[e + 385 | 0] = 8421504, a[e + 386 | 0] = 32896, a[e + 387 | 0] = 128, a[e + 388 | 0] = -2139062144, a[e + 389 | 0] = 8421504, a[e + 390 | 0] = 32896, a[e + 391 | 0] = 128, a[e + 424 | 0] = -2139062144, a[e + 425 | 0] = 8421504, a[e + 426 | 0] = 32896, a[e + 427 | 0] = 128, a[e + 428 | 0] = -2139062144, a[e + 429 | 0] = 8421504, a[e + 430 | 0] = 32896, a[e + 431 | 0] = 128, a[e + 416 | 0] = -2139062144, a[e + 417 | 0] = 8421504, a[e + 418 | 0] = 32896, a[e + 419 | 0] = 128, a[e + 420 | 0] = -2139062144, a[e + 421 | 0] = 8421504, a[e + 422 | 0] = 32896, a[e + 423 | 0] = 128, a[e + 456 | 0] = -2139062144, a[e + 457 | 0] = 8421504, a[e + 458 | 0] = 32896, a[e + 459 | 0] = 128, a[e + 460 | 0] = -2139062144, a[e + 461 | 0] = 8421504, a[e + 462 | 0] = 32896, a[e + 463 | 0] = 128, a[e + 448 | 0] = -2139062144, a[e + 449 | 0] = 8421504, a[e + 450 | 0] = 32896, a[e + 451 | 0] = 128, a[e + 452 | 0] = -2139062144, a[e + 453 | 0] = 8421504, a[e + 454 | 0] = 32896, a[e + 455 | 0] = 128, a[e + 488 | 0] = -2139062144, a[e + 489 | 0] = 8421504, a[e + 490 | 0] = 32896, a[e + 491 | 0] = 128, a[e + 492 | 0] = -2139062144, a[e + 493 | 0] = 8421504, a[e + 494 | 0] = 32896, a[e + 495 | 0] = 128, a[e + 480 | 0] = -2139062144, a[e + 481 | 0] = 8421504, a[e + 482 | 0] = 32896, a[e + 483 | 0] = 128, a[e + 484 | 0] = -2139062144, a[e + 485 | 0] = 8421504, a[e + 486 | 0] = 32896, a[e + 487 | 0] = 128
                                    }, i[61] = function(e) {
                                        var r, n;
                                        e = vr(8 + (s[(r = e |= 0) - 17 | 0] + (s[r + -18 | 0] + (s[r + -19 | 0] + (s[r + -20 | 0] + (s[r + -21 | 0] + (s[r + -22 | 0] + (s[r + -23 | 0] + (s[r + -24 | 0] + (s[r + -25 | 0] + (s[r + -26 | 0] + (s[r + -27 | 0] + (s[r + -28 | 0] + (s[r + -29 | 0] + (s[r + -30 | 0] + (s[r + -32 | 0] + s[r + -31 | 0] | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) >>> 4 & 255, 0, 16843009, 16843009), a[0 | r] = e, a[r + 1 | 0] = e >>> 8, a[r + 2 | 0] = e >>> 16, a[r + 3 | 0] = e >>> 24, n = P, a[r + 4 | 0] = n, a[r + 5 | 0] = n >>> 8, a[r + 6 | 0] = n >>> 16, a[r + 7 | 0] = n >>> 24, a[r + 8 | 0] = e, a[r + 9 | 0] = e >>> 8, a[r + 10 | 0] = e >>> 16, a[r + 11 | 0] = e >>> 24, a[r + 12 | 0] = n, a[r + 13 | 0] = n >>> 8, a[r + 14 | 0] = n >>> 16, a[r + 15 | 0] = n >>> 24, a[r + 40 | 0] = e, a[r + 41 | 0] = e >>> 8, a[r + 42 | 0] = e >>> 16, a[r + 43 | 0] = e >>> 24, a[r + 44 | 0] = n, a[r + 45 | 0] = n >>> 8, a[r + 46 | 0] = n >>> 16, a[r + 47 | 0] = n >>> 24, a[r + 32 | 0] = e, a[r + 33 | 0] = e >>> 8, a[r + 34 | 0] = e >>> 16, a[r + 35 | 0] = e >>> 24, a[r + 36 | 0] = n, a[r + 37 | 0] = n >>> 8, a[r + 38 | 0] = n >>> 16, a[r + 39 | 0] = n >>> 24, a[r + 72 | 0] = e, a[r + 73 | 0] = e >>> 8, a[r + 74 | 0] = e >>> 16, a[r + 75 | 0] = e >>> 24, a[r + 76 | 0] = n, a[r + 77 | 0] = n >>> 8, a[r + 78 | 0] = n >>> 16, a[r + 79 | 0] = n >>> 24, a[r + 64 | 0] = e, a[r + 65 | 0] = e >>> 8, a[r + 66 | 0] = e >>> 16, a[r + 67 | 0] = e >>> 24, a[r + 68 | 0] = n, a[r + 69 | 0] = n >>> 8, a[r + 70 | 0] = n >>> 16, a[r + 71 | 0] = n >>> 24, a[r + 104 | 0] = e, a[r + 105 | 0] = e >>> 8, a[r + 106 | 0] = e >>> 16, a[r + 107 | 0] = e >>> 24, a[r + 108 | 0] = n, a[r + 109 | 0] = n >>> 8, a[r + 110 | 0] = n >>> 16, a[r + 111 | 0] = n >>> 24, a[r + 96 | 0] = e, a[r + 97 | 0] = e >>> 8, a[r + 98 | 0] = e >>> 16, a[r + 99 | 0] = e >>> 24, a[r + 100 | 0] = n, a[r + 101 | 0] = n >>> 8, a[r + 102 | 0] = n >>> 16, a[r + 103 | 0] = n >>> 24, a[r + 136 | 0] = e, a[r + 137 | 0] = e >>> 8, a[r + 138 | 0] = e >>> 16, a[r + 139 | 0] = e >>> 24, a[r + 140 | 0] = n, a[r + 141 | 0] = n >>> 8, a[r + 142 | 0] = n >>> 16, a[r + 143 | 0] = n >>> 24, a[r + 128 | 0] = e, a[r + 129 | 0] = e >>> 8, a[r + 130 | 0] = e >>> 16, a[r + 131 | 0] = e >>> 24, a[r + 132 | 0] = n, a[r + 133 | 0] = n >>> 8, a[r + 134 | 0] = n >>> 16, a[r + 135 | 0] = n >>> 24, a[r + 168 | 0] = e, a[r + 169 | 0] = e >>> 8, a[r + 170 | 0] = e >>> 16, a[r + 171 | 0] = e >>> 24, a[r + 172 | 0] = n, a[r + 173 | 0] = n >>> 8, a[r + 174 | 0] = n >>> 16, a[r + 175 | 0] = n >>> 24, a[r + 160 | 0] = e, a[r + 161 | 0] = e >>> 8, a[r + 162 | 0] = e >>> 16, a[r + 163 | 0] = e >>> 24, a[r + 164 | 0] = n, a[r + 165 | 0] = n >>> 8, a[r + 166 | 0] = n >>> 16, a[r + 167 | 0] = n >>> 24, a[r + 200 | 0] = e, a[r + 201 | 0] = e >>> 8, a[r + 202 | 0] = e >>> 16, a[r + 203 | 0] = e >>> 24, a[r + 204 | 0] = n, a[r + 205 | 0] = n >>> 8, a[r + 206 | 0] = n >>> 16, a[r + 207 | 0] = n >>> 24, a[r + 192 | 0] = e, a[r + 193 | 0] = e >>> 8, a[r + 194 | 0] = e >>> 16, a[r + 195 | 0] = e >>> 24, a[r + 196 | 0] = n, a[r + 197 | 0] = n >>> 8, a[r + 198 | 0] = n >>> 16, a[r + 199 | 0] = n >>> 24, a[r + 232 | 0] = e, a[r + 233 | 0] = e >>> 8, a[r + 234 | 0] = e >>> 16, a[r + 235 | 0] = e >>> 24, a[r + 236 | 0] = n, a[r + 237 | 0] = n >>> 8, a[r + 238 | 0] = n >>> 16, a[r + 239 | 0] = n >>> 24, a[r + 224 | 0] = e, a[r + 225 | 0] = e >>> 8, a[r + 226 | 0] = e >>> 16, a[r + 227 | 0] = e >>> 24, a[r + 228 | 0] = n, a[r + 229 | 0] = n >>> 8, a[r + 230 | 0] = n >>> 16, a[r + 231 | 0] = n >>> 24, a[r + 264 | 0] = e, a[r + 265 | 0] = e >>> 8, a[r + 266 | 0] = e >>> 16, a[r + 267 | 0] = e >>> 24, a[r + 268 | 0] = n, a[r + 269 | 0] = n >>> 8, a[r + 270 | 0] = n >>> 16, a[r + 271 | 0] = n >>> 24, a[r + 256 | 0] = e, a[r + 257 | 0] = e >>> 8, a[r + 258 | 0] = e >>> 16, a[r + 259 | 0] = e >>> 24, a[r + 260 | 0] = n, a[r + 261 | 0] = n >>> 8, a[r + 262 | 0] = n >>> 16, a[r + 263 | 0] = n >>> 24, a[r + 296 | 0] = e, a[r + 297 | 0] = e >>> 8, a[r + 298 | 0] = e >>> 16, a[r + 299 | 0] = e >>> 24, a[r + 300 | 0] = n, a[r + 301 | 0] = n >>> 8, a[r + 302 | 0] = n >>> 16, a[r + 303 | 0] = n >>> 24, a[r + 288 | 0] = e, a[r + 289 | 0] = e >>> 8, a[r + 290 | 0] = e >>> 16, a[r + 291 | 0] = e >>> 24, a[r + 292 | 0] = n, a[r + 293 | 0] = n >>> 8, a[r + 294 | 0] = n >>> 16, a[r + 295 | 0] = n >>> 24, a[r + 328 | 0] = e, a[r + 329 | 0] = e >>> 8, a[r + 330 | 0] = e >>> 16, a[r + 331 | 0] = e >>> 24, a[r + 332 | 0] = n, a[r + 333 | 0] = n >>> 8, a[r + 334 | 0] = n >>> 16, a[r + 335 | 0] = n >>> 24, a[r + 320 | 0] = e, a[r + 321 | 0] = e >>> 8, a[r + 322 | 0] = e >>> 16, a[r + 323 | 0] = e >>> 24, a[r + 324 | 0] = n, a[r + 325 | 0] = n >>> 8, a[r + 326 | 0] = n >>> 16, a[r + 327 | 0] = n >>> 24, a[r + 360 | 0] = e, a[r + 361 | 0] = e >>> 8, a[r + 362 | 0] = e >>> 16, a[r + 363 | 0] = e >>> 24, a[r + 364 | 0] = n, a[r + 365 | 0] = n >>> 8, a[r + 366 | 0] = n >>> 16, a[r + 367 | 0] = n >>> 24, a[r + 352 | 0] = e, a[r + 353 | 0] = e >>> 8, a[r + 354 | 0] = e >>> 16, a[r + 355 | 0] = e >>> 24, a[r + 356 | 0] = n, a[r + 357 | 0] = n >>> 8, a[r + 358 | 0] = n >>> 16, a[r + 359 | 0] = n >>> 24, a[r + 392 | 0] = e, a[r + 393 | 0] = e >>> 8, a[r + 394 | 0] = e >>> 16, a[r + 395 | 0] = e >>> 24, a[r + 396 | 0] = n, a[r + 397 | 0] = n >>> 8, a[r + 398 | 0] = n >>> 16, a[r + 399 | 0] = n >>> 24, a[r + 384 | 0] = e, a[r + 385 | 0] = e >>> 8, a[r + 386 | 0] = e >>> 16, a[r + 387 | 0] = e >>> 24, a[r + 388 | 0] = n, a[r + 389 | 0] = n >>> 8, a[r + 390 | 0] = n >>> 16, a[r + 391 | 0] = n >>> 24, a[r + 424 | 0] = e, a[r + 425 | 0] = e >>> 8, a[r + 426 | 0] = e >>> 16, a[r + 427 | 0] = e >>> 24, a[r + 428 | 0] = n, a[r + 429 | 0] = n >>> 8, a[r + 430 | 0] = n >>> 16, a[r + 431 | 0] = n >>> 24, a[r + 416 | 0] = e, a[r + 417 | 0] = e >>> 8, a[r + 418 | 0] = e >>> 16, a[r + 419 | 0] = e >>> 24, a[r + 420 | 0] = n, a[r + 421 | 0] = n >>> 8, a[r + 422 | 0] = n >>> 16, a[r + 423 | 0] = n >>> 24, a[r + 456 | 0] = e, a[r + 457 | 0] = e >>> 8, a[r + 458 | 0] = e >>> 16, a[r + 459 | 0] = e >>> 24, a[r + 460 | 0] = n, a[r + 461 | 0] = n >>> 8, a[r + 462 | 0] = n >>> 16, a[r + 463 | 0] = n >>> 24, a[r + 448 | 0] = e, a[r + 449 | 0] = e >>> 8, a[r + 450 | 0] = e >>> 16, a[r + 451 | 0] = e >>> 24, a[r + 452 | 0] = n, a[r + 453 | 0] = n >>> 8, a[r + 454 | 0] = n >>> 16, a[r + 455 | 0] = n >>> 24, a[r + 488 | 0] = e, a[r + 489 | 0] = e >>> 8, a[r + 490 | 0] = e >>> 16, a[r + 491 | 0] = e >>> 24, a[r + 492 | 0] = n, a[r + 493 | 0] = n >>> 8, a[r + 494 | 0] = n >>> 16, a[r + 495 | 0] = n >>> 24, a[r + 480 | 0] = e, a[r + 481 | 0] = e >>> 8, a[r + 482 | 0] = e >>> 16, a[r + 483 | 0] = e >>> 24, a[r + 484 | 0] = n, a[r + 485 | 0] = n >>> 8, a[r + 486 | 0] = n >>> 16, a[r + 487 | 0] = n >>> 24
                                    }, i[62] = function(e) {
                                        var r, n;
                                        e = vr(8 + (s[479 + (r = e |= 0) | 0] + (s[r + 447 | 0] + (s[r + 415 | 0] + (s[r + 383 | 0] + (s[r + 351 | 0] + (s[r + 319 | 0] + (s[r + 287 | 0] + (s[r + 255 | 0] + (s[r + 223 | 0] + (s[r + 191 | 0] + (s[r + 159 | 0] + (s[r + 127 | 0] + (s[r + 95 | 0] + (s[r + 63 | 0] + (s[r + -1 | 0] + s[r + 31 | 0] | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) >>> 4 & 255, 0, 16843009, 16843009), a[0 | r] = e, a[r + 1 | 0] = e >>> 8, a[r + 2 | 0] = e >>> 16, a[r + 3 | 0] = e >>> 24, n = P, a[r + 4 | 0] = n, a[r + 5 | 0] = n >>> 8, a[r + 6 | 0] = n >>> 16, a[r + 7 | 0] = n >>> 24, a[r + 8 | 0] = e, a[r + 9 | 0] = e >>> 8, a[r + 10 | 0] = e >>> 16, a[r + 11 | 0] = e >>> 24, a[r + 12 | 0] = n, a[r + 13 | 0] = n >>> 8, a[r + 14 | 0] = n >>> 16, a[r + 15 | 0] = n >>> 24, a[r + 40 | 0] = e, a[r + 41 | 0] = e >>> 8, a[r + 42 | 0] = e >>> 16, a[r + 43 | 0] = e >>> 24, a[r + 44 | 0] = n, a[r + 45 | 0] = n >>> 8, a[r + 46 | 0] = n >>> 16, a[r + 47 | 0] = n >>> 24, a[r + 32 | 0] = e, a[r + 33 | 0] = e >>> 8, a[r + 34 | 0] = e >>> 16, a[r + 35 | 0] = e >>> 24, a[r + 36 | 0] = n, a[r + 37 | 0] = n >>> 8, a[r + 38 | 0] = n >>> 16, a[r + 39 | 0] = n >>> 24, a[r + 72 | 0] = e, a[r + 73 | 0] = e >>> 8, a[r + 74 | 0] = e >>> 16, a[r + 75 | 0] = e >>> 24, a[r + 76 | 0] = n, a[r + 77 | 0] = n >>> 8, a[r + 78 | 0] = n >>> 16, a[r + 79 | 0] = n >>> 24, a[r + 64 | 0] = e, a[r + 65 | 0] = e >>> 8, a[r + 66 | 0] = e >>> 16, a[r + 67 | 0] = e >>> 24, a[r + 68 | 0] = n, a[r + 69 | 0] = n >>> 8, a[r + 70 | 0] = n >>> 16, a[r + 71 | 0] = n >>> 24, a[r + 104 | 0] = e, a[r + 105 | 0] = e >>> 8, a[r + 106 | 0] = e >>> 16, a[r + 107 | 0] = e >>> 24, a[r + 108 | 0] = n, a[r + 109 | 0] = n >>> 8, a[r + 110 | 0] = n >>> 16, a[r + 111 | 0] = n >>> 24, a[r + 96 | 0] = e, a[r + 97 | 0] = e >>> 8, a[r + 98 | 0] = e >>> 16, a[r + 99 | 0] = e >>> 24, a[r + 100 | 0] = n, a[r + 101 | 0] = n >>> 8, a[r + 102 | 0] = n >>> 16, a[r + 103 | 0] = n >>> 24, a[r + 136 | 0] = e, a[r + 137 | 0] = e >>> 8, a[r + 138 | 0] = e >>> 16, a[r + 139 | 0] = e >>> 24, a[r + 140 | 0] = n, a[r + 141 | 0] = n >>> 8, a[r + 142 | 0] = n >>> 16, a[r + 143 | 0] = n >>> 24, a[r + 128 | 0] = e, a[r + 129 | 0] = e >>> 8, a[r + 130 | 0] = e >>> 16, a[r + 131 | 0] = e >>> 24, a[r + 132 | 0] = n, a[r + 133 | 0] = n >>> 8, a[r + 134 | 0] = n >>> 16, a[r + 135 | 0] = n >>> 24, a[r + 168 | 0] = e, a[r + 169 | 0] = e >>> 8, a[r + 170 | 0] = e >>> 16, a[r + 171 | 0] = e >>> 24, a[r + 172 | 0] = n, a[r + 173 | 0] = n >>> 8, a[r + 174 | 0] = n >>> 16, a[r + 175 | 0] = n >>> 24, a[r + 160 | 0] = e, a[r + 161 | 0] = e >>> 8, a[r + 162 | 0] = e >>> 16, a[r + 163 | 0] = e >>> 24, a[r + 164 | 0] = n, a[r + 165 | 0] = n >>> 8, a[r + 166 | 0] = n >>> 16, a[r + 167 | 0] = n >>> 24, a[r + 200 | 0] = e, a[r + 201 | 0] = e >>> 8, a[r + 202 | 0] = e >>> 16, a[r + 203 | 0] = e >>> 24, a[r + 204 | 0] = n, a[r + 205 | 0] = n >>> 8, a[r + 206 | 0] = n >>> 16, a[r + 207 | 0] = n >>> 24, a[r + 192 | 0] = e, a[r + 193 | 0] = e >>> 8, a[r + 194 | 0] = e >>> 16, a[r + 195 | 0] = e >>> 24, a[r + 196 | 0] = n, a[r + 197 | 0] = n >>> 8, a[r + 198 | 0] = n >>> 16, a[r + 199 | 0] = n >>> 24, a[r + 232 | 0] = e, a[r + 233 | 0] = e >>> 8, a[r + 234 | 0] = e >>> 16, a[r + 235 | 0] = e >>> 24, a[r + 236 | 0] = n, a[r + 237 | 0] = n >>> 8, a[r + 238 | 0] = n >>> 16, a[r + 239 | 0] = n >>> 24, a[r + 224 | 0] = e, a[r + 225 | 0] = e >>> 8, a[r + 226 | 0] = e >>> 16, a[r + 227 | 0] = e >>> 24, a[r + 228 | 0] = n, a[r + 229 | 0] = n >>> 8, a[r + 230 | 0] = n >>> 16, a[r + 231 | 0] = n >>> 24, a[r + 264 | 0] = e, a[r + 265 | 0] = e >>> 8, a[r + 266 | 0] = e >>> 16, a[r + 267 | 0] = e >>> 24, a[r + 268 | 0] = n, a[r + 269 | 0] = n >>> 8, a[r + 270 | 0] = n >>> 16, a[r + 271 | 0] = n >>> 24, a[r + 256 | 0] = e, a[r + 257 | 0] = e >>> 8, a[r + 258 | 0] = e >>> 16, a[r + 259 | 0] = e >>> 24, a[r + 260 | 0] = n, a[r + 261 | 0] = n >>> 8, a[r + 262 | 0] = n >>> 16, a[r + 263 | 0] = n >>> 24, a[r + 296 | 0] = e, a[r + 297 | 0] = e >>> 8, a[r + 298 | 0] = e >>> 16, a[r + 299 | 0] = e >>> 24, a[r + 300 | 0] = n, a[r + 301 | 0] = n >>> 8, a[r + 302 | 0] = n >>> 16, a[r + 303 | 0] = n >>> 24, a[r + 288 | 0] = e, a[r + 289 | 0] = e >>> 8, a[r + 290 | 0] = e >>> 16, a[r + 291 | 0] = e >>> 24, a[r + 292 | 0] = n, a[r + 293 | 0] = n >>> 8, a[r + 294 | 0] = n >>> 16, a[r + 295 | 0] = n >>> 24, a[r + 328 | 0] = e, a[r + 329 | 0] = e >>> 8, a[r + 330 | 0] = e >>> 16, a[r + 331 | 0] = e >>> 24, a[r + 332 | 0] = n, a[r + 333 | 0] = n >>> 8, a[r + 334 | 0] = n >>> 16, a[r + 335 | 0] = n >>> 24, a[r + 320 | 0] = e, a[r + 321 | 0] = e >>> 8, a[r + 322 | 0] = e >>> 16, a[r + 323 | 0] = e >>> 24, a[r + 324 | 0] = n, a[r + 325 | 0] = n >>> 8, a[r + 326 | 0] = n >>> 16, a[r + 327 | 0] = n >>> 24, a[r + 360 | 0] = e, a[r + 361 | 0] = e >>> 8, a[r + 362 | 0] = e >>> 16, a[r + 363 | 0] = e >>> 24, a[r + 364 | 0] = n, a[r + 365 | 0] = n >>> 8, a[r + 366 | 0] = n >>> 16, a[r + 367 | 0] = n >>> 24, a[r + 352 | 0] = e, a[r + 353 | 0] = e >>> 8, a[r + 354 | 0] = e >>> 16, a[r + 355 | 0] = e >>> 24, a[r + 356 | 0] = n, a[r + 357 | 0] = n >>> 8, a[r + 358 | 0] = n >>> 16, a[r + 359 | 0] = n >>> 24, a[r + 392 | 0] = e, a[r + 393 | 0] = e >>> 8, a[r + 394 | 0] = e >>> 16, a[r + 395 | 0] = e >>> 24, a[r + 396 | 0] = n, a[r + 397 | 0] = n >>> 8, a[r + 398 | 0] = n >>> 16, a[r + 399 | 0] = n >>> 24, a[r + 384 | 0] = e, a[r + 385 | 0] = e >>> 8, a[r + 386 | 0] = e >>> 16, a[r + 387 | 0] = e >>> 24, a[r + 388 | 0] = n, a[r + 389 | 0] = n >>> 8, a[r + 390 | 0] = n >>> 16, a[r + 391 | 0] = n >>> 24, a[r + 424 | 0] = e, a[r + 425 | 0] = e >>> 8, a[r + 426 | 0] = e >>> 16, a[r + 427 | 0] = e >>> 24, a[r + 428 | 0] = n, a[r + 429 | 0] = n >>> 8, a[r + 430 | 0] = n >>> 16, a[r + 431 | 0] = n >>> 24, a[r + 416 | 0] = e, a[r + 417 | 0] = e >>> 8, a[r + 418 | 0] = e >>> 16, a[r + 419 | 0] = e >>> 24, a[r + 420 | 0] = n, a[r + 421 | 0] = n >>> 8, a[r + 422 | 0] = n >>> 16, a[r + 423 | 0] = n >>> 24, a[r + 456 | 0] = e, a[r + 457 | 0] = e >>> 8, a[r + 458 | 0] = e >>> 16, a[r + 459 | 0] = e >>> 24, a[r + 460 | 0] = n, a[r + 461 | 0] = n >>> 8, a[r + 462 | 0] = n >>> 16, a[r + 463 | 0] = n >>> 24, a[r + 448 | 0] = e, a[r + 449 | 0] = e >>> 8, a[r + 450 | 0] = e >>> 16, a[r + 451 | 0] = e >>> 24, a[r + 452 | 0] = n, a[r + 453 | 0] = n >>> 8, a[r + 454 | 0] = n >>> 16, a[r + 455 | 0] = n >>> 24, a[r + 488 | 0] = e, a[r + 489 | 0] = e >>> 8, a[r + 490 | 0] = e >>> 16, a[r + 491 | 0] = e >>> 24, a[r + 492 | 0] = n, a[r + 493 | 0] = n >>> 8, a[r + 494 | 0] = n >>> 16, a[r + 495 | 0] = n >>> 24, a[r + 480 | 0] = e, a[r + 481 | 0] = e >>> 8, a[r + 482 | 0] = e >>> 16, a[r + 483 | 0] = e >>> 24, a[r + 484 | 0] = n, a[r + 485 | 0] = n >>> 8, a[r + 486 | 0] = n >>> 16, a[r + 487 | 0] = n >>> 24
                                    }, i[63] = function(e) {
                                        var r = 0,
                                            n = 0;
                                        r = n = vr(s[31 + (e |= 0) | 0], 0, 16843009, 16843009), a[e + 32 | 0] = r, a[e + 33 | 0] = r >>> 8, a[e + 34 | 0] = r >>> 16, a[e + 35 | 0] = r >>> 24, r = P, a[e + 36 | 0] = r, a[e + 37 | 0] = r >>> 8, a[e + 38 | 0] = r >>> 16, a[e + 39 | 0] = r >>> 24, a[e + 40 | 0] = n, a[e + 41 | 0] = n >>> 8, a[e + 42 | 0] = n >>> 16, a[e + 43 | 0] = n >>> 24, a[e + 44 | 0] = r, a[e + 45 | 0] = r >>> 8, a[e + 46 | 0] = r >>> 16, a[e + 47 | 0] = r >>> 24, r = n = vr(s[e + 63 | 0], 0, 16843009, 16843009), a[e + 64 | 0] = r, a[e + 65 | 0] = r >>> 8, a[e + 66 | 0] = r >>> 16, a[e + 67 | 0] = r >>> 24, r = P, a[e + 68 | 0] = r, a[e + 69 | 0] = r >>> 8, a[e + 70 | 0] = r >>> 16, a[e + 71 | 0] = r >>> 24, a[e + 72 | 0] = n, a[e + 73 | 0] = n >>> 8, a[e + 74 | 0] = n >>> 16, a[e + 75 | 0] = n >>> 24, a[e + 76 | 0] = r, a[e + 77 | 0] = r >>> 8, a[e + 78 | 0] = r >>> 16, a[e + 79 | 0] = r >>> 24, r = n = vr(s[e + 95 | 0], 0, 16843009, 16843009), a[e + 96 | 0] = r, a[e + 97 | 0] = r >>> 8, a[e + 98 | 0] = r >>> 16, a[e + 99 | 0] = r >>> 24, r = P, a[e + 100 | 0] = r, a[e + 101 | 0] = r >>> 8, a[e + 102 | 0] = r >>> 16, a[e + 103 | 0] = r >>> 24, a[e + 104 | 0] = n, a[e + 105 | 0] = n >>> 8, a[e + 106 | 0] = n >>> 16, a[e + 107 | 0] = n >>> 24, a[e + 108 | 0] = r, a[e + 109 | 0] = r >>> 8, a[e + 110 | 0] = r >>> 16, a[e + 111 | 0] = r >>> 24, r = n = vr(s[e + 127 | 0], 0, 16843009, 16843009), a[e + 128 | 0] = r, a[e + 129 | 0] = r >>> 8, a[e + 130 | 0] = r >>> 16, a[e + 131 | 0] = r >>> 24, r = P, a[e + 132 | 0] = r, a[e + 133 | 0] = r >>> 8, a[e + 134 | 0] = r >>> 16, a[e + 135 | 0] = r >>> 24, a[e + 136 | 0] = n, a[e + 137 | 0] = n >>> 8, a[e + 138 | 0] = n >>> 16, a[e + 139 | 0] = n >>> 24, a[e + 140 | 0] = r, a[e + 141 | 0] = r >>> 8, a[e + 142 | 0] = r >>> 16, a[e + 143 | 0] = r >>> 24, r = n = vr(s[e + 159 | 0], 0, 16843009, 16843009), a[e + 168 | 0] = r, a[e + 169 | 0] = r >>> 8, a[e + 170 | 0] = r >>> 16, a[e + 171 | 0] = r >>> 24, r = P, a[e + 172 | 0] = r, a[e + 173 | 0] = r >>> 8, a[e + 174 | 0] = r >>> 16, a[e + 175 | 0] = r >>> 24, a[e + 160 | 0] = n, a[e + 161 | 0] = n >>> 8, a[e + 162 | 0] = n >>> 16, a[e + 163 | 0] = n >>> 24, a[e + 164 | 0] = r, a[e + 165 | 0] = r >>> 8, a[e + 166 | 0] = r >>> 16, a[e + 167 | 0] = r >>> 24, r = n = vr(s[e + -1 | 0], 0, 16843009, 16843009), a[0 | e] = r, a[e + 1 | 0] = r >>> 8, a[e + 2 | 0] = r >>> 16, a[e + 3 | 0] = r >>> 24, r = P, a[e + 4 | 0] = r, a[e + 5 | 0] = r >>> 8, a[e + 6 | 0] = r >>> 16, a[e + 7 | 0] = r >>> 24, a[e + 8 | 0] = n, a[e + 9 | 0] = n >>> 8, a[e + 10 | 0] = n >>> 16, a[e + 11 | 0] = n >>> 24, a[e + 12 | 0] = r, a[e + 13 | 0] = r >>> 8, a[e + 14 | 0] = r >>> 16, a[e + 15 | 0] = r >>> 24, r = n = vr(s[e + 191 | 0], 0, 16843009, 16843009), a[e + 200 | 0] = r, a[e + 201 | 0] = r >>> 8, a[e + 202 | 0] = r >>> 16, a[e + 203 | 0] = r >>> 24, r = P, a[e + 204 | 0] = r, a[e + 205 | 0] = r >>> 8, a[e + 206 | 0] = r >>> 16, a[e + 207 | 0] = r >>> 24, a[e + 192 | 0] = n, a[e + 193 | 0] = n >>> 8, a[e + 194 | 0] = n >>> 16, a[e + 195 | 0] = n >>> 24, a[e + 196 | 0] = r, a[e + 197 | 0] = r >>> 8, a[e + 198 | 0] = r >>> 16, a[e + 199 | 0] = r >>> 24, r = n = vr(s[e + 223 | 0], 0, 16843009, 16843009), a[e + 232 | 0] = r, a[e + 233 | 0] = r >>> 8, a[e + 234 | 0] = r >>> 16, a[e + 235 | 0] = r >>> 24, r = P, a[e + 236 | 0] = r, a[e + 237 | 0] = r >>> 8, a[e + 238 | 0] = r >>> 16, a[e + 239 | 0] = r >>> 24, a[e + 224 | 0] = n, a[e + 225 | 0] = n >>> 8, a[e + 226 | 0] = n >>> 16, a[e + 227 | 0] = n >>> 24, a[e + 228 | 0] = r, a[e + 229 | 0] = r >>> 8, a[e + 230 | 0] = r >>> 16, a[e + 231 | 0] = r >>> 24, r = n = vr(s[e + 255 | 0], 0, 16843009, 16843009), a[e + 264 | 0] = r, a[e + 265 | 0] = r >>> 8, a[e + 266 | 0] = r >>> 16, a[e + 267 | 0] = r >>> 24, r = P, a[e + 268 | 0] = r, a[e + 269 | 0] = r >>> 8, a[e + 270 | 0] = r >>> 16, a[e + 271 | 0] = r >>> 24, a[e + 256 | 0] = n, a[e + 257 | 0] = n >>> 8, a[e + 258 | 0] = n >>> 16, a[e + 259 | 0] = n >>> 24, a[e + 260 | 0] = r, a[e + 261 | 0] = r >>> 8, a[e + 262 | 0] = r >>> 16, a[e + 263 | 0] = r >>> 24, r = n = vr(s[e + 287 | 0], 0, 16843009, 16843009), a[e + 296 | 0] = r, a[e + 297 | 0] = r >>> 8, a[e + 298 | 0] = r >>> 16, a[e + 299 | 0] = r >>> 24, r = P, a[e + 300 | 0] = r, a[e + 301 | 0] = r >>> 8, a[e + 302 | 0] = r >>> 16, a[e + 303 | 0] = r >>> 24, a[e + 288 | 0] = n, a[e + 289 | 0] = n >>> 8, a[e + 290 | 0] = n >>> 16, a[e + 291 | 0] = n >>> 24, a[e + 292 | 0] = r, a[e + 293 | 0] = r >>> 8, a[e + 294 | 0] = r >>> 16, a[e + 295 | 0] = r >>> 24, r = n = vr(s[e + 319 | 0], 0, 16843009, 16843009), a[e + 328 | 0] = r, a[e + 329 | 0] = r >>> 8, a[e + 330 | 0] = r >>> 16, a[e + 331 | 0] = r >>> 24, r = P, a[e + 332 | 0] = r, a[e + 333 | 0] = r >>> 8, a[e + 334 | 0] = r >>> 16, a[e + 335 | 0] = r >>> 24, a[e + 320 | 0] = n, a[e + 321 | 0] = n >>> 8, a[e + 322 | 0] = n >>> 16, a[e + 323 | 0] = n >>> 24, a[e + 324 | 0] = r, a[e + 325 | 0] = r >>> 8, a[e + 326 | 0] = r >>> 16, a[e + 327 | 0] = r >>> 24, r = n = vr(s[e + 351 | 0], 0, 16843009, 16843009), a[e + 360 | 0] = r, a[e + 361 | 0] = r >>> 8, a[e + 362 | 0] = r >>> 16, a[e + 363 | 0] = r >>> 24, r = P, a[e + 364 | 0] = r, a[e + 365 | 0] = r >>> 8, a[e + 366 | 0] = r >>> 16, a[e + 367 | 0] = r >>> 24, a[e + 352 | 0] = n, a[e + 353 | 0] = n >>> 8, a[e + 354 | 0] = n >>> 16, a[e + 355 | 0] = n >>> 24, a[e + 356 | 0] = r, a[e + 357 | 0] = r >>> 8, a[e + 358 | 0] = r >>> 16, a[e + 359 | 0] = r >>> 24, r = n = vr(s[e + 383 | 0], 0, 16843009, 16843009), a[e + 392 | 0] = r, a[e + 393 | 0] = r >>> 8, a[e + 394 | 0] = r >>> 16, a[e + 395 | 0] = r >>> 24, r = P, a[e + 396 | 0] = r, a[e + 397 | 0] = r >>> 8, a[e + 398 | 0] = r >>> 16, a[e + 399 | 0] = r >>> 24, a[e + 384 | 0] = n, a[e + 385 | 0] = n >>> 8, a[e + 386 | 0] = n >>> 16, a[e + 387 | 0] = n >>> 24, a[e + 388 | 0] = r, a[e + 389 | 0] = r >>> 8, a[e + 390 | 0] = r >>> 16, a[e + 391 | 0] = r >>> 24, r = n = vr(s[e + 415 | 0], 0, 16843009, 16843009), a[e + 424 | 0] = r, a[e + 425 | 0] = r >>> 8, a[e + 426 | 0] = r >>> 16, a[e + 427 | 0] = r >>> 24, r = P, a[e + 428 | 0] = r, a[e + 429 | 0] = r >>> 8, a[e + 430 | 0] = r >>> 16, a[e + 431 | 0] = r >>> 24, a[e + 416 | 0] = n, a[e + 417 | 0] = n >>> 8, a[e + 418 | 0] = n >>> 16, a[e + 419 | 0] = n >>> 24, a[e + 420 | 0] = r, a[e + 421 | 0] = r >>> 8, a[e + 422 | 0] = r >>> 16, a[e + 423 | 0] = r >>> 24, r = n = vr(s[e + 447 | 0], 0, 16843009, 16843009), a[e + 456 | 0] = r, a[e + 457 | 0] = r >>> 8, a[e + 458 | 0] = r >>> 16, a[e + 459 | 0] = r >>> 24, r = P, a[e + 460 | 0] = r, a[e + 461 | 0] = r >>> 8, a[e + 462 | 0] = r >>> 16, a[e + 463 | 0] = r >>> 24, a[e + 448 | 0] = n, a[e + 449 | 0] = n >>> 8, a[e + 450 | 0] = n >>> 16, a[e + 451 | 0] = n >>> 24, a[e + 452 | 0] = r, a[e + 453 | 0] = r >>> 8, a[e + 454 | 0] = r >>> 16, a[e + 455 | 0] = r >>> 24, r = n = vr(s[e + 479 | 0], 0, 16843009, 16843009), a[e + 488 | 0] = r, a[e + 489 | 0] = r >>> 8, a[e + 490 | 0] = r >>> 16, a[e + 491 | 0] = r >>> 24, r = P, a[e + 492 | 0] = r, a[e + 493 | 0] = r >>> 8, a[e + 494 | 0] = r >>> 16, a[e + 495 | 0] = r >>> 24, a[e + 480 | 0] = n, a[e + 481 | 0] = n >>> 8, a[e + 482 | 0] = n >>> 16, a[e + 483 | 0] = n >>> 24, a[e + 484 | 0] = r, a[e + 485 | 0] = r >>> 8, a[e + 486 | 0] = r >>> 16, a[e + 487 | 0] = r >>> 24
                                    }, i[64] = function(e) {
                                        var r, n, t = 0,
                                            o = 0,
                                            i = 0,
                                            f = 0;
                                        i = s[4 + (o = f = (r = e |= 0) - 32 | 0) | 0] | s[o + 5 | 0] << 8 | s[o + 6 | 0] << 16 | s[o + 7 | 0] << 24, t = e = s[0 | o] | s[o + 1 | 0] << 8 | s[o + 2 | 0] << 16 | s[o + 3 | 0] << 24, a[0 | r] = t, a[r + 1 | 0] = t >>> 8, a[r + 2 | 0] = t >>> 16, a[r + 3 | 0] = t >>> 24, a[r + 4 | 0] = i, a[r + 5 | 0] = i >>> 8, a[r + 6 | 0] = i >>> 16, a[r + 7 | 0] = i >>> 24, a[r + 32 | 0] = t, a[r + 33 | 0] = t >>> 8, a[r + 34 | 0] = t >>> 16, a[r + 35 | 0] = t >>> 24, a[r + 36 | 0] = i, a[r + 37 | 0] = i >>> 8, a[r + 38 | 0] = i >>> 16, a[r + 39 | 0] = i >>> 24, a[r + 64 | 0] = t, a[r + 65 | 0] = t >>> 8, a[r + 66 | 0] = t >>> 16, a[r + 67 | 0] = t >>> 24, a[r + 68 | 0] = i, a[r + 69 | 0] = i >>> 8, a[r + 70 | 0] = i >>> 16, a[r + 71 | 0] = i >>> 24, a[r + 96 | 0] = t, a[r + 97 | 0] = t >>> 8, a[r + 98 | 0] = t >>> 16, a[r + 99 | 0] = t >>> 24, a[r + 100 | 0] = i, a[r + 101 | 0] = i >>> 8, a[r + 102 | 0] = i >>> 16, a[r + 103 | 0] = i >>> 24, a[r + 128 | 0] = t, a[r + 129 | 0] = t >>> 8, a[r + 130 | 0] = t >>> 16, a[r + 131 | 0] = t >>> 24, a[r + 132 | 0] = i, a[r + 133 | 0] = i >>> 8, a[r + 134 | 0] = i >>> 16, a[r + 135 | 0] = i >>> 24, a[r + 160 | 0] = t, a[r + 161 | 0] = t >>> 8, a[r + 162 | 0] = t >>> 16, a[r + 163 | 0] = t >>> 24, a[r + 164 | 0] = i, a[r + 165 | 0] = i >>> 8, a[r + 166 | 0] = i >>> 16, a[r + 167 | 0] = i >>> 24, a[r + 192 | 0] = t, a[r + 193 | 0] = t >>> 8, a[r + 194 | 0] = t >>> 16, a[r + 195 | 0] = t >>> 24, a[r + 196 | 0] = i, a[r + 197 | 0] = i >>> 8, a[r + 198 | 0] = i >>> 16, a[r + 199 | 0] = i >>> 24, a[r + 224 | 0] = t, a[r + 225 | 0] = t >>> 8, a[r + 226 | 0] = t >>> 16, a[r + 227 | 0] = t >>> 24, a[r + 228 | 0] = i, a[r + 229 | 0] = i >>> 8, a[r + 230 | 0] = i >>> 16, a[r + 231 | 0] = i >>> 24, o = s[4 + (i = o + 8 | 0) | 0] | s[i + 5 | 0] << 8 | s[i + 6 | 0] << 16 | s[i + 7 | 0] << 24, t = e = s[0 | i] | s[i + 1 | 0] << 8 | s[i + 2 | 0] << 16 | s[i + 3 | 0] << 24, a[r + 8 | 0] = t, a[r + 9 | 0] = t >>> 8, a[r + 10 | 0] = t >>> 16, a[r + 11 | 0] = t >>> 24, a[r + 12 | 0] = o, a[r + 13 | 0] = o >>> 8, a[r + 14 | 0] = o >>> 16, a[r + 15 | 0] = o >>> 24, a[r + 40 | 0] = t, a[r + 41 | 0] = t >>> 8, a[r + 42 | 0] = t >>> 16, a[r + 43 | 0] = t >>> 24, a[r + 44 | 0] = o, a[r + 45 | 0] = o >>> 8, a[r + 46 | 0] = o >>> 16, a[r + 47 | 0] = o >>> 24, a[r + 72 | 0] = t, a[r + 73 | 0] = t >>> 8, a[r + 74 | 0] = t >>> 16, a[r + 75 | 0] = t >>> 24, a[r + 76 | 0] = o, a[r + 77 | 0] = o >>> 8, a[r + 78 | 0] = o >>> 16, a[r + 79 | 0] = o >>> 24, a[r + 104 | 0] = t, a[r + 105 | 0] = t >>> 8, a[r + 106 | 0] = t >>> 16, a[r + 107 | 0] = t >>> 24, a[r + 108 | 0] = o, a[r + 109 | 0] = o >>> 8, a[r + 110 | 0] = o >>> 16, a[r + 111 | 0] = o >>> 24, a[r + 136 | 0] = t, a[r + 137 | 0] = t >>> 8, a[r + 138 | 0] = t >>> 16, a[r + 139 | 0] = t >>> 24, a[r + 140 | 0] = o, a[r + 141 | 0] = o >>> 8, a[r + 142 | 0] = o >>> 16, a[r + 143 | 0] = o >>> 24, a[r + 168 | 0] = t, a[r + 169 | 0] = t >>> 8, a[r + 170 | 0] = t >>> 16, a[r + 171 | 0] = t >>> 24, a[r + 172 | 0] = o, a[r + 173 | 0] = o >>> 8, a[r + 174 | 0] = o >>> 16, a[r + 175 | 0] = o >>> 24, a[r + 200 | 0] = t, a[r + 201 | 0] = t >>> 8, a[r + 202 | 0] = t >>> 16, a[r + 203 | 0] = t >>> 24, a[r + 204 | 0] = o, a[r + 205 | 0] = o >>> 8, a[r + 206 | 0] = o >>> 16, a[r + 207 | 0] = o >>> 24, a[r + 232 | 0] = t, a[r + 233 | 0] = t >>> 8, a[r + 234 | 0] = t >>> 16, a[r + 235 | 0] = t >>> 24, a[r + 236 | 0] = o, a[r + 237 | 0] = o >>> 8, a[r + 238 | 0] = o >>> 16, a[r + 239 | 0] = o >>> 24, n = o = s[i + 4 | 0] | s[i + 5 | 0] << 8 | s[i + 6 | 0] << 16 | s[i + 7 | 0] << 24, t = s[0 | i] | s[i + 1 | 0] << 8 | s[i + 2 | 0] << 16 | s[i + 3 | 0] << 24, a[r + 264 | 0] = t, a[r + 265 | 0] = t >>> 8, a[r + 266 | 0] = t >>> 16, a[r + 267 | 0] = t >>> 24, a[r + 268 | 0] = o, a[r + 269 | 0] = o >>> 8, a[r + 270 | 0] = o >>> 16, a[r + 271 | 0] = o >>> 24, o = s[f + 4 | 0] | s[f + 5 | 0] << 8 | s[f + 6 | 0] << 16 | s[f + 7 | 0] << 24, f = e = s[0 | f] | s[f + 1 | 0] << 8 | s[f + 2 | 0] << 16 | s[f + 3 | 0] << 24, a[r + 256 | 0] = f, a[r + 257 | 0] = f >>> 8, a[r + 258 | 0] = f >>> 16, a[r + 259 | 0] = f >>> 24, a[r + 260 | 0] = o, a[r + 261 | 0] = o >>> 8, a[r + 262 | 0] = o >>> 16, a[r + 263 | 0] = o >>> 24, a[r + 296 | 0] = t, a[r + 297 | 0] = t >>> 8, a[r + 298 | 0] = t >>> 16, a[r + 299 | 0] = t >>> 24, a[r + 300 | 0] = n, a[r + 301 | 0] = n >>> 8, a[r + 302 | 0] = n >>> 16, a[r + 303 | 0] = n >>> 24, a[r + 288 | 0] = f, a[r + 289 | 0] = f >>> 8, a[r + 290 | 0] = f >>> 16, a[r + 291 | 0] = f >>> 24, a[r + 292 | 0] = o, a[r + 293 | 0] = o >>> 8, a[r + 294 | 0] = o >>> 16, a[r + 295 | 0] = o >>> 24, a[r + 328 | 0] = t, a[r + 329 | 0] = t >>> 8, a[r + 330 | 0] = t >>> 16, a[r + 331 | 0] = t >>> 24, a[r + 332 | 0] = n, a[r + 333 | 0] = n >>> 8, a[r + 334 | 0] = n >>> 16, a[r + 335 | 0] = n >>> 24, a[r + 320 | 0] = f, a[r + 321 | 0] = f >>> 8, a[r + 322 | 0] = f >>> 16, a[r + 323 | 0] = f >>> 24, a[r + 324 | 0] = o, a[r + 325 | 0] = o >>> 8, a[r + 326 | 0] = o >>> 16, a[r + 327 | 0] = o >>> 24, a[r + 360 | 0] = t, a[r + 361 | 0] = t >>> 8, a[r + 362 | 0] = t >>> 16, a[r + 363 | 0] = t >>> 24, a[r + 364 | 0] = n, a[r + 365 | 0] = n >>> 8, a[r + 366 | 0] = n >>> 16, a[r + 367 | 0] = n >>> 24, a[r + 352 | 0] = f, a[r + 353 | 0] = f >>> 8, a[r + 354 | 0] = f >>> 16, a[r + 355 | 0] = f >>> 24, a[r + 356 | 0] = o, a[r + 357 | 0] = o >>> 8, a[r + 358 | 0] = o >>> 16, a[r + 359 | 0] = o >>> 24, a[r + 384 | 0] = f, a[r + 385 | 0] = f >>> 8, a[r + 386 | 0] = f >>> 16, a[r + 387 | 0] = f >>> 24, a[r + 388 | 0] = o, a[r + 389 | 0] = o >>> 8, a[r + 390 | 0] = o >>> 16, a[r + 391 | 0] = o >>> 24, a[r + 392 | 0] = t, a[r + 393 | 0] = t >>> 8, a[r + 394 | 0] = t >>> 16, a[r + 395 | 0] = t >>> 24, a[r + 396 | 0] = n, a[r + 397 | 0] = n >>> 8, a[r + 398 | 0] = n >>> 16, a[r + 399 | 0] = n >>> 24, a[r + 424 | 0] = t, a[r + 425 | 0] = t >>> 8, a[r + 426 | 0] = t >>> 16, a[r + 427 | 0] = t >>> 24, a[r + 428 | 0] = n, a[r + 429 | 0] = n >>> 8, a[r + 430 | 0] = n >>> 16, a[r + 431 | 0] = n >>> 24, a[r + 416 | 0] = f, a[r + 417 | 0] = f >>> 8, a[r + 418 | 0] = f >>> 16, a[r + 419 | 0] = f >>> 24, a[r + 420 | 0] = o, a[r + 421 | 0] = o >>> 8, a[r + 422 | 0] = o >>> 16, a[r + 423 | 0] = o >>> 24, a[r + 448 | 0] = f, a[r + 449 | 0] = f >>> 8, a[r + 450 | 0] = f >>> 16, a[r + 451 | 0] = f >>> 24, a[r + 452 | 0] = o, a[r + 453 | 0] = o >>> 8, a[r + 454 | 0] = o >>> 16, a[r + 455 | 0] = o >>> 24, a[r + 456 | 0] = t, a[r + 457 | 0] = t >>> 8, a[r + 458 | 0] = t >>> 16, a[r + 459 | 0] = t >>> 24, a[r + 460 | 0] = n, a[r + 461 | 0] = n >>> 8, a[r + 462 | 0] = n >>> 16, a[r + 463 | 0] = n >>> 24, a[r + 488 | 0] = t, a[r + 489 | 0] = t >>> 8, a[r + 490 | 0] = t >>> 16, a[r + 491 | 0] = t >>> 24, a[r + 492 | 0] = n, a[r + 493 | 0] = n >>> 8, a[r + 494 | 0] = n >>> 16, a[r + 495 | 0] = n >>> 24, a[r + 480 | 0] = f, a[r + 481 | 0] = f >>> 8, a[r + 482 | 0] = f >>> 16, a[r + 483 | 0] = f >>> 24, a[r + 484 | 0] = o, a[r + 485 | 0] = o >>> 8, a[r + 486 | 0] = o >>> 16, a[r + 487 | 0] = o >>> 24
                                    }, i[65] = function(e) {
                                        var r, n, t, o, i, f, c, l, d, A, v, p, m, g, h, b, k, w = 0,
                                            y = 0;
                                        for (r = (e |= 0) - 17 | 0, n = e + -18 | 0, t = e + -19 | 0, o = e + -20 | 0, i = e + -21 | 0, f = e + -22 | 0, c = e + -23 | 0, l = e + -24 | 0, d = e + -25 | 0, A = e + -26 | 0, v = e + -27 | 0, p = e + -28 | 0, m = e + -29 | 0, g = e + -30 | 0, h = e + -31 | 0, b = e + -32 | 0, k = u[2548] - s[e + -33 | 0] | 0; w = s[e + -1 | 0] + k | 0, a[0 | e] = s[w + s[0 | b] | 0], a[e + 1 | 0] = s[s[0 | h] + w | 0], a[e + 2 | 0] = s[s[0 | g] + w | 0], a[e + 3 | 0] = s[s[0 | m] + w | 0], a[e + 4 | 0] = s[s[0 | p] + w | 0], a[e + 5 | 0] = s[s[0 | v] + w | 0], a[e + 6 | 0] = s[s[0 | A] + w | 0], a[e + 7 | 0] = s[s[0 | d] + w | 0], a[e + 8 | 0] = s[s[0 | l] + w | 0], a[e + 9 | 0] = s[s[0 | c] + w | 0], a[e + 10 | 0] = s[s[0 | f] + w | 0], a[e + 11 | 0] = s[s[0 | i] + w | 0], a[e + 12 | 0] = s[s[0 | o] + w | 0], a[e + 13 | 0] = s[s[0 | t] + w | 0], a[e + 14 | 0] = s[s[0 | n] + w | 0], a[e + 15 | 0] = s[s[0 | r] + w | 0], e = e + 32 | 0, 16 != (0 | (y = y + 1 | 0)););
                                    }, i[66] = function(e) {
                                        e |= 0;
                                        var r = 0,
                                            n = 0;
                                        for (n = 16; n = s[(e + r | 0) - 32 | 0] + (s[((r << 5) + e | 0) - 1 | 0] + n | 0) | 0, 16 != (0 | (r = r + 1 | 0)););
                                        r = e, n = e = vr(n >>> 5 & 255, 0, 16843009, 16843009), a[r + 8 | 0] = n, a[r + 9 | 0] = n >>> 8, a[r + 10 | 0] = n >>> 16, a[r + 11 | 0] = n >>> 24, e = P, a[r + 12 | 0] = e, a[r + 13 | 0] = e >>> 8, a[r + 14 | 0] = e >>> 16, a[r + 15 | 0] = e >>> 24, a[0 | r] = n, a[r + 1 | 0] = n >>> 8, a[r + 2 | 0] = n >>> 16, a[r + 3 | 0] = n >>> 24, a[r + 4 | 0] = e, a[r + 5 | 0] = e >>> 8, a[r + 6 | 0] = e >>> 16, a[r + 7 | 0] = e >>> 24, a[r + 32 | 0] = n, a[r + 33 | 0] = n >>> 8, a[r + 34 | 0] = n >>> 16, a[r + 35 | 0] = n >>> 24, a[r + 36 | 0] = e, a[r + 37 | 0] = e >>> 8, a[r + 38 | 0] = e >>> 16, a[r + 39 | 0] = e >>> 24, a[r + 40 | 0] = n, a[r + 41 | 0] = n >>> 8, a[r + 42 | 0] = n >>> 16, a[r + 43 | 0] = n >>> 24, a[r + 44 | 0] = e, a[r + 45 | 0] = e >>> 8, a[r + 46 | 0] = e >>> 16, a[r + 47 | 0] = e >>> 24, a[r + 64 | 0] = n, a[r + 65 | 0] = n >>> 8, a[r + 66 | 0] = n >>> 16, a[r + 67 | 0] = n >>> 24, a[r + 68 | 0] = e, a[r + 69 | 0] = e >>> 8, a[r + 70 | 0] = e >>> 16, a[r + 71 | 0] = e >>> 24, a[r + 72 | 0] = n, a[r + 73 | 0] = n >>> 8, a[r + 74 | 0] = n >>> 16, a[r + 75 | 0] = n >>> 24, a[r + 76 | 0] = e, a[r + 77 | 0] = e >>> 8, a[r + 78 | 0] = e >>> 16, a[r + 79 | 0] = e >>> 24, a[r + 96 | 0] = n, a[r + 97 | 0] = n >>> 8, a[r + 98 | 0] = n >>> 16, a[r + 99 | 0] = n >>> 24, a[r + 100 | 0] = e, a[r + 101 | 0] = e >>> 8, a[r + 102 | 0] = e >>> 16, a[r + 103 | 0] = e >>> 24, a[r + 104 | 0] = n, a[r + 105 | 0] = n >>> 8, a[r + 106 | 0] = n >>> 16, a[r + 107 | 0] = n >>> 24, a[r + 108 | 0] = e, a[r + 109 | 0] = e >>> 8, a[r + 110 | 0] = e >>> 16, a[r + 111 | 0] = e >>> 24, a[r + 128 | 0] = n, a[r + 129 | 0] = n >>> 8, a[r + 130 | 0] = n >>> 16, a[r + 131 | 0] = n >>> 24, a[r + 132 | 0] = e, a[r + 133 | 0] = e >>> 8, a[r + 134 | 0] = e >>> 16, a[r + 135 | 0] = e >>> 24, a[r + 136 | 0] = n, a[r + 137 | 0] = n >>> 8, a[r + 138 | 0] = n >>> 16, a[r + 139 | 0] = n >>> 24, a[r + 140 | 0] = e, a[r + 141 | 0] = e >>> 8, a[r + 142 | 0] = e >>> 16, a[r + 143 | 0] = e >>> 24, a[r + 160 | 0] = n, a[r + 161 | 0] = n >>> 8, a[r + 162 | 0] = n >>> 16, a[r + 163 | 0] = n >>> 24, a[r + 164 | 0] = e, a[r + 165 | 0] = e >>> 8, a[r + 166 | 0] = e >>> 16, a[r + 167 | 0] = e >>> 24, a[r + 168 | 0] = n, a[r + 169 | 0] = n >>> 8, a[r + 170 | 0] = n >>> 16, a[r + 171 | 0] = n >>> 24, a[r + 172 | 0] = e, a[r + 173 | 0] = e >>> 8, a[r + 174 | 0] = e >>> 16, a[r + 175 | 0] = e >>> 24, a[r + 192 | 0] = n, a[r + 193 | 0] = n >>> 8, a[r + 194 | 0] = n >>> 16, a[r + 195 | 0] = n >>> 24, a[r + 196 | 0] = e, a[r + 197 | 0] = e >>> 8, a[r + 198 | 0] = e >>> 16, a[r + 199 | 0] = e >>> 24, a[r + 200 | 0] = n, a[r + 201 | 0] = n >>> 8, a[r + 202 | 0] = n >>> 16, a[r + 203 | 0] = n >>> 24, a[r + 204 | 0] = e, a[r + 205 | 0] = e >>> 8, a[r + 206 | 0] = e >>> 16, a[r + 207 | 0] = e >>> 24, a[r + 232 | 0] = n, a[r + 233 | 0] = n >>> 8, a[r + 234 | 0] = n >>> 16, a[r + 235 | 0] = n >>> 24, a[r + 236 | 0] = e, a[r + 237 | 0] = e >>> 8, a[r + 238 | 0] = e >>> 16, a[r + 239 | 0] = e >>> 24, a[r + 224 | 0] = n, a[r + 225 | 0] = n >>> 8, a[r + 226 | 0] = n >>> 16, a[r + 227 | 0] = n >>> 24, a[r + 228 | 0] = e, a[r + 229 | 0] = e >>> 8, a[r + 230 | 0] = e >>> 16, a[r + 231 | 0] = e >>> 24, a[r + 264 | 0] = n, a[r + 265 | 0] = n >>> 8, a[r + 266 | 0] = n >>> 16, a[r + 267 | 0] = n >>> 24, a[r + 268 | 0] = e, a[r + 269 | 0] = e >>> 8, a[r + 270 | 0] = e >>> 16, a[r + 271 | 0] = e >>> 24, a[r + 256 | 0] = n, a[r + 257 | 0] = n >>> 8, a[r + 258 | 0] = n >>> 16, a[r + 259 | 0] = n >>> 24, a[r + 260 | 0] = e, a[r + 261 | 0] = e >>> 8, a[r + 262 | 0] = e >>> 16, a[r + 263 | 0] = e >>> 24, a[r + 296 | 0] = n, a[r + 297 | 0] = n >>> 8, a[r + 298 | 0] = n >>> 16, a[r + 299 | 0] = n >>> 24, a[r + 300 | 0] = e, a[r + 301 | 0] = e >>> 8, a[r + 302 | 0] = e >>> 16, a[r + 303 | 0] = e >>> 24, a[r + 288 | 0] = n, a[r + 289 | 0] = n >>> 8, a[r + 290 | 0] = n >>> 16, a[r + 291 | 0] = n >>> 24, a[r + 292 | 0] = e, a[r + 293 | 0] = e >>> 8, a[r + 294 | 0] = e >>> 16, a[r + 295 | 0] = e >>> 24, a[r + 328 | 0] = n, a[r + 329 | 0] = n >>> 8, a[r + 330 | 0] = n >>> 16, a[r + 331 | 0] = n >>> 24, a[r + 332 | 0] = e, a[r + 333 | 0] = e >>> 8, a[r + 334 | 0] = e >>> 16, a[r + 335 | 0] = e >>> 24, a[r + 320 | 0] = n, a[r + 321 | 0] = n >>> 8, a[r + 322 | 0] = n >>> 16, a[r + 323 | 0] = n >>> 24, a[r + 324 | 0] = e, a[r + 325 | 0] = e >>> 8, a[r + 326 | 0] = e >>> 16, a[r + 327 | 0] = e >>> 24, a[r + 360 | 0] = n, a[r + 361 | 0] = n >>> 8, a[r + 362 | 0] = n >>> 16, a[r + 363 | 0] = n >>> 24, a[r + 364 | 0] = e, a[r + 365 | 0] = e >>> 8, a[r + 366 | 0] = e >>> 16, a[r + 367 | 0] = e >>> 24, a[r + 352 | 0] = n, a[r + 353 | 0] = n >>> 8, a[r + 354 | 0] = n >>> 16, a[r + 355 | 0] = n >>> 24, a[r + 356 | 0] = e, a[r + 357 | 0] = e >>> 8, a[r + 358 | 0] = e >>> 16, a[r + 359 | 0] = e >>> 24, a[r + 392 | 0] = n, a[r + 393 | 0] = n >>> 8, a[r + 394 | 0] = n >>> 16, a[r + 395 | 0] = n >>> 24, a[r + 396 | 0] = e, a[r + 397 | 0] = e >>> 8, a[r + 398 | 0] = e >>> 16, a[r + 399 | 0] = e >>> 24, a[r + 384 | 0] = n, a[r + 385 | 0] = n >>> 8, a[r + 386 | 0] = n >>> 16, a[r + 387 | 0] = n >>> 24, a[r + 388 | 0] = e, a[r + 389 | 0] = e >>> 8, a[r + 390 | 0] = e >>> 16, a[r + 391 | 0] = e >>> 24, a[r + 424 | 0] = n, a[r + 425 | 0] = n >>> 8, a[r + 426 | 0] = n >>> 16, a[r + 427 | 0] = n >>> 24, a[r + 428 | 0] = e, a[r + 429 | 0] = e >>> 8, a[r + 430 | 0] = e >>> 16, a[r + 431 | 0] = e >>> 24, a[r + 416 | 0] = n, a[r + 417 | 0] = n >>> 8, a[r + 418 | 0] = n >>> 16, a[r + 419 | 0] = n >>> 24, a[r + 420 | 0] = e, a[r + 421 | 0] = e >>> 8, a[r + 422 | 0] = e >>> 16, a[r + 423 | 0] = e >>> 24, a[r + 456 | 0] = n, a[r + 457 | 0] = n >>> 8, a[r + 458 | 0] = n >>> 16, a[r + 459 | 0] = n >>> 24, a[r + 460 | 0] = e, a[r + 461 | 0] = e >>> 8, a[r + 462 | 0] = e >>> 16, a[r + 463 | 0] = e >>> 24, a[r + 448 | 0] = n, a[r + 449 | 0] = n >>> 8, a[r + 450 | 0] = n >>> 16, a[r + 451 | 0] = n >>> 24, a[r + 452 | 0] = e, a[r + 453 | 0] = e >>> 8, a[r + 454 | 0] = e >>> 16, a[r + 455 | 0] = e >>> 24, a[r + 488 | 0] = n, a[r + 489 | 0] = n >>> 8, a[r + 490 | 0] = n >>> 16, a[r + 491 | 0] = n >>> 24, a[r + 492 | 0] = e, a[r + 493 | 0] = e >>> 8, a[r + 494 | 0] = e >>> 16, a[r + 495 | 0] = e >>> 24, a[r + 480 | 0] = n, a[r + 481 | 0] = n >>> 8, a[r + 482 | 0] = n >>> 16, a[r + 483 | 0] = n >>> 24, a[r + 484 | 0] = e, a[r + 485 | 0] = e >>> 8, a[r + 486 | 0] = e >>> 16, a[r + 487 | 0] = e >>> 24
                                    }, i[67] = function(e) {
                                        a[224 + (e |= 0) | 0] = -2139062144, a[e + 225 | 0] = 8421504, a[e + 226 | 0] = 32896, a[e + 227 | 0] = 128, a[e + 228 | 0] = -2139062144, a[e + 229 | 0] = 8421504, a[e + 230 | 0] = 32896, a[e + 231 | 0] = 128, a[e + 192 | 0] = -2139062144, a[e + 193 | 0] = 8421504, a[e + 194 | 0] = 32896, a[e + 195 | 0] = 128, a[e + 196 | 0] = -2139062144, a[e + 197 | 0] = 8421504, a[e + 198 | 0] = 32896, a[e + 199 | 0] = 128, a[e + 160 | 0] = -2139062144, a[e + 161 | 0] = 8421504, a[e + 162 | 0] = 32896, a[e + 163 | 0] = 128, a[e + 164 | 0] = -2139062144, a[e + 165 | 0] = 8421504, a[e + 166 | 0] = 32896, a[e + 167 | 0] = 128, a[e + 128 | 0] = -2139062144, a[e + 129 | 0] = 8421504, a[e + 130 | 0] = 32896, a[e + 131 | 0] = 128, a[e + 132 | 0] = -2139062144, a[e + 133 | 0] = 8421504, a[e + 134 | 0] = 32896, a[e + 135 | 0] = 128, a[e + 96 | 0] = -2139062144, a[e + 97 | 0] = 8421504, a[e + 98 | 0] = 32896, a[e + 99 | 0] = 128, a[e + 100 | 0] = -2139062144, a[e + 101 | 0] = 8421504, a[e + 102 | 0] = 32896, a[e + 103 | 0] = 128, a[e + 64 | 0] = -2139062144, a[e + 65 | 0] = 8421504, a[e + 66 | 0] = 32896, a[e + 67 | 0] = 128, a[e + 68 | 0] = -2139062144, a[e + 69 | 0] = 8421504, a[e + 70 | 0] = 32896, a[e + 71 | 0] = 128, a[e + 32 | 0] = -2139062144, a[e + 33 | 0] = 8421504, a[e + 34 | 0] = 32896, a[e + 35 | 0] = 128, a[e + 36 | 0] = -2139062144, a[e + 37 | 0] = 8421504, a[e + 38 | 0] = 32896, a[e + 39 | 0] = 128, a[0 | e] = -2139062144, a[e + 1 | 0] = 8421504, a[e + 2 | 0] = 32896, a[e + 3 | 0] = 128, a[e + 4 | 0] = -2139062144, a[e + 5 | 0] = 8421504, a[e + 6 | 0] = 32896, a[e + 7 | 0] = 128
                                    }, i[68] = function(e) {
                                        var r, n;
                                        e = vr(4 + (s[(r = e |= 0) - 25 | 0] + (s[r + -26 | 0] + (s[r + -27 | 0] + (s[r + -28 | 0] + (s[r + -29 | 0] + (s[r + -30 | 0] + (s[r + -32 | 0] + s[r + -31 | 0] | 0) | 0) | 0) | 0) | 0) | 0) | 0) >>> 3 & 255, 0, 16843009, 16843009), a[r + 224 | 0] = e, a[r + 225 | 0] = e >>> 8, a[r + 226 | 0] = e >>> 16, a[r + 227 | 0] = e >>> 24, n = P, a[r + 228 | 0] = n, a[r + 229 | 0] = n >>> 8, a[r + 230 | 0] = n >>> 16, a[r + 231 | 0] = n >>> 24, a[r + 192 | 0] = e, a[r + 193 | 0] = e >>> 8, a[r + 194 | 0] = e >>> 16, a[r + 195 | 0] = e >>> 24, a[r + 196 | 0] = n, a[r + 197 | 0] = n >>> 8, a[r + 198 | 0] = n >>> 16, a[r + 199 | 0] = n >>> 24, a[r + 160 | 0] = e, a[r + 161 | 0] = e >>> 8, a[r + 162 | 0] = e >>> 16, a[r + 163 | 0] = e >>> 24, a[r + 164 | 0] = n, a[r + 165 | 0] = n >>> 8, a[r + 166 | 0] = n >>> 16, a[r + 167 | 0] = n >>> 24, a[r + 128 | 0] = e, a[r + 129 | 0] = e >>> 8, a[r + 130 | 0] = e >>> 16, a[r + 131 | 0] = e >>> 24, a[r + 132 | 0] = n, a[r + 133 | 0] = n >>> 8, a[r + 134 | 0] = n >>> 16, a[r + 135 | 0] = n >>> 24, a[r + 96 | 0] = e, a[r + 97 | 0] = e >>> 8, a[r + 98 | 0] = e >>> 16, a[r + 99 | 0] = e >>> 24, a[r + 100 | 0] = n, a[r + 101 | 0] = n >>> 8, a[r + 102 | 0] = n >>> 16, a[r + 103 | 0] = n >>> 24, a[r + 64 | 0] = e, a[r + 65 | 0] = e >>> 8, a[r + 66 | 0] = e >>> 16, a[r + 67 | 0] = e >>> 24, a[r + 68 | 0] = n, a[r + 69 | 0] = n >>> 8, a[r + 70 | 0] = n >>> 16, a[r + 71 | 0] = n >>> 24, a[r + 32 | 0] = e, a[r + 33 | 0] = e >>> 8, a[r + 34 | 0] = e >>> 16, a[r + 35 | 0] = e >>> 24, a[r + 36 | 0] = n, a[r + 37 | 0] = n >>> 8, a[r + 38 | 0] = n >>> 16, a[r + 39 | 0] = n >>> 24, a[0 | r] = e, a[r + 1 | 0] = e >>> 8, a[r + 2 | 0] = e >>> 16, a[r + 3 | 0] = e >>> 24, a[r + 4 | 0] = n, a[r + 5 | 0] = n >>> 8, a[r + 6 | 0] = n >>> 16, a[r + 7 | 0] = n >>> 24
                                    }, i[69] = function(e) {
                                        var r, n;
                                        e = vr(4 + (s[223 + (r = e |= 0) | 0] + (s[r + 191 | 0] + (s[r + 159 | 0] + (s[r + 127 | 0] + (s[r + 95 | 0] + (s[r + 63 | 0] + (s[r + -1 | 0] + s[r + 31 | 0] | 0) | 0) | 0) | 0) | 0) | 0) | 0) >>> 3 & 255, 0, 16843009, 16843009), a[r + 224 | 0] = e, a[r + 225 | 0] = e >>> 8, a[r + 226 | 0] = e >>> 16, a[r + 227 | 0] = e >>> 24, n = P, a[r + 228 | 0] = n, a[r + 229 | 0] = n >>> 8, a[r + 230 | 0] = n >>> 16, a[r + 231 | 0] = n >>> 24, a[r + 192 | 0] = e, a[r + 193 | 0] = e >>> 8, a[r + 194 | 0] = e >>> 16, a[r + 195 | 0] = e >>> 24, a[r + 196 | 0] = n, a[r + 197 | 0] = n >>> 8, a[r + 198 | 0] = n >>> 16, a[r + 199 | 0] = n >>> 24, a[r + 160 | 0] = e, a[r + 161 | 0] = e >>> 8, a[r + 162 | 0] = e >>> 16, a[r + 163 | 0] = e >>> 24, a[r + 164 | 0] = n, a[r + 165 | 0] = n >>> 8, a[r + 166 | 0] = n >>> 16, a[r + 167 | 0] = n >>> 24, a[r + 128 | 0] = e, a[r + 129 | 0] = e >>> 8, a[r + 130 | 0] = e >>> 16, a[r + 131 | 0] = e >>> 24, a[r + 132 | 0] = n, a[r + 133 | 0] = n >>> 8, a[r + 134 | 0] = n >>> 16, a[r + 135 | 0] = n >>> 24, a[r + 96 | 0] = e, a[r + 97 | 0] = e >>> 8, a[r + 98 | 0] = e >>> 16, a[r + 99 | 0] = e >>> 24, a[r + 100 | 0] = n, a[r + 101 | 0] = n >>> 8, a[r + 102 | 0] = n >>> 16, a[r + 103 | 0] = n >>> 24, a[r + 64 | 0] = e, a[r + 65 | 0] = e >>> 8, a[r + 66 | 0] = e >>> 16, a[r + 67 | 0] = e >>> 24, a[r + 68 | 0] = n, a[r + 69 | 0] = n >>> 8, a[r + 70 | 0] = n >>> 16, a[r + 71 | 0] = n >>> 24, a[r + 32 | 0] = e, a[r + 33 | 0] = e >>> 8, a[r + 34 | 0] = e >>> 16, a[r + 35 | 0] = e >>> 24, a[r + 36 | 0] = n, a[r + 37 | 0] = n >>> 8, a[r + 38 | 0] = n >>> 16, a[r + 39 | 0] = n >>> 24, a[0 | r] = e, a[r + 1 | 0] = e >>> 8, a[r + 2 | 0] = e >>> 16, a[r + 3 | 0] = e >>> 24, a[r + 4 | 0] = n, a[r + 5 | 0] = n >>> 8, a[r + 6 | 0] = n >>> 16, a[r + 7 | 0] = n >>> 24
                                    }, i[70] = function(e) {
                                        var r = 0;
                                        r = vr(s[31 + (e |= 0) | 0], 0, 16843009, 16843009), a[e + 32 | 0] = r, a[e + 33 | 0] = r >>> 8, a[e + 34 | 0] = r >>> 16, a[e + 35 | 0] = r >>> 24, r = P, a[e + 36 | 0] = r, a[e + 37 | 0] = r >>> 8, a[e + 38 | 0] = r >>> 16, a[e + 39 | 0] = r >>> 24, r = vr(s[e + 63 | 0], 0, 16843009, 16843009), a[e + 64 | 0] = r, a[e + 65 | 0] = r >>> 8, a[e + 66 | 0] = r >>> 16, a[e + 67 | 0] = r >>> 24, r = P, a[e + 68 | 0] = r, a[e + 69 | 0] = r >>> 8, a[e + 70 | 0] = r >>> 16, a[e + 71 | 0] = r >>> 24, r = vr(s[e + 95 | 0], 0, 16843009, 16843009), a[e + 96 | 0] = r, a[e + 97 | 0] = r >>> 8, a[e + 98 | 0] = r >>> 16, a[e + 99 | 0] = r >>> 24, r = P, a[e + 100 | 0] = r, a[e + 101 | 0] = r >>> 8, a[e + 102 | 0] = r >>> 16, a[e + 103 | 0] = r >>> 24, r = vr(s[e + 127 | 0], 0, 16843009, 16843009), a[e + 128 | 0] = r, a[e + 129 | 0] = r >>> 8, a[e + 130 | 0] = r >>> 16, a[e + 131 | 0] = r >>> 24, r = P, a[e + 132 | 0] = r, a[e + 133 | 0] = r >>> 8, a[e + 134 | 0] = r >>> 16, a[e + 135 | 0] = r >>> 24, r = vr(s[e + 159 | 0], 0, 16843009, 16843009), a[e + 160 | 0] = r, a[e + 161 | 0] = r >>> 8, a[e + 162 | 0] = r >>> 16, a[e + 163 | 0] = r >>> 24, r = P, a[e + 164 | 0] = r, a[e + 165 | 0] = r >>> 8, a[e + 166 | 0] = r >>> 16, a[e + 167 | 0] = r >>> 24, r = vr(s[e + 191 | 0], 0, 16843009, 16843009), a[e + 192 | 0] = r, a[e + 193 | 0] = r >>> 8, a[e + 194 | 0] = r >>> 16, a[e + 195 | 0] = r >>> 24, r = P, a[e + 196 | 0] = r, a[e + 197 | 0] = r >>> 8, a[e + 198 | 0] = r >>> 16, a[e + 199 | 0] = r >>> 24, r = vr(s[e + 223 | 0], 0, 16843009, 16843009), a[e + 224 | 0] = r, a[e + 225 | 0] = r >>> 8, a[e + 226 | 0] = r >>> 16, a[e + 227 | 0] = r >>> 24, r = P, a[e + 228 | 0] = r, a[e + 229 | 0] = r >>> 8, a[e + 230 | 0] = r >>> 16, a[e + 231 | 0] = r >>> 24, r = vr(s[e + -1 | 0], 0, 16843009, 16843009), a[0 | e] = r, a[e + 1 | 0] = r >>> 8, a[e + 2 | 0] = r >>> 16, a[e + 3 | 0] = r >>> 24, r = P, a[e + 4 | 0] = r, a[e + 5 | 0] = r >>> 8, a[e + 6 | 0] = r >>> 16, a[e + 7 | 0] = r >>> 24
                                    }, i[71] = function(e) {
                                        var r, n;
                                        n = s[0 | (e = (r = e |= 0) - 32 | 0)] | s[e + 1 | 0] << 8 | s[e + 2 | 0] << 16 | s[e + 3 | 0] << 24, e = s[e + 4 | 0] | s[e + 5 | 0] << 8 | s[e + 6 | 0] << 16 | s[e + 7 | 0] << 24, a[r + 224 | 0] = n, a[r + 225 | 0] = n >>> 8, a[r + 226 | 0] = n >>> 16, a[r + 227 | 0] = n >>> 24, a[r + 228 | 0] = e, a[r + 229 | 0] = e >>> 8, a[r + 230 | 0] = e >>> 16, a[r + 231 | 0] = e >>> 24, a[r + 192 | 0] = n, a[r + 193 | 0] = n >>> 8, a[r + 194 | 0] = n >>> 16, a[r + 195 | 0] = n >>> 24, a[r + 196 | 0] = e, a[r + 197 | 0] = e >>> 8, a[r + 198 | 0] = e >>> 16, a[r + 199 | 0] = e >>> 24, a[r + 160 | 0] = n, a[r + 161 | 0] = n >>> 8, a[r + 162 | 0] = n >>> 16, a[r + 163 | 0] = n >>> 24, a[r + 164 | 0] = e, a[r + 165 | 0] = e >>> 8, a[r + 166 | 0] = e >>> 16, a[r + 167 | 0] = e >>> 24, a[r + 128 | 0] = n, a[r + 129 | 0] = n >>> 8, a[r + 130 | 0] = n >>> 16, a[r + 131 | 0] = n >>> 24, a[r + 132 | 0] = e, a[r + 133 | 0] = e >>> 8, a[r + 134 | 0] = e >>> 16, a[r + 135 | 0] = e >>> 24, a[r + 96 | 0] = n, a[r + 97 | 0] = n >>> 8, a[r + 98 | 0] = n >>> 16, a[r + 99 | 0] = n >>> 24, a[r + 100 | 0] = e, a[r + 101 | 0] = e >>> 8, a[r + 102 | 0] = e >>> 16, a[r + 103 | 0] = e >>> 24, a[r + 64 | 0] = n, a[r + 65 | 0] = n >>> 8, a[r + 66 | 0] = n >>> 16, a[r + 67 | 0] = n >>> 24, a[r + 68 | 0] = e, a[r + 69 | 0] = e >>> 8, a[r + 70 | 0] = e >>> 16, a[r + 71 | 0] = e >>> 24, a[r + 32 | 0] = n, a[r + 33 | 0] = n >>> 8, a[r + 34 | 0] = n >>> 16, a[r + 35 | 0] = n >>> 24, a[r + 36 | 0] = e, a[r + 37 | 0] = e >>> 8, a[r + 38 | 0] = e >>> 16, a[r + 39 | 0] = e >>> 24, a[0 | r] = n, a[r + 1 | 0] = n >>> 8, a[r + 2 | 0] = n >>> 16, a[r + 3 | 0] = n >>> 24, a[r + 4 | 0] = e, a[r + 5 | 0] = e >>> 8, a[r + 6 | 0] = e >>> 16, a[r + 7 | 0] = e >>> 24
                                    }, i[72] = function(e) {
                                        var r, n, t, o, i, f, c, l, d, A = 0,
                                            v = 0;
                                        for (r = (e |= 0) - 25 | 0, n = e + -26 | 0, t = e + -27 | 0, o = e + -28 | 0, i = e + -29 | 0, f = e + -30 | 0, c = e + -31 | 0, l = e + -32 | 0, d = u[2548] - s[e + -33 | 0] | 0; A = s[e + -1 | 0] + d | 0, a[0 | e] = s[A + s[0 | l] | 0], a[e + 1 | 0] = s[s[0 | c] + A | 0], a[e + 2 | 0] = s[s[0 | f] + A | 0], a[e + 3 | 0] = s[s[0 | i] + A | 0], a[e + 4 | 0] = s[s[0 | o] + A | 0], a[e + 5 | 0] = s[s[0 | t] + A | 0], a[e + 6 | 0] = s[s[0 | n] + A | 0], a[e + 7 | 0] = s[s[0 | r] + A | 0], e = e + 32 | 0, 8 != (0 | (v = v + 1 | 0)););
                                    }, i[73] = function(e) {
                                        var r, n;
                                        r = vr(8 + (s[223 + (e |= 0) | 0] + (s[e + -25 | 0] + (s[e + 191 | 0] + (s[e + -26 | 0] + (s[e + 159 | 0] + (s[e + -27 | 0] + (s[e + 127 | 0] + (s[e + -28 | 0] + (s[e + 95 | 0] + (s[e + -29 | 0] + (s[e + 63 | 0] + (s[e + -30 | 0] + (s[e + 31 | 0] + (s[e + -31 | 0] + (s[e + -32 | 0] + s[e + -1 | 0] | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) | 0) >>> 4 & 255, 0, 16843009, 16843009), a[e + 224 | 0] = r, a[e + 225 | 0] = r >>> 8, a[e + 226 | 0] = r >>> 16, a[e + 227 | 0] = r >>> 24, n = P, a[e + 228 | 0] = n, a[e + 229 | 0] = n >>> 8, a[e + 230 | 0] = n >>> 16, a[e + 231 | 0] = n >>> 24, a[e + 192 | 0] = r, a[e + 193 | 0] = r >>> 8, a[e + 194 | 0] = r >>> 16, a[e + 195 | 0] = r >>> 24, a[e + 196 | 0] = n, a[e + 197 | 0] = n >>> 8, a[e + 198 | 0] = n >>> 16, a[e + 199 | 0] = n >>> 24, a[e + 160 | 0] = r, a[e + 161 | 0] = r >>> 8, a[e + 162 | 0] = r >>> 16, a[e + 163 | 0] = r >>> 24, a[e + 164 | 0] = n, a[e + 165 | 0] = n >>> 8, a[e + 166 | 0] = n >>> 16, a[e + 167 | 0] = n >>> 24, a[e + 128 | 0] = r, a[e + 129 | 0] = r >>> 8, a[e + 130 | 0] = r >>> 16, a[e + 131 | 0] = r >>> 24, a[e + 132 | 0] = n, a[e + 133 | 0] = n >>> 8, a[e + 134 | 0] = n >>> 16, a[e + 135 | 0] = n >>> 24, a[e + 96 | 0] = r, a[e + 97 | 0] = r >>> 8, a[e + 98 | 0] = r >>> 16, a[e + 99 | 0] = r >>> 24, a[e + 100 | 0] = n, a[e + 101 | 0] = n >>> 8, a[e + 102 | 0] = n >>> 16, a[e + 103 | 0] = n >>> 24, a[e + 64 | 0] = r, a[e + 65 | 0] = r >>> 8, a[e + 66 | 0] = r >>> 16, a[e + 67 | 0] = r >>> 24, a[e + 68 | 0] = n, a[e + 69 | 0] = n >>> 8, a[e + 70 | 0] = n >>> 16, a[e + 71 | 0] = n >>> 24, a[e + 32 | 0] = r, a[e + 33 | 0] = r >>> 8, a[e + 34 | 0] = r >>> 16, a[e + 35 | 0] = r >>> 24, a[e + 36 | 0] = n, a[e + 37 | 0] = n >>> 8, a[e + 38 | 0] = n >>> 16, a[e + 39 | 0] = n >>> 24, a[0 | e] = r, a[e + 1 | 0] = r >>> 8, a[e + 2 | 0] = r >>> 16, a[e + 3 | 0] = r >>> 24, a[e + 4 | 0] = n, a[e + 5 | 0] = n >>> 8, a[e + 6 | 0] = n >>> 16, a[e + 7 | 0] = n >>> 24
                                    }, i[74] = function(e, r, n) {
                                        e |= 0, r |= 0;
                                        var t = 0,
                                            o = 0,
                                            i = 0;
                                        if (1 == (0 | (n |= 0)))
                                            for (o = s[r + 6 | 0]; t = (0 | (t = s[0 | r] + (s[0 | e] + -120 >> 4) | 0)) > 0 ? t : 0, a[0 | r] = (0 | t) < 255 ? t : 255, t = (0 | (t = s[r + 1 | 0] + (s[e + 1 | 0] + -120 >> 4) | 0)) > 0 ? t : 0, a[r + 1 | 0] = (0 | t) < 255 ? t : 255, t = (0 | (t = s[r + 2 | 0] + (s[e + 2 | 0] + -120 >> 4) | 0)) > 0 ? t : 0, a[r + 2 | 0] = (0 | t) < 255 ? t : 255, t = (0 | (t = s[r + 3 | 0] + (s[e + 3 | 0] + -120 >> 4) | 0)) > 0 ? t : 0, a[r + 3 | 0] = (0 | t) < 255 ? t : 255, t = (0 | (t = s[r + 4 | 0] + (s[e + 4 | 0] + -120 >> 4) | 0)) > 0 ? t : 0, a[r + 4 | 0] = (0 | t) < 255 ? t : 255, t = (0 | (t = s[r + 5 | 0] + (s[e + 5 | 0] + -120 >> 4) | 0)) > 0 ? t : 0, a[r + 5 | 0] = (0 | t) < 255 ? t : 255, o = (0 | (o = (255 & o) + (s[e + 6 | 0] + -120 >> 4) | 0)) > 0 ? o : 0, a[r + 6 | 0] = (0 | o) < 255 ? o : 255, o = (0 | (o = (0 | (o = s[r + 7 | 0] + (s[e + 7 | 0] + -120 >> 4) | 0)) > 0 ? o : 0)) < 255 ? o : 255, a[r + 7 | 0] = o, e = e + 8 | 0, r = r + n | 0, 8 != (0 | (i = i + 1 | 0)););
                                        else
                                            for (; t = (0 | (t = s[0 | r] + (s[0 | e] + -120 >> 4) | 0)) > 0 ? t : 0, a[0 | r] = (0 | t) < 255 ? t : 255, t = (0 | (t = s[r + 1 | 0] + (s[e + 1 | 0] + -120 >> 4) | 0)) > 0 ? t : 0, a[r + 1 | 0] = (0 | t) < 255 ? t : 255, t = (0 | (t = s[r + 2 | 0] + (s[e + 2 | 0] + -120 >> 4) | 0)) > 0 ? t : 0, a[r + 2 | 0] = (0 | t) < 255 ? t : 255, t = (0 | (t = s[r + 3 | 0] + (s[e + 3 | 0] + -120 >> 4) | 0)) > 0 ? t : 0, a[r + 3 | 0] = (0 | t) < 255 ? t : 255, t = (0 | (t = s[r + 4 | 0] + (s[e + 4 | 0] + -120 >> 4) | 0)) > 0 ? t : 0, a[r + 4 | 0] = (0 | t) < 255 ? t : 255, t = (0 | (t = s[r + 5 | 0] + (s[e + 5 | 0] + -120 >> 4) | 0)) > 0 ? t : 0, a[r + 5 | 0] = (0 | t) < 255 ? t : 255, t = (0 | (t = s[r + 6 | 0] + (s[e + 6 | 0] + -120 >> 4) | 0)) > 0 ? t : 0, a[r + 6 | 0] = (0 | t) < 255 ? t : 255, t = (0 | (t = s[r + 7 | 0] + (s[e + 7 | 0] + -120 >> 4) | 0)) > 0 ? t : 0, a[r + 7 | 0] = (0 | t) < 255 ? t : 255, e = e + 8 | 0, r = r + n | 0, 8 != (0 | (o = o + 1 | 0)););
                                    }, i[75] = function(e, r, n, t) {
                                        r |= 0, n |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            f = 0,
                                            u = 0;
                                        e: if (e |= 0) {
                                            if (!((0 | t) < 1))
                                                for (f = o = s[0 | e], u = o;;) {
                                                    if (f = (255 & f) - (255 & u) | 0, u = o, o = (0 | (o = (255 & o) + f | 0)) > 0 ? o : 0, f = s[r + i | 0] + ((0 | o) < 255 ? o : 255) | 0, a[n + i | 0] = f, (0 | (i = i + 1 | 0)) == (0 | t)) break e;
                                                    o = s[e + i | 0]
                                                }
                                        } else {
                                            if ((0 | t) < 1) break e;
                                            for (; o = s[r + i | 0] + o | 0, a[n + i | 0] = o, (0 | (i = i + 1 | 0)) != (0 | t););
                                        }
                                    }, i[76] = function(e, r, n, t) {
                                        r |= 0, n |= 0, t |= 0;
                                        var o = 0;
                                        e: if (e |= 0) {
                                            if ((0 | t) <= 0) break e;
                                            for (; a[n + o | 0] = s[r + o | 0] + s[e + o | 0], (0 | (o = o + 1 | 0)) != (0 | t););
                                        } else
                                        if (!((0 | t) < 1))
                                            for (e = 0; e = s[r + o | 0] + e | 0, a[n + o | 0] = e, (0 | (o = o + 1 | 0)) != (0 | t););
                                    }, i[77] = function(e, r, n, t) {
                                        r |= 0, n |= 0, t |= 0;
                                        var o = 0,
                                            i = 0;
                                        if (o = (e |= 0) ? s[0 | e] : o, (0 | t) >= 1)
                                            for (; o = s[r + i | 0] + o | 0, a[n + i | 0] = o, (0 | (i = i + 1 | 0)) != (0 | t););
                                    }, i[78] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            A = 0;
                                        if (a[0 | (o |= 0)] = s[0 | e], (0 | r) >= 2)
                                            for (u = r + -1 | 0, c = o + 1 | 0, f = e + 1 | 0; a[i + c | 0] = s[i + f | 0] - s[e + i | 0], (0 | u) != (0 | (i = i + 1 | 0)););
                                        if ((0 | n) >= 2)
                                            for (d = -1 ^ t, A = (0 | r) < 2, c = 1;;) {
                                                if (u = e + t | 0, a[0 | (o = t + o | 0)] = s[0 | u] - s[0 | e], i = 1, !A)
                                                    for (; l = i + u | 0, f = (0 | (f = (s[e + i | 0] + s[l + -1 | 0] | 0) - s[u + (i + d | 0) | 0] | 0)) > 0 ? f : 0, a[o + i | 0] = s[0 | l] - ((0 | f) < 255 ? f : 255), (0 | (i = i + 1 | 0)) != (0 | r););
                                                if (e = u, (0 | (c = c + 1 | 0)) == (0 | n)) break
                                            }
                                    }, i[79] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0;
                                        if (a[0 | (o |= 0)] = s[0 | e], (0 | r) >= 2)
                                            for (u = r + -1 | 0, f = o + 1 | 0, c = e + 1 | 0; a[i + f | 0] = s[i + c | 0] - s[e + i | 0], (0 | u) != (0 | (i = i + 1 | 0)););
                                        if ((0 | n) >= 2)
                                            for (f = 1;;) {
                                                if (o = t + o | 0, u = e + t | 0, i = 0, (0 | r) >= 1)
                                                    for (; a[o + i | 0] = s[i + u | 0] - s[e + i | 0], (0 | (i = i + 1 | 0)) != (0 | r););
                                                if (e = u, (0 | (f = f + 1 | 0)) == (0 | n)) break
                                            }
                                    }, i[80] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i, f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0;
                                        if (a[0 | (o |= 0)] = s[0 | e], i = r + -1 | 0, u = 1, (0 | r) >= 2)
                                            for (c = o + 1 | 0, l = e + 1 | 0; a[f + c | 0] = s[f + l | 0] - s[e + f | 0], (0 | i) != (0 | (f = f + 1 | 0)););
                                        if ((0 | n) >= 2)
                                            for (c = (0 | r) < 2;;) {
                                                if (r = e + t | 0, a[0 | (o = t + o | 0)] = s[0 | r] - s[0 | e], !c)
                                                    for (e = o + 1 | 0, l = r + 1 | 0, f = 0; a[e + f | 0] = s[f + l | 0] - s[r + f | 0], (0 | i) != (0 | (f = f + 1 | 0)););
                                                if (e = r, (0 | (u = u + 1 | 0)) == (0 | n)) break
                                            }
                                    }, i[81] = function(e, r) {
                                        return -16777216
                                    }, i[82] = function(e, r) {
                                        e |= 0;
                                        var n = 0,
                                            t = 0;
                                        return t = (n = (((n = 255 & (e = (((n = u[(r |= 0) >> 2]) ^ e) >>> 1 & 2139062143) + (e & n) | 0)) - (255 & (r = u[r + -4 >> 2])) | 0) / 2 | 0) + n | 0) >>> 0 < 256 ? n : (-1 ^ n) >>> 24 | 0, (t |= ((n = (((n = e >>> 24 | 0) - (r >>> 24 | 0) | 0) / 2 | 0) + n | 0) >>> 0 < 256 ? n : n >>> 24 ^ -1) << 24) | ((n = (((n = e >>> 16 & 255) - (r >>> 16 & 255) | 0) / 2 | 0) + n | 0) >>> 0 < 256 ? n : (-1 ^ n) >>> 24 | 0) << 16 | ((e = (((e = e >>> 8 & 255) - (r >>> 8 & 255) | 0) / 2 | 0) + e | 0) >>> 0 < 256 ? e : (-1 ^ e) >>> 24 | 0) << 8
                                    }, i[83] = function(e, r) {
                                        e |= 0;
                                        var n, t = 0,
                                            o = 0;
                                        return o = (t = ((255 & (n = u[(r |= 0) >> 2])) + (255 & e) | 0) - (255 & (r = u[r + -4 >> 2])) | 0) >>> 0 < 256 ? t : (-1 ^ t) >>> 24 | 0, (o |= ((t = (n >>> 24) + (e >>> 24) - (r >>> 24) | 0) >>> 0 < 256 ? t : t >>> 24 ^ -1) << 24) | ((t = ((n >>> 16 & 255) + (e >>> 16 & 255) | 0) - (r >>> 16 & 255) | 0) >>> 0 < 256 ? t : (-1 ^ t) >>> 24 | 0) << 16 | ((e = ((n >>> 8 & 255) + (e >>> 8 & 255) | 0) - (r >>> 8 & 255) | 0) >>> 0 < 256 ? e : (-1 ^ e) >>> 24 | 0) << 8
                                    }, i[84] = function(e, r) {
                                        e |= 0;
                                        var n, t, o, i, a, f, s, c, l, d, A, v, p = 0;
                                        return t = (255 & (n = u[(r |= 0) >> 2])) - (p = 255 & (r = u[r + -4 >> 2])) | 0, c = (e >>> 8 & 255) - (s = r >>> 8 & 255) | 0, A = (e >>> 16 & 255) - (d = r >>> 16 & 255) | 0, v = e, 0 | (((r = ((p = (((((p = (o = (255 & e) - p | 0) >> 31) ^ p + o) + ((0 | t) < 0 ? t : 0 - t | 0) | 0) + ((f = (a = (e >>> 24 | 0) - (i = r >>> 24 | 0) | 0) >> 31) ^ f + a) | 0) + ((0 | (e = (n >>> 24 | 0) - i | 0)) < 0 ? e : 0 - e | 0) | 0) + ((l = c >> 31) ^ l + c) | 0) + ((0 | (e = (n >>> 8 & 255) - s | 0)) < 0 ? e : 0 - e | 0) | 0) + ((r = A >> 31) ^ r + A) | 0) + ((0 | (e = (n >>> 16 & 255) - d | 0)) < 0 ? e : 0 - e | 0) | 0) < 1 ? n : v)
                                    }, i[85] = function(e, r) {
                                        e |= 0;
                                        var n, t = 0;
                                        return (((t = (((t = u[(r |= 0) >> 2]) ^ (n = u[r + 4 >> 2])) >>> 1 & 2139062143) + (t & n) | 0) ^ (e = (((r = u[r + -4 >> 2]) ^ e) >>> 1 & 2139062143) + (e & r) | 0)) >>> 1 & 2139062143) + (e & t) | 0
                                    }, i[86] = function(e, r) {
                                        return e |= 0, (((e = u[4 + (r |= 0) >> 2]) ^ (r = u[r >> 2])) >>> 1 & 2139062143) + (e & r) | 0
                                    }, i[87] = function(e, r) {
                                        return e |= 0, (((e = u[(r |= 0) >> 2]) ^ (r = u[r + -4 >> 2])) >>> 1 & 2139062143) + (e & r) | 0
                                    }, i[88] = function(e, r) {
                                        return e |= 0, (((r = u[(r |= 0) >> 2]) ^ e) >>> 1 & 2139062143) + (e & r) | 0
                                    }, i[89] = function(e, r) {
                                        return e |= 0, (((r = u[(r |= 0) - 4 >> 2]) ^ e) >>> 1 & 2139062143) + (e & r) | 0
                                    }, i[90] = function(e, r) {
                                        var n;
                                        return e |= 0, (((e = (((n = u[4 + (r |= 0) >> 2]) ^ e) >>> 1 & 2139062143) + (e & n) | 0) ^ (r = u[r >> 2])) >>> 1 & 2139062143) + (e & r) | 0
                                    }, i[91] = function(e, r) {
                                        return u[(r |= 0) - 4 >> 2]
                                    }, i[92] = function(e, r) {
                                        return u[4 + (r |= 0) >> 2]
                                    }, i[93] = function(e, r) {
                                        return u[(r |= 0) >> 2]
                                    }, i[94] = function(e, r) {
                                        return 0 | e
                                    }, i[95] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (r = 0; i = u[(o = r << 2) + e >> 2], u[t + o >> 2] = i + -16777216 & -16711936 | 16711935 & i, (0 | n) != (0 | (r = r + 1 | 0)););
                                    }, i[96] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (i = u[t + -4 >> 2]; c = (o = (((o = 255 & (i = (((o = u[(a = (s = f << 2) + r | 0) >> 2]) ^ i) >>> 1 & 2139062143) + (o & i) | 0)) - (255 & (a = u[a + -4 >> 2])) | 0) / 2 | 0) + o | 0) >>> 0 < 256 ? o : (-1 ^ o) >>> 24 | 0, i = (-16711936 & (i = (c |= ((o = (((o = i >>> 24 | 0) - (a >>> 24 | 0) | 0) / 2 | 0) + o | 0) >>> 0 < 256 ? o : o >>> 24 ^ -1) << 24) | ((o = (((o = i >>> 16 & 255) - (a >>> 16 & 255) | 0) / 2 | 0) + o | 0) >>> 0 < 256 ? o : (-1 ^ o) >>> 24 | 0) << 16 | ((i = (((i = i >>> 8 & 255) - (a >>> 8 & 255) | 0) / 2 | 0) + i | 0) >>> 0 < 256 ? i : (-1 ^ i) >>> 24 | 0) << 8)) + (-16711936 & (a = u[e + s >> 2])) & -16711936 | (16711935 & i) + (16711935 & a) & 16711935, u[t + s >> 2] = i, (0 | (f = f + 1 | 0)) != (0 | n););
                                    }, i[97] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (o = u[t + -4 >> 2]; l = (i = ((255 & (f = u[(a = (c = s << 2) + r | 0) >> 2])) + (255 & o) | 0) - (255 & (a = u[a + -4 >> 2])) | 0) >>> 0 < 256 ? i : (-1 ^ i) >>> 24 | 0, o = (-16711936 & (o = (l |= ((i = (f >>> 24) + (o >>> 24) - (a >>> 24) | 0) >>> 0 < 256 ? i : i >>> 24 ^ -1) << 24) | ((i = ((f >>> 16 & 255) + (o >>> 16 & 255) | 0) - (a >>> 16 & 255) | 0) >>> 0 < 256 ? i : (-1 ^ i) >>> 24 | 0) << 16 | ((o = ((f >>> 8 & 255) + (o >>> 8 & 255) | 0) - (a >>> 8 & 255) | 0) >>> 0 < 256 ? o : (-1 ^ o) >>> 24 | 0) << 8)) + (-16711936 & (f = u[e + c >> 2])) & -16711936 | (16711935 & o) + (16711935 & f) & 16711935, u[t + c >> 2] = o, (0 | (s = s + 1 | 0)) != (0 | n););
                                    }, i[98] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            A = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (o = u[t + -4 >> 2]; d = (255 & (a = u[(i = (l = c << 2) + r | 0) >> 2])) - (s = 255 & (i = u[i + -4 >> 2])) | 0, h = (o >>> 8 & 255) - (g = i >>> 8 & 255) | 0, k = (o >>> 16 & 255) - (b = i >>> 16 & 255) | 0, w = o, o = (-16711936 & (o = ((f = ((f = (((((s = (A = (255 & o) - s | 0) >> 31) ^ s + A) + ((0 | d) < 0 ? d : 0 - d | 0) | 0) + ((m = (p = (o >>> 24 | 0) - (v = i >>> 24 | 0) | 0) >> 31) ^ m + p) | 0) + ((0 | (o = (a >>> 24 | 0) - v | 0)) < 0 ? o : 0 - o | 0) | 0) + ((f = h >> 31) ^ f + h) | 0) + ((0 | (o = (a >>> 8 & 255) - g | 0)) < 0 ? o : 0 - o | 0) | 0) + ((i = k >> 31) ^ i + k) | 0) + ((0 | (o = (a >>> 16 & 255) - b | 0)) < 0 ? o : 0 - o | 0) | 0) < 1 ? a : w)) + (-16711936 & (a = u[e + l >> 2])) & -16711936 | (16711935 & o) + (16711935 & a) & 16711935, u[t + l >> 2] = o, (0 | (c = c + 1 | 0)) != (0 | n););
                                    }, i[99] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (o = u[t + -4 >> 2]; l = t + (i = s << 2) | 0, o = (-16711936 & (o = (((f = (((f = u[4 + (a = i + r | 0) >> 2]) ^ (c = u[a >> 2])) >>> 1 & 2139062143) + (f & c) | 0) ^ (o = (((a = u[a + -4 >> 2]) ^ o) >>> 1 & 2139062143) + (o & a) | 0)) >>> 1 & 2139062143) + (o & f) | 0)) + (-16711936 & (i = u[e + i >> 2])) & -16711936 | (16711935 & o) + (16711935 & i) & 16711935, u[l >> 2] = o, (0 | (s = s + 1 | 0)) != (0 | n););
                                    }, i[100] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (; a = u[4 + (i = (o = f << 2) + r | 0) >> 2], s = t + o | 0, a = (((i = u[i >> 2]) ^ a) >>> 1 & 2139062143) + (a & i) | 0, o = u[e + o >> 2], u[s >> 2] = (-16711936 & a) + (-16711936 & o) & -16711936 | (16711935 & a) + (16711935 & o) & 16711935, (0 | (f = f + 1 | 0)) != (0 | n););
                                    }, i[101] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (; a = u[(i = (o = f << 2) + r | 0) >> 2], s = t + o | 0, a = (((i = u[i + -4 >> 2]) ^ a) >>> 1 & 2139062143) + (a & i) | 0, o = u[e + o >> 2], u[s >> 2] = (-16711936 & a) + (-16711936 & o) & -16711936 | (16711935 & a) + (16711935 & o) & 16711935, (0 | (f = f + 1 | 0)) != (0 | n););
                                    }, i[102] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (o = u[t + -4 >> 2]; o = (((a = u[(i = f << 2) + r >> 2]) ^ o) >>> 1 & 2139062143) + (o & a) | 0, a = t + i | 0, o = (-16711936 & o) + (-16711936 & (i = u[e + i >> 2])) & -16711936 | (16711935 & o) + (16711935 & i) & 16711935, u[a >> 2] = o, (0 | (f = f + 1 | 0)) != (0 | n););
                                    }, i[103] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (f = r + -4 | 0, r = u[t + -4 >> 2]; r = (((i = u[(o = a << 2) + f >> 2]) ^ r) >>> 1 & 2139062143) + (r & i) | 0, i = t + o | 0, r = (-16711936 & r) + (-16711936 & (o = u[e + o >> 2])) & -16711936 | (16711935 & r) + (16711935 & o) & 16711935, u[i >> 2] = r, (0 | (a = a + 1 | 0)) != (0 | n););
                                    }, i[104] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (o = u[t + -4 >> 2]; o = (((f = u[4 + (a = (i = s << 2) + r | 0) >> 2]) ^ o) >>> 1 & 2139062143) + (o & f) | 0, f = t + i | 0, o = (-16711936 & (o = (((a = u[a >> 2]) ^ o) >>> 1 & 2139062143) + (o & a) | 0)) + (-16711936 & (i = u[e + i >> 2])) & -16711936 | (16711935 & o) + (16711935 & i) & 16711935, u[f >> 2] = o, (0 | (s = s + 1 | 0)) != (0 | n););
                                    }, i[105] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (a = r + -4 | 0, r = 0; i = u[(o = r << 2) + e >> 2], f = t + o | 0, o = u[o + a >> 2], u[f >> 2] = (-16711936 & i) + (-16711936 & o) & -16711936 | (16711935 & i) + (16711935 & o) & 16711935, (0 | n) != (0 | (r = r + 1 | 0)););
                                    }, i[106] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (a = r + 4 | 0, r = 0; i = u[(o = r << 2) + e >> 2], f = t + o | 0, o = u[o + a >> 2], u[f >> 2] = (-16711936 & i) + (-16711936 & o) & -16711936 | (16711935 & i) + (16711935 & o) & 16711935, (0 | n) != (0 | (r = r + 1 | 0)););
                                    }, i[107] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (; a = u[(o = i << 2) + e >> 2], f = t + o | 0, o = u[r + o >> 2], u[f >> 2] = (-16711936 & a) + (-16711936 & o) & -16711936 | (16711935 & a) + (16711935 & o) & 16711935, (0 | (i = i + 1 | 0)) != (0 | n););
                                    }, i[108] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            a = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (r = u[t + -4 >> 2]; r = (-16711936 & (a = u[(i = o << 2) + e >> 2])) + (-16711936 & r) & -16711936 | (16711935 & a) + (16711935 & r) & 16711935, u[t + i >> 2] = r, (0 | (o = o + 1 | 0)) != (0 | n););
                                    }, i[109] = function(e, r, n) {
                                        e |= 0, n |= 0;
                                        var t = 0,
                                            o = 0,
                                            i = 0,
                                            a = 0;
                                        if ((0 | (r |= 0)) >= 1)
                                            for (; a = (o = u[(i = t << 2) + e >> 2]) >>> 8 & 255, u[n + i >> 2] = (16711935 & o) + (a << 16 | a) & 16711935 | -16711936 & o, (0 | (t = t + 1 | 0)) != (0 | r););
                                    }, i[110] = function(e, r, n, t) {
                                        e |= 0, r |= 0, t |= 0;
                                        var o = 0,
                                            i = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (c = a[e + 2 | 0], l = a[e + 1 | 0], d = a[0 | e]; e = u[(i = o << 2) + r >> 2], s = (A(f = e << 16 >> 24, d) >> 5) + (e >>> 16 | 0) | 0, u[t + i >> 2] = e + (A(l, f) >>> 5 | 0) + (A(s << 24 >> 24, c) >>> 5) & 255 | s << 16 & 16711680 | -16711936 & e, (0 | (o = o + 1 | 0)) != (0 | n););
                                    }, i[111] = function(e, r, n) {
                                        e |= 0, n |= 0;
                                        var t = 0;
                                        if ((0 | (r |= 0)) >= 1)
                                            for (t = (r << 2) + e | 0; r = u[e >> 2], a[n + 2 | 0] = r, a[n + 3 | 0] = r >>> 24, a[n + 1 | 0] = r >>> 8, a[0 | n] = r >>> 16, n = n + 4 | 0, (e = e + 4 | 0) >>> 0 < t >>> 0;);
                                    }, i[112] = function(e, r, n) {
                                        e |= 0, n |= 0;
                                        var t = 0;
                                        if ((0 | (r |= 0)) >= 1)
                                            for (t = (r << 2) + e | 0; r = u[e >> 2], a[n + 2 | 0] = r, a[n + 1 | 0] = r >>> 8, a[0 | n] = r >>> 16, n = n + 3 | 0, (e = e + 4 | 0) >>> 0 < t >>> 0;);
                                    }, i[113] = function(e, r, n) {
                                        e |= 0, n |= 0;
                                        var t = 0;
                                        if ((0 | (r |= 0)) >= 1)
                                            for (t = (r << 2) + e | 0; r = u[e >> 2], a[0 | n] = r, a[n + 2 | 0] = r >>> 16, a[n + 1 | 0] = r >>> 8, n = n + 3 | 0, (e = e + 4 | 0) >>> 0 < t >>> 0;);
                                    }, i[114] = function(e, r, n) {
                                        e |= 0, n |= 0;
                                        var t = 0;
                                        if ((0 | (r |= 0)) >= 1)
                                            for (t = (r << 2) + e | 0; r = u[e >> 2], a[n + 1 | 0] = 240 & r | r >>> 28, a[0 | n] = r >>> 16 & 240 | r >>> 12 & 15, n = n + 2 | 0, (e = e + 4 | 0) >>> 0 < t >>> 0;);
                                    }, i[115] = function(e, r, n) {
                                        e |= 0, n |= 0;
                                        var t = 0;
                                        if ((0 | (r |= 0)) >= 1)
                                            for (t = (r << 2) + e | 0; r = u[e >> 2], a[n + 1 | 0] = r >>> 5 & 224 | r >>> 3 & 31, a[0 | n] = r >>> 16 & 248 | r >>> 13 & 7, n = n + 2 | 0, (e = e + 4 | 0) >>> 0 < t >>> 0;);
                                    }, i[116] = function(e, r, n, t, o, i) {
                                        e |= 0, r |= 0, n |= 0, i |= 0;
                                        var a = 0,
                                            f = 0;
                                        if ((0 | (t |= 0)) < (0 | (o |= 0)))
                                            for (f = (0 | i) < 1;;) {
                                                if (a = 0, !f)
                                                    for (; u[n >> 2] = u[(u[e >> 2] >>> 6 & 1020) + r >> 2], n = n + 4 | 0, e = e + 4 | 0, (0 | (a = a + 1 | 0)) != (0 | i););
                                                if ((0 | o) == (0 | (t = t + 1 | 0))) break
                                            }
                                    }, i[117] = function(e, r, n, t, o, i) {
                                        e |= 0, r |= 0, n |= 0, i |= 0;
                                        var f = 0,
                                            c = 0;
                                        if ((0 | (t |= 0)) < (0 | (o |= 0)))
                                            for (c = (0 | i) < 1;;) {
                                                if (f = 0, !c)
                                                    for (; a[0 | n] = u[(s[0 | e] << 2) + r >> 2] >>> 8, n = n + 1 | 0, e = e + 1 | 0, (0 | (f = f + 1 | 0)) != (0 | i););
                                                if ((0 | o) == (0 | (t = t + 1 | 0))) break
                                            }
                                    }, i[118] = function(e) {
                                        var r, n, t, o = 0,
                                            i = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0;
                                        r = A(u[8 + (e |= 0) >> 2], u[e + 52 >> 2]), n = u[e + 76 >> 2], t = u[e + 68 >> 2];
                                        e: if (o = A(u[e + 24 >> 2], u[e + 16 >> 2])) {
                                            if ((0 | r) < 1) break e;
                                            for (s = u[e + 80 >> 2], d = 0 - o | 0, o = 0; f = u[e + 20 >> 2], v = u[(c = (i = o << 2) + n | 0) >> 2], vr(u[i + s >> 2], 0, d, 0), f = vr(f, 0, v - (l = P) | 0, 0) + -2147483648 | 0, i = P, i = f >>> 0 < 2147483648 ? i + 1 | 0 : i, a[o + t | 0] = (0 | i) > 255 ? -1 : i, u[c >> 2] = l, (0 | r) != (0 | (o = o + 1 | 0)););
                                        } else
                                        if (!((0 | r) < 1))
                                            for (o = 0; s = (o << 2) + n | 0, f = vr(u[e + 20 >> 2], 0, u[s >> 2], 0) + -2147483648 | 0, i = P, i = f >>> 0 < 2147483648 ? i + 1 | 0 : i, a[o + t | 0] = (0 | i) > 255 ? -1 : i, u[s >> 2] = 0, (0 | r) != (0 | (o = o + 1 | 0)););
                                    }, i[119] = function(e) {
                                        var r, n, t, o = 0,
                                            i = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0;
                                        r = A(u[8 + (e |= 0) >> 2], u[e + 52 >> 2]), n = u[e + 80 >> 2], t = u[e + 68 >> 2];
                                        e: if (o = u[e + 24 >> 2]) {
                                            if (o = Ar(0, i = 0 - o | 0, o = u[e + 32 >> 2], o >> 31), !((0 | r) < 1))
                                                for (c = u[e + 76 >> 2], l = o, d = 0 - o | 0; o = u[e + 16 >> 2], s = vr(d, 0, u[(i = f << 2) + n >> 2], 0), v = P, p = o, i = (o = s) + (s = vr(l, 0, u[i + c >> 2], 0)) | 0, o = P + v | 0, o = i >>> 0 < s >>> 0 ? o + 1 | 0 : o, i = vr(p, 0, (s = i + -2147483648 | 0) >>> 0 < 2147483648 ? o + 1 | 0 : o, 0) + -2147483648 | 0, o = P, o = i >>> 0 < 2147483648 ? o + 1 | 0 : o, a[f + t | 0] = (0 | o) > 255 ? -1 : o, (0 | r) != (0 | (f = f + 1 | 0)););
                                        } else {
                                            if ((0 | r) < 1) break e;
                                            for (; i = vr(u[e + 16 >> 2], 0, u[(f << 2) + n >> 2], 0) + -2147483648 | 0, o = P, o = i >>> 0 < 2147483648 ? o + 1 | 0 : o, a[f + t | 0] = (0 | o) > 255 ? -1 : o, (0 | r) != (0 | (f = f + 1 | 0)););
                                        }
                                    }, i[120] = function(e, r) {
                                        r |= 0;
                                        var n, t = 0,
                                            o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0;
                                        if ((0 | (n = u[8 + (e |= 0) >> 2])) >= 1)
                                            for (d = A(u[e + 52 >> 2], n), v = u[e + 80 >> 2];;) {
                                                if (t = n + a | 0, o = u[e + 36 >> 2], i = f = s[r + a | 0], i = u[e + 44 >> 2] >= 2 ? s[r + t | 0] : i, u[(a << 2) + v >> 2] = A(o, f), c = t, (0 | t) < (0 | d))
                                                    for (;
                                                        (0 | (o = o - u[e + 40 >> 2] | 0)) >= 0 ? l = u[e + 36 >> 2] : (o = (l = u[e + 36 >> 2]) + o | 0, f = i, i = s[(c = n + c | 0) + r | 0]), u[(t << 2) + v >> 2] = A(i, l) + A(f - i | 0, o), (0 | (t = t + n | 0)) < (0 | d););
                                                if ((0 | (a = a + 1 | 0)) == (0 | n)) break
                                            }
                                    }, i[121] = function(e, r) {
                                        r |= 0;
                                        var n, t = 0,
                                            o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0;
                                        if ((0 | (n = u[8 + (e |= 0) >> 2])) >= 1)
                                            for (d = A(u[e + 52 >> 2], n);;) {
                                                if ((0 | a) < (0 | d))
                                                    for (p = u[e + 80 >> 2], o = 0, i = 0, f = a, c = a;;) {
                                                        if (v = u[e + 40 >> 2], l = 0, (0 | (o = u[e + 36 >> 2] + o | 0)) >= 1) {
                                                            for (; i = (l = s[r + c | 0]) + i | 0, c = t = c + n | 0, (0 | (o = o - v | 0)) > 0;);
                                                            c = t
                                                        }
                                                        if (t = A(o, l), u[(f << 2) + p >> 2] = t + A(i, v), i = vr(u[e + 12 >> 2], 0, 0 - t | 0, 0) + -2147483648 | 0, t = P, i = i >>> 0 < 2147483648 ? t + 1 | 0 : t, !((0 | (f = n + f | 0)) < (0 | d))) break
                                                    }
                                                if ((0 | n) == (0 | (a = a + 1 | 0))) break
                                            }
                                    }, i[122] = function(e, r, n, t, o, i, f, u, c) {
                                        r |= 0, n |= 0, t |= 0, o |= 0, i |= 0, f |= 0, u |= 0, c |= 0;
                                        var l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0;
                                        if (v = s[0 | (e |= 0)], d = s[0 | n], p = s[0 | t], m = s[0 | o], b = s[0 | i], a[f + 3 | 0] = 255, v = A(v, 19077) >>> 8 | 0, p = 131074 + ((m |= b << 16) + A(d |= p << 16, 3) | 0) | 0, l = (k = v + (A(b = p >>> 18 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[f + 2 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : k >>> 0 < 14234 ? 0 : 255, l = (k = v + (A(p = p >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | f] = l >>> 0 < 16384 ? l >>> 6 | 0 : k >>> 0 < 17685 ? 0 : 255, p = 8708 + (v = v - (A(p, 6419) >>> 8 | 0) - (A(b, 13320) >>> 8) | 0) | 0, a[f + 1 | 0] = p >>> 0 < 16384 ? p >>> 6 | 0 : (0 | v) < -8708 ? 0 : 255, r && (v = s[0 | r], a[u + 3 | 0] = 255, v = A(v, 19077) >>> 8 | 0, p = 131074 + (A(m, 3) + d | 0) | 0, l = (k = v + (A(b = p >>> 18 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[u + 2 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : k >>> 0 < 14234 ? 0 : 255, l = (k = v + (A(p = p >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | u] = l >>> 0 < 16384 ? l >>> 6 | 0 : k >>> 0 < 17685 ? 0 : 255, p = 8708 + (v = v - (A(p, 6419) >>> 8 | 0) - (A(b, 13320) >>> 8) | 0) | 0, a[u + 1 | 0] = p >>> 0 < 16384 ? p >>> 6 | 0 : (0 | v) < -8708 ? 0 : 255), k = c + -1 | 0, (0 | c) < 3) v = m, p = d;
                                        else
                                            for (S = (0 | (v = k >> 1)) > 1 ? v : 1, b = 1; g = s[(y = (D = b << 1) - 1 | 0) + e | 0], p = s[n + b | 0], w = s[t + b | 0], v = s[o + b | 0], _ = s[i + b | 0], a[3 + (l = (x = y << 2) + f | 0) | 0] = 255, w = 524296 + ((v |= _ << 16) + ((_ = m + (p |= w << 16) | 0) + d | 0) | 0) | 0, h = (I = (g = A(g, 19077) >>> 8 | 0) + (A(E = (C = (_ = w + (_ << 1) >>> 3 | 0) + d | 0) >>> 17 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[l + 2 | 0] = h >>> 0 < 16384 ? h >>> 6 | 0 : I >>> 0 < 14234 ? 0 : 255, h = (I = g + (A(C = C >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | l] = h >>> 0 < 16384 ? h >>> 6 | 0 : I >>> 0 < 17685 ? 0 : 255, h = l, g = 8708 + (l = g - (A(C, 6419) >>> 8 | 0) - (A(E, 13320) >>> 8) | 0) | 0, a[h + 1 | 0] = g >>> 0 < 16384 ? g >>> 6 | 0 : (0 | l) < -8708 ? 0 : 255, g = s[e + D | 0], a[3 + (l = (C = b << 3) + f | 0) | 0] = 255, I = (E = (w = w + (d + v << 1) >>> 3 | 0) + p | 0) >>> 17 & 255, d = A(g, 19077) >>> 8 | 0, h = (g = (A(I, 26149) >>> 8 | 0) + d | 0) - 14234 | 0, a[l + 2 | 0] = h >>> 0 < 16384 ? h >>> 6 | 0 : g >>> 0 < 14234 ? 0 : 255, h = (E = d + (A(g = E >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | l] = h >>> 0 < 16384 ? h >>> 6 | 0 : E >>> 0 < 17685 ? 0 : 255, h = l, l = 8708 + (d = d - (A(g, 6419) >>> 8 | 0) - (A(I, 13320) >>> 8) | 0) | 0, a[h + 1 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : (0 | d) < -8708 ? 0 : 255, r && (l = s[r + y | 0], a[3 + (d = u + x | 0) | 0] = 255, w = (y = m + w | 0) >>> 17 & 255, m = A(l, 19077) >>> 8 | 0, g = (l = (A(w, 26149) >>> 8 | 0) + m | 0) - 14234 | 0, a[d + 2 | 0] = g >>> 0 < 16384 ? g >>> 6 | 0 : l >>> 0 < 14234 ? 0 : 255, g = (y = m + (A(l = y >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | d] = g >>> 0 < 16384 ? g >>> 6 | 0 : y >>> 0 < 17685 ? 0 : 255, h = d, m = 8708 + (d = m - (A(l, 6419) >>> 8 | 0) - (A(w, 13320) >>> 8) | 0) | 0, a[h + 1 | 0] = m >>> 0 < 16384 ? m >>> 6 | 0 : (0 | d) < -8708 ? 0 : 255, m = s[r + D | 0], a[3 + (d = u + C | 0) | 0] = 255, w = (y = (m = A(m, 19077) >>> 8 | 0) + (A(D = (l = v + _ | 0) >>> 17 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[d + 2 | 0] = w >>> 0 < 16384 ? w >>> 6 | 0 : y >>> 0 < 14234 ? 0 : 255, w = (y = m + (A(l = l >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | d] = w >>> 0 < 16384 ? w >>> 6 | 0 : y >>> 0 < 17685 ? 0 : 255, h = d, m = 8708 + (d = m - (A(l, 6419) >>> 8 | 0) - (A(D, 13320) >>> 8) | 0) | 0, a[h + 1 | 0] = m >>> 0 < 16384 ? m >>> 6 | 0 : (0 | d) < -8708 ? 0 : 255), l = (0 | b) != (0 | S), b = b + 1 | 0, d = p, m = v, l;);
                                        1 & c || (n = s[e + k | 0], a[3 + (e = (t = k << 2) + f | 0) | 0] = 255, n = A(n, 19077) >>> 8 | 0, o = 131074 + (A(p, 3) + v | 0) | 0, c = (f = n + (A(i = o >>> 18 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[e + 2 | 0] = c >>> 0 < 16384 ? c >>> 6 | 0 : f >>> 0 < 14234 ? 0 : 255, c = (f = n + (A(o = o >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | e] = c >>> 0 < 16384 ? c >>> 6 | 0 : f >>> 0 < 17685 ? 0 : 255, f = e, n = 8708 + (e = n - (A(o, 6419) >>> 8 | 0) - (A(i, 13320) >>> 8) | 0) | 0, a[f + 1 | 0] = n >>> 0 < 16384 ? n >>> 6 | 0 : (0 | e) < -8708 ? 0 : 255, r && (r = s[r + k | 0], a[3 + (e = t + u | 0) | 0] = 255, r = A(r, 19077) >>> 8 | 0, n = 131074 + (A(v, 3) + p | 0) | 0, i = (o = r + (A(t = n >>> 18 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[e + 2 | 0] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 14234 ? 0 : 255, i = (o = r + (A(n = n >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | e] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 17685 ? 0 : 255, o = e, r = 8708 + (e = r - (A(n, 6419) >>> 8 | 0) - (A(t, 13320) >>> 8) | 0) | 0, a[o + 1 | 0] = r >>> 0 < 16384 ? r >>> 6 | 0 : (0 | e) < -8708 ? 0 : 255))
                                    }, i[123] = function(e, r, n, t, o, i, f, u, c) {
                                        r |= 0, n |= 0, t |= 0, o |= 0, i |= 0, f |= 0, u |= 0, c |= 0;
                                        var l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0;
                                        if (v = s[0 | (e |= 0)], d = s[0 | n], p = s[0 | t], m = s[0 | o], b = s[0 | i], a[f + 3 | 0] = 255, v = A(v, 19077) >>> 8 | 0, p = 131074 + ((m |= b << 16) + A(d |= p << 16, 3) | 0) | 0, l = (k = v + (A(b = p >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[f + 2 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : k >>> 0 < 17685 ? 0 : 255, l = (k = v + (A(p = p >>> 18 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | f] = l >>> 0 < 16384 ? l >>> 6 | 0 : k >>> 0 < 14234 ? 0 : 255, p = 8708 + (v = v - (A(b, 6419) >>> 8 | 0) - (A(p, 13320) >>> 8) | 0) | 0, a[f + 1 | 0] = p >>> 0 < 16384 ? p >>> 6 | 0 : (0 | v) < -8708 ? 0 : 255, r && (v = s[0 | r], a[u + 3 | 0] = 255, v = A(v, 19077) >>> 8 | 0, p = 131074 + (A(m, 3) + d | 0) | 0, l = (k = v + (A(b = p >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[u + 2 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : k >>> 0 < 17685 ? 0 : 255, l = (k = v + (A(p = p >>> 18 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | u] = l >>> 0 < 16384 ? l >>> 6 | 0 : k >>> 0 < 14234 ? 0 : 255, p = 8708 + (v = v - (A(b, 6419) >>> 8 | 0) - (A(p, 13320) >>> 8) | 0) | 0, a[u + 1 | 0] = p >>> 0 < 16384 ? p >>> 6 | 0 : (0 | v) < -8708 ? 0 : 255), k = c + -1 | 0, (0 | c) < 3) v = m, p = d;
                                        else
                                            for (S = (0 | (v = k >> 1)) > 1 ? v : 1, b = 1; g = s[(y = (D = b << 1) - 1 | 0) + e | 0], p = s[n + b | 0], w = s[t + b | 0], v = s[o + b | 0], _ = s[i + b | 0], a[3 + (l = (x = y << 2) + f | 0) | 0] = 255, w = 524296 + ((v |= _ << 16) + ((_ = m + (p |= w << 16) | 0) + d | 0) | 0) | 0, h = (I = (g = A(g, 19077) >>> 8 | 0) + (A(E = (C = (_ = w + (_ << 1) >>> 3 | 0) + d | 0) >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[l + 2 | 0] = h >>> 0 < 16384 ? h >>> 6 | 0 : I >>> 0 < 17685 ? 0 : 255, h = (I = g + (A(C = C >>> 17 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | l] = h >>> 0 < 16384 ? h >>> 6 | 0 : I >>> 0 < 14234 ? 0 : 255, h = l, g = 8708 + (l = g - (A(E, 6419) >>> 8 | 0) - (A(C, 13320) >>> 8) | 0) | 0, a[h + 1 | 0] = g >>> 0 < 16384 ? g >>> 6 | 0 : (0 | l) < -8708 ? 0 : 255, g = s[e + D | 0], a[3 + (l = (C = b << 3) + f | 0) | 0] = 255, I = (E = (w = w + (d + v << 1) >>> 3 | 0) + p | 0) >>> 1 & 255, d = A(g, 19077) >>> 8 | 0, h = (g = (A(I, 33050) >>> 8 | 0) + d | 0) - 17685 | 0, a[l + 2 | 0] = h >>> 0 < 16384 ? h >>> 6 | 0 : g >>> 0 < 17685 ? 0 : 255, h = (E = d + (A(g = E >>> 17 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | l] = h >>> 0 < 16384 ? h >>> 6 | 0 : E >>> 0 < 14234 ? 0 : 255, h = l, l = 8708 + (d = d - (A(I, 6419) >>> 8 | 0) - (A(g, 13320) >>> 8) | 0) | 0, a[h + 1 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : (0 | d) < -8708 ? 0 : 255, r && (l = s[r + y | 0], a[3 + (d = u + x | 0) | 0] = 255, w = (y = m + w | 0) >>> 1 & 255, m = A(l, 19077) >>> 8 | 0, g = (l = (A(w, 33050) >>> 8 | 0) + m | 0) - 17685 | 0, a[d + 2 | 0] = g >>> 0 < 16384 ? g >>> 6 | 0 : l >>> 0 < 17685 ? 0 : 255, g = (y = m + (A(l = y >>> 17 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | d] = g >>> 0 < 16384 ? g >>> 6 | 0 : y >>> 0 < 14234 ? 0 : 255, h = d, m = 8708 + (d = m - (A(w, 6419) >>> 8 | 0) - (A(l, 13320) >>> 8) | 0) | 0, a[h + 1 | 0] = m >>> 0 < 16384 ? m >>> 6 | 0 : (0 | d) < -8708 ? 0 : 255, m = s[r + D | 0], a[3 + (d = u + C | 0) | 0] = 255, w = (y = (m = A(m, 19077) >>> 8 | 0) + (A(D = (l = v + _ | 0) >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[d + 2 | 0] = w >>> 0 < 16384 ? w >>> 6 | 0 : y >>> 0 < 17685 ? 0 : 255, w = (y = m + (A(l = l >>> 17 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | d] = w >>> 0 < 16384 ? w >>> 6 | 0 : y >>> 0 < 14234 ? 0 : 255, h = d, m = 8708 + (d = m - (A(D, 6419) >>> 8 | 0) - (A(l, 13320) >>> 8) | 0) | 0, a[h + 1 | 0] = m >>> 0 < 16384 ? m >>> 6 | 0 : (0 | d) < -8708 ? 0 : 255), l = (0 | b) != (0 | S), b = b + 1 | 0, d = p, m = v, l;);
                                        1 & c || (n = s[e + k | 0], a[3 + (e = (t = k << 2) + f | 0) | 0] = 255, n = A(n, 19077) >>> 8 | 0, o = 131074 + (A(p, 3) + v | 0) | 0, c = (f = n + (A(i = o >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[e + 2 | 0] = c >>> 0 < 16384 ? c >>> 6 | 0 : f >>> 0 < 17685 ? 0 : 255, c = (f = n + (A(o = o >>> 18 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | e] = c >>> 0 < 16384 ? c >>> 6 | 0 : f >>> 0 < 14234 ? 0 : 255, f = e, n = 8708 + (e = n - (A(i, 6419) >>> 8 | 0) - (A(o, 13320) >>> 8) | 0) | 0, a[f + 1 | 0] = n >>> 0 < 16384 ? n >>> 6 | 0 : (0 | e) < -8708 ? 0 : 255, r && (r = s[r + k | 0], a[3 + (e = t + u | 0) | 0] = 255, r = A(r, 19077) >>> 8 | 0, n = 131074 + (A(v, 3) + p | 0) | 0, i = (o = r + (A(t = n >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[e + 2 | 0] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 17685 ? 0 : 255, i = (o = r + (A(n = n >>> 18 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | e] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 14234 ? 0 : 255, o = e, r = 8708 + (e = r - (A(t, 6419) >>> 8 | 0) - (A(n, 13320) >>> 8) | 0) | 0, a[o + 1 | 0] = r >>> 0 < 16384 ? r >>> 6 | 0 : (0 | e) < -8708 ? 0 : 255))
                                    }, i[124] = function(e, r, n, t, o, i, f, u, c) {
                                        r |= 0, n |= 0, t |= 0, o |= 0, i |= 0, f |= 0, u |= 0, c |= 0;
                                        var l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0;
                                        if (v = A(s[0 | (e |= 0)], 19077) >>> 8 | 0, p = s[0 | o] | s[0 | i] << 16, l = s[0 | n] | s[0 | t] << 16, m = 131074 + (p + A(l, 3) | 0) | 0, d = (b = v + (A(h = m >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[f + 1 | 0] = 15 | (d >>> 0 < 16384 ? d >>> 6 | 0 : b >>> 0 < 17685 ? 0 : 240), m = m >>> 18 | 0, b = 8708 + (h = v - (A(h, 6419) >>> 8 | 0) - (A(m, 13320) >>> 8) | 0) | 0, m = (v = v + (A(m, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | f] = (b >>> 0 < 16384 ? b >>> 10 | 0 : (0 | h) < -8708 ? 0 : 15) | 240 & (m >>> 0 < 16384 ? m >>> 6 | 0 : v >>> 0 < 14234 ? 0 : 240), r && (v = A(s[0 | r], 19077) >>> 8 | 0, m = 131074 + (A(p, 3) + l | 0) | 0, d = (b = v + (A(h = m >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[u + 1 | 0] = 15 | (d >>> 0 < 16384 ? d >>> 6 | 0 : b >>> 0 < 17685 ? 0 : 240), d = (b = v + (A(m = m >>> 18 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, m = 8708 + (v = v - (A(h, 6419) >>> 8 | 0) - (A(m, 13320) >>> 8) | 0) | 0, a[0 | u] = 240 & (d >>> 0 < 16384 ? d >>> 6 | 0 : b >>> 0 < 14234 ? 0 : 240) | (m >>> 0 < 16384 ? m >>> 10 | 0 : (0 | v) < -8708 ? 0 : 15)), b = c + -1 | 0, (0 | c) < 3) v = p, m = l;
                                        else
                                            for (S = (0 | (v = b >> 1)) > 1 ? v : 1, h = 1; g = (_ = (w = (E = h << 1) - 1 | 0) << 1) + f | 0, C = (y = (x = (d = 524296 + ((v = s[o + h | 0] | s[i + h | 0] << 16) + ((k = (m = s[n + h | 0] | s[t + h | 0] << 16) + p | 0) + l | 0) | 0) | 0) + (k << 1) >>> 3 | 0) + l | 0) >>> 1 & 255, k = A(s[e + w | 0], 19077) >>> 8 | 0, I = (D = (A(C, 33050) >>> 8 | 0) + k | 0) - 17685 | 0, a[g + 1 | 0] = 15 | (I >>> 0 < 16384 ? I >>> 6 | 0 : D >>> 0 < 17685 ? 0 : 240), I = g, g = y >>> 17 | 0, C = 8708 + (y = k - (A(C, 6419) >>> 8 | 0) - (A(g, 13320) >>> 8) | 0) | 0, g = (k = k + (A(g, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | I] = (C >>> 0 < 16384 ? C >>> 10 | 0 : (0 | y) < -8708 ? 0 : 15) | 240 & (g >>> 0 < 16384 ? g >>> 6 | 0 : k >>> 0 < 14234 ? 0 : 240), g = (k = h << 2) + f | 0, C = (y = (d = d + (l + v << 1) >>> 3 | 0) + m | 0) >>> 1 & 255, l = A(s[e + E | 0], 19077) >>> 8 | 0, I = (D = (A(C, 33050) >>> 8 | 0) + l | 0) - 17685 | 0, a[g + 1 | 0] = 15 | (I >>> 0 < 16384 ? I >>> 6 | 0 : D >>> 0 < 17685 ? 0 : 240), I = g, g = y >>> 17 | 0, C = 8708 + (y = l - (A(C, 6419) >>> 8 | 0) - (A(g, 13320) >>> 8) | 0) | 0, g = (l = l + (A(g, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | I] = (C >>> 0 < 16384 ? C >>> 10 | 0 : (0 | y) < -8708 ? 0 : 15) | 240 & (g >>> 0 < 16384 ? g >>> 6 | 0 : l >>> 0 < 14234 ? 0 : 240), r && (_ = u + _ | 0, g = (w = (l = A(s[r + w | 0], 19077) >>> 8 | 0) + (A(d = (p = d + p | 0) >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[_ + 1 | 0] = 15 | (g >>> 0 < 16384 ? g >>> 6 | 0 : w >>> 0 < 17685 ? 0 : 240), g = _, _ = (w = l + (A(p = p >>> 17 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, p = 8708 + (l = l - (A(d, 6419) >>> 8 | 0) - (A(p, 13320) >>> 8) | 0) | 0, a[0 | g] = 240 & (_ >>> 0 < 16384 ? _ >>> 6 | 0 : w >>> 0 < 14234 ? 0 : 240) | (p >>> 0 < 16384 ? p >>> 10 | 0 : (0 | l) < -8708 ? 0 : 15), p = u + k | 0, k = (E = (l = A(s[r + E | 0], 19077) >>> 8 | 0) + (A(w = (d = v + x | 0) >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[p + 1 | 0] = 15 | (k >>> 0 < 16384 ? k >>> 6 | 0 : E >>> 0 < 17685 ? 0 : 240), g = p, E = (d = l + (A(p = d >>> 17 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, p = 8708 + (l = l - (A(w, 6419) >>> 8 | 0) - (A(p, 13320) >>> 8) | 0) | 0, a[0 | g] = 240 & (E >>> 0 < 16384 ? E >>> 6 | 0 : d >>> 0 < 14234 ? 0 : 240) | (p >>> 0 < 16384 ? p >>> 10 | 0 : (0 | l) < -8708 ? 0 : 15)), d = (0 | h) != (0 | S), h = h + 1 | 0, l = m, p = v, d;);
                                        1 & c || (t = (n = b << 1) + f | 0, e = A(s[e + b | 0], 19077) >>> 8 | 0, o = 131074 + (A(m, 3) + v | 0) | 0, c = (f = e + (A(i = o >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 1 | 0] = 15 | (c >>> 0 < 16384 ? c >>> 6 | 0 : f >>> 0 < 17685 ? 0 : 240), c = t, f = (o = e + (A(t = o >>> 18 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, t = 8708 + (e = e - (A(i, 6419) >>> 8 | 0) - (A(t, 13320) >>> 8) | 0) | 0, a[0 | c] = 240 & (f >>> 0 < 16384 ? f >>> 6 | 0 : o >>> 0 < 14234 ? 0 : 240) | (t >>> 0 < 16384 ? t >>> 10 | 0 : (0 | e) < -8708 ? 0 : 15), r && (n = n + u | 0, e = A(s[r + b | 0], 19077) >>> 8 | 0, t = 131074 + (A(v, 3) + m | 0) | 0, i = (r = e + (A(o = t >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[n + 1 | 0] = 15 | (i >>> 0 < 16384 ? i >>> 6 | 0 : r >>> 0 < 17685 ? 0 : 240), i = n, t = (n = e + (A(r = t >>> 18 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, r = 8708 + (e = e - (A(o, 6419) >>> 8 | 0) - (A(r, 13320) >>> 8) | 0) | 0, a[0 | i] = 240 & (t >>> 0 < 16384 ? t >>> 6 | 0 : n >>> 0 < 14234 ? 0 : 240) | (r >>> 0 < 16384 ? r >>> 10 | 0 : (0 | e) < -8708 ? 0 : 15)))
                                    }, i[125] = function(e, r, n, t, o, i, f, u, c) {
                                        r |= 0, n |= 0, t |= 0, o |= 0, i |= 0, f |= 0, u |= 0, c |= 0;
                                        var l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0;
                                        if (v = s[0 | (e |= 0)], d = s[0 | n], p = s[0 | t], m = s[0 | o], b = s[0 | i], a[0 | f] = 255, v = A(v, 19077) >>> 8 | 0, p = 131074 + ((m |= b << 16) + A(d |= p << 16, 3) | 0) | 0, l = (k = v + (A(b = p >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[f + 3 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : k >>> 0 < 17685 ? 0 : 255, l = (k = v + (A(p = p >>> 18 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[f + 1 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : k >>> 0 < 14234 ? 0 : 255, p = 8708 + (v = v - (A(b, 6419) >>> 8 | 0) - (A(p, 13320) >>> 8) | 0) | 0, a[f + 2 | 0] = p >>> 0 < 16384 ? p >>> 6 | 0 : (0 | v) < -8708 ? 0 : 255, r && (v = s[0 | r], a[0 | u] = 255, v = A(v, 19077) >>> 8 | 0, p = 131074 + (A(m, 3) + d | 0) | 0, l = (k = v + (A(b = p >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[u + 3 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : k >>> 0 < 17685 ? 0 : 255, l = (k = v + (A(p = p >>> 18 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[u + 1 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : k >>> 0 < 14234 ? 0 : 255, p = 8708 + (v = v - (A(b, 6419) >>> 8 | 0) - (A(p, 13320) >>> 8) | 0) | 0, a[u + 2 | 0] = p >>> 0 < 16384 ? p >>> 6 | 0 : (0 | v) < -8708 ? 0 : 255), k = c + -1 | 0, (0 | c) < 3) v = m, p = d;
                                        else
                                            for (S = (0 | (v = k >> 1)) > 1 ? v : 1, b = 1; g = s[(y = (D = b << 1) - 1 | 0) + e | 0], p = s[n + b | 0], w = s[t + b | 0], v = s[o + b | 0], _ = s[i + b | 0], a[0 | (l = (x = y << 2) + f | 0)] = 255, w = 524296 + ((v |= _ << 16) + ((_ = m + (p |= w << 16) | 0) + d | 0) | 0) | 0, h = (I = (g = A(g, 19077) >>> 8 | 0) + (A(E = (C = (_ = w + (_ << 1) >>> 3 | 0) + d | 0) >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[l + 3 | 0] = h >>> 0 < 16384 ? h >>> 6 | 0 : I >>> 0 < 17685 ? 0 : 255, h = (I = g + (A(C = C >>> 17 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[l + 1 | 0] = h >>> 0 < 16384 ? h >>> 6 | 0 : I >>> 0 < 14234 ? 0 : 255, h = l, g = 8708 + (l = g - (A(E, 6419) >>> 8 | 0) - (A(C, 13320) >>> 8) | 0) | 0, a[h + 2 | 0] = g >>> 0 < 16384 ? g >>> 6 | 0 : (0 | l) < -8708 ? 0 : 255, g = s[e + D | 0], a[0 | (l = (C = b << 3) + f | 0)] = 255, I = (E = (w = w + (d + v << 1) >>> 3 | 0) + p | 0) >>> 1 & 255, d = A(g, 19077) >>> 8 | 0, h = (g = (A(I, 33050) >>> 8 | 0) + d | 0) - 17685 | 0, a[l + 3 | 0] = h >>> 0 < 16384 ? h >>> 6 | 0 : g >>> 0 < 17685 ? 0 : 255, h = (E = d + (A(g = E >>> 17 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[l + 1 | 0] = h >>> 0 < 16384 ? h >>> 6 | 0 : E >>> 0 < 14234 ? 0 : 255, h = l, l = 8708 + (d = d - (A(I, 6419) >>> 8 | 0) - (A(g, 13320) >>> 8) | 0) | 0, a[h + 2 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : (0 | d) < -8708 ? 0 : 255, r && (l = s[r + y | 0], a[0 | (d = u + x | 0)] = 255, w = (y = m + w | 0) >>> 1 & 255, m = A(l, 19077) >>> 8 | 0, g = (l = (A(w, 33050) >>> 8 | 0) + m | 0) - 17685 | 0, a[d + 3 | 0] = g >>> 0 < 16384 ? g >>> 6 | 0 : l >>> 0 < 17685 ? 0 : 255, g = (y = m + (A(l = y >>> 17 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[d + 1 | 0] = g >>> 0 < 16384 ? g >>> 6 | 0 : y >>> 0 < 14234 ? 0 : 255, h = d, m = 8708 + (d = m - (A(w, 6419) >>> 8 | 0) - (A(l, 13320) >>> 8) | 0) | 0, a[h + 2 | 0] = m >>> 0 < 16384 ? m >>> 6 | 0 : (0 | d) < -8708 ? 0 : 255, m = s[r + D | 0], a[0 | (d = u + C | 0)] = 255, w = (y = (m = A(m, 19077) >>> 8 | 0) + (A(D = (l = v + _ | 0) >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[d + 3 | 0] = w >>> 0 < 16384 ? w >>> 6 | 0 : y >>> 0 < 17685 ? 0 : 255, w = (y = m + (A(l = l >>> 17 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[d + 1 | 0] = w >>> 0 < 16384 ? w >>> 6 | 0 : y >>> 0 < 14234 ? 0 : 255, h = d, m = 8708 + (d = m - (A(D, 6419) >>> 8 | 0) - (A(l, 13320) >>> 8) | 0) | 0, a[h + 2 | 0] = m >>> 0 < 16384 ? m >>> 6 | 0 : (0 | d) < -8708 ? 0 : 255), l = (0 | b) != (0 | S), b = b + 1 | 0, d = p, m = v, l;);
                                        1 & c || (n = s[e + k | 0], a[0 | (e = (t = k << 2) + f | 0)] = 255, n = A(n, 19077) >>> 8 | 0, o = 131074 + (A(p, 3) + v | 0) | 0, c = (f = n + (A(i = o >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[e + 3 | 0] = c >>> 0 < 16384 ? c >>> 6 | 0 : f >>> 0 < 17685 ? 0 : 255, c = (f = n + (A(o = o >>> 18 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[e + 1 | 0] = c >>> 0 < 16384 ? c >>> 6 | 0 : f >>> 0 < 14234 ? 0 : 255, f = e, n = 8708 + (e = n - (A(i, 6419) >>> 8 | 0) - (A(o, 13320) >>> 8) | 0) | 0, a[f + 2 | 0] = n >>> 0 < 16384 ? n >>> 6 | 0 : (0 | e) < -8708 ? 0 : 255, r && (r = s[r + k | 0], a[0 | (e = t + u | 0)] = 255, r = A(r, 19077) >>> 8 | 0, n = 131074 + (A(v, 3) + p | 0) | 0, i = (o = r + (A(t = n >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[e + 3 | 0] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 17685 ? 0 : 255, i = (o = r + (A(n = n >>> 18 & 255, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[e + 1 | 0] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 14234 ? 0 : 255, o = e, r = 8708 + (e = r - (A(t, 6419) >>> 8 | 0) - (A(n, 13320) >>> 8) | 0) | 0, a[o + 2 | 0] = r >>> 0 < 16384 ? r >>> 6 | 0 : (0 | e) < -8708 ? 0 : 255))
                                    }, i[126] = function(e, r, n, t, o, i, f, u, c) {
                                        r |= 0, n |= 0, t |= 0, o |= 0, i |= 0, f |= 0, u |= 0, c |= 0;
                                        var l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0;
                                        if (p = A(s[0 | (e |= 0)], 19077) >>> 8 | 0, m = s[0 | o] | s[0 | i] << 16, l = s[0 | n] | s[0 | t] << 16, b = (v = 131074 + (m + A(l, 3) | 0) | 0) >>> 2 & 255, v = v >>> 18 | 0, h = (d = 8708 + (h = p - (A(b, 6419) >>> 8 | 0) - (A(v, 13320) >>> 8) | 0) | 0) >>> 0 < 16384 ? d >> 6 : (0 | h) < -8708 ? 0 : 255, d = (v = p + (A(v, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | f] = h >>> 5 | 248 & (d >>> 0 < 16384 ? d >>> 6 | 0 : v >>> 0 < 14234 ? 0 : 248), v = (p = p + (A(b, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[f + 1 | 0] = h << 3 & 224 | (v >>> 0 < 16384 ? v >>> 9 | 0 : p >>> 0 < 17685 ? 0 : 31), r && (p = A(s[0 | r], 19077) >>> 8 | 0, b = (v = 131074 + (A(m, 3) + l | 0) | 0) >>> 2 & 255, v = v >>> 18 | 0, h = (d = 8708 + (h = p - (A(b, 6419) >>> 8 | 0) - (A(v, 13320) >>> 8) | 0) | 0) >>> 0 < 16384 ? d >> 6 : (0 | h) < -8708 ? 0 : 255, d = (v = p + (A(v, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | u] = h >>> 5 | 248 & (d >>> 0 < 16384 ? d >>> 6 | 0 : v >>> 0 < 14234 ? 0 : 248), v = (p = p + (A(b, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[u + 1 | 0] = h << 3 & 224 | (v >>> 0 < 16384 ? v >>> 9 | 0 : p >>> 0 < 17685 ? 0 : 31)), h = c + -1 | 0, (0 | c) < 3) p = m, v = l;
                                        else
                                            for (S = (0 | (p = h >> 1)) > 1 ? p : 1, b = 1; I = (E = (k = (_ = b << 1) - 1 | 0) << 1) + f | 0, x = (y = (D = (d = 524296 + ((p = s[o + b | 0] | s[i + b | 0] << 16) + ((D = (v = s[n + b | 0] | s[t + b | 0] << 16) + m | 0) + l | 0) | 0) | 0) + (D << 1) >>> 3 | 0) + l | 0) >>> 1 & 255, y = y >>> 17 | 0, C = (w = 8708 + (C = (g = A(s[e + k | 0], 19077) >>> 8 | 0) - (A(x, 6419) >>> 8 | 0) - (A(y, 13320) >>> 8) | 0) | 0) >>> 0 < 16384 ? w >> 6 : (0 | C) < -8708 ? 0 : 255, w = (y = g + (A(y, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | I] = C >>> 5 | 248 & (w >>> 0 < 16384 ? w >>> 6 | 0 : y >>> 0 < 14234 ? 0 : 248), w = I, I = (g = g + (A(x, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[w + 1 | 0] = C << 3 & 224 | (I >>> 0 < 16384 ? I >>> 9 | 0 : g >>> 0 < 17685 ? 0 : 31), y = (I = b << 2) + f | 0, x = (l = (d = d + (l + p << 1) >>> 3 | 0) + v | 0) >>> 1 & 255, l = l >>> 17 | 0, C = (w = 8708 + (C = (g = A(s[e + _ | 0], 19077) >>> 8 | 0) - (A(x, 6419) >>> 8 | 0) - (A(l, 13320) >>> 8) | 0) | 0) >>> 0 < 16384 ? w >> 6 : (0 | C) < -8708 ? 0 : 255, w = (l = g + (A(l, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | y] = C >>> 5 | 248 & (w >>> 0 < 16384 ? w >>> 6 | 0 : l >>> 0 < 14234 ? 0 : 248), g = (l = g + (A(x, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[y + 1 | 0] = C << 3 & 224 | (g >>> 0 < 16384 ? g >>> 9 | 0 : l >>> 0 < 17685 ? 0 : 31), r && (g = u + E | 0, d = (m = d + m | 0) >>> 1 & 255, m = m >>> 17 | 0, k = (E = 8708 + (k = (l = A(s[r + k | 0], 19077) >>> 8 | 0) - (A(d, 6419) >>> 8 | 0) - (A(m, 13320) >>> 8) | 0) | 0) >>> 0 < 16384 ? E >> 6 : (0 | k) < -8708 ? 0 : 255, E = (m = l + (A(m, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | g] = k >>> 5 | 248 & (E >>> 0 < 16384 ? E >>> 6 | 0 : m >>> 0 < 14234 ? 0 : 248), m = (l = l + (A(d, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[g + 1 | 0] = k << 3 & 224 | (m >>> 0 < 16384 ? m >>> 9 | 0 : l >>> 0 < 17685 ? 0 : 31), m = u + I | 0, l = A(s[r + _ | 0], 19077) >>> 8 | 0, _ = (d = p + D | 0) >>> 1 & 255, d = d >>> 17 | 0, k = (g = 8708 + (k = l - (A(_, 6419) >>> 8 | 0) - (A(d, 13320) >>> 8) | 0) | 0) >>> 0 < 16384 ? g >> 6 : (0 | k) < -8708 ? 0 : 255, g = (d = l + (A(d, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | m] = k >>> 5 | 248 & (g >>> 0 < 16384 ? g >>> 6 | 0 : d >>> 0 < 14234 ? 0 : 248), w = m, m = (l = l + (A(_, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[w + 1 | 0] = k << 3 & 224 | (m >>> 0 < 16384 ? m >>> 9 | 0 : l >>> 0 < 17685 ? 0 : 31)), d = (0 | b) != (0 | S), b = b + 1 | 0, l = v, m = p, d;);
                                        1 & c || (t = (n = h << 1) + f | 0, e = A(s[e + h | 0], 19077) >>> 8 | 0, i = (o = 131074 + (A(v, 3) + p | 0) | 0) >>> 2 & 255, o = o >>> 18 | 0, f = (c = 8708 + (f = e - (A(i, 6419) >>> 8 | 0) - (A(o, 13320) >>> 8) | 0) | 0) >>> 0 < 16384 ? c >> 6 : (0 | f) < -8708 ? 0 : 255, c = (o = e + (A(o, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | t] = f >>> 5 | 248 & (c >>> 0 < 16384 ? c >>> 6 | 0 : o >>> 0 < 14234 ? 0 : 248), o = t, t = (e = e + (A(i, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[o + 1 | 0] = f << 3 & 224 | (t >>> 0 < 16384 ? t >>> 9 | 0 : e >>> 0 < 17685 ? 0 : 31), r && (n = n + u | 0, e = A(s[r + h | 0], 19077) >>> 8 | 0, t = (r = 131074 + (A(p, 3) + v | 0) | 0) >>> 2 & 255, r = r >>> 18 | 0, o = (i = 8708 + (o = e - (A(t, 6419) >>> 8 | 0) - (A(r, 13320) >>> 8) | 0) | 0) >>> 0 < 16384 ? i >> 6 : (0 | o) < -8708 ? 0 : 255, i = (r = e + (A(r, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | n] = o >>> 5 | 248 & (i >>> 0 < 16384 ? i >>> 6 | 0 : r >>> 0 < 14234 ? 0 : 248), r = (e = e + (A(t, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[n + 1 | 0] = o << 3 & 224 | (r >>> 0 < 16384 ? r >>> 9 | 0 : e >>> 0 < 17685 ? 0 : 31)))
                                    }, i[127] = function(e, r, n, t, o, i, f, u, c) {
                                        r |= 0, n |= 0, t |= 0, o |= 0, i |= 0, f |= 0, u |= 0, c |= 0;
                                        var l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0;
                                        if (v = A(s[0 | (e |= 0)], 19077) >>> 8 | 0, g = s[0 | o] | s[0 | i] << 16, d = s[0 | n] | s[0 | t] << 16, p = 131074 + (g + A(d, 3) | 0) | 0, l = (b = v + (A(k = p >>> 18 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[f + 2 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : b >>> 0 < 14234 ? 0 : 255, l = (b = v + (A(p = p >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | f] = l >>> 0 < 16384 ? l >>> 6 | 0 : b >>> 0 < 17685 ? 0 : 255, p = 8708 + (v = v - (A(p, 6419) >>> 8 | 0) - (A(k, 13320) >>> 8) | 0) | 0, a[f + 1 | 0] = p >>> 0 < 16384 ? p >>> 6 | 0 : (0 | v) < -8708 ? 0 : 255, r && (v = A(s[0 | r], 19077) >>> 8 | 0, p = 131074 + (A(g, 3) + d | 0) | 0, l = (b = v + (A(k = p >>> 18 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[u + 2 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : b >>> 0 < 14234 ? 0 : 255, l = (b = v + (A(p = p >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | u] = l >>> 0 < 16384 ? l >>> 6 | 0 : b >>> 0 < 17685 ? 0 : 255, p = 8708 + (v = v - (A(p, 6419) >>> 8 | 0) - (A(k, 13320) >>> 8) | 0) | 0, a[u + 1 | 0] = p >>> 0 < 16384 ? p >>> 6 | 0 : (0 | v) < -8708 ? 0 : 255), b = c + -1 | 0, (0 | c) < 3) v = g, p = d;
                                        else
                                            for (S = (0 | (v = b >> 1)) > 1 ? v : 1, k = 1; l = 524296 + ((v = s[o + k | 0] | s[i + k | 0] << 16) + ((w = (p = s[n + k | 0] | s[t + k | 0] << 16) + g | 0) + d | 0) | 0) | 0, m = (_ = A(y = (I = k << 1) - 1 | 0, 3)) + f | 0, D = (C = (x = l + (w << 1) >>> 3 | 0) + d | 0) >>> 17 | 0, w = A(s[e + y | 0], 19077) >>> 8 | 0, E = (h = (A(D, 26149) >>> 8 | 0) + w | 0) - 14234 | 0, a[m + 2 | 0] = E >>> 0 < 16384 ? E >>> 6 | 0 : h >>> 0 < 14234 ? 0 : 255, E = (h = w + (A(C = C >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | m] = E >>> 0 < 16384 ? E >>> 6 | 0 : h >>> 0 < 17685 ? 0 : 255, h = m, w = 8708 + (m = w - (A(C, 6419) >>> 8 | 0) - (A(D, 13320) >>> 8) | 0) | 0, a[h + 1 | 0] = w >>> 0 < 16384 ? w >>> 6 | 0 : (0 | m) < -8708 ? 0 : 255, m = (w = A(k, 6)) + f | 0, D = (C = (l = l + (d + v << 1) >>> 3 | 0) + p | 0) >>> 17 | 0, d = A(s[e + I | 0], 19077) >>> 8 | 0, E = (h = (A(D, 26149) >>> 8 | 0) + d | 0) - 14234 | 0, a[m + 2 | 0] = E >>> 0 < 16384 ? E >>> 6 | 0 : h >>> 0 < 14234 ? 0 : 255, E = (h = d + (A(C = C >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | m] = E >>> 0 < 16384 ? E >>> 6 | 0 : h >>> 0 < 17685 ? 0 : 255, h = m, m = 8708 + (d = d - (A(C, 6419) >>> 8 | 0) - (A(D, 13320) >>> 8) | 0) | 0, a[h + 1 | 0] = m >>> 0 < 16384 ? m >>> 6 | 0 : (0 | d) < -8708 ? 0 : 255, r && (d = u + _ | 0, m = (l = l + g | 0) >>> 17 | 0, g = A(s[r + y | 0], 19077) >>> 8 | 0, _ = (y = (A(m, 26149) >>> 8 | 0) + g | 0) - 14234 | 0, a[d + 2 | 0] = _ >>> 0 < 16384 ? _ >>> 6 | 0 : y >>> 0 < 14234 ? 0 : 255, _ = (y = g + (A(l = l >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | d] = _ >>> 0 < 16384 ? _ >>> 6 | 0 : y >>> 0 < 17685 ? 0 : 255, h = d, g = 8708 + (d = g - (A(l, 6419) >>> 8 | 0) - (A(m, 13320) >>> 8) | 0) | 0, a[h + 1 | 0] = g >>> 0 < 16384 ? g >>> 6 | 0 : (0 | d) < -8708 ? 0 : 255, d = u + w | 0, m = (I = (g = A(s[r + I | 0], 19077) >>> 8 | 0) + (A(y = (l = v + x | 0) >>> 17 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[d + 2 | 0] = m >>> 0 < 16384 ? m >>> 6 | 0 : I >>> 0 < 14234 ? 0 : 255, m = (I = g + (A(l = l >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | d] = m >>> 0 < 16384 ? m >>> 6 | 0 : I >>> 0 < 17685 ? 0 : 255, m = d, g = 8708 + (d = g - (A(l, 6419) >>> 8 | 0) - (A(y, 13320) >>> 8) | 0) | 0, a[m + 1 | 0] = g >>> 0 < 16384 ? g >>> 6 | 0 : (0 | d) < -8708 ? 0 : 255), l = (0 | k) != (0 | S), k = k + 1 | 0, d = p, g = v, l;);
                                        1 & c || (n = (t = A(b, 3)) + f | 0, e = A(s[e + b | 0], 19077) >>> 8 | 0, o = 131074 + (A(p, 3) + v | 0) | 0, c = (f = e + (A(i = o >>> 18 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[n + 2 | 0] = c >>> 0 < 16384 ? c >>> 6 | 0 : f >>> 0 < 14234 ? 0 : 255, c = (f = e + (A(o = o >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | n] = c >>> 0 < 16384 ? c >>> 6 | 0 : f >>> 0 < 17685 ? 0 : 255, f = n, n = 8708 + (e = e - (A(o, 6419) >>> 8 | 0) - (A(i, 13320) >>> 8) | 0) | 0, a[f + 1 | 0] = n >>> 0 < 16384 ? n >>> 6 | 0 : (0 | e) < -8708 ? 0 : 255, r && (e = t + u | 0, r = A(s[r + b | 0], 19077) >>> 8 | 0, n = 131074 + (A(v, 3) + p | 0) | 0, i = (o = r + (A(t = n >>> 18 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[e + 2 | 0] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 14234 ? 0 : 255, i = (o = r + (A(n = n >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | e] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 17685 ? 0 : 255, o = e, r = 8708 + (e = r - (A(n, 6419) >>> 8 | 0) - (A(t, 13320) >>> 8) | 0) | 0, a[o + 1 | 0] = r >>> 0 < 16384 ? r >>> 6 | 0 : (0 | e) < -8708 ? 0 : 255))
                                    }, i[128] = function(e, r, n, t, o, i, f, u, c) {
                                        r |= 0, n |= 0, t |= 0, o |= 0, i |= 0, f |= 0, u |= 0, c |= 0;
                                        var l = 0,
                                            d = 0,
                                            v = 0,
                                            p = 0,
                                            m = 0,
                                            g = 0,
                                            h = 0,
                                            b = 0,
                                            k = 0,
                                            w = 0,
                                            y = 0,
                                            C = 0,
                                            E = 0,
                                            I = 0,
                                            _ = 0,
                                            D = 0,
                                            x = 0,
                                            S = 0;
                                        if (v = A(s[0 | (e |= 0)], 19077) >>> 8 | 0, g = s[0 | o] | s[0 | i] << 16, d = s[0 | n] | s[0 | t] << 16, p = 131074 + (g + A(d, 3) | 0) | 0, l = (b = v + (A(k = p >>> 18 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | f] = l >>> 0 < 16384 ? l >>> 6 | 0 : b >>> 0 < 14234 ? 0 : 255, l = (b = v + (A(p = p >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[f + 2 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : b >>> 0 < 17685 ? 0 : 255, p = 8708 + (v = v - (A(p, 6419) >>> 8 | 0) - (A(k, 13320) >>> 8) | 0) | 0, a[f + 1 | 0] = p >>> 0 < 16384 ? p >>> 6 | 0 : (0 | v) < -8708 ? 0 : 255, r && (v = A(s[0 | r], 19077) >>> 8 | 0, p = 131074 + (A(g, 3) + d | 0) | 0, l = (b = v + (A(k = p >>> 18 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | u] = l >>> 0 < 16384 ? l >>> 6 | 0 : b >>> 0 < 14234 ? 0 : 255, l = (b = v + (A(p = p >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[u + 2 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : b >>> 0 < 17685 ? 0 : 255, p = 8708 + (v = v - (A(p, 6419) >>> 8 | 0) - (A(k, 13320) >>> 8) | 0) | 0, a[u + 1 | 0] = p >>> 0 < 16384 ? p >>> 6 | 0 : (0 | v) < -8708 ? 0 : 255), b = c + -1 | 0, (0 | c) < 3) v = g, p = d;
                                        else
                                            for (S = (0 | (v = b >> 1)) > 1 ? v : 1, k = 1; l = 524296 + ((v = s[o + k | 0] | s[i + k | 0] << 16) + ((w = (p = s[n + k | 0] | s[t + k | 0] << 16) + g | 0) + d | 0) | 0) | 0, m = (_ = A(y = (I = k << 1) - 1 | 0, 3)) + f | 0, D = (C = (x = l + (w << 1) >>> 3 | 0) + d | 0) >>> 17 | 0, w = A(s[e + y | 0], 19077) >>> 8 | 0, E = (h = (A(D, 26149) >>> 8 | 0) + w | 0) - 14234 | 0, a[0 | m] = E >>> 0 < 16384 ? E >>> 6 | 0 : h >>> 0 < 14234 ? 0 : 255, E = (h = w + (A(C = C >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[m + 2 | 0] = E >>> 0 < 16384 ? E >>> 6 | 0 : h >>> 0 < 17685 ? 0 : 255, h = m, w = 8708 + (m = w - (A(C, 6419) >>> 8 | 0) - (A(D, 13320) >>> 8) | 0) | 0, a[h + 1 | 0] = w >>> 0 < 16384 ? w >>> 6 | 0 : (0 | m) < -8708 ? 0 : 255, m = (w = A(k, 6)) + f | 0, D = (C = (l = l + (d + v << 1) >>> 3 | 0) + p | 0) >>> 1 & 255, d = A(s[e + I | 0], 19077) >>> 8 | 0, E = (h = (A(D, 33050) >>> 8 | 0) + d | 0) - 17685 | 0, a[m + 2 | 0] = E >>> 0 < 16384 ? E >>> 6 | 0 : h >>> 0 < 17685 ? 0 : 255, E = (h = d + (A(C = C >>> 17 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | m] = E >>> 0 < 16384 ? E >>> 6 | 0 : h >>> 0 < 14234 ? 0 : 255, h = m, m = 8708 + (d = d - (A(D, 6419) >>> 8 | 0) - (A(C, 13320) >>> 8) | 0) | 0, a[h + 1 | 0] = m >>> 0 < 16384 ? m >>> 6 | 0 : (0 | d) < -8708 ? 0 : 255, r && (d = u + _ | 0, m = (l = l + g | 0) >>> 17 | 0, g = A(s[r + y | 0], 19077) >>> 8 | 0, _ = (y = (A(m, 26149) >>> 8 | 0) + g | 0) - 14234 | 0, a[0 | d] = _ >>> 0 < 16384 ? _ >>> 6 | 0 : y >>> 0 < 14234 ? 0 : 255, _ = (y = g + (A(l = l >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[d + 2 | 0] = _ >>> 0 < 16384 ? _ >>> 6 | 0 : y >>> 0 < 17685 ? 0 : 255, h = d, g = 8708 + (d = g - (A(l, 6419) >>> 8 | 0) - (A(m, 13320) >>> 8) | 0) | 0, a[h + 1 | 0] = g >>> 0 < 16384 ? g >>> 6 | 0 : (0 | d) < -8708 ? 0 : 255, d = u + w | 0, m = (I = (g = A(s[r + I | 0], 19077) >>> 8 | 0) + (A(y = (l = v + x | 0) >>> 1 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[d + 2 | 0] = m >>> 0 < 16384 ? m >>> 6 | 0 : I >>> 0 < 17685 ? 0 : 255, m = (I = g + (A(l = l >>> 17 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | d] = m >>> 0 < 16384 ? m >>> 6 | 0 : I >>> 0 < 14234 ? 0 : 255, m = d, g = 8708 + (d = g - (A(y, 6419) >>> 8 | 0) - (A(l, 13320) >>> 8) | 0) | 0, a[m + 1 | 0] = g >>> 0 < 16384 ? g >>> 6 | 0 : (0 | d) < -8708 ? 0 : 255), l = (0 | k) != (0 | S), k = k + 1 | 0, d = p, g = v, l;);
                                        1 & c || (n = (t = A(b, 3)) + f | 0, e = A(s[e + b | 0], 19077) >>> 8 | 0, o = 131074 + (A(p, 3) + v | 0) | 0, c = (f = e + (A(i = o >>> 18 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | n] = c >>> 0 < 16384 ? c >>> 6 | 0 : f >>> 0 < 14234 ? 0 : 255, c = (f = e + (A(o = o >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[n + 2 | 0] = c >>> 0 < 16384 ? c >>> 6 | 0 : f >>> 0 < 17685 ? 0 : 255, f = n, n = 8708 + (e = e - (A(o, 6419) >>> 8 | 0) - (A(i, 13320) >>> 8) | 0) | 0, a[f + 1 | 0] = n >>> 0 < 16384 ? n >>> 6 | 0 : (0 | e) < -8708 ? 0 : 255, r && (e = t + u | 0, r = A(s[r + b | 0], 19077) >>> 8 | 0, n = 131074 + (A(v, 3) + p | 0) | 0, i = (o = r + (A(t = n >>> 18 | 0, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | e] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 14234 ? 0 : 255, i = (o = r + (A(n = n >>> 2 & 255, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[e + 2 | 0] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 17685 ? 0 : 255, o = e, r = 8708 + (e = r - (A(n, 6419) >>> 8 | 0) - (A(t, 13320) >>> 8) | 0) | 0, a[o + 1 | 0] = r >>> 0 < 16384 ? r >>> 6 | 0 : (0 | e) < -8708 ? 0 : 255))
                                    }, i[129] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0;
                                        if ((0 | (o |= 0)) >= 1)
                                            for (; c = s[r + u | 0], v = s[n + u | 0], l = s[e + u | 0], a[3 + (i = (u << 2) + t | 0) | 0] = 255, f = (d = (l = A(l, 19077) >>> 8 | 0) + (A(v, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[i + 2 | 0] = f >>> 0 < 16384 ? f >>> 6 | 0 : d >>> 0 < 14234 ? 0 : 255, f = (d = l + (A(c, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | i] = f >>> 0 < 16384 ? f >>> 6 | 0 : d >>> 0 < 17685 ? 0 : 255, f = i, c = 8708 + (i = l - (A(c, 6419) >>> 8 | 0) - (A(v, 13320) >>> 8) | 0) | 0, a[f + 1 | 0] = c >>> 0 < 16384 ? c >>> 6 | 0 : (0 | i) < -8708 ? 0 : 255, (0 | (u = u + 1 | 0)) != (0 | o););
                                    }, i[130] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0;
                                        if ((0 | (o |= 0)) >= 1)
                                            for (; c = s[n + u | 0], v = s[r + u | 0], l = s[e + u | 0], a[3 + (i = (u << 2) + t | 0) | 0] = 255, f = (d = (l = A(l, 19077) >>> 8 | 0) + (A(v, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[i + 2 | 0] = f >>> 0 < 16384 ? f >>> 6 | 0 : d >>> 0 < 17685 ? 0 : 255, f = (d = l + (A(c, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | i] = f >>> 0 < 16384 ? f >>> 6 | 0 : d >>> 0 < 14234 ? 0 : 255, f = i, c = 8708 + (i = l - (A(v, 6419) >>> 8 | 0) - (A(c, 13320) >>> 8) | 0) | 0, a[f + 1 | 0] = c >>> 0 < 16384 ? c >>> 6 | 0 : (0 | i) < -8708 ? 0 : 255, (0 | (u = u + 1 | 0)) != (0 | o););
                                    }, i[131] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0;
                                        if ((0 | (o |= 0)) >= 1)
                                            for (; u = s[n + i | 0], c = (i << 1) + t | 0, f = A(s[e + i | 0], 19077) >>> 8 | 0, v = s[r + i | 0], d = (l = f + (A(v, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[c + 1 | 0] = 15 | (d >>> 0 < 16384 ? d >>> 6 | 0 : l >>> 0 < 17685 ? 0 : 240), d = c, l = (c = f + (A(u, 26149) >>> 8 | 0) | 0) - 14234 | 0, f = 8708 + (u = f - (A(v, 6419) >>> 8 | 0) - (A(u, 13320) >>> 8) | 0) | 0, a[0 | d] = 240 & (l >>> 0 < 16384 ? l >>> 6 | 0 : c >>> 0 < 14234 ? 0 : 240) | (f >>> 0 < 16384 ? f >>> 10 | 0 : (0 | u) < -8708 ? 0 : 15), (0 | (i = i + 1 | 0)) != (0 | o););
                                    }, i[132] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0;
                                        if ((0 | (o |= 0)) >= 1)
                                            for (; c = s[n + u | 0], v = s[r + u | 0], l = s[e + u | 0], a[0 | (i = (u << 2) + t | 0)] = 255, f = (d = (l = A(l, 19077) >>> 8 | 0) + (A(v, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[i + 3 | 0] = f >>> 0 < 16384 ? f >>> 6 | 0 : d >>> 0 < 17685 ? 0 : 255, f = (d = l + (A(c, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[i + 1 | 0] = f >>> 0 < 16384 ? f >>> 6 | 0 : d >>> 0 < 14234 ? 0 : 255, f = i, c = 8708 + (i = l - (A(v, 6419) >>> 8 | 0) - (A(c, 13320) >>> 8) | 0) | 0, a[f + 2 | 0] = c >>> 0 < 16384 ? c >>> 6 | 0 : (0 | i) < -8708 ? 0 : 255, (0 | (u = u + 1 | 0)) != (0 | o););
                                    }, i[133] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0;
                                        if ((0 | (o |= 0)) >= 1)
                                            for (; l = (u << 1) + t | 0, c = A(s[e + u | 0], 19077) >>> 8 | 0, i = s[n + u | 0], v = 248 & ((f = (d = c + (A(i, 26149) >>> 8 | 0) | 0) - 14234 | 0) >>> 0 < 16384 ? f >>> 6 | 0 : d >>> 0 < 14234 ? 0 : 248), d = s[r + u | 0], i = (f = 8708 + (i = c - (A(d, 6419) >>> 8 | 0) - (A(i, 13320) >>> 8) | 0) | 0) >>> 0 < 16384 ? f >> 6 : (0 | i) < -8708 ? 0 : 255, a[0 | l] = v | i >>> 5, f = l, l = (c = c + (A(d, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[f + 1 | 0] = i << 3 & 224 | (l >>> 0 < 16384 ? l >>> 9 | 0 : c >>> 0 < 17685 ? 0 : 31), (0 | (u = u + 1 | 0)) != (0 | o););
                                    }, i[134] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0;
                                        if ((0 | (o |= 0)) >= 1)
                                            for (; c = s[r + f | 0], u = A(f, 3) + t | 0, d = A(s[e + f | 0], 19077) >>> 8 | 0, v = s[n + f | 0], l = (i = d + (A(v, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[u + 2 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : i >>> 0 < 14234 ? 0 : 255, l = (i = d + (A(c, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | u] = l >>> 0 < 16384 ? l >>> 6 | 0 : i >>> 0 < 17685 ? 0 : 255, i = u, u = 8708 + (c = d - (A(c, 6419) >>> 8 | 0) - (A(v, 13320) >>> 8) | 0) | 0, a[i + 1 | 0] = u >>> 0 < 16384 ? u >>> 6 | 0 : (0 | c) < -8708 ? 0 : 255, (0 | (f = f + 1 | 0)) != (0 | o););
                                    }, i[135] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0;
                                        if ((0 | (o |= 0)) >= 1)
                                            for (; c = s[n + f | 0], u = A(f, 3) + t | 0, d = A(s[e + f | 0], 19077) >>> 8 | 0, v = s[r + f | 0], l = (i = d + (A(v, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[u + 2 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : i >>> 0 < 17685 ? 0 : 255, l = (i = d + (A(c, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | u] = l >>> 0 < 16384 ? l >>> 6 | 0 : i >>> 0 < 14234 ? 0 : 255, i = u, u = 8708 + (c = d - (A(v, 6419) >>> 8 | 0) - (A(c, 13320) >>> 8) | 0) | 0, a[i + 1 | 0] = u >>> 0 < 16384 ? u >>> 6 | 0 : (0 | c) < -8708 ? 0 : 255, (0 | (f = f + 1 | 0)) != (0 | o););
                                    }, i[136] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0;
                                        if (l = (o |= 0) << 1 & -4) {
                                            for (l = t + l | 0; f = s[0 | n], i = A(s[0 | e], 19077) >>> 8 | 0, d = s[0 | r], c = (u = i + (A(d, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 1 | 0] = 15 | (c >>> 0 < 16384 ? c >>> 6 | 0 : u >>> 0 < 17685 ? 0 : 240), c = (u = i + (A(f, 26149) >>> 8 | 0) | 0) - 14234 | 0, i = 8708 + (f = i - (A(d, 6419) >>> 8 | 0) - (A(f, 13320) >>> 8) | 0) | 0, a[0 | t] = 240 & (c >>> 0 < 16384 ? c >>> 6 | 0 : u >>> 0 < 14234 ? 0 : 240) | (i >>> 0 < 16384 ? i >>> 10 | 0 : (0 | f) < -8708 ? 0 : 15), f = s[0 | n], i = A(s[e + 1 | 0], 19077) >>> 8 | 0, d = s[0 | r], c = (u = i + (A(d, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 3 | 0] = 15 | (c >>> 0 < 16384 ? c >>> 6 | 0 : u >>> 0 < 17685 ? 0 : 240), c = (u = i + (A(f, 26149) >>> 8 | 0) | 0) - 14234 | 0, i = 8708 + (f = i - (A(d, 6419) >>> 8 | 0) - (A(f, 13320) >>> 8) | 0) | 0, a[t + 2 | 0] = 240 & (c >>> 0 < 16384 ? c >>> 6 | 0 : u >>> 0 < 14234 ? 0 : 240) | (i >>> 0 < 16384 ? i >>> 10 | 0 : (0 | f) < -8708 ? 0 : 15), n = n + 1 | 0, r = r + 1 | 0, e = e + 2 | 0, (0 | l) != (0 | (t = t + 4 | 0)););
                                            t = l
                                        }
                                        1 & o && (n = s[0 | n], e = A(s[0 | e], 19077) >>> 8 | 0, r = s[0 | r], l = (o = e + (A(r, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 1 | 0] = 15 | (l >>> 0 < 16384 ? l >>> 6 | 0 : o >>> 0 < 17685 ? 0 : 240), l = t, o = (t = e + (A(n, 26149) >>> 8 | 0) | 0) - 14234 | 0, r = 8708 + (e = e - (A(r, 6419) >>> 8 | 0) - (A(n, 13320) >>> 8) | 0) | 0, a[0 | l] = 240 & (o >>> 0 < 16384 ? o >>> 6 | 0 : t >>> 0 < 14234 ? 0 : 240) | (r >>> 0 < 16384 ? r >>> 10 | 0 : (0 | e) < -8708 ? 0 : 15))
                                    }, i[137] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0;
                                        if (i = (o |= 0) << 2 & -8) {
                                            for (i = t + i | 0; f = s[0 | n], u = s[0 | r], c = s[0 | e], a[0 | t] = 255, d = (l = (c = A(c, 19077) >>> 8 | 0) + (A(u, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 3 | 0] = d >>> 0 < 16384 ? d >>> 6 | 0 : l >>> 0 < 17685 ? 0 : 255, d = (l = c + (A(f, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[t + 1 | 0] = d >>> 0 < 16384 ? d >>> 6 | 0 : l >>> 0 < 14234 ? 0 : 255, u = 8708 + (f = c - (A(u, 6419) >>> 8 | 0) - (A(f, 13320) >>> 8) | 0) | 0, a[t + 2 | 0] = u >>> 0 < 16384 ? u >>> 6 | 0 : (0 | f) < -8708 ? 0 : 255, f = s[0 | n], u = s[0 | r], c = s[e + 1 | 0], a[t + 4 | 0] = 255, d = (l = (c = A(c, 19077) >>> 8 | 0) + (A(u, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 7 | 0] = d >>> 0 < 16384 ? d >>> 6 | 0 : l >>> 0 < 17685 ? 0 : 255, d = (l = c + (A(f, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[t + 5 | 0] = d >>> 0 < 16384 ? d >>> 6 | 0 : l >>> 0 < 14234 ? 0 : 255, u = 8708 + (f = c - (A(u, 6419) >>> 8 | 0) - (A(f, 13320) >>> 8) | 0) | 0, a[t + 6 | 0] = u >>> 0 < 16384 ? u >>> 6 | 0 : (0 | f) < -8708 ? 0 : 255, n = n + 1 | 0, r = r + 1 | 0, e = e + 2 | 0, (0 | i) != (0 | (t = t + 8 | 0)););
                                            t = i
                                        }
                                        1 & o && (n = s[0 | n], r = s[0 | r], e = s[0 | e], a[0 | t] = 255, i = (o = (e = A(e, 19077) >>> 8 | 0) + (A(r, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 3 | 0] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 17685 ? 0 : 255, i = (o = e + (A(n, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[t + 1 | 0] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 14234 ? 0 : 255, r = 8708 + (e = e - (A(r, 6419) >>> 8 | 0) - (A(n, 13320) >>> 8) | 0) | 0, a[t + 2 | 0] = r >>> 0 < 16384 ? r >>> 6 | 0 : (0 | e) < -8708 ? 0 : 255)
                                    }, i[138] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0;
                                        if (i = (o |= 0) << 2 & -8) {
                                            for (i = t + i | 0; f = s[0 | r], u = s[0 | n], c = s[0 | e], a[t + 3 | 0] = 255, d = (l = (c = A(c, 19077) >>> 8 | 0) + (A(u, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[t + 2 | 0] = d >>> 0 < 16384 ? d >>> 6 | 0 : l >>> 0 < 14234 ? 0 : 255, d = (l = c + (A(f, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | t] = d >>> 0 < 16384 ? d >>> 6 | 0 : l >>> 0 < 17685 ? 0 : 255, u = 8708 + (f = c - (A(f, 6419) >>> 8 | 0) - (A(u, 13320) >>> 8) | 0) | 0, a[t + 1 | 0] = u >>> 0 < 16384 ? u >>> 6 | 0 : (0 | f) < -8708 ? 0 : 255, f = s[0 | r], u = s[0 | n], c = s[e + 1 | 0], a[t + 7 | 0] = 255, d = (l = (c = A(c, 19077) >>> 8 | 0) + (A(u, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[t + 6 | 0] = d >>> 0 < 16384 ? d >>> 6 | 0 : l >>> 0 < 14234 ? 0 : 255, d = (l = c + (A(f, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 4 | 0] = d >>> 0 < 16384 ? d >>> 6 | 0 : l >>> 0 < 17685 ? 0 : 255, u = 8708 + (f = c - (A(f, 6419) >>> 8 | 0) - (A(u, 13320) >>> 8) | 0) | 0, a[t + 5 | 0] = u >>> 0 < 16384 ? u >>> 6 | 0 : (0 | f) < -8708 ? 0 : 255, n = n + 1 | 0, r = r + 1 | 0, e = e + 2 | 0, (0 | i) != (0 | (t = t + 8 | 0)););
                                            t = i
                                        }
                                        1 & o && (r = s[0 | r], n = s[0 | n], e = s[0 | e], a[t + 3 | 0] = 255, i = (o = (e = A(e, 19077) >>> 8 | 0) + (A(n, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[t + 2 | 0] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 14234 ? 0 : 255, i = (o = e + (A(r, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | t] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 17685 ? 0 : 255, r = 8708 + (e = e - (A(r, 6419) >>> 8 | 0) - (A(n, 13320) >>> 8) | 0) | 0, a[t + 1 | 0] = r >>> 0 < 16384 ? r >>> 6 | 0 : (0 | e) < -8708 ? 0 : 255)
                                    }, i[139] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0;
                                        if (i = (o |= 0) << 2 & -8) {
                                            for (i = t + i | 0; f = s[0 | n], u = s[0 | r], c = s[0 | e], a[t + 3 | 0] = 255, d = (l = (c = A(c, 19077) >>> 8 | 0) + (A(u, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 2 | 0] = d >>> 0 < 16384 ? d >>> 6 | 0 : l >>> 0 < 17685 ? 0 : 255, d = (l = c + (A(f, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | t] = d >>> 0 < 16384 ? d >>> 6 | 0 : l >>> 0 < 14234 ? 0 : 255, u = 8708 + (f = c - (A(u, 6419) >>> 8 | 0) - (A(f, 13320) >>> 8) | 0) | 0, a[t + 1 | 0] = u >>> 0 < 16384 ? u >>> 6 | 0 : (0 | f) < -8708 ? 0 : 255, f = s[0 | n], u = s[0 | r], c = s[e + 1 | 0], a[t + 7 | 0] = 255, d = (l = (c = A(c, 19077) >>> 8 | 0) + (A(u, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 6 | 0] = d >>> 0 < 16384 ? d >>> 6 | 0 : l >>> 0 < 17685 ? 0 : 255, d = (l = c + (A(f, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[t + 4 | 0] = d >>> 0 < 16384 ? d >>> 6 | 0 : l >>> 0 < 14234 ? 0 : 255, u = 8708 + (f = c - (A(u, 6419) >>> 8 | 0) - (A(f, 13320) >>> 8) | 0) | 0, a[t + 5 | 0] = u >>> 0 < 16384 ? u >>> 6 | 0 : (0 | f) < -8708 ? 0 : 255, n = n + 1 | 0, r = r + 1 | 0, e = e + 2 | 0, (0 | i) != (0 | (t = t + 8 | 0)););
                                            t = i
                                        }
                                        1 & o && (n = s[0 | n], r = s[0 | r], e = s[0 | e], a[t + 3 | 0] = 255, i = (o = (e = A(e, 19077) >>> 8 | 0) + (A(r, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 2 | 0] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 17685 ? 0 : 255, i = (o = e + (A(n, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | t] = i >>> 0 < 16384 ? i >>> 6 | 0 : o >>> 0 < 14234 ? 0 : 255, r = 8708 + (e = e - (A(r, 6419) >>> 8 | 0) - (A(n, 13320) >>> 8) | 0) | 0, a[t + 1 | 0] = r >>> 0 < 16384 ? r >>> 6 | 0 : (0 | e) < -8708 ? 0 : 255)
                                    }, i[140] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0;
                                        if (l = (o |= 0) << 1 & -4) {
                                            for (l = t + l | 0; u = A(s[0 | e], 19077) >>> 8 | 0, i = s[0 | n], d = 248 & ((f = (c = u + (A(i, 26149) >>> 8 | 0) | 0) - 14234 | 0) >>> 0 < 16384 ? f >>> 6 | 0 : c >>> 0 < 14234 ? 0 : 248), c = s[0 | r], i = (f = 8708 + (i = u - (A(c, 6419) >>> 8 | 0) - (A(i, 13320) >>> 8) | 0) | 0) >>> 0 < 16384 ? f >> 6 : (0 | i) < -8708 ? 0 : 255, a[0 | t] = d | i >>> 5, f = i << 3 & 224, i = (u = u + (A(c, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 1 | 0] = f | (i >>> 0 < 16384 ? i >>> 9 | 0 : u >>> 0 < 17685 ? 0 : 31), u = A(s[e + 1 | 0], 19077) >>> 8 | 0, i = s[0 | n], d = 248 & ((f = (c = u + (A(i, 26149) >>> 8 | 0) | 0) - 14234 | 0) >>> 0 < 16384 ? f >>> 6 | 0 : c >>> 0 < 14234 ? 0 : 248), c = s[0 | r], i = (f = 8708 + (i = u - (A(c, 6419) >>> 8 | 0) - (A(i, 13320) >>> 8) | 0) | 0) >>> 0 < 16384 ? f >> 6 : (0 | i) < -8708 ? 0 : 255, a[t + 2 | 0] = d | i >>> 5, f = i << 3 & 224, i = (u = u + (A(c, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 3 | 0] = f | (i >>> 0 < 16384 ? i >>> 9 | 0 : u >>> 0 < 17685 ? 0 : 31), n = n + 1 | 0, r = r + 1 | 0, e = e + 2 | 0, (0 | l) != (0 | (t = t + 4 | 0)););
                                            t = l
                                        }
                                        1 & o && (e = A(s[0 | e], 19077) >>> 8 | 0, n = s[0 | n], l = 248 & ((l = (o = e + (A(n, 26149) >>> 8 | 0) | 0) - 14234 | 0) >>> 0 < 16384 ? l >>> 6 | 0 : o >>> 0 < 14234 ? 0 : 248), r = s[0 | r], n = (o = 8708 + (n = e - (A(r, 6419) >>> 8 | 0) - (A(n, 13320) >>> 8) | 0) | 0) >>> 0 < 16384 ? o >> 6 : (0 | n) < -8708 ? 0 : 255, a[0 | t] = l | n >>> 5, r = (e = e + (A(r, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 1 | 0] = n << 3 & 224 | (r >>> 0 < 16384 ? r >>> 9 | 0 : e >>> 0 < 17685 ? 0 : 31))
                                    }, i[141] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0;
                                        if (f = -2 & (o |= 0)) {
                                            for (f = A(f, 3) + t | 0; u = s[0 | r], i = A(s[0 | e], 19077) >>> 8 | 0, d = s[0 | n], l = (c = i + (A(d, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[t + 2 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : c >>> 0 < 14234 ? 0 : 255, l = (c = i + (A(u, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | t] = l >>> 0 < 16384 ? l >>> 6 | 0 : c >>> 0 < 17685 ? 0 : 255, i = 8708 + (u = i - (A(u, 6419) >>> 8 | 0) - (A(d, 13320) >>> 8) | 0) | 0, a[t + 1 | 0] = i >>> 0 < 16384 ? i >>> 6 | 0 : (0 | u) < -8708 ? 0 : 255, u = s[0 | r], i = A(s[e + 1 | 0], 19077) >>> 8 | 0, d = s[0 | n], l = (c = i + (A(d, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[t + 5 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : c >>> 0 < 14234 ? 0 : 255, l = (c = i + (A(u, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 3 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : c >>> 0 < 17685 ? 0 : 255, i = 8708 + (u = i - (A(u, 6419) >>> 8 | 0) - (A(d, 13320) >>> 8) | 0) | 0, a[t + 4 | 0] = i >>> 0 < 16384 ? i >>> 6 | 0 : (0 | u) < -8708 ? 0 : 255, n = n + 1 | 0, r = r + 1 | 0, e = e + 2 | 0, (0 | f) != (0 | (t = t + 6 | 0)););
                                            t = f
                                        }
                                        1 & o && (r = s[0 | r], e = A(s[0 | e], 19077) >>> 8 | 0, n = s[0 | n], f = (o = e + (A(n, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[t + 2 | 0] = f >>> 0 < 16384 ? f >>> 6 | 0 : o >>> 0 < 14234 ? 0 : 255, f = (o = e + (A(r, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[0 | t] = f >>> 0 < 16384 ? f >>> 6 | 0 : o >>> 0 < 17685 ? 0 : 255, r = 8708 + (e = e - (A(r, 6419) >>> 8 | 0) - (A(n, 13320) >>> 8) | 0) | 0, a[t + 1 | 0] = r >>> 0 < 16384 ? r >>> 6 | 0 : (0 | e) < -8708 ? 0 : 255)
                                    }, i[142] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, t |= 0;
                                        var i = 0,
                                            f = 0,
                                            u = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0;
                                        if (f = -2 & (o |= 0)) {
                                            for (f = A(f, 3) + t | 0; u = s[0 | n], i = A(s[0 | e], 19077) >>> 8 | 0, d = s[0 | r], l = (c = i + (A(d, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 2 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : c >>> 0 < 17685 ? 0 : 255, l = (c = i + (A(u, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | t] = l >>> 0 < 16384 ? l >>> 6 | 0 : c >>> 0 < 14234 ? 0 : 255, i = 8708 + (u = i - (A(d, 6419) >>> 8 | 0) - (A(u, 13320) >>> 8) | 0) | 0, a[t + 1 | 0] = i >>> 0 < 16384 ? i >>> 6 | 0 : (0 | u) < -8708 ? 0 : 255, u = s[0 | n], i = A(s[e + 1 | 0], 19077) >>> 8 | 0, d = s[0 | r], l = (c = i + (A(d, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 5 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : c >>> 0 < 17685 ? 0 : 255, l = (c = i + (A(u, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[t + 3 | 0] = l >>> 0 < 16384 ? l >>> 6 | 0 : c >>> 0 < 14234 ? 0 : 255, i = 8708 + (u = i - (A(d, 6419) >>> 8 | 0) - (A(u, 13320) >>> 8) | 0) | 0, a[t + 4 | 0] = i >>> 0 < 16384 ? i >>> 6 | 0 : (0 | u) < -8708 ? 0 : 255, n = n + 1 | 0, r = r + 1 | 0, e = e + 2 | 0, (0 | f) != (0 | (t = t + 6 | 0)););
                                            t = f
                                        }
                                        1 & o && (n = s[0 | n], e = A(s[0 | e], 19077) >>> 8 | 0, r = s[0 | r], f = (o = e + (A(r, 33050) >>> 8 | 0) | 0) - 17685 | 0, a[t + 2 | 0] = f >>> 0 < 16384 ? f >>> 6 | 0 : o >>> 0 < 17685 ? 0 : 255, f = (o = e + (A(n, 26149) >>> 8 | 0) | 0) - 14234 | 0, a[0 | t] = f >>> 0 < 16384 ? f >>> 6 | 0 : o >>> 0 < 14234 ? 0 : 255, r = 8708 + (e = e - (A(r, 6419) >>> 8 | 0) - (A(n, 13320) >>> 8) | 0) | 0, a[t + 1 | 0] = r >>> 0 < 16384 ? r >>> 6 | 0 : (0 | e) < -8708 ? 0 : 255)
                                    }, i[143] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, n |= 0, o |= 0;
                                        var i = 0,
                                            f = 0,
                                            c = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0;
                                        if ((0 | (t |= 0)) >= 2)
                                            for (l = (0 | (f = t >> 1)) > 1 ? f : 1, f = 0; d = ((c = u[(4 | (i = f << 3)) + e >> 2]) >>> 7 & 510) + ((i = u[e + i >> 2]) >>> 7 & 510) | 0, v = (c >>> 15 & 510) + (i >>> 15 & 510) | 0, i = (c << 1 & 510) + (i << 1 & 510) | 0, c = 33685504 + ((A(d, -24116) + A(v, 28800) | 0) + A(i, -4684) | 0) >> 18, i = 33685504 + ((A(d, -19081) + A(v, -9719) | 0) + A(i, 28800) | 0) >> 18, o ? (a[r + f | 0] = i, a[n + f | 0] = c) : (a[0 | (d = r + f | 0)] = 1 + (i + s[0 | d] | 0) >>> 1, a[0 | (i = n + f | 0)] = 1 + (c + s[0 | i] | 0) >>> 1), (0 | l) != (0 | (f = f + 1 | 0)););
                                        if (1 & t) {
                                            if (f = (e = u[(l << 3) + e >> 2]) >>> 14 & 1020, c = e << 2 & 1020, e = 33685504 + ((A(t = e >>> 6 & 1020, -24116) + A(f, 28800) | 0) + A(c, -4684) | 0) >> 18, t = 33685504 + ((A(t, -19081) + A(f, -9719) | 0) + A(c, 28800) | 0) >> 18, o) return a[r + l | 0] = t, void(a[n + l | 0] = e);
                                            a[0 | (r = r + l | 0)] = 1 + (t + s[0 | r] | 0) >>> 1, a[0 | (r = n + l | 0)] = 1 + (e + s[0 | r] | 0) >>> 1
                                        }
                                    }, i[144] = function(e, r, n) {
                                        e |= 0, r |= 0;
                                        var t = 0,
                                            o = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (; o = u[(t << 2) + e >> 2], a[r + t | 0] = 1081344 + ((A(255 & o, 6420) + A(o >>> 16 & 255, 16839) | 0) + A(o >>> 8 & 255, 33059) | 0) >>> 16, (0 | (t = t + 1 | 0)) != (0 | n););
                                    }, i[145] = function(e, r, n) {
                                        e |= 0, r |= 0;
                                        var t = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (; a[r + t | 0] = 1081344 + ((A(s[0 | e], 16839) + A(s[e + 1 | 0], 33059) | 0) + A(s[e + 2 | 0], 6420) | 0) >>> 16, e = e + 3 | 0, (0 | (t = t + 1 | 0)) != (0 | n););
                                    }, i[146] = function(e, r, n) {
                                        e |= 0, r |= 0;
                                        var t = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (; a[r + t | 0] = 1081344 + ((A(s[e + 2 | 0], 16839) + A(s[e + 1 | 0], 33059) | 0) + A(s[0 | e], 6420) | 0) >>> 16, e = e + 3 | 0, (0 | (t = t + 1 | 0)) != (0 | n););
                                    }, i[147] = function(e, r, n, t) {
                                        e |= 0, r |= 0, n |= 0;
                                        var o = 0,
                                            i = 0,
                                            f = 0,
                                            u = 0,
                                            s = 0,
                                            l = 0;
                                        if ((0 | (t |= 0)) >= 1)
                                            for (; o = c[e + 2 >> 1], i = c[e >> 1], u = c[e + 4 >> 1], l = 33685504 + (s = (A(o, -19081) + A(i, -9719) | 0) + A(u, 28800) | 0) >> 18, a[r + f | 0] = l >>> 0 < 256 ? l : (0 | s) < -33685504 ? -33685504 : 255, i = 33685504 + (o = (A(o, -24116) + A(i, 28800) | 0) + A(u, -4684) | 0) >> 18, a[n + f | 0] = i >>> 0 < 256 ? i : (0 | o) < -33685504 ? -33685504 : 255, e = e + 8 | 0, (0 | (f = f + 1 | 0)) != (0 | t););
                                    }, i[148] = function(e, r, n, t) {
                                        e |= 0, r |= 0, n |= 0;
                                        var o = 0,
                                            i = 0,
                                            a = 0,
                                            u = 0,
                                            s = 0,
                                            l = 0;
                                        if ((0 | (t |= 0)) >= 1)
                                            for (; l = o = (i = a << 1) + n | 0, o = (0 | (o = (i = c[e + i >> 1] - c[r + i >> 1] | 0) + c[o >> 1] | 0)) < 1023 ? o : 1023, f[l >> 1] = (0 | o) > 0 ? o : 0, (o = u + (i = (o = i >> 31) + i ^ o) | 0) >>> 0 < i >>> 0 && (s = s + 1 | 0), u = o, (0 | (a = a + 1 | 0)) != (0 | t););
                                        return P = s, 0 | u
                                    }, i[149] = function(e, r, n, t) {
                                        e |= 0, r |= 0, n |= 0;
                                        var o = 0,
                                            i = 0,
                                            a = 0;
                                        if ((0 | (t |= 0)) >= 1)
                                            for (; f[(a = (i = o << 1) + n | 0) >> 1] = c[a >> 1] + (c[e + i >> 1] - c[r + i >> 1] | 0), (0 | (o = o + 1 | 0)) != (0 | t););
                                    }, i[150] = function(e, r, n, t, o) {
                                        e |= 0, r |= 0, t |= 0, o |= 0;
                                        var i = 0,
                                            a = 0,
                                            u = 0,
                                            s = 0,
                                            l = 0,
                                            d = 0,
                                            v = 0;
                                        if ((0 | (n |= 0)) >= 1)
                                            for (; i = u << 2, s = f[r + 2 >> 1], l = f[e >> 1], d = f[r >> 1], v = f[e + 2 >> 1], a = (0 | (a = c[i + t >> 1] + (8 + ((s + A(l, 9) | 0) + A(d + v | 0, 3) | 0) >> 4) | 0)) < 1023 ? a : 1023, f[o + i >> 1] = (0 | a) > 0 ? a : 0, i = (0 | (i = c[(a = 2 | i) + t >> 1] + (8 + ((A(v, 9) + d | 0) + A(s + l | 0, 3) | 0) >> 4) | 0)) < 1023 ? i : 1023, f[o + a >> 1] = (0 | i) > 0 ? i : 0, r = r + 2 | 0, e = e + 2 | 0, (0 | (u = u + 1 | 0)) != (0 | n););
                                    }, i[151] = function(e) {
                                        u[(e |= 0) >> 2] = 0, u[e + 4 >> 2] = 0, u[e + 16 >> 2] = 0, u[e + 20 >> 2] = 0, u[e + 8 >> 2] = 0, u[e + 12 >> 2] = 0
                                    }, i[152] = function(e) {
                                        return u[20 + (e |= 0) >> 2] = 0, u[e + 4 >> 2] || (u[e + 4 >> 2] = 1), 1
                                    }, i[153] = function(e) {
                                        return 0 | !u[20 + (e |= 0) >> 2]
                                    }, i[154] = Ke, i[155] = Ke, i[156] = function(e) {
                                        u[4 + (e |= 0) >> 2] = 0
                                    }, i[157] = function(e) {
                                        return 0 | E(u[60 + (e |= 0) >> 2])
                                    }, i[158] = function(e, r, n) {
                                        r |= 0, n |= 0;
                                        var t, o = 0,
                                            i = 0,
                                            a = 0,
                                            f = 0,
                                            s = 0,
                                            c = 0;
                                        L = t = L - 32 | 0, o = u[28 + (e |= 0) >> 2], u[t + 16 >> 2] = o, i = u[e + 20 >> 2], u[t + 28 >> 2] = n, u[t + 24 >> 2] = r, r = i - o | 0, u[t + 20 >> 2] = r, o = r + n | 0, c = 2, r = t + 16 | 0;
                                        e: {
                                            r: {
                                                n: {
                                                    if (!cr(0 | I(u[e + 60 >> 2], t + 16 | 0, 2, t + 12 | 0)))
                                                        for (;;) {
                                                            if ((0 | (i = u[t + 12 >> 2])) == (0 | o)) break n;
                                                            if ((0 | i) <= -1) break r;
                                                            if (a = i - ((f = i >>> 0 > (a = u[r + 4 >> 2]) >>> 0) ? a : 0) | 0, u[(s = (f << 3) + r | 0) >> 2] = a + u[s >> 2], u[(s = (f ? 12 : 4) + r | 0) >> 2] = u[s >> 2] - a, o = o - i | 0, r = f ? r + 8 | 0 : r, c = c - f | 0, cr(0 | I(u[e + 60 >> 2], 0 | r, 0 | c, t + 12 | 0))) break
                                                        }
                                                    if (u[t + 12 >> 2] = -1, -1 != (0 | o)) break r
                                                }
                                                r = u[e + 44 >> 2],
                                                u[e + 28 >> 2] = r,
                                                u[e + 20 >> 2] = r,
                                                u[e + 16 >> 2] = r + u[e + 48 >> 2],
                                                e = n;
                                                break e
                                            }
                                            u[e + 28 >> 2] = 0,
                                            u[e + 16 >> 2] = 0,
                                            u[e + 20 >> 2] = 0,
                                            u[e >> 2] = 32 | u[e >> 2],
                                            e = 0,
                                            2 != (0 | c) && (e = n - u[r + 4 >> 2] | 0)
                                        }
                                        return L = t + 32 | 0, 0 | e
                                    }, i[159] = function(e, r, n, t) {
                                        var o;
                                        return r |= 0, n |= 0, t |= 0, L = o = L - 16 | 0, cr(0 | S(u[60 + (e |= 0) >> 2], 0 | r, 0 | n, 255 & t, o + 8 | 0)) ? (u[o + 8 >> 2] = -1, u[o + 12 >> 2] = -1, r = -1, e = -1) : (r = u[o + 12 >> 2], e = u[o + 8 >> 2]), L = o + 16 | 0, P = r, 0 | e
                                    }, {
                                        __wasm_call_ctors: function() {},
                                        WebpToSDL: function(e, r) {
                                            e |= 0, r |= 0;
                                            var n, t = 0,
                                                o = 0,
                                                i = 0,
                                                f = 0,
                                                c = 0;
                                            return L = n = L - 240 | 0, (o = n + 40 | 0) ? (br(de(o, 0, 200) + 40 | 0), o = 1) : o = 0, o ? (s[10640] || (m(32), a[10640] = 1), o = n + 80 | 0, function(e, r, n) {
                                                var t = 0,
                                                    o = 0;
                                                return t = 2, !e | !n || (u[n >> 2] = 0, u[n + 4 >> 2] = 0, u[n + 32 >> 2] = 0, u[n + 36 >> 2] = 0, u[n + 24 >> 2] = 0, u[n + 28 >> 2] = 0, u[(t = o = n + 16 | 0) >> 2] = 0, u[t + 4 >> 2] = 0, u[(t = n + 8 | 0) >> 2] = 0, u[t + 4 >> 2] = 0, t = Y(e, r, n, n + 4 | 0, t, n + 12 | 0, o, 0)), t
                                            }(e, r, n + 40 | 0) || ((i = 0 | g(u[n + 40 >> 2], u[n + 44 >> 2], 32, 0)) ? (t = 0 | h(0, u[n + 40 >> 2], u[n + 44 >> 2], 32, 255, 65280, 16711680, -16777216)) ? (b(0 | t), u[n + 80 >> 2] = 1, u[n + 84 >> 2] = u[t + 8 >> 2], u[n + 88 >> 2] = u[t + 12 >> 2], u[n + 96 >> 2] = u[t + 20 >> 2], u[n + 100 >> 2] = u[t + 16 >> 2], f = u[t + 12 >> 2], c = u[t + 16 >> 2], u[n + 92 >> 2] = 1, u[n + 104 >> 2] = A(f, c), (e = function(e, r, n) {
                                                var t, o = 0,
                                                    i = 0,
                                                    a = 0;
                                                L = t = L - 144 | 0;
                                                e: if (n) {
                                                    r: {
                                                        if (e) {
                                                            u[n >> 2] = 0, u[n + 4 >> 2] = 0, u[n + 32 >> 2] = 0, u[n + 36 >> 2] = 0, u[n + 24 >> 2] = 0, u[n + 28 >> 2] = 0, u[(i = a = n + 16 | 0) >> 2] = 0, u[i + 4 >> 2] = 0, u[(o = n + 8 | 0) >> 2] = 0, u[o + 4 >> 2] = 0, i = 3;
                                                            n: switch (0 | (o = Y(e, r, n, n + 4 | 0, o, n + 12 | 0, a, 0))) {
                                                                case 7:
                                                                    break e;
                                                                case 0:
                                                                    break n;
                                                                default:
                                                                    break r
                                                            }
                                                            if (u[t + 140 >> 2] = 0, u[t + 132 >> 2] = 0, u[t + 136 >> 2] = 0, u[t + 124 >> 2] = 0, u[t + 128 >> 2] = 0, u[t + 116 >> 2] = 0, u[t + 120 >> 2] = 0, u[t + 100 >> 2] = 0, u[t + 104 >> 2] = 0, u[t + 108 >> 2] = 0, u[t + 112 >> 2] = 0, u[t + 92 >> 2] = 0, u[t + 96 >> 2] = 0, u[t + 108 >> 2] = n + 124, o = n + 40 | 0, u[t + 88 >> 2] = o, function(e, r) {
                                                                    var n = 0;
                                                                    return !r | u[e + 12 >> 2] < 2 | u[e >> 2] + -7 >>> 0 > 3 || (n = 0 != u[r + 8 >> 2]), n
                                                                }(o, n)) {
                                                                br(t), u[t >> 2] = u[n + 40 >> 2], u[t + 4 >> 2] = u[n >> 2], u[t + 8 >> 2] = u[n + 4 >> 2], u[t + 88 >> 2] = t, (i = fe(e, r, t + 88 | 0)) || (i = pe(t, o)), ar(t);
                                                                break e
                                                            }
                                                            i = fe(e, r, t + 88 | 0);
                                                            break e
                                                        }
                                                        o = 2
                                                    }
                                                    i = o
                                                }
                                                else i = 2;
                                                return L = t + 144 | 0, i
                                            }(e, r, n + 40 | 0)) ? (u[n + 32 >> 2] = e, f = 0, tr(u[2536], 1130, n + 32 | 0)) : (k(0 | t), f = 0, 0 | w(0 | t, 0, 0 | i, 0) || (f = !(0 | y(0 | i))))) : (e = u[n + 44 >> 2], u[n + 16 >> 2] = u[n + 40 >> 2], u[n + 20 >> 2] = e, tr(u[2536], 1092, n + 16 | 0), t = 0) : (e = u[n + 44 >> 2], u[n >> 2] = u[n + 40 >> 2], u[n + 4 >> 2] = e, tr(u[2536], 1051, n), i = 0)), C(0 | t), C(0 | i), ar(o)) : function(e) {
                                                u[e + 76 >> 2], e = De(1024, 26, e)
                                            }(u[2536]), L = n + 240 | 0, 0 | f
                                        },
                                        memset: de,
                                        memcpy: re,
                                        malloc: B,
                                        free: j,
                                        __errno_location: function() {
                                            return 11460
                                        },
                                        stackSave: function() {
                                            return 0 | L
                                        },
                                        stackRestore: function(e) {
                                            L = e |= 0
                                        },
                                        stackAlloc: function(e) {
                                            return L = e = L - (e |= 0) & -16, 0 | e
                                        },
                                        dynCall_vii: function(e, r, n) {
                                            r |= 0, n |= 0, i[0 | (e |= 0)](r, n)
                                        },
                                        dynCall_vi: function(e, r) {
                                            r |= 0, i[0 | (e |= 0)](r)
                                        },
                                        dynCall_ii: function(e, r) {
                                            return r |= 0, 0 | i[0 | (e |= 0)](r)
                                        },
                                        dynCall_iii: function(e, r, n) {
                                            return r |= 0, n |= 0, 0 | i[0 | (e |= 0)](r, n)
                                        },
                                        dynCall_iiii: function(e, r, n, t) {
                                            return r |= 0, n |= 0, t |= 0, 0 | i[0 | (e |= 0)](r, n, t)
                                        },
                                        dynCall_iiiiiii: function(e, r, n, t, o, a, f) {
                                            return r |= 0, n |= 0, t |= 0, o |= 0, a |= 0, f |= 0, 0 | i[0 | (e |= 0)](r, n, t, o, a, f)
                                        },
                                        dynCall_viiii: function(e, r, n, t, o) {
                                            r |= 0, n |= 0, t |= 0, o |= 0, i[0 | (e |= 0)](r, n, t, o)
                                        },
                                        dynCall_viii: function(e, r, n, t) {
                                            r |= 0, n |= 0, t |= 0, i[0 | (e |= 0)](r, n, t)
                                        },
                                        dynCall_viiiiii: function(e, r, n, t, o, a, f) {
                                            r |= 0, n |= 0, t |= 0, o |= 0, a |= 0, f |= 0, i[0 | (e |= 0)](r, n, t, o, a, f)
                                        },
                                        dynCall_viiiii: function(e, r, n, t, o, a) {
                                            r |= 0, n |= 0, t |= 0, o |= 0, a |= 0, i[0 | (e |= 0)](r, n, t, o, a)
                                        },
                                        dynCall_viiiiiiiii: function(e, r, n, t, o, a, f, u, s, c) {
                                            r |= 0, n |= 0, t |= 0, o |= 0, a |= 0, f |= 0, u |= 0, s |= 0, c |= 0, i[0 | (e |= 0)](r, n, t, o, a, f, u, s, c)
                                        },
                                        dynCall_jiiii: er,
                                        dynCall_jiji: er,
                                        __growWasmMemory: function(r) {
                                            return 0 | function(r) {
                                                r |= 0;
                                                var n = 0 | yr(),
                                                    i = n + r | 0;
                                                if (n < i && i < 65536) {
                                                    var v = new ArrayBuffer(A(i, 65536)),
                                                        p = new e.Int8Array(v);
                                                    p.set(a), a = p, a = new e.Int8Array(v), f = new e.Int16Array(v), u = new e.Int32Array(v), s = new e.Uint8Array(v), c = new e.Uint16Array(v), l = new e.Uint32Array(v), new e.Float32Array(v), d = new e.Float64Array(v), t = v, o.buffer = v
                                                }
                                                return n
                                            }(0 | (r |= 0))
                                        }
                                    }
                                }({
                                    Int8Array: Int8Array,
                                    Int16Array: Int16Array,
                                    Int32Array: Int32Array,
                                    Uint8Array: Uint8Array,
                                    Uint16Array: Uint16Array,
                                    Uint32Array: Uint32Array,
                                    Float32Array: Float32Array,
                                    Float64Array: Float64Array,
                                    NaN: NaN,
                                    Infinity: 1 / 0,
                                    Math: Math
                                }, e, r.buffer)
                        }(Ie, m, h)
                    },
                    instantiate: function(e, r) {
                        return {
                            then: function(r) {
                                var n = new g.Module(e);
                                r({
                                    instance: new g.Instance(n)
                                })
                            }
                        }
                    },
                    RuntimeError: Error
                };
                v = [], "object" != typeof g && Z("no native wasm support detected");
                var h = new g.Table({
                        initial: 160,
                        maximum: 160,
                        element: "anyfunc"
                    }),
                    b = !1;

                function k(e) {
                    return t["_" + e]
                }

                function w(e, r, n, t, o) {
                    var i = {
                            string: function(e) {
                                var r = 0;
                                if (null != e && 0 !== e) {
                                    var n = 1 + (e.length << 2);
                                    ! function(e, r, n) {
                                        M(e, E, r, n)
                                    }(e, r = Fe(n), n)
                                }
                                return r
                            },
                            array: function(e) {
                                var r, n, t = Fe(e.length);
                                return r = e, n = t, C.set(r, n), t
                            }
                        },
                        a = k(e),
                        f = [],
                        u = 0;
                    if (t)
                        for (var s = 0; s < t.length; s++) {
                            var c = i[n[s]];
                            c ? (0 === u && (u = Me()), f[s] = c(t[s])) : f[s] = t[s]
                        }
                    var l = a.apply(null, f);
                    return l = function(e) {
                        return "string" === r ? P(e) : "boolean" === r ? Boolean(e) : e
                    }(l), 0 !== u && Be(u), l
                }
                var y, C, E, I, _, D, x, S = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

                function L(e, r, n) {
                    for (var t = r + n, o = r; e[o] && !(o >= t);) ++o;
                    if (o - r > 16 && e.subarray && S) return S.decode(e.subarray(r, o));
                    for (var i = ""; r < o;) {
                        var a = e[r++];
                        if (128 & a) {
                            var f = 63 & e[r++];
                            if (192 != (224 & a)) {
                                var u = 63 & e[r++];
                                if ((a = 224 == (240 & a) ? (15 & a) << 12 | f << 6 | u : (7 & a) << 18 | f << 12 | u << 6 | 63 & e[r++]) < 65536) i += String.fromCharCode(a);
                                else {
                                    var s = a - 65536;
                                    i += String.fromCharCode(55296 | s >> 10, 56320 | 1023 & s)
                                }
                            } else i += String.fromCharCode((31 & a) << 6 | f)
                        } else i += String.fromCharCode(a)
                    }
                    return i
                }

                function P(e, r) {
                    return e ? L(E, e, r) : ""
                }

                function M(e, r, n, t) {
                    if (!(t > 0)) return 0;
                    for (var o = n, i = n + t - 1, a = 0; a < e.length; ++a) {
                        var f = e.charCodeAt(a);
                        if (f >= 55296 && f <= 57343 && (f = 65536 + ((1023 & f) << 10) | 1023 & e.charCodeAt(++a)), f <= 127) {
                            if (n >= i) break;
                            r[n++] = f
                        } else if (f <= 2047) {
                            if (n + 1 >= i) break;
                            r[n++] = 192 | f >> 6, r[n++] = 128 | 63 & f
                        } else if (f <= 65535) {
                            if (n + 2 >= i) break;
                            r[n++] = 224 | f >> 12, r[n++] = 128 | f >> 6 & 63, r[n++] = 128 | 63 & f
                        } else {
                            if (n + 3 >= i) break;
                            r[n++] = 240 | f >> 18, r[n++] = 128 | f >> 12 & 63, r[n++] = 128 | f >> 6 & 63, r[n++] = 128 | 63 & f
                        }
                    }
                    return r[n] = 0, n - o
                }

                function B(e) {
                    for (var r = 0, n = 0; n < e.length; ++n) {
                        var t = e.charCodeAt(n);
                        t >= 55296 && t <= 57343 && (t = 65536 + ((1023 & t) << 10) | 1023 & e.charCodeAt(++n)), t <= 127 ? ++r : r += t <= 2047 ? 2 : t <= 65535 ? 3 : 4
                    }
                    return r
                }

                function F(e) {
                    y = e, t.HEAP8 = C = new Int8Array(e), t.HEAP16 = I = new Int16Array(e), t.HEAP32 = _ = new Int32Array(e), t.HEAPU8 = E = new Uint8Array(e), t.HEAPU16 = new Uint16Array(e), t.HEAPU32 = D = new Uint32Array(e), t.HEAPF32 = x = new Float32Array(e), t.HEAPF64 = new Float64Array(e)
                }
                "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
                var R = t.INITIAL_MEMORY || 67108864;

                function T(e) {
                    for (; e.length > 0;) {
                        var r = e.shift();
                        if ("function" != typeof r) {
                            var n = r.func;
                            "number" == typeof n ? void 0 === r.arg ? t.dynCall_v(n) : t.dynCall_vi(n, r.arg) : n(void 0 === r.arg ? null : r.arg)
                        } else r(t)
                    }
                }(m = t.wasmMemory ? t.wasmMemory : new g.Memory({
                    initial: R / 65536,
                    maximum: 32768
                })) && (y = m.buffer), R = y.byteLength, F(y), _[3008] = 5255072;
                var O = [],
                    z = [],
                    U = [],
                    N = [];
                if (Math.imul && -5 === Math.imul(4294967295, 5) || (Math.imul = function(e, r) {
                        var n = 65535 & e,
                            t = 65535 & r;
                        return n * t + ((e >>> 16) * t + n * (r >>> 16) << 16) | 0
                    }), !Math.fround) {
                    var G = new Float32Array(1);
                    Math.fround = function(e) {
                        return G[0] = e, G[0]
                    }
                }
                Math.clz32 || (Math.clz32 = function(e) {
                    var r = 32,
                        n = e >> 16;
                    return n && (r -= 16, e = n), (n = e >> 8) && (r -= 8, e = n), (n = e >> 4) && (r -= 4, e = n), (n = e >> 2) && (r -= 2, e = n), (n = e >> 1) ? r - 2 : r - e
                }), Math.trunc || (Math.trunc = function(e) {
                    return e < 0 ? Math.ceil(e) : Math.floor(e)
                });
                var j = Math.abs,
                    X = Math.ceil,
                    Q = Math.floor,
                    W = Math.min,
                    Y = 0,
                    q = null,
                    V = null;

                function H(e) {
                    Y++, t.monitorRunDependencies && t.monitorRunDependencies(Y)
                }

                function J(e) {
                    if (Y--, t.monitorRunDependencies && t.monitorRunDependencies(Y), 0 == Y && (null !== q && (clearInterval(q), q = null), V)) {
                        var r = V;
                        V = null, r()
                    }
                }

                function Z(e) {
                    throw t.onAbort && t.onAbort(e), d(e += ""), b = !0, e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.", new g.RuntimeError(e)
                }
                t.preloadedImages = {}, t.preloadedAudios = {};

                function K(e) {
                    return r = e, n = "data:application/octet-stream;base64,", String.prototype.startsWith ? r.startsWith(n) : 0 === r.indexOf(n);
                    var r, n
                }
                var $, ee, re, ne = "webp.wasm";

                function te() {
                    try {
                        if (v) return new Uint8Array(v);
                        var e = Ce(ne);
                        if (e) return e;
                        if (u) return u(ne);
                        throw "both async and sync fetching of the wasm failed"
                    } catch (d) {
                        Z(d)
                    }
                }

                function oe(e) {
                    return _[Pe() >> 2] = e, e
                }
                K(ne) || ($ = ne, ne = t.locateFile ? t.locateFile($, c) : c + $), z.push({
                    func: function() {
                        _e()
                    }
                });
                var ie, ae = {
                        splitPath: function(e) {
                            return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1)
                        },
                        normalizeArray: function(e, r) {
                            for (var n = 0, t = e.length - 1; t >= 0; t--) {
                                var o = e[t];
                                "." === o ? e.splice(t, 1) : ".." === o ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--)
                            }
                            if (r)
                                for (; n; n--) e.unshift("..");
                            return e
                        },
                        normalize: function(e) {
                            var r = "/" === e.charAt(0),
                                n = "/" === e.substr(-1);
                            return (e = ae.normalizeArray(e.split("/").filter((function(e) {
                                return !!e
                            })), !r).join("/")) || r || (e = "."), e && n && (e += "/"), (r ? "/" : "") + e
                        },
                        dirname: function(e) {
                            var r = ae.splitPath(e),
                                n = r[0],
                                t = r[1];
                            return n || t ? (t && (t = t.substr(0, t.length - 1)), n + t) : "."
                        },
                        basename: function(e) {
                            if ("/" === e) return "/";
                            var r = (e = (e = ae.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
                            return -1 === r ? e : e.substr(r + 1)
                        },
                        extname: function(e) {
                            return ae.splitPath(e)[3]
                        },
                        join: function() {
                            var e = Array.prototype.slice.call(arguments, 0);
                            return ae.normalize(e.join("/"))
                        },
                        join2: function(e, r) {
                            return ae.normalize(e + "/" + r)
                        }
                    },
                    fe = {
                        resolve: function() {
                            for (var e = "", r = !1, n = arguments.length - 1; n >= -1 && !r; n--) {
                                var t = n >= 0 ? arguments[n] : ce.cwd();
                                if ("string" != typeof t) throw new TypeError("Arguments to path.resolve must be strings");
                                if (!t) return "";
                                e = t + "/" + e, r = "/" === t.charAt(0)
                            }
                            return (r ? "/" : "") + (e = ae.normalizeArray(e.split("/").filter((function(e) {
                                return !!e
                            })), !r).join("/")) || "."
                        },
                        relative: function(e, r) {
                            function n(e) {
                                for (var r = 0; r < e.length && "" === e[r]; r++);
                                for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                                return r > n ? [] : e.slice(r, n - r + 1)
                            }
                            e = fe.resolve(e).substr(1), r = fe.resolve(r).substr(1);
                            for (var t = n(e.split("/")), o = n(r.split("/")), i = Math.min(t.length, o.length), a = i, f = 0; f < i; f++)
                                if (t[f] !== o[f]) {
                                    a = f;
                                    break
                                }
                            var u = [];
                            for (f = a; f < t.length; f++) u.push("..");
                            return (u = u.concat(o.slice(a))).join("/")
                        }
                    },
                    ue = {
                        ttys: [],
                        init: function() {},
                        shutdown: function() {},
                        register: function(e, r) {
                            ue.ttys[e] = {
                                input: [],
                                output: [],
                                ops: r
                            }, ce.registerDevice(e, ue.stream_ops)
                        },
                        stream_ops: {
                            open: function(e) {
                                var r = ue.ttys[e.node.rdev];
                                if (!r) throw new ce.ErrnoError(43);
                                e.tty = r, e.seekable = !1
                            },
                            close: function(e) {
                                e.tty.ops.flush(e.tty)
                            },
                            flush: function(e) {
                                e.tty.ops.flush(e.tty)
                            },
                            read: function(e, n, t, o, i) {
                                if (!e.tty || !e.tty.ops.get_char) throw new ce.ErrnoError(60);
                                for (var a = 0, f = 0; f < o; f++) {
                                    var u;
                                    try {
                                        u = e.tty.ops.get_char(e.tty)
                                    } catch (r) {
                                        throw new ce.ErrnoError(29)
                                    }
                                    if (void 0 === u && 0 === a) throw new ce.ErrnoError(6);
                                    if (null == u) break;
                                    a++, n[t + f] = u
                                }
                                return a && (e.node.timestamp = Date.now()), a
                            },
                            write: function(e, n, t, o, i) {
                                if (!e.tty || !e.tty.ops.put_char) throw new ce.ErrnoError(60);
                                try {
                                    for (var a = 0; a < o; a++) e.tty.ops.put_char(e.tty, n[t + a])
                                } catch (r) {
                                    throw new ce.ErrnoError(29)
                                }
                                return o && (e.node.timestamp = Date.now()), a
                            }
                        },
                        default_tty_ops: {
                            get_char: function(e) {
                                if (!e.input.length) {
                                    var r = null;
                                    if ("undefined" != typeof window && "function" == typeof window.prompt ? null !== (r = window.prompt("Input: ")) && (r += "\n") : "function" == typeof readline && null !== (r = readline()) && (r += "\n"), !r) return null;
                                    e.input = we(r, !0)
                                }
                                return e.input.shift()
                            },
                            put_char: function(e, r) {
                                null === r || 10 === r ? (l(L(e.output, 0)), e.output = []) : 0 != r && e.output.push(r)
                            },
                            flush: function(e) {
                                e.output && e.output.length > 0 && (l(L(e.output, 0)), e.output = [])
                            }
                        },
                        default_tty1_ops: {
                            put_char: function(e, r) {
                                null === r || 10 === r ? (d(L(e.output, 0)), e.output = []) : 0 != r && e.output.push(r)
                            },
                            flush: function(e) {
                                e.output && e.output.length > 0 && (d(L(e.output, 0)), e.output = [])
                            }
                        }
                    },
                    se = {
                        ops_table: null,
                        mount: function(e) {
                            return se.createNode(null, "/", 16895, 0)
                        },
                        createNode: function(e, r, n, t) {
                            if (ce.isBlkdev(n) || ce.isFIFO(n)) throw new ce.ErrnoError(63);
                            se.ops_table || (se.ops_table = {
                                dir: {
                                    node: {
                                        getattr: se.node_ops.getattr,
                                        setattr: se.node_ops.setattr,
                                        lookup: se.node_ops.lookup,
                                        mknod: se.node_ops.mknod,
                                        rename: se.node_ops.rename,
                                        unlink: se.node_ops.unlink,
                                        rmdir: se.node_ops.rmdir,
                                        readdir: se.node_ops.readdir,
                                        symlink: se.node_ops.symlink
                                    },
                                    stream: {
                                        llseek: se.stream_ops.llseek
                                    }
                                },
                                file: {
                                    node: {
                                        getattr: se.node_ops.getattr,
                                        setattr: se.node_ops.setattr
                                    },
                                    stream: {
                                        llseek: se.stream_ops.llseek,
                                        read: se.stream_ops.read,
                                        write: se.stream_ops.write,
                                        allocate: se.stream_ops.allocate,
                                        mmap: se.stream_ops.mmap,
                                        msync: se.stream_ops.msync
                                    }
                                },
                                link: {
                                    node: {
                                        getattr: se.node_ops.getattr,
                                        setattr: se.node_ops.setattr,
                                        readlink: se.node_ops.readlink
                                    },
                                    stream: {}
                                },
                                chrdev: {
                                    node: {
                                        getattr: se.node_ops.getattr,
                                        setattr: se.node_ops.setattr
                                    },
                                    stream: ce.chrdev_stream_ops
                                }
                            });
                            var o = ce.createNode(e, r, n, t);
                            return ce.isDir(o.mode) ? (o.node_ops = se.ops_table.dir.node, o.stream_ops = se.ops_table.dir.stream, o.contents = {}) : ce.isFile(o.mode) ? (o.node_ops = se.ops_table.file.node, o.stream_ops = se.ops_table.file.stream, o.usedBytes = 0, o.contents = null) : ce.isLink(o.mode) ? (o.node_ops = se.ops_table.link.node, o.stream_ops = se.ops_table.link.stream) : ce.isChrdev(o.mode) && (o.node_ops = se.ops_table.chrdev.node, o.stream_ops = se.ops_table.chrdev.stream), o.timestamp = Date.now(), e && (e.contents[r] = o), o
                        },
                        getFileDataAsRegularArray: function(e) {
                            if (e.contents && e.contents.subarray) {
                                for (var r = [], n = 0; n < e.usedBytes; ++n) r.push(e.contents[n]);
                                return r
                            }
                            return e.contents
                        },
                        getFileDataAsTypedArray: function(e) {
                            return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0)
                        },
                        expandFileStorage: function(e, r) {
                            var n = e.contents ? e.contents.length : 0;
                            if (!(n >= r)) {
                                r = Math.max(r, n * (n < 1048576 ? 2 : 1.125) >>> 0), 0 != n && (r = Math.max(r, 256));
                                var t = e.contents;
                                e.contents = new Uint8Array(r), e.usedBytes > 0 && e.contents.set(t.subarray(0, e.usedBytes), 0)
                            }
                        },
                        resizeFileStorage: function(e, r) {
                            if (e.usedBytes != r) {
                                if (0 == r) return e.contents = null, void(e.usedBytes = 0);
                                if (!e.contents || e.contents.subarray) {
                                    var n = e.contents;
                                    return e.contents = new Uint8Array(r), n && e.contents.set(n.subarray(0, Math.min(r, e.usedBytes))), void(e.usedBytes = r)
                                }
                                if (e.contents || (e.contents = []), e.contents.length > r) e.contents.length = r;
                                else
                                    for (; e.contents.length < r;) e.contents.push(0);
                                e.usedBytes = r
                            }
                        },
                        node_ops: {
                            getattr: function(e) {
                                var r = {};
                                return r.dev = ce.isChrdev(e.mode) ? e.id : 1, r.ino = e.id, r.mode = e.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = e.rdev, ce.isDir(e.mode) ? r.size = 4096 : ce.isFile(e.mode) ? r.size = e.usedBytes : ce.isLink(e.mode) ? r.size = e.link.length : r.size = 0, r.atime = new Date(e.timestamp), r.mtime = new Date(e.timestamp), r.ctime = new Date(e.timestamp), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r
                            },
                            setattr: function(e, r) {
                                void 0 !== r.mode && (e.mode = r.mode), void 0 !== r.timestamp && (e.timestamp = r.timestamp), void 0 !== r.size && se.resizeFileStorage(e, r.size)
                            },
                            lookup: function(e, r) {
                                throw ce.genericErrors[44]
                            },
                            mknod: function(e, r, n, t) {
                                return se.createNode(e, r, n, t)
                            },
                            rename: function(e, n, t) {
                                if (ce.isDir(e.mode)) {
                                    var o;
                                    try {
                                        o = ce.lookupNode(n, t)
                                    } catch (r) {}
                                    if (o)
                                        for (var i in o.contents) throw new ce.ErrnoError(55)
                                }
                                delete e.parent.contents[e.name], e.name = t, n.contents[t] = e, e.parent = n
                            },
                            unlink: function(e, r) {
                                delete e.contents[r]
                            },
                            rmdir: function(e, r) {
                                var n = ce.lookupNode(e, r);
                                for (var t in n.contents) throw new ce.ErrnoError(55);
                                delete e.contents[r]
                            },
                            readdir: function(e) {
                                var r = [".", ".."];
                                for (var n in e.contents) e.contents.hasOwnProperty(n) && r.push(n);
                                return r
                            },
                            symlink: function(e, r, n) {
                                var t = se.createNode(e, r, 41471, 0);
                                return t.link = n, t
                            },
                            readlink: function(e) {
                                if (!ce.isLink(e.mode)) throw new ce.ErrnoError(28);
                                return e.link
                            }
                        },
                        stream_ops: {
                            read: function(e, r, n, t, o) {
                                var i = e.node.contents;
                                if (o >= e.node.usedBytes) return 0;
                                var a = Math.min(e.node.usedBytes - o, t);
                                if (a > 8 && i.subarray) r.set(i.subarray(o, o + a), n);
                                else
                                    for (var f = 0; f < a; f++) r[n + f] = i[o + f];
                                return a
                            },
                            write: function(e, r, n, t, o, i) {
                                if (r.buffer === C.buffer && (i = !1), !t) return 0;
                                var a = e.node;
                                if (a.timestamp = Date.now(), r.subarray && (!a.contents || a.contents.subarray)) {
                                    if (i) return a.contents = r.subarray(n, n + t), a.usedBytes = t, t;
                                    if (0 === a.usedBytes && 0 === o) return a.contents = r.slice(n, n + t), a.usedBytes = t, t;
                                    if (o + t <= a.usedBytes) return a.contents.set(r.subarray(n, n + t), o), t
                                }
                                if (se.expandFileStorage(a, o + t), a.contents.subarray && r.subarray) a.contents.set(r.subarray(n, n + t), o);
                                else
                                    for (var f = 0; f < t; f++) a.contents[o + f] = r[n + f];
                                return a.usedBytes = Math.max(a.usedBytes, o + t), t
                            },
                            llseek: function(e, r, n) {
                                var t = r;
                                if (1 === n ? t += e.position : 2 === n && ce.isFile(e.node.mode) && (t += e.node.usedBytes), t < 0) throw new ce.ErrnoError(28);
                                return t
                            },
                            allocate: function(e, r, n) {
                                se.expandFileStorage(e.node, r + n), e.node.usedBytes = Math.max(e.node.usedBytes, r + n)
                            },
                            mmap: function(e, r, n, t, o, i) {
                                if (!ce.isFile(e.node.mode)) throw new ce.ErrnoError(43);
                                var a, f, u = e.node.contents;
                                if (2 & i || u.buffer !== y) {
                                    if ((t > 0 || t + n < u.length) && (u = u.subarray ? u.subarray(t, t + n) : Array.prototype.slice.call(u, t, t + n)), f = !0, !(a = ce.mmapAlloc(n))) throw new ce.ErrnoError(48);
                                    C.set(u, a)
                                } else f = !1, a = u.byteOffset;
                                return {
                                    ptr: a,
                                    allocated: f
                                }
                            },
                            msync: function(e, r, n, t, o) {
                                if (!ce.isFile(e.node.mode)) throw new ce.ErrnoError(43);
                                return 2 & o || se.stream_ops.write(e, r, 0, t, n, !1), 0
                            }
                        }
                    },
                    ce = {
                        root: null,
                        mounts: [],
                        devices: {},
                        streams: [],
                        nextInode: 1,
                        nameTable: null,
                        currentPath: "/",
                        initialized: !1,
                        ignorePermissions: !0,
                        trackingDelegate: {},
                        tracking: {
                            openFlags: {
                                READ: 1,
                                WRITE: 2
                            }
                        },
                        ErrnoError: null,
                        genericErrors: {},
                        filesystems: null,
                        syncFSRequests: 0,
                        handleFSError: function(e) {
                            if (!(e instanceof ce.ErrnoError)) throw e + " : " + (r = function() {
                                var r = new Error;
                                if (!r.stack) {
                                    try {
                                        throw new Error
                                    } catch (e) {
                                        r = e
                                    }
                                    if (!r.stack) return "(no stack trace available)"
                                }
                                return r.stack.toString()
                            }(), t.extraStackTrace && (r += "\n" + t.extraStackTrace()), r.replace(/\b_Z[\w\d_]+/g, (function(e) {
                                return e == e ? e : e + " [" + e + "]"
                            })));
                            var r;
                            return oe(e.errno)
                        },
                        lookupPath: function(e, r) {
                            if (r = r || {}, !(e = fe.resolve(ce.cwd(), e))) return {
                                path: "",
                                node: null
                            };
                            var n = {
                                follow_mount: !0,
                                recurse_count: 0
                            };
                            for (var t in n) void 0 === r[t] && (r[t] = n[t]);
                            if (r.recurse_count > 8) throw new ce.ErrnoError(32);
                            for (var o = ae.normalizeArray(e.split("/").filter((function(e) {
                                    return !!e
                                })), !1), i = ce.root, a = "/", f = 0; f < o.length; f++) {
                                var u = f === o.length - 1;
                                if (u && r.parent) break;
                                if (i = ce.lookupNode(i, o[f]), a = ae.join2(a, o[f]), ce.isMountpoint(i) && (!u || u && r.follow_mount) && (i = i.mounted.root), !u || r.follow)
                                    for (var s = 0; ce.isLink(i.mode);) {
                                        var c = ce.readlink(a);
                                        if (a = fe.resolve(ae.dirname(a), c), i = ce.lookupPath(a, {
                                                recurse_count: r.recurse_count
                                            }).node, s++ > 40) throw new ce.ErrnoError(32)
                                    }
                            }
                            return {
                                path: a,
                                node: i
                            }
                        },
                        getPath: function(e) {
                            for (var r;;) {
                                if (ce.isRoot(e)) {
                                    var n = e.mount.mountpoint;
                                    return r ? "/" !== n[n.length - 1] ? n + "/" + r : n + r : n
                                }
                                r = r ? e.name + "/" + r : e.name, e = e.parent
                            }
                        },
                        hashName: function(e, r) {
                            for (var n = 0, t = 0; t < r.length; t++) n = (n << 5) - n + r.charCodeAt(t) | 0;
                            return (e + n >>> 0) % ce.nameTable.length
                        },
                        hashAddNode: function(e) {
                            var r = ce.hashName(e.parent.id, e.name);
                            e.name_next = ce.nameTable[r], ce.nameTable[r] = e
                        },
                        hashRemoveNode: function(e) {
                            var r = ce.hashName(e.parent.id, e.name);
                            if (ce.nameTable[r] === e) ce.nameTable[r] = e.name_next;
                            else
                                for (var n = ce.nameTable[r]; n;) {
                                    if (n.name_next === e) {
                                        n.name_next = e.name_next;
                                        break
                                    }
                                    n = n.name_next
                                }
                        },
                        lookupNode: function(e, r) {
                            var n = ce.mayLookup(e);
                            if (n) throw new ce.ErrnoError(n, e);
                            for (var t = ce.hashName(e.id, r), o = ce.nameTable[t]; o; o = o.name_next) {
                                var i = o.name;
                                if (o.parent.id === e.id && i === r) return o
                            }
                            return ce.lookup(e, r)
                        },
                        createNode: function(e, r, n, t) {
                            var o = new ce.FSNode(e, r, n, t);
                            return ce.hashAddNode(o), o
                        },
                        destroyNode: function(e) {
                            ce.hashRemoveNode(e)
                        },
                        isRoot: function(e) {
                            return e === e.parent
                        },
                        isMountpoint: function(e) {
                            return !!e.mounted
                        },
                        isFile: function(e) {
                            return 32768 == (61440 & e)
                        },
                        isDir: function(e) {
                            return 16384 == (61440 & e)
                        },
                        isLink: function(e) {
                            return 40960 == (61440 & e)
                        },
                        isChrdev: function(e) {
                            return 8192 == (61440 & e)
                        },
                        isBlkdev: function(e) {
                            return 24576 == (61440 & e)
                        },
                        isFIFO: function(e) {
                            return 4096 == (61440 & e)
                        },
                        isSocket: function(e) {
                            return 49152 == (49152 & e)
                        },
                        flagModes: {
                            r: 0,
                            rs: 1052672,
                            "r+": 2,
                            w: 577,
                            wx: 705,
                            xw: 705,
                            "w+": 578,
                            "wx+": 706,
                            "xw+": 706,
                            a: 1089,
                            ax: 1217,
                            xa: 1217,
                            "a+": 1090,
                            "ax+": 1218,
                            "xa+": 1218
                        },
                        modeStringToFlags: function(e) {
                            var r = ce.flagModes[e];
                            if (void 0 === r) throw new Error("Unknown file open mode: " + e);
                            return r
                        },
                        flagsToPermissionString: function(e) {
                            var r = ["r", "w", "rw"][3 & e];
                            return 512 & e && (r += "w"), r
                        },
                        nodePermissions: function(e, r) {
                            return ce.ignorePermissions || (-1 === r.indexOf("r") || 292 & e.mode) && (-1 === r.indexOf("w") || 146 & e.mode) && (-1 === r.indexOf("x") || 73 & e.mode) ? 0 : 2
                        },
                        mayLookup: function(e) {
                            return ce.nodePermissions(e, "x") || (e.node_ops.lookup ? 0 : 2)
                        },
                        mayCreate: function(e, n) {
                            try {
                                return ce.lookupNode(e, n), 20
                            } catch (r) {}
                            return ce.nodePermissions(e, "wx")
                        },
                        mayDelete: function(e, n, t) {
                            var o;
                            try {
                                o = ce.lookupNode(e, n)
                            } catch (r) {
                                return r.errno
                            }
                            var i = ce.nodePermissions(e, "wx");
                            if (i) return i;
                            if (t) {
                                if (!ce.isDir(o.mode)) return 54;
                                if (ce.isRoot(o) || ce.getPath(o) === ce.cwd()) return 10
                            } else if (ce.isDir(o.mode)) return 31;
                            return 0
                        },
                        mayOpen: function(e, r) {
                            return e ? ce.isLink(e.mode) ? 32 : ce.isDir(e.mode) && ("r" !== ce.flagsToPermissionString(r) || 512 & r) ? 31 : ce.nodePermissions(e, ce.flagsToPermissionString(r)) : 44
                        },
                        MAX_OPEN_FDS: 4096,
                        nextfd: function(e, r) {
                            e = e || 0, r = r || ce.MAX_OPEN_FDS;
                            for (var n = e; n <= r; n++)
                                if (!ce.streams[n]) return n;
                            throw new ce.ErrnoError(33)
                        },
                        getStream: function(e) {
                            return ce.streams[e]
                        },
                        createStream: function(e, r, n) {
                            ce.FSStream || (ce.FSStream = function() {}, ce.FSStream.prototype = {
                                object: {
                                    get: function() {
                                        return this.node
                                    },
                                    set: function(e) {
                                        this.node = e
                                    }
                                },
                                isRead: {
                                    get: function() {
                                        return 1 != (2097155 & this.flags)
                                    }
                                },
                                isWrite: {
                                    get: function() {
                                        return 0 != (2097155 & this.flags)
                                    }
                                },
                                isAppend: {
                                    get: function() {
                                        return 1024 & this.flags
                                    }
                                }
                            });
                            var t = new ce.FSStream;
                            for (var o in e) t[o] = e[o];
                            e = t;
                            var i = ce.nextfd(r, n);
                            return e.fd = i, ce.streams[i] = e, e
                        },
                        closeStream: function(e) {
                            ce.streams[e] = null
                        },
                        chrdev_stream_ops: {
                            open: function(e) {
                                var r = ce.getDevice(e.node.rdev);
                                e.stream_ops = r.stream_ops, e.stream_ops.open && e.stream_ops.open(e)
                            },
                            llseek: function() {
                                throw new ce.ErrnoError(70)
                            }
                        },
                        major: function(e) {
                            return e >> 8
                        },
                        minor: function(e) {
                            return 255 & e
                        },
                        makedev: function(e, r) {
                            return e << 8 | r
                        },
                        registerDevice: function(e, r) {
                            ce.devices[e] = {
                                stream_ops: r
                            }
                        },
                        getDevice: function(e) {
                            return ce.devices[e]
                        },
                        getMounts: function(e) {
                            for (var r = [], n = [e]; n.length;) {
                                var t = n.pop();
                                r.push(t), n.push.apply(n, t.mounts)
                            }
                            return r
                        },
                        syncfs: function(e, r) {
                            "function" == typeof e && (r = e, e = !1), ce.syncFSRequests++, ce.syncFSRequests > 1 && d("warning: " + ce.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                            var n = ce.getMounts(ce.root.mount),
                                t = 0;

                            function o(e) {
                                return ce.syncFSRequests--, r(e)
                            }

                            function i(e) {
                                if (e) return i.errored ? void 0 : (i.errored = !0, o(e));
                                ++t >= n.length && o(null)
                            }
                            n.forEach((function(r) {
                                if (!r.type.syncfs) return i(null);
                                r.type.syncfs(r, e, i)
                            }))
                        },
                        mount: function(e, r, n) {
                            var t, o = "/" === n,
                                i = !n;
                            if (o && ce.root) throw new ce.ErrnoError(10);
                            if (!o && !i) {
                                var a = ce.lookupPath(n, {
                                    follow_mount: !1
                                });
                                if (n = a.path, t = a.node, ce.isMountpoint(t)) throw new ce.ErrnoError(10);
                                if (!ce.isDir(t.mode)) throw new ce.ErrnoError(54)
                            }
                            var f = {
                                    type: e,
                                    opts: r,
                                    mountpoint: n,
                                    mounts: []
                                },
                                u = e.mount(f);
                            return u.mount = f, f.root = u, o ? ce.root = u : t && (t.mounted = f, t.mount && t.mount.mounts.push(f)), u
                        },
                        unmount: function(e) {
                            var r = ce.lookupPath(e, {
                                follow_mount: !1
                            });
                            if (!ce.isMountpoint(r.node)) throw new ce.ErrnoError(28);
                            var n = r.node,
                                t = n.mounted,
                                o = ce.getMounts(t);
                            Object.keys(ce.nameTable).forEach((function(e) {
                                for (var r = ce.nameTable[e]; r;) {
                                    var n = r.name_next; - 1 !== o.indexOf(r.mount) && ce.destroyNode(r), r = n
                                }
                            })), n.mounted = null;
                            var i = n.mount.mounts.indexOf(t);
                            n.mount.mounts.splice(i, 1)
                        },
                        lookup: function(e, r) {
                            return e.node_ops.lookup(e, r)
                        },
                        mknod: function(e, r, n) {
                            var t = ce.lookupPath(e, {
                                    parent: !0
                                }).node,
                                o = ae.basename(e);
                            if (!o || "." === o || ".." === o) throw new ce.ErrnoError(28);
                            var i = ce.mayCreate(t, o);
                            if (i) throw new ce.ErrnoError(i);
                            if (!t.node_ops.mknod) throw new ce.ErrnoError(63);
                            return t.node_ops.mknod(t, o, r, n)
                        },
                        create: function(e, r) {
                            return r = void 0 !== r ? r : 438, r &= 4095, r |= 32768, ce.mknod(e, r, 0)
                        },
                        mkdir: function(e, r) {
                            return r = void 0 !== r ? r : 511, r &= 1023, r |= 16384, ce.mknod(e, r, 0)
                        },
                        mkdirTree: function(e, n) {
                            for (var t = e.split("/"), o = "", i = 0; i < t.length; ++i)
                                if (t[i]) {
                                    o += "/" + t[i];
                                    try {
                                        ce.mkdir(o, n)
                                    } catch (r) {
                                        if (20 != r.errno) throw r
                                    }
                                }
                        },
                        mkdev: function(e, r, n) {
                            return void 0 === n && (n = r, r = 438), r |= 8192, ce.mknod(e, r, n)
                        },
                        symlink: function(e, r) {
                            if (!fe.resolve(e)) throw new ce.ErrnoError(44);
                            var n = ce.lookupPath(r, {
                                parent: !0
                            }).node;
                            if (!n) throw new ce.ErrnoError(44);
                            var t = ae.basename(r),
                                o = ce.mayCreate(n, t);
                            if (o) throw new ce.ErrnoError(o);
                            if (!n.node_ops.symlink) throw new ce.ErrnoError(63);
                            return n.node_ops.symlink(n, t, e)
                        },
                        rename: function(e, n) {
                            var t, o, i = ae.dirname(e),
                                a = ae.dirname(n),
                                f = ae.basename(e),
                                u = ae.basename(n);
                            if (t = ce.lookupPath(e, {
                                    parent: !0
                                }).node, o = ce.lookupPath(n, {
                                    parent: !0
                                }).node, !t || !o) throw new ce.ErrnoError(44);
                            if (t.mount !== o.mount) throw new ce.ErrnoError(75);
                            var s, c = ce.lookupNode(t, f),
                                l = fe.relative(e, a);
                            if ("." !== l.charAt(0)) throw new ce.ErrnoError(28);
                            if ("." !== (l = fe.relative(n, i)).charAt(0)) throw new ce.ErrnoError(55);
                            try {
                                s = ce.lookupNode(o, u)
                            } catch (r) {}
                            if (c !== s) {
                                var A = ce.isDir(c.mode),
                                    v = ce.mayDelete(t, f, A);
                                if (v) throw new ce.ErrnoError(v);
                                if (v = s ? ce.mayDelete(o, u, A) : ce.mayCreate(o, u)) throw new ce.ErrnoError(v);
                                if (!t.node_ops.rename) throw new ce.ErrnoError(63);
                                if (ce.isMountpoint(c) || s && ce.isMountpoint(s)) throw new ce.ErrnoError(10);
                                if (o !== t && (v = ce.nodePermissions(t, "w"))) throw new ce.ErrnoError(v);
                                try {
                                    ce.trackingDelegate.willMovePath && ce.trackingDelegate.willMovePath(e, n)
                                } catch (r) {
                                    d("FS.trackingDelegate['willMovePath']('" + e + "', '" + n + "') threw an exception: " + r.message)
                                }
                                ce.hashRemoveNode(c);
                                try {
                                    t.node_ops.rename(c, o, u)
                                } catch (r) {
                                    throw r
                                } finally {
                                    ce.hashAddNode(c)
                                }
                                try {
                                    ce.trackingDelegate.onMovePath && ce.trackingDelegate.onMovePath(e, n)
                                } catch (r) {
                                    d("FS.trackingDelegate['onMovePath']('" + e + "', '" + n + "') threw an exception: " + r.message)
                                }
                            }
                        },
                        rmdir: function(e) {
                            var n = ce.lookupPath(e, {
                                    parent: !0
                                }).node,
                                t = ae.basename(e),
                                o = ce.lookupNode(n, t),
                                i = ce.mayDelete(n, t, !0);
                            if (i) throw new ce.ErrnoError(i);
                            if (!n.node_ops.rmdir) throw new ce.ErrnoError(63);
                            if (ce.isMountpoint(o)) throw new ce.ErrnoError(10);
                            try {
                                ce.trackingDelegate.willDeletePath && ce.trackingDelegate.willDeletePath(e)
                            } catch (r) {
                                d("FS.trackingDelegate['willDeletePath']('" + e + "') threw an exception: " + r.message)
                            }
                            n.node_ops.rmdir(n, t), ce.destroyNode(o);
                            try {
                                ce.trackingDelegate.onDeletePath && ce.trackingDelegate.onDeletePath(e)
                            } catch (r) {
                                d("FS.trackingDelegate['onDeletePath']('" + e + "') threw an exception: " + r.message)
                            }
                        },
                        readdir: function(e) {
                            var r = ce.lookupPath(e, {
                                follow: !0
                            }).node;
                            if (!r.node_ops.readdir) throw new ce.ErrnoError(54);
                            return r.node_ops.readdir(r)
                        },
                        unlink: function(e) {
                            var n = ce.lookupPath(e, {
                                    parent: !0
                                }).node,
                                t = ae.basename(e),
                                o = ce.lookupNode(n, t),
                                i = ce.mayDelete(n, t, !1);
                            if (i) throw new ce.ErrnoError(i);
                            if (!n.node_ops.unlink) throw new ce.ErrnoError(63);
                            if (ce.isMountpoint(o)) throw new ce.ErrnoError(10);
                            try {
                                ce.trackingDelegate.willDeletePath && ce.trackingDelegate.willDeletePath(e)
                            } catch (r) {
                                d("FS.trackingDelegate['willDeletePath']('" + e + "') threw an exception: " + r.message)
                            }
                            n.node_ops.unlink(n, t), ce.destroyNode(o);
                            try {
                                ce.trackingDelegate.onDeletePath && ce.trackingDelegate.onDeletePath(e)
                            } catch (r) {
                                d("FS.trackingDelegate['onDeletePath']('" + e + "') threw an exception: " + r.message)
                            }
                        },
                        readlink: function(e) {
                            var r = ce.lookupPath(e).node;
                            if (!r) throw new ce.ErrnoError(44);
                            if (!r.node_ops.readlink) throw new ce.ErrnoError(28);
                            return fe.resolve(ce.getPath(r.parent), r.node_ops.readlink(r))
                        },
                        stat: function(e, r) {
                            var n = ce.lookupPath(e, {
                                follow: !r
                            }).node;
                            if (!n) throw new ce.ErrnoError(44);
                            if (!n.node_ops.getattr) throw new ce.ErrnoError(63);
                            return n.node_ops.getattr(n)
                        },
                        lstat: function(e) {
                            return ce.stat(e, !0)
                        },
                        chmod: function(e, r, n) {
                            var t;
                            if (!(t = "string" == typeof e ? ce.lookupPath(e, {
                                    follow: !n
                                }).node : e).node_ops.setattr) throw new ce.ErrnoError(63);
                            t.node_ops.setattr(t, {
                                mode: 4095 & r | -4096 & t.mode,
                                timestamp: Date.now()
                            })
                        },
                        lchmod: function(e, r) {
                            ce.chmod(e, r, !0)
                        },
                        fchmod: function(e, r) {
                            var n = ce.getStream(e);
                            if (!n) throw new ce.ErrnoError(8);
                            ce.chmod(n.node, r)
                        },
                        chown: function(e, r, n, t) {
                            var o;
                            if (!(o = "string" == typeof e ? ce.lookupPath(e, {
                                    follow: !t
                                }).node : e).node_ops.setattr) throw new ce.ErrnoError(63);
                            o.node_ops.setattr(o, {
                                timestamp: Date.now()
                            })
                        },
                        lchown: function(e, r, n) {
                            ce.chown(e, r, n, !0)
                        },
                        fchown: function(e, r, n) {
                            var t = ce.getStream(e);
                            if (!t) throw new ce.ErrnoError(8);
                            ce.chown(t.node, r, n)
                        },
                        truncate: function(e, r) {
                            if (r < 0) throw new ce.ErrnoError(28);
                            var n;
                            if (!(n = "string" == typeof e ? ce.lookupPath(e, {
                                    follow: !0
                                }).node : e).node_ops.setattr) throw new ce.ErrnoError(63);
                            if (ce.isDir(n.mode)) throw new ce.ErrnoError(31);
                            if (!ce.isFile(n.mode)) throw new ce.ErrnoError(28);
                            var t = ce.nodePermissions(n, "w");
                            if (t) throw new ce.ErrnoError(t);
                            n.node_ops.setattr(n, {
                                size: r,
                                timestamp: Date.now()
                            })
                        },
                        ftruncate: function(e, r) {
                            var n = ce.getStream(e);
                            if (!n) throw new ce.ErrnoError(8);
                            if (0 == (2097155 & n.flags)) throw new ce.ErrnoError(28);
                            ce.truncate(n.node, r)
                        },
                        utime: function(e, r, n) {
                            var t = ce.lookupPath(e, {
                                follow: !0
                            }).node;
                            t.node_ops.setattr(t, {
                                timestamp: Math.max(r, n)
                            })
                        },
                        open: function(e, n, o, i, a) {
                            if ("" === e) throw new ce.ErrnoError(44);
                            var f;
                            if (o = void 0 === o ? 438 : o, o = 64 & (n = "string" == typeof n ? ce.modeStringToFlags(n) : n) ? 4095 & o | 32768 : 0, "object" == typeof e) f = e;
                            else {
                                e = ae.normalize(e);
                                try {
                                    f = ce.lookupPath(e, {
                                        follow: !(131072 & n)
                                    }).node
                                } catch (r) {}
                            }
                            var u = !1;
                            if (64 & n)
                                if (f) {
                                    if (128 & n) throw new ce.ErrnoError(20)
                                } else f = ce.mknod(e, o, 0), u = !0;
                            if (!f) throw new ce.ErrnoError(44);
                            if (ce.isChrdev(f.mode) && (n &= -513), 65536 & n && !ce.isDir(f.mode)) throw new ce.ErrnoError(54);
                            if (!u) {
                                var s = ce.mayOpen(f, n);
                                if (s) throw new ce.ErrnoError(s)
                            }
                            512 & n && ce.truncate(f, 0), n &= -131713;
                            var c = ce.createStream({
                                node: f,
                                path: ce.getPath(f),
                                flags: n,
                                seekable: !0,
                                position: 0,
                                stream_ops: f.stream_ops,
                                ungotten: [],
                                error: !1
                            }, i, a);
                            c.stream_ops.open && c.stream_ops.open(c), !t.logReadFiles || 1 & n || (ce.readFiles || (ce.readFiles = {}), e in ce.readFiles || (ce.readFiles[e] = 1, d("FS.trackingDelegate error on read file: " + e)));
                            try {
                                if (ce.trackingDelegate.onOpenFile) {
                                    var l = 0;
                                    1 != (2097155 & n) && (l |= ce.tracking.openFlags.READ), 0 != (2097155 & n) && (l |= ce.tracking.openFlags.WRITE), ce.trackingDelegate.onOpenFile(e, l)
                                }
                            } catch (r) {
                                d("FS.trackingDelegate['onOpenFile']('" + e + "', flags) threw an exception: " + r.message)
                            }
                            return c
                        },
                        close: function(e) {
                            if (ce.isClosed(e)) throw new ce.ErrnoError(8);
                            e.getdents && (e.getdents = null);
                            try {
                                e.stream_ops.close && e.stream_ops.close(e)
                            } catch (r) {
                                throw r
                            } finally {
                                ce.closeStream(e.fd)
                            }
                            e.fd = null
                        },
                        isClosed: function(e) {
                            return null === e.fd
                        },
                        llseek: function(e, r, n) {
                            if (ce.isClosed(e)) throw new ce.ErrnoError(8);
                            if (!e.seekable || !e.stream_ops.llseek) throw new ce.ErrnoError(70);
                            if (0 != n && 1 != n && 2 != n) throw new ce.ErrnoError(28);
                            return e.position = e.stream_ops.llseek(e, r, n), e.ungotten = [], e.position
                        },
                        read: function(e, r, n, t, o) {
                            if (t < 0 || o < 0) throw new ce.ErrnoError(28);
                            if (ce.isClosed(e)) throw new ce.ErrnoError(8);
                            if (1 == (2097155 & e.flags)) throw new ce.ErrnoError(8);
                            if (ce.isDir(e.node.mode)) throw new ce.ErrnoError(31);
                            if (!e.stream_ops.read) throw new ce.ErrnoError(28);
                            var i = void 0 !== o;
                            if (i) {
                                if (!e.seekable) throw new ce.ErrnoError(70)
                            } else o = e.position;
                            var a = e.stream_ops.read(e, r, n, t, o);
                            return i || (e.position += a), a
                        },
                        write: function(e, n, t, o, i, a) {
                            if (o < 0 || i < 0) throw new ce.ErrnoError(28);
                            if (ce.isClosed(e)) throw new ce.ErrnoError(8);
                            if (0 == (2097155 & e.flags)) throw new ce.ErrnoError(8);
                            if (ce.isDir(e.node.mode)) throw new ce.ErrnoError(31);
                            if (!e.stream_ops.write) throw new ce.ErrnoError(28);
                            e.seekable && 1024 & e.flags && ce.llseek(e, 0, 2);
                            var f = void 0 !== i;
                            if (f) {
                                if (!e.seekable) throw new ce.ErrnoError(70)
                            } else i = e.position;
                            var u = e.stream_ops.write(e, n, t, o, i, a);
                            f || (e.position += u);
                            try {
                                e.path && ce.trackingDelegate.onWriteToFile && ce.trackingDelegate.onWriteToFile(e.path)
                            } catch (r) {
                                d("FS.trackingDelegate['onWriteToFile']('" + e.path + "') threw an exception: " + r.message)
                            }
                            return u
                        },
                        allocate: function(e, r, n) {
                            if (ce.isClosed(e)) throw new ce.ErrnoError(8);
                            if (r < 0 || n <= 0) throw new ce.ErrnoError(28);
                            if (0 == (2097155 & e.flags)) throw new ce.ErrnoError(8);
                            if (!ce.isFile(e.node.mode) && !ce.isDir(e.node.mode)) throw new ce.ErrnoError(43);
                            if (!e.stream_ops.allocate) throw new ce.ErrnoError(138);
                            e.stream_ops.allocate(e, r, n)
                        },
                        mmap: function(e, r, n, t, o, i) {
                            if (0 != (2 & o) && 0 == (2 & i) && 2 != (2097155 & e.flags)) throw new ce.ErrnoError(2);
                            if (1 == (2097155 & e.flags)) throw new ce.ErrnoError(2);
                            if (!e.stream_ops.mmap) throw new ce.ErrnoError(43);
                            return e.stream_ops.mmap(e, r, n, t, o, i)
                        },
                        msync: function(e, r, n, t, o) {
                            return e && e.stream_ops.msync ? e.stream_ops.msync(e, r, n, t, o) : 0
                        },
                        munmap: function(e) {
                            return 0
                        },
                        ioctl: function(e, r, n) {
                            if (!e.stream_ops.ioctl) throw new ce.ErrnoError(59);
                            return e.stream_ops.ioctl(e, r, n)
                        },
                        readFile: function(e, r) {
                            if ((r = r || {}).flags = r.flags || "r", r.encoding = r.encoding || "binary", "utf8" !== r.encoding && "binary" !== r.encoding) throw new Error('Invalid encoding type "' + r.encoding + '"');
                            var n, t = ce.open(e, r.flags),
                                o = ce.stat(e).size,
                                i = new Uint8Array(o);
                            return ce.read(t, i, 0, o, 0), "utf8" === r.encoding ? n = L(i, 0) : "binary" === r.encoding && (n = i), ce.close(t), n
                        },
                        writeFile: function(e, r, n) {
                            (n = n || {}).flags = n.flags || "w";
                            var t = ce.open(e, n.flags, n.mode);
                            if ("string" == typeof r) {
                                var o = new Uint8Array(B(r) + 1),
                                    i = M(r, o, 0, o.length);
                                ce.write(t, o, 0, i, void 0, n.canOwn)
                            } else {
                                if (!ArrayBuffer.isView(r)) throw new Error("Unsupported data type");
                                ce.write(t, r, 0, r.byteLength, void 0, n.canOwn)
                            }
                            ce.close(t)
                        },
                        cwd: function() {
                            return ce.currentPath
                        },
                        chdir: function(e) {
                            var r = ce.lookupPath(e, {
                                follow: !0
                            });
                            if (null === r.node) throw new ce.ErrnoError(44);
                            if (!ce.isDir(r.node.mode)) throw new ce.ErrnoError(54);
                            var n = ce.nodePermissions(r.node, "x");
                            if (n) throw new ce.ErrnoError(n);
                            ce.currentPath = r.path
                        },
                        createDefaultDirectories: function() {
                            ce.mkdir("/tmp"), ce.mkdir("/home"), ce.mkdir("/home/web_user")
                        },
                        createDefaultDevices: function() {
                            var e;
                            if (ce.mkdir("/dev"), ce.registerDevice(ce.makedev(1, 3), {
                                    read: function() {
                                        return 0
                                    },
                                    write: function(e, r, n, t, o) {
                                        return t
                                    }
                                }), ce.mkdev("/dev/null", ce.makedev(1, 3)), ue.register(ce.makedev(5, 0), ue.default_tty_ops), ue.register(ce.makedev(6, 0), ue.default_tty1_ops), ce.mkdev("/dev/tty", ce.makedev(5, 0)), ce.mkdev("/dev/tty1", ce.makedev(6, 0)), "object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                                var r = new Uint8Array(1);
                                e = function() {
                                    return crypto.getRandomValues(r), r[0]
                                }
                            }
                            e || (e = function() {
                                Z("random_device")
                            }), ce.createDevice("/dev", "random", e), ce.createDevice("/dev", "urandom", e), ce.mkdir("/dev/shm"), ce.mkdir("/dev/shm/tmp")
                        },
                        createSpecialDirectories: function() {
                            ce.mkdir("/proc"), ce.mkdir("/proc/self"), ce.mkdir("/proc/self/fd"), ce.mount({
                                mount: function() {
                                    var e = ce.createNode("/proc/self", "fd", 16895, 73);
                                    return e.node_ops = {
                                        lookup: function(e, r) {
                                            var n = +r,
                                                t = ce.getStream(n);
                                            if (!t) throw new ce.ErrnoError(8);
                                            var o = {
                                                parent: null,
                                                mount: {
                                                    mountpoint: "fake"
                                                },
                                                node_ops: {
                                                    readlink: function() {
                                                        return t.path
                                                    }
                                                }
                                            };
                                            return o.parent = o, o
                                        }
                                    }, e
                                }
                            }, {}, "/proc/self/fd")
                        },
                        createStandardStreams: function() {
                            t.stdin ? ce.createDevice("/dev", "stdin", t.stdin) : ce.symlink("/dev/tty", "/dev/stdin"), t.stdout ? ce.createDevice("/dev", "stdout", null, t.stdout) : ce.symlink("/dev/tty", "/dev/stdout"), t.stderr ? ce.createDevice("/dev", "stderr", null, t.stderr) : ce.symlink("/dev/tty1", "/dev/stderr"), ce.open("/dev/stdin", "r"), ce.open("/dev/stdout", "w"), ce.open("/dev/stderr", "w")
                        },
                        ensureErrnoError: function() {
                            ce.ErrnoError || (ce.ErrnoError = function(e, r) {
                                this.node = r, this.setErrno = function(e) {
                                    this.errno = e
                                }, this.setErrno(e), this.message = "FS error"
                            }, ce.ErrnoError.prototype = new Error, ce.ErrnoError.prototype.constructor = ce.ErrnoError, [44].forEach((function(e) {
                                ce.genericErrors[e] = new ce.ErrnoError(e), ce.genericErrors[e].stack = "<generic error, no stack>"
                            })))
                        },
                        staticInit: function() {
                            ce.ensureErrnoError(), ce.nameTable = new Array(4096), ce.mount(se, {}, "/"), ce.createDefaultDirectories(), ce.createDefaultDevices(), ce.createSpecialDirectories(), ce.filesystems = {
                                MEMFS: se
                            }
                        },
                        init: function(e, r, n) {
                            ce.init.initialized = !0, ce.ensureErrnoError(), t.stdin = e || t.stdin, t.stdout = r || t.stdout, t.stderr = n || t.stderr, ce.createStandardStreams()
                        },
                        quit: function() {
                            ce.init.initialized = !1;
                            var e = t._fflush;
                            e && e(0);
                            for (var r = 0; r < ce.streams.length; r++) {
                                var n = ce.streams[r];
                                n && ce.close(n)
                            }
                        },
                        getMode: function(e, r) {
                            var n = 0;
                            return e && (n |= 365), r && (n |= 146), n
                        },
                        joinPath: function(e, r) {
                            var n = ae.join.apply(null, e);
                            return r && "/" == n[0] && (n = n.substr(1)), n
                        },
                        absolutePath: function(e, r) {
                            return fe.resolve(r, e)
                        },
                        standardizePath: function(e) {
                            return ae.normalize(e)
                        },
                        findObject: function(e, r) {
                            var n = ce.analyzePath(e, r);
                            return n.exists ? n.object : (oe(n.error), null)
                        },
                        analyzePath: function(e, n) {
                            try {
                                e = (o = ce.lookupPath(e, {
                                    follow: !n
                                })).path
                            } catch (r) {}
                            var t = {
                                isRoot: !1,
                                exists: !1,
                                error: 0,
                                name: null,
                                path: null,
                                object: null,
                                parentExists: !1,
                                parentPath: null,
                                parentObject: null
                            };
                            try {
                                var o = ce.lookupPath(e, {
                                    parent: !0
                                });
                                t.parentExists = !0, t.parentPath = o.path, t.parentObject = o.node, t.name = ae.basename(e), o = ce.lookupPath(e, {
                                    follow: !n
                                }), t.exists = !0, t.path = o.path, t.object = o.node, t.name = o.node.name, t.isRoot = "/" === o.path
                            } catch (r) {
                                t.error = r.errno
                            }
                            return t
                        },
                        createFolder: function(e, r, n, t) {
                            var o = ae.join2("string" == typeof e ? e : ce.getPath(e), r),
                                i = ce.getMode(n, t);
                            return ce.mkdir(o, i)
                        },
                        createPath: function(e, n, t, o) {
                            e = "string" == typeof e ? e : ce.getPath(e);
                            for (var i = n.split("/").reverse(); i.length;) {
                                var a = i.pop();
                                if (a) {
                                    var f = ae.join2(e, a);
                                    try {
                                        ce.mkdir(f)
                                    } catch (r) {}
                                    e = f
                                }
                            }
                            return f
                        },
                        createFile: function(e, r, n, t, o) {
                            var i = ae.join2("string" == typeof e ? e : ce.getPath(e), r),
                                a = ce.getMode(t, o);
                            return ce.create(i, a)
                        },
                        createDataFile: function(e, r, n, t, o, i) {
                            var a = r ? ae.join2("string" == typeof e ? e : ce.getPath(e), r) : e,
                                f = ce.getMode(t, o),
                                u = ce.create(a, f);
                            if (n) {
                                if ("string" == typeof n) {
                                    for (var s = new Array(n.length), c = 0, l = n.length; c < l; ++c) s[c] = n.charCodeAt(c);
                                    n = s
                                }
                                ce.chmod(u, 146 | f);
                                var d = ce.open(u, "w");
                                ce.write(d, n, 0, n.length, 0, i), ce.close(d), ce.chmod(u, f)
                            }
                            return u
                        },
                        createDevice: function(e, n, t, o) {
                            var i = ae.join2("string" == typeof e ? e : ce.getPath(e), n),
                                a = ce.getMode(!!t, !!o);
                            ce.createDevice.major || (ce.createDevice.major = 64);
                            var f = ce.makedev(ce.createDevice.major++, 0);
                            return ce.registerDevice(f, {
                                open: function(e) {
                                    e.seekable = !1
                                },
                                close: function(e) {
                                    o && o.buffer && o.buffer.length && o(10)
                                },
                                read: function(e, n, o, i, a) {
                                    for (var f = 0, u = 0; u < i; u++) {
                                        var s;
                                        try {
                                            s = t()
                                        } catch (r) {
                                            throw new ce.ErrnoError(29)
                                        }
                                        if (void 0 === s && 0 === f) throw new ce.ErrnoError(6);
                                        if (null == s) break;
                                        f++, n[o + u] = s
                                    }
                                    return f && (e.node.timestamp = Date.now()), f
                                },
                                write: function(e, n, t, i, a) {
                                    for (var f = 0; f < i; f++) try {
                                        o(n[t + f])
                                    } catch (r) {
                                        throw new ce.ErrnoError(29)
                                    }
                                    return i && (e.node.timestamp = Date.now()), f
                                }
                            }), ce.mkdev(i, a, f)
                        },
                        createLink: function(e, r, n, t, o) {
                            var i = ae.join2("string" == typeof e ? e : ce.getPath(e), r);
                            return ce.symlink(n, i)
                        },
                        forceLoadFile: function(e) {
                            if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                            var n = !0;
                            if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                            if (!a) throw new Error("Cannot load without read() or XMLHttpRequest.");
                            try {
                                e.contents = we(a(e.url), !0), e.usedBytes = e.contents.length
                            } catch (r) {
                                n = !1
                            }
                            return n || oe(29), n
                        },
                        createLazyFile: function(e, r, n, t, o) {
                            function i() {
                                this.lengthKnown = !1, this.chunks = []
                            }
                            var a;
                            if (i.prototype.get = function(e) {
                                    if (!(e > this.length - 1 || e < 0)) {
                                        var r = e % this.chunkSize,
                                            n = e / this.chunkSize | 0;
                                        return this.getter(n)[r]
                                    }
                                }, i.prototype.setDataGetter = function(e) {
                                    this.getter = e
                                }, i.prototype.cacheLength = function() {
                                    var e = new XMLHttpRequest;
                                    if (e.open("HEAD", n, !1), e.send(null), !(e.status >= 200 && e.status < 300 || 304 === e.status)) throw new Error("Couldn't load " + n + ". Status: " + e.status);
                                    var r, t = Number(e.getResponseHeader("Content-length")),
                                        o = (r = e.getResponseHeader("Accept-Ranges")) && "bytes" === r,
                                        i = (r = e.getResponseHeader("Content-Encoding")) && "gzip" === r,
                                        a = 1048576;
                                    o || (a = t);
                                    var f = this;
                                    f.setDataGetter((function(e) {
                                        var r = e * a,
                                            o = (e + 1) * a - 1;
                                        if (o = Math.min(o, t - 1), void 0 === f.chunks[e] && (f.chunks[e] = function(e, r) {
                                                if (e > r) throw new Error("invalid range (" + e + ", " + r + ") or no bytes requested!");
                                                if (r > t - 1) throw new Error("only " + t + " bytes available! programmer error!");
                                                var o = new XMLHttpRequest;
                                                if (o.open("GET", n, !1), t !== a && o.setRequestHeader("Range", "bytes=" + e + "-" + r), "undefined" != typeof Uint8Array && (o.responseType = "arraybuffer"), o.overrideMimeType && o.overrideMimeType("text/plain; charset=x-user-defined"), o.send(null), !(o.status >= 200 && o.status < 300 || 304 === o.status)) throw new Error("Couldn't load " + n + ". Status: " + o.status);
                                                return void 0 !== o.response ? new Uint8Array(o.response || []) : we(o.responseText || "", !0)
                                            }(r, o)), void 0 === f.chunks[e]) throw new Error("doXHR failed!");
                                        return f.chunks[e]
                                    })), !i && t || (a = t = 1, t = this.getter(0).length, a = t, l("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = t, this._chunkSize = a, this.lengthKnown = !0
                                }, "undefined" != typeof XMLHttpRequest) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                            a = {
                                isDevice: !1,
                                url: n
                            };
                            var f = ce.createFile(e, r, a, t, o);
                            a.contents ? f.contents = a.contents : a.url && (f.contents = null, f.url = a.url), Object.defineProperties(f, {
                                usedBytes: {
                                    get: function() {
                                        return this.contents.length
                                    }
                                }
                            });
                            var u = {};
                            return Object.keys(f.stream_ops).forEach((function(e) {
                                var r = f.stream_ops[e];
                                u[e] = function() {
                                    if (!ce.forceLoadFile(f)) throw new ce.ErrnoError(29);
                                    return r.apply(null, arguments)
                                }
                            })), u.read = function(e, r, n, t, o) {
                                if (!ce.forceLoadFile(f)) throw new ce.ErrnoError(29);
                                var i = e.node.contents;
                                if (o >= i.length) return 0;
                                var a = Math.min(i.length - o, t);
                                if (i.slice)
                                    for (var u = 0; u < a; u++) r[n + u] = i[o + u];
                                else
                                    for (u = 0; u < a; u++) r[n + u] = i.get(o + u);
                                return a
                            }, f.stream_ops = u, f
                        },
                        createPreloadedFile: function(e, r, n, o, i, a, f, u, s, c) {
                            de.init();
                            var l = r ? fe.resolve(ae.join2(e, r)) : e;

                            function d(n) {
                                function d(n) {
                                    c && c(), u || ce.createDataFile(e, r, n, o, i, s), a && a(), J()
                                }
                                var A = !1;
                                t.preloadPlugins.forEach((function(e) {
                                    A || e.canHandle(l) && (e.handle(n, l, d, (function() {
                                        f && f(), J()
                                    })), A = !0)
                                })), A || d(n)
                            }
                            H(), "string" == typeof n ? de.asyncLoad(n, (function(e) {
                                d(e)
                            }), f) : d(n)
                        },
                        indexedDB: function() {
                            return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
                        },
                        DB_NAME: function() {
                            return "EM_FS_" + window.location.pathname
                        },
                        DB_VERSION: 20,
                        DB_STORE_NAME: "FILE_DATA",
                        saveFilesToDB: function(e, n, t) {
                            n = n || function() {}, t = t || function() {};
                            var o = ce.indexedDB();
                            try {
                                var i = o.open(ce.DB_NAME(), ce.DB_VERSION)
                            } catch (r) {
                                return t(r)
                            }
                            i.onupgradeneeded = function() {
                                l("creating db"), i.result.createObjectStore(ce.DB_STORE_NAME)
                            }, i.onsuccess = function() {
                                var r = i.result.transaction([ce.DB_STORE_NAME], "readwrite"),
                                    o = r.objectStore(ce.DB_STORE_NAME),
                                    a = 0,
                                    f = 0,
                                    u = e.length;

                                function s() {
                                    0 == f ? n() : t()
                                }
                                e.forEach((function(e) {
                                    var r = o.put(ce.analyzePath(e).object.contents, e);
                                    r.onsuccess = function() {
                                        ++a + f == u && s()
                                    }, r.onerror = function() {
                                        a + ++f == u && s()
                                    }
                                })), r.onerror = t
                            }, i.onerror = t
                        },
                        loadFilesFromDB: function(e, n, t) {
                            n = n || function() {}, t = t || function() {};
                            var o = ce.indexedDB();
                            try {
                                var i = o.open(ce.DB_NAME(), ce.DB_VERSION)
                            } catch (r) {
                                return t(r)
                            }
                            i.onupgradeneeded = t, i.onsuccess = function() {
                                var o = i.result;
                                try {
                                    var a = o.transaction([ce.DB_STORE_NAME], "readonly")
                                } catch (r) {
                                    return void t(r)
                                }
                                var f = a.objectStore(ce.DB_STORE_NAME),
                                    u = 0,
                                    s = 0,
                                    c = e.length;

                                function l() {
                                    0 == s ? n() : t()
                                }
                                e.forEach((function(e) {
                                    var r = f.get(e);
                                    r.onsuccess = function() {
                                        ce.analyzePath(e).exists && ce.unlink(e), ce.createDataFile(ae.dirname(e), ae.basename(e), r.result, !0, !0, !0), ++u + s == c && l()
                                    }, r.onerror = function() {
                                        u + ++s == c && l()
                                    }
                                })), a.onerror = t
                            }, i.onerror = t
                        },
                        mmapAlloc: function(e) {
                            for (var r = function(e, r) {
                                    return r || (r = 16), Math.ceil(e / r) * r
                                }(e, 16384), n = Se(r); e < r;) C[n + e++] = 0;
                            return n
                        }
                    };

                function le(r, n) {
                    if (de.mainLoop.timingMode = r, de.mainLoop.timingValue = n, !de.mainLoop.func) return 1;
                    if (0 == r) de.mainLoop.scheduler = function() {
                        var e = 0 | Math.max(0, de.mainLoop.tickStartTime + n - ie());
                        setTimeout(de.mainLoop.runner, e)
                    }, de.mainLoop.method = "timeout";
                    else if (1 == r) de.mainLoop.scheduler = function() {
                        de.requestAnimationFrame(de.mainLoop.runner)
                    }, de.mainLoop.method = "rAF";
                    else if (2 == r) {
                        if (void 0 === e) {
                            var t = [];
                            addEventListener("message", (function(e) {
                                "setimmediate" !== e.data && "setimmediate" !== e.data.target || (e.stopPropagation(), t.shift()())
                            }), !0), e = function(e) {
                                t.push(e), postMessage("setimmediate", "*")
                            }
                        }
                        de.mainLoop.scheduler = function() {
                            e(de.mainLoop.runner)
                        }, de.mainLoop.method = "immediate"
                    }
                    return 0
                }
                ie = "undefined" != typeof performance && performance.now ? function() {
                    return performance.now()
                } : Date.now;
                var de = {
                    mainLoop: {
                        scheduler: null,
                        method: "",
                        currentlyRunningMainloop: 0,
                        func: null,
                        arg: 0,
                        timingMode: 0,
                        timingValue: 0,
                        currentFrameNumber: 0,
                        queue: [],
                        pause: function() {
                            de.mainLoop.scheduler = null, de.mainLoop.currentlyRunningMainloop++
                        },
                        resume: function() {
                            de.mainLoop.currentlyRunningMainloop++;
                            var e = de.mainLoop.timingMode,
                                r = de.mainLoop.timingValue,
                                n = de.mainLoop.func;
                            de.mainLoop.func = null,
                                function(e, r, n, o, i) {
                                    var a;
                                    de.mainLoop.func = e, de.mainLoop.arg = o, a = void 0 !== o ? function() {
                                        t.dynCall_vi(e, o)
                                    } : function() {
                                        t.dynCall_v(e)
                                    };
                                    var f = de.mainLoop.currentlyRunningMainloop;
                                    de.mainLoop.runner = function() {
                                        if (!b)
                                            if (de.mainLoop.queue.length > 0) {
                                                var e = Date.now(),
                                                    r = de.mainLoop.queue.shift();
                                                if (r.func(r.arg), de.mainLoop.remainingBlockers) {
                                                    var n = de.mainLoop.remainingBlockers,
                                                        t = n % 1 == 0 ? n - 1 : Math.floor(n);
                                                    r.counted ? de.mainLoop.remainingBlockers = t : (t += .5, de.mainLoop.remainingBlockers = (8 * n + t) / 9)
                                                }
                                                if (console.log('main loop blocker "' + r.name + '" took ' + (Date.now() - e) + " ms"), de.mainLoop.updateStatus(), f < de.mainLoop.currentlyRunningMainloop) return;
                                                setTimeout(de.mainLoop.runner, 0)
                                            } else f < de.mainLoop.currentlyRunningMainloop || (de.mainLoop.currentFrameNumber = de.mainLoop.currentFrameNumber + 1 | 0, 1 == de.mainLoop.timingMode && de.mainLoop.timingValue > 1 && de.mainLoop.currentFrameNumber % de.mainLoop.timingValue != 0 ? de.mainLoop.scheduler() : (0 == de.mainLoop.timingMode && (de.mainLoop.tickStartTime = ie()), de.mainLoop.runIter(a), f < de.mainLoop.currentlyRunningMainloop || ("object" == typeof ve && ve.audio && ve.audio.queueNewAudioData && ve.audio.queueNewAudioData(), de.mainLoop.scheduler())))
                                    }
                                }(n, 0, 0, de.mainLoop.arg), le(e, r), de.mainLoop.scheduler()
                        },
                        updateStatus: function() {
                            if (t.setStatus) {
                                var e = t.statusMessage || "Please wait...",
                                    r = de.mainLoop.remainingBlockers,
                                    n = de.mainLoop.expectedBlockers;
                                r ? r < n ? t.setStatus(e + " (" + (n - r) + "/" + n + ")") : t.setStatus(e) : t.setStatus("")
                            }
                        },
                        runIter: function(e) {
                            if (!b) {
                                if (t.preMainLoop && !1 === t.preMainLoop()) return;
                                try {
                                    e()
                                } catch (r) {
                                    if (r instanceof
                                        function(e) {
                                            this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
                                        }) return;
                                    if ("unwind" == r) return;
                                    throw r && "object" == typeof r && r.stack && d("exception thrown: " + [r, r.stack]), r
                                }
                                t.postMainLoop && t.postMainLoop()
                            }
                        }
                    },
                    isFullscreen: !1,
                    pointerLock: !1,
                    moduleContextCreatedCallbacks: [],
                    workers: [],
                    init: function() {
                        if (t.preloadPlugins || (t.preloadPlugins = []), !de.initted) {
                            de.initted = !0;
                            try {
                                new Blob, de.hasBlobConstructor = !0
                            } catch (r) {
                                de.hasBlobConstructor = !1, console.log("warning: no blob constructor, cannot create blobs with mimetypes")
                            }
                            de.BlobBuilder = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : de.hasBlobConstructor ? null : console.log("warning: no BlobBuilder"), de.URLObject = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0, t.noImageDecoding || void 0 !== de.URLObject || (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), t.noImageDecoding = !0);
                            var e = {
                                canHandle: function(e) {
                                    return !t.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(e)
                                },
                                handle: function(e, n, o, i) {
                                    var a = null;
                                    if (de.hasBlobConstructor) try {
                                        (a = new Blob([e], {
                                            type: de.getMimetype(n)
                                        })).size !== e.length && (a = new Blob([new Uint8Array(e).buffer], {
                                            type: de.getMimetype(n)
                                        }))
                                    } catch (r) {
                                        A("Blob constructor present but fails: " + r + "; falling back to blob builder")
                                    }
                                    if (!a) {
                                        var f = new de.BlobBuilder;
                                        f.append(new Uint8Array(e).buffer), a = f.getBlob()
                                    }
                                    var u = de.URLObject.createObjectURL(a),
                                        s = new Image;
                                    s.onload = function() {
                                        var r = document.createElement("canvas");
                                        r.width = s.width, r.height = s.height, r.getContext("2d").drawImage(s, 0, 0), t.preloadedImages[n] = r, de.URLObject.revokeObjectURL(u), o && o(e)
                                    }, s.onerror = function(e) {
                                        console.log("Image " + u + " could not be decoded"), i && i()
                                    }, s.src = u
                                }
                            };
                            t.preloadPlugins.push(e);
                            var n = {
                                canHandle: function(e) {
                                    return !t.noAudioDecoding && e.substr(-4) in {
                                        ".ogg": 1,
                                        ".wav": 1,
                                        ".mp3": 1
                                    }
                                },
                                handle: function(e, n, o, i) {
                                    var a = !1;

                                    function f(r) {
                                        a || (a = !0, t.preloadedAudios[n] = r, o && o(e))
                                    }

                                    function u() {
                                        a || (a = !0, t.preloadedAudios[n] = new Audio, i && i())
                                    }
                                    if (!de.hasBlobConstructor) return u();
                                    try {
                                        var s = new Blob([e], {
                                            type: de.getMimetype(n)
                                        })
                                    } catch (r) {
                                        return u()
                                    }
                                    var c = de.URLObject.createObjectURL(s),
                                        l = new Audio;
                                    l.addEventListener("canplaythrough", (function() {
                                        f(l)
                                    }), !1), l.onerror = function(r) {
                                        a || (console.log("warning: browser could not fully decode audio " + n + ", trying slower base64 approach"), l.src = "data:audio/x-" + n.substr(-3) + ";base64," + function(e) {
                                            for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "", t = 0, o = 0, i = 0; i < e.length; i++)
                                                for (t = t << 8 | e[i], o += 8; o >= 6;) {
                                                    var a = t >> o - 6 & 63;
                                                    o -= 6, n += r[a]
                                                }
                                            return 2 == o ? (n += r[(3 & t) << 4], n += "==") : 4 == o && (n += r[(15 & t) << 2], n += "="), n
                                        }(e), f(l))
                                    }, l.src = c, de.safeSetTimeout((function() {
                                        f(l)
                                    }), 1e4)
                                }
                            };
                            t.preloadPlugins.push(n);
                            var o = t.canvas;
                            o && (o.requestPointerLock = o.requestPointerLock || o.mozRequestPointerLock || o.webkitRequestPointerLock || o.msRequestPointerLock || function() {}, o.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {}, o.exitPointerLock = o.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", i, !1), document.addEventListener("mozpointerlockchange", i, !1), document.addEventListener("webkitpointerlockchange", i, !1), document.addEventListener("mspointerlockchange", i, !1), t.elementPointerLock && o.addEventListener("click", (function(e) {
                                !de.pointerLock && t.canvas.requestPointerLock && (t.canvas.requestPointerLock(), e.preventDefault())
                            }), !1))
                        }

                        function i() {
                            de.pointerLock = document.pointerLockElement === t.canvas || document.mozPointerLockElement === t.canvas || document.webkitPointerLockElement === t.canvas || document.msPointerLockElement === t.canvas
                        }
                    },
                    createContext: function(e, r, n, o) {
                        if (r && t.ctx && e == t.canvas) return t.ctx;
                        var i, a;
                        if (r) {
                            var f = {
                                antialias: !1,
                                alpha: !1,
                                majorVersion: 1
                            };
                            if (o)
                                for (var u in o) f[u] = o[u];
                            void 0 !== pe && (a = pe.createContext(e, f)) && (i = pe.getContext(a).GLctx)
                        } else i = e.getContext("2d");
                        return i ? (n && (t.ctx = i, r && pe.makeContextCurrent(a), t.useWebGL = r, de.moduleContextCreatedCallbacks.forEach((function(e) {
                            e()
                        })), de.init()), i) : null
                    },
                    destroyContext: function(e, r, n) {},
                    fullscreenHandlersInstalled: !1,
                    lockPointer: void 0,
                    resizeCanvas: void 0,
                    requestFullscreen: function(e, r) {
                        de.lockPointer = e, de.resizeCanvas = r, void 0 === de.lockPointer && (de.lockPointer = !0), void 0 === de.resizeCanvas && (de.resizeCanvas = !1);
                        var n = t.canvas;

                        function o() {
                            de.isFullscreen = !1;
                            var e = n.parentNode;
                            (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e ? (n.exitFullscreen = de.exitFullscreen, de.lockPointer && n.requestPointerLock(), de.isFullscreen = !0, de.resizeCanvas ? de.setFullscreenCanvasSize() : de.updateCanvasDimensions(n)) : (e.parentNode.insertBefore(n, e), e.parentNode.removeChild(e), de.resizeCanvas ? de.setWindowedCanvasSize() : de.updateCanvasDimensions(n)), t.onFullScreen && t.onFullScreen(de.isFullscreen), t.onFullscreen && t.onFullscreen(de.isFullscreen)
                        }
                        de.fullscreenHandlersInstalled || (de.fullscreenHandlersInstalled = !0, document.addEventListener("fullscreenchange", o, !1), document.addEventListener("mozfullscreenchange", o, !1), document.addEventListener("webkitfullscreenchange", o, !1), document.addEventListener("MSFullscreenChange", o, !1));
                        var i = document.createElement("div");
                        n.parentNode.insertBefore(i, n), i.appendChild(n), i.requestFullscreen = i.requestFullscreen || i.mozRequestFullScreen || i.msRequestFullscreen || (i.webkitRequestFullscreen ? function() {
                            i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
                        } : null) || (i.webkitRequestFullScreen ? function() {
                            i.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                        } : null), i.requestFullscreen()
                    },
                    exitFullscreen: function() {
                        return !!de.isFullscreen && ((document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {}).apply(document, []), !0)
                    },
                    nextRAF: 0,
                    fakeRequestAnimationFrame: function(e) {
                        var r = Date.now();
                        if (0 === de.nextRAF) de.nextRAF = r + 1e3 / 60;
                        else
                            for (; r + 2 >= de.nextRAF;) de.nextRAF += 1e3 / 60;
                        var n = Math.max(de.nextRAF - r, 0);
                        setTimeout(e, n)
                    },
                    requestAnimationFrame: function(e) {
                        if ("function" != typeof requestAnimationFrame) {
                            var r = de.fakeRequestAnimationFrame;
                            "undefined" != typeof window && (r = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || r), r(e)
                        } else requestAnimationFrame(e)
                    },
                    safeCallback: function(e) {
                        return function() {
                            if (!b) return e.apply(null, arguments)
                        }
                    },
                    allowAsyncCallbacks: !0,
                    queuedAsyncCallbacks: [],
                    pauseAsyncCallbacks: function() {
                        de.allowAsyncCallbacks = !1
                    },
                    resumeAsyncCallbacks: function() {
                        if (de.allowAsyncCallbacks = !0, de.queuedAsyncCallbacks.length > 0) {
                            var e = de.queuedAsyncCallbacks;
                            de.queuedAsyncCallbacks = [], e.forEach((function(e) {
                                e()
                            }))
                        }
                    },
                    safeRequestAnimationFrame: function(e) {
                        return de.requestAnimationFrame((function() {
                            b || (de.allowAsyncCallbacks ? e() : de.queuedAsyncCallbacks.push(e))
                        }))
                    },
                    safeSetTimeout: function(e, r) {
                        return setTimeout((function() {
                            b || (de.allowAsyncCallbacks ? e() : de.queuedAsyncCallbacks.push(e))
                        }), r)
                    },
                    safeSetInterval: function(e, r) {
                        return setInterval((function() {
                            b || de.allowAsyncCallbacks && e()
                        }), r)
                    },
                    getMimetype: function(e) {
                        return {
                            jpg: "image/jpeg",
                            jpeg: "image/jpeg",
                            png: "image/png",
                            bmp: "image/bmp",
                            ogg: "audio/ogg",
                            wav: "audio/wav",
                            mp3: "audio/mpeg"
                        }[e.substr(e.lastIndexOf(".") + 1)]
                    },
                    getUserMedia: function(e) {
                        window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), window.getUserMedia(e)
                    },
                    getMovementX: function(e) {
                        return e.movementX || e.mozMovementX || e.webkitMovementX || 0
                    },
                    getMovementY: function(e) {
                        return e.movementY || e.mozMovementY || e.webkitMovementY || 0
                    },
                    getMouseWheelDelta: function(e) {
                        var r = 0;
                        switch (e.type) {
                            case "DOMMouseScroll":
                                r = e.detail / 3;
                                break;
                            case "mousewheel":
                                r = e.wheelDelta / 120;
                                break;
                            case "wheel":
                                switch (r = e.deltaY, e.deltaMode) {
                                    case 0:
                                        r /= 100;
                                        break;
                                    case 1:
                                        r /= 3;
                                        break;
                                    case 2:
                                        r *= 80;
                                        break;
                                    default:
                                        throw "unrecognized mouse wheel delta mode: " + e.deltaMode
                                }
                                break;
                            default:
                                throw "unrecognized mouse wheel event: " + e.type
                        }
                        return r
                    },
                    mouseX: 0,
                    mouseY: 0,
                    mouseMovementX: 0,
                    mouseMovementY: 0,
                    touches: {},
                    lastTouches: {},
                    calculateMouseEvent: function(e) {
                        if (de.pointerLock) "mousemove" != e.type && "mozMovementX" in e ? de.mouseMovementX = de.mouseMovementY = 0 : (de.mouseMovementX = de.getMovementX(e), de.mouseMovementY = de.getMovementY(e)), void 0 !== ve ? (de.mouseX = ve.mouseX + de.mouseMovementX, de.mouseY = ve.mouseY + de.mouseMovementY) : (de.mouseX += de.mouseMovementX, de.mouseY += de.mouseMovementY);
                        else {
                            var r = t.canvas.getBoundingClientRect(),
                                n = t.canvas.width,
                                o = t.canvas.height,
                                i = void 0 !== window.scrollX ? window.scrollX : window.pageXOffset,
                                a = void 0 !== window.scrollY ? window.scrollY : window.pageYOffset;
                            if ("touchstart" === e.type || "touchend" === e.type || "touchmove" === e.type) {
                                var f = e.touch;
                                if (void 0 === f) return;
                                var u = f.pageX - (i + r.left),
                                    s = f.pageY - (a + r.top),
                                    c = {
                                        x: u *= n / r.width,
                                        y: s *= o / r.height
                                    };
                                if ("touchstart" === e.type) de.lastTouches[f.identifier] = c, de.touches[f.identifier] = c;
                                else if ("touchend" === e.type || "touchmove" === e.type) {
                                    var l = de.touches[f.identifier];
                                    l || (l = c), de.lastTouches[f.identifier] = l, de.touches[f.identifier] = c
                                }
                                return
                            }
                            var d = e.pageX - (i + r.left),
                                A = e.pageY - (a + r.top);
                            d *= n / r.width, A *= o / r.height, de.mouseMovementX = d - de.mouseX, de.mouseMovementY = A - de.mouseY, de.mouseX = d, de.mouseY = A
                        }
                    },
                    asyncLoad: function(e, r, n, t) {
                        var o = t ? "" : "al " + e;
                        f(e, (function(e) {
                            r(new Uint8Array(e)), o && J()
                        }), (function(r) {
                            if (!n) throw 'Loading data file "' + e + '" failed.';
                            n()
                        })), o && H()
                    },
                    resizeListeners: [],
                    updateResizeListeners: function() {
                        var e = t.canvas;
                        de.resizeListeners.forEach((function(r) {
                            r(e.width, e.height)
                        }))
                    },
                    setCanvasSize: function(e, r, n) {
                        var o = t.canvas;
                        de.updateCanvasDimensions(o, e, r), n || de.updateResizeListeners()
                    },
                    windowedWidth: 0,
                    windowedHeight: 0,
                    setFullscreenCanvasSize: function() {
                        if (void 0 !== ve) {
                            var e = D[ve.screen >> 2];
                            e |= 8388608, _[ve.screen >> 2] = e
                        }
                        de.updateCanvasDimensions(t.canvas), de.updateResizeListeners()
                    },
                    setWindowedCanvasSize: function() {
                        if (void 0 !== ve) {
                            var e = D[ve.screen >> 2];
                            e &= -8388609, _[ve.screen >> 2] = e
                        }
                        de.updateCanvasDimensions(t.canvas), de.updateResizeListeners()
                    },
                    updateCanvasDimensions: function(e, r, n) {
                        r && n ? (e.widthNative = r, e.heightNative = n) : (r = e.widthNative, n = e.heightNative);
                        var o = r,
                            i = n;
                        if (t.forcedAspectRatio && t.forcedAspectRatio > 0 && (o / i < t.forcedAspectRatio ? o = Math.round(i * t.forcedAspectRatio) : i = Math.round(o / t.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e.parentNode && "undefined" != typeof screen) {
                            var a = Math.min(screen.width / o, screen.height / i);
                            o = Math.round(o * a), i = Math.round(i * a)
                        }
                        de.resizeCanvas ? (e.width != o && (e.width = o), e.height != i && (e.height = i), void 0 !== e.style && (e.style.removeProperty("width"), e.style.removeProperty("height"))) : (e.width != r && (e.width = r), e.height != n && (e.height = n), void 0 !== e.style && (o != r || i != n ? (e.style.setProperty("width", o + "px", "important"), e.style.setProperty("height", i + "px", "important")) : (e.style.removeProperty("width"), e.style.removeProperty("height"))))
                    },
                    wgetRequests: {},
                    nextWgetRequestHandle: 0,
                    getNextWgetRequestHandle: function() {
                        var e = de.nextWgetRequestHandle;
                        return de.nextWgetRequestHandle++, e
                    }
                };

                function Ae(e) {
                    var r = ve.surfaces[e];
                    if (r.locked++, r.locked > 1) return 0;
                    if (r.buffer || (r.buffer = Se(r.width * r.height * 4), _[e + 20 >> 2] = r.buffer), _[e + 20 >> 2] = r.buffer, e == ve.screen && t.screenIsReadOnly && r.image) return 0;
                    if (ve.defaults.discardOnLock) {
                        if (r.image || (r.image = r.ctx.createImageData(r.width, r.height)), !ve.defaults.opaqueFrontBuffer) return
                    } else r.image = r.ctx.getImageData(0, 0, r.width, r.height);
                    if (e == ve.screen && ve.defaults.opaqueFrontBuffer)
                        for (var n = r.image.data, o = n.length, i = 0; i < o / 4; i++) n[4 * i + 3] = 255;
                    if (ve.defaults.copyOnLock && !ve.defaults.discardOnLock) {
                        if (r.isFlagSet(2097152)) throw "CopyOnLock is not supported for SDL_LockSurface with SDL_HWPALETTE flag set" + (new Error).stack;
                        E.set(r.image.data, r.buffer)
                    }
                    return 0
                }
                var ve = {
                        defaults: {
                            width: 320,
                            height: 200,
                            copyOnLock: !0,
                            discardOnLock: !1,
                            opaqueFrontBuffer: !0
                        },
                        version: null,
                        surfaces: {},
                        canvasPool: [],
                        events: [],
                        fonts: [null],
                        audios: [null],
                        rwops: [null],
                        music: {
                            audio: null,
                            volume: 1
                        },
                        mixerFrequency: 22050,
                        mixerFormat: 32784,
                        mixerNumChannels: 2,
                        mixerChunkSize: 1024,
                        channelMinimumNumber: 0,
                        GL: !1,
                        glAttributes: {
                            0: 3,
                            1: 3,
                            2: 2,
                            3: 0,
                            4: 0,
                            5: 1,
                            6: 16,
                            7: 0,
                            8: 0,
                            9: 0,
                            10: 0,
                            11: 0,
                            12: 0,
                            13: 0,
                            14: 0,
                            15: 1,
                            16: 0,
                            17: 0,
                            18: 0
                        },
                        keyboardState: null,
                        keyboardMap: {},
                        canRequestFullscreen: !1,
                        isRequestingFullscreen: !1,
                        textInput: !1,
                        startTime: null,
                        initFlags: 0,
                        buttonState: 0,
                        modState: 0,
                        DOMButtons: [0, 0, 0],
                        DOMEventToSDLEvent: {},
                        TOUCH_DEFAULT_ID: 0,
                        eventHandler: null,
                        eventHandlerContext: null,
                        eventHandlerTemp: 0,
                        keyCodes: {
                            16: 1249,
                            17: 1248,
                            18: 1250,
                            20: 1081,
                            33: 1099,
                            34: 1102,
                            35: 1101,
                            36: 1098,
                            37: 1104,
                            38: 1106,
                            39: 1103,
                            40: 1105,
                            44: 316,
                            45: 1097,
                            46: 127,
                            91: 1251,
                            93: 1125,
                            96: 1122,
                            97: 1113,
                            98: 1114,
                            99: 1115,
                            100: 1116,
                            101: 1117,
                            102: 1118,
                            103: 1119,
                            104: 1120,
                            105: 1121,
                            106: 1109,
                            107: 1111,
                            109: 1110,
                            110: 1123,
                            111: 1108,
                            112: 1082,
                            113: 1083,
                            114: 1084,
                            115: 1085,
                            116: 1086,
                            117: 1087,
                            118: 1088,
                            119: 1089,
                            120: 1090,
                            121: 1091,
                            122: 1092,
                            123: 1093,
                            124: 1128,
                            125: 1129,
                            126: 1130,
                            127: 1131,
                            128: 1132,
                            129: 1133,
                            130: 1134,
                            131: 1135,
                            132: 1136,
                            133: 1137,
                            134: 1138,
                            135: 1139,
                            144: 1107,
                            160: 94,
                            161: 33,
                            162: 34,
                            163: 35,
                            164: 36,
                            165: 37,
                            166: 38,
                            167: 95,
                            168: 40,
                            169: 41,
                            170: 42,
                            171: 43,
                            172: 124,
                            173: 45,
                            174: 123,
                            175: 125,
                            176: 126,
                            181: 127,
                            182: 129,
                            183: 128,
                            188: 44,
                            190: 46,
                            191: 47,
                            192: 96,
                            219: 91,
                            220: 92,
                            221: 93,
                            222: 39,
                            224: 1251
                        },
                        scanCodes: {
                            8: 42,
                            9: 43,
                            13: 40,
                            27: 41,
                            32: 44,
                            35: 204,
                            39: 53,
                            44: 54,
                            46: 55,
                            47: 56,
                            48: 39,
                            49: 30,
                            50: 31,
                            51: 32,
                            52: 33,
                            53: 34,
                            54: 35,
                            55: 36,
                            56: 37,
                            57: 38,
                            58: 203,
                            59: 51,
                            61: 46,
                            91: 47,
                            92: 49,
                            93: 48,
                            96: 52,
                            97: 4,
                            98: 5,
                            99: 6,
                            100: 7,
                            101: 8,
                            102: 9,
                            103: 10,
                            104: 11,
                            105: 12,
                            106: 13,
                            107: 14,
                            108: 15,
                            109: 16,
                            110: 17,
                            111: 18,
                            112: 19,
                            113: 20,
                            114: 21,
                            115: 22,
                            116: 23,
                            117: 24,
                            118: 25,
                            119: 26,
                            120: 27,
                            121: 28,
                            122: 29,
                            127: 76,
                            305: 224,
                            308: 226,
                            316: 70
                        },
                        loadRect: function(e) {
                            return {
                                x: _[e + 0 >> 2],
                                y: _[e + 4 >> 2],
                                w: _[e + 8 >> 2],
                                h: _[e + 12 >> 2]
                            }
                        },
                        updateRect: function(e, r) {
                            _[e >> 2] = r.x, _[e + 4 >> 2] = r.y, _[e + 8 >> 2] = r.w, _[e + 12 >> 2] = r.h
                        },
                        intersectionOfRects: function(e, r) {
                            var n = Math.max(e.x, r.x),
                                t = Math.max(e.y, r.y),
                                o = Math.min(e.x + e.w, r.x + r.w),
                                i = Math.min(e.y + e.h, r.y + r.h);
                            return {
                                x: n,
                                y: t,
                                w: Math.max(n, o) - n,
                                h: Math.max(t, i) - t
                            }
                        },
                        checkPixelFormat: function(e) {},
                        loadColorToCSSRGB: function(e) {
                            var r = _[e >> 2];
                            return "rgb(" + (255 & r) + "," + (r >> 8 & 255) + "," + (r >> 16 & 255) + ")"
                        },
                        loadColorToCSSRGBA: function(e) {
                            var r = _[e >> 2];
                            return "rgba(" + (255 & r) + "," + (r >> 8 & 255) + "," + (r >> 16 & 255) + "," + (r >> 24 & 255) / 255 + ")"
                        },
                        translateColorToCSSRGBA: function(e) {
                            return "rgba(" + (255 & e) + "," + (e >> 8 & 255) + "," + (e >> 16 & 255) + "," + (e >>> 24) / 255 + ")"
                        },
                        translateRGBAToCSSRGBA: function(e, r, n, t) {
                            return "rgba(" + (255 & e) + "," + (255 & r) + "," + (255 & n) + "," + (255 & t) / 255 + ")"
                        },
                        translateRGBAToColor: function(e, r, n, t) {
                            return e | r << 8 | n << 16 | t << 24
                        },
                        makeSurface: function(e, r, n, o, i, a, f, u, s) {
                            var c, l = 1 & (n = n || 0),
                                d = 2097152 & n,
                                A = 67108864 & n,
                                v = Se(60),
                                p = Se(44),
                                m = d ? 1 : 4,
                                g = 0;
                            l || A || (g = Se(e * r * 4)), _[v >> 2] = n, _[v + 4 >> 2] = p, _[v + 8 >> 2] = e, _[v + 12 >> 2] = r, _[v + 16 >> 2] = e * m, _[v + 20 >> 2] = g, _[v + 36 >> 2] = 0, _[v + 40 >> 2] = 0, _[v + 44 >> 2] = t.canvas.width, _[v + 48 >> 2] = t.canvas.height, _[v + 56 >> 2] = 1, _[p >> 2] = -2042224636, _[p + 4 >> 2] = 0, C[p + 8 >> 0] = 8 * m, C[p + 9 >> 0] = m, _[p + 12 >> 2] = a || 255, _[p + 16 >> 2] = f || 65280, _[p + 20 >> 2] = u || 16711680, _[p + 24 >> 2] = s || 4278190080, ve.GL = ve.GL || A, o ? c = t.canvas : ((c = ve.canvasPool.length > 0 ? ve.canvasPool.pop() : document.createElement("canvas")).width = e, c.height = r);
                            var h = {
                                    antialias: 0 != ve.glAttributes[13] && ve.glAttributes[14] > 1,
                                    depth: ve.glAttributes[6] > 0,
                                    stencil: ve.glAttributes[7] > 0,
                                    alpha: ve.glAttributes[3] > 0
                                },
                                b = de.createContext(c, A, o, h);
                            return ve.surfaces[v] = {
                                width: e,
                                height: r,
                                canvas: c,
                                ctx: b,
                                surf: v,
                                buffer: g,
                                pixelFormat: p,
                                alpha: 255,
                                flags: n,
                                locked: 0,
                                usePageCanvas: o,
                                source: i,
                                isFlagSet: function(e) {
                                    return n & e
                                }
                            }, v
                        },
                        copyIndexedColorData: function(e, r, n, o, i) {
                            if (e.colors) {
                                var a = t.canvas.width,
                                    f = t.canvas.height,
                                    u = r || 0,
                                    s = n || 0,
                                    c = (o || a - u) + u,
                                    l = (i || f - s) + s,
                                    d = e.buffer;
                                e.image.data32 || (e.image.data32 = new Uint32Array(e.image.data.buffer));
                                for (var A = e.image.data32, v = e.colors32, p = s; p < l; ++p)
                                    for (var m = p * a, g = u; g < c; ++g) A[m + g] = v[E[d + m + g >> 0]]
                            }
                        },
                        freeSurface: function(e) {
                            var r = e + 56,
                                n = _[r >> 2];
                            if (n > 1) _[r >> 2] = n - 1;
                            else {
                                var t = ve.surfaces[e];
                                !t.usePageCanvas && t.canvas && ve.canvasPool.push(t.canvas), t.buffer && Le(t.buffer), Le(t.pixelFormat), Le(e), ve.surfaces[e] = null, e === ve.screen && (ve.screen = null)
                            }
                        },
                        blitSurface: function(e, r, n, t, o) {
                            var i, a, f, u, s = ve.surfaces[e],
                                c = ve.surfaces[n];
                            if (i = r ? ve.loadRect(r) : {
                                    x: 0,
                                    y: 0,
                                    w: s.width,
                                    h: s.height
                                }, a = t ? ve.loadRect(t) : {
                                    x: 0,
                                    y: 0,
                                    w: s.width,
                                    h: s.height
                                }, c.clipRect) {
                                var l = o && 0 !== i.w ? i.w / a.w : 1,
                                    d = o && 0 !== i.h ? i.h / a.h : 1;
                                a = ve.intersectionOfRects(c.clipRect, a), i.w = a.w * l, i.h = a.h * d, t && ve.updateRect(t, a)
                            }
                            if (o ? (f = a.w, u = a.h) : (f = i.w, u = i.h), 0 === i.w || 0 === i.h || 0 === f || 0 === u) return 0;
                            var v = c.ctx.globalAlpha;
                            return c.ctx.globalAlpha = s.alpha / 255, c.ctx.drawImage(s.canvas, i.x, i.y, i.w, i.h, a.x, a.y, f, u), c.ctx.globalAlpha = v, n != ve.screen && (A("WARNING: copying canvas data to memory for compatibility"), Ae(n), c.locked--), 0
                        },
                        downFingers: {},
                        savedKeydown: null,
                        receiveEvent: function(e) {
                            function r() {
                                for (var e in ve.keyboardMap) ve.events.push({
                                    type: "keyup",
                                    keyCode: ve.keyboardMap[e]
                                })
                            }
                            switch (e.type) {
                                case "touchstart":
                                case "touchmove":
                                    e.preventDefault();
                                    var n = [];
                                    if ("touchstart" === e.type)
                                        for (var o = 0; o < e.touches.length; o++) {
                                            var i = e.touches[o];
                                            1 != ve.downFingers[i.identifier] && (ve.downFingers[i.identifier] = !0, n.push(i))
                                        } else n = e.touches;
                                    var a = n[0];
                                    if (a) {
                                        var f;
                                        switch ("touchstart" == e.type && (ve.DOMButtons[0] = 1), e.type) {
                                            case "touchstart":
                                                f = "mousedown";
                                                break;
                                            case "touchmove":
                                                f = "mousemove"
                                        }
                                        var u = {
                                            type: f,
                                            button: 0,
                                            pageX: a.clientX,
                                            pageY: a.clientY
                                        };
                                        ve.events.push(u)
                                    }
                                    for (o = 0; o < n.length; o++) i = n[o], ve.events.push({
                                        type: e.type,
                                        touch: i
                                    });
                                    break;
                                case "touchend":
                                    for (e.preventDefault(), o = 0; o < e.changedTouches.length; o++) i = e.changedTouches[o], !0 === ve.downFingers[i.identifier] && delete ve.downFingers[i.identifier];
                                    for (u = {
                                            type: "mouseup",
                                            button: 0,
                                            pageX: e.changedTouches[0].clientX,
                                            pageY: e.changedTouches[0].clientY
                                        }, ve.DOMButtons[0] = 0, ve.events.push(u), o = 0; o < e.changedTouches.length; o++) i = e.changedTouches[o], ve.events.push({
                                        type: "touchend",
                                        touch: i
                                    });
                                    break;
                                case "DOMMouseScroll":
                                case "mousewheel":
                                case "wheel":
                                    var s = -de.getMouseWheelDelta(e),
                                        c = (s = 0 == s ? 0 : s > 0 ? Math.max(s, 1) : Math.min(s, -1)) > 0 ? 3 : 4;
                                    ve.events.push({
                                        type: "mousedown",
                                        button: c,
                                        pageX: e.pageX,
                                        pageY: e.pageY
                                    }), ve.events.push({
                                        type: "mouseup",
                                        button: c,
                                        pageX: e.pageX,
                                        pageY: e.pageY
                                    }), ve.events.push({
                                        type: "wheel",
                                        deltaX: 0,
                                        deltaY: s
                                    }), e.preventDefault();
                                    break;
                                case "mousemove":
                                    if (1 === ve.DOMButtons[0] && ve.events.push({
                                            type: "touchmove",
                                            touch: {
                                                identifier: 0,
                                                deviceID: -1,
                                                pageX: e.pageX,
                                                pageY: e.pageY
                                            }
                                        }), de.pointerLock && ("mozMovementX" in e && (e.movementX = e.mozMovementX, e.movementY = e.mozMovementY), 0 == e.movementX && 0 == e.movementY)) return void e.preventDefault();
                                case "keydown":
                                case "keyup":
                                case "keypress":
                                case "mousedown":
                                case "mouseup":
                                    if ("keydown" === e.type && (ve.unicode || ve.textInput) && 8 !== e.keyCode && 9 !== e.keyCode || e.preventDefault(), "mousedown" == e.type) ve.DOMButtons[e.button] = 1, ve.events.push({
                                        type: "touchstart",
                                        touch: {
                                            identifier: 0,
                                            deviceID: -1,
                                            pageX: e.pageX,
                                            pageY: e.pageY
                                        }
                                    });
                                    else if ("mouseup" == e.type) {
                                        if (!ve.DOMButtons[e.button]) return;
                                        ve.events.push({
                                            type: "touchend",
                                            touch: {
                                                identifier: 0,
                                                deviceID: -1,
                                                pageX: e.pageX,
                                                pageY: e.pageY
                                            }
                                        }), ve.DOMButtons[e.button] = 0
                                    }
                                    "keydown" === e.type || "mousedown" === e.type ? ve.canRequestFullscreen = !0 : "keyup" !== e.type && "mouseup" !== e.type || (ve.isRequestingFullscreen && (t.requestFullscreen(!0, !0), ve.isRequestingFullscreen = !1), ve.canRequestFullscreen = !1), "keypress" === e.type && ve.savedKeydown ? (ve.savedKeydown.keypressCharCode = e.charCode, ve.savedKeydown = null) : "keydown" === e.type && (ve.savedKeydown = e), ("keypress" !== e.type || ve.textInput) && ve.events.push(e);
                                    break;
                                case "mouseout":
                                    for (o = 0; o < 3; o++) ve.DOMButtons[o] && (ve.events.push({
                                        type: "mouseup",
                                        button: o,
                                        pageX: e.pageX,
                                        pageY: e.pageY
                                    }), ve.DOMButtons[o] = 0);
                                    e.preventDefault();
                                    break;
                                case "focus":
                                    ve.events.push(e), e.preventDefault();
                                    break;
                                case "blur":
                                    ve.events.push(e), r(), e.preventDefault();
                                    break;
                                case "visibilitychange":
                                    ve.events.push({
                                        type: "visibilitychange",
                                        visible: !document.hidden
                                    }), r(), e.preventDefault();
                                    break;
                                case "unload":
                                    return void(de.mainLoop.runner && (ve.events.push(e), de.mainLoop.runner()));
                                case "resize":
                                    ve.events.push(e), e.preventDefault && e.preventDefault()
                            }
                            ve.events.length >= 1e4 && (d("SDL event queue full, dropping events"), ve.events = ve.events.slice(0, 1e4)), ve.flushEventsToHandler()
                        },
                        lookupKeyCodeForEvent: function(e) {
                            var r = e.keyCode;
                            return r >= 65 && r <= 90 ? r += 32 : (r = ve.keyCodes[e.keyCode] || e.keyCode, 2 === e.location && r >= 1248 && r <= 1251 && (r += 4)), r
                        },
                        handleEvent: function(e) {
                            if (!e.handled) switch (e.handled = !0, e.type) {
                                case "touchstart":
                                case "touchend":
                                case "touchmove":
                                    de.calculateMouseEvent(e);
                                    break;
                                case "keydown":
                                case "keyup":
                                    var r = "keydown" === e.type,
                                        n = ve.lookupKeyCodeForEvent(e);
                                    C[ve.keyboardState + n >> 0] = r, ve.modState = (C[ve.keyboardState + 1248 >> 0] ? 64 : 0) | (C[ve.keyboardState + 1249 >> 0] ? 1 : 0) | (C[ve.keyboardState + 1250 >> 0] ? 256 : 0) | (C[ve.keyboardState + 1252 >> 0] ? 128 : 0) | (C[ve.keyboardState + 1253 >> 0] ? 2 : 0) | (C[ve.keyboardState + 1254 >> 0] ? 512 : 0), r ? ve.keyboardMap[n] = e.keyCode : delete ve.keyboardMap[n];
                                    break;
                                case "mousedown":
                                case "mouseup":
                                    "mousedown" == e.type ? ve.buttonState |= 1 << e.button : "mouseup" == e.type && (ve.buttonState &= ~(1 << e.button));
                                case "mousemove":
                                    de.calculateMouseEvent(e)
                            }
                        },
                        flushEventsToHandler: function() {
                            if (ve.eventHandler)
                                for (; ve.pollEvent(ve.eventHandlerTemp);) t.dynCall_iii(ve.eventHandler, ve.eventHandlerContext, ve.eventHandlerTemp)
                        },
                        pollEvent: function(e) {
                            if (512 & ve.initFlags && ve.joystickEventState && ve.queryJoysticks(), e) {
                                for (; ve.events.length > 0;)
                                    if (!1 !== ve.makeCEvent(ve.events.shift(), e)) return 1;
                                return 0
                            }
                            return ve.events.length > 0
                        },
                        makeCEvent: function(e, r) {
                            if ("number" == typeof e) return xe(r, e, 28), void Le(e);
                            switch (ve.handleEvent(e), e.type) {
                                case "keydown":
                                case "keyup":
                                    var n, o = "keydown" === e.type,
                                        i = ve.lookupKeyCodeForEvent(e);
                                    n = i >= 1024 ? i - 1024 : ve.scanCodes[i] || i, _[r >> 2] = ve.DOMEventToSDLEvent[e.type], C[r + 8 >> 0] = o ? 1 : 0, C[r + 9 >> 0] = 0, _[r + 12 >> 2] = n, _[r + 16 >> 2] = i, I[r + 20 >> 1] = ve.modState, _[r + 24 >> 2] = e.keypressCharCode || i;
                                    break;
                                case "keypress":
                                    _[r >> 2] = ve.DOMEventToSDLEvent[e.type];
                                    for (var a = we(String.fromCharCode(e.charCode)), f = 0; f < a.length; ++f) C[r + (8 + f) >> 0] = a[f];
                                    break;
                                case "mousedown":
                                case "mouseup":
                                case "mousemove":
                                    "mousemove" != e.type ? (o = "mousedown" === e.type, _[r >> 2] = ve.DOMEventToSDLEvent[e.type], _[r + 4 >> 2] = 0, _[r + 8 >> 2] = 0, _[r + 12 >> 2] = 0, C[r + 16 >> 0] = e.button + 1, C[r + 17 >> 0] = o ? 1 : 0, _[r + 20 >> 2] = de.mouseX, _[r + 24 >> 2] = de.mouseY) : (_[r >> 2] = ve.DOMEventToSDLEvent[e.type], _[r + 4 >> 2] = 0, _[r + 8 >> 2] = 0, _[r + 12 >> 2] = 0, _[r + 16 >> 2] = ve.buttonState, _[r + 20 >> 2] = de.mouseX, _[r + 24 >> 2] = de.mouseY, _[r + 28 >> 2] = de.mouseMovementX, _[r + 32 >> 2] = de.mouseMovementY);
                                    break;
                                case "wheel":
                                    _[r >> 2] = ve.DOMEventToSDLEvent[e.type], _[r + 16 >> 2] = e.deltaX, _[r + 20 >> 2] = e.deltaY;
                                    break;
                                case "touchstart":
                                case "touchend":
                                case "touchmove":
                                    var u = e.touch;
                                    if (!de.touches[u.identifier]) break;
                                    var s = t.canvas.width,
                                        c = t.canvas.height,
                                        l = de.touches[u.identifier].x / s,
                                        d = de.touches[u.identifier].y / c,
                                        A = l - de.lastTouches[u.identifier].x / s,
                                        v = d - de.lastTouches[u.identifier].y / c;
                                    if (void 0 === u.deviceID && (u.deviceID = ve.TOUCH_DEFAULT_ID), 0 === A && 0 === v && "touchmove" === e.type) return !1;
                                    _[r >> 2] = ve.DOMEventToSDLEvent[e.type], _[r + 4 >> 2] = Date.now() - ve.startTime | 0, re = [u.deviceID >>> 0, (ee = u.deviceID, +j(ee) >= 1 ? ee > 0 ? (0 | W(+Q(ee / 4294967296), 4294967295)) >>> 0 : ~~+X((ee - +(~~ee >>> 0)) / 4294967296) >>> 0 : 0)], _[r + 8 >> 2] = re[0], _[r + 12 >> 2] = re[1], re = [u.identifier >>> 0, (ee = u.identifier, +j(ee) >= 1 ? ee > 0 ? (0 | W(+Q(ee / 4294967296), 4294967295)) >>> 0 : ~~+X((ee - +(~~ee >>> 0)) / 4294967296) >>> 0 : 0)], _[r + 16 >> 2] = re[0], _[r + 20 >> 2] = re[1], x[r + 24 >> 2] = l, x[r + 28 >> 2] = d, x[r + 32 >> 2] = A, x[r + 36 >> 2] = v, void 0 !== u.force ? x[r + 40 >> 2] = u.force : x[r + 40 >> 2] = "touchend" == e.type ? 0 : 1;
                                    break;
                                case "unload":
                                    _[r >> 2] = ve.DOMEventToSDLEvent[e.type];
                                    break;
                                case "resize":
                                    _[r >> 2] = ve.DOMEventToSDLEvent[e.type], _[r + 4 >> 2] = e.w, _[r + 8 >> 2] = e.h;
                                    break;
                                case "joystick_button_up":
                                case "joystick_button_down":
                                    var p = "joystick_button_up" === e.type ? 0 : 1;
                                    _[r >> 2] = ve.DOMEventToSDLEvent[e.type], C[r + 4 >> 0] = e.index, C[r + 5 >> 0] = e.button, C[r + 6 >> 0] = p;
                                    break;
                                case "joystick_axis_motion":
                                    _[r >> 2] = ve.DOMEventToSDLEvent[e.type], C[r + 4 >> 0] = e.index, C[r + 5 >> 0] = e.axis, _[r + 8 >> 2] = ve.joystickAxisValueConversion(e.value);
                                    break;
                                case "focus":
                                    _[r >> 2] = ve.DOMEventToSDLEvent[e.type], _[r + 4 >> 2] = 0, C[r + 8 >> 0] = 12;
                                    break;
                                case "blur":
                                    _[r >> 2] = ve.DOMEventToSDLEvent[e.type], _[r + 4 >> 2] = 0, C[r + 8 >> 0] = 13;
                                    break;
                                case "visibilitychange":
                                    var m = e.visible ? 1 : 2;
                                    _[r >> 2] = ve.DOMEventToSDLEvent[e.type], _[r + 4 >> 2] = 0, C[r + 8 >> 0] = m;
                                    break;
                                default:
                                    throw "Unhandled SDL event: " + e.type
                            }
                        },
                        makeFontString: function(e, r) {
                            return "'" != r.charAt(0) && '"' != r.charAt(0) && (r = '"' + r + '"'), e + "px " + r + ", serif"
                        },
                        estimateTextWidth: function(e, r) {
                            var n = e.size,
                                t = ve.makeFontString(n, e.name),
                                o = ve.ttfContext;
                            return o.font = t, 0 | o.measureText(r).width
                        },
                        allocateChannels: function(e) {
                            if (!(ve.numChannels && ve.numChannels >= e && 0 != e)) {
                                ve.numChannels = e, ve.channels = [];
                                for (var r = 0; r < e; r++) ve.channels[r] = {
                                    audio: null,
                                    volume: 1
                                }
                            }
                        },
                        setGetVolume: function(e, n) {
                            if (!e) return 0;
                            var t = 128 * e.volume;
                            if (-1 != n && (e.volume = Math.min(Math.max(n, 0), 128) / 128, e.audio)) try {
                                e.audio.volume = e.volume, e.audio.webAudioGainNode && (e.audio.webAudioGainNode.gain.value = e.volume)
                            } catch (r) {
                                d("setGetVolume failed to set audio volume: " + r)
                            }
                            return t
                        },
                        setPannerPosition: function(e, r, n, t) {
                            e && e.audio && e.audio.webAudioPannerNode && e.audio.webAudioPannerNode.setPosition(r, n, t)
                        },
                        playWebAudio: function(e) {
                            if (e && !e.webAudioNode && ve.webAudioAvailable()) try {
                                var n = e.resource.webAudio;
                                if (e.paused = !1, !n.decodedBuffer) return void 0 === n.onDecodeComplete && Z("Cannot play back audio object that was not loaded"), void n.onDecodeComplete.push((function() {
                                    e.paused || ve.playWebAudio(e)
                                }));
                                e.webAudioNode = ve.audioContext.createBufferSource(), e.webAudioNode.buffer = n.decodedBuffer, e.webAudioNode.loop = e.loop, e.webAudioNode.onended = function() {
                                    e.onended()
                                }, e.webAudioPannerNode = ve.audioContext.createPanner(), e.webAudioPannerNode.setPosition(0, 0, -.5), e.webAudioPannerNode.panningModel = "equalpower", e.webAudioGainNode = ve.audioContext.createGain(), e.webAudioGainNode.gain.value = e.volume, e.webAudioNode.connect(e.webAudioPannerNode), e.webAudioPannerNode.connect(e.webAudioGainNode), e.webAudioGainNode.connect(ve.audioContext.destination), e.webAudioNode.start(0, e.currentPosition), e.startTime = ve.audioContext.currentTime - e.currentPosition
                            } catch (r) {
                                d("playWebAudio failed: " + r)
                            }
                        },
                        pauseWebAudio: function(e) {
                            if (e) {
                                if (e.webAudioNode) try {
                                    e.currentPosition = (ve.audioContext.currentTime - e.startTime) % e.resource.webAudio.decodedBuffer.duration, e.webAudioNode.onended = void 0, e.webAudioNode.stop(0), e.webAudioNode = void 0
                                } catch (r) {
                                    d("pauseWebAudio failed: " + r)
                                }
                                e.paused = !0
                            }
                        },
                        openAudioContext: function() {
                            ve.audioContext || ("undefined" != typeof AudioContext ? ve.audioContext = new AudioContext : "undefined" != typeof webkitAudioContext && (ve.audioContext = new webkitAudioContext))
                        },
                        webAudioAvailable: function() {
                            return !!ve.audioContext
                        },
                        fillWebAudioBufferFromHeap: function(e, r, n) {
                            for (var t = ve.audio, o = t.channels, i = 0; i < o; ++i) {
                                var a = n.getChannelData(i);
                                if (a.length != r) throw "Web Audio output buffer length mismatch! Destination size: " + a.length + " samples vs expected " + r + " samples!";
                                if (32784 == t.format)
                                    for (var f = 0; f < r; ++f) a[f] = I[e + 2 * (f * o + i) >> 1] / 32768;
                                else if (8 == t.format)
                                    for (f = 0; f < r; ++f) {
                                        var u = C[e + (f * o + i) >> 0];
                                        a[f] = (u >= 0 ? u - 128 : u + 128) / 128
                                    } else {
                                        if (33056 != t.format) throw "Invalid SDL audio format " + t.format + "!";
                                        for (f = 0; f < r; ++f) a[f] = x[e + 4 * (f * o + i) >> 2]
                                    }
                            }
                        },
                        debugSurface: function(e) {
                            console.log("dumping surface " + [e.surf, e.source, e.width, e.height]);
                            for (var r = e.ctx.getImageData(0, 0, e.width, e.height).data, n = Math.min(e.width, e.height), t = 0; t < n; t++) console.log("   diagonal " + t + ":" + [r[t * e.width * 4 + 4 * t + 0], r[t * e.width * 4 + 4 * t + 1], r[t * e.width * 4 + 4 * t + 2], r[t * e.width * 4 + 4 * t + 3]])
                        },
                        joystickEventState: 1,
                        lastJoystickState: {},
                        joystickNamePool: {},
                        recordJoystickState: function(e, r) {
                            for (var n = new Array(r.buttons.length), t = 0; t < r.buttons.length; t++) n[t] = ve.getJoystickButtonState(r.buttons[t]);
                            ve.lastJoystickState[e] = {
                                buttons: n,
                                axes: r.axes.slice(0),
                                timestamp: r.timestamp,
                                index: r.index,
                                id: r.id
                            }
                        },
                        getJoystickButtonState: function(e) {
                            return "object" == typeof e ? e.pressed : e > 0
                        },
                        queryJoysticks: function() {
                            for (var e in ve.lastJoystickState) {
                                var r = ve.getGamepad(e - 1),
                                    n = ve.lastJoystickState[e];
                                if (void 0 === r) return;
                                if (null === r) return;
                                if ("number" != typeof r.timestamp || r.timestamp !== n.timestamp || !r.timestamp) {
                                    var t;
                                    for (t = 0; t < r.buttons.length; t++) {
                                        var o = ve.getJoystickButtonState(r.buttons[t]);
                                        o !== n.buttons[t] && ve.events.push({
                                            type: o ? "joystick_button_down" : "joystick_button_up",
                                            joystick: e,
                                            index: e - 1,
                                            button: t
                                        })
                                    }
                                    for (t = 0; t < r.axes.length; t++) r.axes[t] !== n.axes[t] && ve.events.push({
                                        type: "joystick_axis_motion",
                                        joystick: e,
                                        index: e - 1,
                                        axis: t,
                                        value: r.axes[t]
                                    });
                                    ve.recordJoystickState(e, r)
                                }
                            }
                        },
                        joystickAxisValueConversion: function(e) {
                            return e = Math.min(1, Math.max(e, -1)), Math.ceil(32767.5 * (e + 1) - 32768)
                        },
                        getGamepads: function() {
                            var e = navigator.getGamepads || navigator.webkitGamepads || navigator.mozGamepads || navigator.gamepads || navigator.webkitGetGamepads;
                            return void 0 !== e ? e.apply(navigator) : []
                        },
                        getGamepad: function(e) {
                            var r = ve.getGamepads();
                            return r.length > e && e >= 0 ? r[e] : null
                        }
                    },
                    pe = {
                        counter: 1,
                        buffers: [],
                        programs: [],
                        framebuffers: [],
                        renderbuffers: [],
                        textures: [],
                        uniforms: [],
                        shaders: [],
                        vaos: [],
                        contexts: [],
                        offscreenCanvases: {},
                        timerQueriesEXT: [],
                        programInfos: {},
                        stringCache: {},
                        unpackAlignment: 4,
                        recordError: function(e) {
                            pe.lastError || (pe.lastError = e)
                        },
                        getNewId: function(e) {
                            for (var r = pe.counter++, n = e.length; n < r; n++) e[n] = null;
                            return r
                        },
                        getSource: function(e, r, n, t) {
                            for (var o = "", i = 0; i < r; ++i) {
                                var a = t ? _[t + 4 * i >> 2] : -1;
                                o += P(_[n + 4 * i >> 2], a < 0 ? void 0 : a)
                            }
                            return o
                        },
                        createContext: function(e, r) {
                            var n = e.getContext("webgl", r) || e.getContext("experimental-webgl", r);
                            return n ? pe.registerContext(n, r) : 0
                        },
                        registerContext: function(e, n) {
                            var t = pe.getNewId(pe.contexts),
                                o = {
                                    handle: t,
                                    attributes: n,
                                    version: n.majorVersion,
                                    GLctx: e
                                };
                            return o.cannotHandleOffsetsInUniformArrayViews = function(e) {
                                function n(r, n) {
                                    var t = e.createShader(n);
                                    return e.shaderSource(t, r), e.compileShader(t), t
                                }
                                try {
                                    var t = e.createProgram();
                                    e.attachShader(t, n("attribute vec4 p;void main(){gl_Position=p;}", 35633)), e.attachShader(t, n("precision lowp float;uniform vec4 u;void main(){gl_FragColor=u;}", 35632)), e.linkProgram(t);
                                    var o = new Float32Array(8);
                                    o[4] = 1, e.useProgram(t);
                                    var i = e.getUniformLocation(t, "u");
                                    return e.uniform4fv(i, o.subarray(4, 8)), !e.getUniform(t, i)[0]
                                } catch (r) {
                                    return !1
                                }
                            }(), e.canvas && (e.canvas.GLctxObject = o), pe.contexts[t] = o, (void 0 === n.enableExtensionsByDefault || n.enableExtensionsByDefault) && pe.initExtensions(o), t
                        },
                        makeContextCurrent: function(e) {
                            return pe.currentContext = pe.contexts[e], t.ctx = he = pe.currentContext && pe.currentContext.GLctx, !(e && !he)
                        },
                        getContext: function(e) {
                            return pe.contexts[e]
                        },
                        deleteContext: function(e) {
                            pe.currentContext === pe.contexts[e] && (pe.currentContext = null), "object" == typeof JSEvents && JSEvents.removeAllHandlersOnTarget(pe.contexts[e].GLctx.canvas), pe.contexts[e] && pe.contexts[e].GLctx.canvas && (pe.contexts[e].GLctx.canvas.GLctxObject = void 0), pe.contexts[e] = null
                        },
                        initExtensions: function(e) {
                            if (e || (e = pe.currentContext), !e.initExtensionsDone) {
                                e.initExtensionsDone = !0;
                                var r, n = e.GLctx;
                                ! function(e) {
                                    var r = e.getExtension("ANGLE_instanced_arrays");
                                    r && (e.vertexAttribDivisor = function(e, n) {
                                        r.vertexAttribDivisorANGLE(e, n)
                                    }, e.drawArraysInstanced = function(e, n, t, o) {
                                        r.drawArraysInstancedANGLE(e, n, t, o)
                                    }, e.drawElementsInstanced = function(e, n, t, o, i) {
                                        r.drawElementsInstancedANGLE(e, n, t, o, i)
                                    })
                                }(n),
                                function(e) {
                                    var r = e.getExtension("OES_vertex_array_object");
                                    r && (e.createVertexArray = function() {
                                        return r.createVertexArrayOES()
                                    }, e.deleteVertexArray = function(e) {
                                        r.deleteVertexArrayOES(e)
                                    }, e.bindVertexArray = function(e) {
                                        r.bindVertexArrayOES(e)
                                    }, e.isVertexArray = function(e) {
                                        return r.isVertexArrayOES(e)
                                    })
                                }(n),
                                function(e) {
                                    var r = e.getExtension("WEBGL_draw_buffers");
                                    r && (e.drawBuffers = function(e, n) {
                                        r.drawBuffersWEBGL(e, n)
                                    })
                                }(n), n.disjointTimerQueryExt = n.getExtension("EXT_disjoint_timer_query"), (r = n).multiDrawWebgl = r.getExtension("WEBGL_multi_draw");
                                var t = ["OES_texture_float", "OES_texture_half_float", "OES_standard_derivatives", "OES_vertex_array_object", "WEBGL_compressed_texture_s3tc", "WEBGL_depth_texture", "OES_element_index_uint", "EXT_texture_filter_anisotropic", "EXT_frag_depth", "WEBGL_draw_buffers", "ANGLE_instanced_arrays", "OES_texture_float_linear", "OES_texture_half_float_linear", "EXT_blend_minmax", "EXT_shader_texture_lod", "EXT_texture_norm16", "WEBGL_compressed_texture_pvrtc", "EXT_color_buffer_half_float", "WEBGL_color_buffer_float", "EXT_sRGB", "WEBGL_compressed_texture_etc1", "EXT_disjoint_timer_query", "WEBGL_compressed_texture_etc", "WEBGL_compressed_texture_astc", "EXT_color_buffer_float", "WEBGL_compressed_texture_s3tc_srgb", "EXT_disjoint_timer_query_webgl2", "WEBKIT_WEBGL_compressed_texture_pvrtc"];
                                (n.getSupportedExtensions() || []).forEach((function(e) {
                                    -1 != t.indexOf(e) && n.getExtension(e)
                                }))
                            }
                        },
                        populateUniformTable: function(e) {
                            for (var r = pe.programs[e], n = pe.programInfos[e] = {
                                    uniforms: {},
                                    maxUniformLength: 0,
                                    maxAttributeLength: -1,
                                    maxUniformBlockNameLength: -1
                                }, t = n.uniforms, o = he.getProgramParameter(r, 35718), i = 0; i < o; ++i) {
                                var a = he.getActiveUniform(r, i),
                                    f = a.name;
                                n.maxUniformLength = Math.max(n.maxUniformLength, f.length + 1), "]" == f.slice(-1) && (f = f.slice(0, f.lastIndexOf("[")));
                                var u = he.getUniformLocation(r, f);
                                if (u) {
                                    var s = pe.getNewId(pe.uniforms);
                                    t[f] = [a.size, s], pe.uniforms[s] = u;
                                    for (var c = 1; c < a.size; ++c) {
                                        var l = f + "[" + c + "]";
                                        u = he.getUniformLocation(r, l), s = pe.getNewId(pe.uniforms), pe.uniforms[s] = u
                                    }
                                }
                            }
                        }
                    },
                    me = Uint8Array.prototype.copyWithin ? function(e, r, n) {
                        E.copyWithin(e, r, r + n)
                    } : function(e, r, n) {
                        E.set(E.subarray(r, r + n), e)
                    };

                function ge(e) {
                    try {
                        return m.grow(e - y.byteLength + 65535 >>> 16), F(m.buffer), 1
                    } catch (r) {}
                }
                var he, be = {
                        mappings: {},
                        buffers: [null, [],
                            []
                        ],
                        printChar: function(e, r) {
                            var n = be.buffers[e];
                            0 === r || 10 === r ? ((1 === e ? l : d)(L(n, 0)), n.length = 0) : n.push(r)
                        },
                        varargs: void 0,
                        get: function() {
                            return be.varargs += 4, _[be.varargs - 4 >> 2]
                        },
                        getStr: function(e) {
                            return P(e)
                        },
                        get64: function(e, r) {
                            return e
                        }
                    },
                    ke = function(e, r, n, t) {
                        e || (e = this), this.parent = e, this.mount = e.mount, this.mounted = null, this.id = ce.nextInode++, this.name = r, this.mode = n, this.node_ops = {}, this.stream_ops = {}, this.rdev = t
                    };

                function we(e, r, n) {
                    var t = n > 0 ? n : B(e) + 1,
                        o = new Array(t),
                        i = M(e, o, 0, o.length);
                    return r && (o.length = i), o
                }
                Object.defineProperties(ke.prototype, {
                    read: {
                        get: function() {
                            return 365 == (365 & this.mode)
                        },
                        set: function(e) {
                            e ? this.mode |= 365 : this.mode &= -366
                        }
                    },
                    write: {
                        get: function() {
                            return 146 == (146 & this.mode)
                        },
                        set: function(e) {
                            e ? this.mode |= 146 : this.mode &= -147
                        }
                    },
                    isFolder: {
                        get: function() {
                            return ce.isDir(this.mode)
                        }
                    },
                    isDevice: {
                        get: function() {
                            return ce.isChrdev(this.mode)
                        }
                    }
                }), ce.FSNode = ke, ce.staticInit(), t.requestFullscreen = function(e, r) {
                    de.requestFullscreen(e, r)
                }, t.requestAnimationFrame = function(e) {
                    de.requestAnimationFrame(e)
                }, t.setCanvasSize = function(e, r, n) {
                    de.setCanvasSize(e, r, n)
                }, t.pauseMainLoop = function() {
                    de.mainLoop.pause()
                }, t.resumeMainLoop = function() {
                    de.mainLoop.resume()
                }, t.getUserMedia = function() {
                    de.getUserMedia()
                }, t.createContext = function(e, r, n, t) {
                    return de.createContext(e, r, n, t)
                };
                var ye = "function" == typeof atob ? atob : function(e) {
                    var r, n, t, o, i, a, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        u = "",
                        s = 0;
                    e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                    do {
                        r = f.indexOf(e.charAt(s++)) << 2 | (o = f.indexOf(e.charAt(s++))) >> 4, n = (15 & o) << 4 | (i = f.indexOf(e.charAt(s++))) >> 2, t = (3 & i) << 6 | (a = f.indexOf(e.charAt(s++))), u += String.fromCharCode(r), 64 !== i && (u += String.fromCharCode(n)), 64 !== a && (u += String.fromCharCode(t))
                    } while (s < e.length);
                    return u
                };

                function Ce(e) {
                    if (K(e)) return function(e) {
                        try {
                            for (var r = ye(e), n = new Uint8Array(r.length), t = 0; t < r.length; ++t) n[t] = r.charCodeAt(t);
                            return n
                        } catch (o) {
                            throw new Error("Converting base64 string to bytes failed.")
                        }
                    }(e.slice("data:application/octet-stream;base64,".length))
                }
                var Ee, Ie = {
                        SDL_CreateRGBSurface: function(e, r, n, t, o, i, a, f) {
                            return ve.makeSurface(r, n, e, !1, "CreateRGBSurface", o, i, a, f)
                        },
                        SDL_Flip: function(e) {},
                        SDL_FreeSurface: function(e) {
                            e && ve.freeSurface(e)
                        },
                        SDL_Init: function(e) {
                            if (ve.startTime = Date.now(), ve.initFlags = e, !t.doNotCaptureKeyboard) {
                                var r = t.keyboardListeningElement || document;
                                r.addEventListener("keydown", ve.receiveEvent), r.addEventListener("keyup", ve.receiveEvent), r.addEventListener("keypress", ve.receiveEvent), window.addEventListener("focus", ve.receiveEvent), window.addEventListener("blur", ve.receiveEvent), document.addEventListener("visibilitychange", ve.receiveEvent)
                            }
                            return window.addEventListener("unload", ve.receiveEvent), ve.keyboardState = Se(65536), De(ve.keyboardState, 0, 65536), ve.DOMEventToSDLEvent.keydown = 768, ve.DOMEventToSDLEvent.keyup = 769, ve.DOMEventToSDLEvent.keypress = 771, ve.DOMEventToSDLEvent.mousedown = 1025, ve.DOMEventToSDLEvent.mouseup = 1026, ve.DOMEventToSDLEvent.mousemove = 1024, ve.DOMEventToSDLEvent.wheel = 1027, ve.DOMEventToSDLEvent.touchstart = 1792, ve.DOMEventToSDLEvent.touchend = 1793, ve.DOMEventToSDLEvent.touchmove = 1794, ve.DOMEventToSDLEvent.unload = 256, ve.DOMEventToSDLEvent.resize = 28673, ve.DOMEventToSDLEvent.visibilitychange = 512, ve.DOMEventToSDLEvent.focus = 512, ve.DOMEventToSDLEvent.blur = 512, ve.DOMEventToSDLEvent.joystick_axis_motion = 1536, ve.DOMEventToSDLEvent.joystick_button_down = 1539, ve.DOMEventToSDLEvent.joystick_button_up = 1540, 0
                        },
                        SDL_LockSurface: Ae,
                        SDL_SetVideoMode: function(e, r, n, o) {
                            ["touchstart", "touchend", "touchmove", "mousedown", "mouseup", "mousemove", "DOMMouseScroll", "mousewheel", "wheel", "mouseout"].forEach((function(e) {
                                t.canvas.addEventListener(e, ve.receiveEvent, !0)
                            }));
                            var i = t.canvas;
                            return 0 == e && 0 == r && (e = i.width, r = i.height), ve.addedResizeListener || (ve.addedResizeListener = !0, de.resizeListeners.push((function(e, r) {
                                ve.settingVideoMode || ve.receiveEvent({
                                    type: "resize",
                                    w: e,
                                    h: r
                                })
                            }))), ve.settingVideoMode = !0, de.setCanvasSize(e, r), ve.settingVideoMode = !1, ve.screen && ve.freeSurface(ve.screen), ve.GL && (o |= 67108864), ve.screen = ve.makeSurface(e, r, o, !0, "screen"), ve.screen
                        },
                        SDL_UnlockSurface: function(e) {
                            var r = ve.surfaces[e];
                            if (r.locked && !(--r.locked > 0)) {
                                if (r.isFlagSet(2097152)) ve.copyIndexedColorData(r);
                                else if (r.colors)
                                    for (var n = t.canvas.width, o = t.canvas.height, i = r.buffer, a = (d = r.image.data, r.colors), f = 0; f < o; f++) {
                                        for (var u = f * n * 4, s = 0; s < n; s++) {
                                            m = 4 * E[i++ >> 0];
                                            var c = u + 4 * s;
                                            d[c] = a[m], d[c + 1] = a[m + 1], d[c + 2] = a[m + 2]
                                        }
                                        i += 3 * n
                                    } else {
                                        var l, d = r.image.data,
                                            A = r.buffer >> 2,
                                            v = 0,
                                            p = e == ve.screen;
                                        if ("undefined" != typeof CanvasPixelArray && d instanceof CanvasPixelArray)
                                            for (l = d.length; v < l;) {
                                                var m = _[A];
                                                d[v] = 255 & m, d[v + 1] = m >> 8 & 255, d[v + 2] = m >> 16 & 255, d[v + 3] = p ? 255 : m >> 24 & 255, A++, v += 4
                                            } else {
                                                var g = new Uint32Array(d.buffer);
                                                if (p && ve.defaults.opaqueFrontBuffer) {
                                                    l = g.length, g.set(_.subarray(A, A + l));
                                                    var h = new Uint8Array(d.buffer),
                                                        b = 3,
                                                        k = b + 4 * l;
                                                    if (l % 8 == 0)
                                                        for (; b < k;) h[b] = 255, h[b = b + 4 | 0] = 255, h[b = b + 4 | 0] = 255, h[b = b + 4 | 0] = 255, h[b = b + 4 | 0] = 255, h[b = b + 4 | 0] = 255, h[b = b + 4 | 0] = 255, h[b = b + 4 | 0] = 255, b = b + 4 | 0;
                                                    else
                                                        for (; b < k;) h[b] = 255, b = b + 4 | 0
                                                } else g.set(_.subarray(A, A + g.length))
                                            }
                                    }
                                r.ctx.putImageData(r.image, 0, 0)
                            }
                        },
                        SDL_UpperBlit: function(e, r, n, t) {
                            return ve.blitSurface(e, r, n, t, !1)
                        },
                        emscripten_get_sbrk_ptr: function() {
                            return 12032
                        },
                        emscripten_memcpy_big: me,
                        emscripten_resize_heap: function(e) {
                            e >>>= 0;
                            var r = E.length;
                            if (e > 2147483648) return !1;
                            for (var n, t = 1; t <= 4; t *= 2) {
                                var o = r * (1 + .2 / t);
                                if (o = Math.min(o, e + 100663296), ge(Math.min(2147483648, ((n = Math.max(16777216, e, o)) % 65536 > 0 && (n += 65536 - n % 65536), n)))) return !0
                            }
                            return !1
                        },
                        fd_close: function(e) {
                            return 0
                        },
                        fd_seek: function(e, r, n, t, o) {},
                        fd_write: function(e, r, n, t) {
                            for (var o = 0, i = 0; i < n; i++) {
                                for (var a = _[r + 8 * i >> 2], f = _[r + (8 * i + 4) >> 2], u = 0; u < f; u++) be.printChar(e, E[a + u]);
                                o += f
                            }
                            return _[t >> 2] = o, 0
                        },
                        getTempRet0: function() {
                            return p
                        },
                        memory: m,
                        setTempRet0: function(e) {
                            p = e
                        },
                        table: h
                    },
                    _e = (function() {
                        var e = {
                            env: Ie,
                            wasi_snapshot_preview1: Ie
                        };

                        function n(e, r) {
                            var n = e.exports;
                            t.asm = n, J()
                        }

                        function i(e) {
                            n(e.instance)
                        }

                        function a(r) {
                            return (v || "function" != typeof fetch ? o.resolve().then(te) : fetch(ne, {
                                credentials: "same-origin"
                            }).then((function(e) {
                                if (!e.ok) throw "failed to load wasm binary file at '" + ne + "'";
                                return e.arrayBuffer()
                            })).catch((function() {
                                return te()
                            }))).then((function(r) {
                                return g.instantiate(r, e)
                            })).then(r, (function(e) {
                                d("failed to asynchronously prepare wasm: " + e), Z(e)
                            }))
                        }
                        if (H(), t.instantiateWasm) try {
                            return t.instantiateWasm(e, n)
                        } catch (r) {
                            return d("Module.instantiateWasm callback failed with error: " + r), !1
                        }! function() {
                            if (v || "function" != typeof g.instantiateStreaming || K(ne) || "function" != typeof fetch) return a(i);
                            fetch(ne, {
                                credentials: "same-origin"
                            }).then((function(r) {
                                return g.instantiateStreaming(r, e).then(i, (function(e) {
                                    return d("wasm streaming compile failed: " + e), d("falling back to ArrayBuffer instantiation"), a(i)
                                }))
                            }))
                        }()
                    }(), t.___wasm_call_ctors = function() {
                        return (_e = t.___wasm_call_ctors = t.asm.__wasm_call_ctors).apply(null, arguments)
                    }),
                    De = (t._WebpToSDL = function() {
                        return (t._WebpToSDL = t.asm.WebpToSDL).apply(null, arguments)
                    }, t._memset = function() {
                        return (De = t._memset = t.asm.memset).apply(null, arguments)
                    }),
                    xe = t._memcpy = function() {
                        return (xe = t._memcpy = t.asm.memcpy).apply(null, arguments)
                    },
                    Se = t._malloc = function() {
                        return (Se = t._malloc = t.asm.malloc).apply(null, arguments)
                    },
                    Le = t._free = function() {
                        return (Le = t._free = t.asm.free).apply(null, arguments)
                    },
                    Pe = t.___errno_location = function() {
                        return (Pe = t.___errno_location = t.asm.__errno_location).apply(null, arguments)
                    },
                    Me = t.stackSave = function() {
                        return (Me = t.stackSave = t.asm.stackSave).apply(null, arguments)
                    },
                    Be = t.stackRestore = function() {
                        return (Be = t.stackRestore = t.asm.stackRestore).apply(null, arguments)
                    },
                    Fe = t.stackAlloc = function() {
                        return (Fe = t.stackAlloc = t.asm.stackAlloc).apply(null, arguments)
                    },
                    Re = (t.dynCall_vii = function() {
                        return (t.dynCall_vii = t.asm.dynCall_vii).apply(null, arguments)
                    }, t.dynCall_vi = function() {
                        return (t.dynCall_vi = t.asm.dynCall_vi).apply(null, arguments)
                    }, t.dynCall_ii = function() {
                        return (t.dynCall_ii = t.asm.dynCall_ii).apply(null, arguments)
                    }, t.dynCall_iii = function() {
                        return (t.dynCall_iii = t.asm.dynCall_iii).apply(null, arguments)
                    }, t.dynCall_iiii = function() {
                        return (t.dynCall_iiii = t.asm.dynCall_iiii).apply(null, arguments)
                    }, t.dynCall_iiiiiii = function() {
                        return (t.dynCall_iiiiiii = t.asm.dynCall_iiiiiii).apply(null, arguments)
                    }, t.dynCall_viiii = function() {
                        return (t.dynCall_viiii = t.asm.dynCall_viiii).apply(null, arguments)
                    }, t.dynCall_viii = function() {
                        return (t.dynCall_viii = t.asm.dynCall_viii).apply(null, arguments)
                    }, t.dynCall_viiiiii = function() {
                        return (t.dynCall_viiiiii = t.asm.dynCall_viiiiii).apply(null, arguments)
                    }, t.dynCall_viiiii = function() {
                        return (t.dynCall_viiiii = t.asm.dynCall_viiiii).apply(null, arguments)
                    }, t.dynCall_viiiiiiiii = function() {
                        return (t.dynCall_viiiiiiiii = t.asm.dynCall_viiiiiiiii).apply(null, arguments)
                    }, t.dynCall_jiiii = function() {
                        return (t.dynCall_jiiii = t.asm.dynCall_jiiii).apply(null, arguments)
                    }, t.dynCall_jiji = function() {
                        return (t.dynCall_jiji = t.asm.dynCall_jiji).apply(null, arguments)
                    }, t.__growWasmMemory = function() {
                        return (Re = t.__growWasmMemory = t.asm.__growWasmMemory).apply(null, arguments)
                    });

                function Te(e) {
                    function r() {
                        Ee || (Ee = !0, t.calledRun = !0, b || (t.noFSInit || ce.init.initialized || ce.init(), ue.init(), T(z), ce.ignorePermissions = !1, T(U), t.onRuntimeInitialized && t.onRuntimeInitialized(), function() {
                            if (t.postRun)
                                for ("function" == typeof t.postRun && (t.postRun = [t.postRun]); t.postRun.length;) e = t.postRun.shift(), N.unshift(e);
                            var e;
                            T(N)
                        }()))
                    }
                    e = e || s, Y > 0 || (function() {
                        if (t.preRun)
                            for ("function" == typeof t.preRun && (t.preRun = [t.preRun]); t.preRun.length;) e = t.preRun.shift(), O.unshift(e);
                        var e;
                        T(O)
                    }(), Y > 0 || (t.setStatus ? (t.setStatus("Running..."), setTimeout((function() {
                        setTimeout((function() {
                            t.setStatus("")
                        }), 1), r()
                    }), 1)) : r()))
                }
                if (t.cwrap = function(e, r, n, t) {
                        var o = (n = n || []).every((function(e) {
                            return "number" === e
                        }));
                        return "string" !== r && o && !t ? k(e) : function() {
                            return w(e, r, n, arguments)
                        }
                    }, V = function e() {
                        Ee || Te(), Ee || (V = e)
                    }, t.run = Te, t.preInit)
                    for ("function" == typeof t.preInit && (t.preInit = [t.preInit]); t.preInit.length > 0;) t.preInit.pop()();
                Te(), this.Module = t, this.webpToSdl = t.cwrap("WebpToSDL", "number", ["array", "number"]), this.setCanvas = function(e) {
                    t.canvas = e
                }, this.Module.doNotCaptureKeyboard = !0
            }
        }
    }).call(this, n({}).setImmediate);
    var L, P = {},
        M = this && this.__extends || (L = function(e, r) {
            return (L = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, r) {
                    e.__proto__ = r
                } || function(e, r) {
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                })(e, r)
        }, function(e, r) {
            function n() {
                this.constructor = e
            }
            L(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
        }),
        B = this && this.__awaiter || function(e, n, t, o) {
            return new(t || (t = Promise))((function(i, a) {
                function f(e) {
                    try {
                        s(o.next(e))
                    } catch (r) {
                        a(r)
                    }
                }

                function u(e) {
                    try {
                        s(o.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }

                function s(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
                        e(r)
                    }))).then(f, u)
                }
                s((o = o.apply(e, n || [])).next())
            }))
        },
        F = this && this.__generator || function(e, n) {
            var t, o, i, a, f = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }), a;

            function u(a) {
                return function(u) {
                    return function(a) {
                        if (t) throw new TypeError("Generator is already executing.");
                        for (; f;) try {
                            if (t = 1, o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, a[1])).done) return i;
                            switch (o = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                case 0:
                                case 1:
                                    i = a;
                                    break;
                                case 4:
                                    return f.label++, {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    f.label++, o = a[1], a = [0];
                                    continue;
                                case 7:
                                    a = f.ops.pop(), f.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = f.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        f = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                        f.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && f.label < i[1]) {
                                        f.label = i[1], i = a;
                                        break
                                    }
                                    if (i && f.label < i[2]) {
                                        f.label = i[2], f.ops.push(a);
                                        break
                                    }
                                    i[2] && f.ops.pop(), f.trys.pop();
                                    continue
                            }
                            a = n.call(e, f)
                        } catch (r) {
                            a = [6, r], o = 0
                        } finally {
                            t = i = 0
                        }
                        if (5 & a[0]) throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, u])
                }
            }
        };
    Object.defineProperty(P, "__esModule", {
        value: !0
    }), P.WebpMachine = P.defaultDetectWebpImage = P.WebpMachineError = void 0;
    var R = function(e) {
        function r() {
            return null !== e && e.apply(this, arguments) || this
        }
        return M(r, e), r
    }(Error);
    P.WebpMachineError = R, P.defaultDetectWebpImage = function(e) {
        return /\.webp.*$/i.test(e.src)
    };
    var T = function() {
        function e(e) {
            var r = void 0 === e ? {} : e,
                n = r.webp,
                t = void 0 === n ? new S.Webp : n,
                i = r.webpSupport,
                a = void 0 === i ? o.detectWebpSupport() : i,
                f = r.detectWebpImage,
                u = void 0 === f ? P.defaultDetectWebpImage : f;
            this.busy = !1, this.cache = {}, this.webp = t, this.webpSupport = a, this.detectWebpImage = u
        }
        return e.prototype.decode = function(e) {
            return B(this, void 0, void 0, (function() {
                var r, n;
                return F(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            if (this.busy) throw new R("cannot decode when already busy");
                            this.busy = !0, t.label = 1;
                        case 1:
                            return t.trys.push([1, 3, , 4]), [4, new Promise((function(e) {
                                return requestAnimationFrame(e)
                            }))];
                        case 2:
                            return t.sent(), r = document.createElement("canvas"), this.webp.setCanvas(r), this.webp.webpToSdl(e, e.length), this.busy = !1, [2, r.toDataURL()];
                        case 3:
                            throw n = t.sent(), this.busy = !1, n.name = R.name, n.message = "failed to decode webp image: " + n.message, n;
                        case 4:
                            return [2]
                    }
                }))
            }))
        }, e.prototype.polyfillImage = function(e) {
            return B(this, void 0, void 0, (function() {
                var r, n, o, i, a;
                return F(this, (function(f) {
                    switch (f.label) {
                        case 0:
                            return [4, this.webpSupport];
                        case 1:
                            if (f.sent()) return [2];
                            if (r = e.src, !this.detectWebpImage(e)) return [3, 8];
                            if (this.cache[r]) return e.src = this.cache[r], [2];
                            f.label = 2;
                        case 2:
                            return f.trys.push([2, 7, , 8]), t.isBase64Url(r) ? (o = t.convertDataURIToBinary(r), [3, 5]) : [3, 3];
                        case 3:
                            return [4, s.loadBinaryData(r)];
                        case 4:
                            o = f.sent(), f.label = 5;
                        case 5:
                            return n = o, [4, this.decode(n)];
                        case 6:
                            return i = f.sent(), e.src = this.cache[r] = i, [3, 8];
                        case 7:
                            throw (a = f.sent()).name = R.name, a.message = 'failed to polyfill image "' + r + '": ' + a.message, a;
                        case 8:
                            return [2]
                    }
                }))
            }))
        }, e.prototype.polyfillDocument = function(e) {
            var r = (void 0 === e ? {} : e).document,
                n = void 0 === r ? window.document : r;
            return B(this, void 0, void 0, (function() {
                var e, r, t, o;
                return F(this, (function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, this.webpSupport];
                        case 1:
                            if (i.sent()) return [2, null];
                            e = 0, r = Array.from(n.querySelectorAll("img")), i.label = 2;
                        case 2:
                            if (!(e < r.length)) return [3, 7];
                            t = r[e], i.label = 3;
                        case 3:
                            return i.trys.push([3, 5, , 6]), [4, this.polyfillImage(t)];
                        case 4:
                            return i.sent(), [3, 6];
                        case 5:
                            throw (o = i.sent()).name = R.name, o.message = 'webp image polyfill failed for url "' + t.src + '": ' + o, o;
                        case 6:
                            return e++, [3, 2];
                        case 7:
                            return [2]
                    }
                }))
            }))
        }, e.prototype.clearCache = function() {
            this.cache = {}
        }, e
    }();
    P.WebpMachine = T;
    var O = {},
        z = this && this.__createBinding || (Object.create ? function(e, r, n, t) {
            void 0 === t && (t = n), Object.defineProperty(e, t, {
                enumerable: !0,
                get: function() {
                    return r[n]
                }
            })
        } : function(e, r, n, t) {
            void 0 === t && (t = n), e[t] = r[n]
        }),
        U = this && this.__exportStar || function(e, r) {
            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(r, n) || z(r, e, n)
        };
    Object.defineProperty(O, "__esModule", {
        value: !0
    }), U(t, O), U(o, O), U(f, O), U(s, O), U(P, O);
    Object.defineProperty({}, "__esModule", {
        value: !0
    }), window.webpHero = O
}();*/