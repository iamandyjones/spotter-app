import React, { Component } from 'react';

import EditableExercise from './EditableExercise';

class EditableExerciseList extends Component {

	render(){

		const exercises = this.props.exercises.map((timer) => (

			<EditableExercise key={timer.id} title={timer.title} workout={timer.workout} id={timer.id} onFormSubmit={this.props.onFormSubmit} onDeleteClick={this.props.onDeleteClick} />

		));

		return (
			
			<div className="listing">
				{exercises}
			</div>

		)

	}

}

export default EditableExerciseList;