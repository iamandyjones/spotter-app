import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ListLink from './ListLink';
import { printDate, printTime } from '../utils/TimerUtils';
import '@material/list/dist/mdc.list.css';

class WorkoutList extends Component {

	componentDidMount(){

		const { fetchWorkoutsIfNeeded } = this.props;

		fetchWorkoutsIfNeeded();

	}

	render(){

		const { isFetching, items, path } = this.props;

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

			</Fragment>
		)

	}

}

WorkoutList.propTypes = {
	fetchWorkoutsIfNeeded: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
	items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	path: PropTypes.string.isRequired
}

export default WorkoutList;