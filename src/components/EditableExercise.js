import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridCell from './GridCell';
import ExerciseFormContainer from '../containers/ExerciseFormContainer';
import Exercise from './Exercise';

class EditableExercise extends Component {

	constructor(props){
		
		super(props);
		this.state = { editFormOpen: false };

		this.handleEdit = this.handleEdit.bind(this);
		this.handleFormClose = this.handleFormClose.bind(this);

	}

	handleEdit(){

		this.setState({ editFormOpen: true });

	}

	handleFormClose(){

		this.setState({ editFormOpen: false });

	}

	render(){

		const { id, title, workout, sets, onDeleteClick, onSetChange } = this.props;

		return (

			<GridCell>

				{this.state.editFormOpen && (
					
					<ExerciseFormContainer
						id={id} 
						title={title} 
						workout={workout}
						onFormClose={this.handleFormClose} 
					/>
					
				)}
				
				<Exercise
					id={id} 
					title={title} 
					workout={workout} 
					sets={sets} 
					onEditClick={this.handleEdit} 
					onDeleteClick={onDeleteClick} 
					onSetChange={onSetChange}  
				/>

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
	onSetChange: PropTypes.func.isRequired
}

export default EditableExercise;