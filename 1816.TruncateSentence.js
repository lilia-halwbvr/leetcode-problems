var truncateSentence = function(s, k) {
    let arr = s.split(' ')
    let newArr = []

    for(let i = 0; i < k; i++) {
        newArr.push(arr[i])
    }
    console.log(newArr)
   return newArr.join(' ')
    
    
};

console.log(truncateSentence("Hello how are you Contestant", 4)) // "Hello how are you"
console.log(truncateSentence("What is the solution to this problem", 4)) // "What is the solution"