const EMPTY_CELL = 'EMPTY'
export class GridBase {
    constructor(length) {
        this.emptyCellValue = EMPTY_CELL
        this.length = length
        this.numberOfCells = length * length
        this.cells = this.generateList()
    }
    generateList() {
        let cells = []
        for(let i = 0; i < this.length; i++){
            let subCells = []
            for (let j = 0; j < this.length; j++){
                subCells.push(EMPTY_CELL)
            }
            cells.push(subCells)
        }
        console.table(cells)
        return cells
    }


}