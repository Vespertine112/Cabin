// place files you want to import through the `$lib` alias in this folder.

import tippy, { type Props } from 'tippy.js';

export function tooltip(node: Element, options: Object) {
	const tooltip = tippy(node, options);

	return {
		update(options: Partial<Props>) {
			tooltip.setProps(options);
		},
		destroy() {
			tooltip.destroy();
		}
	};
}
