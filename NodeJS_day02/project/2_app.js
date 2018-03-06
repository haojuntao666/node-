
//引入自定义的URL模块
const url = require('./1_url');
//引入Node.js官方提供的原生模块
const util = require('util');


var p = 'http://www.jd.com:80/ad/index?uname=qiangdong&pno=3';
var obj = url.parse(p);

console.dir(obj);  //查看一个对象的内容

var str = util.inspect(obj); //检查指定对象的内容
console.log(str);  //输出对象检查的结果