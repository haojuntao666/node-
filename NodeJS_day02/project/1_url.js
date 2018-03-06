/**
 * 接收一个URL字符串，解析出其中的各个不同部分
 * @param path 要解析的URL字符串，
 * 形如：http://www.jd.com:80/ad/index?uname=qiangdong&pno=3
 * @returns {{}包含解析出各个URL部分的对象}
 */
function parse(path){
  var result = {};
  var i1 = path.indexOf('://');//URL路径中://的下标
  result.protocol = path.substring(0,i1);

  var i2 = path.lastIndexOf(':');//最后一个:的下标
  result.hostname = path.substring(i1+3, i2);

  var i3 = path.indexOf('/', i2);//最后一个:后面的第一个/的下标
  path = path.substring(i3);
  //console.log(path);///ad/index?uname=qiangdong&pno=3
  result.path = path;

  ///午间练习题：把最后的查询字符串解析为 { uname:'qiangdong', pno:'3' }

  return result;
}

//向外部其他模块导出自己内部的成员
module.exports.parse = parse;



