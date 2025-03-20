<script lang="ts">
	import { typewriter } from '$lib/transitions';
	import { blur, fly, scale } from 'svelte/transition';
	import tippy, { type Props } from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';
	import { onMount } from 'svelte';
	import { blurOptions, cardTransition } from '$lib/standards';
	import { updateTopbarName, readableTopbarName } from '$lib/stores';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import { cubicInOut, cubicOut, quintIn, quintOut } from 'svelte/easing';
	import { tooltip } from '$lib';
	import { blogPosts } from '$lib/blogPosts';

	let carousel: any;

	let show: boolean = false;
	onMount(() => {
		show = true;
	});

	updateTopbarName('Bi-occasional Posts');

	fetch;

	$: revealImages = false;
	setTimeout(() => {
		revealImages = true;
	}, 750);
</script>

{#if show}
	<div transition:fly={cardTransition} class="cardWrapper">
		<h1 class="topline">~ Posts ~</h1>
		<div style="display: flex; flex-direction: row">
			<p style="margin:0; font-style: italic">Here is where I write the dumb thoughts...</p>
			<sup
				style="margin-left: 1em"
				use:tooltip={{ content: 'Warning: For legal reasons everything on written under /blog is satire.', theme: 'material', placement: 'bottom' }}>⚠</sup
			>
		</div>
		<hr />

		{#each blogPosts as post}
			<div class="blogWrapper" id={post.sectionId}>
				<div class="blogTopper" transition:blur={blurOptions}>
					<div class="name-and-icon">
						<a class="links" use:tooltip={{ content: post.tagline, theme: 'material', placement: 'left' }} href={post.url} target={post.newTarget ? '_blank' : ''}
							>{post.name}</a
						> <span style=" margin-left: 0.5rem;">- {post.date}</span>
					</div>
				</div>

				{#if browser}
					<div class="carouselWrapper">
						{#if post.images && revealImages}
							<hr class="mediumHr" />
							<Carousel autoplay autoplayDuration={12500} autoplayProgressVisible pauseOnFocus swiping={true} bind:this={carousel}>
								{#each post.images as image, i}
									<img class="carouselImage" in:scale|global={{ delay: 1000 * i, duration: 1000, easing: quintOut }} src={image} alt="" />
								{/each}
							</Carousel>
						{/if}

						{#if post.video}
							<!-- svelte-ignore a11y-media-has-caption -->
							<video class="carouselImage" src={post.video} controls loop autoplay></video>
						{/if}
					</div>
				{/if}

				<hr class="smallHr" />

				<div class="experienceDescription" in:typewriter|global={{ speed: 10 }}>
					{@html post.description}
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

	.links {
		font-style: italic;
		font-size: 1.5rem;
		font-weight: bolder;
	}
	.blogTopper {
		font-family: 'JetBrains Mono';
		width: 100%;
	}
	.name-and-icon {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.postTagline {
		font-weight: bold;
		color: var(--accent-color);
		font-style: italic;
		margin-top: 0.5rem;
		font-size: small;
		width: 100%;
	}

	.blogWrapper {
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

	.postDescription {
		padding: 4px 0 4px 0;
	}

	.posts {
		overflow: visible;
	}

	@media only screen and (max-width: 767px) {
		.blogWrapper {
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
