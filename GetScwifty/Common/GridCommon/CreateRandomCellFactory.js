import { cellBase } from "./cellbase.js";
import { CellCreatorHelper } from "./helpers/CellCreatorHelper.js";


export class CellFactory {
    constructor() {
        this.cellCreator = new CellCreatorHelper()
    }
    CreateRandomCells (grid) {
        let cells = []
        let cellValues = []
        let x = 0
        let y = 0

        while(cells.length < grid.numberOfCells - 1) {
            let cellValue = this.cellCreator.randomNumber(2, grid.numberOfCells);
            if (this.cellCreator.insertCellIfUniqueValue(cells, cellValues, x, y, cellValue))
            {   
                x += 1
                if (x >= grid.length){
                    x = 0
                    y += 1
                }
            }
        }
        return cells
    }
    RandomCell(grid) {
        let x = this.cellCreator.randomNumber(1, grid.length)
        let y = this.cellCreator.randomNumber(1, grid.length)
        let value = grid.emptyCellValue
        let newCellBase =  new cellBase(x, y, value)
        return newCellBase
    }
}