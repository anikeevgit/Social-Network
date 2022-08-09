import React from 'react'
import Profile from './Profile'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../Redux/profileReducer'
import { useParams } from 'react-router-dom'

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
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        // this.props.toggleIsFetching(false)
        this.props.setUserProfile(response.data)
        // this.props.setTotalUsersCount(response.data.totalCount)
      })
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {
  setUserProfile,
})(withRouter(ProfileContainer))
