export class GridController {

    constructor (gameLogicFactory, starter) {
        this.gameLogicFactory = gameLogicFactory
        this.gameLogic = null
        this.starter = starter
    }

    StartGrid() {
        let length = this.starter.GridSizeStarter()
        this.gameLogic = this.gameLogicFactory.CreateGame()
        this.gameLogic.CreateBoard(length) 
        this.starter.PrintGridOnScreen(this.gameLogic.gameGrid)
    }
}