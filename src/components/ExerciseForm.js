import React, { Component } from 'react';

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

			<div>
				<label>Title</label>
				<input type="text" value={this.state.title} onChange={this.handleTitleChange} />

				<label>Workout</label>
				<input type="text" value={this.state.workout} onChange={this.handleWorkoutChange} />

				<button onClick={this.handleSubmit}>{submitText}</button>
				<button onClick={this.props.onFormCancel}>Cancel</button>

			</div>

		);

	}

}

export default ExerciseForm;