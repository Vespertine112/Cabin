export function typewriter(node: Node, { speed = 1 }) {
	if (!(node.childNodes.length === 1)) {
		return;
	}

	const text = node.textContent || '';
	const duration = text.length / (speed * 0.01);

	return {
		duration,
		tick: (t: number) => {
			const i = Math.trunc(text.length * t);
			node.textContent = i != text?.length ? text.slice(0, i) + '_' : text.slice(0, i);
		}
	};
}
