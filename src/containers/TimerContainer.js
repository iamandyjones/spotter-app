import { connect } from 'react-redux';
import Timer from '../components/Timer';
import { toggleFullscreen, setTimer } from '../actions/TimerActions';

const mapStateToProps = (state) => (

	{
		timerOpen: state.timer.isOpen,
		timerFullscreen: state.timer.isFullscreen,
		runningSince: state.timer.runningSince,
		elapsed: state.timer.elapsed
	}

)

const mapDispatchToProps = (dispatch) => (

	{
		toggleFullscreen: () => {

			dispatch(toggleFullscreen());

		},

		setTimer: (runningSince, elapsed) => {

			dispatch(setTimer(runningSince, elapsed));

		}
	}

)

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
