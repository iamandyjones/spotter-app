import { combineReducers } from 'redux';
import ui from './ui';
import notification from './notification';
import workouts from './workouts';
import workout from './workout';
import exercises from './exercises';
import timer from './timer';

const rootReducer = combineReducers({
	ui,
	notification,
	workouts,
	workout,
	exercises,
	timer
});

export default rootReducer;
