import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '@material/dialog/dist/mdc.dialog.css';

const Dialog = ({ title, children, labelCancel, labelSubmit, onCancel, onSubmit }) => (

	<aside id="my-mdc-dialog" className="mdc-dialog mdc-dialog--open" role="alertdialog" aria-labelledby="my-mdc-dialog-label" aria-describedby="my-mdc-dialog-description">
	  
	  <div className="mdc-dialog__surface">
	  
	    <header className="mdc-dialog__header">
	  
      		<h2 id="my-mdc-dialog-label" className="mdc-dialog__header__title">{title}</h2>

	    </header>

	    <section id="my-mdc-dialog-description" className="mdc-dialog__body">

	    	{children}

    	</section>

    	<footer className="mdc-dialog__footer">
		      
      		<Button cssClass="mdc-dialog__footer__button" label={labelCancel} onClick={onCancel} />
      		<Button cssClass="mdc-dialog__footer__button" label={labelSubmit} onClick={onSubmit} />
	      
	    </footer>

	  </div>

	  <div className="mdc-dialog__backdrop" onClick={onCancel}></div>

	</aside>

)

Dialog.defaultProps = {
	labelCancel: "Cancel",
	labelSubmit: "Submit"
}

Dialog.propTypes = {
	title: PropTypes.string.isRequired,
	labelCancel: PropTypes.string.isRequired,
	labelSubmit: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	onCancel: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
}

export default Dialog;
