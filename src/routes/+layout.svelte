<style global>

    .pageWrapper {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 2em);
        padding: 1em;
    }

    .bodyColumns {
        margin-top: 4px; 
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        flex: 1;
        max-height: 92vh;
    }
    
    .navbar {
        display: flex;
        height: 100%;
    }
    
    .slotted {
        display: flex;
        height: 100%;
        z-index: 0;
        flex: 1;
    }

    @media only screen and (max-width: 767px) {
        .slotted { 
            display: flex;
            flex: 1 0 90%;
            max-height: 90vh;
        }
        
        .navbar { 
            width: 0%;
            flex: 0 0 0%;
        }
    }
    
</style>

<script lang="ts">
	import { onMount } from "svelte";
    import Navbar from "./Navbar/Navbar.svelte";
    import Topbar from "./Topbar.svelte";
    import { fly } from "svelte/transition";
    import { page } from "$app/stores";

    let show:boolean = false;
    onMount(()=>{
        show = true;
    });

    let open = false;

    $page.url

</script>

<div class="pageWrapper">
    <Topbar bind:sidebar={open}/>

    <div class="bodyColumns">
        <div class="navbar">
            <Navbar bind:open/>
        </div>
        {#if show}
            <div class="slotted">
                <slot/>
            </div>
        {/if}
    </div>
</div>