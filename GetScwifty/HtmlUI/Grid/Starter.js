import { GridSize } from "./GridSize.js";
import { GridView } from "./GridView.js";

export class Starter {
    constructor() {
        this.gridSize = new GridSize()
        this.gridView = new GridView()
    }
  
    AddEventToStartButton(event) {
        let button = document.getElementById('start-game')
        console.log(event)
        button.addEventListener('click', event)
    }
    GridSizeStarter() {
        return this.gridSize.GetSize()
    }

    Start(grid) {
        this.gridView.DeleteGrid()
        this.gridView.BuildGrid(grid)
    }
}