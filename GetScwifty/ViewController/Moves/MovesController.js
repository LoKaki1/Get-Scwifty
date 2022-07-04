import { PossibleMovesViewController } from "./PossibleMovesViewController.js"

export class MovesController {

    constructor(movesView) {
        this.possibleMovesViewController = new PossibleMovesViewController(movesView)
        console.log(`hi - ${this.possibleMovesViewController}`)
    }

    Start(game) {
        console.log(game)
        console.log(`hi - ${this}`)
        this.possibleMovesViewController.Start(game)
    }
}