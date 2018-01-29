import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppRoute from './components/AppRoute';
import LandingGrid from './components/LandingGrid';
import WorkoutDashboard from './components/WorkoutDashboard';
import WorkoutList from './components/WorkoutList';
import Navigation from './components/Navigation';
import Layout from './components/Layout';
import LayoutEmpty from './components/LayoutEmpty';
import './App.css';

class App extends Component {
  
  constructor(props){

    super(props)

    this.state = { open: false }

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleNavClose = this.handleNavClose.bind(this);

  }

  handleMenuClick(evt){

    evt.preventDefault();

    this.setState({open: !this.state.open});

  }

  handleNavClose(){

    this.setState({open: false});

  }

  render() {
    
    return (
      
      <div className="app mdc-typography">

        <Navigation open={this.state.open} onNavClose={this.handleNavClose} />

        <Switch>
          <Route path='/workouts/:id' render={(matchProps) => (
            <WorkoutDashboard onMenuClick={this.handleMenuClick} workoutId={matchProps.match.params.id} link={matchProps.match.url} />
          )} />
          <AppRoute path='/workouts' layout={Layout} component={WorkoutList} title="Workouts" onMenuClick={this.handleMenuClick} />
          <AppRoute exact path='/' layout={LayoutEmpty} component={LandingGrid} onMenuClick={this.handleMenuClick} />

          <Route render={() => (
            
          <div className="mdc-layout-grid">
            <div className="mdc-layout-grid__inner">
              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12" style={{background: "red"}}>
                <p>404</p>
              </div>
            </div>
          </div>  

          )} />

        </Switch>

      </div>
      
    );

  }

}

export default App;
