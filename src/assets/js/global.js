/** 字体 */
fnResize();
 window.onresize = function () {
   fnResize()
 };
 function fnResize() {
   let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
   console.log(deviceWidth);
   if (deviceWidth >= 750) {
     deviceWidth = 750;
   }
   if (deviceWidth <= 320) {
     deviceWidth = 320
   }
   document.documentElement.style.fontSize = (deviceWidth / 7.5*2) + 'px';
   console.log( document.documentElement.style.fontSize);
 }

/** session 存储

sessionStorage.setItem('currentIndex', 0)
// 获取
index=sessionStorage.getItem('currentIndex');
// 删除一个
sessionStorage.removeItem("currentIndex");
// 删除全部
sessionStorage.clear();

 //对象
 let obb = {
      name:'zhangyachoa',
      age:'18'
  }
 let str = JSON.stringify(obb)//把对象转化为字符串（stringify）存放进sessionStorage
 sessionStorage.setItem('obbj',str)

 JSON.parse(sessionStorage.getItem('obbj')

*/

import { get, post } from './axios';



// 获取今天的日期
function getToday() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    // 如果需要时分秒
    // var h = now.getHours();
    // var m = now.getMinutes();
    // var s = now.getSeconds();
    let formatDate = year + '-' + month + '-' + day;
    return formatDate;
}

// 全局 js
let localUrl = '';  //全局路径
var localOrigin = window.location.origin;

// console.log(localOrigin);
if(localOrigin == 'http://localhost:8030'){
    localUrl = 'https://spt.zmtek.net';
    //192.168.0.133
} else {
    localUrl = localOrigin;
}
console.log(localUrl);
// const localUrl = 'http://vikily.f3322.net:20000';  //测试
// const localUrl = 'https://spt.zmtek.net';  //系统正式
// const localUrl = 'https://swim.zmtek.net';    //游泳馆正式

let cityId = 17;
let weekArr = [];
function changeWeek(weekArr){
    this.weekArr = weekArr;
}

function changeCityId(cityId){
    this.cityId = cityId;
}


/*elementui把上传的图片转为base64
https://blog.csdn.net/woshidamimi0/article/details/86082428
页面  直接 this.GLOBAL.getEleBase64调用
GLOBAL在main.js中声明了*/
function getEleBase64(file) {
    return new Promise(function (resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function () {
            imgResult = reader.result;
        };
        reader.onerror = function (error) {
            reject(error);
        };
        reader.onloadend = function () {
            resolve(imgResult);
        };
    });
}

/*按钮点击状态 变化*/
function btnStateChange(that, id, val,  state = true,time=1500){
    that[id][val] = state;
    // that[id].text = textTrue;
    setTimeout(()=>{
        that[id][val] = false;
        // that[id].text = textFalse;
    },time);

    /*使用方法  搜索中 记得加状态 true */
    //this.GLOBAL.btnStateChange(this,'loadState','searchLoad',true);
    // loadState:{
    //     searchLoad:false,
    // }
    // <van-button type="default" size="small" @click="btnRefush" :loading = 'loadState.searchLoad' loading-text="加载中...">默认按钮</van-button>
}

export default {
    localUrl,
    getEleBase64:getEleBase64,
    getToday:getToday(),
    btnStateChange:btnStateChange,

    changeWeek:changeWeek,
    changeCityId:changeCityId,
    cityId:cityId,
    weekArr:weekArr,
}