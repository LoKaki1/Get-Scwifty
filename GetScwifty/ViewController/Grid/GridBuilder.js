import { GridInput } from "./GridInput.js"

export class GridBuilder {
    constructor(gridController) {
        this.gridController = gridController
        this.gridInput = new GridInput()
        this.gridContainer = document.getElementById('container')
    }

    BuildGrid() {
        let length = this.gridInput.GetLength()
        let grid = this.gridController.StartGrid(length)
        this.gridContainer.style.setProperty('--grid-rows', length);
        this.gridContainer.style.setProperty('--grid-cols', length);
        for (let cellRow of grid.cells) {
            for (let cell of cellRow) {
                let cellChild = document.createElement('div')
                cellChild.className = 'cell-item'
                cellChild.innerHTML = cell.value
                this.gridContainer.appendChild(cellChild)
            }
        }
    }

    DeleteGrid() {
        this.gridContainer.innerHTML = ''
    }

    RebuildGrid(){
        this.DeleteGrid()
        this.BuildGrid()
    }

    ConnectToButton() {
        let button = document.getElementById('start-grid')
        button.addEventListener('click', () => {
            this.RebuildGrid()
        })
    }
}