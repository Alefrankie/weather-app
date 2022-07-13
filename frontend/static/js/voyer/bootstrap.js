/*!
 * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
    "use strict";

    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function e(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }

    function n() {
        return (n = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }).apply(this, arguments)
    }

    function i(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var o, r, s = function(t) {
            do {
                t += Math.floor(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        a = function(t) {
            var e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : null
            }
            return e
        },
        l = function(t) {
            var e = a(t);
            return e && document.querySelector(e) ? e : null
        },
        c = function(t) {
            var e = a(t);
            return e ? document.querySelector(e) : null
        },
        u = function(t) {
            if (!t) return 0;
            var e = window.getComputedStyle(t),
                n = e.transitionDuration,
                i = e.transitionDelay,
                o = Number.parseFloat(n),
                r = Number.parseFloat(i);
            return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(n) + Number.parseFloat(i))) : 0
        },
        f = function(t) {
            t.dispatchEvent(new Event("transitionend"))
        },
        d = function(t) {
            return (t[0] || t).nodeType
        },
        h = function(t, e) {
            var n = !1,
                i = e + 5;
            t.addEventListener("transitionend", (function e() {
                n = !0, t.removeEventListener("transitionend", e)
            })), setTimeout((function() {
                n || f(t)
            }), i)
        },
        p = function(t, e, n) {
            Object.keys(n).forEach((function(i) {
                var o, r = n[i],
                    s = e[i],
                    a = s && d(s) ? "element" : null == (o = s) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
            }))
        },
        g = function(t) {
            if (!t) return !1;
            if (t.style && t.parentNode && t.parentNode.style) {
                var e = getComputedStyle(t),
                    n = getComputedStyle(t.parentNode);
                return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility
            }
            return !1
        },
        m = function() {
            return function() {}
        },
        v = function(t) {
            return t.offsetHeight
        },
        _ = function() {
            var t = window.jQuery;
            return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
        },
        b = function(t) {
            "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", t) : t()
        },
        y = "rtl" === document.documentElement.dir,
        w = (o = {}, r = 1, {
            set: function(t, e, n) {
                void 0 === t.bsKey && (t.bsKey = {
                    key: e,
                    id: r
                }, r++), o[t.bsKey.id] = n
            },
            get: function(t, e) {
                if (!t || void 0 === t.bsKey) return null;
                var n = t.bsKey;
                return n.key === e ? o[n.id] : null
            },
            delete: function(t, e) {
                if (void 0 !== t.bsKey) {
                    var n = t.bsKey;
                    n.key === e && (delete o[n.id], delete t.bsKey)
                }
            }
        }),
        E = function(t, e, n) {
            w.set(t, e, n)
        },
        T = function(t, e) {
            return w.get(t, e)
        },
        k = /[^.]*(?=\..*)\.|.*/,
        O = /\..*/,
        L = /::\d+$/,
        A = {},
        C = 1,
        D = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        x = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function S(t, e) {
        return e && e + "::" + C++ || t.uidEvent || C++
    }

    function j(t) {
        var e = S(t);
        return t.uidEvent = e, A[e] = A[e] || {}, A[e]
    }

    function N(t, e, n) {
        void 0 === n && (n = null);
        for (var i = Object.keys(t), o = 0, r = i.length; o < r; o++) {
            var s = t[i[o]];
            if (s.originalHandler === e && s.delegationSelector === n) return s
        }
        return null
    }

    function I(t, e, n) {
        var i = "string" == typeof e,
            o = i ? n : e,
            r = t.replace(O, ""),
            s = D[r];
        return s && (r = s), x.has(r) || (r = t), [i, o, r]
    }

    function P(t, e, n, i, o) {
        if ("string" == typeof e && t) {
            n || (n = i, i = null);
            var r = I(e, n, i),
                s = r[0],
                a = r[1],
                l = r[2],
                c = j(t),
                u = c[l] || (c[l] = {}),
                f = N(u, a, s ? n : null);
            if (f) f.oneOff = f.oneOff && o;
            else {
                var d = S(a, e.replace(k, "")),
                    h = s ? function(t, e, n) {
                        return function i(o) {
                            for (var r = t.querySelectorAll(e), s = o.target; s && s !== this; s = s.parentNode)
                                for (var a = r.length; a--;)
                                    if (r[a] === s) return o.delegateTarget = s, i.oneOff && B.off(t, o.type, n), n.apply(s, [o]);
                            return null
                        }
                    }(t, n, i) : function(t, e) {
                        return function n(i) {
                            return i.delegateTarget = t, n.oneOff && B.off(t, i.type, e), e.apply(t, [i])
                        }
                    }(t, n);
                h.delegationSelector = s ? n : null, h.originalHandler = a, h.oneOff = o, h.uidEvent = d, u[d] = h, t.addEventListener(l, h, s)
            }
        }
    }

    function M(t, e, n, i, o) {
        var r = N(e[n], i, o);
        r && (t.removeEventListener(n, r, Boolean(o)), delete e[n][r.uidEvent])
    }
    var B = {
            on: function(t, e, n, i) {
                P(t, e, n, i, !1)
            },
            one: function(t, e, n, i) {
                P(t, e, n, i, !0)
            },
            off: function(t, e, n, i) {
                if ("string" == typeof e && t) {
                    var o = I(e, n, i),
                        r = o[0],
                        s = o[1],
                        a = o[2],
                        l = a !== e,
                        c = j(t),
                        u = e.startsWith(".");
                    if (void 0 === s) {
                        u && Object.keys(c).forEach((function(n) {
                            ! function(t, e, n, i) {
                                var o = e[n] || {};
                                Object.keys(o).forEach((function(r) {
                                    if (r.includes(i)) {
                                        var s = o[r];
                                        M(t, e, n, s.originalHandler, s.delegationSelector)
                                    }
                                }))
                            }(t, c, n, e.slice(1))
                        }));
                        var f = c[a] || {};
                        Object.keys(f).forEach((function(n) {
                            var i = n.replace(L, "");
                            if (!l || e.includes(i)) {
                                var o = f[n];
                                M(t, c, a, o.originalHandler, o.delegationSelector)
                            }
                        }))
                    } else {
                        if (!c || !c[a]) return;
                        M(t, c, a, s, r ? n : null)
                    }
                }
            },
            trigger: function(t, e, n) {
                if ("string" != typeof e || !t) return null;
                var i, o = _(),
                    r = e.replace(O, ""),
                    s = e !== r,
                    a = x.has(r),
                    l = !0,
                    c = !0,
                    u = !1,
                    f = null;
                return s && o && (i = o.Event(e, n), o(t).trigger(i), l = !i.isPropagationStopped(), c = !i.isImmediatePropagationStopped(), u = i.isDefaultPrevented()), a ? (f = document.createEvent("HTMLEvents")).initEvent(r, l, !0) : f = new CustomEvent(e, {
                    bubbles: l,
                    cancelable: !0
                }), void 0 !== n && Object.keys(n).forEach((function(t) {
                    Object.defineProperty(f, t, {
                        get: function() {
                            return n[t]
                        }
                    })
                })), u && f.preventDefault(), c && t.dispatchEvent(f), f.defaultPrevented && void 0 !== i && i.preventDefault(), f
            }
        },
        H = function() {
            function t(t) {
                t && (this._element = t, E(t, this.constructor.DATA_KEY, this))
            }
            return t.prototype.dispose = function() {
                (function(t, e) {
                    w.delete(t, e)
                })(this._element, this.constructor.DATA_KEY), this._element = null
            }, t.getInstance = function(t) {
                return T(t, this.DATA_KEY)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "5.0.0-beta1"
                }
            }]), t
        }(),
        R = "alert",
        W = function(t) {
            function n() {
                return t.apply(this, arguments) || this
            }
            i(n, t);
            var o = n.prototype;
            return o.close = function(t) {
                var e = t ? this._getRootElement(t) : this._element,
                    n = this._triggerCloseEvent(e);
                null === n || n.defaultPrevented || this._removeElement(e)
            }, o._getRootElement = function(t) {
                return c(t) || t.closest(".alert")
            }, o._triggerCloseEvent = function(t) {
                return B.trigger(t, "close.bs.alert")
            }, o._removeElement = function(t) {
                var e = this;
                if (t.classList.remove("show"), t.classList.contains("fade")) {
                    var n = u(t);
                    B.one(t, "transitionend", (function() {
                        return e._destroyElement(t)
                    })), h(t, n)
                } else this._destroyElement(t)
            }, o._destroyElement = function(t) {
                t.parentNode && t.parentNode.removeChild(t), B.trigger(t, "closed.bs.alert")
            }, n.jQueryInterface = function(t) {
                return this.each((function() {
                    var e = T(this, "bs.alert");
                    e || (e = new n(this)), "close" === t && e[t](this)
                }))
            }, n.handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, e(n, null, [{
                key: "DATA_KEY",
                get: function() {
                    return "bs.alert"
                }
            }]), n
        }(H);
    B.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', W.handleDismiss(new W)), b((function() {
        var t = _();
        if (t) {
            var e = t.fn[R];
            t.fn[R] = W.jQueryInterface, t.fn[R].Constructor = W, t.fn[R].noConflict = function() {
                return t.fn[R] = e, W.jQueryInterface
            }
        }
    }));
    var K = function(t) {
        function n() {
            return t.apply(this, arguments) || this
        }
        return i(n, t), n.prototype.toggle = function() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }, n.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.button");
                e || (e = new n(this)), "toggle" === t && e[t]()
            }))
        }, e(n, null, [{
            key: "DATA_KEY",
            get: function() {
                return "bs.button"
            }
        }]), n
    }(H);

    function Q(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function U(t) {
        return t.replace(/[A-Z]/g, (function(t) {
            return "-" + t.toLowerCase()
        }))
    }
    B.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (function(t) {
        t.preventDefault();
        var e = t.target.closest('[data-bs-toggle="button"]'),
            n = T(e, "bs.button");
        n || (n = new K(e)), n.toggle()
    })), b((function() {
        var t = _();
        if (t) {
            var e = t.fn.button;
            t.fn.button = K.jQueryInterface, t.fn.button.Constructor = K, t.fn.button.noConflict = function() {
                return t.fn.button = e, K.jQueryInterface
            }
        }
    }));
    var F = {
            setDataAttribute: function(t, e, n) {
                t.setAttribute("data-bs-" + U(e), n)
            },
            removeDataAttribute: function(t, e) {
                t.removeAttribute("data-bs-" + U(e))
            },
            getDataAttributes: function(t) {
                if (!t) return {};
                var e = {};
                return Object.keys(t.dataset).filter((function(t) {
                    return t.startsWith("bs")
                })).forEach((function(n) {
                    var i = n.replace(/^bs/, "");
                    i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = Q(t.dataset[n])
                })), e
            },
            getDataAttribute: function(t, e) {
                return Q(t.getAttribute("data-bs-" + U(e)))
            },
            offset: function(t) {
                var e = t.getBoundingClientRect();
                return {
                    top: e.top + document.body.scrollTop,
                    left: e.left + document.body.scrollLeft
                }
            },
            position: function(t) {
                return {
                    top: t.offsetTop,
                    left: t.offsetLeft
                }
            }
        },
        Y = {
            matches: function(t, e) {
                return t.matches(e)
            },
            find: function(t, e) {
                var n;
                return void 0 === e && (e = document.documentElement), (n = []).concat.apply(n, Element.prototype.querySelectorAll.call(e, t))
            },
            findOne: function(t, e) {
                return void 0 === e && (e = document.documentElement), Element.prototype.querySelector.call(e, t)
            },
            children: function(t, e) {
                var n;
                return (n = []).concat.apply(n, t.children).filter((function(t) {
                    return t.matches(e)
                }))
            },
            parents: function(t, e) {
                for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) this.matches(i, e) && n.push(i), i = i.parentNode;
                return n
            },
            prev: function(t, e) {
                for (var n = t.previousElementSibling; n;) {
                    if (n.matches(e)) return [n];
                    n = n.previousElementSibling
                }
                return []
            },
            next: function(t, e) {
                for (var n = t.nextElementSibling; n;) {
                    if (this.matches(n, e)) return [n];
                    n = n.nextElementSibling
                }
                return []
            }
        },
        q = "carousel",
        z = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        V = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        X = {
            TOUCH: "touch",
            PEN: "pen"
        },
        $ = function(t) {
            function o(e, n) {
                var i;
                return (i = t.call(this, e) || this)._items = null, i._interval = null, i._activeElement = null, i._isPaused = !1, i._isSliding = !1, i.touchTimeout = null, i.touchStartX = 0, i.touchDeltaX = 0, i._config = i._getConfig(n), i._indicatorsElement = Y.findOne(".carousel-indicators", i._element), i._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, i._pointerEvent = Boolean(window.PointerEvent), i._addEventListeners(), i
            }
            i(o, t);
            var r = o.prototype;
            return r.next = function() {
                this._isSliding || this._slide("next")
            }, r.nextWhenVisible = function() {
                !document.hidden && g(this._element) && this.next()
            }, r.prev = function() {
                this._isSliding || this._slide("prev")
            }, r.pause = function(t) {
                t || (this._isPaused = !0), Y.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (f(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, r.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, r.to = function(t) {
                var e = this;
                this._activeElement = Y.findOne(".active.carousel-item", this._element);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) B.one(this._element, "slid.bs.carousel", (function() {
                        return e.to(t)
                    }));
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = t > n ? "next" : "prev";
                        this._slide(i, this._items[t])
                    }
            }, r.dispose = function() {
                t.prototype.dispose.call(this), B.off(this._element, ".bs.carousel"), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, r._getConfig = function(t) {
                return t = n({}, z, t), p(q, t, V), t
            }, r._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
                }
            }, r._addEventListeners = function() {
                var t = this;
                this._config.keyboard && B.on(this._element, "keydown.bs.carousel", (function(e) {
                    return t._keydown(e)
                })), "hover" === this._config.pause && (B.on(this._element, "mouseenter.bs.carousel", (function(e) {
                    return t.pause(e)
                })), B.on(this._element, "mouseleave.bs.carousel", (function(e) {
                    return t.cycle(e)
                }))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
            }, r._addTouchEventListeners = function() {
                var t = this,
                    e = function(e) {
                        t._pointerEvent && X[e.pointerType.toUpperCase()] ? t.touchStartX = e.clientX : t._pointerEvent || (t.touchStartX = e.touches[0].clientX)
                    },
                    n = function(e) {
                        t._pointerEvent && X[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function(e) {
                            return t.cycle(e)
                        }), 500 + t._config.interval))
                    };
                Y.find(".carousel-item img", this._element).forEach((function(t) {
                    B.on(t, "dragstart.bs.carousel", (function(t) {
                        return t.preventDefault()
                    }))
                })), this._pointerEvent ? (B.on(this._element, "pointerdown.bs.carousel", (function(t) {
                    return e(t)
                })), B.on(this._element, "pointerup.bs.carousel", (function(t) {
                    return n(t)
                })), this._element.classList.add("pointer-event")) : (B.on(this._element, "touchstart.bs.carousel", (function(t) {
                    return e(t)
                })), B.on(this._element, "touchmove.bs.carousel", (function(e) {
                    return function(e) {
                        e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX
                    }(e)
                })), B.on(this._element, "touchend.bs.carousel", (function(t) {
                    return n(t)
                })))
            }, r._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.key) {
                    case "ArrowLeft":
                        t.preventDefault(), this.prev();
                        break;
                    case "ArrowRight":
                        t.preventDefault(), this.next()
                }
            }, r._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? Y.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
            }, r._getItemByDirection = function(t, e) {
                var n = "next" === t,
                    i = "prev" === t,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, r._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(Y.findOne(".active.carousel-item", this._element));
                return B.trigger(this._element, "slide.bs.carousel", {
                    relatedTarget: t,
                    direction: e,
                    from: i,
                    to: n
                })
            }, r._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    for (var e = Y.find(".active", this._indicatorsElement), n = 0; n < e.length; n++) e[n].classList.remove("active");
                    var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    i && i.classList.add("active")
                }
            }, r._updateInterval = function() {
                var t = this._activeElement || Y.findOne(".active.carousel-item", this._element);
                if (t) {
                    var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                    e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
                }
            }, r._slide = function(t, e) {
                var n, i, o, r = this,
                    s = Y.findOne(".active.carousel-item", this._element),
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    f = Boolean(this._interval);
                if ("next" === t ? (n = "carousel-item-start", i = "carousel-item-next", o = "left") : (n = "carousel-item-end", i = "carousel-item-prev", o = "right"), l && l.classList.contains("active")) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).defaultPrevented && s && l) {
                    if (this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(l), this._activeElement = l, this._element.classList.contains("slide")) {
                        l.classList.add(i), v(l), s.classList.add(n), l.classList.add(n);
                        var d = u(s);
                        B.one(s, "transitionend", (function() {
                            l.classList.remove(n, i), l.classList.add("active"), s.classList.remove("active", i, n), r._isSliding = !1, setTimeout((function() {
                                B.trigger(r._element, "slid.bs.carousel", {
                                    relatedTarget: l,
                                    direction: o,
                                    from: a,
                                    to: c
                                })
                            }), 0)
                        })), h(s, d)
                    } else s.classList.remove("active"), l.classList.add("active"), this._isSliding = !1, B.trigger(this._element, "slid.bs.carousel", {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                    });
                    f && this.cycle()
                }
            }, o.carouselInterface = function(t, e) {
                var i = T(t, "bs.carousel"),
                    r = n({}, z, F.getDataAttributes(t));
                "object" == typeof e && (r = n({}, r, e));
                var s = "string" == typeof e ? e : r.slide;
                if (i || (i = new o(t, r)), "number" == typeof e) i.to(e);
                else if ("string" == typeof s) {
                    if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                    i[s]()
                } else r.interval && r.ride && (i.pause(), i.cycle())
            }, o.jQueryInterface = function(t) {
                return this.each((function() {
                    o.carouselInterface(this, t)
                }))
            }, o.dataApiClickHandler = function(t) {
                var e = c(this);
                if (e && e.classList.contains("carousel")) {
                    var i = n({}, F.getDataAttributes(e), F.getDataAttributes(this)),
                        r = this.getAttribute("data-bs-slide-to");
                    r && (i.interval = !1), o.carouselInterface(e, i), r && T(e, "bs.carousel").to(r), t.preventDefault()
                }
            }, e(o, null, [{
                key: "Default",
                get: function() {
                    return z
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.carousel"
                }
            }]), o
        }(H);
    B.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", $.dataApiClickHandler), B.on(window, "load.bs.carousel.data-api", (function() {
        for (var t = Y.find('[data-bs-ride="carousel"]'), e = 0, n = t.length; e < n; e++) $.carouselInterface(t[e], T(t[e], "bs.carousel"))
    })), b((function() {
        var t = _();
        if (t) {
            var e = t.fn[q];
            t.fn[q] = $.jQueryInterface, t.fn[q].Constructor = $, t.fn[q].noConflict = function() {
                return t.fn[q] = e, $.jQueryInterface
            }
        }
    }));
    var G = "collapse",
        Z = {
            toggle: !0,
            parent: ""
        },
        J = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        tt = function(t) {
            function o(e, n) {
                var i;
                (i = t.call(this, e) || this)._isTransitioning = !1, i._config = i._getConfig(n), i._triggerArray = Y.find('[data-bs-toggle="collapse"][href="#' + e.id + '"],[data-bs-toggle="collapse"][data-bs-target="#' + e.id + '"]');
                for (var o = Y.find('[data-bs-toggle="collapse"]'), r = 0, s = o.length; r < s; r++) {
                    var a = o[r],
                        c = l(a),
                        u = Y.find(c).filter((function(t) {
                            return t === e
                        }));
                    null !== c && u.length && (i._selector = c, i._triggerArray.push(a))
                }
                return i._parent = i._config.parent ? i._getParent() : null, i._config.parent || i._addAriaAndCollapsedClass(i._element, i._triggerArray), i._config.toggle && i.toggle(), i
            }
            i(o, t);
            var r = o.prototype;
            return r.toggle = function() {
                this._element.classList.contains("show") ? this.hide() : this.show()
            }, r.show = function() {
                var t = this;
                if (!this._isTransitioning && !this._element.classList.contains("show")) {
                    var e, n;
                    this._parent && 0 === (e = Y.find(".show, .collapsing", this._parent).filter((function(e) {
                        return "string" == typeof t._config.parent ? e.getAttribute("data-bs-parent") === t._config.parent : e.classList.contains("collapse")
                    }))).length && (e = null);
                    var i = Y.findOne(this._selector);
                    if (e) {
                        var r = e.find((function(t) {
                            return i !== t
                        }));
                        if ((n = r ? T(r, "bs.collapse") : null) && n._isTransitioning) return
                    }
                    if (!B.trigger(this._element, "show.bs.collapse").defaultPrevented) {
                        e && e.forEach((function(t) {
                            i !== t && o.collapseInterface(t, "hide"), n || E(t, "bs.collapse", null)
                        }));
                        var s = this._getDimension();
                        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach((function(t) {
                            t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
                        })), this.setTransitioning(!0);
                        var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            l = u(this._element);
                        B.one(this._element, "transitionend", (function() {
                            t._element.classList.remove("collapsing"), t._element.classList.add("collapse", "show"), t._element.style[s] = "", t.setTransitioning(!1), B.trigger(t._element, "shown.bs.collapse")
                        })), h(this._element, l), this._element.style[s] = this._element[a] + "px"
                    }
                }
            }, r.hide = function() {
                var t = this;
                if (!this._isTransitioning && this._element.classList.contains("show") && !B.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
                    var e = this._getDimension();
                    this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", v(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
                    var n = this._triggerArray.length;
                    if (n > 0)
                        for (var i = 0; i < n; i++) {
                            var o = this._triggerArray[i],
                                r = c(o);
                            r && !r.classList.contains("show") && (o.classList.add("collapsed"), o.setAttribute("aria-expanded", !1))
                        }
                    this.setTransitioning(!0), this._element.style[e] = "";
                    var s = u(this._element);
                    B.one(this._element, "transitionend", (function() {
                        t.setTransitioning(!1), t._element.classList.remove("collapsing"), t._element.classList.add("collapse"), B.trigger(t._element, "hidden.bs.collapse")
                    })), h(this._element, s)
                }
            }, r.setTransitioning = function(t) {
                this._isTransitioning = t
            }, r.dispose = function() {
                t.prototype.dispose.call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null
            }, r._getConfig = function(t) {
                return (t = n({}, Z, t)).toggle = Boolean(t.toggle), p(G, t, J), t
            }, r._getDimension = function() {
                return this._element.classList.contains("width") ? "width" : "height"
            }, r._getParent = function() {
                var t = this,
                    e = this._config.parent;
                d(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = Y.findOne(e);
                var n = '[data-bs-toggle="collapse"][data-bs-parent="' + e + '"]';
                return Y.find(n, e).forEach((function(e) {
                    var n = c(e);
                    t._addAriaAndCollapsedClass(n, [e])
                })), e
            }, r._addAriaAndCollapsedClass = function(t, e) {
                if (t && e.length) {
                    var n = t.classList.contains("show");
                    e.forEach((function(t) {
                        n ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", n)
                    }))
                }
            }, o.collapseInterface = function(t, e) {
                var i = T(t, "bs.collapse"),
                    r = n({}, Z, F.getDataAttributes(t), "object" == typeof e && e ? e : {});
                if (!i && r.toggle && "string" == typeof e && /show|hide/.test(e) && (r.toggle = !1), i || (i = new o(t, r)), "string" == typeof e) {
                    if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                    i[e]()
                }
            }, o.jQueryInterface = function(t) {
                return this.each((function() {
                    o.collapseInterface(this, t)
                }))
            }, e(o, null, [{
                key: "Default",
                get: function() {
                    return Z
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.collapse"
                }
            }]), o
        }(H);
    B.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function(t) {
        "A" === t.target.tagName && t.preventDefault();
        var e = F.getDataAttributes(this),
            n = l(this);
        Y.find(n).forEach((function(t) {
            var n, i = T(t, "bs.collapse");
            i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, tt.collapseInterface(t, n)
        }))
    })), b((function() {
        var t = _();
        if (t) {
            var e = t.fn[G];
            t.fn[G] = tt.jQueryInterface, t.fn[G].Constructor = tt, t.fn[G].noConflict = function() {
                return t.fn[G] = e, tt.jQueryInterface
            }
        }
    }));
    var et = "top",
        nt = "bottom",
        it = "right",
        ot = "left",
        rt = [et, nt, it, ot],
        st = rt.reduce((function(t, e) {
            return t.concat([e + "-start", e + "-end"])
        }), []),
        at = [].concat(rt, ["auto"]).reduce((function(t, e) {
            return t.concat([e, e + "-start", e + "-end"])
        }), []),
        lt = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

    function ct(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function ut(t) {
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function ft(t) {
        return t instanceof ut(t).Element || t instanceof Element
    }

    function dt(t) {
        return t instanceof ut(t).HTMLElement || t instanceof HTMLElement
    }
    var ht = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var n = e.styles[t] || {},
                    i = e.attributes[t] || {},
                    o = e.elements[t];
                dt(o) && ct(o) && (Object.assign(o.style, n), Object.keys(i).forEach((function(t) {
                    var e = i[t];
                    !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e)
                })))
            }))
        },
        effect: function(t) {
            var e = t.state,
                n = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(e.elements.popper.style, n.popper), e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
                function() {
                    Object.keys(e.elements).forEach((function(t) {
                        var i = e.elements[t],
                            o = e.attributes[t] || {},
                            r = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function(t, e) {
                                return t[e] = "", t
                            }), {});
                        dt(i) && ct(i) && (Object.assign(i.style, r), Object.keys(o).forEach((function(t) {
                            i.removeAttribute(t)
                        })))
                    }))
                }
        },
        requires: ["computeStyles"]
    };

    function pt(t) {
        return t.split("-")[0]
    }

    function gt(t) {
        return {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: t.offsetWidth,
            height: t.offsetHeight
        }
    }

    function mt(t, e) {
        var n, i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && ((n = i) instanceof ut(n).ShadowRoot || n instanceof ShadowRoot)) {
            var o = e;
            do {
                if (o && t.isSameNode(o)) return !0;
                o = o.parentNode || o.host
            } while (o)
        }
        return !1
    }

    function vt(t) {
        return ut(t).getComputedStyle(t)
    }

    function _t(t) {
        return ["table", "td", "th"].indexOf(ct(t)) >= 0
    }

    function bt(t) {
        return ((ft(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function yt(t) {
        return "html" === ct(t) ? t : t.assignedSlot || t.parentNode || t.host || bt(t)
    }

    function wt(t) {
        if (!dt(t) || "fixed" === vt(t).position) return null;
        var e = t.offsetParent;
        if (e) {
            var n = bt(e);
            if ("body" === ct(e) && "static" === vt(e).position && "static" !== vt(n).position) return n
        }
        return e
    }

    function Et(t) {
        for (var e = ut(t), n = wt(t); n && _t(n) && "static" === vt(n).position;) n = wt(n);
        return n && "body" === ct(n) && "static" === vt(n).position ? e : n || function(t) {
            for (var e = yt(t); dt(e) && ["html", "body"].indexOf(ct(e)) < 0;) {
                var n = vt(e);
                if ("none" !== n.transform || "none" !== n.perspective || n.willChange && "auto" !== n.willChange) return e;
                e = e.parentNode
            }
            return null
        }(t) || e
    }

    function Tt(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    function kt(t, e, n) {
        return Math.max(t, Math.min(e, n))
    }

    function Ot(t) {
        return Object.assign(Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }), t)
    }

    function Lt(t, e) {
        return e.reduce((function(e, n) {
            return e[n] = t, e
        }), {})
    }
    var At = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(t) {
                var e, n = t.state,
                    i = t.name,
                    o = n.elements.arrow,
                    r = n.modifiersData.popperOffsets,
                    s = pt(n.placement),
                    a = Tt(s),
                    l = [ot, it].indexOf(s) >= 0 ? "height" : "width";
                if (o && r) {
                    var c = n.modifiersData[i + "#persistent"].padding,
                        u = gt(o),
                        f = "y" === a ? et : ot,
                        d = "y" === a ? nt : it,
                        h = n.rects.reference[l] + n.rects.reference[a] - r[a] - n.rects.popper[l],
                        p = r[a] - n.rects.reference[a],
                        g = Et(o),
                        m = g ? "y" === a ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                        v = h / 2 - p / 2,
                        _ = c[f],
                        b = m - u[l] - c[d],
                        y = m / 2 - u[l] / 2 + v,
                        w = kt(_, y, b),
                        E = a;
                    n.modifiersData[i] = ((e = {})[E] = w, e.centerOffset = w - y, e)
                }
            },
            effect: function(t) {
                var e = t.state,
                    n = t.options,
                    i = t.name,
                    o = n.element,
                    r = void 0 === o ? "[data-popper-arrow]" : o,
                    s = n.padding,
                    a = void 0 === s ? 0 : s;
                null != r && ("string" != typeof r || (r = e.elements.popper.querySelector(r))) && mt(e.elements.popper, r) && (e.elements.arrow = r, e.modifiersData[i + "#persistent"] = {
                    padding: Ot("number" != typeof a ? a : Lt(a, rt))
                })
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        },
        Ct = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };

    function Dt(t) {
        var e, n = t.popper,
            i = t.popperRect,
            o = t.placement,
            r = t.offsets,
            s = t.position,
            a = t.gpuAcceleration,
            l = t.adaptive,
            c = function(t) {
                var e = t.x,
                    n = t.y,
                    i = window.devicePixelRatio || 1;
                return {
                    x: Math.round(e * i) / i || 0,
                    y: Math.round(n * i) / i || 0
                }
            }(r),
            u = c.x,
            f = c.y,
            d = r.hasOwnProperty("x"),
            h = r.hasOwnProperty("y"),
            p = ot,
            g = et,
            m = window;
        if (l) {
            var v = Et(n);
            v === ut(n) && (v = bt(n)), o === et && (g = nt, f -= v.clientHeight - i.height, f *= a ? 1 : -1), o === ot && (p = it, u -= v.clientWidth - i.width, u *= a ? 1 : -1)
        }
        var _, b = Object.assign({
            position: s
        }, l && Ct);
        return a ? Object.assign(Object.assign({}, b), {}, ((_ = {})[g] = h ? "0" : "", _[p] = d ? "0" : "", _.transform = (m.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + f + "px)" : "translate3d(" + u + "px, " + f + "px, 0)", _)) : Object.assign(Object.assign({}, b), {}, ((e = {})[g] = h ? f + "px" : "", e[p] = d ? u + "px" : "", e.transform = "", e))
    }
    var xt = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(t) {
                var e = t.state,
                    n = t.options,
                    i = n.gpuAcceleration,
                    o = void 0 === i || i,
                    r = n.adaptive,
                    s = void 0 === r || r,
                    a = {
                        placement: pt(e.placement),
                        popper: e.elements.popper,
                        popperRect: e.rects.popper,
                        gpuAcceleration: o
                    };
                null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), Dt(Object.assign(Object.assign({}, a), {}, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: s
                })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), Dt(Object.assign(Object.assign({}, a), {}, {
                    offsets: e.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1
                })))), e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
                    "data-popper-placement": e.placement
                })
            },
            data: {}
        },
        St = {
            passive: !0
        },
        jt = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(t) {
                var e = t.state,
                    n = t.instance,
                    i = t.options,
                    o = i.scroll,
                    r = void 0 === o || o,
                    s = i.resize,
                    a = void 0 === s || s,
                    l = ut(e.elements.popper),
                    c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                return r && c.forEach((function(t) {
                        t.addEventListener("scroll", n.update, St)
                    })), a && l.addEventListener("resize", n.update, St),
                    function() {
                        r && c.forEach((function(t) {
                            t.removeEventListener("scroll", n.update, St)
                        })), a && l.removeEventListener("resize", n.update, St)
                    }
            },
            data: {}
        },
        Nt = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

    function It(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return Nt[t]
        }))
    }
    var Pt = {
        start: "end",
        end: "start"
    };

    function Mt(t) {
        return t.replace(/start|end/g, (function(t) {
            return Pt[t]
        }))
    }

    function Bt(t) {
        var e = t.getBoundingClientRect();
        return {
            width: e.width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        }
    }

    function Ht(t) {
        var e = ut(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }

    function Rt(t) {
        return Bt(bt(t)).left + Ht(t).scrollLeft
    }

    function Wt(t) {
        var e = vt(t),
            n = e.overflow,
            i = e.overflowX,
            o = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + i)
    }

    function Kt(t, e) {
        void 0 === e && (e = []);
        var n = function t(e) {
                return ["html", "body", "#document"].indexOf(ct(e)) >= 0 ? e.ownerDocument.body : dt(e) && Wt(e) ? e : t(yt(e))
            }(t),
            i = "body" === ct(n),
            o = ut(n),
            r = i ? [o].concat(o.visualViewport || [], Wt(n) ? n : []) : n,
            s = e.concat(r);
        return i ? s : s.concat(Kt(yt(r)))
    }

    function Qt(t) {
        return Object.assign(Object.assign({}, t), {}, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function Ut(t, e) {
        return "viewport" === e ? Qt(function(t) {
            var e = ut(t),
                n = bt(t),
                i = e.visualViewport,
                o = n.clientWidth,
                r = n.clientHeight,
                s = 0,
                a = 0;
            return i && (o = i.width, r = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = i.offsetLeft, a = i.offsetTop)), {
                width: o,
                height: r,
                x: s + Rt(t),
                y: a
            }
        }(t)) : dt(e) ? function(t) {
            var e = Bt(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
        }(e) : Qt(function(t) {
            var e = bt(t),
                n = Ht(t),
                i = t.ownerDocument.body,
                o = Math.max(e.scrollWidth, e.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
                r = Math.max(e.scrollHeight, e.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
                s = -n.scrollLeft + Rt(t),
                a = -n.scrollTop;
            return "rtl" === vt(i || e).direction && (s += Math.max(e.clientWidth, i ? i.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: s,
                y: a
            }
        }(bt(t)))
    }

    function Ft(t) {
        return t.split("-")[1]
    }

    function Yt(t) {
        var e, n = t.reference,
            i = t.element,
            o = t.placement,
            r = o ? pt(o) : null,
            s = o ? Ft(o) : null,
            a = n.x + n.width / 2 - i.width / 2,
            l = n.y + n.height / 2 - i.height / 2;
        switch (r) {
            case et:
                e = {
                    x: a,
                    y: n.y - i.height
                };
                break;
            case nt:
                e = {
                    x: a,
                    y: n.y + n.height
                };
                break;
            case it:
                e = {
                    x: n.x + n.width,
                    y: l
                };
                break;
            case ot:
                e = {
                    x: n.x - i.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: n.x,
                    y: n.y
                }
        }
        var c = r ? Tt(r) : null;
        if (null != c) {
            var u = "y" === c ? "height" : "width";
            switch (s) {
                case "start":
                    e[c] = Math.floor(e[c]) - Math.floor(n[u] / 2 - i[u] / 2);
                    break;
                case "end":
                    e[c] = Math.floor(e[c]) + Math.ceil(n[u] / 2 - i[u] / 2)
            }
        }
        return e
    }

    function qt(t, e) {
        void 0 === e && (e = {});
        var n = e,
            i = n.placement,
            o = void 0 === i ? t.placement : i,
            r = n.boundary,
            s = void 0 === r ? "clippingParents" : r,
            a = n.rootBoundary,
            l = void 0 === a ? "viewport" : a,
            c = n.elementContext,
            u = void 0 === c ? "popper" : c,
            f = n.altBoundary,
            d = void 0 !== f && f,
            h = n.padding,
            p = void 0 === h ? 0 : h,
            g = Ot("number" != typeof p ? p : Lt(p, rt)),
            m = "popper" === u ? "reference" : "popper",
            v = t.elements.reference,
            _ = t.rects.popper,
            b = t.elements[d ? m : u],
            y = function(t, e, n) {
                var i = "clippingParents" === e ? function(t) {
                        var e = Kt(yt(t)),
                            n = ["absolute", "fixed"].indexOf(vt(t).position) >= 0 && dt(t) ? Et(t) : t;
                        return ft(n) ? e.filter((function(t) {
                            return ft(t) && mt(t, n) && "body" !== ct(t)
                        })) : []
                    }(t) : [].concat(e),
                    o = [].concat(i, [n]),
                    r = o[0],
                    s = o.reduce((function(e, n) {
                        var i = Ut(t, n);
                        return e.top = Math.max(i.top, e.top), e.right = Math.min(i.right, e.right), e.bottom = Math.min(i.bottom, e.bottom), e.left = Math.max(i.left, e.left), e
                    }), Ut(t, r));
                return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
            }(ft(b) ? b : b.contextElement || bt(t.elements.popper), s, l),
            w = Bt(v),
            E = Yt({
                reference: w,
                element: _,
                strategy: "absolute",
                placement: o
            }),
            T = Qt(Object.assign(Object.assign({}, _), E)),
            k = "popper" === u ? T : w,
            O = {
                top: y.top - k.top + g.top,
                bottom: k.bottom - y.bottom + g.bottom,
                left: y.left - k.left + g.left,
                right: k.right - y.right + g.right
            },
            L = t.modifiersData.offset;
        if ("popper" === u && L) {
            var A = L[o];
            Object.keys(O).forEach((function(t) {
                var e = [it, nt].indexOf(t) >= 0 ? 1 : -1,
                    n = [et, nt].indexOf(t) >= 0 ? "y" : "x";
                O[t] += A[n] * e
            }))
        }
        return O
    }
    var zt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state,
                n = t.options,
                i = t.name;
            if (!e.modifiersData[i]._skip) {
                for (var o = n.mainAxis, r = void 0 === o || o, s = n.altAxis, a = void 0 === s || s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, d = n.altBoundary, h = n.flipVariations, p = void 0 === h || h, g = n.allowedAutoPlacements, m = e.options.placement, v = pt(m), _ = l || (v !== m && p ? function(t) {
                        if ("auto" === pt(t)) return [];
                        var e = It(t);
                        return [Mt(t), e, Mt(e)]
                    }(m) : [It(m)]), b = [m].concat(_).reduce((function(t, n) {
                        return t.concat("auto" === pt(n) ? function(t, e) {
                            void 0 === e && (e = {});
                            var n = e,
                                i = n.placement,
                                o = n.boundary,
                                r = n.rootBoundary,
                                s = n.padding,
                                a = n.flipVariations,
                                l = n.allowedAutoPlacements,
                                c = void 0 === l ? at : l,
                                u = Ft(i),
                                f = u ? a ? st : st.filter((function(t) {
                                    return Ft(t) === u
                                })) : rt,
                                d = f.filter((function(t) {
                                    return c.indexOf(t) >= 0
                                }));
                            0 === d.length && (d = f);
                            var h = d.reduce((function(e, n) {
                                return e[n] = qt(t, {
                                    placement: n,
                                    boundary: o,
                                    rootBoundary: r,
                                    padding: s
                                })[pt(n)], e
                            }), {});
                            return Object.keys(h).sort((function(t, e) {
                                return h[t] - h[e]
                            }))
                        }(e, {
                            placement: n,
                            boundary: u,
                            rootBoundary: f,
                            padding: c,
                            flipVariations: p,
                            allowedAutoPlacements: g
                        }) : n)
                    }), []), y = e.rects.reference, w = e.rects.popper, E = new Map, T = !0, k = b[0], O = 0; O < b.length; O++) {
                    var L = b[O],
                        A = pt(L),
                        C = "start" === Ft(L),
                        D = [et, nt].indexOf(A) >= 0,
                        x = D ? "width" : "height",
                        S = qt(e, {
                            placement: L,
                            boundary: u,
                            rootBoundary: f,
                            altBoundary: d,
                            padding: c
                        }),
                        j = D ? C ? it : ot : C ? nt : et;
                    y[x] > w[x] && (j = It(j));
                    var N = It(j),
                        I = [];
                    if (r && I.push(S[A] <= 0), a && I.push(S[j] <= 0, S[N] <= 0), I.every((function(t) {
                            return t
                        }))) {
                        k = L, T = !1;
                        break
                    }
                    E.set(L, I)
                }
                if (T)
                    for (var P = function(t) {
                            var e = b.find((function(e) {
                                var n = E.get(e);
                                if (n) return n.slice(0, t).every((function(t) {
                                    return t
                                }))
                            }));
                            if (e) return k = e, "break"
                        }, M = p ? 3 : 1; M > 0 && "break" !== P(M); M--);
                e.placement !== k && (e.modifiersData[i]._skip = !0, e.placement = k, e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function Vt(t, e, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x
        }
    }

    function Xt(t) {
        return [et, it, nt, ot].some((function(e) {
            return t[e] >= 0
        }))
    }
    var $t = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(t) {
                var e = t.state,
                    n = t.name,
                    i = e.rects.reference,
                    o = e.rects.popper,
                    r = e.modifiersData.preventOverflow,
                    s = qt(e, {
                        elementContext: "reference"
                    }),
                    a = qt(e, {
                        altBoundary: !0
                    }),
                    l = Vt(s, i),
                    c = Vt(a, o, r),
                    u = Xt(l),
                    f = Xt(c);
                e.modifiersData[n] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: u,
                    hasPopperEscaped: f
                }, e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
                    "data-popper-reference-hidden": u,
                    "data-popper-escaped": f
                })
            }
        },
        Gt = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(t) {
                var e = t.state,
                    n = t.options,
                    i = t.name,
                    o = n.offset,
                    r = void 0 === o ? [0, 0] : o,
                    s = at.reduce((function(t, n) {
                        return t[n] = function(t, e, n) {
                            var i = pt(t),
                                o = [ot, et].indexOf(i) >= 0 ? -1 : 1,
                                r = "function" == typeof n ? n(Object.assign(Object.assign({}, e), {}, {
                                    placement: t
                                })) : n,
                                s = r[0],
                                a = r[1];
                            return s = s || 0, a = (a || 0) * o, [ot, it].indexOf(i) >= 0 ? {
                                x: a,
                                y: s
                            } : {
                                x: s,
                                y: a
                            }
                        }(n, e.rects, r), t
                    }), {}),
                    a = s[e.placement],
                    l = a.x,
                    c = a.y;
                null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[i] = s
            }
        },
        Zt = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(t) {
                var e = t.state,
                    n = t.name;
                e.modifiersData[n] = Yt({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: "absolute",
                    placement: e.placement
                })
            },
            data: {}
        },
        Jt = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(t) {
                var e = t.state,
                    n = t.options,
                    i = t.name,
                    o = n.mainAxis,
                    r = void 0 === o || o,
                    s = n.altAxis,
                    a = void 0 !== s && s,
                    l = n.boundary,
                    c = n.rootBoundary,
                    u = n.altBoundary,
                    f = n.padding,
                    d = n.tether,
                    h = void 0 === d || d,
                    p = n.tetherOffset,
                    g = void 0 === p ? 0 : p,
                    m = qt(e, {
                        boundary: l,
                        rootBoundary: c,
                        padding: f,
                        altBoundary: u
                    }),
                    v = pt(e.placement),
                    _ = Ft(e.placement),
                    b = !_,
                    y = Tt(v),
                    w = "x" === y ? "y" : "x",
                    E = e.modifiersData.popperOffsets,
                    T = e.rects.reference,
                    k = e.rects.popper,
                    O = "function" == typeof g ? g(Object.assign(Object.assign({}, e.rects), {}, {
                        placement: e.placement
                    })) : g,
                    L = {
                        x: 0,
                        y: 0
                    };
                if (E) {
                    if (r) {
                        var A = "y" === y ? et : ot,
                            C = "y" === y ? nt : it,
                            D = "y" === y ? "height" : "width",
                            x = E[y],
                            S = E[y] + m[A],
                            j = E[y] - m[C],
                            N = h ? -k[D] / 2 : 0,
                            I = "start" === _ ? T[D] : k[D],
                            P = "start" === _ ? -k[D] : -T[D],
                            M = e.elements.arrow,
                            B = h && M ? gt(M) : {
                                width: 0,
                                height: 0
                            },
                            H = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            },
                            R = H[A],
                            W = H[C],
                            K = kt(0, T[D], B[D]),
                            Q = b ? T[D] / 2 - N - K - R - O : I - K - R - O,
                            U = b ? -T[D] / 2 + N + K + W + O : P + K + W + O,
                            F = e.elements.arrow && Et(e.elements.arrow),
                            Y = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0,
                            q = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
                            z = E[y] + Q - q - Y,
                            V = E[y] + U - q,
                            X = kt(h ? Math.min(S, z) : S, x, h ? Math.max(j, V) : j);
                        E[y] = X, L[y] = X - x
                    }
                    if (a) {
                        var $ = "x" === y ? et : ot,
                            G = "x" === y ? nt : it,
                            Z = E[w],
                            J = kt(Z + m[$], Z, Z - m[G]);
                        E[w] = J, L[w] = J - Z
                    }
                    e.modifiersData[i] = L
                }
            },
            requiresIfExists: ["offset"]
        };

    function te(t, e, n) {
        void 0 === n && (n = !1);
        var i, o, r = bt(e),
            s = Bt(t),
            a = dt(e),
            l = {
                scrollLeft: 0,
                scrollTop: 0
            },
            c = {
                x: 0,
                y: 0
            };
        return (a || !a && !n) && (("body" !== ct(e) || Wt(r)) && (l = (i = e) !== ut(i) && dt(i) ? {
            scrollLeft: (o = i).scrollLeft,
            scrollTop: o.scrollTop
        } : Ht(i)), dt(e) ? ((c = Bt(e)).x += e.clientLeft, c.y += e.clientTop) : r && (c.x = Rt(r))), {
            x: s.left + l.scrollLeft - c.x,
            y: s.top + l.scrollTop - c.y,
            width: s.width,
            height: s.height
        }
    }
    var ee = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function ne() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }))
    }

    function ie(t) {
        void 0 === t && (t = {});
        var e = t,
            n = e.defaultModifiers,
            i = void 0 === n ? [] : n,
            o = e.defaultOptions,
            r = void 0 === o ? ee : o;
        return function(t, e, n) {
            void 0 === n && (n = r);
            var o, s, a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign(Object.assign({}, ee), r),
                    modifiersData: {},
                    elements: {
                        reference: t,
                        popper: e
                    },
                    attributes: {},
                    styles: {}
                },
                l = [],
                c = !1,
                u = {
                    state: a,
                    setOptions: function(n) {
                        f(), a.options = Object.assign(Object.assign(Object.assign({}, r), a.options), n), a.scrollParents = {
                            reference: ft(t) ? Kt(t) : t.contextElement ? Kt(t.contextElement) : [],
                            popper: Kt(e)
                        };
                        var o, s, c = function(t) {
                            var e = function(t) {
                                var e = new Map,
                                    n = new Set,
                                    i = [];
                                return t.forEach((function(t) {
                                    e.set(t.name, t)
                                })), t.forEach((function(t) {
                                    n.has(t.name) || function t(o) {
                                        n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(i) {
                                            if (!n.has(i)) {
                                                var o = e.get(i);
                                                o && t(o)
                                            }
                                        })), i.push(o)
                                    }(t)
                                })), i
                            }(t);
                            return lt.reduce((function(t, n) {
                                return t.concat(e.filter((function(t) {
                                    return t.phase === n
                                })))
                            }), [])
                        }((o = [].concat(i, a.options.modifiers), s = o.reduce((function(t, e) {
                            var n = t[e.name];
                            return t[e.name] = n ? Object.assign(Object.assign(Object.assign({}, n), e), {}, {
                                options: Object.assign(Object.assign({}, n.options), e.options),
                                data: Object.assign(Object.assign({}, n.data), e.data)
                            }) : e, t
                        }), {}), Object.keys(s).map((function(t) {
                            return s[t]
                        }))));
                        return a.orderedModifiers = c.filter((function(t) {
                            return t.enabled
                        })), a.orderedModifiers.forEach((function(t) {
                            var e = t.name,
                                n = t.options,
                                i = void 0 === n ? {} : n,
                                o = t.effect;
                            if ("function" == typeof o) {
                                var r = o({
                                    state: a,
                                    name: e,
                                    instance: u,
                                    options: i
                                });
                                l.push(r || function() {})
                            }
                        })), u.update()
                    },
                    forceUpdate: function() {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                n = t.popper;
                            if (ne(e, n)) {
                                a.rects = {
                                    reference: te(e, Et(n), "fixed" === a.options.strategy),
                                    popper: gt(n)
                                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) {
                                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                                }));
                                for (var i = 0; i < a.orderedModifiers.length; i++)
                                    if (!0 !== a.reset) {
                                        var o = a.orderedModifiers[i],
                                            r = o.fn,
                                            s = o.options,
                                            l = void 0 === s ? {} : s,
                                            f = o.name;
                                        "function" == typeof r && (a = r({
                                            state: a,
                                            options: l,
                                            name: f,
                                            instance: u
                                        }) || a)
                                    } else a.reset = !1, i = -1
                            }
                        }
                    },
                    update: (o = function() {
                        return new Promise((function(t) {
                            u.forceUpdate(), t(a)
                        }))
                    }, function() {
                        return s || (s = new Promise((function(t) {
                            Promise.resolve().then((function() {
                                s = void 0, t(o())
                            }))
                        }))), s
                    }),
                    destroy: function() {
                        f(), c = !0
                    }
                };
            if (!ne(t, e)) return u;

            function f() {
                l.forEach((function(t) {
                    return t()
                })), l = []
            }
            return u.setOptions(n).then((function(t) {
                !c && n.onFirstUpdate && n.onFirstUpdate(t)
            })), u
        }
    }
    var oe = ie(),
        re = ie({
            defaultModifiers: [jt, Zt, xt, ht]
        }),
        se = ie({
            defaultModifiers: [jt, Zt, xt, ht, Gt, zt, Jt, At, $t]
        }),
        ae = Object.freeze({
            __proto__: null,
            popperGenerator: ie,
            detectOverflow: qt,
            createPopperBase: oe,
            createPopper: se,
            createPopperLite: re,
            top: et,
            bottom: nt,
            right: it,
            left: ot,
            auto: "auto",
            basePlacements: rt,
            start: "start",
            end: "end",
            clippingParents: "clippingParents",
            viewport: "viewport",
            popper: "popper",
            reference: "reference",
            variationPlacements: st,
            placements: at,
            beforeRead: "beforeRead",
            read: "read",
            afterRead: "afterRead",
            beforeMain: "beforeMain",
            main: "main",
            afterMain: "afterMain",
            beforeWrite: "beforeWrite",
            write: "write",
            afterWrite: "afterWrite",
            modifierPhases: lt,
            applyStyles: ht,
            arrow: At,
            computeStyles: xt,
            eventListeners: jt,
            flip: zt,
            hide: $t,
            offset: Gt,
            popperOffsets: Zt,
            preventOverflow: Jt
        }),
        le = "dropdown",
        ce = new RegExp("ArrowUp|ArrowDown|Escape"),
        ue = y ? "top-end" : "top-start",
        fe = y ? "top-start" : "top-end",
        de = y ? "bottom-end" : "bottom-start",
        he = y ? "bottom-start" : "bottom-end",
        pe = y ? "left-start" : "right-start",
        ge = y ? "right-start" : "left-start",
        me = {
            offset: 0,
            flip: !0,
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        ve = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        _e = function(t) {
            function o(e, n) {
                var i;
                return (i = t.call(this, e) || this)._popper = null, i._config = i._getConfig(n), i._menu = i._getMenuElement(), i._inNavbar = i._detectNavbar(), i._addEventListeners(), i
            }
            i(o, t);
            var r = o.prototype;
            return r.toggle = function() {
                if (!this._element.disabled && !this._element.classList.contains("disabled")) {
                    var t = this._element.classList.contains("show");
                    o.clearMenus(), t || this.show()
                }
            }, r.show = function() {
                if (!(this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))) {
                    var t = o.getParentFromElement(this._element),
                        e = {
                            relatedTarget: this._element
                        };
                    if (!B.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                        if (!this._inNavbar) {
                            if (void 0 === ae) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                            var n = this._element;
                            "parent" === this._config.reference ? n = t : d(this._config.reference) && (n = this._config.reference, void 0 !== this._config.reference.jquery && (n = this._config.reference[0])), this._popper = se(n, this._menu, this._getPopperConfig())
                        }
                        var i;
                        "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (i = []).concat.apply(i, document.body.children).forEach((function(t) {
                            return B.on(t, "mouseover", null, (function() {}))
                        })), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), B.trigger(t, "shown.bs.dropdown", e)
                    }
                }
            }, r.hide = function() {
                if (!this._element.disabled && !this._element.classList.contains("disabled") && this._menu.classList.contains("show")) {
                    var t = o.getParentFromElement(this._element),
                        e = {
                            relatedTarget: this._element
                        };
                    B.trigger(t, "hide.bs.dropdown", e).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), B.trigger(t, "hidden.bs.dropdown", e))
                }
            }, r.dispose = function() {
                t.prototype.dispose.call(this), B.off(this._element, ".bs.dropdown"), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null)
            }, r.update = function() {
                this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
            }, r._addEventListeners = function() {
                var t = this;
                B.on(this._element, "click.bs.dropdown", (function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                }))
            }, r._getConfig = function(t) {
                return t = n({}, this.constructor.Default, F.getDataAttributes(this._element), t), p(le, t, this.constructor.DefaultType), t
            }, r._getMenuElement = function() {
                return Y.next(this._element, ".dropdown-menu")[0]
            }, r._getPlacement = function() {
                var t = this._element.parentNode;
                if (t.classList.contains("dropend")) return pe;
                if (t.classList.contains("dropstart")) return ge;
                var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                return t.classList.contains("dropup") ? e ? fe : ue : e ? he : de
            }, r._detectNavbar = function() {
                return null !== this._element.closest(".navbar")
            }, r._getPopperConfig = function() {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: [{
                        name: "preventOverflow",
                        options: {
                            altBoundary: this._config.flip,
                            rootBoundary: this._config.boundary
                        }
                    }]
                };
                return "static" === this._config.display && (t.modifiers = [{
                    name: "applyStyles",
                    enabled: !1
                }]), n({}, t, this._config.popperConfig)
            }, o.dropdownInterface = function(t, e) {
                var n = T(t, "bs.dropdown");
                if (n || (n = new o(t, "object" == typeof e ? e : null)), "string" == typeof e) {
                    if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                    n[e]()
                }
            }, o.jQueryInterface = function(t) {
                return this.each((function() {
                    o.dropdownInterface(this, t)
                }))
            }, o.clearMenus = function(t) {
                if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key))
                    for (var e = Y.find('[data-bs-toggle="dropdown"]'), n = 0, i = e.length; n < i; n++) {
                        var r = o.getParentFromElement(e[n]),
                            s = T(e[n], "bs.dropdown"),
                            a = {
                                relatedTarget: e[n]
                            };
                        if (t && "click" === t.type && (a.clickEvent = t), s) {
                            var l, c = s._menu;
                            e[n].classList.contains("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && "Tab" === t.key) && c.contains(t.target) || B.trigger(r, "hide.bs.dropdown", a).defaultPrevented) && ("ontouchstart" in document.documentElement && (l = []).concat.apply(l, document.body.children).forEach((function(t) {
                                return B.off(t, "mouseover", null, (function() {}))
                            })), e[n].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), c.classList.remove("show"), e[n].classList.remove("show"), B.trigger(r, "hidden.bs.dropdown", a))
                        }
                    }
            }, o.getParentFromElement = function(t) {
                return c(t) || t.parentNode
            }, o.dataApiKeydownHandler = function(t) {
                if (!(/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !ce.test(t.key)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !this.classList.contains("disabled"))) {
                    var e = o.getParentFromElement(this),
                        n = this.classList.contains("show");
                    if ("Escape" === t.key) return (this.matches('[data-bs-toggle="dropdown"]') ? this : Y.prev(this, '[data-bs-toggle="dropdown"]')[0]).focus(), void o.clearMenus();
                    if (n && "Space" !== t.key) {
                        var i = Y.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(g);
                        if (i.length) {
                            var r = i.indexOf(t.target);
                            "ArrowUp" === t.key && r > 0 && r--, "ArrowDown" === t.key && r < i.length - 1 && r++, i[r = -1 === r ? 0 : r].focus()
                        }
                    } else o.clearMenus()
                }
            }, e(o, null, [{
                key: "Default",
                get: function() {
                    return me
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ve
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.dropdown"
                }
            }]), o
        }(H);
    B.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', _e.dataApiKeydownHandler), B.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", _e.dataApiKeydownHandler), B.on(document, "click.bs.dropdown.data-api", _e.clearMenus), B.on(document, "keyup.bs.dropdown.data-api", _e.clearMenus), B.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function(t) {
        t.preventDefault(), t.stopPropagation(), _e.dropdownInterface(this, "toggle")
    })), B.on(document, "click.bs.dropdown.data-api", ".dropdown form", (function(t) {
        return t.stopPropagation()
    })), b((function() {
        var t = _();
        if (t) {
            var e = t.fn[le];
            t.fn[le] = _e.jQueryInterface, t.fn[le].Constructor = _e, t.fn[le].noConflict = function() {
                return t.fn[le] = e, _e.jQueryInterface
            }
        }
    }));
    var be = {
            backdrop: !0,
            keyboard: !0,
            focus: !0
        },
        ye = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean"
        },
        we = function(t) {
            function o(e, n) {
                var i;
                return (i = t.call(this, e) || this)._config = i._getConfig(n), i._dialog = Y.findOne(".modal-dialog", e), i._backdrop = null, i._isShown = !1, i._isBodyOverflowing = !1, i._ignoreBackdropClick = !1, i._isTransitioning = !1, i._scrollbarWidth = 0, i
            }
            i(o, t);
            var r = o.prototype;
            return r.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, r.show = function(t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    this._element.classList.contains("fade") && (this._isTransitioning = !0);
                    var n = B.trigger(this._element, "show.bs.modal", {
                        relatedTarget: t
                    });
                    this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), B.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (function(t) {
                        return e.hide(t)
                    })), B.on(this._dialog, "mousedown.dismiss.bs.modal", (function() {
                        B.one(e._element, "mouseup.dismiss.bs.modal", (function(t) {
                            t.target === e._element && (e._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((function() {
                        return e._showElement(t)
                    })))
                }
            }, r.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning && !B.trigger(this._element, "hide.bs.modal").defaultPrevented) {
                    this._isShown = !1;
                    var n = this._element.classList.contains("fade");
                    if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), B.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), B.off(this._element, "click.dismiss.bs.modal"), B.off(this._dialog, "mousedown.dismiss.bs.modal"), n) {
                        var i = u(this._element);
                        B.one(this._element, "transitionend", (function(t) {
                            return e._hideModal(t)
                        })), h(this._element, i)
                    } else this._hideModal()
                }
            }, r.dispose = function() {
                [window, this._element, this._dialog].forEach((function(t) {
                    return B.off(t, ".bs.modal")
                })), t.prototype.dispose.call(this), B.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, r.handleUpdate = function() {
                this._adjustDialog()
            }, r._getConfig = function(t) {
                return t = n({}, be, t), p("modal", t, ye), t
            }, r._showElement = function(t) {
                var e = this,
                    n = this._element.classList.contains("fade"),
                    i = Y.findOne(".modal-body", this._dialog);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && v(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();
                var o = function() {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, B.trigger(e._element, "shown.bs.modal", {
                        relatedTarget: t
                    })
                };
                if (n) {
                    var r = u(this._dialog);
                    B.one(this._dialog, "transitionend", o), h(this._dialog, r)
                } else o()
            }, r._enforceFocus = function() {
                var t = this;
                B.off(document, "focusin.bs.modal"), B.on(document, "focusin.bs.modal", (function(e) {
                    document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus()
                }))
            }, r._setEscapeEvent = function() {
                var t = this;
                this._isShown ? B.on(this._element, "keydown.dismiss.bs.modal", (function(e) {
                    t._config.keyboard && "Escape" === e.key ? (e.preventDefault(), t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition()
                })) : B.off(this._element, "keydown.dismiss.bs.modal")
            }, r._setResizeEvent = function() {
                var t = this;
                this._isShown ? B.on(window, "resize.bs.modal", (function() {
                    return t._adjustDialog()
                })) : B.off(window, "resize.bs.modal")
            }, r._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() {
                    document.body.classList.remove("modal-open"), t._resetAdjustments(), t._resetScrollbar(), B.trigger(t._element, "hidden.bs.modal")
                }))
            }, r._removeBackdrop = function() {
                this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null
            }, r._showBackdrop = function(t) {
                var e = this,
                    n = this._element.classList.contains("fade") ? "fade" : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), B.on(this._element, "click.dismiss.bs.modal", (function(t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide())
                        })), n && v(this._backdrop), this._backdrop.classList.add("show"), !n) return void t();
                    var i = u(this._backdrop);
                    B.one(this._backdrop, "transitionend", t), h(this._backdrop, i)
                } else if (!this._isShown && this._backdrop) {
                    this._backdrop.classList.remove("show");
                    var o = function() {
                        e._removeBackdrop(), t()
                    };
                    if (this._element.classList.contains("fade")) {
                        var r = u(this._backdrop);
                        B.one(this._backdrop, "transitionend", o), h(this._backdrop, r)
                    } else o()
                } else t()
            }, r._triggerBackdropTransition = function() {
                var t = this;
                if (!B.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    e || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                    var n = u(this._dialog);
                    B.off(this._element, "transitionend"), B.one(this._element, "transitionend", (function() {
                        t._element.classList.remove("modal-static"), e || (B.one(t._element, "transitionend", (function() {
                            t._element.style.overflowY = ""
                        })), h(t._element, n))
                    })), h(this._element, n), this._element.focus()
                }
            }, r._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                (!this._isBodyOverflowing && t && !y || this._isBodyOverflowing && !t && y) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !t && !y || !this._isBodyOverflowing && t && y) && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, r._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, r._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, r._setScrollbar = function() {
                var t = this;
                if (this._isBodyOverflowing) {
                    Y.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(e) {
                        var n = e.style.paddingRight,
                            i = window.getComputedStyle(e)["padding-right"];
                        F.setDataAttribute(e, "padding-right", n), e.style.paddingRight = Number.parseFloat(i) + t._scrollbarWidth + "px"
                    })), Y.find(".sticky-top").forEach((function(e) {
                        var n = e.style.marginRight,
                            i = window.getComputedStyle(e)["margin-right"];
                        F.setDataAttribute(e, "margin-right", n), e.style.marginRight = Number.parseFloat(i) - t._scrollbarWidth + "px"
                    }));
                    var e = document.body.style.paddingRight,
                        n = window.getComputedStyle(document.body)["padding-right"];
                    F.setDataAttribute(document.body, "padding-right", e), document.body.style.paddingRight = Number.parseFloat(n) + this._scrollbarWidth + "px"
                }
                document.body.classList.add("modal-open")
            }, r._resetScrollbar = function() {
                Y.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(t) {
                    var e = F.getDataAttribute(t, "padding-right");
                    void 0 !== e && (F.removeDataAttribute(t, "padding-right"), t.style.paddingRight = e)
                })), Y.find(".sticky-top").forEach((function(t) {
                    var e = F.getDataAttribute(t, "margin-right");
                    void 0 !== e && (F.removeDataAttribute(t, "margin-right"), t.style.marginRight = e)
                }));
                var t = F.getDataAttribute(document.body, "padding-right");
                void 0 === t ? document.body.style.paddingRight = "" : (F.removeDataAttribute(document.body, "padding-right"), document.body.style.paddingRight = t)
            }, r._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, o.jQueryInterface = function(t, e) {
                return this.each((function() {
                    var i = T(this, "bs.modal"),
                        r = n({}, be, F.getDataAttributes(this), "object" == typeof t && t ? t : {});
                    if (i || (i = new o(this, r)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t](e)
                    }
                }))
            }, e(o, null, [{
                key: "Default",
                get: function() {
                    return be
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.modal"
                }
            }]), o
        }(H);
    B.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        var e = this,
            i = c(this);
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), B.one(i, "show.bs.modal", (function(t) {
            t.defaultPrevented || B.one(i, "hidden.bs.modal", (function() {
                g(e) && e.focus()
            }))
        }));
        var o = T(i, "bs.modal");
        if (!o) {
            var r = n({}, F.getDataAttributes(i), F.getDataAttributes(this));
            o = new we(i, r)
        }
        o.show(this)
    })), b((function() {
        var t = _();
        if (t) {
            var e = t.fn.modal;
            t.fn.modal = we.jQueryInterface, t.fn.modal.Constructor = we, t.fn.modal.noConflict = function() {
                return t.fn.modal = e, we.jQueryInterface
            }
        }
    }));
    var Ee = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Te = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        ke = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function Oe(t, e, n) {
        var i;
        if (!t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (var o = (new window.DOMParser).parseFromString(t, "text/html"), r = Object.keys(e), s = (i = []).concat.apply(i, o.body.querySelectorAll("*")), a = function(t, n) {
                var i, o = s[t],
                    a = o.nodeName.toLowerCase();
                if (!r.includes(a)) return o.parentNode.removeChild(o), "continue";
                var l = (i = []).concat.apply(i, o.attributes),
                    c = [].concat(e["*"] || [], e[a] || []);
                l.forEach((function(t) {
                    (function(t, e) {
                        var n = t.nodeName.toLowerCase();
                        if (e.includes(n)) return !Ee.has(n) || Boolean(t.nodeValue.match(Te) || t.nodeValue.match(ke));
                        for (var i = e.filter((function(t) {
                                return t instanceof RegExp
                            })), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1
                    })(t, c) || o.removeAttribute(t.nodeName)
                }))
            }, l = 0, c = s.length; l < c; l++) a(l);
        return o.body.innerHTML
    }
    var Le = "tooltip",
        Ae = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Ce = new Set(["sanitize", "allowList", "sanitizeFn"]),
        De = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "(null|array)",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object)"
        },
        xe = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: y ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: y ? "right" : "left"
        },
        Se = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            container: !1,
            fallbackPlacements: null,
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        je = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        Ne = function(t) {
            function o(e, n) {
                var i;
                if (void 0 === ae) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                return (i = t.call(this, e) || this)._isEnabled = !0, i._timeout = 0, i._hoverState = "", i._activeTrigger = {}, i._popper = null, i.config = i._getConfig(n), i.tip = null, i._setListeners(), i
            }
            i(o, t);
            var r = o.prototype;
            return r.enable = function() {
                this._isEnabled = !0
            }, r.disable = function() {
                this._isEnabled = !1
            }, r.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, r.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = T(t.delegateTarget, e);
                        n || (n = new this.constructor(t.delegateTarget, this._getDelegateConfig()), E(t.delegateTarget, e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, r.dispose = function() {
                clearTimeout(this._timeout), B.off(this._element, this.constructor.EVENT_KEY), B.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, t.prototype.dispose.call(this)
            }, r.show = function() {
                var t = this;
                if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                if (this.isWithContent() && this._isEnabled) {
                    var e = B.trigger(this._element, this.constructor.Event.SHOW),
                        n = function t(e) {
                            if (!document.documentElement.attachShadow) return null;
                            if ("function" == typeof e.getRootNode) {
                                var n = e.getRootNode();
                                return n instanceof ShadowRoot ? n : null
                            }
                            return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null
                        }(this._element),
                        i = null === n ? this._element.ownerDocument.documentElement.contains(this._element) : n.contains(this._element);
                    if (e.defaultPrevented || !i) return;
                    var o = this.getTipElement(),
                        r = s(this.constructor.NAME);
                    o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && o.classList.add("fade");
                    var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement,
                        l = this._getAttachment(a);
                    this._addAttachmentClass(l);
                    var c = this._getContainer();
                    E(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || c.appendChild(o), B.trigger(this._element, this.constructor.Event.INSERTED), this._popper = se(this._element, o, this._getPopperConfig(l)), o.classList.add("show");
                    var f, d, p = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
                    p && (f = o.classList).add.apply(f, p.split(" ")), "ontouchstart" in document.documentElement && (d = []).concat.apply(d, document.body.children).forEach((function(t) {
                        B.on(t, "mouseover", (function() {}))
                    }));
                    var g = function() {
                        var e = t._hoverState;
                        t._hoverState = null, B.trigger(t._element, t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                    };
                    if (this.tip.classList.contains("fade")) {
                        var m = u(this.tip);
                        B.one(this.tip, "transitionend", g), h(this.tip, m)
                    } else g()
                }
            }, r.hide = function() {
                var t = this;
                if (this._popper) {
                    var e = this.getTipElement(),
                        n = function() {
                            "show" !== t._hoverState && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t._element.removeAttribute("aria-describedby"), B.trigger(t._element, t.constructor.Event.HIDDEN), t._popper && (t._popper.destroy(), t._popper = null)
                        };
                    if (!B.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
                        var i;
                        if (e.classList.remove("show"), "ontouchstart" in document.documentElement && (i = []).concat.apply(i, document.body.children).forEach((function(t) {
                                return B.off(t, "mouseover", m)
                            })), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
                            var o = u(e);
                            B.one(e, "transitionend", n), h(e, o)
                        } else n();
                        this._hoverState = ""
                    }
                }
            }, r.update = function() {
                null !== this._popper && this._popper.update()
            }, r.isWithContent = function() {
                return Boolean(this.getTitle())
            }, r.getTipElement = function() {
                if (this.tip) return this.tip;
                var t = document.createElement("div");
                return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip
            }, r.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(Y.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show")
            }, r.setElementContent = function(t, e) {
                if (null !== t) return "object" == typeof e && d(e) ? (e.jquery && (e = e[0]), void(this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this.config.html ? (this.config.sanitize && (e = Oe(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
            }, r.getTitle = function() {
                var t = this._element.getAttribute("data-bs-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t
            }, r.updateAttachment = function(t) {
                return "right" === t ? "end" : "left" === t ? "start" : t
            }, r._getPopperConfig = function(t) {
                var e = this,
                    i = {
                        name: "flip",
                        options: {
                            altBoundary: !0
                        }
                    };
                return this.config.fallbackPlacements && (i.options.fallbackPlacements = this.config.fallbackPlacements), n({}, {
                    placement: t,
                    modifiers: [i, {
                        name: "preventOverflow",
                        options: {
                            rootBoundary: this.config.boundary
                        }
                    }, {
                        name: "arrow",
                        options: {
                            element: "." + this.constructor.NAME + "-arrow"
                        }
                    }, {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: function(t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }],
                    onFirstUpdate: function(t) {
                        t.options.placement !== t.placement && e._handlePopperPlacementChange(t)
                    }
                }, this.config.popperConfig)
            }, r._addAttachmentClass = function(t) {
                this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
            }, r._getContainer = function() {
                return !1 === this.config.container ? document.body : d(this.config.container) ? this.config.container : Y.findOne(this.config.container)
            }, r._getAttachment = function(t) {
                return xe[t.toUpperCase()]
            }, r._setListeners = function() {
                var t = this;
                this.config.trigger.split(" ").forEach((function(e) {
                    if ("click" === e) B.on(t._element, t.constructor.Event.CLICK, t.config.selector, (function(e) {
                        return t.toggle(e)
                    }));
                    else if ("manual" !== e) {
                        var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            i = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        B.on(t._element, n, t.config.selector, (function(e) {
                            return t._enter(e)
                        })), B.on(t._element, i, t.config.selector, (function(e) {
                            return t._leave(e)
                        }))
                    }
                })), this._hideModalHandler = function() {
                    t._element && t.hide()
                }, B.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = n({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, r._fixTitle = function() {
                var t = this._element.getAttribute("title"),
                    e = typeof this._element.getAttribute("data-bs-original-title");
                (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
            }, r._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || T(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), E(t.delegateTarget, n, e)), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() {
                    "show" === e._hoverState && e.show()
                }), e.config.delay.show) : e.show())
            }, r._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || T(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), E(t.delegateTarget, n, e)), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() {
                    "out" === e._hoverState && e.hide()
                }), e.config.delay.hide) : e.hide())
            }, r._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, r._getConfig = function(t) {
                var e = F.getDataAttributes(this._element);
                return Object.keys(e).forEach((function(t) {
                    Ce.has(t) && delete e[t]
                })), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof(t = n({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), p(Le, t, this.constructor.DefaultType), t.sanitize && (t.template = Oe(t.template, t.allowList, t.sanitizeFn)), t
            }, r._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, r._cleanTipClass = function() {
                var t = this.getTipElement(),
                    e = t.getAttribute("class").match(Ae);
                null !== e && e.length > 0 && e.map((function(t) {
                    return t.trim()
                })).forEach((function(e) {
                    return t.classList.remove(e)
                }))
            }, r._handlePopperPlacementChange = function(t) {
                var e = t.state;
                e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
            }, o.jQueryInterface = function(t) {
                return this.each((function() {
                    var e = T(this, "bs.tooltip"),
                        n = "object" == typeof t && t;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, n)), "string" == typeof t)) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                }))
            }, e(o, null, [{
                key: "Default",
                get: function() {
                    return Se
                }
            }, {
                key: "NAME",
                get: function() {
                    return Le
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return je
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return De
                }
            }]), o
        }(H);
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[Le];
            t.fn[Le] = Ne.jQueryInterface, t.fn[Le].Constructor = Ne, t.fn[Le].noConflict = function() {
                return t.fn[Le] = e, Ne.jQueryInterface
            }
        }
    }));
    var Ie = "popover",
        Pe = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        Me = n({}, Ne.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Be = n({}, Ne.DefaultType, {
            content: "(string|element|function)"
        }),
        He = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        Re = function(t) {
            function n() {
                return t.apply(this, arguments) || this
            }
            i(n, t);
            var o = n.prototype;
            return o.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, o.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(Y.findOne(".popover-header", t), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this._element)), this.setElementContent(Y.findOne(".popover-body", t), e), t.classList.remove("fade", "show")
            }, o._addAttachmentClass = function(t) {
                this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
            }, o._getContent = function() {
                return this._element.getAttribute("data-bs-content") || this.config.content
            }, o._cleanTipClass = function() {
                var t = this.getTipElement(),
                    e = t.getAttribute("class").match(Pe);
                null !== e && e.length > 0 && e.map((function(t) {
                    return t.trim()
                })).forEach((function(e) {
                    return t.classList.remove(e)
                }))
            }, n.jQueryInterface = function(t) {
                return this.each((function() {
                    var e = T(this, "bs.popover"),
                        i = "object" == typeof t ? t : null;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new n(this, i), E(this, "bs.popover", e)), "string" == typeof t)) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                }))
            }, e(n, null, [{
                key: "Default",
                get: function() {
                    return Me
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ie
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return He
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Be
                }
            }]), n
        }(Ne);
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[Ie];
            t.fn[Ie] = Re.jQueryInterface, t.fn[Ie].Constructor = Re, t.fn[Ie].noConflict = function() {
                return t.fn[Ie] = e, Re.jQueryInterface
            }
        }
    }));
    var We = "scrollspy",
        Ke = {
            offset: 10,
            method: "auto",
            target: ""
        },
        Qe = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        Ue = function(t) {
            function o(e, n) {
                var i;
                return (i = t.call(this, e) || this)._scrollElement = "BODY" === e.tagName ? window : e, i._config = i._getConfig(n), i._selector = i._config.target + " .nav-link, " + i._config.target + " .list-group-item, " + i._config.target + " .dropdown-item", i._offsets = [], i._targets = [], i._activeTarget = null, i._scrollHeight = 0, B.on(i._scrollElement, "scroll.bs.scrollspy", (function(t) {
                    return i._process(t)
                })), i.refresh(), i._process(), i
            }
            i(o, t);
            var r = o.prototype;
            return r.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    n = "auto" === this._config.method ? e : this._config.method,
                    i = "position" === n ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Y.find(this._selector).map((function(t) {
                    var e = l(t),
                        o = e ? Y.findOne(e) : null;
                    if (o) {
                        var r = o.getBoundingClientRect();
                        if (r.width || r.height) return [F[n](o).top + i, e]
                    }
                    return null
                })).filter((function(t) {
                    return t
                })).sort((function(t, e) {
                    return t[0] - e[0]
                })).forEach((function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                }))
            }, r.dispose = function() {
                t.prototype.dispose.call(this), B.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, r._getConfig = function(t) {
                if ("string" != typeof(t = n({}, Ke, "object" == typeof t && t ? t : {})).target && d(t.target)) {
                    var e = t.target.id;
                    e || (e = s(We), t.target.id = e), t.target = "#" + e
                }
                return p(We, t, Qe), t
            }, r._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, r._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, r._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, r._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }, r._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map((function(e) {
                        return e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]'
                    })),
                    n = Y.findOne(e.join(","));
                n.classList.contains("dropdown-item") ? (Y.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), Y.parents(n, ".nav, .list-group").forEach((function(t) {
                    Y.prev(t, ".nav-link, .list-group-item").forEach((function(t) {
                        return t.classList.add("active")
                    })), Y.prev(t, ".nav-item").forEach((function(t) {
                        Y.children(t, ".nav-link").forEach((function(t) {
                            return t.classList.add("active")
                        }))
                    }))
                }))), B.trigger(this._scrollElement, "activate.bs.scrollspy", {
                    relatedTarget: t
                })
            }, r._clear = function() {
                Y.find(this._selector).filter((function(t) {
                    return t.classList.contains("active")
                })).forEach((function(t) {
                    return t.classList.remove("active")
                }))
            }, o.jQueryInterface = function(t) {
                return this.each((function() {
                    var e = T(this, "bs.scrollspy");
                    if (e || (e = new o(this, "object" == typeof t && t)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                }))
            }, e(o, null, [{
                key: "Default",
                get: function() {
                    return Ke
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.scrollspy"
                }
            }]), o
        }(H);
    B.on(window, "load.bs.scrollspy.data-api", (function() {
        Y.find('[data-bs-spy="scroll"]').forEach((function(t) {
            return new Ue(t, F.getDataAttributes(t))
        }))
    })), b((function() {
        var t = _();
        if (t) {
            var e = t.fn[We];
            t.fn[We] = Ue.jQueryInterface, t.fn[We].Constructor = Ue, t.fn[We].noConflict = function() {
                return t.fn[We] = e, Ue.jQueryInterface
            }
        }
    }));
    var Fe = function(t) {
        function n() {
            return t.apply(this, arguments) || this
        }
        i(n, t);
        var o = n.prototype;
        return o.show = function() {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || this._element.classList.contains("disabled"))) {
                var e, n = c(this._element),
                    i = this._element.closest(".nav, .list-group");
                if (i) {
                    var o = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
                    e = (e = Y.find(o, i))[e.length - 1]
                }
                var r = null;
                if (e && (r = B.trigger(e, "hide.bs.tab", {
                        relatedTarget: this._element
                    })), !(B.trigger(this._element, "show.bs.tab", {
                        relatedTarget: e
                    }).defaultPrevented || null !== r && r.defaultPrevented)) {
                    this._activate(this._element, i);
                    var s = function() {
                        B.trigger(e, "hidden.bs.tab", {
                            relatedTarget: t._element
                        }), B.trigger(t._element, "shown.bs.tab", {
                            relatedTarget: e
                        })
                    };
                    n ? this._activate(n, n.parentNode, s) : s()
                }
            }
        }, o._activate = function(t, e, n) {
            var i = this,
                o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Y.children(e, ".active") : Y.find(":scope > li > .active", e))[0],
                r = n && o && o.classList.contains("fade"),
                s = function() {
                    return i._transitionComplete(t, o, n)
                };
            if (o && r) {
                var a = u(o);
                o.classList.remove("show"), B.one(o, "transitionend", s), h(o, a)
            } else s()
        }, o._transitionComplete = function(t, e, n) {
            if (e) {
                e.classList.remove("active");
                var i = Y.findOne(":scope > .dropdown-menu .active", e.parentNode);
                i && i.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), v(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && t.parentNode.classList.contains("dropdown-menu") && (t.closest(".dropdown") && Y.find(".dropdown-toggle").forEach((function(t) {
                return t.classList.add("active")
            })), t.setAttribute("aria-expanded", !0)), n && n()
        }, n.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.tab") || new n(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }))
        }, e(n, null, [{
            key: "DATA_KEY",
            get: function() {
                return "bs.tab"
            }
        }]), n
    }(H);
    B.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
        t.preventDefault(), (T(this, "bs.tab") || new Fe(this)).show()
    })), b((function() {
        var t = _();
        if (t) {
            var e = t.fn.tab;
            t.fn.tab = Fe.jQueryInterface, t.fn.tab.Constructor = Fe, t.fn.tab.noConflict = function() {
                return t.fn.tab = e, Fe.jQueryInterface
            }
        }
    }));
    var Ye = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        qe = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        },
        ze = function(t) {
            function o(e, n) {
                var i;
                return (i = t.call(this, e) || this)._config = i._getConfig(n), i._timeout = null, i._setListeners(), i
            }
            i(o, t);
            var r = o.prototype;
            return r.show = function() {
                var t = this;
                if (!B.trigger(this._element, "show.bs.toast").defaultPrevented) {
                    this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                    var e = function() {
                        t._element.classList.remove("showing"), t._element.classList.add("show"), B.trigger(t._element, "shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout((function() {
                            t.hide()
                        }), t._config.delay))
                    };
                    if (this._element.classList.remove("hide"), v(this._element), this._element.classList.add("showing"), this._config.animation) {
                        var n = u(this._element);
                        B.one(this._element, "transitionend", e), h(this._element, n)
                    } else e()
                }
            }, r.hide = function() {
                var t = this;
                if (this._element.classList.contains("show") && !B.trigger(this._element, "hide.bs.toast").defaultPrevented) {
                    var e = function() {
                        t._element.classList.add("hide"), B.trigger(t._element, "hidden.bs.toast")
                    };
                    if (this._element.classList.remove("show"), this._config.animation) {
                        var n = u(this._element);
                        B.one(this._element, "transitionend", e), h(this._element, n)
                    } else e()
                }
            }, r.dispose = function() {
                this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), B.off(this._element, "click.dismiss.bs.toast"), t.prototype.dispose.call(this), this._config = null
            }, r._getConfig = function(t) {
                return t = n({}, qe, F.getDataAttributes(this._element), "object" == typeof t && t ? t : {}), p("toast", t, this.constructor.DefaultType), t
            }, r._setListeners = function() {
                var t = this;
                B.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', (function() {
                    return t.hide()
                }))
            }, r._clearTimeout = function() {
                clearTimeout(this._timeout), this._timeout = null
            }, o.jQueryInterface = function(t) {
                return this.each((function() {
                    var e = T(this, "bs.toast");
                    if (e || (e = new o(this, "object" == typeof t && t)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t](this)
                    }
                }))
            }, e(o, null, [{
                key: "DefaultType",
                get: function() {
                    return Ye
                }
            }, {
                key: "Default",
                get: function() {
                    return qe
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.toast"
                }
            }]), o
        }(H);
    return b((function() {
        var t = _();
        if (t) {
            var e = t.fn.toast;
            t.fn.toast = ze.jQueryInterface, t.fn.toast.Constructor = ze, t.fn.toast.noConflict = function() {
                return t.fn.toast = e, ze.jQueryInterface
            }
        }
    })), {
        Alert: W,
        Button: K,
        Carousel: $,
        Collapse: tt,
        Dropdown: _e,
        Modal: we,
        Popover: Re,
        ScrollSpy: Ue,
        Tab: Fe,
        Toast: ze,
        Tooltip: Ne
    }
}));