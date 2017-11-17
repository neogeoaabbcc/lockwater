var imageUtil = require("../../utils/util.js")
const app = getApp();
const url = "http://images-1253562988.picgz.myqcloud.com/"
const imgurl = "http://www.be-tech.com.cn/upload/ueditor/uploadimages/"
const smarturl = "http://www.csmartcube.com/uploads/170209/"

Page({
  data:{
  // 首页图片获取
  src: url + "logo.jpg",
  // 网络获取图片
  addSrc: [],
  //获取尺寸
  imageWidth1: 0,
  imageHeight1: 0,
  imageWidth: 0,
  imageHeight: 0,
  //获取页面文档
  arraypis:[],
  arraytext:[],
  },
  imageNew:function(e){
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth1: imageSize.imageWidth1,
      imageheight1: imageSize.imageHeight1,
      imgheight: imageSize
    })
  },
  imageHeader: function (e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },
  onLoad:function(o){
    let that = this
    that.setData({
      id: o.id
    })
    let data
    if  (that.data.id ==  1){
      data=data_1
    }else if  (that.data.id == 2){
      data=data_2
    } else if (that.data.id == 3) {
      data = data_3
    } else if (that.data.id == 4) {
      data = data_4
    } else if (that.data.id == 5) {
      data = data_5
    }else if(that.data.id == 11){
      data = data_11
    } else if (that.data.id == 12) {
      data = data_12
    } else if (that.data.id == 13) {
      data = data_13
    } else if (that.data.id == 14) {
      data = data_14
    } else if (that.data.id == 15) {
      data = data_15
    } else if (that.data.id == 21) {
      data = data_21
    } else if (that.data.id == 22) {
      data = data_22
    }
    that.setData({
      addSrc:data.addSrc,
      arraypis:data.arraypis,
      arraytext:data.arraytext,
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
//动态参数 指纹密码锁参数
var data_1 = {
  addSrc:[
    {
      id: "1",
      h1: "i8A8FK-AN2B指纹密码",
      imgmode: "widthFix",
      url: imgurl + "39321500537862.png"
    },
    {
      id: "2",
      h1:"指纹密码锁图解",
      imgmode: "widthFix",
      url: imgurl + "90201500537726.jpg"
    }
  ],
  arraypis: [
    {
      id: "1",
      pis: "???"
    }],
  arraytext: [
    {
      id: "2",
      text1: "i8A8FK-AN2B"+ "\n" +"重  量: 4.54kg" + "\n" + "适用范围：木门、金属门" + "\n" + "使用门厚：40-80mm" + "\n" + "可选表面处理：咖啡金、香槟金、香槟银",
      text2: "产品特点：" + "\n" +"1、产品造型方、圆结合，在矛盾中求得共存、品味匠心、大繁化简；" + "\n" + "2、独有的倒置指纹舱，有效防止强光、水污导致的指纹识别失灵；" + "\n"+"3、采用锂电池供电、可使用USB充电宝直接对门锁充电。" + "\n" + "4、关门后无操作4秒自动上锁，特有的安全按钮设计，有效避免倒钩开锁。"
    }
  ]
}
var data_2 = {
  addSrc: [
    {
      id: "1",
      h1: "i2A8FK-AN2B指纹密码",
      imgmode: "widthFix",
      url:  "http://www.be-tech.com.cn/upload/20160222/20160222155544.jpg"
    },
    {
      id: "2",
      h1: "指纹密码锁图解",
      imgmode: "widthFix",
      url: imgurl + "53541456128153.jpg"
    }
  ],
  arraypis: [
    {
      id: "1",
      pis: "???"
    }],
  arraytext: [
    {
      id: "1",
      text1: "i2A8FK-AN2B" + "\n" + "重量：5.1kg" + "\n" + "适用范围：金属门 木门" + "\n" + "适用门厚;40~80mm" + "\n" + "可选表面处理：红古铜、琥珀棕、香槟金、香槟银",
      text2: "产品特点：" + "\n" + "OLED显示屏，全中文菜单，清晰提示每一个步骤操作。"+"\n" +  "上提手柄可快速反锁，下压手柄可快速开锁，既方便又安全。" + "\n" +"防撬报警，当有人撬门锁时，立即发出蜂鸣报警。"
    }
  ]
}
var data_3 = {
  addSrc: [
    {
      id: "1",
      h1: "i1A8FK-AN2B指纹密码",
      imgmode: "widthFix",
      url: "http://www.be-tech.com.cn/upload/20160222/20160222140901.jpg"
    },
    {
      id: "2",
      h1: "指纹密码锁图解",
      imgmode: "widthFix",
      url: imgurl + "54681456127667.jpg"
    }
  ],
  arraypis: [
    {
      id: "1",
      pis: "???"
    }],
  arraytext: [
    {
      id: "1",
      text1: "i1A8FK-AN2B" + "\n" + "重量：5.1kg" + "\n" + "适用范围：金属门 木门" + "\n" + "适用门厚;40~80mm" + "\n" + "可选表面处理：玫瑰金配钢琴烤漆、琉璃金陪钢琴烤漆",
      text2: "产品特点：" + "\n" +"多种开锁方式，适合不同场合：指纹开锁、密码开锁、指纹+密码开锁开锁、机械钥匙开锁。" +"OLED显示屏，全中文菜单，清晰提示每一个步骤操作。" + "\n" + "上提手柄可快速反锁，下压手柄可快速开锁，既方便又安全。" + "\n" + "防撬报警，当有人撬门锁时，立即发出蜂鸣报警。"
    }
  ]
}
var data_4 = {
  addSrc: [
    {
      id: "1",
      h1: "G636MT-AN2B指纹密码",
      imgmode: "widthFix",
      url:"http://www.be-tech.com.cn/upload/20160222/20160222135352.jpg"
    },
    {
      id: "2",
      h1: "指纹密码锁图解",
      imgmode: "widthFix",
      url: imgurl + "88091458790324.jpg"
    }
  ],
  arraypis: [
    {
      id: "1",
      pis: "???"
    }],
  arraytext: [
    {
      id: "1",
      text1: "G636MT-AN2B" + "\n" + "重量：3.5kg" + "\n" + "适用范围：木门" + "\n" + "适用门厚;40~80mm" + "\n" + "可选表面处理：不锈钢拉丝",
      text2: "产品特点：" + "\n" +"智能和人性话兼具的图标显示，能让用户更加便利的使用智能门锁。" + "行业首款采用锂电池供电，可使用充电宝直接对门锁充电。" + "\n" + "国家专利不锈钢锁体，更长寿命，更高强度，更轻操作。"
    }
  ]
}
var data_5 = {
  addSrc: [
    {
      id: "1",
      h1: "G636MT-AN2B指纹密码",
      imgmode: "widthFix",
      url:"http://www.be-tech.com.cn/upload/20160222/20160222163315.jpg"
    },
    {
      id: "2",
      h1: "指纹密码锁图解",
      imgmode: "widthFix",
      url: imgurl + "39881456130031.jpg"
    }
  ],
  arraypis: [
    {
      id: "1",
      pis: "???"
    }],
  arraytext: [
    {
      id: "1",
      text1: "G636MT-AN2B" + "\n" + "重量：4.0kg" + "\n" + "适用范围：木门" + "\n" + "适用门厚;40~80mm" + "\n" + "可选表面处理：咖啡金、香槟金、光铬",
      text2: "产品特点：" + "\n" + "简约面板造型简约，情感式手柄将厚重与柔美完美结合，无论视觉或手感都为客人留下“舒适印象”。" + "独有的隐藏式应急设计，内设机械锁芯和手持机数据端口、外置电池仓等三大应急组件。" + "\n" + "锁舌采用不锈钢材质，具有优秀的抗冲击、抗腐蚀、抗磨损能力。"
    }
  ]
}
// 智能家居五大系统
var data_11 = {
  addSrc: [
    {
      id: "1",
      h1: "智能窗户窗帘系统",
      imgmode: "widthFix",
      url: url + "smart_curtainpush.png"
    },
    {
      id: "2",
      h1: "智能窗户介绍",
      imgmode: "widthFix",
      url: url + "smart_window.jpg"
    }
  ],
  arraypis: [
    {
      id: "1",
      pis: "???"
    }],
  arraytext: [
    {
      id: "1",
      text1: "产品组成：" + "\n" + "自动窗帘，智能推窗器，风光雨检测器，主控。" + "\n",
      text2: "实现功能：" +"\n" + "窗户，窗帘遇到雨天或暴晒时自动关闭，不在为下雨天忘关窗而烦恼。"
    }
  ]
}
var data_12 = {
  addSrc: [
    {
      id: "1",
      h1: "智能面板",
      imgmode: "widthFix",
      url: url + "smart_face.jpg"
    },
    {
      id: "2",
      h1: "智能灯光介绍",
      imgmode: "widthFix",
      url: url + "smart_light.jpg"
    }
  ],
  arraypis: [
    {
      id: "1",
      pis: "???"
    }],
  arraytext: [
    {
      id: "1",
      text1: "产品组成：" + "\n" + "智能面板（一路，二路，三路），情景开关，智能灯光，感应灯，主控。"+ "\n",
      text2: "实现功能：" + "\n" + "进入洗手间，灯光自动缓缓亮起，这样，急事在黑暗时客人也不需要寻找开关。同时，也可以通过智能灯光控制系统联动，启动‘夜起’‘全关’等功能。打开洗手间后，智能感应灯开始工作。如果无人活动，一段时间后，系统自动把灯光关掉，以防止关灯。"
    }
  ]
}
var data_13 = {
  addSrc: [
    {
      id: "1",
      h1: "安防系统",
      imgmode: "widthFix",
      url: url + "smartalert.jpg"
    },
    {
      id: "2",
      h1: "安防系统介绍",
      imgmode: "widthFix",
      url: url + "smart_alert.jpg"
    }
  ],
  arraypis: [
    {
      id: "1",
      pis: "???"
    }],
  arraytext: [
    {
      id: "1",
      text1: "产品组成：" + "\n" + "摄像头，人体红外感应器，燃气感应，烟雾感应，门磁，门禁，报警主机,紧急按钮。" + "\n",
      text2: "实现功能："+"\n"+"远程监控家中内外环境，360度无死角，让罪恶无处可逃，门内门磁报警，一旦非法进入，报警系统立刻触发，立刻向你的手机发出警报信息，厨房在烟雾浓度和天然气或者煤气浓度超标时，发出报警，此时所有报警哼灯光系统联动，报警发生时，灯光通明，提醒主人。"
    }
  ]
}
var data_14 = {
  addSrc: [
    {
      id: "1",
      h1: "智能红外控制器",
      imgmode: "scaleToFill",
      url: "http://www.csmartcube.com/uploads/allimg/170209/1-1F20Z93T6192.jpg"
    },
    {
      id: "2",
      h1: "家电控制",
      imgmode: "scaleToFill",
      url: url+"smartele.jpg"
    }
  ],
  arraypis: [
    {
      id: "1",
      pis: "???"
    }],
  arraytext: [
    {
      id: "1",
      text1: "产品组成：" + "\n" + "智能主控，智能红外控制器。"+ "\n",
      text2: "实现功能：" + "\n" +"可接入多种设备控制家电,做到家电集成化管理。"
    }
  ]
}
var data_15 = {
  addSrc: [
    {
      id: "1",
      h1: "智能影音系统",
      imgmode: "widthFix",
      url: url + "smartvideo.jpg"
    },
    {
      id: "2",
      h1: "影音系统介绍",
      imgmode: "widthFix",
      url: url + "smart_video.jpg"
    }
  ],
  arraypis: [
    {
      id: "1",
      pis: "???"
    }],
  arraytext: [
    {
      id: "1",
      text1: "产品组成：" + "\n" + "智能主控，背景影音主机，吸顶喇叭。" + "\n",
      text2: "实现功能：" + "\n" +"随时随地享受音乐，满足家庭不同成员的不同需求及功能要求；轻松解决家装，公装所需的高保真，立体音，多音源背景音乐。"
    }
  ]
}
// 酒店管理系统参数
var data_21 = {
  addSrc: [
    {
      id: "1",
      h1: "必达酒店管理系统",
      imgmode: "widthFix",
      url: url + "hospital_1.png"
    },
    {
      id: "2",
      h1: "酒店智能一卡通解决方案",
      imgmode: "widthFix",
      url: imgurl + "41241443407350.jpg"
    }
  ],
  arraypis: [
    {
      id: "1",
      pis: "???"
    }],
  arraytext: [
    {
      id: "1",
      text1: "针对连锁精品酒店对智能化客房服务的需求，必达专门给出了相应的系统解决方案。本方案主要含概了三大系统：必达BL-200智能终端服务系统、酒店云WiFi和智慧e房系统。",
      text2: "可根据酒店定位，提供手机APP应用开发需要的相关接口，使APP应用到智慧酒店中，达到预想中的功能效果。"
    }
  ]
}
var data_22 = {
  addSrc: [
    {
      id: "1",
      h1: "必达微信开锁平台",
      imgmode: "widthFix",
      url: url + "hospital_1.png"
    },
    {
      id: "2",
      h1: "智慧云酒店平台",
      imgmode: "widthFix",
      url:"http://www.be-tech.com.cn/upload/ueditor/uploadimages/68411445420667.jpg"
    }
  ],
  arraypis: [
    {
      id: "1",
      pis: "???"
    }],
  arraytext: [
    {
      id: "1",
      text1: "系统简述:" + "\n" +"本系统通过酒店物联网门锁及手机微信服务的联接，为用户提供精准的网上订房服务，同时支持网上支付，支持手机开门。本系统还开发了自助值机，会员管理系统，PMS云服务，减少酒店管理人员的同时，也为酒店提供更多的增值服务。",
      text2: "可根据酒店定位，提供手机APP应用开发需要的相关接口，使APP应用到智慧酒店中，达到预想中的功能效果。"
    }
  ]
}