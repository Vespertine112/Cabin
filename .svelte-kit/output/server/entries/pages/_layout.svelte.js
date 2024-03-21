import {
  c as create_ssr_component,
  a as subscribe,
  v as validate_component,
} from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { r as readableTopbarName } from "../../chunks/stores2.js";
const css$2 = {
  code: 'nav.svelte-q6046a.svelte-q6046a{border-radius:8px;border:4px solid var(--linen);background-color:var(--background);padding:10px;box-shadow:0 8px 16px rgba(0, 0, 0, 1);display:flex;margin:0 4px 0 0;flex-direction:column;flex:1 1 auto}ul.svelte-q6046a.svelte-q6046a{list-style-type:none;margin:0;padding:0;display:flex;flex-direction:column;flex:1}li.svelte-q6046a.svelte-q6046a{margin:8px 15px 8px 0}a.svelte-q6046a.svelte-q6046a{text-decoration:none;color:#ffffff;font-family:"JetBrains Mono"}hr.svelte-q6046a.svelte-q6046a{width:100%}.active.svelte-q6046a>a.svelte-q6046a{color:var(--verdigris);font-weight:900;font-style:italic}@font-face{font-family:"JetBrains Mono", monospace;src:url("/fonts/JetBrainsMono-VariableFont_wght.ttf") format("ttf");font-style:normal}',
  map: null,
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => ($page = value));
  const navOptions = [
    { url: "/", label: "Home" },
    // { url: "/about",      label: "About"      },
    { url: "/experience", label: "Experience" },
    { url: "/projects", label: "Projects" },
    { url: "/blog", label: "Blog" },
  ];
  navOptions.findIndex((option) => option.url == $page.route.id);
  if (
    $$props.navOptions === void 0 &&
    $$bindings.navOptions &&
    navOptions !== void 0
  )
    $$bindings.navOptions(navOptions);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `${``}`;
});
const css$1 = {
  code: '.top-bar.svelte-o4gv21{border-radius:8px;border:4px solid var(--linen);padding:10px;color:var(--linen);background-color:var(--background);display:flex;justify-content:space-between;box-shadow:0 8px 16px rgba(0, 0, 0, 1);align-items:center}.pageName.svelte-o4gv21{font-size:1.5rem;font-family:"JetBrains Mono"}.menu.svelte-o4gv21{display:flex}.menu-item.svelte-o4gv21{margin-left:7.5px;margin-right:7.5px}.logo.svelte-o4gv21{fill:var(--linen);height:100%;width:100%}',
  map: null,
};
const Topbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_readableTopbarName;
  $$unsubscribe_readableTopbarName = subscribe(
    readableTopbarName,
    (value) => value,
  );
  readableTopbarName.subscribe((name) => {});
  $$result.css.add(css$1);
  $$unsubscribe_readableTopbarName();
  return `${``}`;
});
const css = {
  code: ".pageWrapper.svelte-1auhonv{display:flex;flex-direction:column;height:calc(100vh - 2em);padding:1em}.bodyColumns.svelte-1auhonv{margin-top:4px;justify-content:space-between;display:flex;flex-direction:row;flex:1;max-height:92vh}.navbar.svelte-1auhonv{display:flex;flex:1 0 10%;height:100%}.slotted.svelte-1auhonv{display:flex;flex:1 0 90%;height:100%}",
  map: null,
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => ($page = value));
  $page.url;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="pageWrapper svelte-1auhonv">${validate_component(Topbar, "Topbar").$$render($$result, {}, {}, {})} <div class="bodyColumns svelte-1auhonv"><div class="navbar svelte-1auhonv">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</div> ${``}</div></div>`;
});
export { Layout as default };
