import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { renderTimerString } from '../utils/TimerUtils';
import Icon from './Icon';
import IconButton from './IconButton';
import BottomSheet from './BottomSheet';
import Toolbar from './Toolbar';
import ButtonFab from './ButtonFab';
import './Timer.css';

class Timer extends Component {

	componentDidMount(){

		this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);

	}

	componentWillUnmount(){

		clearInterval(this.forceUpdateInterval);

	}

	renderTimer(elapsedString){

		const {
			onRestartClick,
			onToggleFullscreen,
			runningSince,
			onStopClick,
			onStartClick
		} = this.props;

		return (

			<Fragment>

				<div className="timer__expand">

					<IconButton onClick={onToggleFullscreen} label="Expand" action="keyboard_arrow_up" />

				</div>

				<IconButton onClick={onRestartClick} label="Restart" action="replay" />

				<span className="timer__string mdc-typography--display1">{elapsedString}</span>

				{!!runningSince ? (

					<IconButton onClick={onStopClick} label="Pause" action="pause_circle_filled" />

				) : (

					<IconButton onClick={onStartClick} label="Play" action="play_circle_filled" />

				)}

			</Fragment>

		)

	}

	renderFullscreenTimer(elapsedString){

		const {
			onRestartClick,
			onToggleFullscreen,
			runningSince,
			onStopClick,
			onStartClick
		} = this.props;

		return (

			<Fragment>

				<Toolbar menuIcon="clear" onMenuIconClick={onToggleFullscreen} secondaryTheme>

					<Icon onClick={onRestartClick} action="replay" label="Restart" />

				</Toolbar>

				<span className="timer__string">{elapsedString}</span>

				{!!runningSince ? (

					<ButtonFab onClick={onStopClick} label="pause" theme="mdc-theme--background mdc-theme--secondary" />

				) : (

					<ButtonFab onClick={onStartClick} label="play_arrow" theme="mdc-theme--background mdc-theme--secondary" />

				)}

			</Fragment>

		)

	}

	render(){

		const {
			elapsed,
			runningSince,
			fullscreen,
			isOpen
		} = this.props;

		const elapsedString = renderTimerString(elapsed, runningSince);

		return (

			<BottomSheet isOpen={isOpen} fullscreen={fullscreen}>

				<div className={fullscreen ? 'timer timer--fullscreen' : 'timer'}>

					{fullscreen ? (
						this.renderFullscreenTimer(elapsedString)
					) : (
						this.renderTimer(elapsedString)
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
