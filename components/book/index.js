// components/book/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    book:Object //属性比较多的话，可以用Object把属性给封装起来
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    onTap(event){
      //onTap点击事件是用来监听并获取当前的书籍id，再把id传递给book-detaile页面 
      const bid = this.properties.book.book_id;
      wx.navigateTo({
        url: `/pages/book-detail/book-detail?bid=${bid}`
      })
      // 缺点：降低了组件的通用性，在点击的时候写死了页面跳转逻辑
      // 优点:非常方便，如果不在组件内部点击跳转，则需要使用组件通讯机制triggerEvent
      // 取舍：如果当前组件是服务于当前项目（项目组件）这允许在组件这样做
    }
  }
})
