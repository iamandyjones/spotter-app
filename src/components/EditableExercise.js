import React, { Component } from 'react';

import ExerciseForm from './ExerciseForm';
import Exercise from './Exercise';

class EditableExercise extends Component {

	constructor(props){
		super(props);
		this.state = { editFormOpen: false };

		this.handleEdit = this.handleEdit.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleFormCancel = this.handleFormCancel.bind(this);

	}

	openForm(){

		this.setState({ editFormOpen: true });

	}

	closeForm(){

		this.setState({ editFormOpen: false });

	}

	handleEdit(){

		this.openForm();

	}

	handleFormSubmit(id, exercise){

		this.props.onFormSubmit(id, exercise);
		this.closeForm();

	}

	handleFormCancel(){

		this.closeForm();

	}

	render(){

		if(this.state.editFormOpen){

			return (
				
				<ExerciseForm id={this.props.id} title={this.props.title} workout={this.props.workout} onFormSubmit={this.handleFormSubmit} onFormCancel={this.handleFormCancel} />
				
			);

		} else {

			return (
				
				<Exercise id={this.props.id} title={this.props.title} workout={this.props.workout} sets={this.props.sets} onEditClick={this.handleEdit} onDeleteClick={this.props.onDeleteClick} onSetChange={this.props.onSetChange}  />
				
			);

		}

	}

}

export default EditableExercise;