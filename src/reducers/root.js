import { combineReducers } from 'redux';
import notification from './notification';
import workouts from './workouts';
import workout from './workout';
import exercises from './exercises';

const rootReducer = combineReducers({
	notification,
	workouts,
	workout,
	exercises
});

export default rootReducer;