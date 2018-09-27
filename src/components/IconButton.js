import React from 'react';
import PropTypes from 'prop-types';
import '@material/icon-button/dist/mdc.icon-button.css';

const IconButton = ({ onClick, label, action }) => (

	<button className="mdc-icon-button material-icons" onClick={onClick} title={label} ref={el => this.icon = el}>{action}</button>

)

IconButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	action: PropTypes.string.isRequired
}

export default IconButton;
