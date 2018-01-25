import React, { Component } from 'react';

import SetList from './SetList';

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

			<li className="mdc-list-item">
			<span className="mdc-list-item__text">{this.props.title} - {this.props.workout}
			<SetList id={this.props.id} sets={this.props.sets} onSetChange={this.props.onSetChange} />
			</span>
			<div className="mdc-list-item__meta">
				<div onClick={this.props.onEditClick}>Edit</div>
				<div onClick={this.handleDeleteClick}>Delete</div>
			</div>
			</li>

		);

	}

}

export default Exercise;