import { GridInput } from "./GridInput"

export class GridBuilder {
    constructor(gridController) {
        this.gridController = gridController
        this.gridInput = new GridInput()
    }

    BuildGrid() {
        length = this.gridInput.GetLength()
        grid = this.gridController.StartGrid(length)
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