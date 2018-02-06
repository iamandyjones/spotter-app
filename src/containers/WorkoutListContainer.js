import { connect } from 'react-redux';
import WorkoutList from '../components/WorkoutList';
import { fetchWorkoutsIfNeeded } from '../actions/WorkoutActions';

const mapStateToProps = (state) => {

	const { items, isFetching } = state.workouts;

	return {
		items,
		isFetching
	}

}

const mapDispatchToProps = (dispatch) => (

	{
		fetchWorkoutsIfNeeded: () => (

			dispatch(fetchWorkoutsIfNeeded())

		)
	}

)

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutList);
