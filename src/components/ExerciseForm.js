import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ExerciseForm extends Component {

	constructor(props){
		
		super(props);

		this.state = {
			title: this.props.title || '',
			workout: this.props.workout || ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleWorkoutChange = this.handleWorkoutChange.bind(this);
	}

	handleSubmit(){

		this.props.onFormSubmit(this.props.id, { title: this.state.title, workout: this.state.workout });

	}

	handleTitleChange(e){

		this.setState({title: e.target.value});

	}

	handleWorkoutChange(e){

		this.setState({workout: e.target.value});

	}

	render(){

		const submitText = this.props.id ? 'Edit' : 'Create';

		return (

			<div>

				<section id="my-mdc-dialog-description" className="mdc-dialog__body">

					<label>Title</label>
					<input type="text" value={this.state.title} onChange={this.handleTitleChange} />

					<label>Workout</label>
					<input type="text" value={this.state.workout} onChange={this.handleWorkoutChange} />

				</section>

				<footer className="mdc-dialog__footer">
		      
		      		<Button cssClass="mdc-dialog__footer__button" label="Cancel" onClick={this.props.onFormCancel} />
		      		<Button cssClass="mdc-dialog__footer__button" label={submitText} onClick={this.handleSubmit} />
			      
			    </footer>

		    </div>

		);

	}

}

ExerciseForm.propTypes = {
	id: PropTypes.string,
	onFormSubmit: PropTypes.func.isRequired,
	onFormCancel: PropTypes.func.isRequired
}

export default ExerciseForm;