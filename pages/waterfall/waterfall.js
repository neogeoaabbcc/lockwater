//waterfall.js
"use strict";
// 引入utils.js文件
var imageUtil = require("../../utils/util.js")
//文档字符
var initData = "2009年，广州迅商科技有限公司成立，并组建深圳生产基地，公司致力于发展智能科产品研发与生产，品牌名称“未来世界”。\n2011年，与杜亚、瑞克斯、创明、晾霸、博孚等公司达成战略合作协议，并完美兼容其产品。\n2013年，与湖南广电达成战略合作，主控与机顶盒全面融合， 同时第三代ZIGBEE系统开始研发； 同年底， 重磅打造“未来世界云平台”。\n2014年，获得未来世界智能软件（Android)和（iOS）的软件著作权。\n2014 - 2015年，建立未来世界“天”、“地”、“人”三网营销模式； 优化小区商场解决方案， 服务众多品牌， 全面支持各地智慧城市建设，开展智能工程项目。\n2015年，荣获欧盟CE、ROHS和ISO9001证书；最佳工程应用解决方案。\n2015年，“四川大奥智能科技有限公司” 携手 “未来世界”品牌强势入驻四川。 以实现全球智能化普及的理念，着眼四川，面向全国, 打造智能家居、智慧医疗、智慧社区、 智慧酒店等综合性应用解决方案。 斥资百万元在四川内江打造智能化机器人体验馆，为广大消费者带来便利与智能化的生活。大奥公司本着“创业四川、服务四川” 为宗旨，以客户需求为已任，秉承诚信经营，创新实干的精神, 为多个行业的消费者提供了一站式系统化和全屋智能化的解决方案。集天下之大成，寻生活之奥秘，一切尽在大奥智能科技。\n";
var initAddress = "广州花都万达城\xa0\xa0明秀山庄\n御龙廷影院酒店\xa0\xa0南湖1号\n香蜜湖1号\xa0\xa0香榭水岸\n皇廷港湾\xa0\xa0水映加州\n依山郡\xa0\xa0金叶岛别墅\n观澜高尔夫别墅\xa0\xa0绿城明月江南\n水榭花都\xa0\xa0东方高尔夫会所\n城市山谷\xa0\xa0林语山庄\n万科金域蓝湾\xa0\xa0东岸1号\n曦城\xa0\xa0西山美庐\n卓越维港\xa0\xa0吴江豪门府邸\n星河丹堤\xa0\xa0保利独墅西岸\n鼎太风华\xa0\xa0中海熙岸世家别墅\n幸福里二期\xa0\xa0莱茵小镇\n万科东海岸\xa0\xa0龙池山庄\n万科十七英里\xa0\xa0深航国际酒店\n山清水秀\xa0\xa0欧泰酒店\n"
//url网站
const url = "http://images-1253562988.picgz.myqcloud.com/"
//获取应用实例
var app = getApp();
Page({
  	data: {
      //图片获取
      btn_image:[],
      text: initData,
      latitude: 29.588638,
      longitude: 105.021669,
      markers:[{
        iconPath: "../../images/mini_logo.png",
        id: 0,
        latitude: 29.588638,
        longitude: 105.021669,
        width: 26,
        height: 46,
      }]
    },
//获取应用实例
  //公司介绍
  company:function(e){
    this.setData({
      text: initData
    })
  },
  //电话地址
  comment:function(e){
    this.setData({
      text: initAddress
    })
  },
  //电话拨打
  call:function(){
    wx.makePhoneCall({
      phoneNumber: '08322220968',
      success:function(){
        console.log("电话拨打成功！")
      },
      fail:function(){
        console.log("电话拨打失败！")
      }
    })
  },
  onLoad:function(o){
    this.setData({
      btn_image: data.btn_image
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
  
})
var data={
  btn_image:[
    {
      url : url + "waterfall_1.jpg" ,
      mode : "widthFix" 
    },
    {
      url: url + "waterfall_2.jpg",
      mode: "widthFix"
    },
    {
      url: url + "waterfall_3.jpg",
      mode: "widthFix"
    },
    {
      url: url + "waterfall_4.jpg",
      mode: "widthFix"
    },
    {
      url: url + "waterfall_5.jpg",
      mode: "widthFix"
    },
    ]
}