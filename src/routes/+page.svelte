<style>
    .cardWrapper {
        overflow-y: unset;
    }

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

    .p-line {
        padding: 0 1rem 0 1rem ;
    }

    .quoteBlock { 
        margin-top: auto;
        max-width:60vw;
        font-size: smaller;
    }

    @media only screen and (max-width: 767px) {
        .quoteBlock {
            font-size: x-small;
        }
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
    import { ForceRequestInit } from "$lib/types";
 
    updateTopbarName("Brayden Hill")
    let show:boolean = false;
    onMount(()=>{
        show = true;
    });
    onDestroy(()=>{
        show = false;
    });

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

    $: quote = {content: "", author: "", authorSlug: ""};
    $: author = {url: "", bio: "", description: ""};
    const getRandomInt = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;
    fetch("https://api.quotable.io/quotes?tags=Technology|Creativity|Imagination|Science|Creativity", ForceRequestInit)
        .then(result=>result.json())
        .then(result => {
            quote = result.results[getRandomInt(0, result.results.length)];
            return fetch(`https://api.quotable.io/authors?slug=${quote.authorSlug}`);
        })
        .then(response => response.json())
        .then(result => {                        
            let res = result.results[0];
            author = {url: res.link, bio: res.bio, description: res.description};            
        })
        .catch(err => {
            console.warn(`Error fetching home page quote`, err);
        })
</script>

{#if show}
    <div transition:fly={{y:50, x:50, duration:1000}} class="cardWrapper">
        <h1 class="topline" in:typewriter={{}}>Hi, I'm Brayden.</h1>

        <div class="profilePicWrapper">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img transition:blur={{amount:100, duration:1000}} src="/images/profile/profile.jpg" class="profilePic" alt="Profile Picture">
        </div>

        <p class="p-line" in:fly={{x:100, duration:2000}}>Welcome in! I'm a software developer with <strong>{(new Date().getFullYear()) - 2022} years</strong> of experience.</p>
        <p class="p-line" in:fly={{x:-100, duration:2000}}>Currently, I work as a <strong>Full-Stack Developer</strong>, but I have an interest in all things computing. </p>
        <p class="p-line" in:fly={{x:100, duration:2000}}>When I'm not writing code, I love to get outdoors, exercise, or fall down the rabbit hole on a fascinating topic! 
            <i><a class="links" href="https://en.wikipedia.org/wiki/The_Crystal_Palace" target="_blank">Crystal Palace, anyone?</a></i>
        </p>
        <p class="p-line" in:fly={{x:-100, duration:2000}}>Feel free to contact me at any of the links above! I'd love to hear from you!</p>

        <div class="quoteBlock">
            <i>{quote.content} - <a href={author.url} class="links" use:tooltip={{content: author.bio, theme:"material", placement:"top" }} target="_blank">{quote.author}</a></i>
        </div>
    </div>    
{/if}
