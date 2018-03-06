//最简单的Web服务器
const http = require('http');

var server = http.createServer();
server.listen(80);
server.on('request', (req, res)=>{
  console.log('Web服务器接收到一个请求');
  res.setHeader("Content-Type", "text/html;charset=UTF-8");//设置一个响应消息头
  res.write('<h1>Hello</h1>');
  res.write('<h2>World</h2>');
  res.write('<h2>你好</h2>');
  res.end();  //通知客户端响应消息已经结束
})