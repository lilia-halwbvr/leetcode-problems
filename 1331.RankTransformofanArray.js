// var arrayRankTransform = function(arr) {
//     let newArr = []
//     for(let i = 0; i < arr.length; i ++) {
//         newArr.push(arr[i])
//     }
//     newArr = newArr.sort((a, b) => a - b);
//     let result = []
//     console.log(arr, newArr)
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < newArr.length; j++) {
//             if(arr[i] === newArr[j]) {
//                 result.push(j + 1)
                
//             }
//         }
//     }
//     return result
// };


var arrayRankTransform = function(arr) {
   let noDublicates = Array.from(new Set(arr)).sort((a,b) => a - b);
   let obj = new Map()
   for(let i = 0; i < noDublicates.length; i ++) {
       obg.set(noDublicates[i], i + 1)
   }
   return arr.map(item => item = obj.get(item));
}


console.log(arrayRankTransform([40,10,20,30])) //[4,1,2,3]
//console.log(arrayRankTransform([37,12,28,9,100,56,80,5])) //[5,3,4,2,8,6,7,1]
// console.log(arrayRankTransform([100,100,100])) //[1,1,1]