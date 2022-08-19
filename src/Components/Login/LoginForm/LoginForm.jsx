import React from 'react'
import s from '../Login.module.css'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'login'} component={'input'} name={'login'} />
      </div>
      <div>
        <Field placeholder={'password'} component={'input'} name={'password'} />
      </div>
      <div className={s.inpbox}>
        <Field type={'checkbox'} component={'input'} name={'rememberMe'} />
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
