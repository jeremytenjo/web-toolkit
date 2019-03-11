module.exports = (function(n) {
  var e = {}
  function t(r) {
    if (e[r]) return e[r].exports
    var o = (e[r] = { i: r, l: !1, exports: {} })
    return n[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports
  }
  return (
    (t.m = n),
    (t.c = e),
    (t.d = function(n, e, r) {
      t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: r })
    }),
    (t.r = function(n) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(n, '__esModule', { value: !0 })
    }),
    (t.t = function(n, e) {
      if ((1 & e && (n = t(n)), 8 & e)) return n
      if (4 & e && 'object' == typeof n && n && n.__esModule) return n
      var r = Object.create(null)
      if (
        (t.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: n }),
        2 & e && 'string' != typeof n)
      )
        for (var o in n)
          t.d(
            r,
            o,
            function(e) {
              return n[e]
            }.bind(null, o),
          )
      return r
    }),
    (t.n = function(n) {
      var e =
        n && n.__esModule
          ? function() {
              return n.default
            }
          : function() {
              return n
            }
      return t.d(e, 'a', e), e
    }),
    (t.o = function(n, e) {
      return Object.prototype.hasOwnProperty.call(n, e)
    }),
    (t.p = ''),
    t((t.s = 2))
  )
})([
  function(n, e) {
    n.exports = require('react')
  },
  function(n, e) {
    n.exports = require('styled-components')
  },
  function(n, e, t) {
    'use strict'
    t.r(e)
    var r = t(0),
      o = t.n(r),
      i = t(1),
      a = t.n(i)
    function u() {
      var n = l([
        '\n  width: 50px;\n  text-align: center;\n  font-size: 10px;\n  display: grid;\n  grid-template-rows: 32px 12px;\n  cursor: pointer;\n  box-sizing: border-box;\n  padding-top: 2px;\n  padding-bottom: 5px;\n  transition: 0.2s;\n  border-radius: 100px;\n\n  &:active {\n    background-color: ',
        ';\n  }\n\n  span {\n    user-select: none;\n    transition: 0.1s;\n    color: ',
        ';\n  }\n\n  svg {\n    width: 23px;\n    fill: ',
        ';\n    transition: 0.1s;\n    margin: 0 auto;\n    height: 35px;\n  }\n',
      ])
      return (
        (u = function() {
          return n
        }),
        n
      )
    }
    function c() {
      var n = l([
        '\n  width: 100%;\n  display: grid;\n  max-width: 900px;\n  grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));\n  background: rgba(37, 49, 55, 0.2);\n  bottom: 0;\n  background-color: white;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);\n  padding-bottom: 2px;\n  margin: auto;\n  left: 0;\n  right: 0;\n  justify-items: center;\n  @media (min-width: 900px) {\n    box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.12);\n  }\n',
      ])
      return (
        (c = function() {
          return n
        }),
        n
      )
    }
    function l(n, e) {
      return (
        e || (e = n.slice(0)),
        Object.freeze(
          Object.defineProperties(n, { raw: { value: Object.freeze(e) } }),
        )
      )
    }
    var p = a.a.footer(c()),
      d = a.a.div(
        u(),
        function(n) {
          return n.backgroundColor
        },
        function(n) {
          return n.color
        },
        function(n) {
          return n.color
        },
      )
    e.default = Object(r.memo)(function(n) {
      var e = n.data,
        t = n.wrapperStyle,
        r = n.router,
        i = n.defaultColor,
        a = n.activeColor,
        u = n.backgroundColor,
        c = n.labelStyle,
        l = function(n) {
          var e = n.currentTarget.dataset.link
          return r('/'.concat(e))
        }
      return o.a.createElement(
        p,
        { style: t },
        e.map(function(n) {
          var e = n.id,
            t = n.link,
            r = n.svg,
            p = n.label,
            f = window.location.pathname,
            s = (f = (f = (f = f.split('/'))[1]) === t) ? a : i
          return o.a.createElement(
            d,
            {
              key: e,
              'data-link': t,
              color: s,
              onClick: l,
              backgroundColor: u,
            },
            r,
            o.a.createElement('span', { style: c }, p),
          )
        }),
      )
    })
  },
])
