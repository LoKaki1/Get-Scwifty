class GameGrid extends GridBase {

    constructor (length, cellsFactory) {
        super(length)
        this.emptyCell = null,
        this.cellsFactory = cellsFactory
    }

    MixGrid() {
        let cells = this.cellsFactory.CreateRandomCell(length * length - 1)
        for (let i = 0; i < length; i++) {
            this.cells.push
        }
    }

    SwapWithEmptyCell(cell) {

    }
}