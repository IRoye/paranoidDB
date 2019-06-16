'use strict'
/** *
 * 封装请求方法
 */
class Api {
  /**
   * 封装请求方法
   * @param method：请求类型
   * @param url: 请求url
   * @param data: 请求数据
   * @param header: 请求header 默认是'Content-Type': 'application/json' */
  static request({
    method,
    url,
    data,
    header = {
      'Content-Type': 'application/json'
    }
  }) {
    return new Promise((resolve, reject) => {
      const result = {}
      wx.request({
        method,
        url,
        data,
        header,
        success: (res) => {
          result.success = res.data
        },
        fail: (error) => {
          result.fail = error
        },
        complete: () => {
          if (response.success) {
            resolve(response.success)
          } else {
            reject(response.fail)
          }
        }
      })
    })
  }
  /**
   * POST 提交数据方式， application/x - www - form - urlencoded * 将post的数据转换成title = test & sub % 5B % 5D = 1 & sub % 5B % 5D = 2 & sub % 5B % 5D = 3的形式 * @param { * }data 需要POST的数据 */
  static transformRequest_formUrlencoded(data) {
    let ret = ''
    for (const it in data) {
      ret += `${encodeURIComponent(it)} = ${encodeURIComponent(data[it])}` + '&'
    }
    return ret
  }
}

export default Api
