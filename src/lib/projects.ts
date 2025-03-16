export interface Project {
	name: string;
	sectionId: string;
	icon: string;
	url: string;
	urlTippy: string;
	technologies: string;
	newTarget: boolean;
	date: string;
	images?: string[];
	video?: string;
	description: string;
}

export const projects: Project[] = [
	{
		name: 'Slyther.io',
		sectionId: 'slytherio',
		icon: '🐍',
		url: 'https://github.com/Vespertine112/slyther.io',
		urlTippy: 'Check out the Repo!',
		technologies: 'Svelte, Typescript, Socket.io (Websockets), etc',
		newTarget: true,
		date: 'April 2024',
		images: ['images/slyther/slyther_start.gif', 'images/slyther/slyther_long_snake.gif', 'images/slyther/slyther_multiplayer.gif'],
		description:
			"Built a FOSS clone of popular multiplayer snake games! Watch a <a class='links' href='https://youtu.be/Ma6ILRWCc4o?si=uWpkPHns6UMs9q6m'>gameplay demo</a>, or see <a class='links' href='https://www.youtube.com/watch?v=SWfXIEYYWyw'>mobile support</a>. It includes the client & server, scoring, multiple control schemes & mappable controls, Real-time leaderboard tracking, dynamic aspect ratio rendering, Input lag calculation, Mobile support, and so much more! Play today at the link above (it's a github link, you need to build it)."
	},
	{
		name: 'LunarLander',
		sectionId: 'lunarlander',
		icon: '🚀',
		url: '/lunarlander',
		urlTippy: 'Play Now!',
		technologies: 'Svelte, Typescript, State Machines, etc',
		newTarget: false,
		date: 'Feb 2024',
		images: ['images/lunarlander/Level_Select.gif', 'images/lunarlander/Moon.gif', 'images/lunarlander/Mars.gif', 'images/lunarlander/MainMenu.png'],
		description: 'Built a LunarLander clone from scratch with typescript, and svelte. It has custom particle systems, re-mappable controls, realistic gravity, and more!'
	},
	{
		name: 'OpenLift',
		sectionId: 'openlift',
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
		sectionId: 'dans-frap-paradise',
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
		sectionId: 'high-performance-computation',
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
