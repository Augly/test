const util=require('../../utils/util.js')
let app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainHeight:0,
    selectIndex:0,
    list: ['1-3年', '3-5年', '5-7年', '7-10年', '10-15年','15年以上']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  select(e){
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
  next(){
    wx.navigateTo({
      url: '/pages/result/result',
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