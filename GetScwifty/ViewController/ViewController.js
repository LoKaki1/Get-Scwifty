export class ViewController {
    constructor(gridController, movesController, starter) {
        this.gridController = gridController
        this.movesController = movesController
        starter.AddEventToStartButton(this.Start)
    }

    Start() {
        this.gridController.StartGrid()
        this.movesController.Start(this.gridController.gameLogic)
    }

}