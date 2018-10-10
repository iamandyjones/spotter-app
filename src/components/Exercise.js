import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SetList from './SetList';
import Card from './Card';
import CardTitle from './CardTitle';
import CardActions from './CardActions';
import Button from './Button';
import IconButton from './IconButton';
import { uid } from '../utils/GlobalUtils';

class Exercise extends Component {

	constructor(){

		super();

		this.handleNewSet = this.handleNewSet.bind(this);

	}

	handleNewSet(){

		const {
			sets,
			id,
			onSetChange
		} = this.props;

		const setsNew = sets.concat( { reps: '', load: '', id: uid() } );

		onSetChange(id, { sets: setsNew });

	}

	render(){

		const {
			title,
			notes,
			id,
			sets,
			onSetChange,
			onEditClick,
			onDeleteClick
		} = this.props;

		return (

			<Card>

				<CardTitle title={title} subtitle={notes} />

				<SetList id={id} sets={sets} onSetChange={onSetChange} />

				<CardActions>
					<div className="mdc-card__action-buttons">
						<Button className="mdc-card__action mdc-card__action--button" onClick={this.handleNewSet} label="New Set" />
					</div>
					<div className="mdc-card__action-icons">
						<IconButton onClick={onEditClick} label="Edit" action="mode_edit" cssClass="mdc-card__action mdc-card__action--icon" />
						<IconButton onClick={() => onDeleteClick(id)} label="Delete" action="delete" cssClass="mdc-card__action mdc-card__action--icon" />
					</div>
				</CardActions>

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
