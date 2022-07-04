export class PossibleMovesView {

    constructor (movesView) {
        this.movesView = movesView
    }

    ShowPossibleMoves(game) {
        let possibleMoves = game.GetMoves()
        this.movesView.ViewMoves(possibleMoves) 
    }
}