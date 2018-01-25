import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AppRoute from './components/AppRoute';
import WorkoutDashboard from './components/WorkoutDashboard';
import WorkoutList from './components/WorkoutList';
import Navigation from './components/Navigation';
import Toolbar from './components/Toolbar';
import ToolbarTitle from './components/ToolbarTitle';
import Canvas from './components/Canvas';
import Layout from './components/Layout';

// own component
import '@material/card/dist/mdc.card.css';

//import logo from './logo.svg';
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

      <Toolbar onMenuClick={this.handleMenuClick}>

        <Switch>

          <Route exact path='/' render={(matchProps) => <ToolbarTitle title="Spotter App" link={matchProps.match.path} />} />
          <Route path='/workouts' render={(matchProps) => <ToolbarTitle title="Workouts" link={matchProps.match.path} />} />
          <Route component={ToolbarTitle} />

        </Switch>

      </Toolbar>

        <Switch>

          <AppRoute path='/workouts/:id' layout={Layout} component={WorkoutDashboard} /> 
          <AppRoute path='/workouts' layout={Layout} component={WorkoutList} /> 
        
          
          /*<Route path='/workouts/:workoutId' render={({match}) => (

            <Canvas>
              <WorkoutDashboard id={match.params.workoutId} />
            </Canvas>

          )} />*/
          

          <Route exact path='/' render={() => (

            <div className="mdc-layout-grid">
            <div className="mdc-layout-grid__inner">
              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                  
                  <div className="mdc-card">
  <section className="mdc-card__primary">
    <h1 className="mdc-card__title mdc-card__title--large">Title goes here</h1>
    <h2 className="mdc-card__subtitle">Subtitle here</h2>
  </section>
  <section className="mdc-card__supporting-text">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </section>
  <section className="mdc-card__actions">
    <button className="mdc-button mdc-button--compact mdc-card__action">Action 1</button>
    <button className="mdc-button mdc-button--compact mdc-card__action">Action 2</button>
  </section>
</div>

                <Link to="/workouts">Workouts</Link>
              </div>

              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
                <div className="mdc-card">
  <section className="mdc-card__primary">
    <h1 className="mdc-card__title mdc-card__title--large">Title goes here</h1>
    <h2 className="mdc-card__subtitle">Subtitle here</h2>
  </section>
  <section className="mdc-card__supporting-text">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </section>
  <section className="mdc-card__actions">
    <button className="mdc-button mdc-button--compact mdc-card__action">Action 1</button>
    <button className="mdc-button mdc-button--compact mdc-card__action">Action 2</button>
  </section>
</div>
              </div>

              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
<div className="mdc-card">
  <section className="mdc-card__primary">
    <h1 className="mdc-card__title mdc-card__title--large">Title goes here</h1>
    <h2 className="mdc-card__subtitle">Subtitle here</h2>
  </section>
  <section className="mdc-card__supporting-text">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </section>
  <section className="mdc-card__actions">
    <button className="mdc-button mdc-button--compact mdc-card__action">Action 1</button>
    <button className="mdc-button mdc-button--compact mdc-card__action">Action 2</button>
  </section>
</div>
              </div>

            </div>
          </div>

            

          )} />

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
