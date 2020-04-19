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
    onPlay: function(event) {

      if (!this.data.playing) {
        //首先切换图片为pause
        this.setData({
          playing: true
        });
        mMgr.title = "Lee's playing"; //必填
        mMgr.src = "https://www.tmclee.com/Lee/lee.m4a";
      } else {
        this.setData({
          playing: false
        });
        mMgr.pause();
      }
    }
  }
})