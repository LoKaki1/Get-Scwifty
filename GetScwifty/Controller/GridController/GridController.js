
export class GridController {

    constructor(grid) {
        this.grid = grid 
    }
    StartGrid(length) {
        return this.grid.CreateBoard(length)
    }
}