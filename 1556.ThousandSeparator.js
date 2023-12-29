var thousandSeparator = function(n) {
    if (n < 1000) return n.toString();
    let arr = n.toString().split('');
    let count = 0;
    for(let i = arr.length - 1; i >= 0; i--, count++){
        if(count === 3){
            arr[i] = arr[i] + ".";
            count = 0;
        }  
    }
    return arr.join('');

};


console.log(thousandSeparator(987)) //'987'
console.log(thousandSeparator(1234)) //"1.234"
console.log(thousandSeparator(1232002))