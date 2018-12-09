import React from 'react';
import RunStartContainer from '../containers/RunStartContainer';
import RunSummary from './RunSummary'
import Button from '@material-ui/core/Button';

//        {this.props.runInProgress ? <NodesContainer /> : <RunInfoContainer />}
const styles = {
	button: {
		position: 'fixed',
		top: '75px',
		right: '25px',
	}
};

class Run extends React.Component {
	state = {
		view: 'graph',
	}

	render () {
		return(
			<div>
				{this.handleResolveComponent()}
			</div>
		);
	}

	handleToggleBodyMap = () => {
		this.setState({
			view: this.state.view === 'graph'
				? 'back'
				: 'graph'
		})
	}

	handleResolveComponent = () => {
		const {run, nextStep} = this.props;

		if(!run){
			return <RunStartContainer />
		}
debugger;
		switch(run.step){
			case 1:

				return <RunSummary {...this.props} side={this.state.view} onToggleBody={this.handleToggleBodyMap} />;

			default:
				return (
					<div id={"default"}/>
					/*<NodesCombined {...this.props} side={this.state.mapView}>
						<Button style={styles.button} onClick={() => this.handleToggleBodyMap()} variant="outlined">{this.state.mapView === 'front' ? 'See Back' : 'See Front'}</Button>
						<Button onClick={() => nextStep(report)} variant="outlined">Next</Button>
					</NodesCombined>*/
				);
		}
	}



}

export default Run;