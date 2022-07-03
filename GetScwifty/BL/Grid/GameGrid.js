class GameGrid extends GridBase {

    constructor (length, cellsFactory) {
        super(length)
        this.emptyCell = null
        this.cellsFactory = cellsFactory
    }

    MixCells() {
        let cells = this.cellsFactory.CreateRandomCell(this.length * this.length - 1)
        for (let i in cells) {
            this.cells[i.x][i.y] = i.value
        }
    }
    MixGrid() {
        this.MixCells()
        this.EmptyCellPositioning()
    }

    EmptyCellPositioning() {
        let x = Math.floor(Math.random() * this.length) + 1
        let y = Math.floor(Math.random() * this.length) + 1
        this.emptyCell = new cellBase(this.length - 1, this.length - 1, this.emptyCellValue)
        this.cells[this.length - 1].push(this.emptyCell)
        this.SwapCells(this.cells[x][y], this.emptyCell)
    }
    
    SwapCells(cell1, cell2) {
        this.cells[cell1.x][cell1.y] = cell2.value
        this.cells[cell2.x][cell2.y] = cell1.value
        [cell1.x, cell2.x] = [cell2.x, cell1.x]
        [cell1.y, cell2.y] = [cell2.y, cell1.y]
    }

    SwapWithEmptyCell(cell) {
        this.SwapCells(cell, this.emptyCell)
    }
}