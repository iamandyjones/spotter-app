import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderTimerString } from '../utils/TimerUtils';
import Icon from './Icon';
import BottomSheet from './BottomSheet';
import Toolbar from './Toolbar';
import ButtonFab from './ButtonFab';
import './Timer.css';

class TimerFull extends Component {

	componentDidMount(){

		this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 1000);

	}

	componentWillUnmount(){

		clearInterval(this.forceUpdateInterval);

	}

	render(){

		const {
			elapsed,
			runningSince,
			onRestartClick,
			onToggleFullscreen,
			onStopClick,
			onStartClick
		} = this.props;

		const elapsedString = renderTimerString(elapsed, runningSince);

		return (

			<BottomSheet isOpen fullscreen>

				<div className="timer timer--fullscreen">

					<Toolbar menuIcon="clear" onMenuIconClick={onToggleFullscreen} secondaryTheme>

						<Icon onClick={onRestartClick} action="replay" label="Restart" />

					</Toolbar>

					<span className="timer__string">{elapsedString}</span>

					{!!runningSince ? (

						<ButtonFab onClick={onStopClick} label="pause" theme="mdc-theme--background mdc-theme--secondary" />

					) : (

						<ButtonFab onClick={onStartClick} label="play_arrow" theme="mdc-theme--background mdc-theme--secondary" />

					)}

				</div>

			</BottomSheet>

		)

	}

}

TimerFull.propTypes = {
	elapsed: PropTypes.number,
	runningSince: PropTypes.number,
	onStartClick: PropTypes.func.isRequired,
	onStopClick: PropTypes.func.isRequired,
	onRestartClick: PropTypes.func.isRequired,
	onToggleFullscreen: PropTypes.func.isRequired
}

export default TimerFull;
