import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import TextField from './TextField';

class ExerciseForm extends Component {

	constructor(props){
		
		super(props);

		this.state = {
			title: this.props.title || '',
			workout: this.props.workout || ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleWorkoutChange = this.handleWorkoutChange.bind(this);
		this.handleCancel = this.handleCancel.bind(this)
	}

	handleSubmit(){

		this.props.onFormSubmit({ title: this.state.title, workout: this.state.workout });
		this.props.onFormClose();

	}

	handleTitleChange(e){

		this.setState({title: e.target.value});

	}

	handleWorkoutChange(e){

		this.setState({workout: e.target.value});

	}

	handleCancel(e){

		e.preventDefault();
		e.stopPropagation();
		this.props.onFormClose();

	}

	render(){

		const titleText = this.props.id ? 'Edit' : 'New';
		const submitText = this.props.id ? 'Edit' : 'Create';

		return (

			<Dialog 
				fullscreen 
				onCancel={this.handleCancel} 
				onSubmit={this.handleSubmit} 
				title={titleText + " Exercise"} 
				labelCancel="Cancel" 
				labelSubmit={submitText}>

				<TextField label="Title" value={this.state.title} onValueChange={this.handleTitleChange} />
				<TextField label="Workout" value={this.state.workout} onValueChange={this.handleWorkoutChange} />

		    </Dialog>

		);

	}

}

ExerciseForm.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	onFormSubmit: PropTypes.func.isRequired,
	onFormClose: PropTypes.func.isRequired
}

export default ExerciseForm;