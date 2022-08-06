import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to='/profile'
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to='/messages'
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to='/users'
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to='/news'
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to='/music'
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to='/settings'
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
