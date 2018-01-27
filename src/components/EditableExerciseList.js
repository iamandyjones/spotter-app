import React from 'react';
import PropTypes from 'prop-types';
import EditableExercise from './EditableExercise';

const EditableExerciseList = (props) => {

	return props.exercises.map((e) => (

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

}

EditableExerciseList.propTypes = {
	exercises: PropTypes.array.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
	onDeleteClick: PropTypes.func.isRequired,
	onSetChange: PropTypes.func.isRequired
}

export default EditableExerciseList;