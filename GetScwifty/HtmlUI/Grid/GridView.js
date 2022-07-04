export class GridView {

    BuildGrid (grid) {
        let container = document.getElementById('container')
        container.style.setProperty('--grid-rows', grid.length);
        container.style.setProperty('--grid-cols', grid.length);
        for (let cellRow of grid.cells) {
            for (let cell of cellRow) {
                let htmlCell = document.createElement('div')
                console.log(cellRow[cell])
                htmlCell.innerText = cell.value
                htmlCell.className ='cell-item'
                container.appendChild(htmlCell)
            }
        }
    }

    DeleteGrid() {
        let container = document.getElementById('container')
        container.innerHTML = ''  
    }
}