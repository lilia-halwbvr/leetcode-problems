// Given a non-empty array of integers nums, 
// every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// var singleNumber = function(nums) {
//     if(nums.length === 1) {
//         return nums[0]
//     }

//     let result = 0;
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j <= nums.length; j++) { //если этот цикл заканчивается и такого же числа нет то нужно вернуть i + прекратить первый цикл
//             if(nums[i] == nums[j]) break //этот цикл прекращается i становится сл числом
//         }
//         result = nums[i]
       
//     }
//     return result
// };
// function singleNumber(nums) {
//     if(nums.length === 1) {
//             return nums[0]
//      }
     
//      for(let i = 0; i < nums.length; i++) {
//          let isTrue = true 
//          for(let j = i + 1; j < nums.length; j++) {
//              if(nums[i] == nums[j]) {
//                  isTrue = false 
                 
//                 }
//         }
//         if(isTrue) return nums[i]
//     }
// }



function singleNumber(nums) {
    let set = new Set()
    for(let i = 0; i < nums.length; i++) {
        if(set.has(nums[i])) {
            set.delete(nums[i])
        } else {
            set.add(nums[i])
        }
    }
    
    [answer] = set
    return answer
}



console.log(singleNumber([2,2,1])) // 1
// console.log(singleNumber([4,1,2,1,2])) // 4
// console.log(singleNumber([1,2,3,2,1]))//3
// console.log(singleNumber([0,0,1,1, 2])) //2
