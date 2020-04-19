// components/nav/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    title: String,
    first: Boolean,
    latest: Boolean
  },

  /**
   * Component initial data
   */
  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    leftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png'
  },

  /**
   * Component methods
   */
  methods: {
    onLeft: function(event) { //监听上一页 事件，该事件绑定写在wxml中
      if (!this.properties.latest) { //如果当前点击的不是最新的一期才会触发 左边 按钮事件
        this.triggerEvent('left', {}, {});
      }

    },

    onRight: function(event) { //监听下页 事件
      if(!this.properties.first) { //如果当前不是最老的一期，才会触发 右边 按钮事件 
        this.triggerEvent('right', {}, {})
      }
    },
  }
})