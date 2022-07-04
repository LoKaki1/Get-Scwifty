export class PossibleMovesView {

    constructor() {
        this.grid = document.getElementById('container')
        this.cells = this.grid.children
    }

    ViewMoves(moves, length) {
        for(let move of moves) {
            this.cells[move[1] * length + move[0]].style.backgroundColor = 'red'
        }
    }

    AddListenerToCell(cell, length, event) {
        this.cells[length * cell.y + cell.x].addEventListener('click', event)
    }
}