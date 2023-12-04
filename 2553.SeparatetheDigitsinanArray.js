var separateDigits = function(nums) {
    return nums.join('').split('')
    
};

console.log(separateDigits([13,25,83,77])) //[1,3,2,5,8,3,7,7]
console.log(separateDigits([32,43,68,8,100,84,80,14,88,42,53,98,69,64,40,60,23,99])) //[3,2,4,3,6,8,8,1,0,0,8,4,8,0,1,4,8,8,4,2,5,3,9,8,6,9,6,4,4,0,6,0,2,3,9,9]