//index.js
"use strict";
//获取图片
const url = "http://images-1253562988.picgz.myqcloud.com/"
var app = getApp();
Page({
	data: {
		//banner
		imgUrls: [
			url + "homemast.png",
      url + "bilock.png",
      url + "wxsystem.png",
		],
		indicatorDots: true,
		autoplay: true,
		interval: 5000,
		duration: 1000,
		//指纹密码锁图片
		headerList:[],
    middleList:[],
    footerList:[]
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
    console.log(data.headerList[0].id);
		self.setData({
			headerList:data.headerList,
      middleList:data.middleList,
      footerList:data.footerList
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
			title:"必达i8A1FMT-AN2指纹锁",
      images:url + "i8a1fmt.png"
		},
		{
			id:"2",
			title:"必达i2A7FMT-AN2指纹锁",
      images: url + "i2a8fk.jpg"
		},
		{
			id:"3",
			title:"必达i1A8FK-AN2指纹锁",
      images: url + "i3a7fmk.jpg"
		},
		{
			id:"4",
			title:"必达G636FM指纹锁",
			images:url + "g636fm.jpg"
		},
		{
			id:"5",
			title:"必达v3A8MT-AN2指纹锁",
			images:url + "v3a8mt.jpg"
		}	
	],
  middleList:[ 
    {
      id:"11",
      title:"自动窗户窗帘系统",
      images:url + "smartwindow.jpg"
    },
    {
      id: "12",
      title: "智能灯光系统",
      images:url + "smartlight.jpg"
    },
    {
      id: "13",
      title: "安防系统",
      images:url + "smartalert.jpg"
    },
    {
      id: "14",
      title: "智能家电控制",
      images:url + "smartele.jpg"
    },
    {
      id: "15",
      title: "影音系统",
      images:url + "smartvideo.jpg"
    },
  ],
  footerList:[
    {
      id: "21",
      title: "必达酒店管理系统",
      images: url + "hospital.png"
    },
    {
      id: "22",
      title: "必达酒店微信开锁平台",
      images: url + "wxsystem.png"
    }
  ]
};




