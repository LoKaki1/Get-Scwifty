export class PossibleMovesViewController {

    constructor (movesView) {
        this.movesView = movesView
    }

    ShowPossibleMoves(game) {
        let possibleMoves = game.GetMoves()
        this.movesView.ViewMoves(possibleMoves, game.gameGrid.length) 
    }

    PossibleMovesListener(game) {
        // Think about giving the grid instead
        this.movesView.AddListenerToCell(game.gameGrid.emptyCell, game.gameGrid.length, () => {
            this.ShowPossibleMoves(game)
        })
    }
}