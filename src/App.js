import React, { Component } from 'react';

import WorkoutDashboard from './components/WorkoutDashboard';
import WorkoutList from './components/WorkoutList';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Welcome to Spotter</h2>
        </div>
        <p className="App-intro">Spotter App</p>

        <WorkoutList limit="5" />

        <WorkoutDashboard id={111} />

      </div>
    );

  }

}

export default App;
