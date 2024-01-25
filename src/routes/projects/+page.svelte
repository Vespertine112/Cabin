<style>
    .card {
        border-radius: 8px; 
        border: 4px solid var(--linen);
        padding: 10px; 
        color: var(--linen); 
        box-shadow: var(--shadow);
        flex: 1;
    }

    .companyLogo {
        height: 5vh;
        border-radius: 4px;
    }

    hr {
        width: 100%;
    }

    h1 {
        font-family: "JetBrains Mono";
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
  
    .projectHeading {
      font-family: "JetBrains Mono";
      font-size: 1.2em;
      font-weight: bold;
    }
  
    .projectTechnologies {
      font-style: italic;
      color: var(--accent-color);
      width: 100%;
    }

    .projectTopper {
        font-family: "JetBrains Mono";
        font-style: italic;
        width: 100%;
    }

    .carouselImage {
      max-width: 50vw;
    }

    @media only screen and (max-width: 767px) {
        .projectWrapper { 
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 78vw;
            margin: 8px 0 0 0;
        }
    }

  </style>
  
  <script lang="ts">
    // Import necessary modules and types
    import { typewriter } from "$lib/transitions";
    import { blur, fly } from "svelte/transition";
    import tippy from 'tippy.js';
    import 'tippy.js/dist/tippy.css';
    import 'tippy.js/themes/material.css';
    import type { PageData } from './$types';
    import { onMount } from "svelte";
    import { blurOptions, cardTransition } from "$lib/standards";
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';
    import { updateTopbarName, readableTopbarName } from "$lib/stores";
  
    export let data: PageData;
  
    let show: boolean = false;
    let carousel:any; 

    onMount(() => {
      show = true;
    });
    const handleNextClick = () => {
        carousel.goToNext()
    }

    updateTopbarName("My Projects");

    const projects = [
      {
        name: "OpenLift",
        url: "https://github.com/Vespertine112/OpenLift",
        technologies: "Python, PyTorch, Pandas, Numpy, etc",
        date: "Nov 2023",
        images: [
          "images/projects/Bench_Txt.png",
          "images/projects/Squat_AP.png",
          "images/projects/Squat_RES.png",
          "images/projects/No_Lift_RES.png",
          "images/projects/No_Lift_AP.png",
        ],
        description: "Designed a Machine Learning Pipeline & Models to predict powerlifting totals for competition lifts. The models are very highly performant (R² >= 0.97). Performed data cleaning and curating, optimizing for lowest feature space possible with performance. Implemented custom classification reporting and analysis to parse results."
      },
      {
        name: "Frappuccino Shop",
        url: "https://docs.google.com/presentation/d/1elEZDd05HZh93MPgyaXxibHc3Y2HYyfBIkBaPX2hfpk/edit?usp=sharing",
        technologies: "Typescript, Angular, Firebase Auth, MongoDB, Django",
        date: "Aug - Dec 2022",
        images: [
          "/images/projects/frap2.png",
          "/images/projects/frap3.png",
          "/images/projects/frap4.png"
        ],
        description: "Lead a team of student engineers to build a custom complete web application for a frappuccino shop. Developed and designed user account management through Firebase Auth, including many OAuth providers, and its interpolation in MongoDB. Helped architect and implement the ordering user flow in both the back-end and front-end, to create a streamlined experience and allow for order add-ons."
      },
      {
        name: "High Performance Viewshed Computation",
        url: "",
        technologies: "C++, MPI, CUDA, OpenMP",
        date: "Dec 2022",
        video: "images/projects/viewshed.mp4",
        description: "Worked on a team to create a high performance viewshed computation, running on multiple GPUs and CPUs across a clustered network. Designed and implemented the MPI control structure for the division of critical data across the network, and the accompanying distributed CPU approach. Created data visualizations and produced scaling reporting for the final program to demonstrate a 3600x increase in performance over single core.",
      }
    ];
  </script>
  
{#if show}
  <div transition:fly={cardTransition} class="cardWrapper">
    <h1 class="topline">Projects</h1>
    <hr>

    {#each projects as project}
      <div class="projectWrapper">
        <div class="projectTopper" transition:blur={blurOptions}>
          <h2 class="projectHeading"><a style="color: white;" href={project.url} target="_blank">{project.name}</a></h2>
          <div class="projectTechnologies">Technologies: {project.technologies}</div>
          <div class="lineLabel">{project.date}</div>
        </div>

        <hr class="mediumHr">

        {#if browser}        
          {#if project.images}
              <Carousel
              autoplay
              autoplayDuration={5000}
              autoplayProgressVisible
              pauseOnFocus
              swiping={true}
              bind:this={carousel}
              >

                {#each project.images as image}
                  <img class="carouselImage" src={image} alt="">
                {/each}
              </Carousel>
          {/if}


          {#if project.video}
            <!-- svelte-ignore a11y-media-has-caption -->
            <video class="carouselImage" src={project.video} controls autoplay loop></video>
          {/if}
        {/if}

        <hr class="smallHr">

        <div class="experienceDescription" in:typewriter|global={{speed:20}}>
          {project.description}
        </div>

        <hr class="smallHr">
      </div>
    {/each}
  </div>
{/if}
  