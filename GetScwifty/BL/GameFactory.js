import { GameLogic } from "./GameLogic.js"

export class GameFactory {
    constructor (cellsFactory) {
        this.cellsFactory = cellsFactory
    }

    CreateGame() {
        let gameLogic = new GameLogic(this.cellsFactory)
        return gameLogic
    }
}