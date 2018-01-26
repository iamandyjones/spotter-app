import React from 'react';
import PropTypes from 'prop-types';
import '@material/button/dist/mdc.button.css';

const Button = ({ cssClass, label, onClick }) => ( 

	<button type="button" className={`mdc-button ${cssClass}`} onClick={onClick}>{label}</button>

)

Button.propTypes = {
	cssClass: PropTypes.string,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func
}

export default Button;
