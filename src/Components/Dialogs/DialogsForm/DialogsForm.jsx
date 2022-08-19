import React from 'react'
import { Field, reduxForm } from 'redux-form'

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={'textarea'}
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
