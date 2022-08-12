import { usersAPI } from '../Api/API'

const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING'

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, toFollow: true }
          }
          return u
        }),
      }
    }
    case UN_FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, toFollow: false }
          }
          return u
        }),
      }
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      }
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      }
    }
    case TOGGLE_IS_FOLLOWING: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter((id) => id !== action.userID),
      }
    }
    default:
      return state
  }
}

export const followSuccess = (userID) => ({ type: FOLLOW, userID })
export const unFollowSuccess = (userID) => ({ type: UN_FOLLOW, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})
export const setTotalUsersCount = (count) => ({
  type: SET_TOTAL_USERS_COUNT,
  count,
})
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})
export const toggleIsFollowing = (isFetching, userID) => ({
  type: TOGGLE_IS_FOLLOWING,
  isFetching,
  userID,
})

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
}
export const unFollow = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollowing(true, id))
    usersAPI.unFollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unFollowSuccess(id))
      }
      dispatch(toggleIsFollowing(false, id))
    })
  }
}
export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollowing(true, id))
    usersAPI.follow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(id))
      }
      dispatch(toggleIsFollowing(false, id))
    })
  }
}

export default usersReducer
