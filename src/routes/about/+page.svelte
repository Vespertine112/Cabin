<style>
    .card {
        border-radius: 8px; 
        border: 4px solid var(--linen);
        padding: 10px; 
        color: var(--linen); 
        box-shadow: 0 8px 16px rgba(0, 0, 0, 1);
        flex: 1;
    }

    .cardWrapper {
        border-radius: 8px;
        border: 4px solid var(--linen);
        padding: 10px;
        color: var(--linen);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 1);
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        align-content: flex-start;
        flex-wrap: nowrap;
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
    
    export let data: PageData;

</script>

<div transition:fly={{y:50, x:50, duration:1000}} class="cardWrapper">
    <h1>About Me</h1>
    tbd

    <hr>

    <div>
        <img class="resume" src="/icons/resume.png" alt="">
    </div>
</div>
    
