import type { Project } from './projects';

export const nybbles: Project[] = [
	{
		name: 'Goof',
		sectionId: 'goof',
		icon: '🦠',
		url: 'https://github.com/Vespertine112/goof',
		urlTippy: 'Check out the Repo!',
		technologies: 'Go, BubbleTea',
		newTarget: true,
		date: 'Sept 2024',
		images: ['images/goof/goof.gif'],
		description:
			"An high performance render of conway's game of life for the terminal. Includes color state(s) which change as a cell ages, and then decay upon death. This reveals interesting patterns not shown in typical GOL simulations"
	}
];
