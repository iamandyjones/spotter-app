import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '@material/toolbar/dist/mdc.toolbar.css';
import './Toolbar.css';

const Toolbar = ({ children, onMenuIconClick, link, title, menuIcon }) => (

	<header className="mdc-toolbar">

		<div className="mdc-toolbar__row">

			<section className="mdc-toolbar__section mdc-toolbar__section--align-start">

				<a href="/" className="material-icons mdc-toolbar__menu-icon" onClick={onMenuIconClick}>{menuIcon}</a>

				<Link to={link} className="mdc-toolbar__title mdc-theme--text-primary-on-primary">{title}</Link>

			</section>

			<section className="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">

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