import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
/*
Will defautl to local storage
 */
import localStorage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
import reducers from "./reducers";

const stoargeConfig = {
	key: 'algo-soup',
	storage: localStorage
};

// TODO, turf this asap
const temp_until_reducers_done = (state = {}) => state;

const persistedReducer = persistReducer(stoargeConfig, temp_until_reducers_done /*reducers*/);

/*
Necessary for Redux Chrome Ext.
 */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	let store = createStore(
		persistedReducer,
		composeEnhancer(applyMiddleware(thunk))
	);

	/*
	use "persistedStore", this will de/rehydrate the whole redux store to local storage
	 */
	let persistedStore = persistStore(store);
	return { store, persistedStore }
}