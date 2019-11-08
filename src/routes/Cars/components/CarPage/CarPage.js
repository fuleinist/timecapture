import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import styles from './CarPage.styles.js'

function CarPage({ car, classes }) {
  return (
    <div className={classes.container}>
      <span>CarPage Component</span>
      <pre>{JSON.stringify(car, null, 2)}</pre>
    </div>
  )
}

CarPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  car: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default withStyles(styles)(CarPage)
