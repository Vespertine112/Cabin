export interface Experience {
	name: string;
	sectionId: string;
	logo: string;
	url: string;
	jobTitle: string;
	technologies: string;
	elapsedTime: string;
	description: string;
	listNotes: string[];
}

export const experiences: Experience[] = [
	{
		name: 'WindowPerfect',
		sectionId: 'windowperfect',
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
		sectionId: 'sei',
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
