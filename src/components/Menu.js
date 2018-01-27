import React from 'react';
import PropTypes from 'prop-types';
import '@material/menu/dist/mdc.menu.css';

const Menu = (props) => (

	<div className="mdc-simple-menu mdc-simple-menu--open" style={{right: '0px'}}>
		<ul className="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
			<li className="mdc-list-item" role="menuitem" tabIndex="0">
			A Menu Item
			</li>
			<li className="mdc-list-item" role="menuitem" tabIndex="0">
			Another Menu Item
			</li>
		</ul>
	</div>

)

export default Menu;