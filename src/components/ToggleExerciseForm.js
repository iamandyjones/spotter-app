import React, { Component, Fragment } from 'react';
import ExerciseFormContainer from '../containers/ExerciseFormContainer';
import ButtonFab from './ButtonFab';

class ToggleExerciseForm extends Component {

	constructor(props){

		super(props);
		this.state = { isOpen: false }

	}

	handleFormOpen = () => {

		this.setState({ isOpen: true });

	}

	handleFormClose = () => {

		this.setState({ isOpen: false });

	}

	render(){

		return (

			<Fragment>

				{this.state.isOpen && (
						
						<ExerciseFormContainer 
							onFormClose={this.handleFormClose}	
							workoutId={this.props.workoutId}
						/>

					)
				}

				<ButtonFab
					onClick={this.handleFormOpen}
					absolute 
					ripple 
					label="add"
				/>

			</Fragment>

		)

	}

}

export default ToggleExerciseForm;