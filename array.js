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
