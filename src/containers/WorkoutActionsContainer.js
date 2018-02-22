import { connect } from 'react-redux';
import WorkoutActions from '../components/WorkoutActions';
import { removeWorkout } from '../actions/WorkoutActions';
import { toggleNotification } from '../actions/NotificationActions';

const mapStateToProps = (state) => {

	const { id, title } = state.workout; // should this id be grabbed from own props? 

	return {
		id,
		title
	}

}

const mapDispatchToProps = (dispatch) => (

	{
		deleteWorkout: (workoutId) => (

			dispatch(removeWorkout(workoutId))

		),

		onNotify: (text) => (

			dispatch(toggleNotification(text))

		)

	}

)

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutActions);
