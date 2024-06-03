var maxLengthBetweenEqualCharacters = function(s) {
    s = s.split('')
    if(s.length == 2 && s[0] == s[1]) return 0
    let ans = []
    for(let i = 0; i < s.length; i++){
        for(let j = i + 1; j <= s.length; j++){
            if(s[i] == s[j]){
                let str = s.slice(i + 1, j)
                ans.push(str.length)
            }
        }
    }
    ans.sort((a, b) => a - b)
    return ans.length ? ans[ans.length - 1] : -1
    
};

//console.log(maxLengthBetweenEqualCharacters("aa")) //0
console.log(maxLengthBetweenEqualCharacters("abca")) //2
console.log(maxLengthBetweenEqualCharacters("cbzxy")) //-1
console.log(maxLengthBetweenEqualCharacters("awqbeklfdqaoeiottpjoib")) //17