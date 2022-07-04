import { GridSize } from "./GridSize.js";
import { GridView } from "./GridView.js";

export class GridStarter {
    constructor() {
        this.gridSize = new GridSize()
        this.gridView = new GridView()
    }
    GridSizeStarter() {
        return this.gridSize.GetSize()
    }

    PrintGridOnScreen(grid) {
        this.gridView.DeleteGrid()
        this.gridView.BuildGrid(grid)
    }
}