var isThree = function(n) {
    let count = 0
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            count+=1
        }
    }

    return count === 3
};

console.log(isThree(4)) //true
console.log(isThree(2)) //false