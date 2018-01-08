import React, { Component } from 'react';

import WorkoutDashboard from './components/WorkoutDashboard';
import WorkoutList from './components/WorkoutList';

import Dialog from './components/Dialog';

import '@material/typography/dist/mdc.typography.css';
import '@material/toolbar/dist/mdc.toolbar.css';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    
    return (
      <div className="App mdc-typography">

      <header className="mdc-toolbar">
  <div className="mdc-toolbar__row">
    <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
      <a href="#" className="material-icons mdc-toolbar__menu-icon">menu</a>
      <span className="mdc-toolbar__title">Spotter</span>
    </section>
  </div>
</header>

        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Welcome to Spotter</h2>
        </div>
        <p className="App-intro">Spotter App</p>

        <Dialog />

        <WorkoutList limit="2" />

        <WorkoutDashboard id={111} />

      </div>
    );

  }

}

export default App;
