import React from 'react';
import PropTypes from 'prop-types';

const Layout = (props) => (

	<div className="app__main">

		{props.children}
	
	</div>

)

Layout.propTypes = {
	children: PropTypes.element.isRequired
}

export default Layout;