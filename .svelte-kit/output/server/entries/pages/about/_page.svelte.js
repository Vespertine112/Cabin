import { c as create_ssr_component } from "../../../chunks/ssr.js";
/* empty css                       */
const css = {
  code: ".resume.svelte-gzeu1u{height:5vh}hr.svelte-gzeu1u{width:100%}",
  map: null,
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${``}`;
});
export { Page as default };
