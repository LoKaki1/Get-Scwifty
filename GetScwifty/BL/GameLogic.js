import { GameGrid } from "./Grid/GameGrid.js"
import { Mover } from "./Moves/Mover.js"

export class GameLogic {

    constructor(cellsFactoy) {
        this.gameGrid = null
        this.mover = null
        this.cellsFactoy = cellsFactoy
    }
    CreateBoard(length) {
        this.gameGrid = new GameGrid(length, this.cellsFactoy)
        this.mover = new Mover(this.gameGrid)
        return this.gameGrid.InitilizeGrid()
    }
}