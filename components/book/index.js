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
      const bid = this.properties.book.book_id;
      wx.navigateTo({
        url: `/pages/book-detail/book-detail?bid=${bid}`
      })
      // 缺点：降低了组件的通用性
      // 有点:非常方便
      // 取舍：如果当前组件是服务于当前项目（项目组件）这允许在组件这样做
    }
  }
})
