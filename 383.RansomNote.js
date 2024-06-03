var canConstruct = function(ransomNote, magazine) {
    let map = new Map()
    for(let i = 0; i < magazine.length; i++) {
        if(map.has(magazine[i])) {
            let currentValue = map.get(magazine[i])
            map.set(magazine[i], currentValue + 1)
        } else {
            map.set(magazine[i], 1);
        }
    }
    for(let i = 0; i < ransomNote.length; i++) {
        if (!map.has(ransomNote[i])) {
            return false
        }

        let currentValue = map.get(ransomNote[i])
        if(currentValue > 1) {
            map.set(ransomNote[i], currentValue - 1)
        } else {
            map.delete(ransomNote[i])
        }
    }

    return true
}


console.log(canConstruct('a', 'b')) //false
console.log(canConstruct('aaa', 'ab')) //false
console.log(canConstruct('aa', 'aab')) //true

console.log(canConstruct('lll', 'blalala')) // true
console.log(canConstruct('lilia', 'likilika')) // true
console.log(canConstruct('eeee', 'eeek')) //false

