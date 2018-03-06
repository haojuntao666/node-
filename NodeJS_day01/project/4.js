var str = '';

for(var i=1; i<10; i++){
  for(var j=1; j<=i; j++) {
    str += `${i}*${j}=${i*j}  `;
    //ES6新特性，在Node.js中不存在兼容性问题
  }
  str += '\r\n';
}

console.log(str);