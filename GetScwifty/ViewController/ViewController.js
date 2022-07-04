class ViewController {
    constructor(gridController, movesController) {
        this.gridController = gridController
        this.movesController = movesController
    }

    Start() {
        this.gridController.Start()
        this.movesController.Start()
    }
}