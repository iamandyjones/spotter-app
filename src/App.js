import React from 'react';
import { withRouter } from 'react-router-dom';
import NavigationContainer from './containers/NavigationContainer';
import TimerContainer from './containers/TimerContainer';
import NotificationContainer from './containers/NotificationContainer';
import RootContainer from './containers/RootContainer';
import './App.css';

const RootUnblocked = withRouter(RootContainer);

const App = () => (

    <div className="app mdc-typography">

        <NavigationContainer />
        <RootUnblocked />
        <TimerContainer />
        <NotificationContainer />

    </div>

)

export default App;
