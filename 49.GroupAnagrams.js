var groupAnagrams = function(strs) {
    let map = new Map()
    let answer = []

    for(let word of strs) {
        let str = word.split('').sort().join('');
        if(!map.has(str)) {
            map.set(str, [])
        }

        map.get(str).push(word)
    }

    return Array.from(map.values())
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) //[["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])) //[[""]]
console.log(groupAnagrams(["a"])) //[["a"]]