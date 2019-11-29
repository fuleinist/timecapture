import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import JobRoute from 'routes/Jobs/routes/Job'
import { renderChildren } from 'utils/router'

function JobPage({ job, classes, goToJobs, match, auth }) {
  return (
  <Switch>
    {/* Child routes */}
    {renderChildren([JobRoute], match, { auth })}
    {/* Main Route */}
    <Route
      exact
      path={match.path}
      render={() => (
        <div className={classes.container}>
          <span>JobPage Component</span>
          <pre>{JSON.stringify(job, null, 2)}</pre>
          <button onClick={(jobId)=> goToJobs(jobId)} />
        </div>
      )}
    />
  </Switch>
  )
}

JobPage.propTypes = {
  match: PropTypes.object.isRequired, // from enhancer (withRouter)
  auth: PropTypes.object, // from enhancer (connect + firebaseConnect - firebase)
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  job: PropTypes.object, // from enhancer (firestoreConnect + connect)
  goToJobs: PropTypes.func // from enhancer
}

export default JobPage
