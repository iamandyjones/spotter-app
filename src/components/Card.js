import React from 'react';
import PropTypes from 'prop-types';
import '@material/card/dist/mdc.card.css';

const Card = ({ title, subtitle, children }) => (

	<div className="mdc-card">
		<section className="mdc-card__primary">
			<h1 className="mdc-card__title mdc-card__title--large">{title}</h1>
			{subtitle && <h2 className="mdc-card__subtitle">{subtitle}</h2>}
		</section>
		<section className="mdc-card__supporting-text">
			{children}
		</section>
		<section className="mdc-card__actions">
			<button className="mdc-button mdc-button--compact mdc-card__action">Action 1</button>
			<button className="mdc-button mdc-button--compact mdc-card__action">Action 2</button>
		</section>
	</div>

)

Card.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	children: PropTypes.node.isRequired
}

export default Card;