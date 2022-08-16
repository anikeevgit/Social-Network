// import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer'
// import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        updateUserStatus={props.updateUserStatus}
        status={props.status}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
