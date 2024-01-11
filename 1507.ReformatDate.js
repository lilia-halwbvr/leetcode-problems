var reformatDate = function(date) {
    let months = {
        "Jan": '01',
        "Feb": '02', 
        "Mar": '03', 
        "Apr": '04', 
        "May": '05', 
        "Jun": '06', 
        "Jul": '07', 
        "Aug": '08', 
        "Sep": '09', 
        "Oct": '10', 
        "Nov": '11', 
        "Dec": '12'
    }

    let d = date.split(' ')
    let year = d[2]
    let m = d[1]
    let day = d[0]

    let month = months[m]
    let day1 = day.slice(0, -2)

    if(day1.length === 1) {
        let day2 = day1.split(' ')
        day2.unshift('0')
        day1 = day2.join('')
    }

    return year + '-' + month + '-' + day1


};

console.log(reformatDate("20th Oct 2052")) // "2052-10-20"
console.log(reformatDate("6th Jun 1933")) //"1933-06-06"