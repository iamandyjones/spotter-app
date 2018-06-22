import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MDCTextField } from '@material/textfield/dist/mdc.textfield';
import '@material/textfield/dist/mdc.textfield.css';
import './TextField.css';

class TextField extends Component {

	componentDidMount(){

		MDCTextField.attachTo(this.textField);

	}

	render(){

		const { value, label, onValueChange } = this.props;

		return (

			<div className="mdc-text-field mdc-text-field--box" ref={el => this.textField = el}>

				<input type="text" id="my-text-field" className="mdc-text-field__input" value={value} onChange={onValueChange} />

				<label className="mdc-floating-label" htmlFor="my-text-field">{label}</label>

				<div className="mdc-line-ripple"></div>

			</div>

		)

	}

}

TextField.propTypes = {
	value: PropTypes.string,
	label: PropTypes.string.isRequired,
	onValueChange: PropTypes.func.isRequired
}

export default TextField;
