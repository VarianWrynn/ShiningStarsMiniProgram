import {HTTP} from '../util/http.js'
class ClassicModel extends HTTP{
  getLatest(){
    //因为继承了HTTP类，所以不需要再实例化 new HTTP了，直接this调用
    this.request({ 
      url: 'weatherforecast',
      success: (res) => {
        console.log(res);
      }
    })
  }
}