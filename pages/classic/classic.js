import {ClassicModel} from '../../models/classic.js';
import { LikeModel } from '../../models/like.js';

let classicModel = new ClassicModel();
let likeModel = new LikeModel();

// pages/classic/classic.js
Page({

  /**
   * Page initial data
   */
  data: {
    classicData:null
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    classicModel.getLatest((res)=>{
      //console.log(res[0].temperatureC);
      this.setData({      //通过setData做【数据绑定】
        classicData:res 
      })
    });
  },

  onLike:function(event){
    //console.log(event);
    let behavior =event.detail.behavior;
    likeModel.like(behavior,this.data.classicData.id,this.data.classicData.type);
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {
    // console.log(this.data.name) //输出Lee
    // wx.request({
    //   url: 'https://localhost:5001/weatherforecast',
    //   success: (res) => {
    //     console.log(this.data.name) 
    //     console.log(res);
    //   }
    // })
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})