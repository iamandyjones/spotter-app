import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';

class MenuActions extends Component {

	handleMenuActions(actionItem){

		// If menu items need custom behaviour, handle them here...

	}

	render(){

		const { url, actions } = this.props;

		return (

			<Menu url={url} items={actions} actionHandler={this.handleMenuActions} iconClass="mdc-top-app-bar__action-item" />

		)

	}

}

MenuActions.propTypes = {
	actions: PropTypes.array.isRequired,
	url: PropTypes.string.isRequired
}

export default MenuActions;
