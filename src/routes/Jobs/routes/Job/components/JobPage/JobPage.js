import React from 'react'
import PropTypes from 'prop-types'

function JobPage({ job, classes }) {
  return (
    <div className={classes.container}>
      <span>JobPage Component</span>
      <pre>{JSON.stringify(job, null, 2)}</pre>
    </div>
  )
}

JobPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  job: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default JobPage
