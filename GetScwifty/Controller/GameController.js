import { GridController } from "./GridController/GridController.js"

export class GameController {
    constructor (gameLogic) {
        this.gameLogic = gameLogic
        this.gridController = new GridController(this.gameLogic)
    }
}