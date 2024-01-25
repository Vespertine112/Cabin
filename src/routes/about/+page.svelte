<style>
    .card {
        border-radius: 8px; 
        border: 4px solid var(--linen);
        padding: 10px; 
        color: var(--linen); 
        box-shadow: var(--shadow);
        flex: 1;
    }

    .resume {
        height: 5vh;
    }

    hr {
        width: 100%;
    }

</style>

<script lang="ts">
    import { typewriter } from "$lib/transitions";
    import { blur, fly } from "svelte/transition";
    import tippy, { type Props } from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';
    import type { PageData } from './$types';
    import { onDestroy, onMount } from "svelte";
    import { cardTransition } from "$lib/standards";
    import { updateTopbarName } from "$lib/stores";
    
    export let data: PageData;

    let show:boolean = false;
    onMount(() => {
        show = true;
    });

    updateTopbarName("About Me");

    let content = 'Grab a copy of my current Resume!';

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
</script>

{#if show}
    <div in:fly={cardTransition} out:fly={{y:50, x:50, duration:1000}} class="cardWrapper">
        <h1>About Me</h1>
        tbd

        <hr>

        <div use:tooltip={{content, theme:"material", placement: "right"}}>
            <a href="https://drive.google.com/file/d/1laEwku355kUeae-_aoF442zvMpOCNZfe/view?usp=sharing" target="_blank">
                <img class="resume" src="/icons/resume.svg" alt="">
            </a>
        </div>
    </div>    
{/if}
