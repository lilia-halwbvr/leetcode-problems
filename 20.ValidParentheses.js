var isValid = function(s) {
    s = s.split("");
    const parentheses = new Map([
        ['}', '{'],
        [')', '('],
        [']', '[']
    ])

    let stack = []
    for(let el of s) {
        if(Array.from(parentheses.values()).includes(el)) {
            stack.push(el)
        } else {
            let top = stack[stack.length - 1];
            if(top === parentheses.get(el)) {
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