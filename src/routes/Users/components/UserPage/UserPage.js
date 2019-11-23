import React from 'react'
import PropTypes from 'prop-types'

function UserPage({ user, classes }) {
  return (
    <div className={classes.container}>
      <span>UserPage Component</span>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

UserPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  user: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default UserPage
