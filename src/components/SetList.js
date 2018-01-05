import React, { Component } from 'react';

import Set from './Set';
import { uid } from '../utils/GlobalUtils';

class SetList extends Component {

	constructor(props){
		super(props);

		this.handleSetChange = this.handleSetChange.bind(this);
		this.handleSetDelete = this.handleSetDelete.bind(this);
		this.handleNewSet = this.handleNewSet.bind(this);

	}

	handleSetChange(id, obj){

		const sets = this.props.sets.map((set)=>{

			if(id === set.id){
				return Object.assign({}, set, obj);
			} else {
				return set;
			}

		});

		this.changeSets(sets);

	}

	handleSetDelete(id){

		const sets = this.props.sets.filter((s)=>{
			return s.id !== id;
		});
		
		this.changeSets(sets);

	}

	handleNewSet(){

		const sets = this.props.sets.concat( { reps: '', load: '', id: uid() } );

		this.changeSets(sets);

	}

	changeSets(sets){

		this.props.onSetChange(this.props.id, { sets: sets });

	}

	render(){

		const sets = this.props.sets.map((s)=>(

			<Set key={s.id} id={s.id} reps={s.reps} load={s.load} onSetChange={this.handleSetChange} onSetDelete={this.handleSetDelete} />

		));
	
		return (

			<div>
				{sets}
				<button onClick={this.handleNewSet}>New Set</button>
			</div>

		);

	}

}

export default SetList;