const fs = require('fs');

//同步(Synchronize)读取文件中的内容
//Node.js解释器、磁盘，一个工作时，另一个必须等待
console.log('开始进行文件读取....');

var data = fs.readFileSync('./public/1.html');

console.log('文件读取完成....');
//console.log(data);  //Buffer
console.log( data.toString() );
