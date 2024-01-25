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

<script>
	import { onMount } from "svelte";
    import { fly, fade } from "svelte/transition";
    import { typewriter } from '$lib/transitions';
    import { updateTopbarName, readableTopbarName } from "$lib/stores";

    let show = false;
    onMount(() => {
        show = true;
    });
    
    $: displayName = `{ ${$readableTopbarName} }`;

</script>

{#if show}
<div class="top-bar" in:fly|global={{y:-50, duration:1000}} out:fade>
        {#key displayName}
            <div class="pageName" in:typewriter|global={{}}>{displayName}</div>
        {/key}

        <div class="menu">
            <a  href="mailto:hillbgh@gmail.com" class="menu-item">
                <img src="icons/email.svg" alt="My Email" class="logo">
            </a>
            
            <a href="https://github.com/Vespertine112" class="menu-item" target="_blank">
                <img src="icons/github.svg" alt="GitHub" class="logo">
            </a>
            
            <a href="https://www.linkedin.com/in/brayden-hill/" class="menu-item" target="_blank">
                <img src="icons/linkedin.svg" alt="Linkedin" class="logo">
            </a>

        </div>        
    </div>
{/if}