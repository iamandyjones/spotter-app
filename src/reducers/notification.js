import * as types from '../constants/ActionTypes';

const initialState = {
	text: '',
	active: false
};

const notification = (state = initialState, action) => {

	switch(action.type) {

		case types.SHOW_NOTIFICATION:

			return { text: action.text, active: true };

		case types.HIDE_NOTIFICATION:

			return { ...state, active: false };

		default:

			return state;

	};

}

export default notification;

