class CreateRandomCellFactory {
    
    CreateRandomCell (grid) {
        let cells = []
        let x, y = (0, 0)
        while(cells.length < numberOfCells) {
            let cellValue = Math.floor(Math.random() * numberOfCells) + 1;
            if(cells.indexOf(cellValue) === -1) {
                x +
                cells.push(cellValue)
            } 
        }
        return cells
    }
}