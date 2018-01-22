import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';

import '@material/fab/dist/mdc.fab.css';
import './ButtonFab.css';

class ButtonFab extends Component {

	componentDidMount(){

		if(this.props.ripple){
			MDCRipple.attachTo(this.fab);
		}
		
	}

	render(){

		const { absolute, label, onClick } = this.props;

		return (

			<button className={"mdc-fab material-icons" + (absolute ? " app-fab--absolute" : "")} aria-label={label} ref={(el) => this.fab = el} onClick={onClick}>
				
				<span className="mdc-fab__icon">{label}</span>

			</button>

		)

	}

}

ButtonFab.propTypes = {
	absolute: PropTypes.bool,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default ButtonFab;