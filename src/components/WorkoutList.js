import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getWorkouts, createWorkout } from '../utils/ApiUtils';
import { uid } from '../utils/GlobalUtils';
import { printDate, printTime } from '../utils/TimerUtils';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';
import ButtonFab from './ButtonFab';
import '@material/list/dist/mdc.list.css';

class WorkoutList extends Component {

	constructor(props){

		super(props);

		this.state = { workouts: [], fetched: false }

		this.handleNewWorkout = this.handleNewWorkout.bind(this);

	}

	componentDidMount(){

		getWorkouts((data) => {
			this.setState({workouts: data, fetched: true});
			this.applyRipples();
		});

	}

	applyRipples(){

		const listItems = [].slice.call(this.list.querySelectorAll('.mdc-list-item'));

		listItems.forEach(item => MDCRipple.attachTo(item));

	}

	handleNewWorkout() {

		const w = { id: uid(), title: 'New Workout', date: Date.now() };

		this.setState({ workouts: this.state.workouts.concat(w) });

    	createWorkout(w);

  	}

	render(){

		const workouts = this.state.workouts.map((w) => (

			<Link to={`${this.props.path}/${w.id}`} key={w.id} className="mdc-list-item">
				
				<span className="mdc-list-item__graphic" role="presentation">
					<i className="material-icons" aria-hidden="true">fitness_center</i>
                  </span>
				<span className="mdc-list-item__text">
					{w.title}
					<span className="mdc-list-item__secondary-text">{printDate(w.date)} at {printTime(w.date)}</span>
				</span>

			</Link>

		));

		return (

			<React.Fragment>
				{!this.state.fetched ? <p>Loading...</p> :
					<div className="mdc-list mdc-list--two-line mdc-list--avatar-list list-divided" ref={(el) => this.list = el}>
					{workouts}
					</div>
				}
				<ButtonFab onClick={this.handleNewWorkout} label="add" ripple absolute />
			</React.Fragment>
		)

	}

}

export default WorkoutList;