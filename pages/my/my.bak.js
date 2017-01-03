/*my.js*/
"user strict";

var app = getApp();

Page({
  data:{
    // text:"这是一个页面"
    uinfo:{},
    source:'',
    images:[]
  },
  // 上传图片
  bindUploadHeader: function(){
    var self = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        var tempFilePaths = res.tempFilePaths

        //及时预览
        self.setData({
          source:tempFilePaths[0]
        })
        wx.uploadFile({
          url: 'http://www.kunyujie.com/myself/test/imageUpload?name=admin&passwd=admin',
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
              "Content-Type": "multipart/form-data"
          },
          success:function(suc){
            var data = JSON.parse(suc.data);
            self.setData({
              source:'http://www.kunyujie.com/myself/'+data.path
            })
          },
          fail: function(err){
            console.log(err)
          },
          complete:function(all){
            //console.log(all)
          }
        })
      }
    })
  },
  // 上传图片
  bindUploadHeader: function(){
    var self = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        var param ={
              filePath:tempFilePaths[0],
              name:'file',
              formData:{}
            };
        app.api.imageUpload('test/imageUpload?name=admin&passwd=admin',param)
        .then(function(res){
          var res = JSON.parse(res);
          self.setData({
            source:app.uri+res.path
          })
        }).catch(function(err){
          console.error(err)
        })

        //end
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


})


// getUserInfo();返回结果
// userInfo:{
//   avatarUrl:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM7ejmgVyn1GmSv6EWv2TN0dwtwr5xNF3ZF6SmK7A6ZVeA/132"
//   city:"Haidian"
//   gender:1
//   nickName:"The Arrival"
//   province:"Beijing"
// }