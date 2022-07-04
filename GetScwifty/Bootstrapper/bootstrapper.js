import { CellFactory } from "../Common/GridCommon/CellFactory.js";
import { GameLogic } from "../BL/GameLogic.js";
import { GameController } from "../Controller/GameController.js";
import { ViewController } from "../ViewController/ViewController.js";
export class Bootstrapper {

    Init() {
        let cellsFactory = new CellFactory()
        let gameLogic = new GameLogic(cellsFactory)
        let gameController = new GameController(gameLogic)
        let viewController = new ViewController(gameController)
        return viewController
    }

}