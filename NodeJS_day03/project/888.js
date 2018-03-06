/**
 * Created by Administrator on 2017/4/27.
 */
const mysql=require("mysql");
var conn=mysql.create.connection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"jb",
    port:3306

});


conn.query("INSERT INTO emp VALUES(null,?,?,?,?)",["test3","888.02",1364585,10],(err,result)=>{
    "use strict";


    if(err){
        console.log(err);
    }else{
        console.log(result);

    }
});

conn.end();
console.log("js脚本执行完成");


const mysql=require("mysql");
var pool=mysql.createPool({

    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"jb",
    port:"3306",
    connectionLimit:10

});

pool.getConnection((err,conn)=>{
    if(err){
        "use strict";

        console.log("连接失败")
    }else{
        conn.query("update emp set ename=?,salary=?,hireDate=? where eid=?",["汤米",6666,122355,1],(err,result)=>{
            if(err){
                comsole.log("sql语句失败");
            }else{

                console.log("语句影响行数"+result.affectedRows);
            }

            conn.release();
        })

    }



});























