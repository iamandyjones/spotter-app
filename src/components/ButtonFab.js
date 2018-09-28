import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';
import '@material/fab/dist/mdc.fab.css';
import './ButtonFab.css';

class ButtonFab extends Component {

	componentDidMount(){

		if(this.props.ripple){

			MDCRipple.attachTo(this.fab);

		}

	}

	render(){

		const { absolute, label, onClick, theme } = this.props;

		return (

			<button className={`mdc-fab ${theme} ${absolute ? 'app-fab--absolute' : ''}`} aria-label={label} ref={(el) => this.fab = el} onClick={onClick}>

				<span className="mdc-fab__icon material-icons">{label}</span>

			</button>

		)

	}

}

ButtonFab.defaultProps = {
	absolute: true,
	label: "add",
	ripple: true,
	theme: "mdc-theme--primary-bg"
}

ButtonFab.propTypes = {
	absolute: PropTypes.bool,
	ripple: PropTypes.bool,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	theme: PropTypes.string.isRequired
}

export default ButtonFab;
