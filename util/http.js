import {config} from '../config.js'
class HTTP{
  //在类下面的我们通常不叫函数，而是叫方法
  request(params){
    if(!params.method){
      //如果调用方不传递method这默认赋于GET
      params.method="GET"
    }
    wx.request({
      url: config.api_base_url+ params.url,
      method:params.method,
      data:params.data,
      header:{
        'content-type':'application/json'
      },
      success:(res)=>{
        let code = res.statusCode.toString();
        if(code.startsWith('2')){ //startsWith & endsWith都是ES6的新特性,注意是start[s]With，有个[s],坑了一晚上！
          params.success(res.data);//把res对象返回给调用方
        }else{

        }
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  }
}

export { HTTP}