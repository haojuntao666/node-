const http = require('http');
const express = require('express');

var app = express();
var server = http.createServer(app);
server.listen(8080);

//路由(Route) = method + path + fn
app.get('/index', (req, res)=>{
  res.sendFile(__dirname+'/public/6/index.html');
})

app.get('/index.css', (req, res)=>{
  res.sendFile(__dirname+'/public/6/index.css');
})

app.get('/logo', (req, res)=>{
  res.sendFile(__dirname+'/public/logo.png');
})

app.get('/jquery', (req, res)=>{
  res.sendFile(__dirname+'/public/6/jquery-1.11.3.js');
})







