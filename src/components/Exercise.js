import React, { Component } from 'react';

class Exercise extends Component {

	constructor(props){
		super(props);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);

	}

	handleDeleteClick(){

		this.props.onDeleteClick(this.props.id);

	}

	render(){

		return (

			<div>
				<p>{this.props.title}</p>
				<p>{this.props.workout}</p>
				<div onClick={this.props.onEditClick}>Edit</div>
				<div onClick={this.handleDeleteClick}>Delete</div>
			</div>

		);

	}

}

export default Exercise;