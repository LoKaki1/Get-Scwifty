import { GridBase } from '../../Common/GridCommon/GridBase.js'
import { cellBase } from '../../Common/GridCommon/cellbase.js'
import { GridMixer } from './GridMixer.js'
import { GridSwapper } from './GridSwapper.js'
export class GameGrid extends GridBase {

    constructor (length, cellsFactory) {
        super(length)
        this.emptyCell = new cellBase(length - 1, length - 1, this.emptyCellValue)
        this.gridMixer = new GridMixer(cellsFactory, this)
        this.gridSwapper = new GridSwapper(this)
        this.cellsFactory = cellsFactory
    }

    StartGrid() {
        this.gridMixer.MixGrid()
        this.StartEmptyCell()
    }
    
    StartEmptyCell() {
        let generatedCell = this.cellsFactory.RandomCell(this)
        this.gridSwapper.SwapWithEmptyCell(this.cells[generatedCell.x][generatedCell.y])
        console.log(this.emptyCell.x, this.emptyCell.y)
    }
    GetCells(){
        return this.cells
    }
}