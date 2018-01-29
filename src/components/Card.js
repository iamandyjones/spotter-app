import React from 'react';
import PropTypes from 'prop-types';
import '@material/card/dist/mdc.card.css';
import './Card.css';

const Card = ({ children }) => (

	<div className="mdc-card">
		{children}
	</div>

)

Card.propTypes = {
	children: PropTypes.node.isRequired
}

export default Card;