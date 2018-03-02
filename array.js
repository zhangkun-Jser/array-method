//数组去重
function deleteRepeat(arr) {
  let a = []
  for (let i of arr) {
    if (a.indexOf(i) == -1) {
      a.push(i)
    }
  }
  return a
}
//生成指定区间随机4位数
function random(min, max) {
  return [0, 0, 0, 0].map(() => Math.floor(Math.random() * (max - min + 1) + min))
}
//数组交叉项
function noRepeat(a, b) {
  let c = []
  var j = 0;
  for (var i = 0; i < a.length; i++) {
    for (var k = 0; k < b.length; k++) {
      if (a[i] == b[k]) {
        c[j] = a[i];
        ++j;
      }
    }
  }
  return c
}
//找出数组最大项
var ary = [1,25,16,32,43,26,13,28,19];
// 1、 for循环遍历，比较low，就不写了
// 2、 数组排序
ary.sort()[ary.length-1];
// 3、数组排序+截取
ary.sort().splice(-1)[0];
// 4、借用Math最大值方法
Math.max.apply(null,ary);