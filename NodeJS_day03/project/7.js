//使用mysql模块执行DML(INSERT/DELETE/UPDATE)语句

const mysql = require('mysql');

//1 创建连接池(Pool)，一次性的创建多个连接对象
var pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'jd',
  port: 3306,
  connectionLimit: 10   //连接池大小
});

//2 从池中获取一个连接对象
pool.getConnection((err, conn)=>{
  if(err){
    console.log('从连接池中获取连接失败！')
  }else {   //成功获取到连接对象
    //3 使用连接对象提交SQL语句给数据库服务器
    conn.query('UPDATE emp SET ename=?,salary=?,hireDate=? WHERE eid=?',['汤米', 66666, 1331234567890, 1],(err, result)=>{
      if(err){
        console.log('SQL语句执行失败');
      }else {
        console.log('语句影响行数：'+result.affectedRows);
      }
      //4 将连接归还给连接池
      conn.release();
    });
  }
});


