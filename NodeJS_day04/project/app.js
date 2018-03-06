/**
 *整个应用程序的主模块
 * 创建http server，监听端口，接收请求
 */
const http = require('http');
const url = require('url');
const stu = require('./stu');

//var server = http.createServer();
//var server = http.createServer(fn);//fn请求处理函数

var server = http.createServer((req,res)=>{
  console.log('Web服务器接收到一个HTTP请求')
  //解析请求地址，查找要访问的请求路径
  var objUrl = url.parse(req.url, true);
  var path = objUrl.pathname; //请求路径
  if(path==='/stu/add'){
    stu.add(req, res);
  }else if(path==='/stu/add.do'){
    stu.addDo(req, res);
  }else if(path==='/stu/list'){
    stu.list(req, res);
  }else { //客户端请求了服务器不能识别的地址
    res.statusCode = 404;
    res.setHeader('Content-Type','text/html;charset=UTF-8');
    res.end('<b>请求的资源不存在</b>');
  }
});
server.listen(8080);

//server.on('request', fn);  //fn请求处理函数


