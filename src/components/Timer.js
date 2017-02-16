import React, { Component } from 'react';
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
		
		const elapsedString = renderTimerString(this.props.elapsed, this.props.runningSince);

		return (

			<div>
				{elapsedString}
				<TimerButton timerRunning={!!this.props.runningSince} onStartClick={this.props.onStartClick} onStopClick={this.props.onStopClick} />
				<button onClick={this.props.onRestartClick}>Restart</button>
			</div>

		)

	}

}

export default Timer;