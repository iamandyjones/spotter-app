import React, { Component } from 'react';

class ExerciseForm extends Component {

	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(){

		this.props.onFormSubmit({id: this.props.id, title: this.refs.title.value, workout: this.refs.workout.value});

	}

	render(){

		const submitText = this.props.id ? 'Edit' : 'Create';

		return (

			<div>
				<label>Title</label>
				<input type="text" defaultValue={this.props.title} ref="title" />

				<label>Workout</label>
				<input type="text" defaultValue={this.props.workout} ref="workout" />

				<button onClick={this.handleSubmit}>{submitText}</button>
				<button onClick={this.props.onFormCancel}>Cancel</button>

			</div>

		);

	}

}

export default ExerciseForm;