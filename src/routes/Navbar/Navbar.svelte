<script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { projects } from '$lib/projects';
	import { nybbles } from '$lib/nybbles';
	import { experiences } from '$lib/experience';

	export const navOptions = [
		{ url: '/', label: 'Home' },
		{ url: '/about', label: 'About' },
		{ url: '/experience', label: 'Experience', subItems: experiences.map((e) => ({ url: `/experience#${e.sectionId}`, label: e.name })) },
		{
			url: '/projects#',
			label: 'Projects',
			subItems: projects.map((p) => ({ url: `/projects#${p.sectionId}`, label: p.name }))
		},
		{ url: '/nybbles', label: 'Nybbles', subItems: nybbles.map((p) => ({ url: `/nybbles#${p.sectionId}`, label: p.name })) }
	];

	export let open = false;
	let show: boolean = false;

	onMount(() => {
		show = true;
	});

	let intSelected: number = navOptions.findIndex((option) => option.url == $page.route.id);

	function changeComponent(i: number) {
		return function (event: any) {
			intSelected = i;
			open = false;
		};
	}
</script>

{#if show || open}
	<nav in:fly|global={{ y: 50, x: -50, duration: 1000 }} class={open ? 'open navbar' : 'closed navbar'}>
		<ul>
			{#each navOptions as nav, i}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li class={intSelected == i ? 'active ' : ''}>
					{#if nav.subItems}
						<!-- svelte-ignore a11y-interactive-supports-focus -->
						<div class="projects-container" role="button">
							<a class="nav-link list-item" href={nav.url} on:click={changeComponent(i)} style="display: flex; align-items: center; justify-content: space-between;">
								<span>
									<span class="link-arrow">=></span>
									{nav.label}
								</span>
							</a>

							<ul class="sub-menu">
								{#each nav.subItems as subItem, j}
									<li style="--item-index: {j};">
										<a href={subItem.url} class="list-item submenu-item" on:click={changeComponent(i)} style="font-size: small;">
											<span>󰘍</span>
											{subItem.label}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					{:else}
						<a class="nav-link list-item" on:click={changeComponent(i)} id={i.toString()} transition:fade|global={{ delay: i * 500 }} href={nav.url}>
							<span class="link-arrow">=></span>
							{nav.label}
						</a>
					{/if}
				</li>
				<hr />
			{/each}
		</ul>
	</nav>
{/if}

{#if open}
	<div class="overlay"></div>
{/if}

<style>
	nav {
		border-radius: 8px;
		border: 1px solid var(--linen);
		background-color: var(--background);
		padding: 10px;
		box-shadow: var(--shadow);
		display: flex;
		margin: 0 4px 0 0;
		flex-direction: column;
		flex: 1 1 auto;
		z-index: 0;
		transition:
			transform 0.25s ease-in-out,
			width 0.3s ease-in-out,
			max-width 0.3s ease-in-out;
		width: auto;
		max-width: 100%;
		overflow: hidden; /* Add this to prevent content from showing outside during animation */
		width: min-content;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	li {
		margin: 8px 15px 8px 0;
	}

	a {
		text-decoration: none;
		color: #ffffff;
		font-family: 'JetBrains Mono';
	}

	hr {
		width: 100%;
	}

	.link-arrow {
		color: var(--linen);
		font-weight: 900;
		font-style: normal;
		display: inline-block;
		transform: rotate(0deg);
		transition: transform 0.25s ease-in-out; /*  Both ways */
	}

	.nav-link {
		text-decoration: none;
		display: block;
		text-wrap: nowrap;
	}

	.active > a {
		color: #f2a378;
		font-weight: bolder;
		text-shadow: 0px 0px 12px var(--verdigris);
	}

	.list-item {
		margin: 0;
		transition: 0.2s;
	}

	.list-item:hover {
		color: var(--verdigris);
		text-shadow: 0px 0px 12px var(--verdigris);
	}

	.open {
		left: 1rem;
		transition: left 0.5s ease-in-out;
		z-index: 1001;
	}

	.closed {
		left: -100%;
		transition: left 0.5s ease-in-out;
		z-index: 1001;
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1000;
	}

	.projects-container {
		cursor: pointer;
		width: 100%;
	}

	.projects-container:hover .sub-menu {
		max-height: 1000px; /* Allow for many items */
		opacity: 1;
		visibility: visible;
	}

	.projects-container:hover .link-arrow {
		transform: rotate(90deg);
		transition: transform 0.25s ease-in-out;
	}

	.sub-menu {
		list-style: none;
		max-height: 0;
		opacity: 0;
		visibility: hidden;
		overflow: hidden;
		padding-left: 20px;
		transition:
			max-height 0.3s ease,
			opacity 0.3s ease,
			visibility 0.3s ease;
	}

	.sub-menu li {
		margin: 2px 0;
		transform: translateX(-20px);
		opacity: 0;
		transition:
			transform 0.3s ease,
			opacity 0.3s ease;
		transition-delay: calc(var(--item-index, 0) * 0.05s);
	}

	.projects-container:hover .sub-menu li {
		transform: translateX(0);
		opacity: 1;
	}

	@media (pointer: coarse) {
		a:hover {
			display: none;
		}
	}

	@media only screen and (max-width: 767px) {
		.navbar {
			position: absolute;
		}

		.navbar > ul > li {
			font-size: smaller;
		}
	}
</style>
