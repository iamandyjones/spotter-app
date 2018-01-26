import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AppRoute from './components/AppRoute';
import WorkoutDashboard from './components/WorkoutDashboard';
import WorkoutList from './components/WorkoutList';
import Navigation from './components/Navigation';
import Toolbar from './components/Toolbar';
import ToolbarTitle from './components/ToolbarTitle';
import Layout from './components/Layout';
import Card from './components/Card';
import Grid from './components/Grid';
import GridCell from './components/GridCell';
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

          <Route exact path='/' render={() => (

            <Grid>
              <GridCell>
                <Card title="Card Title" subtitle="Card subtitle">
                  <Link to="/workouts">Workouts</Link>
                </Card>  
              </GridCell>

              <GridCell span={6}>
               <Card title="Card Title" subtitle="Card subtitle">
                  Some text...
                </Card>
              </GridCell>

              <GridCell span={6}>
                <Card title="Card Title" subtitle="Card subtitle">
                  Some text...
                </Card>
              </GridCell>
            </Grid>

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
