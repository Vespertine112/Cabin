<style>
    .profilePicWrapper {
        display: flex;
        justify-content: center;
    }
    
    .profilePic {
        max-height: 30vh;
        max-width: 60vw;
        border-radius: 1em;
        border: 4px var(--verdigris) solid;
    }

    .links {
        color: var(--linen);
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

</script>

{#if show}
    <div transition:fly={{y:50, x:50, duration:1000}} class="cardWrapper">
        <h1 in:typewriter={{}}>Hi, I'm Brayden.</h1>

        <div use:tooltip={{content, theme:"material", placement: "right"}} class="profilePicWrapper">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img transition:blur={{amount:100, duration:1000}} src="/images/profile/profile.jpg" class="profilePic" alt="Profile Picture">
        </div>

        <p in:fly={{x:500, duration:2500}}>Welcome in! I'm a software developer with <strong>{(new Date().getFullYear()) - 2020} years</strong> of experience.</p>
        <p in:fly={{x:-500, duration:2500}}>Currently, I work as a <strong>Full-Stack Developer</strong>, but I have an interest in all things computing. </p>
        <p in:fly={{x:500, duration:2500}}>When I'm not writing code, I love to get outdoors, exercise, or fall down the rabbit hole on a fascinating topic! 
            <i><a class="links" href="https://en.wikipedia.org/wiki/The_Crystal_Palace" target="_blank">Crystal Palace, anyone?</a></i>
        </p>
        <p in:fly={{x:-500, duration:2500}}>Feel free to contact me at any of the links above! I'd love to hear from you!</p>
    </div>    
{/if}
