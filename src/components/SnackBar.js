import React from 'react';
import PropTypes from 'prop-types';
import '@material/snackbar/dist/mdc.snackbar.css';

const SnackBar = ({ text, active }) => (

	<div className={active ? 'mdc-snackbar mdc-snackbar--active' : 'mdc-snackbar'} aria-live="assertive" aria-atomic="true" aria-hidden="true">

		<div className="mdc-snackbar__text">{text}</div>

		<div className="mdc-snackbar__action-wrapper">

			<button type="button" className="mdc-snackbar__action-button"></button>

		</div>

	</div>

)

SnackBar.propTypes = {
	text: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired
}

export default SnackBar;