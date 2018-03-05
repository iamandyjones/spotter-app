import React from 'react';
import { withRouter } from 'react-router-dom';
import NavigationContainer from './containers/NavigationContainer';
import TimerContainer from './containers/TimerContainer';
import NotificationContainer from './containers/NotificationContainer';
import RootContainer from './containers/RootContainer';
import './App.css';

const NotBlocked = withRouter(RootContainer);

const App = () => (
      
    <div className="app mdc-typography">

        <NavigationContainer />
        <NotBlocked />
        <TimerContainer />
        <NotificationContainer />

    </div>

)

export default App;
