import * as types from '../constants/ActionTypes';

const initialState = {
	isOpen: false,
	isFullscreen: false,
	runningSince: null,
	elapsed: null
};

const timer = (state = initialState, action) => {

	switch(action.type) {

		case types.TOGGLE_TIMER:

			return { ...state, isOpen: !state.isOpen };

		case types.TOGGLE_TIMER_FULLSCREEN:

			return { ...state, isFullscreen: !state.isFullscreen };

		case types.SET_TIMER:

			return { ...state, ...action.data }

		default:

			return state;

	}

}

export default timer;
