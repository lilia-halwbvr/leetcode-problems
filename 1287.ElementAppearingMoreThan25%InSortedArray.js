var findSpecialInteger = function(arr) {
    let map = new Map()

    for(let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    let maxKey;
    let maxValue = 0;

    map.forEach((value, key) => {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    });

    return maxKey;
 
};


console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))//6
console.log(findSpecialInteger([1,1]))//1
