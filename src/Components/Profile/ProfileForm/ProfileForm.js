import React from 'react'
// import s from '../Login.module.css'
import { Field, reduxForm } from 'redux-form'

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component='textarea'
          name='newPostText'
          placeholder='Что у вас нового?'
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const ProfileReduxForm = reduxForm({
  form: 'profileAddPost',
})(AddNewPostForm)

export default ProfileReduxForm
