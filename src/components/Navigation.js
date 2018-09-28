import React, { Component } from 'react';
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer'
import { NavLink } from 'react-router-dom';
import '@material/drawer/dist/mdc.drawer.css';

class Nav extends Component {

	componentDidMount(){

		this.drawer = new MDCTemporaryDrawer(this.drawerEl);

		this.handleNavClick = this.handleNavClick.bind(this);

		this.drawer.listen('MDCTemporaryDrawer:close', () => this.props.onNavClose());

	}

	componentWillUnmount(){

		this.drawer.destroy();

	}

	componentDidUpdate(prevProps){

		if(prevProps.open !== this.props.open){
			this.drawer.open = this.props.open;
		}

	}

	handleNavClick(evt){

		this.props.onNavClose();

	}

	render(){

		return (

			<aside className="mdc-drawer mdc-drawer--temporary" ref={(el) => this.drawerEl = el}>
			  <nav className="mdc-drawer__drawer">
			    <header className="mdc-drawer__header">
			      <div className="mdc-drawer__header-content mdc-theme--on-primary mdc-theme--primary-bg">
			        Spotter App
			      </div>
			    </header>
			    <nav className="mdc-drawer__content mdc-list-group" onClick={this.handleNavClick}>

			    	<div className="mdc-list">

			    	<NavLink exact to="/" className="mdc-list-item" activeClassName="mdc-list-item--activated">
			    		<i className="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>Home
			    	</NavLink>

			    	<NavLink exact to="/workouts" className="mdc-list-item" activeClassName="mdc-list-item--activated">
			    		<i className="material-icons mdc-list-item__graphic" aria-hidden="true">star</i>My Workouts
			    	</NavLink>

			    	<div className="mdc-list-divider" role="separator"></div>

			    	<NavLink exact to="/workouts" className="mdc-list-item" activeClassName="mdc-list-item--activated">
			    		<i className="material-icons mdc-list-item__graphic" aria-hidden="true">star</i>My Workouts
			    	</NavLink>

			      	</div>
			    </nav>
			  </nav>
			</aside>

		)

	}

}

export default Nav;
