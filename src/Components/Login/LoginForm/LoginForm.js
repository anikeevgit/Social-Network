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
          placeholder={'email'}
          component={Input}
          name={'email'}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={'password'}
          component={Input}
          name={'password'}
          validate={[required]}
          type={'password'}
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
