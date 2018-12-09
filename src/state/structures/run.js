export const SHAPE = Object.freeze({
	id: Number.name,
	nodes: Array.name,
	created: Date.name,
	updated: Number.name,
	step: Number.name
});

export const buildRun = (id, created) => {
	return {
		id,
		nodes: {},
		created,
		updated: 0,
		step: 0,
		isComplete: false
	}
};