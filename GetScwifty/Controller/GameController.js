import { GridController } from "./GridController/GridController"

export class GameController {

    constructor (gameLogic) {
        this.gameLogic = gameLogic
        this.gridController = new GridController(this.gameLogic.ganeGrid)
    }

    GameControllerStarter(length) {
        this.gridController.StartGrid(length)
    }
}