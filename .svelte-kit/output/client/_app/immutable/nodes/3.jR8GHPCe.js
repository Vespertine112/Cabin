import {
  s as T,
  l as k,
  i as H,
  f as g,
  o as D,
  e as _,
  t as E,
  a as I,
  c as h,
  b as L,
  p as x,
  d as N,
  g as P,
  u as C,
  h as p,
  v as R,
  n as S,
  w as V,
} from "../chunks/scheduler.bALzG6-i.js";
import {
  S as q,
  i as A,
  a as b,
  t as z,
  c as F,
  b as G,
  e as O,
  g as U,
} from "../chunks/index.8Nsucz2u.js";
import { f as M } from "../chunks/index.V82jZZf0.js";
import { t as W } from "../chunks/tippy.esm.vXDZ6XwW.js";
/* empty css                         */ import { c as Z } from "../chunks/standards.jAja-OFF.js";
function w(l) {
  let e,
    t,
    a = "About Me",
    s,
    c,
    n,
    i,
    u =
      '<a href="https://drive.google.com/file/d/1laEwku355kUeae-_aoF442zvMpOCNZfe/view?usp=sharing" target="_blank"><img class="resume svelte-gzeu1u" src="/icons/resume.svg" alt=""/></a>',
    f,
    d,
    m,
    v,
    y;
  return {
    c() {
      (e = _("div")),
        (t = _("h1")),
        (t.textContent = a),
        (s = E(`
        tbd

        `)),
        (c = _("hr")),
        (n = I()),
        (i = _("div")),
        (i.innerHTML = u),
        this.h();
    },
    l(r) {
      e = h(r, "DIV", { class: !0 });
      var o = L(e);
      (t = h(o, "H1", { "data-svelte-h": !0 })),
        x(t) !== "svelte-hbz7zl" && (t.textContent = a),
        (s = N(
          o,
          `
        tbd

        `,
        )),
        (c = h(o, "HR", { class: !0 })),
        (n = P(o)),
        (i = h(o, "DIV", { "data-svelte-h": !0 })),
        x(i) !== "svelte-6trdxo" && (i.innerHTML = u),
        o.forEach(g),
        this.h();
    },
    h() {
      C(c, "class", "svelte-gzeu1u"), C(e, "class", "cardWrapper");
    },
    m(r, o) {
      H(r, e, o),
        p(e, t),
        p(e, s),
        p(e, c),
        p(e, n),
        p(e, i),
        (m = !0),
        v ||
          ((y = R(
            l[1].call(null, i, {
              content: B,
              theme: "material",
              placement: "right",
            }),
          )),
          (v = !0));
    },
    p: S,
    i(r) {
      m ||
        (r &&
          V(() => {
            m && (d && d.end(1), (f = G(e, M, Z)), f.start());
          }),
        (m = !0));
    },
    o(r) {
      f && f.invalidate(),
        r && (d = O(e, M, { y: 50, x: 50, duration: 1e3 })),
        (m = !1);
    },
    d(r) {
      r && g(e), r && d && d.end(), (v = !1), y();
    },
  };
}
function j(l) {
  let e,
    t = l[0] && w(l);
  return {
    c() {
      t && t.c(), (e = k());
    },
    l(a) {
      t && t.l(a), (e = k());
    },
    m(a, s) {
      t && t.m(a, s), H(a, e, s);
    },
    p(a, [s]) {
      a[0]
        ? t
          ? (t.p(a, s), s & 1 && b(t, 1))
          : ((t = w(a)), t.c(), b(t, 1), t.m(e.parentNode, e))
        : t &&
          (U(),
          z(t, 1, 1, () => {
            t = null;
          }),
          F());
    },
    i(a) {
      b(t);
    },
    o(a) {
      z(t);
    },
    d(a) {
      a && g(e), t && t.d(a);
    },
  };
}
let B = "Grab a copy of my current Resume!";
function J(l, e, t) {
  let { data: a } = e,
    s = !1;
  D(() => {
    t(0, (s = !0));
  });
  function c(n, i) {
    const u = W(n, i);
    return {
      update(f) {
        u.setProps(f);
      },
      destroy() {
        u.destroy();
      },
    };
  }
  return (
    (l.$$set = (n) => {
      "data" in n && t(2, (a = n.data));
    }),
    [s, c, a]
  );
}
class et extends q {
  constructor(e) {
    super(), A(this, e, J, j, T, { data: 2 });
  }
}
export { et as component };
