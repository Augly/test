const util = require('../../utils/util.js')
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myheight: '',
    mywidth:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
   
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          systemInfo: res,
          mywidth: res.windowWidth,
          myheight: res.windowHeight,
          imgsrc: app.globalData.imgurl
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})