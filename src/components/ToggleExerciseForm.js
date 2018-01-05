import React, { Component } from 'react';

import ExerciseForm from './ExerciseForm';

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

		if (this.state.isOpen) { 

			return (

				<ExerciseForm onFormSubmit={this.handleFormSubmit} onFormCancel={this.handleFormCancel}  />

			);

		} else {

			return (

				<div>
					<button onClick={this.handleFormOpen}>New</button>
				</div>

			);

		}

	}

}

export default ToggleExerciseForm;