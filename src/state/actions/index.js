import Structures, { buildRun} from "../structures/run";
import { nextId } from "../../utils/array";

export const UPDATE_RUN = "UPDATE_RUN";
export const MARK_NODE = "MARK_NODE";
export const DELETE_NODE = "DELETE_NODE";

export const createRunAction = (run) => {
	return {type: UPDATE_RUN, run};
};

export const createRun = (newProps = {}) => {
	return (dispatch, getState)	=> {
		const {runIds} = getState();
		const created = new Date();
		const run = {...buildRun(nextId(runIds), created.getTime()),...newProps};
		dispatch(createRunAction(run));
	}
};
