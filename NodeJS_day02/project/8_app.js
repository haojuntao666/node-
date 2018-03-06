//引入放置在node_modules目录下的目录模块
const c = require('circle');
console.log( c.size(3) );
console.log( c.perimeter(3) );

const rectangle = require('rectangle');
console.log(rectangle.size(1, 3));
console.log(rectangle.perimeter(1, 3));