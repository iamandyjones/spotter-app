import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { MDCTextField } from '@material/textfield/dist/mdc.textfield';
import '@material/textfield/dist/mdc.textfield.css';
import './TextField.css';

class TextField extends Component {

	componentDidMount(){

		MDCTextField.attachTo(this.textField);

	}

	render(){

		const { value, label, onValueChange, name, required, error } = this.props;

		return (

			<Fragment>

				<div
					className={`mdc-text-field mdc-text-field--box ${error ? 'mdc-text-field--invalid' : ''}`}
					ref={el => this.textField = el}>

					<input
						type="text"
						id="my-text-field"
						className="mdc-text-field__input"
						name={name}
						value={value}
						onChange={onValueChange}
						required={required}
					/>

					<label
						className="mdc-floating-label"
						htmlFor="my-text-field">
						{label}
					</label>

					<div className="mdc-line-ripple"></div>

				</div>

				{required && <p className="mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg">{error ? error : "* Required"}</p>}

			</Fragment>

		)

	}

}

TextField.propTypes = {
	value: PropTypes.string,
	label: PropTypes.string.isRequired,
	onValueChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	required: PropTypes.bool,
	error: PropTypes.string
}

export default TextField;
