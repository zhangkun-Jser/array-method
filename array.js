//数组去重
function deleteRepeat(arr){
  let a=[]
  for(let i of arr){
    if(a.indexOf(i)==-1){
      a.push(i)
    }
  }
  return a
}