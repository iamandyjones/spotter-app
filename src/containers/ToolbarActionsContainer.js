import { connect } from 'react-redux';
import ToolbarActions from '../components/ToolbarActions';
import { toggleTimerVisibility } from '../actions/TimerActions';

const mapStateToProps = (state) => (

	{}

)

const mapDispatchToProps = (dispatch) => (

	{
		toggleTimer: (evt) => {

			evt.preventDefault();
			evt.stopPropagation();
			dispatch(toggleTimerVisibility());

		}
	}

)

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarActions);
