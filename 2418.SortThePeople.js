var sortPeople = function(names, heights) {
    let data = []

    for(let i = 0; i < heights.length; i++) {
        let person = new Object
        person.name = names[i]
        person.height = heights[i]
        data.push(person)
    }
    data.sort((a, b) => a.height < b.height ? 1 : -1);
    return data = data.map(obj => obj.name);
    
};

console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))