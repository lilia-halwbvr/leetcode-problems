var sortedSquares = function(nums) {
    nums = nums.map(el => el **2);
    
    return nums.sort(function (a, b) {
        return a - b;
      });
};


console.log(sortedSquares([-4,-1,0,3,10])) //[0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])) //[4,9,9,49,121]