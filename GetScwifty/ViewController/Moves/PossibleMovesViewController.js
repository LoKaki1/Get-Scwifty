export class PossibleMovesViewController {

    constructor (movesView) {
        this.movesView = movesView
    }

    ShowPossibleMoves(game) {
        let possibleMoves = game.GetMoves()
        console.log(possibleMoves)
        this.movesView.ViewMoves(possibleMoves) 
    }

    PossibleMovesListener(game) {
        // Think about giving the grid instead
        this.movesView.AddListenerToCell(game.gameGrid.emptyCell, () => {this.ShowPossibleMoves(game)})
    }
}