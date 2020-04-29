import {
  config
} from '../config.js'

const tips = {
  1: '网络出现错误，请稍后再刷新',
  1005: 'appkey无效',
  3000: '期刊不存在'
}

class HTTP {
  //在类下面的我们通常不叫函数，而是叫方法
  request(params) {
    if (!params.method) {
      //如果调用方不传递method这默认赋于GET
      params.method = "GET"
    }
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: JSON.stringify(params.data),
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        let code = res.statusCode.toString();
        if (code.startsWith('2')) { //startsWith & endsWith都是ES6的新特性,注意是start[s]With，有个[s],坑了一晚上！
          //params.success(res.data); //把res对象返回给调用方

          /*以下这种写法是先判断param.sucess是否为空，如果不为空再给回调函数复制；原因是有的地方继承
          并调用了http.js方法，但是不需要传递回调函数进来，因此需要对这种情况进行判断 2020年4月4日*/
          res.data.image && (res.data.image =  config.api_base_url +res.data.image)
          params.success && params.success(res.data);
        } else {
          let error_code = res.data.error_code;
          this._show_error(error_code);
        }
      },
      fail: (err) => {
        this._show_error(1);
      }
    })
  }

  _show_error(error_code) {
    if (!error_code) {
      error_code = 1;
    }
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }


}

export {
  HTTP
}