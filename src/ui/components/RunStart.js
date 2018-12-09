// components/ReportStart.js

import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const style = {
	paddingTop: 15
};

class RunStart extends React.Component {
	constructor(props) {
		super(props);

		this.handleOnClick = this._handleOnClick.bind(this);


	}
	_handleOnClick = (event) => {
		event.preventDefault();
		this.props.startSort();
	}

	render() {
		return (
			<div style={style}>
				<Typography variant="headline" gutterBottom>
					Topological Sort
				</Typography>
				<Button onClick={this.handleOnClick} variant="contained">
					Sort
				</Button>
			</div>
		);
	}
}

export default RunStart;