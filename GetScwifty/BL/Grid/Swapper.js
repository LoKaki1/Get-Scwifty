export class Swapper {

    SwapCells(cell1, cell2, grid) {
        grid.cells[cell2.x][cell2.y].value = cell1.value
        grid.cells[cell1.x][cell1.y].value = grid.emptyCellValue
    }

    SwapWithEmptyCell(grid, cell) {
        this.SwapCells(cell, grid.emptyCell, grid)
    }
}