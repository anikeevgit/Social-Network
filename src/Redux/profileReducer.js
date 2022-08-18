import { profileAPI } from '../Api/API'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const SET_STATUS = 'SET-STATUS'

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It`s my first post', likesCount: 11 },
  ],
  newPostText: '',
  profile: null,
  isFetching: false,
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    default:
      return state
  }
}
export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    profileAPI.getProfile(id).then((data) => {
      dispatch(toggleIsFetching(false))
      dispatch(setUserProfile(data))
    })
  }
}

export const getUserStatus = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    profileAPI.getStatus(id).then((data) => {
      dispatch(toggleIsFetching(false))
      dispatch(setStatus(data))
    })
  }
}
export const updateUserStatus = (status) => {
  return (dispatch) => {
    // dispatch(toggleIsFetching(true))
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        // dispatch(toggleIsFetching(false))
        dispatch(setStatus(status))
      }
    })
  }
}

export default profileReducer
