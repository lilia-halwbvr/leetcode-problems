var wordPattern = function(pattern, s) {
    let pat = pattern.split('')
    let str = s.split(' ')
    
    if(pat.length !== str.length) return false
    let map = new Map()
    for(let i = 0; i < pat.length; i++) {
        if(map.get(pat[i]) === str[i]) {
            continue
        }

        if (Array.from(map.values()).includes(str[i])) {
            return false
        }
        map.set(pat[i], str[i])
         }
        for(let i = 0; i < pat.length; i++) {
            if(map.get(pat[i]) !== str[i]) return false
        
        }

    return true
};

console.log(wordPattern("abba",  "a c c a")) // true
console.log(wordPattern("abba",  "dog cat cat fish")) //false
console.log(wordPattern("aaaa", "dog cat cat dog")) // false