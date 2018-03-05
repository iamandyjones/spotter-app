import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';

class ListLink extends Component {

	componentDidMount(){
		
		MDCRipple.attachTo(this.listLink);

	}

	render(){

		 const { to, title, meta, icon } = this.props;

		 return (

		 	<Link to={to} className="mdc-list-item" innerRef={el => this.listLink = el}>
					
				<span className="mdc-list-item__graphic" role="presentation">
					<i className="material-icons" aria-hidden="true">{icon}</i>
		      	</span>
				<span className="mdc-list-item__text">
					{title}
					<span className="mdc-list-item__secondary-text">{meta}</span>
				</span>

			</Link>

		 )

	}

}

ListLink.propTypes = {
	to: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	meta: PropTypes.string,
	icon: PropTypes.string
}

export default ListLink;