import React from 'react';
import PropTypes from 'prop-types';
import '@material/card/dist/mdc.card.css';

const Card = ({ children }) => (

	<div className="mdc-card">
		{children}
		<section className="mdc-card__actions">
			<button className="mdc-button mdc-button--compact mdc-card__action">Action 1</button>
			<button className="mdc-button mdc-button--compact mdc-card__action">Action 2</button>
		</section>
	</div>

)

Card.propTypes = {
	children: PropTypes.node.isRequired
}

export default Card;