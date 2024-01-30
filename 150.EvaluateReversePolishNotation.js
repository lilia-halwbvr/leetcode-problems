var evalRPN = function(tokens) {
    let stack = []
    for(let token of tokens) {
        if(!isNaN(token)) {
            stack.push(parseInt(token))
            continue
        }


    
        let firstNum = stack.pop()
        let secondNum = stack.pop()
        switch(token) {
            case '+':
                stack.push(secondNum + firstNum)
                break;
            case '-':
            stack.push(secondNum - firstNum)
                break;
            case '*':
            stack.push(secondNum * firstNum)
                break;
            case '/':
            let div = secondNum / firstNum
            if(div < 0) {
                stack.push(Math.ceil(div))
            } else {
                stack.push(Math.floor(div))
            }
                break
        }
    }

    return stack[0]
};


console.log(evalRPN(["2","1","+","3","*"])) //9
console.log(evalRPN(["4","13","5","/","+"])) //6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])) //22