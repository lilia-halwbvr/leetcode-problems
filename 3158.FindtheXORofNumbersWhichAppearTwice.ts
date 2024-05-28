function duplicateNumbersXOR(nums: number[]): number {
    let map = new Map<number, number>()
    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1)
    }
    let result = 0
    for(let [key, value] of map){
        if(value === 2){
            result ^= key
        }
    }
    return result
};



console.log(duplicateNumbersXOR([1,2,1,3])) //1
console.log(duplicateNumbersXOR([1,2,3])) //0