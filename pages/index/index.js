//index.js
const types = ['国内', '国际', '财经', '娱乐', '军事', '体育', '其它']

Page({
  data: {
    currentType: '国内',
    typeList: types,
  },
  onLoad() {
    console.log(this.data.currentType)
  },
  onTapType() {
  }
})
