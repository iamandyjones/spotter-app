import { connect } from 'react-redux';
import WorkoutDashboard from '../components/WorkoutDashboard';
import { fetchExercises, removeExercise, AddOrEditExercise } from '../actions/ExerciseActions';
import { fetchWorkout, removeWorkout } from '../actions/WorkoutActions';
import { toggleNotification } from '../actions/NotificationActions';

const mapStateToProps = (state) => {

	const { items, isFetching } = state.exercises;
	const { id, date, title } = state.workout;
	const { isOpen: timerOpen } = state.timer;

	return {
		items,
		isFetching,
		id,
		date,
		title,
		timerOpen
	}

}

const mapDispatchToProps = (dispatch) => (

	{
		fetchWorkout: (workoutId) => (

			dispatch(fetchWorkout(workoutId))

		),

		fetchExercises: (workoutId) => (

			dispatch(fetchExercises(workoutId))

		),

		onDeleteClick: (exerciseId) => (

			dispatch(removeExercise(exerciseId))

		),

		onSetChange: (id, attrs) => (

			dispatch(AddOrEditExercise(id, attrs))

		),

		deleteWorkout: (workoutId) => (

			dispatch(removeWorkout(workoutId))

		),

		onNotify: (text) => (

			dispatch(toggleNotification(text))

		)
	}

)

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDashboard);
