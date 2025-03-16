<script lang="ts">
	import { typewriter } from '$lib/transitions';
	import { blur, fly, scale } from 'svelte/transition';
	import tippy, { type Props } from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { blurOptions, cardTransition } from '$lib/standards';
	import { updateTopbarName, readableTopbarName } from '$lib/stores';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import { cubicInOut, cubicOut, quintIn, quintOut } from 'svelte/easing';
	import { experiences } from '$lib/experience';

	// export let data: PageData;
	let carousel: any;

	let show: boolean = false;
	onMount(() => {
		show = true;
	});

	updateTopbarName('Experience');

	$: revealImages = false;
	setTimeout(() => {
		revealImages = true;
	}, 750);
</script>

{#if show}
	<div in:fly={cardTransition} class="cardWrapper">
		<h1 class="topline">Professional Experience</h1>

		<hr />

		<div class="experiences">
			{#each experiences as exper}
				<div class="experienceWrapper" id={exper.sectionId}>
					<div transition:blur={blurOptions}>
						<img class="companyLogo" style="background-color: white;" src={exper.logo} alt="" />
					</div>

					<div class="experienceTime">
						<div class="">
							<a class="links" href={exper.url} target="_blank">{exper.name}</a>
						</div>
						<div class="lineLabel">{exper.elapsedTime}</div>
						<div class="lineLabel">{exper.jobTitle} - {exper.technologies}</div>
					</div>
					<hr class="mediumHr" />

					{#if browser && revealImages}
						<div class="carouselWrapper" in:scale|global={{ duration: 1000, easing: quintOut }}>
							{#if exper.images}
								<Carousel autoplayDuration={5000} autoplayProgressVisible pauseOnFocus swiping={true} bind:this={carousel}>
									{#each exper.images as image, i}
										<img class="carouselImage" src={image} alt="" />
									{/each}
								</Carousel>
							{/if}
						</div>
					{/if}

					<hr class="mediumHr" />

					<div class="experienceDescription">
						{exper.description}
					</div>

					<hr class="smallHr" />
					<div class="experienceNotes">
						<ul>
							{#each exper.listNotes as note}
								<li in:typewriter|global={{ speed: 10 }}>{note}</li>
							{/each}
						</ul>
					</div>

					<hr />
				</div>
			{/each}
		</div>
	</div>
{/if}

<style>
	.companyLogo {
		height: 5vh;
		border-radius: 4px;
	}

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

	.links {
		font-style: italic;
		font-size: 1.5rem;
		font-weight: bolder;
	}

	.lineLabel {
		font-weight: bold;
	}

	.experienceWrapper {
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

	.experienceTime {
		width: 100%;
	}

	.experienceDescription {
		padding: 4px 0 4px 0;
	}

	.experiences {
		overflow: visible;
	}

	@media only screen and (max-width: 767px) {
		.experienceWrapper {
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
</style>
