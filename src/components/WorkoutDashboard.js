import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import EditableExerciseList from './EditableExerciseList';
import ToggleForm from './ToggleForm';
import WorkoutFormContainer from '../containers/WorkoutFormContainer.js';
import ExerciseFormContainer from '../containers/ExerciseFormContainer';
import Grid from './Grid';
import GridCell from './GridCell';
import Dialog from './Dialog';
import { printDate, printTime } from '../utils/TimerUtils';

class WorkoutDashboard extends Component {

	constructor(){

		super();

		this.state = { isDeleted: false }

		this.handleWorkoutDelete = this.handleWorkoutDelete.bind(this);
		this.handleDialogCancel = this.handleDialogCancel.bind(this);

	}

	componentDidMount(){

		const { fetchWorkout, fetchExercises, match: { params: { id } } } = this.props;

		fetchWorkout(id);
		fetchExercises(id);

	}

	handleWorkoutDelete(){

		const { id, deleteWorkout, onNotify } = this.props;

		deleteWorkout(id)
		.then(() => {
			this.setState({ isDeleted: true });
		});

		onNotify("Workout deleted");

	}

	handleDialogCancel(){

		this.props.history.replace(this.props.match.url);

	}

	render(){

		const { isFetching, items, onDeleteClick, onSetChange, date, id, title, match: { url } } = this.props;

		if(this.state.isDeleted){
			return <Redirect to="/workouts" />
		}

		return (

			<Fragment>

				<Grid>

					<GridCell>

						<h3 className="mdc-typography--subheading1 collapsed">
							{printDate(date)} at {printTime(date)}
						</h3>

						{(!isFetching && !items.length) && <div>Ready to get started?</div>}

					</GridCell>

					{isFetching ? <p>Loading...</p> :

						<EditableExerciseList
							items={items}
							onDeleteClick={onDeleteClick}
							onSetChange={onSetChange}
						/>

					}

				</Grid>

				<Route path={`${url}/edit`} render={() => (

					<WorkoutFormContainer
						id={id}
						title={title}
					/>

				)} />

				<Route path={`${url}/delete`} render={() => (

					<Dialog
						onCancel={this.handleDialogCancel}
						onSubmit={this.handleWorkoutDelete}
						title="Delete workout?"
						labelSubmit="Delete">
							Are you sure you want to permanently delete this workout? Once it's gone. it's gone...
					</Dialog>

				)} />

				<ToggleForm
					component={ExerciseFormContainer}
					workoutId={id}
				/>

			</Fragment>

		)

	}

}

WorkoutDashboard.propTypes = {
	date: PropTypes.number,
	deleteWorkout: PropTypes.func.isRequired,
	fetchExercises: PropTypes.func.isRequired,
	fetchWorkout: PropTypes.func.isRequired,
	id: PropTypes.string,
	isFetching: PropTypes.bool.isRequired,
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		sets: PropTypes.array,
		title: PropTypes.string.isRequired,
		workout: PropTypes.string,
		workoutId: PropTypes.string.isRequired
	})).isRequired,
	match: PropTypes.shape({
		url: PropTypes.string.isRequired,
		params: PropTypes.shape({
			id: PropTypes.string.isRequired
		}).isRequired
	}).isRequired,
	onDeleteClick: PropTypes.func.isRequired,
	onNotify: PropTypes.func.isRequired,
	onSetChange: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired
}

export default WorkoutDashboard;
