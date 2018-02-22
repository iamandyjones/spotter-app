import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Dialog from './Dialog';
import TextField from './TextField';

class WorkoutForm extends Component {

	constructor(props){
		
		super(props);

		this.state = { title: this.props.title || '', redirectToWorkout: null };

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleWorkoutEdit = this.handleWorkoutEdit.bind(this);

	}

	handleSubmit(){

		this.props.onFormSubmit({ title: this.state.title })
		.then(id => this.setState({ redirectToWorkout: id }, this.handleWorkoutEdit));

	}

	handleTitleChange(e){

		this.setState({title: e.target.value});

	}

	handleWorkoutEdit(){

		this.props.onNotify(`${this.state.title} workout ${this.props.id ? 'updated' : 'added'}`);
		this.props.onFormClose();

	}

	render(){

		const submitText = this.props.id ? 'Edit' : 'Create';
		const titleText = this.props.id ? 'Edit' : 'New';

		return (

			<Fragment>

				<Dialog 
					onCancel={this.props.onFormClose} 
					onSubmit={this.handleSubmit} 
					title={titleText + " Workout"} 
					labelCancel="Cancel" 
					labelSubmit={submitText}>

					<TextField 
						label="What are you training today?" 
						value={this.state.title} 
						onValueChange={this.handleTitleChange} />

			    </Dialog>

			    {this.state.redirectToWorkout && <Redirect push to={`/workouts/${this.state.redirectToWorkout}`} />}

		    </Fragment>

		)

	}

}

WorkoutForm.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	onFormSubmit: PropTypes.func.isRequired,
	onFormClose: PropTypes.func.isRequired,
	onNotify: PropTypes.func.isRequired
}

export default WorkoutForm;