/*my.js*/
"user strict";

var app = getApp();

Page({
  data:{
    // text:"这是一个页面"
    uinfo:{},
    user:{},
    images:[],
    downloadFile:''
  },
  //获取本地文件
  bindGetSavedFile:function(){
    wx.getSavedFileList({
      success: function(res) {
        console.log(res);
        if (res.fileList.length > 0){
          //获取
          wx.getSavedFileInfo({
            filePath: res.fileList[0].filePath,
            success: function(res) {
              console.log(res.size)
              console.log(res.createTime)
            }
          })
          //删除
          wx.removeSavedFile({
            filePath: res.fileList[0].filePath,
            complete: function(res) {
              console.log(res)
            }
          })
        }
      }
    })
  },
  //下载
  bindDownloadFile:function(){
    var self = this;
    wx.downloadFile({
      url: 'http://www.kunyujie.com/upload/user/2016110809522168162.jpg', 
      success: function(res) {
        // self.setData({
        //   downloadFile:res.tempFilePath
        // })
        //保存文件
        wx.saveFile({
          tempFilePath: res.tempFilePath,
          success: function(d) {
            var savedFilePath = d.savedFilePath
            self.setData({
              downloadFile:savedFilePath
            })
          }
        })
        //E
      }
    })
  },
  // 上传图片
  bindUploadHeader: function(){
    var self = this;
    wx.chooseImage({
      count: 2, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        //批量图片上传
        var imageArr = [], tempFilePaths = res.tempFilePaths;
        for(var i=0,len=tempFilePaths.length; i<len; i++){
          var param ={
              filePath:tempFilePaths[i],
              name:'file',
              formData:{
                name: 'admin',
                passwd: '21232f297a57a5a743894a0e4a801fc3'
              }
            };
            //上传操作
            app.api.imageUpload('test/imageUpload',param)
            .then(function(res){
              var res = JSON.parse(res)
              imageArr.push(app.uri+res.path)
              self.setData({
                images: imageArr
              })
            }).catch(function(err){
              console.error(err)
            })
        }

        //end
      }
    })
  },
  onLoad:function(o){
    // 页面初始化 options为页面跳转所带来的参数
    var self = this;

    //微信的登录状态查询
    app.wechat.login().then(function(res){
      //console.log(res)
    })

    //获取用户信息
    app.wechat.getUserInfo().then(function(res){
      //console.log(res)
      self.setData({
        uinfo:res.userInfo
      })
    })

    //用户缓存信息获取
    app.wechat.getStorage("user").then(function(user){
      self.setData({
        user:user.data
      })
    })
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


// getUserInfo();返回结果
// userInfo:{
//   avatarUrl:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM7ejmgVyn1GmSv6EWv2TN0dwtwr5xNF3ZF6SmK7A6ZVeA/132"
//   city:"Haidian"
//   gender:1
//   nickName:"The Arrival"
//   province:"Beijing"
// }