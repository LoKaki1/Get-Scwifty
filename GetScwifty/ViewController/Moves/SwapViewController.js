export class SwapViewController {
    constructor() {
    }

    SwapCells(cell, game) {
        game.gameGrid.gridSwapper.SwapWithEmptyCell(cell)
    }
}