import React from 'react';
import PropTypes from 'prop-types';
import EditableExercise from './EditableExercise';

const EditableExerciseList = ({ items, onDeleteClick, onSetChange }) => (

	items.map(e => (

		<EditableExercise 
			key={e.id} 
			id={e.id} 
			title={e.title} 
			workout={e.workout}  
			sets={e.sets}
			onDeleteClick={onDeleteClick}
			onSetChange={onSetChange} />

	))

)

EditableExerciseList.propTypes = {
	items: PropTypes.array.isRequired,
	onDeleteClick: PropTypes.func,
	onSetChange: PropTypes.func
}

export default EditableExerciseList;