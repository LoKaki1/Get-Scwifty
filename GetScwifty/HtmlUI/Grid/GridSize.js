export class GridSize {
    constructor() {
        this.inputSize = document.getElementById('grid-size')
    }
    GetSize() {
        return this.inputSize.value
    }
}