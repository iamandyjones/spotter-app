import * as types from '../constants/ActionTypes';
import { getExercises, editExercise, createExercise, deleteExercise } from '../utils/ApiUtils';
import { uid } from '../utils/GlobalUtils';

const requestExercises = () => (

	{
		type: types.REQUEST_EXERCISES
	}

)

const receiveExercises = (data) => (

	{
		type: types.RECEIVE_EXERCISES,
		items: data
	}

)

const createExerciseAction = (e) => (

	{

		type: types.CREATE_EXERCISE,
		exercise: e

	}

)

const editExerciseAction = (id, attrs) => (

	{

		type: types.EDIT_EXERCISE,
		id: id,
		exercise: attrs

	}

)

const removeExerciseAction = (e) => (

	{
		type: types.REMOVE_EXERCISE,
		id: e
	}

)

export const fetchExercises = (workoutId) => {

	return (dispatch) => {

		dispatch(requestExercises());

		return getExercises(workoutId, (exercises) => {

			dispatch(receiveExercises(exercises));

		});

	}

}

export const AddOrEditExercise = (id, attrs, workoutId) => {

	return (dispatch) => {

		if(id){

			editExercise(id, attrs);
			dispatch(editExerciseAction(id, attrs))

		} else {

			const e = {...attrs, id: uid(), workoutId: workoutId, sets: []};
			createExercise(e);
			dispatch(createExerciseAction(e))

		}

	}

}

export const removeExercise = (exerciseId) => {

	return (dispatch) => {

		deleteExercise(exerciseId);
		dispatch(removeExerciseAction(exerciseId));

	}

}

    	