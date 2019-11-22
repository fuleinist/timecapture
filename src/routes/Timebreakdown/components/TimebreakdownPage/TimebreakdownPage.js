import React from 'react'
import PropTypes from 'prop-types'

function TimebreakdownPage({ timebreakdown, classes }) {
  return (
    <div className={classes.container}>
      <span>TimebreakdownPage Component</span>
      <pre>{JSON.stringify(timebreakdown, null, 2)}</pre>
    </div>
  )
}

TimebreakdownPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  timebreakdown: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default TimebreakdownPage
