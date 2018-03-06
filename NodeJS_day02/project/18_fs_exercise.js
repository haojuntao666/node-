const fs = require('fs');

//实现文件异步的拷贝
var src = './public/css/4.css'; //源
var dest = './public/css/44.backup.css';//目标

console.log('1开始读取文件...');

fs.readFile(src, function(err,data){
  console.log('2文件读取完成...');
  if(err){
    console.log('文件读取失败！')
  }else {
    console.log('文件读取成功，开始写出...');
    fs.writeFile(dest, data, function(err){
      console.log('文件写出完成...')
    })
  }
});

console.log('3JS脚本执行完成...');








