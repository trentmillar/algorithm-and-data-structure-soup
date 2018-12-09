// containers/ReportContainer.js

import { connect } from 'react-redux';
import Run from '../components/Run';
//import {   } from '../../state/actions/index'

const getRecentRun = (state) => {
	const validIds = state.runIds.filter(id => state.runs[id].isComplete === false);
	return state.runs[validIds[0]]
}

const mapStateToProps = (state, props) => {
debugger;
	const runInProgress = state.runIds.filter(
		id => state.runs[id].isComplete === false).length > 0;
	const run = runInProgress ? getRecentRun(state) : null;
	return {
		run
	};
};

const mapDispatcherToProps = (dispatcher, props) => {
debugger;
return {};
};

export default connect(mapStateToProps, mapDispatcherToProps)(Run)