'use strict'
/***
 * 封装请求方法
 */
class  Api{
  /**
   * 封装请求方法
   * @param method：请求类型
   * @param url: 请求url
   * @param data: 请求数据
   * @param header: 请求header 默认是'Content-Type': 'application/json'
   */
  static request({method, url, data, header = { 'Content-Type': 'application/json' }}){
     return new Promise((resolve, reject) => {
       const result = {}
       wx.request({
         method, url, data, header, 
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

  static transformRequest_formUrlencoded(){

  }
}

export default Api