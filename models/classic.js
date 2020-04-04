import {HTTP} from '../util/http.js'
class ClassicModel extends HTTP{
  getLatest(sCallback) {//sCallback回调函数，客户端调用的时候当做一个参数传递进来
    //因为继承了HTTP类，所以不需要再实例化 new HTTP了，直接this调用
    this.request({ 
      url: 'Classic',
      success: (res) => {
        sCallback(res)//这里把传递进来的函数再（带上res）传递回去,所以叫【回调函数】
      }
    })
  }
}

export {ClassicModel}