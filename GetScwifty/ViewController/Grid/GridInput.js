export class GridInput {

    constructor () {
        this.length = document.getElementById('grid-size')
    }
    
    GetLength() {
        return this.length.value
    }


}