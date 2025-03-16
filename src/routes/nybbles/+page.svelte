<script lang="ts">
	// Import necessary modules and types
	import { typewriter } from '$lib/transitions';
	import { blur, fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { blurOptions, cardTransition } from '$lib/standards';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import { updateTopbarName, readableTopbarName } from '$lib/stores';
	import { quintOut } from 'svelte/easing';
	import { tooltip } from '$lib';
	import { nybbles } from '$lib/nybbles';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';

	// export let data: PageData;

	let show: boolean = false;
	let carousel: any;

	onMount(() => {
		show = true;
	});

	updateTopbarName('Nybbles');

	$: revealImages = false;
	setTimeout(() => {
		revealImages = true;
	}, 750);
</script>

{#if show}
	<div transition:fly={cardTransition} class="cardWrapper">
		<h1 class="topline">Nybbles</h1>
		<div style="display: flex; flex-direction: row">
			<p style="margin:0; font-style: italic">Small afternoon or weekend projects</p>
			<sup style="margin-left: 1em" use:tooltip={{ content: 'A Nibble (nybble) is a half a byte!', theme: 'material', placement: 'bottom' }}></sup>
		</div>
		<hr />

		{#each nybbles as nybble}
			<div class="projectWrapper" id={nybble.sectionId}>
				<div class="projectTopper" transition:blur={blurOptions}>
					<div class="name-and-icon">
						<a
							class="links"
							use:tooltip={{ content: nybble.urlTippy, theme: 'material', placement: 'left' }}
							href={nybble.url}
							target={nybble.newTarget ? '_blank' : ''}>{nybble.name}</a
						> <span style="font-size: 1.5rem; margin-left: 1rem;">{nybble.icon}</span>
					</div>

					<div class="projectTechnologies">Technologies: {nybble.technologies}</div>
					<div class="lineLabel">{nybble.date}</div>
				</div>

				<hr class="mediumHr" />

				{#if browser}
					<div class="carouselWrapper">
						{#if nybble.images && revealImages}
							<Carousel autoplay autoplayDuration={7500} autoplayProgressVisible pauseOnFocus swiping={true} bind:this={carousel}>
								{#each nybble.images as image, i}
									<img class="carouselImage" in:scale|global={{ delay: 1000 * i, duration: 1000, easing: quintOut }} src={image} alt="" />
								{/each}
							</Carousel>
						{/if}

						{#if nybble.video}
							<!-- svelte-ignore a11y-media-has-caption -->
							<video class="carouselImage" src={nybble.video} controls loop autoplay></video>
						{/if}
					</div>
				{/if}

				<hr class="smallHr" />

				<div class="experienceDescription" in:typewriter|global={{ speed: 20 }}>
					{@html nybble.description}
				</div>

				<hr class="smallHr" />
			</div>
		{/each}
	</div>
{/if}

<style>
	hr {
		width: 100%;
	}

	h1 {
		font-family: 'JetBrains Mono';
		font-weight: normal;
	}

	.mediumHr {
		width: 50vw;
	}

	.smallHr {
		width: 30vw;
	}

	.projectWrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 50vw;
		margin: 8px 0 0 0;
	}

	.carouselWrapper {
		width: 60%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
	}

	.links {
		font-style: italic;
		font-weight: bold;
		font-size: 1.5rem;
	}

	.projectTechnologies {
		font-weight: bold;
		color: var(--accent-color);
		width: 100%;
	}

	.lineLabel {
		font-weight: bold;
	}

	.projectTopper {
		font-family: 'JetBrains Mono';
		width: 100%;
	}

	.carouselImage {
		width: 100%;
	}

	@media only screen and (max-width: 767px) {
		.projectWrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 78vw;
			margin: 8px 0 0 0;
		}

		.carouselWrapper {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-content: center;
			align-items: center;
		}
	}

	.name-and-icon {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
