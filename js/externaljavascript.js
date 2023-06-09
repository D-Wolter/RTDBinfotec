/*=============================Made BY Dwolter=================================*/

if (
  ((function (t, e) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t.document
          ? e(t, !0)
          : function (t) {
              if (!t.document)
                throw new Error("jQuery requires a window with a document");
              return e(t);
            })
      : e(t);
  })("undefined" != typeof window ? window : this, function (t, e) {
    var n = [],
      i = n.slice,
      o = n.concat,
      r = n.push,
      s = n.indexOf,
      a = {},
      l = a.toString,
      c = a.hasOwnProperty,
      u = {},
      d = "1.11.1",
      p = function (t, e) {
        return new p.fn.init(t, e);
      },
      h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      f = /^-ms-/,
      g = /-([\da-z])/gi,
      m = function (t, e) {
        return e.toUpperCase();
      };
    function v(t) {
      var e = t.length,
        n = p.type(t);
      return (
        "function" !== n &&
        !p.isWindow(t) &&
        (!(1 !== t.nodeType || !e) ||
          "array" === n ||
          0 === e ||
          ("number" == typeof e && e > 0 && e - 1 in t))
      );
    }
    (p.fn = p.prototype =
      {
        jquery: d,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function () {
          return i.call(this);
        },
        get: function (t) {
          return null != t
            ? 0 > t
              ? this[t + this.length]
              : this[t]
            : i.call(this);
        },
        pushStack: function (t) {
          var e = p.merge(this.constructor(), t);
          return (e.prevObject = this), (e.context = this.context), e;
        },
        each: function (t, e) {
          return p.each(this, t, e);
        },
        map: function (t) {
          return this.pushStack(
            p.map(this, function (e, n) {
              return t.call(e, n, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(i.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (t) {
          var e = this.length,
            n = +t + (0 > t ? e : 0);
          return this.pushStack(n >= 0 && e > n ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor(null);
        },
        push: r,
        sort: n.sort,
        splice: n.splice,
      }),
      (p.extend = p.fn.extend =
        function () {
          var t,
            e,
            n,
            i,
            o,
            r,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || p.isFunction(s) || (s = {}),
              a === l && ((s = this), a--);
            l > a;
            a++
          )
            if (null != (o = arguments[a]))
              for (i in o)
                (t = s[i]),
                  (n = o[i]),
                  s !== n &&
                    (c && n && (p.isPlainObject(n) || (e = p.isArray(n)))
                      ? (e
                          ? ((e = !1), (r = t && p.isArray(t) ? t : []))
                          : (r = t && p.isPlainObject(t) ? t : {}),
                        (s[i] = p.extend(c, r, n)))
                      : void 0 !== n && (s[i] = n));
          return s;
        }),
      p.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
          throw new Error(t);
        },
        noop: function () {},
        isFunction: function (t) {
          return "function" === p.type(t);
        },
        isArray:
          Array.isArray ||
          function (t) {
            return "array" === p.type(t);
          },
        isWindow: function (t) {
          return null != t && t == t.window;
        },
        isNumeric: function (t) {
          return !p.isArray(t) && t - parseFloat(t) >= 0;
        },
        isEmptyObject: function (t) {
          var e;
          for (e in t) return !1;
          return !0;
        },
        isPlainObject: function (t) {
          var e;
          if (!t || "object" !== p.type(t) || t.nodeType || p.isWindow(t))
            return !1;
          try {
            if (
              t.constructor &&
              !c.call(t, "constructor") &&
              !c.call(t.constructor.prototype, "isPrototypeOf")
            )
              return !1;
          } catch (t) {
            return !1;
          }
          if (u.ownLast) for (e in t) return c.call(t, e);
          for (e in t);
          return void 0 === e || c.call(t, e);
        },
        type: function (t) {
          return null == t
            ? t + ""
            : "object" == typeof t || "function" == typeof t
            ? a[l.call(t)] || "object"
            : typeof t;
        },
        globalEval: function (e) {
          e &&
            p.trim(e) &&
            (
              t.execScript ||
              function (e) {
                t.eval.call(t, e);
              }
            )(e);
        },
        camelCase: function (t) {
          return t.replace(f, "ms-").replace(g, m);
        },
        nodeName: function (t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function (t, e, n) {
          var i,
            o = 0,
            r = t.length,
            s = v(t);
          if (n) {
            if (s) for (; r > o && !1 !== (i = e.apply(t[o], n)); o++);
            else for (o in t) if (((i = e.apply(t[o], n)), !1 === i)) break;
          } else if (s)
            for (; r > o && !1 !== (i = e.call(t[o], o, t[o])); o++);
          else for (o in t) if (((i = e.call(t[o], o, t[o])), !1 === i)) break;
          return t;
        },
        trim: function (t) {
          return null == t ? "" : (t + "").replace(h, "");
        },
        makeArray: function (t, e) {
          var n = e || [];
          return (
            null != t &&
              (v(Object(t))
                ? p.merge(n, "string" == typeof t ? [t] : t)
                : r.call(n, t)),
            n
          );
        },
        inArray: function (t, e, n) {
          var i;
          if (e) {
            if (s) return s.call(e, t, n);
            for (
              i = e.length, n = n ? (0 > n ? Math.max(0, i + n) : n) : 0;
              i > n;
              n++
            )
              if (n in e && e[n] === t) return n;
          }
          return -1;
        },
        merge: function (t, e) {
          for (var n = +e.length, i = 0, o = t.length; n > i; ) t[o++] = e[i++];
          if (n != n) for (; void 0 !== e[i]; ) t[o++] = e[i++];
          return (t.length = o), t;
        },
        grep: function (t, e, n) {
          for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++)
            (i = !e(t[r], r)), i !== a && o.push(t[r]);
          return o;
        },
        map: function (t, e, n) {
          var i,
            r = 0,
            s = t.length,
            a = [];
          if (v(t))
            for (; s > r; r++) (i = e(t[r], r, n)), null != i && a.push(i);
          else for (r in t) (i = e(t[r], r, n)), null != i && a.push(i);
          return o.apply([], a);
        },
        guid: 1,
        proxy: function (t, e) {
          var n, o, r;
          return (
            "string" == typeof e && ((r = t[e]), (e = t), (t = r)),
            p.isFunction(t)
              ? ((n = i.call(arguments, 2)),
                ((o = function () {
                  return t.apply(e || this, n.concat(i.call(arguments)));
                }).guid = t.guid =
                  t.guid || p.guid++),
                o)
              : void 0
          );
        },
        now: function () {
          return +new Date();
        },
        support: u,
      }),
      p.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " "
        ),
        function (t, e) {
          a["[object " + e + "]"] = e.toLowerCase();
        }
      );
    var y = (function (t) {
      var e,
        n,
        i,
        o,
        r,
        s,
        a,
        l,
        c,
        u,
        d,
        p,
        h,
        f,
        g,
        m,
        v,
        y,
        b,
        x = "sizzle" + -new Date(),
        w = t.document,
        T = 0,
        C = 0,
        E = rt(),
        k = rt(),
        N = rt(),
        S = function (t, e) {
          return t === e && (d = !0), 0;
        },
        $ = "undefined",
        A = 1 << 31,
        D = {}.hasOwnProperty,
        j = [],
        O = j.pop,
        L = j.push,
        H = j.push,
        I = j.slice,
        _ =
          j.indexOf ||
          function (t) {
            for (var e = 0, n = this.length; n > e; e++)
              if (this[e] === t) return e;
            return -1;
          },
        R =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        M = q.replace("w", "w#"),
        F =
          "\\[" +
          P +
          "*(" +
          q +
          ")(?:" +
          P +
          "*([*^$|!~]?=)" +
          P +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          M +
          "))|)" +
          P +
          "*\\]",
        B =
          ":(" +
          q +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          F +
          ")*)|.*)\\)|)",
        z = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        W = new RegExp("^" + P + "*," + P + "*"),
        U = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        V = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
        X = new RegExp(B),
        Q = new RegExp("^" + M + "$"),
        J = {
          ID: new RegExp("^#(" + q + ")"),
          CLASS: new RegExp("^\\.(" + q + ")"),
          TAG: new RegExp("^(" + q.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + F),
          PSEUDO: new RegExp("^" + B),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              P +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              P +
              "*(?:([+-]|)" +
              P +
              "*(\\d+)|))" +
              P +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + R + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              P +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              P +
              "*((?:-\\d)?\\d*)" +
              P +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        Y = /^(?:input|select|textarea|button)$/i,
        G = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        tt = /[+~]/,
        et = /'|\\/g,
        nt = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        it = function (t, e, n) {
          var i = "0x" + e - 65536;
          return i != i || n
            ? e
            : 0 > i
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        };
      try {
        H.apply((j = I.call(w.childNodes)), w.childNodes),
          j[w.childNodes.length].nodeType;
      } catch (t) {
        H = {
          apply: j.length
            ? function (t, e) {
                L.apply(t, I.call(e));
              }
            : function (t, e) {
                for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                t.length = n - 1;
              },
        };
      }
      function ot(t, e, i, o) {
        var r, a, c, u, d, f, v, y, T, C;
        if (
          ((e ? e.ownerDocument || e : w) !== h && p(e),
          (e = e || h),
          (i = i || []),
          !t || "string" != typeof t)
        )
          return i;
        if (1 !== (u = e.nodeType) && 9 !== u) return [];
        if (g && !o) {
          if ((r = Z.exec(t)))
            if ((c = r[1])) {
              if (9 === u) {
                if (!(a = e.getElementById(c)) || !a.parentNode) return i;
                if (a.id === c) return i.push(a), i;
              } else if (
                e.ownerDocument &&
                (a = e.ownerDocument.getElementById(c)) &&
                b(e, a) &&
                a.id === c
              )
                return i.push(a), i;
            } else {
              if (r[2]) return H.apply(i, e.getElementsByTagName(t)), i;
              if (
                (c = r[3]) &&
                n.getElementsByClassName &&
                e.getElementsByClassName
              )
                return H.apply(i, e.getElementsByClassName(c)), i;
            }
          if (n.qsa && (!m || !m.test(t))) {
            if (
              ((y = v = x),
              (T = e),
              (C = 9 === u && t),
              1 === u && "object" !== e.nodeName.toLowerCase())
            ) {
              for (
                f = s(t),
                  (v = e.getAttribute("id"))
                    ? (y = v.replace(et, "\\$&"))
                    : e.setAttribute("id", y),
                  y = "[id='" + y + "'] ",
                  d = f.length;
                d--;

              )
                f[d] = y + gt(f[d]);
              (T = (tt.test(t) && ht(e.parentNode)) || e), (C = f.join(","));
            }
            if (C)
              try {
                return H.apply(i, T.querySelectorAll(C)), i;
              } catch (t) {
              } finally {
                v || e.removeAttribute("id");
              }
          }
        }
        return l(t.replace(z, "$1"), e, i, o);
      }
      function rt() {
        var t = [];
        return function e(n, o) {
          return (
            t.push(n + " ") > i.cacheLength && delete e[t.shift()],
            (e[n + " "] = o)
          );
        };
      }
      function st(t) {
        return (t[x] = !0), t;
      }
      function at(t) {
        var e = h.createElement("div");
        try {
          return !!t(e);
        } catch (t) {
          return !1;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), (e = null);
        }
      }
      function lt(t, e) {
        for (var n = t.split("|"), o = t.length; o--; ) i.attrHandle[n[o]] = e;
      }
      function ct(t, e) {
        var n = e && t,
          i =
            n &&
            1 === t.nodeType &&
            1 === e.nodeType &&
            (~e.sourceIndex || A) - (~t.sourceIndex || A);
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
        return t ? 1 : -1;
      }
      function ut(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }
      function dt(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && e.type === t;
        };
      }
      function pt(t) {
        return st(function (e) {
          return (
            (e = +e),
            st(function (n, i) {
              for (var o, r = t([], n.length, e), s = r.length; s--; )
                n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
            })
          );
        });
      }
      function ht(t) {
        return t && typeof t.getElementsByTagName !== $ && t;
      }
      (n = ot.support = {}),
        (r = ot.isXML =
          function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName;
          }),
        (p = ot.setDocument =
          function (t) {
            var e,
              o = t ? t.ownerDocument || t : w,
              s = o.defaultView;
            return o !== h && 9 === o.nodeType && o.documentElement
              ? ((h = o),
                (f = o.documentElement),
                (g = !r(o)),
                s &&
                  s !== s.top &&
                  (s.addEventListener
                    ? s.addEventListener(
                        "unload",
                        function () {
                          p();
                        },
                        !1
                      )
                    : s.attachEvent &&
                      s.attachEvent("onunload", function () {
                        p();
                      })),
                (n.attributes = at(function (t) {
                  return (t.className = "i"), !t.getAttribute("className");
                })),
                (n.getElementsByTagName = at(function (t) {
                  return (
                    t.appendChild(o.createComment("")),
                    !t.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName =
                  K.test(o.getElementsByClassName) &&
                  at(function (t) {
                    return (
                      (t.innerHTML =
                        "<div class='a'></div><div class='a i'></div>"),
                      (t.firstChild.className = "i"),
                      2 === t.getElementsByClassName("i").length
                    );
                  })),
                (n.getById = at(function (t) {
                  return (
                    (f.appendChild(t).id = x),
                    !o.getElementsByName || !o.getElementsByName(x).length
                  );
                })),
                n.getById
                  ? ((i.find.ID = function (t, e) {
                      if (typeof e.getElementById !== $ && g) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : [];
                      }
                    }),
                    (i.filter.ID = function (t) {
                      var e = t.replace(nt, it);
                      return function (t) {
                        return t.getAttribute("id") === e;
                      };
                    }))
                  : (delete i.find.ID,
                    (i.filter.ID = function (t) {
                      var e = t.replace(nt, it);
                      return function (t) {
                        var n =
                          typeof t.getAttributeNode !== $ &&
                          t.getAttributeNode("id");
                        return n && n.value === e;
                      };
                    })),
                (i.find.TAG = n.getElementsByTagName
                  ? function (t, e) {
                      return typeof e.getElementsByTagName !== $
                        ? e.getElementsByTagName(t)
                        : void 0;
                    }
                  : function (t, e) {
                      var n,
                        i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                      if ("*" === t) {
                        for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return r;
                    }),
                (i.find.CLASS =
                  n.getElementsByClassName &&
                  function (t, e) {
                    return typeof e.getElementsByClassName !== $ && g
                      ? e.getElementsByClassName(t)
                      : void 0;
                  }),
                (v = []),
                (m = []),
                (n.qsa = K.test(o.querySelectorAll)) &&
                  (at(function (t) {
                    (t.innerHTML =
                      "<select msallowclip=''><option selected=''></option></select>"),
                      t.querySelectorAll("[msallowclip^='']").length &&
                        m.push("[*^$]=" + P + "*(?:''|\"\")"),
                      t.querySelectorAll("[selected]").length ||
                        m.push("\\[" + P + "*(?:value|" + R + ")"),
                      t.querySelectorAll(":checked").length ||
                        m.push(":checked");
                  }),
                  at(function (t) {
                    var e = o.createElement("input");
                    e.setAttribute("type", "hidden"),
                      t.appendChild(e).setAttribute("name", "D"),
                      t.querySelectorAll("[name=d]").length &&
                        m.push("name" + P + "*[*^$|!~]?="),
                      t.querySelectorAll(":enabled").length ||
                        m.push(":enabled", ":disabled"),
                      t.querySelectorAll("*,:x"),
                      m.push(",.*:");
                  })),
                (n.matchesSelector = K.test(
                  (y =
                    f.matches ||
                    f.webkitMatchesSelector ||
                    f.mozMatchesSelector ||
                    f.oMatchesSelector ||
                    f.msMatchesSelector)
                )) &&
                  at(function (t) {
                    (n.disconnectedMatch = y.call(t, "div")),
                      y.call(t, "[s!='']:x"),
                      v.push("!=", B);
                  }),
                (m = m.length && new RegExp(m.join("|"))),
                (v = v.length && new RegExp(v.join("|"))),
                (e = K.test(f.compareDocumentPosition)),
                (b =
                  e || K.test(f.contains)
                    ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                          i = e && e.parentNode;
                        return (
                          t === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : t.compareDocumentPosition &&
                                16 & t.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function (t, e) {
                        if (e)
                          for (; (e = e.parentNode); ) if (e === t) return !0;
                        return !1;
                      }),
                (S = e
                  ? function (t, e) {
                      if (t === e) return (d = !0), 0;
                      var i =
                        !t.compareDocumentPosition - !e.compareDocumentPosition;
                      return (
                        i ||
                        (1 &
                          (i =
                            (t.ownerDocument || t) === (e.ownerDocument || e)
                              ? t.compareDocumentPosition(e)
                              : 1) ||
                        (!n.sortDetached && e.compareDocumentPosition(t) === i)
                          ? t === o || (t.ownerDocument === w && b(w, t))
                            ? -1
                            : e === o || (e.ownerDocument === w && b(w, e))
                            ? 1
                            : u
                            ? _.call(u, t) - _.call(u, e)
                            : 0
                          : 4 & i
                          ? -1
                          : 1)
                      );
                    }
                  : function (t, e) {
                      if (t === e) return (d = !0), 0;
                      var n,
                        i = 0,
                        r = t.parentNode,
                        s = e.parentNode,
                        a = [t],
                        l = [e];
                      if (!r || !s)
                        return t === o
                          ? -1
                          : e === o
                          ? 1
                          : r
                          ? -1
                          : s
                          ? 1
                          : u
                          ? _.call(u, t) - _.call(u, e)
                          : 0;
                      if (r === s) return ct(t, e);
                      for (n = t; (n = n.parentNode); ) a.unshift(n);
                      for (n = e; (n = n.parentNode); ) l.unshift(n);
                      for (; a[i] === l[i]; ) i++;
                      return i
                        ? ct(a[i], l[i])
                        : a[i] === w
                        ? -1
                        : l[i] === w
                        ? 1
                        : 0;
                    }),
                o)
              : h;
          }),
        (ot.matches = function (t, e) {
          return ot(t, null, null, e);
        }),
        (ot.matchesSelector = function (t, e) {
          if (
            ((t.ownerDocument || t) !== h && p(t),
            (e = e.replace(V, "='$1']")),
            !(!n.matchesSelector || !g || (v && v.test(e)) || (m && m.test(e))))
          )
            try {
              var i = y.call(t, e);
              if (
                i ||
                n.disconnectedMatch ||
                (t.document && 11 !== t.document.nodeType)
              )
                return i;
            } catch (t) {}
          return ot(e, h, null, [t]).length > 0;
        }),
        (ot.contains = function (t, e) {
          return (t.ownerDocument || t) !== h && p(t), b(t, e);
        }),
        (ot.attr = function (t, e) {
          (t.ownerDocument || t) !== h && p(t);
          var o = i.attrHandle[e.toLowerCase()],
            r =
              o && D.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
          return void 0 !== r
            ? r
            : n.attributes || !g
            ? t.getAttribute(e)
            : (r = t.getAttributeNode(e)) && r.specified
            ? r.value
            : null;
        }),
        (ot.error = function (t) {
          throw new Error("Syntax error, unrecognized expression: " + t);
        }),
        (ot.uniqueSort = function (t) {
          var e,
            i = [],
            o = 0,
            r = 0;
          if (
            ((d = !n.detectDuplicates),
            (u = !n.sortStable && t.slice(0)),
            t.sort(S),
            d)
          ) {
            for (; (e = t[r++]); ) e === t[r] && (o = i.push(r));
            for (; o--; ) t.splice(i[o], 1);
          }
          return (u = null), t;
        }),
        (o = ot.getText =
          function (t) {
            var e,
              n = "",
              i = 0,
              r = t.nodeType;
            if (r) {
              if (1 === r || 9 === r || 11 === r) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) n += o(t);
              } else if (3 === r || 4 === r) return t.nodeValue;
            } else for (; (e = t[i++]); ) n += o(e);
            return n;
          }),
        ((i = ot.selectors =
          {
            cacheLength: 50,
            createPseudo: st,
            match: J,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (t) {
                return (
                  (t[1] = t[1].replace(nt, it)),
                  (t[3] = (t[3] || t[4] || t[5] || "").replace(nt, it)),
                  "~=" === t[2] && (t[3] = " " + t[3] + " "),
                  t.slice(0, 4)
                );
              },
              CHILD: function (t) {
                return (
                  (t[1] = t[1].toLowerCase()),
                  "nth" === t[1].slice(0, 3)
                    ? (t[3] || ot.error(t[0]),
                      (t[4] = +(t[4]
                        ? t[5] + (t[6] || 1)
                        : 2 * ("even" === t[3] || "odd" === t[3]))),
                      (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                    : t[3] && ot.error(t[0]),
                  t
                );
              },
              PSEUDO: function (t) {
                var e,
                  n = !t[6] && t[2];
                return J.CHILD.test(t[0])
                  ? null
                  : (t[3]
                      ? (t[2] = t[4] || t[5] || "")
                      : n &&
                        X.test(n) &&
                        (e = s(n, !0)) &&
                        (e = n.indexOf(")", n.length - e) - n.length) &&
                        ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                    t.slice(0, 3));
              },
            },
            filter: {
              TAG: function (t) {
                var e = t.replace(nt, it).toLowerCase();
                return "*" === t
                  ? function () {
                      return !0;
                    }
                  : function (t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
              },
              CLASS: function (t) {
                var e = E[t + " "];
                return (
                  e ||
                  ((e = new RegExp("(^|" + P + ")" + t + "(" + P + "|$)")) &&
                    E(t, function (t) {
                      return e.test(
                        ("string" == typeof t.className && t.className) ||
                          (typeof t.getAttribute !== $ &&
                            t.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (t, e, n) {
                return function (i) {
                  var o = ot.attr(i, t);
                  return null == o
                    ? "!=" === e
                    : !e ||
                        ((o += ""),
                        "=" === e
                          ? o === n
                          : "!=" === e
                          ? o !== n
                          : "^=" === e
                          ? n && 0 === o.indexOf(n)
                          : "*=" === e
                          ? n && o.indexOf(n) > -1
                          : "$=" === e
                          ? n && o.slice(-n.length) === n
                          : "~=" === e
                          ? (" " + o + " ").indexOf(n) > -1
                          : "|=" === e &&
                            (o === n || o.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (t, e, n, i, o) {
                var r = "nth" !== t.slice(0, 3),
                  s = "last" !== t.slice(-4),
                  a = "of-type" === e;
                return 1 === i && 0 === o
                  ? function (t) {
                      return !!t.parentNode;
                    }
                  : function (e, n, l) {
                      var c,
                        u,
                        d,
                        p,
                        h,
                        f,
                        g = r !== s ? "nextSibling" : "previousSibling",
                        m = e.parentNode,
                        v = a && e.nodeName.toLowerCase(),
                        y = !l && !a;
                      if (m) {
                        if (r) {
                          for (; g; ) {
                            for (d = e; (d = d[g]); )
                              if (
                                a
                                  ? d.nodeName.toLowerCase() === v
                                  : 1 === d.nodeType
                              )
                                return !1;
                            f = g = "only" === t && !f && "nextSibling";
                          }
                          return !0;
                        }
                        if (((f = [s ? m.firstChild : m.lastChild]), s && y)) {
                          for (
                            h =
                              (c = (u = m[x] || (m[x] = {}))[t] || [])[0] ===
                                T && c[1],
                              p = c[0] === T && c[2],
                              d = h && m.childNodes[h];
                            (d = (++h && d && d[g]) || (p = h = 0) || f.pop());

                          )
                            if (1 === d.nodeType && ++p && d === e) {
                              u[t] = [T, h, p];
                              break;
                            }
                        } else if (
                          y &&
                          (c = (e[x] || (e[x] = {}))[t]) &&
                          c[0] === T
                        )
                          p = c[1];
                        else
                          for (
                            ;
                            (d =
                              (++h && d && d[g]) || (p = h = 0) || f.pop()) &&
                            ((a
                              ? d.nodeName.toLowerCase() !== v
                              : 1 !== d.nodeType) ||
                              !++p ||
                              (y && ((d[x] || (d[x] = {}))[t] = [T, p]),
                              d !== e));

                          );
                        return (p -= o) === i || (p % i == 0 && p / i >= 0);
                      }
                    };
              },
              PSEUDO: function (t, e) {
                var n,
                  o =
                    i.pseudos[t] ||
                    i.setFilters[t.toLowerCase()] ||
                    ot.error("unsupported pseudo: " + t);
                return o[x]
                  ? o(e)
                  : o.length > 1
                  ? ((n = [t, t, "", e]),
                    i.setFilters.hasOwnProperty(t.toLowerCase())
                      ? st(function (t, n) {
                          for (var i, r = o(t, e), s = r.length; s--; )
                            (i = _.call(t, r[s])), (t[i] = !(n[i] = r[s]));
                        })
                      : function (t) {
                          return o(t, 0, n);
                        })
                  : o;
              },
            },
            pseudos: {
              not: st(function (t) {
                var e = [],
                  n = [],
                  i = a(t.replace(z, "$1"));
                return i[x]
                  ? st(function (t, e, n, o) {
                      for (var r, s = i(t, null, o, []), a = t.length; a--; )
                        (r = s[a]) && (t[a] = !(e[a] = r));
                    })
                  : function (t, o, r) {
                      return (e[0] = t), i(e, null, r, n), !n.pop();
                    };
              }),
              has: st(function (t) {
                return function (e) {
                  return ot(t, e).length > 0;
                };
              }),
              contains: st(function (t) {
                return function (e) {
                  return (e.textContent || e.innerText || o(e)).indexOf(t) > -1;
                };
              }),
              lang: st(function (t) {
                return (
                  Q.test(t || "") || ot.error("unsupported lang: " + t),
                  (t = t.replace(nt, it).toLowerCase()),
                  function (e) {
                    var n;
                    do {
                      if (
                        (n = g
                          ? e.lang
                          : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()),
                          n === t || 0 === n.indexOf(t + "-")
                        );
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (e) {
                var n = t.location && t.location.hash;
                return n && n.slice(1) === e.id;
              },
              root: function (t) {
                return t === f;
              },
              focus: function (t) {
                return (
                  t === h.activeElement &&
                  (!h.hasFocus || h.hasFocus()) &&
                  !!(t.type || t.href || ~t.tabIndex)
                );
              },
              enabled: function (t) {
                return !1 === t.disabled;
              },
              disabled: function (t) {
                return !0 === t.disabled;
              },
              checked: function (t) {
                var e = t.nodeName.toLowerCase();
                return (
                  ("input" === e && !!t.checked) ||
                  ("option" === e && !!t.selected)
                );
              },
              selected: function (t) {
                return (
                  t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                );
              },
              empty: function (t) {
                for (t = t.firstChild; t; t = t.nextSibling)
                  if (t.nodeType < 6) return !1;
                return !0;
              },
              parent: function (t) {
                return !i.pseudos.empty(t);
              },
              header: function (t) {
                return G.test(t.nodeName);
              },
              input: function (t) {
                return Y.test(t.nodeName);
              },
              button: function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e && "button" === t.type) || "button" === e;
              },
              text: function (t) {
                var e;
                return (
                  "input" === t.nodeName.toLowerCase() &&
                  "text" === t.type &&
                  (null == (e = t.getAttribute("type")) ||
                    "text" === e.toLowerCase())
                );
              },
              first: pt(function () {
                return [0];
              }),
              last: pt(function (t, e) {
                return [e - 1];
              }),
              eq: pt(function (t, e, n) {
                return [0 > n ? n + e : n];
              }),
              even: pt(function (t, e) {
                for (var n = 0; e > n; n += 2) t.push(n);
                return t;
              }),
              odd: pt(function (t, e) {
                for (var n = 1; e > n; n += 2) t.push(n);
                return t;
              }),
              lt: pt(function (t, e, n) {
                for (var i = 0 > n ? n + e : n; --i >= 0; ) t.push(i);
                return t;
              }),
              gt: pt(function (t, e, n) {
                for (var i = 0 > n ? n + e : n; ++i < e; ) t.push(i);
                return t;
              }),
            },
          }).pseudos.nth = i.pseudos.eq);
      for (e in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        i.pseudos[e] = ut(e);
      for (e in { submit: !0, reset: !0 }) i.pseudos[e] = dt(e);
      function ft() {}
      function gt(t) {
        for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
        return i;
      }
      function mt(t, e, n) {
        var i = e.dir,
          o = n && "parentNode" === i,
          r = C++;
        return e.first
          ? function (e, n, r) {
              for (; (e = e[i]); ) if (1 === e.nodeType || o) return t(e, n, r);
            }
          : function (e, n, s) {
              var a,
                l,
                c = [T, r];
              if (s) {
                for (; (e = e[i]); )
                  if ((1 === e.nodeType || o) && t(e, n, s)) return !0;
              } else
                for (; (e = e[i]); )
                  if (1 === e.nodeType || o) {
                    if (
                      (a = (l = e[x] || (e[x] = {}))[i]) &&
                      a[0] === T &&
                      a[1] === r
                    )
                      return (c[2] = a[2]);
                    if (((l[i] = c), (c[2] = t(e, n, s)))) return !0;
                  }
            };
      }
      function vt(t) {
        return t.length > 1
          ? function (e, n, i) {
              for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
              return !0;
            }
          : t[0];
      }
      function yt(t, e, n, i, o) {
        for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)
          (r = t[a]) && (!n || n(r, i, o)) && (s.push(r), c && e.push(a));
        return s;
      }
      function bt(t, e, n, i, o, r) {
        return (
          i && !i[x] && (i = bt(i)),
          o && !o[x] && (o = bt(o, r)),
          st(function (r, s, a, l) {
            var c,
              u,
              d,
              p = [],
              h = [],
              f = s.length,
              g =
                r ||
                (function (t, e, n) {
                  for (var i = 0, o = e.length; o > i; i++) ot(t, e[i], n);
                  return n;
                })(e || "*", a.nodeType ? [a] : a, []),
              m = !t || (!r && e) ? g : yt(g, p, t, a, l),
              v = n ? (o || (r ? t : f || i) ? [] : s) : m;
            if ((n && n(m, v, a, l), i))
              for (c = yt(v, h), i(c, [], a, l), u = c.length; u--; )
                (d = c[u]) && (v[h[u]] = !(m[h[u]] = d));
            if (r) {
              if (o || t) {
                if (o) {
                  for (c = [], u = v.length; u--; )
                    (d = v[u]) && c.push((m[u] = d));
                  o(null, (v = []), c, l);
                }
                for (u = v.length; u--; )
                  (d = v[u]) &&
                    (c = o ? _.call(r, d) : p[u]) > -1 &&
                    (r[c] = !(s[c] = d));
              }
            } else (v = yt(v === s ? v.splice(f, v.length) : v)), o ? o(null, s, v, l) : H.apply(s, v);
          })
        );
      }
      function xt(t) {
        for (
          var e,
            n,
            o,
            r = t.length,
            s = i.relative[t[0].type],
            a = s || i.relative[" "],
            l = s ? 1 : 0,
            u = mt(
              function (t) {
                return t === e;
              },
              a,
              !0
            ),
            d = mt(
              function (t) {
                return _.call(e, t) > -1;
              },
              a,
              !0
            ),
            p = [
              function (t, n, i) {
                return (
                  (!s && (i || n !== c)) ||
                  ((e = n).nodeType ? u(t, n, i) : d(t, n, i))
                );
              },
            ];
          r > l;
          l++
        )
          if ((n = i.relative[t[l].type])) p = [mt(vt(p), n)];
          else {
            if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
              for (o = ++l; r > o && !i.relative[t[o].type]; o++);
              return bt(
                l > 1 && vt(p),
                l > 1 &&
                  gt(
                    t
                      .slice(0, l - 1)
                      .concat({ value: " " === t[l - 2].type ? "*" : "" })
                  ).replace(z, "$1"),
                n,
                o > l && xt(t.slice(l, o)),
                r > o && xt((t = t.slice(o))),
                r > o && gt(t)
              );
            }
            p.push(n);
          }
        return vt(p);
      }
      return (
        (ft.prototype = i.filters = i.pseudos),
        (i.setFilters = new ft()),
        (s = ot.tokenize =
          function (t, e) {
            var n,
              o,
              r,
              s,
              a,
              l,
              c,
              u = k[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (a = t, l = [], c = i.preFilter; a; ) {
              (!n || (o = W.exec(a))) &&
                (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
                (n = !1),
                (o = U.exec(a)) &&
                  ((n = o.shift()),
                  r.push({ value: n, type: o[0].replace(z, " ") }),
                  (a = a.slice(n.length)));
              for (s in i.filter)
                !(o = J[s].exec(a)) ||
                  (c[s] && !(o = c[s](o))) ||
                  ((n = o.shift()),
                  r.push({ value: n, type: s, matches: o }),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return e ? a.length : a ? ot.error(t) : k(t, l).slice(0);
          }),
        (a = ot.compile =
          function (t, e) {
            var n,
              o,
              r,
              a,
              l,
              u,
              d = [],
              p = [],
              f = N[t + " "];
            if (!f) {
              for (e || (e = s(t)), n = e.length; n--; )
                (f = xt(e[n])), f[x] ? d.push(f) : p.push(f);
              (f = N(
                t,
                ((o = p),
                (a = (r = d).length > 0),
                (l = o.length > 0),
                (u = function (t, e, n, s, u) {
                  var d,
                    p,
                    f,
                    g = 0,
                    m = "0",
                    v = t && [],
                    y = [],
                    b = c,
                    x = t || (l && i.find.TAG("*", u)),
                    w = (T += null == b ? 1 : Math.random() || 0.1),
                    C = x.length;
                  for (
                    u && (c = e !== h && e);
                    m !== C && null != (d = x[m]);
                    m++
                  ) {
                    if (l && d) {
                      for (p = 0; (f = o[p++]); )
                        if (f(d, e, n)) {
                          s.push(d);
                          break;
                        }
                      u && (T = w);
                    }
                    a && ((d = !f && d) && g--, t && v.push(d));
                  }
                  if (((g += m), a && m !== g)) {
                    for (p = 0; (f = r[p++]); ) f(v, y, e, n);
                    if (t) {
                      if (g > 0)
                        for (; m--; ) v[m] || y[m] || (y[m] = O.call(s));
                      y = yt(y);
                    }
                    H.apply(s, y),
                      u &&
                        !t &&
                        y.length > 0 &&
                        g + r.length > 1 &&
                        ot.uniqueSort(s);
                  }
                  return u && ((T = w), (c = b)), v;
                }),
                a ? st(u) : u)
              )).selector = t;
            }
            return f;
          }),
        (l = ot.select =
          function (t, e, o, r) {
            var l,
              c,
              u,
              d,
              p,
              h = "function" == typeof t && t,
              f = !r && s((t = h.selector || t));
            if (((o = o || []), 1 === f.length)) {
              if (
                (c = f[0] = f[0].slice(0)).length > 2 &&
                "ID" === (u = c[0]).type &&
                n.getById &&
                9 === e.nodeType &&
                g &&
                i.relative[c[1].type]
              ) {
                if (
                  !(e = (i.find.ID(u.matches[0].replace(nt, it), e) || [])[0])
                )
                  return o;
                h && (e = e.parentNode), (t = t.slice(c.shift().value.length));
              }
              for (
                l = J.needsContext.test(t) ? 0 : c.length;
                l-- && ((u = c[l]), !i.relative[(d = u.type)]);

              )
                if (
                  (p = i.find[d]) &&
                  (r = p(
                    u.matches[0].replace(nt, it),
                    (tt.test(c[0].type) && ht(e.parentNode)) || e
                  ))
                ) {
                  if ((c.splice(l, 1), !(t = r.length && gt(c))))
                    return H.apply(o, r), o;
                  break;
                }
            }
            return (
              (h || a(t, f))(
                r,
                e,
                !g,
                o,
                (tt.test(t) && ht(e.parentNode)) || e
              ),
              o
            );
          }),
        (n.sortStable = x.split("").sort(S).join("") === x),
        (n.detectDuplicates = !!d),
        p(),
        (n.sortDetached = at(function (t) {
          return 1 & t.compareDocumentPosition(h.createElement("div"));
        })),
        at(function (t) {
          return (
            (t.innerHTML = "<a href='#'></a>"),
            "#" === t.firstChild.getAttribute("href")
          );
        }) ||
          lt("type|href|height|width", function (t, e, n) {
            return n
              ? void 0
              : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
          }),
        (n.attributes &&
          at(function (t) {
            return (
              (t.innerHTML = "<input/>"),
              t.firstChild.setAttribute("value", ""),
              "" === t.firstChild.getAttribute("value")
            );
          })) ||
          lt("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase()
              ? void 0
              : t.defaultValue;
          }),
        at(function (t) {
          return null == t.getAttribute("disabled");
        }) ||
          lt(R, function (t, e, n) {
            var i;
            return n
              ? void 0
              : !0 === t[e]
              ? e.toLowerCase()
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
          }),
        ot
      );
    })(t);
    (p.find = y),
      (p.expr = y.selectors),
      (p.expr[":"] = p.expr.pseudos),
      (p.unique = y.uniqueSort),
      (p.text = y.getText),
      (p.isXMLDoc = y.isXML),
      (p.contains = y.contains);
    var b = p.expr.match.needsContext,
      x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      w = /^.[^:#\[\.,]*$/;
    function T(t, e, n) {
      if (p.isFunction(e))
        return p.grep(t, function (t, i) {
          return !!e.call(t, i, t) !== n;
        });
      if (e.nodeType)
        return p.grep(t, function (t) {
          return (t === e) !== n;
        });
      if ("string" == typeof e) {
        if (w.test(e)) return p.filter(e, t, n);
        e = p.filter(e, t);
      }
      return p.grep(t, function (t) {
        return p.inArray(t, e) >= 0 !== n;
      });
    }
    (p.filter = function (t, e, n) {
      var i = e[0];
      return (
        n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType
          ? p.find.matchesSelector(i, t)
            ? [i]
            : []
          : p.find.matches(
              t,
              p.grep(e, function (t) {
                return 1 === t.nodeType;
              })
            )
      );
    }),
      p.fn.extend({
        find: function (t) {
          var e,
            n = [],
            i = this,
            o = i.length;
          if ("string" != typeof t)
            return this.pushStack(
              p(t).filter(function () {
                for (e = 0; o > e; e++) if (p.contains(i[e], this)) return !0;
              })
            );
          for (e = 0; o > e; e++) p.find(t, i[e], n);
          return (
            ((n = this.pushStack(o > 1 ? p.unique(n) : n)).selector = this
              .selector
              ? this.selector + " " + t
              : t),
            n
          );
        },
        filter: function (t) {
          return this.pushStack(T(this, t || [], !1));
        },
        not: function (t) {
          return this.pushStack(T(this, t || [], !0));
        },
        is: function (t) {
          return !!T(
            this,
            "string" == typeof t && b.test(t) ? p(t) : t || [],
            !1
          ).length;
        },
      });
    var C,
      E = t.document,
      k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ((p.fn.init = function (t, e) {
      var n, i;
      if (!t) return this;
      if ("string" == typeof t) {
        if (
          !(n =
            "<" === t.charAt(0) &&
            ">" === t.charAt(t.length - 1) &&
            t.length >= 3
              ? [null, t, null]
              : k.exec(t)) ||
          (!n[1] && e)
        )
          return !e || e.jquery
            ? (e || C).find(t)
            : this.constructor(e).find(t);
        if (n[1]) {
          if (
            ((e = e instanceof p ? e[0] : e),
            p.merge(
              this,
              p.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : E, !0)
            ),
            x.test(n[1]) && p.isPlainObject(e))
          )
            for (n in e)
              p.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
          return this;
        }
        if ((i = E.getElementById(n[2])) && i.parentNode) {
          if (i.id !== n[2]) return C.find(t);
          (this.length = 1), (this[0] = i);
        }
        return (this.context = E), (this.selector = t), this;
      }
      return t.nodeType
        ? ((this.context = this[0] = t), (this.length = 1), this)
        : p.isFunction(t)
        ? void 0 !== C.ready
          ? C.ready(t)
          : t(p)
        : (void 0 !== t.selector &&
            ((this.selector = t.selector), (this.context = t.context)),
          p.makeArray(t, this));
    }).prototype = p.fn),
      (C = p(E));
    var N = /^(?:parents|prev(?:Until|All))/,
      S = { children: !0, contents: !0, next: !0, prev: !0 };
    function $(t, e) {
      do {
        t = t[e];
      } while (t && 1 !== t.nodeType);
      return t;
    }
    p.extend({
      dir: function (t, e, n) {
        for (
          var i = [], o = t[e];
          o &&
          9 !== o.nodeType &&
          (void 0 === n || 1 !== o.nodeType || !p(o).is(n));

        )
          1 === o.nodeType && i.push(o), (o = o[e]);
        return i;
      },
      sibling: function (t, e) {
        for (var n = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && n.push(t);
        return n;
      },
    }),
      p.fn.extend({
        has: function (t) {
          var e,
            n = p(t, this),
            i = n.length;
          return this.filter(function () {
            for (e = 0; i > e; e++) if (p.contains(this, n[e])) return !0;
          });
        },
        closest: function (t, e) {
          for (
            var n,
              i = 0,
              o = this.length,
              r = [],
              s =
                b.test(t) || "string" != typeof t ? p(t, e || this.context) : 0;
            o > i;
            i++
          )
            for (n = this[i]; n && n !== e; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (s
                  ? s.index(n) > -1
                  : 1 === n.nodeType && p.find.matchesSelector(n, t))
              ) {
                r.push(n);
                break;
              }
          return this.pushStack(r.length > 1 ? p.unique(r) : r);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? p.inArray(this[0], p(t))
              : p.inArray(t.jquery ? t[0] : t, this)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(p.unique(p.merge(this.get(), p(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
      p.each(
        {
          parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
          },
          parents: function (t) {
            return p.dir(t, "parentNode");
          },
          parentsUntil: function (t, e, n) {
            return p.dir(t, "parentNode", n);
          },
          next: function (t) {
            return $(t, "nextSibling");
          },
          prev: function (t) {
            return $(t, "previousSibling");
          },
          nextAll: function (t) {
            return p.dir(t, "nextSibling");
          },
          prevAll: function (t) {
            return p.dir(t, "previousSibling");
          },
          nextUntil: function (t, e, n) {
            return p.dir(t, "nextSibling", n);
          },
          prevUntil: function (t, e, n) {
            return p.dir(t, "previousSibling", n);
          },
          siblings: function (t) {
            return p.sibling((t.parentNode || {}).firstChild, t);
          },
          children: function (t) {
            return p.sibling(t.firstChild);
          },
          contents: function (t) {
            return p.nodeName(t, "iframe")
              ? t.contentDocument || t.contentWindow.document
              : p.merge([], t.childNodes);
          },
        },
        function (t, e) {
          p.fn[t] = function (n, i) {
            var o = p.map(this, e, n);
            return (
              "Until" !== t.slice(-5) && (i = n),
              i && "string" == typeof i && (o = p.filter(i, o)),
              this.length > 1 &&
                (S[t] || (o = p.unique(o)), N.test(t) && (o = o.reverse())),
              this.pushStack(o)
            );
          };
        }
      );
    var A,
      D = /\S+/g,
      j = {};
    function O() {
      E.addEventListener
        ? (E.removeEventListener("DOMContentLoaded", L, !1),
          t.removeEventListener("load", L, !1))
        : (E.detachEvent("onreadystatechange", L), t.detachEvent("onload", L));
    }
    function L() {
      (E.addEventListener ||
        "load" === event.type ||
        "complete" === E.readyState) &&
        (O(), p.ready());
    }
    (p.Callbacks = function (t) {
      var e,
        n,
        i,
        o,
        r,
        s,
        a,
        l,
        c = [],
        u =
          !(t =
            "string" == typeof t
              ? j[t] ||
                ((n = j[(e = t)] = {}),
                p.each(e.match(D) || [], function (t, e) {
                  n[e] = !0;
                }),
                n)
              : p.extend({}, t)).once && [],
        d = function (e) {
          for (
            o = t.memory && e, r = !0, a = l || 0, l = 0, s = c.length, i = !0;
            c && s > a;
            a++
          )
            if (!1 === c[a].apply(e[0], e[1]) && t.stopOnFalse) {
              o = !1;
              break;
            }
          (i = !1),
            c && (u ? u.length && d(u.shift()) : o ? (c = []) : h.disable());
        },
        h = {
          add: function () {
            if (c) {
              var e = c.length;
              !(function e(n) {
                p.each(n, function (n, i) {
                  var o = p.type(i);
                  "function" === o
                    ? (t.unique && h.has(i)) || c.push(i)
                    : i && i.length && "string" !== o && e(i);
                });
              })(arguments),
                i ? (s = c.length) : o && ((l = e), d(o));
            }
            return this;
          },
          remove: function () {
            return (
              c &&
                p.each(arguments, function (t, e) {
                  for (var n; (n = p.inArray(e, c, n)) > -1; )
                    c.splice(n, 1), i && (s >= n && s--, a >= n && a--);
                }),
              this
            );
          },
          has: function (t) {
            return t ? p.inArray(t, c) > -1 : !(!c || !c.length);
          },
          empty: function () {
            return (c = []), (s = 0), this;
          },
          disable: function () {
            return (c = u = o = void 0), this;
          },
          disabled: function () {
            return !c;
          },
          lock: function () {
            return (u = void 0), o || h.disable(), this;
          },
          locked: function () {
            return !u;
          },
          fireWith: function (t, e) {
            return (
              !c ||
                (r && !u) ||
                ((e = [t, (e = e || []).slice ? e.slice() : e]),
                i ? u.push(e) : d(e)),
              this
            );
          },
          fire: function () {
            return h.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!r;
          },
        };
      return h;
    }),
      p.extend({
        Deferred: function (t) {
          var e = [
              ["resolve", "done", p.Callbacks("once memory"), "resolved"],
              ["reject", "fail", p.Callbacks("once memory"), "rejected"],
              ["notify", "progress", p.Callbacks("memory")],
            ],
            n = "pending",
            i = {
              state: function () {
                return n;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              then: function () {
                var t = arguments;
                return p
                  .Deferred(function (n) {
                    p.each(e, function (e, r) {
                      var s = p.isFunction(t[e]) && t[e];
                      o[r[1]](function () {
                        var t = s && s.apply(this, arguments);
                        t && p.isFunction(t.promise)
                          ? t
                              .promise()
                              .done(n.resolve)
                              .fail(n.reject)
                              .progress(n.notify)
                          : n[r[0] + "With"](
                              this === i ? n.promise() : this,
                              s ? [t] : arguments
                            );
                      });
                    }),
                      (t = null);
                  })
                  .promise();
              },
              promise: function (t) {
                return null != t ? p.extend(t, i) : i;
              },
            },
            o = {};
          return (
            (i.pipe = i.then),
            p.each(e, function (t, r) {
              var s = r[2],
                a = r[3];
              (i[r[1]] = s.add),
                a &&
                  s.add(
                    function () {
                      n = a;
                    },
                    e[1 ^ t][2].disable,
                    e[2][2].lock
                  ),
                (o[r[0]] = function () {
                  return (
                    o[r[0] + "With"](this === o ? i : this, arguments), this
                  );
                }),
                (o[r[0] + "With"] = s.fireWith);
            }),
            i.promise(o),
            t && t.call(o, o),
            o
          );
        },
        when: function (t) {
          var e,
            n,
            o,
            r = 0,
            s = i.call(arguments),
            a = s.length,
            l = 1 !== a || (t && p.isFunction(t.promise)) ? a : 0,
            c = 1 === l ? t : p.Deferred(),
            u = function (t, n, o) {
              return function (r) {
                (n[t] = this),
                  (o[t] = arguments.length > 1 ? i.call(arguments) : r),
                  o === e ? c.notifyWith(n, o) : --l || c.resolveWith(n, o);
              };
            };
          if (a > 1)
            for (
              e = new Array(a), n = new Array(a), o = new Array(a);
              a > r;
              r++
            )
              s[r] && p.isFunction(s[r].promise)
                ? s[r]
                    .promise()
                    .done(u(r, o, s))
                    .fail(c.reject)
                    .progress(u(r, n, e))
                : --l;
          return l || c.resolveWith(o, s), c.promise();
        },
      }),
      (p.fn.ready = function (t) {
        return p.ready.promise().done(t), this;
      }),
      p.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
          t ? p.readyWait++ : p.ready(!0);
        },
        ready: function (t) {
          if (!0 === t ? !--p.readyWait : !p.isReady) {
            if (!E.body) return setTimeout(p.ready);
            (p.isReady = !0),
              (!0 !== t && --p.readyWait > 0) ||
                (A.resolveWith(E, [p]),
                p.fn.triggerHandler &&
                  (p(E).triggerHandler("ready"), p(E).off("ready")));
          }
        },
      }),
      (p.ready.promise = function (e) {
        if (!A)
          if (((A = p.Deferred()), "complete" === E.readyState))
            setTimeout(p.ready);
          else if (E.addEventListener)
            E.addEventListener("DOMContentLoaded", L, !1),
              t.addEventListener("load", L, !1);
          else {
            E.attachEvent("onreadystatechange", L), t.attachEvent("onload", L);
            var n = !1;
            try {
              n = null == t.frameElement && E.documentElement;
            } catch (t) {}
            n &&
              n.doScroll &&
              (function t() {
                if (!p.isReady) {
                  try {
                    n.doScroll("left");
                  } catch (e) {
                    return setTimeout(t, 50);
                  }
                  O(), p.ready();
                }
              })();
          }
        return A.promise(e);
      });
    var H,
      I = "undefined";
    for (H in p(u)) break;
    (u.ownLast = "0" !== H),
      (u.inlineBlockNeedsLayout = !1),
      p(function () {
        var t, e, n, i;
        (n = E.getElementsByTagName("body")[0]) &&
          n.style &&
          ((e = E.createElement("div")),
          ((i = E.createElement("div")).style.cssText =
            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
          n.appendChild(i).appendChild(e),
          typeof e.style.zoom !== I &&
            ((e.style.cssText =
              "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
            (u.inlineBlockNeedsLayout = t = 3 === e.offsetWidth),
            t && (n.style.zoom = 1)),
          n.removeChild(i));
      }),
      (function () {
        var t = E.createElement("div");
        if (null == u.deleteExpando) {
          u.deleteExpando = !0;
          try {
            delete t.test;
          } catch (t) {
            u.deleteExpando = !1;
          }
        }
        t = null;
      })(),
      (p.acceptData = function (t) {
        var e = p.noData[(t.nodeName + " ").toLowerCase()],
          n = +t.nodeType || 1;
        return (
          (1 === n || 9 === n) &&
          (!e || (!0 !== e && t.getAttribute("classid") === e))
        );
      });
    var _ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      R = /([A-Z])/g;
    function P(t, e, n) {
      if (void 0 === n && 1 === t.nodeType) {
        var i = "data-" + e.replace(R, "-$1").toLowerCase();
        if ("string" == typeof (n = t.getAttribute(i))) {
          try {
            n =
              "true" === n ||
              ("false" !== n &&
                ("null" === n
                  ? null
                  : +n + "" === n
                  ? +n
                  : _.test(n)
                  ? p.parseJSON(n)
                  : n));
          } catch (t) {}
          p.data(t, e, n);
        } else n = void 0;
      }
      return n;
    }
    function q(t) {
      var e;
      for (e in t)
        if (("data" !== e || !p.isEmptyObject(t[e])) && "toJSON" !== e)
          return !1;
      return !0;
    }
    function M(t, e, i, o) {
      if (p.acceptData(t)) {
        var r,
          s,
          a = p.expando,
          l = t.nodeType,
          c = l ? p.cache : t,
          u = l ? t[a] : t[a] && a;
        if (
          (u && c[u] && (o || c[u].data)) ||
          void 0 !== i ||
          "string" != typeof e
        )
          return (
            u || (u = l ? (t[a] = n.pop() || p.guid++) : a),
            c[u] || (c[u] = l ? {} : { toJSON: p.noop }),
            ("object" == typeof e || "function" == typeof e) &&
              (o
                ? (c[u] = p.extend(c[u], e))
                : (c[u].data = p.extend(c[u].data, e))),
            (s = c[u]),
            o || (s.data || (s.data = {}), (s = s.data)),
            void 0 !== i && (s[p.camelCase(e)] = i),
            "string" == typeof e
              ? ((r = s[e]), null == r && (r = s[p.camelCase(e)]))
              : (r = s),
            r
          );
      }
    }
    function F(t, e, n) {
      if (p.acceptData(t)) {
        var i,
          o,
          r = t.nodeType,
          s = r ? p.cache : t,
          a = r ? t[p.expando] : p.expando;
        if (s[a]) {
          if (e && (i = n ? s[a] : s[a].data)) {
            p.isArray(e)
              ? (e = e.concat(p.map(e, p.camelCase)))
              : e in i
              ? (e = [e])
              : (e = (e = p.camelCase(e)) in i ? [e] : e.split(" ")),
              (o = e.length);
            for (; o--; ) delete i[e[o]];
            if (n ? !q(i) : !p.isEmptyObject(i)) return;
          }
          (n || (delete s[a].data, q(s[a]))) &&
            (r
              ? p.cleanData([t], !0)
              : u.deleteExpando || s != s.window
              ? delete s[a]
              : (s[a] = null));
        }
      }
    }
    p.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      },
      hasData: function (t) {
        return (
          !!(t = t.nodeType ? p.cache[t[p.expando]] : t[p.expando]) && !q(t)
        );
      },
      data: function (t, e, n) {
        return M(t, e, n);
      },
      removeData: function (t, e) {
        return F(t, e);
      },
      _data: function (t, e, n) {
        return M(t, e, n, !0);
      },
      _removeData: function (t, e) {
        return F(t, e, !0);
      },
    }),
      p.fn.extend({
        data: function (t, e) {
          var n,
            i,
            o,
            r = this[0],
            s = r && r.attributes;
          if (void 0 === t) {
            if (
              this.length &&
              ((o = p.data(r)), 1 === r.nodeType && !p._data(r, "parsedAttrs"))
            ) {
              for (n = s.length; n--; )
                s[n] &&
                  ((i = s[n].name),
                  0 === i.indexOf("data-") &&
                    ((i = p.camelCase(i.slice(5))), P(r, i, o[i])));
              p._data(r, "parsedAttrs", !0);
            }
            return o;
          }
          return "object" == typeof t
            ? this.each(function () {
                p.data(this, t);
              })
            : arguments.length > 1
            ? this.each(function () {
                p.data(this, t, e);
              })
            : r
            ? P(r, t, p.data(r, t))
            : void 0;
        },
        removeData: function (t) {
          return this.each(function () {
            p.removeData(this, t);
          });
        },
      }),
      p.extend({
        queue: function (t, e, n) {
          var i;
          return t
            ? ((e = (e || "fx") + "queue"),
              (i = p._data(t, e)),
              n &&
                (!i || p.isArray(n)
                  ? (i = p._data(t, e, p.makeArray(n)))
                  : i.push(n)),
              i || [])
            : void 0;
        },
        dequeue: function (t, e) {
          e = e || "fx";
          var n = p.queue(t, e),
            i = n.length,
            o = n.shift(),
            r = p._queueHooks(t, e);
          "inprogress" === o && ((o = n.shift()), i--),
            o &&
              ("fx" === e && n.unshift("inprogress"),
              delete r.stop,
              o.call(
                t,
                function () {
                  p.dequeue(t, e);
                },
                r
              )),
            !i && r && r.empty.fire();
        },
        _queueHooks: function (t, e) {
          var n = e + "queueHooks";
          return (
            p._data(t, n) ||
            p._data(t, n, {
              empty: p.Callbacks("once memory").add(function () {
                p._removeData(t, e + "queue"), p._removeData(t, n);
              }),
            })
          );
        },
      }),
      p.fn.extend({
        queue: function (t, e) {
          var n = 2;
          return (
            "string" != typeof t && ((e = t), (t = "fx"), n--),
            arguments.length < n
              ? p.queue(this[0], t)
              : void 0 === e
              ? this
              : this.each(function () {
                  var n = p.queue(this, t, e);
                  p._queueHooks(this, t),
                    "fx" === t && "inprogress" !== n[0] && p.dequeue(this, t);
                })
          );
        },
        dequeue: function (t) {
          return this.each(function () {
            p.dequeue(this, t);
          });
        },
        clearQueue: function (t) {
          return this.queue(t || "fx", []);
        },
        promise: function (t, e) {
          var n,
            i = 1,
            o = p.Deferred(),
            r = this,
            s = this.length,
            a = function () {
              --i || o.resolveWith(r, [r]);
            };
          for (
            "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
            s--;

          )
            (n = p._data(r[s], t + "queueHooks")),
              n && n.empty && (i++, n.empty.add(a));
          return a(), o.promise(e);
        },
      });
    var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      z = ["Top", "Right", "Bottom", "Left"],
      W = function (t, e) {
        return (
          (t = e || t),
          "none" === p.css(t, "display") || !p.contains(t.ownerDocument, t)
        );
      },
      U = (p.access = function (t, e, n, i, o, r, s) {
        var a = 0,
          l = t.length,
          c = null == n;
        if ("object" === p.type(n)) {
          o = !0;
          for (a in n) p.access(t, e, a, n[a], !0, r, s);
        } else if (
          void 0 !== i &&
          ((o = !0),
          p.isFunction(i) || (s = !0),
          c &&
            (s
              ? (e.call(t, i), (e = null))
              : ((c = e),
                (e = function (t, e, n) {
                  return c.call(p(t), n);
                }))),
          e)
        )
          for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return o ? t : c ? e.call(t) : l ? e(t[0], n) : r;
      }),
      V = /^(?:checkbox|radio)$/i;
    !(function () {
      var t = E.createElement("input"),
        e = E.createElement("div"),
        n = E.createDocumentFragment();
      if (
        ((e.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (u.leadingWhitespace = 3 === e.firstChild.nodeType),
        (u.tbody = !e.getElementsByTagName("tbody").length),
        (u.htmlSerialize = !!e.getElementsByTagName("link").length),
        (u.html5Clone =
          "<:nav></:nav>" !== E.createElement("nav").cloneNode(!0).outerHTML),
        (t.type = "checkbox"),
        (t.checked = !0),
        n.appendChild(t),
        (u.appendChecked = t.checked),
        (e.innerHTML = "<textarea>x</textarea>"),
        (u.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
        n.appendChild(e),
        (e.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
        (u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (u.noCloneEvent = !0),
        e.attachEvent &&
          (e.attachEvent("onclick", function () {
            u.noCloneEvent = !1;
          }),
          e.cloneNode(!0).click()),
        null == u.deleteExpando)
      ) {
        u.deleteExpando = !0;
        try {
          delete e.test;
        } catch (t) {
          u.deleteExpando = !1;
        }
      }
    })(),
      (function () {
        var e,
          n,
          i = E.createElement("div");
        for (e in { submit: !0, change: !0, focusin: !0 })
          (n = "on" + e),
            (u[e + "Bubbles"] = n in t) ||
              (i.setAttribute(n, "t"),
              (u[e + "Bubbles"] = !1 === i.attributes[n].expando));
        i = null;
      })();
    var X = /^(?:input|select|textarea)$/i,
      Q = /^key/,
      J = /^(?:mouse|pointer|contextmenu)|click/,
      Y = /^(?:focusinfocus|focusoutblur)$/,
      G = /^([^.]*)(?:\.(.+)|)$/;
    function K() {
      return !0;
    }
    function Z() {
      return !1;
    }
    function tt() {
      try {
        return E.activeElement;
      } catch (t) {}
    }
    function et(t) {
      var e = nt.split("|"),
        n = t.createDocumentFragment();
      if (n.createElement) for (; e.length; ) n.createElement(e.pop());
      return n;
    }
    (p.event = {
      global: {},
      add: function (t, e, n, i, o) {
        var r,
          s,
          a,
          l,
          c,
          u,
          d,
          h,
          f,
          g,
          m,
          v = p._data(t);
        if (v) {
          for (
            n.handler && ((n = (l = n).handler), (o = l.selector)),
              n.guid || (n.guid = p.guid++),
              (s = v.events) || (s = v.events = {}),
              (u = v.handle) ||
                ((u = v.handle =
                  function (t) {
                    return typeof p === I || (t && p.event.triggered === t.type)
                      ? void 0
                      : p.event.dispatch.apply(u.elem, arguments);
                  }).elem = t),
              a = (e = (e || "").match(D) || [""]).length;
            a--;

          )
            (r = G.exec(e[a]) || []),
              (f = m = r[1]),
              (g = (r[2] || "").split(".").sort()),
              f &&
                ((c = p.event.special[f] || {}),
                (f = (o ? c.delegateType : c.bindType) || f),
                (c = p.event.special[f] || {}),
                (d = p.extend(
                  {
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && p.expr.match.needsContext.test(o),
                    namespace: g.join("."),
                  },
                  l
                )),
                (h = s[f]) ||
                  ((h = s[f] = []),
                  (h.delegateCount = 0),
                  (c.setup && !1 !== c.setup.call(t, i, g, u)) ||
                    (t.addEventListener
                      ? t.addEventListener(f, u, !1)
                      : t.attachEvent && t.attachEvent("on" + f, u))),
                c.add &&
                  (c.add.call(t, d),
                  d.handler.guid || (d.handler.guid = n.guid)),
                o ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                (p.event.global[f] = !0));
          t = null;
        }
      },
      remove: function (t, e, n, i, o) {
        var r,
          s,
          a,
          l,
          c,
          u,
          d,
          h,
          f,
          g,
          m,
          v = p.hasData(t) && p._data(t);
        if (v && (u = v.events)) {
          for (c = (e = (e || "").match(D) || [""]).length; c--; )
            if (
              ((a = G.exec(e[c]) || []),
              (f = m = a[1]),
              (g = (a[2] || "").split(".").sort()),
              f)
            ) {
              for (
                d = p.event.special[f] || {},
                  h = u[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  l = r = h.length;
                r--;

              )
                (s = h[r]),
                  (!o && m !== s.origType) ||
                    (n && n.guid !== s.guid) ||
                    (a && !a.test(s.namespace)) ||
                    (i && i !== s.selector && ("**" !== i || !s.selector)) ||
                    (h.splice(r, 1),
                    s.selector && h.delegateCount--,
                    d.remove && d.remove.call(t, s));
              l &&
                !h.length &&
                ((d.teardown && !1 !== d.teardown.call(t, g, v.handle)) ||
                  p.removeEvent(t, f, v.handle),
                delete u[f]);
            } else for (f in u) p.event.remove(t, f + e[c], n, i, !0);
          p.isEmptyObject(u) && (delete v.handle, p._removeData(t, "events"));
        }
      },
      trigger: function (e, n, i, o) {
        var r,
          s,
          a,
          l,
          u,
          d,
          h,
          f = [i || E],
          g = c.call(e, "type") ? e.type : e,
          m = c.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((a = d = i = i || E),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !Y.test(g + p.event.triggered) &&
            (g.indexOf(".") >= 0 &&
              ((g = (m = g.split(".")).shift()), m.sort()),
            (s = g.indexOf(":") < 0 && "on" + g),
            ((e = e[p.expando]
              ? e
              : new p.Event(g, "object" == typeof e && e)).isTrigger = o
              ? 2
              : 3),
            (e.namespace = m.join(".")),
            (e.namespace_re = e.namespace
              ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = i),
            (n = null == n ? [e] : p.makeArray(n, [e])),
            (u = p.event.special[g] || {}),
            o || !u.trigger || !1 !== u.trigger.apply(i, n)))
        ) {
          if (!o && !u.noBubble && !p.isWindow(i)) {
            for (
              l = u.delegateType || g, Y.test(l + g) || (a = a.parentNode);
              a;
              a = a.parentNode
            )
              f.push(a), (d = a);
            d === (i.ownerDocument || E) &&
              f.push(d.defaultView || d.parentWindow || t);
          }
          for (h = 0; (a = f[h++]) && !e.isPropagationStopped(); )
            (e.type = h > 1 ? l : u.bindType || g),
              (r =
                (p._data(a, "events") || {})[e.type] && p._data(a, "handle")),
              r && r.apply(a, n),
              (r = s && a[s]),
              r &&
                r.apply &&
                p.acceptData(a) &&
                ((e.result = r.apply(a, n)),
                !1 === e.result && e.preventDefault());
          if (
            ((e.type = g),
            !o &&
              !e.isDefaultPrevented() &&
              (!u._default || !1 === u._default.apply(f.pop(), n)) &&
              p.acceptData(i) &&
              s &&
              i[g] &&
              !p.isWindow(i))
          ) {
            (d = i[s]) && (i[s] = null), (p.event.triggered = g);
            try {
              i[g]();
            } catch (t) {}
            (p.event.triggered = void 0), d && (i[s] = d);
          }
          return e.result;
        }
      },
      dispatch: function (t) {
        t = p.event.fix(t);
        var e,
          n,
          o,
          r,
          s,
          a = [],
          l = i.call(arguments),
          c = (p._data(this, "events") || {})[t.type] || [],
          u = p.event.special[t.type] || {};
        if (
          ((l[0] = t),
          (t.delegateTarget = this),
          !u.preDispatch || !1 !== u.preDispatch.call(this, t))
        ) {
          for (
            a = p.event.handlers.call(this, t, c), e = 0;
            (r = a[e++]) && !t.isPropagationStopped();

          )
            for (
              t.currentTarget = r.elem, s = 0;
              (o = r.handlers[s++]) && !t.isImmediatePropagationStopped();

            )
              (!t.namespace_re || t.namespace_re.test(o.namespace)) &&
                ((t.handleObj = o),
                (t.data = o.data),
                (n = (
                  (p.event.special[o.origType] || {}).handle || o.handler
                ).apply(r.elem, l)),
                void 0 !== n &&
                  !1 === (t.result = n) &&
                  (t.preventDefault(), t.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, t), t.result;
        }
      },
      handlers: function (t, e) {
        var n,
          i,
          o,
          r,
          s = [],
          a = e.delegateCount,
          l = t.target;
        if (a && l.nodeType && (!t.button || "click" !== t.type))
          for (; l != this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
              for (o = [], r = 0; a > r; r++)
                (i = e[r]),
                  (n = i.selector + " "),
                  void 0 === o[n] &&
                    (o[n] = i.needsContext
                      ? p(n, this).index(l) >= 0
                      : p.find(n, this, null, [l]).length),
                  o[n] && o.push(i);
              o.length && s.push({ elem: l, handlers: o });
            }
        return a < e.length && s.push({ elem: this, handlers: e.slice(a) }), s;
      },
      fix: function (t) {
        if (t[p.expando]) return t;
        var e,
          n,
          i,
          o = t.type,
          r = t,
          s = this.fixHooks[o];
        for (
          s ||
            (this.fixHooks[o] = s =
              J.test(o) ? this.mouseHooks : Q.test(o) ? this.keyHooks : {}),
            i = s.props ? this.props.concat(s.props) : this.props,
            t = new p.Event(r),
            e = i.length;
          e--;

        )
          (n = i[e]), (t[n] = r[n]);
        return (
          t.target || (t.target = r.srcElement || E),
          3 === t.target.nodeType && (t.target = t.target.parentNode),
          (t.metaKey = !!t.metaKey),
          s.filter ? s.filter(t, r) : t
        );
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (t, e) {
          return (
            null == t.which &&
              (t.which = null != e.charCode ? e.charCode : e.keyCode),
            t
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (t, e) {
          var n,
            i,
            o,
            r = e.button,
            s = e.fromElement;
          return (
            null == t.pageX &&
              null != e.clientX &&
              ((o = (i = t.target.ownerDocument || E).documentElement),
              (n = i.body),
              (t.pageX =
                e.clientX +
                ((o && o.scrollLeft) || (n && n.scrollLeft) || 0) -
                ((o && o.clientLeft) || (n && n.clientLeft) || 0)),
              (t.pageY =
                e.clientY +
                ((o && o.scrollTop) || (n && n.scrollTop) || 0) -
                ((o && o.clientTop) || (n && n.clientTop) || 0))),
            !t.relatedTarget &&
              s &&
              (t.relatedTarget = s === t.target ? e.toElement : s),
            t.which ||
              void 0 === r ||
              (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
            t
          );
        },
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== tt() && this.focus)
              try {
                return this.focus(), !1;
              } catch (t) {}
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === tt() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return p.nodeName(this, "input") &&
              "checkbox" === this.type &&
              this.click
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (t) {
            return p.nodeName(t.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (t) {
            void 0 !== t.result &&
              t.originalEvent &&
              (t.originalEvent.returnValue = t.result);
          },
        },
      },
      simulate: function (t, e, n, i) {
        var o = p.extend(new p.Event(), n, {
          type: t,
          isSimulated: !0,
          originalEvent: {},
        });
        i ? p.event.trigger(o, null, e) : p.event.dispatch.call(e, o),
          o.isDefaultPrevented() && n.preventDefault();
      },
    }),
      (p.removeEvent = E.removeEventListener
        ? function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1);
          }
        : function (t, e, n) {
            var i = "on" + e;
            t.detachEvent &&
              (typeof t[i] === I && (t[i] = null), t.detachEvent(i, n));
          }),
      (p.Event = function (t, e) {
        return this instanceof p.Event
          ? (t && t.type
              ? ((this.originalEvent = t),
                (this.type = t.type),
                (this.isDefaultPrevented =
                  t.defaultPrevented ||
                  (void 0 === t.defaultPrevented && !1 === t.returnValue)
                    ? K
                    : Z))
              : (this.type = t),
            e && p.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || p.now()),
            void (this[p.expando] = !0))
          : new p.Event(t, e);
      }),
      (p.Event.prototype = {
        isDefaultPrevented: Z,
        isPropagationStopped: Z,
        isImmediatePropagationStopped: Z,
        preventDefault: function () {
          var t = this.originalEvent;
          (this.isDefaultPrevented = K),
            t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
        },
        stopPropagation: function () {
          var t = this.originalEvent;
          (this.isPropagationStopped = K),
            t &&
              (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
        },
        stopImmediatePropagation: function () {
          var t = this.originalEvent;
          (this.isImmediatePropagationStopped = K),
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      p.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (t, e) {
          p.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
              var n,
                i = t.relatedTarget,
                o = t.handleObj;
              return (
                (!i || (i !== this && !p.contains(this, i))) &&
                  ((t.type = o.origType),
                  (n = o.handler.apply(this, arguments)),
                  (t.type = e)),
                n
              );
            },
          };
        }
      ),
      u.submitBubbles ||
        (p.event.special.submit = {
          setup: function () {
            return (
              !p.nodeName(this, "form") &&
              void p.event.add(
                this,
                "click._submit keypress._submit",
                function (t) {
                  var e = t.target,
                    n =
                      p.nodeName(e, "input") || p.nodeName(e, "button")
                        ? e.form
                        : void 0;
                  n &&
                    !p._data(n, "submitBubbles") &&
                    (p.event.add(n, "submit._submit", function (t) {
                      t._submit_bubble = !0;
                    }),
                    p._data(n, "submitBubbles", !0));
                }
              )
            );
          },
          postDispatch: function (t) {
            t._submit_bubble &&
              (delete t._submit_bubble,
              this.parentNode &&
                !t.isTrigger &&
                p.event.simulate("submit", this.parentNode, t, !0));
          },
          teardown: function () {
            return (
              !p.nodeName(this, "form") && void p.event.remove(this, "._submit")
            );
          },
        }),
      u.changeBubbles ||
        (p.event.special.change = {
          setup: function () {
            return X.test(this.nodeName)
              ? (("checkbox" === this.type || "radio" === this.type) &&
                  (p.event.add(this, "propertychange._change", function (t) {
                    "checked" === t.originalEvent.propertyName &&
                      (this._just_changed = !0);
                  }),
                  p.event.add(this, "click._change", function (t) {
                    this._just_changed &&
                      !t.isTrigger &&
                      (this._just_changed = !1),
                      p.event.simulate("change", this, t, !0);
                  })),
                !1)
              : void p.event.add(this, "beforeactivate._change", function (t) {
                  var e = t.target;
                  X.test(e.nodeName) &&
                    !p._data(e, "changeBubbles") &&
                    (p.event.add(e, "change._change", function (t) {
                      !this.parentNode ||
                        t.isSimulated ||
                        t.isTrigger ||
                        p.event.simulate("change", this.parentNode, t, !0);
                    }),
                    p._data(e, "changeBubbles", !0));
                });
          },
          handle: function (t) {
            var e = t.target;
            return this !== e ||
              t.isSimulated ||
              t.isTrigger ||
              ("radio" !== e.type && "checkbox" !== e.type)
              ? t.handleObj.handler.apply(this, arguments)
              : void 0;
          },
          teardown: function () {
            return p.event.remove(this, "._change"), !X.test(this.nodeName);
          },
        }),
      u.focusinBubbles ||
        p.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          var n = function (t) {
            p.event.simulate(e, t.target, p.event.fix(t), !0);
          };
          p.event.special[e] = {
            setup: function () {
              var i = this.ownerDocument || this,
                o = p._data(i, e);
              o || i.addEventListener(t, n, !0), p._data(i, e, (o || 0) + 1);
            },
            teardown: function () {
              var i = this.ownerDocument || this,
                o = p._data(i, e) - 1;
              o
                ? p._data(i, e, o)
                : (i.removeEventListener(t, n, !0), p._removeData(i, e));
            },
          };
        }),
      p.fn.extend({
        on: function (t, e, n, i, o) {
          var r, s;
          if ("object" == typeof t) {
            "string" != typeof e && ((n = n || e), (e = void 0));
            for (r in t) this.on(r, e, n, t[r], o);
            return this;
          }
          if (
            (null == n && null == i
              ? ((i = e), (n = e = void 0))
              : null == i &&
                ("string" == typeof e
                  ? ((i = n), (n = void 0))
                  : ((i = n), (n = e), (e = void 0))),
            !1 === i)
          )
            i = Z;
          else if (!i) return this;
          return (
            1 === o &&
              ((s = i),
              ((i = function (t) {
                return p().off(t), s.apply(this, arguments);
              }).guid = s.guid || (s.guid = p.guid++))),
            this.each(function () {
              p.event.add(this, t, i, n, e);
            })
          );
        },
        one: function (t, e, n, i) {
          return this.on(t, e, n, i, 1);
        },
        off: function (t, e, n) {
          var i, o;
          if (t && t.preventDefault && t.handleObj)
            return (
              (i = t.handleObj),
              p(t.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" == typeof t) {
            for (o in t) this.off(o, e, t[o]);
            return this;
          }
          return (
            (!1 === e || "function" == typeof e) && ((n = e), (e = void 0)),
            !1 === n && (n = Z),
            this.each(function () {
              p.event.remove(this, t, n, e);
            })
          );
        },
        trigger: function (t, e) {
          return this.each(function () {
            p.event.trigger(t, e, this);
          });
        },
        triggerHandler: function (t, e) {
          var n = this[0];
          return n ? p.event.trigger(t, e, n, !0) : void 0;
        },
      });
    var nt =
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      it = / jQuery\d+="(?:null|\d+)"/g,
      ot = new RegExp("<(?:" + nt + ")[\\s/>]", "i"),
      rt = /^\s+/,
      st =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      at = /<([\w:]+)/,
      lt = /<tbody/i,
      ct = /<|&#?\w+;/,
      ut = /<(?:script|style|link)/i,
      dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      pt = /^$|\/(?:java|ecma)script/i,
      ht = /^true\/(.*)/,
      ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      gt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: u.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
      },
      mt = et(E).appendChild(E.createElement("div"));
    function vt(t, e) {
      var n,
        i,
        o = 0,
        r =
          typeof t.getElementsByTagName !== I
            ? t.getElementsByTagName(e || "*")
            : typeof t.querySelectorAll !== I
            ? t.querySelectorAll(e || "*")
            : void 0;
      if (!r)
        for (r = [], n = t.childNodes || t; null != (i = n[o]); o++)
          !e || p.nodeName(i, e) ? r.push(i) : p.merge(r, vt(i, e));
      return void 0 === e || (e && p.nodeName(t, e)) ? p.merge([t], r) : r;
    }
    function yt(t) {
      V.test(t.type) && (t.defaultChecked = t.checked);
    }
    function bt(t, e) {
      return p.nodeName(t, "table") &&
        p.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
        ? t.getElementsByTagName("tbody")[0] ||
            t.appendChild(t.ownerDocument.createElement("tbody"))
        : t;
    }
    function xt(t) {
      return (t.type = (null !== p.find.attr(t, "type")) + "/" + t.type), t;
    }
    function wt(t) {
      var e = ht.exec(t.type);
      return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
    }
    function Tt(t, e) {
      for (var n, i = 0; null != (n = t[i]); i++)
        p._data(n, "globalEval", !e || p._data(e[i], "globalEval"));
    }
    function Ct(t, e) {
      if (1 === e.nodeType && p.hasData(t)) {
        var n,
          i,
          o,
          r = p._data(t),
          s = p._data(e, r),
          a = r.events;
        if (a) {
          delete s.handle, (s.events = {});
          for (n in a)
            for (i = 0, o = a[n].length; o > i; i++) p.event.add(e, n, a[n][i]);
        }
        s.data && (s.data = p.extend({}, s.data));
      }
    }
    function Et(t, e) {
      var n, i, o;
      if (1 === e.nodeType) {
        if (((n = e.nodeName.toLowerCase()), !u.noCloneEvent && e[p.expando])) {
          o = p._data(e);
          for (i in o.events) p.removeEvent(e, i, o.handle);
          e.removeAttribute(p.expando);
        }
        "script" === n && e.text !== t.text
          ? ((xt(e).text = t.text), wt(e))
          : "object" === n
          ? (e.parentNode && (e.outerHTML = t.outerHTML),
            u.html5Clone &&
              t.innerHTML &&
              !p.trim(e.innerHTML) &&
              (e.innerHTML = t.innerHTML))
          : "input" === n && V.test(t.type)
          ? ((e.defaultChecked = e.checked = t.checked),
            e.value !== t.value && (e.value = t.value))
          : "option" === n
          ? (e.defaultSelected = e.selected = t.defaultSelected)
          : ("input" === n || "textarea" === n) &&
            (e.defaultValue = t.defaultValue);
      }
    }
    (gt.optgroup = gt.option),
      (gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead),
      (gt.th = gt.td),
      p.extend({
        clone: function (t, e, n) {
          var i,
            o,
            r,
            s,
            a,
            l = p.contains(t.ownerDocument, t);
          if (
            (u.html5Clone || p.isXMLDoc(t) || !ot.test("<" + t.nodeName + ">")
              ? (r = t.cloneNode(!0))
              : ((mt.innerHTML = t.outerHTML),
                mt.removeChild((r = mt.firstChild))),
            !(
              (u.noCloneEvent && u.noCloneChecked) ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              p.isXMLDoc(t)
            ))
          )
            for (i = vt(r), a = vt(t), s = 0; null != (o = a[s]); ++s)
              i[s] && Et(o, i[s]);
          if (e)
            if (n)
              for (
                a = a || vt(t), i = i || vt(r), s = 0;
                null != (o = a[s]);
                s++
              )
                Ct(o, i[s]);
            else Ct(t, r);
          return (
            (i = vt(r, "script")).length > 0 && Tt(i, !l && vt(t, "script")),
            (i = a = o = null),
            r
          );
        },
        buildFragment: function (t, e, n, i) {
          for (
            var o, r, s, a, l, c, d, h = t.length, f = et(e), g = [], m = 0;
            h > m;
            m++
          )
            if (((r = t[m]), r || 0 === r))
              if ("object" === p.type(r)) p.merge(g, r.nodeType ? [r] : r);
              else if (ct.test(r)) {
                for (
                  a = a || f.appendChild(e.createElement("div")),
                    l = (at.exec(r) || ["", ""])[1].toLowerCase(),
                    d = gt[l] || gt._default,
                    a.innerHTML = d[1] + r.replace(st, "<$1></$2>") + d[2],
                    o = d[0];
                  o--;

                )
                  a = a.lastChild;
                if (
                  (!u.leadingWhitespace &&
                    rt.test(r) &&
                    g.push(e.createTextNode(rt.exec(r)[0])),
                  !u.tbody)
                )
                  for (
                    o =
                      (r =
                        "table" !== l || lt.test(r)
                          ? "<table>" !== d[1] || lt.test(r)
                            ? 0
                            : a
                          : a.firstChild) && r.childNodes.length;
                    o--;

                  )
                    p.nodeName((c = r.childNodes[o]), "tbody") &&
                      !c.childNodes.length &&
                      r.removeChild(c);
                for (
                  p.merge(g, a.childNodes), a.textContent = "";
                  a.firstChild;

                )
                  a.removeChild(a.firstChild);
                a = f.lastChild;
              } else g.push(e.createTextNode(r));
          for (
            a && f.removeChild(a),
              u.appendChecked || p.grep(vt(g, "input"), yt),
              m = 0;
            (r = g[m++]);

          )
            if (
              (!i || -1 === p.inArray(r, i)) &&
              ((s = p.contains(r.ownerDocument, r)),
              (a = vt(f.appendChild(r), "script")),
              s && Tt(a),
              n)
            )
              for (o = 0; (r = a[o++]); ) pt.test(r.type || "") && n.push(r);
          return (a = null), f;
        },
        cleanData: function (t, e) {
          for (
            var i,
              o,
              r,
              s,
              a = 0,
              l = p.expando,
              c = p.cache,
              d = u.deleteExpando,
              h = p.event.special;
            null != (i = t[a]);
            a++
          )
            if ((e || p.acceptData(i)) && ((r = i[l]), (s = r && c[r]))) {
              if (s.events)
                for (o in s.events)
                  h[o] ? p.event.remove(i, o) : p.removeEvent(i, o, s.handle);
              c[r] &&
                (delete c[r],
                d
                  ? delete i[l]
                  : typeof i.removeAttribute !== I
                  ? i.removeAttribute(l)
                  : (i[l] = null),
                n.push(r));
            }
        },
      }),
      p.fn.extend({
        text: function (t) {
          return U(
            this,
            function (t) {
              return void 0 === t
                ? p.text(this)
                : this.empty().append(
                    ((this[0] && this[0].ownerDocument) || E).createTextNode(t)
                  );
            },
            null,
            t,
            arguments.length
          );
        },
        append: function () {
          return this.domManip(arguments, function (t) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              bt(this, t).appendChild(t);
          });
        },
        prepend: function () {
          return this.domManip(arguments, function (t) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var e = bt(this, t);
              e.insertBefore(t, e.firstChild);
            }
          });
        },
        before: function () {
          return this.domManip(arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this);
          });
        },
        after: function () {
          return this.domManip(arguments, function (t) {
            this.parentNode &&
              this.parentNode.insertBefore(t, this.nextSibling);
          });
        },
        remove: function (t, e) {
          for (
            var n, i = t ? p.filter(t, this) : this, o = 0;
            null != (n = i[o]);
            o++
          )
            e || 1 !== n.nodeType || p.cleanData(vt(n)),
              n.parentNode &&
                (e && p.contains(n.ownerDocument, n) && Tt(vt(n, "script")),
                n.parentNode.removeChild(n));
          return this;
        },
        empty: function () {
          for (var t, e = 0; null != (t = this[e]); e++) {
            for (1 === t.nodeType && p.cleanData(vt(t, !1)); t.firstChild; )
              t.removeChild(t.firstChild);
            t.options && p.nodeName(t, "select") && (t.options.length = 0);
          }
          return this;
        },
        clone: function (t, e) {
          return (
            (t = null != t && t),
            (e = null == e ? t : e),
            this.map(function () {
              return p.clone(this, t, e);
            })
          );
        },
        html: function (t) {
          return U(
            this,
            function (t) {
              var e = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === t)
                return 1 === e.nodeType ? e.innerHTML.replace(it, "") : void 0;
              if (
                !(
                  "string" != typeof t ||
                  ut.test(t) ||
                  (!u.htmlSerialize && ot.test(t)) ||
                  (!u.leadingWhitespace && rt.test(t)) ||
                  gt[(at.exec(t) || ["", ""])[1].toLowerCase()]
                )
              ) {
                t = t.replace(st, "<$1></$2>");
                try {
                  for (; i > n; n++)
                    (e = this[n] || {}),
                      1 === e.nodeType &&
                        (p.cleanData(vt(e, !1)), (e.innerHTML = t));
                  e = 0;
                } catch (t) {}
              }
              e && this.empty().append(t);
            },
            null,
            t,
            arguments.length
          );
        },
        replaceWith: function () {
          var t = arguments[0];
          return (
            this.domManip(arguments, function (e) {
              (t = this.parentNode),
                p.cleanData(vt(this)),
                t && t.replaceChild(e, this);
            }),
            t && (t.length || t.nodeType) ? this : this.remove()
          );
        },
        detach: function (t) {
          return this.remove(t, !0);
        },
        domManip: function (t, e) {
          t = o.apply([], t);
          var n,
            i,
            r,
            s,
            a,
            l,
            c = 0,
            d = this.length,
            h = this,
            f = d - 1,
            g = t[0],
            m = p.isFunction(g);
          if (
            m ||
            (d > 1 && "string" == typeof g && !u.checkClone && dt.test(g))
          )
            return this.each(function (n) {
              var i = h.eq(n);
              m && (t[0] = g.call(this, n, i.html())), i.domManip(t, e);
            });
          if (
            d &&
            ((n = (l = p.buildFragment(t, this[0].ownerDocument, !1, this))
              .firstChild),
            1 === l.childNodes.length && (l = n),
            n)
          ) {
            for (r = (s = p.map(vt(l, "script"), xt)).length; d > c; c++)
              (i = l),
                c !== f &&
                  ((i = p.clone(i, !0, !0)), r && p.merge(s, vt(i, "script"))),
                e.call(this[c], i, c);
            if (r)
              for (
                a = s[s.length - 1].ownerDocument, p.map(s, wt), c = 0;
                r > c;
                c++
              )
                (i = s[c]),
                  pt.test(i.type || "") &&
                    !p._data(i, "globalEval") &&
                    p.contains(a, i) &&
                    (i.src
                      ? p._evalUrl && p._evalUrl(i.src)
                      : p.globalEval(
                          (
                            i.text ||
                            i.textContent ||
                            i.innerHTML ||
                            ""
                          ).replace(ft, "")
                        ));
            l = n = null;
          }
          return this;
        },
      }),
      p.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (t, e) {
          p.fn[t] = function (t) {
            for (var n, i = 0, o = [], s = p(t), a = s.length - 1; a >= i; i++)
              (n = i === a ? this : this.clone(!0)),
                p(s[i])[e](n),
                r.apply(o, n.get());
            return this.pushStack(o);
          };
        }
      );
    var kt,
      Nt,
      St = {};
    function $t(e, n) {
      var i,
        o = p(n.createElement(e)).appendTo(n.body),
        r =
          t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0]))
            ? i.display
            : p.css(o[0], "display");
      return o.detach(), r;
    }
    function At(t) {
      var e = E,
        n = St[t];
      return (
        n ||
          (("none" !== (n = $t(t, e)) && n) ||
            ((e = (
              (kt = (
                kt || p("<iframe frameborder='0' width='0' height='0'/>")
              ).appendTo(e.documentElement))[0].contentWindow ||
              kt[0].contentDocument
            ).document).write(),
            e.close(),
            (n = $t(t, e)),
            kt.detach()),
          (St[t] = n)),
        n
      );
    }
    u.shrinkWrapBlocks = function () {
      return null != Nt
        ? Nt
        : ((Nt = !1),
          (e = E.getElementsByTagName("body")[0]) && e.style
            ? ((t = E.createElement("div")),
              ((n = E.createElement("div")).style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              e.appendChild(n).appendChild(t),
              typeof t.style.zoom !== I &&
                ((t.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (t.appendChild(E.createElement("div")).style.width = "5px"),
                (Nt = 3 !== t.offsetWidth)),
              e.removeChild(n),
              Nt)
            : void 0);
      var t, e, n;
    };
    var Dt,
      jt,
      Ot = /^margin/,
      Lt = new RegExp("^(" + B + ")(?!px)[a-z%]+$", "i"),
      Ht = /^(top|right|bottom|left)$/;
    function It(t, e) {
      return {
        get: function () {
          var n = t();
          if (null != n)
            return n
              ? void delete this.get
              : (this.get = e).apply(this, arguments);
        },
      };
    }
    t.getComputedStyle
      ? ((Dt = function (t) {
          return t.ownerDocument.defaultView.getComputedStyle(t, null);
        }),
        (jt = function (t, e, n) {
          var i,
            o,
            r,
            s,
            a = t.style;
          return (
            (s = (n = n || Dt(t)) ? n.getPropertyValue(e) || n[e] : void 0),
            n &&
              ("" !== s ||
                p.contains(t.ownerDocument, t) ||
                (s = p.style(t, e)),
              Lt.test(s) &&
                Ot.test(e) &&
                ((i = a.width),
                (o = a.minWidth),
                (r = a.maxWidth),
                (a.minWidth = a.maxWidth = a.width = s),
                (s = n.width),
                (a.width = i),
                (a.minWidth = o),
                (a.maxWidth = r))),
            void 0 === s ? s : s + ""
          );
        }))
      : E.documentElement.currentStyle &&
        ((Dt = function (t) {
          return t.currentStyle;
        }),
        (jt = function (t, e, n) {
          var i,
            o,
            r,
            s,
            a = t.style;
          return (
            null == (s = (n = n || Dt(t)) ? n[e] : void 0) &&
              a &&
              a[e] &&
              (s = a[e]),
            Lt.test(s) &&
              !Ht.test(e) &&
              ((i = a.left),
              (r = (o = t.runtimeStyle) && o.left) &&
                (o.left = t.currentStyle.left),
              (a.left = "fontSize" === e ? "1em" : s),
              (s = a.pixelLeft + "px"),
              (a.left = i),
              r && (o.left = r)),
            void 0 === s ? s : s + "" || "auto"
          );
        })),
      (function () {
        var e, n, i, o, r, s, a;
        if (
          (((e = E.createElement("div")).innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (n = (i = e.getElementsByTagName("a")[0]) && i.style))
        ) {
          function l() {
            var e, n, i, l;
            (n = E.getElementsByTagName("body")[0]) &&
              n.style &&
              ((e = E.createElement("div")),
              ((i = E.createElement("div")).style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              n.appendChild(i).appendChild(e),
              (e.style.cssText =
                "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
              (o = r = !1),
              (a = !0),
              t.getComputedStyle &&
                ((o = "1%" !== (t.getComputedStyle(e, null) || {}).top),
                (r =
                  "4px" ===
                  (t.getComputedStyle(e, null) || { width: "4px" }).width),
                ((l = e.appendChild(E.createElement("div"))).style.cssText =
                  e.style.cssText =
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                (l.style.marginRight = l.style.width = "0"),
                (e.style.width = "1px"),
                (a = !parseFloat(
                  (t.getComputedStyle(l, null) || {}).marginRight
                ))),
              (e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
              ((l = e.getElementsByTagName("td"))[0].style.cssText =
                "margin:0;border:0;padding:0;display:none"),
              (s = 0 === l[0].offsetHeight) &&
                ((l[0].style.display = ""),
                (l[1].style.display = "none"),
                (s = 0 === l[0].offsetHeight)),
              n.removeChild(i));
          }
          (n.cssText = "float:left;opacity:.5"),
            (u.opacity = "0.5" === n.opacity),
            (u.cssFloat = !!n.cssFloat),
            (e.style.backgroundClip = "content-box"),
            (e.cloneNode(!0).style.backgroundClip = ""),
            (u.clearCloneStyle = "content-box" === e.style.backgroundClip),
            (u.boxSizing =
              "" === n.boxSizing ||
              "" === n.MozBoxSizing ||
              "" === n.WebkitBoxSizing),
            p.extend(u, {
              reliableHiddenOffsets: function () {
                return null == s && l(), s;
              },
              boxSizingReliable: function () {
                return null == r && l(), r;
              },
              pixelPosition: function () {
                return null == o && l(), o;
              },
              reliableMarginRight: function () {
                return null == a && l(), a;
              },
            });
        }
      })(),
      (p.swap = function (t, e, n, i) {
        var o,
          r,
          s = {};
        for (r in e) (s[r] = t.style[r]), (t.style[r] = e[r]);
        o = n.apply(t, i || []);
        for (r in e) t.style[r] = s[r];
        return o;
      });
    var _t = /alpha\([^)]*\)/i,
      Rt = /opacity\s*=\s*([^)]*)/,
      Pt = /^(none|table(?!-c[ea]).+)/,
      qt = new RegExp("^(" + B + ")(.*)$", "i"),
      Mt = new RegExp("^([+-])=(" + B + ")", "i"),
      Ft = { position: "absolute", visibility: "hidden", display: "block" },
      Bt = { letterSpacing: "0", fontWeight: "400" },
      zt = ["Webkit", "O", "Moz", "ms"];
    function Wt(t, e) {
      if (e in t) return e;
      for (
        var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = zt.length;
        o--;

      )
        if (((e = zt[o] + n), e in t)) return e;
      return i;
    }
    function Ut(t, e) {
      for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++)
        (i = t[s]),
          i.style &&
            ((r[s] = p._data(i, "olddisplay")),
            (n = i.style.display),
            e
              ? (r[s] || "none" !== n || (i.style.display = ""),
                "" === i.style.display &&
                  W(i) &&
                  (r[s] = p._data(i, "olddisplay", At(i.nodeName))))
              : ((o = W(i)),
                ((n && "none" !== n) || !o) &&
                  p._data(i, "olddisplay", o ? n : p.css(i, "display"))));
      for (s = 0; a > s; s++)
        (i = t[s]),
          i.style &&
            ((e && "none" !== i.style.display && "" !== i.style.display) ||
              (i.style.display = e ? r[s] || "" : "none"));
      return t;
    }
    function Vt(t, e, n) {
      var i = qt.exec(e);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e;
    }
    function Xt(t, e, n, i, o) {
      for (
        var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
          s = 0;
        4 > r;
        r += 2
      )
        "margin" === n && (s += p.css(t, n + z[r], !0, o)),
          i
            ? ("content" === n && (s -= p.css(t, "padding" + z[r], !0, o)),
              "margin" !== n &&
                (s -= p.css(t, "border" + z[r] + "Width", !0, o)))
            : ((s += p.css(t, "padding" + z[r], !0, o)),
              "padding" !== n &&
                (s += p.css(t, "border" + z[r] + "Width", !0, o)));
      return s;
    }
    function Qt(t, e, n) {
      var i = !0,
        o = "width" === e ? t.offsetWidth : t.offsetHeight,
        r = Dt(t),
        s = u.boxSizing && "border-box" === p.css(t, "boxSizing", !1, r);
      if (0 >= o || null == o) {
        if (
          ((0 > (o = jt(t, e, r)) || null == o) && (o = t.style[e]), Lt.test(o))
        )
          return o;
        (i = s && (u.boxSizingReliable() || o === t.style[e])),
          (o = parseFloat(o) || 0);
      }
      return o + Xt(t, e, n || (s ? "border" : "content"), i, r) + "px";
    }
    function Jt(t, e, n, i, o) {
      return new Jt.prototype.init(t, e, n, i, o);
    }
    p.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = jt(t, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: u.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (t, e, n, i) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var o,
            r,
            s,
            a = p.camelCase(e),
            l = t.style;
          if (
            ((e = p.cssProps[a] || (p.cssProps[a] = Wt(l, a))),
            (s = p.cssHooks[e] || p.cssHooks[a]),
            void 0 === n)
          )
            return s && "get" in s && void 0 !== (o = s.get(t, !1, i))
              ? o
              : l[e];
          if (
            ("string" === (r = typeof n) &&
              (o = Mt.exec(n)) &&
              ((n = (o[1] + 1) * o[2] + parseFloat(p.css(t, e))),
              (r = "number")),
            null != n &&
              n == n &&
              ("number" !== r || p.cssNumber[a] || (n += "px"),
              u.clearCloneStyle ||
                "" !== n ||
                0 !== e.indexOf("background") ||
                (l[e] = "inherit"),
              !(s && "set" in s && void 0 === (n = s.set(t, n, i)))))
          )
            try {
              l[e] = n;
            } catch (t) {}
        }
      },
      css: function (t, e, n, i) {
        var o,
          r,
          s,
          a = p.camelCase(e);
        return (
          (e = p.cssProps[a] || (p.cssProps[a] = Wt(t.style, a))),
          (s = p.cssHooks[e] || p.cssHooks[a]) &&
            "get" in s &&
            (r = s.get(t, !0, n)),
          void 0 === r && (r = jt(t, e, i)),
          "normal" === r && e in Bt && (r = Bt[e]),
          "" === n || n
            ? ((o = parseFloat(r)), !0 === n || p.isNumeric(o) ? o || 0 : r)
            : r
        );
      },
    }),
      p.each(["height", "width"], function (t, e) {
        p.cssHooks[e] = {
          get: function (t, n, i) {
            return n
              ? Pt.test(p.css(t, "display")) && 0 === t.offsetWidth
                ? p.swap(t, Ft, function () {
                    return Qt(t, e, i);
                  })
                : Qt(t, e, i)
              : void 0;
          },
          set: function (t, n, i) {
            var o = i && Dt(t);
            return Vt(
              0,
              n,
              i
                ? Xt(
                    t,
                    e,
                    i,
                    u.boxSizing &&
                      "border-box" === p.css(t, "boxSizing", !1, o),
                    o
                  )
                : 0
            );
          },
        };
      }),
      u.opacity ||
        (p.cssHooks.opacity = {
          get: function (t, e) {
            return Rt.test(
              (e && t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                ""
            )
              ? 0.01 * parseFloat(RegExp.$1) + ""
              : e
              ? "1"
              : "";
          },
          set: function (t, e) {
            var n = t.style,
              i = t.currentStyle,
              o = p.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
              r = (i && i.filter) || n.filter || "";
            (n.zoom = 1),
              ((e >= 1 || "" === e) &&
                "" === p.trim(r.replace(_t, "")) &&
                n.removeAttribute &&
                (n.removeAttribute("filter"), "" === e || (i && !i.filter))) ||
                (n.filter = _t.test(r) ? r.replace(_t, o) : r + " " + o);
          },
        }),
      (p.cssHooks.marginRight = It(u.reliableMarginRight, function (t, e) {
        return e
          ? p.swap(t, { display: "inline-block" }, jt, [t, "marginRight"])
          : void 0;
      })),
      p.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
        (p.cssHooks[t + e] = {
          expand: function (n) {
            for (
              var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n];
              4 > i;
              i++
            )
              o[t + z[i] + e] = r[i] || r[i - 2] || r[0];
            return o;
          },
        }),
          Ot.test(t) || (p.cssHooks[t + e].set = Vt);
      }),
      p.fn.extend({
        css: function (t, e) {
          return U(
            this,
            function (t, e, n) {
              var i,
                o,
                r = {},
                s = 0;
              if (p.isArray(e)) {
                for (i = Dt(t), o = e.length; o > s; s++)
                  r[e[s]] = p.css(t, e[s], !1, i);
                return r;
              }
              return void 0 !== n ? p.style(t, e, n) : p.css(t, e);
            },
            t,
            e,
            arguments.length > 1
          );
        },
        show: function () {
          return Ut(this, !0);
        },
        hide: function () {
          return Ut(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                W(this) ? p(this).show() : p(this).hide();
              });
        },
      }),
      (p.Tween = Jt),
      (Jt.prototype = {
        constructor: Jt,
        init: function (t, e, n, i, o, r) {
          (this.elem = t),
            (this.prop = n),
            (this.easing = o || "swing"),
            (this.options = e),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = r || (p.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var t = Jt.propHooks[this.prop];
          return t && t.get ? t.get(this) : Jt.propHooks._default.get(this);
        },
        run: function (t) {
          var e,
            n = Jt.propHooks[this.prop];
          return (
            (this.pos = e =
              this.options.duration
                ? p.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  )
                : t),
            (this.now = (this.end - this.start) * e + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Jt.propHooks._default.set(this),
            this
          );
        },
      }),
      (Jt.prototype.init.prototype = Jt.prototype),
      (Jt.propHooks = {
        _default: {
          get: function (t) {
            var e;
            return null == t.elem[t.prop] ||
              (t.elem.style && null != t.elem.style[t.prop])
              ? (e = p.css(t.elem, t.prop, "")) && "auto" !== e
                ? e
                : 0
              : t.elem[t.prop];
          },
          set: function (t) {
            p.fx.step[t.prop]
              ? p.fx.step[t.prop](t)
              : t.elem.style &&
                (null != t.elem.style[p.cssProps[t.prop]] || p.cssHooks[t.prop])
              ? p.style(t.elem, t.prop, t.now + t.unit)
              : (t.elem[t.prop] = t.now);
          },
        },
      }),
      (Jt.propHooks.scrollTop = Jt.propHooks.scrollLeft =
        {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
      (p.easing = {
        linear: function (t) {
          return t;
        },
        swing: function (t) {
          return 0.5 - Math.cos(t * Math.PI) / 2;
        },
      }),
      (p.fx = Jt.prototype.init),
      (p.fx.step = {});
    var Yt,
      Gt,
      Kt,
      Zt,
      te,
      ee,
      ne,
      ie = /^(?:toggle|show|hide)$/,
      oe = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$", "i"),
      re = /queueHooks$/,
      se = [
        function (t, e, n) {
          var i,
            o,
            r,
            s,
            a,
            l,
            c,
            d = this,
            h = {},
            f = t.style,
            g = t.nodeType && W(t),
            m = p._data(t, "fxshow");
          n.queue ||
            (null == (a = p._queueHooks(t, "fx")).unqueued &&
              ((a.unqueued = 0),
              (l = a.empty.fire),
              (a.empty.fire = function () {
                a.unqueued || l();
              })),
            a.unqueued++,
            d.always(function () {
              d.always(function () {
                a.unqueued--, p.queue(t, "fx").length || a.empty.fire();
              });
            })),
            1 === t.nodeType &&
              ("height" in e || "width" in e) &&
              ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
              (c = p.css(t, "display")),
              "inline" ===
                ("none" === c
                  ? p._data(t, "olddisplay") || At(t.nodeName)
                  : c) &&
                "none" === p.css(t, "float") &&
                (u.inlineBlockNeedsLayout && "inline" !== At(t.nodeName)
                  ? (f.zoom = 1)
                  : (f.display = "inline-block"))),
            n.overflow &&
              ((f.overflow = "hidden"),
              u.shrinkWrapBlocks() ||
                d.always(function () {
                  (f.overflow = n.overflow[0]),
                    (f.overflowX = n.overflow[1]),
                    (f.overflowY = n.overflow[2]);
                }));
          for (i in e)
            if (((o = e[i]), ie.exec(o))) {
              if (
                (delete e[i],
                (r = r || "toggle" === o),
                o === (g ? "hide" : "show"))
              ) {
                if ("show" !== o || !m || void 0 === m[i]) continue;
                g = !0;
              }
              h[i] = (m && m[i]) || p.style(t, i);
            } else c = void 0;
          if (p.isEmptyObject(h))
            "inline" === ("none" === c ? At(t.nodeName) : c) && (f.display = c);
          else {
            m
              ? "hidden" in m && (g = m.hidden)
              : (m = p._data(t, "fxshow", {})),
              r && (m.hidden = !g),
              g
                ? p(t).show()
                : d.done(function () {
                    p(t).hide();
                  }),
              d.done(function () {
                var e;
                p._removeData(t, "fxshow");
                for (e in h) p.style(t, e, h[e]);
              });
            for (i in h)
              (s = ue(g ? m[i] : 0, i, d)),
                i in m ||
                  ((m[i] = s.start),
                  g &&
                    ((s.end = s.start),
                    (s.start = "width" === i || "height" === i ? 1 : 0)));
          }
        },
      ],
      ae = {
        "*": [
          function (t, e) {
            var n = this.createTween(t, e),
              i = n.cur(),
              o = oe.exec(e),
              r = (o && o[3]) || (p.cssNumber[t] ? "" : "px"),
              s =
                (p.cssNumber[t] || ("px" !== r && +i)) &&
                oe.exec(p.css(n.elem, t)),
              a = 1,
              l = 20;
            if (s && s[3] !== r) {
              (r = r || s[3]), (o = o || []), (s = +i || 1);
              do {
                (a = a || ".5"), (s /= a), p.style(n.elem, t, s + r);
              } while (a !== (a = n.cur() / i) && 1 !== a && --l);
            }
            return (
              o &&
                ((s = n.start = +s || +i || 0),
                (n.unit = r),
                (n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2])),
              n
            );
          },
        ],
      };
    function le() {
      return (
        setTimeout(function () {
          Yt = void 0;
        }),
        (Yt = p.now())
      );
    }
    function ce(t, e) {
      var n,
        i = { height: t },
        o = 0;
      for (e = e ? 1 : 0; 4 > o; o += 2 - e)
        (n = z[o]), (i["margin" + n] = i["padding" + n] = t);
      return e && (i.opacity = i.width = t), i;
    }
    function ue(t, e, n) {
      for (
        var i, o = (ae[e] || []).concat(ae["*"]), r = 0, s = o.length;
        s > r;
        r++
      )
        if ((i = o[r].call(n, e, t))) return i;
    }
    function de(t, e, n) {
      var i,
        o,
        r = 0,
        s = se.length,
        a = p.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (o) return !1;
          for (
            var e = Yt || le(),
              n = Math.max(0, c.startTime + c.duration - e),
              i = 1 - (n / c.duration || 0),
              r = 0,
              s = c.tweens.length;
            s > r;
            r++
          )
            c.tweens[r].run(i);
          return (
            a.notifyWith(t, [c, i, n]),
            1 > i && s ? n : (a.resolveWith(t, [c]), !1)
          );
        },
        c = a.promise({
          elem: t,
          props: p.extend({}, e),
          opts: p.extend(!0, { specialEasing: {} }, n),
          originalProperties: e,
          originalOptions: n,
          startTime: Yt || le(),
          duration: n.duration,
          tweens: [],
          createTween: function (e, n) {
            var i = p.Tween(
              t,
              c.opts,
              e,
              n,
              c.opts.specialEasing[e] || c.opts.easing
            );
            return c.tweens.push(i), i;
          },
          stop: function (e) {
            var n = 0,
              i = e ? c.tweens.length : 0;
            if (o) return this;
            for (o = !0; i > n; n++) c.tweens[n].run(1);
            return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this;
          },
        }),
        u = c.props;
      for (
        (function (t, e) {
          var n, i, o, r, s;
          for (n in t)
            if (
              ((i = p.camelCase(n)),
              (o = e[i]),
              (r = t[n]),
              p.isArray(r) && ((o = r[1]), (r = t[n] = r[0])),
              n !== i && ((t[i] = r), delete t[n]),
              (s = p.cssHooks[i]),
              s && ("expand" in s))
            ) {
              (r = s.expand(r)), delete t[i];
              for (n in r) (n in t) || ((t[n] = r[n]), (e[n] = o));
            } else e[i] = o;
        })(u, c.opts.specialEasing);
        s > r;
        r++
      )
        if ((i = se[r].call(c, t, u, c.opts))) return i;
      return (
        p.map(u, ue, c),
        p.isFunction(c.opts.start) && c.opts.start.call(t, c),
        p.fx.timer(p.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always)
      );
    }
    (p.Animation = p.extend(de, {
      tweener: function (t, e) {
        p.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
        for (var n, i = 0, o = t.length; o > i; i++)
          (n = t[i]), (ae[n] = ae[n] || []), ae[n].unshift(e);
      },
      prefilter: function (t, e) {
        e ? se.unshift(t) : se.push(t);
      },
    })),
      (p.speed = function (t, e, n) {
        var i =
          t && "object" == typeof t
            ? p.extend({}, t)
            : {
                complete: n || (!n && e) || (p.isFunction(t) && t),
                duration: t,
                easing: (n && e) || (e && !p.isFunction(e) && e),
              };
        return (
          (i.duration = p.fx.off
            ? 0
            : "number" == typeof i.duration
            ? i.duration
            : i.duration in p.fx.speeds
            ? p.fx.speeds[i.duration]
            : p.fx.speeds._default),
          (null == i.queue || !0 === i.queue) && (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            p.isFunction(i.old) && i.old.call(this),
              i.queue && p.dequeue(this, i.queue);
          }),
          i
        );
      }),
      p.fn.extend({
        fadeTo: function (t, e, n, i) {
          return this.filter(W)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: e }, t, n, i);
        },
        animate: function (t, e, n, i) {
          var o = p.isEmptyObject(t),
            r = p.speed(e, n, i),
            s = function () {
              var e = de(this, p.extend({}, t), r);
              (o || p._data(this, "finish")) && e.stop(!0);
            };
          return (
            (s.finish = s),
            o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
          );
        },
        stop: function (t, e, n) {
          var i = function (t) {
            var e = t.stop;
            delete t.stop, e(n);
          };
          return (
            "string" != typeof t && ((n = e), (e = t), (t = void 0)),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function () {
              var e = !0,
                o = null != t && t + "queueHooks",
                r = p.timers,
                s = p._data(this);
              if (o) s[o] && s[o].stop && i(s[o]);
              else for (o in s) s[o] && s[o].stop && re.test(o) && i(s[o]);
              for (o = r.length; o--; )
                r[o].elem !== this ||
                  (null != t && r[o].queue !== t) ||
                  (r[o].anim.stop(n), (e = !1), r.splice(o, 1));
              (e || !n) && p.dequeue(this, t);
            })
          );
        },
        finish: function (t) {
          return (
            !1 !== t && (t = t || "fx"),
            this.each(function () {
              var e,
                n = p._data(this),
                i = n[t + "queue"],
                o = n[t + "queueHooks"],
                r = p.timers,
                s = i ? i.length : 0;
              for (
                n.finish = !0,
                  p.queue(this, t, []),
                  o && o.stop && o.stop.call(this, !0),
                  e = r.length;
                e--;

              )
                r[e].elem === this &&
                  r[e].queue === t &&
                  (r[e].anim.stop(!0), r.splice(e, 1));
              for (e = 0; s > e; e++)
                i[e] && i[e].finish && i[e].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      p.each(["toggle", "show", "hide"], function (t, e) {
        var n = p.fn[e];
        p.fn[e] = function (t, i, o) {
          return null == t || "boolean" == typeof t
            ? n.apply(this, arguments)
            : this.animate(ce(e, !0), t, i, o);
        };
      }),
      p.each(
        {
          slideDown: ce("show"),
          slideUp: ce("hide"),
          slideToggle: ce("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (t, e) {
          p.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i);
          };
        }
      ),
      (p.timers = []),
      (p.fx.tick = function () {
        var t,
          e = p.timers,
          n = 0;
        for (Yt = p.now(); n < e.length; n++)
          (t = e[n]), t() || e[n] !== t || e.splice(n--, 1);
        e.length || p.fx.stop(), (Yt = void 0);
      }),
      (p.fx.timer = function (t) {
        p.timers.push(t), t() ? p.fx.start() : p.timers.pop();
      }),
      (p.fx.interval = 13),
      (p.fx.start = function () {
        Gt || (Gt = setInterval(p.fx.tick, p.fx.interval));
      }),
      (p.fx.stop = function () {
        clearInterval(Gt), (Gt = null);
      }),
      (p.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (p.fn.delay = function (t, e) {
        return (
          (t = (p.fx && p.fx.speeds[t]) || t),
          (e = e || "fx"),
          this.queue(e, function (e, n) {
            var i = setTimeout(e, t);
            n.stop = function () {
              clearTimeout(i);
            };
          })
        );
      }),
      (Zt = E.createElement("div")).setAttribute("className", "t"),
      (Zt.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (ee = Zt.getElementsByTagName("a")[0]),
      (ne = (te = E.createElement("select")).appendChild(
        E.createElement("option")
      )),
      (Kt = Zt.getElementsByTagName("input")[0]),
      (ee.style.cssText = "top:1px"),
      (u.getSetAttribute = "t" !== Zt.className),
      (u.style = /top/.test(ee.getAttribute("style"))),
      (u.hrefNormalized = "/a" === ee.getAttribute("href")),
      (u.checkOn = !!Kt.value),
      (u.optSelected = ne.selected),
      (u.enctype = !!E.createElement("form").enctype),
      (te.disabled = !0),
      (u.optDisabled = !ne.disabled),
      (Kt = E.createElement("input")).setAttribute("value", ""),
      (u.input = "" === Kt.getAttribute("value")),
      (Kt.value = "t"),
      Kt.setAttribute("type", "radio"),
      (u.radioValue = "t" === Kt.value);
    var pe = /\r/g;
    p.fn.extend({
      val: function (t) {
        var e,
          n,
          i,
          o = this[0];
        return arguments.length
          ? ((i = p.isFunction(t)),
            this.each(function (n) {
              var o;
              1 === this.nodeType &&
                (null == (o = i ? t.call(this, n, p(this).val()) : t)
                  ? (o = "")
                  : "number" == typeof o
                  ? (o += "")
                  : p.isArray(o) &&
                    (o = p.map(o, function (t) {
                      return null == t ? "" : t + "";
                    })),
                ((e =
                  p.valHooks[this.type] ||
                  p.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in e &&
                  void 0 !== e.set(this, o, "value")) ||
                  (this.value = o));
            }))
          : o
          ? (e = p.valHooks[o.type] || p.valHooks[o.nodeName.toLowerCase()]) &&
            "get" in e &&
            void 0 !== (n = e.get(o, "value"))
            ? n
            : "string" == typeof (n = o.value)
            ? n.replace(pe, "")
            : null == n
            ? ""
            : n
          : void 0;
      },
    }),
      p.extend({
        valHooks: {
          option: {
            get: function (t) {
              var e = p.find.attr(t, "value");
              return null != e ? e : p.trim(p.text(t));
            },
          },
          select: {
            get: function (t) {
              for (
                var e,
                  n,
                  i = t.options,
                  o = t.selectedIndex,
                  r = "select-one" === t.type || 0 > o,
                  s = r ? null : [],
                  a = r ? o + 1 : i.length,
                  l = 0 > o ? a : r ? o : 0;
                a > l;
                l++
              )
                if (
                  ((n = i[l]),
                  !(
                    (!n.selected && l !== o) ||
                    (u.optDisabled
                      ? n.disabled
                      : null !== n.getAttribute("disabled")) ||
                    (n.parentNode.disabled &&
                      p.nodeName(n.parentNode, "optgroup"))
                  ))
                ) {
                  if (((e = p(n).val()), r)) return e;
                  s.push(e);
                }
              return s;
            },
            set: function (t, e) {
              for (
                var n, i, o = t.options, r = p.makeArray(e), s = o.length;
                s--;

              )
                if (((i = o[s]), p.inArray(p.valHooks.option.get(i), r) >= 0))
                  try {
                    i.selected = n = !0;
                  } catch (t) {
                    i.scrollHeight;
                  }
                else i.selected = !1;
              return n || (t.selectedIndex = -1), o;
            },
          },
        },
      }),
      p.each(["radio", "checkbox"], function () {
        (p.valHooks[this] = {
          set: function (t, e) {
            return p.isArray(e)
              ? (t.checked = p.inArray(p(t).val(), e) >= 0)
              : void 0;
          },
        }),
          u.checkOn ||
            (p.valHooks[this].get = function (t) {
              return null === t.getAttribute("value") ? "on" : t.value;
            });
      });
    var he,
      fe,
      ge = p.expr.attrHandle,
      me = /^(?:checked|selected)$/i,
      ve = u.getSetAttribute,
      ye = u.input;
    p.fn.extend({
      attr: function (t, e) {
        return U(this, p.attr, t, e, arguments.length > 1);
      },
      removeAttr: function (t) {
        return this.each(function () {
          p.removeAttr(this, t);
        });
      },
    }),
      p.extend({
        attr: function (t, e, n) {
          var i,
            o,
            r = t.nodeType;
          if (t && 3 !== r && 8 !== r && 2 !== r)
            return typeof t.getAttribute === I
              ? p.prop(t, e, n)
              : ((1 === r && p.isXMLDoc(t)) ||
                  ((e = e.toLowerCase()),
                  (i =
                    p.attrHooks[e] || (p.expr.match.bool.test(e) ? fe : he))),
                void 0 === n
                  ? i && "get" in i && null !== (o = i.get(t, e))
                    ? o
                    : ((o = p.find.attr(t, e)), null == o ? void 0 : o)
                  : null !== n
                  ? i && "set" in i && void 0 !== (o = i.set(t, n, e))
                    ? o
                    : (t.setAttribute(e, n + ""), n)
                  : void p.removeAttr(t, e));
        },
        removeAttr: function (t, e) {
          var n,
            i,
            o = 0,
            r = e && e.match(D);
          if (r && 1 === t.nodeType)
            for (; (n = r[o++]); )
              (i = p.propFix[n] || n),
                p.expr.match.bool.test(n)
                  ? (ye && ve) || !me.test(n)
                    ? (t[i] = !1)
                    : (t[p.camelCase("default-" + n)] = t[i] = !1)
                  : p.attr(t, n, ""),
                t.removeAttribute(ve ? n : i);
        },
        attrHooks: {
          type: {
            set: function (t, e) {
              if (!u.radioValue && "radio" === e && p.nodeName(t, "input")) {
                var n = t.value;
                return t.setAttribute("type", e), n && (t.value = n), e;
              }
            },
          },
        },
      }),
      (fe = {
        set: function (t, e, n) {
          return (
            !1 === e
              ? p.removeAttr(t, n)
              : (ye && ve) || !me.test(n)
              ? t.setAttribute((!ve && p.propFix[n]) || n, n)
              : (t[p.camelCase("default-" + n)] = t[n] = !0),
            n
          );
        },
      }),
      p.each(p.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = ge[e] || p.find.attr;
        ge[e] =
          (ye && ve) || !me.test(e)
            ? function (t, e, i) {
                var o, r;
                return (
                  i ||
                    ((r = ge[e]),
                    (ge[e] = o),
                    (o = null != n(t, e, i) ? e.toLowerCase() : null),
                    (ge[e] = r)),
                  o
                );
              }
            : function (t, e, n) {
                return n
                  ? void 0
                  : t[p.camelCase("default-" + e)]
                  ? e.toLowerCase()
                  : null;
              };
      }),
      (ye && ve) ||
        (p.attrHooks.value = {
          set: function (t, e, n) {
            return p.nodeName(t, "input")
              ? void (t.defaultValue = e)
              : he && he.set(t, e, n);
          },
        }),
      ve ||
        ((he = {
          set: function (t, e, n) {
            var i = t.getAttributeNode(n);
            return (
              i || t.setAttributeNode((i = t.ownerDocument.createAttribute(n))),
              (i.value = e += ""),
              "value" === n || e === t.getAttribute(n) ? e : void 0
            );
          },
        }),
        (ge.id =
          ge.name =
          ge.coords =
            function (t, e, n) {
              var i;
              return n
                ? void 0
                : (i = t.getAttributeNode(e)) && "" !== i.value
                ? i.value
                : null;
            }),
        (p.valHooks.button = {
          get: function (t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0;
          },
          set: he.set,
        }),
        (p.attrHooks.contenteditable = {
          set: function (t, e, n) {
            he.set(t, "" !== e && e, n);
          },
        }),
        p.each(["width", "height"], function (t, e) {
          p.attrHooks[e] = {
            set: function (t, n) {
              return "" === n ? (t.setAttribute(e, "auto"), n) : void 0;
            },
          };
        })),
      u.style ||
        (p.attrHooks.style = {
          get: function (t) {
            return t.style.cssText || void 0;
          },
          set: function (t, e) {
            return (t.style.cssText = e + "");
          },
        });
    var be = /^(?:input|select|textarea|button|object)$/i,
      xe = /^(?:a|area)$/i;
    p.fn.extend({
      prop: function (t, e) {
        return U(this, p.prop, t, e, arguments.length > 1);
      },
      removeProp: function (t) {
        return (
          (t = p.propFix[t] || t),
          this.each(function () {
            try {
              (this[t] = void 0), delete this[t];
            } catch (t) {}
          })
        );
      },
    }),
      p.extend({
        propFix: { for: "htmlFor", class: "className" },
        prop: function (t, e, n) {
          var i,
            o,
            r,
            s = t.nodeType;
          if (t && 3 !== s && 8 !== s && 2 !== s)
            return (
              (r = 1 !== s || !p.isXMLDoc(t)),
              r && ((e = p.propFix[e] || e), (o = p.propHooks[e])),
              void 0 !== n
                ? o && "set" in o && void 0 !== (i = o.set(t, n, e))
                  ? i
                  : (t[e] = n)
                : o && "get" in o && null !== (i = o.get(t, e))
                ? i
                : t[e]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (t) {
              var e = p.find.attr(t, "tabindex");
              return e
                ? parseInt(e, 10)
                : be.test(t.nodeName) || (xe.test(t.nodeName) && t.href)
                ? 0
                : -1;
            },
          },
        },
      }),
      u.hrefNormalized ||
        p.each(["href", "src"], function (t, e) {
          p.propHooks[e] = {
            get: function (t) {
              return t.getAttribute(e, 4);
            },
          };
        }),
      u.optSelected ||
        (p.propHooks.selected = {
          get: function (t) {
            var e = t.parentNode;
            return (
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
              null
            );
          },
        }),
      p.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          p.propFix[this.toLowerCase()] = this;
        }
      ),
      u.enctype || (p.propFix.enctype = "encoding");
    var we = /[\t\r\n\f]/g;
    p.fn.extend({
      addClass: function (t) {
        var e,
          n,
          i,
          o,
          r,
          s,
          a = 0,
          l = this.length,
          c = "string" == typeof t && t;
        if (p.isFunction(t))
          return this.each(function (e) {
            p(this).addClass(t.call(this, e, this.className));
          });
        if (c)
          for (e = (t || "").match(D) || []; l > a; a++)
            if (
              ((n = this[a]),
              (i =
                1 === n.nodeType &&
                (n.className
                  ? (" " + n.className + " ").replace(we, " ")
                  : " ")))
            ) {
              for (r = 0; (o = e[r++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              (s = p.trim(i)), n.className !== s && (n.className = s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          i,
          o,
          r,
          s,
          a = 0,
          l = this.length,
          c = 0 === arguments.length || ("string" == typeof t && t);
        if (p.isFunction(t))
          return this.each(function (e) {
            p(this).removeClass(t.call(this, e, this.className));
          });
        if (c)
          for (e = (t || "").match(D) || []; l > a; a++)
            if (
              ((n = this[a]),
              (i =
                1 === n.nodeType &&
                (n.className
                  ? (" " + n.className + " ").replace(we, " ")
                  : "")))
            ) {
              for (r = 0; (o = e[r++]); )
                for (; i.indexOf(" " + o + " ") >= 0; )
                  i = i.replace(" " + o + " ", " ");
              (s = t ? p.trim(i) : ""), n.className !== s && (n.className = s);
            }
        return this;
      },
      toggleClass: function (t, e) {
        var n = typeof t;
        return "boolean" == typeof e && "string" === n
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : this.each(
              p.isFunction(t)
                ? function (n) {
                    p(this).toggleClass(t.call(this, n, this.className, e), e);
                  }
                : function () {
                    if ("string" === n)
                      for (
                        var e, i = 0, o = p(this), r = t.match(D) || [];
                        (e = r[i++]);

                      )
                        o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else
                      (n === I || "boolean" === n) &&
                        (this.className &&
                          p._data(this, "__className__", this.className),
                        (this.className =
                          this.className || !1 === t
                            ? ""
                            : p._data(this, "__className__") || ""));
                  }
            );
      },
      hasClass: function (t) {
        for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
          if (
            1 === this[n].nodeType &&
            (" " + this[n].className + " ").replace(we, " ").indexOf(e) >= 0
          )
            return !0;
        return !1;
      },
    }),
      p.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (t, e) {
          p.fn[e] = function (t, n) {
            return arguments.length > 0
              ? this.on(e, null, t, n)
              : this.trigger(e);
          };
        }
      ),
      p.fn.extend({
        hover: function (t, e) {
          return this.mouseenter(t).mouseleave(e || t);
        },
        bind: function (t, e, n) {
          return this.on(t, null, e, n);
        },
        unbind: function (t, e) {
          return this.off(t, null, e);
        },
        delegate: function (t, e, n, i) {
          return this.on(e, t, n, i);
        },
        undelegate: function (t, e, n) {
          return 1 === arguments.length
            ? this.off(t, "**")
            : this.off(e, t || "**", n);
        },
      });
    var Te = p.now(),
      Ce = /\?/,
      Ee =
        /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (p.parseJSON = function (e) {
      if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
      var n,
        i = null,
        o = p.trim(e + "");
      return o &&
        !p.trim(
          o.replace(Ee, function (t, e, o, r) {
            return (
              n && e && (i = 0),
              0 === i ? t : ((n = o || e), (i += !r - !o), "")
            );
          })
        )
        ? Function("return " + o)()
        : p.error("Invalid JSON: " + e);
    }),
      (p.parseXML = function (e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
          t.DOMParser
            ? ((i = new DOMParser()), (n = i.parseFromString(e, "text/xml")))
            : (((n = new ActiveXObject("Microsoft.XMLDOM")).async = "false"),
              n.loadXML(e));
        } catch (t) {
          n = void 0;
        }
        return (
          (n &&
            n.documentElement &&
            !n.getElementsByTagName("parsererror").length) ||
            p.error("Invalid XML: " + e),
          n
        );
      });
    var ke,
      Ne,
      Se = /#.*$/,
      $e = /([?&])_=[^&]*/,
      Ae = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      De = /^(?:GET|HEAD)$/,
      je = /^\/\//,
      Oe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Le = {},
      He = {},
      Ie = "*/".concat("*");
    try {
      Ne = location.href;
    } catch (t) {
      ((Ne = E.createElement("a")).href = ""), (Ne = Ne.href);
    }
    function _e(t) {
      return function (e, n) {
        "string" != typeof e && ((n = e), (e = "*"));
        var i,
          o = 0,
          r = e.toLowerCase().match(D) || [];
        if (p.isFunction(n))
          for (; (i = r[o++]); )
            "+" === i.charAt(0)
              ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n))
              : (t[i] = t[i] || []).push(n);
      };
    }
    function Re(t, e, n, i) {
      var o = {},
        r = t === He;
      function s(a) {
        var l;
        return (
          (o[a] = !0),
          p.each(t[a] || [], function (t, a) {
            var c = a(e, n, i);
            return "string" != typeof c || r || o[c]
              ? r
                ? !(l = c)
                : void 0
              : (e.dataTypes.unshift(c), s(c), !1);
          }),
          l
        );
      }
      return s(e.dataTypes[0]) || (!o["*"] && s("*"));
    }
    function Pe(t, e) {
      var n,
        i,
        o = p.ajaxSettings.flatOptions || {};
      for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
      return n && p.extend(!0, t, n), t;
    }
    (ke = Oe.exec(Ne.toLowerCase()) || []),
      p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Ne,
          type: "GET",
          isLocal:
            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              ke[1]
            ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Ie,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /xml/, html: /html/, json: /json/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": p.parseJSON,
            "text xml": p.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (t, e) {
          return e ? Pe(Pe(t, p.ajaxSettings), e) : Pe(p.ajaxSettings, t);
        },
        ajaxPrefilter: _e(Le),
        ajaxTransport: _e(He),
        ajax: function (t, e) {
          "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
          var n,
            i,
            o,
            r,
            s,
            a,
            l,
            c,
            u = p.ajaxSetup({}, e),
            d = u.context || u,
            h = u.context && (d.nodeType || d.jquery) ? p(d) : p.event,
            f = p.Deferred(),
            g = p.Callbacks("once memory"),
            m = u.statusCode || {},
            v = {},
            y = {},
            b = 0,
            x = "canceled",
            w = {
              readyState: 0,
              getResponseHeader: function (t) {
                var e;
                if (2 === b) {
                  if (!c)
                    for (c = {}; (e = Ae.exec(r)); )
                      c[e[1].toLowerCase()] = e[2];
                  e = c[t.toLowerCase()];
                }
                return null == e ? null : e;
              },
              getAllResponseHeaders: function () {
                return 2 === b ? r : null;
              },
              setRequestHeader: function (t, e) {
                var n = t.toLowerCase();
                return b || ((t = y[n] = y[n] || t), (v[t] = e)), this;
              },
              overrideMimeType: function (t) {
                return b || (u.mimeType = t), this;
              },
              statusCode: function (t) {
                var e;
                if (t)
                  if (2 > b) for (e in t) m[e] = [m[e], t[e]];
                  else w.always(t[w.status]);
                return this;
              },
              abort: function (t) {
                var e = t || x;
                return l && l.abort(e), T(0, e), this;
              },
            };
          if (
            ((f.promise(w).complete = g.add),
            (w.success = w.done),
            (w.error = w.fail),
            (u.url = ((t || u.url || Ne) + "")
              .replace(Se, "")
              .replace(je, ke[1] + "//")),
            (u.type = e.method || e.type || u.method || u.type),
            (u.dataTypes = p
              .trim(u.dataType || "*")
              .toLowerCase()
              .match(D) || [""]),
            null == u.crossDomain &&
              ((n = Oe.exec(u.url.toLowerCase())),
              (u.crossDomain = !(
                !n ||
                (n[1] === ke[1] &&
                  n[2] === ke[2] &&
                  (n[3] || ("http:" === n[1] ? "80" : "443")) ===
                    (ke[3] || ("http:" === ke[1] ? "80" : "443")))
              ))),
            u.data &&
              u.processData &&
              "string" != typeof u.data &&
              (u.data = p.param(u.data, u.traditional)),
            Re(Le, u, e, w),
            2 === b)
          )
            return w;
          (a = u.global) && 0 == p.active++ && p.event.trigger("ajaxStart"),
            (u.type = u.type.toUpperCase()),
            (u.hasContent = !De.test(u.type)),
            (o = u.url),
            u.hasContent ||
              (u.data &&
                ((o = u.url += (Ce.test(o) ? "&" : "?") + u.data),
                delete u.data),
              !1 === u.cache &&
                (u.url = $e.test(o)
                  ? o.replace($e, "$1_=" + Te++)
                  : o + (Ce.test(o) ? "&" : "?") + "_=" + Te++)),
            u.ifModified &&
              (p.lastModified[o] &&
                w.setRequestHeader("If-Modified-Since", p.lastModified[o]),
              p.etag[o] && w.setRequestHeader("If-None-Match", p.etag[o])),
            ((u.data && u.hasContent && !1 !== u.contentType) ||
              e.contentType) &&
              w.setRequestHeader("Content-Type", u.contentType),
            w.setRequestHeader(
              "Accept",
              u.dataTypes[0] && u.accepts[u.dataTypes[0]]
                ? u.accepts[u.dataTypes[0]] +
                    ("*" !== u.dataTypes[0] ? ", " + Ie + "; q=0.01" : "")
                : u.accepts["*"]
            );
          for (i in u.headers) w.setRequestHeader(i, u.headers[i]);
          if (u.beforeSend && (!1 === u.beforeSend.call(d, w, u) || 2 === b))
            return w.abort();
          x = "abort";
          for (i in { success: 1, error: 1, complete: 1 }) w[i](u[i]);
          if ((l = Re(He, u, e, w))) {
            (w.readyState = 1),
              a && h.trigger("ajaxSend", [w, u]),
              u.async &&
                u.timeout > 0 &&
                (s = setTimeout(function () {
                  w.abort("timeout");
                }, u.timeout));
            try {
              (b = 1), l.send(v, T);
            } catch (t) {
              if (!(2 > b)) throw t;
              T(-1, t);
            }
          } else T(-1, "No Transport");
          function T(t, e, n, i) {
            var c,
              v,
              y,
              x,
              T,
              C = e;
            2 !== b &&
              ((b = 2),
              s && clearTimeout(s),
              (l = void 0),
              (r = i || ""),
              (w.readyState = t > 0 ? 4 : 0),
              (c = (t >= 200 && 300 > t) || 304 === t),
              n &&
                (x = (function (t, e, n) {
                  for (
                    var i, o, r, s, a = t.contents, l = t.dataTypes;
                    "*" === l[0];

                  )
                    l.shift(),
                      void 0 === o &&
                        (o = t.mimeType || e.getResponseHeader("Content-Type"));
                  if (o)
                    for (s in a)
                      if (a[s] && a[s].test(o)) {
                        l.unshift(s);
                        break;
                      }
                  if (l[0] in n) r = l[0];
                  else {
                    for (s in n) {
                      if (!l[0] || t.converters[s + " " + l[0]]) {
                        r = s;
                        break;
                      }
                      i || (i = s);
                    }
                    r = r || i;
                  }
                  return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0;
                })(u, w, n)),
              (x = (function (t, e, n, i) {
                var o,
                  r,
                  s,
                  a,
                  l,
                  c = {},
                  u = t.dataTypes.slice();
                if (u[1])
                  for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                for (r = u.shift(); r; )
                  if (
                    (t.responseFields[r] && (n[t.responseFields[r]] = e),
                    !l &&
                      i &&
                      t.dataFilter &&
                      (e = t.dataFilter(e, t.dataType)),
                    (l = r),
                    (r = u.shift()))
                  )
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                      if (!(s = c[l + " " + r] || c["* " + r]))
                        for (o in c)
                          if (
                            ((a = o.split(" ")),
                            a[1] === r &&
                              (s = c[l + " " + a[0]] || c["* " + a[0]]))
                          ) {
                            !0 === s
                              ? (s = c[o])
                              : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                            break;
                          }
                      if (!0 !== s)
                        if (s && t.throws) e = s(e);
                        else
                          try {
                            e = s(e);
                          } catch (t) {
                            return {
                              state: "parsererror",
                              error: s
                                ? t
                                : "No conversion from " + l + " to " + r,
                            };
                          }
                    }
                return { state: "success", data: e };
              })(u, x, w, c)),
              c
                ? (u.ifModified &&
                    ((T = w.getResponseHeader("Last-Modified")) &&
                      (p.lastModified[o] = T),
                    (T = w.getResponseHeader("etag")) && (p.etag[o] = T)),
                  204 === t || "HEAD" === u.type
                    ? (C = "nocontent")
                    : 304 === t
                    ? (C = "notmodified")
                    : ((C = x.state), (v = x.data), (c = !(y = x.error))))
                : ((y = C), (t || !C) && ((C = "error"), 0 > t && (t = 0))),
              (w.status = t),
              (w.statusText = (e || C) + ""),
              c ? f.resolveWith(d, [v, C, w]) : f.rejectWith(d, [w, C, y]),
              w.statusCode(m),
              (m = void 0),
              a &&
                h.trigger(c ? "ajaxSuccess" : "ajaxError", [w, u, c ? v : y]),
              g.fireWith(d, [w, C]),
              a &&
                (h.trigger("ajaxComplete", [w, u]),
                --p.active || p.event.trigger("ajaxStop")));
          }
          return w;
        },
        getJSON: function (t, e, n) {
          return p.get(t, e, n, "json");
        },
        getScript: function (t, e) {
          return p.get(t, void 0, e, "script");
        },
      }),
      p.each(["get", "post"], function (t, e) {
        p[e] = function (t, n, i, o) {
          return (
            p.isFunction(n) && ((o = o || i), (i = n), (n = void 0)),
            p.ajax({ url: t, type: e, dataType: o, data: n, success: i })
          );
        };
      }),
      p.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (t, e) {
          p.fn[e] = function (t) {
            return this.on(e, t);
          };
        }
      ),
      (p._evalUrl = function (t) {
        return p.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      p.fn.extend({
        wrapAll: function (t) {
          if (p.isFunction(t))
            return this.each(function (e) {
              p(this).wrapAll(t.call(this, e));
            });
          if (this[0]) {
            var e = p(t, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (
                    var t = this;
                    t.firstChild && 1 === t.firstChild.nodeType;

                  )
                    t = t.firstChild;
                  return t;
                })
                .append(this);
          }
          return this;
        },
        wrapInner: function (t) {
          return this.each(
            p.isFunction(t)
              ? function (e) {
                  p(this).wrapInner(t.call(this, e));
                }
              : function () {
                  var e = p(this),
                    n = e.contents();
                  n.length ? n.wrapAll(t) : e.append(t);
                }
          );
        },
        wrap: function (t) {
          var e = p.isFunction(t);
          return this.each(function (n) {
            p(this).wrapAll(e ? t.call(this, n) : t);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (p.expr.filters.hidden = function (t) {
        return (
          (t.offsetWidth <= 0 && t.offsetHeight <= 0) ||
          (!u.reliableHiddenOffsets() &&
            "none" === ((t.style && t.style.display) || p.css(t, "display")))
        );
      }),
      (p.expr.filters.visible = function (t) {
        return !p.expr.filters.hidden(t);
      });
    var qe = /%20/g,
      Me = /\[\]$/,
      Fe = /\r?\n/g,
      Be = /^(?:submit|button|image|reset|file)$/i,
      ze = /^(?:input|select|textarea|keygen)/i;
    function We(t, e, n, i) {
      var o;
      if (p.isArray(e))
        p.each(e, function (e, o) {
          n || Me.test(t)
            ? i(t, o)
            : We(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i);
        });
      else if (n || "object" !== p.type(e)) i(t, e);
      else for (o in e) We(t + "[" + o + "]", e[o], n, i);
    }
    (p.param = function (t, e) {
      var n,
        i = [],
        o = function (t, e) {
          (e = p.isFunction(e) ? e() : null == e ? "" : e),
            (i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
        };
      if (
        (void 0 === e && (e = p.ajaxSettings && p.ajaxSettings.traditional),
        p.isArray(t) || (t.jquery && !p.isPlainObject(t)))
      )
        p.each(t, function () {
          o(this.name, this.value);
        });
      else for (n in t) We(n, t[n], e, o);
      return i.join("&").replace(qe, "+");
    }),
      p.fn.extend({
        serialize: function () {
          return p.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var t = p.prop(this, "elements");
            return t ? p.makeArray(t) : this;
          })
            .filter(function () {
              var t = this.type;
              return (
                this.name &&
                !p(this).is(":disabled") &&
                ze.test(this.nodeName) &&
                !Be.test(t) &&
                (this.checked || !V.test(t))
              );
            })
            .map(function (t, e) {
              var n = p(this).val();
              return null == n
                ? null
                : p.isArray(n)
                ? p.map(n, function (t) {
                    return { name: e.name, value: t.replace(Fe, "\r\n") };
                  })
                : { name: e.name, value: n.replace(Fe, "\r\n") };
            })
            .get();
        },
      }),
      (p.ajaxSettings.xhr =
        void 0 !== t.ActiveXObject
          ? function () {
              return (
                (!this.isLocal &&
                  /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  Qe()) ||
                (function () {
                  try {
                    return new t.ActiveXObject("Microsoft.XMLHTTP");
                  } catch (t) {}
                })()
              );
            }
          : Qe);
    var Ue = 0,
      Ve = {},
      Xe = p.ajaxSettings.xhr();
    function Qe() {
      try {
        return new t.XMLHttpRequest();
      } catch (t) {}
    }
    t.ActiveXObject &&
      p(t).on("unload", function () {
        for (var t in Ve) Ve[t](void 0, !0);
      }),
      (u.cors = !!Xe && "withCredentials" in Xe),
      (Xe = u.ajax = !!Xe) &&
        p.ajaxTransport(function (t) {
          var e;
          if (!t.crossDomain || u.cors)
            return {
              send: function (n, i) {
                var o,
                  r = t.xhr(),
                  s = ++Ue;
                if (
                  (r.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (o in t.xhrFields) r[o] = t.xhrFields[o];
                t.mimeType &&
                  r.overrideMimeType &&
                  r.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    n["X-Requested-With"] ||
                    (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n)
                  void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                r.send((t.hasContent && t.data) || null),
                  (e = function (n, o) {
                    var a, l, c;
                    if (e && (o || 4 === r.readyState))
                      if (
                        (delete Ve[s],
                        (e = void 0),
                        (r.onreadystatechange = p.noop),
                        o)
                      )
                        4 !== r.readyState && r.abort();
                      else {
                        (c = {}),
                          (a = r.status),
                          "string" == typeof r.responseText &&
                            (c.text = r.responseText);
                        try {
                          l = r.statusText;
                        } catch (t) {
                          l = "";
                        }
                        a || !t.isLocal || t.crossDomain
                          ? 1223 === a && (a = 204)
                          : (a = c.text ? 200 : 404);
                      }
                    c && i(a, l, c, r.getAllResponseHeaders());
                  }),
                  t.async
                    ? 4 === r.readyState
                      ? setTimeout(e)
                      : (r.onreadystatechange = Ve[s] = e)
                    : e();
              },
              abort: function () {
                e && e(void 0, !0);
              },
            };
        }),
      p.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
          "text script": function (t) {
            return p.globalEval(t), t;
          },
        },
      }),
      p.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1),
          t.crossDomain && ((t.type = "GET"), (t.global = !1));
      }),
      p.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
          var e,
            n = E.head || p("head")[0] || E.documentElement;
          return {
            send: function (i, o) {
              ((e = E.createElement("script")).async = !0),
                t.scriptCharset && (e.charset = t.scriptCharset),
                (e.src = t.url),
                (e.onload = e.onreadystatechange =
                  function (t, n) {
                    (n ||
                      !e.readyState ||
                      /loaded|complete/.test(e.readyState)) &&
                      ((e.onload = e.onreadystatechange = null),
                      e.parentNode && e.parentNode.removeChild(e),
                      (e = null),
                      n || o(200, "success"));
                  }),
                n.insertBefore(e, n.firstChild);
            },
            abort: function () {
              e && e.onload(void 0, !0);
            },
          };
        }
      });
    var Je = [],
      Ye = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = Je.pop() || p.expando + "_" + Te++;
        return (this[t] = !0), t;
      },
    }),
      p.ajaxPrefilter("json jsonp", function (e, n, i) {
        var o,
          r,
          s,
          a =
            !1 !== e.jsonp &&
            (Ye.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                !(e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
                Ye.test(e.data) &&
                "data");
        return a || "jsonp" === e.dataTypes[0]
          ? ((o = e.jsonpCallback =
              p.isFunction(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Ye, "$1" + o))
              : !1 !== e.jsonp &&
                (e.url += (Ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
            (e.converters["script json"] = function () {
              return s || p.error(o + " was not called"), s[0];
            }),
            (e.dataTypes[0] = "json"),
            (r = t[o]),
            (t[o] = function () {
              s = arguments;
            }),
            i.always(function () {
              (t[o] = r),
                e[o] && ((e.jsonpCallback = n.jsonpCallback), Je.push(o)),
                s && p.isFunction(r) && r(s[0]),
                (s = r = void 0);
            }),
            "script")
          : void 0;
      }),
      (p.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && ((n = e), (e = !1)), (e = e || E);
        var i = x.exec(t),
          o = !n && [];
        return i
          ? [e.createElement(i[1])]
          : ((i = p.buildFragment([t], e, o)),
            o && o.length && p(o).remove(),
            p.merge([], i.childNodes));
      });
    var Ge = p.fn.load;
    (p.fn.load = function (t, e, n) {
      if ("string" != typeof t && Ge) return Ge.apply(this, arguments);
      var i,
        o,
        r,
        s = this,
        a = t.indexOf(" ");
      return (
        a >= 0 && ((i = p.trim(t.slice(a, t.length))), (t = t.slice(0, a))),
        p.isFunction(e)
          ? ((n = e), (e = void 0))
          : e && "object" == typeof e && (r = "POST"),
        s.length > 0 &&
          p
            .ajax({ url: t, type: r, dataType: "html", data: e })
            .done(function (t) {
              (o = arguments),
                s.html(i ? p("<div>").append(p.parseHTML(t)).find(i) : t);
            })
            .complete(
              n &&
                function (t, e) {
                  s.each(n, o || [t.responseText, e, t]);
                }
            ),
        this
      );
    }),
      (p.expr.filters.animated = function (t) {
        return p.grep(p.timers, function (e) {
          return t === e.elem;
        }).length;
      });
    var Ke = t.document.documentElement;
    function Ze(t) {
      return p.isWindow(t)
        ? t
        : 9 === t.nodeType && (t.defaultView || t.parentWindow);
    }
    (p.offset = {
      setOffset: function (t, e, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c = p.css(t, "position"),
          u = p(t),
          d = {};
        "static" === c && (t.style.position = "relative"),
          (a = u.offset()),
          (r = p.css(t, "top")),
          (l = p.css(t, "left")),
          ("absolute" === c || "fixed" === c) && p.inArray("auto", [r, l]) > -1
            ? ((s = (i = u.position()).top), (o = i.left))
            : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          p.isFunction(e) && (e = e.call(t, n, a)),
          null != e.top && (d.top = e.top - a.top + s),
          null != e.left && (d.left = e.left - a.left + o),
          "using" in e ? e.using.call(t, d) : u.css(d);
      },
    }),
      p.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  p.offset.setOffset(this, t, e);
                });
          var e,
            n,
            i = { top: 0, left: 0 },
            o = this[0],
            r = o && o.ownerDocument;
          return r
            ? ((e = r.documentElement),
              p.contains(e, o)
                ? (typeof o.getBoundingClientRect !== I &&
                    (i = o.getBoundingClientRect()),
                  (n = Ze(r)),
                  {
                    top:
                      i.top +
                      (n.pageYOffset || e.scrollTop) -
                      (e.clientTop || 0),
                    left:
                      i.left +
                      (n.pageXOffset || e.scrollLeft) -
                      (e.clientLeft || 0),
                  })
                : i)
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var t,
              e,
              n = { top: 0, left: 0 },
              i = this[0];
            return (
              "fixed" === p.css(i, "position")
                ? (e = i.getBoundingClientRect())
                : ((t = this.offsetParent()),
                  (e = this.offset()),
                  p.nodeName(t[0], "html") || (n = t.offset()),
                  (n.top += p.css(t[0], "borderTopWidth", !0)),
                  (n.left += p.css(t[0], "borderLeftWidth", !0))),
              {
                top: e.top - n.top - p.css(i, "marginTop", !0),
                left: e.left - n.left - p.css(i, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var t = this.offsetParent || Ke;
              t && !p.nodeName(t, "html") && "static" === p.css(t, "position");

            )
              t = t.offsetParent;
            return t || Ke;
          });
        },
      }),
      p.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, e) {
          var n = /Y/.test(e);
          p.fn[t] = function (i) {
            return U(
              this,
              function (t, i, o) {
                var r = Ze(t);
                return void 0 === o
                  ? r
                    ? e in r
                      ? r[e]
                      : r.document.documentElement[i]
                    : t[i]
                  : void (r
                      ? r.scrollTo(
                          n ? p(r).scrollLeft() : o,
                          n ? o : p(r).scrollTop()
                        )
                      : (t[i] = o));
              },
              t,
              i,
              arguments.length,
              null
            );
          };
        }
      ),
      p.each(["top", "left"], function (t, e) {
        p.cssHooks[e] = It(u.pixelPosition, function (t, n) {
          return n
            ? ((n = jt(t, e)), Lt.test(n) ? p(t).position()[e] + "px" : n)
            : void 0;
        });
      }),
      p.each({ Height: "height", Width: "width" }, function (t, e) {
        p.each(
          { padding: "inner" + t, content: e, "": "outer" + t },
          function (n, i) {
            p.fn[i] = function (i, o) {
              var r = arguments.length && (n || "boolean" != typeof i),
                s = n || (!0 === i || !0 === o ? "margin" : "border");
              return U(
                this,
                function (e, n, i) {
                  var o;
                  return p.isWindow(e)
                    ? e.document.documentElement["client" + t]
                    : 9 === e.nodeType
                    ? ((o = e.documentElement),
                      Math.max(
                        e.body["scroll" + t],
                        o["scroll" + t],
                        e.body["offset" + t],
                        o["offset" + t],
                        o["client" + t]
                      ))
                    : void 0 === i
                    ? p.css(e, n, s)
                    : p.style(e, n, i, s);
                },
                e,
                r ? i : void 0,
                r,
                null
              );
            };
          }
        );
      }),
      (p.fn.size = function () {
        return this.length;
      }),
      (p.fn.andSelf = p.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return p;
        });
    var tn = t.jQuery,
      en = t.$;
    return (
      (p.noConflict = function (e) {
        return (
          t.$ === p && (t.$ = en), e && t.jQuery === p && (t.jQuery = tn), p
        );
      }),
      typeof e === I && (t.jQuery = t.$ = p),
      p
    );
  }),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
!(function (t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if ((e[0] < 2 && e[1] < 9) || (1 == e[0] && 9 == e[1] && e[2] < 1))
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
})(jQuery),
  (function (t) {
    "use strict";
    (t.fn.emulateTransitionEnd = function (e) {
      var n = !1,
        i = this;
      t(this).one("bsTransitionEnd", function () {
        n = !0;
      });
      return (
        setTimeout(function () {
          n || t(i).trigger(t.support.transition.end);
        }, e),
        this
      );
    }),
      t(function () {
        (t.support.transition = (function () {
          var t = document.createElement("bootstrap"),
            e = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd otransitionend",
              transition: "transitionend",
            };
          for (var n in e) if (void 0 !== t.style[n]) return { end: e[n] };
          return !1;
        })()),
          t.support.transition &&
            (t.event.special.bsTransitionEnd = {
              bindType: t.support.transition.end,
              delegateType: t.support.transition.end,
              handle: function (e) {
                return t(e.target).is(this)
                  ? e.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  (function (t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
      n = function (n) {
        t(n).on("click", e, this.close);
      };
    (n.VERSION = "3.3.2"),
      (n.TRANSITION_DURATION = 150),
      (n.prototype.close = function (e) {
        function i() {
          s.detach().trigger("closed.bs.alert").remove();
        }
        var o = t(this),
          r = o.attr("data-target");
        r || (r = (r = o.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(r);
        e && e.preventDefault(),
          s.length || (s = o.closest(".alert")),
          s.trigger((e = t.Event("close.bs.alert"))),
          e.isDefaultPrevented() ||
            (s.removeClass("in"),
            t.support.transition && s.hasClass("fade")
              ? s
                  .one("bsTransitionEnd", i)
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : i());
      });
    var i = t.fn.alert;
    (t.fn.alert = function (e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.alert");
        o || i.data("bs.alert", (o = new n(this))),
          "string" == typeof e && o[e].call(i);
      });
    }),
      (t.fn.alert.Constructor = n),
      (t.fn.alert.noConflict = function () {
        return (t.fn.alert = i), this;
      }),
      t(document).on("click.bs.alert.data-api", e, n.prototype.close);
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.button"),
          r = "object" == typeof e && e;
        o || i.data("bs.button", (o = new n(this, r))),
          "toggle" == e ? o.toggle() : e && o.setState(e);
      });
    }
    var n = function (e, i) {
      (this.$element = t(e)),
        (this.options = t.extend({}, n.DEFAULTS, i)),
        (this.isLoading = !1);
    };
    (n.VERSION = "3.3.2"),
      (n.DEFAULTS = { loadingText: "loading..." }),
      (n.prototype.setState = function (e) {
        var n = "disabled",
          i = this.$element,
          o = i.is("input") ? "val" : "html",
          r = i.data();
        (e += "Text"),
          null == r.resetText && i.data("resetText", i[o]()),
          setTimeout(
            t.proxy(function () {
              i[o](null == r[e] ? this.options[e] : r[e]),
                "loadingText" == e
                  ? ((this.isLoading = !0), i.addClass(n).attr(n, n))
                  : this.isLoading &&
                    ((this.isLoading = !1), i.removeClass(n).removeAttr(n));
            }, this),
            0
          );
      }),
      (n.prototype.toggle = function () {
        var t = !0,
          e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
          var n = this.$element.find("input");
          "radio" == n.prop("type") &&
            (n.prop("checked") && this.$element.hasClass("active")
              ? (t = !1)
              : e.find(".active").removeClass("active")),
            t &&
              n
                .prop("checked", !this.$element.hasClass("active"))
                .trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active");
      });
    var i = t.fn.button;
    (t.fn.button = e),
      (t.fn.button.Constructor = n),
      (t.fn.button.noConflict = function () {
        return (t.fn.button = i), this;
      }),
      t(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (n) {
            var i = t(n.target);
            i.hasClass("btn") || (i = i.closest(".btn")),
              e.call(i, "toggle"),
              n.preventDefault();
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (e) {
            t(e.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(e.type));
          }
        );
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.carousel"),
          r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
          s = "string" == typeof e ? e : r.slide;
        o || i.data("bs.carousel", (o = new n(this, r))),
          "number" == typeof e
            ? o.to(e)
            : s
            ? o[s]()
            : r.interval && o.pause().cycle();
      });
    }
    var n = function (e, n) {
      (this.$element = t(e)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = n),
        (this.paused =
          this.sliding =
          this.interval =
          this.$active =
          this.$items =
            null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
    };
    (n.VERSION = "3.3.2"),
      (n.TRANSITION_DURATION = 600),
      (n.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          t.preventDefault();
        }
      }),
      (n.prototype.cycle = function (e) {
        return (
          e || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              t.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (n.prototype.getItemIndex = function (t) {
        return (
          (this.$items = t.parent().children(".item")),
          this.$items.index(t || this.$active)
        );
      }),
      (n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e);
        if (
          (("prev" == t && 0 === n) ||
            ("next" == t && n == this.$items.length - 1)) &&
          !this.options.wrap
        )
          return e;
        var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i);
      }),
      (n.prototype.to = function (t) {
        var e = this,
          n = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return t > this.$items.length - 1 || 0 > t
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              e.to(t);
            })
          : n == t
          ? this.pause().cycle()
          : this.slide(t > n ? "next" : "prev", this.$items.eq(t));
      }),
      (n.prototype.pause = function (e) {
        return (
          e || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            t.support.transition &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (n.prototype.slide = function (e, i) {
        var o = this.$element.find(".item.active"),
          r = i || this.getItemForDirection(e, o),
          s = this.interval,
          a = "next" == e ? "left" : "right",
          l = this;
        if (r.hasClass("active")) return (this.sliding = !1);
        var c = r[0],
          u = t.Event("slide.bs.carousel", { relatedTarget: c, direction: a });
        if ((this.$element.trigger(u), !u.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), s && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var d = t(this.$indicators.children()[this.getItemIndex(r)]);
            d && d.addClass("active");
          }
          var p = t.Event("slid.bs.carousel", {
            relatedTarget: c,
            direction: a,
          });
          return (
            t.support.transition && this.$element.hasClass("slide")
              ? (r.addClass(e),
                r[0].offsetWidth,
                o.addClass(a),
                r.addClass(a),
                o
                  .one("bsTransitionEnd", function () {
                    r.removeClass([e, a].join(" ")).addClass("active"),
                      o.removeClass(["active", a].join(" ")),
                      (l.sliding = !1),
                      setTimeout(function () {
                        l.$element.trigger(p);
                      }, 0);
                  })
                  .emulateTransitionEnd(n.TRANSITION_DURATION))
              : (o.removeClass("active"),
                r.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(p)),
            s && this.cycle(),
            this
          );
        }
      });
    var i = t.fn.carousel;
    (t.fn.carousel = e),
      (t.fn.carousel.Constructor = n),
      (t.fn.carousel.noConflict = function () {
        return (t.fn.carousel = i), this;
      });
    var o = function (n) {
      var i,
        o = t(this),
        r = t(
          o.attr("data-target") ||
            ((i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (r.hasClass("carousel")) {
        var s = t.extend({}, r.data(), o.data()),
          a = o.attr("data-slide-to");
        a && (s.interval = !1),
          e.call(r, s),
          a && r.data("bs.carousel").to(a),
          n.preventDefault();
      }
    };
    t(document)
      .on("click.bs.carousel.data-api", "[data-slide]", o)
      .on("click.bs.carousel.data-api", "[data-slide-to]", o),
      t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
          var n = t(this);
          e.call(n, n.data());
        });
      });
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e) {
      var n,
        i =
          e.attr("data-target") ||
          ((n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
      return t(i);
    }
    function n(e) {
      return this.each(function () {
        var n = t(this),
          o = n.data("bs.collapse"),
          r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
        !o && r.toggle && "show" == e && (r.toggle = !1),
          o || n.data("bs.collapse", (o = new i(this, r))),
          "string" == typeof e && o[e]();
      });
    }
    var i = function (e, n) {
      (this.$element = t(e)),
        (this.options = t.extend({}, i.DEFAULTS, n)),
        (this.$trigger = t(this.options.trigger).filter(
          '[href="#' + e.id + '"], [data-target="#' + e.id + '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (i.VERSION = "3.3.2"),
      (i.TRANSITION_DURATION = 350),
      (i.DEFAULTS = { toggle: !0, trigger: '[data-toggle="collapse"]' }),
      (i.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height";
      }),
      (i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e,
            o =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              o &&
              o.length &&
              ((e = o.data("bs.collapse")), e && e.transitioning)
            )
          ) {
            var r = t.Event("show.bs.collapse");
            if ((this.$element.trigger(r), !r.isDefaultPrevented())) {
              o &&
                o.length &&
                (n.call(o, "hide"), e || o.data("bs.collapse", null));
              var s = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [s](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var a = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [s](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!t.support.transition) return a.call(this);
              var l = t.camelCase(["scroll", s].join("-"));
              this.$element
                .one("bsTransitionEnd", t.proxy(a, this))
                .emulateTransitionEnd(i.TRANSITION_DURATION)
                [s](this.$element[0][l]);
            }
          }
        }
      }),
      (i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var o = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return t.support.transition
              ? void this.$element[n](0)
                  .one("bsTransitionEnd", t.proxy(o, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : o.call(this);
          }
        }
      }),
      (i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (i.prototype.getParent = function () {
        return t(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            t.proxy(function (n, i) {
              var o = t(i);
              this.addAriaAndCollapsedClass(e(o), o);
            }, this)
          )
          .end();
      }),
      (i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n),
          e.toggleClass("collapsed", !n).attr("aria-expanded", n);
      });
    var o = t.fn.collapse;
    (t.fn.collapse = n),
      (t.fn.collapse.Constructor = i),
      (t.fn.collapse.noConflict = function () {
        return (t.fn.collapse = o), this;
      }),
      t(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (i) {
          var o = t(this);
          o.attr("data-target") || i.preventDefault();
          var r = e(o),
            s = r.data("bs.collapse")
              ? "toggle"
              : t.extend({}, o.data(), { trigger: this });
          n.call(r, s);
        }
      );
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e) {
      (e && 3 === e.which) ||
        (t(i).remove(),
        t(o).each(function () {
          var i = t(this),
            o = n(i),
            r = { relatedTarget: this };
          o.hasClass("open") &&
            (o.trigger((e = t.Event("hide.bs.dropdown", r))),
            e.isDefaultPrevented() ||
              (i.attr("aria-expanded", "false"),
              o.removeClass("open").trigger("hidden.bs.dropdown", r)));
        }));
    }
    function n(e) {
      var n = e.attr("data-target");
      n ||
        (n =
          (n = e.attr("href")) &&
          /#[A-Za-z]/.test(n) &&
          n.replace(/.*(?=#[^\s]*$)/, ""));
      var i = n && t(n);
      return i && i.length ? i : e.parent();
    }
    var i = ".dropdown-backdrop",
      o = '[data-toggle="dropdown"]',
      r = function (e) {
        t(e).on("click.bs.dropdown", this.toggle);
      };
    (r.VERSION = "3.3.2"),
      (r.prototype.toggle = function (i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
          var r = n(o),
            s = r.hasClass("open");
          if ((e(), !s)) {
            "ontouchstart" in document.documentElement &&
              !r.closest(".navbar-nav").length &&
              t('<div class="dropdown-backdrop"/>')
                .insertAfter(t(this))
                .on("click", e);
            var a = { relatedTarget: this };
            if (
              (r.trigger((i = t.Event("show.bs.dropdown", a))),
              i.isDefaultPrevented())
            )
              return;
            o.trigger("focus").attr("aria-expanded", "true"),
              r.toggleClass("open").trigger("shown.bs.dropdown", a);
          }
          return !1;
        }
      }),
      (r.prototype.keydown = function (e) {
        if (
          /(38|40|27|32)/.test(e.which) &&
          !/input|textarea/i.test(e.target.tagName)
        ) {
          var i = t(this);
          if (
            (e.preventDefault(),
            e.stopPropagation(),
            !i.is(".disabled, :disabled"))
          ) {
            var r = n(i),
              s = r.hasClass("open");
            if ((!s && 27 != e.which) || (s && 27 == e.which))
              return (
                27 == e.which && r.find(o).trigger("focus"), i.trigger("click")
              );
            var a = " li:not(.divider):visible a",
              l = r.find('[role="menu"]' + a + ', [role="listbox"]' + a);
            if (l.length) {
              var c = l.index(e.target);
              38 == e.which && c > 0 && c--,
                40 == e.which && c < l.length - 1 && c++,
                ~c || (c = 0),
                l.eq(c).trigger("focus");
            }
          }
        }
      });
    var s = t.fn.dropdown;
    (t.fn.dropdown = function (e) {
      return this.each(function () {
        var n = t(this),
          i = n.data("bs.dropdown");
        i || n.data("bs.dropdown", (i = new r(this))),
          "string" == typeof e && i[e].call(n);
      });
    }),
      (t.fn.dropdown.Constructor = r),
      (t.fn.dropdown.noConflict = function () {
        return (t.fn.dropdown = s), this;
      }),
      t(document)
        .on("click.bs.dropdown.data-api", e)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", o, r.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", o, r.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="menu"]',
          r.prototype.keydown
        )
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="listbox"]',
          r.prototype.keydown
        );
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e, i) {
      return this.each(function () {
        var o = t(this),
          r = o.data("bs.modal"),
          s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
        r || o.data("bs.modal", (r = new n(this, s))),
          "string" == typeof e ? r[e](i) : s.show && r.show(i);
      });
    }
    var n = function (e, n) {
      (this.options = n),
        (this.$body = t(document.body)),
        (this.$element = t(e)),
        (this.$backdrop = this.isShown = null),
        (this.scrollbarWidth = 0),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            t.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (n.VERSION = "3.3.2"),
      (n.TRANSITION_DURATION = 300),
      (n.BACKDROP_TRANSITION_DURATION = 150),
      (n.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t);
      }),
      (n.prototype.show = function (e) {
        var i = this,
          o = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(o),
          this.isShown ||
            o.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              t.proxy(this.hide, this)
            ),
            this.backdrop(function () {
              var o = t.support.transition && i.$element.hasClass("fade");
              i.$element.parent().length || i.$element.appendTo(i.$body),
                i.$element.show().scrollTop(0),
                i.options.backdrop && i.adjustBackdrop(),
                i.adjustDialog(),
                o && i.$element[0].offsetWidth,
                i.$element.addClass("in").attr("aria-hidden", !1),
                i.enforceFocus();
              var r = t.Event("shown.bs.modal", { relatedTarget: e });
              o
                ? i.$element
                    .find(".modal-dialog")
                    .one("bsTransitionEnd", function () {
                      i.$element.trigger("focus").trigger(r);
                    })
                    .emulateTransitionEnd(n.TRANSITION_DURATION)
                : i.$element.trigger("focus").trigger(r);
            }));
      }),
      (n.prototype.hide = function (e) {
        e && e.preventDefault(),
          (e = t.Event("hide.bs.modal")),
          this.$element.trigger(e),
          this.isShown &&
            !e.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            t(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .attr("aria-hidden", !0)
              .off("click.dismiss.bs.modal"),
            t.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (n.prototype.enforceFocus = function () {
        t(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            t.proxy(function (t) {
              this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (n.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              t.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (n.prototype.resize = function () {
        this.isShown
          ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this))
          : t(window).off("resize.bs.modal");
      }),
      (n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
          this.backdrop(function () {
            t.$body.removeClass("modal-open"),
              t.resetAdjustments(),
              t.resetScrollbar(),
              t.$element.trigger("hidden.bs.modal");
          });
      }),
      (n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (n.prototype.backdrop = function (e) {
        var i = this,
          o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var r = t.support.transition && o;
          if (
            ((this.$backdrop = t('<div class="modal-backdrop ' + o + '" />')
              .prependTo(this.$element)
              .on(
                "click.dismiss.bs.modal",
                t.proxy(function (t) {
                  t.target === t.currentTarget &&
                    ("static" == this.options.backdrop
                      ? this.$element[0].focus.call(this.$element[0])
                      : this.hide.call(this));
                }, this)
              )),
            r && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
          )
            return;
          r
            ? this.$backdrop
                .one("bsTransitionEnd", e)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : e();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var s = function () {
            i.removeBackdrop(), e && e();
          };
          t.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", s)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : s();
        } else e && e();
      }),
      (n.prototype.handleUpdate = function () {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog();
      }),
      (n.prototype.adjustBackdrop = function () {
        this.$backdrop
          .css("height", 0)
          .css("height", this.$element[0].scrollHeight);
      }),
      (n.prototype.adjustDialog = function () {
        var t =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
        });
      }),
      (n.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (n.prototype.checkScrollbar = function () {
        (this.bodyIsOverflowing =
          document.body.scrollHeight > document.documentElement.clientHeight),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing &&
          this.$body.css("padding-right", t + this.scrollbarWidth);
      }),
      (n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "");
      }),
      (n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
      });
    var i = t.fn.modal;
    (t.fn.modal = e),
      (t.fn.modal.Constructor = n),
      (t.fn.modal.noConflict = function () {
        return (t.fn.modal = i), this;
      }),
      t(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (n) {
          var i = t(this),
            o = i.attr("href"),
            r = t(
              i.attr("data-target") || (o && o.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            s = r.data("bs.modal")
              ? "toggle"
              : t.extend({ remote: !/#/.test(o) && o }, r.data(), i.data());
          i.is("a") && n.preventDefault(),
            r.one("show.bs.modal", function (t) {
              t.isDefaultPrevented() ||
                r.one("hidden.bs.modal", function () {
                  i.is(":visible") && i.trigger("focus");
                });
            }),
            e.call(r, s, this);
        }
      );
  })(jQuery),
  (function (t) {
    "use strict";
    var e = function (t, e) {
      (this.type =
        this.options =
        this.enabled =
        this.timeout =
        this.hoverState =
        this.$element =
          null),
        this.init("tooltip", t, e);
    };
    (e.VERSION = "3.3.2"),
      (e.TRANSITION_DURATION = 150),
      (e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (e.prototype.init = function (e, n, i) {
        (this.enabled = !0),
          (this.type = e),
          (this.$element = t(n)),
          (this.options = this.getOptions(i)),
          (this.$viewport =
            this.options.viewport &&
            t(this.options.viewport.selector || this.options.viewport));
        for (var o = this.options.trigger.split(" "), r = o.length; r--; ) {
          var s = o[r];
          if ("click" == s)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              t.proxy(this.toggle, this)
            );
          else if ("manual" != s) {
            var a = "hover" == s ? "mouseenter" : "focusin",
              l = "hover" == s ? "mouseleave" : "focusout";
            this.$element.on(
              a + "." + this.type,
              this.options.selector,
              t.proxy(this.enter, this)
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                t.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (e.prototype.getDefaults = function () {
        return e.DEFAULTS;
      }),
      (e.prototype.getOptions = function (e) {
        return (
          (e = t.extend({}, this.getDefaults(), this.$element.data(), e))
            .delay &&
            "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          e
        );
      }),
      (e.prototype.getDelegateOptions = function () {
        var e = {},
          n = this.getDefaults();
        return (
          this._options &&
            t.each(this._options, function (t, i) {
              n[t] != i && (e[t] = i);
            }),
          e
        );
      }),
      (e.prototype.enter = function (e) {
        var n =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return n && n.$tip && n.$tip.is(":visible")
          ? void (n.hoverState = "in")
          : (n ||
              ((n = new this.constructor(
                e.currentTarget,
                this.getDelegateOptions()
              )),
              t(e.currentTarget).data("bs." + this.type, n)),
            clearTimeout(n.timeout),
            (n.hoverState = "in"),
            n.options.delay && n.options.delay.show
              ? void (n.timeout = setTimeout(function () {
                  "in" == n.hoverState && n.show();
                }, n.options.delay.show))
              : n.show());
      }),
      (e.prototype.leave = function (e) {
        var n =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return (
          n ||
            ((n = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, n)),
          clearTimeout(n.timeout),
          (n.hoverState = "out"),
          n.options.delay && n.options.delay.hide
            ? void (n.timeout = setTimeout(function () {
                "out" == n.hoverState && n.hide();
              }, n.options.delay.hide))
            : n.hide()
        );
      }),
      (e.prototype.show = function () {
        var n = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(n);
          var i = t.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (n.isDefaultPrevented() || !i) return;
          var o = this,
            r = this.tip(),
            s = this.getUID(this.type);
          this.setContent(),
            r.attr("id", s),
            this.$element.attr("aria-describedby", s),
            this.options.animation && r.addClass("fade");
          var a =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, r[0], this.$element[0])
                : this.options.placement,
            l = /\s?auto?\s?/i,
            c = l.test(a);
          c && (a = a.replace(l, "") || "top"),
            r
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(a)
              .data("bs." + this.type, this),
            this.options.container
              ? r.appendTo(this.options.container)
              : r.insertAfter(this.$element);
          var u = this.getPosition(),
            d = r[0].offsetWidth,
            p = r[0].offsetHeight;
          if (c) {
            var h = a,
              f = this.options.container
                ? t(this.options.container)
                : this.$element.parent(),
              g = this.getPosition(f);
            (a =
              "bottom" == a && u.bottom + p > g.bottom
                ? "top"
                : "top" == a && u.top - p < g.top
                ? "bottom"
                : "right" == a && u.right + d > g.width
                ? "left"
                : "left" == a && u.left - d < g.left
                ? "right"
                : a),
              r.removeClass(h).addClass(a);
          }
          var m = this.getCalculatedOffset(a, u, d, p);
          this.applyPlacement(m, a);
          var v = function () {
            var t = o.hoverState;
            o.$element.trigger("shown.bs." + o.type),
              (o.hoverState = null),
              "out" == t && o.leave(o);
          };
          t.support.transition && this.$tip.hasClass("fade")
            ? r
                .one("bsTransitionEnd", v)
                .emulateTransitionEnd(e.TRANSITION_DURATION)
            : v();
        }
      }),
      (e.prototype.applyPlacement = function (e, n) {
        var i = this.tip(),
          o = i[0].offsetWidth,
          r = i[0].offsetHeight,
          s = parseInt(i.css("margin-top"), 10),
          a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0),
          isNaN(a) && (a = 0),
          (e.top = e.top + s),
          (e.left = e.left + a),
          t.offset.setOffset(
            i[0],
            t.extend(
              {
                using: function (t) {
                  i.css({ top: Math.round(t.top), left: Math.round(t.left) });
                },
              },
              e
            ),
            0
          ),
          i.addClass("in");
        var l = i[0].offsetWidth,
          c = i[0].offsetHeight;
        "top" == n && c != r && (e.top = e.top + r - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? (e.left += u.left) : (e.top += u.top);
        var d = /top|bottom/.test(n),
          p = d ? 2 * u.left - o + l : 2 * u.top - r + c,
          h = d ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(p, i[0][h], d);
      }),
      (e.prototype.replaceArrow = function (t, e, n) {
        this.arrow()
          .css(n ? "left" : "top", 50 * (1 - t / e) + "%")
          .css(n ? "top" : "left", "");
      }),
      (e.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right");
      }),
      (e.prototype.hide = function (n) {
        function i() {
          "in" != o.hoverState && r.detach(),
            o.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + o.type),
            n && n();
        }
        var o = this,
          r = this.tip(),
          s = t.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(s),
          s.isDefaultPrevented()
            ? void 0
            : (r.removeClass("in"),
              t.support.transition && this.$tip.hasClass("fade")
                ? r
                    .one("bsTransitionEnd", i)
                    .emulateTransitionEnd(e.TRANSITION_DURATION)
                : i(),
              (this.hoverState = null),
              this)
        );
      }),
      (e.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (e.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (e.prototype.getPosition = function (e) {
        var n = (e = e || this.$element)[0],
          i = "BODY" == n.tagName,
          o = n.getBoundingClientRect();
        null == o.width &&
          (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top,
          }));
        var r = i ? { top: 0, left: 0 } : e.offset(),
          s = {
            scroll: i
              ? document.documentElement.scrollTop || document.body.scrollTop
              : e.scrollTop(),
          },
          a = i
            ? { width: t(window).width(), height: t(window).height() }
            : null;
        return t.extend({}, o, s, a, r);
      }),
      (e.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 }
          : "top" == t
          ? { top: e.top - i, left: e.left + e.width / 2 - n / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - i / 2, left: e.left - n }
          : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width };
      }),
      (e.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var o = { top: 0, left: 0 };
        if (!this.$viewport) return o;
        var r = (this.options.viewport && this.options.viewport.padding) || 0,
          s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
          var a = e.top - r - s.scroll,
            l = e.top + r - s.scroll + i;
          a < s.top
            ? (o.top = s.top - a)
            : l > s.top + s.height && (o.top = s.top + s.height - l);
        } else {
          var c = e.left - r,
            u = e.left + r + n;
          c < s.left
            ? (o.left = s.left - c)
            : u > s.width && (o.left = s.left + s.width - u);
        }
        return o;
      }),
      (e.prototype.getTitle = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-original-title") ||
          ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        );
      }),
      (e.prototype.getUID = function (t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      }),
      (e.prototype.tip = function () {
        return (this.$tip = this.$tip || t(this.options.template));
      }),
      (e.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (e.prototype.enable = function () {
        this.enabled = !0;
      }),
      (e.prototype.disable = function () {
        this.enabled = !1;
      }),
      (e.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (e.prototype.toggle = function (e) {
        var n = this;
        e &&
          ((n = t(e.currentTarget).data("bs." + this.type)) ||
            ((n = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, n))),
          n.tip().hasClass("in") ? n.leave(n) : n.enter(n);
      }),
      (e.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type);
          });
      });
    var n = t.fn.tooltip;
    (t.fn.tooltip = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.tooltip"),
          r = "object" == typeof n && n;
        (o || "destroy" != n) &&
          (o || i.data("bs.tooltip", (o = new e(this, r))),
          "string" == typeof n && o[n]());
      });
    }),
      (t.fn.tooltip.Constructor = e),
      (t.fn.tooltip.noConflict = function () {
        return (t.fn.tooltip = n), this;
      });
  })(jQuery),
  (function (t) {
    "use strict";
    var e = function (t, e) {
      this.init("popover", t, e);
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (e.VERSION = "3.3.2"),
      (e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
      (e.prototype.constructor = e),
      (e.prototype.getDefaults = function () {
        return e.DEFAULTS;
      }),
      (e.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof n
                  ? "html"
                  : "append"
                : "text"
            ](n),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (e.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (e.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (e.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      }),
      (e.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip;
      });
    var n = t.fn.popover;
    (t.fn.popover = function (n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.popover"),
          r = "object" == typeof n && n;
        (o || "destroy" != n) &&
          (o || i.data("bs.popover", (o = new e(this, r))),
          "string" == typeof n && o[n]());
      });
    }),
      (t.fn.popover.Constructor = e),
      (t.fn.popover.noConflict = function () {
        return (t.fn.popover = n), this;
      });
  })(jQuery),
  (function (t) {
    "use strict";
    function e(n, i) {
      var o = t.proxy(this.process, this);
      (this.$body = t("body")),
        (this.$scrollElement = t(t(n).is("body") ? window : n)),
        (this.options = t.extend({}, e.DEFAULTS, i)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on("scroll.bs.scrollspy", o),
        this.refresh(),
        this.process();
    }
    function n(n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.scrollspy"),
          r = "object" == typeof n && n;
        o || i.data("bs.scrollspy", (o = new e(this, r))),
          "string" == typeof n && o[n]();
      });
    }
    (e.VERSION = "3.3.2"),
      (e.DEFAULTS = { offset: 10 }),
      (e.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (e.prototype.refresh = function () {
        var e = "offset",
          n = 0;
        t.isWindow(this.$scrollElement[0]) ||
          ((e = "position"), (n = this.$scrollElement.scrollTop())),
          (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight());
        var i = this;
        this.$body
          .find(this.selector)
          .map(function () {
            var i = t(this),
              o = i.data("target") || i.attr("href"),
              r = /^#./.test(o) && t(o);
            return (
              (r && r.length && r.is(":visible") && [[r[e]().top + n, o]]) ||
              null
            );
          })
          .sort(function (t, e) {
            return t[0] - e[0];
          })
          .each(function () {
            i.offsets.push(this[0]), i.targets.push(this[1]);
          });
      }),
      (e.prototype.process = function () {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          n = this.getScrollHeight(),
          i = this.options.offset + n - this.$scrollElement.height(),
          o = this.offsets,
          r = this.targets,
          s = this.activeTarget;
        if ((this.scrollHeight != n && this.refresh(), e >= i))
          return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0]) return (this.activeTarget = null), this.clear();
        for (t = o.length; t--; )
          s != r[t] &&
            e >= o[t] &&
            (!o[t + 1] || e <= o[t + 1]) &&
            this.activate(r[t]);
      }),
      (e.prototype.activate = function (e) {
        (this.activeTarget = e), this.clear();
        var n =
            this.selector +
            '[data-target="' +
            e +
            '"],' +
            this.selector +
            '[href="' +
            e +
            '"]',
          i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length &&
          (i = i.closest("li.dropdown").addClass("active")),
          i.trigger("activate.bs.scrollspy");
      }),
      (e.prototype.clear = function () {
        t(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var i = t.fn.scrollspy;
    (t.fn.scrollspy = n),
      (t.fn.scrollspy.Constructor = e),
      (t.fn.scrollspy.noConflict = function () {
        return (t.fn.scrollspy = i), this;
      }),
      t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
          var e = t(this);
          n.call(e, e.data());
        });
      });
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.tab");
        o || i.data("bs.tab", (o = new n(this))),
          "string" == typeof e && o[e]();
      });
    }
    var n = function (e) {
      this.element = t(e);
    };
    (n.VERSION = "3.3.2"),
      (n.TRANSITION_DURATION = 150),
      (n.prototype.show = function () {
        var e = this.element,
          n = e.closest("ul:not(.dropdown-menu)"),
          i = e.data("target");
        if (
          (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")),
          !e.parent("li").hasClass("active"))
        ) {
          var o = n.find(".active:last a"),
            r = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
            s = t.Event("show.bs.tab", { relatedTarget: o[0] });
          if (
            (o.trigger(r),
            e.trigger(s),
            !s.isDefaultPrevented() && !r.isDefaultPrevented())
          ) {
            var a = t(i);
            this.activate(e.closest("li"), n),
              this.activate(a, a.parent(), function () {
                o.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }),
                  e.trigger({ type: "shown.bs.tab", relatedTarget: o[0] });
              });
          }
        }
      }),
      (n.prototype.activate = function (e, i, o) {
        function r() {
          s
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            e
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu") &&
              e
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            o && o();
        }
        var s = i.find("> .active"),
          a =
            o &&
            t.support.transition &&
            ((s.length && s.hasClass("fade")) || !!i.find("> .fade").length);
        s.length && a
          ? s
              .one("bsTransitionEnd", r)
              .emulateTransitionEnd(n.TRANSITION_DURATION)
          : r(),
          s.removeClass("in");
      });
    var i = t.fn.tab;
    (t.fn.tab = e),
      (t.fn.tab.Constructor = n),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = i), this;
      });
    var o = function (n) {
      n.preventDefault(), e.call(t(this), "show");
    };
    t(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', o)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', o);
  })(jQuery),
  (function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.affix"),
          r = "object" == typeof e && e;
        o || i.data("bs.affix", (o = new n(this, r))),
          "string" == typeof e && o[e]();
      });
    }
    var n = function (e, i) {
      (this.options = t.extend({}, n.DEFAULTS, i)),
        (this.$target = t(this.options.target)
          .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            t.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = t(e)),
        (this.affixed = this.unpin = this.pinnedOffset = null),
        this.checkPosition();
    };
    (n.VERSION = "3.3.2"),
      (n.RESET = "affix affix-top affix-bottom"),
      (n.DEFAULTS = { offset: 0, target: window }),
      (n.prototype.getState = function (t, e, n, i) {
        var o = this.$target.scrollTop(),
          r = this.$element.offset(),
          s = this.$target.height();
        if (null != n && "top" == this.affixed) return n > o && "top";
        if ("bottom" == this.affixed)
          return null != n
            ? !(o + this.unpin <= r.top) && "bottom"
            : !(t - i >= o + s) && "bottom";
        var a = null == this.affixed,
          l = a ? o : r.top;
        return null != n && n >= o
          ? "top"
          : null != i && l + (a ? s : e) >= t - i && "bottom";
      }),
      (n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
          e = this.$element.offset();
        return (this.pinnedOffset = e.top - t);
      }),
      (n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1);
      }),
      (n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var e = this.$element.height(),
            i = this.options.offset,
            o = i.top,
            r = i.bottom,
            s = t("body").height();
          "object" != typeof i && (r = o = i),
            "function" == typeof o && (o = i.top(this.$element)),
            "function" == typeof r && (r = i.bottom(this.$element));
          var a = this.getState(s, e, o, r);
          if (this.affixed != a) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (a ? "-" + a : ""),
              c = t.Event(l + ".bs.affix");
            if ((this.$element.trigger(c), c.isDefaultPrevented())) return;
            (this.affixed = a),
              (this.unpin = "bottom" == a ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(n.RESET)
                .addClass(l)
                .trigger(l.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == a && this.$element.offset({ top: s - e - r });
        }
      });
    var i = t.fn.affix;
    (t.fn.affix = e),
      (t.fn.affix.Constructor = n),
      (t.fn.affix.noConflict = function () {
        return (t.fn.affix = i), this;
      }),
      t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
          var n = t(this),
            i = n.data();
          (i.offset = i.offset || {}),
            null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
            null != i.offsetTop && (i.offset.top = i.offsetTop),
            e.call(n, i);
        });
      });
  })(jQuery),
  $(document).ready(function () {
    $(window).scroll(function () {
      $(this).scrollTop() > 100
        ? $(".scrollup").fadeIn()
        : $(".scrollup").fadeOut();
    }),
      $(".scrollup").click(function () {
        return $("html, body").animate({ scrollTop: 0 }, 600), !1;
      });
  }),
  $(window).scroll(function () {
    $(".navbar").offset().top > 50
      ? $(".navbar-fixed-top").addClass("top-nav-collapse")
      : $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }),
  $(function () {
    $("a.page-scroll").bind("click", function (t) {
      var e = $(this);
      $("html, body")
        .stop()
        .animate(
          { scrollTop: $(e.attr("href")).offset().top },
          1500,
          "easeInOutExpo"
        ),
        t.preventDefault();
    });
  }),
  $(document).ready(function () {
    $("a").on("click", function (t) {
      if ("" !== this.hash) {
        t.preventDefault();
        var e = this.hash;
        $("html, body").animate(
          { scrollTop: $(e).offset().top },
          1e3,
          function () {
            window.location.hash = e;
          }
        );
      }
    });
  }),
  $(".project-box").hover(
    function () {
      $(".project-box").css("opacity", "0.3"),
        $(this).css("opacity", "1"),
        $(this).children(".panel").children(".panel-body").addClass("blink"),
        $(".project-box").css("transition", "0.5s");
    },
    function () {
      $(".project-box").css("opacity", "1"),
        $(this).children(".panel").children(".panel-body").removeClass("blink");
    }
  );
var ToxProgressBar = function (t) {
  (this.element = t),
    (this.size = +t.dataset.size),
    (this.thickness = +t.dataset.thickness),
    (this.color = t.dataset.color),
    (this.backgroundColor = t.dataset.background),
    (this.progress = t.dataset.progress),
    (this.speed = +t.dataset.speed);
};
(ToxProgressBar.prototype.create = function () {
  var t = this.element.querySelector(".tox-progress-content");
  (this.element.style.width = this.size + "px"),
    (this.element.style.height = this.size + "px"),
    (this.element.innerHTML =
      '<div style="width:' +
      this.size +
      "px;height:" +
      this.size +
      'px;">   <div class="radial-outer" style="background-color: ' +
      this.color +
      "; width: " +
      this.size +
      "px; height: " +
      this.size +
      'px"></div>   <div class="radial-mask-1" style="border-top-left-radius: ' +
      (this.size / 2 + 2) +
      "px; border-top-right-radius: " +
      (this.size / 2 + 2) +
      "px; background-color: " +
      this.backgroundColor +
      "; width: " +
      (this.size + 2) +
      "px; height: " +
      (this.size / 2 + 2) +
      "px; top: -" +
      (this.size + 2) +
      'px;left:-1px;"></div>   <div class="radial-mask-2" style="border-top-left-radius: ' +
      (this.size / 2 + 2) +
      "px; border-top-right-radius: " +
      (this.size / 2 + 2) +
      "px; background-color: " +
      this.backgroundColor +
      "; width: " +
      (this.size + 2) +
      "px; height: " +
      (this.size / 2 + 2) +
      "px; top: -" +
      (this.size + this.size / 2 + 4) +
      'px;left:-1px;"></div>   <div class="radial-mask-3" style="visibility: hidden; border-top-left-radius: ' +
      (this.size / 2 + 2) +
      "px; border-top-right-radius: " +
      (this.size / 2 + 2) +
      "px; background-color: " +
      this.color +
      "; width: " +
      this.size +
      "px; height: " +
      this.size / 2 +
      "px;top: -" +
      (2 * this.size + 4) +
      'px;"></div>   <div class="radial-inner" style="background-color: ' +
      this.backgroundColor +
      "; width: " +
      (this.size - 2 * this.thickness) +
      "px; height: " +
      (this.size - 2 * this.thickness + 2) +
      "px; top: -" +
      (2.5 * this.size - this.thickness + 6) +
      "px; left: " +
      this.thickness +
      'px"></div></div>' +
      (t
        ? '<div class="' +
          t.className +
          '" data-vcenter="' +
          t.dataset.vcenter +
          '" style="' +
          ("true" === t.dataset.vcenter
            ? "display: flex; align-items: center;"
            : "") +
          "top: " +
          -this.size +
          "px;width:" +
          this.size +
          "px;height:" +
          this.size +
          'px;">' +
          (t ? t.innerHTML : "") +
          "</div>"
        : ""));
}),
  (ToxProgressBar.prototype.animate = function () {
    var t = this.element,
      e = this.speed,
      n = this.progress;
    n > 50
      ? ((t.querySelector(".radial-mask-1").style.transition =
          "transform " + e / 2 + "ms ease-in"),
        (t.querySelector(".radial-mask-2").style.transition =
          "transform " + e * ((n - 50) / 100) + "ms ease-out"))
      : (t.querySelector(".radial-mask-1").style.transition =
          "transform " + e * (n / 100) + "ms ease-in"),
      setTimeout(function () {
        n > 50
          ? ((t.querySelector(".radial-mask-1").style.transform =
              "rotate(270deg)"),
            setTimeout(function () {
              (t.querySelector(".radial-mask-1").style.visibility = "hidden"),
                (t.querySelector(".radial-mask-2").style.transform =
                  "rotate(" + (90 + 3.6 * n) + "deg)"),
                (t.querySelector(".radial-mask-3").style.visibility =
                  "visible"),
                100 == +n &&
                  setTimeout(function () {
                    t.querySelector(".radial-mask-2").style.visibility =
                      "hidden";
                  }, e / 2);
            }, e / 2))
          : (t.querySelector(".radial-mask-1").style.transform =
              "rotate(" + (90 + 3.6 * n) + "deg)");
      }, 50);
  });
var ToxProgress = {
  toxProgressBars: [],
  init: function () {
    var t = (this.toxProgressBars = []),
      e = document.querySelectorAll(".tox-progress");
    [].forEach.call(e, function (e) {
      t.push(new ToxProgressBar(e));
    });
  },
  create: function () {
    this.init(),
      this.toxProgressBars.forEach(function (t) {
        t.create();
      });
  },
  animate: function () {
    this.toxProgressBars.forEach(function (t) {
      t.animate();
    });
  },
};
(function () {
  var t,
    e,
    n,
    i,
    o,
    r = function (t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    },
    s =
      [].indexOf ||
      function (t) {
        for (var e = 0, n = this.length; n > e; e++)
          if (e in this && this[e] === t) return e;
        return -1;
      };
  (e = (function () {
    function t() {}
    return (
      (t.prototype.extend = function (t, e) {
        var n, i;
        for (n in e) (i = e[n]), null == t[n] && (t[n] = i);
        return t;
      }),
      (t.prototype.isMobile = function (t) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          t
        );
      }),
      (t.prototype.createEvent = function (t, e, n, i) {
        var o;
        return (
          null == e && (e = !1),
          null == n && (n = !1),
          null == i && (i = null),
          null != document.createEvent
            ? (o = document.createEvent("CustomEvent")).initCustomEvent(
                t,
                e,
                n,
                i
              )
            : null != document.createEventObject
            ? ((o = document.createEventObject()).eventType = t)
            : (o.eventName = t),
          o
        );
      }),
      (t.prototype.emitEvent = function (t, e) {
        return null != t.dispatchEvent
          ? t.dispatchEvent(e)
          : e in (null != t)
          ? t[e]()
          : "on" + e in (null != t)
          ? t["on" + e]()
          : void 0;
      }),
      (t.prototype.addEvent = function (t, e, n) {
        return null != t.addEventListener
          ? t.addEventListener(e, n, !1)
          : null != t.attachEvent
          ? t.attachEvent("on" + e, n)
          : (t[e] = n);
      }),
      (t.prototype.removeEvent = function (t, e, n) {
        return null != t.removeEventListener
          ? t.removeEventListener(e, n, !1)
          : null != t.detachEvent
          ? t.detachEvent("on" + e, n)
          : delete t[e];
      }),
      (t.prototype.innerHeight = function () {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      t
    );
  })()),
    (n =
      this.WeakMap ||
      this.MozWeakMap ||
      (n = (function () {
        function t() {
          (this.keys = []), (this.values = []);
        }
        return (
          (t.prototype.get = function (t) {
            var e, n, i, o, r;
            for (e = i = 0, o = (r = this.keys).length; o > i; e = ++i)
              if (((n = r[e]), n === t)) return this.values[e];
          }),
          (t.prototype.set = function (t, e) {
            var n, i, o, r, s;
            for (n = o = 0, r = (s = this.keys).length; r > o; n = ++o)
              if (((i = s[n]), i === t)) return void (this.values[n] = e);
            return this.keys.push(t), this.values.push(e);
          }),
          t
        );
      })())),
    (t =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (t = (function () {
        function t() {
          "undefined" != typeof console &&
            null !== console &&
            console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
              );
        }
        return (t.notSupported = !0), (t.prototype.observe = function () {}), t;
      })())),
    (i =
      this.getComputedStyle ||
      function (t, e) {
        return (
          (this.getPropertyValue = function (e) {
            var n;
            return (
              "float" === e && (e = "styleFloat"),
              o.test(e) &&
                e.replace(o, function (t, e) {
                  return e.toUpperCase();
                }),
              (null != (n = t.currentStyle) ? n[e] : void 0) || null
            );
          }),
          this
        );
      }),
    (o = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function o(t) {
        null == t && (t = {}),
          (this.scrollCallback = r(this.scrollCallback, this)),
          (this.scrollHandler = r(this.scrollHandler, this)),
          (this.resetAnimation = r(this.resetAnimation, this)),
          (this.start = r(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(t, this.defaults)),
          null != t.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              t.scrollContainer
            )),
          (this.animationNameCache = new n()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
        (o.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null,
        }),
        (o.prototype.init = function () {
          var t;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (t = document.readyState) || "complete" === t
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (o.prototype.start = function () {
          var e, n, i, o, r;
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              var t, n, i, o;
              for (
                o = [],
                  t = 0,
                  n = (i = this.element.querySelectorAll(
                    "." + this.config.boxClass
                  )).length;
                n > t;
                t++
              )
                (e = i[t]), o.push(e);
              return o;
            }.call(this)),
            (this.all = function () {
              var t, n, i, o;
              for (o = [], t = 0, n = (i = this.boxes).length; n > t; t++)
                (e = i[t]), o.push(e);
              return o;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (o = this.boxes, n = 0, i = o.length; i > n; n++)
                (e = o[n]), this.applyStyle(e, !0);
          return (
            this.disabled() ||
              (this.util().addEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().addEvent(window, "resize", this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new t(
                  ((r = this),
                  function (t) {
                    var e, n, i, o, s;
                    for (s = [], e = 0, n = t.length; n > e; e++)
                      (o = t[e]),
                        s.push(
                          function () {
                            var t, e, n, r;
                            for (
                              r = [],
                                t = 0,
                                e = (n = o.addedNodes || []).length;
                              e > t;
                              t++
                            )
                              (i = n[t]), r.push(this.doSync(i));
                            return r;
                          }.call(r)
                        );
                    return s;
                  })
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0
          );
        }),
        (o.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler
            ),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (o.prototype.sync = function (e) {
          return t.notSupported ? this.doSync(this.element) : void 0;
        }),
        (o.prototype.doSync = function (t) {
          var e, n, i, o, r;
          if ((null == t && (t = this.element), 1 === t.nodeType)) {
            for (
              r = [],
                n = 0,
                i = (o = (t = t.parentNode || t).querySelectorAll(
                  "." + this.config.boxClass
                )).length;
              i > n;
              n++
            )
              (e = o[n]),
                s.call(this.all, e) < 0
                  ? (this.boxes.push(e),
                    this.all.push(e),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(e, !0),
                    r.push((this.scrolled = !0)))
                  : r.push(void 0);
            return r;
          }
        }),
        (o.prototype.show = function (t) {
          return (
            this.applyStyle(t),
            (t.className = t.className + " " + this.config.animateClass),
            null != this.config.callback && this.config.callback(t),
            this.util().emitEvent(t, this.wowEvent),
            this.util().addEvent(t, "animationend", this.resetAnimation),
            this.util().addEvent(t, "oanimationend", this.resetAnimation),
            this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation),
            t
          );
        }),
        (o.prototype.applyStyle = function (t, e) {
          var n, i, o, r;
          return (
            (i = t.getAttribute("data-wow-duration")),
            (n = t.getAttribute("data-wow-delay")),
            (o = t.getAttribute("data-wow-iteration")),
            this.animate(
              ((r = this),
              function () {
                return r.customStyle(t, e, i, n, o);
              })
            )
          );
        }),
        (o.prototype.animate =
          "requestAnimationFrame" in window
            ? function (t) {
                return window.requestAnimationFrame(t);
              }
            : function (t) {
                return t();
              }),
        (o.prototype.resetStyle = function () {
          var t, e, n, i, o;
          for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++)
            (t = i[e]), o.push((t.style.visibility = "visible"));
          return o;
        }),
        (o.prototype.resetAnimation = function (t) {
          var e;
          return t.type.toLowerCase().indexOf("animationend") >= 0
            ? ((e = t.target || t.srcElement).className = e.className
                .replace(this.config.animateClass, "")
                .trim())
            : void 0;
        }),
        (o.prototype.customStyle = function (t, e, n, i, o) {
          return (
            e && this.cacheAnimationName(t),
            (t.style.visibility = e ? "hidden" : "visible"),
            n && this.vendorSet(t.style, { animationDuration: n }),
            i && this.vendorSet(t.style, { animationDelay: i }),
            o && this.vendorSet(t.style, { animationIterationCount: o }),
            this.vendorSet(t.style, {
              animationName: e ? "none" : this.cachedAnimationName(t),
            }),
            t
          );
        }),
        (o.prototype.vendors = ["moz", "webkit"]),
        (o.prototype.vendorSet = function (t, e) {
          var n, i, o, r;
          i = [];
          for (n in e)
            (o = e[n]),
              (t["" + n] = o),
              i.push(
                function () {
                  var e, i, s, a;
                  for (a = [], e = 0, i = (s = this.vendors).length; i > e; e++)
                    (r = s[e]),
                      a.push(
                        (t["" + r + n.charAt(0).toUpperCase() + n.substr(1)] =
                          o)
                      );
                  return a;
                }.call(this)
              );
          return i;
        }),
        (o.prototype.vendorCSS = function (t, e) {
          var n, o, r, s, a, l;
          for (
            s = (a = i(t)).getPropertyCSSValue(e),
              n = 0,
              o = (r = this.vendors).length;
            o > n;
            n++
          )
            (l = r[n]), (s = s || a.getPropertyCSSValue("-" + l + "-" + e));
          return s;
        }),
        (o.prototype.animationName = function (t) {
          var e;
          try {
            e = this.vendorCSS(t, "animation-name").cssText;
          } catch (n) {
            e = i(t).getPropertyValue("animation-name");
          }
          return "none" === e ? "" : e;
        }),
        (o.prototype.cacheAnimationName = function (t) {
          return this.animationNameCache.set(t, this.animationName(t));
        }),
        (o.prototype.cachedAnimationName = function (t) {
          return this.animationNameCache.get(t);
        }),
        (o.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (o.prototype.scrollCallback = function () {
          var t;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function () {
              var e, n, i, o;
              for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++)
                (t = i[e]), t && (this.isVisible(t) ? this.show(t) : o.push(t));
              return o;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (o.prototype.offsetTop = function (t) {
          for (var e; void 0 === t.offsetTop; ) t = t.parentNode;
          for (e = t.offsetTop; (t = t.offsetParent); ) e += t.offsetTop;
          return e;
        }),
        (o.prototype.isVisible = function (t) {
          var e, n, i, o, r;
          return (
            (n = t.getAttribute("data-wow-offset") || this.config.offset),
            (o =
              (r =
                (this.config.scrollContainer &&
                  this.config.scrollContainer.scrollTop) ||
                window.pageYOffset) +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              n),
            (e = (i = this.offsetTop(t)) + t.clientHeight),
            o >= i && e >= r
          );
        }),
        (o.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new e());
        }),
        (o.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        o
      );
    })());
}.call(this));

/*============================Made BY Dwolter=============================*/
