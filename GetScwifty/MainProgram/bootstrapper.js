import { CellFactory }  from '../Common/GridCommon/CreateRandomCellFactory.js'
import { GridController } from '../ViewController/Grid/GridController.js'
import { Starter } from '../HtmlUI/Grid/Starter.js'
import { GameFactory } from '../BL/GameFactory.js'

export class bootstrapper {

    init() {
        let factory = new CellFactory()
        let gameFactory = new GameFactory(factory)
        let uiStarter = new Starter()
        let gameUI = new GridController(gameFactory, uiStarter)
        return gameUI
    }
}
