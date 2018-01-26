import React from 'react';
import PropTypes from 'prop-types';
import './Canvas.css';

const Canvas = ({ padded, children }) => (

	<div className={padded ? "canvas canvas--padded" : "canvas"}>

		{children}

	</div>

)

Canvas.propTypes = {
	padded: PropTypes.bool,
	children: PropTypes.object.isRequired
}

export default Canvas;