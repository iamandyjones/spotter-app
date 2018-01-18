import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getWorkouts, createWorkout } from '../utils/ApiUtils';
import { uid } from '../utils/GlobalUtils';
import { printDate, printTime } from '../utils/TimerUtils';
import ButtonFab from './ButtonFab';
import '@material/list/dist/mdc.list.css';



class WorkoutList extends Component {

	constructor(props){

		super(props);

		this.state = { workouts: [], fetched: false }

		this.handleNewWorkout = this.handleNewWorkout.bind(this);

	}

	componentDidMount(){

		getWorkouts((data) => this.setState({workouts: data, fetched: true}));

	}

	handleNewWorkout() {

		const w = { id: uid(), title: 'New Workout', date: Date.now() };

		this.setState({ workouts: this.state.workouts.concat(w) });

    	createWorkout(w);

  	}

	render(){

		const workouts = this.state.workouts.map((workout) => (

			<Link to={`${this.props.workoutPathname}/${workout.id}`} key={workout.id} className="mdc-list-item">
				
				<span className="mdc-list-item__graphic" role="presentation">
					<i className="material-icons" aria-hidden="true">fitness_center</i>
                  </span>
				<span className="mdc-list-item__text">
					{workout.title}
					<span className="mdc-list-item__secondary-text">{printDate(workout.date)} at {printTime(workout.date)}</span>
				</span>

			</Link>

		));

		return (

			<div>
				{!this.state.fetched ? <p>Loading...</p> :
					<div className="mdc-list mdc-list--two-line mdc-list--avatar-list list-divided">
					{workouts}
					</div>
				}
				<ButtonFab onClick={this.handleNewWorkout} label="add" ripple absolute />
			</div>
		)

	}

}

export default WorkoutList;