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
	children: PropTypes.array.isRequired
}

export default Grid;