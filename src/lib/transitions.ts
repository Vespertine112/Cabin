export function typewriter(node:Node, { speed = 1 }) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;	

	// console.log(node);
	
	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent || '';	
	const duration = text.length / (speed * 0.01);

	return {
		duration,
		tick: (t:number) => {
			const i = Math.trunc(text.length * t);
			node.textContent = (i != text?.length) ? text.slice(0, i) + "_" : text.slice(0, i);
		}
	};
}