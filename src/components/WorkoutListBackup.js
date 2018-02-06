import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getWorkouts, createWorkout } from '../utils/ApiUtils';
import { uid } from '../utils/GlobalUtils';
import { printDate, printTime } from '../utils/TimerUtils';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';
import ToggleWorkoutForm from './ToggleWorkoutForm';
import Menu from './Menu';
import '@material/list/dist/mdc.list.css';

class WorkoutList extends Component {

	constructor(props){

		super(props);

		this.state = { workouts: [], fetched: false, redirectToWorkout: null }

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

	handleNewWorkout(id, workout) {

		const w = Object.assign( {}, { id: uid(), date: Date.now() }, workout);

    	createWorkout(w, () => {
    		this.setState({ workouts: this.state.workouts.concat(w), redirectToWorkout: w.id });
    	});

    	// The timeout could potentially be automatically fired from the original dispatch action creator...
		// Need to first make dispatch available within action creator in correct way

		/*
		store.dispatch(showNotification(`${workout.title} workout added`));

		setTimeout(() => {

			store.dispatch(hideNotification());

		}, 3000);
*/

  	}

	render(){

		const workouts = this.state.workouts.map((w) => {

			const menuItems = [
				{ label: "Delete Workout", action: "deleteWorkout" },
				{ label: "Clone Workout", action: "cloneWorkout" }
			]

			return (

				<Link to={`${this.props.path}/${w.id}`} key={w.id} className="mdc-list-item">
					
					<span className="mdc-list-item__graphic" role="presentation">
						<i className="material-icons" aria-hidden="true">fitness_center</i>
	              	</span>
					<span className="mdc-list-item__text">
						{w.title}
						<span className="mdc-list-item__secondary-text">{printDate(w.date)} at {printTime(w.date)}</span>
					</span>

					<Menu items={menuItems} actionHandler={this.handleMenuActions} iconClass="mdc-list-item__meta" />

				</Link>

			)

		});

		return (

			<Fragment>

				{this.state.redirectToWorkout && <Redirect push to={`/workouts/${this.state.redirectToWorkout}`} />}

				{!this.state.fetched ? <p>Loading...</p> :
					<div className="mdc-list mdc-list--two-line list-divided" ref={(el) => this.list = el}>
					{workouts}
					</div>
				}

				<ToggleWorkoutForm onFormSubmit={this.handleNewWorkout} />

			</Fragment>
		)

	}

}

export default WorkoutList;