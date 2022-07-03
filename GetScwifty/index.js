import { bootstrapper } from "./MainProgram/bootstrapper.js";
let me = new bootstrapper()
let game = me.init()
game.Start()
console.table(game.cells)
