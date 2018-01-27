import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ children }) => (

	<div className="mdc-layout-grid">
    	<div className="mdc-layout-grid__inner">
    		{children}
    	</div>
	</div>

)

Grid.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
}

export default Grid;