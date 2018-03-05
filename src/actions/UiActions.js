import * as types from '../constants/ActionTypes';

const openNavigation = () => (

	{
		type: types.OPEN_NAVIGATION
	}

);

const closeNavigation = () => (

	{
		type: types.CLOSE_NAVIGATION
	}

);

export {
	openNavigation,
	closeNavigation
}