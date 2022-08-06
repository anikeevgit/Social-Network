import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <img
          className={s.logo}
          src='https://i.pinimg.com/originals/73/db/97/73db97c0c4a9c9b009d69f21ea48ecdc.png'
          alt='logo'
        />
      </div>
    </header>
  )
}

export default Header
