/** lgoin.js **/
var app = getApp();
Page({
  data:{
    edit:"",
    length:0,
    //产品
    productArray: [["指纹密码锁","智能家居", "酒店管理系统"],["必达i8","必达i2","必达i1","必达g3","必达v3"]],
    productIndex: [0, 0],
    //时间选择
    date:"2017-01-01"
  },
  onEdit:function(e){
    wx.navigateTo({
      url: '../save/save',
    })
  },
  onLoad:function(e){
    let that = this;
    wx.getStorage({
      key: 'key',
      success: function (res) {
        let length = 1
        var str = res.data.edit
        console.log(str.length)
        if (length == str.length) {
          that.setData({
            edit: str,
            length: 1
          })
        } else {
          that.setData({
            edit: "",
            length: 0
          })
        }
      },
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(e){
    // 页面显示
    let that = this;
    wx.getStorage({
      key: 'key',
      success: function (res) {
        let length = 1
        var str = res.data.edit
        console.log(str.length)
        if (length == str.length) {
          that.setData({
            edit: str,
            length:1
          })
        }else{
          that.setData({
            edit:"",
            length:0
          })
        }
      },
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindChange:function(e){
    console.log("获取产品的值为:"+e.detail.value)
    this.setData({
      productIndex:e.detail.value
    })
  },
  bindColumnChange:function(e){
    console.log("productIndex的值为：" + e.detail.value)
    console.log("productArray的值为：" + e.detail.column)
    var data ={
      productIndex: this.data.productIndex,
      productArray: this.data.productArray
    };
    data.productIndex[e.detail.column] = e.detail.value
    switch (e.detail.column){
      case 0 :
        switch(data.productIndex[0]){
          case 0:
            data.productArray[1] = ["必达i8", "必达i2", "必达i1", "必达g3", "必达v3"]
            break;
          case 1:
            data.productArray[1] = ["窗户", "灯光", "安防", "家电", "影音"]
            break;
          case 2:
            data.productArray[1] = ["管理","微信"]
            break;
        }
      break;
    }
    this.setData(data)
  },
  formSubmit:function(e){
    let result = this.data.productArray[][this.data.productIndex[]]
    console.log('form发生了submit事件，携带数据为：',e.detail.value.selector)
    console.log("第一个picker为",result)
  }
})