export const makeRun = (id, created) => {
	return {
		id,
		nodes: {},
		created,
		updated: 0,
		step: 0
	}
};