var H = "top",
  X = "bottom",
  Y = "right",
  N = "left",
  mt = "auto",
  Ie = [H, X, Y, N],
  Ae = "start",
  ke = "end",
  lr = "clippingParents",
  Ut = "viewport",
  Pe = "popper",
  dr = "reference",
  Et = Ie.reduce(function (e, t) {
    return e.concat([t + "-" + Ae, t + "-" + ke]);
  }, []),
  Ft = [].concat(Ie, [mt]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Ae, t + "-" + ke]);
  }, []),
  vr = "beforeRead",
  mr = "read",
  hr = "afterRead",
  gr = "beforeMain",
  yr = "main",
  br = "afterMain",
  wr = "beforeWrite",
  Or = "write",
  xr = "afterWrite",
  Ar = [vr, mr, hr, gr, yr, br, wr, Or, xr];
function te(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function F(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function he(e) {
  var t = F(e).Element;
  return e instanceof t || e instanceof Element;
}
function z(e) {
  var t = F(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ht(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = F(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Er(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var i = t.styles[r] || {},
      o = t.attributes[r] || {},
      s = t.elements[r];
    !z(s) ||
      !te(s) ||
      (Object.assign(s.style, i),
      Object.keys(o).forEach(function (f) {
        var c = o[f];
        c === !1 ? s.removeAttribute(f) : s.setAttribute(f, c === !0 ? "" : c);
      }));
  });
}
function Tr(e) {
  var t = e.state,
    r = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (i) {
        var o = t.elements[i],
          s = t.attributes[i] || {},
          f = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : r[i]),
          c = f.reduce(function (u, l) {
            return (u[l] = ""), u;
          }, {});
        !z(o) ||
          !te(o) ||
          (Object.assign(o.style, c),
          Object.keys(s).forEach(function (u) {
            o.removeAttribute(u);
          }));
      });
    }
  );
}
const qt = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Er,
  effect: Tr,
  requires: ["computeStyles"],
};
function ee(e) {
  return e.split("-")[0];
}
var me = Math.max,
  et = Math.min,
  Ee = Math.round;
function pt() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function zt() {
  return !/^((?!chrome|android).)*safari/i.test(pt());
}
function Te(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var i = e.getBoundingClientRect(),
    o = 1,
    s = 1;
  t &&
    z(e) &&
    ((o = (e.offsetWidth > 0 && Ee(i.width) / e.offsetWidth) || 1),
    (s = (e.offsetHeight > 0 && Ee(i.height) / e.offsetHeight) || 1));
  var f = he(e) ? F(e) : window,
    c = f.visualViewport,
    u = !zt() && r,
    l = (i.left + (u && c ? c.offsetLeft : 0)) / o,
    p = (i.top + (u && c ? c.offsetTop : 0)) / s,
    b = i.width / o,
    x = i.height / s;
  return {
    width: b,
    height: x,
    top: p,
    right: l + b,
    bottom: p + x,
    left: l,
    x: l,
    y: p,
  };
}
function gt(e) {
  var t = Te(e),
    r = e.offsetWidth,
    i = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - i) <= 1 && (i = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: i }
  );
}
function Xt(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && ht(r)) {
    var i = t;
    do {
      if (i && e.isSameNode(i)) return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function ae(e) {
  return F(e).getComputedStyle(e);
}
function Dr(e) {
  return ["table", "td", "th"].indexOf(te(e)) >= 0;
}
function fe(e) {
  return ((he(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function rt(e) {
  return te(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (ht(e) ? e.host : null) || fe(e);
}
function Tt(e) {
  return !z(e) || ae(e).position === "fixed" ? null : e.offsetParent;
}
function Cr(e) {
  var t = /firefox/i.test(pt()),
    r = /Trident/i.test(pt());
  if (r && z(e)) {
    var i = ae(e);
    if (i.position === "fixed") return null;
  }
  var o = rt(e);
  for (ht(o) && (o = o.host); z(o) && ["html", "body"].indexOf(te(o)) < 0; ) {
    var s = ae(o);
    if (
      s.transform !== "none" ||
      s.perspective !== "none" ||
      s.contain === "paint" ||
      ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
      (t && s.willChange === "filter") ||
      (t && s.filter && s.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function He(e) {
  for (var t = F(e), r = Tt(e); r && Dr(r) && ae(r).position === "static"; )
    r = Tt(r);
  return r &&
    (te(r) === "html" || (te(r) === "body" && ae(r).position === "static"))
    ? t
    : r || Cr(e) || t;
}
function yt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Be(e, t, r) {
  return me(e, et(t, r));
}
function Lr(e, t, r) {
  var i = Be(e, t, r);
  return i > r ? r : i;
}
function Yt() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function _t(e) {
  return Object.assign({}, Yt(), e);
}
function Gt(e, t) {
  return t.reduce(function (r, i) {
    return (r[i] = e), r;
  }, {});
}
var Sr = function (t, r) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, r.rects, { placement: r.placement }))
        : t),
    _t(typeof t != "number" ? t : Gt(t, Ie))
  );
};
function Rr(e) {
  var t,
    r = e.state,
    i = e.name,
    o = e.options,
    s = r.elements.arrow,
    f = r.modifiersData.popperOffsets,
    c = ee(r.placement),
    u = yt(c),
    l = [N, Y].indexOf(c) >= 0,
    p = l ? "height" : "width";
  if (!(!s || !f)) {
    var b = Sr(o.padding, r),
      x = gt(s),
      h = u === "y" ? H : N,
      w = u === "y" ? X : Y,
      g =
        r.rects.reference[p] + r.rects.reference[u] - f[u] - r.rects.popper[p],
      y = f[u] - r.rects.reference[u],
      E = He(s),
      D = E ? (u === "y" ? E.clientHeight || 0 : E.clientWidth || 0) : 0,
      L = g / 2 - y / 2,
      n = b[h],
      A = D - x[p] - b[w],
      v = D / 2 - x[p] / 2 + L,
      C = Be(n, v, A),
      B = u;
    r.modifiersData[i] = ((t = {}), (t[B] = C), (t.centerOffset = C - v), t);
  }
}
function Mr(e) {
  var t = e.state,
    r = e.options,
    i = r.element,
    o = i === void 0 ? "[data-popper-arrow]" : i;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (Xt(t.elements.popper, o) && (t.elements.arrow = o)));
}
const Pr = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Rr,
  effect: Mr,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function De(e) {
  return e.split("-")[1];
}
var Br = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function jr(e, t) {
  var r = e.x,
    i = e.y,
    o = t.devicePixelRatio || 1;
  return { x: Ee(r * o) / o || 0, y: Ee(i * o) / o || 0 };
}
function Dt(e) {
  var t,
    r = e.popper,
    i = e.popperRect,
    o = e.placement,
    s = e.variation,
    f = e.offsets,
    c = e.position,
    u = e.gpuAcceleration,
    l = e.adaptive,
    p = e.roundOffsets,
    b = e.isFixed,
    x = f.x,
    h = x === void 0 ? 0 : x,
    w = f.y,
    g = w === void 0 ? 0 : w,
    y = typeof p == "function" ? p({ x: h, y: g }) : { x: h, y: g };
  (h = y.x), (g = y.y);
  var E = f.hasOwnProperty("x"),
    D = f.hasOwnProperty("y"),
    L = N,
    n = H,
    A = window;
  if (l) {
    var v = He(r),
      C = "clientHeight",
      B = "clientWidth";
    if (
      (v === F(r) &&
        ((v = fe(r)),
        ae(v).position !== "static" &&
          c === "absolute" &&
          ((C = "scrollHeight"), (B = "scrollWidth"))),
      (v = v),
      o === H || ((o === N || o === Y) && s === ke))
    ) {
      n = X;
      var P = b && v === A && A.visualViewport ? A.visualViewport.height : v[C];
      (g -= P - i.height), (g *= u ? 1 : -1);
    }
    if (o === N || ((o === H || o === X) && s === ke)) {
      L = Y;
      var R = b && v === A && A.visualViewport ? A.visualViewport.width : v[B];
      (h -= R - i.width), (h *= u ? 1 : -1);
    }
  }
  var j = Object.assign({ position: c }, l && Br),
    M = p === !0 ? jr({ x: h, y: g }, F(r)) : { x: h, y: g };
  if (((h = M.x), (g = M.y), u)) {
    var S;
    return Object.assign(
      {},
      j,
      ((S = {}),
      (S[n] = D ? "0" : ""),
      (S[L] = E ? "0" : ""),
      (S.transform =
        (A.devicePixelRatio || 1) <= 1
          ? "translate(" + h + "px, " + g + "px)"
          : "translate3d(" + h + "px, " + g + "px, 0)"),
      S),
    );
  }
  return Object.assign(
    {},
    j,
    ((t = {}),
    (t[n] = D ? g + "px" : ""),
    (t[L] = E ? h + "px" : ""),
    (t.transform = ""),
    t),
  );
}
function $r(e) {
  var t = e.state,
    r = e.options,
    i = r.gpuAcceleration,
    o = i === void 0 ? !0 : i,
    s = r.adaptive,
    f = s === void 0 ? !0 : s,
    c = r.roundOffsets,
    u = c === void 0 ? !0 : c,
    l = {
      placement: ee(t.placement),
      variation: De(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Dt(
        Object.assign({}, l, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: f,
          roundOffsets: u,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Dt(
          Object.assign({}, l, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: u,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const kr = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: $r,
  data: {},
};
var Je = { passive: !0 };
function Vr(e) {
  var t = e.state,
    r = e.instance,
    i = e.options,
    o = i.scroll,
    s = o === void 0 ? !0 : o,
    f = i.resize,
    c = f === void 0 ? !0 : f,
    u = F(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    s &&
      l.forEach(function (p) {
        p.addEventListener("scroll", r.update, Je);
      }),
    c && u.addEventListener("resize", r.update, Je),
    function () {
      s &&
        l.forEach(function (p) {
          p.removeEventListener("scroll", r.update, Je);
        }),
        c && u.removeEventListener("resize", r.update, Je);
    }
  );
}
const Ir = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Vr,
  data: {},
};
var Hr = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ze(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Hr[t];
  });
}
var Nr = { start: "end", end: "start" };
function Ct(e) {
  return e.replace(/start|end/g, function (t) {
    return Nr[t];
  });
}
function bt(e) {
  var t = F(e),
    r = t.pageXOffset,
    i = t.pageYOffset;
  return { scrollLeft: r, scrollTop: i };
}
function wt(e) {
  return Te(fe(e)).left + bt(e).scrollLeft;
}
function Wr(e, t) {
  var r = F(e),
    i = fe(e),
    o = r.visualViewport,
    s = i.clientWidth,
    f = i.clientHeight,
    c = 0,
    u = 0;
  if (o) {
    (s = o.width), (f = o.height);
    var l = zt();
    (l || (!l && t === "fixed")) && ((c = o.offsetLeft), (u = o.offsetTop));
  }
  return { width: s, height: f, x: c + wt(e), y: u };
}
function Ur(e) {
  var t,
    r = fe(e),
    i = bt(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    s = me(
      r.scrollWidth,
      r.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0,
    ),
    f = me(
      r.scrollHeight,
      r.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0,
    ),
    c = -i.scrollLeft + wt(e),
    u = -i.scrollTop;
  return (
    ae(o || r).direction === "rtl" &&
      (c += me(r.clientWidth, o ? o.clientWidth : 0) - s),
    { width: s, height: f, x: c, y: u }
  );
}
function Ot(e) {
  var t = ae(e),
    r = t.overflow,
    i = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + i);
}
function Kt(e) {
  return ["html", "body", "#document"].indexOf(te(e)) >= 0
    ? e.ownerDocument.body
    : z(e) && Ot(e)
      ? e
      : Kt(rt(e));
}
function je(e, t) {
  var r;
  t === void 0 && (t = []);
  var i = Kt(e),
    o = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = F(i),
    f = o ? [s].concat(s.visualViewport || [], Ot(i) ? i : []) : i,
    c = t.concat(f);
  return o ? c : c.concat(je(rt(f)));
}
function lt(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Fr(e, t) {
  var r = Te(e, !1, t === "fixed");
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function Lt(e, t, r) {
  return t === Ut ? lt(Wr(e, r)) : he(t) ? Fr(t, r) : lt(Ur(fe(e)));
}
function qr(e) {
  var t = je(rt(e)),
    r = ["absolute", "fixed"].indexOf(ae(e).position) >= 0,
    i = r && z(e) ? He(e) : e;
  return he(i)
    ? t.filter(function (o) {
        return he(o) && Xt(o, i) && te(o) !== "body";
      })
    : [];
}
function zr(e, t, r, i) {
  var o = t === "clippingParents" ? qr(e) : [].concat(t),
    s = [].concat(o, [r]),
    f = s[0],
    c = s.reduce(
      function (u, l) {
        var p = Lt(e, l, i);
        return (
          (u.top = me(p.top, u.top)),
          (u.right = et(p.right, u.right)),
          (u.bottom = et(p.bottom, u.bottom)),
          (u.left = me(p.left, u.left)),
          u
        );
      },
      Lt(e, f, i),
    );
  return (
    (c.width = c.right - c.left),
    (c.height = c.bottom - c.top),
    (c.x = c.left),
    (c.y = c.top),
    c
  );
}
function Jt(e) {
  var t = e.reference,
    r = e.element,
    i = e.placement,
    o = i ? ee(i) : null,
    s = i ? De(i) : null,
    f = t.x + t.width / 2 - r.width / 2,
    c = t.y + t.height / 2 - r.height / 2,
    u;
  switch (o) {
    case H:
      u = { x: f, y: t.y - r.height };
      break;
    case X:
      u = { x: f, y: t.y + t.height };
      break;
    case Y:
      u = { x: t.x + t.width, y: c };
      break;
    case N:
      u = { x: t.x - r.width, y: c };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var l = o ? yt(o) : null;
  if (l != null) {
    var p = l === "y" ? "height" : "width";
    switch (s) {
      case Ae:
        u[l] = u[l] - (t[p] / 2 - r[p] / 2);
        break;
      case ke:
        u[l] = u[l] + (t[p] / 2 - r[p] / 2);
        break;
    }
  }
  return u;
}
function Ve(e, t) {
  t === void 0 && (t = {});
  var r = t,
    i = r.placement,
    o = i === void 0 ? e.placement : i,
    s = r.strategy,
    f = s === void 0 ? e.strategy : s,
    c = r.boundary,
    u = c === void 0 ? lr : c,
    l = r.rootBoundary,
    p = l === void 0 ? Ut : l,
    b = r.elementContext,
    x = b === void 0 ? Pe : b,
    h = r.altBoundary,
    w = h === void 0 ? !1 : h,
    g = r.padding,
    y = g === void 0 ? 0 : g,
    E = _t(typeof y != "number" ? y : Gt(y, Ie)),
    D = x === Pe ? dr : Pe,
    L = e.rects.popper,
    n = e.elements[w ? D : x],
    A = zr(he(n) ? n : n.contextElement || fe(e.elements.popper), u, p, f),
    v = Te(e.elements.reference),
    C = Jt({ reference: v, element: L, strategy: "absolute", placement: o }),
    B = lt(Object.assign({}, L, C)),
    P = x === Pe ? B : v,
    R = {
      top: A.top - P.top + E.top,
      bottom: P.bottom - A.bottom + E.bottom,
      left: A.left - P.left + E.left,
      right: P.right - A.right + E.right,
    },
    j = e.modifiersData.offset;
  if (x === Pe && j) {
    var M = j[o];
    Object.keys(R).forEach(function (S) {
      var W = [Y, X].indexOf(S) >= 0 ? 1 : -1,
        U = [H, X].indexOf(S) >= 0 ? "y" : "x";
      R[S] += M[U] * W;
    });
  }
  return R;
}
function Xr(e, t) {
  t === void 0 && (t = {});
  var r = t,
    i = r.placement,
    o = r.boundary,
    s = r.rootBoundary,
    f = r.padding,
    c = r.flipVariations,
    u = r.allowedAutoPlacements,
    l = u === void 0 ? Ft : u,
    p = De(i),
    b = p
      ? c
        ? Et
        : Et.filter(function (w) {
            return De(w) === p;
          })
      : Ie,
    x = b.filter(function (w) {
      return l.indexOf(w) >= 0;
    });
  x.length === 0 && (x = b);
  var h = x.reduce(function (w, g) {
    return (
      (w[g] = Ve(e, { placement: g, boundary: o, rootBoundary: s, padding: f })[
        ee(g)
      ]),
      w
    );
  }, {});
  return Object.keys(h).sort(function (w, g) {
    return h[w] - h[g];
  });
}
function Yr(e) {
  if (ee(e) === mt) return [];
  var t = Ze(e);
  return [Ct(e), t, Ct(t)];
}
function _r(e) {
  var t = e.state,
    r = e.options,
    i = e.name;
  if (!t.modifiersData[i]._skip) {
    for (
      var o = r.mainAxis,
        s = o === void 0 ? !0 : o,
        f = r.altAxis,
        c = f === void 0 ? !0 : f,
        u = r.fallbackPlacements,
        l = r.padding,
        p = r.boundary,
        b = r.rootBoundary,
        x = r.altBoundary,
        h = r.flipVariations,
        w = h === void 0 ? !0 : h,
        g = r.allowedAutoPlacements,
        y = t.options.placement,
        E = ee(y),
        D = E === y,
        L = u || (D || !w ? [Ze(y)] : Yr(y)),
        n = [y].concat(L).reduce(function (re, _) {
          return re.concat(
            ee(_) === mt
              ? Xr(t, {
                  placement: _,
                  boundary: p,
                  rootBoundary: b,
                  padding: l,
                  flipVariations: w,
                  allowedAutoPlacements: g,
                })
              : _,
          );
        }, []),
        A = t.rects.reference,
        v = t.rects.popper,
        C = new Map(),
        B = !0,
        P = n[0],
        R = 0;
      R < n.length;
      R++
    ) {
      var j = n[R],
        M = ee(j),
        S = De(j) === Ae,
        W = [H, X].indexOf(M) >= 0,
        U = W ? "width" : "height",
        k = Ve(t, {
          placement: j,
          boundary: p,
          rootBoundary: b,
          altBoundary: x,
          padding: l,
        }),
        V = W ? (S ? Y : N) : S ? X : H;
      A[U] > v[U] && (V = Ze(V));
      var $ = Ze(V),
        K = [];
      if (
        (s && K.push(k[M] <= 0),
        c && K.push(k[V] <= 0, k[$] <= 0),
        K.every(function (re) {
          return re;
        }))
      ) {
        (P = j), (B = !1);
        break;
      }
      C.set(j, K);
    }
    if (B)
      for (
        var J = w ? 3 : 1,
          ce = function (_) {
            var ne = n.find(function (ge) {
              var ie = C.get(ge);
              if (ie)
                return ie.slice(0, _).every(function (ye) {
                  return ye;
                });
            });
            if (ne) return (P = ne), "break";
          },
          Q = J;
        Q > 0;
        Q--
      ) {
        var pe = ce(Q);
        if (pe === "break") break;
      }
    t.placement !== P &&
      ((t.modifiersData[i]._skip = !0), (t.placement = P), (t.reset = !0));
  }
}
const Gr = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: _r,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function St(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  );
}
function Rt(e) {
  return [H, Y, X, N].some(function (t) {
    return e[t] >= 0;
  });
}
function Kr(e) {
  var t = e.state,
    r = e.name,
    i = t.rects.reference,
    o = t.rects.popper,
    s = t.modifiersData.preventOverflow,
    f = Ve(t, { elementContext: "reference" }),
    c = Ve(t, { altBoundary: !0 }),
    u = St(f, i),
    l = St(c, o, s),
    p = Rt(u),
    b = Rt(l);
  (t.modifiersData[r] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: l,
    isReferenceHidden: p,
    hasPopperEscaped: b,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": p,
      "data-popper-escaped": b,
    }));
}
const Jr = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Kr,
};
function Qr(e, t, r) {
  var i = ee(e),
    o = [N, H].indexOf(i) >= 0 ? -1 : 1,
    s = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    f = s[0],
    c = s[1];
  return (
    (f = f || 0),
    (c = (c || 0) * o),
    [N, Y].indexOf(i) >= 0 ? { x: c, y: f } : { x: f, y: c }
  );
}
function Zr(e) {
  var t = e.state,
    r = e.options,
    i = e.name,
    o = r.offset,
    s = o === void 0 ? [0, 0] : o,
    f = Ft.reduce(function (p, b) {
      return (p[b] = Qr(b, t.rects, s)), p;
    }, {}),
    c = f[t.placement],
    u = c.x,
    l = c.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += u),
    (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[i] = f);
}
const en = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Zr,
};
function tn(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Jt({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const rn = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: tn,
  data: {},
};
function nn(e) {
  return e === "x" ? "y" : "x";
}
function on(e) {
  var t = e.state,
    r = e.options,
    i = e.name,
    o = r.mainAxis,
    s = o === void 0 ? !0 : o,
    f = r.altAxis,
    c = f === void 0 ? !1 : f,
    u = r.boundary,
    l = r.rootBoundary,
    p = r.altBoundary,
    b = r.padding,
    x = r.tether,
    h = x === void 0 ? !0 : x,
    w = r.tetherOffset,
    g = w === void 0 ? 0 : w,
    y = Ve(t, { boundary: u, rootBoundary: l, padding: b, altBoundary: p }),
    E = ee(t.placement),
    D = De(t.placement),
    L = !D,
    n = yt(E),
    A = nn(n),
    v = t.modifiersData.popperOffsets,
    C = t.rects.reference,
    B = t.rects.popper,
    P =
      typeof g == "function"
        ? g(Object.assign({}, t.rects, { placement: t.placement }))
        : g,
    R =
      typeof P == "number"
        ? { mainAxis: P, altAxis: P }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, P),
    j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    M = { x: 0, y: 0 };
  if (v) {
    if (s) {
      var S,
        W = n === "y" ? H : N,
        U = n === "y" ? X : Y,
        k = n === "y" ? "height" : "width",
        V = v[n],
        $ = V + y[W],
        K = V - y[U],
        J = h ? -B[k] / 2 : 0,
        ce = D === Ae ? C[k] : B[k],
        Q = D === Ae ? -B[k] : -C[k],
        pe = t.elements.arrow,
        re = h && pe ? gt(pe) : { width: 0, height: 0 },
        _ = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Yt(),
        ne = _[W],
        ge = _[U],
        ie = Be(0, C[k], re[k]),
        ye = L
          ? C[k] / 2 - J - ie - ne - R.mainAxis
          : ce - ie - ne - R.mainAxis,
        se = L
          ? -C[k] / 2 + J + ie + ge + R.mainAxis
          : Q + ie + ge + R.mainAxis,
        be = t.elements.arrow && He(t.elements.arrow),
        Ne = be ? (n === "y" ? be.clientTop || 0 : be.clientLeft || 0) : 0,
        Ce = (S = j == null ? void 0 : j[n]) != null ? S : 0,
        We = V + ye - Ce - Ne,
        Ue = V + se - Ce,
        Le = Be(h ? et($, We) : $, V, h ? me(K, Ue) : K);
      (v[n] = Le), (M[n] = Le - V);
    }
    if (c) {
      var Se,
        Fe = n === "x" ? H : N,
        qe = n === "x" ? X : Y,
        oe = v[A],
        ue = A === "y" ? "height" : "width",
        Re = oe + y[Fe],
        le = oe - y[qe],
        Me = [H, N].indexOf(E) !== -1,
        ze = (Se = j == null ? void 0 : j[A]) != null ? Se : 0,
        Xe = Me ? Re : oe - C[ue] - B[ue] - ze + R.altAxis,
        Ye = Me ? oe + C[ue] + B[ue] - ze - R.altAxis : le,
        _e = h && Me ? Lr(Xe, oe, Ye) : Be(h ? Xe : Re, oe, h ? Ye : le);
      (v[A] = _e), (M[A] = _e - oe);
    }
    t.modifiersData[i] = M;
  }
}
const an = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: on,
  requiresIfExists: ["offset"],
};
function sn(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function un(e) {
  return e === F(e) || !z(e) ? bt(e) : sn(e);
}
function fn(e) {
  var t = e.getBoundingClientRect(),
    r = Ee(t.width) / e.offsetWidth || 1,
    i = Ee(t.height) / e.offsetHeight || 1;
  return r !== 1 || i !== 1;
}
function cn(e, t, r) {
  r === void 0 && (r = !1);
  var i = z(t),
    o = z(t) && fn(t),
    s = fe(t),
    f = Te(e, o, r),
    c = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 };
  return (
    (i || (!i && !r)) &&
      ((te(t) !== "body" || Ot(s)) && (c = un(t)),
      z(t)
        ? ((u = Te(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop))
        : s && (u.x = wt(s))),
    {
      x: f.left + c.scrollLeft - u.x,
      y: f.top + c.scrollTop - u.y,
      width: f.width,
      height: f.height,
    }
  );
}
function pn(e) {
  var t = new Map(),
    r = new Set(),
    i = [];
  e.forEach(function (s) {
    t.set(s.name, s);
  });
  function o(s) {
    r.add(s.name);
    var f = [].concat(s.requires || [], s.requiresIfExists || []);
    f.forEach(function (c) {
      if (!r.has(c)) {
        var u = t.get(c);
        u && o(u);
      }
    }),
      i.push(s);
  }
  return (
    e.forEach(function (s) {
      r.has(s.name) || o(s);
    }),
    i
  );
}
function ln(e) {
  var t = pn(e);
  return Ar.reduce(function (r, i) {
    return r.concat(
      t.filter(function (o) {
        return o.phase === i;
      }),
    );
  }, []);
}
function dn(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            (t = void 0), r(e());
          });
        })),
      t
    );
  };
}
function vn(e) {
  var t = e.reduce(function (r, i) {
    var o = r[i.name];
    return (
      (r[i.name] = o
        ? Object.assign({}, o, i, {
            options: Object.assign({}, o.options, i.options),
            data: Object.assign({}, o.data, i.data),
          })
        : i),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var Mt = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Pt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function (i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function mn(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    i = r === void 0 ? [] : r,
    o = t.defaultOptions,
    s = o === void 0 ? Mt : o;
  return function (c, u, l) {
    l === void 0 && (l = s);
    var p = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Mt, s),
        modifiersData: {},
        elements: { reference: c, popper: u },
        attributes: {},
        styles: {},
      },
      b = [],
      x = !1,
      h = {
        state: p,
        setOptions: function (E) {
          var D = typeof E == "function" ? E(p.options) : E;
          g(),
            (p.options = Object.assign({}, s, p.options, D)),
            (p.scrollParents = {
              reference: he(c)
                ? je(c)
                : c.contextElement
                  ? je(c.contextElement)
                  : [],
              popper: je(u),
            });
          var L = ln(vn([].concat(i, p.options.modifiers)));
          return (
            (p.orderedModifiers = L.filter(function (n) {
              return n.enabled;
            })),
            w(),
            h.update()
          );
        },
        forceUpdate: function () {
          if (!x) {
            var E = p.elements,
              D = E.reference,
              L = E.popper;
            if (Pt(D, L)) {
              (p.rects = {
                reference: cn(D, He(L), p.options.strategy === "fixed"),
                popper: gt(L),
              }),
                (p.reset = !1),
                (p.placement = p.options.placement),
                p.orderedModifiers.forEach(function (R) {
                  return (p.modifiersData[R.name] = Object.assign({}, R.data));
                });
              for (var n = 0; n < p.orderedModifiers.length; n++) {
                if (p.reset === !0) {
                  (p.reset = !1), (n = -1);
                  continue;
                }
                var A = p.orderedModifiers[n],
                  v = A.fn,
                  C = A.options,
                  B = C === void 0 ? {} : C,
                  P = A.name;
                typeof v == "function" &&
                  (p = v({ state: p, options: B, name: P, instance: h }) || p);
              }
            }
          }
        },
        update: dn(function () {
          return new Promise(function (y) {
            h.forceUpdate(), y(p);
          });
        }),
        destroy: function () {
          g(), (x = !0);
        },
      };
    if (!Pt(c, u)) return h;
    h.setOptions(l).then(function (y) {
      !x && l.onFirstUpdate && l.onFirstUpdate(y);
    });
    function w() {
      p.orderedModifiers.forEach(function (y) {
        var E = y.name,
          D = y.options,
          L = D === void 0 ? {} : D,
          n = y.effect;
        if (typeof n == "function") {
          var A = n({ state: p, name: E, instance: h, options: L }),
            v = function () {};
          b.push(A || v);
        }
      });
    }
    function g() {
      b.forEach(function (y) {
        return y();
      }),
        (b = []);
    }
    return h;
  };
}
var hn = [Ir, rn, kr, qt, en, Gr, an, Pr, Jr],
  gn = mn({ defaultModifiers: hn }),
  yn = "tippy-box",
  Qt = "tippy-content",
  bn = "tippy-backdrop",
  Zt = "tippy-arrow",
  er = "tippy-svg-arrow",
  ve = { passive: !0, capture: !0 },
  tr = function () {
    return document.body;
  };
function st(e, t, r) {
  if (Array.isArray(e)) {
    var i = e[t];
    return i ?? (Array.isArray(r) ? r[t] : r);
  }
  return e;
}
function xt(e, t) {
  var r = {}.toString.call(e);
  return r.indexOf("[object") === 0 && r.indexOf(t + "]") > -1;
}
function rr(e, t) {
  return typeof e == "function" ? e.apply(void 0, t) : e;
}
function Bt(e, t) {
  if (t === 0) return e;
  var r;
  return function (i) {
    clearTimeout(r),
      (r = setTimeout(function () {
        e(i);
      }, t));
  };
}
function wn(e) {
  return e.split(/\s+/).filter(Boolean);
}
function xe(e) {
  return [].concat(e);
}
function jt(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function On(e) {
  return e.filter(function (t, r) {
    return e.indexOf(t) === r;
  });
}
function xn(e) {
  return e.split("-")[0];
}
function tt(e) {
  return [].slice.call(e);
}
function $t(e) {
  return Object.keys(e).reduce(function (t, r) {
    return e[r] !== void 0 && (t[r] = e[r]), t;
  }, {});
}
function $e() {
  return document.createElement("div");
}
function nt(e) {
  return ["Element", "Fragment"].some(function (t) {
    return xt(e, t);
  });
}
function An(e) {
  return xt(e, "NodeList");
}
function En(e) {
  return xt(e, "MouseEvent");
}
function Tn(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
function Dn(e) {
  return nt(e)
    ? [e]
    : An(e)
      ? tt(e)
      : Array.isArray(e)
        ? e
        : tt(document.querySelectorAll(e));
}
function ut(e, t) {
  e.forEach(function (r) {
    r && (r.style.transitionDuration = t + "ms");
  });
}
function kt(e, t) {
  e.forEach(function (r) {
    r && r.setAttribute("data-state", t);
  });
}
function Cn(e) {
  var t,
    r = xe(e),
    i = r[0];
  return i != null && (t = i.ownerDocument) != null && t.body
    ? i.ownerDocument
    : document;
}
function Ln(e, t) {
  var r = t.clientX,
    i = t.clientY;
  return e.every(function (o) {
    var s = o.popperRect,
      f = o.popperState,
      c = o.props,
      u = c.interactiveBorder,
      l = xn(f.placement),
      p = f.modifiersData.offset;
    if (!p) return !0;
    var b = l === "bottom" ? p.top.y : 0,
      x = l === "top" ? p.bottom.y : 0,
      h = l === "right" ? p.left.x : 0,
      w = l === "left" ? p.right.x : 0,
      g = s.top - i + b > u,
      y = i - s.bottom - x > u,
      E = s.left - r + h > u,
      D = r - s.right - w > u;
    return g || y || E || D;
  });
}
function ft(e, t, r) {
  var i = t + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function (o) {
    e[i](o, r);
  });
}
function Vt(e, t) {
  for (var r = t; r; ) {
    var i;
    if (e.contains(r)) return !0;
    r =
      r.getRootNode == null || (i = r.getRootNode()) == null ? void 0 : i.host;
  }
  return !1;
}
var Z = { isTouch: !1 },
  It = 0;
function Sn() {
  Z.isTouch ||
    ((Z.isTouch = !0),
    window.performance && document.addEventListener("mousemove", nr));
}
function nr() {
  var e = performance.now();
  e - It < 20 &&
    ((Z.isTouch = !1), document.removeEventListener("mousemove", nr)),
    (It = e);
}
function Rn() {
  var e = document.activeElement;
  if (Tn(e)) {
    var t = e._tippy;
    e.blur && !t.state.isVisible && e.blur();
  }
}
function Mn() {
  document.addEventListener("touchstart", Sn, ve),
    window.addEventListener("blur", Rn);
}
var Pn = typeof window < "u" && typeof document < "u",
  Bn = Pn ? !!window.msCrypto : !1,
  jn = { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
  $n = {
    allowHTML: !1,
    animation: "fade",
    arrow: !0,
    content: "",
    inertia: !1,
    maxWidth: 350,
    role: "tooltip",
    theme: "",
    zIndex: 9999,
  },
  G = Object.assign(
    {
      appendTo: tr,
      aria: { content: "auto", expanded: "auto" },
      delay: 0,
      duration: [300, 250],
      getReferenceClientRect: null,
      hideOnClick: !0,
      ignoreAttributes: !1,
      interactive: !1,
      interactiveBorder: 2,
      interactiveDebounce: 0,
      moveTransition: "",
      offset: [0, 10],
      onAfterUpdate: function () {},
      onBeforeUpdate: function () {},
      onCreate: function () {},
      onDestroy: function () {},
      onHidden: function () {},
      onHide: function () {},
      onMount: function () {},
      onShow: function () {},
      onShown: function () {},
      onTrigger: function () {},
      onUntrigger: function () {},
      onClickOutside: function () {},
      placement: "top",
      plugins: [],
      popperOptions: {},
      render: null,
      showOnCreate: !1,
      touch: !0,
      trigger: "mouseenter focus",
      triggerTarget: null,
    },
    jn,
    $n,
  ),
  kn = Object.keys(G),
  Vn = function (t) {
    var r = Object.keys(t);
    r.forEach(function (i) {
      G[i] = t[i];
    });
  };
function ir(e) {
  var t = e.plugins || [],
    r = t.reduce(function (i, o) {
      var s = o.name,
        f = o.defaultValue;
      if (s) {
        var c;
        i[s] = e[s] !== void 0 ? e[s] : (c = G[s]) != null ? c : f;
      }
      return i;
    }, {});
  return Object.assign({}, e, r);
}
function In(e, t) {
  var r = t ? Object.keys(ir(Object.assign({}, G, { plugins: t }))) : kn,
    i = r.reduce(function (o, s) {
      var f = (e.getAttribute("data-tippy-" + s) || "").trim();
      if (!f) return o;
      if (s === "content") o[s] = f;
      else
        try {
          o[s] = JSON.parse(f);
        } catch {
          o[s] = f;
        }
      return o;
    }, {});
  return i;
}
function Ht(e, t) {
  var r = Object.assign(
    {},
    t,
    { content: rr(t.content, [e]) },
    t.ignoreAttributes ? {} : In(e, t.plugins),
  );
  return (
    (r.aria = Object.assign({}, G.aria, r.aria)),
    (r.aria = {
      expanded: r.aria.expanded === "auto" ? t.interactive : r.aria.expanded,
      content:
        r.aria.content === "auto"
          ? t.interactive
            ? null
            : "describedby"
          : r.aria.content,
    }),
    r
  );
}
var Hn = function () {
  return "innerHTML";
};
function dt(e, t) {
  e[Hn()] = t;
}
function Nt(e) {
  var t = $e();
  return (
    e === !0
      ? (t.className = Zt)
      : ((t.className = er), nt(e) ? t.appendChild(e) : dt(t, e)),
    t
  );
}
function Wt(e, t) {
  nt(t.content)
    ? (dt(e, ""), e.appendChild(t.content))
    : typeof t.content != "function" &&
      (t.allowHTML ? dt(e, t.content) : (e.textContent = t.content));
}
function vt(e) {
  var t = e.firstElementChild,
    r = tt(t.children);
  return {
    box: t,
    content: r.find(function (i) {
      return i.classList.contains(Qt);
    }),
    arrow: r.find(function (i) {
      return i.classList.contains(Zt) || i.classList.contains(er);
    }),
    backdrop: r.find(function (i) {
      return i.classList.contains(bn);
    }),
  };
}
function or(e) {
  var t = $e(),
    r = $e();
  (r.className = yn),
    r.setAttribute("data-state", "hidden"),
    r.setAttribute("tabindex", "-1");
  var i = $e();
  (i.className = Qt),
    i.setAttribute("data-state", "hidden"),
    Wt(i, e.props),
    t.appendChild(r),
    r.appendChild(i),
    o(e.props, e.props);
  function o(s, f) {
    var c = vt(t),
      u = c.box,
      l = c.content,
      p = c.arrow;
    f.theme
      ? u.setAttribute("data-theme", f.theme)
      : u.removeAttribute("data-theme"),
      typeof f.animation == "string"
        ? u.setAttribute("data-animation", f.animation)
        : u.removeAttribute("data-animation"),
      f.inertia
        ? u.setAttribute("data-inertia", "")
        : u.removeAttribute("data-inertia"),
      (u.style.maxWidth =
        typeof f.maxWidth == "number" ? f.maxWidth + "px" : f.maxWidth),
      f.role ? u.setAttribute("role", f.role) : u.removeAttribute("role"),
      (s.content !== f.content || s.allowHTML !== f.allowHTML) &&
        Wt(l, e.props),
      f.arrow
        ? p
          ? s.arrow !== f.arrow &&
            (u.removeChild(p), u.appendChild(Nt(f.arrow)))
          : u.appendChild(Nt(f.arrow))
        : p && u.removeChild(p);
  }
  return { popper: t, onUpdate: o };
}
or.$$tippy = !0;
var Nn = 1,
  Qe = [],
  ct = [];
function Wn(e, t) {
  var r = Ht(e, Object.assign({}, G, ir($t(t)))),
    i,
    o,
    s,
    f = !1,
    c = !1,
    u = !1,
    l = !1,
    p,
    b,
    x,
    h = [],
    w = Bt(We, r.interactiveDebounce),
    g,
    y = Nn++,
    E = null,
    D = On(r.plugins),
    L = {
      isEnabled: !0,
      isVisible: !1,
      isDestroyed: !1,
      isMounted: !1,
      isShown: !1,
    },
    n = {
      id: y,
      reference: e,
      popper: $e(),
      popperInstance: E,
      props: r,
      state: L,
      plugins: D,
      clearDelayTimeouts: Xe,
      setProps: Ye,
      setContent: _e,
      show: ar,
      hide: sr,
      hideWithInteractivity: ur,
      enable: Me,
      disable: ze,
      unmount: fr,
      destroy: cr,
    };
  if (!r.render) return n;
  var A = r.render(n),
    v = A.popper,
    C = A.onUpdate;
  v.setAttribute("data-tippy-root", ""),
    (v.id = "tippy-" + n.id),
    (n.popper = v),
    (e._tippy = n),
    (v._tippy = n);
  var B = D.map(function (a) {
      return a.fn(n);
    }),
    P = e.hasAttribute("aria-expanded");
  return (
    be(),
    J(),
    V(),
    $("onCreate", [n]),
    r.showOnCreate && Re(),
    v.addEventListener("mouseenter", function () {
      n.props.interactive && n.state.isVisible && n.clearDelayTimeouts();
    }),
    v.addEventListener("mouseleave", function () {
      n.props.interactive &&
        n.props.trigger.indexOf("mouseenter") >= 0 &&
        W().addEventListener("mousemove", w);
    }),
    n
  );
  function R() {
    var a = n.props.touch;
    return Array.isArray(a) ? a : [a, 0];
  }
  function j() {
    return R()[0] === "hold";
  }
  function M() {
    var a;
    return !!((a = n.props.render) != null && a.$$tippy);
  }
  function S() {
    return g || e;
  }
  function W() {
    var a = S().parentNode;
    return a ? Cn(a) : document;
  }
  function U() {
    return vt(v);
  }
  function k(a) {
    return (n.state.isMounted && !n.state.isVisible) ||
      Z.isTouch ||
      (p && p.type === "focus")
      ? 0
      : st(n.props.delay, a ? 0 : 1, G.delay);
  }
  function V(a) {
    a === void 0 && (a = !1),
      (v.style.pointerEvents = n.props.interactive && !a ? "" : "none"),
      (v.style.zIndex = "" + n.props.zIndex);
  }
  function $(a, d, m) {
    if (
      (m === void 0 && (m = !0),
      B.forEach(function (O) {
        O[a] && O[a].apply(O, d);
      }),
      m)
    ) {
      var T;
      (T = n.props)[a].apply(T, d);
    }
  }
  function K() {
    var a = n.props.aria;
    if (a.content) {
      var d = "aria-" + a.content,
        m = v.id,
        T = xe(n.props.triggerTarget || e);
      T.forEach(function (O) {
        var I = O.getAttribute(d);
        if (n.state.isVisible) O.setAttribute(d, I ? I + " " + m : m);
        else {
          var q = I && I.replace(m, "").trim();
          q ? O.setAttribute(d, q) : O.removeAttribute(d);
        }
      });
    }
  }
  function J() {
    if (!(P || !n.props.aria.expanded)) {
      var a = xe(n.props.triggerTarget || e);
      a.forEach(function (d) {
        n.props.interactive
          ? d.setAttribute(
              "aria-expanded",
              n.state.isVisible && d === S() ? "true" : "false",
            )
          : d.removeAttribute("aria-expanded");
      });
    }
  }
  function ce() {
    W().removeEventListener("mousemove", w),
      (Qe = Qe.filter(function (a) {
        return a !== w;
      }));
  }
  function Q(a) {
    if (!(Z.isTouch && (u || a.type === "mousedown"))) {
      var d = (a.composedPath && a.composedPath()[0]) || a.target;
      if (!(n.props.interactive && Vt(v, d))) {
        if (
          xe(n.props.triggerTarget || e).some(function (m) {
            return Vt(m, d);
          })
        ) {
          if (
            Z.isTouch ||
            (n.state.isVisible && n.props.trigger.indexOf("click") >= 0)
          )
            return;
        } else $("onClickOutside", [n, a]);
        n.props.hideOnClick === !0 &&
          (n.clearDelayTimeouts(),
          n.hide(),
          (c = !0),
          setTimeout(function () {
            c = !1;
          }),
          n.state.isMounted || ne());
      }
    }
  }
  function pe() {
    u = !0;
  }
  function re() {
    u = !1;
  }
  function _() {
    var a = W();
    a.addEventListener("mousedown", Q, !0),
      a.addEventListener("touchend", Q, ve),
      a.addEventListener("touchstart", re, ve),
      a.addEventListener("touchmove", pe, ve);
  }
  function ne() {
    var a = W();
    a.removeEventListener("mousedown", Q, !0),
      a.removeEventListener("touchend", Q, ve),
      a.removeEventListener("touchstart", re, ve),
      a.removeEventListener("touchmove", pe, ve);
  }
  function ge(a, d) {
    ye(a, function () {
      !n.state.isVisible && v.parentNode && v.parentNode.contains(v) && d();
    });
  }
  function ie(a, d) {
    ye(a, d);
  }
  function ye(a, d) {
    var m = U().box;
    function T(O) {
      O.target === m && (ft(m, "remove", T), d());
    }
    if (a === 0) return d();
    ft(m, "remove", b), ft(m, "add", T), (b = T);
  }
  function se(a, d, m) {
    m === void 0 && (m = !1);
    var T = xe(n.props.triggerTarget || e);
    T.forEach(function (O) {
      O.addEventListener(a, d, m),
        h.push({ node: O, eventType: a, handler: d, options: m });
    });
  }
  function be() {
    j() &&
      (se("touchstart", Ce, { passive: !0 }),
      se("touchend", Ue, { passive: !0 })),
      wn(n.props.trigger).forEach(function (a) {
        if (a !== "manual")
          switch ((se(a, Ce), a)) {
            case "mouseenter":
              se("mouseleave", Ue);
              break;
            case "focus":
              se(Bn ? "focusout" : "blur", Le);
              break;
            case "focusin":
              se("focusout", Le);
              break;
          }
      });
  }
  function Ne() {
    h.forEach(function (a) {
      var d = a.node,
        m = a.eventType,
        T = a.handler,
        O = a.options;
      d.removeEventListener(m, T, O);
    }),
      (h = []);
  }
  function Ce(a) {
    var d,
      m = !1;
    if (!(!n.state.isEnabled || Se(a) || c)) {
      var T = ((d = p) == null ? void 0 : d.type) === "focus";
      (p = a),
        (g = a.currentTarget),
        J(),
        !n.state.isVisible &&
          En(a) &&
          Qe.forEach(function (O) {
            return O(a);
          }),
        a.type === "click" &&
        (n.props.trigger.indexOf("mouseenter") < 0 || f) &&
        n.props.hideOnClick !== !1 &&
        n.state.isVisible
          ? (m = !0)
          : Re(a),
        a.type === "click" && (f = !m),
        m && !T && le(a);
    }
  }
  function We(a) {
    var d = a.target,
      m = S().contains(d) || v.contains(d);
    if (!(a.type === "mousemove" && m)) {
      var T = ue()
        .concat(v)
        .map(function (O) {
          var I,
            q = O._tippy,
            we = (I = q.popperInstance) == null ? void 0 : I.state;
          return we
            ? {
                popperRect: O.getBoundingClientRect(),
                popperState: we,
                props: r,
              }
            : null;
        })
        .filter(Boolean);
      Ln(T, a) && (ce(), le(a));
    }
  }
  function Ue(a) {
    var d = Se(a) || (n.props.trigger.indexOf("click") >= 0 && f);
    if (!d) {
      if (n.props.interactive) {
        n.hideWithInteractivity(a);
        return;
      }
      le(a);
    }
  }
  function Le(a) {
    (n.props.trigger.indexOf("focusin") < 0 && a.target !== S()) ||
      (n.props.interactive && a.relatedTarget && v.contains(a.relatedTarget)) ||
      le(a);
  }
  function Se(a) {
    return Z.isTouch ? j() !== a.type.indexOf("touch") >= 0 : !1;
  }
  function Fe() {
    qe();
    var a = n.props,
      d = a.popperOptions,
      m = a.placement,
      T = a.offset,
      O = a.getReferenceClientRect,
      I = a.moveTransition,
      q = M() ? vt(v).arrow : null,
      we = O
        ? { getBoundingClientRect: O, contextElement: O.contextElement || S() }
        : e,
      At = {
        name: "$$tippy",
        enabled: !0,
        phase: "beforeWrite",
        requires: ["computeStyles"],
        fn: function (Ge) {
          var Oe = Ge.state;
          if (M()) {
            var pr = U(),
              at = pr.box;
            ["placement", "reference-hidden", "escaped"].forEach(function (Ke) {
              Ke === "placement"
                ? at.setAttribute("data-placement", Oe.placement)
                : Oe.attributes.popper["data-popper-" + Ke]
                  ? at.setAttribute("data-" + Ke, "")
                  : at.removeAttribute("data-" + Ke);
            }),
              (Oe.attributes.popper = {});
          }
        },
      },
      de = [
        { name: "offset", options: { offset: T } },
        {
          name: "preventOverflow",
          options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
        },
        { name: "flip", options: { padding: 5 } },
        { name: "computeStyles", options: { adaptive: !I } },
        At,
      ];
    M() && q && de.push({ name: "arrow", options: { element: q, padding: 3 } }),
      de.push.apply(de, (d == null ? void 0 : d.modifiers) || []),
      (n.popperInstance = gn(
        we,
        v,
        Object.assign({}, d, { placement: m, onFirstUpdate: x, modifiers: de }),
      ));
  }
  function qe() {
    n.popperInstance && (n.popperInstance.destroy(), (n.popperInstance = null));
  }
  function oe() {
    var a = n.props.appendTo,
      d,
      m = S();
    (n.props.interactive && a === tr) || a === "parent"
      ? (d = m.parentNode)
      : (d = rr(a, [m])),
      d.contains(v) || d.appendChild(v),
      (n.state.isMounted = !0),
      Fe();
  }
  function ue() {
    return tt(v.querySelectorAll("[data-tippy-root]"));
  }
  function Re(a) {
    n.clearDelayTimeouts(), a && $("onTrigger", [n, a]), _();
    var d = k(!0),
      m = R(),
      T = m[0],
      O = m[1];
    Z.isTouch && T === "hold" && O && (d = O),
      d
        ? (i = setTimeout(function () {
            n.show();
          }, d))
        : n.show();
  }
  function le(a) {
    if (
      (n.clearDelayTimeouts(), $("onUntrigger", [n, a]), !n.state.isVisible)
    ) {
      ne();
      return;
    }
    if (
      !(
        n.props.trigger.indexOf("mouseenter") >= 0 &&
        n.props.trigger.indexOf("click") >= 0 &&
        ["mouseleave", "mousemove"].indexOf(a.type) >= 0 &&
        f
      )
    ) {
      var d = k(!1);
      d
        ? (o = setTimeout(function () {
            n.state.isVisible && n.hide();
          }, d))
        : (s = requestAnimationFrame(function () {
            n.hide();
          }));
    }
  }
  function Me() {
    n.state.isEnabled = !0;
  }
  function ze() {
    n.hide(), (n.state.isEnabled = !1);
  }
  function Xe() {
    clearTimeout(i), clearTimeout(o), cancelAnimationFrame(s);
  }
  function Ye(a) {
    if (!n.state.isDestroyed) {
      $("onBeforeUpdate", [n, a]), Ne();
      var d = n.props,
        m = Ht(e, Object.assign({}, d, $t(a), { ignoreAttributes: !0 }));
      (n.props = m),
        be(),
        d.interactiveDebounce !== m.interactiveDebounce &&
          (ce(), (w = Bt(We, m.interactiveDebounce))),
        d.triggerTarget && !m.triggerTarget
          ? xe(d.triggerTarget).forEach(function (T) {
              T.removeAttribute("aria-expanded");
            })
          : m.triggerTarget && e.removeAttribute("aria-expanded"),
        J(),
        V(),
        C && C(d, m),
        n.popperInstance &&
          (Fe(),
          ue().forEach(function (T) {
            requestAnimationFrame(T._tippy.popperInstance.forceUpdate);
          })),
        $("onAfterUpdate", [n, a]);
    }
  }
  function _e(a) {
    n.setProps({ content: a });
  }
  function ar() {
    var a = n.state.isVisible,
      d = n.state.isDestroyed,
      m = !n.state.isEnabled,
      T = Z.isTouch && !n.props.touch,
      O = st(n.props.duration, 0, G.duration);
    if (
      !(a || d || m || T) &&
      !S().hasAttribute("disabled") &&
      ($("onShow", [n], !1), n.props.onShow(n) !== !1)
    ) {
      if (
        ((n.state.isVisible = !0),
        M() && (v.style.visibility = "visible"),
        V(),
        _(),
        n.state.isMounted || (v.style.transition = "none"),
        M())
      ) {
        var I = U(),
          q = I.box,
          we = I.content;
        ut([q, we], 0);
      }
      (x = function () {
        var de;
        if (!(!n.state.isVisible || l)) {
          if (
            ((l = !0),
            v.offsetHeight,
            (v.style.transition = n.props.moveTransition),
            M() && n.props.animation)
          ) {
            var ot = U(),
              Ge = ot.box,
              Oe = ot.content;
            ut([Ge, Oe], O), kt([Ge, Oe], "visible");
          }
          K(),
            J(),
            jt(ct, n),
            (de = n.popperInstance) == null || de.forceUpdate(),
            $("onMount", [n]),
            n.props.animation &&
              M() &&
              ie(O, function () {
                (n.state.isShown = !0), $("onShown", [n]);
              });
        }
      }),
        oe();
    }
  }
  function sr() {
    var a = !n.state.isVisible,
      d = n.state.isDestroyed,
      m = !n.state.isEnabled,
      T = st(n.props.duration, 1, G.duration);
    if (!(a || d || m) && ($("onHide", [n], !1), n.props.onHide(n) !== !1)) {
      if (
        ((n.state.isVisible = !1),
        (n.state.isShown = !1),
        (l = !1),
        (f = !1),
        M() && (v.style.visibility = "hidden"),
        ce(),
        ne(),
        V(!0),
        M())
      ) {
        var O = U(),
          I = O.box,
          q = O.content;
        n.props.animation && (ut([I, q], T), kt([I, q], "hidden"));
      }
      K(), J(), n.props.animation ? M() && ge(T, n.unmount) : n.unmount();
    }
  }
  function ur(a) {
    W().addEventListener("mousemove", w), jt(Qe, w), w(a);
  }
  function fr() {
    n.state.isVisible && n.hide(),
      n.state.isMounted &&
        (qe(),
        ue().forEach(function (a) {
          a._tippy.unmount();
        }),
        v.parentNode && v.parentNode.removeChild(v),
        (ct = ct.filter(function (a) {
          return a !== n;
        })),
        (n.state.isMounted = !1),
        $("onHidden", [n]));
  }
  function cr() {
    n.state.isDestroyed ||
      (n.clearDelayTimeouts(),
      n.unmount(),
      Ne(),
      delete e._tippy,
      (n.state.isDestroyed = !0),
      $("onDestroy", [n]));
  }
}
function it(e, t) {
  t === void 0 && (t = {});
  var r = G.plugins.concat(t.plugins || []);
  Mn();
  var i = Object.assign({}, t, { plugins: r }),
    o = Dn(e),
    s = o.reduce(function (f, c) {
      var u = c && Wn(c, i);
      return u && f.push(u), f;
    }, []);
  return nt(e) ? s[0] : s;
}
it.defaultProps = G;
it.setDefaultProps = Vn;
it.currentInput = Z;
Object.assign({}, qt, {
  effect: function (t) {
    var r = t.state,
      i = {
        popper: {
          position: r.options.strategy,
          left: "0",
          top: "0",
          margin: "0",
        },
        arrow: { position: "absolute" },
        reference: {},
      };
    Object.assign(r.elements.popper.style, i.popper),
      (r.styles = i),
      r.elements.arrow && Object.assign(r.elements.arrow.style, i.arrow);
  },
});
it.setDefaultProps({ render: or });
export { it as t };
