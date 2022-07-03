import { bootstrapper } from "./MainProgram/bootstrapper.js";
let me = new bootstrapper()
let game = me.init()
game.StartGrid()
console.table(game.cells)
