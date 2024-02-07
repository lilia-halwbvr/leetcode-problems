var frequencySort = function(s) {
    let map = new Map()
    for(letter of s) {
        map.set(letter, (map.get(letter) || 0) +1)
    }
    
    let sortedMap = ([...map.entries()].sort((a, b) => b[1] - a[1]))
    let result = ''
    for (let [el, freq] of sortedMap) {
        result += el.repeat(freq);
    }
    return result
};


console.log(frequencySort("tree")) //"eert"
console.log(frequencySort("cccaaa")) // "aaaccc"
console.log(frequencySort("Aabb")) //"bbAa"