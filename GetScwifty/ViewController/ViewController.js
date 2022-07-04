import { GridBuilder } from "./Grid/GridBuilder.js"
import { MoveViewController } from "./Move/MoveViewController.js"

export class ViewController {

    constructor (gameController) {
        this.gameController = gameController
        this.GridBuilder = new GridBuilder(gameController.gridController)
        this.gridMover = new MoveViewController()
    }

    ConnectButtonToFunctions() {     
        this.GridBuilder.ConnectToButton()
    }

}