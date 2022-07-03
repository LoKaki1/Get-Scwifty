import { CreateRandomCellFactory }  from '../Common/GridCommon/CreateRandomCellFactory.js'
import { GameGrid } from '../BL/Grid/GameGrid.js'

export class bootstrapper {
    init() {
        let length = 4
        let factory = new CreateRandomCellFactory()
        let game = new GameGrid(length, factory)
        return game
    }
}
