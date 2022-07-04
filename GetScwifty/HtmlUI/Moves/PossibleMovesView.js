export class PossibleMovesView {

    constructor() {
        this.grid = document.getElementById('container')
        this.cells = this.grid.children

    }

    ViewMoves(moves) {
        for(let move of moves) {
            this.cells[(move[0] + 1) * (move[1] + 1) - 1].style.backgroundColor = 'red'
        }
    }
    AddListenerToCell(cell, event) {
        this.cells[(cell.x + 1) * (cell.y + 1) - 1].addEventListener('click', event)
    }
}