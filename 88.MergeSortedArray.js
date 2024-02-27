var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n)
    nums1.push(...nums2)
    nums1.sort((a, b) => a-b)
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)) //[1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)) //[1]