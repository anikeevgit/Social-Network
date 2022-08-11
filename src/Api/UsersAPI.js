import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '7cd5013f-2384-47a4-9824-a3fc25e74bbf',
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data)
  },
  follow(id) {
    return instance.post(`follow/${id}`, {}).then((response) => response.data)
  },
}
