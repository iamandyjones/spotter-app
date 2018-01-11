import React, { Component } from 'react';
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer'
import '@material/drawer/dist/mdc.drawer.css';

class Nav extends Component {

	componentDidMount(){

		this.drawer = new MDCTemporaryDrawer(this.drawerEl);

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

	render(){

		return (

			<aside className="mdc-drawer mdc-drawer--temporary" ref={(el) => this.drawerEl = el}>
			  <nav className="mdc-drawer__drawer">
			    <header className="mdc-drawer__header">
			      <div className="mdc-drawer__header-content mdc-theme--text-primary-on-primary mdc-theme--primary-bg">
			        Header here
			      </div>
			    </header>
			    <nav className="mdc-drawer__content mdc-list-group">

			    	<div className="mdc-list">

			      <a className="mdc-list-item mdc-list-item--activated" href="#">
			        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>Home
			      </a>
			      <a className="mdc-list-item" href="#">
			        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">star</i>My Workouts
			      </a>

			      </div>
			    </nav>
			  </nav>
			</aside>

		)

	}

}

export default Nav;


