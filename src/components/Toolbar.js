import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import './Toolbar.css';

const Toolbar = ({ children, onMenuIconClick, link, title, menuIcon }) => (

	<header className="mdc-top-app-bar">

		<div className="mdc-top-app-bar__row">

			<section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">

				<a href="/" className="material-icons mdc-top-app-bar__navigation-icon" onClick={onMenuIconClick}>{menuIcon}</a>

				<Link to={link} className="mdc-top-app-bar__title mdc-theme--text-primary-on-primary">{title}</Link>

			</section>

			<section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">

	            {children}

			</section>

		</div>

	</header>

)

Toolbar.defaultProps = {
	title: "",
	link: '/',
	menuIcon: 'menu'
}

Toolbar.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	onMenuIconClick: PropTypes.func,
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	menuIcon: PropTypes.string.isRequired
}

export default Toolbar;
