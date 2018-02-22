import { connect } from 'react-redux';
import ExerciseForm from '../components/ExerciseForm';
import { AddOrEditExercise } from '../actions/ExerciseActions';

const mapDispatchToProps = (dispatch, ownProps) => (

	{
		onFormSubmit: (attrs) => (

			dispatch(AddOrEditExercise(ownProps.id, attrs, ownProps.workoutId))

		)

	}

)

export default connect(null, mapDispatchToProps)(ExerciseForm);