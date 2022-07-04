export class GridController {

    constructor (gameLogicFactory, starter) {
        this.gameLogicFactory = gameLogicFactory
        this.gameLogic = null
        this.starter = starter
    }
    Start() {
        this.starter.AddEventToStartButton(() => {
            let length = this.starter.GridSizeStarter()
            console.log('clicked')
            this.StartGrid(length)
        }
        )
    }
    StartGrid(length) {
        this.gameLogic = this.gameLogicFactory.CreateGame()
        this.gameLogic.StartGame(length)
        this.starter.gridView.DeleteGrid()
        this.starter.Start(this.gameLogic.GetGrid())
    }

}