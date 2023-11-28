var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    finalTime = arrivalTime + delayedTime
    return finalTime % 24
};

console.log(findDelayedArrivalTime(15, 5)) // 20
console.log(findDelayedArrivalTime(13, 11)) // 00