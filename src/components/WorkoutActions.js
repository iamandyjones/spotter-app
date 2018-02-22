import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from './Menu';
import WorkoutFormContainer from '../containers/WorkoutFormContainer.js';
import Dialog from './Dialog';

class WorkoutActions extends Component {

	constructor(props){

		super(props);

		this.state = { editWorkout: false, requestDelete: false, confirmDelete: false }

		this.handleMenuActions = this.handleMenuActions.bind(this);
		this.handleWorkoutEdit = this.handleWorkoutEdit.bind(this);
		this.handleWorkoutEditCancel = this.handleWorkoutEditCancel.bind(this);
		this.handleWorkoutDeleteRequest = this.handleWorkoutDeleteRequest.bind(this);
		this.handleDialogCancel = this.handleDialogCancel.bind(this);
		this.handleWorkoutDeleteConfirm = this.handleWorkoutDeleteConfirm.bind(this);

	}

	handleWorkoutEdit(){

		this.setState({editWorkout: true})

	}

	handleWorkoutEditCancel(){

		this.setState({editWorkout: false});

	}

	handleWorkoutDeleteRequest(){
		
		this.setState({requestDelete: true});

	}

	handleDialogCancel(){

		this.setState({requestDelete: false});

	}

	handleWorkoutDeleteConfirm(){

		const { id, deleteWorkout, onNotify } = this.props;

		deleteWorkout(id);
		onNotify("Workout deleted");
		this.setState({requestDelete: false, confirmDelete: true});

	}

	handleMenuActions(action){

		switch(action){

			case 'deleteWorkout':
			this.handleWorkoutDeleteRequest();
			break;

			case 'editWorkout':
			this.handleWorkoutEdit();
			break;

			default:

		}

	}

	render(){

		const { id, title } = this.props;

		const menuItems = [
			{ label: "Edit Workout", action: "editWorkout" },
			{ label: "Delete Workout", action: "deleteWorkout" }
		]

		return (

			<Fragment>

				<Menu items={menuItems} actionHandler={this.handleMenuActions} iconClass="mdc-toolbar__icon" />

				{this.state.editWorkout && 
					<WorkoutFormContainer
						id={id} 
						title={title} 
						onFormClose={this.handleWorkoutEditCancel} 
					/>
				}

				{this.state.requestDelete &&
					<Dialog onCancel={this.handleDialogCancel} onSubmit={this.handleWorkoutDeleteConfirm} title="Delete workout?" labelSubmit="Delete">
							Are you sure you want to permanently delete this workout? Once it's gone. it's gone...
					</Dialog>
				}

				{this.state.confirmDelete &&
					<Redirect to="/workouts" />
				}

			</Fragment>

		)

	}

}

export default WorkoutActions;