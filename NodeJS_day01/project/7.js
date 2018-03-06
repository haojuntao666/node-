//var path = '/index';
//var path = '/search';
var path = '/login';
//var path = '/abc';

/*
if(path==='/index'){
  fnIndex();
}else if(path==='/search'){
  fnSearch();
}else if(path==='/login'){
  fnLogin();
}else {
  console.log('向客户端输出404页面对应的内容...')
}
*/
switch(path){
  case '/index':
    fnIndex();
    break;
  case '/search':
    fnSearch();
    break;
  case '/login':
    fnLogin();
    break;
  default:
    console.log('向客户端输出404页面内容...')
}



function fnIndex(){
  console.log('向客户端输出首页对应的HTML内容...')
}
function fnSearch(){
  console.log('向客户端输出搜索页对应的HTML内容...')
}
function fnLogin(){
  console.log('向客户端输出登录页对应的HTML内容...')
}