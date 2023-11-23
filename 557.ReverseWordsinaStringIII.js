var reverseWords = function(s) {
    // s = s.split(' ')
    // let result = []
    // s.forEach(element => {
    //     console.log(element)
    //     element.split('').reverse().join('')
    //     result.push(element)
    // });
   
   return s.split(' ').map(element => element.split('').reverse().join('')).join(' ')
};

console.log(reverseWords("Let's take LeetCode contest")) // "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("God Ding"))//"doG gniD"