//Behavior是一个构造器，将构造一个行为，因此我们需要定义一个变量来接收它
let classicBeh = Behavior({
  properties:{
    img:String,
    content:String,
    /*用于指示当前类型，比如当前类型如果是音乐，则其他两种类型（电影/essay）隐藏。该属性会传导到组件的 index.wxxml中。
    之所以这样做是因为微信小程序自带的控件如view可以直接设置hidden="{{true}}",但是自定义属性直接使用hidden属性无法生效，
    因此需要通过properties来传导*/
    hidden:Boolean 
  },
  data:{

  },
  method:{

  }
})

export {classicBeh}