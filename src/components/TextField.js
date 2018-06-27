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

		const {
			value,
			label,
			onValueChange,
			id,
			required,
			error,
			datalist
		} = this.props;

		return (

			<Fragment>

				<div
					className={`mdc-text-field mdc-text-field--box ${error ? 'mdc-text-field--invalid' : ''}`}
					ref={el => this.textField = el}>

					<input
						type="text"
						className="mdc-text-field__input"
						id={id}
						name={id}
						value={value}
						onChange={onValueChange}
						required={required}
						list={datalist ? `list-${id}` : null}
					/>

					{datalist && (
						<datalist id={`list-${id}`}>
							{datalist.map((el, i) => <option key={i} value={el} />)}
						</datalist>
					)}

					<label
						className="mdc-floating-label"
						htmlFor={id}>
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
	id: PropTypes.string.isRequired,
	required: PropTypes.bool,
	error: PropTypes.string,
	datalist: PropTypes.array
}

export default TextField;
