import * as types from '../constants/ActionTypes';

const initialState = {
	isFetching: false,
	id: null,
	title: '',
	date: ''
};

const workout = (state = initialState, action) => {

	switch(action.type) {

		case types.REQUEST_WORKOUT:

			return { ...state, isFetching: true };

		case types.RECEIVE_WORKOUT:

			return { ...state, ...action.workout, isFetching: false };

		case types.EDIT_WORKOUT:

			return { ...state, ...action.workout };

		default:

			return state;

	}

}

export default workout;

