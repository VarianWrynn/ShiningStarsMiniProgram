// components/like/index.js
Component({
  /**
   * Component properties
   * 这里面的数据是对外开放的
   */
  properties: {
    like:{
      type:Boolean,
      value:false,
      observe:function(){}
    },
    count:{
      type:Number,
      value:0
    }
  },

  /**
   * Component initial data
   * 这里面的数据是不对外开放，仅仅提供给内部使用的
   */
  data: {
    truScr: 'images/like.png',
    falseSrc: 'images/like@dis.png'
  },

  /**
   * Component methods
   */
  methods: {
    onLike:function(event)
    {
      /*bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡。*/
      //console.log(event);

      let like = this.properties.like;
      let count = this.properties.count;

      count = like?count-1:count+1;

      this.setData({ //调用setData方法来设置/更新属性里面的值
        count:count,
        like:!like //点击由于喜欢变成不喜欢，或者不喜欢变成喜欢
      })
    }
  }
})
