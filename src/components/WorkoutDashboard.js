import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import EditableExerciseList from './EditableExerciseList';
import ToggleExerciseForm from './ToggleExerciseForm';
import WorkoutForm from './WorkoutForm.js';
import Grid from './Grid';
import GridCell from './GridCell';
import LayoutEmpty from './LayoutEmpty';
import Toolbar from './Toolbar';
import ToolbarTitle from './ToolbarTitle';
import Menu from './Menu';
import Dialog from './Dialog';
import { uid } from '../utils/GlobalUtils';
import { printDate, printTime } from '../utils/TimerUtils';
import { getWorkout, deleteWorkout, editWorkout, getExercises, editExercise, createExercise, deleteExercise } from '../utils/ApiUtils';

class WorkoutDashboard extends Component { 

	constructor(props) {
  	super(props);

  	this.state = {
  		workout: {},
      	exercises: [],
      	fetched: false,
      	requestDelete: false,
      	confirmDelete: false,
      	editWorkout: false
  	};

  	this.handleCreateForm = this.handleCreateForm.bind(this);
  	this.handleEditForm = this.handleEditForm.bind(this);
  	this.handleWorkoutDeleteRequest = this.handleWorkoutDeleteRequest.bind(this);
  	this.handleWorkoutDeleteConfirm = this.handleWorkoutDeleteConfirm.bind(this);
  	this.handleDialogCancel = this.handleDialogCancel.bind(this);
  	this.handleExerciseDelete = this.handleExerciseDelete.bind(this);
  	this.hydrateWorkoutState = this.hydrateWorkoutState.bind(this);
  	this.handleMenuActions = this.handleMenuActions.bind(this);
  	this.handleWorkoutEdit = this.handleWorkoutEdit.bind(this);
  	this.handleWorkoutEditCancel = this.handleWorkoutEditCancel.bind(this);
  	this.handleWorkoutEditSubmit = this.handleWorkoutEditSubmit.bind(this);

	}

	componentDidMount(){
		
		this.hydrateWorkoutState();
		
		this.hydrateWorkoutInterval = setInterval(this.hydrateWorkoutState, 5000);

	}

	componentWillUnmount(){

		clearInterval(this.hydrateWorkoutInterval);

	}

	handleCreateForm(id, exercise){

		this.createExercise(id, exercise);

	}

	handleEditForm(id, exercise){

		this.editExercise(id, exercise);

	}

	handleWorkoutDeleteRequest(){
		
		this.setState({requestDelete: true});
		//deleteWorkout(this.props.workoutId);

	}

	handleWorkoutDeleteConfirm(){

		deleteWorkout(this.props.workoutId);
		this.props.onNotify("Workout deleted");
		this.setState({requestDelete: false, confirmDelete: true});

	}

	handleExerciseDelete(exerciseId){

		this.deleteExercise(exerciseId);

	}

	handleWorkoutEdit(){

		this.setState({editWorkout: true})

	}

	handleWorkoutEditCancel(){

		this.setState({editWorkout: false});

	}

	handleWorkoutEditSubmit(id, attrs){

		this.setState((prevState) => {
			const w = Object.assign({}, prevState.workout, attrs);
			return { workout: w }
		});

		editWorkout(id, attrs);

		this.handleWorkoutEditCancel();

	}

	hydrateWorkoutState(){

		getWorkout(this.props.workoutId, (data) => (
				this.setState({workout: data})
			)  
		);

	    getExercises(this.props.workoutId, (data) => (
	        this.setState({exercises: data, fetched: true})
	      )  
	    );

	}

	createExercise(id, exercise){

		const e = Object.assign(exercise, { id: uid(), workoutId: this.props.workoutId, sets: [] });

		this.setState({ exercises: this.state.exercises.concat(e) });

    	createExercise(e);

	}

	deleteExercise(exerciseId){

		this.setState({
			exercises: this.state.exercises.filter(e => e.id!==exerciseId),
		});

    	deleteExercise(exerciseId);

	}

	editExercise(id, attrs){

		this.setState({ 
			exercises: this.state.exercises.map((exercise) => {
				if(exercise.id === id){
					return Object.assign({}, exercise, attrs );
				} else {
					return exercise;
				}
			}),
		});

    	editExercise(id, attrs);

	}

  handleMenuActions(action){

  	switch(action){
  		
  		case 'deleteWorkout':
  		this.handleWorkoutDeleteRequest();
  		break;

  		case 'editWorkout':
  		this.handleWorkoutEdit();
  		break;

  		default:

  	}

  }

  handleDialogCancel(){

  	this.setState({requestDelete: false});

  }

	render(){

		const menuItems = [
			{ label: "Edit Workout", action: "editWorkout" },
			{ label: "Delete Workout", action: "deleteWorkout" }
		]

		return (

			<Fragment>

				{this.state.requestDelete && (

					<Dialog onCancel={this.handleDialogCancel} onSubmit={this.handleWorkoutDeleteConfirm} title="Delete workout?" labelSubmit="Delete">
							Are you sure you want to permanently delete this workout? Once it's gone. it's gone...
					</Dialog>

					)
				}

				{this.state.confirmDelete && <Redirect to="/workouts" />}

				{this.state.editWorkout && <WorkoutForm id={this.state.workout.id} title={this.state.workout.title} onFormSubmit={this.handleWorkoutEditSubmit} onFormClose={this.handleWorkoutEditCancel} />}

				<Toolbar onMenuClick={this.props.onMenuClick}>

		            <ToolbarTitle title={this.state.workout.title} link={this.props.link} />

					<section className="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">

						<Menu items={menuItems} actionHandler={this.handleMenuActions} iconClass="mdc-toolbar__icon" />

					</section>

		        </Toolbar>
				
				<LayoutEmpty>

					<Grid>

						<GridCell>
							<h3 className="mdc-typography--subheading1 mdc-theme--text-hint-on-background collapsed">{printDate(this.state.workout.date)} at {printTime(this.state.workout.date)}</h3>
							{(this.state.fetched && !this.state.exercises.length) && 
								<div>Ready to get started?</div>
							}
						</GridCell>

						{!this.state.fetched ? <p>Loading...</p> :
							<EditableExerciseList exercises={this.state.exercises} onFormSubmit={this.handleEditForm} onDeleteClick={this.handleExerciseDelete} onSetChange={this.handleEditForm} />
						}

					</Grid>

					<ToggleExerciseForm onFormSubmit={this.handleCreateForm} />

				</LayoutEmpty>

			</Fragment>

		)

	}

}

export default WorkoutDashboard;