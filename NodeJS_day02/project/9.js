const qs = require('querystring');

//console.log(qs);

var str = 'uname=tom&upwd=1234&pno=3&kw=%e8%be%be%e5%86%85';
//把客户端传递给Node.js服务器的查询字符串解析为容易使用的对象
var obj = qs.parse(str);
console.log(obj);


//把一个JS对象转化为查询字符串格式
var obj2 = {ename:'强东',age:20,addr:'bj'};
var str = qs.stringify(obj2);
console.log(str);


