export class Swapper {

    SwapCells(cell1, cell2, grid) {
        console.log(grid)
        cell1.x = [cell2.x, cell2.x = cell1.x][0]
        cell1.y = [cell2.y, cell2.y = cell1.y][0]
        
        grid.cells[cell1.x][cell1.y] = cell1
        grid.cells[cell2.x][cell2.x] = cell2

        console.log(grid.cells[cell1.x][cell1.y])    
    }

    SwapWithEmptyCell(grid, cell) {
        this.SwapCells(cell, grid.emptyCell, grid)
    }
}