import React from 'react';
import PropTypes from 'prop-types';
import { renderTimerString } from '../utils/TimerUtils';
import IconButton from './IconButton';
import BottomSheet from './BottomSheet';
import './Timer.css';

const TimerSlim = (props) => {

	const {
		elapsed,
		runningSince,
		onRestartClick,
		onToggleFullscreen,
		onStopClick,
		onStartClick,
		isOpen
	} = props;

	const elapsedString = renderTimerString(elapsed, runningSince);

	return (

		<BottomSheet isOpen={isOpen}>

			<div className="timer">

				<div className="timer__expand">

					<IconButton onClick={onToggleFullscreen} label="Expand" action="keyboard_arrow_up" />

				</div>

				<IconButton onClick={onRestartClick} label="Restart" action="replay" />

				<span className="timer__string mdc-typography--headline5">{elapsedString}</span>

				{!!runningSince ? (

					<IconButton onClick={onStopClick} label="Pause" action="pause_circle_filled" />

				) : (

					<IconButton onClick={onStartClick} label="Play" action="play_circle_filled" />

				)}

			</div>

		</BottomSheet>

	)

}

TimerSlim.propTypes = {
	elapsed: PropTypes.number,
	runningSince: PropTypes.number,
	onStartClick: PropTypes.func.isRequired,
	onStopClick: PropTypes.func.isRequired,
	onRestartClick: PropTypes.func.isRequired,
	onToggleFullscreen: PropTypes.func.isRequired,
	isOpen: PropTypes.bool
}

export default TimerSlim;
