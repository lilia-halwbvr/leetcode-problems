var findDifference = function (nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    for (let num of set1) {
        if (set2.has(num)) {
            set1.delete(num)
            set2.delete(num)
        }
    }

    return [Array.from(set1), Array.from(set2)]
};

console.log(findDifference([1, 2, 3], [2, 4, 6])) //[[1,3],[4,6]]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])) //[[3],[]]