import { cellBase } from "./cellbase.js";

const randomNumber = (min, max) => { return Math.floor(Math.random() * max - 1) + min }
const insertCell = (cells, cellValues, x, y, cellValue) => {
    let cell = new cellBase(x, y, cellValue)
    cells.push(cell)
    cellValues.push(cellValue)
}
const insertCellIfUniqueValue = (cells, cellValues, x, y, cellValue) => {
    if(cellValues.indexOf(cellValue) === -1) {
        insertCell(cells, cellValues, x, y, cellValue)
        return true
    } 
    return false
}
export class CellFactory {
    
    CreateRandomCells (grid) {
        let cells = []
        let cellValues = []
        let x = 0
        let y = 0
        while(cells.length < grid.numberOfCells - 1) {
            let cellValue = randomNumber(2, grid.numberOfCells);
            if (insertCellIfUniqueValue(cells, cellValues, x, y, cellValue))
            {   
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
        let value = grid.emptyCellValue
        let newCellBase =  new cellBase(x, y, value)
        return newCellBase
    }
}