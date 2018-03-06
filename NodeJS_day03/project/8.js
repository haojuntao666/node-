//使用mysql模块执行DQL(SELECT)语句
const mysql = require('mysql');

//1.创建连接池
var pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'jd',
  connectionLimit: 5   //池中的连接对象数量
});

//2.从池中获取连接
pool.getConnection((err, conn)=>{
  if(err){
    console.log('连接获取失败')
  }else {
    //连接获取成功
    //3.提交SQL语句给MySQL执行
    conn.query('SELECT * FROM emp',(err,result,fields)=>{
      //此处应该检查err
      console.log(result); //[{},{},...{}]
      //4.释放连接，回到连接池中
      conn.release();
    });
  }
});


