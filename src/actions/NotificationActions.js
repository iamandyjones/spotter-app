import * as types from '../constants/ActionTypes';

export const showNotification = (text) => (

	{
		type: types.SHOW_NOTIFICATION,
		text: text
	}

);

export const hideNotification = () => (

	{
		type: types.HIDE_NOTIFICATION

	}

);