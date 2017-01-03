var app = getApp();
Page({
  data:{
    title:'',
    ads:'',
    news:{}
  },
  onLoad:function(o){
    var self = this;
    //console.log(o)
    //获取数据
    app.api.selectOne("test/getItem?id="+o.id).then(function(res){
      var item = JSON.parse(res.item);
      item.created = app.util.dateFormat("Y-m-d h:i:s", parseInt(item.created)/1000);
      self.setData({
        title:item.title,
        ads:o.image,
        news:item
      })
    }).catch(function(res){
        console.error(res)
    })
    console.log(self.data.ads)
  },
  onReady:function(){
    // 页面渲染完成
    var self = this;
    wx.setNavigationBarTitle({
			title: self.data.title
		})
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onPullDownRefresh: function() {
    // 页面下拉刷新
  }
})