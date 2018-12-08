import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from './serviceWorker';
import configureStore from './state/'

const { store, persistedStore } = configureStore();

/*
Using the Provider component so the store is available in all contained components
	https://github.com/reduxjs/react-redux/blob/master/src/components/Provider.js

We define the store here so it can become a prop of Provider.
		store: PropTypes.shape({
			subscribe: PropTypes.func.isRequired,
			dispatch: PropTypes.func.isRequired,
		  	getState: PropTypes.func.isRequired
		})

Using redux-persists, why PersistGate? read quickstart, https://github.com/rt2zz/redux-persist
 */
ReactDOM.render(

	<Provider store={store}>
		<PersistGate loading={null} persistor={persistedStore}>
			<App />
		</PersistGate>
	</Provider>

	, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
