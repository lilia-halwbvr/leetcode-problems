var rearrangeArray = function(nums) {
    let positiveInts = []
    let negativeInts = []

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 0) {
            negativeInts.push(nums[i])
        } else {
            positiveInts.push(nums[i])
        }
    }

    let ans = []
    for(let i = 0; i < positiveInts.length; i++) {
        ans.push(positiveInts[i])
        ans.push(negativeInts[i])
    }

    return ans
};

console.log(rearrangeArray([3,1,-2,-5,2,-4])) //[3,-2,1,-5,2,-4]
console.log(rearrangeArray([-1,1])) //[1,-1]
