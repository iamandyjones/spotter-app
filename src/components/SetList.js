import React, { Component } from 'react';
import Set from './Set';
import '@material/list/dist/mdc.list.css';

class SetList extends Component {

	constructor(props){

		super(props);

		this.handleSetChange = this.handleSetChange.bind(this);
		this.handleSetDelete = this.handleSetDelete.bind(this);

	}

	handleSetChange(id, obj){

		const sets = this.props.sets.map((set)=>{

			if(id === set.id){
				return { ...set, ...obj }
			} else {
				return set;
			}

		});

		this.changeSets(sets);

	}

	handleSetDelete(id){

		const sets = this.props.sets.filter((s) => s.id !== id);

		this.changeSets(sets);

	}

	changeSets(sets){

		this.props.onSetChange(this.props.id, { sets: sets });

	}

	render(){

		const sets = this.props.sets.map(({ id, reps, load }) => (

			<Set key={id} id={id} reps={reps} load={load} onSetChange={this.handleSetChange} onSetDelete={this.handleSetDelete} />

		));

		return (

			<ul className="mdc-list">
			{sets}
			</ul>

		);

	}

}

export default SetList;
