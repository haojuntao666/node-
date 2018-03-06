const http = require('http');
const express = require('express');
const qs = require('querystring');


var app = express();
http.createServer(app).listen(8080);

//定义路由
app.get('/', (req, res)=>{
  res.sendFile(__dirname+'/public/9/index.html');
})
app.get('/jquery', (req, res)=>{
  res.sendFile(__dirname+'/public/9/jquery-1.11.3.js');
})
app.post('/user', (req, res)=>{
  //接收客户端请求主体中的数据
  req.on('data', (data)=>{
    console.log('接收到了请求主体中的数据')
    //console.log(data); //Buffer
    //console.log(data.toString()); //uname=mary&upwd=456
    var obj = qs.parse(data.toString());
    console.log(obj);
  })
})





