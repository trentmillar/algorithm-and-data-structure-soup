import { combineReducers} from "redux";
import { UPDATE_RUN, DELETE_NODE, MARK_NODE} from '../actions';
import { arrayPushUnique } from '../../utils/array';

const runIds = (state = [], action) => {
	switch(action.type) {
		case UPDATE_RUN:
			debugger;

			state = arrayPushUnique(action.run.id, state);
			break;
		default:
			//noop
			break;
	}
	return state;
}

const runs = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_RUN:
			debugger;
			state = {...state, [action.run.id]: action.run};
			break;
		default:
			break;

	}
	return state;
}

export default combineReducers({
	runIds,
	runs
});