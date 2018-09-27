import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import MenuActions from './MenuActions';
import ToggleForm from './ToggleForm';
import WorkoutFormContainer from '../containers/WorkoutFormContainer.js';
import Icon from './Icon';
import { workoutActions } from '../constants/ToolbarActions';

const ToolbarActions = ({ toggleTimer }) => (

    <Switch>

        <Route path="/workouts/:id" render={matchProps => (
            <Fragment>
                <Icon
                    onClick={toggleTimer}
                    action="timer"
                    label="Timer"
                />
                <MenuActions
                    actions={workoutActions}
                    url={matchProps.match.url}
                />
            </Fragment>
        )} />

        <Route path="/workouts" render={() => (
            <ToggleForm
                component={WorkoutFormContainer}
                trigger={Icon}
            />
        )} />

        <Route path="/" exact render={() => (
            <ToggleForm
                component={WorkoutFormContainer}
                trigger={Icon}
            />
        )} />

    </Switch>

)

export default ToolbarActions;
