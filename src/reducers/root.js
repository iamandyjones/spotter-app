import { combineReducers } from 'redux';
import notification from './notification';
import workouts from './workouts';

const rootReducer = combineReducers({
	notification,
	workouts
});

export default rootReducer;