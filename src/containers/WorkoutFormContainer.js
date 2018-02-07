import { connect } from 'react-redux';
import WorkoutForm from '../components/WorkoutForm';
import { AddOrEditWorkout } from '../actions/WorkoutActions';

const mapDispatchToProps = (dispatch) => (

	{
		onFormSubmit: (id, w) => (		

			dispatch(AddOrEditWorkout(id, w))

		)
	}

)

export default connect(null, mapDispatchToProps)(WorkoutForm);
