const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
function rem(height, successData) {
  //获取设备信息
  wx.getSystemInfo({
    success: (res) => {
      //判断是否传入高度
      if (height != null && height != undefined && height != '') {
        //如果传入高度则用设备的高度减去设备宽度除以设计图的宽度750再乘以传参进来的高度
        var myheight = res.windowHeight - res.windowWidth / 750 * height
      } else {
        //如果没有传入高度则直接等于设备高度
        var myheight = res.windowHeight
      }
      //调用成功函数并把算出来的高度传出去
      successData(myheight)
    },
    fail: function (res) { },
    complete: function (res) { },
  })
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  rem: rem
}
