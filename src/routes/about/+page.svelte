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
    import { typewriter } from "$lib/transitions";
    import { blur, fly } from "svelte/transition";
    import tippy, { type Props } from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';
    import type { PageData } from './$types';
    import { onDestroy, onMount } from "svelte";
    import { cardTransition } from "$lib/standards";
    import { updateTopbarName } from "$lib/stores";
    import Carousel from 'svelte-carousel';
    import { browser } from "$app/environment";
    
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
                <p class="p-line" in:fly={{x:100, duration:2000}} >I'm currently a software developer with {(new Date().getFullYear() - 2020)} years of professional experience, and many more in the learning phases.</p>
                <p class="p-line" in:fly={{x:-100, duration:2000}} >I graduated
				from Utah State University in <b>May 2024</b> with a <b>B.S.
				Computer Science & Mathematics Minor.</b></p>
                <p class="p-line" in:fly={{x:100, duration:2000}} >I love to tinker and learn new technologies, with a current penchant for split ortholinear keyboards, like my Corne!</p>
                <p class="p-line" in:fly={{x:-100, duration:2000}} >Grab a copy of my <a class="links" href="pdf/Resume.pdf" target="_blank">current resume</a> here! </p>
            </div>
    
            <!-- <div use:tooltip={{content, theme:"material", placement: "right"}}>
                <a href="https://drive.google.com/file/d/1laEwku355kUeae-_aoF442zvMpOCNZfe/view?usp=sharing" target="_blank">
                    <img class="resume" src="/icons/resume.svg" alt="">
                </a>
            </div> -->
        </div>
    </div>    
{/if}
