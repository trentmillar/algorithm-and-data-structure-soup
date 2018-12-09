// containers/ReportStartContainer.js

import {connect} from 'react-redux';
import { createRun } from '../../state/actions';
import RunStart from '../components/RunStart';

const mapStateTpProps = (state, props) => {
	return {};
}

const mapDispatchToProps = (dispatch,props) => {
	return {
		startSort: () => {
			debugger;
			dispatch(createRun());
		}
	}
}

export default connect(mapStateTpProps, mapDispatchToProps)(RunStart);