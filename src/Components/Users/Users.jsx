import React from 'react'
import * as axios from 'axios'
import s from './Users.module.css'
import default_photo from '../../assets/images/4.png'

class UsersC extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    let curP = this.props.currentPage
    let curPF = curP - 5 < 0 ? 0 : curP - 5
    let curPL = curP + 5
    let slicedPages = pages.slice(curPF, curPL)
    return (
      <div className={s.usersBody}>
        <div>
          {slicedPages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p ? s.selectedPage : ''}
                onClick={() => {
                  this.onPageChanged(p)
                }}
              >
                {p}
              </span>
            )
          })}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  className={s.userPhoto}
                  src={u.photos.small != null ? u.photos.small : default_photo}
                  alt='user_avatar'
                />
                {/* <img className={s.userPhoto} src={u.photoUrl} alt='user_avatar' /> */}
              </div>
              <div>
                {u.toFollow ? (
                  <button
                    onClick={() => {
                      this.props.unFollow(u.id)
                    }}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id)
                    }}
                  >
                    FOLLOW
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                {/* <div>{u.fullName}</div> */}
                <div>{u.status}</div>
              </span>
              <span>
                {/* <div>{u.location.country}</div>
                <div>{u.location.city}</div> */}
              </span>
            </span>
          </div>
        ))}
      </div>
    )
  }
}

export default UsersC
