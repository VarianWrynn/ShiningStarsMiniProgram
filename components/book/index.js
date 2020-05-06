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
    }
  }
})
