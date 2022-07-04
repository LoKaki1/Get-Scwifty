import { GridBuilder } from "./Grid/GridBuilder.js"

export class ViewController {

    constructor (gameController) {
        this.gameController = gameController
        this.GridBuilder = new GridBuilder(gameController.gridController)
    }

    ConnectButtonToFunctions() {     
        this.GridBuilder.ConnectToButton()
    }

}