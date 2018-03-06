const fs = require('fs');

//同步(Synchronize)向文件中写出内容
//Node.js解释器、磁盘，一个工作时，另一个必须等待
console.log('开始文件写出....');

var str = new Date().toString();
fs.writeFileSync('./public/2.log', str);
//此方法会删除之前的所有内容，重新写出新的内容

console.log('文件写出完成....');
