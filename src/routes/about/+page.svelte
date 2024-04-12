<style>
    .card {
        border-radius: 8px; 
        border: 4px solid var(--linen);
        padding: 10px; 
        color: var(--linen); 
        box-shadow: var(--shadow);
        flex: 1;
    }

    .aboutWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50vw;
    }

    .resume {
        height: 5vh;
    }

    hr {
        width: 100%;
    }

    .aboutContainer { 
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .imageLabel { 
        position: absolute;
        bottom: 0;
    }

    .image {
        max-width: 50vw;
    }

    .links {
         font-style: italic;
    }

    .p-line {
        padding: 0 1rem 0 1rem;
    }


	.corne{
		width: 80%;
		box-shadow: unset !important;
		padding: unset !important;
	}

    @media only screen and (max-width: 767px) {
        .aboutWrapper { 
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 78vw;
            margin: 8px 0 0 0;
        }
    }

</style>

<script lang="ts">
    import { fly } from "svelte/transition";
    import tippy, { type Props } from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';
    import type { PageData } from './$types';
    import { onMount } from "svelte";
    import { cardTransition } from "$lib/standards";
    import { updateTopbarName } from "$lib/stores";
    
    export let data: PageData;
    let carousel:any; 
    let images:object[] = [
        {
            src:"/images/about/corne.jpg", 
            label: "My Corne v3",
        },
        {
            src:"/images/about/usu.jpg", 
            label: "Utah State University",
        },
        {
            src:"/images/about/campfire.gif", 
            label: "Camping",
        },
    ];
    
    let show:boolean = false;
    onMount(() => {
        show = true;
    });
    const handleNextClick = () => {
        carousel.goToNext()
    }

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
        <h1 class="topline">About Me</h1>
        <hr>
        <div class="aboutWrapper">
    
            <!-- {#if browser}
                <Carousel
                autoplay
                autoplayDuration={5000}
                autoplayProgressVisible
                pauseOnFocus
                swiping={true}
                bind:this={carousel}
                >
    
                {#each images as image}
                <div>
                    <img class="image" src={image.src} alt="">
                    <p class="imageLabel">{image.label}</p>
                </div>
                {/each}
                </Carousel>
            {/if} -->
    
            <div class="aboutContainer">
                <p class="p-line" in:fly={{x:100, duration:2000}} >I'm currently a software developer with {(new Date().getFullYear() - 2022)} years of professional experience, and many more in the learning phases.</p>
                <p class="p-line" in:fly={{x:-100, duration:2000}} >I graduated from Utah State University with a B.S Computer Science and a Mathematics minor.</p>
                <p class="p-line" in:fly={{x:100, duration:2000}} >I love to tinker and learn new technologies, with a current penchant for split ortholinear
				keyboards, like my <a class="links" href="https://github.com/foostan/crkbd">Corne</a>!</p>

				<img src="images/about/corne.jpg" alt="" class="cardWrapper corne">
                
				<p class="p-line" in:fly={{x:-100, duration:2000}} >Grab a copy of my <a class="links" href="pdf/Resume.pdf" target="_blank">current resume</a></p>
				
				<hr style="width: 100%">

				<p>I built this site with Svelte, you can check out the <a class="links" href="https://github.com/Vespertine112/Cabin" target = "_blank">public repo</a>!</p>
            </div>
    
        </div>
    </div>    
{/if}
