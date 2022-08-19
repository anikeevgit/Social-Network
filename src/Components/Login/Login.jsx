import React from 'react'
import s from './Login.module.css'
import LoginReduxForm from './LoginForm/LoginForm'

export const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <div>
      <h1 className={s.message}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
