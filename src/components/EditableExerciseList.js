import React from 'react';
import PropTypes from 'prop-types';
import EditableExercise from './EditableExercise';

const EditableExerciseList = ({ items, onDeleteClick, onSetChange }) => (

	items.map(e => (

		<EditableExercise
			key={e.id}
			onDeleteClick={onDeleteClick}
			onSetChange={onSetChange}
			{...e}
		/>

	))

)

EditableExerciseList.propTypes = {
	items: PropTypes.array.isRequired,
	onDeleteClick: PropTypes.func,
	onSetChange: PropTypes.func
}

export default EditableExerciseList;
