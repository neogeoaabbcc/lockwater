//index.js
"use strict";
//获取应用实例
var app = getApp();
Page({
	data: {
		//banner
		imgUrls: [
			'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
			'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
			'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
		],
		indicatorDots: true,
		autoplay: true,
		interval: 5000,
		duration: 1000,
		//今日头条
		headerList:[]
	},
	//查看更多
	bindMoreTap: function(){
		wx.navigateTo({
			url:'../waterfall/waterfall'
		})
	},
	onLoad:function(options){
		// 页面初始化 options为页面跳转所带来的参数
		var self = this;
		self.setData({
			headerList:data.headerList
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
	},
	onPullDownRefresh: function() {
		// 页面下拉刷新
	}
  
})

var data = {
	headerList:[
		{
			id:"1",
			title:"销售火爆的 Pixel 手机不仅延迟出货，利润也直追苹果？",
			images:"http://p1.pstatp.com/large/1009000da4dd870dec9d"
		},
		{
			id:"2",
			title:"谷歌终于推出全新办公利器，直接叫板微软",
			images:"http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
		},
		{
			id:"bc046013ad754c91ad14e34e0956f577",
			title:"央妈再出手，支付宝还能抗多久？",
			images:"http://p8.pstatp.com/large/101e0002970c50088352"
		},
		{
			id:"2",
			title:"谷歌终于推出全新办公利器，直接叫板微软",
			images:"http://p3.pstatp.com/large/101f0002d60d32fbff00"
		},
		{
			id:"8dd0a353217d48348232739d992b2680",
			title:"本周即将发布的苹果Mac新电脑又提前泄漏了",
			images:"http://p9.pstatp.com/large/1018000f484526ba4b00"
		}
		
	]
};




