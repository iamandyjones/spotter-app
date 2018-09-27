import { connect } from 'react-redux';
import TimerContainer from '../components/TimerContainer';

const mapStateToProps = (state) => (

	{
		timerOpen: state.timer.isOpen
	}

)

const mapDispatchToProps = (dispatch) => (

	{

	}

)

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
