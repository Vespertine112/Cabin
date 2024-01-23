<style>
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
    import { blur, fly } from "svelte/transition";
    import tippy, { type Props } from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';

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

</script>

<div transition:fly={{y:50, x:50, duration:1000}} class="cardWrapper">
    <h1 in:typewriter={{}}>Hi, I'm Brayden</h1>

    <div use:tooltip={{content, theme:"material", placement: "right"}} class="profilePicWrapper">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img transition:blur={{amount:100, duration:1000}} src="/images/profile.jpg" class="profilePic" alt="Profile Picture">
    </div>

    <p in:typewriter={{speed:5}}>I'm currently a software developer who loves all things learning, tinkering, and just about anything outdoors!</p>
</div>
