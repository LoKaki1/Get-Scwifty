import { CellFactory }  from '../Common/GridCommon/CreateRandomCellFactory.js'
import { GameGrid } from '../BL/Grid/GameGrid.js'

export class bootstrapper {
    init() {
        let length = 4
        let factory = new CellFactory()
        let game = new GameGrid(length, factory)
        return game
    }
}
