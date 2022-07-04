export class PossibleMovesViewController {

    constructor (possibleMovesView) {
        this.possibleMovesView = possibleMovesView
    }

    ShowPossibleMoves(game) {
        let possibleMoves = game.GetMoves()
        this.possibleMovesView.ViewMoves(possibleMoves, game.gameGrid.length) 
    }

    PossibleMovesListener(game) {
        // Think about giving the grid instead
        this.possibleMovesView.AddListenerToCell(game.gameGrid.emptyCell, game.gameGrid.length, () => {
            this.ShowPossibleMoves(game)
        })
    }
}