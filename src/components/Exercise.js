import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SetList from './SetList';
import Card from './Card';
import CardTitle from './CardTitle';

class Exercise extends Component {

	render(){

		const { title, workout, id, sets, onSetChange, onEditClick, onDeleteClick } = this.props;

		return (

			<Card>
				
				<div className="mdc-card__horizontal-block">

					<CardTitle title={title} subtitle={workout} />

					<div className="mdc-card__media-item">
						<div className="mdc-card__actions">
							<i className="material-icons mdc-card__action mdc-theme--text-icon-on-background" onClick={onEditClick}>mode_edit</i>
							<i className="material-icons mdc-card__action mdc-theme--text-icon-on-background" onClick={() => onDeleteClick(this.props.id)}>delete</i>
						</div>
					</div>

				</div>

				<SetList id={id} sets={sets} onSetChange={onSetChange} />

			</Card>

		)

	}

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