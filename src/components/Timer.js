import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderTimerString } from '../utils/TimerUtils';
import TimerButton from './TimerButton';
import './Timer.css';

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

			<div className="timer">
				<i className="material-icons mdc-theme--primary-dark" onClick={onRestartClick}>replay</i>
				<span className="timer__string mdc-typography--display1">{elapsedString}</span>
				<TimerButton timerRunning={!!runningSince} onStartClick={onStartClick} onStopClick={onStopClick} />
			</div>

		)

	}

}

Timer.propTypes = {
	elapsed: PropTypes.number,
	runningSince: PropTypes.number,
	onStartClick: PropTypes.func.isRequired,
	onStopClick: PropTypes.func.isRequired,
	onRestartClick: PropTypes.func.isRequired
}

export default Timer;