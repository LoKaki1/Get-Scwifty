export class ViewController {
    constructor(gridController, movesController, starter) {
        this.gridController = gridController
        this.movesController = movesController
        this.starter = starter
    }

    Start() {
        this.starter.AddEventToStartButton(() => {this.EventStart(this.gridController, this.movesController)})
    }
    EventStart(gridController, movesController) {
        gridController.StartGrid()
        movesController.MoveListener(gridController.gameLogic)
    }
}