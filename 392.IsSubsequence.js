



var isSubsequence = function(s, t) {
    // if(s.length > t.length) {
    //     return false
    // }
    // let check =[]
    // for(let i = 0; i <= s.length; i++) {
    //     for(let j = 0; j < t.length; j++) {
    //         console.log(s[i], t[j])
    //         if(s[i] === t[j]) {
                
    //             check.push(t[j])
    //         } else {
    //             continue
    //         }
    //     }
    // }

    // check = check.join('')

    // console.log(check)
    // return check.includes(s) 

    let index = 0
    for(let i =0; i < s.length && i < t.length; i++) {
        if(s[i] === t[i]) {
            index++
        }
    }
    return index === s.length
   
};


console.log(isSubsequence('acb', 'ahbgdc'))// false
