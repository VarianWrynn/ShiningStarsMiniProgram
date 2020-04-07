import {HTTP} from '../util/http.js'
class ClassicModel extends HTTP{

  getLatest(sCallback) {//sCallback回调函数，客户端调用的时候当做一个参数传递进来
    //因为继承了HTTP类，所以不需要再实例化 new HTTP了，直接this调用
    this.request({ 
      url: 'Classic',
      success: (res) => {
        sCallback(res)//这里把传递进来的函数再（带上res）传递回去,所以叫【回调函数】

        this._setLatestIndex(res.index);
      }
    })
  }

  getClassic(index,nextOrPrevious,sCallback){
    this.request({
      url: 'Classic/' + index + '/' + nextOrPrevious,
      // data: {
      //   index: index
      // },
      success:(res=>{
        sCallback(res);
      
      })
    })
  }


  isFirst(index){
    return index ==1? true:false
  }

  isLatest(index){
    let latestIndex = this._getLatestIndex();

    //判断传递进来的index是否等于最新的index,如果是，这表示当前是最新的一期，因此向左的按钮要disabled
    return latestIndex ==index ? true:false;
  }

  _setLatestIndex(index){
    wx.setStorageSync('latest', index);//key-value
  }

  _getLatestIndex(){
    let index =  wx.getStorageSync('latest');
    return index;
  }
}

export {ClassicModel}