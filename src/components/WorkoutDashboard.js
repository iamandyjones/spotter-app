import React, { Component } from 'react';

import EditableExerciseList from './EditableExerciseList';
import ToggleExerciseForm from './ToggleExerciseForm';
import Timer from './Timer';
import { uid } from '../utils/ExerciseUtils';

class WorkoutDashboard extends Component { 

	constructor(props) {
    	super(props);

    	this.state = {
    		exercises: [
    			{ title: "Bench Press", workout: "Chest and Back", id: uid() },
    			{ title: "Lat Pull Down", workout: "Chest and Back", id: uid() }
    		], 
    		timer: { elapsed: 0, runningSince: null}
    	};

    	this.handleCreateForm = this.handleCreateForm.bind(this);
    	this.handleEditForm = this.handleEditForm.bind(this);
    	this.handleDelete = this.handleDelete.bind(this);
    	this.handleStartClick = this.handleStartClick.bind(this);
    	this.handleStopClick = this.handleStopClick.bind(this);
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

  	createExercise(exercise){

  		const e = Object.assign(exercise, { id: uid() });

  		// Here we need to create the new timer but with a unique id

  		this.setState({ exercises: this.state.exercises.concat(e) });

  	}

  	deleteExercise(exerciseId){

  		this.setState({
  			exercises: this.state.exercises.filter(e => e.id!==exerciseId),
  		});

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

  	}

  	handleStartClick(){

		const now = Date.now();

		this.setState({ 
			timer: Object.assign({}, this.state.timer, { runningSince: now })
		});

	}

	handleStopClick(){

		const now = Date.now();
		const lastElapsed = now - this.state.timer.runningSince;
		this.setState({ 
			timer: Object.assign({}, this.state.timer, { elapsed: this.state.timer.elapsed + lastElapsed, runningSince: null })
		});
		
	}

	render(){

		return (
			<div>

				<EditableExerciseList exercises={this.state.exercises} onFormSubmit={this.handleEditForm} onDeleteClick={this.handleDelete} />
	        	<ToggleExerciseForm onFormSubmit={this.handleCreateForm} />
	        	<Timer elapsed={this.state.timer.elapsed} runningSince={this.state.timer.runningSince} onStartClick={this.handleStartClick} onStopClick={this.handleStopClick} />

			</div>
		)

	}

}

export default WorkoutDashboard;