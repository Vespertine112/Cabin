export interface BlogPost {
	name: string;
	sectionId: string;
	icon: string;
	url: string;
	tagline: string;
	newTarget: boolean;
	date: string;
	images?: string[];
	video?: string;
	description: string;
}

export const blogPosts: BlogPost[] = [
	{
		name: 'Sweet first post title',
		sectionId: 'vibe-coding-sucks',
		icon: '🦠',
		url: '/blog/vibe-coding-sucks',
		tagline: 'Tagline here',
		//tagline: 'The latest model can write your code and pet your dog, but should it?',
		newTarget: false,
		date: 'March 2025',
		description: 'Some description here'
		//description: "Trust me, I get it. I get the appeal. Coding with the  has all the upside, no downside, it's all vibes all the way. Simple bro, give the Model a good spec, and let it go to town right? "
	}
];
