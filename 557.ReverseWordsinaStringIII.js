var reverseWords = function(s) {
   
   return s.split(' ').map(element => element.split('').reverse().join('')).join(' ')
};

console.log(reverseWords("Let's take LeetCode contest")) // "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("God Ding"))//"doG gniD"