//使用mysql模块执行DML(INSERT/DELETE/UPDATE)语句

const mysql = require('mysql');

//1 创建连接
var conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'jd',
  port: 3306
});

//2 提交SQL
/*
conn.query(`INSERT INTO emp VALUES(NULL,'Test2','9999','9999','30')`, (err, result)=>{
  console.log('SQL语句执行完毕')
  console.log(err)
  console.log(result)
})
*/
//可以在SQL语句中使用?占位符
conn.query('INSERT INTO emp VALUES(NULL,?,?,?,?)', ['Test3', 8888.05, 1381234567890, 10], (err, result)=>{
  if(err){    //SQL语句执行失败
    console.log(err);
  }else {     //SQL语句执行成功
    console.log(result);
  }
});

//3 关闭连接
conn.end();
console.log('JS脚本执行完成');