import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ListLink from './ListLink';
import { printDate, printTime } from '../utils/TimerUtils';
import '@material/list/dist/mdc.list.css';

class WorkoutList extends Component {

	componentDidMount(){

		this.props.fetchWorkoutsIfNeeded();

	}

	render(){

		const {
			isFetching,
			items,
			match: {
				path
			}
		} = this.props;

		return (

			<Fragment>

				{isFetching ? <p>Loading...</p> :

					<div className="mdc-list mdc-list--two-line list-divided">

					{
						items.map(({ id, title, date }) => (

							<ListLink
								to={`${path}/${id}`}
								key={id}
								title={title}
								icon="fitness_center"
								meta={`${printDate(date)} at ${printTime(date)}`}
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
