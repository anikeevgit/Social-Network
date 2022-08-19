import React from 'react'
import Post from '../Post/Post'
import ProfileReduxForm from '../ProfileForm/ProfileForm'
import s from './MyPosts.module.css'

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ))

  // let newPostElement = React.createRef()

  const addNewPost = (formData) => {
    props.addPost(formData.newPostText)
  }
  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <ProfileReduxForm onSubmit={addNewPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
