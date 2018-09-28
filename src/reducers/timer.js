import * as types from '../constants/ActionTypes';

const initialState = {
	isOpen: false,
	isFullscreen: false
};

const timer = (state = initialState, action) => {

	switch(action.type) {

		case types.TOGGLE_TIMER:

			return { ...state, isOpen: !state.isOpen };

		case types.TOGGLE_TIMER_FULLSCREEN:

			return { ...state, isFullscreen: !state.isFullscreen };

		default:

			return state;

	}

}

export default timer;
