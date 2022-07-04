export class GridController {

    constructor (gameLogic, starter) {
        this.gameLogic = gameLogic
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
        this.gameLogic.StartGame(length)
        this.starter.Start(this.gameLogic.GetGrid())
    }

}