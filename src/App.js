import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppRoute from './components/AppRoute';
import LandingGrid from './components/LandingGrid';
import WorkoutDashboard from './components/WorkoutDashboard';
import WorkoutList from './components/WorkoutList';
import Navigation from './components/Navigation';
import Layout from './components/Layout';
import LayoutEmpty from './components/LayoutEmpty';
import Timer from './components/Timer';
import BottomSheet from './components/BottomSheet';
import { getTimer, toggleTimer } from './utils/ApiUtils';

import './App.css';

class App extends Component {
  
  constructor(props){

    super(props)

    this.state = { open: false, timer: {} }

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleNavClose = this.handleNavClose.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleRestartClick = this.handleRestartClick.bind(this);
    this.hydrateTimerState = this.hydrateTimerState.bind(this);

  }

  componentDidMount(){

    this.hydrateTimerState();

    this.hydrateTimerInterval = setInterval(this.hydrateTimerState, 5000);

  }

  componentWillUnmount(){

    clearInterval(this.hydrateTimerInterval);

  }

  handleMenuClick(evt){

    evt.preventDefault();

    this.setState({open: !this.state.open});

  }

  handleNavClose(){

    this.setState({open: false});

  }

  handleStartClick(){

    const now = Date.now();

    this.setState({
      timer: Object.assign({}, this.state.timer, { runningSince: now })
    });

    toggleTimer({elapsed: this.state.timer.elapsed, runningSince: now});


  }

  handleStopClick(){

    const now = Date.now();
    const lastElapsed = now - this.state.timer.runningSince;
    this.setState({ 
      timer: Object.assign({}, this.state.timer, { elapsed: this.state.timer.elapsed + lastElapsed, runningSince: null })
    });

      toggleTimer({elapsed: this.state.timer.elapsed + lastElapsed, runningSince: null});
    
  }

  handleRestartClick(){

    this.setState({ timer: { elapsed: 0, runningSince: null } });

    toggleTimer({elapsed: 0, runningSince: null});

  }

  hydrateTimerState(){

    getTimer((data) => (
        this.setState({timer: data})
      )
    );

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
          <AppRoute exact path='/' layout={LayoutEmpty} component={LandingGrid} title="Spotter App" onMenuClick={this.handleMenuClick} />

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
          <Timer elapsed={this.state.timer.elapsed} runningSince={this.state.timer.runningSince} onStartClick={this.handleStartClick} onStopClick={this.handleStopClick} onRestartClick={this.handleRestartClick} />
        </BottomSheet>

      </div>
      
    );

  }

}

export default App;
