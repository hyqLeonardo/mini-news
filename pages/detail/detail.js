// pages/detail/detail.js
const util = require('../../utils/util.js')

Page({
  data: {
    id: 0,
    detail: ''
  },
  onLoad(options) {
    this.setData({
      id: options.id
    })
    this.getDetail()
  },
  getDetail() {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        id: this.data.id
      },
      success: res => {
        let detail = res.data.result
        if (detail.source == "")
          detail.source = "本站资讯"
        detail.time = util.dateToTime(detail.date)
        console.log(detail.content)
        this.setData({
          detail: detail
        })
      }
    })
  }
})