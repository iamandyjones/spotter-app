import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ListLink from './ListLink';
import ToggleForm from './ToggleForm';
import WorkoutFormContainer from '../containers/WorkoutFormContainer.js';
import { printDate, printTime } from '../utils/TimerUtils';
import '@material/list/dist/mdc.list.css';

class WorkoutList extends Component {

	componentDidMount(){

		const { fetchWorkoutsIfNeeded } = this.props;

		fetchWorkoutsIfNeeded();

	}

	render(){

		const { isFetching, items } = this.props;
		const { path } = this.props.match;

		return (

			<Fragment>

				{isFetching ? <p>Loading...</p> :

					<div className="mdc-list mdc-list--two-line list-divided">

					{
						items.map((w) => (

							<ListLink 
								to={`${path}/${w.id}`} 
								key={w.id} 
								title={w.title} 
								icon="fitness_center" 
								meta={`${printDate(w.date)} at ${printTime(w.date)}`} 
							/>

						))
					}

					</div>
				}

				<ToggleForm
					component={WorkoutFormContainer}
				/>

			</Fragment>
		)

	}

}

WorkoutList.propTypes = {
	fetchWorkoutsIfNeeded: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
	items: PropTypes.arrayOf(PropTypes.shape({
		date: PropTypes.number.isRequired,
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	})).isRequired,
	match: PropTypes.shape({
		path: PropTypes.string.isRequired
	}).isRequired
}

export default WorkoutList;