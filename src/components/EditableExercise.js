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

	handleFormSubmit(exercise){

		this.props.onFormSubmit(exercise);
		this.closeForm();

	}

	handleFormCancel(){

		this.closeForm();

	}

	render(){

		if(this.state.editFormOpen){

			return (
				<div className="item">
				<ExerciseForm id={this.props.id} title={this.props.title} workout={this.props.workout} workoutId={this.props.workoutId} onFormSubmit={this.handleFormSubmit} onFormCancel={this.handleFormCancel} />
				</div>
			);

		} else {

			return (
				<div className="item">
				<Exercise id={this.props.id} title={this.props.title} workout={this.props.workout} onEditClick={this.handleEdit} onDeleteClick={this.props.onDeleteClick}  />
				</div>
			);

		}

	}

}

export default EditableExercise;