var isValid = function(s) {
    s = s.split("");
    let stack = []

    for(let el of s) {
        if( el === '(' || el === '[' || el === '{') {
            
            stack.push(el)
            console.log(stack)
        } else {
            let top = stack[stack.length - 1];
            if(el === ')' && top === '(' || el === ']' && top === '[' || el === '}' && top === '{') {
                stack.pop()
            } else {
                return false
            }
        }
       
    }
    return stack.length === 0
};

console.log(isValid("()")) //true
console.log(isValid("()[]{}")) //true
console.log(isValid("(]")) //false 