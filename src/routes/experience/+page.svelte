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

	// export let data: PageData;
	let carousel: any;

	let show: boolean = false;
	onMount(() => {
		show = true;
	});

	updateTopbarName('Experience');

	const professionalExperiences = [
		{
			name: 'WindowPerfect',
			logo: '/icons/GVS.png',
			url: 'https://globalvinylsolutions.com/',
			jobTitle: 'Technical Founder',
			technologies: 'Electron, Angular, MongoDB, Node',
			elapsedTime: 'May 2022 - Present',
			description:
				'As A Technical Founder of WindowPerfect, I am spearheading the development of a comprehensive full-stack SaaS solution in the Configure, Price, Quote (CPQ) software space for window and door manufacturing. This cross-platform application leverages industry best practices to deliver a robust, scalable system capable of handling multiple concurrent users. Our solution incorporates advanced features such as sophisticated data management and processing, dynamic PDF report generation, seamless API integrations, and cutting-edge window and door graphic rendering with accurate estimations.',
			listNotes: [
				'Architected and implemented a full-stack CPQ SaaS product, utilizing Electron, Angular, MongoDB, and Node technologies to create a cross-platform solution for the window and door manufacturing industry.',
				'Engineered critical core functionalities, including an innovative data pipeline that significantly reduced request sizes and boosted overall system performance.',
				'Designed and developed an intuitive user interface with a focus on user experience, incorporating dynamic cost presentations for both internal use and customer-facing invoices.',
				'Created and integrated a comprehensive PDF report generation system, enhancing communication and documentation processes for users and clients.',
				'Implemented an automated update system featuring user-friendly interfaces, accessible patch notes, robust backend processes, and flexible release channels to ensure seamless software evolution.',
				'Developed advanced window and door graphic rendering capabilities, coupled with precise estimation algorithms, to provide accurate visual representations and quotes.',
				"Established and maintained API integrations and harnesses, facilitating smooth data exchange and enhancing the software's interoperability with external systems."
			]
		},
		{
			name: 'Systems Evolution Inc',
			logo: '/icons/SEI.png',
			url: 'https://www.sei.com/',
			jobTitle: 'Software Engineering Intern',
			technologies: 'Python, Powershell, Bash',
			elapsedTime: 'May 2021 - May 2022',
			description:
				'During my tenure at SEI, I worked on many projects enhancing operational efficiency through the development and design of inventory tracking scripts. These scripts were core functionality in monitoring the allocation of internal technology assets to employees, ensuring streamlined tracking processes. Additionally, I actively collaborated on, constructued, and contributed to the implementation of numerous RMM (Remote Monitoring and Management) scripts. This involvement extended to managing assets and collecting remote data, showcasing my commitment to optimizing resource utilization. I demonstrated proficiency in automation by creating various helper scripts.',
			listNotes: [
				// "Built and designed inventory tracking scripts to track the internal technology assets allocated to employees.",
				// "Collaborated on, and assisted with implementation of many RMM scripts used to manage assets & gather remote data.",
				// "Created many helper scripts to assist data management and automation with outbound interactions to Dropbox, SharePoint, and more."
			]
		}
	];

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
			{#each professionalExperiences as experience}
				<div class="experienceWrapper">
					<div transition:blur={blurOptions}>
						<img class="companyLogo" style="background-color: white;" src={experience.logo} alt="" />
					</div>

					<div class="experienceTime">
						<div class="">
							<a class="links" href={experience.url} target="_blank">{experience.name}</a>
						</div>
						<div class="lineLabel">{experience.elapsedTime}</div>
						<div class="lineLabel">{experience.jobTitle} - {experience.technologies}</div>
					</div>
					<hr class="mediumHr" />

					{#if browser && revealImages}
						<div class="carouselWrapper" in:scale|global={{ duration: 1000, easing: quintOut }}>
							{#if experience.images}
								<Carousel autoplayDuration={5000} autoplayProgressVisible pauseOnFocus swiping={true} bind:this={carousel}>
									{#each experience.images as image, i}
										<img class="carouselImage" src={image} alt="" />
									{/each}
								</Carousel>
							{/if}
						</div>
					{/if}

					<hr class="mediumHr" />

					<div class="experienceDescription">
						{experience.description}
					</div>

					<hr class="smallHr" />
					<div class="experienceNotes">
						<ul>
							{#each experience.listNotes as note}
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
