import {
  s as Y,
  l as K,
  i as X,
  f as T,
  o as Z,
  m as tt,
  e as p,
  a as C,
  c,
  b as O,
  p as k,
  g as w,
  q as et,
  u as P,
  h as o,
  v as rt,
  n as it,
  w as v,
} from "../chunks/scheduler.bALzG6-i.js";
import {
  S as at,
  i as nt,
  a as N,
  t as Q,
  c as st,
  b as I,
  d as M,
  g as ot,
} from "../chunks/index.8Nsucz2u.js";
import { u as lt, t as ft } from "../chunks/stores.d2mhU7YY.js";
import { b as R, f as x } from "../chunks/index.V82jZZf0.js";
import { t as ut } from "../chunks/tippy.esm.vXDZ6XwW.js";
/* empty css                         */ function U(g) {
  let e,
    t,
    r = "Hi, I'm Brayden.",
    n,
    b,
    l,
    s,
    H,
    f,
    L,
    d,
    V =
      "Welcome in! I&#39;m a software developer with <strong>4 years</strong> of experience.",
    q,
    D,
    m,
    $ =
      "Currently, I work as a <strong>Full-Stack Developer</strong>, but I have an interest in all things computing.",
    W,
    j,
    _,
    G = `When I&#39;m not writing code, I love to get outdoors, exercise, or fall down the rabbit hole on a fascinating topic! 
            <i><a class="links svelte-91awsm" href="https://en.wikipedia.org/wiki/The_Crystal_Palace" target="_blank">Crystal Palace, anyone?</a></i>`,
    S,
    B,
    h,
    z =
      "Feel free to contact me at any of the links above! I'd love to hear from you!",
    E,
    u,
    y,
    F,
    A;
  return {
    c() {
      (e = p("div")),
        (t = p("h1")),
        (t.textContent = r),
        (b = C()),
        (l = p("div")),
        (s = p("img")),
        (L = C()),
        (d = p("p")),
        (d.innerHTML = V),
        (D = C()),
        (m = p("p")),
        (m.innerHTML = $),
        (j = C()),
        (_ = p("p")),
        (_.innerHTML = G),
        (B = C()),
        (h = p("p")),
        (h.textContent = z),
        this.h();
    },
    l(i) {
      e = c(i, "DIV", { class: !0 });
      var a = O(e);
      (t = c(a, "H1", { "data-svelte-h": !0 })),
        k(t) !== "svelte-1hqgcjs" && (t.textContent = r),
        (b = w(a)),
        (l = c(a, "DIV", { class: !0 }));
      var J = O(l);
      (s = c(J, "IMG", { src: !0, class: !0, alt: !0 })),
        J.forEach(T),
        (L = w(a)),
        (d = c(a, "P", { "data-svelte-h": !0 })),
        k(d) !== "svelte-11xmpj0" && (d.innerHTML = V),
        (D = w(a)),
        (m = c(a, "P", { "data-svelte-h": !0 })),
        k(m) !== "svelte-3ilae8" && (m.innerHTML = $),
        (j = w(a)),
        (_ = c(a, "P", { "data-svelte-h": !0 })),
        k(_) !== "svelte-188eai9" && (_.innerHTML = G),
        (B = w(a)),
        (h = c(a, "P", { "data-svelte-h": !0 })),
        k(h) !== "svelte-1956k8i" && (h.textContent = z),
        a.forEach(T),
        this.h();
    },
    h() {
      et(s.src, (H = "/images/profile/profile.jpg")) || P(s, "src", H),
        P(s, "class", "profilePic svelte-91awsm"),
        P(s, "alt", "Profile Picture"),
        P(l, "class", "profilePicWrapper svelte-91awsm"),
        P(e, "class", "cardWrapper");
    },
    m(i, a) {
      X(i, e, a),
        o(e, t),
        o(e, b),
        o(e, l),
        o(l, s),
        o(e, L),
        o(e, d),
        o(e, D),
        o(e, m),
        o(e, j),
        o(e, _),
        o(e, B),
        o(e, h),
        (y = !0),
        F ||
          ((A = rt(
            g[1].call(null, l, {
              content: ct,
              theme: "material",
              placement: "right",
            }),
          )),
          (F = !0));
    },
    p: it,
    i(i) {
      y ||
        (i &&
          (n ||
            v(() => {
              (n = I(t, ft, {})), n.start();
            })),
        i &&
          v(() => {
            y &&
              (f || (f = M(s, R, { amount: 100, duration: 1e3 }, !0)),
              f.run(1));
          }),
        i &&
          (q ||
            v(() => {
              (q = I(d, x, { x: 500, duration: 2500 })), q.start();
            })),
        i &&
          (W ||
            v(() => {
              (W = I(m, x, { x: -500, duration: 2500 })), W.start();
            })),
        i &&
          (S ||
            v(() => {
              (S = I(_, x, { x: 500, duration: 2500 })), S.start();
            })),
        i &&
          (E ||
            v(() => {
              (E = I(h, x, { x: -500, duration: 2500 })), E.start();
            })),
        i &&
          v(() => {
            y &&
              (u || (u = M(e, x, { y: 50, x: 50, duration: 1e3 }, !0)),
              u.run(1));
          }),
        (y = !0));
    },
    o(i) {
      i && (f || (f = M(s, R, { amount: 100, duration: 1e3 }, !1)), f.run(0)),
        i &&
          (u || (u = M(e, x, { y: 50, x: 50, duration: 1e3 }, !1)), u.run(0)),
        (y = !1);
    },
    d(i) {
      i && T(e), i && f && f.end(), i && u && u.end(), (F = !1), A();
    },
  };
}
function pt(g) {
  let e,
    t = g[0] && U(g);
  return {
    c() {
      t && t.c(), (e = K());
    },
    l(r) {
      t && t.l(r), (e = K());
    },
    m(r, n) {
      t && t.m(r, n), X(r, e, n);
    },
    p(r, [n]) {
      r[0]
        ? t
          ? (t.p(r, n), n & 1 && N(t, 1))
          : ((t = U(r)), t.c(), N(t, 1), t.m(e.parentNode, e))
        : t &&
          (ot(),
          Q(t, 1, 1, () => {
            t = null;
          }),
          st());
    },
    i(r) {
      N(t);
    },
    o(r) {
      Q(t);
    },
    d(r) {
      r && T(e), t && t.d(r);
    },
  };
}
let ct = "Cold in Colorado!";
function dt(g, e, t) {
  lt("Brayden Hill");
  function r(b, l) {
    const s = ut(b, l);
    return {
      update(H) {
        s.setProps(H);
      },
      destroy() {
        s.destroy();
      },
    };
  }
  let n = !1;
  return (
    Z(() => {
      t(0, (n = !0));
    }),
    tt(() => {
      t(0, (n = !1));
    }),
    [n, r]
  );
}
class xt extends at {
  constructor(e) {
    super(), nt(this, e, dt, pt, Y, {});
  }
}
export { xt as component };
