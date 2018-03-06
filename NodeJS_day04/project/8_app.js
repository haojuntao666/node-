/*
 创建ExpressWeb服务器，配合mysql模块，接收如下请求地址：
 GET /stu/3	向客户端输出3号学生的信息，以JSON格式
 GET /stu/5	向客户端输出5号学生的信息，以JSON格式
 */
const mysql = require('mysql');
const http = require('http');
const express = require('express');

var pool = mysql.createPool({
  user: 'root',
  database: 'tmooc',
  connectionLimit: 10
})
var app = express();
http.createServer(app).listen(8080);

//定义路由
app.get('/stu/:sid', (req, res)=>{
  var sid = req.params.sid;
  pool.getConnection((err, conn)=>{
    console.log(err);
    conn.query('SELECT * FROM stu WHERE sid=?',[sid],(err, result)=>{
      //console.log(result); //[{}]
      var stu = result[0];

      /*var str = JSON.stringify(stu);
      res.send(str);  输出内容类型是html*/

      res.json(stu); //把指定的对象转换为JSON字符串，并输出给客户端 = JSON.stringify + write + setHeader
      conn.release();
    })
  })
})


