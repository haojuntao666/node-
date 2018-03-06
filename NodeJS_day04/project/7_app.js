const http = require('http');
const express = require('express');

var app = express();
var server = http.createServer(app);
server.listen(8080);

//GET  /user?uid=10&loc=bj
//GET  /user?uid=20&loc=tj
app.get('/user', (req, res)=>{
  //express为每个req对象添加一个query属性
  console.log(req.query.uid);
  console.log(req.query.loc);
})

//GET  /book/99/jsj
//GET  /book/80/wx
//GET  /book/7/ls
app.get('/book/:bid/:btype', (req, res)=>{
  //接收请求地址中的请求参数(Param)
  console.log(req.params.bid);
  console.log(req.params.btype);
  res.send(req.params.bid+','+req.params.btype);
})