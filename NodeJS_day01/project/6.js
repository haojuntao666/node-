var scoreList = [78, 65, 99, 37, 81];

for(var i=0;  i<scoreList.length;  i++){
  console.log(i + ' => ' + scoreList[i]);
}

console.log('--------------');
//ES5新语法
for(var i in scoreList){    //遍历出每个下标
  console.log(i + ' => ' + scoreList[i]);
}


console.log('--------------');
//ES6新语法
for(var v of scoreList){    //遍历出每个元素值
  console.log(v);
}





