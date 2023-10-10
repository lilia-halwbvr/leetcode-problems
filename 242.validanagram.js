var isAnagram = function(s, t) {
   // return s.split('').sort().join('') === t.split('').sort().join('')
   return s.split('').sort()
};

console.log(isAnagram("anagram", "nagaram"))