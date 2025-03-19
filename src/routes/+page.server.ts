export const load = async () => {
	try {
		const result = await fetch('https://xkcd.com/info.0.json');

		if (!result.ok) {
			throw new Error(`HTTP error! status: ${result.status}`);
		}

		const data = await result.json(); // Or result.text() if it's not JSON
		return {
			comic: data // Rename 'result' to 'comic' for clarity
		};
	} catch (error) {
		console.error('Error fetching xkcd comic:', error);
		return {
			comic: null // Or some default value, or throw an error
		};
	}
};
