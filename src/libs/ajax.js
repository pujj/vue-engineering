import axios from 'axios'
import { Message } from 'element-ui'

function messageError (msg = '未知异常') {
  Message.error({
    message: msg,
    duration: 1500
  })
}
const transformRequest = data =>
  data instanceof FormData ? data : JSON.stringify(data)

axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.transformRequest = [transformRequest]
axios.defaults.timeout = 10000

if (process.env.NODE_ENV === 'production') {
  // prevent CSRF attack
  axios.defaults.headers['X-CSRF-TOKEN'] = window.csrfToken
}

class Ajax {
  constructor () {
    this.queue = {}
  }

  destroy (url) {
    delete this.queue[url]
  }

  interceptors (instance, url) {
    // ajax global exception process
    instance.interceptors.response.use(
      ({ data = {}, request }) => {
        // 提前销毁重复请求
        this.destroy(url)
        // 业务状态码及URL校验
        if (!data.success) {
          let msg = data.msg
          if (!msg) {
            msg = '数据获取异常'
          }
          messageError(msg)
        }
        return data
      },
      error => {
        messageError('服务器异常')
        return Promise.reject(error)
      }
    )
    instance.interceptors.request.use(function (config) {
      return config
    })
  }

  request (options) {
    const instance = axios.create()
    this.interceptors(instance)
    options = Object.assign({}, options)
    this.queue[options.url] = instance
    return instance(options)
  }
}

export default new Ajax()
