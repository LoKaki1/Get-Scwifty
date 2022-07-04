import { CellFactory }  from '../Common/GridCommon/CreateRandomCellFactory.js'
import { GameGrid } from '../BL/Grid/GameGrid.js'
import { GridController } from '../UI/Grid/GridController.js'
import { GridView } from '../HtmlUI/Grid/GridView.js'
import { GameLogic } from '../BL/GameLogic.js'
import { Starter } from '../HtmlUI/Grid/Starter.js'

export class bootstrapper {

    init() {
        let factory = new CellFactory()
        let game = new GameLogic(factory)
        let uiStarter = new Starter()
        let gameUI = new GridController(game, uiStarter)
        return gameUI
    }
}
