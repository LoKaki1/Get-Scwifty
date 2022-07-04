import { Swapper } from "../Swapper";
import { PossibleMoves } from "./PossibleMove";

export class Mover {

    constructor(grid) {
        this.swapper = new Swapper(grid)
        this.possibleMoves = new PossibleMoves()
    }

    Swap(cell) {
        this.swapper.SwapWithEmptyCell(cell)
    }
}