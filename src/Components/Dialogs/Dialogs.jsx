import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { Navigate } from 'react-router-dom'
import DialogsReduxForm from './DialogsForm/DialogsForm'

const Dialogs = (props) => {
  let state = props.dialogsPage

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ))

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ))

  // let newMessageBody = state.newMessageBody

  if (!props.isAuth) return <Navigate to={'/login'} />

  const addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageBody)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <DialogsReduxForm onSubmit={addNewMessage} />
    </div>
  )
}

export default Dialogs
