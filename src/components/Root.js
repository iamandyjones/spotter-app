import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import AppRoute from './AppRoute';
import LandingGrid from './LandingGrid';
import WorkoutDashboardContainer from '../containers/WorkoutDashboardContainer';
import WorkoutListContainer from '../containers/WorkoutListContainer';
import PageNotFound from './PageNotFound';
import Layout from './Layout';
import LayoutEmpty from './LayoutEmpty';

const actions = [

  { label: "Edit Workout", action: "edit" },
  { label: "Delete Workout", action: "delete" }

]

const routes = [

  {
    path: "/workouts/:id",
    layout: LayoutEmpty,
    component: WorkoutDashboardContainer,
    actions: actions,
    workout: true
  },
  {
    path: "/workouts",
    layout: Layout,
    component: WorkoutListContainer,
    title: "Workouts"
  },
  {
    exact: true,
    path: "/",
    layout: LayoutEmpty,
    component: LandingGrid,
    title: "Spotter App"
  },
  {
    layout: LayoutEmpty,
    component: PageNotFound,
    title: "Page Not Found"
  }

]

const Root = ({ onNavOpen, workoutTitle }) => (

  <Switch>

    {routes.map((r, i) => (

      <AppRoute
        key={i}
        path={r.path}
        exact={r.exact}
        layout={r.layout}
        component={r.component}
        title={r.workout ? workoutTitle : r.title}
        onMenuIconClick={onNavOpen}
        actions={r.actions}
      />

    ))}

  </Switch>

)

Root.propTypes = {
  onNavOpen: PropTypes.func.isRequired,
  workoutTitle: PropTypes.string
}

export default Root;
