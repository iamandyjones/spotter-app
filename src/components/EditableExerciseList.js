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
				sets={exercise.sets}
				onFormSubmit={this.props.onFormSubmit} 
				onDeleteClick={this.props.onDeleteClick}
				onSetChange={this.props.onSetChange} />

		));

		return (
			
			<ul className="mdc-list mdc-list--three-line mdc-list--non-interactive list-divided">
			{exercises}
			</ul>

		)

	}

}

export default EditableExerciseList;