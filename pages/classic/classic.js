import {
  ClassicModel
} from '../../models/classic.js';
import {
  LikeModel
} from '../../models/like.js';

let classicModel = new ClassicModel();
let likeModel = new LikeModel();

// pages/classic/classic.js
Page({

  /**
   * Page initial data
   */
  data: {
    classicData: null,
    latest: true,
    first: false,
    likeCount: 0, //从classicData中单独提取出来以方便上下翻页的时候更新（否则会取缓存数据)，那么wxml页面的字段绑定也要随之更新。 2020-4-9 12:47:50
    likeStatus: false //从classicData中单独提取出来
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    classicModel.getLatest((res) => {
      // this._getLikeStatus(res.id,res.type);like和count已经在回调函数中存在了，这里不需要掉这个请求，能少发送一个请求就少向服务器发送一个请求。
      //console.log(res[0].temperatureC);
      this.setData({ //通过setData做【数据绑定】
        // ...res 通过3个点达到对res内容的拓展，这就是拓展运算符，在wxml页面访问该变量就不需要以
        // classicData.image 形式访问，而是可以直接image来访问其内部成员, 扩展运算符是ES6新特性
        classicData: res,
        likeCount:res.fav_nums,
        likeStatus:res.like_status
      })
    });
  },

  onLike: function(event) {
    //console.log(event);
    let behavior = event.detail.behavior;
    //likeModel.like(behavior, this.data.classicData.id, this.data.classicData.type);
    var sData = {
      //Id: this.data.classicData.like_id,
      Jornal_Id: this.data.classicData.index,
      Member_Id: 1
    };
    //likeModel.like(behavior, this.data.classicData.like_id);
    likeModel.like(behavior, sData);
  },

  onPrevious: function() {
    this._updateClassic('previous');
  },

  onNext: function() {
    this._updateClassic('next');
  },

  _updateClassic: function(nextOrPrevious) {
    let index = this.data.classicData.index;
    classicModel.getClassic(index, nextOrPrevious, (res) => {
      console.log(res);
      this._getLikeStatus(res.id,res.type);
      this.setData({
        classicData: res,
        
        likeCount: res.fav_nums,
        likeStatus: res.like_status,
        //更新latest和first属性
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  },

  _getLikeStatus: function(artId, category) {
    likeModel.getClassicLikeStatus(artId, category,
      (res) => {
        this.setData({
          likeCount: this.res.fav_nums,
          likeStatus: this.res.like_status
        })
      })
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