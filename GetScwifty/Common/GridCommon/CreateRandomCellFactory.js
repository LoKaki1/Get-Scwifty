class CreateRandomCellFactory {
    
    CreateRandomCell (numberOfCells) {
        let cells = []
        while(cells.length < numberOfCells) {
            let cellValue = Math.floor(Math.random() * 100) + 1;
            if(cells.indexOf(cellValue) === -1) {
                cells.push(cellValue)
            } 
        }
        return cells
    }
}