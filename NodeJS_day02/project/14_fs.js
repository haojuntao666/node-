const fs = require('fs');

//同步(Synchronize)向文件中追加写出内容
//Node.js解释器、磁盘，一个工作时，另一个必须等待
console.log('开始文件写出....');

var str = new Date().toString();
fs.appendFileSync('./public/3.log', str);
//append：追加写出

console.log('文件写出完成....');
