import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '@material/toolbar/dist/mdc.toolbar.css';
import './Toolbar.css';

function Toolbar({onMenuClick}){

	return (

		<header className="mdc-toolbar">
			<div className="mdc-toolbar__row">
				<section className="mdc-toolbar__section mdc-toolbar__section--align-start">
					<a href="#" className="material-icons mdc-toolbar__menu-icon" onClick={onMenuClick}>menu</a>
					<Link to="/" className="mdc-toolbar__title mdc-theme--text-primary-on-primary">Spotter</Link>
				</section>
			</div>
		</header>

	)

}

Toolbar.propTypes = {
	onMenuClick: PropTypes.func.isRequired
}

export default Toolbar;