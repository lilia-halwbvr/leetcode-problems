var sortColors = function (nums) {
    let red = 0
    let white = 0
    let blue = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) red++
        else if (nums[i] === 1) white++
        else if (nums[i] === 2) blue++
    }

    for (let i = 0; i < red; i++) {
        nums[i] = 0
    }
    for (let i = red; i < red + white; i++) {
        nums[i] = 1
    }
    for (let i = red + white; i < red + white + blue; i++) {
        nums[i] = 2
    }
};

console.log(sortColors([2, 0, 2, 1, 1, 0])) //[0,0,1,1,2,2]
console.log(sortColors([2, 0, 1])) //[0,1,2]