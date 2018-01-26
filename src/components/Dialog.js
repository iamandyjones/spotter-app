import React from 'react';
import PropTypes from 'prop-types';
import '@material/dialog/dist/mdc.dialog.css';

const Dialog = ({ title, children, onDialogClose }) => (

	<aside id="my-mdc-dialog" className="mdc-dialog mdc-dialog--open" role="alertdialog" aria-labelledby="my-mdc-dialog-label" aria-describedby="my-mdc-dialog-description">
	  
	  <div className="mdc-dialog__surface">
	  
	    <header className="mdc-dialog__header">
	  
	      <h2 id="my-mdc-dialog-label" className="mdc-dialog__header__title">{title}</h2>

	    </header>

	    {children}

	  </div>

	  <div className="mdc-dialog__backdrop" onClick={onDialogClose}></div>

	</aside>

)

Dialog.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	onDialogClose: PropTypes.func.isRequired
}

export default Dialog;
