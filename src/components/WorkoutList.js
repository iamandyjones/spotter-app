import React, { Component } from 'react';
import { getWorkouts, createWorkout } from '../utils/ApiUtils';
import { uid } from '../utils/GlobalUtils';
import { printDate, printTime } from '../utils/TimerUtils';
import ButtonFab from './ButtonFab';

class WorkoutList extends Component {

	constructor(props){

		super(props);

		this.state = { workouts: [] }

		this.handleNewWorkout = this.handleNewWorkout.bind(this);

	}

	componentDidMount(){

		getWorkouts((data) => this.setState({workouts: data}));

	}

	handleNewWorkout() {

		const w = { id: uid(), title: 'New Workout', date: Date.now() };

		this.setState({ workouts: this.state.workouts.concat(w) });

    	createWorkout(w);

  	}

	render(){

		const workouts = this.state.workouts.map((workout) => (

			<div key={workout.id}>
				<p>{workout.title}</p>
				<p>{printDate(workout.date)} at {printTime(workout.date)}</p>
			</div>

		));

		return (

			<div>
				<div>{workouts}</div>
				<p onClick={this.handleNewWorkout}>Add New Workout</p>
				<ButtonFab label="add" ripple />
			</div>
		)

	}

}

export default WorkoutList;