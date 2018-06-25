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

		const { onDeleteClick, onSetChange, ...rest } = this.props;

		return (

			<GridCell>

				{this.state.editFormOpen && (

					<ExerciseFormContainer
						onFormClose={this.toggleEditForm(false)}
						{...rest}
					/>

				)}

				<Exercise
					onEditClick={this.toggleEditForm(true)}
					onDeleteClick={onDeleteClick}
					onSetChange={onSetChange}
					{...rest}
				/>

			</GridCell>

		)

	}

}

EditableExercise.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	sets: PropTypes.array.isRequired,
	onDeleteClick: PropTypes.func.isRequired,
	onSetChange: PropTypes.func.isRequired
}

export default EditableExercise;
