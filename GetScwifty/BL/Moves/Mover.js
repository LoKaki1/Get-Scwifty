import { Swapper } from "../Grid/Swapper.js";
import { PossibleMoves } from "./PossibleMove.js";

export class Mover {

    constructor(gameLogic) {
        this.gameLogic = gameLogic
        this.swapper = new Swapper()
        this.possibleMoves = new PossibleMoves()
    }

    Swap(cell) {
        console.log(this.gameLogic)
        this.swapper.SwapWithEmptyCell(this.gameLogic.gameGrid, cell)
    }
}