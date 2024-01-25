<style>

    .top-bar {
        border-radius: 8px; 
        border: 4px solid var(--linen);
        padding: 10px; 
        color: var(--linen); 
        background-color: var(--background);
        display: flex;
        justify-content: space-between;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 1);
        align-items: center;
    }


    .pageName {
      font-size: 1.5rem;
      font-family: "JetBrains Mono";
    }

    .menu {
      display: flex;
    }

    .menu-item {
        margin-left: 7.5px;
        margin-right: 7.5px;
    }

    .logo {
        fill: var(--linen);
        height: 100%;
        width: 100%;
    }

</style>

<script lang="ts">
	import { onMount } from "svelte";
    import { fly, fade } from "svelte/transition";
    import { typewriter } from '$lib/transitions';
    import { updateTopbarName, readableTopbarName } from "$lib/stores";
    import tippy, { type Props } from "tippy.js";

    let show = false;
    onMount(() => {
        show = true;
    });
    
    $: displayName = `{ ${$readableTopbarName} }`;

	function tooltip(node:Element, options:Object) {
		const tooltip = tippy(node, options);

		return {
			update(options: Partial<Props>){
				tooltip.setProps(options);
			},
			destroy() {
				tooltip.destroy();
			}
		};
	}

    let nameStorage: string = "";
    readableTopbarName.subscribe((name)=>{
        if (name != "Vespertine") nameStorage = name;
    });

    function vesperizeName(){
        updateTopbarName("Vespertine");  
    };
    function regularName(){
        updateTopbarName(nameStorage);
    }


</script>

{#if show}
<div class="top-bar" in:fly|global={{y:-50, duration:1000}} out:fade>

        {#key displayName}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="pageName" on:mouseenter={vesperizeName} on:mouseleave={regularName} in:typewriter|global={{speed:1}}>{displayName}</div>
        {/key}

        <div class="menu">
            <a use:tooltip={{content:"Email Me!", theme:"material", placement:"bottom"}} href="mailto:hillbgh@gmail.com" class="menu-item">
                <img src="icons/email.svg" alt="My Email" class="logo">
            </a>
            
            <a use:tooltip={{content:"My Github",  theme:"material", placement:"bottom"}} href="https://github.com/Vespertine112" class="menu-item" target="_blank">
                <img src="icons/github.svg" alt="GitHub" class="logo">
            </a>
            
            <a use:tooltip={{content:"My LinkedIn", theme:"material", placement:"bottom"}} href="https://www.linkedin.com/in/brayden-hill/" class="menu-item" target="_blank">
                <img src="icons/linkedin.svg" alt="Linkedin" class="logo">
            </a>

        </div>        
    </div>
{/if}