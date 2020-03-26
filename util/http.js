import {config} from '/config.js'
class HTTP{
  //在类下面的我们通常不叫函数，而是叫方法
  request(params){
    if(!params.method){
      //如果调用方不传递method这默认赋于GET
      params.method="GET"
    }
    wx.request({
      url: params.url,
      method:params.method,
      data:params.data,
      header:{
        'content-type':'application/json',
        'appkey':config.appkey
      },
      success:(res)=>{
        let code = res.statusCode;
        if(code.startWith('2')){ //startWith & endWith都是ES6的新特性

        }else{

        }
      },
      fail:(err)=>{

      }
    })
  }
}