var maxFrequencyElements = function(nums) {
    let map = new Map()

    for(digit of nums) {
        map.set(digit, (map.get(digit) || 0) + 1)
    }
    let maxFreq = Math.max(...map.values())
    let count = 0
    for(let freq of map.values()) {
        if(maxFreq === freq) {
            count += maxFreq
        }
    }

    return count
};


console.log(maxFrequencyElements([1,2,2,3,1,4]))//4
console.log(maxFrequencyElements([1,2,3,4,5]))//5