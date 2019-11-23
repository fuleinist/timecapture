import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import classes from './NewJobForm.scss'

function NewJobForm({ handleSubmit, submitting, pristine }) {
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Field component={TextField} name="someInput" floatingLabelText="Some Input" />
      <RaisedButton
        type="submit"
        primary
        label="Save"
        disabled={pristine || submitting}
      />
    </form>
  )
}

NewJobForm.propTypes = {
  submitting: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  handleSubmit: PropTypes.func.isRequired // from enhancer (reduxForm)
}

export default NewJobForm
