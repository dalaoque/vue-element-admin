import request from '@/utils/request'
import qs from 'qs'

export function Login({ mobile, password, platform }) {
  const data = {
    mobile,
    password,
    platform
  }

  return request({
    url: '/honghe/v1/account/admin/login',
    method: 'post',
    data: qs.stringify(data)
  })
}
