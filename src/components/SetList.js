import React, { Component } from 'react';
import Set from './Set';
import CardMain from './CardMain';
import CardActions from './CardActions';
import Button from './Button';
import { uid } from '../utils/GlobalUtils';
import '@material/list/dist/mdc.list.css';

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

		const sets = this.props.sets.filter((s) => s.id !== id);
		
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

			<React.Fragment>

				<CardMain>
					<ul className="mdc-list">
					{sets}
					</ul>
				</CardMain>
				
				<CardActions>
					<Button className="mdc-button--compact mdc-card__action" onClick={this.handleNewSet} label="Another Set" />
				</CardActions>

			</React.Fragment>

		);

	}

}

export default SetList;