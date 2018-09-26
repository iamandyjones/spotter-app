import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Toolbar from './Toolbar';
import Icon from './Icon';
import '@material/dialog/dist/mdc.dialog.css';
import './Dialog.css';

const Dialog = ({ title, fullscreen, children, labelCancel, labelSubmit, onCancel, onSubmit }) => {

	let classNames = "mdc-dialog mdc-dialog--open";

	if(fullscreen){
		classNames = classNames += " mdc-dialog--full";
	} else {
		classNames = classNames += " mdc-dialog--simple";
	}

	return (

		<aside id="my-mdc-dialog" className={classNames} role="alertdialog" aria-labelledby="my-mdc-dialog-label" aria-describedby="my-mdc-dialog-description">

		  <div className="mdc-dialog__surface">

		  	{fullscreen ? (

		  			<Toolbar
		  				title={title}
		  				menuIcon="clear"
		  				onMenuIconClick={onCancel}>

						<Icon
							onClick={onSubmit}
							action="done"
							label="Done"
						/>

			        </Toolbar>

		  		) : (

		  			<header className="mdc-dialog__header">

			      		<h2 id="my-mdc-dialog-label" className="mdc-dialog__header__title">{title}</h2>

				    </header>

		  		)
		  	}

		    <section id="my-mdc-dialog-description" className="mdc-dialog__body">

		    	{children}

	    	</section>

	    	{!fullscreen && (

		    	<footer className="mdc-dialog__footer">

		      		<Button cssClass="mdc-dialog__footer__button" label={labelCancel} onClick={onCancel} />
		      		<Button cssClass="mdc-dialog__footer__button mdc-button--raised" label={labelSubmit} onClick={onSubmit} />

			    </footer>

		    )}

		  </div>

		  <div className="mdc-dialog__backdrop" onClick={onCancel}></div>

		</aside>

	)

}

Dialog.defaultProps = {
	labelCancel: "Cancel",
	labelSubmit: "Submit"
}

Dialog.propTypes = {
	title: PropTypes.string.isRequired,
	fullscreen: PropTypes.bool,
	labelCancel: PropTypes.string.isRequired,
	labelSubmit: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	onCancel: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
}

export default Dialog;
