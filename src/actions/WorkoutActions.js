import * as types from '../constants/ActionTypes';
import { getWorkouts } from '../utils/ApiUtils';

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

export const fetchWorkoutsIfNeeded = () => {

	return function(dispatch){

		dispatch(requestWorkouts());

		getWorkouts((workouts) => {

			dispatch(receiveWorkouts(workouts));

		});

	}

}