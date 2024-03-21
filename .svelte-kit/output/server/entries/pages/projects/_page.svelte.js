import { c as create_ssr_component } from "../../../chunks/ssr.js";
/* empty css                       */
import "easy-reactive";
import { u as updateTopbarName } from "../../../chunks/stores2.js";
const css = {
  code: 'hr.svelte-gd2835{width:100%}h1.svelte-gd2835{font-family:"JetBrains Mono";font-weight:normal}.mediumHr.svelte-gd2835{width:50vw}.smallHr.svelte-gd2835{width:30vw}.projectWrapper.svelte-gd2835{display:flex;flex-direction:column;align-items:center;width:50vw;margin:8px 0 0 0}.projectHeading.svelte-gd2835{font-family:"JetBrains Mono";font-size:1.2em;font-weight:bold}.projectTechnologies.svelte-gd2835{font-style:italic;color:var(--accent-color);width:100%}.projectTopper.svelte-gd2835{font-family:"JetBrains Mono";font-style:italic;width:100%}.carouselImage.svelte-gd2835{max-width:50vw}',
  map: null,
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  updateTopbarName("My Projects");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${``}`;
  } while (!$$settled);
  return $$rendered;
});
export { Page as default };
