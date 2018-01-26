import React from 'react';
import PropTypes from 'prop-types';

const GridCell = ({ children, span }) => (

	<div className={`mdc-layout-grid__cell mdc-layout-grid__cell--span-${span}`}>
		{children}
	</div>

)

GridCell.defaultProps = {
	span: 12
}

GridCell.propTypes = {
	children: PropTypes.node.isRequired,
	span: PropTypes.number.isRequired
}

export default GridCell;