// components/ReportSummary.js

import React from 'react';
import { Button, Grid } from '@material-ui/core';

class RunSummary extends React.Component {

	render(){
		const { run, nodes } = this.props;

		return (
			<div className={`TODO`}>
				<Grid container className={`TODO`}>
					<Grid item xs={4}>

						{/*CLEAN UP - TO LOOK PRESENTABLE*/}
						{
							nodes.map((n, i) => {
								return (
									<Grid item key={`node${i}`}>
										<Grid container>
											<Grid item>{n.id}</Grid>
										</Grid>
									</Grid>
								)
							})
						}
					</Grid>
					<Grid item xs={8}>
					</Grid>
				</Grid>
			</div>
		);
	}

}

export default RunSummary;