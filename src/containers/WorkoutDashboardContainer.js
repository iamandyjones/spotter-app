import { connect } from 'react-redux';
import WorkoutDashboard from '../components/WorkoutDashboard';
import { fetchExercises, removeExercise, AddOrEditExercise } from '../actions/ExerciseActions';
import { fetchWorkout } from '../actions/WorkoutActions';

const mapStateToProps = (state) => {

	const { items, isFetching } = state.exercises;
	const { date } = state.workout;

	return {
		items,
		isFetching,
		date
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

		)
	}

)

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDashboard);
