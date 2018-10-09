import React from 'react';
import PropTypes from 'prop-types';

const CardMain = ({ children }) => (

	<section>
		{children}
	</section>

)

CardMain.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
}

export default CardMain;
