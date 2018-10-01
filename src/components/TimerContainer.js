import React, { Component } from 'react';
import Timer from '../components/Timer';
import { getTimer, toggleTimer } from '../utils/ApiUtils';

class TimerContainer extends Component {

	constructor(props){

		super(props);

		this.state = { runningSince: null, elapsed: null }

		this.handleStartClick = this.handleStartClick.bind(this);
	    this.handleStopClick = this.handleStopClick.bind(this);
	    this.handleRestartClick = this.handleRestartClick.bind(this);
	    this.hydrateTimerState = this.hydrateTimerState.bind(this);
		this.handleToggleFullscreen = this.handleToggleFullscreen.bind(this);

	}

	componentDidMount(){

		this.hydrateTimerState();

		this.hydrateTimerInterval = setInterval(this.hydrateTimerState, 5000);

	}

	componentWillUnmount(){

		clearInterval(this.hydrateTimerInterval);

	}

	handleStartClick(){

		const now = Date.now();

		this.setState({ runningSince: now });

		toggleTimer({elapsed: this.state.elapsed, runningSince: now});

	}

	handleStopClick(){

		const now = Date.now();
		const lastElapsed = now - this.state.runningSince;

		this.setState({ elapsed: this.state.elapsed + lastElapsed, runningSince: null });

		toggleTimer({ elapsed: this.state.elapsed + lastElapsed, runningSince: null });

	}

	handleRestartClick(){

		this.setState({ elapsed: 0, runningSince: null });

		toggleTimer({ elapsed: 0, runningSince: null });

	}

	handleToggleFullscreen(){

		this.props.toggleFullscreen();

	}

	hydrateTimerState(){

		getTimer()
		.then(data => this.setState(data))
		.catch(err => console.log(err));

	}

	render(){

		const {
			timerOpen,
			timerFullscreen
		} = this.props;

		return (

			<Timer
				elapsed={this.state.elapsed}
				runningSince={this.state.runningSince}
				onStartClick={this.handleStartClick}
				onStopClick={this.handleStopClick}
				onRestartClick={this.handleRestartClick}
				onToggleFullscreen={this.handleToggleFullscreen}
				fullscreen={timerFullscreen}
				isOpen={timerOpen}
			/>

		)
	}

}

export default TimerContainer;
