import ajax from '@/libs/ajax'

const apiUser = {
  getUserInfo: params =>
    ajax.request({
      url: '/api/user/info',
      method: 'get',
      params
    }),
  addUserInfo: data =>
    ajax.request({
      url: '/api/user/info',
      method: 'post',
      data
    })
}

export default apiUser
