import {
  s as wt,
  e as R,
  c as F,
  b as V,
  f as I,
  u as j,
  _ as Ne,
  i as $,
  G as Me,
  n as Re,
  $ as ei,
  a0 as ti,
  a as se,
  g as le,
  h as O,
  y as je,
  H as vn,
  v as ur,
  I as mn,
  J as yn,
  K as wn,
  N as _i,
  r as vi,
  o as ni,
  E as Cr,
  m as mi,
  C as pr,
  l as vt,
  p as yi,
  w as gr,
  x as ri,
  t as zt,
  d as Kt,
  q as ii,
} from "../chunks/scheduler.bALzG6-i.js";
import {
  S as bt,
  i as Pt,
  g as Ye,
  c as Je,
  a as L,
  t as G,
  f as Tt,
  h as Ct,
  m as St,
  j as It,
  d as pn,
  b as wi,
} from "../chunks/index.8Nsucz2u.js";
import { e as mt, u as bi, o as Pi } from "../chunks/each.uvXnbnhl.js";
import { u as Ti, t as Ci } from "../chunks/stores.d2mhU7YY.js";
import { f as Sr, b as Ir } from "../chunks/index.V82jZZf0.js";
/* empty css                         */ import {
  c as Er,
  b as Ar,
} from "../chunks/standards.jAja-OFF.js";
function Si(n) {
  let t, i, s;
  return {
    c() {
      (t = R("button")), this.h();
    },
    l(o) {
      (t = F(o, "BUTTON", { class: !0 })), V(t).forEach(I), this.h();
    },
    h() {
      j(t, "class", "sc-carousel-button sc-carousel-dot__dot svelte-yu7247"),
        Ne(t, "sc-carousel-dot__dot_active", n[0]);
    },
    m(o, r) {
      $(o, t, r), i || ((s = Me(t, "click", n[1])), (i = !0));
    },
    p(o, [r]) {
      r & 1 && Ne(t, "sc-carousel-dot__dot_active", o[0]);
    },
    i: Re,
    o: Re,
    d(o) {
      o && I(t), (i = !1), s();
    },
  };
}
function Ii(n, t, i) {
  let { active: s = !1 } = t;
  function o(r) {
    ei.call(this, n, r);
  }
  return (
    (n.$$set = (r) => {
      "active" in r && i(0, (s = r.active));
    }),
    [s, o]
  );
}
class Ei extends bt {
  constructor(t) {
    super(), Pt(this, t, Ii, Si, wt, { active: 0 });
  }
}
function Or(n, t, i) {
  const s = n.slice();
  return (s[5] = t[i]), (s[7] = i), s;
}
function Dr(n, t) {
  let i, s, o, r;
  function c() {
    return t[3](t[7]);
  }
  return (
    (s = new Ei({ props: { active: t[1] === t[7] } })),
    s.$on("click", c),
    {
      key: n,
      first: null,
      c() {
        (i = R("div")), Tt(s.$$.fragment), (o = se()), this.h();
      },
      l(f) {
        i = F(f, "DIV", { class: !0 });
        var d = V(i);
        Ct(s.$$.fragment, d), (o = le(d)), d.forEach(I), this.h();
      },
      h() {
        j(i, "class", "sc-carousel-dots__dot-container svelte-1oj5bge"),
          (this.first = i);
      },
      m(f, d) {
        $(f, i, d), St(s, i, null), O(i, o), (r = !0);
      },
      p(f, d) {
        t = f;
        const b = {};
        d & 3 && (b.active = t[1] === t[7]), s.$set(b);
      },
      i(f) {
        r || (L(s.$$.fragment, f), (r = !0));
      },
      o(f) {
        G(s.$$.fragment, f), (r = !1);
      },
      d(f) {
        f && I(i), It(s);
      },
    }
  );
}
function Ai(n) {
  let t,
    i = [],
    s = new Map(),
    o,
    r = mt(Array(n[0]));
  const c = (f) => f[7];
  for (let f = 0; f < r.length; f += 1) {
    let d = Or(n, r, f),
      b = c(d);
    s.set(b, (i[f] = Dr(b, d)));
  }
  return {
    c() {
      t = R("div");
      for (let f = 0; f < i.length; f += 1) i[f].c();
      this.h();
    },
    l(f) {
      t = F(f, "DIV", { class: !0 });
      var d = V(t);
      for (let b = 0; b < i.length; b += 1) i[b].l(d);
      d.forEach(I), this.h();
    },
    h() {
      j(t, "class", "sc-carousel-dots__container svelte-1oj5bge");
    },
    m(f, d) {
      $(f, t, d);
      for (let b = 0; b < i.length; b += 1) i[b] && i[b].m(t, null);
      o = !0;
    },
    p(f, [d]) {
      d & 7 &&
        ((r = mt(Array(f[0]))),
        Ye(),
        (i = bi(i, d, c, 1, f, r, s, t, Pi, Dr, null, Or)),
        Je());
    },
    i(f) {
      if (!o) {
        for (let d = 0; d < r.length; d += 1) L(i[d]);
        o = !0;
      }
    },
    o(f) {
      for (let d = 0; d < i.length; d += 1) G(i[d]);
      o = !1;
    },
    d(f) {
      f && I(t);
      for (let d = 0; d < i.length; d += 1) i[d].d();
    },
  };
}
function Oi(n, t, i) {
  const s = ti();
  let { pagesCount: o = 1 } = t,
    { currentPageIndex: r = 0 } = t;
  function c(d) {
    s("pageChange", d);
  }
  const f = (d) => c(d);
  return (
    (n.$$set = (d) => {
      "pagesCount" in d && i(0, (o = d.pagesCount)),
        "currentPageIndex" in d && i(1, (r = d.currentPageIndex));
    }),
    [o, r, c, f]
  );
}
class Di extends bt {
  constructor(t) {
    super(), Pt(this, t, Oi, Ai, wt, { pagesCount: 0, currentPageIndex: 1 });
  }
}
const yt = "prev",
  Fe = "next";
function xi(n) {
  let t, i, s, o;
  return {
    c() {
      (t = R("button")), (i = R("i")), this.h();
    },
    l(r) {
      t = F(r, "BUTTON", { class: !0 });
      var c = V(t);
      (i = F(c, "I", { class: !0 })), V(i).forEach(I), c.forEach(I), this.h();
    },
    h() {
      j(i, "class", "sc-carousel-arrow__arrow svelte-9ztt4p"),
        Ne(i, "sc-carousel-arrow__arrow-next", n[0] === Fe),
        Ne(i, "sc-carousel-arrow__arrow-prev", n[0] === yt),
        j(
          t,
          "class",
          "sc-carousel-button sc-carousel-arrow__circle svelte-9ztt4p",
        ),
        Ne(t, "sc-carousel-arrow__circle_disabled", n[1]);
    },
    m(r, c) {
      $(r, t, c), O(t, i), s || ((o = Me(t, "click", n[2])), (s = !0));
    },
    p(r, [c]) {
      c & 1 && Ne(i, "sc-carousel-arrow__arrow-next", r[0] === Fe),
        c & 1 && Ne(i, "sc-carousel-arrow__arrow-prev", r[0] === yt),
        c & 2 && Ne(t, "sc-carousel-arrow__circle_disabled", r[1]);
    },
    i: Re,
    o: Re,
    d(r) {
      r && I(t), (s = !1), o();
    },
  };
}
function Mi(n, t, i) {
  let { direction: s = Fe } = t,
    { disabled: o = !1 } = t;
  function r(c) {
    ei.call(this, n, c);
  }
  return (
    (n.$$set = (c) => {
      "direction" in c && i(0, (s = c.direction)),
        "disabled" in c && i(1, (o = c.disabled));
    }),
    [s, o, r]
  );
}
class ai extends bt {
  constructor(t) {
    super(), Pt(this, t, Mi, xi, wt, { direction: 0, disabled: 1 });
  }
}
function ji(n) {
  let t;
  return {
    c() {
      (t = R("div")), this.h();
    },
    l(i) {
      (t = F(i, "DIV", { class: !0, style: !0 })), V(t).forEach(I), this.h();
    },
    h() {
      j(t, "class", "sc-carousel-progress__indicator svelte-nuyenl"),
        je(t, "width", n[0] + "%");
    },
    m(i, s) {
      $(i, t, s);
    },
    p(i, [s]) {
      s & 1 && je(t, "width", i[0] + "%");
    },
    i: Re,
    o: Re,
    d(i) {
      i && I(t);
    },
  };
}
const xr = 100;
function Li(n, t, i) {
  let s,
    { value: o = 0 } = t;
  return (
    (n.$$set = (r) => {
      "value" in r && i(1, (o = r.value));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 2 && i(0, (s = Math.min(Math.max(o * xr, 0), xr)));
    }),
    [s, o]
  );
}
class Hi extends bt {
  constructor(t) {
    super(), Pt(this, t, Li, ji, wt, { value: 1 });
  }
}
function Ni(n, t) {
  n.addEventListener("mousedown", t),
    n.addEventListener("touchstart", t, { passive: !0 });
}
function Ri(n, t) {
  n.removeEventListener("mousedown", t), n.removeEventListener("touchstart", t);
}
function Fi(n, t) {
  n.addEventListener("mouseup", t), n.addEventListener("touchend", t);
}
function Mr(n, t) {
  n.removeEventListener("mouseup", t), n.removeEventListener("touchend", t);
}
function Bi(n, t) {
  n.addEventListener("mousemove", t), n.addEventListener("touchmove", t);
}
function jr(n, t) {
  n.removeEventListener("mousemove", t), n.removeEventListener("touchmove", t);
}
function vr(n) {
  return function (t, i) {
    n.dispatchEvent(new CustomEvent(t, { detail: i }));
  };
}
const Gi = 110,
  Ui = 9,
  Vi = 111,
  Wi = 20;
function fr(n) {
  if ("TouchEvent" in window && n instanceof TouchEvent) {
    const t = n.touches[0];
    return { x: t ? t.clientX : 0, y: t ? t.clientY : 0 };
  }
  return { x: n.clientX, y: n.clientY };
}
function zi(n, { thresholdProvider: t }) {
  const i = vr(n);
  let s,
    o,
    r = 0,
    c,
    f = !1;
  function d() {
    return Date.now() - c >= Vi && Math.abs(r) >= Wi;
  }
  function b(_) {
    (c = Date.now()), (r = 0), (f = !0);
    const h = fr(_);
    (s = h.x),
      (o = h.y),
      i("swipeStart", { x: s, y: o }),
      Bi(window, g),
      Fi(window, w);
  }
  function g(_) {
    if (!f) return;
    const h = fr(_),
      P = h.x - s,
      D = h.y - o;
    (s = h.x),
      (o = h.y),
      i("swipeMove", { x: s, y: o, dx: P, dy: D }),
      P !== 0 && Math.sign(P) !== Math.sign(r) && (r = 0),
      (r += P),
      Math.abs(r) > t() &&
        (i("swipeThresholdReached", { direction: r > 0 ? yt : Fe }),
        Mr(window, w),
        jr(window, g));
  }
  function w(_) {
    if ((Mr(window, w), jr(window, g), (f = !1), !d())) {
      i("swipeFailed");
      return;
    }
    const h = fr(_);
    i("swipeEnd", { x: h.x, y: h.y });
  }
  return (
    Ni(n, b),
    {
      destroy() {
        Ri(n, b);
      },
    }
  );
}
function Ki(n, t) {
  n.addEventListener("mouseenter", t);
}
function ki(n, t) {
  n.removeEventListener("mouseenter", t);
}
function Xi(n, t) {
  n.addEventListener("mouseleave", t);
}
function Lr(n, t) {
  n.removeEventListener("mouseleave", t);
}
function qi(n) {
  const t = vr(n);
  function i() {
    Xi(n, s), t("hovered", { value: !0 });
  }
  function s() {
    t("hovered", { value: !1 }), Lr(n, s);
  }
  return (
    Ki(n, i),
    {
      destroy() {
        ki(n, i), Lr(n, s);
      },
    }
  );
}
const Yi = (n, t) => {
  const i = t.x - n.x,
    s = t.y - n.y;
  return Math.sqrt(i * i + s * s);
};
function _t(n, t, i) {
  return Math.max(n, Math.min(t, i));
}
function Ji(n, t) {
  n.addEventListener("touchstart", t, { passive: !0 });
}
function Zi(n, t) {
  n.removeEventListener("touchstart", t);
}
function Qi(n, t) {
  n.addEventListener("touchend", t);
}
function Hr(n, t) {
  n.removeEventListener("touchend", t);
}
function $i(n) {
  const t = vr(n);
  let i = 0,
    s = { x: 0, y: 0 };
  function o({ tapEndedAt: f, tapEndedPos: d }) {
    const b = f - i,
      g = Yi(s, d);
    return b <= Gi && g <= Ui;
  }
  function r(f) {
    i = Date.now();
    const d = f.touches[0];
    (s = { x: d.clientX, y: d.clientY }), Qi(n, c);
  }
  function c(f) {
    Hr(n, c);
    const d = f.changedTouches[0];
    o({
      tapEndedAt: Date.now(),
      tapEndedPos: { x: d.clientX, y: d.clientY },
    }) && t("tapped");
  }
  return (
    Ji(n, r),
    {
      destroy() {
        Zi(n, r), Hr(n, c);
      },
    }
  );
}
function ea({
  currentParticleIndex: n,
  particlesCount: t,
  clonesCountHead: i,
  clonesCountTotal: s,
  particlesToScroll: o,
}) {
  return n === t - i
    ? 0
    : n === 0
      ? oi({ particlesCountWithoutClones: t - s, particlesToScroll: o }) - 1
      : Math.floor((n - i) / o);
}
function ta({ currentParticleIndex: n, particlesToScroll: t }) {
  return Math.ceil(n / t);
}
function na({
  currentParticleIndex: n,
  particlesCount: t,
  clonesCountHead: i,
  clonesCountTotal: s,
  infinite: o,
  particlesToScroll: r,
}) {
  return o
    ? ea({
        currentParticleIndex: n,
        particlesCount: t,
        clonesCountHead: i,
        clonesCountTotal: s,
        particlesToScroll: r,
      })
    : ta({ currentParticleIndex: n, particlesToScroll: r });
}
function oi({ particlesCountWithoutClones: n, particlesToScroll: t }) {
  return Math.ceil(n / t);
}
function ra({
  particlesCountWithoutClones: n,
  particlesToScroll: t,
  particlesToShow: i,
}) {
  const s = si({
    particlesCountWithoutClones: n,
    particlesToScroll: t,
    particlesToShow: i,
  });
  return Math.ceil(n / t) - s;
}
function ia({
  infinite: n,
  particlesCountWithoutClones: t,
  particlesToScroll: i,
  particlesToShow: s,
}) {
  return n
    ? oi({ particlesCountWithoutClones: t, particlesToScroll: i })
    : ra({
        particlesCountWithoutClones: t,
        particlesToScroll: i,
        particlesToShow: s,
      });
}
function aa({
  pageIndex: n,
  clonesCountHead: t,
  clonesCountTail: i,
  particlesToScroll: s,
  particlesCount: o,
}) {
  return _t(0, Math.min(t + n * s, o - i), o - 1);
}
function oa({
  pageIndex: n,
  particlesToScroll: t,
  particlesCount: i,
  particlesToShow: s,
}) {
  return _t(0, Math.min(n * t, i - s), i - 1);
}
function dr({
  infinite: n,
  pageIndex: t,
  clonesCountHead: i,
  clonesCountTail: s,
  particlesToScroll: o,
  particlesCount: r,
  particlesToShow: c,
}) {
  return n
    ? aa({
        pageIndex: t,
        clonesCountHead: i,
        clonesCountTail: s,
        particlesToScroll: o,
        particlesCount: r,
      })
    : oa({
        pageIndex: t,
        particlesToScroll: o,
        particlesCount: r,
        particlesToShow: c,
      });
}
function sa({ particlesContainerChildren: n, particleWidth: t }) {
  for (let i = 0; i < n.length; i++)
    (n[i].style.minWidth = `${t}px`), (n[i].style.maxWidth = `${t}px`);
}
function si({
  particlesToScroll: n,
  particlesToShow: t,
  particlesCountWithoutClones: i,
}) {
  const s = n - t;
  let o = t;
  for (;;) {
    const r = i - o - s;
    if (r < t) return Math.max(r, 0);
    o += t + s;
  }
}
function la(n) {
  return new ResizeObserver((t) => {
    n({ width: t[0].contentRect.width });
  });
}
function ca({
  clonesCountHead: n,
  clonesCountTail: t,
  particlesContainerChildren: i,
}) {
  const s = [];
  for (let c = 0; c < t; c++) s.push(i[c].cloneNode(!0));
  const o = [],
    r = i.length;
  for (let c = r - 1; c > r - 1 - n; c--) o.push(i[c].cloneNode(!0));
  return { clonesToAppend: s, clonesToPrepend: o };
}
function ua({ particlesContainer: n, clonesToAppend: t, clonesToPrepend: i }) {
  for (let s = 0; s < t.length; s++) n.append(t[s]);
  for (let s = 0; s < i.length; s++) n.prepend(i[s]);
}
function fa({ infinite: n, particlesToShow: t, partialPageSize: i }) {
  const s = n
    ? { head: Math.ceil(i || t), tail: Math.ceil(t) }
    : { head: 0, tail: 0 };
  return { ...s, total: s.head + s.tail };
}
const kt = (n, t, i) => {
    if (n && n.hasOwnProperty(t)) return n[t];
    if (i === void 0) throw new Error(`Required arg "${t}" was not provided`);
    return i;
  },
  _r = (n) => (t) => {
    n[t] && n[t]();
  };
var ve =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function mr(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var da = "Expected a function",
  li = "__lodash_hash_undefined__",
  ci = 1 / 0,
  ha = "[object Function]",
  pa = "[object GeneratorFunction]",
  ga = "[object Symbol]",
  _a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  va = /^\w*$/,
  ma = /^\./,
  ya =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  wa = /[\\^$.*+?()[\]{}|]/g,
  ba = /\\(\\)?/g,
  Pa = /^\[object .+?Constructor\]$/,
  Ta = typeof ve == "object" && ve && ve.Object === Object && ve,
  Ca = typeof self == "object" && self && self.Object === Object && self,
  yr = Ta || Ca || Function("return this")();
function Sa(n, t) {
  return n == null ? void 0 : n[t];
}
function Ia(n) {
  var t = !1;
  if (n != null && typeof n.toString != "function")
    try {
      t = !!(n + "");
    } catch {}
  return t;
}
var Ea = Array.prototype,
  Aa = Function.prototype,
  ui = Object.prototype,
  hr = yr["__core-js_shared__"],
  Nr = (function () {
    var n = /[^.]+$/.exec((hr && hr.keys && hr.keys.IE_PROTO) || "");
    return n ? "Symbol(src)_1." + n : "";
  })(),
  fi = Aa.toString,
  wr = ui.hasOwnProperty,
  di = ui.toString,
  Oa = RegExp(
    "^" +
      fi
        .call(wr)
        .replace(wa, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?",
        ) +
      "$",
  ),
  Rr = yr.Symbol,
  Da = Ea.splice,
  xa = hi(yr, "Map"),
  Xt = hi(Object, "create"),
  Fr = Rr ? Rr.prototype : void 0,
  Br = Fr ? Fr.toString : void 0;
function Ze(n) {
  var t = -1,
    i = n ? n.length : 0;
  for (this.clear(); ++t < i; ) {
    var s = n[t];
    this.set(s[0], s[1]);
  }
}
function Ma() {
  this.__data__ = Xt ? Xt(null) : {};
}
function ja(n) {
  return this.has(n) && delete this.__data__[n];
}
function La(n) {
  var t = this.__data__;
  if (Xt) {
    var i = t[n];
    return i === li ? void 0 : i;
  }
  return wr.call(t, n) ? t[n] : void 0;
}
function Ha(n) {
  var t = this.__data__;
  return Xt ? t[n] !== void 0 : wr.call(t, n);
}
function Na(n, t) {
  var i = this.__data__;
  return (i[n] = Xt && t === void 0 ? li : t), this;
}
Ze.prototype.clear = Ma;
Ze.prototype.delete = ja;
Ze.prototype.get = La;
Ze.prototype.has = Ha;
Ze.prototype.set = Na;
function Et(n) {
  var t = -1,
    i = n ? n.length : 0;
  for (this.clear(); ++t < i; ) {
    var s = n[t];
    this.set(s[0], s[1]);
  }
}
function Ra() {
  this.__data__ = [];
}
function Fa(n) {
  var t = this.__data__,
    i = bn(t, n);
  if (i < 0) return !1;
  var s = t.length - 1;
  return i == s ? t.pop() : Da.call(t, i, 1), !0;
}
function Ba(n) {
  var t = this.__data__,
    i = bn(t, n);
  return i < 0 ? void 0 : t[i][1];
}
function Ga(n) {
  return bn(this.__data__, n) > -1;
}
function Ua(n, t) {
  var i = this.__data__,
    s = bn(i, n);
  return s < 0 ? i.push([n, t]) : (i[s][1] = t), this;
}
Et.prototype.clear = Ra;
Et.prototype.delete = Fa;
Et.prototype.get = Ba;
Et.prototype.has = Ga;
Et.prototype.set = Ua;
function Qe(n) {
  var t = -1,
    i = n ? n.length : 0;
  for (this.clear(); ++t < i; ) {
    var s = n[t];
    this.set(s[0], s[1]);
  }
}
function Va() {
  this.__data__ = { hash: new Ze(), map: new (xa || Et)(), string: new Ze() };
}
function Wa(n) {
  return Pn(this, n).delete(n);
}
function za(n) {
  return Pn(this, n).get(n);
}
function Ka(n) {
  return Pn(this, n).has(n);
}
function ka(n, t) {
  return Pn(this, n).set(n, t), this;
}
Qe.prototype.clear = Va;
Qe.prototype.delete = Wa;
Qe.prototype.get = za;
Qe.prototype.has = Ka;
Qe.prototype.set = ka;
function bn(n, t) {
  for (var i = n.length; i--; ) if (ro(n[i][0], t)) return i;
  return -1;
}
function Xa(n, t) {
  t = Za(t, n) ? [t] : Ja(t);
  for (var i = 0, s = t.length; n != null && i < s; ) n = n[to(t[i++])];
  return i && i == s ? n : void 0;
}
function qa(n) {
  if (!gi(n) || $a(n)) return !1;
  var t = io(n) || Ia(n) ? Oa : Pa;
  return t.test(no(n));
}
function Ya(n) {
  if (typeof n == "string") return n;
  if (Pr(n)) return Br ? Br.call(n) : "";
  var t = n + "";
  return t == "0" && 1 / n == -ci ? "-0" : t;
}
function Ja(n) {
  return pi(n) ? n : eo(n);
}
function Pn(n, t) {
  var i = n.__data__;
  return Qa(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
}
function hi(n, t) {
  var i = Sa(n, t);
  return qa(i) ? i : void 0;
}
function Za(n, t) {
  if (pi(n)) return !1;
  var i = typeof n;
  return i == "number" || i == "symbol" || i == "boolean" || n == null || Pr(n)
    ? !0
    : va.test(n) || !_a.test(n) || (t != null && n in Object(t));
}
function Qa(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? n !== "__proto__"
    : n === null;
}
function $a(n) {
  return !!Nr && Nr in n;
}
var eo = br(function (n) {
  n = oo(n);
  var t = [];
  return (
    ma.test(n) && t.push(""),
    n.replace(ya, function (i, s, o, r) {
      t.push(o ? r.replace(ba, "$1") : s || i);
    }),
    t
  );
});
function to(n) {
  if (typeof n == "string" || Pr(n)) return n;
  var t = n + "";
  return t == "0" && 1 / n == -ci ? "-0" : t;
}
function no(n) {
  if (n != null) {
    try {
      return fi.call(n);
    } catch {}
    try {
      return n + "";
    } catch {}
  }
  return "";
}
function br(n, t) {
  if (typeof n != "function" || (t && typeof t != "function"))
    throw new TypeError(da);
  var i = function () {
    var s = arguments,
      o = t ? t.apply(this, s) : s[0],
      r = i.cache;
    if (r.has(o)) return r.get(o);
    var c = n.apply(this, s);
    return (i.cache = r.set(o, c)), c;
  };
  return (i.cache = new (br.Cache || Qe)()), i;
}
br.Cache = Qe;
function ro(n, t) {
  return n === t || (n !== n && t !== t);
}
var pi = Array.isArray;
function io(n) {
  var t = gi(n) ? di.call(n) : "";
  return t == ha || t == pa;
}
function gi(n) {
  var t = typeof n;
  return !!n && (t == "object" || t == "function");
}
function ao(n) {
  return !!n && typeof n == "object";
}
function Pr(n) {
  return typeof n == "symbol" || (ao(n) && di.call(n) == ga);
}
function oo(n) {
  return n == null ? "" : Ya(n);
}
function so(n, t, i) {
  var s = n == null ? void 0 : Xa(n, t);
  return s === void 0 ? i : s;
}
var lo = so;
const hn = mr(lo);
var gn = { exports: {} };
gn.exports;
(function (n, t) {
  var i = 200,
    s = "__lodash_hash_undefined__",
    o = 9007199254740991,
    r = "[object Arguments]",
    c = "[object Array]",
    f = "[object Boolean]",
    d = "[object Date]",
    b = "[object Error]",
    g = "[object Function]",
    w = "[object GeneratorFunction]",
    _ = "[object Map]",
    h = "[object Number]",
    P = "[object Object]",
    D = "[object Promise]",
    S = "[object RegExp]",
    T = "[object Set]",
    m = "[object String]",
    y = "[object Symbol]",
    E = "[object WeakMap]",
    W = "[object ArrayBuffer]",
    U = "[object DataView]",
    z = "[object Float32Array]",
    me = "[object Float64Array]",
    ye = "[object Int8Array]",
    de = "[object Int16Array]",
    J = "[object Int32Array]",
    ee = "[object Uint8Array]",
    pe = "[object Uint8ClampedArray]",
    ge = "[object Uint16Array]",
    q = "[object Uint32Array]",
    Y = /[\\^$.*+?()[\]{}|]/g,
    B = /\w*$/,
    te = /^\[object .+?Constructor\]$/,
    ne = /^(?:0|[1-9]\d*)$/,
    x = {};
  (x[r] =
    x[c] =
    x[W] =
    x[U] =
    x[f] =
    x[d] =
    x[z] =
    x[me] =
    x[ye] =
    x[de] =
    x[J] =
    x[_] =
    x[h] =
    x[P] =
    x[S] =
    x[T] =
    x[m] =
    x[y] =
    x[ee] =
    x[pe] =
    x[ge] =
    x[q] =
      !0),
    (x[b] = x[g] = x[E] = !1);
  var Ie = typeof ve == "object" && ve && ve.Object === Object && ve,
    Ee = typeof self == "object" && self && self.Object === Object && self,
    re = Ie || Ee || Function("return this")(),
    $e = t && !t.nodeType && t,
    H = $e && !0 && n && !n.nodeType && n,
    et = H && H.exports === $e;
  function At(e, a) {
    return e.set(a[0], a[1]), e;
  }
  function he(e, a) {
    return e.add(a), e;
  }
  function tt(e, a) {
    for (var l = -1, u = e ? e.length : 0; ++l < u && a(e[l], l, e) !== !1; );
    return e;
  }
  function nt(e, a) {
    for (var l = -1, u = a.length, C = e.length; ++l < u; ) e[C + l] = a[l];
    return e;
  }
  function Be(e, a, l, u) {
    var C = -1,
      v = e ? e.length : 0;
    for (u && v && (l = e[++C]); ++C < v; ) l = a(l, e[C], C, e);
    return l;
  }
  function Ge(e, a) {
    for (var l = -1, u = Array(e); ++l < e; ) u[l] = a(l);
    return u;
  }
  function rt(e, a) {
    return e == null ? void 0 : e[a];
  }
  function Ue(e) {
    var a = !1;
    if (e != null && typeof e.toString != "function")
      try {
        a = !!(e + "");
      } catch {}
    return a;
  }
  function p(e) {
    var a = -1,
      l = Array(e.size);
    return (
      e.forEach(function (u, C) {
        l[++a] = [C, u];
      }),
      l
    );
  }
  function K(e, a) {
    return function (l) {
      return e(a(l));
    };
  }
  function it(e) {
    var a = -1,
      l = Array(e.size);
    return (
      e.forEach(function (u) {
        l[++a] = u;
      }),
      l
    );
  }
  var Tn = Array.prototype,
    Cn = Function.prototype,
    at = Object.prototype,
    Ot = re["__core-js_shared__"],
    qt = (function () {
      var e = /[^.]+$/.exec((Ot && Ot.keys && Ot.keys.IE_PROTO) || "");
      return e ? "Symbol(src)_1." + e : "";
    })(),
    Yt = Cn.toString,
    Pe = at.hasOwnProperty,
    ot = at.toString,
    Sn = RegExp(
      "^" +
        Yt.call(Pe)
          .replace(Y, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?",
          ) +
        "$",
    ),
    Ve = et ? re.Buffer : void 0,
    st = re.Symbol,
    Dt = re.Uint8Array,
    _e = K(Object.getPrototypeOf, Object),
    Jt = Object.create,
    Zt = at.propertyIsEnumerable,
    In = Tn.splice,
    xt = Object.getOwnPropertySymbols,
    lt = Ve ? Ve.isBuffer : void 0,
    Qt = K(Object.keys, Object),
    ct = be(re, "DataView"),
    We = be(re, "Map"),
    we = be(re, "Promise"),
    ut = be(re, "Set"),
    Mt = be(re, "WeakMap"),
    ze = be(Object, "create"),
    jt = ce(ct),
    Ke = ce(We),
    Lt = ce(we),
    Ht = ce(ut),
    Nt = ce(Mt),
    Le = st ? st.prototype : void 0,
    $t = Le ? Le.valueOf : void 0;
  function Ae(e) {
    var a = -1,
      l = e ? e.length : 0;
    for (this.clear(); ++a < l; ) {
      var u = e[a];
      this.set(u[0], u[1]);
    }
  }
  function En() {
    this.__data__ = ze ? ze(null) : {};
  }
  function An(e) {
    return this.has(e) && delete this.__data__[e];
  }
  function On(e) {
    var a = this.__data__;
    if (ze) {
      var l = a[e];
      return l === s ? void 0 : l;
    }
    return Pe.call(a, e) ? a[e] : void 0;
  }
  function en(e) {
    var a = this.__data__;
    return ze ? a[e] !== void 0 : Pe.call(a, e);
  }
  function Rt(e, a) {
    var l = this.__data__;
    return (l[e] = ze && a === void 0 ? s : a), this;
  }
  (Ae.prototype.clear = En),
    (Ae.prototype.delete = An),
    (Ae.prototype.get = On),
    (Ae.prototype.has = en),
    (Ae.prototype.set = Rt);
  function Z(e) {
    var a = -1,
      l = e ? e.length : 0;
    for (this.clear(); ++a < l; ) {
      var u = e[a];
      this.set(u[0], u[1]);
    }
  }
  function Dn() {
    this.__data__ = [];
  }
  function xn(e) {
    var a = this.__data__,
      l = dt(a, e);
    if (l < 0) return !1;
    var u = a.length - 1;
    return l == u ? a.pop() : In.call(a, l, 1), !0;
  }
  function Mn(e) {
    var a = this.__data__,
      l = dt(a, e);
    return l < 0 ? void 0 : a[l][1];
  }
  function jn(e) {
    return dt(this.__data__, e) > -1;
  }
  function Ln(e, a) {
    var l = this.__data__,
      u = dt(l, e);
    return u < 0 ? l.push([e, a]) : (l[u][1] = a), this;
  }
  (Z.prototype.clear = Dn),
    (Z.prototype.delete = xn),
    (Z.prototype.get = Mn),
    (Z.prototype.has = jn),
    (Z.prototype.set = Ln);
  function ie(e) {
    var a = -1,
      l = e ? e.length : 0;
    for (this.clear(); ++a < l; ) {
      var u = e[a];
      this.set(u[0], u[1]);
    }
  }
  function Hn() {
    this.__data__ = { hash: new Ae(), map: new (We || Z)(), string: new Ae() };
  }
  function Nn(e) {
    return Xe(this, e).delete(e);
  }
  function Rn(e) {
    return Xe(this, e).get(e);
  }
  function Fn(e) {
    return Xe(this, e).has(e);
  }
  function Bn(e, a) {
    return Xe(this, e).set(e, a), this;
  }
  (ie.prototype.clear = Hn),
    (ie.prototype.delete = Nn),
    (ie.prototype.get = Rn),
    (ie.prototype.has = Fn),
    (ie.prototype.set = Bn);
  function ue(e) {
    this.__data__ = new Z(e);
  }
  function Gn() {
    this.__data__ = new Z();
  }
  function Un(e) {
    return this.__data__.delete(e);
  }
  function Vn(e) {
    return this.__data__.get(e);
  }
  function Wn(e) {
    return this.__data__.has(e);
  }
  function zn(e, a) {
    var l = this.__data__;
    if (l instanceof Z) {
      var u = l.__data__;
      if (!We || u.length < i - 1) return u.push([e, a]), this;
      l = this.__data__ = new ie(u);
    }
    return l.set(e, a), this;
  }
  (ue.prototype.clear = Gn),
    (ue.prototype.delete = Un),
    (ue.prototype.get = Vn),
    (ue.prototype.has = Wn),
    (ue.prototype.set = zn);
  function ft(e, a) {
    var l = Ut(e) || pt(e) ? Ge(e.length, String) : [],
      u = l.length,
      C = !!u;
    for (var v in e)
      (a || Pe.call(e, v)) && !(C && (v == "length" || ir(v, u))) && l.push(v);
    return l;
  }
  function tn(e, a, l) {
    var u = e[a];
    (!(Pe.call(e, a) && sn(u, l)) || (l === void 0 && !(a in e))) && (e[a] = l);
  }
  function dt(e, a) {
    for (var l = e.length; l--; ) if (sn(e[l][0], a)) return l;
    return -1;
  }
  function Te(e, a) {
    return e && Gt(a, Wt(a), e);
  }
  function Ft(e, a, l, u, C, v, A) {
    var M;
    if ((u && (M = v ? u(e, C, v, A) : u(e)), M !== void 0)) return M;
    if (!Se(e)) return e;
    var k = Ut(e);
    if (k) {
      if (((M = nr(e)), !a)) return $n(e, M);
    } else {
      var N = De(e),
        ae = N == g || N == w;
      if (ln(e)) return ht(e, a);
      if (N == P || N == r || (ae && !v)) {
        if (Ue(e)) return v ? e : {};
        if (((M = Ce(ae ? {} : e)), !a)) return er(e, Te(M, e));
      } else {
        if (!x[N]) return v ? e : {};
        M = rr(e, N, Ft, a);
      }
    }
    A || (A = new ue());
    var fe = A.get(e);
    if (fe) return fe;
    if ((A.set(e, M), !k)) var X = l ? tr(e) : Wt(e);
    return (
      tt(X || e, function (oe, Q) {
        X && ((Q = oe), (oe = e[Q])), tn(M, Q, Ft(oe, a, l, u, Q, e, A));
      }),
      M
    );
  }
  function Kn(e) {
    return Se(e) ? Jt(e) : {};
  }
  function kn(e, a, l) {
    var u = a(e);
    return Ut(e) ? u : nt(u, l(e));
  }
  function Xn(e) {
    return ot.call(e);
  }
  function qn(e) {
    if (!Se(e) || or(e)) return !1;
    var a = Vt(e) || Ue(e) ? Sn : te;
    return a.test(ce(e));
  }
  function Yn(e) {
    if (!an(e)) return Qt(e);
    var a = [];
    for (var l in Object(e)) Pe.call(e, l) && l != "constructor" && a.push(l);
    return a;
  }
  function ht(e, a) {
    if (a) return e.slice();
    var l = new e.constructor(e.length);
    return e.copy(l), l;
  }
  function Bt(e) {
    var a = new e.constructor(e.byteLength);
    return new Dt(a).set(new Dt(e)), a;
  }
  function ke(e, a) {
    var l = a ? Bt(e.buffer) : e.buffer;
    return new e.constructor(l, e.byteOffset, e.byteLength);
  }
  function nn(e, a, l) {
    var u = a ? l(p(e), !0) : p(e);
    return Be(u, At, new e.constructor());
  }
  function rn(e) {
    var a = new e.constructor(e.source, B.exec(e));
    return (a.lastIndex = e.lastIndex), a;
  }
  function Jn(e, a, l) {
    var u = a ? l(it(e), !0) : it(e);
    return Be(u, he, new e.constructor());
  }
  function Zn(e) {
    return $t ? Object($t.call(e)) : {};
  }
  function Qn(e, a) {
    var l = a ? Bt(e.buffer) : e.buffer;
    return new e.constructor(l, e.byteOffset, e.length);
  }
  function $n(e, a) {
    var l = -1,
      u = e.length;
    for (a || (a = Array(u)); ++l < u; ) a[l] = e[l];
    return a;
  }
  function Gt(e, a, l, u) {
    l || (l = {});
    for (var C = -1, v = a.length; ++C < v; ) {
      var A = a[C],
        M = u ? u(l[A], e[A], A, l, e) : void 0;
      tn(l, A, M === void 0 ? e[A] : M);
    }
    return l;
  }
  function er(e, a) {
    return Gt(e, Oe(e), a);
  }
  function tr(e) {
    return kn(e, Wt, Oe);
  }
  function Xe(e, a) {
    var l = e.__data__;
    return ar(a) ? l[typeof a == "string" ? "string" : "hash"] : l.map;
  }
  function be(e, a) {
    var l = rt(e, a);
    return qn(l) ? l : void 0;
  }
  var Oe = xt ? K(xt, Object) : lr,
    De = Xn;
  ((ct && De(new ct(new ArrayBuffer(1))) != U) ||
    (We && De(new We()) != _) ||
    (we && De(we.resolve()) != D) ||
    (ut && De(new ut()) != T) ||
    (Mt && De(new Mt()) != E)) &&
    (De = function (e) {
      var a = ot.call(e),
        l = a == P ? e.constructor : void 0,
        u = l ? ce(l) : void 0;
      if (u)
        switch (u) {
          case jt:
            return U;
          case Ke:
            return _;
          case Lt:
            return D;
          case Ht:
            return T;
          case Nt:
            return E;
        }
      return a;
    });
  function nr(e) {
    var a = e.length,
      l = e.constructor(a);
    return (
      a &&
        typeof e[0] == "string" &&
        Pe.call(e, "index") &&
        ((l.index = e.index), (l.input = e.input)),
      l
    );
  }
  function Ce(e) {
    return typeof e.constructor == "function" && !an(e) ? Kn(_e(e)) : {};
  }
  function rr(e, a, l, u) {
    var C = e.constructor;
    switch (a) {
      case W:
        return Bt(e);
      case f:
      case d:
        return new C(+e);
      case U:
        return ke(e, u);
      case z:
      case me:
      case ye:
      case de:
      case J:
      case ee:
      case pe:
      case ge:
      case q:
        return Qn(e, u);
      case _:
        return nn(e, u, l);
      case h:
      case m:
        return new C(e);
      case S:
        return rn(e);
      case T:
        return Jn(e, u, l);
      case y:
        return Zn(e);
    }
  }
  function ir(e, a) {
    return (
      (a = a ?? o),
      !!a &&
        (typeof e == "number" || ne.test(e)) &&
        e > -1 &&
        e % 1 == 0 &&
        e < a
    );
  }
  function ar(e) {
    var a = typeof e;
    return a == "string" || a == "number" || a == "symbol" || a == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  function or(e) {
    return !!qt && qt in e;
  }
  function an(e) {
    var a = e && e.constructor,
      l = (typeof a == "function" && a.prototype) || at;
    return e === l;
  }
  function ce(e) {
    if (e != null) {
      try {
        return Yt.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  function on(e) {
    return Ft(e, !0, !0);
  }
  function sn(e, a) {
    return e === a || (e !== e && a !== a);
  }
  function pt(e) {
    return (
      sr(e) &&
      Pe.call(e, "callee") &&
      (!Zt.call(e, "callee") || ot.call(e) == r)
    );
  }
  var Ut = Array.isArray;
  function gt(e) {
    return e != null && cn(e.length) && !Vt(e);
  }
  function sr(e) {
    return un(e) && gt(e);
  }
  var ln = lt || cr;
  function Vt(e) {
    var a = Se(e) ? ot.call(e) : "";
    return a == g || a == w;
  }
  function cn(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= o;
  }
  function Se(e) {
    var a = typeof e;
    return !!e && (a == "object" || a == "function");
  }
  function un(e) {
    return !!e && typeof e == "object";
  }
  function Wt(e) {
    return gt(e) ? ft(e) : Yn(e);
  }
  function lr() {
    return [];
  }
  function cr() {
    return !1;
  }
  n.exports = on;
})(gn, gn.exports);
var co = gn.exports;
const uo = mr(co);
var _n = { exports: {} };
_n.exports;
(function (n, t) {
  var i = 200,
    s = "__lodash_hash_undefined__",
    o = 1,
    r = 2,
    c = 9007199254740991,
    f = "[object Arguments]",
    d = "[object Array]",
    b = "[object AsyncFunction]",
    g = "[object Boolean]",
    w = "[object Date]",
    _ = "[object Error]",
    h = "[object Function]",
    P = "[object GeneratorFunction]",
    D = "[object Map]",
    S = "[object Number]",
    T = "[object Null]",
    m = "[object Object]",
    y = "[object Promise]",
    E = "[object Proxy]",
    W = "[object RegExp]",
    U = "[object Set]",
    z = "[object String]",
    me = "[object Symbol]",
    ye = "[object Undefined]",
    de = "[object WeakMap]",
    J = "[object ArrayBuffer]",
    ee = "[object DataView]",
    pe = "[object Float32Array]",
    ge = "[object Float64Array]",
    q = "[object Int8Array]",
    Y = "[object Int16Array]",
    B = "[object Int32Array]",
    te = "[object Uint8Array]",
    ne = "[object Uint8ClampedArray]",
    x = "[object Uint16Array]",
    Ie = "[object Uint32Array]",
    Ee = /[\\^$.*+?()[\]{}|]/g,
    re = /^\[object .+?Constructor\]$/,
    $e = /^(?:0|[1-9]\d*)$/,
    H = {};
  (H[pe] = H[ge] = H[q] = H[Y] = H[B] = H[te] = H[ne] = H[x] = H[Ie] = !0),
    (H[f] =
      H[d] =
      H[J] =
      H[g] =
      H[ee] =
      H[w] =
      H[_] =
      H[h] =
      H[D] =
      H[S] =
      H[m] =
      H[W] =
      H[U] =
      H[z] =
      H[de] =
        !1);
  var et = typeof ve == "object" && ve && ve.Object === Object && ve,
    At = typeof self == "object" && self && self.Object === Object && self,
    he = et || At || Function("return this")(),
    tt = t && !t.nodeType && t,
    nt = tt && !0 && n && !n.nodeType && n,
    Be = nt && nt.exports === tt,
    Ge = Be && et.process,
    rt = (function () {
      try {
        return Ge && Ge.binding && Ge.binding("util");
      } catch {}
    })(),
    Ue = rt && rt.isTypedArray;
  function p(e, a) {
    for (var l = -1, u = e == null ? 0 : e.length, C = 0, v = []; ++l < u; ) {
      var A = e[l];
      a(A, l, e) && (v[C++] = A);
    }
    return v;
  }
  function K(e, a) {
    for (var l = -1, u = a.length, C = e.length; ++l < u; ) e[C + l] = a[l];
    return e;
  }
  function it(e, a) {
    for (var l = -1, u = e == null ? 0 : e.length; ++l < u; )
      if (a(e[l], l, e)) return !0;
    return !1;
  }
  function Tn(e, a) {
    for (var l = -1, u = Array(e); ++l < e; ) u[l] = a(l);
    return u;
  }
  function Cn(e) {
    return function (a) {
      return e(a);
    };
  }
  function at(e, a) {
    return e.has(a);
  }
  function Ot(e, a) {
    return e == null ? void 0 : e[a];
  }
  function qt(e) {
    var a = -1,
      l = Array(e.size);
    return (
      e.forEach(function (u, C) {
        l[++a] = [C, u];
      }),
      l
    );
  }
  function Yt(e, a) {
    return function (l) {
      return e(a(l));
    };
  }
  function Pe(e) {
    var a = -1,
      l = Array(e.size);
    return (
      e.forEach(function (u) {
        l[++a] = u;
      }),
      l
    );
  }
  var ot = Array.prototype,
    Sn = Function.prototype,
    Ve = Object.prototype,
    st = he["__core-js_shared__"],
    Dt = Sn.toString,
    _e = Ve.hasOwnProperty,
    Jt = (function () {
      var e = /[^.]+$/.exec((st && st.keys && st.keys.IE_PROTO) || "");
      return e ? "Symbol(src)_1." + e : "";
    })(),
    Zt = Ve.toString,
    In = RegExp(
      "^" +
        Dt.call(_e)
          .replace(Ee, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?",
          ) +
        "$",
    ),
    xt = Be ? he.Buffer : void 0,
    lt = he.Symbol,
    Qt = he.Uint8Array,
    ct = Ve.propertyIsEnumerable,
    We = ot.splice,
    we = lt ? lt.toStringTag : void 0,
    ut = Object.getOwnPropertySymbols,
    Mt = xt ? xt.isBuffer : void 0,
    ze = Yt(Object.keys, Object),
    jt = Oe(he, "DataView"),
    Ke = Oe(he, "Map"),
    Lt = Oe(he, "Promise"),
    Ht = Oe(he, "Set"),
    Nt = Oe(he, "WeakMap"),
    Le = Oe(Object, "create"),
    $t = ce(jt),
    Ae = ce(Ke),
    En = ce(Lt),
    An = ce(Ht),
    On = ce(Nt),
    en = lt ? lt.prototype : void 0,
    Rt = en ? en.valueOf : void 0;
  function Z(e) {
    var a = -1,
      l = e == null ? 0 : e.length;
    for (this.clear(); ++a < l; ) {
      var u = e[a];
      this.set(u[0], u[1]);
    }
  }
  function Dn() {
    (this.__data__ = Le ? Le(null) : {}), (this.size = 0);
  }
  function xn(e) {
    var a = this.has(e) && delete this.__data__[e];
    return (this.size -= a ? 1 : 0), a;
  }
  function Mn(e) {
    var a = this.__data__;
    if (Le) {
      var l = a[e];
      return l === s ? void 0 : l;
    }
    return _e.call(a, e) ? a[e] : void 0;
  }
  function jn(e) {
    var a = this.__data__;
    return Le ? a[e] !== void 0 : _e.call(a, e);
  }
  function Ln(e, a) {
    var l = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (l[e] = Le && a === void 0 ? s : a),
      this
    );
  }
  (Z.prototype.clear = Dn),
    (Z.prototype.delete = xn),
    (Z.prototype.get = Mn),
    (Z.prototype.has = jn),
    (Z.prototype.set = Ln);
  function ie(e) {
    var a = -1,
      l = e == null ? 0 : e.length;
    for (this.clear(); ++a < l; ) {
      var u = e[a];
      this.set(u[0], u[1]);
    }
  }
  function Hn() {
    (this.__data__ = []), (this.size = 0);
  }
  function Nn(e) {
    var a = this.__data__,
      l = ht(a, e);
    if (l < 0) return !1;
    var u = a.length - 1;
    return l == u ? a.pop() : We.call(a, l, 1), --this.size, !0;
  }
  function Rn(e) {
    var a = this.__data__,
      l = ht(a, e);
    return l < 0 ? void 0 : a[l][1];
  }
  function Fn(e) {
    return ht(this.__data__, e) > -1;
  }
  function Bn(e, a) {
    var l = this.__data__,
      u = ht(l, e);
    return u < 0 ? (++this.size, l.push([e, a])) : (l[u][1] = a), this;
  }
  (ie.prototype.clear = Hn),
    (ie.prototype.delete = Nn),
    (ie.prototype.get = Rn),
    (ie.prototype.has = Fn),
    (ie.prototype.set = Bn);
  function ue(e) {
    var a = -1,
      l = e == null ? 0 : e.length;
    for (this.clear(); ++a < l; ) {
      var u = e[a];
      this.set(u[0], u[1]);
    }
  }
  function Gn() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Z(),
        map: new (Ke || ie)(),
        string: new Z(),
      });
  }
  function Un(e) {
    var a = be(this, e).delete(e);
    return (this.size -= a ? 1 : 0), a;
  }
  function Vn(e) {
    return be(this, e).get(e);
  }
  function Wn(e) {
    return be(this, e).has(e);
  }
  function zn(e, a) {
    var l = be(this, e),
      u = l.size;
    return l.set(e, a), (this.size += l.size == u ? 0 : 1), this;
  }
  (ue.prototype.clear = Gn),
    (ue.prototype.delete = Un),
    (ue.prototype.get = Vn),
    (ue.prototype.has = Wn),
    (ue.prototype.set = zn);
  function ft(e) {
    var a = -1,
      l = e == null ? 0 : e.length;
    for (this.__data__ = new ue(); ++a < l; ) this.add(e[a]);
  }
  function tn(e) {
    return this.__data__.set(e, s), this;
  }
  function dt(e) {
    return this.__data__.has(e);
  }
  (ft.prototype.add = ft.prototype.push = tn), (ft.prototype.has = dt);
  function Te(e) {
    var a = (this.__data__ = new ie(e));
    this.size = a.size;
  }
  function Ft() {
    (this.__data__ = new ie()), (this.size = 0);
  }
  function Kn(e) {
    var a = this.__data__,
      l = a.delete(e);
    return (this.size = a.size), l;
  }
  function kn(e) {
    return this.__data__.get(e);
  }
  function Xn(e) {
    return this.__data__.has(e);
  }
  function qn(e, a) {
    var l = this.__data__;
    if (l instanceof ie) {
      var u = l.__data__;
      if (!Ke || u.length < i - 1)
        return u.push([e, a]), (this.size = ++l.size), this;
      l = this.__data__ = new ue(u);
    }
    return l.set(e, a), (this.size = l.size), this;
  }
  (Te.prototype.clear = Ft),
    (Te.prototype.delete = Kn),
    (Te.prototype.get = kn),
    (Te.prototype.has = Xn),
    (Te.prototype.set = qn);
  function Yn(e, a) {
    var l = pt(e),
      u = !l && sn(e),
      C = !l && !u && gt(e),
      v = !l && !u && !C && un(e),
      A = l || u || C || v,
      M = A ? Tn(e.length, String) : [],
      k = M.length;
    for (var N in e)
      (a || _e.call(e, N)) &&
        !(
          A &&
          (N == "length" ||
            (C && (N == "offset" || N == "parent")) ||
            (v && (N == "buffer" || N == "byteLength" || N == "byteOffset")) ||
            rr(N, k))
        ) &&
        M.push(N);
    return M;
  }
  function ht(e, a) {
    for (var l = e.length; l--; ) if (on(e[l][0], a)) return l;
    return -1;
  }
  function Bt(e, a, l) {
    var u = a(e);
    return pt(e) ? u : K(u, l(e));
  }
  function ke(e) {
    return e == null
      ? e === void 0
        ? ye
        : T
      : we && we in Object(e)
        ? De(e)
        : an(e);
  }
  function nn(e) {
    return Se(e) && ke(e) == f;
  }
  function rn(e, a, l, u, C) {
    return e === a
      ? !0
      : e == null || a == null || (!Se(e) && !Se(a))
        ? e !== e && a !== a
        : Jn(e, a, l, u, rn, C);
  }
  function Jn(e, a, l, u, C, v) {
    var A = pt(e),
      M = pt(a),
      k = A ? d : Ce(e),
      N = M ? d : Ce(a);
    (k = k == f ? m : k), (N = N == f ? m : N);
    var ae = k == m,
      fe = N == m,
      X = k == N;
    if (X && gt(e)) {
      if (!gt(a)) return !1;
      (A = !0), (ae = !1);
    }
    if (X && !ae)
      return (
        v || (v = new Te()),
        A || un(e) ? Gt(e, a, l, u, C, v) : er(e, a, k, l, u, C, v)
      );
    if (!(l & o)) {
      var oe = ae && _e.call(e, "__wrapped__"),
        Q = fe && _e.call(a, "__wrapped__");
      if (oe || Q) {
        var He = oe ? e.value() : e,
          xe = Q ? a.value() : a;
        return v || (v = new Te()), C(He, xe, l, u, v);
      }
    }
    return X ? (v || (v = new Te()), tr(e, a, l, u, C, v)) : !1;
  }
  function Zn(e) {
    if (!cn(e) || ar(e)) return !1;
    var a = ln(e) ? In : re;
    return a.test(ce(e));
  }
  function Qn(e) {
    return Se(e) && Vt(e.length) && !!H[ke(e)];
  }
  function $n(e) {
    if (!or(e)) return ze(e);
    var a = [];
    for (var l in Object(e)) _e.call(e, l) && l != "constructor" && a.push(l);
    return a;
  }
  function Gt(e, a, l, u, C, v) {
    var A = l & o,
      M = e.length,
      k = a.length;
    if (M != k && !(A && k > M)) return !1;
    var N = v.get(e);
    if (N && v.get(a)) return N == a;
    var ae = -1,
      fe = !0,
      X = l & r ? new ft() : void 0;
    for (v.set(e, a), v.set(a, e); ++ae < M; ) {
      var oe = e[ae],
        Q = a[ae];
      if (u) var He = A ? u(Q, oe, ae, a, e, v) : u(oe, Q, ae, e, a, v);
      if (He !== void 0) {
        if (He) continue;
        fe = !1;
        break;
      }
      if (X) {
        if (
          !it(a, function (xe, qe) {
            if (!at(X, qe) && (oe === xe || C(oe, xe, l, u, v)))
              return X.push(qe);
          })
        ) {
          fe = !1;
          break;
        }
      } else if (!(oe === Q || C(oe, Q, l, u, v))) {
        fe = !1;
        break;
      }
    }
    return v.delete(e), v.delete(a), fe;
  }
  function er(e, a, l, u, C, v, A) {
    switch (l) {
      case ee:
        if (e.byteLength != a.byteLength || e.byteOffset != a.byteOffset)
          return !1;
        (e = e.buffer), (a = a.buffer);
      case J:
        return !(e.byteLength != a.byteLength || !v(new Qt(e), new Qt(a)));
      case g:
      case w:
      case S:
        return on(+e, +a);
      case _:
        return e.name == a.name && e.message == a.message;
      case W:
      case z:
        return e == a + "";
      case D:
        var M = qt;
      case U:
        var k = u & o;
        if ((M || (M = Pe), e.size != a.size && !k)) return !1;
        var N = A.get(e);
        if (N) return N == a;
        (u |= r), A.set(e, a);
        var ae = Gt(M(e), M(a), u, C, v, A);
        return A.delete(e), ae;
      case me:
        if (Rt) return Rt.call(e) == Rt.call(a);
    }
    return !1;
  }
  function tr(e, a, l, u, C, v) {
    var A = l & o,
      M = Xe(e),
      k = M.length,
      N = Xe(a),
      ae = N.length;
    if (k != ae && !A) return !1;
    for (var fe = k; fe--; ) {
      var X = M[fe];
      if (!(A ? X in a : _e.call(a, X))) return !1;
    }
    var oe = v.get(e);
    if (oe && v.get(a)) return oe == a;
    var Q = !0;
    v.set(e, a), v.set(a, e);
    for (var He = A; ++fe < k; ) {
      X = M[fe];
      var xe = e[X],
        qe = a[X];
      if (u) var Tr = A ? u(qe, xe, X, a, e, v) : u(xe, qe, X, e, a, v);
      if (!(Tr === void 0 ? xe === qe || C(xe, qe, l, u, v) : Tr)) {
        Q = !1;
        break;
      }
      He || (He = X == "constructor");
    }
    if (Q && !He) {
      var fn = e.constructor,
        dn = a.constructor;
      fn != dn &&
        "constructor" in e &&
        "constructor" in a &&
        !(
          typeof fn == "function" &&
          fn instanceof fn &&
          typeof dn == "function" &&
          dn instanceof dn
        ) &&
        (Q = !1);
    }
    return v.delete(e), v.delete(a), Q;
  }
  function Xe(e) {
    return Bt(e, Wt, nr);
  }
  function be(e, a) {
    var l = e.__data__;
    return ir(a) ? l[typeof a == "string" ? "string" : "hash"] : l.map;
  }
  function Oe(e, a) {
    var l = Ot(e, a);
    return Zn(l) ? l : void 0;
  }
  function De(e) {
    var a = _e.call(e, we),
      l = e[we];
    try {
      e[we] = void 0;
      var u = !0;
    } catch {}
    var C = Zt.call(e);
    return u && (a ? (e[we] = l) : delete e[we]), C;
  }
  var nr = ut
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              p(ut(e), function (a) {
                return ct.call(e, a);
              }));
        }
      : lr,
    Ce = ke;
  ((jt && Ce(new jt(new ArrayBuffer(1))) != ee) ||
    (Ke && Ce(new Ke()) != D) ||
    (Lt && Ce(Lt.resolve()) != y) ||
    (Ht && Ce(new Ht()) != U) ||
    (Nt && Ce(new Nt()) != de)) &&
    (Ce = function (e) {
      var a = ke(e),
        l = a == m ? e.constructor : void 0,
        u = l ? ce(l) : "";
      if (u)
        switch (u) {
          case $t:
            return ee;
          case Ae:
            return D;
          case En:
            return y;
          case An:
            return U;
          case On:
            return de;
        }
      return a;
    });
  function rr(e, a) {
    return (
      (a = a ?? c),
      !!a &&
        (typeof e == "number" || $e.test(e)) &&
        e > -1 &&
        e % 1 == 0 &&
        e < a
    );
  }
  function ir(e) {
    var a = typeof e;
    return a == "string" || a == "number" || a == "symbol" || a == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  function ar(e) {
    return !!Jt && Jt in e;
  }
  function or(e) {
    var a = e && e.constructor,
      l = (typeof a == "function" && a.prototype) || Ve;
    return e === l;
  }
  function an(e) {
    return Zt.call(e);
  }
  function ce(e) {
    if (e != null) {
      try {
        return Dt.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  function on(e, a) {
    return e === a || (e !== e && a !== a);
  }
  var sn = nn(
      (function () {
        return arguments;
      })(),
    )
      ? nn
      : function (e) {
          return Se(e) && _e.call(e, "callee") && !ct.call(e, "callee");
        },
    pt = Array.isArray;
  function Ut(e) {
    return e != null && Vt(e.length) && !ln(e);
  }
  var gt = Mt || cr;
  function sr(e, a) {
    return rn(e, a);
  }
  function ln(e) {
    if (!cn(e)) return !1;
    var a = ke(e);
    return a == h || a == P || a == b || a == E;
  }
  function Vt(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= c;
  }
  function cn(e) {
    var a = typeof e;
    return e != null && (a == "object" || a == "function");
  }
  function Se(e) {
    return e != null && typeof e == "object";
  }
  var un = Ue ? Cn(Ue) : Qn;
  function Wt(e) {
    return Ut(e) ? Yn(e) : $n(e);
  }
  function lr() {
    return [];
  }
  function cr() {
    return !1;
  }
  n.exports = sr;
})(_n, _n.exports);
var fo = _n.exports;
const ho = mr(fo),
  po = (n, t) => ho(n, t),
  go = (n) => Object.keys(n || {}),
  _o = (n, t) => {
    const i = {};
    return (
      n.forEach((s) => {
        i[s] = t[s];
      }),
      i
    );
  },
  vo = () => {
    const n = {},
      t = (i, s) => {
        const { watcherName: o, fn: r } = i,
          { prop: c, value: f } = s;
        n[o] || (n[o] = { deps: {}, fn: r }), (n[o].deps[c] = f);
      };
    return {
      subscribers: n,
      subscribe(i, s) {
        i && t(i, s);
      },
      notify(i, s) {
        Object.entries(n).forEach(([o, { deps: r, fn: c }]) => {
          const f = go(r);
          if (f.includes(s)) {
            const d = _o(f, i);
            po(r, d) || ((n[o].deps = d), c());
          }
        });
      },
    };
  },
  mo = () => {
    let n = null;
    return {
      targetWatcher(t, i) {
        (n = { watcherName: t, fn: i }), n.fn(), (n = null);
      },
      getTarget() {
        return n;
      },
    };
  };
function yo(n, t) {
  const i = hn(n, "data", {}),
    s = hn(n, "watch", {}),
    o = hn(n, "methods", {}),
    r = hn(t, "onChange", () => {}),
    { subscribe: c, notify: f, subscribers: d } = vo(),
    { targetWatcher: b, getTarget: g } = mo();
  let w;
  const _ = {},
    h = () => ({ data: w, methods: _ });
  let P = !1;
  const D =
    (T) =>
    (...m) => {
      P = !0;
      const y = T(...m);
      return (P = !1), y;
    };
  Object.entries(o).forEach(([T, m]) => {
    (_[T] = D((...y) => m(h(), ...y))),
      Object.defineProperty(_[T], "name", { value: T });
  }),
    (w = new Proxy(uo(i), {
      get(T, m) {
        return (
          g() && !P && c(g(), { prop: m, value: T[m] }),
          Reflect.get(...arguments)
        );
      },
      set(T, m, y) {
        return (
          T[m] === y ||
            (Reflect.set(...arguments), g() || (r && r(m, y), f(w, m))),
          !0
        );
      },
    })),
    Object.entries(s).forEach(([T, m]) => {
      b(T, () => {
        m(h());
      });
    });
  const S = [w, _];
  return (
    (S._internal = {
      _getSubscribers() {
        return d;
      },
    }),
    S
  );
}
function wo({
  pageIndex: n,
  particlesToShow: t,
  particlesToScroll: i,
  particlesCount: s,
}) {
  const o = n === 0 ? 0 : t - i,
    r = n * t - n * o,
    c = r + Math.max(t, i) - 1,
    f = [];
  for (let d = r; d <= Math.min(s - 1, c); d++) f.push(d);
  return f;
}
function bo({
  infinite: n,
  pageIndex: t,
  pagesCount: i,
  particlesCount: s,
  particlesToShow: o,
  particlesToScroll: r,
}) {
  const c = _t(0, t, i - 1);
  let f = c - 1,
    d = c + 1;
  (f = n ? (f < 0 ? i - 1 : f) : Math.max(0, f)),
    (d = n ? (d > i - 1 ? 0 : d) : Math.min(i - 1, d));
  const b = [...new Set([f, c, d, 0, i - 1])].sort((w, _) => w - _),
    g = b.flatMap((w) =>
      wo({
        pageIndex: w,
        particlesToShow: o,
        particlesToScroll: r,
        particlesCount: s,
      }),
    );
  return {
    pageIndexes: b,
    particleIndexes: [...new Set(g)].sort((w, _) => w - _),
  };
}
const Po = (n, t) => (n(), setInterval(n, t)),
  To = 35,
  Gr = 1;
class Co {
  constructor({ onProgressValueChange: t }) {
    (this._onProgressValueChange = t),
      this._autoplayDuration,
      this._onProgressValueChange,
      this._interval,
      (this._paused = !1);
  }
  setAutoplayDuration(t) {
    this._autoplayDuration = t;
  }
  start(t) {
    return new Promise((i) => {
      this.reset();
      const s = Math.min(To, Math.max(this._autoplayDuration, 1));
      let o = -s;
      this._interval = Po(async () => {
        if (this._paused) return;
        o += s;
        const r = o / this._autoplayDuration;
        this._onProgressValueChange(r),
          r > Gr && (this.reset(), await t(), i());
      }, s);
    });
  }
  pause() {
    this._paused = !0;
  }
  resume() {
    this._paused = !1;
  }
  reset() {
    clearInterval(this._interval), this._onProgressValueChange(Gr);
  }
}
function So(n) {
  const t = new Co({
      onProgressValueChange: (r) => {
        n("progressValue", 1 - r);
      },
    }),
    i = yo(
      {
        data: {
          particlesCountWithoutClones: 0,
          particlesToShow: 1,
          particlesToShowInit: 1,
          particlesToScroll: 1,
          particlesToScrollInit: 1,
          particlesCount: 1,
          currentParticleIndex: 1,
          infinite: !1,
          autoplayDuration: 1e3,
          clonesCountHead: 0,
          clonesCountTail: 0,
          clonesCountTotal: 0,
          partialPageSize: 1,
          currentPageIndex: 1,
          pagesCount: 1,
          pauseOnFocus: !1,
          focused: !1,
          autoplay: !1,
          autoplayDirection: "next",
          disabled: !1,
          durationMsInit: 1e3,
          durationMs: 1e3,
          offset: 0,
          particleWidth: 0,
          loaded: [],
        },
        watch: {
          setLoaded({ data: r }) {
            r.loaded = bo({
              infinite: r.infinite,
              pageIndex: r.currentPageIndex,
              pagesCount: r.pagesCount,
              particlesCount: r.particlesCountWithoutClones,
              particlesToShow: r.particlesToShow,
              particlesToScroll: r.particlesToScroll,
            }).particleIndexes;
          },
          setCurrentPageIndex({ data: r }) {
            r.currentPageIndex = na({
              currentParticleIndex: r.currentParticleIndex,
              particlesCount: r.particlesCount,
              clonesCountHead: r.clonesCountHead,
              clonesCountTotal: r.clonesCountTotal,
              infinite: r.infinite,
              particlesToScroll: r.particlesToScroll,
            });
          },
          setPartialPageSize({ data: r }) {
            r.partialPageSize = si({
              particlesToScroll: r.particlesToScroll,
              particlesToShow: r.particlesToShow,
              particlesCountWithoutClones: r.particlesCountWithoutClones,
            });
          },
          setClonesCount({ data: r }) {
            const { head: c, tail: f } = fa({
              infinite: r.infinite,
              particlesToShow: r.particlesToShow,
              partialPageSize: r.partialPageSize,
            });
            (r.clonesCountHead = c),
              (r.clonesCountTail = f),
              (r.clonesCountTotal = c + f);
          },
          setProgressManagerAutoplayDuration({ data: r }) {
            t.setAutoplayDuration(r.autoplayDuration);
          },
          toggleProgressManager({ data: { pauseOnFocus: r, focused: c } }) {
            r && (c ? t.pause() : t.resume());
          },
          initDuration({ data: r }) {
            r.durationMs = r.durationMsInit;
          },
          applyAutoplay({ data: r, methods: { _applyAutoplayIfNeeded: c } }) {
            r.autoplay && c(r.autoplay);
          },
          setPagesCount({ data: r }) {
            r.pagesCount = ia({
              infinite: r.infinite,
              particlesCountWithoutClones: r.particlesCountWithoutClones,
              particlesToScroll: r.particlesToScroll,
              particlesToShow: r.particlesToShow,
            });
          },
          setParticlesToShow({ data: r }) {
            r.particlesToShow = _t(
              1,
              r.particlesToShowInit,
              r.particlesCountWithoutClones,
            );
          },
          setParticlesToScroll({ data: r }) {
            r.particlesToScroll = _t(
              1,
              r.particlesToScrollInit,
              r.particlesCountWithoutClones,
            );
          },
        },
        methods: {
          _prev({ data: r }) {
            r.currentParticleIndex = dr({
              infinite: r.infinite,
              pageIndex: r.currentPageIndex - 1,
              clonesCountHead: r.clonesCountHead,
              clonesCountTail: r.clonesCountTail,
              particlesToScroll: r.particlesToScroll,
              particlesCount: r.particlesCount,
              particlesToShow: r.particlesToShow,
            });
          },
          _next({ data: r }) {
            r.currentParticleIndex = dr({
              infinite: r.infinite,
              pageIndex: r.currentPageIndex + 1,
              clonesCountHead: r.clonesCountHead,
              clonesCountTail: r.clonesCountTail,
              particlesToScroll: r.particlesToScroll,
              particlesCount: r.particlesCount,
              particlesToShow: r.particlesToShow,
            });
          },
          _moveToParticle({ data: r }, c) {
            r.currentParticleIndex = _t(0, c, r.particlesCount - 1);
          },
          toggleFocused({ data: r }) {
            r.focused = !r.focused;
          },
          async _applyAutoplayIfNeeded({ data: r, methods: c }) {
            if (
              !r.infinite &&
              ((r.autoplayDirection === Fe &&
                r.currentParticleIndex === r.particlesCount - 1) ||
                (r.autoplayDirection === yt && r.currentParticleIndex === 0))
            ) {
              t.reset();
              return;
            }
            if (r.autoplay) {
              const f = () =>
                _r({
                  [Fe]: async () => c.showNextPage(),
                  [yt]: async () => c.showPrevPage(),
                })(r.autoplayDirection);
              await t.start(f);
            }
          },
          async _jumpIfNeeded({ data: r, methods: c }) {
            let f = !1;
            return (
              r.infinite &&
                (r.currentParticleIndex === 0
                  ? (await c.showParticle(
                      r.particlesCount - r.clonesCountTotal,
                      { animated: !1 },
                    ),
                    (f = !0))
                  : r.currentParticleIndex ===
                      r.particlesCount - r.clonesCountTail &&
                    (await c.showParticle(r.clonesCountHead, { animated: !1 }),
                    (f = !0))),
              f
            );
          },
          async changePage({ data: r, methods: c }, f, d) {
            if ((t.reset(), r.disabled)) return;
            (r.disabled = !0),
              f(),
              await c.offsetPage({ animated: kt(d, "animated", !0) }),
              (r.disabled = !1),
              !(await c._jumpIfNeeded()) && c._applyAutoplayIfNeeded();
          },
          async showNextPage({ data: r, methods: c }, f) {
            r.disabled || (await c.changePage(c._next, f));
          },
          async showPrevPage({ data: r, methods: c }, f) {
            r.disabled || (await c.changePage(c._prev, f));
          },
          async showParticle({ methods: r }, c, f) {
            await r.changePage(() => r._moveToParticle(c), f);
          },
          _getParticleIndexByPageIndex({ data: r }, c) {
            return dr({
              infinite: r.infinite,
              pageIndex: c,
              clonesCountHead: r.clonesCountHead,
              clonesCountTail: r.clonesCountTail,
              particlesToScroll: r.particlesToScroll,
              particlesCount: r.particlesCount,
              particlesToShow: r.particlesToShow,
            });
          },
          async showPage({ methods: r }, c, f) {
            const d = r._getParticleIndexByPageIndex(c);
            await r.showParticle(d, f);
          },
          offsetPage({ data: r }, c) {
            const f = kt(c, "animated", !0);
            return new Promise((d) => {
              (r.durationMs = f ? r.durationMsInit : 0),
                (r.offset = -r.currentParticleIndex * r.particleWidth),
                setTimeout(() => {
                  d();
                }, r.durationMs);
            });
          },
        },
      },
      { onChange: n },
    ),
    [s, o] = i;
  return [{ data: s, progressManager: t }, o, i._internal];
}
const Io = (n) => ({ currentPageIndex: n[0] & 32, pagesCount: n[0] & 1024 }),
  Ur = (n) => ({ currentPageIndex: n[5], pagesCount: n[10], showPage: n[15] }),
  Eo = (n) => ({}),
  Vr = (n) => ({ showNextPage: n[14].showNextPage }),
  Ao = (n) => ({ loaded: n[0] & 64, currentPageIndex: n[0] & 32 }),
  Wr = (n) => ({ loaded: n[6], currentPageIndex: n[5] }),
  Oo = (n) => ({}),
  zr = (n) => ({ showPrevPage: n[14].showPrevPage });
function Kr(n) {
  let t;
  const i = n[37].prev,
    s = vn(i, n, n[36], zr),
    o = s || Do(n);
  return {
    c() {
      o && o.c();
    },
    l(r) {
      o && o.l(r);
    },
    m(r, c) {
      o && o.m(r, c), (t = !0);
    },
    p(r, c) {
      s
        ? s.p &&
          (!t || c[1] & 32) &&
          mn(s, i, r, r[36], t ? wn(i, r[36], c, Oo) : yn(r[36]), zr)
        : o && o.p && (!t || c[0] & 36) && o.p(r, t ? c : [-1, -1]);
    },
    i(r) {
      t || (L(o, r), (t = !0));
    },
    o(r) {
      G(o, r), (t = !1);
    },
    d(r) {
      o && o.d(r);
    },
  };
}
function Do(n) {
  let t, i, s;
  return (
    (i = new ai({
      props: { direction: "prev", disabled: !n[2] && n[5] === 0 },
    })),
    i.$on("click", n[23]),
    {
      c() {
        (t = R("div")), Tt(i.$$.fragment), this.h();
      },
      l(o) {
        t = F(o, "DIV", { class: !0 });
        var r = V(t);
        Ct(i.$$.fragment, r), r.forEach(I), this.h();
      },
      h() {
        j(t, "class", "sc-carousel__arrow-container svelte-uwo0yk");
      },
      m(o, r) {
        $(o, t, r), St(i, t, null), (s = !0);
      },
      p(o, r) {
        const c = {};
        r[0] & 36 && (c.disabled = !o[2] && o[5] === 0), i.$set(c);
      },
      i(o) {
        s || (L(i.$$.fragment, o), (s = !0));
      },
      o(o) {
        G(i.$$.fragment, o), (s = !1);
      },
      d(o) {
        o && I(t), It(i);
      },
    }
  );
}
function kr(n) {
  let t, i, s;
  return (
    (i = new Hi({ props: { value: n[7] } })),
    {
      c() {
        (t = R("div")), Tt(i.$$.fragment), this.h();
      },
      l(o) {
        t = F(o, "DIV", { class: !0 });
        var r = V(t);
        Ct(i.$$.fragment, r), r.forEach(I), this.h();
      },
      h() {
        j(t, "class", "sc-carousel-progress__container svelte-uwo0yk");
      },
      m(o, r) {
        $(o, t, r), St(i, t, null), (s = !0);
      },
      p(o, r) {
        const c = {};
        r[0] & 128 && (c.value = o[7]), i.$set(c);
      },
      i(o) {
        s || (L(i.$$.fragment, o), (s = !0));
      },
      o(o) {
        G(i.$$.fragment, o), (s = !1);
      },
      d(o) {
        o && I(t), It(i);
      },
    }
  );
}
function Xr(n) {
  let t;
  const i = n[37].next,
    s = vn(i, n, n[36], Vr),
    o = s || xo(n);
  return {
    c() {
      o && o.c();
    },
    l(r) {
      o && o.l(r);
    },
    m(r, c) {
      o && o.m(r, c), (t = !0);
    },
    p(r, c) {
      s
        ? s.p &&
          (!t || c[1] & 32) &&
          mn(s, i, r, r[36], t ? wn(i, r[36], c, Eo) : yn(r[36]), Vr)
        : o && o.p && (!t || c[0] & 1060) && o.p(r, t ? c : [-1, -1]);
    },
    i(r) {
      t || (L(o, r), (t = !0));
    },
    o(r) {
      G(o, r), (t = !1);
    },
    d(r) {
      o && o.d(r);
    },
  };
}
function xo(n) {
  let t, i, s;
  return (
    (i = new ai({
      props: { direction: "next", disabled: !n[2] && n[5] === n[10] - 1 },
    })),
    i.$on("click", n[14].showNextPage),
    {
      c() {
        (t = R("div")), Tt(i.$$.fragment), this.h();
      },
      l(o) {
        t = F(o, "DIV", { class: !0 });
        var r = V(t);
        Ct(i.$$.fragment, r), r.forEach(I), this.h();
      },
      h() {
        j(t, "class", "sc-carousel__arrow-container svelte-uwo0yk");
      },
      m(o, r) {
        $(o, t, r), St(i, t, null), (s = !0);
      },
      p(o, r) {
        const c = {};
        r[0] & 1060 && (c.disabled = !o[2] && o[5] === o[10] - 1), i.$set(c);
      },
      i(o) {
        s || (L(i.$$.fragment, o), (s = !0));
      },
      o(o) {
        G(i.$$.fragment, o), (s = !1);
      },
      d(o) {
        o && I(t), It(i);
      },
    }
  );
}
function qr(n) {
  let t;
  const i = n[37].dots,
    s = vn(i, n, n[36], Ur),
    o = s || Mo(n);
  return {
    c() {
      o && o.c();
    },
    l(r) {
      o && o.l(r);
    },
    m(r, c) {
      o && o.m(r, c), (t = !0);
    },
    p(r, c) {
      s
        ? s.p &&
          (!t || (c[0] & 1056) | (c[1] & 32)) &&
          mn(s, i, r, r[36], t ? wn(i, r[36], c, Io) : yn(r[36]), Ur)
        : o && o.p && (!t || c[0] & 1056) && o.p(r, t ? c : [-1, -1]);
    },
    i(r) {
      t || (L(o, r), (t = !0));
    },
    o(r) {
      G(o, r), (t = !1);
    },
    d(r) {
      o && o.d(r);
    },
  };
}
function Mo(n) {
  let t, i;
  return (
    (t = new Di({ props: { pagesCount: n[10], currentPageIndex: n[5] } })),
    t.$on("pageChange", n[41]),
    {
      c() {
        Tt(t.$$.fragment);
      },
      l(s) {
        Ct(t.$$.fragment, s);
      },
      m(s, o) {
        St(t, s, o), (i = !0);
      },
      p(s, o) {
        const r = {};
        o[0] & 1024 && (r.pagesCount = s[10]),
          o[0] & 32 && (r.currentPageIndex = s[5]),
          t.$set(r);
      },
      i(s) {
        i || (L(t.$$.fragment, s), (i = !0));
      },
      o(s) {
        G(t.$$.fragment, s), (i = !1);
      },
      d(s) {
        It(t, s);
      },
    }
  );
}
function jo(n) {
  let t,
    i,
    s,
    o,
    r,
    c,
    f,
    d,
    b,
    g,
    w,
    _,
    h = n[1] && Kr(n);
  const P = n[37].default,
    D = vn(P, n, n[36], Wr);
  let S = n[3] && kr(n),
    T = n[1] && Xr(n),
    m = n[4] && qr(n);
  return {
    c() {
      (t = R("div")),
        (i = R("div")),
        h && h.c(),
        (s = se()),
        (o = R("div")),
        (r = R("div")),
        D && D.c(),
        (f = se()),
        S && S.c(),
        (d = se()),
        T && T.c(),
        (b = se()),
        m && m.c(),
        this.h();
    },
    l(y) {
      t = F(y, "DIV", { class: !0 });
      var E = V(t);
      i = F(E, "DIV", { class: !0 });
      var W = V(i);
      h && h.l(W), (s = le(W)), (o = F(W, "DIV", { class: !0 }));
      var U = V(o);
      r = F(U, "DIV", { class: !0, style: !0 });
      var z = V(r);
      D && D.l(z),
        z.forEach(I),
        (f = le(U)),
        S && S.l(U),
        U.forEach(I),
        (d = le(W)),
        T && T.l(W),
        W.forEach(I),
        (b = le(E)),
        m && m.l(E),
        E.forEach(I),
        this.h();
    },
    h() {
      j(r, "class", "sc-carousel__pages-container svelte-uwo0yk"),
        je(r, "transform", "translateX(" + n[8] + "px)"),
        je(r, "transition-duration", n[9] + "ms"),
        je(r, "transition-timing-function", n[0]),
        j(o, "class", "sc-carousel__pages-window svelte-uwo0yk"),
        j(i, "class", "sc-carousel__content-container svelte-uwo0yk"),
        j(t, "class", "sc-carousel__carousel-container svelte-uwo0yk");
    },
    m(y, E) {
      $(y, t, E),
        O(t, i),
        h && h.m(i, null),
        O(i, s),
        O(i, o),
        O(o, r),
        D && D.m(r, null),
        n[39](r),
        O(o, f),
        S && S.m(o, null),
        n[40](o),
        O(i, d),
        T && T.m(i, null),
        O(t, b),
        m && m.m(t, null),
        (g = !0),
        w ||
          ((_ = [
            ur((c = zi.call(null, r, { thresholdProvider: n[38] }))),
            Me(r, "swipeStart", n[16]),
            Me(r, "swipeMove", n[18]),
            Me(r, "swipeEnd", n[19]),
            Me(r, "swipeFailed", n[20]),
            Me(r, "swipeThresholdReached", n[17]),
            ur(qi.call(null, o)),
            Me(o, "hovered", n[21]),
            ur($i.call(null, o)),
            Me(o, "tapped", n[22]),
          ]),
          (w = !0));
    },
    p(y, E) {
      y[1]
        ? h
          ? (h.p(y, E), E[0] & 2 && L(h, 1))
          : ((h = Kr(y)), h.c(), L(h, 1), h.m(i, s))
        : h &&
          (Ye(),
          G(h, 1, 1, () => {
            h = null;
          }),
          Je()),
        D &&
          D.p &&
          (!g || (E[0] & 96) | (E[1] & 32)) &&
          mn(D, P, y, y[36], g ? wn(P, y[36], E, Ao) : yn(y[36]), Wr),
        (!g || E[0] & 256) && je(r, "transform", "translateX(" + y[8] + "px)"),
        (!g || E[0] & 512) && je(r, "transition-duration", y[9] + "ms"),
        (!g || E[0] & 1) && je(r, "transition-timing-function", y[0]),
        c &&
          _i(c.update) &&
          E[0] & 2048 &&
          c.update.call(null, { thresholdProvider: y[38] }),
        y[3]
          ? S
            ? (S.p(y, E), E[0] & 8 && L(S, 1))
            : ((S = kr(y)), S.c(), L(S, 1), S.m(o, null))
          : S &&
            (Ye(),
            G(S, 1, 1, () => {
              S = null;
            }),
            Je()),
        y[1]
          ? T
            ? (T.p(y, E), E[0] & 2 && L(T, 1))
            : ((T = Xr(y)), T.c(), L(T, 1), T.m(i, null))
          : T &&
            (Ye(),
            G(T, 1, 1, () => {
              T = null;
            }),
            Je()),
        y[4]
          ? m
            ? (m.p(y, E), E[0] & 16 && L(m, 1))
            : ((m = qr(y)), m.c(), L(m, 1), m.m(t, null))
          : m &&
            (Ye(),
            G(m, 1, 1, () => {
              m = null;
            }),
            Je());
    },
    i(y) {
      g || (L(h), L(D, y), L(S), L(T), L(m), (g = !0));
    },
    o(y) {
      G(h), G(D, y), G(S), G(T), G(m), (g = !1);
    },
    d(y) {
      y && I(t),
        h && h.d(),
        D && D.d(y),
        n[39](null),
        S && S.d(),
        n[40](null),
        T && T.d(),
        m && m.d(),
        (w = !1),
        vi(_);
    },
  };
}
function Lo(n, t, i) {
  let { $$slots: s = {}, $$scope: o } = t,
    r = [],
    c,
    f,
    d = 0,
    b = 0,
    g = 1;
  const [{ data: w, progressManager: _ }, h, P] = So((p, K) => {
      _r({
        currentPageIndex: () => i(5, (c = K)),
        progressValue: () => i(7, (f = K)),
        offset: () => i(8, (d = K)),
        durationMs: () => i(9, (b = K)),
        pagesCount: () => i(10, (g = K)),
        loaded: () => i(6, (r = K)),
      })(p);
    }),
    D = ti();
  let { timingFunction: S = "ease-in-out" } = t,
    { arrows: T = !0 } = t,
    { infinite: m = !0 } = t,
    { initialPageIndex: y = 0 } = t,
    { duration: E = 500 } = t,
    { autoplay: W = !1 } = t,
    { autoplayDuration: U = 3e3 } = t,
    { autoplayDirection: z = Fe } = t,
    { pauseOnFocus: me = !1 } = t,
    { autoplayProgressVisible: ye = !1 } = t,
    { dots: de = !0 } = t,
    { swiping: J = !0 } = t,
    { particlesToShow: ee = 1 } = t,
    { particlesToScroll: pe = 1 } = t;
  async function ge(p, K) {
    const it = kt(K, "animated", !0);
    if (typeof p != "number") throw new Error("pageIndex should be a number");
    await h.showPage(p, { animated: it });
  }
  async function q(p) {
    const K = kt(p, "animated", !0);
    await h.showPrevPage({ animated: K });
  }
  async function Y(p) {
    const K = kt(p, "animated", !0);
    await h.showNextPage({ animated: K });
  }
  let B = 0,
    te,
    ne;
  const x = la(({ width: p }) => {
    i(11, (B = p)),
      (w.particleWidth = B / w.particlesToShow),
      sa({
        particlesContainerChildren: ne.children,
        particleWidth: w.particleWidth,
      }),
      h.offsetPage({ animated: !1 });
  });
  function Ie() {
    const { clonesToAppend: p, clonesToPrepend: K } = ca({
      clonesCountHead: w.clonesCountHead,
      clonesCountTail: w.clonesCountTail,
      particlesContainerChildren: ne.children,
    });
    ua({ particlesContainer: ne, clonesToAppend: p, clonesToPrepend: K });
  }
  ni(() => {
    (async () => (
      await Cr(),
      ne &&
        te &&
        ((w.particlesCountWithoutClones = ne.children.length),
        await Cr(),
        w.infinite && Ie(),
        (w.particlesCount = ne.children.length),
        h.showPage(y, { animated: !1 }),
        x.observe(te))
    ))();
  }),
    mi(() => {
      x.disconnect(), _.reset();
    });
  async function Ee(p) {
    await h.showPage(p, { animated: !0 });
  }
  function re() {
    J && (w.durationMs = 0);
  }
  async function $e(p) {
    J &&
      (await _r({ [Fe]: h.showNextPage, [yt]: h.showPrevPage })(
        p.detail.direction,
      ));
  }
  function H(p) {
    J && (w.offset += p.detail.dx);
  }
  function et() {
    J && h.showParticle(w.currentParticleIndex);
  }
  async function At() {
    J && (await h.offsetPage({ animated: !0 }));
  }
  function he(p) {
    w.focused = p.detail.value;
  }
  function tt() {
    h.toggleFocused();
  }
  function nt() {
    h.showPrevPage();
  }
  const Be = () => B / 3;
  function Ge(p) {
    pr[p ? "unshift" : "push"](() => {
      (ne = p), i(13, ne);
    });
  }
  function rt(p) {
    pr[p ? "unshift" : "push"](() => {
      (te = p), i(12, te);
    });
  }
  const Ue = (p) => Ee(p.detail);
  return (
    (n.$$set = (p) => {
      "timingFunction" in p && i(0, (S = p.timingFunction)),
        "arrows" in p && i(1, (T = p.arrows)),
        "infinite" in p && i(2, (m = p.infinite)),
        "initialPageIndex" in p && i(24, (y = p.initialPageIndex)),
        "duration" in p && i(25, (E = p.duration)),
        "autoplay" in p && i(26, (W = p.autoplay)),
        "autoplayDuration" in p && i(27, (U = p.autoplayDuration)),
        "autoplayDirection" in p && i(28, (z = p.autoplayDirection)),
        "pauseOnFocus" in p && i(29, (me = p.pauseOnFocus)),
        "autoplayProgressVisible" in p &&
          i(3, (ye = p.autoplayProgressVisible)),
        "dots" in p && i(4, (de = p.dots)),
        "swiping" in p && i(30, (J = p.swiping)),
        "particlesToShow" in p && i(31, (ee = p.particlesToShow)),
        "particlesToScroll" in p && i(32, (pe = p.particlesToScroll)),
        "$$scope" in p && i(36, (o = p.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 32 && D("pageChange", c),
        n.$$.dirty[0] & 4 && (w.infinite = m),
        n.$$.dirty[0] & 33554432 && (w.durationMsInit = E),
        n.$$.dirty[0] & 67108864 && (w.autoplay = W),
        n.$$.dirty[0] & 134217728 && (w.autoplayDuration = U),
        n.$$.dirty[0] & 268435456 && (w.autoplayDirection = z),
        n.$$.dirty[0] & 536870912 && (w.pauseOnFocus = me),
        n.$$.dirty[1] & 1 && (w.particlesToShowInit = ee),
        n.$$.dirty[1] & 2 && (w.particlesToScrollInit = pe);
    }),
    [
      S,
      T,
      m,
      ye,
      de,
      c,
      r,
      f,
      d,
      b,
      g,
      B,
      te,
      ne,
      h,
      Ee,
      re,
      $e,
      H,
      et,
      At,
      he,
      tt,
      nt,
      y,
      E,
      W,
      U,
      z,
      me,
      J,
      ee,
      pe,
      ge,
      q,
      Y,
      o,
      s,
      Be,
      Ge,
      rt,
      Ue,
    ]
  );
}
class Ho extends bt {
  constructor(t) {
    super(),
      Pt(
        this,
        t,
        Lo,
        jo,
        wt,
        {
          timingFunction: 0,
          arrows: 1,
          infinite: 2,
          initialPageIndex: 24,
          duration: 25,
          autoplay: 26,
          autoplayDuration: 27,
          autoplayDirection: 28,
          pauseOnFocus: 29,
          autoplayProgressVisible: 3,
          dots: 4,
          swiping: 30,
          particlesToShow: 31,
          particlesToScroll: 32,
          goTo: 33,
          goToPrev: 34,
          goToNext: 35,
        },
        null,
        [-1, -1],
      );
  }
  get goTo() {
    return this.$$.ctx[33];
  }
  get goToPrev() {
    return this.$$.ctx[34];
  }
  get goToNext() {
    return this.$$.ctx[35];
  }
}
function Yr(n, t, i) {
  const s = n.slice();
  return (s[6] = t[i]), s;
}
function Jr(n, t, i) {
  const s = n.slice();
  return (s[9] = t[i]), s;
}
function Zr(n) {
  let t,
    i,
    s = "Projects",
    o,
    r,
    c,
    f,
    d,
    b = mt(n[2]),
    g = [];
  for (let _ = 0; _ < b.length; _ += 1) g[_] = $r(Yr(n, b, _));
  const w = (_) =>
    G(g[_], 1, 1, () => {
      g[_] = null;
    });
  return {
    c() {
      (t = R("div")),
        (i = R("h1")),
        (i.textContent = s),
        (o = se()),
        (r = R("hr")),
        (c = se());
      for (let _ = 0; _ < g.length; _ += 1) g[_].c();
      this.h();
    },
    l(_) {
      t = F(_, "DIV", { class: !0 });
      var h = V(t);
      (i = F(h, "H1", { class: !0, "data-svelte-h": !0 })),
        yi(i) !== "svelte-136d6se" && (i.textContent = s),
        (o = le(h)),
        (r = F(h, "HR", { class: !0 })),
        (c = le(h));
      for (let P = 0; P < g.length; P += 1) g[P].l(h);
      h.forEach(I), this.h();
    },
    h() {
      j(i, "class", "svelte-gd2835"),
        j(r, "class", "svelte-gd2835"),
        j(t, "class", "cardWrapper");
    },
    m(_, h) {
      $(_, t, h), O(t, i), O(t, o), O(t, r), O(t, c);
      for (let P = 0; P < g.length; P += 1) g[P] && g[P].m(t, null);
      d = !0;
    },
    p(_, h) {
      if (h & 6) {
        b = mt(_[2]);
        let P;
        for (P = 0; P < b.length; P += 1) {
          const D = Yr(_, b, P);
          g[P]
            ? (g[P].p(D, h), L(g[P], 1))
            : ((g[P] = $r(D)), g[P].c(), L(g[P], 1), g[P].m(t, null));
        }
        for (Ye(), P = b.length; P < g.length; P += 1) w(P);
        Je();
      }
    },
    i(_) {
      if (!d) {
        for (let h = 0; h < b.length; h += 1) L(g[h]);
        _ &&
          gr(() => {
            d && (f || (f = pn(t, Sr, Er, !0)), f.run(1));
          }),
          (d = !0);
      }
    },
    o(_) {
      g = g.filter(Boolean);
      for (let h = 0; h < g.length; h += 1) G(g[h]);
      _ && (f || (f = pn(t, Sr, Er, !1)), f.run(0)), (d = !1);
    },
    d(_) {
      _ && I(t), ri(g, _), _ && f && f.end();
    },
  };
}
function No(n) {
  let t,
    i,
    s,
    o = n[6].images && Ro(n),
    r = n[6].video && Bo(n);
  return {
    c() {
      o && o.c(), (t = se()), r && r.c(), (i = vt());
    },
    l(c) {
      o && o.l(c), (t = le(c)), r && r.l(c), (i = vt());
    },
    m(c, f) {
      o && o.m(c, f), $(c, t, f), r && r.m(c, f), $(c, i, f), (s = !0);
    },
    p(c, f) {
      c[6].images && o.p(c, f), c[6].video && r.p(c, f);
    },
    i(c) {
      s || (L(o), (s = !0));
    },
    o(c) {
      G(o), (s = !1);
    },
    d(c) {
      c && (I(t), I(i)), o && o.d(c), r && r.d(c);
    },
  };
}
function Ro(n) {
  let t,
    i,
    s = {
      autoplay: !0,
      autoplayDuration: 5e3,
      autoplayProgressVisible: !0,
      pauseOnFocus: !0,
      swiping: !0,
      $$slots: { default: [Fo] },
      $$scope: { ctx: n },
    };
  return (
    (t = new Ho({ props: s })),
    n[4](t),
    {
      c() {
        Tt(t.$$.fragment);
      },
      l(o) {
        Ct(t.$$.fragment, o);
      },
      m(o, r) {
        St(t, o, r), (i = !0);
      },
      p(o, r) {
        const c = {};
        r & 4096 && (c.$$scope = { dirty: r, ctx: o }), t.$set(c);
      },
      i(o) {
        i || (L(t.$$.fragment, o), (i = !0));
      },
      o(o) {
        G(t.$$.fragment, o), (i = !1);
      },
      d(o) {
        n[4](null), It(t, o);
      },
    }
  );
}
function Qr(n) {
  let t, i;
  return {
    c() {
      (t = R("img")), this.h();
    },
    l(s) {
      (t = F(s, "IMG", { class: !0, src: !0, alt: !0 })), this.h();
    },
    h() {
      j(t, "class", "carouselImage svelte-gd2835"),
        ii(t.src, (i = n[9])) || j(t, "src", i),
        j(t, "alt", "");
    },
    m(s, o) {
      $(s, t, o);
    },
    p: Re,
    d(s) {
      s && I(t);
    },
  };
}
function Fo(n) {
  let t,
    i = mt(n[6].images),
    s = [];
  for (let o = 0; o < i.length; o += 1) s[o] = Qr(Jr(n, i, o));
  return {
    c() {
      for (let o = 0; o < s.length; o += 1) s[o].c();
      t = vt();
    },
    l(o) {
      for (let r = 0; r < s.length; r += 1) s[r].l(o);
      t = vt();
    },
    m(o, r) {
      for (let c = 0; c < s.length; c += 1) s[c] && s[c].m(o, r);
      $(o, t, r);
    },
    p(o, r) {
      if (r & 4) {
        i = mt(o[6].images);
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = Jr(o, i, c);
          s[c]
            ? s[c].p(f, r)
            : ((s[c] = Qr(f)), s[c].c(), s[c].m(t.parentNode, t));
        }
        for (; c < s.length; c += 1) s[c].d(1);
        s.length = i.length;
      }
    },
    d(o) {
      o && I(t), ri(s, o);
    },
  };
}
function Bo(n) {
  let t, i;
  return {
    c() {
      (t = R("video")), this.h();
    },
    l(s) {
      (t = F(s, "VIDEO", { class: !0, src: !0 })), V(t).forEach(I), this.h();
    },
    h() {
      j(t, "class", "carouselImage svelte-gd2835"),
        ii(t.src, (i = n[6].video)) || j(t, "src", i),
        (t.controls = !0),
        (t.autoplay = !0),
        (t.loop = !0);
    },
    m(s, o) {
      $(s, t, o);
    },
    p: Re,
    d(s) {
      s && I(t);
    },
  };
}
function $r(n) {
  let t,
    i,
    s,
    o,
    r = n[6].name + "",
    c,
    f,
    d,
    b,
    g = n[6].technologies + "",
    w,
    _,
    h,
    P = n[6].date + "",
    D,
    S,
    T,
    m,
    y,
    E,
    W,
    U,
    z,
    me = n[6].description + "",
    ye,
    de,
    J,
    ee,
    pe,
    ge,
    q = No(n);
  return {
    c() {
      (t = R("div")),
        (i = R("div")),
        (s = R("h2")),
        (o = R("a")),
        (c = zt(r)),
        (f = se()),
        (d = R("div")),
        (b = zt("Technologies: ")),
        (w = zt(g)),
        (_ = se()),
        (h = R("div")),
        (D = zt(P)),
        (T = se()),
        (m = R("hr")),
        (y = se()),
        q && q.c(),
        (E = se()),
        (W = R("hr")),
        (U = se()),
        (z = R("div")),
        (ye = zt(me)),
        (J = se()),
        (ee = R("hr")),
        (pe = se()),
        this.h();
    },
    l(Y) {
      t = F(Y, "DIV", { class: !0 });
      var B = V(t);
      i = F(B, "DIV", { class: !0 });
      var te = V(i);
      s = F(te, "H2", { class: !0 });
      var ne = V(s);
      o = F(ne, "A", { style: !0, href: !0, target: !0 });
      var x = V(o);
      (c = Kt(x, r)),
        x.forEach(I),
        ne.forEach(I),
        (f = le(te)),
        (d = F(te, "DIV", { class: !0 }));
      var Ie = V(d);
      (b = Kt(Ie, "Technologies: ")),
        (w = Kt(Ie, g)),
        Ie.forEach(I),
        (_ = le(te)),
        (h = F(te, "DIV", { class: !0 }));
      var Ee = V(h);
      (D = Kt(Ee, P)),
        Ee.forEach(I),
        te.forEach(I),
        (T = le(B)),
        (m = F(B, "HR", { class: !0 })),
        (y = le(B)),
        q && q.l(B),
        (E = le(B)),
        (W = F(B, "HR", { class: !0 })),
        (U = le(B)),
        (z = F(B, "DIV", { class: !0 }));
      var re = V(z);
      (ye = Kt(re, me)),
        re.forEach(I),
        (J = le(B)),
        (ee = F(B, "HR", { class: !0 })),
        (pe = le(B)),
        B.forEach(I),
        this.h();
    },
    h() {
      je(o, "color", "white"),
        j(o, "href", n[6].url),
        j(o, "target", "_blank"),
        j(s, "class", "projectHeading svelte-gd2835"),
        j(d, "class", "projectTechnologies svelte-gd2835"),
        j(h, "class", "lineLabel"),
        j(i, "class", "projectTopper svelte-gd2835"),
        j(m, "class", "mediumHr svelte-gd2835"),
        j(W, "class", "smallHr svelte-gd2835"),
        j(z, "class", "experienceDescription"),
        j(ee, "class", "smallHr svelte-gd2835"),
        j(t, "class", "projectWrapper svelte-gd2835");
    },
    m(Y, B) {
      $(Y, t, B),
        O(t, i),
        O(i, s),
        O(s, o),
        O(o, c),
        O(i, f),
        O(i, d),
        O(d, b),
        O(d, w),
        O(i, _),
        O(i, h),
        O(h, D),
        O(t, T),
        O(t, m),
        O(t, y),
        q && q.m(t, null),
        O(t, E),
        O(t, W),
        O(t, U),
        O(t, z),
        O(z, ye),
        O(t, J),
        O(t, ee),
        O(t, pe),
        (ge = !0);
    },
    p(Y, B) {
      q.p(Y, B);
    },
    i(Y) {
      ge ||
        (Y &&
          gr(() => {
            ge && (S || (S = pn(i, Ir, Ar, !0)), S.run(1));
          }),
        L(q),
        de ||
          gr(() => {
            (de = wi(z, Ci, { speed: 20 })), de.start();
          }),
        (ge = !0));
    },
    o(Y) {
      Y && (S || (S = pn(i, Ir, Ar, !1)), S.run(0)), G(q), (ge = !1);
    },
    d(Y) {
      Y && I(t), Y && S && S.end(), q && q.d();
    },
  };
}
function Go(n) {
  let t,
    i,
    s = n[0] && Zr(n);
  return {
    c() {
      s && s.c(), (t = vt());
    },
    l(o) {
      s && s.l(o), (t = vt());
    },
    m(o, r) {
      s && s.m(o, r), $(o, t, r), (i = !0);
    },
    p(o, [r]) {
      o[0]
        ? s
          ? (s.p(o, r), r & 1 && L(s, 1))
          : ((s = Zr(o)), s.c(), L(s, 1), s.m(t.parentNode, t))
        : s &&
          (Ye(),
          G(s, 1, 1, () => {
            s = null;
          }),
          Je());
    },
    i(o) {
      i || (L(s), (i = !0));
    },
    o(o) {
      G(s), (i = !1);
    },
    d(o) {
      o && I(t), s && s.d(o);
    },
  };
}
function Uo(n, t, i) {
  let { data: s } = t,
    o = !1,
    r;
  ni(() => {
    i(0, (o = !0));
  }),
    Ti("My Projects");
  const c = [
    {
      name: "OpenLift",
      url: "https://github.com/Vespertine112/OpenLift",
      technologies: "Python, PyTorch, Pandas, Numpy, etc",
      date: "Nov 2023",
      images: [
        "images/projects/Bench_Txt.png",
        "images/projects/Squat_AP.png",
        "images/projects/Squat_RES.png",
        "images/projects/No_Lift_RES.png",
        "images/projects/No_Lift_AP.png",
      ],
      description:
        "Designed a Machine Learning Pipeline & Models to predict powerlifting totals for competition lifts. The models are very highly performant (R² >= 0.97). Performed data cleaning and curating, optimizing for lowest feature space possible with performance. Implemented custom classification reporting and analysis to parse results.",
    },
    {
      name: "Frappuccino Shop",
      url: "https://docs.google.com/presentation/d/1elEZDd05HZh93MPgyaXxibHc3Y2HYyfBIkBaPX2hfpk/edit?usp=sharing",
      technologies: "Typescript, Angular, Firebase Auth, MongoDB, Django",
      date: "Aug - Dec 2022",
      images: [
        "/images/projects/frap2.png",
        "/images/projects/frap3.png",
        "/images/projects/frap4.png",
      ],
      description:
        "Lead a team of student engineers to build a custom complete web application for a frappuccino shop. Developed and designed user account management through Firebase Auth, including many OAuth providers, and its interpolation in MongoDB. Helped architect and implement the ordering user flow in both the back-end and front-end, to create a streamlined experience and allow for order add-ons.",
    },
    {
      name: "High Performance Viewshed Computation",
      url: "",
      technologies: "C++, MPI, CUDA, OpenMP",
      date: "Dec 2022",
      video: "images/projects/viewshed.mp4",
      description:
        "Worked on a team to create a high performance viewshed computation, running on multiple GPUs and CPUs across a clustered network. Designed and implemented the MPI control structure for the division of critical data across the network, and the accompanying distributed CPU approach. Created data visualizations and produced scaling reporting for the final program to demonstrate a 3600x increase in performance over single core.",
    },
  ];
  function f(d) {
    pr[d ? "unshift" : "push"](() => {
      (r = d), i(1, r);
    });
  }
  return (
    (n.$$set = (d) => {
      "data" in d && i(3, (s = d.data));
    }),
    [o, r, c, s, f]
  );
}
class Yo extends bt {
  constructor(t) {
    super(), Pt(this, t, Uo, Go, wt, { data: 3 });
  }
}
export { Yo as component };
