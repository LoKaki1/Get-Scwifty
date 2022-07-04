import { GridBase } from '../../Common/GridCommon/GridBase.js'
import { cellBase } from '../../Common/GridCommon/cellbase.js'
import { GridMixer } from './GridMixer.js'
import { Swapper } from './Swapper.js'
export class GameGrid extends GridBase {

    constructor (length, cellsFactory) {
        super(length)
        this.emptyCell = new cellBase(length - 1, length - 1, this.emptyCellValue)
        this.gridMixer = new GridMixer(cellsFactory, this)
        this.gridSwapper = new Swapper(this)
        this.cellsFactory = cellsFactory
        this.cells = this.InitCells()
    }
    
    InitCells() {
        let cells = []
        for(let i = 0; i < this.length; i++){
            let subCells = []
            for (let j = 0; j < this.length; j++){
                subCells.push(new cellBase(i, j ,this.emptyCellValue))
            }
            cells.push(subCells)
        }
        return cells
    }

    InitilizeGrid() { 
        this.gridMixer.MixCells()
        this.StartEmptyCell()
        return this
    }
    
    StartEmptyCell() {
        let generatedCell = this.cellsFactory.RandomCell(this)
        this.gridSwapper.SwapCells(this.cells[generatedCell.x][generatedCell.y], this.emptyCell, this)
    }
}