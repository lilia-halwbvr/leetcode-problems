var singleNumber = function (nums) {
    let xorAll = 0
    for (let num of nums) {
        xorAll ^= num
    }
    let saveXor = xorAll
    let nb = 0
    while (xorAll != 1 && xorAll != -1) {
        xorAll >>= 1
        nb++
    }
    let group1 = 1 << nb
    let group1Xor = 0
    for (let num of nums) {
        if ((num & group1) != 0) {
            group1Xor ^= num;
        }
    }
    return [group1Xor, group1Xor ^ saveXor]
};

console.log(singleNumber([1, 2, 1, 3, 2, 5])) //[3,5]
console.log(singleNumber([-1, 0])) //[-1,0]