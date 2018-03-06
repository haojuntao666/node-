const url = require('url');


var u = 'https://qd:123@www.jd.com:443/ad/index?uname=qiangdong&pno=3#chapter3';
var obj = url.parse( u );
console.log(obj);


//true：指定使用querystring.parse()对URL中的查询字符串进行进一步的解析，得到对象
var obj = url.parse( u,  true );
//console.log(obj);
console.log( obj.query.uname )
console.log( obj.query.pno )








