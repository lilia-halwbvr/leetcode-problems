var findWinners = function(matches) {
    let winners = new Set()
    let lostOnce = new Set()
    let losers = new Set()

    for(match of matches) {
        let winner = match[0]
        let loser = match[1]


        //добавила победосов
        if(!losers.has(winner) && !lostOnce.has(winner)) {
            winners.add(winner)
        }
        if(winners.has(loser)) {
            winners.delete(loser)
            lostOnce.add(loser)
        } else if(lostOnce.has(loser)) {
            lostOnce.delete(loser)
            losers.add(loser)
        } else if(losers.has(loser)) {
            continue
        } else {
            lostOnce.add(loser)
        }

    }

    winners = Array.from(winners).sort((a, b) => a - b)
    lostOnce = Array.from(lostOnce).sort((a, b) => a - b)

    return [winners, lostOnce]
};


console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]])) //[[1,2,10],[4,5,7,8]]
console.log(findWinners([[2,3],[1,3],[5,4],[6,4]])) //[[1,2,5,6],[]]