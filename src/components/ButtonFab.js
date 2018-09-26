import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';
import '@material/fab/dist/mdc.fab.css';
import './ButtonFab.css';

class ButtonFab extends Component {

	componentDidMount(){

		const { ripple } = this.props;

		if(ripple){

			MDCRipple.attachTo(this.fab);

		}

	}

	render(){

		const { absolute, label, onClick } = this.props;

		return (

			<button className={"mdc-fab" + (absolute ? " app-fab--absolute" : "")} aria-label={label} ref={(el) => this.fab = el} onClick={onClick}>

				<span className="mdc-fab__icon material-icons">{label}</span>

			</button>

		)

	}

}

ButtonFab.defaultProps = {
	absolute: true,
	label: "add",
	ripple: true
}

ButtonFab.propTypes = {
	absolute: PropTypes.bool,
	ripple: PropTypes.bool,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default ButtonFab;
