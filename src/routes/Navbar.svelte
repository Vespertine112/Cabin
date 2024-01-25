<style>

nav {
    border-radius: 8px;
    border: 4px solid var(--linen);
    background-color: var(--background);
    padding: 10px;
    box-shadow: var(--shadow);
    display: flex;
    margin: 0 4px 0 0;
    flex-direction: column;
    flex: 1 1 auto;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  li {
    margin: 8px 15px 8px 0;

  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-family: "JetBrains Mono";
  }

  hr {
    width: 100%;
  }

  .active > a{
    color: var(--verdigris);
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
		font-family: "JetBrains Mono", monospace;
		src: url("/fonts/JetBrainsMono-VariableFont_wght.ttf") format("ttf");
		font-style: normal;
	}
</style>

<script lang="ts">
	import { page } from "$app/stores";
  import { typewriter } from "$lib/transitions";
	import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";

  export const navOptions = [
    { url: "/",           label: "Home"       },      
    // { url: "/about",      label: "About"      },      
    { url: "/experience", label: "Experience" },      
    { url: "/projects",   label: "Projects"   },      
    { url: "/blog",       label: "Blog"       },      
  ];

  let show:boolean = false;

  onMount(()=>{
    show = true;
  });

  let intSelected:number = navOptions.findIndex(option => option.url == $page.route.id);    

  function changeComponent(event: any){
    intSelected = event.srcElement.id;
  }

</script>



{#if show}
  <nav in:fly|global={{y:50, x:-50, duration:1000}}>
    <ul>
      {#each navOptions as nav, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li class={intSelected==i ? "active" : ""} >
            <a on:click={changeComponent} id={i.toString()} transition:fade|global={{delay:i*250}} href="{nav.url}">
            => &#123;{nav.label}&#125;
          </a>
        </li>
        <hr>
      {/each}
    </ul>
  </nav>
{/if}