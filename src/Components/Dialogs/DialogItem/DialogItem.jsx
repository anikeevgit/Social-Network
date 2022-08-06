import { NavLink } from 'react-router-dom'
import s from '../Dialogs.module.css'

const DialogItem = (props) => {
  const path = '/messages/' + props.id

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem
