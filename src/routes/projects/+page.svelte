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
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';

	// export let data: PageData;

	let show: boolean = false;
	let carousel: any;

	onMount(() => {
		show = true;
	});

	updateTopbarName('Projects');

	const projects = [
		{
			name: 'Slyther.io',
			icon: '🐍',
			url: 'https://github.com/Vespertine112/slyther.io',
			urlTippy: 'Check out the Repo!',
			technologies: 'Svelte, Typescript, Socket.io (Websockets), etc',
			newTarget: true,
			date: 'April 2024',
			images: [
				'images/slyther/slyther_start.gif',
				'images/slyther/slyther_long_snake.gif',
				'images/slyther/slyther_multiplayer.gif'
			],
			description:
				"Built a FOSS clone of popular multiplayer snake games! Watch a <a class='links' href='https://youtu.be/Ma6ILRWCc4o?si=uWpkPHns6UMs9q6m'>gameplay demo</a>, or see <a class='links' href='https://www.youtube.com/watch?v=SWfXIEYYWyw'>mobile support</a>. It includes the client & server, scoring, multiple control schemes & mappable controls, Real-time leaderboard tracking, dynamic aspect ratio rendering, Input lag calculation, Mobile support, and so much more! Play today at the link above (it's a github link, you need to build it)."
		},
		{
			name: 'LunarLander',
			icon: '🚀',
			url: '/lunarlander',
			urlTippy: 'Play Now!',
			technologies: 'Svelte, Typescript, State Machines, etc',
			newTarget: false,
			date: 'Feb 2024',
			images: [
				'images/lunarlander/MainMenu.png',
				'images/lunarlander/Level_Select.png',
				'images/lunarlander/Playing.png'
			],
			description:
				'Built a LunarLander clone from scratch with typescript, and svelte. It has custom particle systems, re-mappable controls, realistic gravity, and more!'
		},
		{
			name: 'OpenLift',
			icon: '🏋',
			url: 'https://github.com/Vespertine112/OpenLift',
			urlTippy: 'Check out the Repo!',
			technologies: 'Python, PyTorch, Pandas, Numpy, etc',
			newTarget: true,
			date: 'Nov 2023',
			images: [
				'images/projects/Bench_Txt.png',
				'images/projects/Squat_AP.png',
				'images/projects/Squat_RES.png',
				'images/projects/No_Lift_RES.png',
				'images/projects/No_Lift_AP.png'
			],
			description:
				'Designed a Machine Learning Pipeline & Models to predict powerlifting totals for competition lifts. The models are very highly performant (R² >= 0.97). Performed data cleaning and curating, optimizing for lowest feature space possible with performance. Implemented custom classification reporting and analysis to parse results.'
		},
		{
			name: "Dan's Frapuccino Paradise",
			icon: '☕️',
			url: 'https://docs.google.com/presentation/d/1elEZDd05HZh93MPgyaXxibHc3Y2HYyfBIkBaPX2hfpk/edit?usp=sharing',
			urlTippy: 'Project Overview',
			technologies: 'Typescript, Angular, Firebase Auth, MongoDB, Django',
			newTarget: true,
			date: 'Aug - Dec 2022',
			images: ['/images/projects/frap2.png', '/images/projects/frap3.png', '/images/projects/frap4.png'],
			description:
				'Led a team of student engineers to build a custom complete web application for a frappuccino shop. Developed and designed user account management through Firebase Auth, including many OAuth providers, and its interpolation in MongoDB. Helped architect and implement the ordering user flow in both the back-end and front-end, to create a streamlined experience and allow for order add-ons.'
		},
		{
			name: 'High Performance Viewshed Computation',
			icon: '🧑‍💻️',
			url: '',
			urlTippy: 'Available on request',
			technologies: 'C++, MPI, CUDA, OpenMP',
			newTarget: false,
			date: 'Dec 2022',
			video: 'images/projects/viewshed.mp4',
			description:
				'Worked on a team to create a high performance viewshed computation, running on multiple GPUs and CPUs across a clustered network. Designed and implemented the MPI control structure for the division of critical data across the network, and the accompanying distributed CPU approach. Created data visualizations and produced scaling reporting for the final program to demonstrate a 3600x increase in performance over single core.'
		}
	];

	$: revealImages = false;
	setTimeout(() => {
		revealImages = true;
	}, 750);
</script>

{#if show}
	<div transition:fly={cardTransition} class="cardWrapper">
		<h1 class="topline">Projects</h1>
		<hr />

		{#each projects as project}
			<div class="projectWrapper" id={project.name}>
				<div class="projectTopper" transition:blur={blurOptions}>
					<div class="name-and-icon">
						<a
							class="links"
							use:tooltip={{ content: project.urlTippy, theme: 'material', placement: 'left' }}
							href={project.url}
							target={project.newTarget ? '_blank' : ''}>{project.name}</a
						> <span style="font-size: 1.5rem; margin-left: 1rem;">{project.icon}</span>
					</div>

					<div class="projectTechnologies">Technologies: {project.technologies}</div>
					<div class="lineLabel">{project.date}</div>
				</div>

				<hr class="mediumHr" />

				{#if browser}
					<div class="carouselWrapper">
						{#if project.images && revealImages}
							<Carousel
								autoplay
								autoplayDuration={5000}
								autoplayProgressVisible
								pauseOnFocus
								swiping={true}
								bind:this={carousel}
							>
								{#each project.images as image, i}
									<img
										class="carouselImage"
										in:scale|global={{ delay: 1000 * i, duration: 1000, easing: quintOut }}
										src={image}
										alt=""
									/>
								{/each}
							</Carousel>
						{/if}

						{#if project.video}
							<!-- svelte-ignore a11y-media-has-caption -->
							<video class="carouselImage" src={project.video} controls loop autoplay></video>
						{/if}
					</div>
				{/if}

				<hr class="smallHr" />

				<div class="experienceDescription" in:typewriter|global={{ speed: 20 }}>
					{@html project.description}
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
