import React from 'react';
import PropTypes from 'prop-types';
import './Chip.css';

const Chip = ({ children, onClick }) => (

	<div className="chip" onClick={onClick}>
		{children}
	</div>

)

Chip.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func
}

export default Chip;