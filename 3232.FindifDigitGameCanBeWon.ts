function canAliceWin(nums: number[]): boolean {
    let singleSum = 0
    let doubleSum = 0
    for(let num of nums){
        if(num < 10){
            singleSum += num
        } else {
            doubleSum += num
        }
    }
    return singleSum != doubleSum
};
console.log(canAliceWin([1, 2, 3, 4, 10])) //false 
console.log(canAliceWin([1, 2, 3, 4, 5, 14])) //true