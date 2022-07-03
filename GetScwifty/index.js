import { bootstrapper } from "./MainProgram/bootstrapper.js";
let me = new bootstrapper()
let game = me.init()
game.MixGrid()
alert(game.cells)