import React from 'react';
import PropTypes from 'prop-types';
import './BottomSheet.css';

const BottomSheet = ({ children, fullscreen, isOpen }) => {

	let classes = "bottom-sheet mdc-theme--secondary-bg";

	if(isOpen){
		classes += " bottom-sheet--open"
	}

	if(fullscreen){
		classes += " bottom-sheet--fullscreen"
	}

	return (

		<div className={classes}>
			{children}
		</div>

	)

}

BottomSheet.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
	fullscreen: PropTypes.bool,
	isOpen: PropTypes.bool
}

export default BottomSheet;
