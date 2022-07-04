import { GridBuilder } from "./Grid/GridBuilder.js"
import { MoveViewController } from "./Move/MoveViewController.js"

export class ViewController {

    constructor (gameController) {
        this.gameController = gameController
        this.GridBuilder = new GridBuilder(gameController.gridController)
        this.gridMover = new MoveViewController(this.GridBuilder)
    }

    ConnectButtonToFunctions() {     
        this.ConnectToButton()
    }
    
    ConnectToButton() {
        let button = document.getElementById('start-grid')
        button.addEventListener('click', () => {
            this.GridBuilder.RebuildGrid()
            this.gridMover.ConnectSwapCells(this.gameController.moveController)
        })
    }

}