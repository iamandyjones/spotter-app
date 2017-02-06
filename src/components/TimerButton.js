import React, { Component } from 'react';


class TimerButton extends Component {

	render(){

		if(this.props.timerRunning){

			return (
				<div>
					<button onClick={this.props.onStopClick}>Stop Timer</button>
				</div>
			)

		} else {

			return (
				<div>
					<button onClick={this.props.onStartClick}>Start Timer</button>
				</div>
			)

		}

	}

}

export default TimerButton;	