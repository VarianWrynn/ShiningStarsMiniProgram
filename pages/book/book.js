import {
  BookModel
} from '../../models/book.js';

let bookModel = new BookModel();


// pages/book/book.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    bookModel.getHotList()
    .then(res=>{
      console.log(res);
      return bookModel.getMyBookCount();//這裡是解決問題的关键，这里应该把第二次函数调用的Promise返回去
    })
    .then(res=>{ //在最外层接收   bookModel.getMyBookCount() 返回的Promise
      console.log(res);
      return bookModel.getMyBookCount();
    })
    .then(res=>{
      console.log(res);
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})