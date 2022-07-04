export class MoveViewController {

    constructor(moveController, gridBuilder) {
        this.moveController = moveController
        this.gridBuilder = gridBuilder
        this.gridContainer = document.getElementById('container')
    }

    ConnectSwapCells() {
        let cells = this.gridContainer.children
        for (let cell of cells){ 
            cell.addEventListener('click', () => {
                this.moveController.SwapCells({x: 1, y: 2})
                this.gridBuilder.RebuildGrid()
            })
        }
    }

}