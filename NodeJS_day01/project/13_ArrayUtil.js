function sum(arr){
  var result = 0;
  for(var v of arr){
    result += v;
  }
  return result;
}
function avg(arr){
  var a = sum(arr)/arr.length;
  return a;
}

module.exports = {
  /*sum: function(){},
  avg: function(){}*/
  sum: sum,
  avg: avg
};