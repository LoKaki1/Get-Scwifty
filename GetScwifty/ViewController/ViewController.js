export class ViewController {
    constructor(gridController, movesController, starter) {
        this.gridController = gridController
        console.log(this.gridController)
        this.movesController = movesController
        this.starter = starter
    }

    Start() {
        console.log(this.gridController)
        this.starter.AddEventToStartButton(this.EventStart)
    }
    EventStart() {
        console.log(`i'm grid controller ${this.gridController}`)
        this.gridController.StartGrid()
        this.movesController.Start(this.gridController.gameLogic)
    }

}