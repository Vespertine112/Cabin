<script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { projects } from '$lib/projects';

	export const navOptions = [
		{ url: '/', label: 'Home' },
		{ url: '/about', label: 'About' },
		{ url: '/experience', label: 'Experience' },
		{
			url: '/projects',
			label: 'Projects',
			subItems: projects.map((p) => ({ url: `/projects#${p.sectionId}`, label: p.name }))
		},
		{ url: '/nybbles', label: 'Nybbles' }
	];

	export let open = false;
	let show: boolean = false;
	let projectsOpen = false;

	onMount(() => {
		show = true;
	});

	let intSelected: number = navOptions.findIndex((option) => option.url == $page.route.id);

	function changeComponent(event: any) {
		intSelected = event.srcElement.id;
		open = false;
	}

	function openProjects() {
		projectsOpen = true;
	}

	function closeProjects() {
		projectsOpen = false;
	}
</script>

{#if show || open}
	<nav in:fly|global={{ y: 50, x: -50, duration: 1000 }} class={open ? 'open navbar' : 'closed navbar'}>
		<ul>
			{#each navOptions as nav, i}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li class={intSelected == i ? 'active list-item' : 'list-item'}>
					{#if nav.subItems}
						<!-- svelte-ignore a11y-interactive-supports-focus -->
						<div class="projects-container" role="button" aria-expanded={projectsOpen} on:mouseenter={openProjects} on:mouseleave={closeProjects}>
							<a class="nav-link" href={nav.url} style="display: flex; align-items: center; justify-content: space-between;">
								<span>
									<span class="link-arrow" class:open={projectsOpen}>=></span>
									{nav.label}
								</span>
							</a>
							{#if projectsOpen}
								<ul class="sub-menu">
									{#each nav.subItems as subItem}
										<li class="sub-menu-item">
											<a href={subItem.url} style="font-size: small;">
												<span>󰘍</span>

												{subItem.label}
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						</div>
					{:else}
						<a class="nav-link" on:click={changeComponent} id={i.toString()} transition:fade|global={{ delay: i * 500 }} href={nav.url}>
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
			width 0.3s ease-in-out; /* Add width transition */
		width: auto; /* Allow width to be dynamic */
		max-width: 100%; /* Prevent overflow */
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

	.link-arrow.open {
		transform: rotate(90deg);
		transition: transform 0.25s ease-in-out; /*  Both ways */
	}

	.nav-link {
		text-decoration: none;
		display: block;
		text-wrap: nowrap;
		padding: 8px 15px 8px 0;
	}

	.active > a {
		color: var(--verdigris);
		font-weight: bolder;
		text-shadow: 0px 0px 12px var(--verdigris);
	}

	.list-item {
		margin: 0;
		transition: 0.2s;
	}

	.list-item:hover {
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
	}

	.sub-menu {
		list-style: none;
		padding-left: 20px;
	}

	.sub-menu li {
		margin: 0;
	}

	.sub-menu-item:hover {
		text-shadow: 0px 0px 12px var(--verdigris); /* Hover for subitems */
	}

	.projects-container:hover {
		text-shadow: 0px 0px 12px var(--verdigris); /*  Hover for entire Projects menu */
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
