import {HTTP} from '../util/http.js'

class LikeModel extends HTTP{

  like(behavior, sData){
    //console.log(behavior + artID + category);
    let url = behavior=='like'?'like':'like/cancel';
    this.request({
      url:url,
      method:'POST',
      data: sData
    })
  }

 //获取当前这个人对这个期刊的点赞状态，原因是其他数据在初次加载之后以后都是从缓存获取了，
 //但是唯独状态是不可以从缓存获取，否则容易出现逻辑混乱 2020-4-15
  getClassicLikeStatus(artID,category,sCallback){
    
    this.request({
      url:'classic/'+category+'/'+artID+'/favor',
      sucess:sCallback
    })
  }
}

export { LikeModel};