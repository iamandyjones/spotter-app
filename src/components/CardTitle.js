import React from 'react';
import PropTypes from 'prop-types';

const CardTitle = ({ title, subtitle, children }) => (

	<section className="mdc-card__primary">
		<h2 className="mdc-card__title mdc-typography--headline6">{title}</h2>
		{subtitle && <h3 className="mdc-card__subtitle mdc-typography--subtitle2">{subtitle}</h3>}
		{children}
	</section>

)

CardTitle.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default CardTitle;
