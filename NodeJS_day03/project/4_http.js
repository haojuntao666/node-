//使用Node.js编写动态Web服务器
const http = require('http');
const url = require('url');
const fs = require('fs');

var server = http.createServer();
server.listen(80);
server.on('request', (req, res)=>{
  console.log('接收到一个客户端请求')
  ///接收/register请求，返回一个静态文件内容
  ///接收/register.do请求，保存客户端提交的数据

  //console.log(req.method)
  console.log('URL:', req.url)
  //console.log(req.httpVersion)
  //console.log(req.headers)
  var objUrl = url.parse( req.url, true );
  //console.log(objUrl);
  var path = objUrl.pathname //请求地址

  res.setHeader('Content-Type','text/html;charset=UTF-8');//设置响应头
  if(path==='/register'){
    //读取静态文件中的内容，发送给客户端
    fs.readFile('./public/register.html',(err,buf)=>{
      if(err)throw err;
      res.end(buf); //end()方法也可以向客户端输出
    });
  }else if(path==='/register.do'){
    //解析出客户端提交的请求参数，写入文件中
    //console.log(objUrl);
    var n = objUrl.query.uname;
    var p = objUrl.query.upwd;
    var data = n+'-'+p+'\r\n';
    fs.appendFile('./public/user.db',data,(err)=>{
      res.end('<b>注册成功！</b>');
    });
  }else {
    res.statusCode = 404;
    res.end('<b>您访问的资源不存在</b>');
  }
})






