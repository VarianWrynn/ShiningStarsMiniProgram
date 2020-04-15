import {classicBeh} from '../classic-beh.js'
Component({
  /**
   * Component properties
   */
  behaviors: [classicBeh],
  properties: {
    src:String
  },

  /**
   * Component initial data
   */
  data: {
    pauseSrc:'images/player@pause.png',
    playSrc:'images/player@play.png'
  },

  /**
   * Component methods
   */
  methods: {
    onPlay:function(event){
      //首先切换图片为pause
      
    }
  }
})
