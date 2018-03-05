import * as types from '../constants/ActionTypes';

const initialState = {
	navigationOpen: false
};

const ui = (state = initialState, action) => {

	switch(action.type) {

		case types.OPEN_NAVIGATION:

			return { ...state, navigationOpen: true };

		case types.CLOSE_NAVIGATION:

			return { ...state, navigationOpen: false };

		default:

			return state;

	}

}

export default ui;

