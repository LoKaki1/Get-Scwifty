import { GameGrid } from "./Grid/GameGrid.js"

export class GameLogic {

    constructor(cellsFactoy) {
        this.gamGrid = null
        this.cellsFactoy = cellsFactoy
    }
    StartGame(length) {
        this.gamGrid = new GameGrid(length, this.cellsFactoy)
        this.gamGrid.StartGrid()
    }
    GetGrid() {
        return this.gamGrid
    }
}