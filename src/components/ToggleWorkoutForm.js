import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import WorkoutForm from './WorkoutForm.js';
import ButtonFab from './ButtonFab';

class ToggleWorkoutForm extends Component {

	constructor(props){

		super(props);

		this.state = { isOpen: false }

		this.handleNewWorkout = this.handleNewWorkout.bind(this);
		this.handleFormCancel = this.handleFormCancel.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);

	}

	handleNewWorkout(){

		this.setState({ isOpen: true });

	}

	handleFormCancel(){

		this.setState({ isOpen: false });

	}

	handleFormSubmit(id, workout){

		this.props.onFormSubmit(id, workout);
		this.handleFormCancel();

	}

	render(){

		return (

			<Fragment>

				{this.state.isOpen && <WorkoutForm onFormSubmit={this.handleFormSubmit} onFormCancel={this.handleFormCancel} />}

				<ButtonFab onClick={this.handleNewWorkout} label="add" ripple absolute />

			</Fragment>

		)

	}

}

ToggleWorkoutForm.propTypes = {
	onFormSubmit: PropTypes.func.isRequired
}

export default ToggleWorkoutForm;