var maximum69Number  = function(num) {
    let a = Array.from(String(num))
    for(let i = 0; i < a.length; i++) {
        if(a[i] == 6) {
            a.splice(i, 1, "9");
           break
        }
    }
    return Number(a.join(''))
};

console.log(maximum69Number(9669))//9969
console.log(maximum69Number(9996))//9999
console.log(maximum69Number(9999)) //9999