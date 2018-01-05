import React, { Component } from 'react';

class Set extends Component {

	constructor(props){
		super(props);

		this.state = {
			reps: this.props.reps,
			load: this.props.load
		}

		this.handleRepsChange = this.handleRepsChange.bind(this);
		this.handleLoadChange = this.handleLoadChange.bind(this);
		this.handleRemoveSet = this.handleRemoveSet.bind(this);

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

	render(){
	
		return (

			<div>
				<input type="text" value={this.state.reps} placeholder="Reps" onChange={this.handleRepsChange} />
				<span> x </span>
				<input type="text" value={this.state.load} placeholder="Weight" onChange={this.handleLoadChange} />
				<span onClick={this.handleRemoveSet}>Bin</span>
			</div>

		);

	}

}

export default Set;