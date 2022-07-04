export class GridSwapper {

    constructor(grid) {
        this.grid = grid
    }
    SwapCells(cell1, cell2) {
        console.log(this.grid.cells[cell1.x][cell1.y])

        cell1.x = [cell2.x, cell2.x = cell1.x][0]
        cell1.y = [cell2.y, cell2.y = cell1.y][0]
        
        this.grid.cells[cell1.x][cell1.y] = cell1
        this.grid.cells[cell2.x][cell2.x] = cell2

        console.log(this.grid.cells[cell1.x][cell1.y])    
    }

    SwapWithEmptyCell(cell) {
        console.log(cell, this.grid.emptyCell)
        this.SwapCells(cell, this.grid.emptyCell)
    }
}