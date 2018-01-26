import React, { Component } from 'react';
import Chip from './Chip';

class Set extends Component {

	constructor(props){
		super(props);

		this.state = {
			reps: this.props.reps,
			load: this.props.load,
			editFormOpen: false
		}

		this.handleRepsChange = this.handleRepsChange.bind(this);
		this.handleLoadChange = this.handleLoadChange.bind(this);
		this.handleRemoveSet = this.handleRemoveSet.bind(this);
		this.handleOpenForm = this.handleOpenForm.bind(this);

	}

	handleRepsChange(e){

		this.setState({reps: e.target.value}, this.changeSets);

	}

	handleLoadChange(e){

		this.setState({load: e.target.value}, this.changeSets);

	}

	handleRemoveSet(){

		this.props.onSetDelete(this.props.id);

	}

	changeSets(){

		this.props.onSetChange(this.props.id, { reps: this.state.reps, load: this.state.load });

	}

	handleOpenForm(){

		this.setState({editFormOpen: true});

	}

	render(){
		
		if(this.state.editFormOpen){

			return (

				<div>
					<input type="text" value={this.state.reps} placeholder="Reps" onChange={this.handleRepsChange} />
					<input type="text" value={this.state.load} placeholder="Weight" onChange={this.handleLoadChange} />
				</div>

			);

		} else {

			return (

				<Chip onClick={this.handleOpenForm}>
					{this.state.reps} x {this.state.load}
					<span className="chip__action" onClick={this.handleRemoveSet}><i className="material-icons md-23">cancel</i></span>
				</Chip>

			)

		}
		

	}

}

export default Set;