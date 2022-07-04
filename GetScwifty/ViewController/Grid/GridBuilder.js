import { GridInput } from "./GridInput.js"

export class GridBuilder {
    constructor(gridController) {
        this.gridController = gridController
        this.gridInput = new GridInput()
        this.gridContainer = document.getElementById('container')
    }

    BuildGrid(grid = null) {
        if (grid == null){
            let length = this.gridInput.GetLength()
            grid = this.gridController.StartGrid(length)
            this.gridContainer.style.setProperty('--grid-rows', length);
            this.gridContainer.style.setProperty('--grid-cols', length);
        }

        for (let cellRow of grid.cells) {
            for (let cell of cellRow) {
                let cellChild = document.createElement('div')
                cellChild.className = 'cell-item'
                cellChild.value = cell
                cellChild.innerHTML = cell.value
                this.gridContainer.appendChild(cellChild)
            }
        }
    }

    DeleteGrid() {
        this.gridContainer.innerHTML = ''
    }

    RebuildGrid(grid = null){
        this.DeleteGrid()
        this.BuildGrid(grid)
    }

}