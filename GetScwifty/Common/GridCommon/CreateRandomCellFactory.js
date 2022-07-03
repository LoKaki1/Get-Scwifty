import { cellBase } from "./cellbase.js";
export class CreateRandomCellFactory {
    
    CreateRandomCell (grid) {
        let cells = []
        let x = 0
        let y = 0
        while(cells.length < grid.numberOfCells - 1) {
            let cellValue = Math.floor(Math.random() * grid.numberOfCells) + 1;
            if(cells.indexOf(cellValue) === -1) {
                let cell = new cellBase(x, y, cellValue)
                cells.push(cell)
                x += 1
                if (x >= grid.length){
                    x = 0
                    y += 1
                }
            } 
        }
        return cells
    }
}