import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Toolbar from './Toolbar';
import ToolbarTitle from './ToolbarTitle';

const AppRoute = ({ onMenuClick, title, content, layout: Layout, ...rest }) => (

	<Route {...rest} render={matchProps => (

		<Fragment>

			<Toolbar onMenuClick={onMenuClick}>

	            <ToolbarTitle title={title} link={matchProps.match.path} />

	        </Toolbar>

			<Layout>

				{
					content.map((el, i) => {

						let Component = el;
						return <Component key={i} {...matchProps.match} />;

					})
				}

			</Layout>

		</Fragment>

	)} />

)

AppRoute.propTypes = {
	onMenuClick: PropTypes.func.isRequired,
	title: PropTypes.string,
	layout: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired
}

export default AppRoute;
