import { compose } from 'redux'
import { connect } from 'react-redux'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import styles from './UserPage.styles'

export default compose(
  // create listener for user, results go into redux
  firestoreConnect([{ collection: 'user' }]),
  // map redux state to props
  connect(({ firestore: { data } }) => ({
    user: data.user
  })),
  withStyles(styles)
)
