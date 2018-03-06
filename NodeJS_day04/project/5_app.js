//使用http模块创建Web服务器，监听8080端口
//使用Express作为请求处理工具
const http = require('http');
const express = require('express');

var app = express(); //Express本质是一个请求处理函数
var server = http.createServer(app);
server.listen(8080);

//Express请求处理函数默认提供了404的响应处理

app.get('/', (req, res)=>{
  //express中的req和res继承自http模块中req和res
  res.send('<h1>这里是首页1</h1>');
  //send是express提供的简化函数，相当于setHeader+write+end
})

app.get('/index', (req, res)=>{
  res.send('<h1>这里是首页2</h1>');
})

app.get('/user/login', (req, res)=>{
  //console.log(__filename)
  console.log(__dirname) //c:\xampp\htdocs\NodeJS_day04\project
  //向客户端输出一个文件中的内容
  //res.sendFile('./public/login.html');
  res.sendFile(__dirname+'/public/login.html');
  //sendFile=readFile + setHeader + write + end
  //提示：此方法读取的文件路径必须是绝对路径：c:/xx/...
})

app.get('/logo', (req, res)=>{
  res.sendFile(__dirname+'/public/logo.png');
})

