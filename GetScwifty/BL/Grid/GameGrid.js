class GameGrid extends GridBase {

    constructor (length, cellsFactory) {
        super(length)
        this.emptyCell = null,
        this.cellsFactory = cellsFactory
    }

    MixGrid() {
        let cells = this.cellsFactory.CreateRandomCell(this.length * this.length - 1)
        for (let i in cells) {
            this.cells[i.x][i.y] = i.value
        }
    }

    SwapWithEmptyCell(cell) {

    }
}