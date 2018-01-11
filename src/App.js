import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';


import WorkoutDashboard from './components/WorkoutDashboard';
import WorkoutList from './components/WorkoutList';

import Dialog from './components/Dialog';
import Navigation from './components/Navigation';

import '@material/theme/dist/mdc.theme.css';
import '@material/typography/dist/mdc.typography.css';
import '@material/toolbar/dist/mdc.toolbar.css';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props){

    super(props)

    this.state = { open: false }

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleNavClose = this.handleNavClose.bind(this);

  }

  handleMenuClick(){

    this.setState({open: !this.state.open});

  }

  handleNavClose(){

    this.setState({open: false});

  }

  render() {
    
    return (
      
      <div className="App mdc-typography">

      <Navigation open={this.state.open} onNavClose={this.handleNavClose} />


      <header className="mdc-toolbar">
  <div className="mdc-toolbar__row">
    <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
      <a href="#" className="material-icons mdc-toolbar__menu-icon" onClick={this.handleMenuClick}>menu</a>
      <Link to="/" className="mdc-toolbar__title mdc-theme--text-primary-on-primary">Spotter</Link>
    </section>
  </div>
</header>

        

        <Dialog />

        <Switch>

          <Route path='/workouts/:workoutId' render={({match}) => {

            return <WorkoutDashboard id={match.params.workoutId} />

          }} />

          <Route path='/workouts' render={({match}) => (
            <WorkoutList workoutPathname={match.path} limit="2" />
          )} />
          

          <Route exact path='/' render={() => (

            <Link to="/workouts">Workouts</Link>

          )} />

          <Route render={() => (
            
            <p>404</p>

          )} />

        </Switch>

      </div>
      
    );

  }

}

export default App;
