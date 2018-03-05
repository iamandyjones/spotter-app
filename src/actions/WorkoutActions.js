import * as types from '../constants/ActionTypes';
import { getWorkout, getWorkouts, createWorkout, editWorkout, deleteWorkout } from '../utils/ApiUtils';
import { uid } from '../utils/GlobalUtils';

const requestWorkout = () => (

	{
		type: types.REQUEST_WORKOUT
	}

)

const receiveWorkout = (data) => (

	{
		type: types.RECEIVE_WORKOUT,
		workout: data
	}

)

const requestWorkouts = () => (

	{
		type: types.REQUEST_WORKOUTS
	}

)

const receiveWorkouts = (data) => (

	{
		type: types.RECEIVE_WORKOUTS,
		items: data
	}

)

const createWorkoutAction = (w) => (

	{

		type: types.CREATE_WORKOUT,
		workout: w

	}

)

const editWorkoutAction = (workout) => (

	{

		type: types.EDIT_WORKOUT,
		workout

	}

)

const removeWorkoutAction = (id) => (

	{
		type: types.DELETE_WORKOUT,
		id: id
	}

)

export const fetchWorkout = (id) => {

	return (dispatch) => {

		dispatch(requestWorkout());

		return getWorkout(id, (workout) => {

			dispatch(receiveWorkout(workout));

		});

	}

}

export const fetchWorkoutsIfNeeded = () => {

	return (dispatch) => {

		dispatch(requestWorkouts());

		return getWorkouts((workouts) => {

			dispatch(receiveWorkouts(workouts));

		});

	}

}

export const AddOrEditWorkout = (id, workout) => {

	return (dispatch) => {

		if(id){

			dispatch(editWorkoutAction(workout));
			editWorkout(id, workout);
			return Promise.resolve(id);

		} else {

			const w = {...workout, id: uid(), date: Date.now()};
			dispatch(createWorkoutAction(w));
			return createWorkout(w);

		}

	}

}

export const removeWorkout = (workoutId) =>{

	return (dispatch) => {

		dispatch(removeWorkoutAction(workoutId));
		return deleteWorkout(workoutId);

	}

}