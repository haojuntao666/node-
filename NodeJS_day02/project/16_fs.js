const fs = require('fs');

/**
 * JS解释器不会等待点击事件发生，而直接执行出1/3/5...
 * console.log(1);
 * btn1.onclick = function(){ console.log(2)}
 * console.log(3)
 * btn2.onclick = function(){ console.log(4)}
 * console.log(5)
 */

//异步(Asynchronize)读取文件中的内容
//Node.js解释器、磁盘，可以同时工作
console.log('1开始读取文件内容...');
fs.readFile('./public/1.html', function(err, data){
  console.log('2文件读取完成了...');
  if(err){
    console.log('文件读取出现错误...')
    //console.log(err);  Error  No  Entry
    if(err.code==='ENOENT'){console.log('文件不存在');}
  }else {
    console.log('文件读取成功....')
    console.log(data.toString());
  }
})
console.log('3JS脚本执行完成...')







