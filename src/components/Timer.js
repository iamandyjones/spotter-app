import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderTimerString } from '../utils/TimerUtils';
import TimerButton from './TimerButton';

class Timer extends Component {

	componentDidMount(){

		this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
		
	}

	componentWillUnmount(){

		clearInterval(this.forceUpdateInterval);

	}

	render(){
		
		const { elapsed, runningSince, onStartClick, onStopClick, onRestartClick } = this.props;

		const elapsedString = renderTimerString(elapsed, runningSince);

		return (

			<div>
				{elapsedString}
				<TimerButton timerRunning={!!runningSince} onStartClick={onStartClick} onStopClick={onStopClick} />
				<i className="material-icons" onClick={onRestartClick}>replay</i>
			</div>

		)

	}

}

Timer.PropTypes = {
	elapsed: PropTypes.number.isRequired,
	runningSince: PropTypes.number.isRequired,
	onStartClick: PropTypes.func.isRequired,
	onStopClick: PropTypes.func.isRequired,
	onRestartClick: PropTypes.func.isRequired
}

export default Timer;