import { cellBase } from "./cellbase.js";

const randomNumber = (min, max) => { return Math.floor(Math.random() * max - 1) + min }
export class CellFactory {
    
    CreateRandomCells (grid) {
        let cells = []
        let cellsValue = []
        let x = 0
        let y = 0
        while(cells.length < grid.numberOfCells - 1) {
            let cellValue = randomNumber(2, grid.numberOfCells);
            if(cellsValue.indexOf(cellValue) === -1) {
                let cell = new cellBase(x, y, cellValue)
                cells.push(cell)
                cellsValue.push(cellValue)
                x += 1
                if (x >= grid.length){
                    x = 0
                    y += 1
                }
            } 
        }
        return cells
    }
    RandomCell(grid) {
        let x = randomNumber(1, grid.length)
        let y = randomNumber(1, grid.length)
        console.log(x, y)
        let value = grid.emptyCellValue
        return new cellBase(x, y, value)
    }
}