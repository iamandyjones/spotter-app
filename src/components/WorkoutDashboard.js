import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import EditableExerciseList from './EditableExerciseList';
import ToggleExerciseForm from './ToggleExerciseForm';
import Grid from './Grid';
import GridCell from './GridCell';
import { printDate, printTime } from '../utils/TimerUtils';

class WorkoutDashboard extends Component { 

	componentDidMount(){

		const { fetchWorkout, fetchExercises } = this.props;

		fetchWorkout(this.props.params.id);
		fetchExercises(this.props.params.id);

	}

	render(){

		const { isFetching, items, onDeleteClick, onSetChange, date } = this.props;

		return (

			<Fragment>
			
				<Grid>

					<GridCell>

						<h3 className="mdc-typography--subheading1 mdc-theme--text-hint-on-background collapsed">{printDate(date)} at {printTime(date)}</h3>
						
						{(!isFetching && !items.length) && <div>Ready to get started?</div>}

					</GridCell>

					{isFetching ? <p>Loading...</p> :

						<EditableExerciseList 
							items={items}
							onDeleteClick={onDeleteClick} 
							onSetChange={onSetChange}
						/>

					}

				</Grid>

				<ToggleExerciseForm 
					workoutId={this.props.params.id} 
				/>

			</Fragment>

		)

	}

}

export default WorkoutDashboard;