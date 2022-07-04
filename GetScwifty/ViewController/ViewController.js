import { GridBuilder } from "./Grid/GridBuilder.js"
import { MoveViewController } from "./Move/MoveViewController.js"

export class ViewController {

    constructor (gameController) {
        this.gameController = gameController
        this.GridBuilder = new GridBuilder(gameController.gridController)
        this.gridMover = new MoveViewController(gameController.moveController, this.GridBuilder)
    }

    ConnectButtonToFunctions() {     
        this.GridBuilder.ConnectToButton()
        this.gridMover.ConnectSwapCells()
    }

}