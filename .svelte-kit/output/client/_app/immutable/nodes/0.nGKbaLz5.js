import {
  s as j,
  l as S,
  i as L,
  f as d,
  k as F,
  o as J,
  e as v,
  c as g,
  b as I,
  u as m,
  h as p,
  w as G,
  x as de,
  t as C,
  a as H,
  d as A,
  g as T,
  F as Q,
  G as P,
  p as O,
  v as B,
  n as ce,
  r as fe,
  j as pe,
  H as he,
  I as ve,
  J as ge,
  K as be,
} from "../chunks/scheduler.bALzG6-i.js";
import {
  S as K,
  i as R,
  a as h,
  g as q,
  t as y,
  c as D,
  b as U,
  d as X,
  e as ke,
  f as Y,
  h as Z,
  m as x,
  j as ee,
} from "../chunks/index.8Nsucz2u.js";
import { e as te } from "../chunks/each.uvXnbnhl.js";
import { p as me } from "../chunks/stores.x-NXWZ0A.js";
import { f as _e, a as z } from "../chunks/index.V82jZZf0.js";
import { r as le, t as $e, u as ae } from "../chunks/stores.d2mhU7YY.js";
import { t as ye } from "../chunks/tippy.esm.vXDZ6XwW.js";
function se(o, e, t) {
  const a = o.slice();
  return (a[5] = e[t]), (a[7] = t), a;
}
function re(o) {
  let e,
    t,
    a,
    l,
    r = te(o[0]),
    s = [];
  for (let i = 0; i < r.length; i += 1) s[i] = ne(se(o, r, i));
  const f = (i) =>
    y(s[i], 1, 1, () => {
      s[i] = null;
    });
  return {
    c() {
      (e = v("nav")), (t = v("ul"));
      for (let i = 0; i < s.length; i += 1) s[i].c();
      this.h();
    },
    l(i) {
      e = g(i, "NAV", { class: !0 });
      var u = I(e);
      t = g(u, "UL", { class: !0 });
      var n = I(t);
      for (let c = 0; c < s.length; c += 1) s[c].l(n);
      n.forEach(d), u.forEach(d), this.h();
    },
    h() {
      m(t, "class", "svelte-q6046a"), m(e, "class", "svelte-q6046a");
    },
    m(i, u) {
      L(i, e, u), p(e, t);
      for (let n = 0; n < s.length; n += 1) s[n] && s[n].m(t, null);
      l = !0;
    },
    p(i, u) {
      if (u & 13) {
        r = te(i[0]);
        let n;
        for (n = 0; n < r.length; n += 1) {
          const c = se(i, r, n);
          s[n]
            ? (s[n].p(c, u), h(s[n], 1))
            : ((s[n] = ne(c)), s[n].c(), h(s[n], 1), s[n].m(t, null));
        }
        for (q(), n = r.length; n < s.length; n += 1) f(n);
        D();
      }
    },
    i(i) {
      if (!l) {
        for (let u = 0; u < r.length; u += 1) h(s[u]);
        a ||
          G(() => {
            (a = U(e, _e, { y: 50, x: -50, duration: 1e3 })), a.start();
          }),
          (l = !0);
      }
    },
    o(i) {
      s = s.filter(Boolean);
      for (let u = 0; u < s.length; u += 1) y(s[u]);
      l = !1;
    },
    d(i) {
      i && d(e), de(s, i);
    },
  };
}
function ne(o) {
  let e,
    t,
    a,
    l = o[5].label + "",
    r,
    s,
    f,
    i,
    u,
    n,
    c,
    b,
    E;
  return {
    c() {
      (e = v("li")),
        (t = v("a")),
        (a = C("=> {")),
        (r = C(l)),
        (s = C("}")),
        (u = H()),
        (n = v("hr")),
        this.h();
    },
    l(_) {
      e = g(_, "LI", { class: !0 });
      var k = I(e);
      t = g(k, "A", { id: !0, href: !0, class: !0 });
      var N = I(t);
      (a = A(N, "=> {")),
        (r = A(N, l)),
        (s = A(N, "}")),
        N.forEach(d),
        k.forEach(d),
        (u = T(_)),
        (n = g(_, "HR", { class: !0 })),
        this.h();
    },
    h() {
      m(t, "id", o[7].toString()),
        m(t, "href", o[5].url),
        m(t, "class", "svelte-q6046a"),
        m(e, "class", (i = Q(o[2] == o[7] ? "active" : "") + " svelte-q6046a")),
        m(n, "class", "svelte-q6046a");
    },
    m(_, k) {
      L(_, e, k),
        p(e, t),
        p(t, a),
        p(t, r),
        p(t, s),
        L(_, u, k),
        L(_, n, k),
        (c = !0),
        b || ((E = P(t, "click", o[3])), (b = !0));
    },
    p(_, k) {
      (!c ||
        (k & 4 &&
          i !== (i = Q(_[2] == _[7] ? "active" : "") + " svelte-q6046a"))) &&
        m(e, "class", i);
    },
    i(_) {
      c ||
        (G(() => {
          c && (f || (f = X(t, z, { delay: o[7] * 250 }, !0)), f.run(1));
        }),
        (c = !0));
    },
    o(_) {
      f || (f = X(t, z, { delay: o[7] * 250 }, !1)), f.run(0), (c = !1);
    },
    d(_) {
      _ && (d(e), d(u), d(n)), _ && f && f.end(), (b = !1), E();
    },
  };
}
function Ee(o) {
  let e,
    t,
    a = o[1] && re(o);
  return {
    c() {
      a && a.c(), (e = S());
    },
    l(l) {
      a && a.l(l), (e = S());
    },
    m(l, r) {
      a && a.m(l, r), L(l, e, r), (t = !0);
    },
    p(l, [r]) {
      l[1]
        ? a
          ? (a.p(l, r), r & 2 && h(a, 1))
          : ((a = re(l)), a.c(), h(a, 1), a.m(e.parentNode, e))
        : a &&
          (q(),
          y(a, 1, 1, () => {
            a = null;
          }),
          D());
    },
    i(l) {
      t || (h(a), (t = !0));
    },
    o(l) {
      y(a), (t = !1);
    },
    d(l) {
      l && d(e), a && a.d(l);
    },
  };
}
function we(o, e, t) {
  let a;
  F(o, me, (i) => t(4, (a = i)));
  const l = [
    { url: "/", label: "Home" },
    { url: "/experience", label: "Experience" },
    { url: "/projects", label: "Projects" },
    { url: "/blog", label: "Blog" },
  ];
  let r = !1;
  J(() => {
    t(1, (r = !0));
  });
  let s = l.findIndex((i) => i.url == a.route.id);
  function f(i) {
    t(2, (s = i.srcElement.id));
  }
  return [l, r, s, f];
}
class Ie extends K {
  constructor(e) {
    super(), R(this, e, we, Ee, j, { navOptions: 0 });
  }
  get navOptions() {
    return this.$$.ctx[0];
  }
}
function ie(o) {
  let e,
    t = o[1],
    a,
    l,
    r,
    s =
      '<img src="icons/email.svg" alt="My Email" class="logo svelte-o4gv21"/>',
    f,
    i,
    u = '<img src="icons/github.svg" alt="GitHub" class="logo svelte-o4gv21"/>',
    n,
    c,
    b =
      '<img src="icons/linkedin.svg" alt="Linkedin" class="logo svelte-o4gv21"/>',
    E,
    _,
    k,
    N,
    W,
    w = oe(o);
  return {
    c() {
      (e = v("div")),
        w.c(),
        (a = H()),
        (l = v("div")),
        (r = v("a")),
        (r.innerHTML = s),
        (f = H()),
        (i = v("a")),
        (i.innerHTML = u),
        (n = H()),
        (c = v("a")),
        (c.innerHTML = b),
        this.h();
    },
    l($) {
      e = g($, "DIV", { class: !0 });
      var M = I(e);
      w.l(M), (a = T(M)), (l = g(M, "DIV", { class: !0 }));
      var V = I(l);
      (r = g(V, "A", { href: !0, class: !0, "data-svelte-h": !0 })),
        O(r) !== "svelte-fwa053" && (r.innerHTML = s),
        (f = T(V)),
        (i = g(V, "A", {
          href: !0,
          class: !0,
          target: !0,
          "data-svelte-h": !0,
        })),
        O(i) !== "svelte-1whtpga" && (i.innerHTML = u),
        (n = T(V)),
        (c = g(V, "A", {
          href: !0,
          class: !0,
          target: !0,
          "data-svelte-h": !0,
        })),
        O(c) !== "svelte-wk9o3c" && (c.innerHTML = b),
        V.forEach(d),
        M.forEach(d),
        this.h();
    },
    h() {
      m(r, "href", "mailto:hillbgh@gmail.com"),
        m(r, "class", "menu-item svelte-o4gv21"),
        m(i, "href", "https://github.com/Vespertine112"),
        m(i, "class", "menu-item svelte-o4gv21"),
        m(i, "target", "_blank"),
        m(c, "href", "https://www.linkedin.com/in/brayden-hill/"),
        m(c, "class", "menu-item svelte-o4gv21"),
        m(c, "target", "_blank"),
        m(l, "class", "menu svelte-o4gv21"),
        m(e, "class", "top-bar svelte-o4gv21");
    },
    m($, M) {
      L($, e, M),
        w.m(e, null),
        p(e, a),
        p(e, l),
        p(l, r),
        p(l, f),
        p(l, i),
        p(l, n),
        p(l, c),
        (k = !0),
        N ||
          ((W = [
            B(
              o[2].call(null, r, {
                content: "Email Me!",
                theme: "material",
                placement: "bottom",
              }),
            ),
            B(
              o[2].call(null, i, {
                content: "My Github",
                theme: "material",
                placement: "bottom",
              }),
            ),
            B(
              o[2].call(null, c, {
                content: "My LinkedIn",
                theme: "material",
                placement: "bottom",
              }),
            ),
          ]),
          (N = !0));
    },
    p($, M) {
      M & 2 && j(t, (t = $[1]))
        ? (q(), y(w, 1, 1, ce), D(), (w = oe($)), w.c(), h(w, 1), w.m(e, a))
        : w.p($, M);
    },
    i($) {
      k ||
        (h(w),
        G(() => {
          k &&
            (_ && _.end(1),
            (E = U(e, _e, { y: -50, duration: 1e3 })),
            E.start());
        }),
        (k = !0));
    },
    o($) {
      y(w), E && E.invalidate(), $ && (_ = ke(e, z, {})), (k = !1);
    },
    d($) {
      $ && d(e), w.d($), $ && _ && _.end(), (N = !1), fe(W);
    },
  };
}
function oe(o) {
  let e, t, a, l, r;
  return {
    c() {
      (e = v("div")), (t = C(o[1])), this.h();
    },
    l(s) {
      e = g(s, "DIV", { class: !0 });
      var f = I(e);
      (t = A(f, o[1])), f.forEach(d), this.h();
    },
    h() {
      m(e, "class", "pageName svelte-o4gv21");
    },
    m(s, f) {
      L(s, e, f),
        p(e, t),
        l ||
          ((r = [P(e, "mouseenter", o[3]), P(e, "mouseleave", o[4])]),
          (l = !0));
    },
    p(s, f) {
      f & 2 && pe(t, s[1]);
    },
    i(s) {
      a ||
        G(() => {
          (a = U(e, $e, { speed: 1 })), a.start();
        });
    },
    o: ce,
    d(s) {
      s && d(e), (l = !1), fe(r);
    },
  };
}
function Le(o) {
  let e,
    t = o[0] && ie(o);
  return {
    c() {
      t && t.c(), (e = S());
    },
    l(a) {
      t && t.l(a), (e = S());
    },
    m(a, l) {
      t && t.m(a, l), L(a, e, l);
    },
    p(a, [l]) {
      a[0]
        ? t
          ? (t.p(a, l), l & 1 && h(t, 1))
          : ((t = ie(a)), t.c(), h(t, 1), t.m(e.parentNode, e))
        : t &&
          (q(),
          y(t, 1, 1, () => {
            t = null;
          }),
          D());
    },
    i(a) {
      h(t);
    },
    o(a) {
      y(t);
    },
    d(a) {
      a && d(e), t && t.d(a);
    },
  };
}
function Me(o, e, t) {
  let a, l;
  F(o, le, (n) => t(5, (l = n)));
  let r = !1;
  J(() => {
    t(0, (r = !0));
  });
  function s(n, c) {
    const b = ye(n, c);
    return {
      update(E) {
        b.setProps(E);
      },
      destroy() {
        b.destroy();
      },
    };
  }
  let f = "";
  le.subscribe((n) => {
    n != "Vespertine" && (f = n);
  });
  function i() {
    ae("Vespertine");
  }
  function u() {
    ae(f);
  }
  return (
    (o.$$.update = () => {
      o.$$.dirty & 32 && t(1, (a = `{ ${l} }`));
    }),
    [r, a, s, i, u, l]
  );
}
class Ne extends K {
  constructor(e) {
    super(), R(this, e, Me, Le, j, {});
  }
}
function ue(o) {
  let e, t;
  const a = o[2].default,
    l = he(a, o, o[1], null);
  return {
    c() {
      (e = v("div")), l && l.c(), this.h();
    },
    l(r) {
      e = g(r, "DIV", { class: !0 });
      var s = I(e);
      l && l.l(s), s.forEach(d), this.h();
    },
    h() {
      m(e, "class", "slotted svelte-1auhonv");
    },
    m(r, s) {
      L(r, e, s), l && l.m(e, null), (t = !0);
    },
    p(r, s) {
      l &&
        l.p &&
        (!t || s & 2) &&
        ve(l, a, r, r[1], t ? be(a, r[1], s, null) : ge(r[1]), null);
    },
    i(r) {
      t || (h(l, r), (t = !0));
    },
    o(r) {
      y(l, r), (t = !1);
    },
    d(r) {
      r && d(e), l && l.d(r);
    },
  };
}
function Ve(o) {
  let e, t, a, l, r, s, f, i;
  (t = new Ne({})), (s = new Ie({}));
  let u = o[0] && ue(o);
  return {
    c() {
      (e = v("div")),
        Y(t.$$.fragment),
        (a = H()),
        (l = v("div")),
        (r = v("div")),
        Y(s.$$.fragment),
        (f = H()),
        u && u.c(),
        this.h();
    },
    l(n) {
      e = g(n, "DIV", { class: !0 });
      var c = I(e);
      Z(t.$$.fragment, c), (a = T(c)), (l = g(c, "DIV", { class: !0 }));
      var b = I(l);
      r = g(b, "DIV", { class: !0 });
      var E = I(r);
      Z(s.$$.fragment, E),
        E.forEach(d),
        (f = T(b)),
        u && u.l(b),
        b.forEach(d),
        c.forEach(d),
        this.h();
    },
    h() {
      m(r, "class", "navbar svelte-1auhonv"),
        m(l, "class", "bodyColumns svelte-1auhonv"),
        m(e, "class", "pageWrapper svelte-1auhonv");
    },
    m(n, c) {
      L(n, e, c),
        x(t, e, null),
        p(e, a),
        p(e, l),
        p(l, r),
        x(s, r, null),
        p(l, f),
        u && u.m(l, null),
        (i = !0);
    },
    p(n, [c]) {
      n[0]
        ? u
          ? (u.p(n, c), c & 1 && h(u, 1))
          : ((u = ue(n)), u.c(), h(u, 1), u.m(l, null))
        : u &&
          (q(),
          y(u, 1, 1, () => {
            u = null;
          }),
          D());
    },
    i(n) {
      i || (h(t.$$.fragment, n), h(s.$$.fragment, n), h(u), (i = !0));
    },
    o(n) {
      y(t.$$.fragment, n), y(s.$$.fragment, n), y(u), (i = !1);
    },
    d(n) {
      n && d(e), ee(t), ee(s), u && u.d();
    },
  };
}
function He(o, e, t) {
  let a;
  F(o, me, (f) => t(3, (a = f)));
  let { $$slots: l = {}, $$scope: r } = e,
    s = !1;
  return (
    J(() => {
      t(0, (s = !0));
    }),
    a.url,
    (o.$$set = (f) => {
      "$$scope" in f && t(1, (r = f.$$scope));
    }),
    [s, r, l]
  );
}
class Ge extends K {
  constructor(e) {
    super(), R(this, e, He, Ve, j, {});
  }
}
export { Ge as component };
