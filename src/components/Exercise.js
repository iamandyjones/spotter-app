import React from 'react';
import PropTypes from 'prop-types';
import SetList from './SetList';

const Exercise = (props) => {

	const handleDeleteClick = () => {

		props.onDeleteClick(props.id);

	}

	return (

		<React.Fragment>

			<div className="mdc-list-item__text">{props.title} - {props.workout}

				<SetList id={props.id} sets={props.sets} onSetChange={props.onSetChange} />

			</div>

			<div className="mdc-list-item__meta">

				<i className="mdc-list-item__meta material-icons" aria-label="More" title="More">more_vert</i>
				<div onClick={props.onEditClick}>Edit</div>
				<div onClick={handleDeleteClick}>Delete</div>
			</div>

		</React.Fragment>

	);

}

Exercise.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	workout: PropTypes.string,
	sets: PropTypes.array.isRequired,
	onSetChange: PropTypes.func.isRequired,
	onEditClick: PropTypes.func.isRequired,
	onDeleteClick: PropTypes.func.isRequired
}

export default Exercise;