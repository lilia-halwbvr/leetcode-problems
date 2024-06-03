var subsets = function(nums) {
    let ans = []
    for(let i = 0; i <= 2**nums.length - 1; i++){
        let arr = []
        for(let j = 0; j < nums.length; j++){
            if((i & 2**j) > 0){
                arr.push(nums[j])
            }  
        }
      ans.push(arr)
    }
    return ans
};

console.log(subsets([1,2,3])) //[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])) //[[],[0]]