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

//归并排序实现多个有序数组合并为一个数组
let arr= [[1, 2], [0, 3, 4,4,4,6,7,8,9,10], [-1, 4],[-1,3],[-1],[100,200],[5,1000,30000]];
// let arr= [[1,2,3]];

function merge(arr){

    //记录每一个数组循环比较时的下标变化
    function filterIndexArr() {
        indexArr=indexArr.filter((item,index)=>{
            return item.count<arr[item.index].length;
        });
    }

    //将每次比较的元素放进一个临时数组里面，取出最小值放入ret
    function pushToArr(arr) {
        let minVal=arr[0].val;
        let increaseArr=[arr[0].index];
        arr.forEach((item,index)=>{
            if (minVal>item.val){
                minVal=item.val;
                increaseArr=[item.index];
            }else if (minVal==item.val && index!=0){
                increaseArr.push(item.index)
            }
        });
        increaseArr.forEach((item)=>{
            let thatItem=item;
            indexArr.forEach((item)=>{
                if (item.index==thatItem){
                    item.count++;
                }
            });
        });
        filterIndexArr();
        ret.push(minVal);
    }

    let ret=[];
    let indexArr=arr.map((item,index)=>{
        return {
            index,
            count:0
        }
    });
    filterIndexArr();

    let compareArr=[];
    while (indexArr.length>1){
        //循环比较每个数组的第一个元素
        compareArr=indexArr.map((item,index)=>{
            return {
                index:item.index,
                val:arr[item.index][item.count]
            }
        });
        pushToArr(compareArr);
    }
    //取出最后不需要比较的数组元素，直接拼接到ret后面
    let remainArr=arr[indexArr[0].index].slice(indexArr[0].count);
    ret=ret.concat(remainArr);
    ret=Array.from(new Set(ret));
    return ret;
}

let ret=merge(arr);
console.log(ret);