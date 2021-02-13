import {HTTP}  from '../util/http.js'

import {config}  from '../config.js';

class ClassicModel extends HTTP{

  getLatest(sCallback) {//sCallback回调函数，客户端调用的时候当做一个参数传递进来
    //因为继承了HTTP类，所以不需要再实例化 new HTTP了，直接this调用
    this.request({ 
      url: 'Classic',
      success: (res) => {
        
        //res.image = config.api_base_url+ res.image;

        sCallback(res)//这里把传递进来的函数再（带上res）传递回去,所以叫【回调函数】

        this._setLatestIndex(res.index);

        let key= this._getKey(res.index);//每次请求最新一期的数据，则都往缓存里面塞

        wx.setStorageSync(key, res);
      }
    })
  }

  getClassic(index,nextOrPrevious,sCallback){
    //客户端调用根本不用关心是从服务器获取的还是从缓存中获取的，因为这些细节被封装在这个方法中了。
    let key = nextOrPrevious=="next"? this._getKey(index+1):this._getKey(index -1); 
    let classic =wx.getStorageSync(key);//从缓存中寻找
    if(!classic){ //如果缓存中没找到则向服务器发送请求
    this.request({
      // url: 'Classic/' + index + '/' + nextOrPrevious,
      url: `Classic/${index}/${nextOrPrevious}`,
      success:(res=>{
        wx.setStorageSync(this._getKey(res.index),res);//把当前请求到的数据写入到缓存中
        sCallback(res);     
      })
    })
    }
    else{
      sCallback(classic);
    }
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

  _getKey(index){
    let key = 'Classic-'+index;
    return key;
  }
}

export {ClassicModel}