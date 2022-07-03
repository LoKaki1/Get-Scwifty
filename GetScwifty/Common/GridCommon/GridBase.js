const EMPTY_CELL = 'EMPTY'
class GridBase {
    constructor(length) {
        this.emptyCellValue = EMPTY_CELL
        this.length = length
        this.numOfCells = length * length
        this.cells = []
    }
}