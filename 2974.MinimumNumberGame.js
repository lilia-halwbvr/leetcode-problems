var numberGame = function (nums) {
    nums = nums.sort((a, b) => b - a)
    let ans = []
    while (nums.length) {
        let alice = nums.pop()
        let bob = nums.pop()
        ans.push(bob)
        ans.push(alice)
    }
    return ans
};

console.log(numberGame([5, 4, 2, 3])) //[3,2,5,4]
console.log(numberGame([2, 5])) //[5,2]