const NOT_INIT_CELL = 'EMPTY'
class GridBase {
    constructor(length) {
        this.not_init_cell = NOT_INIT_CELL
        this.length = length
        this.numOfCells = length * length
        this.cells = []
    }
    EmptyGrid() {
        for (let i = 0; i < this.length; i++){
            row = []
            for (let j = 0; j < this.length; j++) {
                let cell = new cellBase(j, i, this.not_init_cell)
                row.push()
            }
        }
    }
}