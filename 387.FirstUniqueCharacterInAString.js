// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

var firstUniqChar = function(s) {
   let map = new Map()
   for(letter of s) {
        map[letter] = (map[letter] || 0) + 1;
   }
   for(let i of Object.keys(map)) {
       if(map[i] === 1) return s.indexOf(i)
   }
   return -1
};


console.log(firstUniqChar("leetcode")) // 0
console.log(firstUniqChar("loveleetcode")) // 2
console.log(firstUniqChar("aabb")) // -1