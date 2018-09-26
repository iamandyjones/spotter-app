import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';
import '@material/button/dist/mdc.button.css';

class Button extends Component {

	componentDidMount(){

		const { ripple } = this.props;

		if(ripple){

			MDCRipple.attachTo(this.button);

		}

	}

	render(){

		const { cssClass, label, onClick } = this.props;

		return (

			<button type="button" className={`mdc-button ${cssClass}`} onClick={onClick} ref={el => this.button = el}>{label}</button>

		)

	}

}

Button.defaultProps = {
	ripple: true
}

Button.propTypes = {
	cssClass: PropTypes.string,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	ripple: PropTypes.bool
}

export default Button;
