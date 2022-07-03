
import { cellBase } from "../../Common/GridCommon/cellbase.js"

export class GridMixer {
    constructor (cellsFactory, Grid) {
        this.cellsFactory = cellsFactory
        this.grid = Grid
    }
    MixCells() {
        let cells = this.cellsFactory.CreateRandomCell(this.grid)
        for (let cell of cells) {
            this.grid.cells[cell.x][cell.y] = cell
        }
    }
    MixGrid() {
        this.MixCells()
        this.MixEmptyCell()
    }

    MixEmptyCell() {
        let x = Math.floor(Math.random() * this.grid.length - 1) + 1
        let y = Math.floor(Math.random() * this.grid.length - 1) + 1
        this.grid.emptyCell = new cellBase(this.grid.length - 1,this.grid.length - 1, this.grid.emptyCellValue)

        this.grid.cells[this.grid.length - 1][this.grid.length - 1] = this.grid.emptyCell
        this.grid.SwapCells(this.grid.cells[x][y], this.grid.emptyCell)
    }
}