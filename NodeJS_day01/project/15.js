console.log(__filename);
console.log(__dirname);

//使用console对象计算一段代码的耗时
console.time('循环计时');

var sum = 0;
for(var i=0; i<99999999; i++){
  sum += i;
}
console.timeEnd('循环计时');