var Z = Object.defineProperty;
var q = (t, e, n) =>
  e in t
    ? Z(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var z = (t, e, n) => (q(t, typeof e != "symbol" ? e + "" : e, n), n);
import {
  n as x,
  L as G,
  f as T,
  M as H,
  r as k,
  N as M,
  w as O,
  O as J,
  A as I,
  P as F,
  b as K,
  Q as tt,
  R as et,
  S as nt,
  T as it,
  U as Q,
  V as st,
  W as rt,
  X as at,
  Y as ot,
  Z as ft,
} from "./scheduler.bALzG6-i.js";
const W = typeof window < "u";
let L = W ? () => window.performance.now() : () => Date.now(),
  U = W ? (t) => requestAnimationFrame(t) : x;
const S = new Set();
function X(t) {
  S.forEach((e) => {
    e.c(t) || (S.delete(e), e.f());
  }),
    S.size !== 0 && U(X);
}
function V(t) {
  let e;
  return (
    S.size === 0 && U(X),
    {
      promise: new Promise((n) => {
        S.add((e = { c: t, f: n }));
      }),
      abort() {
        S.delete(e);
      },
    }
  );
}
const j = new Map();
let A = 0;
function ut(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function lt(t, e) {
  const n = { stylesheet: H(e), rules: {} };
  return j.set(t, n), n;
}
function C(t, e, n, r, u, a, l, i = 0) {
  const c = 16.666 / r;
  let s = `{
`;
  for (let $ = 0; $ <= 1; $ += c) {
    const g = e + (n - e) * a($);
    s +=
      $ * 100 +
      `%{${l(g, 1 - g)}}
`;
  }
  const _ =
      s +
      `100% {${l(n, 1 - n)}}
}`,
    f = `__svelte_${ut(_)}_${i}`,
    m = G(t),
    { stylesheet: h, rules: o } = j.get(m) || lt(m, t);
  o[f] ||
    ((o[f] = !0), h.insertRule(`@keyframes ${f} ${_}`, h.cssRules.length));
  const d = t.style.animation || "";
  return (
    (t.style.animation = `${d ? `${d}, ` : ""}${f} ${r}ms linear ${u}ms 1 both`),
    (A += 1),
    f
  );
}
function N(t, e) {
  const n = (t.style.animation || "").split(", "),
    r = n.filter(
      e ? (a) => a.indexOf(e) < 0 : (a) => a.indexOf("__svelte") === -1,
    ),
    u = n.length - r.length;
  u && ((t.style.animation = r.join(", ")), (A -= u), A || ct());
}
function ct() {
  U(() => {
    A ||
      (j.forEach((t) => {
        const { ownerNode: e } = t.stylesheet;
        e && T(e);
      }),
      j.clear());
  });
}
let E;
function B() {
  return (
    E ||
      ((E = Promise.resolve()),
      E.then(() => {
        E = null;
      })),
    E
  );
}
function v(t, e, n) {
  t.dispatchEvent(J(`${e ? "intro" : "outro"}${n}`));
}
const R = new Set();
let p;
function yt() {
  p = { r: 0, c: [], p };
}
function wt() {
  p.r || k(p.c), (p = p.p);
}
function _t(t, e) {
  t && t.i && (R.delete(t), t.i(e));
}
function vt(t, e, n, r) {
  if (t && t.o) {
    if (R.has(t)) return;
    R.add(t),
      p.c.push(() => {
        R.delete(t), r && (n && t.d(1), r());
      }),
      t.o(e);
  } else r && r();
}
const D = { duration: 0 };
function xt(t, e, n) {
  const r = { direction: "in" };
  let u = e(t, n, r),
    a = !1,
    l,
    i,
    c = 0;
  function s() {
    l && N(t, l);
  }
  function _() {
    const {
      delay: m = 0,
      duration: h = 300,
      easing: o = I,
      tick: d = x,
      css: $,
    } = u || D;
    $ && (l = C(t, 0, 1, h, m, o, $, c++)), d(0, 1);
    const g = L() + m,
      y = g + h;
    i && i.abort(),
      (a = !0),
      O(() => v(t, !0, "start")),
      (i = V((w) => {
        if (a) {
          if (w >= y) return d(1, 0), v(t, !0, "end"), s(), (a = !1);
          if (w >= g) {
            const b = o((w - g) / h);
            d(b, 1 - b);
          }
        }
        return a;
      }));
  }
  let f = !1;
  return {
    start() {
      f || ((f = !0), N(t), M(u) ? ((u = u(r)), B().then(_)) : _());
    },
    invalidate() {
      f = !1;
    },
    end() {
      a && (s(), (a = !1));
    },
  };
}
function bt(t, e, n) {
  const r = { direction: "out" };
  let u = e(t, n, r),
    a = !0,
    l;
  const i = p;
  i.r += 1;
  let c;
  function s() {
    const {
      delay: _ = 0,
      duration: f = 300,
      easing: m = I,
      tick: h = x,
      css: o,
    } = u || D;
    o && (l = C(t, 1, 0, f, _, m, o));
    const d = L() + _,
      $ = d + f;
    O(() => v(t, !1, "start")),
      "inert" in t && ((c = t.inert), (t.inert = !0)),
      V((g) => {
        if (a) {
          if (g >= $) return h(0, 1), v(t, !1, "end"), --i.r || k(i.c), !1;
          if (g >= d) {
            const y = m((g - d) / f);
            h(1 - y, y);
          }
        }
        return a;
      });
  }
  return (
    M(u)
      ? B().then(() => {
          (u = u(r)), s();
        })
      : s(),
    {
      end(_) {
        _ && "inert" in t && (t.inert = c),
          _ && u.tick && u.tick(1, 0),
          a && (l && N(t, l), (a = !1));
      },
    }
  );
}
function St(t, e, n, r) {
  let a = e(t, n, { direction: "both" }),
    l = r ? 0 : 1,
    i = null,
    c = null,
    s = null,
    _;
  function f() {
    s && N(t, s);
  }
  function m(o, d) {
    const $ = o.b - l;
    return (
      (d *= Math.abs($)),
      {
        a: l,
        b: o.b,
        d: $,
        duration: d,
        start: o.start,
        end: o.start + d,
        group: o.group,
      }
    );
  }
  function h(o) {
    const {
        delay: d = 0,
        duration: $ = 300,
        easing: g = I,
        tick: y = x,
        css: w,
      } = a || D,
      b = { start: L() + d, b: o };
    o || ((b.group = p), (p.r += 1)),
      "inert" in t &&
        (o ? _ !== void 0 && (t.inert = _) : ((_ = t.inert), (t.inert = !0))),
      i || c
        ? (c = b)
        : (w && (f(), (s = C(t, l, o, $, d, g, w))),
          o && y(0, 1),
          (i = m(b, $)),
          O(() => v(t, o, "start")),
          V((P) => {
            if (
              (c &&
                P > c.start &&
                ((i = m(c, $)),
                (c = null),
                v(t, i.b, "start"),
                w && (f(), (s = C(t, l, i.b, i.duration, 0, g, a.css)))),
              i)
            ) {
              if (P >= i.end)
                y((l = i.b), 1 - l),
                  v(t, i.b, "end"),
                  c || (i.b ? f() : --i.group.r || k(i.group.c)),
                  (i = null);
              else if (P >= i.start) {
                const Y = P - i.start;
                (l = i.a + i.d * g(Y / i.duration)), y(l, 1 - l);
              }
            }
            return !!(i || c);
          }));
  }
  return {
    run(o) {
      M(a)
        ? B().then(() => {
            (a = a({ direction: o ? "in" : "out" })), h(o);
          })
        : h(o);
    },
    end() {
      f(), (i = c = null);
    },
  };
}
function kt(t) {
  t && t.c();
}
function Et(t, e) {
  t && t.l(e);
}
function dt(t, e, n) {
  const { fragment: r, after_update: u } = t.$$;
  r && r.m(e, n),
    O(() => {
      const a = t.$$.on_mount.map(st).filter(M);
      t.$$.on_destroy ? t.$$.on_destroy.push(...a) : k(a), (t.$$.on_mount = []);
    }),
    u.forEach(O);
}
function $t(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (nt(n.after_update),
    k(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function ht(t, e) {
  t.$$.dirty[0] === -1 && (rt.push(t), at(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Ot(t, e, n, r, u, a, l = null, i = [-1]) {
  const c = it;
  Q(t);
  const s = (t.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: x,
    not_equal: u,
    bound: F(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: F(),
    dirty: i,
    skip_bound: !1,
    root: e.target || c.$$.root,
  });
  l && l(s.root);
  let _ = !1;
  if (
    ((s.ctx = n
      ? n(t, e.props || {}, (f, m, ...h) => {
          const o = h.length ? h[0] : m;
          return (
            s.ctx &&
              u(s.ctx[f], (s.ctx[f] = o)) &&
              (!s.skip_bound && s.bound[f] && s.bound[f](o), _ && ht(t, f)),
            m
          );
        })
      : []),
    s.update(),
    (_ = !0),
    k(s.before_update),
    (s.fragment = r ? r(s.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      ot();
      const f = K(e.target);
      s.fragment && s.fragment.l(f), f.forEach(T);
    } else s.fragment && s.fragment.c();
    e.intro && _t(t.$$.fragment), dt(t, e.target, e.anchor), ft(), tt();
  }
  Q(c);
}
class Mt {
  constructor() {
    z(this, "$$");
    z(this, "$$set");
  }
  $destroy() {
    $t(this, 1), (this.$destroy = x);
  }
  $on(e, n) {
    if (!M(n)) return x;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      r.push(n),
      () => {
        const u = r.indexOf(n);
        u !== -1 && r.splice(u, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !et(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const mt = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(mt);
export {
  Mt as S,
  _t as a,
  xt as b,
  wt as c,
  St as d,
  bt as e,
  kt as f,
  yt as g,
  Et as h,
  Ot as i,
  $t as j,
  dt as m,
  vt as t,
};
