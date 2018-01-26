import React from 'react';
import PropTypes from 'prop-types';
import EditableExercise from './EditableExercise';

const EditableExerciseList = (props) => {

	const exercises = props.exercises.map((e) => (

		<EditableExercise 
			key={e.id} 
			id={e.id} 
			title={e.title} 
			workout={e.workout}  
			sets={e.sets}
			onFormSubmit={props.onFormSubmit} 
			onDeleteClick={props.onDeleteClick}
			onSetChange={props.onSetChange} />

	));

	return (
		
		<ul className="mdc-list mdc-list--three-line mdc-list--non-interactive list-divided">
		{exercises}
		</ul>

	)

}

EditableExerciseList.propTypes = {
	exercises: PropTypes.array.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
	onDeleteClick: PropTypes.func.isRequired,
	onSetChange: PropTypes.func.isRequired
}

export default EditableExerciseList;