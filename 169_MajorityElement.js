// var majorityElement = function(nums) {
//     let i = nums[0]
//     for(num of nums) {
//         if(num > i) {
//             i = num 
//         } 
//     }

//     return i
// };

// console.log(majorityElement([2,2,1,1,1,2,2])) // 2
// console.log(majorityElement([3,2,3])) // 3


var majorityElement = function(nums) {

     nums.sort();
    
    return nums[Math.floor(nums.length / 2)]
     
      
    
};

console.log(majorityElement([2,2,1,1,1,2,2])) // 2
 console.log(majorityElement([3,2,3])) // 3
console.log(majorityElement([2, 1, 1, 1, 8, 9, 1])) //1
console.log(majorityElement([10, 11, 101, 11, 11, 11])) //11
console.log(majorityElement([0, 0, 1, 1, 1, 6, 1])) // 1






