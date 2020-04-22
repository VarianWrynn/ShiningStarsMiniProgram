import {
  config
} from '../config.js'

const tips = {
  1: '网络出现错误，请稍后再刷新',
  1005: 'appkey无效',
  3000: '期刊不存在'
}

class HTTP {
  //request(url,data={},method='GET'){
    request({url,data={},method='GET'}){ //这种传递方式在ES里面叫 【解构】，ES里有对象解构，数组解构等。这种好处是参数既是一个对象，同时对象里面又标明了参数的顺序与类型，方便后期代码维护
   return new Promise((resolve, reject)=>{
      this._request(url,resolve,reject,data,method);
    })
  }
  
  //这种明确参数的写法比只传递一个params方法好很多，有利于后期（别人）代码的维护
  _request(url,resolve,reject,data={},method='GET') {//必填参数必须在默认参数之前，这个是设计原则
    wx.request({
      url: config.api_base_url + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        const code = res.statusCode.toString(); //能用const则不要用let
        if (code.startsWith('2')) { 
          resolve(res.data);//使用resolve来改变状态
        } else {
          reject();//这里的reject不需要传任何的参数，告诉promose状态要改变，不能一直是【进行中】
          let error_code = res.data.error_code;
          this._show_error(error_code);
        }
      },
      fail: (err) => {
        reject();//告诉promise更改状态
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