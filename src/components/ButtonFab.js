import React, { Component } from 'react';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';

import '@material/fab/dist/mdc.fab.css';

class ButtonFab extends Component {

	componentDidMount(){

		if(this.props.ripple){
			MDCRipple.attachTo(this.fab);	
		}
		
	}

	render(){

		return (

			<button className="mdc-fab material-icons" aria-label={this.props.label} ref={(el) => this.fab = el} onClick={this.props.onClick}>
				<span className="mdc-fab__icon">
					{this.props.label}
				</span>
			</button>

		)

	}

}

export default ButtonFab;