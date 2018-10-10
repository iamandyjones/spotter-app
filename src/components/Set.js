import React, { Component } from 'react';
import SelectBox from './Select';
import IconButton from './IconButton';
import './Set.css';

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

		const reps = [1,2,3,4,5,6,7,8,9,10];
		const weights = ["Body weight", "2kg","4kg","6kg","8kg","10kg","12kg","14kg","16kg","18kg","20kg"];

		return (

			<li className="mdc-list-item">

				<SelectBox options={reps} value={this.state.reps} defaultValue="Reps" onChange={this.handleRepsChange} />
				<SelectBox options={weights} value={this.state.load} defaultValue="Weight" onChange={this.handleLoadChange} />
				<IconButton label="Remove set" action="remove_circle_outline" onClick={this.handleRemoveSet} cssClass="mdc-list-item__meta" />

			</li>

		)

	}

}

export default Set;
