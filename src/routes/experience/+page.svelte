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

    .experienceWrapper { 
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50vw;
        margin: 8px 0 0 0;
    }

    .experienceTime {
        font-family: "JetBrains Mono";
        font-style: italic;
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
    }

</style>

<script lang="ts">
    import { typewriter } from "$lib/transitions";
    import { blur, fly } from "svelte/transition";
    import tippy, { type Props } from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';
    import type { PageData } from './$types';
	import { onMount } from "svelte";
    import { blurOptions, cardTransition } from "$lib/standards";
    import { updateTopbarName, readableTopbarName } from "$lib/stores";

    export let data: PageData;

    let show: boolean = false;
    onMount(()=>{
        show = true;
    });

    updateTopbarName("My Experience");

    const professionalExperiences = [
        {
            name: "Global Vinyl Solutions",
            logo: "/icons/GVS.png",
            url: "https://globalvinylsolutions.com/",
            jobTitle: "Junior Full-Stack Developer",
            technologies: "Electron, Angular, MongoDB, Node",
            elapsedTime: "May 2022 - Present", 
            description: "At GVS, I played a pivotal role in the development and enhancement of our core CRM product. I was responsible for designing, implementing, and maintaining critical functionalities, ensuring the seamless operation of the software. In addition, I successfully identified and addressed data pipeline issues, leading to a substantial reduction in request size and a significant boost in overall performance compared to previous methods. I was able to create the user experience and interface for various components, with a specific focus on PDF report generation and dynamic cost presentation for end customers, both internally within the program and on invoices. Lastly, I spearheaded the implementation of automatic program updates, complete with a user-friendly interface, accessible patch notes, robust backend processes, release channels, versioning mechanisms, and other essential features, contributing to the overall efficiency and user satisfaction of the software.",
            listNotes: [
                "Designed, implemented, and maintained core functionality and features for our core CRM product.",
                "Discovered and fixed data pipeline issues which resulted in significant reduction in request size and a large increase in performance over previous methods.",
                "Created UX/UI and all logic for many components, including all PDF report generation and the associated dynamic cost for the end customer in the program internally and in invoices.",
                "Implemented automatic program updates with UX/UI, viewable patch notes, backend implementation, release channels, versioning, and more."
            ]
        },
        {
            name: "SEI Consulting",
            logo: "/icons/SEI.png",
            url: "https://www.sei.com/",
            jobTitle: "Software Engineering Intern",
            technologies: "Python, Powershell, Bash",
            elapsedTime: "May 2021 - May 2022", 
            description: "During my tenure at the SEI, I worked on many projects enhancing operational efficiency through the development and design of inventory tracking scripts. These scripts were core functionality in monitoring the allocation of internal technology assets to employees, ensuring streamlined tracking processes. Additionally, I actively collaborated on, constructued, and contributed to the implementation of numerous RMM (Remote Monitoring and Management) scripts. This involvement extended to managing assets and collecting remote data, showcasing my commitment to optimizing resource utilization. I demonstrated proficiency in automation by creating various helper scripts. These scripts facilitated seamless data management and automation processes, enabling efficient outbound interactions with platforms such as Dropbox, SharePoint, and more. Through these initiatives, I consistently contributed to the technological infrastructure and operational workflows, showcasing my versatility and dedication to advancing the organization's goals.",
            listNotes: [
                "Built and designed inventory tracking scripts to track the internal technology assets allocated to employees.",
                "Collaborated on, and assisted with implementation of many RMM scripts used to manage assets & gather remote data.",
                "Created many helper scripts to assist data management and automation with outbound interactions to Dropbox, SharePoint, and more."
            ],            
        },
    ]
</script>

{#if show}
    <div in:fly={cardTransition} class="cardWrapper">
        <h1 class="topline">Professional Experience</h1>

        <hr>

        <div class="experiences">
            {#each professionalExperiences as experience}
                <div class="experienceWrapper">
                    <div transition:blur={blurOptions}>
                        <img class="companyLogo" style="background-color: white;" src={experience.logo} alt="">
                    </div>
    
                    <div class="experienceTime">
                        <div class="lineLabel"><a class="links" href={experience.url} target="_blank">{experience.name}</a></div>                
                        <div class="lineLabel">{experience.elapsedTime}</div>
                        <div class="lineLabel">{experience.jobTitle} - {experience.technologies}</div>                
                    </div>
                    <hr class="mediumHr">
    
                    <div class="experienceDescription">
                        {experience.description}
                    </div>
    
                    <hr class="smallHr">
                    <div class="experienceNotes">
                        <ul>
                            {#each experience.listNotes as note}
                                <li in:typewriter|global={{speed:10}}>{note}</li>
                            {/each}
                        </ul>
                    </div>
    
                    <hr>
                </div>
            {/each}
        </div>
    </div>
{/if}