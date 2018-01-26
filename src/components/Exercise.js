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

			

				<div className="mdc-list-item__text">{this.props.title} - {this.props.workout}

					<SetList id={this.props.id} sets={this.props.sets} onSetChange={this.props.onSetChange} />

				</div>

				<div className="mdc-list-item__meta">

					<i className="mdc-list-item__meta material-icons" aria-label="More" title="More">more_vert</i>
					<div onClick={this.props.onEditClick}>Edit</div>
					<div onClick={this.handleDeleteClick}>Delete</div>
				</div>

			

		);

	}

}

export default Exercise;