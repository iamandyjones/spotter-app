import React from 'react';
import PropTypes from 'prop-types';

function TimerButton({timerRunning, onStopClick, onStartClick}){

	if(timerRunning){

		return (	
			<i className="material-icons" onClick={onStopClick}>pause_circle_outline</i>
		)

	} else {

		return (
			<i className="material-icons" onClick={onStartClick}>play_circle_outline</i>
		)

	}

}

TimerButton.proptypes = {
	timerRunning: PropTypes.bool.isRequired,
	onStopClick: PropTypes.func.isRequired,
	onStartClick: PropTypes.func.isRequired
}

export default TimerButton;	