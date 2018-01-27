import React from 'react';
import PropTypes from 'prop-types';

const CardTitle = ({ title, subtitle, children }) => (

	<section className="mdc-card__primary">
		<h1 className="mdc-card__title mdc-card__title--large">{title}</h1>
		{subtitle && <h2 className="mdc-card__subtitle">{subtitle}</h2>}
		{children}
	</section>

)

CardTitle.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default CardTitle;