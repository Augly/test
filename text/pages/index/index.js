const util = require('../../utils/util.js')
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainHeight: 0,
    selectIndex: 0,
    list: ['会计/助理会计/出纳', '审计员/主管', '财务主管/经理', '预算专员/主管', '总会计师/财务总监', '风险管理/控制', '债券/证券交易', '投资分析员/经理', '融资/外汇专员']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  select(e) {
    this.setData({
      selectIndex: e.target.dataset.index,
    })
    app.globalData.one = e.target.dataset.item
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    util.rem(463, (res) => {
      this.setData({
        mainHeight: res
      })
    })
  },
  /**
   * 下一步
   */
  next() {
    wx.navigateTo({
      url: '/pages/indextwo/indextwo',
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
    return {
      title: '一键分析本命证书',
      path: '/page/index/index'
    }
  }
})