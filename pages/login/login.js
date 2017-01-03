/** lgoin.js **/
var app = getApp();

Page({
  data:{
    
  },
  bindGoToMy: function(){
    wx.redirectTo({
      url: '../my/my'
    })
  },
  //表单提交
  formSubmit: function(e) {
    //console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var self = this;
    var u = e.detail.value;
    //跳转要在前,坑爹啊
    //self.bindGoToMy();
    app.api.submitPost("test/login", u).then(function(res){
        if(res.success){
            var user = JSON.parse(res.data);
            user.header = app.uri+user.header
            //保存缓存
            if(u.remeber){
                app.wechat.setStorage("user",user).then(function(suc){
                    console.log(suc)
                })
            }
            //提示
            wx.showToast({
              title: '登录中',
              icon: 'loading',
              duration: 200
            })
            setTimeout(function(){
              wx.hideToast()
            },3000)
            //跳转不了这里
            self.bindGoToMy();
        }
    }).catch(function(err){
        console.error(err)
    })
  },
  //表单重置
  formReset: function() {
    console.log('form发生了reset事件')
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

    console.log('我的')
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})