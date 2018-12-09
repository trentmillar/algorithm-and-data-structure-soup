import React from 'react';
import { Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

const DefaultLayout = ({Component,...rest}) => {
	debugger;
	return (
		<Route {...rest} render={matchProps => (
			<Paper>
				<div>
					<Component {...matchProps}/>
				</div>
			</Paper>
		)}/>
	);
};

export default DefaultLayout;