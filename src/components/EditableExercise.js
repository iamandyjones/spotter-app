import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridCell from './GridCell';
import ExerciseForm from './ExerciseForm';
import Exercise from './Exercise';

class EditableExercise extends Component {

	constructor(props){
		
		super(props);
		this.state = { editFormOpen: false };

		this.handleEdit = this.handleEdit.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleFormCancel = this.handleFormCancel.bind(this);

	}

	openForm(){

		this.setState({ editFormOpen: true });

	}

	closeForm(){

		this.setState({ editFormOpen: false });

	}

	handleEdit(){

		this.openForm();

	}

	handleFormSubmit(id, exercise){

		this.props.onFormSubmit(id, exercise);
		this.closeForm();

	}

	handleFormCancel(){

		this.closeForm();

	}

	render(){

		const { id, title, workout, sets, onDeleteClick, onSetChange } = this.props;

		return (

			<GridCell>

				{this.state.editFormOpen && (
					
					<ExerciseForm id={id} title={title} workout={workout} onFormSubmit={this.handleFormSubmit} onFormCancel={this.handleFormCancel} />
					
				)}
				
				<Exercise id={id} title={title} workout={workout} sets={sets} onEditClick={this.handleEdit} onDeleteClick={onDeleteClick} onSetChange={onSetChange}  />

			</GridCell>

		)

	}

}

EditableExercise.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	workout: PropTypes.string,
	sets: PropTypes.array.isRequired,
	onDeleteClick: PropTypes.func.isRequired,
	onSetChange: PropTypes.func.isRequired,
	onFormSubmit: PropTypes.func.isRequired
}

export default EditableExercise;