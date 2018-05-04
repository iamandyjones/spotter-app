import * as types from '../constants/ActionTypes';

const initialState = {
	items: [],
	isFetching: false
};

const exercises = (state = initialState, action) => {

	switch(action.type) {

		case types.REQUEST_EXERCISES:

			return { ...state, isFetching: true };

		case types.RECEIVE_EXERCISES:

			return { ...state, isFetching: false, items: action.items };

		case types.EDIT_EXERCISE:

			return {...state, items: state.items.map(e => {

				if(e.id === action.id){

					return {...e, ...action.exercise}

				} else {

					return e;

				}

			})}

		case types.CREATE_EXERCISE:

			return {...state, items: [...state.items, action.exercise]};

		case types.REMOVE_EXERCISE:

			return {...state, items: state.items.filter(e => e.id !== action.id)}

		default:

			return state;

	}

}

export default exercises;
