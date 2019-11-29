import { compose } from 'redux'
import { connect } from 'react-redux'
import { withHandlers, withStateHandlers, setDisplayName } from 'recompose'
import { withRouter } from 'react-router-dom'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import { withNotifications } from 'modules/notification'
import { spinnerWhileLoading } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'
import styles from './JobsPage.styles'
import { JOBS_PATH } from 'constants/paths'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedProjectsPage'),
  // create listener for job, results go into redux
  firestoreConnect([{ collection: 'job' }]),
  // redirect to /login if user is not logged in
  UserIsAuthenticated,
  // map redux state to props
  connect(({ firestore: { data }, firebase: { auth: { uid } } }) => ({
    uid,
    job: data.job
  })),
  // Wait for uid to exist before going further
  spinnerWhileLoading(['uid']),
  // Show loading spinner while jobs are loading
  spinnerWhileLoading(['jobs']),
  // Add props.router
  withRouter,
  // Add props.showError and props.showSuccess
  withNotifications,
  // Add state and state handlers as props
  withStateHandlers(
    // Setup initial state
    ({ initialDialogOpen = false }) => ({
      newDialogOpen: initialDialogOpen
    }),
    // Add state handlers as props
    {
      toggleDialog: ({ newDialogOpen }) => () => ({
        newDialogOpen: !newDialogOpen
      })
    }
  ),
  // Add handlers as props
  withHandlers({
    addJob: props => newInstance => {
      const { firestore, uid, showError, showSuccess, toggleDialog } = props
      if (!uid) {
        return showError('You must be logged in to create a job')
      }
      return firestore
        .add(
          { collection: 'jobs' },
          {
            ...newInstance,
            createdBy: uid,
            createdAt: firestore.FieldValue.serverTimestamp()
          }
        )
        .then(() => {
          toggleDialog()
          showSuccess('Job added successfully')
        })
        .catch(err => {
          console.error('Error:', err) // eslint-disable-line no-console
          showError(err.message || 'Could not add Job')
          return Promise.reject(err)
        })
    },
    deleteJob: props => jobId => {
      const { firestore, showError, showSuccess } = props
      return firestore
        .delete({ collection: 'jobs', doc: jobId })
        .then(() => showSuccess('Job deleted successfully'))
        .catch(err => {
          console.error('Error:', err) // eslint-disable-line no-console
          showError(err.message || 'Could not delete job')
          return Promise.reject(err)
        })
    },
    goToJob: ({ history }) => jobId => {
      history.push(`${JOBS_PATH}/${jobId}`)
    }
  }),
  withStyles(styles)
)
