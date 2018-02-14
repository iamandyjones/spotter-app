import * as types from '../constants/ActionTypes';

const showNotification = (text) => (

	{
		type: types.SHOW_NOTIFICATION,
		text: text
	}

);

const hideNotification = () => (

	{
		type: types.HIDE_NOTIFICATION
	}

);

export const toggleNotification = (text) => {

	return (dispatch) => {

		dispatch(showNotification(text));

		setTimeout(() => {
			dispatch(hideNotification())	
		}, 3000);
		
	}
	
};