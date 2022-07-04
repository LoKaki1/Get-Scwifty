export class MoveController {

    constructor(mover) {
        this.mover = mover
    }

    SwapCells(cell) {
        this.mover.Swap(cell)
    }

}