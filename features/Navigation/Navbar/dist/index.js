module.exports = (function(t) {
  var e = {}
  function r(n) {
    if (e[n]) return e[n].exports
    var o = (e[n] = { i: n, l: !1, exports: {} })
    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
  }
  return (
    (r.m = t),
    (r.c = e),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
    }),
    (r.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var n = Object.create(null)
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function(e) {
              return t[e]
            }.bind(null, o),
          )
      return n
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return r.d(e, 'a', e), e
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (r.p = ''),
    r((r.s = 2))
  )
})([
  function(t, e) {
    t.exports = require('react')
  },
  function(t, e) {
    t.exports = require('styled-components')
  },
  function(t, e, r) {
    'use strict'
    r.r(e)
    var n = r(0),
      o = r.n(n),
      a = r(1),
      i = r.n(a),
      u = i.a.footer.withConfig({
        displayName: 'navBarstyles__Wrapper',
        componentId: 'sc-1p0nmew-0',
      })([
        'width:100%;display:grid;max-width:900px;grid-template-columns:repeat(auto-fit,minmax(1px,1fr));background:rgba(37,49,55,0.2);bottom:0;background-color:white;box-shadow:0px 1px 4px rgba(0,0,0,0.25);padding-bottom:2px;margin:auto;left:0;right:0;justify-items:center;@media (min-width:900px){box-shadow:0px -1px 0px rgba(0,0,0,0.12);}',
      ]),
      l = i.a.div.withConfig({
        displayName: 'navBarstyles__IconCon',
        componentId: 'sc-1p0nmew-1',
      })(
        [
          'width:50px;text-align:center;font-size:10px;display:grid;grid-template-rows:32px 12px;cursor:pointer;box-sizing:border-box;padding-top:2px;padding-bottom:5px;transition:0.2s;border-radius:100px;&:active{background-color:',
          ';}span{user-select:none;transition:0.1s;color:',
          ';}svg{width:23px;fill:',
          ';transition:0.1s;margin:0 auto;height:35px;}',
        ],
        function(t) {
          return t.backgroundColor
        },
        function(t) {
          return t.color
        },
        function(t) {
          return t.color
        },
      )
    e.default = Object(n.memo)(function(t) {
      var e = t.data,
        r = t.wrapperStyle,
        n = t.router,
        a = t.defaultColor,
        i = t.activeColor,
        c = t.backgroundColor,
        p = t.labelStyle,
        d = function(t) {
          var e = t.currentTarget.dataset.link
          return n('/'.concat(e))
        }
      return o.a.createElement(
        u,
        { style: r },
        e.map(function(t) {
          var e = t.id,
            r = t.link,
            n = t.svg,
            u = t.label,
            s = window.location.pathname,
            f = (s = (s = (s = s.split('/'))[1]) === r) ? i : a
          return o.a.createElement(
            l,
            {
              key: e,
              'data-link': r,
              color: f,
              onClick: d,
              backgroundColor: c,
            },
            n,
            o.a.createElement('span', { style: p }, u),
          )
        }),
      )
    })
  },
])
