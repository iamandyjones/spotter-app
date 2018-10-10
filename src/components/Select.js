import React from 'react';
import PropTypes from 'prop-types';
import '@material/select/dist/mdc.select.css';

const SelectBox = ({options, value, defaultValue, onChange}) => (

	<div className="mdc-select">

		<select className="mdc-select__native-control" onChange={onChange} value={value}>

			<option>{defaultValue}</option>
			{options.map((opt,index) => <option key={opt+index} value={opt}>{opt}</option>)}

		</select>

	    <div className="mdc-line-ripple"></div>

	</div>
)

SelectBox.propTypes = {
	options: PropTypes.array.isRequired,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	onChange: PropTypes.func.isRequired
}

export default SelectBox;
