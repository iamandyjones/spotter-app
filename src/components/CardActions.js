import React from 'react';
import PropTypes from 'prop-types';

const CardAction = ({ children }) => (
	
	<section className="mdc-card__actions">
		{children}
	</section>

)

CardAction.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
}

export default CardAction;
