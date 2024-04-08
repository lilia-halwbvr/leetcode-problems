var countStudents = function(students, sandwiches) {
    let movements = 0

    while(sandwiches.length > 0) {
        if(sandwiches[0] === students[0]) {
            sandwiches.shift()
            students.shift()
            movements = 0
        } else {
            students.push(students.shift())
            movements++
            if(movements === students.length) break
        }
    }
    return students.length
};

console.log(countStudents([1,1,0,0], [0,1,0,1])) //0
console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1])) //3