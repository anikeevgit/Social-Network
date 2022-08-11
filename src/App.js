import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ProfileContainer from './Components/Profile/ProfileContainer'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsersContainer from './Components/Users/UsersContainer'
import HeaderContainer from './Components/Header/HeaderContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/messages' element={<DialogsContainer />} />
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/profile/' element={<ProfileContainer />} />
            <Route path='/users' element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
