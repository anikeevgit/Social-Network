import { stopSubmit } from 'redux-form'
import { authAPI } from '../Api/API'

const SET_USER_DATA = 'SET-USER-DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      }
    }
    default:
      return state
  }
}

export const setAuthUserData = (id, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, login, email, isAuth },
})
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})

export const getAuthMe = () => {
  return (dispatch) => {
    authAPI.me().then((data) => {
      if (data.resultCode === 0) {
        console.log(data)
        let { id, login, email } = data.data
        dispatch(setAuthUserData(id, login, email, true))
      }
    })
  }
}

export const login = (email, password, rememberMe, isAuth) => (dispatch) => {
  dispatch(toggleIsFetching(true))
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      isAuth = true
      dispatch(toggleIsFetching(false))
      dispatch(setAuthUserData())
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : 'Some Error'
      dispatch(stopSubmit('login', { _error: message }))
    }
  })
}

export const logout = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(toggleIsFetching(false))
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
  }
}

export default authReducer
