function longestPalindrome(s: string): any {
    let ans = 0
    let map = new Map<string, number>()
    for(let el of s){
        map.set(el, (map.get(el) || 0) + 1)
    }
    let odd = false
    for(let [key, value] of map) {
        if(value % 2 === 0){
            ans+=value
        } else {
            ans+=value - 1
            odd = true
        }
    }
    if(odd) ans++
    return ans
};

console.log(longestPalindrome("abccccdd")) //7
console.log(longestPalindrome( "a")) //1