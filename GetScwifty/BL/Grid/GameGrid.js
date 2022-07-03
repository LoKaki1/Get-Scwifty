import { GridBase } from '../../Common/GridCommon/GridBase.js'
import { cellBase } from '../../Common/GridCommon/cellbase.js'
export class GameGrid extends GridBase {

    constructor (length, cellsFactory) {
        super(length)
        this.emptyCell = null
        this.cellsFactory = cellsFactory

    }

    MixCells() {
        let cells = this.cellsFactory.CreateRandomCell(this)
        for (let cell of cells) {
            this.cells[cell.x][cell.y] = cell
        }
    }
    MixGrid() {
        this.MixCells()
        this.EmptyCellPositioning()
    }

    EmptyCellPositioning() {
        let x = Math.floor(Math.random() * this.length - 1) + 1
        let y = Math.floor(Math.random() * this.length - 1) + 1
        this.emptyCell = new cellBase(this.length - 1, this.length - 1, this.emptyCellValue)
        this.cells[this.length - 1][this.length - 1] = this.emptyCell
        console.log(x, y)
        this.SwapCells(this.cells[x][y], this.emptyCell)
    }
    
    SwapCells(cell1, cell2) {
        console.log(cell1, cell2)
        this.cells[cell1.x][cell1.y] = cell2
        this.cells[cell2.x][cell2.y] = cell1
        [cell1.x, cell2.x] = [cell2.x, cell1.x]
        [cell1.y, cell2.y] = [cell2.y, cell1.y]
    }

    SwapWithEmptyCell(cell) {
        this.SwapCells(cell, this.emptyCell)
    }
    GetCells(){
        return this.cells
    }
}