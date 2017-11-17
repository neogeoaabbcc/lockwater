//app.js
"use strict";
//工具类调用
var api = require('./utils/api.js'),
    util = require('./utils/util.js'),
    wechat = require('./utils/wechat.js');

App({
  data:{
    name:"waterfall",
    version:"1.0"
  },
  api: api,
  util: util,
  wechat: wechat,
  uri:'',
  onLaunch: function () {
    console.log("appapp is launched")
  },
  onShow: function(){
      console.log("show")
  },
  onHide: function(){
    console.log("hide")
  }
})