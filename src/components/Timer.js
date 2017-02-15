import React, { Component } from 'react';
import { renderTimerString } from '../utils/TimerUtils';

import TimerButton from './TimerButton';

class Timer extends Component {

	componentDidMount(){

		this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
		
	}

	forceUpdateInterval(){
		
		return setInterval(function(){
			this.forceUpdate();
		}.bind(this), 50);
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
			</div>

		)

	}

}

export default Timer;