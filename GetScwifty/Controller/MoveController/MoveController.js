export class MoveController {

    constructor(mover) {
        this.mover = mover
    }

    SwapCells(cell) {
        return this.mover.Swap(cell)
    }

}