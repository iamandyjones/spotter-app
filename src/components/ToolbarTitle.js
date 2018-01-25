import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ToolbarTitle = ({ title, link }) => (

	<Link to={link} className="mdc-toolbar__title mdc-theme--text-primary-on-primary">{title}</Link>

)

ToolbarTitle.defaultProps = {
	title: "Spotter App",
	link: '/'
}

ToolbarTitle.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired
}

export default ToolbarTitle;