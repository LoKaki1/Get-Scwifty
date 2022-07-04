import { cellBase } from "../cellbase.js"

export class CellCreatorHelper {
    randomNumber(min, max){ 
        return Math.floor(Math.random() * max - 1) + min 
    }
    insertCell(cells, cellValues, x, y, cellValue){
        let cell = new cellBase(x, y, cellValue)
        cells.push(cell)
        cellValues.push(cellValue)
    }
    insertCellIfUniqueValue(cells, cellValues, x, y, cellValue){
        if(cellValues.indexOf(cellValue) === -1) {
            insertCell(cells, cellValues, x, y, cellValue)
            return true
        } 
        return false
    }
}