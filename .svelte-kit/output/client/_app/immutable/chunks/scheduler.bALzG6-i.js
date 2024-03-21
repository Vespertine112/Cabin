function N() {}
const X = (t) => t;
function q(t, n) {
  for (const e in n) t[e] = n[e];
  return t;
}
function P(t) {
  return t();
}
function Y() {
  return Object.create(null);
}
function B(t) {
  t.forEach(P);
}
function L(t) {
  return typeof t == "function";
}
function Z(t, n) {
  return t != t
    ? n == n
    : t !== n || (t && typeof t == "object") || typeof t == "function";
}
let h;
function $(t, n) {
  return t === n
    ? !0
    : (h || (h = document.createElement("a")), (h.href = n), t === h.href);
}
function tt(t) {
  return Object.keys(t).length === 0;
}
function M(t, ...n) {
  if (t == null) {
    for (const i of n) i(void 0);
    return N;
  }
  const e = t.subscribe(...n);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function nt(t, n, e) {
  t.$$.on_destroy.push(M(n, e));
}
function et(t, n, e, i) {
  if (t) {
    const r = A(t, n, e, i);
    return t[0](r);
  }
}
function A(t, n, e, i) {
  return t[1] && i ? q(e.ctx.slice(), t[1](i(n))) : e.ctx;
}
function it(t, n, e, i) {
  if (t[2] && i) {
    const r = t[2](i(e));
    if (n.dirty === void 0) return r;
    if (typeof r == "object") {
      const o = [],
        c = Math.max(n.dirty.length, r.length);
      for (let s = 0; s < c; s += 1) o[s] = n.dirty[s] | r[s];
      return o;
    }
    return n.dirty | r;
  }
  return n.dirty;
}
function rt(t, n, e, i, r, o) {
  if (r) {
    const c = A(n, e, i, o);
    t.p(c, r);
  }
}
function ct(t) {
  if (t.ctx.length > 32) {
    const n = [],
      e = t.ctx.length / 32;
    for (let i = 0; i < e; i++) n[i] = -1;
    return n;
  }
  return -1;
}
function lt(t) {
  return t ?? "";
}
function st(t) {
  return t && L(t.destroy) ? t.destroy : N;
}
function ot(t) {
  const n = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return n ? [parseFloat(n[1]), n[2] || "px"] : [t, "px"];
}
let p = !1;
function ut() {
  p = !0;
}
function at() {
  p = !1;
}
function O(t, n, e, i) {
  for (; t < n; ) {
    const r = t + ((n - t) >> 1);
    e(r) <= i ? (t = r + 1) : (n = r);
  }
  return t;
}
function T(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let n = t.childNodes;
  if (t.nodeName === "HEAD") {
    const l = [];
    for (let u = 0; u < n.length; u++) {
      const a = n[u];
      a.claim_order !== void 0 && l.push(a);
    }
    n = l;
  }
  const e = new Int32Array(n.length + 1),
    i = new Int32Array(n.length);
  e[0] = -1;
  let r = 0;
  for (let l = 0; l < n.length; l++) {
    const u = n[l].claim_order,
      a =
        (r > 0 && n[e[r]].claim_order <= u
          ? r + 1
          : O(1, r, (S) => n[e[S]].claim_order, u)) - 1;
    i[l] = e[a] + 1;
    const k = a + 1;
    (e[k] = l), (r = Math.max(k, r));
  }
  const o = [],
    c = [];
  let s = n.length - 1;
  for (let l = e[r] + 1; l != 0; l = i[l - 1]) {
    for (o.push(n[l - 1]); s >= l; s--) c.push(n[s]);
    s--;
  }
  for (; s >= 0; s--) c.push(n[s]);
  o.reverse(), c.sort((l, u) => l.claim_order - u.claim_order);
  for (let l = 0, u = 0; l < c.length; l++) {
    for (; u < o.length && c[l].claim_order >= o[u].claim_order; ) u++;
    const a = u < o.length ? o[u] : null;
    t.insertBefore(c[l], a);
  }
}
function F(t, n) {
  t.appendChild(n);
}
function H(t) {
  if (!t) return document;
  const n = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return n && n.host ? n : t.ownerDocument;
}
function ft(t) {
  const n = j("style");
  return (n.textContent = "/* empty */"), I(H(t), n), n.sheet;
}
function I(t, n) {
  return F(t.head || t, n), n.sheet;
}
function R(t, n) {
  if (p) {
    for (
      T(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    n !== t.actual_end_child
      ? (n.claim_order !== void 0 || n.parentNode !== t) &&
        t.insertBefore(n, t.actual_end_child)
      : (t.actual_end_child = n.nextSibling);
  } else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function _t(t, n, e) {
  p && !e
    ? R(t, n)
    : (n.parentNode !== t || n.nextSibling != e) &&
      t.insertBefore(n, e || null);
}
function dt(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function ht(t, n) {
  for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function j(t) {
  return document.createElement(t);
}
function E(t) {
  return document.createTextNode(t);
}
function mt() {
  return E(" ");
}
function pt() {
  return E("");
}
function yt(t, n, e, i) {
  return t.addEventListener(n, e, i), () => t.removeEventListener(n, e, i);
}
function bt(t, n, e) {
  e == null
    ? t.removeAttribute(n)
    : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function gt(t) {
  return t.dataset.svelteH;
}
function xt(t) {
  return Array.from(t.childNodes);
}
function z(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function C(t, n, e, i, r = !1) {
  z(t);
  const o = (() => {
    for (let c = t.claim_info.last_index; c < t.length; c++) {
      const s = t[c];
      if (n(s)) {
        const l = e(s);
        return (
          l === void 0 ? t.splice(c, 1) : (t[c] = l),
          r || (t.claim_info.last_index = c),
          s
        );
      }
    }
    for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
      const s = t[c];
      if (n(s)) {
        const l = e(s);
        return (
          l === void 0 ? t.splice(c, 1) : (t[c] = l),
          r
            ? l === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = c),
          s
        );
      }
    }
    return i();
  })();
  return (
    (o.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    o
  );
}
function U(t, n, e, i) {
  return C(
    t,
    (r) => r.nodeName === n,
    (r) => {
      const o = [];
      for (let c = 0; c < r.attributes.length; c++) {
        const s = r.attributes[c];
        e[s.name] || o.push(s.name);
      }
      o.forEach((c) => r.removeAttribute(c));
    },
    () => i(n),
  );
}
function Et(t, n, e) {
  return U(t, n, e, j);
}
function W(t, n) {
  return C(
    t,
    (e) => e.nodeType === 3,
    (e) => {
      const i = "" + n;
      if (e.data.startsWith(i)) {
        if (e.data.length !== i.length) return e.splitText(i.length);
      } else e.data = i;
    },
    () => E(n),
    !0,
  );
}
function kt(t) {
  return W(t, " ");
}
function wt(t, n) {
  (n = "" + n), t.data !== n && (t.data = n);
}
function vt(t, n, e, i) {
  e == null
    ? t.style.removeProperty(n)
    : t.style.setProperty(n, e, i ? "important" : "");
}
function Nt(t, n, e) {
  t.classList.toggle(n, !!e);
}
function G(t, n, { bubbles: e = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: n, bubbles: e, cancelable: i });
}
function At(t, n) {
  return new t(n);
}
let m;
function b(t) {
  m = t;
}
function y() {
  if (!m) throw new Error("Function called outside component initialization");
  return m;
}
function jt(t) {
  y().$$.on_mount.push(t);
}
function Ct(t) {
  y().$$.after_update.push(t);
}
function Dt(t) {
  y().$$.on_destroy.push(t);
}
function St() {
  const t = y();
  return (n, e, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[n];
    if (r) {
      const o = G(n, e, { cancelable: i });
      return (
        r.slice().forEach((c) => {
          c.call(t, o);
        }),
        !o.defaultPrevented
      );
    }
    return !0;
  };
}
function qt(t, n) {
  const e = t.$$.callbacks[n.type];
  e && e.slice().forEach((i) => i.call(this, n));
}
const d = [],
  w = [];
let _ = [];
const v = [],
  D = Promise.resolve();
let x = !1;
function J() {
  x || ((x = !0), D.then(Q));
}
function Pt() {
  return J(), D;
}
function K(t) {
  _.push(t);
}
const g = new Set();
let f = 0;
function Q() {
  if (f !== 0) return;
  const t = m;
  do {
    try {
      for (; f < d.length; ) {
        const n = d[f];
        f++, b(n), V(n.$$);
      }
    } catch (n) {
      throw ((d.length = 0), (f = 0), n);
    }
    for (b(null), d.length = 0, f = 0; w.length; ) w.pop()();
    for (let n = 0; n < _.length; n += 1) {
      const e = _[n];
      g.has(e) || (g.add(e), e());
    }
    _.length = 0;
  } while (d.length);
  for (; v.length; ) v.pop()();
  (x = !1), g.clear(), b(t);
}
function V(t) {
  if (t.fragment !== null) {
    t.update(), B(t.before_update);
    const n = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, n),
      t.after_update.forEach(K);
  }
}
function Bt(t) {
  const n = [],
    e = [];
  _.forEach((i) => (t.indexOf(i) === -1 ? n.push(i) : e.push(i))),
    e.forEach((i) => i()),
    (_ = n);
}
export {
  qt as $,
  X as A,
  Ct as B,
  w as C,
  At as D,
  Pt as E,
  lt as F,
  yt as G,
  et as H,
  rt as I,
  ct as J,
  it as K,
  H as L,
  ft as M,
  L as N,
  G as O,
  Y as P,
  Q,
  tt as R,
  Bt as S,
  m as T,
  b as U,
  P as V,
  d as W,
  J as X,
  ut as Y,
  at as Z,
  Nt as _,
  mt as a,
  St as a0,
  xt as b,
  Et as c,
  W as d,
  j as e,
  dt as f,
  kt as g,
  R as h,
  _t as i,
  wt as j,
  nt as k,
  pt as l,
  Dt as m,
  N as n,
  jt as o,
  gt as p,
  $ as q,
  B as r,
  Z as s,
  E as t,
  bt as u,
  st as v,
  K as w,
  ht as x,
  vt as y,
  ot as z,
};
