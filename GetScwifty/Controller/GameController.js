import { GridController } from "./GridController/GridController.js"
import { MoveController } from "./MoveController/MoveController.js"

export class GameController {
    constructor (gameLogic) {
        this.gameLogic = gameLogic
        this.gridController = new GridController(this.gameLogic)
        this.moveController = new MoveController(this.gameLogic.mover)
    }
}