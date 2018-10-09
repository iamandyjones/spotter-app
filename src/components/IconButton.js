import React from 'react';
import PropTypes from 'prop-types';
import '@material/icon-button/dist/mdc.icon-button.css';

const IconButton = ({ onClick, label, action, cssClass }) => (

	<button className={`mdc-icon-button material-icons ${cssClass}`} onClick={onClick} title={label}>{action}</button>

)

IconButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	action: PropTypes.string.isRequired,
	cssClass: PropTypes.string
}

export default IconButton;
