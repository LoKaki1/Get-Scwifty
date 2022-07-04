import { GameGrid } from "./Grid/GameGrid.js"
import { PossibleMoves } from "./Moves/PossibleMove.js"

export class GameLogic {

    constructor(cellsFactoy) {
        this.gameGrid = null
        this.moves = new PossibleMoves()
        this.cellsFactoy = cellsFactoy
    }
    CreateBoard(length) {
        this.gameGrid = new GameGrid(length, this.cellsFactoy)
        this.gameGrid.InitilizeGrid()
    }

    GetMoves() {
        let possibleMoves = this.moves.GetPossibleMoves(this.gameGrid)
        return possibleMoves
    }
}