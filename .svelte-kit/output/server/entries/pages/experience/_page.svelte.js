import { c as create_ssr_component } from "../../../chunks/ssr.js";
/* empty css                       */
import { u as updateTopbarName } from "../../../chunks/stores2.js";
const css = {
  code: '.companyLogo.svelte-do09z7{height:5vh;border-radius:4px}hr.svelte-do09z7{width:100%}h1.svelte-do09z7{font-family:"JetBrains Mono";font-weight:normal}.mediumHr.svelte-do09z7{width:50vw}.smallHr.svelte-do09z7{width:30vw}.experienceWrapper.svelte-do09z7{display:flex;flex-direction:column;align-items:center;width:50vw;margin:8px 0 0 0}.experienceTime.svelte-do09z7{font-family:"JetBrains Mono";font-style:italic;width:100%}.experienceDescription.svelte-do09z7{padding:4px 0 4px 0}.experiences.svelte-do09z7{overflow:visible}',
  map: null,
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  updateTopbarName("My Experience");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${``}`;
});
export { Page as default };
