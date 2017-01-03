//splash.js
"use strict";
//获取应用实例
var app = getApp();
Page({
	data: {
		splashList:[
			'http://pic3.zhongsou.com/image/38043856d549aa5a9bc.jpg',
			'http://att.bbs.duowan.com/forum/201512/17/110222jf89dbocotj8u7bz.jpg',
			'http://att.bbs.duowan.com/forum/201512/09/19171679tcm76e47r7c7ce.jpg'
		]
	},
	handleStart: function() {
		wx.redirectTo({
			url: "../index/index"
		})
	},
	onLoad:function(options){
		// 页面初始化 options为页面跳转所带来的参数
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






