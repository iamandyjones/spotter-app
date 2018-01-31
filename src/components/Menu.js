import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '@material/menu/dist/mdc.menu.css';
import './Menu.css';

class Menu extends Component {

	constructor(props){

		super(props);

		this.state = { showMenu: false }

		this.handleMenuToggle = this.handleMenuToggle.bind(this);
		this.handleBlur = this.handleBlur.bind(this);	

	}

	componentDidUpdate(prevProps, prevState){

		if(prevState.showMenu !== this.state.showMenu && this.state.showMenu){
			this.menu.focus();
		}

	}

	handleMenuToggle(){

		this.setState((prevState, props) => { 
			return { showMenu: !prevState.showMenu }
		});

	}

	handleBlur(e){

		const currentTarget = e.currentTarget;

		setTimeout(() => {
			if(!currentTarget.contains(document.activeElement)){
				this.handleMenuToggle();
			}
		}, 0);

	}

	generateHandler(action){

		return () => this.props.actionHandler(action);

	}

	render(){

		const { items, iconClass } = this.props;

		return (

			<Fragment>

			<i onClick={this.handleMenuToggle} className={"material-icons " + iconClass} aria-label="More" title="More">more_vert</i>
			
			{this.state.showMenu && (
			
				<div className="mdc-menu-anchor">
				
					<div className="mdc-simple-menu mdc-simple-menu--open" ref={el => this.menu = el} onBlur={this.handleBlur} tabIndex="0">
						
						<ul className="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">

							{items.map((item, index) => {

								return <li key={index} className="mdc-list-item" role="menuitem" tabIndex="0" onClick={this.generateHandler(item.action)}>{item.label}</li>
							}
							)}

						</ul>

					</div>	

				</div>

			)}

			</Fragment>

		)

	}

}

Menu.propTypes = {
	items: PropTypes.array.isRequired,
	actionHandler: PropTypes.func.isRequired,
	iconClass: PropTypes.string
}

export default Menu;