<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { typewriter } from '$lib/transitions';
	import { updateTopbarName, readableTopbarName } from '$lib/stores';
	import Hamburger from './Navbar/Hamburger.svelte';
	import { tooltip } from '$lib';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';

	export let sidebar = false;

	let show = false;
	onMount(() => {
		show = true;
	});

	$: displayName = `{${$readableTopbarName}}`;

	let nameStorage: string = '';
	readableTopbarName.subscribe((name) => {
		if (name != 'Vespertine') nameStorage = name;
	});

	function vesperizeName() {
		updateTopbarName('Vespertine');
	}
	function regularName() {
		updateTopbarName(nameStorage);
	}
</script>

{#if show}
	<div
		class="top-bar"
		style={sidebar ? 'z-index: 1001' : 'z-index: 0'}
		on:mouseenter={vesperizeName}
		on:mouseleave={regularName}
		in:fly|global={{ y: -50, duration: 1000 }}
		out:fade
	>
		<div class="hamburger">
			<Hamburger bind:open={sidebar}></Hamburger>
		</div>

		<!-- A wee little easter egg lol -->
		{#key displayName}
			<a href="/lunarlander" style="color: var(--linen); text-decoration: none;">
				<div class="pageName" in:typewriter|global={{ speed: 1 }}>
					{displayName}
				</div>
			</a>
		{/key}

		<div class="menu">
			<a use:tooltip={{ content: 'Email Me!', theme: 'material', placement: 'bottom' }} href="mailto:hillbgh@gmail.com" class="menu-item">
				<img src="icons/email.svg" alt="My Email" class="logo" />
			</a>

			<a use:tooltip={{ content: 'My Github', theme: 'material', placement: 'bottom' }} href="https://github.com/Vespertine112" class="menu-item" target="_blank">
				<img src="icons/github.svg" alt="GitHub" class="logo" />
			</a>

			<a use:tooltip={{ content: 'My LinkedIn', theme: 'material', placement: 'bottom' }} href="https://www.linkedin.com/in/brayden-hill/" class="menu-item" target="_blank">
				<img src="icons/linkedin.svg" alt="Linkedin" class="logo" />
			</a>
		</div>
	</div>
{/if}

<style>
	.top-bar {
		border-radius: 8px;
		border: 1px solid var(--linen);
		padding: 10px;
		color: var(--linen);
		background-color: var(--background);
		display: flex;
		justify-content: space-between;
		box-shadow: var(--shadow);
		align-items: center;
	}

	.pageName {
		font-size: 1.5rem;
		font-family: 'JetBrains Mono';
	}

	.menu {
		display: flex;
	}

	.menu-item {
		margin-left: 7.5px;
		margin-right: 7.5px;
	}

	.logo {
		fill: var(--linen);
		height: 100%;
		width: 100%;
	}

	.hamburger {
		display: none;
	}

	@media only screen and (max-width: 767px) {
		.pageName {
			font-size: 1rem;
			font-family: 'JetBrains Mono';
		}

		.hamburger {
			display: flex;
		}
	}
</style>
