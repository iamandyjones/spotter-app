import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import TextField from './TextField';

class WorkoutForm extends Component {

	constructor(props){
		
		super(props);

		this.state = { title: this.props.title || ''};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);

	}

	handleSubmit(){

		this.props.onFormSubmit(this.props.id, { title: this.state.title });

	}

	handleTitleChange(e){

		this.setState({title: e.target.value});

	}

	render(){

		const submitText = this.props.id ? 'Edit' : 'Create';
		const titleText = this.props.id ? 'Edit' : 'New';

		return (

			<Dialog onCancel={this.props.onFormCancel} onSubmit={this.handleSubmit} title={titleText + " Workout"} labelCancel="Cancel" labelSubmit={submitText}>

				<TextField label="What are you training today?" value={this.state.title} onValueChange={this.handleTitleChange} />

		    </Dialog>

		)

	}

}

WorkoutForm.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	onFormSubmit: PropTypes.func.isRequired,
	onFormCancel: PropTypes.func.isRequired
}

export default WorkoutForm;