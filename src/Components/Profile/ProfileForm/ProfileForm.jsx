import React from 'react'
// import s from '../Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { required, maxLength } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

const maxLength10 = maxLength(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name='newPostText'
          validate={[required, maxLength10]}
          component={Textarea}
          placeholder={'Что у вас нового?'}
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
