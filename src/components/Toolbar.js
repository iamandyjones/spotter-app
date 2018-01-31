import React from 'react';
import PropTypes from 'prop-types';
import '@material/toolbar/dist/mdc.toolbar.css';
import './Toolbar.css';

const Toolbar = ({ children, onMenuClick }) => (

	<header className="mdc-toolbar">

		<div className="mdc-toolbar__row">

			<section className="mdc-toolbar__section mdc-toolbar__section--align-start">

				<a href="#" className="material-icons mdc-toolbar__menu-icon" onClick={onMenuClick}>menu</a>

				{children}

			</section>

		</div>

	</header>

)

Toolbar.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
	onMenuClick: PropTypes.func
}

export default Toolbar;