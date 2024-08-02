var buildArray = function (nums) {
    return nums.map(val => nums[val])
};

console.log(buildArray([0, 2, 1, 5, 3, 4])) //[0,1,2,4,5,3]
console.log(buildArray([5, 0, 1, 2, 3, 4])) //[4,5,0,1,2,3]