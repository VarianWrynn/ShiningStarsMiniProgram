// pages/classic/classic.js
Page({

  /**
   * Page initial data
   */
  data: {
    name: "Lee"
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {
    console.log(this.data.name) //输出Lee
    wx.request({
      url: 'https://localhost:5001/weatherforecast',
      header: {
        appKey: "KOLDaSADSDLWWbF1"
      },
      success: (res) => {
        console.log(this.data.name) //报错，this未定义
        console.log(res);
      }
    })
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