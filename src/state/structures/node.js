export const SHAPE = Object.freeze({
	id: Number.name,
	nodes: Array.name,
	inDegree: Number.name,
	image: String.name,
	title: String.name,
	description: String.name,
	hue: String.name,
	color: String.name
});

export const makeNode = (id, nodes = [], inDegree = 0, hue, title, image, description = "") => {
	return {
		id,
		nodes,
		inDegree,
		image,
		title,
		description,
		hue,
		color: resolveHue(hue)
	};
};

const resolveHue = (hue) => {
	return hue;
};