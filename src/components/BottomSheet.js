import React from 'react';
import PropTypes from 'prop-types';
import './BottomSheet.css';

const BottomSheet = ({ children, fullscreen }) => (

	<div className={`bottom-sheet mdc-theme--secondary-bg ${fullscreen ? 'bottom-sheet--fullscreen' : ''}`}>
		{children}
	</div>

)

BottomSheet.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
	fullscreen: PropTypes.bool
}

export default BottomSheet;
