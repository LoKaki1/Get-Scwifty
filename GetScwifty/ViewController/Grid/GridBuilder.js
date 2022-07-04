export class GridBuilder {
    constructor(gridController) {
        this.gridController = gridController
    }

    BuildGrid() {
        grid = this.gridController.StartGrid()
        let gridContainer = document.getElementById('container')
        for (let cellRow of grid.cells) {
            for (let cell of cellRow) {
                let cellChild = document.createElement('div')
                cellChild.className('cell-item')
                cellChild.innerHTML = cell
                gridContainer.appendChild(cellChild)
            }
        }
    }

    ConnectToButton() {
        let button = document.getElementById('start-grid')
        button.addEventListener('click', this.BuildGrid)
    }
}