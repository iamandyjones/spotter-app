import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TimerButton = ({ timerRunning, onStopClick, onStartClick }) => (

	<Fragment>

	{timerRunning ? (
		
		<i className="material-icons mdc-theme--primary-dark" onClick={onStopClick}>pause_circle_outline</i>
		
		) : (

		<i className="material-icons mdc-theme--primary-dark" onClick={onStartClick}>play_circle_outline</i>

	)}

	</Fragment>

)

TimerButton.proptypes = {
	timerRunning: PropTypes.bool.isRequired,
	onStopClick: PropTypes.func.isRequired,
	onStartClick: PropTypes.func.isRequired
}

export default TimerButton;	