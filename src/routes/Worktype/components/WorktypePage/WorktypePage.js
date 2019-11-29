import React from 'react'
import PropTypes from 'prop-types'

function WorktypePage({ worktype, classes }) {
  return (
    <div className={classes.container}>
      <span>WorktypePage Component</span>
      <pre>{JSON.stringify(worktype, null, 2)}</pre>
    </div>
  )
}

WorktypePage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  worktype: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default WorktypePage
