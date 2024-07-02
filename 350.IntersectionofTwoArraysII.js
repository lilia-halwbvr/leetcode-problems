var intersect = function(nums1, nums2) {
    let obj = {}
    let ans = []
    for(let num of nums1) {
        obj[num] = (obj[num]||0)+1
    }
    for(let num of nums2){
        if(obj[num]){
            ans.push(num)
            obj[num]--
        }
    }
    return ans
};

console.log(intersect([1,2,2,1], [2,2]))//[2,2]
console.log(intersect([4,9,5], [9,4,9,8,4]))//[4,9]