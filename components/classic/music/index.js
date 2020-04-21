import {
  classicBeh
} from '../classic-beh.js'

/* 获取全局唯一的背景音频管理器。 小程序切入后台，如果音频处于播放状态，可以继续播放。但是后台状态不能通过调用API操纵音频的播放状态。

从微信客户端6.7.2版本开始，若需要在小程序切后台后继续播放音频，需要在 app.json 中配置 requiredBackgroundModes 属性。开发版和体验版上可以直接生效，正式版还需通过审核。 */
const mMgr = wx.getBackgroundAudioManager();

Component({
  /**
   * Component properties
   */
  behaviors: [classicBeh],
  properties: {
    src: String
  },

  lifetimes: {
    attached: function (event) {
      // 在组件实例进入页面节点树时执行
      //  this.method._recoverStatus();这种调用方式会报错
      //this.methods._recoverStatus();

      console.log("exe attached");
      this._recoverStatus();
    },
    detached: function (event) {
      // 在组件实例被从页面节点树移除时执行

      /*设置当前页面消失的时候停止播放音乐,但是由于父页面使用是hidden属性来隐藏当前组件，因此是不会触发detached函数，但是如果设置为wx:if是可以触发该函数*/
      //mMgr.stop()
      console.log("exe detached");
    },
  },

  /**
   * Component initial data
   */
  data: {
    playing: false, //默认不播放
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png'
  },

  /**
   * Component methods
   */
  methods: {
    onPlay: function (event) {
      //console.log("exeting onPlay");
      if (!this.data.playing) {
        //首先切换图片为pause
        //console.log("-- exeting onPlay set playing is true;");
        this.setData({
          playing: true
        });
        mMgr.title = "Lee's playing"; //必填
        mMgr.src = "https://www.tmclee.com/Lee/lee.m4a";
      } else {
        //console.log("-- exeting onPlay set playing is flase and pause music;");
        this.setData({
          playing: false
        });
        mMgr.pause();
      }
    },

    _recoverStatus: function () {
      console.log("exe _recoverStatus")
      if(mMgr.pause){ //如果当前没有背景音乐
        this.setData({
          playing:false
        })
       // return; //设置完则直接返回不执行后续代码，否则可能会执行后续的代码
      }
      console.log("mMgr.src= "+mMgr.src)
      console.log("properties.src= "+this.properties.src)
      if(mMgr.src == this.properties.src){ //当前播放的音乐就是Music组件所展示的音乐
      
        this.setData({
          playing:true
        })
      }
    }

  }
})