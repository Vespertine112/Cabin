import { w as i } from "./index.YeiUgQ2E.js";
function h(e, { speed: a = 1 }) {
  if (
    !(e.childNodes.length === 1 && e.childNodes[0].nodeType === Node.TEXT_NODE)
  )
    throw new Error(
      "This transition only works on elements with a single text node child",
    );
  const t = e.textContent || "";
  return {
    duration: t.length / (a * 0.01),
    tick: (o) => {
      const s = Math.trunc(t.length * o);
      e.textContent =
        s != (t == null ? void 0 : t.length)
          ? t.slice(0, s) + "_"
          : t.slice(0, s);
    },
  };
}
let r = !1;
const l = i(r);
l.subscribe;
let c = "";
const n = i(c),
  p = (e) => {
    n.update((a) => e);
  },
  N = { subscribe: n.subscribe };
export { N as r, h as t, p as u };
