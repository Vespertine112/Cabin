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
    z-index: 0;
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

  .link-arrow {
    color: var(--linen);
    font-weight: 900;
    font-style: normal;
  }

  .nav-link {
    text-decoration: none;
    display: block;
    text-wrap: nowrap;
  }

  .active > a{
    color: var(--verdigris);
    font-weight: bolder;
    /* font-style: italic; */
  }

  .open {
    left: 1rem;
		transition: left 0.5s ease-in-out;
    z-index: 1001;
  }
  
  .closed {
    left: -100%;
		transition: left 0.5s ease-in-out;
    z-index: 1001;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity (0.5 in this case) */
    z-index: 1000; /* Ensure it's above other elements */
  }

  @media only screen and (max-width: 767px) {
    .navbar {
      position: absolute;
    }

    .navbar > ul > li {
      font-size: smaller;
    }
  }
</style>

<script lang="ts">
	import { page } from "$app/stores";
  import { typewriter } from "$lib/transitions";
	import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";

  export const navOptions = [
    { url: "/",           label: "Home"       },      
    { url: "/about",      label: "About"      },      
    { url: "/experience", label: "Experience" },      
    { url: "/projects",   label: "Projects"   },      
    // { url: "/blog",       label: "Blog"       },      
  ];

  export let open = false;

  let show:boolean = false;

  onMount(()=>{
    show = true;
  });

  let intSelected:number = navOptions.findIndex(option => option.url == $page.route.id);    

  function changeComponent(event: any){
    intSelected = event.srcElement.id;
    open = false;
  }

</script>

{#if show || open}
  <nav in:fly|global={{y:50, x:-50, duration:1000}} class={open ? 'open navbar' : 'closed navbar'}>
    <ul>
      {#each navOptions as nav, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li class={intSelected==i ? "active" : ""} >
            <a on:click={changeComponent} id={i.toString()} class="nav-link" transition:fade|global={{delay:i*500}} href="{nav.url}">
              <span class="link-arrow" >=></span> &#123;{nav.label}&#125;
            </a>
        </li>
        <hr>
      {/each}
    </ul>
  </nav>
{/if}

<!-- This handles the modal opacity overlay! -->
{#if open}
  <div class="overlay"></div>
{/if}