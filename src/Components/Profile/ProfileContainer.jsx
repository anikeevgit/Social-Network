import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from '../../redux/profileReducer'
import { useParams } from 'react-router-dom'
import Preloader from '../common/Preloader/Preloader'
// import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
// import { profileAPI } from '../../Api/API'

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let params = useParams()
    return <Component {...props} router={{ params }} />
  }
  return ComponentWithRouterProp
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = 25249
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateUserStatus={this.props.updateUserStatus}
          />
        )}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isFetching: state.profilePage.isFetching,
  status: state.profilePage.status,
})

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer)
