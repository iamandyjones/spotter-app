import React, { Component } from 'react';

import EditableExercise from './EditableExercise';

class EditableExerciseList extends Component {

	render(){

		const exercises = this.props.exercises.map((exercise) => (

			<EditableExercise 
				key={exercise.id} 
				id={exercise.id} 
				title={exercise.title} 
				workout={exercise.workout} 
				onFormSubmit={this.props.onFormSubmit} 
				onDeleteClick={this.props.onDeleteClick} />

		));

		return (
			
			<div className="listing">
				{exercises}
			</div>

		)

	}

}

export default EditableExerciseList;