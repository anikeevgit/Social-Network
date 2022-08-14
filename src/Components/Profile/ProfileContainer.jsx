import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profileReducer'
import { useParams } from 'react-router-dom'
import Preloader from '../Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
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
  }
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Profile {...this.props} profile={this.props.profile} />
        )}
      </>
    )
  }
}

let authRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isFetching: state.profilePage.isFetching,
})

export default connect(mapStateToProps, {
  getUserProfile,
})(withRouter(authRedirectComponent))
