import * as types from '../constants/ActionTypes';

const toggleTimerVisibility = () => (

	{
		type: types.TOGGLE_TIMER
	}

)

const toggleFullscreen = () => (

	{
		type: types.TOGGLE_TIMER_FULLSCREEN
	}

)

const setTimer = data => (

	{
		type: types.SET_TIMER,
		data
	}

)

export {
	toggleTimerVisibility,
	toggleFullscreen,
	setTimer
}
