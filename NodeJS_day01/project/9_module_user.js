//(function(exports,require,module,__filename,__dirname){
  var userCount = 998;
  var userLogin = function(){
    console.log('正在执行用户登录验证...')
  }
  var userLogout = function(){
    console.log('正在执行用户退出登录...')
  }

  //对外公开一些自己内部的成员
  exports.uCount = userCount;
  exports.uLogin = userLogin;
  exports.uLogout = userLogout;
//})