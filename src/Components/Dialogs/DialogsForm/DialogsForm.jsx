import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLength, required } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

const maxLength50 = maxLength(50)

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength50]}
          name={'newMessageBody'}
          placeholder={'Enter your message'}
        />
      </div>
      <div>
        <button>SEND</button>
      </div>
    </form>
  )
}

const DialogsReduxForm = reduxForm({
  form: 'dialogAddMessage',
})(DialogsForm)

export default DialogsReduxForm
