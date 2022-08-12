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
        ...action.data,
        isAuth: true,
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

export const setAuthUserData = (userId, login, email) => ({
  type: SET_USER_DATA,
  data: { userId, login, email },
})
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})

export const getAuthMe = () => {
  return (dispatch) => {
    authAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        let { userId, login, email } = data.data
        dispatch(setAuthUserData(userId, login, email))
      }
    })
  }
}

export default authReducer
