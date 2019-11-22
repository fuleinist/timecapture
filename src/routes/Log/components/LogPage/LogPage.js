import React from 'react'
import PropTypes from 'prop-types'
import classes from './LogPage.scss'

function LogPage({ log }) {
  return (
    <div className={classes.container}>
      <span>LogPage Component</span>
      <pre>{JSON.stringify(log, null, 2)}</pre>
    </div>
  )
}

LogPage.propTypes = {
  log: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default LogPage
