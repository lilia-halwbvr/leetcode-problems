function scoreOfString(s: string): number {
    let ans = 0
    for(let i = 0; i < s.length - 1; i++){
        ans += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1))
    }
    return ans
};

console.log(scoreOfString("hello"))//13
console.log(scoreOfString("zaz"))//50