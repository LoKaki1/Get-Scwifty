import { bootstrapper } from "./MainProgram/bootstrapper.js";
let me = new bootstrapper()
let game = me.init()
game.StartGrid()
let cellsValue = []
for (let i = 0; i < game.length; i++) {
    let rowsValue = []
    for (let j = 0; j < game.length; j++){
        rowsValue.push(game.GetCells()[i][j].value)
    }
    cellsValue.push(rowsValue)
}
console.table(cellsValue)
