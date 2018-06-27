import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import TextField from './TextField';

class ExerciseForm extends Component {

	constructor(props){

		super(props);

		this.state = {
			fields: {
				title: this.props.title || '',
				notes: this.props.notes || ''
			},
			errors: {},
			exercises: [
				"Bench Press",
				"Squats",
				"Pull Ups",
				"Lunges"
			]
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleCancel = this.handleCancel.bind(this)
	}

	handleSubmit(){

		const errors = this.validate(this.state.fields);
		this.setState({errors});

		if(Object.keys(errors).length) return;

		this.props.onFormSubmit(this.state.fields);
		this.props.onFormClose();

	}

	handleInputChange(e){

		this.setState({
			fields: {
				...this.state.fields,
				[e.target.name]: e.target.value
			}
		});

	}

	handleCancel(e){

		e.preventDefault();
		e.stopPropagation();
		this.props.onFormClose();

	}

	validate(fields){

		const errors = {};
		if(!fields.title) errors.title = 'Please add a title';
		return errors;

	}

	render(){

		const id = this.props.id;
		const titleText = id ? 'Edit' : 'New';
		const submitText = id ? 'Edit' : 'Create';

		return (

			<Dialog
				fullscreen
				onCancel={this.handleCancel}
				onSubmit={this.handleSubmit}
				title={titleText + " Exercise"}
				labelCancel="Cancel"
				labelSubmit={submitText}>

				<TextField
					label="Title"
					id="title"
					datalist={this.state.exercises}
					value={this.state.fields.title}
					error={this.state.errors.title}
					onValueChange={this.handleInputChange}
					required
				/>

				<TextField
					label="Notes"
					id="notes"
					value={this.state.fields.notes}
					onValueChange={this.handleInputChange}
				/>

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
