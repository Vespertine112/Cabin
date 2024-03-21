import { c as create_ssr_component, o as onDestroy } from "../../chunks/ssr.js";
/* empty css                    */
import { u as updateTopbarName } from "../../chunks/stores2.js";
const css = {
  code: ".profilePicWrapper.svelte-91awsm{display:flex;justify-content:center}.profilePic.svelte-91awsm{height:30vh;border-radius:1em;border:4px var(--verdigris) solid}.links.svelte-91awsm{color:var(--linen)}",
  map: null,
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  updateTopbarName("Brayden Hill");
  let show = false;
  onDestroy(() => {
    show = false;
  });
  $$result.css.add(css);
  return `${
    show
      ? `<div class="cardWrapper"><h1 data-svelte-h="svelte-1hqgcjs">Hi, I&#39;m Brayden.</h1> <div class="profilePicWrapper svelte-91awsm"> <img src="/images/profile/profile.jpg" class="profilePic svelte-91awsm" alt="Profile Picture"></div> <p data-svelte-h="svelte-11xmpj0">Welcome in! I&#39;m a software developer with <strong>4 years</strong> of experience.</p> <p data-svelte-h="svelte-3ilae8">Currently, I work as a <strong>Full-Stack Developer</strong>, but I have an interest in all things computing.</p> <p data-svelte-h="svelte-188eai9">When I&#39;m not writing code, I love to get outdoors, exercise, or fall down the rabbit hole on a fascinating topic! 
            <i><a class="links svelte-91awsm" href="https://en.wikipedia.org/wiki/The_Crystal_Palace" target="_blank">Crystal Palace, anyone?</a></i></p> <p data-svelte-h="svelte-1956k8i">Feel free to contact me at any of the links above! I&#39;d love to hear from you!</p></div>`
      : ``
  }`;
});
export { Page as default };
