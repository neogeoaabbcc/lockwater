// pages/save/save.js
  var app = getApp()
  var edit = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: edit,
    //获取手机屏幕高度
    top:0,
    none:"",
    show:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    var name = 1;
    var objEdit = {};
    let edit = [];
    let str
    const none="none"
    const show="block"
    //获取缓存数据
    wx.getStorage({
      key: "key",
      success: function(res) {
        str = res.data.edit
        objEdit={name:"key",value:str}
        edit.push(objEdit)
        that.setData({
          items: edit,
        })
        if(str != ""){
          that.setData({
            none:none,
            show:show
          })
        }
      },
    })
    //高度调用
    this.height();
  },
  //获取高度
  height:function(e){
    var that = this
    var top = {}
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          top: res.screenHeight-185
        })
      }  
    })
  },
  //获取edit页面
  onAddadr:function(e){
    wx.redirectTo({
      url: '../edit/edit',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 返回到login页面
  onReturn:function(e){
    wx.switchTab({
      url: '../login/login',
    })
  },
  //保存数据到login页面
  onStroage:function(e){
    wx.switchTab({
      url: "../login/login",
    })
  },
  //修改数据到edit页面
  onModify:function(e){
    wx.getStorage({
      key: 'key',
      success: function(res) {
        let obj = res.data;
        let users = obj.user;
        let phnumbers = obj.phnumber;
        let towels = obj.towel;
        let strees = obj.stree;
        let locations = obj.location;
        console.log(users + phnumbers + towels + strees + locations)
        wx.navigateTo({
          url: '../edit/edit?user='+users+'&phnumber='+phnumbers+'&towel='+towels+'&stree='+strees+'&location='+locations,
        })
      },
    })
  },


  radioChange:function(e){
  
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
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