<style>
    .profilePicWrapper {
        display: flex;
        justify-content: center;
    }
    
    .profilePic {
        height: 30vh;
        border-radius: 1em;
        border: 4px var(--verdigris) solid;
    }


</style>

<script lang="ts">
    import { typewriter } from "$lib/transitions";
    import { onDestroy, onMount } from "svelte";
    import { blur, fly } from "svelte/transition";
    import tippy, { type Props } from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';
    import { updateTopbarName, readableTopbarName } from "$lib/stores";
    
    updateTopbarName("Brayden Hill")

    let content = 'Cold in Colorado!';

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

    let show:boolean = false;
    onMount(()=>{
        show = true;
    });
    onDestroy(()=>{
        show = false;
    });

    let text = "Welcome in! I'm a software developer with <strong>4 years</strong> of experience.";

</script>

{#if show}
    <div transition:fly={{y:50, x:50, duration:1000}} class="cardWrapper">
        <h1 in:typewriter={{}}>Hi, I'm Brayden</h1>

        <div use:tooltip={{content, theme:"material", placement: "right"}} class="profilePicWrapper">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img transition:blur={{amount:100, duration:1000}} src="/images/profile.jpg" class="profilePic" alt="Profile Picture">
        </div>

        <p in:typewriter={{speed:5}}>{text}</p>
    </div>    
{/if}
