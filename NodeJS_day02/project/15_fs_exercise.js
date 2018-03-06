const fs = require('fs');

//实现文件同步的拷贝
var src = './public/css/4.css'; //源
var dest = './public/css/4.backup.css';//目标

console.log('开始读取文件...');
var buf = fs.readFileSync(src);
console.log('文件读取完成...');
console.log('开始写出内容...');
fs.writeFileSync(dest, buf);
console.log('文件写出完成...');








