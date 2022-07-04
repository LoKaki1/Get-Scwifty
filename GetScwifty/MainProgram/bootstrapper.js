import { CellFactory }  from '../Common/GridCommon/CreateRandomCellFactory.js'
import { GridController } from '../ViewController/Grid/GridController.js'
import { GridStarter } from '../HtmlUI/Grid/GridStarter.js'
import { GameFactory } from '../BL/GameFactory.js'
import { MovesController } from '../ViewController/Moves/MovesController.js'
import { ViewController } from '../ViewController/ViewController.js'
import { PossibleMovesView } from '../HtmlUI/Moves/PossibleMovesView.js'
import { Starter } from '../HtmlUI/Starter.js'

export class bootstrapper {

    init() {
        let factory = new CellFactory()
        let gameFactory = new GameFactory(factory)
        let uiStarter = new GridStarter()
        let starter = new Starter()
        let moveView = new PossibleMovesView()
        let gridUI = new GridController(gameFactory, uiStarter)
        let movesUI = new MovesController(moveView)
        let gameUI = new ViewController(gridUI, movesUI, starter)
        return gameUI
    }
}
