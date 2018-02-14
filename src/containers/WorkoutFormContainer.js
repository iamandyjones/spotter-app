import { connect } from 'react-redux';
import WorkoutForm from '../components/WorkoutForm';
import { AddOrEditWorkout } from '../actions/WorkoutActions';
import { toggleNotification } from '../actions/NotificationActions';

const mapDispatchToProps = (dispatch) => (

	{
		onFormSubmit: (id, w) => (

			dispatch(AddOrEditWorkout(id, w))

		),

		onNotify: (text) => (

			dispatch(toggleNotification(text))

		)
	}

)

export default connect(null, mapDispatchToProps)(WorkoutForm);
