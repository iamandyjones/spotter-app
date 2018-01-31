import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';

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
	}

	handleSubmit(){

		this.props.onFormSubmit(this.props.id, { title: this.state.title, workout: this.state.workout });

	}

	handleTitleChange(e){

		this.setState({title: e.target.value});

	}

	handleWorkoutChange(e){

		this.setState({workout: e.target.value});

	}

	render(){

		const submitText = this.props.id ? 'Edit' : 'Create';

		return (

			<Dialog onCancel={this.props.onFormCancel} onSubmit={this.handleSubmit} title={submitText + " Exercise"} labelCancel="Cancel" labelSubmit={submitText}>

				<label>Title</label>
				<input type="text" value={this.state.title} onChange={this.handleTitleChange} />

				<label>Workout</label>
				<input type="text" value={this.state.workout} onChange={this.handleWorkoutChange} />

		    </Dialog>

		);

	}

}

ExerciseForm.propTypes = {
	id: PropTypes.string,
	onFormSubmit: PropTypes.func.isRequired,
	onFormCancel: PropTypes.func.isRequired
}

export default ExerciseForm;