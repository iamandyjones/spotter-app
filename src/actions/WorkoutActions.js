import * as types from '../constants/ActionTypes';
import { getWorkouts, createWorkout, editWorkout } from '../utils/ApiUtils';
import { uid } from '../utils/GlobalUtils';

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

const editWorkoutAction = (id, w) => (

	{

		type: types.EDIT_WORKOUT,
		id: id,
		workout: w

	}

)

export const fetchWorkoutsIfNeeded = () => {

	return function(dispatch){

		dispatch(requestWorkouts());

		return getWorkouts((workouts) => {

			dispatch(receiveWorkouts(workouts));

		});

	}

}

export const AddOrEditWorkout = (id, workout) => {

	return (dispatch) => {

		if(id){

			editWorkout(id, workout);
			dispatch(editWorkoutAction(id, workout))

		} else {

			const w = Object.assign({}, { id: uid(), date: Date.now() }, workout);
			createWorkout(w);
			dispatch(createWorkoutAction(w))

		}

	}

}

/*
this.setState((prevState) => {
			const w = Object.assign({}, prevState.workout, attrs);
			return { workout: w }
		});

*/		





	    	