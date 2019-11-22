import React from 'react'
import PropTypes from 'prop-types'

function JobstatusPage({ jobstatus, classes }) {
  return (
    <div className={classes.container}>
      <span>JobstatusPage Component</span>
      <pre>{JSON.stringify(jobstatus, null, 2)}</pre>
    </div>
  )
}

JobstatusPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  jobstatus: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default JobstatusPage
