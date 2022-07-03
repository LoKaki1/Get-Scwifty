import { GridBase } from '../../Common/GridCommon/GridBase.js'
import { cellBase } from '../../Common/GridCommon/cellbase.js'
import { GridMixer } from './GridMixer.js'
export class GameGrid extends GridBase {

    constructor (length, cellsFactory) {
        super(length)
        this.emptyCell = null
        this.gridMixer = new GridMixer(cellsFactory, this)
    }

    Start() {
        this.gridMixer.MixGrid()
    }
    
    SwapCells(cell1, cell2) {
        console.log(cell1, cell2)
        this.cells[cell1.x][cell1.y] = cell2
        this.cells[cell2.x][cell2.y] = cell1
        cell1.x = [cell2.x, cell2.x = cell1.x][0]
        cell1.y = [cell2.y, cell2.y = cell1.y][0]
    }

    SwapWithEmptyCell(cell) {
        this.SwapCells(cell, this.emptyCell)
    }
    GetCells(){
        return this.cells
    }
}