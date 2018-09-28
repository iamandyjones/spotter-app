import { connect } from 'react-redux';
import TimerContainer from '../components/TimerContainer';
import { toggleFullscreen } from '../actions/TimerActions';

const mapStateToProps = (state) => (

	{
		timerOpen: state.timer.isOpen,
		timerFullscreen: state.timer.isFullscreen
	}

)

const mapDispatchToProps = (dispatch) => (

	{
		toggleFullscreen: () => {

			dispatch(toggleFullscreen());

		}
	}

)

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
