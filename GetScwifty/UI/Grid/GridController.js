export class GridController {

    constructor (grid, gridView) {
        this.grid = grid
        this.gridView = gridView
    }

    Start() {
        let baseGrid = this.grid.StartGrid()
        this.gridView.BuildGrid(baseGrid.cells)
    }

}