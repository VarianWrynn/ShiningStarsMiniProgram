import {classicBeh} from '../classic-beh.js'
Component({
  /**
   * Component properties
   */

  /*behavior 如果有多个继承，之类会覆盖所有父类的属性；父类中如果定义了多个相同的属性，
  则会以最后一个父类为准； 如果是生命周期函数，则不会发生覆盖，而是会组个执行所有的函数，
  最后再执行之类的生命周期函数*/
  behaviors: [classicBeh],
  properties: {
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

  }
})
