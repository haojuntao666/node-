//最简单的Web服务器
const http = require('http');
const url = require('url');

var server = http.createServer();
server.listen(80);
server.on('request', (req, res)=>{
  console.log('Web服务器接收到一个请求');
  //根据客户端请求URL的不同，返回不同的响应消息
  //如：/index，返回<h1>欢迎访问首页</h1>
  //如：/login，返回<h1>请登录</h1>
  //如：/product，返回<h1>这里是商品列表</h1>
  //若不是上述几个，返回<h1>您请求的资源不存在-404</h1>

  //console.log(req);     //下属这些属性都无需记忆
  //console.log(req.url);
  var objUrl = url.parse( req.url );
  //console.log(objUrl);
  var path = objUrl.pathname;

  res.setHeader('Content-Type','text/html;charset=UTF-8');
  if(path==='/index'){
    res.write('<h1>欢迎访问首页</h1>');
  }else if(path==='/login'){
    res.write('<h1>请输入登录信息</h1>');
  }else if(path==='/product'){
    res.write('<h1>这里是产品列表</h1>');
  }else {
    res.statusCode = 404; //设置响应状态码
    res.write('<h1>请求的资源不存在</h1>');
  }
  res.end();
})








