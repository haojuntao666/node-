//使用http模块创建Web服务器，监听8080端口
//使用Express作为请求处理工具
const http = require('http');
const express = require('express');

var app = express(); //Express本质是一个请求处理函数
var server = http.createServer(app);
server.listen(8088);

//Express请求处理函数默认提供了404的响应处理

