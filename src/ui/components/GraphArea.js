// components/Run.js

import React from 'react';
import RunContainer from '../containers/RunContainer';
import RunSummary from './RunSummary';
import Button from '@material-ui/core/Button';

const style = {

};

class GraphArea extends React.Component {
	state = {
		view: 'graph'
	}

	render() {
		return (
			<div>
				{this.handleResolveComponent()}
			</div>
		);
	}

	handleToggleView = () => {
		this.setState({view: this.state.view =='graph'
				? 'info'
				: 'graph'})
	}

	handleResolveComponent = () => {
		const {run, nextStep} = this.props;

		if(!run) {
			return <RunContainer/>;
		}

		switch(run.step) {
			case 1:
				return <RunSummary {...this.props} view={this.state.view} onToggleView={this.handleToggleView}/>;

			default:
				return (
					<div>TODO</div>
				)
		}
	}
}