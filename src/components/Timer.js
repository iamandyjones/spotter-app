import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderTimerString } from '../utils/TimerUtils';
import IconButton from './IconButton';
import Button from './Button';
import BottomSheet from './BottomSheet';
import './Timer.css';

class Timer extends Component {

	componentDidMount(){

		this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);

	}

	componentWillUnmount(){

		clearInterval(this.forceUpdateInterval);

	}

	render(){

		const {
			elapsed,
			runningSince,
			onStartClick,
			onStopClick,
			onRestartClick,
			fullscreen
		} = this.props;

		const elapsedString = renderTimerString(elapsed, runningSince);

		return (

			<BottomSheet fullscreen={fullscreen}>

				<div className="timer">

					<IconButton onClick={onRestartClick} label="Restart" action="replay" />
					<span className="timer__string mdc-typography--display1">{elapsedString}</span>

					{!!runningSince ? (

						<IconButton onClick={onStopClick} label="Pause" action="pause_circle_filled" />

						) : (

						<IconButton onClick={onStartClick} label="Play" action="play_circle_filled" />

					)}

				</div>

			</BottomSheet>

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
