// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

var firstUniqChar = function(s) {
    for(let i = 0; i <= s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            console.log(s[i], s[j])
            if(s[i] == s[j]) {
                break
            }
            // return i
        }
        
        
    }
    return -1
};


console.log(firstUniqChar("leetcode")) // 0
console.log(firstUniqChar("loveleetcode")) // 2
console.log(firstUniqChar("aabb")) // -1