import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Toolbar from './Toolbar';
import ToolbarTitle from './ToolbarTitle';

const AppRoute = ({ onMenuClick, title, component: Component, layout: Layout, ...rest }) => (

	<Route {...rest} render={matchProps => (

		<Fragment>

			<Toolbar onMenuClick={onMenuClick}>

	            <ToolbarTitle title={title} link={matchProps.match.path} />

	        </Toolbar>

			<Layout>

				<Component {...matchProps.match} />

			</Layout>

		</Fragment>

	)} />

)

AppRoute.propTypes = {
	onMenuClick: PropTypes.func.isRequired,
	title: PropTypes.string,
	component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
	layout: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired
}

export default AppRoute;
