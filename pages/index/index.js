//index.js
const util = require('../../utils/util.js')

const types = ['国内', '国际', '财经', '娱乐', '军事', '体育', '其它']
const typesMap = {'国内': 'gn', '国际': 'gj', '财经': 'cj', '娱乐': 'yl', '军事': 'js',
                  '体育': 'ty', '其它': 'other'}

Page({
  data: {
    currentType: '国内',
    typeList: types,
    newsList: []
  },
  onLoad() {
    this.getNews()
  },
  onPullDownRefresh() {
    this.getNews(() => {
      wx.stopPullDownRefresh()
    })
  },
  onTapType(event) {
    let t = event.currentTarget.id
    this.setData({
      currentType: t
    })
    this.getNews()
  },
  onTapDetail(event) {
    let id = event.currentTarget.id
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id
    })
  },
  getNews(callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: typesMap[this.data.currentType]
      },
      success: res => {
        let result = res.data.result
        this.setNewsList(result)
      },
      complete: () => {
        callback && callback()
      }
    })
  },
  setNewsList(result) {
    result.forEach((item) => {
      item.time = util.dateToTime(item.date)
      if (item.source == "") {
        item.source = "本站资讯"
      }
    })
    this.setData({
      newsList: result
    })
  }
})
