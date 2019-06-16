import Api from '../request.js'
import config from '../../config/config.js'

const { gateway } = config
/**
 * 登录请求
 */
export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return Api.request({
    url: `${gateway}/login_in`,
    method: 'POST',
    data: Api.transformRequest_formUrlencoded(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
