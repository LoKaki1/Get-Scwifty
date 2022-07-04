export class PossibleMoves {

    GetPossibleMoves(gameGrid) {
        let emptyCell = gameGrid.emptyCell
        let length = gameGrid.length
        let possibleMoves = []
        // TODO add this into strategey injection
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
        return possibleMoves
    }
}