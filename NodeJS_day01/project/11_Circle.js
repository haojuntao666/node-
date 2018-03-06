const PI = 3.14;

function getSize(r) {
  return PI * r * r;
}
function getPerimiter(r) {
  return PI * r * 2;
}

//导出当前模块的内部成员，供其它模块使用
//exports.size = getSize;
//exports.perimiter = getPerimiter;

//module.exports.size = getSize;
//module.exports.perimiter = getPerimiter;

/***
 * Node.js底层有代码：exports = module.exports
 * 所以：exports.age = 20; 完全等价于
 *      module.exports.age = 20;
 * 但是：
 *      exports = {...}
 *      module.exports = {...}
 *      两种写法的效果完全不同！
 *
 * ***/

/*exports = {
              size: getSize,
              perimiter: getPerimiter
          };*/

module.exports = {
              size: getSize,
              perimiter: getPerimiter
          };







