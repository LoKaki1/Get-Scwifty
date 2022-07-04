import { StartGrid } from "./StartGrid.js";

export class GridController {
    constructor() {
        this.startGrid = new StartGrid()
    }   

    StartGrid(grid) {
        return this.startGrid.CreateGrid(grid)
    }
}