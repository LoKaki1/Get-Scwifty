import { GameGrid } from "./Grid/GameGrid.js"
import { PossibleMoves } from "./Moves/PossibleMove.js"

export class GameLogic {

    constructor(cellsFactoy) {
        this.gamGrid = null
        this.moves = new PossibleMoves()
        this.cellsFactoy = cellsFactoy
    }
    StartGame(length) {
        this.gamGrid = new GameGrid(length, this.cellsFactoy)
        this.gamGrid.StartGrid()
    }
    GetGrid() {
        return this.gamGrid
    }
    GetMoves() {
        let possibleMoves = this.moves.GetPossibleMoves(this.gamGrid)
        return possibleMoves
    }
}