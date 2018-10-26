import request from '@/utils/request'

export function Login(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/honghe/v1/account/admin/login',
    method: 'post',
    data
  })
}
