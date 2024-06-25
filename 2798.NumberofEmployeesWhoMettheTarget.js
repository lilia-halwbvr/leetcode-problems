var numberOfEmployeesWhoMetTarget = function (hours, target) {
    hours = hours.filter((hour) => hour >= target)
    return hours.length
};

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2)) //3
console.log(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6)) //0