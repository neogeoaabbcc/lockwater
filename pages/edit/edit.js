// pages/edit/edit.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array:["内江市市中区","内江市东兴区","内江市资中县","内江市威远县","内江市隆昌市"],
    index:0,
    userName:"",
    phNumber:"",
    towel:"",
    stree:"",
    location:"",
    userNames: "",
    phNumbers: "",
    towels: "",
    strees: "",
    locations: "",
    edit:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    this.setData({
      userNames: e.user,
      phNumbers: e.phnumber,
      towels: e.towel,
      strees: e.stree,
      locations: e.location,
    })
    let users = this.data.userNames;
    let phones = this.data.phNumbers;
    let towels = this.data.towels;
    let strees = this.data.strees;
    let locations = this.data.locations
    this.setData({
      userName: users,
      phNumber: phones,
      towel: towels,
      stree: strees,
      location: locations
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  onUser:function(e){
    this.setData({
      userName:e.detail.value
    })
  },
  onNumber:function(e){
    this.setData({
      phNumber: e.detail.value
    })
  },
  onTowel:function(e){
    this.setData({
      towel: e.detail.value
    })
  },
  onStree:function(e){
    this.setData({
      stree: e.detail.value
    })
  },
  onLocation:function(e){
    this.setData({
      location: e.detail.value
    })
  },
  bindPickerChange:function(e){
    this.setData({
      index: e.detail.value
    })
  },
  onAppoint:function(e){
    let rename = /^[\u4e00-\u9fa5]+$/;
    let re = /^[A-Za-z\u4e00-\u9fa5]+$/;
    let rephone = /^1[134578]\d{9}$/;
    let index = this.data.index,
      array = this.data.array,
      user = this.data.userName,
      phnumber = this.data.phNumber,
      towel = this.data.towel,
      stree = this.data.stree,
      location = this.data.location;
    let obj = {};
    let str = "名字：" + user + "\xa0\xa0\xa0电话：" + phnumber + "\n详细地址:" + array[index] + towel + stree + location;
    let edit = this.data.edit
    let key = edit.length.toString()
    //正则判断输入值是否正确然后弹出提示框
    if(user==""||stree==""||location==""){
      wx.showToast({
        title: '输入框不能为空',
        icon:"loading",
        duration:2000
      })
      return false;
    }
    if(!rename.test(user)){
      wx.showToast({
        title: "输入正确名字格式",
        icon: "loading",
        duration: 2000
      })
      return false;
    }
    if (!re.test(towel) || !re.test(stree) || !re.test(location)){
      wx.showToast({
        title: "输入正确地址",
        icon: "loading",
        duration: 2000
      })
      return false;
    }
    if(!rephone.test(phnumber) || phnumber == ""){
      wx.showToast({
        title: "输入正确号码",
        icon: "loading",
        duration: 2000
      })
      return false;
    }
    //推入edit
    edit.push(str)
    //数据存入data
    this.setData({
      edit:edit,
      userName: user,
      phNumber: phnumber,
      towel:towel,
      stree: stree,
      location: location,
    })
    obj={
      edit:edit,user:user,phnumber:phnumber,towel:towel,stree:stree,location:location
    }
    console.log(obj)
    wx.setStorage({
      key: "key",
      data: obj,
      success:function(res){
        wx.redirectTo({
          url: "../save/save",
        })
      }
    })
    //页面传参
  },
  //删除缓存
  onDelete:function(o){
    let that = this;
    wx.showModal({
      title: '提示',
      content: '是否删除联系方式',
      success: function (res) {
        if (res.confirm) {
          wx.removeStorage({
            key: "key",
            success: function (res) {
              console.log("数据已删除")
            },
          })
        } else if(res.cancel)
        {
          console.log("数据未删除")
          console.log(that.data.edit)
        }
      }
    })
  },
  //返回页面
  onCancel:function(o){
    var that = this
    wx.showModal({
      title: '提示',
      content: '是否返回地址页面',
      success: function (res) {
        if (res.confirm) {
          that.setData({
            userName: "",
            phNumber: "",
            towel: "",
            stree: "",
            location: ""
          })
          wx.redirectTo({
            url:"../save/save"
          })
        
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
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