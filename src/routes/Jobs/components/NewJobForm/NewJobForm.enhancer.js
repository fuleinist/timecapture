import { compose } from 'redux'
import { withHandlers } from 'recompose'
import { reduxForm } from 'redux-form';
import { formNames } from 'constants'

export default compose(
  // Add handlers as props
  withHandlers({
    onSubmit: props => formValues => {
      console.log('prop values:', props)
      console.log('form values:', formValues) // eslint-disable-line no-console
    }
  }),
  // Add form capabilities (incsluding submit and validation handling)
  reduxForm({ form: formNames.newJobForm || 'newJobForm' }),
)
