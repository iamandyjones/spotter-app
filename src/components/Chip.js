import React from 'react';
import PropTypes from 'prop-types';
import './Chip.css';

const Chip = ({ children, onClick, enhanced }) => (

	<div className="chip" onClick={onClick}>
		{children}
	</div>

)

Chip.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	enhanced: PropTypes.bool
}

export default Chip;