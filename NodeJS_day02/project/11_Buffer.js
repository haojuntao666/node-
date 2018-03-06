//Buffer模块是全局模块，可以直接使用无需引入

//创建一个大小为10字节的缓冲区
var buf1 = Buffer.alloc(10);  //alloc：分配
console.log(buf1);

var buf2 = Buffer.alloc(1024*3);//3KB大小的缓冲区
console.log(buf2);
console.log(buf2.length);

//使用一个数组初始化一个缓冲区
var buf3 = Buffer.from([1,2,3]);
console.log(buf3);

//使用一个字符串创建一个缓冲区
var buf4 = Buffer.from('abcd');
console.log(buf4);

//练习：使用汉字“一二三”创建一个缓冲区
var buf5 = Buffer.from('一二三');
//var buf5 = new Buffer('一二三');
console.log(buf5);
//把缓冲区中的数据转化为字符串
console.log(  buf5.toString() )






