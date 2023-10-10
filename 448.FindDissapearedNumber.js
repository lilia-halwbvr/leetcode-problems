// var findDisappearedNumbers = function(nums) {

//     nums.sort()
    
//     let withoutRepeat = new Set(nums)
//     console.log(withoutRepeat)
//     let missedDigits = []

//     for(let i = 1; i <= nums.length; i++) {
//         if (withoutRepeat.has(i)) {
//             continue
//         } else {
//             missedDigits.push(i)
//         }
//     }
    
//     return missedDigits

// };

// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))// 5,6 [ 1, 2, 3, 4, 7, 8 ]
// console.log(findDisappearedNumbers([1,1]))



process.stdin.on("data", data => {
    data = data.toString().toUpperCase()
     console.log(daniilTryingToKillMe(data))
})


function daniilTryingToKillMe(data) {
    let int = data.split(' ')
    console.log(int)
    let firstDigit = parseInt(int[0])
    let secondDigit = parseInt(int[1])
    return [firstDigit, secondDigit]
}

