import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ onClick, label, action }) => (

	<span onClick={onClick} className="material-icons mdc-top-app-bar__action-item" aria-label={label} title={label}>{action}</span>

)

Icon.defaultProps = {
	label: "Add",
	action: "add"
}

Icon.propTypes = {
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	action: PropTypes.string.isRequired
}

export default Icon;
