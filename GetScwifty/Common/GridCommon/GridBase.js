import { cellBase } from "./cellbase.js"
const EMPTY_CELL = 'EMPTY'
export class GridBase {
    constructor(length) {
        this.emptyCellValue = EMPTY_CELL
        this.length = length
        this.numberOfCells = length * length
        this.cells = null
    }
}