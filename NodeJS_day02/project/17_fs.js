const fs = require('fs');

/**
 * JS解释器不会等待点击事件发生，而直接执行出1/3/5...
 * console.log(1);
 * btn1.onclick = function(){ console.log(2)}
 * console.log(3)
 * btn2.onclick = function(){ console.log(4)}
 * console.log(5)
 */

//异步(Asynchronize)向文件中写出内容
//Node.js解释器、磁盘，可以同时工作
console.log('1开始写出内容...');

var str = new Date().toString();
fs.writeFile('./public/5.log', str, function(err){
  console.log('2文件写出完成...');
});

console.log('3JS脚本执行完成...');







