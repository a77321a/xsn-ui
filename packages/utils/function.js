export const contain = function (arr, element) {
  if (typeof element === 'string') {
    return arr.indexOf(element) > -1
  } else if (typeof element === 'object') {
    let isContain = false
    arr.forEach(item => {
      let flag = true
      if (Object.keys(item).length !== Object.keys(element).length) {
        flag = false
      } else {
        for (let key in element) {
          if (!item[key] || item[key] !== element[key]) {
            flag = false
          }
        }
      }
      if (flag) {
        isContain = true
      }
    })
    return isContain
  }
}

export const objectIsEqual = function (obj1, obj2) {
  let flag = true
  for (let key in obj1) {
    if (obj2[key] !== obj1[key]) {
      flag = false
    }
  }
  return flag
}

export const debounce = function (fn, wait = 250) {
  var timer = null;  //初始化timer，作为计时清除依据
  return function() {
    var context = this;  //获取函数所在作用域this
    var args = arguments;  //取得传入参数
    clearTimeout(timer);
    if(timer === null) {
      //时间间隔外立即执行
      fn.apply(context,args);
      timer = 0;
      return;
    }
    timer = setTimeout(function() {
      fn.apply(context,args);
      timer = null;
    }, wait);
  }
}

export const platform = function () {
  var u = window.navigator.userAgent;
  return {
    trident: u.indexOf('Trident') > -1, //IE内核
    presto: u.indexOf('Presto') > -1, //opera内核
    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
    iPad: u.indexOf('iPad') > -1, //是否为iPad
    webApp: u.indexOf('Safari') == -1 ,//是否为web应用程序，没有头部与底部
    weixin: u.indexOf('MicroMessenger') == -1 //是否为微信浏览器
  }
}
