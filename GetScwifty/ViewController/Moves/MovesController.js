import { PossibleMovesViewController } from "./PossibleMovesViewController.js"

export class MovesController {

    constructor(movesView) {
        this.possibleMovesViewController = new PossibleMovesViewController(movesView)
        console.log(`hi - ${this.possibleMovesViewController}`)
    }

    MoveListener(game) {
        this.possibleMovesViewController.PossibleMovesListener(game)
    }
}