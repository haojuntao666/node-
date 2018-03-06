//最简单的Web服务器
const http = require('http');
const url = require('url');
const fs = require('fs');

var server = http.createServer();
server.listen(80);
server.on('request', (req, res)=>{
  console.log('Web服务器接收到一个请求');
  //根据客户端请求URL的不同，返回不同的响应消息
  //如：/index，返回./public/index.html中的内容
  //如：/login，返回./public/login.html中的内容
  //如：/product，返回./public/product.html中的内容
  //若不是上述几个，返回./public/404.html中的内容

  var objUrl = url.parse( req.url );
  var path = objUrl.pathname;
  res.setHeader('Content-Type','text/html;charset=UTF-8');
  if(path==='/index'){
    fs.readFile('./public/reg.html',(err,buf)=>{
      if(err)throw err; //若存在IO错误，则抛出
      res.write(buf);
      res.end();
    });
  }else if(path==='/login'){
    fs.readFile('./public/login.html',(err,buf)=>{
      if(err)throw err; //若存在IO错误，则抛出
      res.write(buf);
      res.end();
    });
  }else if(path==='/product'){
    fs.readFile('./public/product.html',(err,buf)=>{
      if(err)throw err; //若存在IO错误，则抛出
      res.write(buf);
      res.end();
    });
  }else {
    fs.readFile('./public/404.html',(err,buf)=>{
      if(err)throw err; //若存在IO错误，则抛出
      res.statusCode = 404;
      res.write(buf);
      res.end();
    });
  }
})








