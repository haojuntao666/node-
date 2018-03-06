//(function(exports, require, module, __filename, __dirname) {

  //var moduleUser = require('./9_module_user2'); //错误写法
  //var moduleUser = require('9_module_user'); //错误写法

  //引入另一个模块
  var moduleUser = require('./9_module_user');

  //console.log(userCount);
  //userLogin();
  //userLogout();
  //调用其它模块公开的成员
  console.log(moduleUser);
  console.log(moduleUser.uCount);
  moduleUser.uLogin();
  moduleUser.uLogout();

//});