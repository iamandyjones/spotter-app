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
		this.triggerNotification = this.triggerNotification.bind(this);
		this.handleFormClose = this.handleFormClose.bind(this);

	}

	handleSubmit(){

		this.props.onFormSubmit({ title: this.state.title })
		.then(id => this.setState({ redirectToWorkout: id }, this.triggerNotification));

	}

	handleTitleChange(e){

		this.setState({title: e.target.value});

	}

	triggerNotification(){

		this.props.onNotify(`${this.state.title} workout ${this.props.id ? 'updated' : 'added'}`);

	}

	handleFormClose(){

		if(this.props.id){
			this.setState({ redirectToWorkout: this.props.id });
		} else {
			this.props.onFormClose();
		}	

	}

	render(){

		const { id } = this.props;
		const submitText = id ? 'Edit' : 'Create';
		const titleText = id ? 'Edit' : 'New';

		return (

			<Fragment>

				<Dialog 
					onCancel={this.handleFormClose} 
					onSubmit={this.handleSubmit} 
					title={titleText + " Workout"} 
					labelCancel="Cancel" 
					labelSubmit={submitText}>

					<TextField 
						label="What are you training today?" 
						value={this.state.title} 
						onValueChange={this.handleTitleChange} />

			    </Dialog>

			    {this.state.redirectToWorkout && <Redirect push={id ? false : true} to={`/workouts/${this.state.redirectToWorkout}`} />}

		    </Fragment>

		)	

	}

}

WorkoutForm.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	onFormSubmit: PropTypes.func.isRequired,
	onFormClose: PropTypes.func,
	onNotify: PropTypes.func.isRequired
}

export default WorkoutForm;