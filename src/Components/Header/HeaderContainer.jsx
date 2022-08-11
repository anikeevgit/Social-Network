import * as axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { setAuthUserData, toggleIsFetching } from '../../Redux/authReducer'
import Header from './Header'

class HeaderContainer extends React.Component {
  componentDidMount() {
    // this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        // this.props.toggleIsFetching(false)
        if (response.data.resultCode === 0) {
          let { userId, login, email } = response.data.data
          this.props.setAuthUserData(userId, login, email)
        }
      })
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  isFetching: state.auth.isFetching,
})

export default connect(mapStateToProps, { setAuthUserData, toggleIsFetching })(
  HeaderContainer
)
