import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, useScrollTrigger, CssBaseline, Avatar, Button, Grid } from '@material-ui/core';
import { signInWithGoogle } from '../utils/FirebaseAuthUtils';
import LogoutPopover from './LogoutPopover';
import AppDrawer from './AppDrawer';

const ElevationScroll = props => {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

// App bar at the top of the application, example from Material UI
const TopAppBar = (props) => {
	return (
		<React.Fragment>
			<CssBaseline />
			<ElevationScroll {...props}>
				<AppBar>
					<Toolbar>
						<AppDrawer userRole={props.userRole} setPage={props.setPage} />
						<Grid container alignItems="center" justify="space-between">
							<Grid item>
								<Typography variant="h6">
									Thrift Shift
								</Typography>
							</Grid>
							<Grid item >
								{
									props.user ? <LogoutPopover><Avatar src={props.user.photoURL} /></LogoutPopover>
										: <Button onClick={signInWithGoogle}>Sign In</Button>
								}
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Toolbar />
		</React.Fragment>
	);
}

export default TopAppBar;
