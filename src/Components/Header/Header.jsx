import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        className={s.logo}
        src='https://i.pinimg.com/originals/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc.png'
        alt='logo'
      />

      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header
