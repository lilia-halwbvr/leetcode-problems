var countSegments = function(s) {
    // if(s.length == 0) {
    //     return 0
    // }
    // s = s.split(' ')
    // console.log(s)
    
    // return s.length

    return s.split(" ").filter(letter => letter !== "").length;
};

console.log(countSegments("Hello, my name is John"))//5
console.log(countSegments("Hello"))
console.log(countSegments("")) //1