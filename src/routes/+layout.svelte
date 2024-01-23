<style global>

    .pageWrapper {
        background: var(--background);
        display: flex;
        flex-direction: column;
        height: calc(100vh - 2em);
        padding: 1em;
    }

    .bodyColumns {
        background: var(--background);
        margin-top: 4px; 
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        flex: 1;
        height: 100%;
    }
    
    .navbar {
        display: flex;
        flex: 1 0 10%;
        height: 100%;
    }

    .slotted {
        display: flex;
        flex: 1 0 90%;
        height: 100%;
    }
</style>

<script lang="ts">
	import { onMount } from "svelte";
    import Navbar from "./Navbar.svelte";
    import Topbar from "./Topbar.svelte";
    import { fly } from "svelte/transition";
    import { page } from "$app/stores";

    let show:boolean = false;
    onMount(()=>{
        show = true;
    });

    $page.url
</script>

<div class="pageWrapper">
    <Topbar/>

    <div class="bodyColumns">
        <div class="navbar">
            <Navbar/>
        </div>
        {#if show}
            <div class="slotted">
                <slot/>
            </div>
        {/if}
    </div>
</div>