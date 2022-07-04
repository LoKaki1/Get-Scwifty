export class GridMixer {
    constructor (cellsFactory, Grid) {
        this.cellsFactory = cellsFactory
        this.grid = Grid
    }
    MixCells() {
        let cells = this.cellsFactory.CreateRandomCells(this.grid)
        for (let cell of cells) {
            this.grid.cells[cell.x][cell.y] = cell
        }
    }
}