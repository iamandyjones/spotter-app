import React from 'react';
import PropTypes from 'prop-types';

const LayoutEmpty = ({children}) => (

	<div className="app__main">

		{children}

	</div>

)

LayoutEmpty.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
}

export default LayoutEmpty;
