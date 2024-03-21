import {
  s as xe,
  l as he,
  i as W,
  f as y,
  o as Te,
  e as p,
  a as E,
  c as v,
  b as I,
  p as Ve,
  g as k,
  u as _,
  h as a,
  w as ne,
  x as ke,
  t as C,
  d as P,
  y as me,
  q as Se,
  n as pe,
} from "../chunks/scheduler.bALzG6-i.js";
import {
  S as Ce,
  i as Pe,
  a as T,
  t as G,
  c as De,
  g as ze,
  b as Me,
  d as ve,
} from "../chunks/index.8Nsucz2u.js";
import { e as F } from "../chunks/each.uvXnbnhl.js";
import { u as Re, t as Ne } from "../chunks/stores.d2mhU7YY.js";
import { f as He, b as ge } from "../chunks/index.V82jZZf0.js";
/* empty css                         */ import {
  c as Le,
  b as _e,
} from "../chunks/standards.jAja-OFF.js";
function ye(c, e, i) {
  const t = c.slice();
  return (t[3] = e[i]), t;
}
function be(c, e, i) {
  const t = c.slice();
  return (t[6] = e[i]), t;
}
function Ie(c) {
  let e,
    i,
    t = "Professional Experience",
    l,
    o,
    b,
    g,
    D,
    w,
    z = F(c[1]),
    s = [];
  for (let n = 0; n < z.length; n += 1) s[n] = Ee(ye(c, z, n));
  const L = (n) =>
    G(s[n], 1, 1, () => {
      s[n] = null;
    });
  return {
    c() {
      (e = p("div")),
        (i = p("h1")),
        (i.textContent = t),
        (l = E()),
        (o = p("hr")),
        (b = E()),
        (g = p("div"));
      for (let n = 0; n < s.length; n += 1) s[n].c();
      this.h();
    },
    l(n) {
      e = v(n, "DIV", { class: !0 });
      var f = I(e);
      (i = v(f, "H1", { class: !0, "data-svelte-h": !0 })),
        Ve(i) !== "svelte-14aozv9" && (i.textContent = t),
        (l = k(f)),
        (o = v(f, "HR", { class: !0 })),
        (b = k(f)),
        (g = v(f, "DIV", { class: !0 }));
      var r = I(g);
      for (let M = 0; M < s.length; M += 1) s[M].l(r);
      r.forEach(y), f.forEach(y), this.h();
    },
    h() {
      _(i, "class", "svelte-do09z7"),
        _(o, "class", "svelte-do09z7"),
        _(g, "class", "experiences svelte-do09z7"),
        _(e, "class", "cardWrapper");
    },
    m(n, f) {
      W(n, e, f), a(e, i), a(e, l), a(e, o), a(e, b), a(e, g);
      for (let r = 0; r < s.length; r += 1) s[r] && s[r].m(g, null);
      w = !0;
    },
    p(n, f) {
      if (f & 2) {
        z = F(n[1]);
        let r;
        for (r = 0; r < z.length; r += 1) {
          const M = ye(n, z, r);
          s[r]
            ? (s[r].p(M, f), T(s[r], 1))
            : ((s[r] = Ee(M)), s[r].c(), T(s[r], 1), s[r].m(g, null));
        }
        for (ze(), r = z.length; r < s.length; r += 1) L(r);
        De();
      }
    },
    i(n) {
      if (!w) {
        for (let f = 0; f < z.length; f += 1) T(s[f]);
        n &&
          (D ||
            ne(() => {
              (D = Me(e, He, Le)), D.start();
            })),
          (w = !0);
      }
    },
    o(n) {
      s = s.filter(Boolean);
      for (let f = 0; f < s.length; f += 1) G(s[f]);
      w = !1;
    },
    d(n) {
      n && y(e), ke(s, n);
    },
  };
}
function we(c) {
  let e,
    i = c[6] + "",
    t,
    l;
  return {
    c() {
      (e = p("li")), (t = C(i));
    },
    l(o) {
      e = v(o, "LI", {});
      var b = I(e);
      (t = P(b, i)), b.forEach(y);
    },
    m(o, b) {
      W(o, e, b), a(e, t);
    },
    p: pe,
    i(o) {
      l ||
        ne(() => {
          (l = Me(e, Ne, { speed: 10 })), l.start();
        });
    },
    o: pe,
    d(o) {
      o && y(e);
    },
  };
}
function Ee(c) {
  let e,
    i,
    t,
    l,
    o,
    b,
    g,
    D,
    w,
    z = c[3].name + "",
    s,
    L,
    n,
    f = c[3].elapsedTime + "",
    r,
    M,
    V,
    ie = c[3].jobTitle + "",
    X,
    J,
    oe = c[3].technologies + "",
    O,
    K,
    U,
    Q,
    R,
    se = c[3].description + "",
    Y,
    Z,
    j,
    $,
    N,
    H,
    ee,
    A,
    te,
    q,
    S = F(c[3].listNotes),
    m = [];
  for (let u = 0; u < S.length; u += 1) m[u] = we(be(c, S, u));
  return {
    c() {
      (e = p("div")),
        (i = p("div")),
        (t = p("img")),
        (b = E()),
        (g = p("div")),
        (D = p("div")),
        (w = p("a")),
        (s = C(z)),
        (L = E()),
        (n = p("div")),
        (r = C(f)),
        (M = E()),
        (V = p("div")),
        (X = C(ie)),
        (J = C(" - ")),
        (O = C(oe)),
        (K = E()),
        (U = p("hr")),
        (Q = E()),
        (R = p("div")),
        (Y = C(se)),
        (Z = E()),
        (j = p("hr")),
        ($ = E()),
        (N = p("div")),
        (H = p("ul"));
      for (let u = 0; u < m.length; u += 1) m[u].c();
      (ee = E()), (A = p("hr")), (te = E()), this.h();
    },
    l(u) {
      e = v(u, "DIV", { class: !0 });
      var d = I(e);
      i = v(d, "DIV", {});
      var h = I(i);
      (t = v(h, "IMG", { class: !0, style: !0, src: !0, alt: !0 })),
        h.forEach(y),
        (b = k(d)),
        (g = v(d, "DIV", { class: !0 }));
      var x = I(g);
      D = v(x, "DIV", { class: !0 });
      var le = I(D);
      w = v(le, "A", { style: !0, href: !0 });
      var re = I(w);
      (s = P(re, z)),
        re.forEach(y),
        le.forEach(y),
        (L = k(x)),
        (n = v(x, "DIV", { class: !0 }));
      var ce = I(n);
      (r = P(ce, f)),
        ce.forEach(y),
        (M = k(x)),
        (V = v(x, "DIV", { class: !0 }));
      var B = I(V);
      (X = P(B, ie)),
        (J = P(B, " - ")),
        (O = P(B, oe)),
        B.forEach(y),
        x.forEach(y),
        (K = k(d)),
        (U = v(d, "HR", { class: !0 })),
        (Q = k(d)),
        (R = v(d, "DIV", { class: !0 }));
      var de = I(R);
      (Y = P(de, se)),
        de.forEach(y),
        (Z = k(d)),
        (j = v(d, "HR", { class: !0 })),
        ($ = k(d)),
        (N = v(d, "DIV", { class: !0 }));
      var ue = I(N);
      H = v(ue, "UL", {});
      var fe = I(H);
      for (let ae = 0; ae < m.length; ae += 1) m[ae].l(fe);
      fe.forEach(y),
        ue.forEach(y),
        (ee = k(d)),
        (A = v(d, "HR", { class: !0 })),
        (te = k(d)),
        d.forEach(y),
        this.h();
    },
    h() {
      _(t, "class", "companyLogo svelte-do09z7"),
        me(t, "background-color", "white"),
        Se(t.src, (l = c[3].logo)) || _(t, "src", l),
        _(t, "alt", ""),
        me(w, "color", "white"),
        _(w, "href", c[3].url),
        _(D, "class", "lineLabel"),
        _(n, "class", "lineLabel"),
        _(V, "class", "lineLabel"),
        _(g, "class", "experienceTime svelte-do09z7"),
        _(U, "class", "mediumHr svelte-do09z7"),
        _(R, "class", "experienceDescription svelte-do09z7"),
        _(j, "class", "smallHr svelte-do09z7"),
        _(N, "class", "experienceNotes"),
        _(A, "class", "svelte-do09z7"),
        _(e, "class", "experienceWrapper svelte-do09z7");
    },
    m(u, d) {
      W(u, e, d),
        a(e, i),
        a(i, t),
        a(e, b),
        a(e, g),
        a(g, D),
        a(D, w),
        a(w, s),
        a(g, L),
        a(g, n),
        a(n, r),
        a(g, M),
        a(g, V),
        a(V, X),
        a(V, J),
        a(V, O),
        a(e, K),
        a(e, U),
        a(e, Q),
        a(e, R),
        a(R, Y),
        a(e, Z),
        a(e, j),
        a(e, $),
        a(e, N),
        a(N, H);
      for (let h = 0; h < m.length; h += 1) m[h] && m[h].m(H, null);
      a(e, ee), a(e, A), a(e, te), (q = !0);
    },
    p(u, d) {
      if (d & 2) {
        S = F(u[3].listNotes);
        let h;
        for (h = 0; h < S.length; h += 1) {
          const x = be(u, S, h);
          m[h]
            ? (m[h].p(x, d), T(m[h], 1))
            : ((m[h] = we(x)), m[h].c(), T(m[h], 1), m[h].m(H, null));
        }
        for (; h < m.length; h += 1) m[h].d(1);
        m.length = S.length;
      }
    },
    i(u) {
      if (!q) {
        u &&
          ne(() => {
            q && (o || (o = ve(i, ge, _e, !0)), o.run(1));
          });
        for (let d = 0; d < S.length; d += 1) T(m[d]);
        q = !0;
      }
    },
    o(u) {
      u && (o || (o = ve(i, ge, _e, !1)), o.run(0)), (q = !1);
    },
    d(u) {
      u && y(e), u && o && o.end(), ke(m, u);
    },
  };
}
function qe(c) {
  let e,
    i,
    t = c[0] && Ie(c);
  return {
    c() {
      t && t.c(), (e = he());
    },
    l(l) {
      t && t.l(l), (e = he());
    },
    m(l, o) {
      t && t.m(l, o), W(l, e, o), (i = !0);
    },
    p(l, [o]) {
      l[0]
        ? t
          ? (t.p(l, o), o & 1 && T(t, 1))
          : ((t = Ie(l)), t.c(), T(t, 1), t.m(e.parentNode, e))
        : t &&
          (ze(),
          G(t, 1, 1, () => {
            t = null;
          }),
          De());
    },
    i(l) {
      i || (T(t), (i = !0));
    },
    o(l) {
      G(t), (i = !1);
    },
    d(l) {
      l && y(e), t && t.d(l);
    },
  };
}
function Ue(c, e, i) {
  let { data: t } = e,
    l = !1;
  Te(() => {
    i(0, (l = !0));
  }),
    Re("My Experience");
  const o = [
    {
      name: "Global Vinyl Solutions",
      logo: "/icons/GVS.png",
      url: "sei.com",
      jobTitle: "Junior Full-Stack Developer",
      technologies: "Electron, Angular, MongoDB, Node",
      elapsedTime: "May 2022 - Present",
      description:
        "At GVS, I played a pivotal role in the development and enhancement of our core CRM product. I was responsible for designing, implementing, and maintaining critical functionalities, ensuring the seamless operation of the software. In addition, I successfully identified and addressed data pipeline issues, leading to a substantial reduction in request size and a significant boost in overall performance compared to previous methods. I was able to create the user experience and interface for various components, with a specific focus on PDF report generation and dynamic cost presentation for end customers, both internally within the program and on invoices. Lastly, I spearheaded the implementation of automatic program updates, complete with a user-friendly interface, accessible patch notes, robust backend processes, release channels, versioning mechanisms, and other essential features, contributing to the overall efficiency and user satisfaction of the software.",
      listNotes: [
        "Designed, implemented, and maintained core functionality and features for our core CRM product.",
        "Discovered and fixed data pipeline issues which resulted in significant reduction in request size and a large increase in performance over previous methods.",
        "Created UX/UI and all logic for many components, including all PDF report generation and the associated dynamic cost for the end customer in the program internally and in invoices.",
        "Implemented automatic program updates with UX/UI, viewable patch notes, backend implementation, release channels, versioning, and more.",
      ],
    },
    {
      name: "SEI Consulting",
      logo: "/icons/SEI.png",
      url: "https://globalvinylsolutions.com/",
      jobTitle: "Software Engineering Intern",
      technologies: "Python, Powershell, Bash",
      elapsedTime: "May 2021 - May 2022",
      description:
        "During my tenure at the SEI, I worked on many projects enhancing operational efficiency through the development and design of inventory tracking scripts. These scripts were core functionality in monitoring the allocation of internal technology assets to employees, ensuring streamlined tracking processes. Additionally, I actively collaborated on, constructued, and contributed to the implementation of numerous RMM (Remote Monitoring and Management) scripts. This involvement extended to managing assets and collecting remote data, showcasing my commitment to optimizing resource utilization. I demonstrated proficiency in automation by creating various helper scripts. These scripts facilitated seamless data management and automation processes, enabling efficient outbound interactions with platforms such as Dropbox, SharePoint, and more. Through these initiatives, I consistently contributed to the technological infrastructure and operational workflows, showcasing my versatility and dedication to advancing the organization's goals.",
      listNotes: [
        "Built and designed inventory tracking scripts to track the internal technology assets allocated to employees.",
        "Collaborated on, and assisted with implementation of many RMM scripts used to manage assets & gather remote data.",
        "Created many helper scripts to assist data management and automation with outbound interactions to Dropbox, SharePoint, and more.",
      ],
    },
  ];
  return (
    (c.$$set = (b) => {
      "data" in b && i(2, (t = b.data));
    }),
    [l, o, t]
  );
}
class Je extends Ce {
  constructor(e) {
    super(), Pe(this, e, Ue, qe, xe, { data: 2 });
  }
}
export { Je as component };
