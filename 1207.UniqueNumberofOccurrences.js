var uniqueOccurrences = function(arr) {
    let map = new Map()
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let withoutrepeats = new Set(map.values())
    return map.size === withoutrepeats.size
};


console.log(uniqueOccurrences([1,2,2,1,1,3])) //true
console.log(uniqueOccurrences([1,2])) //false
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])) //true