const EMPTY_CELL = ''
export class GridBase {
    constructor(length) {
        this.emptyCellValue = EMPTY_CELL
        this.length = length
        this.numberOfCells = length * length
        this.cells = null
    }
}