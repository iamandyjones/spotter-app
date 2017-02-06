import React, { Component } from 'react';
import { renderTimerString } from '../utils/TimerUtils';

import TimerButton from './TimerButton';

class Timer extends Component {

	constructor(props){
		super(props);

		this.forceUpdateInterval = this.forceUpdateInterval.bind(this);

	}

	componentDidMount(){

		this.forceUpdateInterval();
		
	}

	forceUpdateInterval(){
		
		return setInterval(function(){
			this.forceUpdate();
		}.bind(this), 50);
	}

	componentWillUnmount(){

		// Not sure this is working.....
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