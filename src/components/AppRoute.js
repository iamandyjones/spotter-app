import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (

	<Route {...rest} render={matchProps => (

		<Layout>

			<Component {...matchProps.match} />

		</Layout>

	)} />

)

AppRoute.propTypes = {
	component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
	layout: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired
}

export default AppRoute;
