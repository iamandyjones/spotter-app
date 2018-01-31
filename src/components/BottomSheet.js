import React from 'react';
import PropTypes from 'prop-types';
import './BottomSheet.css';

const BottomSheet = ({ children }) => (

	<div className="bottom-sheet">
		{children}
	</div>

)

BottomSheet.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
}

export default BottomSheet;