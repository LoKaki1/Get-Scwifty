export class MoveViewController {

    constructor(gridBuilder) {
        this.gridBuilder = gridBuilder
        this.gridContainer = document.getElementById('container')
    }

    ConnectSwapCells(mover) {
        let cells = this.gridContainer.children
        for (let cell of cells) { 
            cell.addEventListener('click', () => {
                this.SwapCellsView(mover, cell)
            })
        }
    }

    SwapCellsView(mover, cell) {
        if(mover.SwapCells({x: cell.value.x, y: cell.value.y})) {
            this.gridBuilder.RebuildGrid()
            this.ConnectSwapCells(mover)
        }
    }

}