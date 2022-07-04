import { Swapper } from "../Grid/Swapper.js";
import { PossibleMoves } from "./PossibleMove.js";

export class Mover {

    constructor(gameLogic) {
        this.gameLogic = gameLogic
        this.swapper = new Swapper()
        this.possibleMoves = new PossibleMoves()
    }

    Swap(cell) {
        if (this.possibleMoves.IsMovePossible(cell, this.gameLogic.gameGrid)){
            this.swapper.SwapWithEmptyCell(this.gameLogic.gameGrid, cell)
            return true
        }
        return false
    }
}