import React, { Component } from 'react';

import EditableExerciseList from './EditableExerciseList';
import ToggleExerciseForm from './ToggleExerciseForm';
import Timer from './Timer';
import { uid } from '../utils/GlobalUtils';
import { printDate, printTime } from '../utils/TimerUtils';
import { getWorkout, getExercises, getTimer, toggleTimer, editExercise, createExercise, deleteExercise } from '../utils/ApiUtils';

class WorkoutDashboard extends Component { 

	constructor(props) {
  	super(props);

  	this.state = {
  		workout: {},
      exercises: [], 
  		timer: {}
  	};

  	this.handleCreateForm = this.handleCreateForm.bind(this);
  	this.handleEditForm = this.handleEditForm.bind(this);
  	this.handleDelete = this.handleDelete.bind(this);
  	this.handleStartClick = this.handleStartClick.bind(this);
  	this.handleStopClick = this.handleStopClick.bind(this);
    this.handleRestartClick = this.handleRestartClick.bind(this);
  	this.hydrateWorkoutState = this.hydrateWorkoutState.bind(this);
  	this.hydrateTimerState = this.hydrateTimerState.bind(this);

	}

	componentDidMount(){
		
		this.hydrateWorkoutState();
		this.hydrateTimerState();

		setInterval(this.hydrateWorkoutState, 5000);
		setInterval(this.hydrateTimerState, 5000);

	}

	handleCreateForm(id, exercise){

		this.createExercise(id, exercise);

	}

	handleEditForm(id, exercise){

		this.editExercise(id, exercise);

	}

	handleDelete(exerciseId){

		this.deleteExercise(exerciseId);

	}

	hydrateWorkoutState(){

		getWorkout(this.props.id, (data) => (
				this.setState({workout: data})
			)  
		);

	    getExercises(this.props.id, (data) => (
	        this.setState({exercises: data})
	      )  
	    );

	}

	hydrateTimerState(){

		getTimer((data) => (
				this.setState({timer: data})
			)
		);

	}

	createExercise(id, exercise){

		const e = Object.assign(exercise, { id: uid(), workoutId: this.props.id, sets: [] });

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

	handleStartClick(){

		const now = Date.now();

		this.setState({
			timer: Object.assign({}, this.state.timer, { runningSince: now })
		});

		toggleTimer({elapsed: this.state.timer.elapsed, runningSince: now});


	}

	handleStopClick(){

		const now = Date.now();
		const lastElapsed = now - this.state.timer.runningSince;
		this.setState({ 
			timer: Object.assign({}, this.state.timer, { elapsed: this.state.timer.elapsed + lastElapsed, runningSince: null })
		});

    toggleTimer({elapsed: this.state.timer.elapsed + lastElapsed, runningSince: null});
		
	}

  handleRestartClick(){

    this.setState({ timer: { elapsed: 0, runningSince: null } });

    toggleTimer({elapsed: 0, runningSince: null});

  }

	render(){

		return (
			<div>

        <h2>{this.state.workout.title}</h2>
        <h3>{printDate(this.state.workout.date)} at {printTime(this.state.workout.date)}</h3>
				<EditableExerciseList exercises={this.state.exercises} onFormSubmit={this.handleEditForm} onDeleteClick={this.handleDelete} onSetChange={this.handleEditForm} />
      	<ToggleExerciseForm onFormSubmit={this.handleCreateForm} />
      	<Timer elapsed={this.state.timer.elapsed} runningSince={this.state.timer.runningSince} onStartClick={this.handleStartClick} onStopClick={this.handleStopClick} onRestartClick={this.handleRestartClick} />

			</div>
		)

	}

}

export default WorkoutDashboard;