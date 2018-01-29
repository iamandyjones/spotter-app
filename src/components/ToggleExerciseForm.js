import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExerciseForm from './ExerciseForm';
import Dialog from './Dialog';
import ButtonFab from './ButtonFab';

class ToggleExerciseForm extends Component {

	constructor(props){

		super(props);
		this.state = { isOpen: false }

		this.handleFormOpen = this.handleFormOpen.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleFormCancel = this.handleFormCancel.bind(this);

	}

	handleFormOpen(){

		this.setState({ isOpen: true });

	}

	handleFormCancel(){

		this.setState({ isOpen: false });

	}

	handleFormSubmit(id, exercise){

		this.props.onFormSubmit(id, exercise);
		this.setState({ isOpen: false });		

	}

	render(){

		return (

			<React.Fragment>

				{this.state.isOpen && (

					<Dialog onDialogClose={this.handleFormCancel} title="Add New Exercise">
						
						<ExerciseForm onFormSubmit={this.handleFormSubmit} onFormCancel={this.handleFormCancel}  />

					</Dialog>

					)
				}

				<ButtonFab absolute ripple label="add" onClick={this.handleFormOpen} />

			</React.Fragment>

		)

	}

}

ToggleExerciseForm.propTypes = {
	onFormSubmit: PropTypes.func.isRequired
}

export default ToggleExerciseForm;