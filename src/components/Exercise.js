import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SetList from './SetList';
import Menu from './Menu';
import Card from './Card';
import CardTitle from './CardTitle';
import CardMain from './CardMain';

class Exercise extends Component {

	constructor(props){

		super(props);

		this.state = {menuOpen: false}

		this.showMenu = this.showMenu.bind(this);

	}

	handleDeleteClick(){

		this.props.onDeleteClick(this.props.id);

	}

	showMenu(){

		this.setState({menuOpen: true});

	}

	render(){

		const { title, workout, id, sets, onSetChange, onEditClick } = this.props;

		return (

			<Card>
					
				<CardTitle title={title} subtitle={workout}>

					<div className="mdc-menu-anchor">
						<i className="material-icons" aria-label="More" title="More" onClick={this.showMenu}>more_vert</i>
						{this.state.menuOpen && <Menu />}
					</div>

				</CardTitle>

				<CardMain>
					
					<SetList id={id} sets={sets} onSetChange={onSetChange} />
					
					<div onClick={onEditClick}>Edit</div>
					<div onClick={this.handleDeleteClick}>Delete</div>

				</CardMain>

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