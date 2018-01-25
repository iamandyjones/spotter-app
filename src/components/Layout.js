import React from 'react';
import PropTypes from 'prop-types';
import Canvas from './Canvas';

const Layout = (props) => (

	<div className="app__main">

		<Canvas>

			{props.children}

		</Canvas>
	
	</div>

)

Layout.propTypes = {
	children: PropTypes.element.isRequired
}

export default Layout;