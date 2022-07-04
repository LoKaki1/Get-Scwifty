export class PossibleMoves {

    GetPossibleMoves(gameGrid) {
        let emptyCell = gameGrid.emptyCell
        let length = gameGrid.length
        let possibleMoves = []

        if (0 < emptyCell.x) {
            possibleMoves.push([emptyCell.x - 1, emptyCell.y])
        }
        if (0 < emptyCell.y) {
            possibleMoves.push([emptyCell.x, emptyCell.y - 1])
        }
        if (length - 1 > emptyCell.x) {
            possibleMoves.push([emptyCell.x + 1, emptyCell.y])
        }
        if (length - 1 > emptyCell.y) {
            possibleMoves.push([emptyCell.x, emptyCell.y + 1])
        }
        console.log(possibleMoves)
        return possibleMoves
    }

    IsMovePossible(cell, gameGrid) {
        let possibleMoves = this.GetPossibleMoves(gameGrid)
        let x = cell.x
        let y = cell.y
        for(let i of possibleMoves) {
            console.log("is possible?", i, x, y, i[0] == x && i[1] == y)
            if(i[0] == x && i[1] == y){
                return true
            }
        }
        return false
      
    }
}