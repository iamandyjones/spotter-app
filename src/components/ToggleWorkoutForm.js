import React, { Component, Fragment } from 'react';
import WorkoutFormContainer from '../containers/WorkoutFormContainer.js';
import ButtonFab from './ButtonFab';

class ToggleWorkoutForm extends Component {

	constructor(props){

		super(props);

		this.state = { isOpen: false }

	}

	handleNewWorkout = () => {

		this.setState({ isOpen: true });

	}

	handleFormClose = () => {

		this.setState({ isOpen: false });

	}

	render(){

		return (

			<Fragment>

				{this.state.isOpen && 
					<WorkoutFormContainer
						onFormClose={this.handleFormClose} 
					/>
				}

				<ButtonFab 
					onClick={this.handleNewWorkout} 
					label="add" 
					ripple 
					absolute 
				/>

			</Fragment>

		)

	}

}

export default ToggleWorkoutForm;