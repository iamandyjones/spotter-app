import { connect } from 'react-redux';
import WorkoutForm from '../components/WorkoutForm';
import { AddOrEditWorkout } from '../actions/WorkoutActions';
import { toggleNotification } from '../actions/NotificationActions';

const mapDispatchToProps = (dispatch, ownProps) => (

	{
		onFormSubmit: (w) => (

			dispatch(AddOrEditWorkout(ownProps.id, w))

		),

		onNotify: (text) => (

			dispatch(toggleNotification(text))

		)
	}

)

export default connect(null, mapDispatchToProps)(WorkoutForm);
