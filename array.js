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
//
function a(a, b) {
  let c = []
  for (let i of a) {
    if (b.indexOf(i) != -1) {
      c.push(i)
    }
  }
  return c
}
