import {HTTP} from '../util/http.js'

class LikeModel extends HTTP{

  like(behavior,artID,category){
    //console.log(behavior + artID + category);
    let url = behavior=='like'?'like':'like/cancel';
    this.request({
      url:url,
      method:'POST',
      data:{
        art_id:artID,
        type:category
      }
    })
  }

  getClassicLikeStatus(artID,category,sCallback){
    this.request({
      url:'classic/'+category+'/'+artID+'/favor',
      sucess:sCallback
    })
  }
}

export { LikeModel};