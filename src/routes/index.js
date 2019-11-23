import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import LoginRoute from './Login'
import SignupRoute from './Signup'
import JobsRoute from './Jobs'
import UserRoute from './Users'
import LogsRoute from './Logs'
import ProjectsRoute from './Projects'
import AccountsRoute from './Accounts'
import NotFoundRoute from './NotFound'

export default function createRoutes(store) {
  console.log(store)
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={Home.path} component={() => <Home.component />} />
        {/* Build Route components from routeSettings */
        [
          AccountsRoute,
          JobsRoute,
          UserRoute,
          LogsRoute,
          ProjectsRoute,
          SignupRoute,
          LoginRoute
          /* Add More Routes Here */
        ].map((settings, index) => (
          <Route key={`Route-${index}`} {...settings} />
        ))}
        <Route component={NotFoundRoute.component} />
      </Switch>
    </CoreLayout>
  )
}
