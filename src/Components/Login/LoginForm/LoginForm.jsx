import React from 'react'
import s from '../Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/FormsControls'
import { required } from '../../../utils/validators/validators'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={'login'}
          component={Input}
          name={'login'}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={'password'}
          component={Input}
          name={'password'}
          validate={[required]}
        />
      </div>
      <div className={s.inpbox}>
        <Field type={'checkbox'} component={Input} name={'rememberMe'} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)

export default LoginReduxForm
