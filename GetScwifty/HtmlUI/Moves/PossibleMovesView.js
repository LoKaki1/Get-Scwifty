import { SwapViewController } from "../../ViewController/Moves/SwapViewController.js"

export class PossibleMovesView {

    constructor() {
        this.grid = document.getElementById('container')
        this.cells = this.grid.children
        this.swapper = new SwapViewController()
    }

    ViewMoves(moves, length, game) {
        for(let move of moves) {
            this.cells[move[1] * length + move[0]].style.backgroundColor = 'red'
            this.cells[move[1] * length + move[0]].addEventListener('click', () =>  {
                this.swapper.SwapCells({x: move[0], y: move[1]}, game)
                this.cells[move[1] * length + move[0]].style.backgroundColor = 'white'
            })
        }
    }

    AddListenerToCell(cell, length, event) {
        this.cells[length * cell.y + cell.x].addEventListener('click', event)
    }
}