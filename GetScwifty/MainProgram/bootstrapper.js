import { CellFactory }  from '../Common/GridCommon/CreateRandomCellFactory.js'
import { GameGrid } from '../BL/Grid/GameGrid.js'
import { GridController } from '../UI/Grid/GridController.js'
import { GridView } from '../HtmlUI/Grid/GridView.js'

export class bootstrapper {
    init() {
        let length = document.getElementById('grid-size').value
        let factory = new CellFactory()
        let game = new GameGrid(length, factory)
        let htmlGrid = new GridView()
        let gameUI = new GridController(game, htmlGrid)
        return gameUI
    }
}
