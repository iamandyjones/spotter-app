import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppRoute from './components/AppRoute';
import LandingGrid from './components/LandingGrid';
import WorkoutDashboardContainer from './containers/WorkoutDashboardContainer';
import WorkoutListContainer from './containers/WorkoutListContainer';
import ToggleWorkoutForm from './components/ToggleWorkoutForm';
import ToggleExerciseForm from './components/ToggleExerciseForm';
import Navigation from './components/Navigation';
import Layout from './components/Layout';
import LayoutEmpty from './components/LayoutEmpty';
import TimerContainer from './containers/TimerContainer';
import BottomSheet from './components/BottomSheet';
import NotificationContainer from './containers/NotificationContainer';
import WorkoutActionsContainer from './containers/WorkoutActionsContainer';

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
        {/*
          <Route path='/workouts/:id' render={(matchProps) => (
            <WorkoutDashboard onMenuClick={this.handleMenuClick} workoutId={matchProps.match.params.id} link={matchProps.match.url} />
          )} />

*/}
          <AppRoute
            path='/workouts/:id'
            layout={LayoutEmpty}
            content={[WorkoutDashboardContainer]} 
            title="Workouts" 
            onMenuClick={this.handleMenuClick}
            actions={WorkoutActionsContainer}
          />


          <AppRoute
            path='/workouts'
            layout={Layout}
            content={[WorkoutListContainer, ToggleWorkoutForm]} 
            title="Workouts" 
            onMenuClick={this.handleMenuClick} 
          />
          
          <AppRoute 
            exact 
            path='/' 
            layout={LayoutEmpty} 
            content={[LandingGrid]} 
            title="Spotter App" 
            onMenuClick={this.handleMenuClick} 
          />

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

        <BottomSheet>
          <TimerContainer />
        </BottomSheet>

        <NotificationContainer />

      </div>
      
    );

  }

}

export default App;
