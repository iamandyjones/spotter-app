import React from 'react';
import PropTypes from 'prop-types';
import Canvas from './Canvas';

const Layout = ({children}) => (

	<div className="app__main">

		<Canvas>

			{children}

		</Canvas>
	
	</div>

)

Layout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
}

export default Layout;