'use strict'

import Api from '../request.js'
import config from '../../config/config.js'

const gateway = config.gateway
const BASE_URL_USER = `${gateway}/basic-service`;
/**
 * 登录请求
 */
export function loginByUsername(username, password){
   return Api.request({
     url: `${gateway}/login_in`,
     method: 'POST',
     data,
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
     },
   })
}