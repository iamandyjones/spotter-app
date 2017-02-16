import React, { Component } from 'react';

import EditableExerciseList from './EditableExerciseList';
import ToggleExerciseForm from './ToggleExerciseForm';
import Timer from './Timer';
import { uid } from '../utils/ExerciseUtils';
import { getExercises, getTimer, toggleTimer, editExercise, createExercise, deleteExercise } from '../utils/ApiUtils';

class WorkoutDashboard extends Component { 

	constructor(props) {
    	super(props);

    	this.state = {
    		exercises: [], 
    		timer: {}
    	};

    	this.handleCreateForm = this.handleCreateForm.bind(this);
    	this.handleEditForm = this.handleEditForm.bind(this);
    	this.handleDelete = this.handleDelete.bind(this);
    	this.handleStartClick = this.handleStartClick.bind(this);
    	this.handleStopClick = this.handleStopClick.bind(this);
      this.handleRestartClick = this.handleRestartClick.bind(this);
    	this.hydrateExerciseState = this.hydrateExerciseState.bind(this);
    	this.hydrateTimerState = this.hydrateTimerState.bind(this);

  	}

  	componentDidMount(){
  		
  		this.hydrateExerciseState();
  		this.hydrateTimerState();

  		setInterval(this.hydrateExerciseState, 5000);
  		setInterval(this.hydrateTimerState, 5000);

  	}

  	handleCreateForm(exercise){

  		this.createExercise(exercise);

  	}

  	handleEditForm(exercise){

  		this.editExercise(exercise);

  	}

  	handleDelete(exerciseId){

  		this.deleteExercise(exerciseId);

  	}

  	hydrateExerciseState(){

  		getExercises((data) => (
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

  	createExercise(exercise){

  		const e = Object.assign(exercise, { id: uid() });

  		this.setState({ exercises: this.state.exercises.concat(e) });

      createExercise(e);

  	}

  	deleteExercise(exerciseId){

  		this.setState({
  			exercises: this.state.exercises.filter(e => e.id!==exerciseId),
  		});

      deleteExercise(exerciseId);

  	}

  	editExercise(attrs){

  		this.setState({ 
  			exercises: this.state.exercises.map((exercise) => {
  				if(exercise.id === attrs.id){
  					return Object.assign({}, exercise, { title: attrs.title, workout: attrs.workout } );
  				} else {
  					return exercise;
  				}
  			}),
  		});

      editExercise(attrs.id, { title: attrs.title, workout: attrs.workout });

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

				<EditableExerciseList exercises={this.state.exercises} onFormSubmit={this.handleEditForm} onDeleteClick={this.handleDelete} />
      	<ToggleExerciseForm onFormSubmit={this.handleCreateForm} />
      	<Timer elapsed={this.state.timer.elapsed} runningSince={this.state.timer.runningSince} onStartClick={this.handleStartClick} onStopClick={this.handleStopClick} onRestartClick={this.handleRestartClick} />

			</div>
		)

	}

}

export default WorkoutDashboard;