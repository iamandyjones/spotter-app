import * as types from '../constants/ActionTypes';

const initialState = {
	isOpen: false
};

const timer = (state = initialState, action) => {

	switch(action.type) {

		case types.TOGGLE_TIMER:

			return { ...state, isOpen: !state.isOpen };

		default:

			return state;

	}

}

export default timer;
