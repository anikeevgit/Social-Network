import React from 'react'
import { connect } from 'react-redux'
import s from '../common/FormsControls/FormsControls.module.css'
import LoginReduxForm from './LoginForm/LoginForm'
import { login } from '../../redux/authReducer'
import { Navigate } from 'react-router-dom'

export const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Navigate replace to='/profile' />
  }

  return (
    <div>
      <h1 className={s.message}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
