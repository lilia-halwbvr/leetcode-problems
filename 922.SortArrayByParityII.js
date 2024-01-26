var sortArrayByParityII = function(nums) {
    let odds = []
    let even = []
    let answer = []
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) even.push(nums[i]);
        else {
          odds.push(nums[i])
        }  
      }

    for(let i = 0; i < odds.length && even.length; i++) {
        answer.push(even[i], odds[i])
    }

    return answer
};

console.log(sortArrayByParityII([4,2,5,7])) //[4,5,2,7]
console.log(sortArrayByParityII([2,3])) //[2,3]