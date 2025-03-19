<script lang="ts">
	import { typewriter } from '$lib/transitions';
	import { onDestroy, onMount } from 'svelte';
	import { blur, fly } from 'svelte/transition';
	import { updateTopbarName, readableTopbarName } from '$lib/stores';
	import { tooltip } from '$lib';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';
	import { ForceRequestInit } from '$lib/types';

	updateTopbarName('Brayden Hill');
	let show: boolean = false;
	onMount(() => {
		show = true;
	});
	onDestroy(() => {
		show = false;
	});

	$: quote = { content: '', author: '', authorSlug: '' };
	$: author = { url: '', bio: '', description: '' };
	const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
	fetch('https://quotable.vercel.app/quotes?tags=Technology|Creativity|Imagination|Science|Creativity', ForceRequestInit)
		.then((result) => result.json())
		.then((result) => {
			quote = result.results[getRandomInt(0, result.results.length)];
			return fetch(`https://quotable.vercel.app/authors?slug=${quote.authorSlug ?? 'albert-einstein'}`);
		})
		.then((response) => response.json())
		.then((result) => {
			let res = result.results[0];
			author = { url: res.link, bio: res.bio, description: res.description };
		})
		.catch((err) => {
			console.warn(`[ERROR] Home Page Quote`, err);
		});
</script>

{#if show}
	<div transition:fly={{ y: 50, x: 50, duration: 1000 }} class="cardWrapper">
		<h1 class="topline" in:typewriter={{ speed: 2 }}>Woah there, this page doesn't exist yet.</h1>
		<p in:typewriter={{ speed: 2 }}>maybe ever? where exactly are you?</p>

		<img src="https://imgs.xkcd.com/comics/lungfish.png" id="xkcd" alt="The xkcd comic of the day" />

		<div class="quoteBlock">
			<i
				>{quote?.content ?? ''} -
				<a href={author?.url ?? ''} class="links" use:tooltip={{ content: author?.bio ?? '', theme: 'material', placement: 'top' }} target="_blank">{quote.author}</a></i
			>
		</div>
	</div>
{/if}

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
		padding: 0 1rem 0 1rem;
	}

	.quoteBlock {
		margin-top: auto;
		max-width: 60vw;
		font-size: smaller;
	}

	@media only screen and (max-width: 767px) {
		.quoteBlock {
			font-size: x-small;
		}
	}
</style>
