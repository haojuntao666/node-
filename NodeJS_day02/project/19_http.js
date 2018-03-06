const http = require('http');

//创建一个HTTP服务器
var server = http.createServer();
//让HTTP服务器监听指定的端口
server.listen(8008);
//当客户端请求到来时（触发request事件），处理请求消息
server.on('request', function(req, res){
  console.log('Node.js服务器接收到一个请求')
  //解析客户端发来的请求消息
  //console.log(req); //请求对象中封装着客户端发来的请求数据
  console.log('请求方法：'+req.method);
  console.log('请求地址：'+req.url);
  console.log('协议版本：'+req.httpVersion);
  console.log('请求头部：',  req.headers);
  //给出响应消息
  res.statusCode = 200; //设置响应状态码
  res.setHeader('Content-Type','text/html');//设置响应消息头部
  res.write('<html>');  //向客户端输出响应主体
  res.write(' <body>');
  res.write('   <h1>Welcome to MySite!</h1>');
  res.write(' </body>');
  res.write('</html>');
  res.end();  //通知客户端，响应消息结束了
})