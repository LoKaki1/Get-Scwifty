const NOT_INIT_CELL = 'EMPTY'
class GridBase {
    constructor(length) {
        this.not_init_cell = NOT_INIT_CELL
        this.length = length
        this.numOfCells = length * length
        this.cells = []
    }
}