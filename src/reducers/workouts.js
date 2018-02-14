import * as types from '../constants/ActionTypes';

const initialState = {
	items: [],
	isFetching: false
};

const workouts = (state = initialState, action) => {

	switch(action.type) {

		case types.REQUEST_WORKOUTS:

			return { ...state, isFetching: true };

		case types.RECEIVE_WORKOUTS:

			return { ...state, isFetching: false, items: action.items };

		case types.CREATE_WORKOUT:

			return { ...state, items: state.items.concat(action.workout) }

		default:

			return state;

	}

}

export default workouts;

