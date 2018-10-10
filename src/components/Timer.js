import React, { Component } from 'react';
import TimerSlim from '../components/TimerSlim';
import TimerFull from '../components/TimerFull';
import { getTimer, toggleTimer } from '../utils/ApiUtils';

class TimerContainer extends Component {

	constructor(props){

		super(props);

		this.handleStartClick = this.handleStartClick.bind(this);
	    this.handleStopClick = this.handleStopClick.bind(this);
	    this.handleRestartClick = this.handleRestartClick.bind(this);
	    this.hydrateTimerState = this.hydrateTimerState.bind(this);
		this.handleToggleFullscreen = this.handleToggleFullscreen.bind(this);

	}

	componentDidMount(){

		this.hydrateTimerState();

		this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 1000);

	}

	componentWillUnmount(){

		clearInterval(this.forceUpdateInterval);

	}

	handleStartClick(){

		const {
			setTimer,
			elapsed
		} = this.props;

		const timer = {elapsed: elapsed, runningSince: Date.now()}

		setTimer(timer);
		toggleTimer(timer);

	}

	handleStopClick(){

		const {
			setTimer,
			elapsed,
			runningSince
		} = this.props;

		const lastElapsed = Date.now() - runningSince;
		const timer = { elapsed: elapsed + lastElapsed, runningSince: null };

		setTimer(timer);
		toggleTimer(timer);

	}

	handleRestartClick(){

		const timer = { elapsed: 0, runningSince: null }

		this.props.setTimer(timer);
		toggleTimer(timer);

	}

	handleToggleFullscreen(){

		this.props.toggleFullscreen();

	}

	hydrateTimerState(){

		getTimer()
		.then(data => this.props.setTimer(data))
		.catch(err => console.log(err));

	}

	render(){

		const {
			timerOpen,
			timerFullscreen,
			runningSince,
			elapsed
		} = this.props;

		let Component = TimerSlim;

		if(timerFullscreen){
			Component = TimerFull;
		}

		return (

			<Component
				elapsed={elapsed}
				runningSince={runningSince}
				onStartClick={this.handleStartClick}
				onStopClick={this.handleStopClick}
				onRestartClick={this.handleRestartClick}
				onToggleFullscreen={this.handleToggleFullscreen}
				isOpen={timerOpen}
			/>

		)

	}

}

export default TimerContainer;
