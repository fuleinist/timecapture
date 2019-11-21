import { compose } from 'redux'
import { connect } from 'react-redux'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import styles from './JobPage.styles'

export default compose(
  // create listener for job, results go into redux
  firestoreConnect([{ collection: 'job' }]),
  // map redux state to props
  connect(({ firestore: { data } }) => ({
    job: data.job
  })),
  withStyles(styles)
)
