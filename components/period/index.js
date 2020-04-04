// components/period/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    index:{
      type:String,
      observer:function(newVal,oldVal,changePath){
        let val = newVal <10?'0'+newVal:newVal;
        console.log(val);
        this.setData({
          _index:val
        });
      }
    }
  },

  /**
   * Component initial data
   */
  data: {
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    year:0,
    month:"",
    _index:''
  },

  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();

      this.setData({
        year: year,
        month: this.data.months[month]
      });
    }
  },
  /**
   * Component methods
   */
  methods: {

  }
})
