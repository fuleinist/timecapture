import { compose } from 'redux'
import { connect } from 'react-redux'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'

export default compose(
  // create listener for log, results go into redux
  firestoreConnect([{ collection: 'log' }]),
  // map redux state to props
  connect(({ firestore: { data } }) => ({
    log: data.log
  }))
)
