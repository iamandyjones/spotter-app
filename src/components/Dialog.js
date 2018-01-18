import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {MDCDialog} from '@material/dialog/dist/mdc.dialog.js';
import Button from './Button';

import '@material/dialog/dist/mdc.dialog.css';

class Dialog extends Component {

	constructor(props){

		super(props);

		this.handleDialogLaunch = this.handleDialogLaunch.bind(this);

	}

	componentDidMount(){

		this.dialog = new MDCDialog(this.dialogEl);

		this.dialog.listen('MDCDialog:accept', function() {
		  console.log('accepted');
		})

		this.dialog.listen('MDCDialog:cancel', function() {
		  console.log('canceled');
		})

	}

	componentWillUnmount(){

		this.dialog.destroy();

	}

	handleDialogLaunch(evt){

		this.dialog.lastFocusedTarget = evt.target;
  		this.dialog.show();

	}

	render(){

		return (

			<div>

			<p onClick={this.handleDialogLaunch}>Launch dialog</p>

			<aside id="my-mdc-dialog"
			  className="mdc-dialog"
			  role="alertdialog"
			  aria-labelledby="my-mdc-dialog-label"
			  aria-describedby="my-mdc-dialog-description" ref={(el) => this.dialogEl = el}>
			  <div className="mdc-dialog__surface">
			    <header className="mdc-dialog__header">
			      <h2 id="my-mdc-dialog-label" className="mdc-dialog__header__title">
			        Use Googles location service?
			      </h2>
			    </header>
			    <section id="my-mdc-dialog-description" className="mdc-dialog__body">
			      Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
			    </section>
			    <footer className="mdc-dialog__footer">
			      
			      <Button cssClass="mdc-dialog__footer__button mdc-dialog__footer__button--cancel" label="Decline" />
			      <Button cssClass="mdc-dialog__footer__button mdc-dialog__footer__button--accept" label="Accept" />
			      
			    </footer>
			  </div>
			  <div className="mdc-dialog__backdrop"></div>
			</aside>

			</div>

		)

	}

}

export default Dialog;