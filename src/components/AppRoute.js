import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Toolbar from './Toolbar';
import ToolbarActionsContainer from '../containers/ToolbarActionsContainer';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (

	<Route {...rest} render={matchProps => (

		<Fragment>

			<Toolbar link={matchProps.match.url} {...rest}>

				<ToolbarActionsContainer />

	        </Toolbar>

			<Layout>

				<Component {...matchProps} />

			</Layout>

		</Fragment>

	)} />

)

AppRoute.propTypes = {
	onMenuIconClick: PropTypes.func.isRequired,
	title: PropTypes.string,
	layout: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
	component: PropTypes.func.isRequired
}

export default AppRoute;
