import { connect } from 'react-redux';
import Root from '../components/Root';
import { openNavigation } from '../actions/UiActions';

const mapStateToProps = (state) => (

	{
		workoutTitle: state.workout.title
	}

)

const mapDispatchToProps = (dispatch) => (

	{
		onNavOpen: () => {

			dispatch(openNavigation());

		}
	}

)

export default connect(mapStateToProps, mapDispatchToProps)(Root);
