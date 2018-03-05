import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridCell from './GridCell';
import ExerciseFormContainer from '../containers/ExerciseFormContainer';
import Exercise from './Exercise';

class EditableExercise extends Component {

	constructor(){
		
		super();

		this.state = { editFormOpen: false };
		this.toggleEditForm = this.toggleEditForm.bind(this);

	}

	toggleEditForm(val){

		return () => this.setState({ editFormOpen: val });

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
						onFormClose={this.toggleEditForm(false)} 
					/>
					
				)}
				
				<Exercise
					id={id} 
					title={title} 
					workout={workout} 
					sets={sets} 
					onEditClick={this.toggleEditForm(true)} 
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