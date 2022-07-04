
export class GridController {

    constructor(game) {
        this.game = game 
    }

    StartGrid(length) {
        return this.game.CreateBoard(length)
    }
}